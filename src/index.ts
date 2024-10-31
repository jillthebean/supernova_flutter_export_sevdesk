import { Supernova, PulsarContext, RemoteVersionIdentifier, AnyOutputFile } from "@supernovaio/sdk-exporters"
import { ExporterConfiguration } from "../config"
import { fetchTokenData, processTokenData } from "./token_export"
import { fetchAssets } from "./asset_export"
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
  return await fetchAssets(sdk, context, remoteVersionIdentifier);
  // const data = await fetchTokenData(sdk, context, remoteVersionIdentifier);

  // return processTokenData(data);
})
/** Exporter configuration. Adheres to the `ExporterConfiguration` interface and its content comes from the resolved default configuration + user overrides of various configuration keys */
export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>()
