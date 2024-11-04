import { FileHelper, NamingHelper, StringCase } from "@supernovaio/export-helpers";
import { AnyOutputFile, AssetFormat, AssetScale, RemoteVersionIdentifier, RenderedAsset, Supernova } from "@supernovaio/sdk-exporters";


type DownloadSpec = {
  relativePath: string,
  url: string,
  fileName: string,
}

export async function fetchAssets(
  sdk: Supernova,
  basePath: string,
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

  let downloadSpecs = downloads.map((asset) => getDownloadSpec(asset, basePath));

  let paths = new Set<string>()
  downloadSpecs = downloadSpecs.map((curr) => {
    if (paths.has(curr.fileName)) {
      console.log("Duplicate found: " + curr.relativePath.split(basePath)[0] + curr.fileName);
      curr.fileName = curr.fileName.split('.svg')[0] + '_1.svg'
    }
    paths.add(curr.fileName)
    return curr
  });

  return downloadSpecs.map(FileHelper.createCopyRemoteFile);
}

function getDownloadSpec(asset: RenderedAsset, basePath: string): DownloadSpec {
  let folderName = ''
  if (asset.group.path.length >= 1) {
    folderName = NamingHelper.codeSafeVariableName(asset.group.path, StringCase.snakeCase)
    if (!folderName.endsWith("icons")) {
      folderName += "/" + NamingHelper.codeSafeVariableName(asset.group.name, StringCase.snakeCase)
    }
  } else {
    folderName = NamingHelper.codeSafeVariableName(asset.group.name, StringCase.snakeCase);
  }
  return {
    relativePath: basePath + folderName,
    fileName: NamingHelper.codeSafeVariableName(asset.originalName, StringCase.snakeCase) + '.svg',
    url: asset.sourceUrl,
  }
}