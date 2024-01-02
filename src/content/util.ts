import { NamingHelper, StringCase } from "@supernovaio/export-helpers";
import { ColorToken, Token, TokenGroup, TokenType } from "@supernovaio/sdk-exporters";

// semantic tokens reference primitive tokens
// therefore a primitive token is a token 
// with an null referenceTokenId
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

export type ReferenceHelper = ReturnType<typeof referenceHelper>

function generateTokenVariableName(token: Token, parent: TokenGroup, prefix: string | null) {
    if (token.tokenType == TokenType.color && !isNaN(parseInt(token.name))) {
        // we have a shade, as those token are color tokens with names consisting only of digits
        return tokenShadeName(token as ColorToken, parent);
    }
    return NamingHelper.codeSafeVariableNameForToken(token, StringCase.camelCase, parent, prefix);
}

export function referenceHelper(tokens: Token[], groups: TokenGroup[]) {
    var tokenToVariableName = new Map<string, string>();
    var tokenToClassName = new Map<string, string>

    function resolveTokenVariableName(token: Token, className: string, prefix?: string): string {
        let name = tokenToVariableName[token.id];
        if (!tokenToVariableName.has(token.id)) {
            const parent = groups.find((group) => group.id === token.parentGroupId)!
            name = generateTokenVariableName(token, parent, prefix ?? null)
            // if a token is not referring to a primitive token
            // resolve the depenency and refer to the primitive token
            if ((token as ColorToken)?.value?.referencedTokenId) {
                const refId = (token as ColorToken).value.referencedTokenId as string;
                tokenToClassName[token.id] = tokenToClassName[refId]
                tokenToVariableName[token.id] = tokenToVariableName[refId]
            } else {
                tokenToClassName[token.id] = className
                tokenToVariableName[token.id] = name
            }
        }
        return name
    }

    function resolveTokenReference(referencedTokenId: string | null): string {
        if (!referencedTokenId) {
            return 'null';
        }
        let reference = tokenToVariableName[referencedTokenId]!;
        let className = tokenToClassName[referencedTokenId]!;
        return className + "." + reference;
    }

    function getTokensForType<T extends Token>(tokenType: TokenType) {
        return tokens.filter((t) => t.tokenType === tokenType) as T[];
    }

    function getGroupsForType(tokenType: TokenType) {
        return groups.filter((t) => t.tokenType === tokenType);
    }

    function getUnprocessedTokensForType<T extends Token>(tokenType: TokenType) {
        return tokens.filter((t) => t.tokenType === tokenType && !(t.id in tokenToVariableName)) as T[];
    }

    return {
        resolveTokenVariableName,
        resolveTokenReference,
        getTokensForType,
        getGroupsForType,
        getUnprocessedTokensForType,
    }
}