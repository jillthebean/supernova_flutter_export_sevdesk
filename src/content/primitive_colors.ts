import { ColorToken, TokenGroup, TokenType } from "@supernovaio/sdk-exporters";
import { PrimitiveColorsTemplateData } from "src/templates/primitive_colors.template";
import { ReferenceHelper, flutterColorValue, groupVariableName } from "./util";

const className = "ColorPrimitives"

export function createPrimitiveColors(helper: ReferenceHelper):
  PrimitiveColorsTemplateData {
  const colorTokens: ColorToken[] = helper.getTokensForType<ColorToken>(TokenType.color);
  const tokenGroups: TokenGroup[] = helper.getGroupsForType(TokenType.color);
  // Convert all color tokens to CSS variables
  const colorSwatchGroups = tokenGroups
    .filter((t) => t.tokenType === TokenType.color && t.childrenIds.length == 16);

  const mappedTokens = {} as Map<string, string>;

  let swatches = colorSwatchGroups.reduce<Map<string, Map<string, string>>>((prev, group) => {
    const name = groupVariableName(group);
    prev[name] = colorTokens.filter(x => group.id == x.parentGroupId).reduce(
      (prev, curr) => {
        prev[curr.name] = flutterColorValue(curr)
        mappedTokens[curr.id] = helper.resolveTokenVariableName(curr, className);
        return prev;
      }, {}
    )
    return prev;
  }, {} as Map<string, Map<string, string>>)

  const colorPrimitives = colorTokens.filter(e => !(e.id in mappedTokens) && !e.value.referencedTokenId)
  let colors = {} as Map<string, string>;

  for (let primitiveColor of colorPrimitives) {
    const name = helper.resolveTokenVariableName(primitiveColor, className);
    colors[name] = flutterColorValue(primitiveColor);
    mappedTokens[primitiveColor.id] = className + "." + name;
  }
  return {
    className,
    swatches,
    colors
  };
}
