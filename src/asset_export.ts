import { NamingHelper, NetworkHelper, StringCase } from "@supernovaio/export-helpers";
import { Asset, AssetFormat, AssetScale, PulsarContext, RemoteVersionIdentifier, RenderedAsset, Supernova } from "@supernovaio/sdk-exporters";
import svg2ttf = require("svg2ttf");
import SVGIcons2SVGFontStream = require("svgicons2svgfont");

export async function fetchAssetData(
  sdk: Supernova,
  context: PulsarContext,
  remoteVersionIdentifier: RemoteVersionIdentifier,
) {
  var assets = await sdk.assets.getAssets(remoteVersionIdentifier);
  var assetGroups = await sdk.assets.getAssetGroups(remoteVersionIdentifier);

  var renderedAssets = await sdk.assets.getRenderedAssets(
    remoteVersionIdentifier,
    assets,
    assetGroups,
    AssetFormat.svg,
    AssetScale.x1
  )
  console.log("done with supernova assets")
  var codepoints = buildCodepoints(assets);
  console.log("codepoints built")
  var svgFont = await buildSVGFontStream(sdk, codepoints, renderedAssets);
  console.log("svg font built")
  var otfFont = svg2ttf(svgFont, {})
  console.log("ttf built")

  return otfFont;
}

type CodepointsMap = { [key: string]: number };
type GlyphBuffer = ArrayBuffer & { metadata?: any };

function buildCodepoints(assets: Asset[]): CodepointsMap {
  return assets.reduce((codepoints, cur, idx) => {
    codepoints[cur.id] = idx;
    return codepoints;
  }, {} as CodepointsMap)
}

async function buildSVGFontStream(
  sdk: Supernova,
  codepoints: CodepointsMap,
  assets: RenderedAsset[],
): Promise<string> {
  // let font = Buffer.alloc(0);

  console.log("buffer is alive")
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'sevIcons',
    fontHeight: 24,
  })
    // .on('data', data => (font = Buffer.concat([font, data])));
  console.log("stream is alive")


  for (let asset of assets) {
    const glyphBuffer: GlyphBuffer = await NetworkHelper.fetchAsData(sdk, asset.sourceUrl);
    const unicode = String.fromCharCode(codepoints[asset.assetId]);
    const name = NamingHelper.codeSafeVariableName(asset.asset.name, StringCase.camelCase);
    // TODO convery glyphbuffer to stream
    glyphBuffer.metadata = {
      name,
      unicode
    };
    console.log("writing to stream alive")
    fontStream.write(glyphBuffer)
  }
  console.log("closing stream")
  fontStream.end()
  // return font.toString();
  return "xd";
}