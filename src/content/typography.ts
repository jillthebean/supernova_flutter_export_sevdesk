import { FontSizeTokenValue, LetterSpacingTokenValue, LineHeightTokenValue, TokenType, TypographyToken, TypographyTokenValue, Unit } from "@supernovaio/sdk-exporters";
import { FontFamilyTokenValue, FontWeightTokenValue, TextDecorationTokenValue } from "@supernovaio/sdk-exporters/build/sdk-typescript/src/model/tokens/SDKTokenValue";
import { FontDescription, TypographyTemplateData } from "src/templates/typography.template";
import { ReferenceHelper } from "../util";

const className = "OffenburgTypography";

export function createTypography(
  helper: ReferenceHelper,
): TypographyTemplateData {
  const typoTokens = helper.getTokensForType<TypographyToken>(TokenType.typography);
  var typographies = new Map<string, FontDescription>();
  for (let typoToken of typoTokens) {
    const variableName = helper.resolveTypoTokenVariableName(typoToken, className);
    // if (variableName.toLowerCase().indexOf("desktop") != -1) continue;
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
  const fontSize = value.fontSize.measure;
  return {
    lineHeight: mapMeasurementProp(value.lineHeight, helper, fontSize),
    fontSize: mapMeasurementProp(value.fontSize, helper, fontSize),
    fontFamily: mapFontFamily(value.fontFamily, value.fontWeight, helper),
    fontWeight: mapFontWeight(value.fontWeight, helper),
    letterSpacing: mapMeasurementProp(value.letterSpacing, helper, fontSize),
    decoration: mapFontDecorationProp(value.textDecoration, helper),
  };
}

type FontProp = LineHeightTokenValue | FontSizeTokenValue | LetterSpacingTokenValue;

function mapMeasurementProp(prop: Pick<FontProp, "referencedTokenId" | "measure" | "unit"> | null, helper: ReferenceHelper, fontSize: number): string {
  if (!prop) {
    return 'null';
  }
  if (prop.referencedTokenId) {
    return helper.resolveTokenReference(prop.referencedTokenId)
  }
  if (prop.unit == Unit.percent) {
    return (fontSize / 100 * prop.measure).toFixed(2);
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

  return fontWeightMapping[prop.text.toLowerCase()] ?? 'FontWeight.w400';
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