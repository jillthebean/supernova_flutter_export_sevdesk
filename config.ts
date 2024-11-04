/**
 * Main configuration of the exporter - type interface.
 * Default values for it can be set through `config.json`
 * Users can override the behavior when creating the pipelines or by creating `config.local.json` file specifying actual values.
 */
export type ExporterConfiguration = {

  /** Where to export the tokens to relative to the given base path */
  tokensBasePath: string

  /** Where to export the assets to relative to the given base path */
  assetsBasePath: string,

}
