import { Supernova, PulsarContext, RemoteVersionIdentifier, AnyOutputFile, TokenType, Token, ColorToken, TokenGroup, TypographyToken } from "@supernovaio/sdk-exporters"
import { ExporterConfiguration } from "../config"
import { createPrimitiveColors } from "./content/primitive_colors"
import { createColors } from "./content/semantic_colors"
import { Eta } from "eta"
import { FileHelper } from "@supernovaio/export-helpers"
import { renderPrimitiveColors } from "./templates/primitive_colors.template"
import { renderColorScheme } from "./templates/color_scheme.template"
import { createTypography } from "./content/typography"
import { renderTypographyScheme } from "./templates/typography.template"
import { referenceHelper } from "./content/util"
import { createFontSizes, createGenericSpacings, createLetterSpacings, createLineHeights } from "./content/primitive_dimensions"
import { renderConstantsFile } from "./templates/constants.template"
import { createShadows } from "./content/shadows"
import { renderShadows } from "./templates/shadows.template"

/**
 * Export entrypoint.
 * When running `export` through extensions or pipelines, this function will be called.
 * Context contains information about the design system and version that is currently being exported.
 */
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  const [tokens, tokenGroups] = await fetchRemoteData(sdk, context);
  return processData(tokens, tokenGroups);
})

async function fetchRemoteData(sdk: Supernova, context: PulsarContext): Promise<[Token[], TokenGroup[]]> {
  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  }

  // Fetch the necessary data
  let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier)
  let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier)

  // Filter by brand, if specified by the VSCode extension or pipeline configuration
  if (context.brandId) {
    tokens = tokens.filter((token) => token.brandId === context.brandId)
    tokenGroups = tokenGroups.filter((tokenGroup) => tokenGroup.brandId === context.brandId)
  }

  // Apply theme, if specified by the VSCode extension or pipeline configuration
  if (context.themeId) {
    const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier)
    const theme = themes.find((theme) => theme.id === context.themeId)
    if (theme) {
      tokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [theme])
    } else {
      // Don't allow applying theme which doesn't exist in the system
      throw new Error("Unable to apply theme which doesn't exist in the system.")
    }
  }
  return [tokens, tokenGroups];
}

function processData(tokens: Token[], tokenGroups: TokenGroup[]) {
  const eta = new Eta({
    debug: true,
  });
  

  const helper = referenceHelper(tokens, tokenGroups);

  const primitiveTemplateData = createPrimitiveColors(helper);
  const semanticsColorData = createColors(helper);
  const shadowsData = createShadows(helper);

  const fontSizesData = createFontSizes(helper);
  const lineHeightData = createLineHeights(helper);
  const letterSpacingData = createLetterSpacings(helper);
  const spacingData = createGenericSpacings(helper);

  const typographyTemplateData = createTypography(helper);
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
  ]
}

/** Exporter configuration. Adheres to the `ExporterConfiguration` interface and its content comes from the resolved default configuration + user overrides of various configuration keys */
export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>()
