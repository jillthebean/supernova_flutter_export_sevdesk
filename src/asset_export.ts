import { FileHelper } from "@supernovaio/export-helpers";
import { AnyOutputFile, AssetFormat, AssetScale, PulsarContext, RemoteVersionIdentifier, RenderedAsset, Supernova } from "@supernovaio/sdk-exporters";


export async function fetchAssets(
  sdk: Supernova,
  context: PulsarContext,
  remoteVersionIdentifier: RemoteVersionIdentifier,
): Promise<Array<AnyOutputFile>> {
  let assetGroups = await sdk.assets.getAssetGroups(remoteVersionIdentifier);
  let assets = await sdk.assets.getAssets(remoteVersionIdentifier);
  let downloads = await sdk.assets.getRenderedAssets(
    remoteVersionIdentifier,
    assets,
    assetGroups,
    AssetFormat.svg,
    AssetScale.x1,
  )

  downloads = downloads.slice(0, 10);

  return downloads.map(downloadToFile);
}

function downloadToFile(asset: RenderedAsset): AnyOutputFile {
  return FileHelper.createCopyRemoteFile({
    relativePath: './assets/icons',
    fileName: asset.fileName,
    url: asset.sourceUrl
  });
}