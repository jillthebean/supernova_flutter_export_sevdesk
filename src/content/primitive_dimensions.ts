import { DimensionToken, FontSizeToken, LetterSpacingToken, LineHeightToken, SpaceToken, Token, TokenType } from "@supernovaio/sdk-exporters";
import { ConstantsTemplate } from "src/templates/constants.template";
import { ReferenceHelper } from "./util";

type ConstantsDescription<T extends Token> = {
    className: string,
    typeName: string,
    tokenType: TokenType,
    prefix?: string,
    resolveValue: (token: T) => string
}

function createConstants<T extends Token>(helper: ReferenceHelper, desc: ConstantsDescription<T>) {
    const tokens = helper.getTokensForType<T>(desc.tokenType);
    return {
      className: desc.className,
      typeName: desc.typeName,
      variables: tokens.reduce((prev, curr) => {
        let name = helper.resolveTokenVariableName(curr, desc.className, desc.prefix)
        prev[name] = desc.resolveValue(curr);
        return prev
      }, new Map<string,string>)
    };
}

const fontSizesDescription: ConstantsDescription<FontSizeToken> = {
    className: "OffenburgFontSizes",
    typeName: "double",
    tokenType: TokenType.fontSize,
    prefix: 'f',
    resolveValue: (token) => `${token.value.measure}`
}

export function createFontSizes(helper: ReferenceHelper,): ConstantsTemplate {
    return createConstants(helper, fontSizesDescription);
}

const lineHeightsDescription: ConstantsDescription<LineHeightToken> = {
    className: "OffenburgLineHeights",
    typeName: "double",
    tokenType: TokenType.lineHeight,
    prefix: 'l',
    resolveValue: (token) => `${token.value.measure}`
}

export function createLineHeights(helper: ReferenceHelper,): ConstantsTemplate {
    return createConstants(helper, lineHeightsDescription);
}

const letterSpacingDescription: ConstantsDescription<LetterSpacingToken> = {
    className: "OffenburgLetterSpacings",
    typeName: "double",
    tokenType: TokenType.letterSpacing,
    resolveValue: (token) => `${token.value.measure}`
}

export function createLetterSpacings(helper: ReferenceHelper,): ConstantsTemplate {
    return createConstants(helper, letterSpacingDescription);
}

const genericSpacingDescription: ConstantsDescription<DimensionToken> = {
    className: "OffenburgGenericSpacings",
    typeName: "double",
    tokenType: TokenType.dimension,
    resolveValue: (token) => `${token.value.measure}`
}

export function createGenericSpacings(helper: ReferenceHelper,): ConstantsTemplate {
    return createConstants(helper, genericSpacingDescription);
}