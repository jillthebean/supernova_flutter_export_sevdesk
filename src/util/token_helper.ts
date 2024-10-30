import { NamingHelper, StringCase } from "@supernovaio/export-helpers"
import { ColorToken, Token, TokenGroup } from "@supernovaio/sdk-exporters"

export type TokenData = {
  tokens: Array<Token>
  tokenGroups: Array<TokenGroup>
  themeTokens: Record<string, Token[]>
}

export function isPrimitive(token: Token): boolean {
  if (!("value" in token)) return true
  if (!("referenceTokenId" in (token as ColorToken))) return true
  return (token as ColorToken).value.referencedTokenId == null
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