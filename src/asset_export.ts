import { NamingHelper, StringCase } from "@supernovaio/export-helpers";
import { ICONS_CODEPOINTS } from "./content/icons_data";
import { IconsTemplateData } from "./templates/icons.template";

export function processAssetData(): IconsTemplateData {
  let data: IconsTemplateData = {
    className: 'SevIcons',
    fontFamily: 'SevIcons',
    variables: {}
  }
  for (let key in ICONS_CODEPOINTS) {
    let name = NamingHelper.codeSafeVariableName(key, StringCase.camelCase);
    if (name.startsWith("_")) {
      name = "i" + name.slice(1);
    }
    data.variables[name] = parseInt(ICONS_CODEPOINTS[key]).toString(16);
  }
  return data;
}
