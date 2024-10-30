import { ColorToken, Token, TokenType } from "@supernovaio/sdk-exporters";
import { ColorSchemeTemplateData } from "src/templates/color_scheme.template";
import { ReferenceHelper, isPrimitive } from "../util";

const className = "OffenburgColorScheme";

export function createColors(helper: ReferenceHelper, themeData: Record<string, Token[]>): ColorSchemeTemplateData {
  // Convert all color tokens to CSS variables
  const colorTokens = helper.getUnprocessedTokensForType<ColorToken>(TokenType.color)
  const semanticColorTokens = colorTokens.filter(isPrimitive);
  const colorVariables = semanticColors(semanticColorTokens, helper)

  let themes = {
    "light": colorVariables
  }

  for (var themeName in themeData) {
    const tokens = themeData[themeName];
    const themeColorTokens = tokens.filter(x => semanticColorTokens.some(y => y.id == x.id)) as ColorToken[];
    themes[themeName] = semanticColors(themeColorTokens, helper);
  }

  return {
    className,
    colors: Object.keys(colorVariables),
    themes,
  };
}

function semanticColors(colorTokens: ColorToken[], helper: ReferenceHelper): Map<string, string> {
  const variableNames = new Map<string, string>();
  for (let token of colorTokens) {
    const name = helper.resolveTokenVariableName(token, className);

    if (variableNames.has(name)) {
      continue;
    }
    variableNames[name] = helper.resolveTokenReference(token.value.referencedTokenId!);
  }
  return variableNames;
}
