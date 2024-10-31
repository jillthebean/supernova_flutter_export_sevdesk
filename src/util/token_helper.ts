import { NamingHelper, StringCase } from "@supernovaio/export-helpers"
import { ColorToken, Token, TokenGroup } from "@supernovaio/sdk-exporters"

export type TokenData = {
  tokens: Array<Token>
  tokenGroups: Array<TokenGroup>
  themeTokens: Record<string, Token[]>
}

let _primaryCollection: string | undefined = undefined;
export function isPrimitive(token: Token): boolean {
  if (token.propertyValues["Collection"]) {
    if (_primaryCollection == undefined) {
      const collections = token.properties.find((x) => x.codeName == "Collection")
      const primitiveCollection = collections?.options?.find((x) => x.name == "Primitive Tokens")
      _primaryCollection = primitiveCollection?.id;
    }
  }
  return token.propertyValues["Collection"] == _primaryCollection;
}

export function isSemantic(token: Token): boolean {
  return !isPrimitive(token)
}

export function tokenVariableName(token: Token, parent: TokenGroup, prefix = "color"): string {
  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.camelCase, parent, prefix)
}

export function groupVariableName(group: TokenGroup): string {
  return NamingHelper.codeSafeVariableName(["color", group.name], StringCase.camelCase,)
}

export function flutterColorValue(token: ColorToken) {
  const hex = token.toHex8();
  const alpha = hex.slice(7, 9).toUpperCase();
  const rgb = hex.slice(1, 7).toUpperCase();
  return `Color(0x${alpha}${rgb})`;
}

export function tokenShadeName(token: ColorToken, tokenGroup: TokenGroup) {
  return NamingHelper.codeSafeVariableName(['color', tokenGroup.name], StringCase.camelCase) + `.shade${token.name}`;
}