import { ShadowToken, TokenType } from "@supernovaio/sdk-exporters";
import { ShadowData, ShadowTemplate } from "src/templates/shadows.template";
import { ReferenceHelper } from "../util";

const className = "OffenburgShadows";

export function createShadows(helper: ReferenceHelper,): ShadowTemplate {
    // Convert all color tokens to CSS variables
    const tokens = helper.getUnprocessedTokensForType<ShadowToken>(TokenType.shadow)
    const variables = processShadows(tokens, helper);

    return {
        className,
        variables,
    };
}

function processShadows(tokens: ShadowToken[], helper: ReferenceHelper): Map<string, ShadowData> {
    const variableNames = new Map<string, ShadowData>();
    for (let token of tokens) {
        const name = helper.resolveTokenVariableName(token, className);

        if (variableNames.has(name)) {
            continue;
        }
        variableNames[name] = mapShadowValue(token);
    }
    return variableNames;
}

function mapShadowValue(token: ShadowToken): ShadowData {
    const blurRadius = token.value.map(x => x.radius).reduce((a, b) => a + b, 0);
    const offsetX = token.value.map(x => x.x).reduce((a, b) => a + b, 0);
    const offsetY = token.value.map(x => x.y).reduce((a, b) => a + b, 0);
    const spreadRadius = token.value.map(x => x.spread).reduce((a, b) => a + b, 0);
    const color = token.value.reduce((prev, curr) => ({
        a: prev.a + curr.opacity!.measure,
        r: prev.r + curr.color.color.r,
        g: prev.g + curr.color.color.g,
        b: prev.b + curr.color.color.b,
    }), {
        a: .0,
        r: 0,
        g: 0,
        b: 0
    });
    return {
        blurRadius: `${blurRadius}`,
        offsetX: `${offsetX}`,
        offsetY: `${offsetY}`,
        spreadRadius: `${spreadRadius}`,
        blurStyle: `BlurStyle.inner`, // TODO how to implement drop shadow?
        color: convertARGBToFlutter(color.a, color.r, color.g, color.b),
    };
}

function padHexNumberTo2Digits(a: string): string {
    if (a.length == 0) return "00";
    if (a.length == 1) return "0" + a;
    return a;
}

// opacity as percent (0 - 1)
// r,g,b, as values from 0 - 255
function convertARGBToFlutter(opacity: number, red: number, green: number, blue: number): string {
    let a = Math.round(opacity * 255).toString(16);
    let r = red.toString(16);
    let g = green.toString(16);
    let b = blue.toString(16);
    a = padHexNumberTo2Digits(a)
    r = padHexNumberTo2Digits(r)
    g = padHexNumberTo2Digits(g)
    b = padHexNumberTo2Digits(b)
    return `Color(0x${a + r + g + b})`;
}