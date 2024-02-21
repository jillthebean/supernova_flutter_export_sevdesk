import { FileHelper } from "@supernovaio/export-helpers"
import { PulsarContext, RemoteVersionIdentifier, Supernova, Token, TokenGroup } from "@supernovaio/sdk-exporters"
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

export async function fetchTokenData(
  sdk: Supernova,
  context: PulsarContext,
  remoteVersionIdentifier: RemoteVersionIdentifier,
): Promise<[Token[], TokenGroup[], Record<string, Token[]>]> {
  // Fetch the necessary data
  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier)
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier)

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (context.brandId) {
    tokens = tokens.filter((token) => token.brandId === context.brandId)
    tokenGroups = tokenGroups.filter((tokenGroup) => tokenGroup.brandId === context.brandId)
  }

  // Apply theme, if specified by the VSCode extension or pipeline configuration
  let themeTokens: Record<string, Token[]> = {}
  const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier)
  themeTokens["webDefault"] = tokens;
  for (const theme of themes) {
    const currentTokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [theme]);
    if (theme.codeName == "mobile") {
      tokens = currentTokens
    }
    themeTokens[theme.codeName] = currentTokens;
  }
  return [tokens, tokenGroups, themeTokens];
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
