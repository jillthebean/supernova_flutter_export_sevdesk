import { FileHelper } from "@supernovaio/export-helpers"
import { Brand, PulsarContext, RemoteVersionIdentifier, Supernova, Token, TokenGroup, TokenTheme } from "@supernovaio/sdk-exporters"
import { Eta } from "eta"
import { createPrimitiveColors } from "./content/primitive_colors"
import { createFontSizes, createGenericSpacings, createLetterSpacings, createLineHeights } from "./content/primitive_dimensions"
import { createColors } from "./content/semantic_colors"
import { createShadows } from "./content/shadows"
import { createTypography } from "./content/typography"
import { referenceHelper } from "./content/util"
import { renderColorScheme } from "./templates/color_scheme.template"
import { renderConstantsFile } from "./templates/constants.template"
import { renderPrimitiveColors } from "./templates/primitive_colors.template"
import { renderShadows } from "./templates/shadows.template"
import { renderTypographyScheme } from "./templates/typography.template"

type TokenData = {
  tokens: Array<Token>
  tokenGroups: Array<TokenGroup>
  themeTokens: Record<string, Token[]>
}

export async function fetchTokenData(
  sdk: Supernova,
  context: PulsarContext,
  remoteVersionIdentifier: RemoteVersionIdentifier,
): Promise<[Token[], TokenGroup[], Record<string, Token[]>]> {
  // Fetch the necessary data
  let data = {
    tokens: await sdk.tokens.getTokens(remoteVersionIdentifier),
    tokenGroups: await sdk.tokens.getTokenGroups(remoteVersionIdentifier),
    themeTokens: {},
  };

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (context.brandId) {
    const brands = await sdk.brands.getBrands(remoteVersionIdentifier)
    data = applyBrand(data, context.brandId, brands)
  }

  // Apply theme, if specified by the VSCode extension or pipeline configuration
  let themeTokens: Record<string, Token[]> = {}
  const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier)
  data = await applyThemes(sdk, data, themes, context.themeIds);
  return [data.tokens, data.tokenGroups, data.themeTokens];
}

function applyBrand(tokenData: TokenData, brandId: string, brands: Array<Brand>): TokenData {
  const brand = brands.find((brand) => brand.id === brandId || brand.idInVersion === brandId)
  if (!brand) {
    throw new Error(`Unable to find brand ${brandId}.`)
  }
  tokenData.tokens = tokenData.tokens.filter((token) => token.brandId === brand.id);
  tokenData.tokenGroups = tokenData.tokenGroups.filter((token) => token.brandId === brand.id);
  return tokenData;
}

async function applyThemes(
  sdk: Supernova, tokenData: TokenData, themes: Array<TokenTheme>, themeIds: string[] | null,
): Promise<TokenData> {
  let themesToApply = themes;
  tokenData.themeTokens["webDefault"] = tokenData.tokens;
  if (themeIds != null && themeIds.length > 0) {
    themesToApply = themeIds.map((themeId) => {
      const theme = themes.find((theme) => theme.id === themeId || theme.idInVersion === themeId)
      if (!theme) {
        throw new Error(`Unable to find theme ${themeId}.`)
      }
      return theme
    })
  }
  let mobileTokens = tokenData.tokens;
  for (const theme of themes) {
    const currentTokens = await sdk.tokens.computeTokensByApplyingThemes(tokenData.tokens, tokenData.tokens, [theme],);
    if (theme.codeName == "mobile") {
      mobileTokens = currentTokens
    }

    const improvedCodeName = 'sev' + theme.codeName.charAt(0).toUpperCase() + theme.codeName.slice(1)
    tokenData.themeTokens[improvedCodeName] = currentTokens;
  }
  tokenData.tokens = mobileTokens;
  return tokenData;
}


export function processTokenData(tokens: Token[], tokenGroups: TokenGroup[], themes: Record<string, Token[]>) {
  const eta = new Eta({
    debug: true,
  });


  const helper = referenceHelper(tokens, tokenGroups);

  const primitiveTemplateData = createPrimitiveColors(helper);
  const semanticsColorData = createColors(helper, themes);
  const shadowsData = createShadows(helper);

  const fontSizesData = createFontSizes(helper);
  const lineHeightData = createLineHeights(helper);
  const letterSpacingData = createLetterSpacings(helper);
  const spacingData = createGenericSpacings(helper);

  const typographyTemplateData = createTypography(helper);

  // const iconsData = processAssetData();
  return [
    FileHelper.createTextFile({
      relativePath: "./src/colors",
      fileName: "primitive_colors.dart",
      content: renderPrimitiveColors(eta, primitiveTemplateData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/colors",
      fileName: "color_scheme.dart",
      content: renderColorScheme(eta, semanticsColorData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/shadows",
      fileName: "shadows.dart",
      content: renderShadows(eta, shadowsData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/typography",
      fileName: "line_heights.dart",
      content: renderConstantsFile(eta, lineHeightData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/typography",
      fileName: "font_sizes.dart",
      content: renderConstantsFile(eta, fontSizesData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/typography",
      fileName: "letter_spacings.dart",
      content: renderConstantsFile(eta, letterSpacingData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/dimensions",
      fileName: "spacings.dart",
      content: renderConstantsFile(eta, spacingData),
    }),
    FileHelper.createTextFile({
      relativePath: "./src/typography",
      fileName: "typography.dart",
      content: renderTypographyScheme(eta, typographyTemplateData),
    }),
    // TODO add icons as PNGs again with proper assets paths in SevIcons
    // FileHelper.createTextFile({
    //   relativePath: "./src/icons",
    //   fileName: "icons.dart",
    //   content: renderIconsFile(eta, iconsData),
    // }),
  ]
}
