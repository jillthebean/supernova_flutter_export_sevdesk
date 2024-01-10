import { AnyOutputFile, PulsarContext, RemoteVersionIdentifier, Supernova } from "@supernovaio/sdk-exporters"
import { ExporterConfiguration } from "../config"
import { fetchTokenData, processTokenData } from "./token_export"
import { fetchAssetData } from "./asset_export"
import { FileHelper } from "@supernovaio/export-helpers"
/**
 * Export entrypoint.
 * When running `export` through extensions or pipelines, this function will be called.
 * Context contains information about the design system and version that is currently being exported.
 */
Pulsar.export(async (sdk: Supernova, context: PulsarContext): Promise<Array<AnyOutputFile>> => {
  // Fetch data from design system that is currently being exported (context)
  const remoteVersionIdentifier: RemoteVersionIdentifier = {
    designSystemId: context.dsId,
    versionId: context.versionId,
  }
  console.log("hey")
  const otfFont = await fetchAssetData(sdk, context, remoteVersionIdentifier);

  // return [
  //   FileHelper.createBinaryFile({
  //     relativePath: "./src/fonts/",
  //     fileName: "sev_icons.ttf",
  //     data: otfFont.buffer
  //   })
  // ]

  const [tokens, tokenGroups, themes] = await fetchTokenData(sdk, context, remoteVersionIdentifier);

  return processTokenData(tokens, tokenGroups, themes);
})
/** Exporter configuration. Adheres to the `ExporterConfiguration` interface and its content comes from the resolved default configuration + user overrides of various configuration keys */
export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>()
