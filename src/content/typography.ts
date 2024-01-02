import { FontSizeTokenValue, LetterSpacingTokenValue, LineHeightTokenValue, TokenType, TypographyToken, TypographyTokenValue } from "@supernovaio/sdk-exporters";
import { FontFamilyTokenValue, FontWeightTokenValue, TextDecorationTokenValue } from "@supernovaio/sdk-exporters/build/sdk-typescript/src/model/tokens/SDKTokenValue";
import { FontDescription, TypographyTemplateData } from "src/templates/typography.template";
import { ReferenceHelper } from "./util";

const className = "OffenburgTypography";

export function createTypography(
  helper: ReferenceHelper,
): TypographyTemplateData {
  const typoTokens = helper.getTokensForType<TypographyToken>(TokenType.typography);
  var typographies = new Map<string, FontDescription>();
  for (let typoToken of typoTokens) {
    const variableName = helper.resolveTokenVariableName(typoToken, className);
    typographies[variableName] = tokenToFontDescription(typoToken.value, helper);
  }

  return {
    className,
    typographies
  };
}

function tokenToFontDescription(
  value: TypographyTokenValue,
  helper: ReferenceHelper
): FontDescription {
  return {
    lineHeight: mapFontSizeProp(value.lineHeight, helper),
    fontSize: mapFontSizeProp(value.fontSize, helper),
    fontFamily: mapFontFamily(value.fontFamily, value.fontWeight, helper),
    fontWeight: mapFontWeight(value.fontWeight, helper),
    letterSpacing: mapFontSizeProp(value.letterSpacing, helper),
    decoration: mapFontDecorationProp(value.textDecoration, helper),
  };
}

type FontProp = LineHeightTokenValue | FontSizeTokenValue | LetterSpacingTokenValue;

function mapFontSizeProp(prop: Pick<FontProp, "referencedTokenId" | "measure"> | null, helper: ReferenceHelper): string {
  if (!prop) {
    return 'null';
  }
  if (prop.referencedTokenId) {
    return helper.resolveTokenReference(prop.referencedTokenId)
  }
  return `${prop.measure}`;
}

function mapFontFamily(prop: FontFamilyTokenValue | null, weight: FontWeightTokenValue | null, helper: ReferenceHelper) {
  if (!prop) {
    return 'null';
  }
  if (prop.referencedTokenId) {
    return helper.resolveTokenReference(prop.referencedTokenId)
  }
  if (weight?.text) {
    return `${prop.text} ${weight.text}`;
  }
  return prop.text;
}

const fontWeightMapping = {
  'regular': 'FontWeight.w400',
  'medium': 'FontWeight.w500',
  'semibold': 'FontWeight.w600',
  '500': 'FontWeight.w500',
  '600': 'FontWeight.w600',
  '700': 'FontWeight.w700',
}

function mapFontWeight(prop: FontWeightTokenValue | null, helper: ReferenceHelper) {
  if (!prop) {
    return 'null';
  }
  if (prop.referencedTokenId) {
    return helper.resolveTokenReference(prop.referencedTokenId)
  }

  return fontWeightMapping[prop.text] ?? 'FontWeight.w400';
}

function mapFontDecorationProp(prop: TextDecorationTokenValue | null, helper: ReferenceHelper) {
  if (!prop) {
    return 'null';
  }
  if (prop.referencedTokenId) {
    return helper.resolveTokenReference(prop.referencedTokenId)
  }
  return `TextDecoration.${prop.value?.toLowerCase() ?? 'none'}`;
}