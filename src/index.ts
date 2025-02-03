import {
  AnyOutputFile,
  PulsarContext,
  RemoteVersionIdentifier,
  Supernova,
} from "@supernovaio/sdk-exporters";
import { ExporterConfiguration } from "../config";
import { fetchAssets } from "./asset_export";
import { fetchTokenData, processTokenData } from "./token_export";

/** Exporter configuration. Adheres to the `ExporterConfiguration` interface and its content comes from the resolved default configuration + user overrides of various configuration keys */
export const exportConfiguration = Pulsar.exportConfig<ExporterConfiguration>();

/**
 * Export entrypoint.
 * When running `export` through extensions or pipelines, this function will be called.
 * Context contains information about the design system and version that is currently being exported.
 */
Pulsar.export(
  async (
    sdk: Supernova,
    context: PulsarContext,
  ): Promise<Array<AnyOutputFile>> => {
    // Fetch data from design system that is currently being exported (context)
    const remoteVersionIdentifier: RemoteVersionIdentifier = {
      designSystemId: context.dsId,
      versionId: context.versionId,
    };
    let assetPath = fixBasePath(
      exportConfiguration.assetsBasePath,
      "./packages/application/sev_design_tokens/lib/src/",
    );
    const assets = await fetchAssets(sdk, assetPath, remoteVersionIdentifier);

    let tokenPath = fixBasePath(
      exportConfiguration.tokensBasePath,
      "./packages/application/sev_ui/assets/",
    );
    const data = await fetchTokenData(sdk, context, remoteVersionIdentifier);
    const tokens = await processTokenData(data, tokenPath);
    return [...assets, ...tokens];
  },
);

function fixBasePath(path: string, defaultPath: string): string {
  if (!path || path.trim().length === 0) {
    return defaultPath;
  }

  // Remove any leading 'packages/application/sev_design_tokens/lib/' if it exists
  const basePattern = "packages/application/sev_design_tokens/lib/";
  let fixedPath = path;

  // Remove duplicate base patterns
  while (fixedPath.includes(basePattern + basePattern)) {
    fixedPath = fixedPath.replace(basePattern + basePattern, basePattern);
  }

  // Ensure path starts with './'
  if (!fixedPath.startsWith("./")) {
    fixedPath = fixedPath.startsWith("/") ? "." + fixedPath : "./" + fixedPath;
  }

  // Ensure path ends with '/'
  if (!fixedPath.endsWith("/")) {
    fixedPath += "/";
  }

  return fixedPath;
}
