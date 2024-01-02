import { ColorToken, TokenType } from "@supernovaio/sdk-exporters";
import { ColorSchemeTemplateData } from "src/templates/color_scheme.template";
import { ReferenceHelper, isPrimitive } from "./util";

const className = "OffenburgColorScheme";

export function createColors(helper: ReferenceHelper,): ColorSchemeTemplateData {
    // Convert all color tokens to CSS variables
    const colorTokens = helper.getUnprocessedTokensForType<ColorToken>(TokenType.color)
    const colorVariables = semanticColors(colorTokens.filter(isPrimitive), helper)

    return {
      className,
      colors: Object.keys(colorVariables),
      themes: {
        "light": colorVariables
      }
    };
}

function semanticColors(colorTokens: ColorToken[], helper: ReferenceHelper): Map<string,string> {
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
