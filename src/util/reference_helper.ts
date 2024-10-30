import { NamingHelper, StringCase } from "@supernovaio/export-helpers";
import { ColorToken, Token, TokenGroup, TokenType, TypographyToken } from "@supernovaio/sdk-exporters";
import { tokenShadeName } from "./token_helper";


function generateTokenVariableName(token: Token, parent: TokenGroup, prefix: string | null) {
  if (token.tokenType == TokenType.color && !isNaN(parseInt(token.name))) {
      // we have a shade, as those token are color tokens with names consisting only of digits
      return tokenShadeName(token as ColorToken, parent);
  }
  return NamingHelper.codeSafeVariableNameForToken(token, StringCase.camelCase, parent, prefix);
}

const duplicateNamesMap = {
  'headingHeading': 'heading',
  'bodyBody': 'body',
}

function removeDuplicates(name: string): string {
  let newName = `${name}`
  for (let dup in duplicateNamesMap) {
      newName = newName.replaceAll(dup, duplicateNamesMap[dup]);
  }
  return newName;
}

export type ReferenceHelper = ReturnType<typeof referenceHelper>

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

    function resolveTypoTokenVariableName(token: TypographyToken, className: string, prefix?: string): string {
        let name = tokenToVariableName[token.id];
        if (!tokenToVariableName.has(token.id)) {
            const parent = groups.find((group) => group.id === token.parentGroupId)!
            name = generateTokenVariableName(token, parent, prefix ?? null)
            name = removeDuplicates(name);
            // if a token is not referring to a primitive token
            // resolve the depenency and refer to the primitive token
            tokenToClassName[token.id] = className
            tokenToVariableName[token.id] = name
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
        resolveTypoTokenVariableName,
        resolveTokenReference,
        getTokensForType,
        getGroupsForType,
        getUnprocessedTokensForType,
    }
}