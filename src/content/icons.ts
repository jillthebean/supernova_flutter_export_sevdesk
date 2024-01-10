import { AnyOutputFile, ColorToken, TokenGroup, TokenType } from "@supernovaio/sdk-exporters";
import { ReferenceHelper, flutterColorValue, groupVariableName } from "./util";
import { FileHelper } from "@supernovaio/export-helpers";
import { generateFonts, FontAssetType, OtherAssetType } from "fantasticon";

export async function createIconsFont(helper: ReferenceHelper):
  Promise<string | Buffer> {
  let result = await generateFonts({
    inputDir: "./tmp/icons",
    outputDir: "./tmp/fonts",
    name: 'icons',
    fontTypes: [FontAssetType.TTF],
    assetTypes: [],
    formatOptions: { json: { indent: 2 } },
    templates: {},
    pathOptions: {},
    codepoints: {},
    fontHeight: 300,
    round: undefined, // --
    descent: undefined, // Will use `svgicons2svgfont` defaults
    normalize: undefined, // --
    tag: 'i',
    prefix: 'icon',
  })
  return result.writeResults[0].content;
}
