/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@supernovaio/export-helpers/build/helpers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@supernovaio/export-helpers/build/helpers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

(()=>{"use strict";var e={639:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Iterators=void 0;const o=t(58);r.Iterators=class{static allTokenTypes(){return[o.TokenType.color,o.TokenType.typography,o.TokenType.dimension,o.TokenType.size,o.TokenType.space,o.TokenType.opacity,o.TokenType.fontSize,o.TokenType.lineHeight,o.TokenType.letterSpacing,o.TokenType.paragraphSpacing,o.TokenType.borderWidth,o.TokenType.radius,o.TokenType.duration,o.TokenType.zIndex,o.TokenType.shadow,o.TokenType.border,o.TokenType.gradient,o.TokenType.string,o.TokenType.productCopy,o.TokenType.fontFamily,o.TokenType.fontWeight,o.TokenType.textCase,o.TokenType.textDecoration,o.TokenType.visibility,o.TokenType.blur]}static allDimensionTokenTypes(){return[o.TokenType.dimension,o.TokenType.size,o.TokenType.space,o.TokenType.opacity,o.TokenType.fontSize,o.TokenType.lineHeight,o.TokenType.letterSpacing,o.TokenType.paragraphSpacing,o.TokenType.borderWidth,o.TokenType.radius,o.TokenType.duration,o.TokenType.zIndex]}static allStringTokenTypes(){return[o.TokenType.string,o.TokenType.productCopy,o.TokenType.fontFamily,o.TokenType.fontWeight]}static allOptionTokenTypes(){return[o.TokenType.textCase,o.TokenType.textDecoration,o.TokenType.visibility]}}},989:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.ColorFormat=void 0,(t=r.ColorFormat||(r.ColorFormat={})).rgb="rgb",t.rgba="rgba",t.smartRgba="smartRgba",t.hex6="hex6",t.hex8="hex8",t.hashHex6="hashHex6",t.hashHex8="hashHex8",t.smartHashHex="smartHashHex",t.smartHex="smartHex",t.hsl="hsl",t.hsla="hsla",t.smartHsla="smartHsla",t.smartUIColor="smartUIColor"},545:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.StringCase=void 0,(t=r.StringCase||(r.StringCase={})).camelCase="camelCase",t.capitalCase="capitalCase",t.constantCase="constantCase",t.dotCase="dotCase",t.headerCase="headerCase",t.noCase="noCase",t.paramCase="paramCase",t.pascalCase="pascalCase",t.pathCase="pathCase",t.sentenceCase="sentenceCase",t.snakeCase="snakeCase"},617:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.FileHelper=void 0;const o=t(58);r.FileHelper=class{static createCopyRemoteFile({relativePath:e,fileName:r,url:t}){return{path:e,name:r,type:o.OutputFileType.copyRemoteUrl,url:t}}static createTextFile({relativePath:e,fileName:r,content:t}){return{path:e,name:r,type:o.OutputFileType.text,content:t}}static createBinaryFile({relativePath:e,fileName:r,data:t}){return{path:e,name:r,type:o.OutputFileType.binary,data:t}}}},761:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.sureOptionalReference=void 0,r.sureOptionalReference=function(e,r,t=!0){if(!e||!t)return null;const o=r.get(e);if(!o)throw new Error(`Trying to retrieve unknown referenced token ${e}`);return o}},118:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.NetworkHelper=void 0,r.NetworkHelper=class{static async fetchAsText(e,r,t){return(await this.performFetch(e,r,t)).text()}static async fetchAsJSON(e,r,t){return(await this.performFetch(e,r,t)).json()}static async fetchAsData(e,r,t){return(await this.performFetch(e,r,t)).arrayBuffer()}static async performFetch(e,r,t){try{const o=await e.network.fetch(r,t);if(!o.ok)throw new Error(`Request failed with status ${o.status}, error: ${await o.text()}`);return o}catch(e){throw e}}}},771:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.CSSHelper=void 0;const o=t(58),a=t(761),n=t(952);r.CSSHelper=class{static tokenToCSS(e,r,t){switch(e.tokenType){case o.TokenType.color:return this.colorTokenValueToCSS(e.value,r,t);case o.TokenType.border:return this.borderTokenValueToCSS(e.value,r,t);case o.TokenType.gradient:return this.gradientTokenValueToCSS(e.value,r,t);case o.TokenType.dimension:case o.TokenType.size:case o.TokenType.space:case o.TokenType.opacity:case o.TokenType.fontSize:case o.TokenType.lineHeight:case o.TokenType.letterSpacing:case o.TokenType.paragraphSpacing:case o.TokenType.borderWidth:case o.TokenType.radius:case o.TokenType.duration:case o.TokenType.zIndex:return this.dimensionTokenValueToCSS(e.value,r,t);case o.TokenType.shadow:return this.shadowTokenValueToCSS(e.value,r,t);case o.TokenType.fontWeight:case o.TokenType.fontFamily:case o.TokenType.productCopy:case o.TokenType.string:return this.stringTokenValueToCSS(e.value,r,t);case o.TokenType.textCase:case o.TokenType.textDecoration:case o.TokenType.visibility:return this.optionTokenValueToCSS(e.value,r,t);case o.TokenType.blur:return this.blurTokenValueToCSS(e.value,r,t);case o.TokenType.typography:return this.typographyTokenValueToCSS(e.value,r,t);default:throw new o.UnreachableCaseError(e.tokenType,"Unsupported token type for transformation to CSS:")}}static colorTokenValueToCSS(e,r,t){return n.ColorHelper.formattedColorOrVariableName(e,r,t)}static borderTokenValueToCSS(e,r,t){const o=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);if(o)return t.tokenToVariableRef(o);const n=this.dimensionTokenValueToCSS(e.width,r,t),s=this.borderStyleToCSS(e.style),i=this.colorTokenValueToCSS(e.color,r,t);return this.borderPositionToCSS(e.position),`${n} ${s} ${i}`}static gradientTokenValueToCSS(e,r,t){return e.map((e=>this.gradientLayerToCSS(e,r,t))).join(", ")}static gradientLayerToCSS(e,r,t){const s=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);if(s)return t.tokenToVariableRef(s);let i="";switch(e.type){case o.GradientType.linear:i="linear-gradient(0deg, ";break;case o.GradientType.radial:i="radial-gradient(circle, ";break;case o.GradientType.angular:i="conic-gradient(";break;default:i="linear-gradient(0deg, "}return`${i}${e.stops.map((e=>`${this.colorTokenValueToCSS(e.color,r,t)} ${n.ColorHelper.roundToDecimals(100*e.position,t.decimals)}%`)).join(", ")})`}static dimensionTokenValueToCSS(e,r,t){const o=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);return o?t.tokenToVariableRef(o):`${n.ColorHelper.roundToDecimals(e.measure,t.decimals)}${this.unitToCSS(e.unit)}`}static shadowTokenValueToCSS(e,r,t){return e.map((e=>this.shadowLayerToCSS(e,r,t))).join(", ")}static shadowLayerToCSS(e,r,t){const n=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);return n?t.tokenToVariableRef(n):`${e.type===o.ShadowType.inner?"inset ":""}${e.x}px ${e.y}px ${e.radius}px ${e.spread}px ${this.colorTokenValueToCSS(e.color,r,t)}`}static stringTokenValueToCSS(e,r,t){const o=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);return o?t.tokenToVariableRef(o):`"${e.text}"`}static optionTokenValueToCSS(e,r,t){const o=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);return o?t.tokenToVariableRef(o):`"${e.value}"`}static blurTokenValueToCSS(e,r,t){const o=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);return o?t.tokenToVariableRef(o):`blur(${this.dimensionTokenValueToCSS(e.radius,r,t)})`}static typographyTokenValueToCSS(e,r,t){const n=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);if(n)return t.tokenToVariableRef(n);const s=(0,a.sureOptionalReference)(e.fontFamily.referencedTokenId,r,t.allowReferences),i=(0,a.sureOptionalReference)(e.fontWeight.referencedTokenId,r,t.allowReferences),l=(0,a.sureOptionalReference)(e.textDecoration.referencedTokenId,r,t.allowReferences),c=(0,a.sureOptionalReference)(e.textCase.referencedTokenId,r,t.allowReferences),T=s?t.tokenToVariableRef(s):e.fontFamily.text,p=i?t.tokenToVariableRef(i):e.fontWeight.text;l?t.tokenToVariableRef(l):e.textDecoration.value===o.TextDecoration.original&&this.textDecorationToCSS(e.textDecoration.value),c?t.tokenToVariableRef(c):e.textCase.value===o.TextCase.original&&this.textCaseToCSS(e.textCase.value);return`${e.textCase.value===o.TextCase.smallCaps?"small-caps ":""}${i?p:`"${p}"`} ${this.dimensionTokenValueToCSS(e.fontSize,r,t)}/${this.dimensionTokenValueToCSS(e.lineHeight,r,t)} ${s?T:`"${T}"`}`}static borderStyleToCSS(e){switch(e){case o.BorderStyle.dashed:return"dashed";case o.BorderStyle.dotted:return"dotted";case o.BorderStyle.solid:return"solid";case o.BorderStyle.groove:return"groove";default:return"solid"}}static borderPositionToCSS(e){switch(e){case o.BorderPosition.center:return"center";case o.BorderPosition.inside:return"inside";case o.BorderPosition.outside:default:return"outside"}}static unitToCSS(e){switch(e){case o.Unit.percent:return"%";case o.Unit.pixels:return"px";case o.Unit.rem:return"rem";case o.Unit.raw:return"";case o.Unit.ms:return"ms";default:return"px"}}static textCaseToCSS(e){switch(e){case o.TextCase.original:return"none";case o.TextCase.upper:return"uppercase";case o.TextCase.lower:return"lowercase";case o.TextCase.camel:case o.TextCase.smallCaps:return"capitalize"}}static textDecorationToCSS(e){switch(e){case o.TextDecoration.original:return"none";case o.TextDecoration.underline:return"underline";case o.TextDecoration.strikethrough:return"line-through"}}}},952:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.ColorHelper=void 0;const o=t(989),a=t(761);class n{static formattedColorOrVariableName(e,r,t){let n,s,i;const l=(0,a.sureOptionalReference)(e.referencedTokenId,r,t.allowReferences);if(l)n=t.tokenToVariableRef(l);else{const o=(0,a.sureOptionalReference)(e.color.referencedTokenId,r,t.allowReferences);o&&(s=t.tokenToVariableRef(o));const n=(0,a.sureOptionalReference)(e.opacity.referencedTokenId,r,t.allowReferences);n&&(i=t.tokenToVariableRef(n))}if(n)return n;if(!n&&!s&&!i)return this.formattedColor(e,t.colorFormat,t.decimals);switch(t.colorFormat){case o.ColorFormat.rgb:case o.ColorFormat.rgba:case o.ColorFormat.smartRgba:return this.colorToRgb(t.colorFormat,this.normalizedIntColor(e),e.opacity.measure,t.decimals,s,i);default:return this.formattedColor(e,t.colorFormat,t.decimals)}}static formattedColor(e,r,t=3){switch(r){case o.ColorFormat.hex6:case o.ColorFormat.hex8:case o.ColorFormat.hashHex6:case o.ColorFormat.hashHex8:case o.ColorFormat.smartHex:case o.ColorFormat.smartHashHex:return this.colorToHex(r,this.normalizedIntColor(e),e.opacity.measure);case o.ColorFormat.rgb:case o.ColorFormat.rgba:case o.ColorFormat.smartRgba:return this.colorToRgb(r,this.normalizedIntColor(e),e.opacity.measure,t,null,null);case o.ColorFormat.hsl:case o.ColorFormat.hsla:case o.ColorFormat.smartHsla:return this.colorToHsl(r,this.normalizedFractionalColor(e),e.opacity.measure,t);case o.ColorFormat.smartUIColor:return this.colorToUIColor(this.normalizedIntColor(e),e.opacity.measure,t)}}static colorToRgb(e,r,t,a,n,s){let i;return i=e===o.ColorFormat.rgba||e===o.ColorFormat.smartRgba&&t<1?`rgba(${n||`${r.r}, ${r.g}, ${r.b}`}, ${s||this.roundToDecimals(t,a)})`:`rgb(${n||`${r.r}, ${r.g}, ${r.b}`})`,i}static colorToHex(e,r,t){let a=`${this.pHex(r.r)}${this.pHex(r.g)}${this.pHex(r.b)}`;return(e===o.ColorFormat.hex8||e===o.ColorFormat.hashHex8||e===o.ColorFormat.smartHex&&t<1||e===o.ColorFormat.smartHashHex&&t<1)&&(a+=`${this.pHex(Math.round(255*t))}`),e!==o.ColorFormat.hashHex6&&e!==o.ColorFormat.hashHex8&&e!==o.ColorFormat.smartHashHex||(a=`#${a}`),a}static colorToHsl(e,r,t,a){const n=Math.max(r.r,r.g,r.b),s=Math.min(r.r,r.g,r.b);let i,l,c,T=(n+s)/2;if(n===s)i=l=0;else{const e=n-s;l=T>.5?e/(2-n-s):e/(n+s),n===r.r?i=(r.g-r.b)/e+(r.g<r.b?6:0):n===r.g?i=(r.b-r.r)/e+2:n===r.b&&(i=(r.r-r.g)/e+4),i/=6}return c=e===o.ColorFormat.hsla||e===o.ColorFormat.smartHsla&&t<1?`hsla(${Math.round(360*i)}%, ${Math.round(100*l)}%, ${Math.round(100*T)}%, ${this.roundToDecimals(t,a)})`:`hsl(${Math.round(360*i)}%, ${Math.round(100*l)}%, ${Math.round(100*T)}%)`,c}static colorToUIColor(e,r,t=3){let o=`UIColor(rgb: 0x${this.pHex(e.r)}${this.pHex(e.g)}${this.pHex(e.b)})`;return r<1&&(o+=`.withAlphaComponent(${r})`),o}static normalizedIntColor(e){return{r:Math.round(e.color.r),g:Math.round(e.color.g),b:Math.round(e.color.b)}}static normalizedFractionalColor(e,r=3){return{r:this.roundToDecimals(e.color.r/255,r),g:n.roundToDecimals(e.color.g/255,r),b:n.roundToDecimals(e.color.b/255,r)}}static roundToDecimals(e,r){const t=Math.pow(10,r),o=Math.round(e*t)/t;return parseFloat(o.toFixed(r))}static pHex(e){return e.toString(16).padStart(2,"0")}}r.ColorHelper=n},453:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.NamingHelper=void 0;const o=t(110),a=t(545);class n{static codeSafeVariableNameForToken(e,r,t,o){let a=[];return t&&(a=[...t.path],t.isRoot||a.push(t.name)),a.push(e.name),o&&o.length>0&&a.unshift(o),n.codeSafeVariableName(a,r)}static codeSafeVariableName(e,r){let t="string"==typeof e?e:e.join(" ");switch(t=t.replaceAll(/[^a-zA-Z0-9_-]/g,"_"),r){case a.StringCase.camelCase:t=(0,o.camelCase)(t);break;case a.StringCase.capitalCase:t=(0,o.capitalCase)(t);break;case a.StringCase.constantCase:t=(0,o.constantCase)(t);break;case a.StringCase.dotCase:t=(0,o.dotCase)(t);break;case a.StringCase.headerCase:t=(0,o.headerCase)(t);break;case a.StringCase.noCase:t=(0,o.noCase)(t);break;case a.StringCase.paramCase:t=(0,o.paramCase)(t);break;case a.StringCase.pascalCase:t=(0,o.pascalCase)(t);break;case a.StringCase.pathCase:t=(0,o.pathCase)(t);break;case a.StringCase.sentenceCase:t=(0,o.sentenceCase)(t);break;case a.StringCase.snakeCase:t=(0,o.snakeCase)(t)}return r!==a.StringCase.snakeCase&&r!==a.StringCase.constantCase&&(t=t.replaceAll("_","")),t.match(/^[^a-zA-Z]/)&&(t="_"+t),t}static nameAsCSSVarReference(e){return`var(--${e})`}static nameAsCSSVarDeclaration(e){return`--${e}`}}r.NamingHelper=n},58:e=>{e.exports=__webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js")},110:e=>{e.exports=__webpack_require__(/*! change-case */ "./node_modules/change-case/dist.es2015/index.js")}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.ColorFormat=e.StringCase=e.Iterators=e.CSSHelper=e.FileHelper=e.ColorHelper=e.NamingHelper=e.NetworkHelper=void 0;var r=t(118);Object.defineProperty(e,"NetworkHelper",{enumerable:!0,get:function(){return r.NetworkHelper}});var a=t(453);Object.defineProperty(e,"NamingHelper",{enumerable:!0,get:function(){return a.NamingHelper}});var n=t(952);Object.defineProperty(e,"ColorHelper",{enumerable:!0,get:function(){return n.ColorHelper}});var s=t(617);Object.defineProperty(e,"FileHelper",{enumerable:!0,get:function(){return s.FileHelper}});var i=t(771);Object.defineProperty(e,"CSSHelper",{enumerable:!0,get:function(){return i.CSSHelper}});var l=t(639);Object.defineProperty(e,"Iterators",{enumerable:!0,get:function(){return l.Iterators}});var c=t(545);Object.defineProperty(e,"StringCase",{enumerable:!0,get:function(){return c.StringCase}});var T=t(989);Object.defineProperty(e,"ColorFormat",{enumerable:!0,get:function(){return T.ColorFormat}})})();var a=exports;for(var n in o)a[n]=o[n];o.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var e={275:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsImageRefType=void 0,(o=t.DocsImageRefType||(t.DocsImageRefType={})).upload="Upload",o.asset="Asset",o.figmaFrame="FigmaFrame"},2695:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsLinkRefType=void 0,(o=t.DocsLinkRefType||(t.DocsLinkRefType={})).page="Page",o.pageHeading="pageHeading",o.group="Group",o.url="url"},3476:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyPageBlockShortcut=t.DocumentationLegacyPageBlockShortcutType=void 0,function(e){e.external="External",e.internal="Internal"}(o=t.DocumentationLegacyPageBlockShortcutType||(t.DocumentationLegacyPageBlockShortcutType={})),t.DocumentationLegacyPageBlockShortcut=class{constructor(e){var t;e.url?this.type=o.external:this.type=o.internal,this.title=this.shortcutTitleFromModel(e,this.type),this.description=this.shortcutDescriptionFromModel(e,this.type),this.previewUrl=this.shortcutPreviewUrlFromModel(e),this.type===o.internal&&(null===(t=e.documentationItemPreview)||void 0===t?void 0:t.valid)&&e.documentationItemId?this.internalId=e.documentationItemId:(this.internalId=null,this.type===o.external&&e.url?this.externalUrl=e.url:this.externalUrl=null)}shortcutTitleFromModel(e,t){var r,n,i,a,c;let l=null;return e.title&&e.title.trim().length>0?l=e.title:t===o.internal?l=null!==(n=null===(r=e.documentationItemPreview)||void 0===r?void 0:r.title)&&void 0!==n?n:null:t===o.external&&(l=null!==(c=null!==(a=null===(i=e.urlPreview)||void 0===i?void 0:i.title)&&void 0!==a?a:e.url)&&void 0!==c?c:null),l&&0!==l.trim().length?l:null}shortcutDescriptionFromModel(e,t){var r;let n=null;return e.description&&e.description.trim().length>0?n=e.description:t===o.external&&(n=null===(r=e.urlPreview)||void 0===r?void 0:r.description),n&&0!==n.trim().length?n:null}shortcutPreviewUrlFromModel(e){var t,o,r,n,i;return null!==(i=null!==(r=null!==(t=e.assetUrl)&&void 0!==t?t:null===(o=e.asset)||void 0===o?void 0:o.url)&&void 0!==r?r:null===(n=e.urlPreview)||void 0===n?void 0:n.thumbnailUrl)&&void 0!==i?i:null}}},4222:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.Alignment=void 0,(o=t.Alignment||(t.Alignment={})).left="Left",o.center="Center",o.stretch="Stretch"},1334:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.AssetFormat=void 0,(o=t.AssetFormat||(t.AssetFormat={})).png="png",o.pdf="pdf",o.svg="svg"},1940:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.AssetScale=void 0,(o=t.AssetScale||(t.AssetScale={})).x1="x1",o.x2="x2",o.x3="x3",o.x4="x4"},959:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.AssetScaleType=void 0,(o=t.AssetScaleType||(t.AssetScaleType={})).aspectFill="AspectFill",o.aspectFit="AspectFit"},9257:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.BlurType=void 0,(o=t.BlurType||(t.BlurType={})).layer="Layer",o.background="Background"},6675:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ALL_BORDER_POSITIONS=t.BorderPosition=void 0,function(e){e.inside="Inside",e.center="Center",e.outside="Outside"}(o=t.BorderPosition||(t.BorderPosition={})),t.ALL_BORDER_POSITIONS=[o.inside,o.center,o.outside]},6701:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ALL_BORDER_STYLES=t.BorderStyle=void 0,function(e){e.dashed="Dashed",e.dotted="Dotted",e.solid="Solid",e.groove="Groove"}(o=t.BorderStyle||(t.BorderStyle={})),t.ALL_BORDER_STYLES=[o.dashed,o.dotted,o.solid,o.groove]},829:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ImportWarningType=void 0,(o=t.ImportWarningType||(t.ImportWarningType={})).UnsupportedFill="UnsupportedFill",o.UnsupportedStroke="UnsupportedStroke",o.UnsupportedEffect="UnsupportedEffect",o.StyleNotApplied="StyleNotApplied",o.NoPublishedStyles="NoPublishedStyles",o.NoPublishedComponents="NoPublishedComponents",o.NoPublishedAssets="NoPublishedAssets",o.NoVersionFound="NoVersionFound",o.ComponentHasNoThumbnail="ComponentHasNoThumbnail",o.DuplicateImportedStyleId="DuplicateImportedStyleId",o.DuplicateImportedStylePath="DuplicateImportedStylePath",o.NoPublishedElements="NoPublishedElements"},3611:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.CustomDomainErrorCode=void 0,(o=t.CustomDomainErrorCode||(t.CustomDomainErrorCode={})).generalError="GeneralError",o.dnsNotConfigured="DNSNotConfigured",o.maintenance="Maintenance"},6530:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.CustomDomainState=void 0,(o=t.CustomDomainState||(t.CustomDomainState={})).initial="Initial",o.domainSetupInProgress="DomainSetupInProgress",o.domainSetupFailed="DomainSetupFailed",o.domainSetupsSucces="DomainSetupSuccess",o.sslSetupInProgress="SSLSetupInProgress",o.sslSetupFailed="SSLSetupFailed",o.sslSetupSuccess="SSLSetupSuccess"},4934:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockBehaviorDataType=void 0,(o=t.DocsBlockBehaviorDataType||(t.DocsBlockBehaviorDataType={})).item="Item",o.token="Token",o.asset="Asset",o.component="Component"},8081:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockBehaviorSelectionType=void 0,(o=t.DocsBlockBehaviorSelectionType||(t.DocsBlockBehaviorSelectionType={})).entity="Entity",o.group="Group",o.entityAndGroup="EntityAndGroup"},9534:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockImagePropertyAspectRatio=void 0,(o=t.DocsBlockImagePropertyAspectRatio||(t.DocsBlockImagePropertyAspectRatio={})).square="Square",o.landscape="Landscape",o.portrait="Portrait",o.wide="Wide"},1043:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemEntityType=void 0,(o=t.DocsBlockItemEntityType||(t.DocsBlockItemEntityType={})).token="Token",o.tokenGroup="TokenGroup",o.asset="Asset",o.assetGroup="AssetGroup",o.component="Component",o.componentGroup="ComponentGroup"},3947:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemPropertyOptionRenderingStyle=void 0,(o=t.DocsBlockItemPropertyOptionRenderingStyle||(t.DocsBlockItemPropertyOptionRenderingStyle={})).segmentedControl="SegmentedControl",o.toggleButton="ToggleButton",o.select="Select",o.checkbox="Checkbox"},4742:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemPropertyRichTextStyle=void 0,(o=t.DocsBlockItemPropertyRichTextStyle||(t.DocsBlockItemPropertyRichTextStyle={})).title1="Title1",o.title2="Title2",o.title3="Title3",o.title4="Title4",o.title5="Title5",o.quote="Quote",o.callout="Callout",o.ol="OL",o.ul="UL"},7825:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemPropertyTextStyle=void 0,(o=t.DocsBlockItemPropertyTextStyle||(t.DocsBlockItemPropertyTextStyle={})).small="Small",o.regular="Regular",o.bold="Bold"},6751:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemPropertyType=void 0,(o=t.DocsBlockItemPropertyType||(t.DocsBlockItemPropertyType={})).richText="RichText",o.text="Text",o.boolean="Boolean",o.number="Number",o.singleSelect="SingleSelect",o.multiSelect="MultiSelect",o.image="Image",o.token="Token",o.tokenType="TokenType",o.tokenProperty="TokenProperty",o.component="Component",o.componentProperty="ComponentProperty",o.asset="Asset",o.assetProperty="AssetProperty",o.page="Page",o.pageProperty="PageProperty",o.embedURL="EmbedURL",o.embedFrame="EmbedFrame",o.markdown="Markdown",o.code="Code",o.codeSandbox="CodeSandbox",o.table="Table",o.divider="Divider",o.storybook="Storybook"},6777:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemVariantLayoutType=void 0,(o=t.DocsBlockItemVariantLayoutType||(t.DocsBlockItemVariantLayoutType={})).column="Column",o.row="Row"},9279:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockItemVariantLayoutWidth=void 0,(o=t.DocsBlockItemVariantLayoutWidth||(t.DocsBlockItemVariantLayoutWidth={})).c1="1",o.c2="2",o.c3="3",o.c4="4",o.c5="5",o.c6="6",o.c7="7",o.c8="8",o.c9="9",o.c10="10",o.c11="11",o.c12="12"},5271:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockOptionRenderingStyle=void 0,(o=t.DocsBlockOptionRenderingStyle||(t.DocsBlockOptionRenderingStyle={})).segmentedControl="SegmentedControl",o.toggleButton="ToggleButton",o.select="Select",o.checkbox="Checkbox"},3274:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockRichTextPropertyStyle=void 0,(o=t.DocsBlockRichTextPropertyStyle||(t.DocsBlockRichTextPropertyStyle={})).title1="Title1",o.title2="Title2",o.title3="Title3",o.title4="Title4",o.title5="Title5",o.quote="Quote",o.callout="Callout",o.ol="OL",o.ul="UL",o.default="Default"},6001:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsBlockTextPropertyStyle=void 0,(o=t.DocsBlockTextPropertyStyle||(t.DocsBlockTextPropertyStyle={})).title1="Title1",o.title2="Title2",o.title3="Title3",o.title4="Title4",o.title5="Title5",o.default="Default",o.defaultBold="DefaultBold",o.defaultSemibold="DefaultSemibold",o.small="Small",o.smallBold="SmallBold",o.smallSemibold="SmallSemibold"},1755:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsEntityGroupBehavior=void 0,(o=t.DocsEntityGroupBehavior||(t.DocsEntityGroupBehavior={})).group="Group",o.tabs="Tabs"},8240:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsEntityType=void 0,(o=t.DocsEntityType||(t.DocsEntityType={})).group="Group",o.page="Page"},4142:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocsSectionType=void 0,(o=t.DocsSectionType||(t.DocsSectionType={})).plain="Plain",o.tabs="Tabs"},4782:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyCalloutType=void 0,(o=t.DocumentationLegacyCalloutType||(t.DocumentationLegacyCalloutType={})).info="Info",o.success="Success",o.warning="Warning",o.error="Error"},8549:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyGroupBehavior=void 0,(o=t.DocumentationLegacyGroupBehavior||(t.DocumentationLegacyGroupBehavior={})).group="Group",o.tabs="Tabs"},1931:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyHeadingType=void 0,(o=t.DocumentationLegacyHeadingType||(t.DocumentationLegacyHeadingType={}))[o.h1=1]="h1",o[o.h2=2]="h2",o[o.h3=3]="h3"},5359:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyItemType=void 0,(o=t.DocumentationLegacyItemType||(t.DocumentationLegacyItemType={})).group="Group",o.page="Page"},9437:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyPageAssetType=void 0,(o=t.DocumentationLegacyPageAssetType||(t.DocumentationLegacyPageAssetType={})).image="image",o.figmaFrame="figmaFrame"},4649:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyPageBlockThemeType=void 0,(o=t.DocumentationLegacyPageBlockThemeType||(t.DocumentationLegacyPageBlockThemeType={})).override="Override",o.comparison="Comparison"},8560:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentationLegacyPageBlockType=void 0,(o=t.DocumentationLegacyPageBlockType||(t.DocumentationLegacyPageBlockType={})).text="Text",o.heading="Heading",o.code="Code",o.unorderedList="UnorderedList",o.orderedList="OrderedList",o.quote="Quote",o.callout="Callout",o.divider="Divider",o.image="Image",o.token="Token",o.tokenList="TokenList",o.tokenGroup="TokenGroup",o.shortcuts="Shortcuts",o.link="Link",o.figmaEmbed="FigmaEmbed",o.youtubeEmbed="YoutubeEmbed",o.storybookEmbed="StorybookEmbed",o.genericEmbed="Embed",o.figmaFrames="FigmaFrames",o.custom="Custom",o.renderCode="RenderCode",o.componentAssets="ComponentAssets",o.column="Column",o.columnItem="ColumnItem",o.tabs="Tabs",o.tabItem="TabItem",o.table="Table",o.tableCell="TableCell",o.tableRow="TableRow"},4914:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.FrameAlignment=void 0,(o=t.FrameAlignment||(t.FrameAlignment={})).frameHeight="FrameHeight",o.center="Center"},5986:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.FrameLayout=void 0,(o=t.FrameLayout||(t.FrameLayout={})).c8="C8",o.c7="C7",o.c6="C6",o.c5="C5",o.c4="C4",o.c3="C3",o.c2="C2",o.c1="C1",o.c175="C1_75"},4667:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.GradientType=void 0,(o=t.GradientType||(t.GradientType={})).linear="Linear",o.radial="Radial",o.angular="Angular"},4336:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextSpanAttributeType=void 0,(o=t.RichTextSpanAttributeType||(t.RichTextSpanAttributeType={})).bold="Bold",o.italic="Italic",o.link="Link",o.strikethrough="Strikethrough",o.code="Code"},5467:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ShadowType=void 0,(o=t.ShadowType||(t.ShadowType={})).drop="Drop",o.inner="Inner"},1694:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.SourceType=void 0,(o=t.SourceType||(t.SourceType={})).figma="Figma",o.tokenStudio="TokenStudio"},2047:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.TextCase=void 0,(o=t.TextCase||(t.TextCase={})).original="Original",o.upper="Upper",o.lower="Lower",o.camel="Camel",o.smallCaps="SmallCaps"},5780:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.TextDecoration=void 0,(o=t.TextDecoration||(t.TextDecoration={})).original="None",o.underline="Underline",o.strikethrough="Strikethrough"},1256:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.DT_TOKEN_TYPES=t.tokenTypeIsReferencable=t.REFERENCABLE_TOKEN_TYPES=t.REPLACABLE_TOKEN_TYPES=t.tokenTypeIsNonPure=t.tokenTypeIsPure=t.PURE_TOKEN_TYPES=t.ALL_TOKEN_TYPES=t.MS_DIMENSION_TOKEN_TYPES=t.RAW_DIMENSION_TOKEN_TYPES=t.DIMENSION_TOKEN_TYPES=t.OPTION_TOKEN_TYPES=t.STRING_TOKEN_TYPES=t.TokenType=void 0,function(e){e.color="Color",e.typography="Typography",e.dimension="Dimension",e.size="Size",e.space="Space",e.opacity="Opacity",e.fontSize="FontSize",e.lineHeight="LineHeight",e.letterSpacing="LetterSpacing",e.paragraphSpacing="ParagraphSpacing",e.borderWidth="BorderWidth",e.radius="BorderRadius",e.duration="Duration",e.zIndex="ZIndex",e.shadow="Shadow",e.border="Border",e.gradient="Gradient",e.string="String",e.productCopy="ProductCopy",e.fontFamily="FontFamily",e.fontWeight="FontWeight",e.textCase="TextCase",e.textDecoration="TextDecoration",e.visibility="Visibility",e.blur="Blur"}(o=t.TokenType||(t.TokenType={})),t.STRING_TOKEN_TYPES=[o.string,o.productCopy,o.fontFamily,o.fontWeight],t.OPTION_TOKEN_TYPES=[o.textCase,o.textDecoration,o.visibility],t.DIMENSION_TOKEN_TYPES=[o.dimension,o.size,o.space,o.opacity,o.fontSize,o.lineHeight,o.letterSpacing,o.paragraphSpacing,o.borderWidth,o.radius,o.duration,o.zIndex],t.RAW_DIMENSION_TOKEN_TYPES=[o.opacity,o.zIndex],t.MS_DIMENSION_TOKEN_TYPES=[o.duration],t.ALL_TOKEN_TYPES=[...t.DIMENSION_TOKEN_TYPES,...t.STRING_TOKEN_TYPES,...t.OPTION_TOKEN_TYPES,o.color,o.gradient,o.border,o.radius,o.shadow,o.typography,o.blur],t.PURE_TOKEN_TYPES=[...t.DIMENSION_TOKEN_TYPES,...t.STRING_TOKEN_TYPES,...t.OPTION_TOKEN_TYPES],t.tokenTypeIsPure=e=>t.PURE_TOKEN_TYPES.includes(e),t.tokenTypeIsNonPure=e=>!(0,t.tokenTypeIsPure)(e),t.REPLACABLE_TOKEN_TYPES=[o.color,...t.DIMENSION_TOKEN_TYPES,...t.STRING_TOKEN_TYPES,...t.OPTION_TOKEN_TYPES],t.REFERENCABLE_TOKEN_TYPES=[o.color,...t.DIMENSION_TOKEN_TYPES,o.fontFamily,o.fontWeight,o.textCase,o.textDecoration],t.tokenTypeIsReferencable=e=>t.REFERENCABLE_TOKEN_TYPES.includes(e),t.DT_TOKEN_TYPES=[o.color,o.shadow,o.gradient,o.typography,o.border,...t.DIMENSION_TOKEN_TYPES,o.fontFamily,o.fontWeight,...t.OPTION_TOKEN_TYPES]},5389:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.MS_UNITS=t.PX_UNITS=t.RAW_UNITS=t.LINE_HEIGHT_UNITS=t.SIZE_UNITS=t.Unit=void 0,function(e){e.pixels="Pixels",e.percent="Percent",e.rem="Rem",e.ms="Ms",e.raw="Raw"}(o=t.Unit||(t.Unit={})),t.SIZE_UNITS=[o.pixels,o.percent,o.rem],t.LINE_HEIGHT_UNITS=[o.pixels,o.percent,o.rem,o.raw],t.RAW_UNITS=[o.raw],t.PX_UNITS=[o.pixels],t.MS_UNITS=[o.ms]},2916:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.UserRole=void 0,(o=t.UserRole||(t.UserRole={})).owner="Owner",o.admin="Admin",o.creator="Creator",o.viewer="Viewer",o.billing="Billing"},6398:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.VisibilityType=void 0,(o=t.VisibilityType||(t.VisibilityType={})).visible="Visible",o.hidden="Hidden"},4838:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceNPMRegistryAuthType=void 0,(o=t.WorkspaceNPMRegistryAuthType||(t.WorkspaceNPMRegistryAuthType={})).basic="Basic",o.bearer="Bearer"},2015:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceNPMRegistryType=void 0,(o=t.WorkspaceNPMRegistryType||(t.WorkspaceNPMRegistryType={})).npmJS="NPMJS",o.gitHub="GitHub",o.azureDevOps="AzureDevOps",o.artifactory="Artifactory",o.custom="Custom"},4357:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSubscriptionPlanInterval=void 0,(o=t.WorkspaceSubscriptionPlanInterval||(t.WorkspaceSubscriptionPlanInterval={})).yearly="yearly",o.monthly="monthly"},743:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSubscriptionProduct=void 0,(o=t.WorkspaceSubscriptionProduct||(t.WorkspaceSubscriptionProduct={})).free="free",o.team="team",o.teamTest="team_test",o.company="company",o.enterprise="enterprise"},5841:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSubscriptionStatus=void 0,(o=t.WorkspaceSubscriptionStatus||(t.WorkspaceSubscriptionStatus={})).trialing="trialing",o.active="active",o.pastDue="past_due",o.canceled="canceled",o.unpaid="unpaid",o.incompleteExpired="incomplete_expired",o.incomplete="incomplete",o.unknown="unknown"},8917:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSubscriptionStatusInternal=void 0,(o=t.WorkspaceSubscriptionStatusInternal||(t.WorkspaceSubscriptionStatusInternal={})).active="active",o.downgradedToFree="downgraded_to_free",o.suspended="suspended"},3803:(e,t)=>{var o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.PulsarExecutor=t.OutputFileType=void 0,(r=t.OutputFileType||(t.OutputFileType={})).copyRemoteUrl="copyRemoteUrl",r.text="text",r.binary="binary",(o=t.PulsarExecutor||(t.PulsarExecutor={})).supernova="supernova",o.local="local"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.UserRole=e.Unit=e.TokenType=e.TextDecoration=e.TextCase=e.ShadowType=e.RichTextSpanAttributeType=e.GradientType=e.FrameLayout=e.FrameAlignment=e.SourceType=e.DocsImageRefType=e.DocsLinkRefType=e.DocsSectionType=e.DocsEntityType=e.DocsEntityGroupBehavior=e.DocsBlockTextPropertyStyle=e.DocsBlockRichTextPropertyStyle=e.DocsBlockOptionRenderingStyle=e.DocsBlockItemVariantLayoutWidth=e.DocsBlockItemVariantLayoutType=e.DocsBlockItemPropertyType=e.DocsBlockItemPropertyTextStyle=e.DocsBlockItemPropertyRichTextStyle=e.DocsBlockItemPropertyOptionRenderingStyle=e.DocsBlockItemEntityType=e.DocsBlockImagePropertyAspectRatio=e.DocsBlockBehaviorSelectionType=e.DocsBlockBehaviorDataType=e.DocumentationLegacyPageBlockShortcutType=e.DocumentationLegacyPageBlockThemeType=e.DocumentationLegacyPageBlockType=e.DocumentationLegacyPageAssetType=e.DocumentationLegacyItemType=e.DocumentationLegacyHeadingType=e.DocumentationLegacyGroupBehavior=e.DocumentationLegacyCalloutType=e.BorderStyle=e.BorderPosition=e.BlurType=e.AssetScaleType=e.AssetScale=e.AssetFormat=e.Alignment=e.ALL_TOKEN_TYPES=e.ALL_BORDER_STYLES=e.ALL_BORDER_POSITIONS=e.OPTION_TOKEN_TYPES=e.STRING_TOKEN_TYPES=e.DIMENSION_TOKEN_TYPES=void 0,e.PulsarExecutor=e.OutputFileType=e.CustomDomainState=e.CustomDomainErrorCode=e.ImportWarningType=e.WorkspaceNPMRegistryType=e.WorkspaceNPMRegistryAuthType=e.WorkspaceSubscriptionStatusInternal=e.WorkspaceSubscriptionStatus=e.WorkspaceSubscriptionProduct=e.WorkspaceSubscriptionPlanInterval=e.VisibilityType=void 0;var t=o(1256);Object.defineProperty(e,"DIMENSION_TOKEN_TYPES",{enumerable:!0,get:function(){return t.DIMENSION_TOKEN_TYPES}}),Object.defineProperty(e,"STRING_TOKEN_TYPES",{enumerable:!0,get:function(){return t.STRING_TOKEN_TYPES}}),Object.defineProperty(e,"OPTION_TOKEN_TYPES",{enumerable:!0,get:function(){return t.OPTION_TOKEN_TYPES}});var n=o(6675);Object.defineProperty(e,"ALL_BORDER_POSITIONS",{enumerable:!0,get:function(){return n.ALL_BORDER_POSITIONS}});var i=o(6701);Object.defineProperty(e,"ALL_BORDER_STYLES",{enumerable:!0,get:function(){return i.ALL_BORDER_STYLES}});var a=o(1256);Object.defineProperty(e,"ALL_TOKEN_TYPES",{enumerable:!0,get:function(){return a.ALL_TOKEN_TYPES}});var c=o(4222);Object.defineProperty(e,"Alignment",{enumerable:!0,get:function(){return c.Alignment}});var l=o(1334);Object.defineProperty(e,"AssetFormat",{enumerable:!0,get:function(){return l.AssetFormat}});var u=o(1940);Object.defineProperty(e,"AssetScale",{enumerable:!0,get:function(){return u.AssetScale}});var p=o(959);Object.defineProperty(e,"AssetScaleType",{enumerable:!0,get:function(){return p.AssetScaleType}});var s=o(9257);Object.defineProperty(e,"BlurType",{enumerable:!0,get:function(){return s.BlurType}});var y=o(6675);Object.defineProperty(e,"BorderPosition",{enumerable:!0,get:function(){return y.BorderPosition}});var d=o(6701);Object.defineProperty(e,"BorderStyle",{enumerable:!0,get:function(){return d.BorderStyle}});var T=o(4782);Object.defineProperty(e,"DocumentationLegacyCalloutType",{enumerable:!0,get:function(){return T.DocumentationLegacyCalloutType}});var m=o(8549);Object.defineProperty(e,"DocumentationLegacyGroupBehavior",{enumerable:!0,get:function(){return m.DocumentationLegacyGroupBehavior}});var P=o(1931);Object.defineProperty(e,"DocumentationLegacyHeadingType",{enumerable:!0,get:function(){return P.DocumentationLegacyHeadingType}});var v=o(5359);Object.defineProperty(e,"DocumentationLegacyItemType",{enumerable:!0,get:function(){return v.DocumentationLegacyItemType}});var g=o(9437);Object.defineProperty(e,"DocumentationLegacyPageAssetType",{enumerable:!0,get:function(){return g.DocumentationLegacyPageAssetType}});var S=o(8560);Object.defineProperty(e,"DocumentationLegacyPageBlockType",{enumerable:!0,get:function(){return S.DocumentationLegacyPageBlockType}});var b=o(4649);Object.defineProperty(e,"DocumentationLegacyPageBlockThemeType",{enumerable:!0,get:function(){return b.DocumentationLegacyPageBlockThemeType}});var _=o(3476);Object.defineProperty(e,"DocumentationLegacyPageBlockShortcutType",{enumerable:!0,get:function(){return _.DocumentationLegacyPageBlockShortcutType}});var f=o(4934);Object.defineProperty(e,"DocsBlockBehaviorDataType",{enumerable:!0,get:function(){return f.DocsBlockBehaviorDataType}});var O=o(8081);Object.defineProperty(e,"DocsBlockBehaviorSelectionType",{enumerable:!0,get:function(){return O.DocsBlockBehaviorSelectionType}});var D=o(9534);Object.defineProperty(e,"DocsBlockImagePropertyAspectRatio",{enumerable:!0,get:function(){return D.DocsBlockImagePropertyAspectRatio}});var k=o(1043);Object.defineProperty(e,"DocsBlockItemEntityType",{enumerable:!0,get:function(){return k.DocsBlockItemEntityType}});var E=o(3947);Object.defineProperty(e,"DocsBlockItemPropertyOptionRenderingStyle",{enumerable:!0,get:function(){return E.DocsBlockItemPropertyOptionRenderingStyle}});var I=o(4742);Object.defineProperty(e,"DocsBlockItemPropertyRichTextStyle",{enumerable:!0,get:function(){return I.DocsBlockItemPropertyRichTextStyle}});var B=o(7825);Object.defineProperty(e,"DocsBlockItemPropertyTextStyle",{enumerable:!0,get:function(){return B.DocsBlockItemPropertyTextStyle}});var h=o(6751);Object.defineProperty(e,"DocsBlockItemPropertyType",{enumerable:!0,get:function(){return h.DocsBlockItemPropertyType}});var N=o(6777);Object.defineProperty(e,"DocsBlockItemVariantLayoutType",{enumerable:!0,get:function(){return N.DocsBlockItemVariantLayoutType}});var L=o(9279);Object.defineProperty(e,"DocsBlockItemVariantLayoutWidth",{enumerable:!0,get:function(){return L.DocsBlockItemVariantLayoutWidth}});var R=o(5271);Object.defineProperty(e,"DocsBlockOptionRenderingStyle",{enumerable:!0,get:function(){return R.DocsBlockOptionRenderingStyle}});var j=o(3274);Object.defineProperty(e,"DocsBlockRichTextPropertyStyle",{enumerable:!0,get:function(){return j.DocsBlockRichTextPropertyStyle}});var x=o(6001);Object.defineProperty(e,"DocsBlockTextPropertyStyle",{enumerable:!0,get:function(){return x.DocsBlockTextPropertyStyle}});var A=o(1755);Object.defineProperty(e,"DocsEntityGroupBehavior",{enumerable:!0,get:function(){return A.DocsEntityGroupBehavior}});var M=o(8240);Object.defineProperty(e,"DocsEntityType",{enumerable:!0,get:function(){return M.DocsEntityType}});var C=o(4142);Object.defineProperty(e,"DocsSectionType",{enumerable:!0,get:function(){return C.DocsSectionType}});var F=o(2695);Object.defineProperty(e,"DocsLinkRefType",{enumerable:!0,get:function(){return F.DocsLinkRefType}});var W=o(275);Object.defineProperty(e,"DocsImageRefType",{enumerable:!0,get:function(){return W.DocsImageRefType}});var Y=o(1694);Object.defineProperty(e,"SourceType",{enumerable:!0,get:function(){return Y.SourceType}});var G=o(4914);Object.defineProperty(e,"FrameAlignment",{enumerable:!0,get:function(){return G.FrameAlignment}});var U=o(5986);Object.defineProperty(e,"FrameLayout",{enumerable:!0,get:function(){return U.FrameLayout}});var K=o(4667);Object.defineProperty(e,"GradientType",{enumerable:!0,get:function(){return K.GradientType}});var w=o(4336);Object.defineProperty(e,"RichTextSpanAttributeType",{enumerable:!0,get:function(){return w.RichTextSpanAttributeType}});var H=o(5467);Object.defineProperty(e,"ShadowType",{enumerable:!0,get:function(){return H.ShadowType}});var V=o(2047);Object.defineProperty(e,"TextCase",{enumerable:!0,get:function(){return V.TextCase}});var z=o(5780);Object.defineProperty(e,"TextDecoration",{enumerable:!0,get:function(){return z.TextDecoration}});var q=o(1256);Object.defineProperty(e,"TokenType",{enumerable:!0,get:function(){return q.TokenType}});var Q=o(5389);Object.defineProperty(e,"Unit",{enumerable:!0,get:function(){return Q.Unit}});var Z=o(2916);Object.defineProperty(e,"UserRole",{enumerable:!0,get:function(){return Z.UserRole}});var J=o(6398);Object.defineProperty(e,"VisibilityType",{enumerable:!0,get:function(){return J.VisibilityType}});var X=o(4357);Object.defineProperty(e,"WorkspaceSubscriptionPlanInterval",{enumerable:!0,get:function(){return X.WorkspaceSubscriptionPlanInterval}});var $=o(743);Object.defineProperty(e,"WorkspaceSubscriptionProduct",{enumerable:!0,get:function(){return $.WorkspaceSubscriptionProduct}});var ee=o(5841);Object.defineProperty(e,"WorkspaceSubscriptionStatus",{enumerable:!0,get:function(){return ee.WorkspaceSubscriptionStatus}});var te=o(8917);Object.defineProperty(e,"WorkspaceSubscriptionStatusInternal",{enumerable:!0,get:function(){return te.WorkspaceSubscriptionStatusInternal}});var oe=o(4838);Object.defineProperty(e,"WorkspaceNPMRegistryAuthType",{enumerable:!0,get:function(){return oe.WorkspaceNPMRegistryAuthType}});var re=o(2015);Object.defineProperty(e,"WorkspaceNPMRegistryType",{enumerable:!0,get:function(){return re.WorkspaceNPMRegistryType}});var ne=o(829);Object.defineProperty(e,"ImportWarningType",{enumerable:!0,get:function(){return ne.ImportWarningType}});var ie=o(3611);Object.defineProperty(e,"CustomDomainErrorCode",{enumerable:!0,get:function(){return ie.CustomDomainErrorCode}});var ae=o(6530);Object.defineProperty(e,"CustomDomainState",{enumerable:!0,get:function(){return ae.CustomDomainState}});var ce=o(3803);Object.defineProperty(e,"OutputFileType",{enumerable:!0,get:function(){return ce.OutputFileType}}),Object.defineProperty(e,"PulsarExecutor",{enumerable:!0,get:function(){return ce.PulsarExecutor}})})();var n=exports;for(var i in r)n[i]=r[i];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();

/***/ }),

/***/ "./node_modules/camel-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/camel-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   camelCaseTransform: () => (/* binding */ camelCaseTransform),
/* harmony export */   camelCaseTransformMerge: () => (/* binding */ camelCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pascal-case */ "./node_modules/pascal-case/dist.es2015/index.js");


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransform)(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCaseTransformMerge)(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,pascal_case__WEBPACK_IMPORTED_MODULE_0__.pascalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ transform: camelCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capital-case/dist.es2015/index.js":
/*!********************************************************!*\
  !*** ./node_modules/capital-case/dist.es2015/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalCase: () => (/* binding */ capitalCase),
/* harmony export */   capitalCaseTransform: () => (/* binding */ capitalCaseTransform)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! upper-case-first */ "./node_modules/upper-case-first/dist.es2015/index.js");



function capitalCaseTransform(input) {
    return (0,upper_case_first__WEBPACK_IMPORTED_MODULE_0__.upperCaseFirst)(input.toLowerCase());
}
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_1__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ delimiter: " ", transform: capitalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/change-case/dist.es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/change-case/dist.es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* reexport safe */ camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCase),
/* harmony export */   camelCaseTransform: () => (/* reexport safe */ camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCaseTransform),
/* harmony export */   camelCaseTransformMerge: () => (/* reexport safe */ camel_case__WEBPACK_IMPORTED_MODULE_0__.camelCaseTransformMerge),
/* harmony export */   capitalCase: () => (/* reexport safe */ capital_case__WEBPACK_IMPORTED_MODULE_1__.capitalCase),
/* harmony export */   capitalCaseTransform: () => (/* reexport safe */ capital_case__WEBPACK_IMPORTED_MODULE_1__.capitalCaseTransform),
/* harmony export */   constantCase: () => (/* reexport safe */ constant_case__WEBPACK_IMPORTED_MODULE_2__.constantCase),
/* harmony export */   dotCase: () => (/* reexport safe */ dot_case__WEBPACK_IMPORTED_MODULE_3__.dotCase),
/* harmony export */   headerCase: () => (/* reexport safe */ header_case__WEBPACK_IMPORTED_MODULE_4__.headerCase),
/* harmony export */   noCase: () => (/* reexport safe */ no_case__WEBPACK_IMPORTED_MODULE_5__.noCase),
/* harmony export */   paramCase: () => (/* reexport safe */ param_case__WEBPACK_IMPORTED_MODULE_6__.paramCase),
/* harmony export */   pascalCase: () => (/* reexport safe */ pascal_case__WEBPACK_IMPORTED_MODULE_7__.pascalCase),
/* harmony export */   pascalCaseTransform: () => (/* reexport safe */ pascal_case__WEBPACK_IMPORTED_MODULE_7__.pascalCaseTransform),
/* harmony export */   pascalCaseTransformMerge: () => (/* reexport safe */ pascal_case__WEBPACK_IMPORTED_MODULE_7__.pascalCaseTransformMerge),
/* harmony export */   pathCase: () => (/* reexport safe */ path_case__WEBPACK_IMPORTED_MODULE_8__.pathCase),
/* harmony export */   sentenceCase: () => (/* reexport safe */ sentence_case__WEBPACK_IMPORTED_MODULE_9__.sentenceCase),
/* harmony export */   sentenceCaseTransform: () => (/* reexport safe */ sentence_case__WEBPACK_IMPORTED_MODULE_9__.sentenceCaseTransform),
/* harmony export */   snakeCase: () => (/* reexport safe */ snake_case__WEBPACK_IMPORTED_MODULE_10__.snakeCase)
/* harmony export */ });
/* harmony import */ var camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camel-case */ "./node_modules/camel-case/dist.es2015/index.js");
/* harmony import */ var capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capital-case */ "./node_modules/capital-case/dist.es2015/index.js");
/* harmony import */ var constant_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constant-case */ "./node_modules/constant-case/dist.es2015/index.js");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");
/* harmony import */ var header_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! header-case */ "./node_modules/header-case/dist.es2015/index.js");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var param_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! param-case */ "./node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var pascal_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pascal-case */ "./node_modules/pascal-case/dist.es2015/index.js");
/* harmony import */ var path_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-case */ "./node_modules/path-case/dist.es2015/index.js");
/* harmony import */ var sentence_case__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sentence-case */ "./node_modules/sentence-case/dist.es2015/index.js");
/* harmony import */ var snake_case__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snake-case */ "./node_modules/snake-case/dist.es2015/index.js");











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/constant-case/dist.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/constant-case/dist.es2015/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constantCase: () => (/* binding */ constantCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! upper-case */ "./node_modules/upper-case/dist.es2015/index.js");



function constantCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "_", transform: upper_case__WEBPACK_IMPORTED_MODULE_2__.upperCase }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/dot-case/dist.es2015/index.js":
/*!****************************************************!*\
  !*** ./node_modules/dot-case/dist.es2015/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dotCase: () => (/* binding */ dotCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "." }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/header-case/dist.es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/header-case/dist.es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerCase: () => (/* binding */ headerCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var capital_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capital-case */ "./node_modules/capital-case/dist.es2015/index.js");


function headerCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,capital_case__WEBPACK_IMPORTED_MODULE_0__.capitalCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "-" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase)
/* harmony export */ });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noCase: () => (/* binding */ noCase)
/* harmony export */ });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/param-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/param-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paramCase: () => (/* binding */ paramCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");


function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dot_case__WEBPACK_IMPORTED_MODULE_0__.dotCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "-" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/pascal-case/dist.es2015/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/pascal-case/dist.es2015/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pascalCase: () => (/* binding */ pascalCase),
/* harmony export */   pascalCaseTransform: () => (/* binding */ pascalCaseTransform),
/* harmony export */   pascalCaseTransformMerge: () => (/* binding */ pascalCaseTransformMerge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "", transform: pascalCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/path-case/dist.es2015/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/path-case/dist.es2015/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pathCase: () => (/* binding */ pathCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");


function pathCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dot_case__WEBPACK_IMPORTED_MODULE_0__.dotCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "/" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/sentence-case/dist.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sentence-case/dist.es2015/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sentenceCase: () => (/* binding */ sentenceCase),
/* harmony export */   sentenceCaseTransform: () => (/* binding */ sentenceCaseTransform)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");
/* harmony import */ var upper_case_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! upper-case-first */ "./node_modules/upper-case-first/dist.es2015/index.js");



function sentenceCaseTransform(input, index) {
    var result = input.toLowerCase();
    if (index === 0)
        return (0,upper_case_first__WEBPACK_IMPORTED_MODULE_0__.upperCaseFirst)(result);
    return result;
}
function sentenceCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_1__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ delimiter: " ", transform: sentenceCaseTransform }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/snake-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/snake-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snakeCase: () => (/* binding */ snakeCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");


function snakeCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dot_case__WEBPACK_IMPORTED_MODULE_0__.dotCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "_" }, options));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/asset_export.ts":
/*!*****************************!*\
  !*** ./src/asset_export.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processAssetData = void 0;
const export_helpers_1 = __webpack_require__(/*! @supernovaio/export-helpers */ "./node_modules/@supernovaio/export-helpers/build/helpers.js");
const icons_data_1 = __webpack_require__(/*! ./content/icons_data */ "./src/content/icons_data.ts");
function processAssetData() {
    let data = {
        className: 'SevIcons',
        fontFamily: 'SevIcons',
        variables: {}
    };
    for (let key in icons_data_1.ICONS_CODEPOINTS) {
        let name = export_helpers_1.NamingHelper.codeSafeVariableName(key, export_helpers_1.StringCase.camelCase);
        if (name.startsWith("_")) {
            name = "i" + name.slice(1);
        }
        data.variables[name] = parseInt(icons_data_1.ICONS_CODEPOINTS[key]).toString(16);
    }
    return data;
}
exports.processAssetData = processAssetData;


/***/ }),

/***/ "./src/content/icons_data.ts":
/*!***********************************!*\
  !*** ./src/content/icons_data.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ICONS_CODEPOINTS = exports.Icons = void 0;
var Icons;
(function (Icons) {
    Icons["i4K"] = "4-k";
    Icons["AccessibilityA11y"] = "accessibility-a11y";
    Icons["AccessibilityEyeA11y"] = "accessibility-eye-a11y";
    Icons["ActivityNotificationPulseHeartbeatBeat"] = "activity-notification-pulse-heartbeat-beat";
    Icons["AddColumnAddPage"] = "add-column-add-page";
    Icons["AddPagesAddBoards"] = "add-pages-add-boards";
    Icons["AddPagesWideAddBoards"] = "add-pages-wide-add-boards";
    Icons["AddPeopleAddUserAddPerson_2"] = "add-people-add-user-add-person-2";
    Icons["AddPeopleAddUserAddPerson"] = "add-people-add-user-add-person";
    Icons["AddReactionReactionEmoji"] = "add-reaction-reaction-emoji";
    Icons["AddRowAddRows"] = "add-row-add-rows";
    Icons["AddSheetAddCanvasAddPageVertical"] = "add-sheet-add-canvas-add-page-vertical";
    Icons["AddSlideAddCanvasAddPageHorizontal"] = "add-slide-add-canvas-add-page-horizontal";
    Icons["AddSlideAddPageAddCopy"] = "add-slide-add-page-add-copy";
    Icons["AddedPeopleAddUserAddedPerson"] = "added-people-add-user-added-person";
    Icons["AdressPackageDelivery"] = "adress-package-delivery";
    Icons["Ai_2Stars_180Sparkles"] = "ai-2-stars-180-sparkles";
    Icons["Ai_2StarsSparkles"] = "ai-2-stars-sparkles";
    Icons["Ai_3StarsSparkles"] = "ai-3-stars-sparkles";
    Icons["AiAvatarGeneratedAvatarProfileAiMagicAvatar"] = "ai-avatar-generated-avatar-profile-ai-magic-avatar";
    Icons["AiImagesMidjourneyAiGenerated"] = "ai-images-midjourney-ai-generated";
    Icons["AiTextTextGeneration"] = "ai-text-text-generation";
    Icons["Airplay"] = "airplay";
    Icons["AirpodCaseAirpods"] = "airpod-case-airpods";
    Icons["Albums"] = "albums";
    Icons["AlignBottom_2Arrow_1"] = "align-bottom-2-arrow-1";
    Icons["AlignBottom_2Arrow"] = "align-bottom-2-arrow";
    Icons["AlignBottomAlignment"] = "align-bottom-alignment";
    Icons["AlignBottomArrow"] = "align-bottom-arrow";
    Icons["AlignLeft_2Arrow"] = "align-left-2-arrow";
    Icons["AlignLeftAlignment"] = "align-left-alignment";
    Icons["AlignLeftArrow"] = "align-left-arrow";
    Icons["AlignRight_2Arrow"] = "align-right-2-arrow";
    Icons["AlignRightAlignment"] = "align-right-alignment";
    Icons["AlignRightArrow"] = "align-right-arrow";
    Icons["AlignTopAlignment"] = "align-top-alignment";
    Icons["AlignTopArrow"] = "align-top-arrow";
    Icons["AlignmentBar"] = "alignment-bar";
    Icons["AlignmentCenter"] = "alignment-center";
    Icons["AlignmentJustify"] = "alignment-justify";
    Icons["AlignmentLeft"] = "alignment-left";
    Icons["AlignmentRight"] = "alignment-right";
    Icons["AltAltTextAltTag"] = "alt-alt-text-alt-tag";
    Icons["AltText"] = "alt-text";
    Icons["AmericanFootballNfl"] = "american-football-nfl";
    Icons["Anchor_1"] = "anchor-1";
    Icons["Anchor_2"] = "anchor-2";
    Icons["AnnotationBubbleAddPlus"] = "annotation-bubble-add-plus";
    Icons["AnnotationBubbleCheck"] = "annotation-bubble-check";
    Icons["AnnotationBubbleXCloseDelete"] = "annotation-bubble-x-close-delete";
    Icons["AnonymousAnonymHidden"] = "anonymous-anonym-hidden";
    Icons["AppleFruit"] = "apple-fruit";
    Icons["ArAugmentedReality_3dViewCube_1"] = "ar-augmented-reality-3d-view-cube-1";
    Icons["ArAugmentedReality_3dViewCube_2"] = "ar-augmented-reality-3d-view-cube-2";
    Icons["ArAugmentedReality_3dViewCube"] = "ar-augmented-reality-3d-view-cube";
    Icons["ArAugmentedRealityCardBox_3dVirtualRealityVr"] = "ar-augmented-reality-card-box-3d-virtual-reality-vr";
    Icons["ArAugmentedRealityScan_3dViewCube"] = "ar-augmented-reality-scan-3d-view-cube";
    Icons["ArAugmentedRealityScan_3d"] = "ar-augmented-reality-scan-3d";
    Icons["ArAugumentRealityVrVirtualReality"] = "ar-augument-reality-vr-virtual-reality";
    Icons["ArcBrowserFace"] = "arc-browser-face";
    Icons["ArchiveBoxInboxFile"] = "archive-box-inbox-file";
    Icons["ArchiveFolderBox"] = "archive-folder-box";
    Icons["AroundSpatial"] = "around-spatial";
    Icons["ArrowBottomCircle"] = "arrow-bottom-circle";
    Icons["ArrowBottomLeft"] = "arrow-bottom-left";
    Icons["ArrowBottomRight"] = "arrow-bottom-right";
    Icons["ArrowBottom"] = "arrow-bottom";
    Icons["ArrowExpandH"] = "arrow-expand-h";
    Icons["ArrowExpandV"] = "arrow-expand-v";
    Icons["ArrowLeftCircle"] = "arrow-left-circle";
    Icons["ArrowLeft"] = "arrow-left";
    Icons["ArrowPathDown"] = "arrow-path-down";
    Icons["ArrowPathLeft"] = "arrow-path-left";
    Icons["ArrowPathRight"] = "arrow-path-right";
    Icons["ArrowPathUp"] = "arrow-path-up";
    Icons["ArrowRightCircle"] = "arrow-right-circle";
    Icons["ArrowRight"] = "arrow-right";
    Icons["ArrowTopCircle"] = "arrow-top-circle";
    Icons["ArrowTopLeft"] = "arrow-top-left";
    Icons["ArrowTopRight"] = "arrow-top-right";
    Icons["ArrowTop"] = "arrow-top";
    Icons["ArrowTriangleBottom"] = "arrow-triangle-bottom";
    Icons["ArrowTriangleLeft"] = "arrow-triangle-left";
    Icons["ArrowTriangleRight"] = "arrow-triangle-right";
    Icons["ArrowTriangleTop"] = "arrow-triangle-top";
    Icons["AsteriskPlaceholder"] = "asterisk-placeholder";
    Icons["At"] = "at";
    Icons["Attachment_2AttachPaperClip"] = "attachment-2-attach-paper-clip";
    Icons["AttachmentAttachDocumentAttachementListPageFile"] = "attachment-attach-document-attachement-list-page-file";
    Icons["AttachmentAttachPaperClip"] = "attachment-attach-paper-clip";
    Icons["AudioMusicPlaylistMusicalNote"] = "audio-music-playlist-musical-note";
    Icons["AutoFlash"] = "auto-flash";
    Icons["AutoSizeAutomaticSizePagePageSize"] = "auto-size-automatic-size-page-page-size";
    Icons["Avocado"] = "avocado";
    Icons["Back"] = "back";
    Icons["BackwardDeleteRemoveKey"] = "backward-delete-remove-key";
    Icons["BadgeVerifiedAward"] = "badge-verified-award";
    Icons["Bag_2LuggageBuggage"] = "bag-2-luggage-buggage";
    Icons["Bag_2Shopping"] = "bag-2-shopping";
    Icons["BagLuggageBuggage"] = "bag-luggage-buggage";
    Icons["BagShopping"] = "bag-shopping";
    Icons["Bank_1"] = "bank-1";
    Icons["Bank"] = "bank";
    Icons["BarcodeScan"] = "barcode-scan";
    Icons["Baseball"] = "baseball";
    Icons["Basket_1CartShopping"] = "basket-1-cart-shopping";
    Icons["Basket_2ShoppingBag"] = "basket-2-shopping-bag";
    Icons["BasketballNba"] = "basketball-nba";
    Icons["BatteryEmptyPower"] = "battery-empty-power";
    Icons["BatteryErrorPower"] = "battery-error-power";
    Icons["BatteryFullPower"] = "battery-full-power";
    Icons["BatteryLoadingPower"] = "battery-loading-power";
    Icons["BatteryLowPower"] = "battery-low-power";
    Icons["BatteryMediumPower"] = "battery-medium-power";
    Icons["BellConcierge"] = "bell-concierge";
    Icons["BellNotify"] = "bell-notify";
    Icons["BezierAddPlusVectorNodes"] = "bezier-add-plus-vector-nodes";
    Icons["BezierCircleVectorNodes"] = "bezier-circle-vector-nodes";
    Icons["BezierCurveBezierVector"] = "bezier-curve-bezier-vector";
    Icons["BezierCurvesAnimationMotionSpring"] = "bezier-curves-animation-motion-spring";
    Icons["BezierRemoveDeleteMinusVectorNodes"] = "bezier-remove-delete-minus-vector-nodes";
    Icons["BezierVectorNodesEdit_1"] = "bezier-vector-nodes-edit-1";
    Icons["BezierVectorNodesEdit"] = "bezier-vector-nodes-edit";
    Icons["BezierVectorNodes"] = "bezier-vector-nodes";
    Icons["BillPurchaceInvoice_1"] = "bill-purchace-invoice-1";
    Icons["BillPurchaceInvoice"] = "bill-purchace-invoice";
    Icons["BirthdayCake"] = "birthday-cake";
    Icons["BlockAds"] = "block-ads";
    Icons["Block"] = "block";
    Icons["Bluetooth"] = "bluetooth";
    Icons["BnoozeBell"] = "bnooze-bell";
    Icons["Bold"] = "bold";
    Icons["BombBoom"] = "bomb-boom";
    Icons["Book_2GuideInfoFaq"] = "book-2-guide-info-faq";
    Icons["BookGuideInfoFaq"] = "book-guide-info-faq";
    Icons["BookmarkBannerFlagTag"] = "bookmark-banner-flag-tag";
    Icons["BookmarkCheckAddCheck"] = "bookmark-check-add-check";
    Icons["BookmarkDeleteRemoveBannerFlagTag"] = "bookmark-delete-remove-banner-flag-tag";
    Icons["BookmarkPlusBannerFlagTag"] = "bookmark-plus-banner-flag-tag";
    Icons["Bot"] = "bot";
    Icons["Brackets_1"] = "brackets-1";
    Icons["Brackets_2"] = "brackets-2";
    Icons["BrainAiThinking"] = "brain-ai-thinking";
    Icons["Branches"] = "branches";
    Icons["BrokenLink"] = "broken-link";
    Icons["BroomBrush"] = "broom-brush";
    Icons["Browser_2WindowAppDesktop"] = "browser-2-window-app-desktop";
    Icons["BrowserWindowAppDesktop"] = "browser-window-app-desktop";
    Icons["BrushColor"] = "brush-color";
    Icons["Bubble_2AnnotationMessage"] = "bubble-2-annotation-message";
    Icons["Bubble_2Message"] = "bubble-2-message";
    Icons["Bubble_3Message"] = "bubble-3-message";
    Icons["Bubble_4AnnotationMessage"] = "bubble-4-annotation-message";
    Icons["Bubble_5AnnotationMessage"] = "bubble-5-annotation-message";
    Icons["Bubble_5Message"] = "bubble-5-message";
    Icons["Bubble_6AnnotationMessage"] = "bubble-6-annotation-message";
    Icons["Bubble_6Message"] = "bubble-6-message";
    Icons["Bubble_7AnnotationMessage"] = "bubble-7-annotation-message";
    Icons["Bubble_7Message"] = "bubble-7-message";
    Icons["Bubble_7TextMessage"] = "bubble-7-text-message";
    Icons["BubbleAnnotationMessage"] = "bubble-annotation-message";
    Icons["BubbleMessageAnnotationExclamationMarkAlertTooltip"] = "bubble-message-annotation-exclamation-mark-alert-tooltip";
    Icons["BubbleMessageAnnotationInfoTooltip"] = "bubble-message-annotation-info-tooltip";
    Icons["BubbleMessageDotsThreeDot"] = "bubble-message-dots-three-dot";
    Icons["BubbleMessageLikeHeart"] = "bubble-message-like-heart";
    Icons["BubbleMessageQuestionMarkTooltip"] = "bubble-message-question-mark-tooltip";
    Icons["BubbleMessageSparkleAiTooltip"] = "bubble-message-sparkle-ai-tooltip";
    Icons["BubbleMessageText"] = "bubble-message-text";
    Icons["BubbleMessage"] = "bubble-message";
    Icons["BubbleNotificationBadgeMessage"] = "bubble-notification-badge-message";
    Icons["Bubbles_2MessagesChatCommunicate"] = "bubbles-2-messages-chat-communicate";
    Icons["Bubbles"] = "bubbles";
    Icons["BucketTrashCan"] = "bucket-trash-can";
    Icons["Bug_1Issue"] = "bug-1-issue";
    Icons["BugIssue"] = "bug-issue";
    Icons["Buildings"] = "buildings";
    Icons["BulletList"] = "bullet-list";
    Icons["BurgerHamburgerCheeseburgerSandwich"] = "burger-hamburger-cheeseburger-sandwich";
    Icons["BurgerHamburgerSandwich"] = "burger-hamburger-sandwich";
    Icons["BusinessShopStore"] = "business-shop-store";
    Icons["Calculator"] = "calculator";
    Icons["Calendar_1"] = "calendar-1";
    Icons["Calendar_2"] = "calendar-2";
    Icons["CalendarAddInsertDate"] = "calendar-add-insert-date";
    Icons["CalendarB"] = "calendar-b";
    Icons["CalendarCheckCheckmarkAccept"] = "calendar-check-checkmark-accept";
    Icons["CalendarCheck"] = "calendar-check";
    Icons["CalendarDateSearchMagnifierGlass"] = "calendar-date-search-magnifier-glass";
    Icons["CalendarDays"] = "calendar-days";
    Icons["CalendarEditDateEdit"] = "calendar-edit-date-edit";
    Icons["CalendarTimeClock"] = "calendar-time-clock";
    Icons["CalendarXCloseRemoveDelete"] = "calendar-x-close-remove-delete";
    Icons["CalenderAdd"] = "calender-add";
    Icons["CalenderRemove"] = "calender-remove";
    Icons["CallIncoming"] = "call-incoming";
    Icons["CallOutgoing"] = "call-outgoing";
    Icons["CallPhone"] = "call-phone";
    Icons["Camera_1OffPictureImageCam"] = "camera-1-off-picture-image-cam";
    Icons["Camera_1PictureImageCam"] = "camera-1-picture-image-cam";
    Icons["Camera_2PictureImageCam"] = "camera-2-picture-image-cam";
    Icons["Camera_3PictureImageCam"] = "camera-3-picture-image-cam";
    Icons["Camera_4ActionCamGoPro"] = "camera-4-action-cam-go-pro";
    Icons["CameraPictureImageCamCloseCrossOff_1"] = "camera-picture-image-cam-close-cross-off-1";
    Icons["CameraPictureImageCamCloseCrossOff"] = "camera-picture-image-cam-close-cross-off";
    Icons["Camera"] = "camera";
    Icons["CancelCall"] = "cancel-call";
    Icons["Car"] = "car";
    Icons["Cards"] = "cards";
    Icons["CarusselSlides"] = "carussel-slides";
    Icons["CatImageAnimalCute"] = "cat-image-animal-cute";
    Icons["CelebratePartyConfetti"] = "celebrate-party-confetti";
    Icons["Chart_1StatisticsFlipchartPresentationGraph"] = "chart-1-statistics-flipchart-presentation-graph";
    Icons["Chart_2StatisticsFlipchartPresentationGraph_2"] = "chart-2-statistics-flipchart-presentation-graph-2";
    Icons["Chart_3StatisticsGraphSignal_1"] = "chart-3-statistics-graph-signal-1";
    Icons["Chart_3StatisticsGraphSignal"] = "chart-3-statistics-graph-signal";
    Icons["Chart_4StatisticsGraph_2"] = "chart-4-statistics-graph-2";
    Icons["Chart_5StatisticsGraph_3"] = "chart-5-statistics-graph-3";
    Icons["Chart_6StatisticsGraph_4"] = "chart-6-statistics-graph-4";
    Icons["Chart_7StatisticsGraph_5"] = "chart-7-statistics-graph-5";
    Icons["ChatGpt"] = "chat-gpt";
    Icons["CheckChecmark"] = "check-checmark";
    Icons["CheckRadioCircleCheckboxCheckCheckmarkConfirm"] = "check-radio-circle-checkbox-check-checkmark-confirm";
    Icons["CheckboxCheckCheckmarkConfirm"] = "checkbox-check-checkmark-confirm";
    Icons["ChecklistBoxCheckListSearch_1"] = "checklist-box-check-list-search-1";
    Icons["ChecklistBoxCheckListSearch"] = "checklist-box-check-list-search";
    Icons["ChecklistBoxCheckList"] = "checklist-box-check-list";
    Icons["ChecklistList"] = "checklist-list";
    Icons["ChevronBottom"] = "chevron-bottom";
    Icons["ChevronDoubleDown"] = "chevron-double-down";
    Icons["ChevronDoubleLeft"] = "chevron-double-left";
    Icons["ChevronDoubleRight"] = "chevron-double-right";
    Icons["ChevronDoubleUp"] = "chevron-double-up";
    Icons["ChevronDownSmall"] = "chevron-down-small";
    Icons["ChevronGrabberHorizontal_1"] = "chevron-grabber-horizontal-1";
    Icons["ChevronGrabberHorizontal"] = "chevron-grabber-horizontal";
    Icons["ChevronLargeDownChevDown"] = "chevron-large-down-chev-down";
    Icons["ChevronLargeLeftChevLeft"] = "chevron-large-left-chev-left";
    Icons["ChevronLargeRightChevRight"] = "chevron-large-right-chev-right";
    Icons["ChevronLargeTopChevTop"] = "chevron-large-top-chev-top";
    Icons["ChevronLeft"] = "chevron-left";
    Icons["ChevronRightSmall_1"] = "chevron-right-small-1";
    Icons["ChevronRightSmall"] = "chevron-right-small";
    Icons["ChevronRight"] = "chevron-right";
    Icons["ChevronTopSmall"] = "chevron-top-small";
    Icons["ChevronTop"] = "chevron-top";
    Icons["ChromecastCast"] = "chromecast-cast";
    Icons["CirclePlaceholderOff"] = "circle-placeholder-off";
    Icons["CirclePlaceholderOn"] = "circle-placeholder-on";
    Icons["Clipboard_2CopyList"] = "clipboard-2-copy-list";
    Icons["ClipboardCopyList"] = "clipboard-copy-list";
    Icons["ClockAlertTimer"] = "clock-alert-timer";
    Icons["ClockCircleTime"] = "clock-circle-time";
    Icons["ClockSnoozeTimerSnoozeZz"] = "clock-snooze-timer-snooze-zz";
    Icons["ClockSquareTimeTimerWatch"] = "clock-square-time-timer-watch";
    Icons["CloseQuoteBlockquote"] = "close-quote-blockquote";
    Icons["CloseXCheckboxRemove"] = "close-x-checkbox-remove";
    Icons["CloseXCircleRemove"] = "close-x-circle-remove";
    Icons["ClosedCaptioningCc"] = "closed-captioning-cc";
    Icons["CloudClouds"] = "cloud-clouds";
    Icons["CloudDownload"] = "cloud-download";
    Icons["CloudLinesSyncDocumentListPageFile"] = "cloud-lines-sync-document-list-page-file";
    Icons["CloudOff_2Offline"] = "cloud-off-2-offline";
    Icons["CloudOffOffline"] = "cloud-off-offline";
    Icons["CloudSimpleArrowDownDownload"] = "cloud-simple-arrow-down-download";
    Icons["CloudSimpleDisconnectedError"] = "cloud-simple-disconnected-error";
    Icons["CloudSimple"] = "cloud-simple";
    Icons["CloudSyncDocumentListPageFile"] = "cloud-sync-document-list-page-file";
    Icons["CloudUpload"] = "cloud-upload";
    Icons["Cloud"] = "cloud";
    Icons["CloudyClouds"] = "cloudy-clouds";
    Icons["CloudySunClouds"] = "cloudy-sun-clouds";
    Icons["CmdBoxCommandAppleKey"] = "cmd-box-command-apple-key";
    Icons["CmdCommandAppleKey"] = "cmd-command-apple-key";
    Icons["CodeBrackets"] = "code-brackets";
    Icons["CodeInsert"] = "code-insert";
    Icons["CodeLines"] = "code-lines";
    Icons["Code"] = "code";
    Icons["ColorPickerColor"] = "color-picker-color";
    Icons["ColorSwatchPaletteColours"] = "color-swatch-palette-colours";
    Icons["Color"] = "color";
    Icons["ColorsPaletteColours"] = "colors-palette-colours";
    Icons["ColumnWideColums"] = "column-wide-colums";
    Icons["CompassRoundBrowserSafariWebInternetNavigation"] = "compass-round-browser-safari-web-internet-navigation";
    Icons["CompassSquareBrowserSafariWebInternetNavigation"] = "compass-square-browser-safari-web-internet-navigation";
    Icons["ConnectDevicesMacbookIphonePhone"] = "connect-devices-macbook-iphone-phone";
    Icons["ConsoleTerminal"] = "console-terminal";
    Icons["Contrast"] = "contrast";
    Icons["Control"] = "control";
    Icons["Cookies"] = "cookies";
    Icons["Copy_1LayersPages"] = "copy-1-layers-pages";
    Icons["Copy_2LayersPages"] = "copy-2-layers-pages";
    Icons["Copy_3LayersPages"] = "copy-3-layers-pages";
    Icons["Copy_4LayersPages"] = "copy-4-layers-pages";
    Icons["Copy_5LayersPages"] = "copy-5-layers-pages";
    Icons["CornerDownLeft"] = "corner-down-left";
    Icons["CornerDownRight"] = "corner-down-right";
    Icons["CornerLeftDown"] = "corner-left-down";
    Icons["CornerLeftUp"] = "corner-left-up";
    Icons["CornerRightDown"] = "corner-right-down";
    Icons["CornerRightUp"] = "corner-right-up";
    Icons["CornerUpRight_1"] = "corner-up-right-1";
    Icons["CornerUpRight"] = "corner-up-right";
    Icons["Court"] = "court";
    Icons["CreditCard_1CardPayment"] = "credit-card-1-card-payment";
    Icons["CreditCard_2CardPayment"] = "credit-card-2-card-payment";
    Icons["CreditCard_3CardPayment"] = "credit-card-3-card-payment";
    Icons["Crop"] = "crop";
    Icons["CrossedLargeClose"] = "crossed-large-close";
    Icons["CrossedSmallDeleteRemove"] = "crossed-small-delete-remove";
    Icons["CrownVip"] = "crown-vip";
    Icons["CryptoCoin"] = "crypto-coin";
    Icons["Crypto"] = "crypto";
    Icons["CupCoffeeTeaMilk"] = "cup-coffee-tea-milk";
    Icons["CupTeaCoffee"] = "cup-tea-coffee";
    Icons["Cursor_1Arrow"] = "cursor-1-arrow";
    Icons["Cursor_2Arrow"] = "cursor-2-arrow";
    Icons["Cursor_3Arrow"] = "cursor-3-arrow";
    Icons["CursorBoxArrow"] = "cursor-box-arrow";
    Icons["CursorClickArrowClickbait"] = "cursor-click-arrow-clickbait";
    Icons["DashboardFast"] = "dashboard-fast";
    Icons["DashboardLow"] = "dashboard-low";
    Icons["DashboardMiddle"] = "dashboard-middle";
    Icons["Dashboard"] = "dashboard";
    Icons["DateTimeCalendarTime"] = "date-time-calendar-time";
    Icons["DebugDebugger"] = "debug-debugger";
    Icons["Delete_2RemoveGarbageWasteTrashCan"] = "delete-2-remove-garbage-waste-trash-can";
    Icons["DeleteRemoveBackspace"] = "delete-remove-backspace";
    Icons["DeleteRemoveGarbageWasteTrashCan"] = "delete-remove-garbage-waste-trash-can";
    Icons["DeleteSimple"] = "delete-simple";
    Icons["Dice_1Roll"] = "dice-1-roll";
    Icons["Dice_2Roll"] = "dice-2-roll";
    Icons["Dice_3Roll"] = "dice-3-roll";
    Icons["Dice_4Roll"] = "dice-4-roll";
    Icons["Dice_5Roll"] = "dice-5-roll";
    Icons["Dice_6Roll"] = "dice-6-roll";
    Icons["DirectorChairRegieChair"] = "director-chair-regie-chair";
    Icons["Disk_1Save"] = "disk-1-save";
    Icons["Disk_2Save"] = "disk-2-save";
    Icons["DividerAddLine"] = "divider-add-line";
    Icons["DockBoxArrow"] = "dock-box-arrow";
    Icons["DocumentListPageFile"] = "document-list-page-file";
    Icons["DocumentWithLinesListPageFile"] = "document-with-lines-list-page-file";
    Icons["DollarCurrencyMoneyCoinUsd"] = "dollar-currency-money-coin-usd";
    Icons["Donut"] = "donut";
    Icons["Dossier"] = "dossier";
    Icons["DotGridMenuGrab"] = "dot-grid-menu-grab";
    Icons["DotHorizontalMenuGrab"] = "dot-horizontal-menu-grab";
    Icons["DotVerticalMenuGrab"] = "dot-vertical-menu-grab";
    Icons["DownGamepadBaseControllsGameJoystick"] = "down-gamepad-base-controlls-game-joystick";
    Icons["DownGamepadBaseRoundControllsGameJoystick"] = "down-gamepad-base-round-controlls-game-joystick";
    Icons["DownloadCircleArrowDown"] = "download-circle-arrow-down";
    Icons["DownloadFileDown"] = "download-file-down";
    Icons["DownloadSquareArrowDown"] = "download-square-arrow-down";
    Icons["DragGrab"] = "drag-grab";
    Icons["DrinkCupStraw"] = "drink-cup-straw";
    Icons["DropWaterPrecipitationLiquid"] = "drop-water-precipitation-liquid";
    Icons["EarthGlobeWorld"] = "earth-globe-world";
    Icons["Edit_01"] = "edit-01";
    Icons["EditBigBoxPencilPenWriteDraw"] = "edit-big-box-pencil-pen-write-draw";
    Icons["EditPencilWrite"] = "edit-pencil-write";
    Icons["EditSmallBoxPencilPenWriteDraw"] = "edit-small-box-pencil-pen-write-draw";
    Icons["Email_2EnvelopeMail"] = "email-2-envelope-mail";
    Icons["Email_2NotificationBadgeEnvelopeMail"] = "email-2-notification-badge-envelope-mail";
    Icons["EmailEnvelope_1"] = "email-envelope-1";
    Icons["EmailEnvelope"] = "email-envelope";
    Icons["ErrorWarningAlert"] = "error-warning-alert";
    Icons["EscPower"] = "esc-power";
    Icons["Ethereum"] = "ethereum";
    Icons["EuroCurrencyMoneyCoinEuro"] = "euro-currency-money-coin-euro";
    Icons["ExpandArrowEnlarge"] = "expand-arrow-enlarge";
    Icons["ExpandWindowLayout"] = "expand-window-layout";
    Icons["ExplosionBoomBangPop"] = "explosion-boom-bang-pop";
    Icons["EyeClosedSeeHidden"] = "eye-closed-see-hidden";
    Icons["FastForward_10s"] = "fast-forward-10s";
    Icons["FastForward_15s"] = "fast-forward-15s";
    Icons["FastForward_30s"] = "fast-forward-30s";
    Icons["FastForward_5s"] = "fast-forward-5s";
    Icons["FastForwardSymbol"] = "fast-forward-symbol";
    Icons["FeaturesToTheMoon"] = "features-to-the-moon";
    Icons["File_1DocumentCloudSync"] = "file-1-document-cloud-sync";
    Icons["File_2DocumentsCopy"] = "file-2-documents-copy";
    Icons["File_3DocumentCloudSync"] = "file-3-document-cloud-sync";
    Icons["File_4DocumentCloudSync"] = "file-4-document-cloud-sync";
    Icons["File_5DocumentCloudSync"] = "file-5-document-cloud-sync";
    Icons["File_6DocumentText"] = "file-6-document-text";
    Icons["File_7DocumentLockedPassword"] = "file-7-document-locked-password";
    Icons["File_8DocumentCloudSync"] = "file-8-document-cloud-sync";
    Icons["Filter_1Sort"] = "filter-1-sort";
    Icons["Filter_2Sort"] = "filter-2-sort";
    Icons["FilterAscendingSortAzAscendingAsc"] = "filter-ascending-sort-az-ascending-asc";
    Icons["FilterDescendingSortZaDescendingDesc"] = "filter-descending-sort-za-descending-desc";
    Icons["FilterTimelineSort"] = "filter-timeline-sort";
    Icons["FinderFaceId"] = "finder-face-id";
    Icons["FinderFilesOs"] = "finder-files-os";
    Icons["FingerPrint_2TouchId"] = "finger-print-2-touch-id";
    Icons["FingerPrintTouchId"] = "finger-print-touch-id";
    Icons["Fire_1FlameHotHeat"] = "fire-1-flame-hot-heat";
    Icons["Fire_2FlameHotHeat"] = "fire-2-flame-hot-heat";
    Icons["FistbumpBoomHandsFriends"] = "fistbump-boom-hands-friends";
    Icons["Flag_2Priority_1"] = "flag-2-priority-1";
    Icons["Flag_2Priority"] = "flag-2-priority";
    Icons["FocusCameraExposureAutofocusAuto"] = "focus-camera-exposure-autofocus-auto";
    Icons["FocusCameraExposureFlash"] = "focus-camera-exposure-flash";
    Icons["FocusCameraExposureLock"] = "focus-camera-exposure-lock";
    Icons["FocusCameraExposureMacroFlower"] = "focus-camera-exposure-macro-flower";
    Icons["FocusCameraExposureMagicAutoAiSparklesEffects"] = "focus-camera-exposure-magic-auto-ai-sparkles-effects";
    Icons["FocusCameraExposureSquare"] = "focus-camera-exposure-square";
    Icons["FocusCameraExposureUnlock"] = "focus-camera-exposure-unlock";
    Icons["FocusCameraExposureZoomIn"] = "focus-camera-exposure-zoom-in";
    Icons["FocusCameraExposureZoomOut"] = "focus-camera-exposure-zoom-out";
    Icons["FocusCameraExposure"] = "focus-camera-exposure";
    Icons["FocusExposureMacroFlower_2"] = "focus-exposure-macro-flower-2";
    Icons["Folder_1"] = "folder-1";
    Icons["Folder_2"] = "folder-2";
    Icons["Folder_3"] = "folder-3";
    Icons["FolderAddPlus"] = "folder-add-plus";
    Icons["FolderBookmarksBookmark"] = "folder-bookmarks-bookmark";
    Icons["FolderCloud_1"] = "folder-cloud-1";
    Icons["FolderCloud_2"] = "folder-cloud-2";
    Icons["FolderDeleteX"] = "folder-delete-x";
    Icons["FolderDownload"] = "folder-download";
    Icons["FolderRestricted"] = "folder-restricted";
    Icons["FolderSharedUser"] = "folder-shared-user";
    Icons["FolderUpload"] = "folder-upload";
    Icons["Folder"] = "folder";
    Icons["Folders"] = "folders";
    Icons["Fork"] = "fork";
    Icons["Forwards"] = "forwards";
    Icons["GamepadBaseControllsGameJoystick"] = "gamepad-base-controlls-game-joystick";
    Icons["GamepadBaseRoundControllsGameJoystick"] = "gamepad-base-round-controlls-game-joystick";
    Icons["GamepadGamingJoystickGames"] = "gamepad-gaming-joystick-games";
    Icons["Garage"] = "garage";
    Icons["Gas"] = "gas";
    Icons["GearCogWheel"] = "gear-cog-wheel";
    Icons["GhostHiddenUnknown"] = "ghost-hidden-unknown";
    Icons["GifSquare"] = "gif-square";
    Icons["Gif"] = "gif";
    Icons["GiftSideViewPresent"] = "gift-side-view-present";
    Icons["GiftTopView"] = "gift-top-view";
    Icons["Giftcard"] = "giftcard";
    Icons["GiroCard"] = "giro-card";
    Icons["GlobusMapEarthGlobe"] = "globus-map-earth-globe";
    Icons["GolfBall"] = "golf-ball";
    Icons["GraduateCapStudyEducationAcademicStudent"] = "graduate-cap-study-education-academic-student";
    Icons["GraphLinesStatisticsDocumentListPageFile"] = "graph-lines-statistics-document-list-page-file";
    Icons["GraphStatisticsDocumentListPageFile"] = "graph-statistics-document-list-page-file";
    Icons["GrowthGrowLeafs"] = "growth-grow-leafs";
    Icons["H1HeadingHeadline"] = "h1-heading-headline";
    Icons["H2HeadingHeadline"] = "h2-heading-headline";
    Icons["H3HeadingHeadline"] = "h3-heading-headline";
    Icons["Hand_4FingerSelect"] = "hand-4-finger-select";
    Icons["Hand_5FingerSelect"] = "hand-5-finger-select";
    Icons["Hashtag"] = "hashtag";
    Icons["Hd"] = "hd";
    Icons["HeadAvatar"] = "head-avatar";
    Icons["HeadphonesSupport"] = "headphones-support";
    Icons["Heart_2LikeHealthLifeFav"] = "heart-2-like-health-life-fav";
    Icons["HeartBeatHeartRatePulse"] = "heart-beat-heart-rate-pulse";
    Icons["HeartLikeHealthLifeFavorite"] = "heart-like-health-life-favorite";
    Icons["HideEyeOffSeeLookNotVisible"] = "hide-eye-off-see-look-not-visible";
    Icons["Highlight"] = "highlight";
    Icons["HomeDoorHouse_1"] = "home-door-house-1";
    Icons["HomeDoorHouse"] = "home-door-house";
    Icons["HomeLineHouse"] = "home-line-house";
    Icons["HomeOpenHouse"] = "home-open-house";
    Icons["HomeRoofHouse"] = "home-roof-house";
    Icons["HomeSimpleHouse_1"] = "home-simple-house-1";
    Icons["HomeSimpleHouse"] = "home-simple-house";
    Icons["HourglassTimeWatchClock"] = "hourglass-time-watch-clock";
    Icons["IceHockey"] = "ice-hockey";
    Icons["IconIconsShapesGames"] = "icon-icons-shapes-games";
    Icons["ImacComputerDevice_2"] = "imac-computer-device-2";
    Icons["ImageWallpaperLandscapeOs"] = "image-wallpaper-landscape-os";
    Icons["Images_1PhotosPicturesShot"] = "images-1-photos-pictures-shot";
    Icons["Images_2PhotosPicturesShot"] = "images-2-photos-pictures-shot";
    Icons["Images_3PhotosPicturesShot"] = "images-3-photos-pictures-shot";
    Icons["Images_4PhotosPicturesShot"] = "images-4-photos-pictures-shot";
    Icons["Images_5PhotosPicturesShot"] = "images-5-photos-pictures-shot";
    Icons["Inbox_1ArchiveTrayShelf"] = "inbox-1-archive-tray-shelf";
    Icons["Inbox_2ArchiveTrayShelf"] = "inbox-2-archive-tray-shelf";
    Icons["InfinityLoopBoomerang"] = "infinity-loop-boomerang";
    Icons["InfoCircleTooltip"] = "info-circle-tooltip";
    Icons["InfoSquare"] = "info-square";
    Icons["Invite_1"] = "invite-1";
    Icons["Invite"] = "invite";
    Icons["Italic"] = "italic";
    Icons["Key"] = "key";
    Icons["KeyboardDownCloseDownOpenArrow"] = "keyboard-down-close-down-open-arrow";
    Icons["KeyboardMidiKeysPiano"] = "keyboard-midi-keys-piano";
    Icons["KeyboardUp_1CloseDownOpenArrow"] = "keyboard-up-1-close-down-open-arrow";
    Icons["KeyboardUp_2CloseDownOpenArrow"] = "keyboard-up-2-close-down-open-arrow";
    Icons["Lab"] = "lab";
    Icons["LaunchRocket"] = "launch-rocket";
    Icons["LawLegalTermsImprintBalance"] = "law-legal-terms-imprint-balance";
    Icons["LayerBehindSlidesPages"] = "layer-behind-slides-pages";
    Icons["Layers_2Stack"] = "layers-2-stack";
    Icons["Layers_3Stack"] = "layers-3-stack";
    Icons["LayersCopy"] = "layers-copy";
    Icons["Layout_2RowsGridWindow"] = "layout-2-rows-grid-window";
    Icons["Layout_3RowsGridWindow"] = "layout-3-rows-grid-window";
    Icons["LayoutBottomGridWindow"] = "layout-bottom-grid-window";
    Icons["LayoutColumnGridColumn"] = "layout-column-grid-column";
    Icons["LayoutDashboardGridWindow"] = "layout-dashboard-grid-window";
    Icons["LayoutGrid_1GridWindow"] = "layout-grid-1-grid-window";
    Icons["LayoutGrid_2Grid"] = "layout-grid-2-grid";
    Icons["LayoutGridListSearchFindMagifier"] = "layout-grid-list-search-find-magifier";
    Icons["LayoutLeftGridWindow"] = "layout-left-grid-window";
    Icons["LayoutRightGridWindow"] = "layout-right-grid-window";
    Icons["LayoutSidebarGridWindow"] = "layout-sidebar-grid-window";
    Icons["LayoutTopGridWindow"] = "layout-top-grid-window";
    Icons["LayoutTopbarGridWindow"] = "layout-topbar-grid-window";
    Icons["LayoutWindowGridWindow"] = "layout-window-grid-window";
    Icons["LeftGamepadBaseControllsGameJoystick"] = "left-gamepad-base-controlls-game-joystick";
    Icons["LeftGamepadBaseRoundControllsGameJoystick"] = "left-gamepad-base-round-controlls-game-joystick";
    Icons["Library"] = "library";
    Icons["LifeVestVest"] = "life-vest-vest";
    Icons["LightBulbIdeaLight"] = "light-bulb-idea-light";
    Icons["LightBulbSimpleIdea"] = "light-bulb-simple-idea";
    Icons["LightRain"] = "light-rain";
    Icons["LightningZapFlash"] = "lightning-zap-flash";
    Icons["LineChart_2StatisticsGraph"] = "line-chart-2-statistics-graph";
    Icons["LineChart_3StatisticsGraph_1"] = "line-chart-3-statistics-graph-1";
    Icons["LineChart_3StatisticsGraph"] = "line-chart-3-statistics-graph";
    Icons["LineChartStatisticsGraph"] = "line-chart-statistics-graph";
    Icons["Link_1Chain"] = "link-1-chain";
    Icons["Link_2Chain"] = "link-2-chain";
    Icons["Link_3Chain"] = "link-3-chain";
    Icons["LinkDocumentListPageFile"] = "link-document-list-page-file";
    Icons["LinkLinesDocumentListPageFile"] = "link-lines-document-list-page-file";
    Icons["ListSearchFindMagifier"] = "list-search-find-magifier";
    Icons["LiveSignal"] = "live-signal";
    Icons["Loader"] = "loader";
    Icons["LocationExploreCompass"] = "location-explore-compass";
    Icons["LocationMapRoute"] = "location-map-route";
    Icons["LockPrivate"] = "lock-private";
    Icons["LoginEnterDoor"] = "login-enter-door";
    Icons["LogoutLeaveDoor"] = "logout-leave-door";
    Icons["MacbookLaptopComputerDevice"] = "macbook-laptop-computer-device";
    Icons["MacinthoshMac"] = "macinthosh-mac";
    Icons["MagicBookMagician"] = "magic-book-magician";
    Icons["MagicBox"] = "magic-box";
    Icons["MagicEyes"] = "magic-eyes";
    Icons["MagicHandsMagicRainbow"] = "magic-hands-magic-rainbow";
    Icons["MagicHat"] = "magic-hat";
    Icons["MagicPencilMagicBrush"] = "magic-pencil-magic-brush";
    Icons["MagicStickStar"] = "magic-stick-star";
    Icons["MagicStickTop"] = "magic-stick-top";
    Icons["MagicStick"] = "magic-stick";
    Icons["MapPaper"] = "map-paper";
    Icons["Markdown"] = "markdown";
    Icons["MedalTrophyBadgeWinnerWin"] = "medal-trophy-badge-winner-win";
    Icons["MegaphoneLoudSpeakPromote"] = "megaphone-loud-speak-promote";
    Icons["Memory_1SimCardCard"] = "memory-1-sim-card-card";
    Icons["Memory_2SimCardSdCard"] = "memory-2-sim-card-sd-card";
    Icons["Menu_1GridCircle"] = "menu-1-grid-circle";
    Icons["Menu_1ListHamburger"] = "menu-1-list-hamburger";
    Icons["Menu_2GridCircle"] = "menu-2-grid-circle";
    Icons["Menu_2ListHamburger"] = "menu-2-list-hamburger";
    Icons["Menu_3ListHamburger"] = "menu-3-list-hamburger";
    Icons["MenuSimpleNavSimple"] = "menu-simple-nav-simple";
    Icons["MicrophoneMicSoundPodcast_1"] = "microphone-mic-sound-podcast-1";
    Icons["MicrophoneMicSoundPodcast"] = "microphone-mic-sound-podcast";
    Icons["MinimizeArrowShrink"] = "minimize-arrow-shrink";
    Icons["MinimizeWindowLayout"] = "minimize-window-layout";
    Icons["MinusCircleRemove"] = "minus-circle-remove";
    Icons["MinusLarge"] = "minus-large";
    Icons["MinusSmall"] = "minus-small";
    Icons["MinusSquareRemoveDelete"] = "minus-square-remove-delete";
    Icons["MoneyBillDollarEuro"] = "money-bill-dollar-euro";
    Icons["MoneyHandCoins"] = "money-hand-coins";
    Icons["MoonDarkModeNight"] = "moon-dark-mode-night";
    Icons["MoonStarNight"] = "moon-star-night";
    Icons["Mouse_1"] = "mouse-1";
    Icons["Mouse_2ScrollDown"] = "mouse-2-scroll-down";
    Icons["Mouse_3ScrollUp"] = "mouse-3-scroll-up";
    Icons["MoveFocus"] = "move-focus";
    Icons["Move"] = "move";
    Icons["MultiMediaMediaImageAndVideo"] = "multi-media-media-image-and-video";
    Icons["MuteSoundOff"] = "mute-sound-off";
    Icons["NewsPaper"] = "news-paper";
    Icons["NewspaperNewsPaper"] = "newspaper-news-paper";
    Icons["Nfc_2"] = "nfc-2";
    Icons["Nfc"] = "nfc";
    Icons["NoFlash"] = "no-flash";
    Icons["NoteCardText"] = "note-card-text";
    Icons["NoteSticker"] = "note-sticker";
    Icons["Notes"] = "notes";
    Icons["NotificationAlarmBellActivityAlert"] = "notification-alarm-bell-activity-alert";
    Icons["NotificationBellActivity"] = "notification-bell-activity";
    Icons["NotificationOffBellActivity"] = "notification-off-bell-activity";
    Icons["NotificationsBadge"] = "notifications-badge";
    Icons["NumberedList"] = "numbered-list";
    Icons["Oculus"] = "oculus";
    Icons["Open_2NewLinkOpenLinkBoxArrow"] = "open-2-new-link-open-link-box-arrow";
    Icons["OpenNewLinkOpenLinkBoxArrow"] = "open-new-link-open-link-box-arrow";
    Icons["OpenQuoteBlockquote"] = "open-quote-blockquote";
    Icons["OptAltOptionAltKey"] = "opt-alt-option-alt-key";
    Icons["OptOptionKey"] = "opt-option-key";
    Icons["Orange"] = "orange";
    Icons["PackageDelivery_2"] = "package-delivery-2";
    Icons["PackageDelivery"] = "package-delivery";
    Icons["PagesBoards"] = "pages-boards";
    Icons["PanoramaView"] = "panorama-view";
    Icons["PaperPlaneSend"] = "paper-plane-send";
    Icons["PasskeysPasskeyPasswordless"] = "passkeys-passkey-passwordless";
    Icons["PassportVisa"] = "passport-visa";
    Icons["PasswordLockProtection"] = "password-lock-protection";
    Icons["Pause"] = "pause";
    Icons["Pencil_2PenToolWrite"] = "pencil-2-pen-tool-write";
    Icons["PencilPenToolWrite"] = "pencil-pen-tool-write";
    Icons["PeopleBehindUserAvatarGroup_3"] = "people-behind-user-avatar-group-3";
    Icons["PeopleCircleUserPersonAvatar_2"] = "people-circle-user-person-avatar-2";
    Icons["PeopleCopyMembers"] = "people-copy-members";
    Icons["PeopleLikeLoveHeart"] = "people-like-love-heart";
    Icons["PeopleShadowUserAvatarGroup_1"] = "people-shadow-user-avatar-group-1";
    Icons["PeopleShadowUserAvatarGroup"] = "people-shadow-user-avatar-group";
    Icons["PeopleTogetherUserAvatarGroup_2"] = "people-together-user-avatar-group-2";
    Icons["PeopleUserPersonAvatar"] = "people-user-person-avatar";
    Icons["PercentSales_1"] = "percent-sales-1";
    Icons["PercentSales"] = "percent-sales";
    Icons["PerformanceSpeedScale"] = "performance-speed-scale";
    Icons["PhoneDeviceIphoneMobile"] = "phone-device-iphone-mobile";
    Icons["PhoneDynamicIsland"] = "phone-dynamic-island";
    Icons["PictureInPicture"] = "picture-in-picture";
    Icons["PieChart_1GraphChartStatistics"] = "pie-chart-1-graph-chart-statistics";
    Icons["PieChart_2GraphChartStatistics"] = "pie-chart-2-graph-chart-statistics";
    Icons["PiggyBankSaveMoney"] = "piggy-bank-save-money";
    Icons["PinCircleLocation"] = "pin-circle-location";
    Icons["PinFlagLocation"] = "pin-flag-location";
    Icons["PinLocation_1"] = "pin-location-1";
    Icons["PinLocationBookmark"] = "pin-location-bookmark";
    Icons["PinLocation"] = "pin-location";
    Icons["Pinch"] = "pinch";
    Icons["Pizza"] = "pizza";
    Icons["PlaceholderGenerate"] = "placeholder-generate";
    Icons["PlayCircle"] = "play-circle";
    Icons["PlayGo"] = "play-go";
    Icons["PlayList"] = "play-list";
    Icons["PlusAddDocumentListPageFile"] = "plus-add-document-list-page-file";
    Icons["PlusAddLarge"] = "plus-add-large";
    Icons["PlusAddSmall"] = "plus-add-small";
    Icons["PlusCircleAdd"] = "plus-circle-add";
    Icons["PlusLinesAddDocumentListPageFile"] = "plus-lines-add-document-list-page-file";
    Icons["PlusSquareAdd"] = "plus-square-add";
    Icons["PointerHand"] = "pointer-hand";
    Icons["PoopSpam"] = "poop-spam";
    Icons["PopsicleBIceCreamSweets"] = "popsicle-b-ice-cream-sweets";
    Icons["PopsicleIceCreamSweets"] = "popsicle-ice-cream-sweets";
    Icons["PostcardCardNews"] = "postcard-card-news";
    Icons["PostsNotebookSketchbook"] = "posts-notebook-sketchbook";
    Icons["PoundCurrencyMoneyCoinGbp"] = "pound-currency-money-coin-gbp";
    Icons["PrinterPrint"] = "printer-print";
    Icons["ProcessorChip"] = "processor-chip";
    Icons["PullRequest"] = "pull-request";
    Icons["Qm3RoomTransformXyz_3d"] = "qm3-room-transform-xyz-3d";
    Icons["QrCode"] = "qr-code";
    Icons["QuestionmarkFaqHelpQuestionaire"] = "questionmark-faq-help-questionaire";
    Icons["RadarLocationSearch"] = "radar-location-search";
    Icons["Rainbow"] = "rainbow";
    Icons["RainyRain"] = "rainy-rain";
    Icons["RaisingHand_4FingerHeyHello"] = "raising-hand-4-finger-hey-hello";
    Icons["RaisingHand_5FingerHeyHello"] = "raising-hand-5-finger-hey-hello";
    Icons["ReadingListGlassesSteveJobs"] = "reading-list-glasses-steve-jobs";
    Icons["RearFrontCameraCamChangeLens"] = "rear-front-camera-cam-change-lens";
    Icons["ReceiptTicket"] = "receipt-ticket";
    Icons["RecordVoicemailBandTape"] = "record-voicemail-band-tape";
    Icons["Record"] = "record";
    Icons["RedoForward_1"] = "redo-forward-1";
    Icons["RedoForward"] = "redo-forward";
    Icons["RefreshRenew"] = "refresh-renew";
    Icons["RemoveColumnDeleteColumn"] = "remove-column-delete-column";
    Icons["RemovePeopleRemoveUserRemovePerson_2"] = "remove-people-remove-user-remove-person-2";
    Icons["RemovePeopleRemoveUserRemovePerson"] = "remove-people-remove-user-remove-person";
    Icons["RemoveRowDeleteRow"] = "remove-row-delete-row";
    Icons["Repeat_2Retweet"] = "repeat-2-retweet";
    Icons["RepeatRetweet"] = "repeat-retweet";
    Icons["Repeat"] = "repeat";
    Icons["RescueRingSwimBoyleHelpSupport"] = "rescue-ring-swim-boyle-help-support";
    Icons["ResizeBigBoxArrow"] = "resize-big-box-arrow";
    Icons["ResizeSmallBoxArrow"] = "resize-small-box-arrow";
    Icons["Rewind_10s"] = "rewind-10s";
    Icons["Rewind_15s"] = "rewind-15s";
    Icons["Rewind_30s"] = "rewind-30s";
    Icons["Rewind_5s"] = "rewind-5s";
    Icons["RewindSymbol"] = "rewind-symbol";
    Icons["RightGamepadBaseControllsGameJoystick"] = "right-gamepad-base-controlls-game-joystick";
    Icons["RightGamepadBaseRoundControllsGameJoystick"] = "right-gamepad-base-round-controlls-game-joystick";
    Icons["RocketStartupLaunch"] = "rocket-startup-launch";
    Icons["Rotate_02RepeatRefresh"] = "rotate-02-repeat-refresh";
    Icons["RotateClockwiseRotate"] = "rotate-clockwise-rotate";
    Icons["RotateCounterclockwiseRotate"] = "rotate-counterclockwise-rotate";
    Icons["RotateRepeatRefresh"] = "rotate-repeat-refresh";
    Icons["RotateRotationXAxis"] = "rotate-rotation-x-axis";
    Icons["RowsWideRowsWide"] = "rows-wide-rows-wide";
    Icons["Ruler"] = "ruler";
    Icons["RulesDirectionSplit"] = "rules-direction-split";
    Icons["SadEmojiUnhappy"] = "sad-emoji-unhappy";
    Icons["SandboxSafe"] = "sandbox-safe";
    Icons["ScanFocus_1"] = "scan-focus-1";
    Icons["ScanFocus"] = "scan-focus";
    Icons["SchoolBigBuilding"] = "school-big-building";
    Icons["Scissors_2Cut"] = "scissors-2-cut";
    Icons["ScissorsCut"] = "scissors-cut";
    Icons["SdCardMemoryStick"] = "sd-card-memory-stick";
    Icons["Search_2MagnifyingGlass"] = "search-2-magnifying-glass";
    Icons["SearchLinesMagnifierDocumentListPageFile"] = "search-lines-magnifier-document-list-page-file";
    Icons["SearchMagnifierDocumentListPageFile"] = "search-magnifier-document-list-page-file";
    Icons["SearchMagnifyingGlass"] = "search-magnifying-glass";
    Icons["SearchMenu"] = "search-menu";
    Icons["SearchPageFind"] = "search-page-find";
    Icons["SecuredLinesLockedSecurityDocumentListPageFile"] = "secured-lines-locked-security-document-list-page-file";
    Icons["SecuredLockedSecurityDocumentListPageFile"] = "secured-locked-security-document-list-page-file";
    Icons["SendEmailPaperPlaneArrow"] = "send-email-paper-plane-arrow";
    Icons["Server_1StorageDataCoinsMoney"] = "server-1-storage-data-coins-money";
    Icons["Server_2StorageDataCoinsMoney"] = "server-2-storage-data-coins-money";
    Icons["ServerDataStorage"] = "server-data-storage";
    Icons["Settings_1SwitchPreferences"] = "settings-1-switch-preferences";
    Icons["Settings_2GearPreferences"] = "settings-2-gear-preferences";
    Icons["Settings_3GearPreferences_1"] = "settings-3-gear-preferences-1";
    Icons["Settings_3GearPreferences"] = "settings-3-gear-preferences";
    Icons["Settings_6SliderThree"] = "settings-6-slider-three";
    Icons["Settings_7KnobVolumeOnOff"] = "settings-7-knob-volume-on-off";
    Icons["Settings_8Switch_2"] = "settings-8-switch-2";
    Icons["SettingsSliderHor"] = "settings-slider-hor";
    Icons["SettingsSliderVerSliderTwo"] = "settings-slider-ver-slider-two";
    Icons["Shaka_2CallMeHangTen"] = "shaka-2-call-me-hang-ten";
    Icons["ShakaCallMeHangTen"] = "shaka-call-me-hang-ten";
    Icons["Share_2Arrow"] = "share-2-arrow";
    Icons["ShareArrowLogin"] = "share-arrow-login";
    Icons["ShareArrow"] = "share-arrow";
    Icons["ShareScreenScreenSharing"] = "share-screen-screen-sharing";
    Icons["Shield_2Check"] = "shield-2-check";
    Icons["ShieldBreakNotSecure"] = "shield-break-not-secure";
    Icons["ShieldCheckSecurityProtection"] = "shield-check-security-protection";
    Icons["ShieldCrossedSecurityProtection"] = "shield-crossed-security-protection";
    Icons["ShieldProtectSecurityCheck"] = "shield-protect-security-check";
    Icons["ShieldSecurityProtection"] = "shield-security-protection";
    Icons["Shift"] = "shift";
    Icons["ShipChangelog"] = "ship-changelog";
    Icons["ShowEyeSeeRevealLookVisible"] = "show-eye-see-reveal-look-visible";
    Icons["ShredderPermanently"] = "shredder-permanently";
    Icons["ShuffleRandom"] = "shuffle-random";
    Icons["SidebarMenuListWindow"] = "sidebar-menu-list-window";
    Icons["SignDirectionRoute"] = "sign-direction-route";
    Icons["SignaturePencilPencilPenWriteDraw"] = "signature-pencil-pencil-pen-write-draw";
    Icons["SignatureSign"] = "signature-sign";
    Icons["SlidesPages"] = "slides-pages";
    Icons["SmileEmoji"] = "smile-emoji";
    Icons["SmileyFaceEmojiSmile"] = "smiley-face-emoji-smile";
    Icons["SmilingFaceHeartEyes"] = "smiling-face-heart-eyes";
    Icons["SnowCloud"] = "snow-cloud";
    Icons["SnowFlakesFreezeFrozen"] = "snow-flakes-freeze-frozen";
    Icons["SoccerFootballMls"] = "soccer-football-mls";
    Icons["Sort_1SwitchHorizontal"] = "sort-1-switch-horizontal";
    Icons["Sort_1SwitchVertical"] = "sort-1-switch-vertical";
    Icons["Sort_2SwitchHorizonatl"] = "sort-2-switch-horizonatl";
    Icons["Sort_2SwitchVertical"] = "sort-2-switch-vertical";
    Icons["SpaceStar"] = "space-star";
    Icons["SpatialSpatialCapture"] = "spatial-spatial-capture";
    Icons["SpeakerMusicSound"] = "speaker-music-sound";
    Icons["SquarePlaceholder"] = "square-placeholder";
    Icons["StapleNotebookCover"] = "staple-notebook-cover";
    Icons["Star_2MagicSparkle"] = "star-2-magic-sparkle";
    Icons["StarAiSparkle"] = "star-ai-sparkle";
    Icons["StarFavoriteAward"] = "star-favorite-award";
    Icons["Stocks"] = "stocks";
    Icons["Stop"] = "stop";
    Icons["StoppCircle"] = "stopp-circle";
    Icons["StopwatchTrack"] = "stopwatch-track";
    Icons["StorageHddSsd"] = "storage-hdd-ssd";
    Icons["StoreShopBusiness_1"] = "store-shop-business-1";
    Icons["StoreShopBusiness"] = "store-shop-business";
    Icons["StreamingLiveStream"] = "streaming-live-stream";
    Icons["StrikeThrough"] = "strike-through";
    Icons["StudioDisplayThunderbolt"] = "studio-display-thunderbolt";
    Icons["SuitcaseLuggageCase"] = "suitcase-luggage-case";
    Icons["SunDown"] = "sun-down";
    Icons["SunLightModeDay"] = "sun-light-mode-day";
    Icons["SunUp"] = "sun-up";
    Icons["Sunrise"] = "sunrise";
    Icons["Sunset"] = "sunset";
    Icons["Support"] = "support";
    Icons["SurpriseBunnyHatMagicHat"] = "surprise-bunny-hat-magic-hat";
    Icons["SyncCloudSync"] = "sync-cloud-sync";
    Icons["TableSpreedsheetChart"] = "table-spreedsheet-chart";
    Icons["TagSale"] = "tag-sale";
    Icons["Tape"] = "tape";
    Icons["Target_1Zoom"] = "target-1-zoom";
    Icons["Target_2Zoom"] = "target-2-zoom";
    Icons["TargetArrowGoalAim"] = "target-arrow-goal-aim";
    Icons["TaxDiscount"] = "tax-discount";
    Icons["TelephonePhoneContact"] = "telephone-phone-contact";
    Icons["Television_1TvMonitorVideoScreenDisplay"] = "television-1-tv-monitor-video-screen-display";
    Icons["Television_2TvMonitorVideoScreenDisplay"] = "television-2-tv-monitor-video-screen-display";
    Icons["Tennis"] = "tennis";
    Icons["TestTube"] = "test-tube";
    Icons["Text_2T_2"] = "text-2-t-2";
    Icons["TextIndentLeft"] = "text-indent-left";
    Icons["TextIndentRight"] = "text-indent-right";
    Icons["TextIndicator"] = "text-indicator";
    Icons["TextSize"] = "text-size";
    Icons["TextT"] = "text-t";
    Icons["ThumbsDownThumbHandNoContra"] = "thumbs-down-thumb-hand-no-contra";
    Icons["ThumbsUpThumbHandYesPro"] = "thumbs-up-thumb-hand-yes-pro";
    Icons["TicketAdmitVip"] = "ticket-admit-vip";
    Icons["TitleCase"] = "title-case";
    Icons["ToastBreakfest"] = "toast-breakfest";
    Icons["ToiletPaperWipe"] = "toilet-paper-wipe";
    Icons["Toolbox"] = "toolbox";
    Icons["TradeTrading"] = "trade-trading";
    Icons["Transcription"] = "transcription";
    Icons["Tree"] = "tree";
    Icons["Trending_1Trends"] = "trending-1-trends";
    Icons["Trending_2Trends"] = "trending-2-trends";
    Icons["Trending_3Trends"] = "trending-3-trends";
    Icons["Trending_4ChartAnalytics"] = "trending-4-chart-analytics";
    Icons["Trending_4Chart"] = "trending-4-chart";
    Icons["TrophyWinChampion"] = "trophy-win-champion";
    Icons["TruckDelivery"] = "truck-delivery";
    Icons["TwoDiceGameRandom"] = "two-dice-game-random";
    Icons["UfoBeam"] = "ufo-beam";
    Icons["UmbrellaSecurity"] = "umbrella-security";
    Icons["Underline"] = "underline";
    Icons["UndoBackBottom"] = "undo-back-bottom";
    Icons["UndoBackTop"] = "undo-back-top";
    Icons["UndockBoxArrow"] = "undock-box-arrow";
    Icons["UnlockedUnlockPrivate"] = "unlocked-unlock-private";
    Icons["UpGamepadBaseControllsGameJoystick"] = "up-gamepad-base-controlls-game-joystick";
    Icons["UpGamepadBaseRoundControllsGameJoystick"] = "up-gamepad-base-round-controlls-game-joystick";
    Icons["UploadShare"] = "upload-share";
    Icons["UsbConnectionConnectSaveData"] = "usb-connection-connect-save-data";
    Icons["VideoCamera_2"] = "video-camera-2";
    Icons["VideoCameraMoviePlay"] = "video-camera-movie-play";
    Icons["VideoClapperboard"] = "video-clapperboard";
    Icons["VideoClipFilmMovie"] = "video-clip-film-movie";
    Icons["VisionProAppWindow"] = "vision-pro-app-window";
    Icons["VisionProGoggles"] = "vision-pro-goggles";
    Icons["VisitPageOpenApp"] = "visit-page-open-app";
    Icons["Voice"] = "voice";
    Icons["Volleyball"] = "volleyball";
    Icons["VolumeDownSpeakerLoudSoundOnMusic"] = "volume-down-speaker-loud-sound-on-music";
    Icons["VolumeFullSpeakerLoudSoundOnMusic"] = "volume-full-speaker-loud-sound-on-music";
    Icons["VolumeHalfSpeakerLoudSoundOnMusic"] = "volume-half-speaker-loud-sound-on-music";
    Icons["VolumeMinimumSpeakerLoudSoundOnMusic"] = "volume-minimum-speaker-loud-sound-on-music";
    Icons["VolumeOffSpeakerLoudSoundOnMusic_1"] = "volume-off-speaker-loud-sound-on-music-1";
    Icons["VolumeOffSpeakerLoudSoundOnMusic"] = "volume-off-speaker-loud-sound-on-music";
    Icons["Wallet_1"] = "wallet-1";
    Icons["Wallet_2"] = "wallet-2";
    Icons["Wallet"] = "wallet";
    Icons["Watch_1ClockTime_1"] = "watch-1-clock-time-1";
    Icons["Watch_1ClockTime"] = "watch-1-clock-time";
    Icons["Web3CryptoSpace"] = "web3-crypto-space";
    Icons["WebcamCameraView"] = "webcam-camera-view";
    Icons["WhisperApi"] = "whisper-api";
    Icons["WhiteboardArtboard"] = "whiteboard-artboard";
    Icons["Wifi_2SpotSignalHotSpot"] = "wifi-2-spot-signal-hot-spot";
    Icons["WifiSpotSignalHotSpot"] = "wifi-spot-signal-hot-spot";
    Icons["Windy_1Wind"] = "windy-1-wind";
    Icons["WorldGlobusInternetWeb"] = "world-globus-internet-web";
    Icons["WriteBrief"] = "write-brief";
    Icons["WriteEditListList"] = "write-edit-list-list";
    Icons["YenCurrencyMoneyCoin"] = "yen-currency-money-coin";
    Icons["ZapLightningFlash"] = "zap-lightning-flash";
    Icons["ZipRarCompressedArchive"] = "zip-rar-compressed-archive";
    Icons["ZoomSearchMagnifyingGlass_1"] = "zoom-search-magnifying-glass-1";
    Icons["ZoomSearchMagnifyingGlass"] = "zoom-search-magnifying-glass";
})(Icons || (exports.Icons = Icons = {}));
exports.ICONS_CODEPOINTS = {
    [Icons.i4K]: "61697",
    [Icons.AccessibilityA11y]: "61698",
    [Icons.AccessibilityEyeA11y]: "61699",
    [Icons.ActivityNotificationPulseHeartbeatBeat]: "61700",
    [Icons.AddColumnAddPage]: "61701",
    [Icons.AddPagesAddBoards]: "61702",
    [Icons.AddPagesWideAddBoards]: "61703",
    [Icons.AddPeopleAddUserAddPerson_2]: "61704",
    [Icons.AddPeopleAddUserAddPerson]: "61705",
    [Icons.AddReactionReactionEmoji]: "61706",
    [Icons.AddRowAddRows]: "61707",
    [Icons.AddSheetAddCanvasAddPageVertical]: "61708",
    [Icons.AddSlideAddCanvasAddPageHorizontal]: "61709",
    [Icons.AddSlideAddPageAddCopy]: "61710",
    [Icons.AddedPeopleAddUserAddedPerson]: "61711",
    [Icons.AdressPackageDelivery]: "61712",
    [Icons.Ai_2Stars_180Sparkles]: "61713",
    [Icons.Ai_2StarsSparkles]: "61714",
    [Icons.Ai_3StarsSparkles]: "61715",
    [Icons.AiAvatarGeneratedAvatarProfileAiMagicAvatar]: "61716",
    [Icons.AiImagesMidjourneyAiGenerated]: "61717",
    [Icons.AiTextTextGeneration]: "61718",
    [Icons.Airplay]: "61719",
    [Icons.AirpodCaseAirpods]: "61720",
    [Icons.Albums]: "61721",
    [Icons.AlignBottom_2Arrow_1]: "61722",
    [Icons.AlignBottom_2Arrow]: "61723",
    [Icons.AlignBottomAlignment]: "61724",
    [Icons.AlignBottomArrow]: "61725",
    [Icons.AlignLeft_2Arrow]: "61726",
    [Icons.AlignLeftAlignment]: "61727",
    [Icons.AlignLeftArrow]: "61728",
    [Icons.AlignRight_2Arrow]: "61729",
    [Icons.AlignRightAlignment]: "61730",
    [Icons.AlignRightArrow]: "61731",
    [Icons.AlignTopAlignment]: "61732",
    [Icons.AlignTopArrow]: "61733",
    [Icons.AlignmentBar]: "61734",
    [Icons.AlignmentCenter]: "61735",
    [Icons.AlignmentJustify]: "61736",
    [Icons.AlignmentLeft]: "61737",
    [Icons.AlignmentRight]: "61738",
    [Icons.AltAltTextAltTag]: "61739",
    [Icons.AltText]: "61740",
    [Icons.AmericanFootballNfl]: "61741",
    [Icons.Anchor_1]: "61742",
    [Icons.Anchor_2]: "61743",
    [Icons.AnnotationBubbleAddPlus]: "61744",
    [Icons.AnnotationBubbleCheck]: "61745",
    [Icons.AnnotationBubbleXCloseDelete]: "61746",
    [Icons.AnonymousAnonymHidden]: "61747",
    [Icons.AppleFruit]: "61748",
    [Icons.ArAugmentedReality_3dViewCube_1]: "61749",
    [Icons.ArAugmentedReality_3dViewCube_2]: "61750",
    [Icons.ArAugmentedReality_3dViewCube]: "61751",
    [Icons.ArAugmentedRealityCardBox_3dVirtualRealityVr]: "61752",
    [Icons.ArAugmentedRealityScan_3dViewCube]: "61753",
    [Icons.ArAugmentedRealityScan_3d]: "61754",
    [Icons.ArAugumentRealityVrVirtualReality]: "61755",
    [Icons.ArcBrowserFace]: "61756",
    [Icons.ArchiveBoxInboxFile]: "61757",
    [Icons.ArchiveFolderBox]: "61758",
    [Icons.AroundSpatial]: "61759",
    [Icons.ArrowBottomCircle]: "61760",
    [Icons.ArrowBottomLeft]: "61761",
    [Icons.ArrowBottomRight]: "61762",
    [Icons.ArrowBottom]: "61763",
    [Icons.ArrowExpandH]: "61764",
    [Icons.ArrowExpandV]: "61765",
    [Icons.ArrowLeftCircle]: "61766",
    [Icons.ArrowLeft]: "61767",
    [Icons.ArrowPathDown]: "61768",
    [Icons.ArrowPathLeft]: "61769",
    [Icons.ArrowPathRight]: "61770",
    [Icons.ArrowPathUp]: "61771",
    [Icons.ArrowRightCircle]: "61772",
    [Icons.ArrowRight]: "61773",
    [Icons.ArrowTopCircle]: "61774",
    [Icons.ArrowTopLeft]: "61775",
    [Icons.ArrowTopRight]: "61776",
    [Icons.ArrowTop]: "61777",
    [Icons.ArrowTriangleBottom]: "61778",
    [Icons.ArrowTriangleLeft]: "61779",
    [Icons.ArrowTriangleRight]: "61780",
    [Icons.ArrowTriangleTop]: "61781",
    [Icons.AsteriskPlaceholder]: "61782",
    [Icons.At]: "61783",
    [Icons.Attachment_2AttachPaperClip]: "61784",
    [Icons.AttachmentAttachDocumentAttachementListPageFile]: "61785",
    [Icons.AttachmentAttachPaperClip]: "61786",
    [Icons.AudioMusicPlaylistMusicalNote]: "61787",
    [Icons.AutoFlash]: "61788",
    [Icons.AutoSizeAutomaticSizePagePageSize]: "61789",
    [Icons.Avocado]: "61790",
    [Icons.Back]: "61791",
    [Icons.BackwardDeleteRemoveKey]: "61792",
    [Icons.BadgeVerifiedAward]: "61793",
    [Icons.Bag_2LuggageBuggage]: "61794",
    [Icons.Bag_2Shopping]: "61795",
    [Icons.BagLuggageBuggage]: "61796",
    [Icons.BagShopping]: "61797",
    [Icons.Bank_1]: "61798",
    [Icons.Bank]: "61799",
    [Icons.BarcodeScan]: "61800",
    [Icons.Baseball]: "61801",
    [Icons.Basket_1CartShopping]: "61802",
    [Icons.Basket_2ShoppingBag]: "61803",
    [Icons.BasketballNba]: "61804",
    [Icons.BatteryEmptyPower]: "61805",
    [Icons.BatteryErrorPower]: "61806",
    [Icons.BatteryFullPower]: "61807",
    [Icons.BatteryLoadingPower]: "61808",
    [Icons.BatteryLowPower]: "61809",
    [Icons.BatteryMediumPower]: "61810",
    [Icons.BellConcierge]: "61811",
    [Icons.BellNotify]: "61812",
    [Icons.BezierAddPlusVectorNodes]: "61813",
    [Icons.BezierCircleVectorNodes]: "61814",
    [Icons.BezierCurveBezierVector]: "61815",
    [Icons.BezierCurvesAnimationMotionSpring]: "61816",
    [Icons.BezierRemoveDeleteMinusVectorNodes]: "61817",
    [Icons.BezierVectorNodesEdit_1]: "61818",
    [Icons.BezierVectorNodesEdit]: "61819",
    [Icons.BezierVectorNodes]: "61820",
    [Icons.BillPurchaceInvoice_1]: "61821",
    [Icons.BillPurchaceInvoice]: "61822",
    [Icons.BirthdayCake]: "61823",
    [Icons.BlockAds]: "61824",
    [Icons.Block]: "61825",
    [Icons.Bluetooth]: "61826",
    [Icons.BnoozeBell]: "61827",
    [Icons.Bold]: "61828",
    [Icons.BombBoom]: "61829",
    [Icons.Book_2GuideInfoFaq]: "61830",
    [Icons.BookGuideInfoFaq]: "61831",
    [Icons.BookmarkBannerFlagTag]: "61832",
    [Icons.BookmarkCheckAddCheck]: "61833",
    [Icons.BookmarkDeleteRemoveBannerFlagTag]: "61834",
    [Icons.BookmarkPlusBannerFlagTag]: "61835",
    [Icons.Bot]: "61836",
    [Icons.Brackets_1]: "61837",
    [Icons.Brackets_2]: "61838",
    [Icons.BrainAiThinking]: "61839",
    [Icons.Branches]: "61840",
    [Icons.BrokenLink]: "61841",
    [Icons.BroomBrush]: "61842",
    [Icons.Browser_2WindowAppDesktop]: "61843",
    [Icons.BrowserWindowAppDesktop]: "61844",
    [Icons.BrushColor]: "61845",
    [Icons.Bubble_2AnnotationMessage]: "61846",
    [Icons.Bubble_2Message]: "61847",
    [Icons.Bubble_3Message]: "61848",
    [Icons.Bubble_4AnnotationMessage]: "61849",
    [Icons.Bubble_5AnnotationMessage]: "61850",
    [Icons.Bubble_5Message]: "61851",
    [Icons.Bubble_6AnnotationMessage]: "61852",
    [Icons.Bubble_6Message]: "61853",
    [Icons.Bubble_7AnnotationMessage]: "61854",
    [Icons.Bubble_7Message]: "61855",
    [Icons.Bubble_7TextMessage]: "61856",
    [Icons.BubbleAnnotationMessage]: "61857",
    [Icons.BubbleMessageAnnotationExclamationMarkAlertTooltip]: "61858",
    [Icons.BubbleMessageAnnotationInfoTooltip]: "61859",
    [Icons.BubbleMessageDotsThreeDot]: "61860",
    [Icons.BubbleMessageLikeHeart]: "61861",
    [Icons.BubbleMessageQuestionMarkTooltip]: "61862",
    [Icons.BubbleMessageSparkleAiTooltip]: "61863",
    [Icons.BubbleMessageText]: "61864",
    [Icons.BubbleMessage]: "61865",
    [Icons.BubbleNotificationBadgeMessage]: "61866",
    [Icons.Bubbles_2MessagesChatCommunicate]: "61867",
    [Icons.Bubbles]: "61868",
    [Icons.BucketTrashCan]: "61869",
    [Icons.Bug_1Issue]: "61870",
    [Icons.BugIssue]: "61871",
    [Icons.Buildings]: "61872",
    [Icons.BulletList]: "61873",
    [Icons.BurgerHamburgerCheeseburgerSandwich]: "61874",
    [Icons.BurgerHamburgerSandwich]: "61875",
    [Icons.BusinessShopStore]: "61876",
    [Icons.Calculator]: "61877",
    [Icons.Calendar_1]: "61878",
    [Icons.Calendar_2]: "61879",
    [Icons.CalendarAddInsertDate]: "61880",
    [Icons.CalendarB]: "61881",
    [Icons.CalendarCheckCheckmarkAccept]: "61882",
    [Icons.CalendarCheck]: "61883",
    [Icons.CalendarDateSearchMagnifierGlass]: "61884",
    [Icons.CalendarDays]: "61885",
    [Icons.CalendarEditDateEdit]: "61886",
    [Icons.CalendarTimeClock]: "61887",
    [Icons.CalendarXCloseRemoveDelete]: "61888",
    [Icons.CalenderAdd]: "61889",
    [Icons.CalenderRemove]: "61890",
    [Icons.CallIncoming]: "61891",
    [Icons.CallOutgoing]: "61892",
    [Icons.CallPhone]: "61893",
    [Icons.Camera_1OffPictureImageCam]: "61894",
    [Icons.Camera_1PictureImageCam]: "61895",
    [Icons.Camera_2PictureImageCam]: "61896",
    [Icons.Camera_3PictureImageCam]: "61897",
    [Icons.Camera_4ActionCamGoPro]: "61898",
    [Icons.CameraPictureImageCamCloseCrossOff_1]: "61899",
    [Icons.CameraPictureImageCamCloseCrossOff]: "61900",
    [Icons.Camera]: "61901",
    [Icons.CancelCall]: "61902",
    [Icons.Car]: "61903",
    [Icons.Cards]: "61904",
    [Icons.CarusselSlides]: "61905",
    [Icons.CatImageAnimalCute]: "61906",
    [Icons.CelebratePartyConfetti]: "61907",
    [Icons.Chart_1StatisticsFlipchartPresentationGraph]: "61908",
    [Icons.Chart_2StatisticsFlipchartPresentationGraph_2]: "61909",
    [Icons.Chart_3StatisticsGraphSignal_1]: "61910",
    [Icons.Chart_3StatisticsGraphSignal]: "61911",
    [Icons.Chart_4StatisticsGraph_2]: "61912",
    [Icons.Chart_5StatisticsGraph_3]: "61913",
    [Icons.Chart_6StatisticsGraph_4]: "61914",
    [Icons.Chart_7StatisticsGraph_5]: "61915",
    [Icons.ChatGpt]: "61916",
    [Icons.CheckChecmark]: "61917",
    [Icons.CheckRadioCircleCheckboxCheckCheckmarkConfirm]: "61918",
    [Icons.CheckboxCheckCheckmarkConfirm]: "61919",
    [Icons.ChecklistBoxCheckListSearch_1]: "61920",
    [Icons.ChecklistBoxCheckListSearch]: "61921",
    [Icons.ChecklistBoxCheckList]: "61922",
    [Icons.ChecklistList]: "61923",
    [Icons.ChevronBottom]: "61924",
    [Icons.ChevronDoubleDown]: "61925",
    [Icons.ChevronDoubleLeft]: "61926",
    [Icons.ChevronDoubleRight]: "61927",
    [Icons.ChevronDoubleUp]: "61928",
    [Icons.ChevronDownSmall]: "61929",
    [Icons.ChevronGrabberHorizontal_1]: "61930",
    [Icons.ChevronGrabberHorizontal]: "61931",
    [Icons.ChevronLargeDownChevDown]: "61932",
    [Icons.ChevronLargeLeftChevLeft]: "61933",
    [Icons.ChevronLargeRightChevRight]: "61934",
    [Icons.ChevronLargeTopChevTop]: "61935",
    [Icons.ChevronLeft]: "61936",
    [Icons.ChevronRightSmall_1]: "61937",
    [Icons.ChevronRightSmall]: "61938",
    [Icons.ChevronRight]: "61939",
    [Icons.ChevronTopSmall]: "61940",
    [Icons.ChevronTop]: "61941",
    [Icons.ChromecastCast]: "61942",
    [Icons.CirclePlaceholderOff]: "61943",
    [Icons.CirclePlaceholderOn]: "61944",
    [Icons.Clipboard_2CopyList]: "61945",
    [Icons.ClipboardCopyList]: "61946",
    [Icons.ClockAlertTimer]: "61947",
    [Icons.ClockCircleTime]: "61948",
    [Icons.ClockSnoozeTimerSnoozeZz]: "61949",
    [Icons.ClockSquareTimeTimerWatch]: "61950",
    [Icons.CloseQuoteBlockquote]: "61951",
    [Icons.CloseXCheckboxRemove]: "61952",
    [Icons.CloseXCircleRemove]: "61953",
    [Icons.ClosedCaptioningCc]: "61954",
    [Icons.CloudClouds]: "61955",
    [Icons.CloudDownload]: "61956",
    [Icons.CloudLinesSyncDocumentListPageFile]: "61957",
    [Icons.CloudOff_2Offline]: "61958",
    [Icons.CloudOffOffline]: "61959",
    [Icons.CloudSimpleArrowDownDownload]: "61960",
    [Icons.CloudSimpleDisconnectedError]: "61961",
    [Icons.CloudSimple]: "61962",
    [Icons.CloudSyncDocumentListPageFile]: "61963",
    [Icons.CloudUpload]: "61964",
    [Icons.Cloud]: "61965",
    [Icons.CloudyClouds]: "61966",
    [Icons.CloudySunClouds]: "61967",
    [Icons.CmdBoxCommandAppleKey]: "61968",
    [Icons.CmdCommandAppleKey]: "61969",
    [Icons.CodeBrackets]: "61970",
    [Icons.CodeInsert]: "61971",
    [Icons.CodeLines]: "61972",
    [Icons.Code]: "61973",
    [Icons.ColorPickerColor]: "61974",
    [Icons.ColorSwatchPaletteColours]: "61975",
    [Icons.Color]: "61976",
    [Icons.ColorsPaletteColours]: "61977",
    [Icons.ColumnWideColums]: "61978",
    [Icons.CompassRoundBrowserSafariWebInternetNavigation]: "61979",
    [Icons.CompassSquareBrowserSafariWebInternetNavigation]: "61980",
    [Icons.ConnectDevicesMacbookIphonePhone]: "61981",
    [Icons.ConsoleTerminal]: "61982",
    [Icons.Contrast]: "61983",
    [Icons.Control]: "61984",
    [Icons.Cookies]: "61985",
    [Icons.Copy_1LayersPages]: "61986",
    [Icons.Copy_2LayersPages]: "61987",
    [Icons.Copy_3LayersPages]: "61988",
    [Icons.Copy_4LayersPages]: "61989",
    [Icons.Copy_5LayersPages]: "61990",
    [Icons.CornerDownLeft]: "61991",
    [Icons.CornerDownRight]: "61992",
    [Icons.CornerLeftDown]: "61993",
    [Icons.CornerLeftUp]: "61994",
    [Icons.CornerRightDown]: "61995",
    [Icons.CornerRightUp]: "61996",
    [Icons.CornerUpRight_1]: "61997",
    [Icons.CornerUpRight]: "61998",
    [Icons.Court]: "61999",
    [Icons.CreditCard_1CardPayment]: "62000",
    [Icons.CreditCard_2CardPayment]: "62001",
    [Icons.CreditCard_3CardPayment]: "62002",
    [Icons.Crop]: "62003",
    [Icons.CrossedLargeClose]: "62004",
    [Icons.CrossedSmallDeleteRemove]: "62005",
    [Icons.CrownVip]: "62006",
    [Icons.CryptoCoin]: "62007",
    [Icons.Crypto]: "62008",
    [Icons.CupCoffeeTeaMilk]: "62009",
    [Icons.CupTeaCoffee]: "62010",
    [Icons.Cursor_1Arrow]: "62011",
    [Icons.Cursor_2Arrow]: "62012",
    [Icons.Cursor_3Arrow]: "62013",
    [Icons.CursorBoxArrow]: "62014",
    [Icons.CursorClickArrowClickbait]: "62015",
    [Icons.DashboardFast]: "62016",
    [Icons.DashboardLow]: "62017",
    [Icons.DashboardMiddle]: "62018",
    [Icons.Dashboard]: "62019",
    [Icons.DateTimeCalendarTime]: "62020",
    [Icons.DebugDebugger]: "62021",
    [Icons.Delete_2RemoveGarbageWasteTrashCan]: "62022",
    [Icons.DeleteRemoveBackspace]: "62023",
    [Icons.DeleteRemoveGarbageWasteTrashCan]: "62024",
    [Icons.DeleteSimple]: "62025",
    [Icons.Dice_1Roll]: "62026",
    [Icons.Dice_2Roll]: "62027",
    [Icons.Dice_3Roll]: "62028",
    [Icons.Dice_4Roll]: "62029",
    [Icons.Dice_5Roll]: "62030",
    [Icons.Dice_6Roll]: "62031",
    [Icons.DirectorChairRegieChair]: "62032",
    [Icons.Disk_1Save]: "62033",
    [Icons.Disk_2Save]: "62034",
    [Icons.DividerAddLine]: "62035",
    [Icons.DockBoxArrow]: "62036",
    [Icons.DocumentListPageFile]: "62037",
    [Icons.DocumentWithLinesListPageFile]: "62038",
    [Icons.DollarCurrencyMoneyCoinUsd]: "62039",
    [Icons.Donut]: "62040",
    [Icons.Dossier]: "62041",
    [Icons.DotGridMenuGrab]: "62042",
    [Icons.DotHorizontalMenuGrab]: "62043",
    [Icons.DotVerticalMenuGrab]: "62044",
    [Icons.DownGamepadBaseControllsGameJoystick]: "62045",
    [Icons.DownGamepadBaseRoundControllsGameJoystick]: "62046",
    [Icons.DownloadCircleArrowDown]: "62047",
    [Icons.DownloadFileDown]: "62048",
    [Icons.DownloadSquareArrowDown]: "62049",
    [Icons.DragGrab]: "62050",
    [Icons.DrinkCupStraw]: "62051",
    [Icons.DropWaterPrecipitationLiquid]: "62052",
    [Icons.EarthGlobeWorld]: "62053",
    [Icons.Edit_01]: "62054",
    [Icons.EditBigBoxPencilPenWriteDraw]: "62055",
    [Icons.EditPencilWrite]: "62056",
    [Icons.EditSmallBoxPencilPenWriteDraw]: "62057",
    [Icons.Email_2EnvelopeMail]: "62058",
    [Icons.Email_2NotificationBadgeEnvelopeMail]: "62059",
    [Icons.EmailEnvelope_1]: "62060",
    [Icons.EmailEnvelope]: "62061",
    [Icons.ErrorWarningAlert]: "62062",
    [Icons.EscPower]: "62063",
    [Icons.Ethereum]: "62064",
    [Icons.EuroCurrencyMoneyCoinEuro]: "62065",
    [Icons.ExpandArrowEnlarge]: "62066",
    [Icons.ExpandWindowLayout]: "62067",
    [Icons.ExplosionBoomBangPop]: "62068",
    [Icons.EyeClosedSeeHidden]: "62069",
    [Icons.FastForward_10s]: "62070",
    [Icons.FastForward_15s]: "62071",
    [Icons.FastForward_30s]: "62072",
    [Icons.FastForward_5s]: "62073",
    [Icons.FastForwardSymbol]: "62074",
    [Icons.FeaturesToTheMoon]: "62075",
    [Icons.File_1DocumentCloudSync]: "62076",
    [Icons.File_2DocumentsCopy]: "62077",
    [Icons.File_3DocumentCloudSync]: "62078",
    [Icons.File_4DocumentCloudSync]: "62079",
    [Icons.File_5DocumentCloudSync]: "62080",
    [Icons.File_6DocumentText]: "62081",
    [Icons.File_7DocumentLockedPassword]: "62082",
    [Icons.File_8DocumentCloudSync]: "62083",
    [Icons.Filter_1Sort]: "62084",
    [Icons.Filter_2Sort]: "62085",
    [Icons.FilterAscendingSortAzAscendingAsc]: "62086",
    [Icons.FilterDescendingSortZaDescendingDesc]: "62087",
    [Icons.FilterTimelineSort]: "62088",
    [Icons.FinderFaceId]: "62089",
    [Icons.FinderFilesOs]: "62090",
    [Icons.FingerPrint_2TouchId]: "62091",
    [Icons.FingerPrintTouchId]: "62092",
    [Icons.Fire_1FlameHotHeat]: "62093",
    [Icons.Fire_2FlameHotHeat]: "62094",
    [Icons.FistbumpBoomHandsFriends]: "62095",
    [Icons.Flag_2Priority_1]: "62096",
    [Icons.Flag_2Priority]: "62097",
    [Icons.FocusCameraExposureAutofocusAuto]: "62098",
    [Icons.FocusCameraExposureFlash]: "62099",
    [Icons.FocusCameraExposureLock]: "62100",
    [Icons.FocusCameraExposureMacroFlower]: "62101",
    [Icons.FocusCameraExposureMagicAutoAiSparklesEffects]: "62102",
    [Icons.FocusCameraExposureSquare]: "62103",
    [Icons.FocusCameraExposureUnlock]: "62104",
    [Icons.FocusCameraExposureZoomIn]: "62105",
    [Icons.FocusCameraExposureZoomOut]: "62106",
    [Icons.FocusCameraExposure]: "62107",
    [Icons.FocusExposureMacroFlower_2]: "62108",
    [Icons.Folder_1]: "62109",
    [Icons.Folder_2]: "62110",
    [Icons.Folder_3]: "62111",
    [Icons.FolderAddPlus]: "62112",
    [Icons.FolderBookmarksBookmark]: "62113",
    [Icons.FolderCloud_1]: "62114",
    [Icons.FolderCloud_2]: "62115",
    [Icons.FolderDeleteX]: "62116",
    [Icons.FolderDownload]: "62117",
    [Icons.FolderRestricted]: "62118",
    [Icons.FolderSharedUser]: "62119",
    [Icons.FolderUpload]: "62120",
    [Icons.Folder]: "62121",
    [Icons.Folders]: "62122",
    [Icons.Fork]: "62123",
    [Icons.Forwards]: "62124",
    [Icons.GamepadBaseControllsGameJoystick]: "62125",
    [Icons.GamepadBaseRoundControllsGameJoystick]: "62126",
    [Icons.GamepadGamingJoystickGames]: "62127",
    [Icons.Garage]: "62128",
    [Icons.Gas]: "62129",
    [Icons.GearCogWheel]: "62130",
    [Icons.GhostHiddenUnknown]: "62131",
    [Icons.GifSquare]: "62132",
    [Icons.Gif]: "62133",
    [Icons.GiftSideViewPresent]: "62134",
    [Icons.GiftTopView]: "62135",
    [Icons.Giftcard]: "62136",
    [Icons.GiroCard]: "62137",
    [Icons.GlobusMapEarthGlobe]: "62138",
    [Icons.GolfBall]: "62139",
    [Icons.GraduateCapStudyEducationAcademicStudent]: "62140",
    [Icons.GraphLinesStatisticsDocumentListPageFile]: "62141",
    [Icons.GraphStatisticsDocumentListPageFile]: "62142",
    [Icons.GrowthGrowLeafs]: "62143",
    [Icons.H1HeadingHeadline]: "62144",
    [Icons.H2HeadingHeadline]: "62145",
    [Icons.H3HeadingHeadline]: "62146",
    [Icons.Hand_4FingerSelect]: "62147",
    [Icons.Hand_5FingerSelect]: "62148",
    [Icons.Hashtag]: "62149",
    [Icons.Hd]: "62150",
    [Icons.HeadAvatar]: "62151",
    [Icons.HeadphonesSupport]: "62152",
    [Icons.Heart_2LikeHealthLifeFav]: "62153",
    [Icons.HeartBeatHeartRatePulse]: "62154",
    [Icons.HeartLikeHealthLifeFavorite]: "62155",
    [Icons.HideEyeOffSeeLookNotVisible]: "62156",
    [Icons.Highlight]: "62157",
    [Icons.HomeDoorHouse_1]: "62158",
    [Icons.HomeDoorHouse]: "62159",
    [Icons.HomeLineHouse]: "62160",
    [Icons.HomeOpenHouse]: "62161",
    [Icons.HomeRoofHouse]: "62162",
    [Icons.HomeSimpleHouse_1]: "62163",
    [Icons.HomeSimpleHouse]: "62164",
    [Icons.HourglassTimeWatchClock]: "62165",
    [Icons.IceHockey]: "62166",
    [Icons.IconIconsShapesGames]: "62167",
    [Icons.ImacComputerDevice_2]: "62168",
    [Icons.ImageWallpaperLandscapeOs]: "62169",
    [Icons.Images_1PhotosPicturesShot]: "62170",
    [Icons.Images_2PhotosPicturesShot]: "62171",
    [Icons.Images_3PhotosPicturesShot]: "62172",
    [Icons.Images_4PhotosPicturesShot]: "62173",
    [Icons.Images_5PhotosPicturesShot]: "62174",
    [Icons.Inbox_1ArchiveTrayShelf]: "62175",
    [Icons.Inbox_2ArchiveTrayShelf]: "62176",
    [Icons.InfinityLoopBoomerang]: "62177",
    [Icons.InfoCircleTooltip]: "62178",
    [Icons.InfoSquare]: "62179",
    [Icons.Invite_1]: "62180",
    [Icons.Invite]: "62181",
    [Icons.Italic]: "62182",
    [Icons.Key]: "62183",
    [Icons.KeyboardDownCloseDownOpenArrow]: "62184",
    [Icons.KeyboardMidiKeysPiano]: "62185",
    [Icons.KeyboardUp_1CloseDownOpenArrow]: "62186",
    [Icons.KeyboardUp_2CloseDownOpenArrow]: "62187",
    [Icons.Lab]: "62188",
    [Icons.LaunchRocket]: "62189",
    [Icons.LawLegalTermsImprintBalance]: "62190",
    [Icons.LayerBehindSlidesPages]: "62191",
    [Icons.Layers_2Stack]: "62192",
    [Icons.Layers_3Stack]: "62193",
    [Icons.LayersCopy]: "62194",
    [Icons.Layout_2RowsGridWindow]: "62195",
    [Icons.Layout_3RowsGridWindow]: "62196",
    [Icons.LayoutBottomGridWindow]: "62197",
    [Icons.LayoutColumnGridColumn]: "62198",
    [Icons.LayoutDashboardGridWindow]: "62199",
    [Icons.LayoutGrid_1GridWindow]: "62200",
    [Icons.LayoutGrid_2Grid]: "62201",
    [Icons.LayoutGridListSearchFindMagifier]: "62202",
    [Icons.LayoutLeftGridWindow]: "62203",
    [Icons.LayoutRightGridWindow]: "62204",
    [Icons.LayoutSidebarGridWindow]: "62205",
    [Icons.LayoutTopGridWindow]: "62206",
    [Icons.LayoutTopbarGridWindow]: "62207",
    [Icons.LayoutWindowGridWindow]: "62208",
    [Icons.LeftGamepadBaseControllsGameJoystick]: "62209",
    [Icons.LeftGamepadBaseRoundControllsGameJoystick]: "62210",
    [Icons.Library]: "62211",
    [Icons.LifeVestVest]: "62212",
    [Icons.LightBulbIdeaLight]: "62213",
    [Icons.LightBulbSimpleIdea]: "62214",
    [Icons.LightRain]: "62215",
    [Icons.LightningZapFlash]: "62216",
    [Icons.LineChart_2StatisticsGraph]: "62217",
    [Icons.LineChart_3StatisticsGraph_1]: "62218",
    [Icons.LineChart_3StatisticsGraph]: "62219",
    [Icons.LineChartStatisticsGraph]: "62220",
    [Icons.Link_1Chain]: "62221",
    [Icons.Link_2Chain]: "62222",
    [Icons.Link_3Chain]: "62223",
    [Icons.LinkDocumentListPageFile]: "62224",
    [Icons.LinkLinesDocumentListPageFile]: "62225",
    [Icons.ListSearchFindMagifier]: "62226",
    [Icons.LiveSignal]: "62227",
    [Icons.Loader]: "62228",
    [Icons.LocationExploreCompass]: "62229",
    [Icons.LocationMapRoute]: "62230",
    [Icons.LockPrivate]: "62231",
    [Icons.LoginEnterDoor]: "62232",
    [Icons.LogoutLeaveDoor]: "62233",
    [Icons.MacbookLaptopComputerDevice]: "62234",
    [Icons.MacinthoshMac]: "62235",
    [Icons.MagicBookMagician]: "62236",
    [Icons.MagicBox]: "62237",
    [Icons.MagicEyes]: "62238",
    [Icons.MagicHandsMagicRainbow]: "62239",
    [Icons.MagicHat]: "62240",
    [Icons.MagicPencilMagicBrush]: "62241",
    [Icons.MagicStickStar]: "62242",
    [Icons.MagicStickTop]: "62243",
    [Icons.MagicStick]: "62244",
    [Icons.MapPaper]: "62245",
    [Icons.Markdown]: "62246",
    [Icons.MedalTrophyBadgeWinnerWin]: "62247",
    [Icons.MegaphoneLoudSpeakPromote]: "62248",
    [Icons.Memory_1SimCardCard]: "62249",
    [Icons.Memory_2SimCardSdCard]: "62250",
    [Icons.Menu_1GridCircle]: "62251",
    [Icons.Menu_1ListHamburger]: "62252",
    [Icons.Menu_2GridCircle]: "62253",
    [Icons.Menu_2ListHamburger]: "62254",
    [Icons.Menu_3ListHamburger]: "62255",
    [Icons.MenuSimpleNavSimple]: "62256",
    [Icons.MicrophoneMicSoundPodcast_1]: "62257",
    [Icons.MicrophoneMicSoundPodcast]: "62258",
    [Icons.MinimizeArrowShrink]: "62259",
    [Icons.MinimizeWindowLayout]: "62260",
    [Icons.MinusCircleRemove]: "62261",
    [Icons.MinusLarge]: "62262",
    [Icons.MinusSmall]: "62263",
    [Icons.MinusSquareRemoveDelete]: "62264",
    [Icons.MoneyBillDollarEuro]: "62265",
    [Icons.MoneyHandCoins]: "62266",
    [Icons.MoonDarkModeNight]: "62267",
    [Icons.MoonStarNight]: "62268",
    [Icons.Mouse_1]: "62269",
    [Icons.Mouse_2ScrollDown]: "62270",
    [Icons.Mouse_3ScrollUp]: "62271",
    [Icons.MoveFocus]: "62272",
    [Icons.Move]: "62273",
    [Icons.MultiMediaMediaImageAndVideo]: "62274",
    [Icons.MuteSoundOff]: "62275",
    [Icons.NewsPaper]: "62276",
    [Icons.NewspaperNewsPaper]: "62277",
    [Icons.Nfc_2]: "62278",
    [Icons.Nfc]: "62279",
    [Icons.NoFlash]: "62280",
    [Icons.NoteCardText]: "62281",
    [Icons.NoteSticker]: "62282",
    [Icons.Notes]: "62283",
    [Icons.NotificationAlarmBellActivityAlert]: "62284",
    [Icons.NotificationBellActivity]: "62285",
    [Icons.NotificationOffBellActivity]: "62286",
    [Icons.NotificationsBadge]: "62287",
    [Icons.NumberedList]: "62288",
    [Icons.Oculus]: "62289",
    [Icons.Open_2NewLinkOpenLinkBoxArrow]: "62290",
    [Icons.OpenNewLinkOpenLinkBoxArrow]: "62291",
    [Icons.OpenQuoteBlockquote]: "62292",
    [Icons.OptAltOptionAltKey]: "62293",
    [Icons.OptOptionKey]: "62294",
    [Icons.Orange]: "62295",
    [Icons.PackageDelivery_2]: "62296",
    [Icons.PackageDelivery]: "62297",
    [Icons.PagesBoards]: "62298",
    [Icons.PanoramaView]: "62299",
    [Icons.PaperPlaneSend]: "62300",
    [Icons.PasskeysPasskeyPasswordless]: "62301",
    [Icons.PassportVisa]: "62302",
    [Icons.PasswordLockProtection]: "62303",
    [Icons.Pause]: "62304",
    [Icons.Pencil_2PenToolWrite]: "62305",
    [Icons.PencilPenToolWrite]: "62306",
    [Icons.PeopleBehindUserAvatarGroup_3]: "62307",
    [Icons.PeopleCircleUserPersonAvatar_2]: "62308",
    [Icons.PeopleCopyMembers]: "62309",
    [Icons.PeopleLikeLoveHeart]: "62310",
    [Icons.PeopleShadowUserAvatarGroup_1]: "62311",
    [Icons.PeopleShadowUserAvatarGroup]: "62312",
    [Icons.PeopleTogetherUserAvatarGroup_2]: "62313",
    [Icons.PeopleUserPersonAvatar]: "62314",
    [Icons.PercentSales_1]: "62315",
    [Icons.PercentSales]: "62316",
    [Icons.PerformanceSpeedScale]: "62317",
    [Icons.PhoneDeviceIphoneMobile]: "62318",
    [Icons.PhoneDynamicIsland]: "62319",
    [Icons.PictureInPicture]: "62320",
    [Icons.PieChart_1GraphChartStatistics]: "62321",
    [Icons.PieChart_2GraphChartStatistics]: "62322",
    [Icons.PiggyBankSaveMoney]: "62323",
    [Icons.PinCircleLocation]: "62324",
    [Icons.PinFlagLocation]: "62325",
    [Icons.PinLocation_1]: "62326",
    [Icons.PinLocationBookmark]: "62327",
    [Icons.PinLocation]: "62328",
    [Icons.Pinch]: "62329",
    [Icons.Pizza]: "62330",
    [Icons.PlaceholderGenerate]: "62331",
    [Icons.PlayCircle]: "62332",
    [Icons.PlayGo]: "62333",
    [Icons.PlayList]: "62334",
    [Icons.PlusAddDocumentListPageFile]: "62335",
    [Icons.PlusAddLarge]: "62336",
    [Icons.PlusAddSmall]: "62337",
    [Icons.PlusCircleAdd]: "62338",
    [Icons.PlusLinesAddDocumentListPageFile]: "62339",
    [Icons.PlusSquareAdd]: "62340",
    [Icons.PointerHand]: "62341",
    [Icons.PoopSpam]: "62342",
    [Icons.PopsicleBIceCreamSweets]: "62343",
    [Icons.PopsicleIceCreamSweets]: "62344",
    [Icons.PostcardCardNews]: "62345",
    [Icons.PostsNotebookSketchbook]: "62346",
    [Icons.PoundCurrencyMoneyCoinGbp]: "62347",
    [Icons.PrinterPrint]: "62348",
    [Icons.ProcessorChip]: "62349",
    [Icons.PullRequest]: "62350",
    [Icons.Qm3RoomTransformXyz_3d]: "62351",
    [Icons.QrCode]: "62352",
    [Icons.QuestionmarkFaqHelpQuestionaire]: "62353",
    [Icons.RadarLocationSearch]: "62354",
    [Icons.Rainbow]: "62355",
    [Icons.RainyRain]: "62356",
    [Icons.RaisingHand_4FingerHeyHello]: "62357",
    [Icons.RaisingHand_5FingerHeyHello]: "62358",
    [Icons.ReadingListGlassesSteveJobs]: "62359",
    [Icons.RearFrontCameraCamChangeLens]: "62360",
    [Icons.ReceiptTicket]: "62361",
    [Icons.RecordVoicemailBandTape]: "62362",
    [Icons.Record]: "62363",
    [Icons.RedoForward_1]: "62364",
    [Icons.RedoForward]: "62365",
    [Icons.RefreshRenew]: "62366",
    [Icons.RemoveColumnDeleteColumn]: "62367",
    [Icons.RemovePeopleRemoveUserRemovePerson_2]: "62368",
    [Icons.RemovePeopleRemoveUserRemovePerson]: "62369",
    [Icons.RemoveRowDeleteRow]: "62370",
    [Icons.Repeat_2Retweet]: "62371",
    [Icons.RepeatRetweet]: "62372",
    [Icons.Repeat]: "62373",
    [Icons.RescueRingSwimBoyleHelpSupport]: "62374",
    [Icons.ResizeBigBoxArrow]: "62375",
    [Icons.ResizeSmallBoxArrow]: "62376",
    [Icons.Rewind_10s]: "62377",
    [Icons.Rewind_15s]: "62378",
    [Icons.Rewind_30s]: "62379",
    [Icons.Rewind_5s]: "62380",
    [Icons.RewindSymbol]: "62381",
    [Icons.RightGamepadBaseControllsGameJoystick]: "62382",
    [Icons.RightGamepadBaseRoundControllsGameJoystick]: "62383",
    [Icons.RocketStartupLaunch]: "62384",
    [Icons.Rotate_02RepeatRefresh]: "62385",
    [Icons.RotateClockwiseRotate]: "62386",
    [Icons.RotateCounterclockwiseRotate]: "62387",
    [Icons.RotateRepeatRefresh]: "62388",
    [Icons.RotateRotationXAxis]: "62389",
    [Icons.RowsWideRowsWide]: "62390",
    [Icons.Ruler]: "62391",
    [Icons.RulesDirectionSplit]: "62392",
    [Icons.SadEmojiUnhappy]: "62393",
    [Icons.SandboxSafe]: "62394",
    [Icons.ScanFocus_1]: "62395",
    [Icons.ScanFocus]: "62396",
    [Icons.SchoolBigBuilding]: "62397",
    [Icons.Scissors_2Cut]: "62398",
    [Icons.ScissorsCut]: "62399",
    [Icons.SdCardMemoryStick]: "62400",
    [Icons.Search_2MagnifyingGlass]: "62401",
    [Icons.SearchLinesMagnifierDocumentListPageFile]: "62402",
    [Icons.SearchMagnifierDocumentListPageFile]: "62403",
    [Icons.SearchMagnifyingGlass]: "62404",
    [Icons.SearchMenu]: "62405",
    [Icons.SearchPageFind]: "62406",
    [Icons.SecuredLinesLockedSecurityDocumentListPageFile]: "62407",
    [Icons.SecuredLockedSecurityDocumentListPageFile]: "62408",
    [Icons.SendEmailPaperPlaneArrow]: "62409",
    [Icons.Server_1StorageDataCoinsMoney]: "62410",
    [Icons.Server_2StorageDataCoinsMoney]: "62411",
    [Icons.ServerDataStorage]: "62412",
    [Icons.Settings_1SwitchPreferences]: "62413",
    [Icons.Settings_2GearPreferences]: "62414",
    [Icons.Settings_3GearPreferences_1]: "62415",
    [Icons.Settings_3GearPreferences]: "62416",
    [Icons.Settings_6SliderThree]: "62417",
    [Icons.Settings_7KnobVolumeOnOff]: "62418",
    [Icons.Settings_8Switch_2]: "62419",
    [Icons.SettingsSliderHor]: "62420",
    [Icons.SettingsSliderVerSliderTwo]: "62421",
    [Icons.Shaka_2CallMeHangTen]: "62422",
    [Icons.ShakaCallMeHangTen]: "62423",
    [Icons.Share_2Arrow]: "62424",
    [Icons.ShareArrowLogin]: "62425",
    [Icons.ShareArrow]: "62426",
    [Icons.ShareScreenScreenSharing]: "62427",
    [Icons.Shield_2Check]: "62428",
    [Icons.ShieldBreakNotSecure]: "62429",
    [Icons.ShieldCheckSecurityProtection]: "62430",
    [Icons.ShieldCrossedSecurityProtection]: "62431",
    [Icons.ShieldProtectSecurityCheck]: "62432",
    [Icons.ShieldSecurityProtection]: "62433",
    [Icons.Shift]: "62434",
    [Icons.ShipChangelog]: "62435",
    [Icons.ShowEyeSeeRevealLookVisible]: "62436",
    [Icons.ShredderPermanently]: "62437",
    [Icons.ShuffleRandom]: "62438",
    [Icons.SidebarMenuListWindow]: "62439",
    [Icons.SignDirectionRoute]: "62440",
    [Icons.SignaturePencilPencilPenWriteDraw]: "62441",
    [Icons.SignatureSign]: "62442",
    [Icons.SlidesPages]: "62443",
    [Icons.SmileEmoji]: "62444",
    [Icons.SmileyFaceEmojiSmile]: "62445",
    [Icons.SmilingFaceHeartEyes]: "62446",
    [Icons.SnowCloud]: "62447",
    [Icons.SnowFlakesFreezeFrozen]: "62448",
    [Icons.SoccerFootballMls]: "62449",
    [Icons.Sort_1SwitchHorizontal]: "62450",
    [Icons.Sort_1SwitchVertical]: "62451",
    [Icons.Sort_2SwitchHorizonatl]: "62452",
    [Icons.Sort_2SwitchVertical]: "62453",
    [Icons.SpaceStar]: "62454",
    [Icons.SpatialSpatialCapture]: "62455",
    [Icons.SpeakerMusicSound]: "62456",
    [Icons.SquarePlaceholder]: "62457",
    [Icons.StapleNotebookCover]: "62458",
    [Icons.Star_2MagicSparkle]: "62459",
    [Icons.StarAiSparkle]: "62460",
    [Icons.StarFavoriteAward]: "62461",
    [Icons.Stocks]: "62462",
    [Icons.Stop]: "62463",
    [Icons.StoppCircle]: "62464",
    [Icons.StopwatchTrack]: "62465",
    [Icons.StorageHddSsd]: "62466",
    [Icons.StoreShopBusiness_1]: "62467",
    [Icons.StoreShopBusiness]: "62468",
    [Icons.StreamingLiveStream]: "62469",
    [Icons.StrikeThrough]: "62470",
    [Icons.StudioDisplayThunderbolt]: "62471",
    [Icons.SuitcaseLuggageCase]: "62472",
    [Icons.SunDown]: "62473",
    [Icons.SunLightModeDay]: "62474",
    [Icons.SunUp]: "62475",
    [Icons.Sunrise]: "62476",
    [Icons.Sunset]: "62477",
    [Icons.Support]: "62478",
    [Icons.SurpriseBunnyHatMagicHat]: "62479",
    [Icons.SyncCloudSync]: "62480",
    [Icons.TableSpreedsheetChart]: "62481",
    [Icons.TagSale]: "62482",
    [Icons.Tape]: "62483",
    [Icons.Target_1Zoom]: "62484",
    [Icons.Target_2Zoom]: "62485",
    [Icons.TargetArrowGoalAim]: "62486",
    [Icons.TaxDiscount]: "62487",
    [Icons.TelephonePhoneContact]: "62488",
    [Icons.Television_1TvMonitorVideoScreenDisplay]: "62489",
    [Icons.Television_2TvMonitorVideoScreenDisplay]: "62490",
    [Icons.Tennis]: "62491",
    [Icons.TestTube]: "62492",
    [Icons.Text_2T_2]: "62493",
    [Icons.TextIndentLeft]: "62494",
    [Icons.TextIndentRight]: "62495",
    [Icons.TextIndicator]: "62496",
    [Icons.TextSize]: "62497",
    [Icons.TextT]: "62498",
    [Icons.ThumbsDownThumbHandNoContra]: "62499",
    [Icons.ThumbsUpThumbHandYesPro]: "62500",
    [Icons.TicketAdmitVip]: "62501",
    [Icons.TitleCase]: "62502",
    [Icons.ToastBreakfest]: "62503",
    [Icons.ToiletPaperWipe]: "62504",
    [Icons.Toolbox]: "62505",
    [Icons.TradeTrading]: "62506",
    [Icons.Transcription]: "62507",
    [Icons.Tree]: "62508",
    [Icons.Trending_1Trends]: "62509",
    [Icons.Trending_2Trends]: "62510",
    [Icons.Trending_3Trends]: "62511",
    [Icons.Trending_4ChartAnalytics]: "62512",
    [Icons.Trending_4Chart]: "62513",
    [Icons.TrophyWinChampion]: "62514",
    [Icons.TruckDelivery]: "62515",
    [Icons.TwoDiceGameRandom]: "62516",
    [Icons.UfoBeam]: "62517",
    [Icons.UmbrellaSecurity]: "62518",
    [Icons.Underline]: "62519",
    [Icons.UndoBackBottom]: "62520",
    [Icons.UndoBackTop]: "62521",
    [Icons.UndockBoxArrow]: "62522",
    [Icons.UnlockedUnlockPrivate]: "62523",
    [Icons.UpGamepadBaseControllsGameJoystick]: "62524",
    [Icons.UpGamepadBaseRoundControllsGameJoystick]: "62525",
    [Icons.UploadShare]: "62526",
    [Icons.UsbConnectionConnectSaveData]: "62527",
    [Icons.VideoCamera_2]: "62528",
    [Icons.VideoCameraMoviePlay]: "62529",
    [Icons.VideoClapperboard]: "62530",
    [Icons.VideoClipFilmMovie]: "62531",
    [Icons.VisionProAppWindow]: "62532",
    [Icons.VisionProGoggles]: "62533",
    [Icons.VisitPageOpenApp]: "62534",
    [Icons.Voice]: "62535",
    [Icons.Volleyball]: "62536",
    [Icons.VolumeDownSpeakerLoudSoundOnMusic]: "62537",
    [Icons.VolumeFullSpeakerLoudSoundOnMusic]: "62538",
    [Icons.VolumeHalfSpeakerLoudSoundOnMusic]: "62539",
    [Icons.VolumeMinimumSpeakerLoudSoundOnMusic]: "62540",
    [Icons.VolumeOffSpeakerLoudSoundOnMusic_1]: "62541",
    [Icons.VolumeOffSpeakerLoudSoundOnMusic]: "62542",
    [Icons.Wallet_1]: "62543",
    [Icons.Wallet_2]: "62544",
    [Icons.Wallet]: "62545",
    [Icons.Watch_1ClockTime_1]: "62546",
    [Icons.Watch_1ClockTime]: "62547",
    [Icons.Web3CryptoSpace]: "62548",
    [Icons.WebcamCameraView]: "62549",
    [Icons.WhisperApi]: "62550",
    [Icons.WhiteboardArtboard]: "62551",
    [Icons.Wifi_2SpotSignalHotSpot]: "62552",
    [Icons.WifiSpotSignalHotSpot]: "62553",
    [Icons.Windy_1Wind]: "62554",
    [Icons.WorldGlobusInternetWeb]: "62555",
    [Icons.WriteBrief]: "62556",
    [Icons.WriteEditListList]: "62557",
    [Icons.YenCurrencyMoneyCoin]: "62558",
    [Icons.ZapLightningFlash]: "62559",
    [Icons.ZipRarCompressedArchive]: "62560",
    [Icons.ZoomSearchMagnifyingGlass_1]: "62561",
    [Icons.ZoomSearchMagnifyingGlass]: "62562",
};


/***/ }),

/***/ "./src/content/primitive_colors.ts":
/*!*****************************************!*\
  !*** ./src/content/primitive_colors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPrimitiveColors = void 0;
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
const util_1 = __webpack_require__(/*! ./util */ "./src/content/util.ts");
const className = "ColorPrimitives";
function createPrimitiveColors(helper) {
    const colorTokens = helper.getTokensForType(sdk_exporters_1.TokenType.color);
    const tokenGroups = helper.getGroupsForType(sdk_exporters_1.TokenType.color);
    // Convert all color tokens to CSS variables
    const colorSwatchGroups = tokenGroups
        .filter((t) => t.tokenType === sdk_exporters_1.TokenType.color && t.childrenIds.length == 16);
    const mappedTokens = {};
    let swatches = colorSwatchGroups.reduce((prev, group) => {
        const name = (0, util_1.groupVariableName)(group);
        prev[name] = colorTokens.filter(x => group.id == x.parentGroupId).reduce((prev, curr) => {
            prev[curr.name] = (0, util_1.flutterColorValue)(curr);
            mappedTokens[curr.id] = helper.resolveTokenVariableName(curr, className);
            return prev;
        }, {});
        return prev;
    }, {});
    const colorPrimitives = colorTokens.filter(e => !(e.id in mappedTokens) && !e.value.referencedTokenId);
    let colors = {};
    for (let primitiveColor of colorPrimitives) {
        const name = helper.resolveTokenVariableName(primitiveColor, className);
        colors[name] = (0, util_1.flutterColorValue)(primitiveColor);
        mappedTokens[primitiveColor.id] = className + "." + name;
    }
    return {
        className,
        swatches,
        colors
    };
}
exports.createPrimitiveColors = createPrimitiveColors;


/***/ }),

/***/ "./src/content/primitive_dimensions.ts":
/*!*********************************************!*\
  !*** ./src/content/primitive_dimensions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGenericSpacings = exports.createLetterSpacings = exports.createLineHeights = exports.createFontSizes = void 0;
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
function createConstants(helper, desc) {
    const tokens = helper.getTokensForType(desc.tokenType);
    return {
        className: desc.className,
        typeName: desc.typeName,
        variables: tokens.reduce((prev, curr) => {
            let name = helper.resolveTokenVariableName(curr, desc.className, desc.prefix);
            prev[name] = desc.resolveValue(curr);
            return prev;
        }, new Map)
    };
}
const fontSizesDescription = {
    className: "OffenburgFontSizes",
    typeName: "double",
    tokenType: sdk_exporters_1.TokenType.fontSize,
    prefix: 'f',
    resolveValue: (token) => `${token.value.measure}`
};
function createFontSizes(helper) {
    return createConstants(helper, fontSizesDescription);
}
exports.createFontSizes = createFontSizes;
const lineHeightsDescription = {
    className: "OffenburgLineHeights",
    typeName: "double",
    tokenType: sdk_exporters_1.TokenType.lineHeight,
    prefix: 'l',
    resolveValue: (token) => `${token.value.measure}`
};
function createLineHeights(helper) {
    return createConstants(helper, lineHeightsDescription);
}
exports.createLineHeights = createLineHeights;
const letterSpacingDescription = {
    className: "OffenburgLetterSpacings",
    typeName: "double",
    tokenType: sdk_exporters_1.TokenType.letterSpacing,
    resolveValue: (token) => `${token.value.measure}`
};
function createLetterSpacings(helper) {
    return createConstants(helper, letterSpacingDescription);
}
exports.createLetterSpacings = createLetterSpacings;
const genericSpacingDescription = {
    className: "OffenburgGenericSpacings",
    typeName: "double",
    tokenType: sdk_exporters_1.TokenType.dimension,
    resolveValue: (token) => `${token.value.measure}`
};
function createGenericSpacings(helper) {
    return createConstants(helper, genericSpacingDescription);
}
exports.createGenericSpacings = createGenericSpacings;


/***/ }),

/***/ "./src/content/semantic_colors.ts":
/*!****************************************!*\
  !*** ./src/content/semantic_colors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createColors = void 0;
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
const util_1 = __webpack_require__(/*! ./util */ "./src/content/util.ts");
const className = "OffenburgColorScheme";
function createColors(helper, themeData) {
    // Convert all color tokens to CSS variables
    const colorTokens = helper.getUnprocessedTokensForType(sdk_exporters_1.TokenType.color);
    const semanticColorTokens = colorTokens.filter(util_1.isPrimitive);
    const colorVariables = semanticColors(semanticColorTokens, helper);
    let themes = {
        "light": colorVariables
    };
    for (var themeName in themeData) {
        const tokens = themeData[themeName];
        const themeColorTokens = tokens.filter(x => semanticColorTokens.some(y => y.id == x.id));
        themes[themeName] = semanticColors(themeColorTokens, helper);
    }
    return {
        className,
        colors: Object.keys(colorVariables),
        themes,
    };
}
exports.createColors = createColors;
function semanticColors(colorTokens, helper) {
    const variableNames = new Map();
    for (let token of colorTokens) {
        const name = helper.resolveTokenVariableName(token, className);
        if (variableNames.has(name)) {
            continue;
        }
        variableNames[name] = helper.resolveTokenReference(token.value.referencedTokenId);
    }
    return variableNames;
}


/***/ }),

/***/ "./src/content/shadows.ts":
/*!********************************!*\
  !*** ./src/content/shadows.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createShadows = void 0;
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
const className = "OffenburgShadows";
function createShadows(helper) {
    // Convert all color tokens to CSS variables
    const tokens = helper.getUnprocessedTokensForType(sdk_exporters_1.TokenType.shadow);
    const variables = processShadows(tokens, helper);
    return {
        className,
        variables,
    };
}
exports.createShadows = createShadows;
function processShadows(tokens, helper) {
    const variableNames = new Map();
    for (let token of tokens) {
        const name = helper.resolveTokenVariableName(token, className);
        if (variableNames.has(name)) {
            continue;
        }
        variableNames[name] = mapShadowValue(token);
    }
    return variableNames;
}
function mapShadowValue(token) {
    const blurRadius = token.value.map(x => x.radius).reduce((a, b) => a + b, 0);
    const offsetX = token.value.map(x => x.x).reduce((a, b) => a + b, 0);
    const offsetY = token.value.map(x => x.y).reduce((a, b) => a + b, 0);
    const spreadRadius = token.value.map(x => x.spread).reduce((a, b) => a + b, 0);
    const color = token.value.reduce((prev, curr) => ({
        a: prev.a + curr.color.opacity.measure,
        r: prev.r + curr.color.color.r,
        g: prev.g + curr.color.color.g,
        b: prev.b + curr.color.color.b,
    }), {
        a: 0,
        r: 0,
        g: 0,
        b: 0
    });
    return {
        blurRadius: `${blurRadius}`,
        offsetX: `${offsetX}`,
        offsetY: `${offsetY}`,
        spreadRadius: `${spreadRadius}`,
        blurStyle: `BlurStyle.inner`,
        color: convertARGBToFlutter(color.a, color.r, color.g, color.b),
    };
}
function padHexNumberTo2Digits(a) {
    if (a.length == 0)
        return "00";
    if (a.length == 1)
        return "0" + a;
    return a;
}
// opacity as percent (0 - 1)
// r,g,b, as values from 0 - 255
function convertARGBToFlutter(opacity, red, green, blue) {
    let a = (opacity * 255).toString(16).slice(0, 2);
    let r = red.toString(16);
    let g = green.toString(16);
    let b = blue.toString(16);
    a = padHexNumberTo2Digits(a);
    r = padHexNumberTo2Digits(r);
    g = padHexNumberTo2Digits(g);
    b = padHexNumberTo2Digits(b);
    return `Color(0x${a + r + g + b})`;
}


/***/ }),

/***/ "./src/content/typography.ts":
/*!***********************************!*\
  !*** ./src/content/typography.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTypography = void 0;
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
const className = "OffenburgTypography";
function createTypography(helper) {
    const typoTokens = helper.getTokensForType(sdk_exporters_1.TokenType.typography);
    var typographies = new Map();
    for (let typoToken of typoTokens) {
        const variableName = helper.resolveTokenVariableName(typoToken, className);
        typographies[variableName] = tokenToFontDescription(typoToken.value, helper);
    }
    return {
        className,
        typographies
    };
}
exports.createTypography = createTypography;
function tokenToFontDescription(value, helper) {
    return {
        lineHeight: mapMeasurementProp(value.lineHeight, helper),
        fontSize: mapMeasurementProp(value.fontSize, helper),
        fontFamily: mapFontFamily(value.fontFamily, value.fontWeight, helper),
        fontWeight: mapFontWeight(value.fontWeight, helper),
        letterSpacing: mapMeasurementProp(value.letterSpacing, helper),
        decoration: mapFontDecorationProp(value.textDecoration, helper),
    };
}
function mapMeasurementProp(prop, helper) {
    if (!prop) {
        return 'null';
    }
    if (prop.referencedTokenId) {
        return helper.resolveTokenReference(prop.referencedTokenId);
    }
    return `${prop.measure}`;
}
function mapFontFamily(prop, weight, helper) {
    if (!prop) {
        return 'null';
    }
    if (prop.referencedTokenId) {
        return helper.resolveTokenReference(prop.referencedTokenId);
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
};
function mapFontWeight(prop, helper) {
    if (!prop) {
        return 'null';
    }
    if (prop.referencedTokenId) {
        return helper.resolveTokenReference(prop.referencedTokenId);
    }
    return fontWeightMapping[prop.text.toLowerCase()] ?? 'FontWeight.w400';
}
function mapFontDecorationProp(prop, helper) {
    if (!prop) {
        return 'null';
    }
    if (prop.referencedTokenId) {
        return helper.resolveTokenReference(prop.referencedTokenId);
    }
    return `TextDecoration.${prop.value?.toLowerCase() ?? 'none'}`;
}


/***/ }),

/***/ "./src/content/util.ts":
/*!*****************************!*\
  !*** ./src/content/util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.referenceHelper = exports.tokenShadeName = exports.flutterColorValue = exports.groupVariableName = exports.tokenVariableName = exports.isSemantic = exports.isPrimitive = void 0;
const export_helpers_1 = __webpack_require__(/*! @supernovaio/export-helpers */ "./node_modules/@supernovaio/export-helpers/build/helpers.js");
const sdk_exporters_1 = __webpack_require__(/*! @supernovaio/sdk-exporters */ "./node_modules/@supernovaio/sdk-exporters/build/supernova-sdk-typescript.js");
// semantic tokens reference primitive tokens
// therefore a primitive token is a token 
// with an null referenceTokenId
function isPrimitive(token) {
    if (!("value" in token))
        return true;
    if (!("referenceTokenId" in token))
        return true;
    return token.value.referencedTokenId == null;
}
exports.isPrimitive = isPrimitive;
function isSemantic(token) {
    return !isPrimitive(token);
}
exports.isSemantic = isSemantic;
function tokenVariableName(token, parent, prefix = "color") {
    return export_helpers_1.NamingHelper.codeSafeVariableNameForToken(token, export_helpers_1.StringCase.camelCase, parent, prefix);
}
exports.tokenVariableName = tokenVariableName;
function groupVariableName(group) {
    return export_helpers_1.NamingHelper.codeSafeVariableName(["color", group.name], export_helpers_1.StringCase.camelCase);
}
exports.groupVariableName = groupVariableName;
function flutterColorValue(token) {
    const hex = token.toHex8();
    const alpha = hex.slice(7, 9).toUpperCase();
    const rgb = hex.slice(1, 7).toUpperCase();
    return `Color(0x${alpha}${rgb})`;
}
exports.flutterColorValue = flutterColorValue;
function tokenShadeName(token, tokenGroup) {
    return export_helpers_1.NamingHelper.codeSafeVariableName(['color', tokenGroup.name], export_helpers_1.StringCase.camelCase) + `.shade${token.name}`;
}
exports.tokenShadeName = tokenShadeName;
function generateTokenVariableName(token, parent, prefix) {
    if (token.tokenType == sdk_exporters_1.TokenType.color && !isNaN(parseInt(token.name))) {
        // we have a shade, as those token are color tokens with names consisting only of digits
        return tokenShadeName(token, parent);
    }
    return export_helpers_1.NamingHelper.codeSafeVariableNameForToken(token, export_helpers_1.StringCase.camelCase, parent, prefix);
}
function referenceHelper(tokens, groups) {
    var tokenToVariableName = new Map();
    var tokenToClassName = new Map;
    function resolveTokenVariableName(token, className, prefix) {
        let name = tokenToVariableName[token.id];
        if (!tokenToVariableName.has(token.id)) {
            const parent = groups.find((group) => group.id === token.parentGroupId);
            name = generateTokenVariableName(token, parent, prefix ?? null);
            // if a token is not referring to a primitive token
            // resolve the depenency and refer to the primitive token
            if (token?.value?.referencedTokenId) {
                const refId = token.value.referencedTokenId;
                tokenToClassName[token.id] = tokenToClassName[refId];
                tokenToVariableName[token.id] = tokenToVariableName[refId];
            }
            else {
                tokenToClassName[token.id] = className;
                tokenToVariableName[token.id] = name;
            }
        }
        return name;
    }
    function resolveTokenReference(referencedTokenId) {
        if (!referencedTokenId) {
            return 'null';
        }
        let reference = tokenToVariableName[referencedTokenId];
        let className = tokenToClassName[referencedTokenId];
        return className + "." + reference;
    }
    function getTokensForType(tokenType) {
        return tokens.filter((t) => t.tokenType === tokenType);
    }
    function getGroupsForType(tokenType) {
        return groups.filter((t) => t.tokenType === tokenType);
    }
    function getUnprocessedTokensForType(tokenType) {
        return tokens.filter((t) => t.tokenType === tokenType && !(t.id in tokenToVariableName));
    }
    return {
        resolveTokenVariableName,
        resolveTokenReference,
        getTokensForType,
        getGroupsForType,
        getUnprocessedTokensForType,
    };
}
exports.referenceHelper = referenceHelper;


/***/ }),

/***/ "./src/templates/color_scheme.template.ts":
/*!************************************************!*\
  !*** ./src/templates/color_scheme.template.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderColorScheme = void 0;
function renderColorScheme(eta, data) {
    return eta.renderString(colorSchemeTemplate, data);
}
exports.renderColorScheme = renderColorScheme;
const colorSchemeTemplate = `
import 'package:flutter/material.dart';
import 'package:sev_design_tokens/src/colors/primitive_colors.dart';

/* This file was generated by Supernova, don't change by hand */
@immutable
class <%=it.className%> extends ThemeExtension<<%=it.className%>> {
  const <%=it.className%>({
  <% for(var color of it.colors) {%>
    required this.<%=color%>,
  <% } %>
  });

  <% for(var themeName in it.themes) {
    var theme = it.themes[themeName]
    %>
  factory <%=it.className%>.<%=themeName%>() => <%=it.className%>(
    <% for(var color of it.colors) {%>
      <%=color%>: <%=theme[color]%>,
    <% } %>
      );
  <% } %>

  <% for(var color of it.colors) {%>
  final Color <%=color%>;
  <% } %>

  @override
  ThemeExtension<<%=it.className%>> copyWith({
    <% for(var color of it.colors) {%>
    Color? <%=color%>,
    <% } %>
  }) {
    return <%=it.className%>(
      <% for(var color of it.colors) {%>
      <%=color%>:
        <%=color%> ?? this.<%=color%>,
      <% } %>
    );
  }

  @override
  ThemeExtension<<%=it.className%>> lerp(
    <%=it.className%>? other,
    double t,
  ) {
    if (other is! <%=it.className%>) {
      return this;
    }
    return <%=it.className%>(
      <% for(var color of it.colors) {%>
  <%=color%>: Color.lerp(
        <%=color%>,
        other.<%=color%>,
        t,
      )!,
      <% } %>
    );
  }
  
  static <%=it.className%> of(BuildContext context) =>
      Theme.of(context).extension<<%=it.className%>>()!;
}
`;


/***/ }),

/***/ "./src/templates/constants.template.ts":
/*!*********************************************!*\
  !*** ./src/templates/constants.template.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderConstantsFile = void 0;
function renderConstantsFile(eta, data) {
    return eta.renderString(constantsTemplate, data);
}
exports.renderConstantsFile = renderConstantsFile;
const constantsTemplate = `
import 'package:flutter/material.dart';

/* This file was generated by Supernova, don't change by hand */
@immutable
class <%=it.className%> {
  <% for (var name in it.variables) {%>
  static const <%=it.typeName%> <%=name%> = <%=it.variables[name]%>;
  <% } %>
}
`;


/***/ }),

/***/ "./src/templates/icons.template.ts":
/*!*****************************************!*\
  !*** ./src/templates/icons.template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderIconsFile = void 0;
function renderIconsFile(eta, data) {
    return eta.renderString(iconsTemplate, data);
}
exports.renderIconsFile = renderIconsFile;
const iconsTemplate = `import 'package:flutter/widgets.dart';

@staticIconProvider
abstract final class <%=it.className%> {
  <% for (var name in it.variables) {%>

  /// <i class="sev-icons md-36"><%=name%></i> &#x2014; sev icon named "<%=name%>".
  static const IconData <%=name%> = IconData(0x<%=it.variables[name]%>, fontFamily: 'SevIcons');
  <% } %>
}
`;


/***/ }),

/***/ "./src/templates/primitive_colors.template.ts":
/*!****************************************************!*\
  !*** ./src/templates/primitive_colors.template.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderPrimitiveColors = void 0;
function renderPrimitiveColors(eta, data) {
    return eta.renderString(primitiveColorsTemplate, data);
}
exports.renderPrimitiveColors = renderPrimitiveColors;
const primitiveColorsTemplate = `
import 'package:flutter/material.dart';
import 'package:sev_design_tokens/src/colors/offenburg_color_swatch.dart';

/* This file was generated by Supernova, don't change by hand */
class <%=it.className%> {
  <% for(var swatch in it.swatches) {%>
  static const OffenburgColorSwatch <%=swatch%> = OffenburgColorSwatch(
    0xFF20A381,
    {
      <% for(var shade in it.swatches[swatch]) {%>
      OffenburgColorShade.shade<%=shade%>: <%=it.swatches[swatch][shade]%>,
      <% } %>
    },
  );<% } %>

  <% for (var color in it.colors) {%>
  static const Color <%=color%> = <%=it.colors[color]%>;
  <% } %>
}
`;


/***/ }),

/***/ "./src/templates/shadows.template.ts":
/*!*******************************************!*\
  !*** ./src/templates/shadows.template.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderShadows = void 0;
function renderShadows(eta, data) {
    return eta.renderString(shadowsTemplate, data);
}
exports.renderShadows = renderShadows;
const shadowsTemplate = `
import 'package:flutter/material.dart';

/* This file was generated by Supernova, don't change by hand */
@immutable
class <%=it.className%> {

  <% for (var name in it.variables) {%>
  <% var shadow = it.variables[name] %>
  static const BoxShadow <%=name%> = BoxShadow(
    color: <%=shadow.color%>,
    blurStyle: <%=shadow.blurStyle%>,
    offset: Offset(<%=shadow.offsetX%>, <%=shadow.offsetY%>),
    blurRadius: <%=shadow.blurRadius%>,
    spreadRadius: <%=shadow.spreadRadius%>,
  );
  <% } %>
}
`;


/***/ }),

/***/ "./src/templates/typography.template.ts":
/*!**********************************************!*\
  !*** ./src/templates/typography.template.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderTypographyScheme = void 0;
function renderTypographyScheme(eta, data) {
    return eta.renderString(typographyTemplate, data);
}
exports.renderTypographyScheme = renderTypographyScheme;
const typographyTemplate = `
import 'package:flutter/material.dart';
import 'package:sev_design_tokens/src/typography/font_sizes.dart';
import 'package:sev_design_tokens/src/typography/letter_spacings.dart';
import 'package:sev_design_tokens/src/typography/line_heights.dart';

export 'package:sev_design_tokens/src/typography/font_sizes.dart';
export 'package:sev_design_tokens/src/typography/letter_spacings.dart';
export 'package:sev_design_tokens/src/typography/line_heights.dart';


/* This file was generated by Supernova, don't change by hand */
@immutable
class <%=it.className%> extends ThemeExtension<<%=it.className%>> {
  const <%=it.className%>({
  <% for(var typos in it.typographies) {%>
    required this.<%=typos%>,
  <% } %>
  });

  factory <%=it.className%>.init() => <%=it.className%>(
    <% for(var typo in it.typographies) {%>
      <%=typo%>:  const TextStyle(
        fontSize: <%=it.typographies[typo].fontSize%>,
        height: <%=it.typographies[typo].lineHeight%> / <%=it.typographies[typo].fontSize%>, 
        fontFamily: '<%=it.typographies[typo].fontFamily%>',
        fontWeight: <%=it.typographies[typo].fontWeight%>,
        letterSpacing: <%=it.typographies[typo].letterSpacing%>,
        decoration: <%=it.typographies[typo].decoration%>,
      ),
    <% } %>
      );

  <% for(var typo in it.typographies) {%>
  final TextStyle <%=typo%>;
  <% } %>

  @override
  ThemeExtension<<%=it.className%>> copyWith({
    <% for(var typo in it.typographies) {%>
    TextStyle? <%=typo%>,
    <% } %>
  }) {
    return <%=it.className%>(
      <% for(var typo in it.typographies) {%>
      <%=typo%>:
        <%=typo%> ?? this.<%=typo%>,
      <% } %>
    );
  }

  @override
  ThemeExtension<<%=it.className%>> lerp(
    <%=it.className%>? other,
    double t,
  ) {
    if (other is! <%=it.className%>) {
      return this;
    }
    return <%=it.className%>(
      <% for(var typo in it.typographies) {%>
  <%=typo%>: TextStyle.lerp(
        <%=typo%>,
        other.<%=typo%>,
        t,
      )!,
      <% } %>
    );
  }
  
  static <%=it.className%> of(BuildContext context) =>
      Theme.of(context).extension<<%=it.className%>>()!;
}
`;


/***/ }),

/***/ "./src/token_export.ts":
/*!*****************************!*\
  !*** ./src/token_export.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.processTokenData = exports.fetchTokenData = void 0;
const export_helpers_1 = __webpack_require__(/*! @supernovaio/export-helpers */ "./node_modules/@supernovaio/export-helpers/build/helpers.js");
const eta_1 = __webpack_require__(/*! eta */ "./node_modules/eta/dist/browser.umd.js");
const primitive_colors_1 = __webpack_require__(/*! ./content/primitive_colors */ "./src/content/primitive_colors.ts");
const primitive_dimensions_1 = __webpack_require__(/*! ./content/primitive_dimensions */ "./src/content/primitive_dimensions.ts");
const semantic_colors_1 = __webpack_require__(/*! ./content/semantic_colors */ "./src/content/semantic_colors.ts");
const shadows_1 = __webpack_require__(/*! ./content/shadows */ "./src/content/shadows.ts");
const typography_1 = __webpack_require__(/*! ./content/typography */ "./src/content/typography.ts");
const util_1 = __webpack_require__(/*! ./content/util */ "./src/content/util.ts");
const color_scheme_template_1 = __webpack_require__(/*! ./templates/color_scheme.template */ "./src/templates/color_scheme.template.ts");
const constants_template_1 = __webpack_require__(/*! ./templates/constants.template */ "./src/templates/constants.template.ts");
const primitive_colors_template_1 = __webpack_require__(/*! ./templates/primitive_colors.template */ "./src/templates/primitive_colors.template.ts");
const shadows_template_1 = __webpack_require__(/*! ./templates/shadows.template */ "./src/templates/shadows.template.ts");
const typography_template_1 = __webpack_require__(/*! ./templates/typography.template */ "./src/templates/typography.template.ts");
const icons_template_1 = __webpack_require__(/*! ./templates/icons.template */ "./src/templates/icons.template.ts");
const asset_export_1 = __webpack_require__(/*! ./asset_export */ "./src/asset_export.ts");
async function fetchTokenData(sdk, context, remoteVersionIdentifier) {
    // Fetch the necessary data
    let tokens = await sdk.tokens.getTokens(remoteVersionIdentifier);
    let tokenGroups = await sdk.tokens.getTokenGroups(remoteVersionIdentifier);
    // Filter by brand, if specified by the VSCode extension or pipeline configuration
    if (context.brandId) {
        tokens = tokens.filter((token) => token.brandId === context.brandId);
        tokenGroups = tokenGroups.filter((tokenGroup) => tokenGroup.brandId === context.brandId);
    }
    // Apply theme, if specified by the VSCode extension or pipeline configuration
    let themeTokens = {};
    const themes = await sdk.tokens.getTokenThemes(remoteVersionIdentifier);
    themeTokens["webDefault"] = tokens;
    for (const theme of themes) {
        const currentTokens = await sdk.tokens.computeTokensByApplyingThemes(tokens, [theme]);
        if (theme.codeName == "mobile") {
            tokens = currentTokens;
        }
        else {
            themeTokens[theme.codeName] = currentTokens;
        }
    }
    return [tokens, tokenGroups, themeTokens];
}
exports.fetchTokenData = fetchTokenData;
function processTokenData(tokens, tokenGroups, themes) {
    const eta = new eta_1.Eta({
        debug: true,
    });
    const helper = (0, util_1.referenceHelper)(tokens, tokenGroups);
    const primitiveTemplateData = (0, primitive_colors_1.createPrimitiveColors)(helper);
    const semanticsColorData = (0, semantic_colors_1.createColors)(helper, themes);
    const shadowsData = (0, shadows_1.createShadows)(helper);
    const fontSizesData = (0, primitive_dimensions_1.createFontSizes)(helper);
    const lineHeightData = (0, primitive_dimensions_1.createLineHeights)(helper);
    const letterSpacingData = (0, primitive_dimensions_1.createLetterSpacings)(helper);
    const spacingData = (0, primitive_dimensions_1.createGenericSpacings)(helper);
    const typographyTemplateData = (0, typography_1.createTypography)(helper);
    const iconsData = (0, asset_export_1.processAssetData)();
    return [
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/colors",
            fileName: "primitive_colors.dart",
            content: (0, primitive_colors_template_1.renderPrimitiveColors)(eta, primitiveTemplateData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/colors",
            fileName: "color_scheme.dart",
            content: (0, color_scheme_template_1.renderColorScheme)(eta, semanticsColorData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/shadows",
            fileName: "shadows.dart",
            content: (0, shadows_template_1.renderShadows)(eta, shadowsData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/typography",
            fileName: "line_heights.dart",
            content: (0, constants_template_1.renderConstantsFile)(eta, lineHeightData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/typography",
            fileName: "font_sizes.dart",
            content: (0, constants_template_1.renderConstantsFile)(eta, fontSizesData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/typography",
            fileName: "letter_spacings.dart",
            content: (0, constants_template_1.renderConstantsFile)(eta, letterSpacingData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/dimensions",
            fileName: "spacings.dart",
            content: (0, constants_template_1.renderConstantsFile)(eta, spacingData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/typography",
            fileName: "typography.dart",
            content: (0, typography_template_1.renderTypographyScheme)(eta, typographyTemplateData),
        }),
        export_helpers_1.FileHelper.createTextFile({
            relativePath: "./src/icons",
            fileName: "icons.dart",
            content: (0, icons_template_1.renderIconsFile)(eta, iconsData),
        }),
    ];
}
exports.processTokenData = processTokenData;


/***/ }),

/***/ "./node_modules/upper-case-first/dist.es2015/index.js":
/*!************************************************************!*\
  !*** ./node_modules/upper-case-first/dist.es2015/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   upperCaseFirst: () => (/* binding */ upperCaseFirst)
/* harmony export */ });
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/upper-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/upper-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeUpperCase: () => (/* binding */ localeUpperCase),
/* harmony export */   upperCase: () => (/* binding */ upperCase)
/* harmony export */ });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    az: {
        regexp: /[\u0069]/g,
        map: {
            i: "\u0130",
        },
    },
    lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
            i̇: "\u0049",
            j̇: "\u004A",
            į̇: "\u012E",
            i̇̀: "\u00CC",
            i̇́: "\u00CD",
            i̇̃: "\u0128",
        },
    },
};
/**
 * Localized upper case.
 */
function localeUpperCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return upperCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return upperCase(str);
}
/**
 * Upper case as a function.
 */
function upperCase(str) {
    return str.toUpperCase();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/eta/dist/browser.umd.js":
/*!**********************************************!*\
  !*** ./node_modules/eta/dist/browser.umd.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(t,e){ true?e(exports):0}(this,function(t){function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t,e,n){return a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&i(a,n.prototype),a},a.apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},s(t)}var o=/*#__PURE__*/function(){function t(t){this.cache=void 0,this.cache=t}var n=t.prototype;return n.define=function(t,e){this.cache[t]=e},n.get=function(t){return this.cache[t]},n.remove=function(t){delete this.cache[t]},n.reset=function(){this.cache={}},n.load=function(t){this.cache=e({},this.cache,t)},t}(),c=/*#__PURE__*/function(t){function e(e){var n;return(n=t.call(this,e)||this).name="Eta Error",n}return n(e,t),e}(/*#__PURE__*/s(Error));function l(t,e,n){var r=e.slice(0,n).split(/\n/),i=r.length,a=r[i-1].length+1;throw t+=" at line "+i+" col "+a+":\n\n  "+e.split(/\n/)[i-1]+"\n  "+Array(a).join(" ")+"^",new c(t)}function u(t,e,n,r){var i=e.split("\n"),a=Math.max(n-3,0),s=Math.min(i.length,n+3),o=r,l=i.slice(a,s).map(function(t,e){var r=e+a+1;return(r==n?" >> ":"    ")+r+"| "+t}).join("\n"),u=new c((o?o+":"+n+"\n":"line "+n+"\n")+l+"\n\n"+t.message);throw u.name=t.name,u}var p=function(){return Promise.resolve()}.constructor;function f(t,e){var n=this.config,r=e&&e.async?p:Function;try{return new r(n.varName,"options",this.compileToString.call(this,t,e))}catch(n){throw n instanceof SyntaxError?new c("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+this.compileToString.call(this,t,e)+"\n"):n}}function h(t,e){var n=this.config,r=e&&e.async,i=this.compileBody,a=this.parse.call(this,t),s=n.functionHeader+'\nlet include = (template, data) => this.render(template, data, options);\nlet includeAsync = (template, data) => this.renderAsync(template, data, options);\n\nlet __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction'+(n.debug?', line: 1, templateStr: "'+t.replace(/\\|"/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n")+'"':"")+"};\n\nfunction layout(path, data) {\n  __eta.layout = path;\n  __eta.layoutData = data;\n}"+(n.debug?"try {":"")+(n.useWith?"with("+n.varName+"||{}){":"")+"\n\n"+i.call(this,a)+"\nif (__eta.layout) {\n  __eta.res = "+(r?"await includeAsync":"include")+" (__eta.layout, {..."+n.varName+", body: __eta.res, ...__eta.layoutData});\n}\n"+(n.useWith?"}":"")+(n.debug?"} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }":"")+"\nreturn __eta.res;\n";if(n.plugins)for(var o=0;o<n.plugins.length;o++){var c=n.plugins[o];c.processFnString&&(s=c.processFnString(s,n))}return s}function d(t){for(var e=this.config,n=0,r=t.length,i="";n<r;n++){var a=t[n];if("string"==typeof a)i+="__eta.res+='"+a+"'\n";else{var s=a.t,o=a.val||"";e.debug&&(i+="__eta.line="+a.lineNo+"\n"),"r"===s?(e.autoFilter&&(o="__eta.f("+o+")"),i+="__eta.res+="+o+"\n"):"i"===s?(e.autoFilter&&(o="__eta.f("+o+")"),e.autoEscape&&(o="__eta.e("+o+")"),i+="__eta.res+="+o+"\n"):"e"===s&&(i+=o+"\n")}}return i}var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function y(t){return g[t]}var v={autoEscape:!0,autoFilter:!1,autoTrim:[!1,"nl"],cache:!1,cacheFilepaths:!0,debug:!1,escapeFunction:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,y):e},filterFunction:function(t){return String(t)},functionHeader:"",parse:{exec:"",interpolate:"=",raw:"~"},plugins:[],rmWhitespace:!1,tags:["<%","%>"],useWith:!1,varName:"it",defaultExtension:".eta"},m=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,x=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,_=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;function b(t){return t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function w(t,e){return t.slice(0,e).split("\n").length}function S(t){var e=this.config,n=[],r=!1,i=0,a=e.parse;if(e.plugins)for(var s=0;s<e.plugins.length;s++){var o=e.plugins[s];o.processTemplate&&(t=o.processTemplate(t,e))}function c(t,i){t&&(t=function(t,e,n,r){var i,a;return Array.isArray(e.autoTrim)?(i=e.autoTrim[1],a=e.autoTrim[0]):i=a=e.autoTrim,(n||!1===n)&&(i=n),(r||!1===r)&&(a=r),a||i?"slurp"===i&&"slurp"===a?t.trim():("_"===i||"slurp"===i?t=t.trimStart():"-"!==i&&"nl"!==i||(t=t.replace(/^(?:\r\n|\n|\r)/,"")),"_"===a||"slurp"===a?t=t.trimEnd():"-"!==a&&"nl"!==a||(t=t.replace(/(?:\r\n|\n|\r)$/,"")),t):t}(t,e,r,i),t&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),n.push(t)))}e.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),m.lastIndex=0,x.lastIndex=0,_.lastIndex=0;for(var u,p=[a.exec,a.interpolate,a.raw].reduce(function(t,e){return t&&e?t+"|"+b(e):e?b(e):t},""),f=new RegExp(b(e.tags[0])+"(-|_)?\\s*("+p+")?\\s*","g"),h=new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?"+b(e.tags[1])+")","g");u=f.exec(t);){var d=t.slice(i,u.index);i=u[0].length+u.index;var g=u[2]||"";c(d,u[1]),h.lastIndex=i;for(var y=void 0,v=!1;y=h.exec(t);){if(y[1]){var S=t.slice(i,y.index);f.lastIndex=i=h.lastIndex,r=y[2],v={t:g===a.exec?"e":g===a.raw?"r":g===a.interpolate?"i":"",val:S};break}var F=y[0];if("/*"===F){var O=t.indexOf("*/",h.lastIndex);-1===O&&l("unclosed comment",t,y.index),h.lastIndex=O}else"'"===F?(x.lastIndex=y.index,x.exec(t)?h.lastIndex=x.lastIndex:l("unclosed string",t,y.index)):'"'===F?(_.lastIndex=y.index,_.exec(t)?h.lastIndex=_.lastIndex:l("unclosed string",t,y.index)):"`"===F&&(m.lastIndex=y.index,m.exec(t)?h.lastIndex=m.lastIndex:l("unclosed string",t,y.index))}v?(e.debug&&(v.lineNo=w(t,u.index)),n.push(v)):l("unclosed tag",t,u.index)}if(c(t.slice(i,t.length),!1),e.plugins)for(var I=0;I<e.plugins.length;I++){var A=e.plugins[I];A.processAST&&(n=A.processAST(n,e))}return n}function F(t,e){var n=e&&e.async?this.templatesAsync:this.templatesSync;if(this.resolvePath&&this.readFile&&!t.startsWith("@")){var r=e.filepath,i=n.get(r);if(this.config.cache&&i)return i;var a=this.readFile(r),s=this.compile(a,e);return this.config.cache&&n.define(r,s),s}var o=n.get(t);if(o)return o;throw new c("Failed to get template '"+t+"'")}function O(t,n,r){var i,a=e({},r,{async:!1});return"string"==typeof t?(this.resolvePath&&this.readFile&&!t.startsWith("@")&&(a.filepath=this.resolvePath(t,a)),i=F.call(this,t,a)):i=t,i.call(this,n,a)}function I(t,n,r){var i,a=e({},r,{async:!0});"string"==typeof t?(this.resolvePath&&this.readFile&&!t.startsWith("@")&&(a.filepath=this.resolvePath(t,a)),i=F.call(this,t,a)):i=t;var s=i.call(this,n,a);return Promise.resolve(s)}function A(t,e){var n=this.compile(t,{async:!1});return O.call(this,n,e)}function T(t,e){var n=this.compile(t,{async:!0});return I.call(this,n,e)}var P=/*#__PURE__*/function(){function t(t){this.config=void 0,this.RuntimeErr=u,this.compile=f,this.compileToString=h,this.compileBody=d,this.parse=S,this.render=O,this.renderAsync=I,this.renderString=A,this.renderStringAsync=T,this.filepathCache={},this.templatesSync=new o({}),this.templatesAsync=new o({}),this.resolvePath=null,this.readFile=null,this.config=t?e({},v,t):e({},v)}var n=t.prototype;return n.configure=function(t){this.config=e({},this.config,t)},n.withConfig=function(t){return e({},this,{config:e({},this.config,t)})},n.loadTemplate=function(t,e,n){if("string"==typeof e)(n&&n.async?this.templatesAsync:this.templatesSync).define(t,this.compile(e,n));else{var r=this.templatesSync;("AsyncFunction"===e.constructor.name||n&&n.async)&&(r=this.templatesAsync),r.define(t,e)}},t}(),j=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(P);t.Eta=j});
//# sourceMappingURL=browser.umd.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportConfiguration = void 0;
const token_export_1 = __webpack_require__(/*! ./token_export */ "./src/token_export.ts");
/**
 * Export entrypoint.
 * When running `export` through extensions or pipelines, this function will be called.
 * Context contains information about the design system and version that is currently being exported.
 */
Pulsar.export(async (sdk, context) => {
    // Fetch data from design system that is currently being exported (context)
    const remoteVersionIdentifier = {
        designSystemId: context.dsId,
        versionId: context.versionId,
    };
    const [tokens, tokenGroups, themes] = await (0, token_export_1.fetchTokenData)(sdk, context, remoteVersionIdentifier);
    return (0, token_export_1.processTokenData)(tokens, tokenGroups, themes);
});
/** Exporter configuration. Adheres to the `ExporterConfiguration` interface and its content comes from the resolved default configuration + user overrides of various configuration keys */
exports.exportConfiguration = Pulsar.exportConfig();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU87UUFDdEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUNqWEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDBGQUFpRTtBQUNqRTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBYyxFQUFFLE9BQXNCLEVBQWlDLEVBQUU7SUFDNUYsMkVBQTJFO0lBQzNFLE1BQU0sdUJBQXVCLEdBQTRCO1FBQ3ZELGNBQWMsRUFBRSxPQUFPLENBQUMsSUFBSTtRQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7S0FDN0I7SUFFRCxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxNQUFNLGlDQUFjLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBRWxHLE9BQU8sbUNBQWdCLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFDRiw0TEFBNEw7QUFDL0ssMkJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL0BzdXBlcm5vdmFpby9leHBvcnQtaGVscGVycy9idWlsZC9oZWxwZXJzLmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvQHN1cGVybm92YWlvL3Nkay1leHBvcnRlcnMvYnVpbGQvc3VwZXJub3ZhLXNkay10eXBlc2NyaXB0LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2NhcGl0YWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2NoYW5nZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvY29uc3RhbnQtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2RvdC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvaGVhZGVyLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3BhcmFtLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9wYXNjYWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3BhdGgtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3NlbnRlbmNlLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvYXNzZXRfZXhwb3J0LnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9pY29uc19kYXRhLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9wcmltaXRpdmVfY29sb3JzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9wcmltaXRpdmVfZGltZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL2NvbnRlbnQvc2VtYW50aWNfY29sb3JzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9zaGFkb3dzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC90eXBvZ3JhcGh5LnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC91dGlsLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvdGVtcGxhdGVzL2NvbG9yX3NjaGVtZS50ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL3RlbXBsYXRlcy9jb25zdGFudHMudGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy90ZW1wbGF0ZXMvaWNvbnMudGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy90ZW1wbGF0ZXMvcHJpbWl0aXZlX2NvbG9ycy50ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL3RlbXBsYXRlcy9zaGFkb3dzLnRlbXBsYXRlLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvdGVtcGxhdGVzL3R5cG9ncmFwaHkudGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy90b2tlbl9leHBvcnQudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy91cHBlci1jYXNlLWZpcnN0L2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvdXBwZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2V0YS9kaXN0L2Jyb3dzZXIudW1kLmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17NjM5OihlLHIsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLkl0ZXJhdG9ycz12b2lkIDA7Y29uc3Qgbz10KDU4KTtyLkl0ZXJhdG9ycz1jbGFzc3tzdGF0aWMgYWxsVG9rZW5UeXBlcygpe3JldHVybltvLlRva2VuVHlwZS5jb2xvcixvLlRva2VuVHlwZS50eXBvZ3JhcGh5LG8uVG9rZW5UeXBlLmRpbWVuc2lvbixvLlRva2VuVHlwZS5zaXplLG8uVG9rZW5UeXBlLnNwYWNlLG8uVG9rZW5UeXBlLm9wYWNpdHksby5Ub2tlblR5cGUuZm9udFNpemUsby5Ub2tlblR5cGUubGluZUhlaWdodCxvLlRva2VuVHlwZS5sZXR0ZXJTcGFjaW5nLG8uVG9rZW5UeXBlLnBhcmFncmFwaFNwYWNpbmcsby5Ub2tlblR5cGUuYm9yZGVyV2lkdGgsby5Ub2tlblR5cGUucmFkaXVzLG8uVG9rZW5UeXBlLmR1cmF0aW9uLG8uVG9rZW5UeXBlLnpJbmRleCxvLlRva2VuVHlwZS5zaGFkb3csby5Ub2tlblR5cGUuYm9yZGVyLG8uVG9rZW5UeXBlLmdyYWRpZW50LG8uVG9rZW5UeXBlLnN0cmluZyxvLlRva2VuVHlwZS5wcm9kdWN0Q29weSxvLlRva2VuVHlwZS5mb250RmFtaWx5LG8uVG9rZW5UeXBlLmZvbnRXZWlnaHQsby5Ub2tlblR5cGUudGV4dENhc2Usby5Ub2tlblR5cGUudGV4dERlY29yYXRpb24sby5Ub2tlblR5cGUudmlzaWJpbGl0eSxvLlRva2VuVHlwZS5ibHVyXX1zdGF0aWMgYWxsRGltZW5zaW9uVG9rZW5UeXBlcygpe3JldHVybltvLlRva2VuVHlwZS5kaW1lbnNpb24sby5Ub2tlblR5cGUuc2l6ZSxvLlRva2VuVHlwZS5zcGFjZSxvLlRva2VuVHlwZS5vcGFjaXR5LG8uVG9rZW5UeXBlLmZvbnRTaXplLG8uVG9rZW5UeXBlLmxpbmVIZWlnaHQsby5Ub2tlblR5cGUubGV0dGVyU3BhY2luZyxvLlRva2VuVHlwZS5wYXJhZ3JhcGhTcGFjaW5nLG8uVG9rZW5UeXBlLmJvcmRlcldpZHRoLG8uVG9rZW5UeXBlLnJhZGl1cyxvLlRva2VuVHlwZS5kdXJhdGlvbixvLlRva2VuVHlwZS56SW5kZXhdfXN0YXRpYyBhbGxTdHJpbmdUb2tlblR5cGVzKCl7cmV0dXJuW28uVG9rZW5UeXBlLnN0cmluZyxvLlRva2VuVHlwZS5wcm9kdWN0Q29weSxvLlRva2VuVHlwZS5mb250RmFtaWx5LG8uVG9rZW5UeXBlLmZvbnRXZWlnaHRdfXN0YXRpYyBhbGxPcHRpb25Ub2tlblR5cGVzKCl7cmV0dXJuW28uVG9rZW5UeXBlLnRleHRDYXNlLG8uVG9rZW5UeXBlLnRleHREZWNvcmF0aW9uLG8uVG9rZW5UeXBlLnZpc2liaWxpdHldfX19LDk4OTooZSxyKT0+e3ZhciB0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuQ29sb3JGb3JtYXQ9dm9pZCAwLCh0PXIuQ29sb3JGb3JtYXR8fChyLkNvbG9yRm9ybWF0PXt9KSkucmdiPVwicmdiXCIsdC5yZ2JhPVwicmdiYVwiLHQuc21hcnRSZ2JhPVwic21hcnRSZ2JhXCIsdC5oZXg2PVwiaGV4NlwiLHQuaGV4OD1cImhleDhcIix0Lmhhc2hIZXg2PVwiaGFzaEhleDZcIix0Lmhhc2hIZXg4PVwiaGFzaEhleDhcIix0LnNtYXJ0SGFzaEhleD1cInNtYXJ0SGFzaEhleFwiLHQuc21hcnRIZXg9XCJzbWFydEhleFwiLHQuaHNsPVwiaHNsXCIsdC5oc2xhPVwiaHNsYVwiLHQuc21hcnRIc2xhPVwic21hcnRIc2xhXCIsdC5zbWFydFVJQ29sb3I9XCJzbWFydFVJQ29sb3JcIn0sNTQ1OihlLHIpPT57dmFyIHQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5TdHJpbmdDYXNlPXZvaWQgMCwodD1yLlN0cmluZ0Nhc2V8fChyLlN0cmluZ0Nhc2U9e30pKS5jYW1lbENhc2U9XCJjYW1lbENhc2VcIix0LmNhcGl0YWxDYXNlPVwiY2FwaXRhbENhc2VcIix0LmNvbnN0YW50Q2FzZT1cImNvbnN0YW50Q2FzZVwiLHQuZG90Q2FzZT1cImRvdENhc2VcIix0LmhlYWRlckNhc2U9XCJoZWFkZXJDYXNlXCIsdC5ub0Nhc2U9XCJub0Nhc2VcIix0LnBhcmFtQ2FzZT1cInBhcmFtQ2FzZVwiLHQucGFzY2FsQ2FzZT1cInBhc2NhbENhc2VcIix0LnBhdGhDYXNlPVwicGF0aENhc2VcIix0LnNlbnRlbmNlQ2FzZT1cInNlbnRlbmNlQ2FzZVwiLHQuc25ha2VDYXNlPVwic25ha2VDYXNlXCJ9LDYxNzooZSxyLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5GaWxlSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoNTgpO3IuRmlsZUhlbHBlcj1jbGFzc3tzdGF0aWMgY3JlYXRlQ29weVJlbW90ZUZpbGUoe3JlbGF0aXZlUGF0aDplLGZpbGVOYW1lOnIsdXJsOnR9KXtyZXR1cm57cGF0aDplLG5hbWU6cix0eXBlOm8uT3V0cHV0RmlsZVR5cGUuY29weVJlbW90ZVVybCx1cmw6dH19c3RhdGljIGNyZWF0ZVRleHRGaWxlKHtyZWxhdGl2ZVBhdGg6ZSxmaWxlTmFtZTpyLGNvbnRlbnQ6dH0pe3JldHVybntwYXRoOmUsbmFtZTpyLHR5cGU6by5PdXRwdXRGaWxlVHlwZS50ZXh0LGNvbnRlbnQ6dH19c3RhdGljIGNyZWF0ZUJpbmFyeUZpbGUoe3JlbGF0aXZlUGF0aDplLGZpbGVOYW1lOnIsZGF0YTp0fSl7cmV0dXJue3BhdGg6ZSxuYW1lOnIsdHlwZTpvLk91dHB1dEZpbGVUeXBlLmJpbmFyeSxkYXRhOnR9fX19LDc2MTooZSxyKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuc3VyZU9wdGlvbmFsUmVmZXJlbmNlPXZvaWQgMCxyLnN1cmVPcHRpb25hbFJlZmVyZW5jZT1mdW5jdGlvbihlLHIsdD0hMCl7aWYoIWV8fCF0KXJldHVybiBudWxsO2NvbnN0IG89ci5nZXQoZSk7aWYoIW8pdGhyb3cgbmV3IEVycm9yKGBUcnlpbmcgdG8gcmV0cmlldmUgdW5rbm93biByZWZlcmVuY2VkIHRva2VuICR7ZX1gKTtyZXR1cm4gb319LDExODooZSxyKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuTmV0d29ya0hlbHBlcj12b2lkIDAsci5OZXR3b3JrSGVscGVyPWNsYXNze3N0YXRpYyBhc3luYyBmZXRjaEFzVGV4dChlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkudGV4dCgpfXN0YXRpYyBhc3luYyBmZXRjaEFzSlNPTihlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkuanNvbigpfXN0YXRpYyBhc3luYyBmZXRjaEFzRGF0YShlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkuYXJyYXlCdWZmZXIoKX1zdGF0aWMgYXN5bmMgcGVyZm9ybUZldGNoKGUscix0KXt0cnl7Y29uc3Qgbz1hd2FpdCBlLm5ldHdvcmsuZmV0Y2gocix0KTtpZighby5vayl0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7by5zdGF0dXN9LCBlcnJvcjogJHthd2FpdCBvLnRleHQoKX1gKTtyZXR1cm4gb31jYXRjaChlKXt0aHJvdyBlfX19fSw3NzE6KGUscix0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuQ1NTSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoNTgpLGE9dCg3NjEpLG49dCg5NTIpO3IuQ1NTSGVscGVyPWNsYXNze3N0YXRpYyB0b2tlblRvQ1NTKGUscix0KXtzd2l0Y2goZS50b2tlblR5cGUpe2Nhc2Ugby5Ub2tlblR5cGUuY29sb3I6cmV0dXJuIHRoaXMuY29sb3JUb2tlblZhbHVlVG9DU1MoZS52YWx1ZSxyLHQpO2Nhc2Ugby5Ub2tlblR5cGUuYm9yZGVyOnJldHVybiB0aGlzLmJvcmRlclRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5ncmFkaWVudDpyZXR1cm4gdGhpcy5ncmFkaWVudFRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5kaW1lbnNpb246Y2FzZSBvLlRva2VuVHlwZS5zaXplOmNhc2Ugby5Ub2tlblR5cGUuc3BhY2U6Y2FzZSBvLlRva2VuVHlwZS5vcGFjaXR5OmNhc2Ugby5Ub2tlblR5cGUuZm9udFNpemU6Y2FzZSBvLlRva2VuVHlwZS5saW5lSGVpZ2h0OmNhc2Ugby5Ub2tlblR5cGUubGV0dGVyU3BhY2luZzpjYXNlIG8uVG9rZW5UeXBlLnBhcmFncmFwaFNwYWNpbmc6Y2FzZSBvLlRva2VuVHlwZS5ib3JkZXJXaWR0aDpjYXNlIG8uVG9rZW5UeXBlLnJhZGl1czpjYXNlIG8uVG9rZW5UeXBlLmR1cmF0aW9uOmNhc2Ugby5Ub2tlblR5cGUuekluZGV4OnJldHVybiB0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5zaGFkb3c6cmV0dXJuIHRoaXMuc2hhZG93VG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtjYXNlIG8uVG9rZW5UeXBlLmZvbnRXZWlnaHQ6Y2FzZSBvLlRva2VuVHlwZS5mb250RmFtaWx5OmNhc2Ugby5Ub2tlblR5cGUucHJvZHVjdENvcHk6Y2FzZSBvLlRva2VuVHlwZS5zdHJpbmc6cmV0dXJuIHRoaXMuc3RyaW5nVG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtjYXNlIG8uVG9rZW5UeXBlLnRleHRDYXNlOmNhc2Ugby5Ub2tlblR5cGUudGV4dERlY29yYXRpb246Y2FzZSBvLlRva2VuVHlwZS52aXNpYmlsaXR5OnJldHVybiB0aGlzLm9wdGlvblRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5ibHVyOnJldHVybiB0aGlzLmJsdXJUb2tlblZhbHVlVG9DU1MoZS52YWx1ZSxyLHQpO2Nhc2Ugby5Ub2tlblR5cGUudHlwb2dyYXBoeTpyZXR1cm4gdGhpcy50eXBvZ3JhcGh5VG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtkZWZhdWx0OnRocm93IG5ldyBvLlVucmVhY2hhYmxlQ2FzZUVycm9yKGUudG9rZW5UeXBlLFwiVW5zdXBwb3J0ZWQgdG9rZW4gdHlwZSBmb3IgdHJhbnNmb3JtYXRpb24gdG8gQ1NTOlwiKX19c3RhdGljIGNvbG9yVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtyZXR1cm4gbi5Db2xvckhlbHBlci5mb3JtYXR0ZWRDb2xvck9yVmFyaWFibGVOYW1lKGUscix0KX1zdGF0aWMgYm9yZGVyVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO2lmKG8pcmV0dXJuIHQudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pO2NvbnN0IG49dGhpcy5kaW1lbnNpb25Ub2tlblZhbHVlVG9DU1MoZS53aWR0aCxyLHQpLHM9dGhpcy5ib3JkZXJTdHlsZVRvQ1NTKGUuc3R5bGUpLGk9dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCk7cmV0dXJuIHRoaXMuYm9yZGVyUG9zaXRpb25Ub0NTUyhlLnBvc2l0aW9uKSxgJHtufSAke3N9ICR7aX1gfXN0YXRpYyBncmFkaWVudFRva2VuVmFsdWVUb0NTUyhlLHIsdCl7cmV0dXJuIGUubWFwKChlPT50aGlzLmdyYWRpZW50TGF5ZXJUb0NTUyhlLHIsdCkpKS5qb2luKFwiLCBcIil9c3RhdGljIGdyYWRpZW50TGF5ZXJUb0NTUyhlLHIsdCl7Y29uc3Qgcz0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtpZihzKXJldHVybiB0LnRva2VuVG9WYXJpYWJsZVJlZihzKTtsZXQgaT1cIlwiO3N3aXRjaChlLnR5cGUpe2Nhc2Ugby5HcmFkaWVudFR5cGUubGluZWFyOmk9XCJsaW5lYXItZ3JhZGllbnQoMGRlZywgXCI7YnJlYWs7Y2FzZSBvLkdyYWRpZW50VHlwZS5yYWRpYWw6aT1cInJhZGlhbC1ncmFkaWVudChjaXJjbGUsIFwiO2JyZWFrO2Nhc2Ugby5HcmFkaWVudFR5cGUuYW5ndWxhcjppPVwiY29uaWMtZ3JhZGllbnQoXCI7YnJlYWs7ZGVmYXVsdDppPVwibGluZWFyLWdyYWRpZW50KDBkZWcsIFwifXJldHVybmAke2l9JHtlLnN0b3BzLm1hcCgoZT0+YCR7dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCl9ICR7bi5Db2xvckhlbHBlci5yb3VuZFRvRGVjaW1hbHMoMTAwKmUucG9zaXRpb24sdC5kZWNpbWFscyl9JWApKS5qb2luKFwiLCBcIil9KWB9c3RhdGljIGRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLHIsdCl7Y29uc3Qgbz0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtyZXR1cm4gbz90LnRva2VuVG9WYXJpYWJsZVJlZihvKTpgJHtuLkNvbG9ySGVscGVyLnJvdW5kVG9EZWNpbWFscyhlLm1lYXN1cmUsdC5kZWNpbWFscyl9JHt0aGlzLnVuaXRUb0NTUyhlLnVuaXQpfWB9c3RhdGljIHNoYWRvd1Rva2VuVmFsdWVUb0NTUyhlLHIsdCl7cmV0dXJuIGUubWFwKChlPT50aGlzLnNoYWRvd0xheWVyVG9DU1MoZSxyLHQpKSkuam9pbihcIiwgXCIpfXN0YXRpYyBzaGFkb3dMYXllclRvQ1NTKGUscix0KXtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBuP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG4pOmAke2UudHlwZT09PW8uU2hhZG93VHlwZS5pbm5lcj9cImluc2V0IFwiOlwiXCJ9JHtlLnh9cHggJHtlLnl9cHggJHtlLnJhZGl1c31weCAke2Uuc3ByZWFkfXB4ICR7dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCl9YH1zdGF0aWMgc3RyaW5nVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBvP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pOmBcIiR7ZS50ZXh0fVwiYH1zdGF0aWMgb3B0aW9uVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBvP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pOmBcIiR7ZS52YWx1ZX1cImB9c3RhdGljIGJsdXJUb2tlblZhbHVlVG9DU1MoZSxyLHQpe2NvbnN0IG89KDAsYS5zdXJlT3B0aW9uYWxSZWZlcmVuY2UpKGUucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyk7cmV0dXJuIG8/dC50b2tlblRvVmFyaWFibGVSZWYobyk6YGJsdXIoJHt0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLnJhZGl1cyxyLHQpfSlgfXN0YXRpYyB0eXBvZ3JhcGh5VG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO2lmKG4pcmV0dXJuIHQudG9rZW5Ub1ZhcmlhYmxlUmVmKG4pO2NvbnN0IHM9KDAsYS5zdXJlT3B0aW9uYWxSZWZlcmVuY2UpKGUuZm9udEZhbWlseS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKSxpPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLmZvbnRXZWlnaHQucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyksbD0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS50ZXh0RGVjb3JhdGlvbi5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKSxjPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnRleHRDYXNlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpLFQ9cz90LnRva2VuVG9WYXJpYWJsZVJlZihzKTplLmZvbnRGYW1pbHkudGV4dCxwPWk/dC50b2tlblRvVmFyaWFibGVSZWYoaSk6ZS5mb250V2VpZ2h0LnRleHQ7bD90LnRva2VuVG9WYXJpYWJsZVJlZihsKTplLnRleHREZWNvcmF0aW9uLnZhbHVlPT09by5UZXh0RGVjb3JhdGlvbi5vcmlnaW5hbCYmdGhpcy50ZXh0RGVjb3JhdGlvblRvQ1NTKGUudGV4dERlY29yYXRpb24udmFsdWUpLGM/dC50b2tlblRvVmFyaWFibGVSZWYoYyk6ZS50ZXh0Q2FzZS52YWx1ZT09PW8uVGV4dENhc2Uub3JpZ2luYWwmJnRoaXMudGV4dENhc2VUb0NTUyhlLnRleHRDYXNlLnZhbHVlKTtyZXR1cm5gJHtlLnRleHRDYXNlLnZhbHVlPT09by5UZXh0Q2FzZS5zbWFsbENhcHM/XCJzbWFsbC1jYXBzIFwiOlwiXCJ9JHtpP3A6YFwiJHtwfVwiYH0gJHt0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLmZvbnRTaXplLHIsdCl9LyR7dGhpcy5kaW1lbnNpb25Ub2tlblZhbHVlVG9DU1MoZS5saW5lSGVpZ2h0LHIsdCl9ICR7cz9UOmBcIiR7VH1cImB9YH1zdGF0aWMgYm9yZGVyU3R5bGVUb0NTUyhlKXtzd2l0Y2goZSl7Y2FzZSBvLkJvcmRlclN0eWxlLmRhc2hlZDpyZXR1cm5cImRhc2hlZFwiO2Nhc2Ugby5Cb3JkZXJTdHlsZS5kb3R0ZWQ6cmV0dXJuXCJkb3R0ZWRcIjtjYXNlIG8uQm9yZGVyU3R5bGUuc29saWQ6cmV0dXJuXCJzb2xpZFwiO2Nhc2Ugby5Cb3JkZXJTdHlsZS5ncm9vdmU6cmV0dXJuXCJncm9vdmVcIjtkZWZhdWx0OnJldHVyblwic29saWRcIn19c3RhdGljIGJvcmRlclBvc2l0aW9uVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5Cb3JkZXJQb3NpdGlvbi5jZW50ZXI6cmV0dXJuXCJjZW50ZXJcIjtjYXNlIG8uQm9yZGVyUG9zaXRpb24uaW5zaWRlOnJldHVyblwiaW5zaWRlXCI7Y2FzZSBvLkJvcmRlclBvc2l0aW9uLm91dHNpZGU6ZGVmYXVsdDpyZXR1cm5cIm91dHNpZGVcIn19c3RhdGljIHVuaXRUb0NTUyhlKXtzd2l0Y2goZSl7Y2FzZSBvLlVuaXQucGVyY2VudDpyZXR1cm5cIiVcIjtjYXNlIG8uVW5pdC5waXhlbHM6cmV0dXJuXCJweFwiO2Nhc2Ugby5Vbml0LnJlbTpyZXR1cm5cInJlbVwiO2Nhc2Ugby5Vbml0LnJhdzpyZXR1cm5cIlwiO2Nhc2Ugby5Vbml0Lm1zOnJldHVyblwibXNcIjtkZWZhdWx0OnJldHVyblwicHhcIn19c3RhdGljIHRleHRDYXNlVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5UZXh0Q2FzZS5vcmlnaW5hbDpyZXR1cm5cIm5vbmVcIjtjYXNlIG8uVGV4dENhc2UudXBwZXI6cmV0dXJuXCJ1cHBlcmNhc2VcIjtjYXNlIG8uVGV4dENhc2UubG93ZXI6cmV0dXJuXCJsb3dlcmNhc2VcIjtjYXNlIG8uVGV4dENhc2UuY2FtZWw6Y2FzZSBvLlRleHRDYXNlLnNtYWxsQ2FwczpyZXR1cm5cImNhcGl0YWxpemVcIn19c3RhdGljIHRleHREZWNvcmF0aW9uVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5UZXh0RGVjb3JhdGlvbi5vcmlnaW5hbDpyZXR1cm5cIm5vbmVcIjtjYXNlIG8uVGV4dERlY29yYXRpb24udW5kZXJsaW5lOnJldHVyblwidW5kZXJsaW5lXCI7Y2FzZSBvLlRleHREZWNvcmF0aW9uLnN0cmlrZXRocm91Z2g6cmV0dXJuXCJsaW5lLXRocm91Z2hcIn19fX0sOTUyOihlLHIsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLkNvbG9ySGVscGVyPXZvaWQgMDtjb25zdCBvPXQoOTg5KSxhPXQoNzYxKTtjbGFzcyBue3N0YXRpYyBmb3JtYXR0ZWRDb2xvck9yVmFyaWFibGVOYW1lKGUscix0KXtsZXQgbixzLGk7Y29uc3QgbD0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtpZihsKW49dC50b2tlblRvVmFyaWFibGVSZWYobCk7ZWxzZXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLmNvbG9yLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO28mJihzPXQudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pKTtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLm9wYWNpdHkucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyk7biYmKGk9dC50b2tlblRvVmFyaWFibGVSZWYobikpfWlmKG4pcmV0dXJuIG47aWYoIW4mJiFzJiYhaSlyZXR1cm4gdGhpcy5mb3JtYXR0ZWRDb2xvcihlLHQuY29sb3JGb3JtYXQsdC5kZWNpbWFscyk7c3dpdGNoKHQuY29sb3JGb3JtYXQpe2Nhc2Ugby5Db2xvckZvcm1hdC5yZ2I6Y2FzZSBvLkNvbG9yRm9ybWF0LnJnYmE6Y2FzZSBvLkNvbG9yRm9ybWF0LnNtYXJ0UmdiYTpyZXR1cm4gdGhpcy5jb2xvclRvUmdiKHQuY29sb3JGb3JtYXQsdGhpcy5ub3JtYWxpemVkSW50Q29sb3IoZSksZS5vcGFjaXR5Lm1lYXN1cmUsdC5kZWNpbWFscyxzLGkpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuZm9ybWF0dGVkQ29sb3IoZSx0LmNvbG9yRm9ybWF0LHQuZGVjaW1hbHMpfX1zdGF0aWMgZm9ybWF0dGVkQ29sb3IoZSxyLHQ9Myl7c3dpdGNoKHIpe2Nhc2Ugby5Db2xvckZvcm1hdC5oZXg2OmNhc2Ugby5Db2xvckZvcm1hdC5oZXg4OmNhc2Ugby5Db2xvckZvcm1hdC5oYXNoSGV4NjpjYXNlIG8uQ29sb3JGb3JtYXQuaGFzaEhleDg6Y2FzZSBvLkNvbG9yRm9ybWF0LnNtYXJ0SGV4OmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydEhhc2hIZXg6cmV0dXJuIHRoaXMuY29sb3JUb0hleChyLHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlKTtjYXNlIG8uQ29sb3JGb3JtYXQucmdiOmNhc2Ugby5Db2xvckZvcm1hdC5yZ2JhOmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydFJnYmE6cmV0dXJuIHRoaXMuY29sb3JUb1JnYihyLHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlLHQsbnVsbCxudWxsKTtjYXNlIG8uQ29sb3JGb3JtYXQuaHNsOmNhc2Ugby5Db2xvckZvcm1hdC5oc2xhOmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydEhzbGE6cmV0dXJuIHRoaXMuY29sb3JUb0hzbChyLHRoaXMubm9ybWFsaXplZEZyYWN0aW9uYWxDb2xvcihlKSxlLm9wYWNpdHkubWVhc3VyZSx0KTtjYXNlIG8uQ29sb3JGb3JtYXQuc21hcnRVSUNvbG9yOnJldHVybiB0aGlzLmNvbG9yVG9VSUNvbG9yKHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlLHQpfX1zdGF0aWMgY29sb3JUb1JnYihlLHIsdCxhLG4scyl7bGV0IGk7cmV0dXJuIGk9ZT09PW8uQ29sb3JGb3JtYXQucmdiYXx8ZT09PW8uQ29sb3JGb3JtYXQuc21hcnRSZ2JhJiZ0PDE/YHJnYmEoJHtufHxgJHtyLnJ9LCAke3IuZ30sICR7ci5ifWB9LCAke3N8fHRoaXMucm91bmRUb0RlY2ltYWxzKHQsYSl9KWA6YHJnYigke258fGAke3Iucn0sICR7ci5nfSwgJHtyLmJ9YH0pYCxpfXN0YXRpYyBjb2xvclRvSGV4KGUscix0KXtsZXQgYT1gJHt0aGlzLnBIZXgoci5yKX0ke3RoaXMucEhleChyLmcpfSR7dGhpcy5wSGV4KHIuYil9YDtyZXR1cm4oZT09PW8uQ29sb3JGb3JtYXQuaGV4OHx8ZT09PW8uQ29sb3JGb3JtYXQuaGFzaEhleDh8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SGV4JiZ0PDF8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SGFzaEhleCYmdDwxKSYmKGErPWAke3RoaXMucEhleChNYXRoLnJvdW5kKDI1NSp0KSl9YCksZSE9PW8uQ29sb3JGb3JtYXQuaGFzaEhleDYmJmUhPT1vLkNvbG9yRm9ybWF0Lmhhc2hIZXg4JiZlIT09by5Db2xvckZvcm1hdC5zbWFydEhhc2hIZXh8fChhPWAjJHthfWApLGF9c3RhdGljIGNvbG9yVG9Ic2woZSxyLHQsYSl7Y29uc3Qgbj1NYXRoLm1heChyLnIsci5nLHIuYikscz1NYXRoLm1pbihyLnIsci5nLHIuYik7bGV0IGksbCxjLFQ9KG4rcykvMjtpZihuPT09cylpPWw9MDtlbHNle2NvbnN0IGU9bi1zO2w9VD4uNT9lLygyLW4tcyk6ZS8obitzKSxuPT09ci5yP2k9KHIuZy1yLmIpL2UrKHIuZzxyLmI/NjowKTpuPT09ci5nP2k9KHIuYi1yLnIpL2UrMjpuPT09ci5iJiYoaT0oci5yLXIuZykvZSs0KSxpLz02fXJldHVybiBjPWU9PT1vLkNvbG9yRm9ybWF0LmhzbGF8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SHNsYSYmdDwxP2Boc2xhKCR7TWF0aC5yb3VuZCgzNjAqaSl9JSwgJHtNYXRoLnJvdW5kKDEwMCpsKX0lLCAke01hdGgucm91bmQoMTAwKlQpfSUsICR7dGhpcy5yb3VuZFRvRGVjaW1hbHModCxhKX0pYDpgaHNsKCR7TWF0aC5yb3VuZCgzNjAqaSl9JSwgJHtNYXRoLnJvdW5kKDEwMCpsKX0lLCAke01hdGgucm91bmQoMTAwKlQpfSUpYCxjfXN0YXRpYyBjb2xvclRvVUlDb2xvcihlLHIsdD0zKXtsZXQgbz1gVUlDb2xvcihyZ2I6IDB4JHt0aGlzLnBIZXgoZS5yKX0ke3RoaXMucEhleChlLmcpfSR7dGhpcy5wSGV4KGUuYil9KWA7cmV0dXJuIHI8MSYmKG8rPWAud2l0aEFscGhhQ29tcG9uZW50KCR7cn0pYCksb31zdGF0aWMgbm9ybWFsaXplZEludENvbG9yKGUpe3JldHVybntyOk1hdGgucm91bmQoZS5jb2xvci5yKSxnOk1hdGgucm91bmQoZS5jb2xvci5nKSxiOk1hdGgucm91bmQoZS5jb2xvci5iKX19c3RhdGljIG5vcm1hbGl6ZWRGcmFjdGlvbmFsQ29sb3IoZSxyPTMpe3JldHVybntyOnRoaXMucm91bmRUb0RlY2ltYWxzKGUuY29sb3Iuci8yNTUsciksZzpuLnJvdW5kVG9EZWNpbWFscyhlLmNvbG9yLmcvMjU1LHIpLGI6bi5yb3VuZFRvRGVjaW1hbHMoZS5jb2xvci5iLzI1NSxyKX19c3RhdGljIHJvdW5kVG9EZWNpbWFscyhlLHIpe2NvbnN0IHQ9TWF0aC5wb3coMTAsciksbz1NYXRoLnJvdW5kKGUqdCkvdDtyZXR1cm4gcGFyc2VGbG9hdChvLnRvRml4ZWQocikpfXN0YXRpYyBwSGV4KGUpe3JldHVybiBlLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKX19ci5Db2xvckhlbHBlcj1ufSw0NTM6KGUscix0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuTmFtaW5nSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoMTEwKSxhPXQoNTQ1KTtjbGFzcyBue3N0YXRpYyBjb2RlU2FmZVZhcmlhYmxlTmFtZUZvclRva2VuKGUscix0LG8pe2xldCBhPVtdO3JldHVybiB0JiYoYT1bLi4udC5wYXRoXSx0LmlzUm9vdHx8YS5wdXNoKHQubmFtZSkpLGEucHVzaChlLm5hbWUpLG8mJm8ubGVuZ3RoPjAmJmEudW5zaGlmdChvKSxuLmNvZGVTYWZlVmFyaWFibGVOYW1lKGEscil9c3RhdGljIGNvZGVTYWZlVmFyaWFibGVOYW1lKGUscil7bGV0IHQ9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLmpvaW4oXCIgXCIpO3N3aXRjaCh0PXQucmVwbGFjZUFsbCgvW15hLXpBLVowLTlfLV0vZyxcIl9cIikscil7Y2FzZSBhLlN0cmluZ0Nhc2UuY2FtZWxDYXNlOnQ9KDAsby5jYW1lbENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmNhcGl0YWxDYXNlOnQ9KDAsby5jYXBpdGFsQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UuY29uc3RhbnRDYXNlOnQ9KDAsby5jb25zdGFudENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmRvdENhc2U6dD0oMCxvLmRvdENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmhlYWRlckNhc2U6dD0oMCxvLmhlYWRlckNhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLm5vQ2FzZTp0PSgwLG8ubm9DYXNlKSh0KTticmVhaztjYXNlIGEuU3RyaW5nQ2FzZS5wYXJhbUNhc2U6dD0oMCxvLnBhcmFtQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UucGFzY2FsQ2FzZTp0PSgwLG8ucGFzY2FsQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UucGF0aENhc2U6dD0oMCxvLnBhdGhDYXNlKSh0KTticmVhaztjYXNlIGEuU3RyaW5nQ2FzZS5zZW50ZW5jZUNhc2U6dD0oMCxvLnNlbnRlbmNlQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2Uuc25ha2VDYXNlOnQ9KDAsby5zbmFrZUNhc2UpKHQpfXJldHVybiByIT09YS5TdHJpbmdDYXNlLnNuYWtlQ2FzZSYmciE9PWEuU3RyaW5nQ2FzZS5jb25zdGFudENhc2UmJih0PXQucmVwbGFjZUFsbChcIl9cIixcIlwiKSksdC5tYXRjaCgvXlteYS16QS1aXS8pJiYodD1cIl9cIit0KSx0fXN0YXRpYyBuYW1lQXNDU1NWYXJSZWZlcmVuY2UoZSl7cmV0dXJuYHZhcigtLSR7ZX0pYH1zdGF0aWMgbmFtZUFzQ1NTVmFyRGVjbGFyYXRpb24oZSl7cmV0dXJuYC0tJHtlfWB9fXIuTmFtaW5nSGVscGVyPW59LDU4OmU9PntlLmV4cG9ydHM9cmVxdWlyZShcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCIpfSwxMTA6ZT0+e2UuZXhwb3J0cz1yZXF1aXJlKFwiY2hhbmdlLWNhc2VcIil9fSxyPXt9O2Z1bmN0aW9uIHQobyl7dmFyIGE9cltvXTtpZih2b2lkIDAhPT1hKXJldHVybiBhLmV4cG9ydHM7dmFyIG49cltvXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbb10obixuLmV4cG9ydHMsdCksbi5leHBvcnRzfXZhciBvPXt9OygoKT0+e3ZhciBlPW87T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5Db2xvckZvcm1hdD1lLlN0cmluZ0Nhc2U9ZS5JdGVyYXRvcnM9ZS5DU1NIZWxwZXI9ZS5GaWxlSGVscGVyPWUuQ29sb3JIZWxwZXI9ZS5OYW1pbmdIZWxwZXI9ZS5OZXR3b3JrSGVscGVyPXZvaWQgMDt2YXIgcj10KDExOCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJOZXR3b3JrSGVscGVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHIuTmV0d29ya0hlbHBlcn19KTt2YXIgYT10KDQ1Myk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJOYW1pbmdIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5OYW1pbmdIZWxwZXJ9fSk7dmFyIG49dCg5NTIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQ29sb3JIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5Db2xvckhlbHBlcn19KTt2YXIgcz10KDYxNyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJGaWxlSGVscGVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuRmlsZUhlbHBlcn19KTt2YXIgaT10KDc3MSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJDU1NIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaS5DU1NIZWxwZXJ9fSk7dmFyIGw9dCg2MzkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiSXRlcmF0b3JzXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGwuSXRlcmF0b3JzfX0pO3ZhciBjPXQoNTQ1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlN0cmluZ0Nhc2VcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYy5TdHJpbmdDYXNlfX0pO3ZhciBUPXQoOTg5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkNvbG9yRm9ybWF0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFQuQ29sb3JGb3JtYXR9fSl9KSgpO3ZhciBhPWV4cG9ydHM7Zm9yKHZhciBuIGluIG8pYVtuXT1vW25dO28uX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17Mjc1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzSW1hZ2VSZWZUeXBlPXZvaWQgMCwobz10LkRvY3NJbWFnZVJlZlR5cGV8fCh0LkRvY3NJbWFnZVJlZlR5cGU9e30pKS51cGxvYWQ9XCJVcGxvYWRcIixvLmFzc2V0PVwiQXNzZXRcIixvLmZpZ21hRnJhbWU9XCJGaWdtYUZyYW1lXCJ9LDI2OTU6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NMaW5rUmVmVHlwZT12b2lkIDAsKG89dC5Eb2NzTGlua1JlZlR5cGV8fCh0LkRvY3NMaW5rUmVmVHlwZT17fSkpLnBhZ2U9XCJQYWdlXCIsby5wYWdlSGVhZGluZz1cInBhZ2VIZWFkaW5nXCIsby5ncm91cD1cIkdyb3VwXCIsby51cmw9XCJ1cmxcIn0sMzQ3NjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1Nob3J0Y3V0PXQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1Nob3J0Y3V0VHlwZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5leHRlcm5hbD1cIkV4dGVybmFsXCIsZS5pbnRlcm5hbD1cIkludGVybmFsXCJ9KG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlPXt9KSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXQ9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dmFyIHQ7ZS51cmw/dGhpcy50eXBlPW8uZXh0ZXJuYWw6dGhpcy50eXBlPW8uaW50ZXJuYWwsdGhpcy50aXRsZT10aGlzLnNob3J0Y3V0VGl0bGVGcm9tTW9kZWwoZSx0aGlzLnR5cGUpLHRoaXMuZGVzY3JpcHRpb249dGhpcy5zaG9ydGN1dERlc2NyaXB0aW9uRnJvbU1vZGVsKGUsdGhpcy50eXBlKSx0aGlzLnByZXZpZXdVcmw9dGhpcy5zaG9ydGN1dFByZXZpZXdVcmxGcm9tTW9kZWwoZSksdGhpcy50eXBlPT09by5pbnRlcm5hbCYmKG51bGw9PT0odD1lLmRvY3VtZW50YXRpb25JdGVtUHJldmlldyl8fHZvaWQgMD09PXQ/dm9pZCAwOnQudmFsaWQpJiZlLmRvY3VtZW50YXRpb25JdGVtSWQ/dGhpcy5pbnRlcm5hbElkPWUuZG9jdW1lbnRhdGlvbkl0ZW1JZDoodGhpcy5pbnRlcm5hbElkPW51bGwsdGhpcy50eXBlPT09by5leHRlcm5hbCYmZS51cmw/dGhpcy5leHRlcm5hbFVybD1lLnVybDp0aGlzLmV4dGVybmFsVXJsPW51bGwpfXNob3J0Y3V0VGl0bGVGcm9tTW9kZWwoZSx0KXt2YXIgcixuLGksYSxjO2xldCBsPW51bGw7cmV0dXJuIGUudGl0bGUmJmUudGl0bGUudHJpbSgpLmxlbmd0aD4wP2w9ZS50aXRsZTp0PT09by5pbnRlcm5hbD9sPW51bGwhPT0obj1udWxsPT09KHI9ZS5kb2N1bWVudGF0aW9uSXRlbVByZXZpZXcpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnRpdGxlKSYmdm9pZCAwIT09bj9uOm51bGw6dD09PW8uZXh0ZXJuYWwmJihsPW51bGwhPT0oYz1udWxsIT09KGE9bnVsbD09PShpPWUudXJsUHJldmlldyl8fHZvaWQgMD09PWk/dm9pZCAwOmkudGl0bGUpJiZ2b2lkIDAhPT1hP2E6ZS51cmwpJiZ2b2lkIDAhPT1jP2M6bnVsbCksbCYmMCE9PWwudHJpbSgpLmxlbmd0aD9sOm51bGx9c2hvcnRjdXREZXNjcmlwdGlvbkZyb21Nb2RlbChlLHQpe3ZhciByO2xldCBuPW51bGw7cmV0dXJuIGUuZGVzY3JpcHRpb24mJmUuZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aD4wP249ZS5kZXNjcmlwdGlvbjp0PT09by5leHRlcm5hbCYmKG49bnVsbD09PShyPWUudXJsUHJldmlldyl8fHZvaWQgMD09PXI/dm9pZCAwOnIuZGVzY3JpcHRpb24pLG4mJjAhPT1uLnRyaW0oKS5sZW5ndGg/bjpudWxsfXNob3J0Y3V0UHJldmlld1VybEZyb21Nb2RlbChlKXt2YXIgdCxvLHIsbixpO3JldHVybiBudWxsIT09KGk9bnVsbCE9PShyPW51bGwhPT0odD1lLmFzc2V0VXJsKSYmdm9pZCAwIT09dD90Om51bGw9PT0obz1lLmFzc2V0KXx8dm9pZCAwPT09bz92b2lkIDA6by51cmwpJiZ2b2lkIDAhPT1yP3I6bnVsbD09PShuPWUudXJsUHJldmlldyl8fHZvaWQgMD09PW4/dm9pZCAwOm4udGh1bWJuYWlsVXJsKSYmdm9pZCAwIT09aT9pOm51bGx9fX0sNDIyMjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQWxpZ25tZW50PXZvaWQgMCwobz10LkFsaWdubWVudHx8KHQuQWxpZ25tZW50PXt9KSkubGVmdD1cIkxlZnRcIixvLmNlbnRlcj1cIkNlbnRlclwiLG8uc3RyZXRjaD1cIlN0cmV0Y2hcIn0sMTMzNDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQXNzZXRGb3JtYXQ9dm9pZCAwLChvPXQuQXNzZXRGb3JtYXR8fCh0LkFzc2V0Rm9ybWF0PXt9KSkucG5nPVwicG5nXCIsby5wZGY9XCJwZGZcIixvLnN2Zz1cInN2Z1wifSwxOTQwOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Bc3NldFNjYWxlPXZvaWQgMCwobz10LkFzc2V0U2NhbGV8fCh0LkFzc2V0U2NhbGU9e30pKS54MT1cIngxXCIsby54Mj1cIngyXCIsby54Mz1cIngzXCIsby54ND1cIng0XCJ9LDk1OTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQXNzZXRTY2FsZVR5cGU9dm9pZCAwLChvPXQuQXNzZXRTY2FsZVR5cGV8fCh0LkFzc2V0U2NhbGVUeXBlPXt9KSkuYXNwZWN0RmlsbD1cIkFzcGVjdEZpbGxcIixvLmFzcGVjdEZpdD1cIkFzcGVjdEZpdFwifSw5MjU3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5CbHVyVHlwZT12b2lkIDAsKG89dC5CbHVyVHlwZXx8KHQuQmx1clR5cGU9e30pKS5sYXllcj1cIkxheWVyXCIsby5iYWNrZ3JvdW5kPVwiQmFja2dyb3VuZFwifSw2Njc1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5BTExfQk9SREVSX1BPU0lUSU9OUz10LkJvcmRlclBvc2l0aW9uPXZvaWQgMCxmdW5jdGlvbihlKXtlLmluc2lkZT1cIkluc2lkZVwiLGUuY2VudGVyPVwiQ2VudGVyXCIsZS5vdXRzaWRlPVwiT3V0c2lkZVwifShvPXQuQm9yZGVyUG9zaXRpb258fCh0LkJvcmRlclBvc2l0aW9uPXt9KSksdC5BTExfQk9SREVSX1BPU0lUSU9OUz1bby5pbnNpZGUsby5jZW50ZXIsby5vdXRzaWRlXX0sNjcwMTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQUxMX0JPUkRFUl9TVFlMRVM9dC5Cb3JkZXJTdHlsZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5kYXNoZWQ9XCJEYXNoZWRcIixlLmRvdHRlZD1cIkRvdHRlZFwiLGUuc29saWQ9XCJTb2xpZFwiLGUuZ3Jvb3ZlPVwiR3Jvb3ZlXCJ9KG89dC5Cb3JkZXJTdHlsZXx8KHQuQm9yZGVyU3R5bGU9e30pKSx0LkFMTF9CT1JERVJfU1RZTEVTPVtvLmRhc2hlZCxvLmRvdHRlZCxvLnNvbGlkLG8uZ3Jvb3ZlXX0sODI5OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5JbXBvcnRXYXJuaW5nVHlwZT12b2lkIDAsKG89dC5JbXBvcnRXYXJuaW5nVHlwZXx8KHQuSW1wb3J0V2FybmluZ1R5cGU9e30pKS5VbnN1cHBvcnRlZEZpbGw9XCJVbnN1cHBvcnRlZEZpbGxcIixvLlVuc3VwcG9ydGVkU3Ryb2tlPVwiVW5zdXBwb3J0ZWRTdHJva2VcIixvLlVuc3VwcG9ydGVkRWZmZWN0PVwiVW5zdXBwb3J0ZWRFZmZlY3RcIixvLlN0eWxlTm90QXBwbGllZD1cIlN0eWxlTm90QXBwbGllZFwiLG8uTm9QdWJsaXNoZWRTdHlsZXM9XCJOb1B1Ymxpc2hlZFN0eWxlc1wiLG8uTm9QdWJsaXNoZWRDb21wb25lbnRzPVwiTm9QdWJsaXNoZWRDb21wb25lbnRzXCIsby5Ob1B1Ymxpc2hlZEFzc2V0cz1cIk5vUHVibGlzaGVkQXNzZXRzXCIsby5Ob1ZlcnNpb25Gb3VuZD1cIk5vVmVyc2lvbkZvdW5kXCIsby5Db21wb25lbnRIYXNOb1RodW1ibmFpbD1cIkNvbXBvbmVudEhhc05vVGh1bWJuYWlsXCIsby5EdXBsaWNhdGVJbXBvcnRlZFN0eWxlSWQ9XCJEdXBsaWNhdGVJbXBvcnRlZFN0eWxlSWRcIixvLkR1cGxpY2F0ZUltcG9ydGVkU3R5bGVQYXRoPVwiRHVwbGljYXRlSW1wb3J0ZWRTdHlsZVBhdGhcIixvLk5vUHVibGlzaGVkRWxlbWVudHM9XCJOb1B1Ymxpc2hlZEVsZW1lbnRzXCJ9LDM2MTE6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkN1c3RvbURvbWFpbkVycm9yQ29kZT12b2lkIDAsKG89dC5DdXN0b21Eb21haW5FcnJvckNvZGV8fCh0LkN1c3RvbURvbWFpbkVycm9yQ29kZT17fSkpLmdlbmVyYWxFcnJvcj1cIkdlbmVyYWxFcnJvclwiLG8uZG5zTm90Q29uZmlndXJlZD1cIkROU05vdENvbmZpZ3VyZWRcIixvLm1haW50ZW5hbmNlPVwiTWFpbnRlbmFuY2VcIn0sNjUzMDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQ3VzdG9tRG9tYWluU3RhdGU9dm9pZCAwLChvPXQuQ3VzdG9tRG9tYWluU3RhdGV8fCh0LkN1c3RvbURvbWFpblN0YXRlPXt9KSkuaW5pdGlhbD1cIkluaXRpYWxcIixvLmRvbWFpblNldHVwSW5Qcm9ncmVzcz1cIkRvbWFpblNldHVwSW5Qcm9ncmVzc1wiLG8uZG9tYWluU2V0dXBGYWlsZWQ9XCJEb21haW5TZXR1cEZhaWxlZFwiLG8uZG9tYWluU2V0dXBzU3VjY2VzPVwiRG9tYWluU2V0dXBTdWNjZXNzXCIsby5zc2xTZXR1cEluUHJvZ3Jlc3M9XCJTU0xTZXR1cEluUHJvZ3Jlc3NcIixvLnNzbFNldHVwRmFpbGVkPVwiU1NMU2V0dXBGYWlsZWRcIixvLnNzbFNldHVwU3VjY2Vzcz1cIlNTTFNldHVwU3VjY2Vzc1wifSw0OTM0OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tCZWhhdmlvckRhdGFUeXBlPXZvaWQgMCwobz10LkRvY3NCbG9ja0JlaGF2aW9yRGF0YVR5cGV8fCh0LkRvY3NCbG9ja0JlaGF2aW9yRGF0YVR5cGU9e30pKS5pdGVtPVwiSXRlbVwiLG8udG9rZW49XCJUb2tlblwiLG8uYXNzZXQ9XCJBc3NldFwiLG8uY29tcG9uZW50PVwiQ29tcG9uZW50XCJ9LDgwODE6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0JlaGF2aW9yU2VsZWN0aW9uVHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tCZWhhdmlvclNlbGVjdGlvblR5cGV8fCh0LkRvY3NCbG9ja0JlaGF2aW9yU2VsZWN0aW9uVHlwZT17fSkpLmVudGl0eT1cIkVudGl0eVwiLG8uZ3JvdXA9XCJHcm91cFwiLG8uZW50aXR5QW5kR3JvdXA9XCJFbnRpdHlBbmRHcm91cFwifSw5NTM0OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW89dm9pZCAwLChvPXQuRG9jc0Jsb2NrSW1hZ2VQcm9wZXJ0eUFzcGVjdFJhdGlvfHwodC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW89e30pKS5zcXVhcmU9XCJTcXVhcmVcIixvLmxhbmRzY2FwZT1cIkxhbmRzY2FwZVwiLG8ucG9ydHJhaXQ9XCJQb3J0cmFpdFwiLG8ud2lkZT1cIldpZGVcIn0sMTA0MzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGV8fCh0LkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlPXt9KSkudG9rZW49XCJUb2tlblwiLG8udG9rZW5Hcm91cD1cIlRva2VuR3JvdXBcIixvLmFzc2V0PVwiQXNzZXRcIixvLmFzc2V0R3JvdXA9XCJBc3NldEdyb3VwXCIsby5jb21wb25lbnQ9XCJDb21wb25lbnRcIixvLmNvbXBvbmVudEdyb3VwPVwiQ29tcG9uZW50R3JvdXBcIn0sMzk0NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGV8fCh0LkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eU9wdGlvblJlbmRlcmluZ1N0eWxlPXt9KSkuc2VnbWVudGVkQ29udHJvbD1cIlNlZ21lbnRlZENvbnRyb2xcIixvLnRvZ2dsZUJ1dHRvbj1cIlRvZ2dsZUJ1dHRvblwiLG8uc2VsZWN0PVwiU2VsZWN0XCIsby5jaGVja2JveD1cIkNoZWNrYm94XCJ9LDQ3NDI6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5UmljaFRleHRTdHlsZXx8KHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5UmljaFRleHRTdHlsZT17fSkpLnRpdGxlMT1cIlRpdGxlMVwiLG8udGl0bGUyPVwiVGl0bGUyXCIsby50aXRsZTM9XCJUaXRsZTNcIixvLnRpdGxlND1cIlRpdGxlNFwiLG8udGl0bGU1PVwiVGl0bGU1XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8ub2w9XCJPTFwiLG8udWw9XCJVTFwifSw3ODI1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VGV4dFN0eWxlfHwodC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGU9e30pKS5zbWFsbD1cIlNtYWxsXCIsby5yZWd1bGFyPVwiUmVndWxhclwiLG8uYm9sZD1cIkJvbGRcIn0sNjc1MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlfHwodC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlPXt9KSkucmljaFRleHQ9XCJSaWNoVGV4dFwiLG8udGV4dD1cIlRleHRcIixvLmJvb2xlYW49XCJCb29sZWFuXCIsby5udW1iZXI9XCJOdW1iZXJcIixvLnNpbmdsZVNlbGVjdD1cIlNpbmdsZVNlbGVjdFwiLG8ubXVsdGlTZWxlY3Q9XCJNdWx0aVNlbGVjdFwiLG8uaW1hZ2U9XCJJbWFnZVwiLG8udG9rZW49XCJUb2tlblwiLG8udG9rZW5UeXBlPVwiVG9rZW5UeXBlXCIsby50b2tlblByb3BlcnR5PVwiVG9rZW5Qcm9wZXJ0eVwiLG8uY29tcG9uZW50PVwiQ29tcG9uZW50XCIsby5jb21wb25lbnRQcm9wZXJ0eT1cIkNvbXBvbmVudFByb3BlcnR5XCIsby5hc3NldD1cIkFzc2V0XCIsby5hc3NldFByb3BlcnR5PVwiQXNzZXRQcm9wZXJ0eVwiLG8ucGFnZT1cIlBhZ2VcIixvLnBhZ2VQcm9wZXJ0eT1cIlBhZ2VQcm9wZXJ0eVwiLG8uZW1iZWRVUkw9XCJFbWJlZFVSTFwiLG8uZW1iZWRGcmFtZT1cIkVtYmVkRnJhbWVcIixvLm1hcmtkb3duPVwiTWFya2Rvd25cIixvLmNvZGU9XCJDb2RlXCIsby5jb2RlU2FuZGJveD1cIkNvZGVTYW5kYm94XCIsby50YWJsZT1cIlRhYmxlXCIsby5kaXZpZGVyPVwiRGl2aWRlclwiLG8uc3Rvcnlib29rPVwiU3Rvcnlib29rXCJ9LDY3Nzc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0VHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGV8fCh0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0VHlwZT17fSkpLmNvbHVtbj1cIkNvbHVtblwiLG8ucm93PVwiUm93XCJ9LDkyNzk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0V2lkdGg9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRXaWR0aHx8KHQuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRXaWR0aD17fSkpLmMxPVwiMVwiLG8uYzI9XCIyXCIsby5jMz1cIjNcIixvLmM0PVwiNFwiLG8uYzU9XCI1XCIsby5jNj1cIjZcIixvLmM3PVwiN1wiLG8uYzg9XCI4XCIsby5jOT1cIjlcIixvLmMxMD1cIjEwXCIsby5jMTE9XCIxMVwiLG8uYzEyPVwiMTJcIn0sNTI3MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGV8fCh0LkRvY3NCbG9ja09wdGlvblJlbmRlcmluZ1N0eWxlPXt9KSkuc2VnbWVudGVkQ29udHJvbD1cIlNlZ21lbnRlZENvbnRyb2xcIixvLnRvZ2dsZUJ1dHRvbj1cIlRvZ2dsZUJ1dHRvblwiLG8uc2VsZWN0PVwiU2VsZWN0XCIsby5jaGVja2JveD1cIkNoZWNrYm94XCJ9LDMyNzQ6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja1JpY2hUZXh0UHJvcGVydHlTdHlsZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGV8fCh0LkRvY3NCbG9ja1JpY2hUZXh0UHJvcGVydHlTdHlsZT17fSkpLnRpdGxlMT1cIlRpdGxlMVwiLG8udGl0bGUyPVwiVGl0bGUyXCIsby50aXRsZTM9XCJUaXRsZTNcIixvLnRpdGxlND1cIlRpdGxlNFwiLG8udGl0bGU1PVwiVGl0bGU1XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8ub2w9XCJPTFwiLG8udWw9XCJVTFwiLG8uZGVmYXVsdD1cIkRlZmF1bHRcIn0sNjAwMTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGV8fCh0LkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlPXt9KSkudGl0bGUxPVwiVGl0bGUxXCIsby50aXRsZTI9XCJUaXRsZTJcIixvLnRpdGxlMz1cIlRpdGxlM1wiLG8udGl0bGU0PVwiVGl0bGU0XCIsby50aXRsZTU9XCJUaXRsZTVcIixvLmRlZmF1bHQ9XCJEZWZhdWx0XCIsby5kZWZhdWx0Qm9sZD1cIkRlZmF1bHRCb2xkXCIsby5kZWZhdWx0U2VtaWJvbGQ9XCJEZWZhdWx0U2VtaWJvbGRcIixvLnNtYWxsPVwiU21hbGxcIixvLnNtYWxsQm9sZD1cIlNtYWxsQm9sZFwiLG8uc21hbGxTZW1pYm9sZD1cIlNtYWxsU2VtaWJvbGRcIn0sMTc1NTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3I9dm9pZCAwLChvPXQuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3J8fCh0LkRvY3NFbnRpdHlHcm91cEJlaGF2aW9yPXt9KSkuZ3JvdXA9XCJHcm91cFwiLG8udGFicz1cIlRhYnNcIn0sODI0MDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0VudGl0eVR5cGU9dm9pZCAwLChvPXQuRG9jc0VudGl0eVR5cGV8fCh0LkRvY3NFbnRpdHlUeXBlPXt9KSkuZ3JvdXA9XCJHcm91cFwiLG8ucGFnZT1cIlBhZ2VcIn0sNDE0MjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc1NlY3Rpb25UeXBlPXZvaWQgMCwobz10LkRvY3NTZWN0aW9uVHlwZXx8KHQuRG9jc1NlY3Rpb25UeXBlPXt9KSkucGxhaW49XCJQbGFpblwiLG8udGFicz1cIlRhYnNcIn0sNDc4MjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lDYWxsb3V0VHlwZXx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPXt9KSkuaW5mbz1cIkluZm9cIixvLnN1Y2Nlc3M9XCJTdWNjZXNzXCIsby53YXJuaW5nPVwiV2FybmluZ1wiLG8uZXJyb3I9XCJFcnJvclwifSw4NTQ5OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvcj12b2lkIDAsKG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvcnx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUdyb3VwQmVoYXZpb3I9e30pKS5ncm91cD1cIkdyb3VwXCIsby50YWJzPVwiVGFic1wifSwxOTMxOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGU9dm9pZCAwLChvPXQuRG9jdW1lbnRhdGlvbkxlZ2FjeUhlYWRpbmdUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGU9e30pKVtvLmgxPTFdPVwiaDFcIixvW28uaDI9Ml09XCJoMlwiLG9bby5oMz0zXT1cImgzXCJ9LDUzNTk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT12b2lkIDAsKG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5SXRlbVR5cGV8fCh0LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT17fSkpLmdyb3VwPVwiR3JvdXBcIixvLnBhZ2U9XCJQYWdlXCJ9LDk0Mzc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQXNzZXRUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQXNzZXRUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZT17fSkpLmltYWdlPVwiaW1hZ2VcIixvLmZpZ21hRnJhbWU9XCJmaWdtYUZyYW1lXCJ9LDQ2NDk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUaGVtZVR5cGU9dm9pZCAwLChvPXQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZXx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZT17fSkpLm92ZXJyaWRlPVwiT3ZlcnJpZGVcIixvLmNvbXBhcmlzb249XCJDb21wYXJpc29uXCJ9LDg1NjA6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVHlwZT17fSkpLnRleHQ9XCJUZXh0XCIsby5oZWFkaW5nPVwiSGVhZGluZ1wiLG8uY29kZT1cIkNvZGVcIixvLnVub3JkZXJlZExpc3Q9XCJVbm9yZGVyZWRMaXN0XCIsby5vcmRlcmVkTGlzdD1cIk9yZGVyZWRMaXN0XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8uZGl2aWRlcj1cIkRpdmlkZXJcIixvLmltYWdlPVwiSW1hZ2VcIixvLnRva2VuPVwiVG9rZW5cIixvLnRva2VuTGlzdD1cIlRva2VuTGlzdFwiLG8udG9rZW5Hcm91cD1cIlRva2VuR3JvdXBcIixvLnNob3J0Y3V0cz1cIlNob3J0Y3V0c1wiLG8ubGluaz1cIkxpbmtcIixvLmZpZ21hRW1iZWQ9XCJGaWdtYUVtYmVkXCIsby55b3V0dWJlRW1iZWQ9XCJZb3V0dWJlRW1iZWRcIixvLnN0b3J5Ym9va0VtYmVkPVwiU3Rvcnlib29rRW1iZWRcIixvLmdlbmVyaWNFbWJlZD1cIkVtYmVkXCIsby5maWdtYUZyYW1lcz1cIkZpZ21hRnJhbWVzXCIsby5jdXN0b209XCJDdXN0b21cIixvLnJlbmRlckNvZGU9XCJSZW5kZXJDb2RlXCIsby5jb21wb25lbnRBc3NldHM9XCJDb21wb25lbnRBc3NldHNcIixvLmNvbHVtbj1cIkNvbHVtblwiLG8uY29sdW1uSXRlbT1cIkNvbHVtbkl0ZW1cIixvLnRhYnM9XCJUYWJzXCIsby50YWJJdGVtPVwiVGFiSXRlbVwiLG8udGFibGU9XCJUYWJsZVwiLG8udGFibGVDZWxsPVwiVGFibGVDZWxsXCIsby50YWJsZVJvdz1cIlRhYmxlUm93XCJ9LDQ5MTQ6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkZyYW1lQWxpZ25tZW50PXZvaWQgMCwobz10LkZyYW1lQWxpZ25tZW50fHwodC5GcmFtZUFsaWdubWVudD17fSkpLmZyYW1lSGVpZ2h0PVwiRnJhbWVIZWlnaHRcIixvLmNlbnRlcj1cIkNlbnRlclwifSw1OTg2OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5GcmFtZUxheW91dD12b2lkIDAsKG89dC5GcmFtZUxheW91dHx8KHQuRnJhbWVMYXlvdXQ9e30pKS5jOD1cIkM4XCIsby5jNz1cIkM3XCIsby5jNj1cIkM2XCIsby5jNT1cIkM1XCIsby5jND1cIkM0XCIsby5jMz1cIkMzXCIsby5jMj1cIkMyXCIsby5jMT1cIkMxXCIsby5jMTc1PVwiQzFfNzVcIn0sNDY2NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuR3JhZGllbnRUeXBlPXZvaWQgMCwobz10LkdyYWRpZW50VHlwZXx8KHQuR3JhZGllbnRUeXBlPXt9KSkubGluZWFyPVwiTGluZWFyXCIsby5yYWRpYWw9XCJSYWRpYWxcIixvLmFuZ3VsYXI9XCJBbmd1bGFyXCJ9LDQzMzY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlJpY2hUZXh0U3BhbkF0dHJpYnV0ZVR5cGU9dm9pZCAwLChvPXQuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZXx8KHQuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZT17fSkpLmJvbGQ9XCJCb2xkXCIsby5pdGFsaWM9XCJJdGFsaWNcIixvLmxpbms9XCJMaW5rXCIsby5zdHJpa2V0aHJvdWdoPVwiU3RyaWtldGhyb3VnaFwiLG8uY29kZT1cIkNvZGVcIn0sNTQ2NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuU2hhZG93VHlwZT12b2lkIDAsKG89dC5TaGFkb3dUeXBlfHwodC5TaGFkb3dUeXBlPXt9KSkuZHJvcD1cIkRyb3BcIixvLmlubmVyPVwiSW5uZXJcIn0sMTY5NDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuU291cmNlVHlwZT12b2lkIDAsKG89dC5Tb3VyY2VUeXBlfHwodC5Tb3VyY2VUeXBlPXt9KSkuZmlnbWE9XCJGaWdtYVwiLG8udG9rZW5TdHVkaW89XCJUb2tlblN0dWRpb1wifSwyMDQ3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5UZXh0Q2FzZT12b2lkIDAsKG89dC5UZXh0Q2FzZXx8KHQuVGV4dENhc2U9e30pKS5vcmlnaW5hbD1cIk9yaWdpbmFsXCIsby51cHBlcj1cIlVwcGVyXCIsby5sb3dlcj1cIkxvd2VyXCIsby5jYW1lbD1cIkNhbWVsXCIsby5zbWFsbENhcHM9XCJTbWFsbENhcHNcIn0sNTc4MDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuVGV4dERlY29yYXRpb249dm9pZCAwLChvPXQuVGV4dERlY29yYXRpb258fCh0LlRleHREZWNvcmF0aW9uPXt9KSkub3JpZ2luYWw9XCJOb25lXCIsby51bmRlcmxpbmU9XCJVbmRlcmxpbmVcIixvLnN0cmlrZXRocm91Z2g9XCJTdHJpa2V0aHJvdWdoXCJ9LDEyNTY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRUX1RPS0VOX1RZUEVTPXQudG9rZW5UeXBlSXNSZWZlcmVuY2FibGU9dC5SRUZFUkVOQ0FCTEVfVE9LRU5fVFlQRVM9dC5SRVBMQUNBQkxFX1RPS0VOX1RZUEVTPXQudG9rZW5UeXBlSXNOb25QdXJlPXQudG9rZW5UeXBlSXNQdXJlPXQuUFVSRV9UT0tFTl9UWVBFUz10LkFMTF9UT0tFTl9UWVBFUz10Lk1TX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz10LlJBV19ESU1FTlNJT05fVE9LRU5fVFlQRVM9dC5ESU1FTlNJT05fVE9LRU5fVFlQRVM9dC5PUFRJT05fVE9LRU5fVFlQRVM9dC5TVFJJTkdfVE9LRU5fVFlQRVM9dC5Ub2tlblR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuY29sb3I9XCJDb2xvclwiLGUudHlwb2dyYXBoeT1cIlR5cG9ncmFwaHlcIixlLmRpbWVuc2lvbj1cIkRpbWVuc2lvblwiLGUuc2l6ZT1cIlNpemVcIixlLnNwYWNlPVwiU3BhY2VcIixlLm9wYWNpdHk9XCJPcGFjaXR5XCIsZS5mb250U2l6ZT1cIkZvbnRTaXplXCIsZS5saW5lSGVpZ2h0PVwiTGluZUhlaWdodFwiLGUubGV0dGVyU3BhY2luZz1cIkxldHRlclNwYWNpbmdcIixlLnBhcmFncmFwaFNwYWNpbmc9XCJQYXJhZ3JhcGhTcGFjaW5nXCIsZS5ib3JkZXJXaWR0aD1cIkJvcmRlcldpZHRoXCIsZS5yYWRpdXM9XCJCb3JkZXJSYWRpdXNcIixlLmR1cmF0aW9uPVwiRHVyYXRpb25cIixlLnpJbmRleD1cIlpJbmRleFwiLGUuc2hhZG93PVwiU2hhZG93XCIsZS5ib3JkZXI9XCJCb3JkZXJcIixlLmdyYWRpZW50PVwiR3JhZGllbnRcIixlLnN0cmluZz1cIlN0cmluZ1wiLGUucHJvZHVjdENvcHk9XCJQcm9kdWN0Q29weVwiLGUuZm9udEZhbWlseT1cIkZvbnRGYW1pbHlcIixlLmZvbnRXZWlnaHQ9XCJGb250V2VpZ2h0XCIsZS50ZXh0Q2FzZT1cIlRleHRDYXNlXCIsZS50ZXh0RGVjb3JhdGlvbj1cIlRleHREZWNvcmF0aW9uXCIsZS52aXNpYmlsaXR5PVwiVmlzaWJpbGl0eVwiLGUuYmx1cj1cIkJsdXJcIn0obz10LlRva2VuVHlwZXx8KHQuVG9rZW5UeXBlPXt9KSksdC5TVFJJTkdfVE9LRU5fVFlQRVM9W28uc3RyaW5nLG8ucHJvZHVjdENvcHksby5mb250RmFtaWx5LG8uZm9udFdlaWdodF0sdC5PUFRJT05fVE9LRU5fVFlQRVM9W28udGV4dENhc2Usby50ZXh0RGVjb3JhdGlvbixvLnZpc2liaWxpdHldLHQuRElNRU5TSU9OX1RPS0VOX1RZUEVTPVtvLmRpbWVuc2lvbixvLnNpemUsby5zcGFjZSxvLm9wYWNpdHksby5mb250U2l6ZSxvLmxpbmVIZWlnaHQsby5sZXR0ZXJTcGFjaW5nLG8ucGFyYWdyYXBoU3BhY2luZyxvLmJvcmRlcldpZHRoLG8ucmFkaXVzLG8uZHVyYXRpb24sby56SW5kZXhdLHQuUkFXX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz1bby5vcGFjaXR5LG8uekluZGV4XSx0Lk1TX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz1bby5kdXJhdGlvbl0sdC5BTExfVE9LRU5fVFlQRVM9Wy4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLC4uLnQuU1RSSU5HX1RPS0VOX1RZUEVTLC4uLnQuT1BUSU9OX1RPS0VOX1RZUEVTLG8uY29sb3Isby5ncmFkaWVudCxvLmJvcmRlcixvLnJhZGl1cyxvLnNoYWRvdyxvLnR5cG9ncmFwaHksby5ibHVyXSx0LlBVUkVfVE9LRU5fVFlQRVM9Wy4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLC4uLnQuU1RSSU5HX1RPS0VOX1RZUEVTLC4uLnQuT1BUSU9OX1RPS0VOX1RZUEVTXSx0LnRva2VuVHlwZUlzUHVyZT1lPT50LlBVUkVfVE9LRU5fVFlQRVMuaW5jbHVkZXMoZSksdC50b2tlblR5cGVJc05vblB1cmU9ZT0+ISgwLHQudG9rZW5UeXBlSXNQdXJlKShlKSx0LlJFUExBQ0FCTEVfVE9LRU5fVFlQRVM9W28uY29sb3IsLi4udC5ESU1FTlNJT05fVE9LRU5fVFlQRVMsLi4udC5TVFJJTkdfVE9LRU5fVFlQRVMsLi4udC5PUFRJT05fVE9LRU5fVFlQRVNdLHQuUkVGRVJFTkNBQkxFX1RPS0VOX1RZUEVTPVtvLmNvbG9yLC4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLG8uZm9udEZhbWlseSxvLmZvbnRXZWlnaHQsby50ZXh0Q2FzZSxvLnRleHREZWNvcmF0aW9uXSx0LnRva2VuVHlwZUlzUmVmZXJlbmNhYmxlPWU9PnQuUkVGRVJFTkNBQkxFX1RPS0VOX1RZUEVTLmluY2x1ZGVzKGUpLHQuRFRfVE9LRU5fVFlQRVM9W28uY29sb3Isby5zaGFkb3csby5ncmFkaWVudCxvLnR5cG9ncmFwaHksby5ib3JkZXIsLi4udC5ESU1FTlNJT05fVE9LRU5fVFlQRVMsby5mb250RmFtaWx5LG8uZm9udFdlaWdodCwuLi50Lk9QVElPTl9UT0tFTl9UWVBFU119LDUzODk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1TX1VOSVRTPXQuUFhfVU5JVFM9dC5SQVdfVU5JVFM9dC5MSU5FX0hFSUdIVF9VTklUUz10LlNJWkVfVU5JVFM9dC5Vbml0PXZvaWQgMCxmdW5jdGlvbihlKXtlLnBpeGVscz1cIlBpeGVsc1wiLGUucGVyY2VudD1cIlBlcmNlbnRcIixlLnJlbT1cIlJlbVwiLGUubXM9XCJNc1wiLGUucmF3PVwiUmF3XCJ9KG89dC5Vbml0fHwodC5Vbml0PXt9KSksdC5TSVpFX1VOSVRTPVtvLnBpeGVscyxvLnBlcmNlbnQsby5yZW1dLHQuTElORV9IRUlHSFRfVU5JVFM9W28ucGl4ZWxzLG8ucGVyY2VudCxvLnJlbSxvLnJhd10sdC5SQVdfVU5JVFM9W28ucmF3XSx0LlBYX1VOSVRTPVtvLnBpeGVsc10sdC5NU19VTklUUz1bby5tc119LDI5MTY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlVzZXJSb2xlPXZvaWQgMCwobz10LlVzZXJSb2xlfHwodC5Vc2VyUm9sZT17fSkpLm93bmVyPVwiT3duZXJcIixvLmFkbWluPVwiQWRtaW5cIixvLmNyZWF0b3I9XCJDcmVhdG9yXCIsby52aWV3ZXI9XCJWaWV3ZXJcIixvLmJpbGxpbmc9XCJCaWxsaW5nXCJ9LDYzOTg6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlZpc2liaWxpdHlUeXBlPXZvaWQgMCwobz10LlZpc2liaWxpdHlUeXBlfHwodC5WaXNpYmlsaXR5VHlwZT17fSkpLnZpc2libGU9XCJWaXNpYmxlXCIsby5oaWRkZW49XCJIaWRkZW5cIn0sNDgzODooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZT12b2lkIDAsKG89dC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeUF1dGhUeXBlfHwodC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeUF1dGhUeXBlPXt9KSkuYmFzaWM9XCJCYXNpY1wiLG8uYmVhcmVyPVwiQmVhcmVyXCJ9LDIwMTU6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZT12b2lkIDAsKG89dC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeVR5cGV8fCh0LldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZT17fSkpLm5wbUpTPVwiTlBNSlNcIixvLmdpdEh1Yj1cIkdpdEh1YlwiLG8uYXp1cmVEZXZPcHM9XCJBenVyZURldk9wc1wiLG8uYXJ0aWZhY3Rvcnk9XCJBcnRpZmFjdG9yeVwiLG8uY3VzdG9tPVwiQ3VzdG9tXCJ9LDQzNTc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD12b2lkIDAsKG89dC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25QbGFuSW50ZXJ2YWx8fCh0LldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD17fSkpLnllYXJseT1cInllYXJseVwiLG8ubW9udGhseT1cIm1vbnRobHlcIn0sNzQzOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25Qcm9kdWN0PXZvaWQgMCwobz10LldvcmtzcGFjZVN1YnNjcmlwdGlvblByb2R1Y3R8fCh0LldvcmtzcGFjZVN1YnNjcmlwdGlvblByb2R1Y3Q9e30pKS5mcmVlPVwiZnJlZVwiLG8udGVhbT1cInRlYW1cIixvLnRlYW1UZXN0PVwidGVhbV90ZXN0XCIsby5jb21wYW55PVwiY29tcGFueVwiLG8uZW50ZXJwcmlzZT1cImVudGVycHJpc2VcIn0sNTg0MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPXZvaWQgMCwobz10LldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c3x8KHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPXt9KSkudHJpYWxpbmc9XCJ0cmlhbGluZ1wiLG8uYWN0aXZlPVwiYWN0aXZlXCIsby5wYXN0RHVlPVwicGFzdF9kdWVcIixvLmNhbmNlbGVkPVwiY2FuY2VsZWRcIixvLnVucGFpZD1cInVucGFpZFwiLG8uaW5jb21wbGV0ZUV4cGlyZWQ9XCJpbmNvbXBsZXRlX2V4cGlyZWRcIixvLmluY29tcGxldGU9XCJpbmNvbXBsZXRlXCIsby51bmtub3duPVwidW5rbm93blwifSw4OTE3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbD12b2lkIDAsKG89dC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbHx8KHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzSW50ZXJuYWw9e30pKS5hY3RpdmU9XCJhY3RpdmVcIixvLmRvd25ncmFkZWRUb0ZyZWU9XCJkb3duZ3JhZGVkX3RvX2ZyZWVcIixvLnN1c3BlbmRlZD1cInN1c3BlbmRlZFwifSwzODAzOihlLHQpPT57dmFyIG8scjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlB1bHNhckV4ZWN1dG9yPXQuT3V0cHV0RmlsZVR5cGU9dm9pZCAwLChyPXQuT3V0cHV0RmlsZVR5cGV8fCh0Lk91dHB1dEZpbGVUeXBlPXt9KSkuY29weVJlbW90ZVVybD1cImNvcHlSZW1vdGVVcmxcIixyLnRleHQ9XCJ0ZXh0XCIsci5iaW5hcnk9XCJiaW5hcnlcIiwobz10LlB1bHNhckV4ZWN1dG9yfHwodC5QdWxzYXJFeGVjdXRvcj17fSkpLnN1cGVybm92YT1cInN1cGVybm92YVwiLG8ubG9jYWw9XCJsb2NhbFwifX0sdD17fTtmdW5jdGlvbiBvKHIpe3ZhciBuPXRbcl07aWYodm9pZCAwIT09bilyZXR1cm4gbi5leHBvcnRzO3ZhciBpPXRbcl09e2V4cG9ydHM6e319O3JldHVybiBlW3JdKGksaS5leHBvcnRzLG8pLGkuZXhwb3J0c312YXIgcj17fTsoKCk9Pnt2YXIgZT1yO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuVXNlclJvbGU9ZS5Vbml0PWUuVG9rZW5UeXBlPWUuVGV4dERlY29yYXRpb249ZS5UZXh0Q2FzZT1lLlNoYWRvd1R5cGU9ZS5SaWNoVGV4dFNwYW5BdHRyaWJ1dGVUeXBlPWUuR3JhZGllbnRUeXBlPWUuRnJhbWVMYXlvdXQ9ZS5GcmFtZUFsaWdubWVudD1lLlNvdXJjZVR5cGU9ZS5Eb2NzSW1hZ2VSZWZUeXBlPWUuRG9jc0xpbmtSZWZUeXBlPWUuRG9jc1NlY3Rpb25UeXBlPWUuRG9jc0VudGl0eVR5cGU9ZS5Eb2NzRW50aXR5R3JvdXBCZWhhdmlvcj1lLkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlPWUuRG9jc0Jsb2NrUmljaFRleHRQcm9wZXJ0eVN0eWxlPWUuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGU9ZS5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFdpZHRoPWUuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRUeXBlPWUuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VHlwZT1lLkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVRleHRTdHlsZT1lLkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGU9ZS5Eb2NzQmxvY2tJdGVtUHJvcGVydHlPcHRpb25SZW5kZXJpbmdTdHlsZT1lLkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlPWUuRG9jc0Jsb2NrSW1hZ2VQcm9wZXJ0eUFzcGVjdFJhdGlvPWUuRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlPWUuRG9jc0Jsb2NrQmVoYXZpb3JEYXRhVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tTaG9ydGN1dFR5cGU9ZS5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVGhlbWVUeXBlPWUuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1R5cGU9ZS5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lIZWFkaW5nVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lHcm91cEJlaGF2aW9yPWUuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPWUuQm9yZGVyU3R5bGU9ZS5Cb3JkZXJQb3NpdGlvbj1lLkJsdXJUeXBlPWUuQXNzZXRTY2FsZVR5cGU9ZS5Bc3NldFNjYWxlPWUuQXNzZXRGb3JtYXQ9ZS5BbGlnbm1lbnQ9ZS5BTExfVE9LRU5fVFlQRVM9ZS5BTExfQk9SREVSX1NUWUxFUz1lLkFMTF9CT1JERVJfUE9TSVRJT05TPWUuT1BUSU9OX1RPS0VOX1RZUEVTPWUuU1RSSU5HX1RPS0VOX1RZUEVTPWUuRElNRU5TSU9OX1RPS0VOX1RZUEVTPXZvaWQgMCxlLlB1bHNhckV4ZWN1dG9yPWUuT3V0cHV0RmlsZVR5cGU9ZS5DdXN0b21Eb21haW5TdGF0ZT1lLkN1c3RvbURvbWFpbkVycm9yQ29kZT1lLkltcG9ydFdhcm5pbmdUeXBlPWUuV29ya3NwYWNlTlBNUmVnaXN0cnlUeXBlPWUuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZT1lLldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c0ludGVybmFsPWUuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPWUuV29ya3NwYWNlU3Vic2NyaXB0aW9uUHJvZHVjdD1lLldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD1lLlZpc2liaWxpdHlUeXBlPXZvaWQgMDt2YXIgdD1vKDEyNTYpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRElNRU5TSU9OX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuRElNRU5TSU9OX1RPS0VOX1RZUEVTfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiU1RSSU5HX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuU1RSSU5HX1RPS0VOX1RZUEVTfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiT1BUSU9OX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuT1BUSU9OX1RPS0VOX1RZUEVTfX0pO3ZhciBuPW8oNjY3NSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfQk9SREVSX1BPU0lUSU9OU1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuLkFMTF9CT1JERVJfUE9TSVRJT05TfX0pO3ZhciBpPW8oNjcwMSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfQk9SREVSX1NUWUxFU1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBpLkFMTF9CT1JERVJfU1RZTEVTfX0pO3ZhciBhPW8oMTI1Nik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfVE9LRU5fVFlQRVNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5BTExfVE9LRU5fVFlQRVN9fSk7dmFyIGM9byg0MjIyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkFsaWdubWVudFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjLkFsaWdubWVudH19KTt2YXIgbD1vKDEzMzQpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRGb3JtYXRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbC5Bc3NldEZvcm1hdH19KTt2YXIgdT1vKDE5NDApO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRTY2FsZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB1LkFzc2V0U2NhbGV9fSk7dmFyIHA9byg5NTkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRTY2FsZVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcC5Bc3NldFNjYWxlVHlwZX19KTt2YXIgcz1vKDkyNTcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQmx1clR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5CbHVyVHlwZX19KTt2YXIgeT1vKDY2NzUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQm9yZGVyUG9zaXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4geS5Cb3JkZXJQb3NpdGlvbn19KTt2YXIgZD1vKDY3MDEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQm9yZGVyU3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZC5Cb3JkZXJTdHlsZX19KTt2YXIgVD1vKDQ3ODIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlfX0pO3ZhciBtPW8oODU0OSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBtLkRvY3VtZW50YXRpb25MZWdhY3lHcm91cEJlaGF2aW9yfX0pO3ZhciBQPW8oMTkzMSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGV9fSk7dmFyIHY9byg1MzU5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZX19KTt2YXIgZz1vKDk0MzcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VBc3NldFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZX19KTt2YXIgUz1vKDg1NjApO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1R5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVHlwZX19KTt2YXIgYj1vKDQ2NDkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBiLkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUaGVtZVR5cGV9fSk7dmFyIF89bygzNDc2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tTaG9ydGN1dFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gXy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlfX0pO3ZhciBmPW8oNDkzNCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tCZWhhdmlvckRhdGFUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGYuRG9jc0Jsb2NrQmVoYXZpb3JEYXRhVHlwZX19KTt2YXIgTz1vKDgwODEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE8uRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlfX0pO3ZhciBEPW8oOTUzNCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW9cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW99fSk7dmFyIGs9bygxMDQzKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGsuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGV9fSk7dmFyIEU9bygzOTQ3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eU9wdGlvblJlbmRlcmluZ1N0eWxlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEUuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGV9fSk7dmFyIEk9byg0NzQyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSS5Eb2NzQmxvY2tJdGVtUHJvcGVydHlSaWNoVGV4dFN0eWxlfX0pO3ZhciBCPW8oNzgyNSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQi5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGV9fSk7dmFyIGg9byg2NzUxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlfX0pO3ZhciBOPW8oNjc3Nyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTi5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGV9fSk7dmFyIEw9byg5Mjc5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0V2lkdGhcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTC5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFdpZHRofX0pO3ZhciBSPW8oNTI3MSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tPcHRpb25SZW5kZXJpbmdTdHlsZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBSLkRvY3NCbG9ja09wdGlvblJlbmRlcmluZ1N0eWxlfX0pO3ZhciBqPW8oMzI3NCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gai5Eb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGV9fSk7dmFyIHg9byg2MDAxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHguRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGV9fSk7dmFyIEE9bygxNzU1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NFbnRpdHlHcm91cEJlaGF2aW9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEEuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3J9fSk7dmFyIE09byg4MjQwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NFbnRpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0uRG9jc0VudGl0eVR5cGV9fSk7dmFyIEM9byg0MTQyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NTZWN0aW9uVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBDLkRvY3NTZWN0aW9uVHlwZX19KTt2YXIgRj1vKDI2OTUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jc0xpbmtSZWZUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEYuRG9jc0xpbmtSZWZUeXBlfX0pO3ZhciBXPW8oMjc1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NJbWFnZVJlZlR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVy5Eb2NzSW1hZ2VSZWZUeXBlfX0pO3ZhciBZPW8oMTY5NCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJTb3VyY2VUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFkuU291cmNlVHlwZX19KTt2YXIgRz1vKDQ5MTQpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRnJhbWVBbGlnbm1lbnRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRy5GcmFtZUFsaWdubWVudH19KTt2YXIgVT1vKDU5ODYpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRnJhbWVMYXlvdXRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVS5GcmFtZUxheW91dH19KTt2YXIgSz1vKDQ2NjcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiR3JhZGllbnRUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEsuR3JhZGllbnRUeXBlfX0pO3ZhciB3PW8oNDMzNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJSaWNoVGV4dFNwYW5BdHRyaWJ1dGVUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZX19KTt2YXIgSD1vKDU0NjcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiU2hhZG93VHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBILlNoYWRvd1R5cGV9fSk7dmFyIFY9bygyMDQ3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRleHRDYXNlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFYuVGV4dENhc2V9fSk7dmFyIHo9byg1NzgwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRleHREZWNvcmF0aW9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHouVGV4dERlY29yYXRpb259fSk7dmFyIHE9bygxMjU2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRva2VuVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBxLlRva2VuVHlwZX19KTt2YXIgUT1vKDUzODkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiVW5pdFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBRLlVuaXR9fSk7dmFyIFo9bygyOTE2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlVzZXJSb2xlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFouVXNlclJvbGV9fSk7dmFyIEo9byg2Mzk4KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlZpc2liaWxpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEouVmlzaWJpbGl0eVR5cGV9fSk7dmFyIFg9byg0MzU3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBYLldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbH19KTt2YXIgJD1vKDc0Myk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJXb3Jrc3BhY2VTdWJzY3JpcHRpb25Qcm9kdWN0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuICQuV29ya3NwYWNlU3Vic2NyaXB0aW9uUHJvZHVjdH19KTt2YXIgZWU9byg1ODQxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlZS5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXN9fSk7dmFyIHRlPW8oODkxNyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJXb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0ZS5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbH19KTt2YXIgb2U9byg0ODM4KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZU5QTVJlZ2lzdHJ5QXV0aFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gb2UuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZX19KTt2YXIgcmU9bygyMDE1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiByZS5Xb3Jrc3BhY2VOUE1SZWdpc3RyeVR5cGV9fSk7dmFyIG5lPW8oODI5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkltcG9ydFdhcm5pbmdUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG5lLkltcG9ydFdhcm5pbmdUeXBlfX0pO3ZhciBpZT1vKDM2MTEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQ3VzdG9tRG9tYWluRXJyb3JDb2RlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGllLkN1c3RvbURvbWFpbkVycm9yQ29kZX19KTt2YXIgYWU9byg2NTMwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkN1c3RvbURvbWFpblN0YXRlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGFlLkN1c3RvbURvbWFpblN0YXRlfX0pO3ZhciBjZT1vKDM4MDMpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiT3V0cHV0RmlsZVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY2UuT3V0cHV0RmlsZVR5cGV9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJQdWxzYXJFeGVjdXRvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjZS5QdWxzYXJFeGVjdXRvcn19KX0pKCk7dmFyIG49ZXhwb3J0cztmb3IodmFyIGkgaW4gciluW2ldPXJbaV07ci5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7IiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhc2NhbENhc2UsIHBhc2NhbENhc2VUcmFuc2Zvcm0sIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSwgfSBmcm9tIFwicGFzY2FsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gcGFzY2FsQ2FzZShpbnB1dCwgX19hc3NpZ24oeyB0cmFuc2Zvcm06IGNhbWVsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbm9DYXNlIH0gZnJvbSBcIm5vLWNhc2VcIjtcbmltcG9ydCB7IHVwcGVyQ2FzZUZpcnN0IH0gZnJvbSBcInVwcGVyLWNhc2UtZmlyc3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsQ2FzZVRyYW5zZm9ybShpbnB1dCkge1xuICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChpbnB1dC50b0xvd2VyQ2FzZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiIFwiLCB0cmFuc2Zvcm06IGNhcGl0YWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCJjYW1lbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY2FwaXRhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY29uc3RhbnQtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiaGVhZGVyLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGFyYW0tY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInBhc2NhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGF0aC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwic2VudGVuY2UtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInNuYWtlLWNhc2VcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlIH0gZnJvbSBcInVwcGVyLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjb25zdGFudENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub0Nhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIl9cIiwgdHJhbnNmb3JtOiB1cHBlckNhc2UgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gZG90Q2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiLlwiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjYXBpdGFsQ2FzZSB9IGZyb20gXCJjYXBpdGFsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gY2FwaXRhbENhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIi1cIiB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGxvd2VyQ2FzZSB9IGZyb20gXCJsb3dlci1jYXNlXCI7XG4vLyBTdXBwb3J0IGNhbWVsIGNhc2UgKFwiY2FtZWxDYXNlXCIgLT4gXCJjYW1lbCBDYXNlXCIgYW5kIFwiQ0FNRUxDYXNlXCIgLT4gXCJDQU1FTCBDYXNlXCIpLlxudmFyIERFRkFVTFRfU1BMSVRfUkVHRVhQID0gWy8oW2EtejAtOV0pKFtBLVpdKS9nLCAvKFtBLVpdKShbQS1aXVthLXpdKS9nXTtcbi8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVycy5cbnZhciBERUZBVUxUX1NUUklQX1JFR0VYUCA9IC9bXkEtWjAtOV0rL2dpO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBpbnRvIHNvbWV0aGluZyBvdGhlciBsaWJyYXJpZXMgY2FuIG1hbmlwdWxhdGUgZWFzaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9DYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnNwbGl0UmVnZXhwLCBzcGxpdFJlZ2V4cCA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxUX1NQTElUX1JFR0VYUCA6IF9hLCBfYiA9IG9wdGlvbnMuc3RyaXBSZWdleHAsIHN0cmlwUmVnZXhwID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFRfU1RSSVBfUkVHRVhQIDogX2IsIF9jID0gb3B0aW9ucy50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9jID09PSB2b2lkIDAgPyBsb3dlckNhc2UgOiBfYywgX2QgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2QgPT09IHZvaWQgMCA/IFwiIFwiIDogX2Q7XG4gICAgdmFyIHJlc3VsdCA9IHJlcGxhY2UocmVwbGFjZShpbnB1dCwgc3BsaXRSZWdleHAsIFwiJDFcXDAkMlwiKSwgc3RyaXBSZWdleHAsIFwiXFwwXCIpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGVuZCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgLy8gVHJpbSB0aGUgZGVsaW1pdGVyIGZyb20gYXJvdW5kIHRoZSBvdXRwdXQgc3RyaW5nLlxuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KHN0YXJ0KSA9PT0gXCJcXDBcIilcbiAgICAgICAgc3RhcnQrKztcbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChlbmQgLSAxKSA9PT0gXCJcXDBcIilcbiAgICAgICAgZW5kLS07XG4gICAgLy8gVHJhbnNmb3JtIGVhY2ggdG9rZW4gaW5kZXBlbmRlbnRseS5cbiAgICByZXR1cm4gcmVzdWx0LnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KFwiXFwwXCIpLm1hcCh0cmFuc2Zvcm0pLmpvaW4oZGVsaW1pdGVyKTtcbn1cbi8qKlxuICogUmVwbGFjZSBgcmVgIGluIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xuICAgIGlmIChyZSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGRvdENhc2UgfSBmcm9tIFwiZG90LWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBkb3RDYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCItXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgZmlyc3RDaGFyID0gaW5wdXQuY2hhckF0KDApO1xuICAgIHZhciBsb3dlckNoYXJzID0gaW5wdXQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID4gMCAmJiBmaXJzdENoYXIgPj0gXCIwXCIgJiYgZmlyc3RDaGFyIDw9IFwiOVwiKSB7XG4gICAgICAgIHJldHVybiBcIl9cIiArIGZpcnN0Q2hhciArIGxvd2VyQ2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCkgKyBsb3dlckNoYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiXCIsIHRyYW5zZm9ybTogcGFzY2FsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZG90Q2FzZSB9IGZyb20gXCJkb3QtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiL1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlRmlyc3QgfSBmcm9tIFwidXBwZXItY2FzZS1maXJzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VudGVuY2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogc2VudGVuY2VDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBkb3RDYXNlIH0gZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gc25ha2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiX1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE5hbWluZ0hlbHBlciwgU3RyaW5nQ2FzZSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vZXhwb3J0LWhlbHBlcnNcIjtcbmltcG9ydCB7IElDT05TX0NPREVQT0lOVFMgfSBmcm9tIFwiLi9jb250ZW50L2ljb25zX2RhdGFcIjtcbmltcG9ydCB7IEljb25zVGVtcGxhdGVEYXRhIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2ljb25zLnRlbXBsYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzQXNzZXREYXRhKCk6IEljb25zVGVtcGxhdGVEYXRhIHtcbiAgbGV0IGRhdGE6IEljb25zVGVtcGxhdGVEYXRhID0ge1xuICAgIGNsYXNzTmFtZTogJ1Nldkljb25zJyxcbiAgICBmb250RmFtaWx5OiAnU2V2SWNvbnMnLFxuICAgIHZhcmlhYmxlczoge31cbiAgfVxuICBmb3IgKGxldCBrZXkgaW4gSUNPTlNfQ09ERVBPSU5UUykge1xuICAgIGxldCBuYW1lID0gTmFtaW5nSGVscGVyLmNvZGVTYWZlVmFyaWFibGVOYW1lKGtleSwgU3RyaW5nQ2FzZS5jYW1lbENhc2UpO1xuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICBuYW1lID0gXCJpXCIgKyBuYW1lLnNsaWNlKDEpO1xuICAgIH1cbiAgICBkYXRhLnZhcmlhYmxlc1tuYW1lXSA9IHBhcnNlSW50KElDT05TX0NPREVQT0lOVFNba2V5XSkudG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuIiwiZXhwb3J0IHR5cGUgSWNvbnNJZCA9XG4gIHwgXCI0LWtcIlxuICB8IFwiYWNjZXNzaWJpbGl0eS1hMTF5XCJcbiAgfCBcImFjY2Vzc2liaWxpdHktZXllLWExMXlcIlxuICB8IFwiYWN0aXZpdHktbm90aWZpY2F0aW9uLXB1bHNlLWhlYXJ0YmVhdC1iZWF0XCJcbiAgfCBcImFkZC1jb2x1bW4tYWRkLXBhZ2VcIlxuICB8IFwiYWRkLXBhZ2VzLWFkZC1ib2FyZHNcIlxuICB8IFwiYWRkLXBhZ2VzLXdpZGUtYWRkLWJvYXJkc1wiXG4gIHwgXCJhZGQtcGVvcGxlLWFkZC11c2VyLWFkZC1wZXJzb24tMlwiXG4gIHwgXCJhZGQtcGVvcGxlLWFkZC11c2VyLWFkZC1wZXJzb25cIlxuICB8IFwiYWRkLXJlYWN0aW9uLXJlYWN0aW9uLWVtb2ppXCJcbiAgfCBcImFkZC1yb3ctYWRkLXJvd3NcIlxuICB8IFwiYWRkLXNoZWV0LWFkZC1jYW52YXMtYWRkLXBhZ2UtdmVydGljYWxcIlxuICB8IFwiYWRkLXNsaWRlLWFkZC1jYW52YXMtYWRkLXBhZ2UtaG9yaXpvbnRhbFwiXG4gIHwgXCJhZGQtc2xpZGUtYWRkLXBhZ2UtYWRkLWNvcHlcIlxuICB8IFwiYWRkZWQtcGVvcGxlLWFkZC11c2VyLWFkZGVkLXBlcnNvblwiXG4gIHwgXCJhZHJlc3MtcGFja2FnZS1kZWxpdmVyeVwiXG4gIHwgXCJhaS0yLXN0YXJzLTE4MC1zcGFya2xlc1wiXG4gIHwgXCJhaS0yLXN0YXJzLXNwYXJrbGVzXCJcbiAgfCBcImFpLTMtc3RhcnMtc3BhcmtsZXNcIlxuICB8IFwiYWktYXZhdGFyLWdlbmVyYXRlZC1hdmF0YXItcHJvZmlsZS1haS1tYWdpYy1hdmF0YXJcIlxuICB8IFwiYWktaW1hZ2VzLW1pZGpvdXJuZXktYWktZ2VuZXJhdGVkXCJcbiAgfCBcImFpLXRleHQtdGV4dC1nZW5lcmF0aW9uXCJcbiAgfCBcImFpcnBsYXlcIlxuICB8IFwiYWlycG9kLWNhc2UtYWlycG9kc1wiXG4gIHwgXCJhbGJ1bXNcIlxuICB8IFwiYWxpZ24tYm90dG9tLTItYXJyb3ctMVwiXG4gIHwgXCJhbGlnbi1ib3R0b20tMi1hcnJvd1wiXG4gIHwgXCJhbGlnbi1ib3R0b20tYWxpZ25tZW50XCJcbiAgfCBcImFsaWduLWJvdHRvbS1hcnJvd1wiXG4gIHwgXCJhbGlnbi1sZWZ0LTItYXJyb3dcIlxuICB8IFwiYWxpZ24tbGVmdC1hbGlnbm1lbnRcIlxuICB8IFwiYWxpZ24tbGVmdC1hcnJvd1wiXG4gIHwgXCJhbGlnbi1yaWdodC0yLWFycm93XCJcbiAgfCBcImFsaWduLXJpZ2h0LWFsaWdubWVudFwiXG4gIHwgXCJhbGlnbi1yaWdodC1hcnJvd1wiXG4gIHwgXCJhbGlnbi10b3AtYWxpZ25tZW50XCJcbiAgfCBcImFsaWduLXRvcC1hcnJvd1wiXG4gIHwgXCJhbGlnbm1lbnQtYmFyXCJcbiAgfCBcImFsaWdubWVudC1jZW50ZXJcIlxuICB8IFwiYWxpZ25tZW50LWp1c3RpZnlcIlxuICB8IFwiYWxpZ25tZW50LWxlZnRcIlxuICB8IFwiYWxpZ25tZW50LXJpZ2h0XCJcbiAgfCBcImFsdC1hbHQtdGV4dC1hbHQtdGFnXCJcbiAgfCBcImFsdC10ZXh0XCJcbiAgfCBcImFtZXJpY2FuLWZvb3RiYWxsLW5mbFwiXG4gIHwgXCJhbmNob3ItMVwiXG4gIHwgXCJhbmNob3ItMlwiXG4gIHwgXCJhbm5vdGF0aW9uLWJ1YmJsZS1hZGQtcGx1c1wiXG4gIHwgXCJhbm5vdGF0aW9uLWJ1YmJsZS1jaGVja1wiXG4gIHwgXCJhbm5vdGF0aW9uLWJ1YmJsZS14LWNsb3NlLWRlbGV0ZVwiXG4gIHwgXCJhbm9ueW1vdXMtYW5vbnltLWhpZGRlblwiXG4gIHwgXCJhcHBsZS1mcnVpdFwiXG4gIHwgXCJhci1hdWdtZW50ZWQtcmVhbGl0eS0zZC12aWV3LWN1YmUtMVwiXG4gIHwgXCJhci1hdWdtZW50ZWQtcmVhbGl0eS0zZC12aWV3LWN1YmUtMlwiXG4gIHwgXCJhci1hdWdtZW50ZWQtcmVhbGl0eS0zZC12aWV3LWN1YmVcIlxuICB8IFwiYXItYXVnbWVudGVkLXJlYWxpdHktY2FyZC1ib3gtM2QtdmlydHVhbC1yZWFsaXR5LXZyXCJcbiAgfCBcImFyLWF1Z21lbnRlZC1yZWFsaXR5LXNjYW4tM2Qtdmlldy1jdWJlXCJcbiAgfCBcImFyLWF1Z21lbnRlZC1yZWFsaXR5LXNjYW4tM2RcIlxuICB8IFwiYXItYXVndW1lbnQtcmVhbGl0eS12ci12aXJ0dWFsLXJlYWxpdHlcIlxuICB8IFwiYXJjLWJyb3dzZXItZmFjZVwiXG4gIHwgXCJhcmNoaXZlLWJveC1pbmJveC1maWxlXCJcbiAgfCBcImFyY2hpdmUtZm9sZGVyLWJveFwiXG4gIHwgXCJhcm91bmQtc3BhdGlhbFwiXG4gIHwgXCJhcnJvdy1ib3R0b20tY2lyY2xlXCJcbiAgfCBcImFycm93LWJvdHRvbS1sZWZ0XCJcbiAgfCBcImFycm93LWJvdHRvbS1yaWdodFwiXG4gIHwgXCJhcnJvdy1ib3R0b21cIlxuICB8IFwiYXJyb3ctZXhwYW5kLWhcIlxuICB8IFwiYXJyb3ctZXhwYW5kLXZcIlxuICB8IFwiYXJyb3ctbGVmdC1jaXJjbGVcIlxuICB8IFwiYXJyb3ctbGVmdFwiXG4gIHwgXCJhcnJvdy1wYXRoLWRvd25cIlxuICB8IFwiYXJyb3ctcGF0aC1sZWZ0XCJcbiAgfCBcImFycm93LXBhdGgtcmlnaHRcIlxuICB8IFwiYXJyb3ctcGF0aC11cFwiXG4gIHwgXCJhcnJvdy1yaWdodC1jaXJjbGVcIlxuICB8IFwiYXJyb3ctcmlnaHRcIlxuICB8IFwiYXJyb3ctdG9wLWNpcmNsZVwiXG4gIHwgXCJhcnJvdy10b3AtbGVmdFwiXG4gIHwgXCJhcnJvdy10b3AtcmlnaHRcIlxuICB8IFwiYXJyb3ctdG9wXCJcbiAgfCBcImFycm93LXRyaWFuZ2xlLWJvdHRvbVwiXG4gIHwgXCJhcnJvdy10cmlhbmdsZS1sZWZ0XCJcbiAgfCBcImFycm93LXRyaWFuZ2xlLXJpZ2h0XCJcbiAgfCBcImFycm93LXRyaWFuZ2xlLXRvcFwiXG4gIHwgXCJhc3Rlcmlzay1wbGFjZWhvbGRlclwiXG4gIHwgXCJhdFwiXG4gIHwgXCJhdHRhY2htZW50LTItYXR0YWNoLXBhcGVyLWNsaXBcIlxuICB8IFwiYXR0YWNobWVudC1hdHRhY2gtZG9jdW1lbnQtYXR0YWNoZW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwiYXR0YWNobWVudC1hdHRhY2gtcGFwZXItY2xpcFwiXG4gIHwgXCJhdWRpby1tdXNpYy1wbGF5bGlzdC1tdXNpY2FsLW5vdGVcIlxuICB8IFwiYXV0by1mbGFzaFwiXG4gIHwgXCJhdXRvLXNpemUtYXV0b21hdGljLXNpemUtcGFnZS1wYWdlLXNpemVcIlxuICB8IFwiYXZvY2Fkb1wiXG4gIHwgXCJiYWNrXCJcbiAgfCBcImJhY2t3YXJkLWRlbGV0ZS1yZW1vdmUta2V5XCJcbiAgfCBcImJhZGdlLXZlcmlmaWVkLWF3YXJkXCJcbiAgfCBcImJhZy0yLWx1Z2dhZ2UtYnVnZ2FnZVwiXG4gIHwgXCJiYWctMi1zaG9wcGluZ1wiXG4gIHwgXCJiYWctbHVnZ2FnZS1idWdnYWdlXCJcbiAgfCBcImJhZy1zaG9wcGluZ1wiXG4gIHwgXCJiYW5rLTFcIlxuICB8IFwiYmFua1wiXG4gIHwgXCJiYXJjb2RlLXNjYW5cIlxuICB8IFwiYmFzZWJhbGxcIlxuICB8IFwiYmFza2V0LTEtY2FydC1zaG9wcGluZ1wiXG4gIHwgXCJiYXNrZXQtMi1zaG9wcGluZy1iYWdcIlxuICB8IFwiYmFza2V0YmFsbC1uYmFcIlxuICB8IFwiYmF0dGVyeS1lbXB0eS1wb3dlclwiXG4gIHwgXCJiYXR0ZXJ5LWVycm9yLXBvd2VyXCJcbiAgfCBcImJhdHRlcnktZnVsbC1wb3dlclwiXG4gIHwgXCJiYXR0ZXJ5LWxvYWRpbmctcG93ZXJcIlxuICB8IFwiYmF0dGVyeS1sb3ctcG93ZXJcIlxuICB8IFwiYmF0dGVyeS1tZWRpdW0tcG93ZXJcIlxuICB8IFwiYmVsbC1jb25jaWVyZ2VcIlxuICB8IFwiYmVsbC1ub3RpZnlcIlxuICB8IFwiYmV6aWVyLWFkZC1wbHVzLXZlY3Rvci1ub2Rlc1wiXG4gIHwgXCJiZXppZXItY2lyY2xlLXZlY3Rvci1ub2Rlc1wiXG4gIHwgXCJiZXppZXItY3VydmUtYmV6aWVyLXZlY3RvclwiXG4gIHwgXCJiZXppZXItY3VydmVzLWFuaW1hdGlvbi1tb3Rpb24tc3ByaW5nXCJcbiAgfCBcImJlemllci1yZW1vdmUtZGVsZXRlLW1pbnVzLXZlY3Rvci1ub2Rlc1wiXG4gIHwgXCJiZXppZXItdmVjdG9yLW5vZGVzLWVkaXQtMVwiXG4gIHwgXCJiZXppZXItdmVjdG9yLW5vZGVzLWVkaXRcIlxuICB8IFwiYmV6aWVyLXZlY3Rvci1ub2Rlc1wiXG4gIHwgXCJiaWxsLXB1cmNoYWNlLWludm9pY2UtMVwiXG4gIHwgXCJiaWxsLXB1cmNoYWNlLWludm9pY2VcIlxuICB8IFwiYmlydGhkYXktY2FrZVwiXG4gIHwgXCJibG9jay1hZHNcIlxuICB8IFwiYmxvY2tcIlxuICB8IFwiYmx1ZXRvb3RoXCJcbiAgfCBcImJub296ZS1iZWxsXCJcbiAgfCBcImJvbGRcIlxuICB8IFwiYm9tYi1ib29tXCJcbiAgfCBcImJvb2stMi1ndWlkZS1pbmZvLWZhcVwiXG4gIHwgXCJib29rLWd1aWRlLWluZm8tZmFxXCJcbiAgfCBcImJvb2ttYXJrLWJhbm5lci1mbGFnLXRhZ1wiXG4gIHwgXCJib29rbWFyay1jaGVjay1hZGQtY2hlY2tcIlxuICB8IFwiYm9va21hcmstZGVsZXRlLXJlbW92ZS1iYW5uZXItZmxhZy10YWdcIlxuICB8IFwiYm9va21hcmstcGx1cy1iYW5uZXItZmxhZy10YWdcIlxuICB8IFwiYm90XCJcbiAgfCBcImJyYWNrZXRzLTFcIlxuICB8IFwiYnJhY2tldHMtMlwiXG4gIHwgXCJicmFpbi1haS10aGlua2luZ1wiXG4gIHwgXCJicmFuY2hlc1wiXG4gIHwgXCJicm9rZW4tbGlua1wiXG4gIHwgXCJicm9vbS1icnVzaFwiXG4gIHwgXCJicm93c2VyLTItd2luZG93LWFwcC1kZXNrdG9wXCJcbiAgfCBcImJyb3dzZXItd2luZG93LWFwcC1kZXNrdG9wXCJcbiAgfCBcImJydXNoLWNvbG9yXCJcbiAgfCBcImJ1YmJsZS0yLWFubm90YXRpb24tbWVzc2FnZVwiXG4gIHwgXCJidWJibGUtMi1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS0zLW1lc3NhZ2VcIlxuICB8IFwiYnViYmxlLTQtYW5ub3RhdGlvbi1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS01LWFubm90YXRpb24tbWVzc2FnZVwiXG4gIHwgXCJidWJibGUtNS1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS02LWFubm90YXRpb24tbWVzc2FnZVwiXG4gIHwgXCJidWJibGUtNi1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS03LWFubm90YXRpb24tbWVzc2FnZVwiXG4gIHwgXCJidWJibGUtNy1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS03LXRleHQtbWVzc2FnZVwiXG4gIHwgXCJidWJibGUtYW5ub3RhdGlvbi1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlLWFubm90YXRpb24tZXhjbGFtYXRpb24tbWFyay1hbGVydC10b29sdGlwXCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlLWFubm90YXRpb24taW5mby10b29sdGlwXCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlLWRvdHMtdGhyZWUtZG90XCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlLWxpa2UtaGVhcnRcIlxuICB8IFwiYnViYmxlLW1lc3NhZ2UtcXVlc3Rpb24tbWFyay10b29sdGlwXCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlLXNwYXJrbGUtYWktdG9vbHRpcFwiXG4gIHwgXCJidWJibGUtbWVzc2FnZS10ZXh0XCJcbiAgfCBcImJ1YmJsZS1tZXNzYWdlXCJcbiAgfCBcImJ1YmJsZS1ub3RpZmljYXRpb24tYmFkZ2UtbWVzc2FnZVwiXG4gIHwgXCJidWJibGVzLTItbWVzc2FnZXMtY2hhdC1jb21tdW5pY2F0ZVwiXG4gIHwgXCJidWJibGVzXCJcbiAgfCBcImJ1Y2tldC10cmFzaC1jYW5cIlxuICB8IFwiYnVnLTEtaXNzdWVcIlxuICB8IFwiYnVnLWlzc3VlXCJcbiAgfCBcImJ1aWxkaW5nc1wiXG4gIHwgXCJidWxsZXQtbGlzdFwiXG4gIHwgXCJidXJnZXItaGFtYnVyZ2VyLWNoZWVzZWJ1cmdlci1zYW5kd2ljaFwiXG4gIHwgXCJidXJnZXItaGFtYnVyZ2VyLXNhbmR3aWNoXCJcbiAgfCBcImJ1c2luZXNzLXNob3Atc3RvcmVcIlxuICB8IFwiY2FsY3VsYXRvclwiXG4gIHwgXCJjYWxlbmRhci0xXCJcbiAgfCBcImNhbGVuZGFyLTJcIlxuICB8IFwiY2FsZW5kYXItYWRkLWluc2VydC1kYXRlXCJcbiAgfCBcImNhbGVuZGFyLWJcIlxuICB8IFwiY2FsZW5kYXItY2hlY2stY2hlY2ttYXJrLWFjY2VwdFwiXG4gIHwgXCJjYWxlbmRhci1jaGVja1wiXG4gIHwgXCJjYWxlbmRhci1kYXRlLXNlYXJjaC1tYWduaWZpZXItZ2xhc3NcIlxuICB8IFwiY2FsZW5kYXItZGF5c1wiXG4gIHwgXCJjYWxlbmRhci1lZGl0LWRhdGUtZWRpdFwiXG4gIHwgXCJjYWxlbmRhci10aW1lLWNsb2NrXCJcbiAgfCBcImNhbGVuZGFyLXgtY2xvc2UtcmVtb3ZlLWRlbGV0ZVwiXG4gIHwgXCJjYWxlbmRlci1hZGRcIlxuICB8IFwiY2FsZW5kZXItcmVtb3ZlXCJcbiAgfCBcImNhbGwtaW5jb21pbmdcIlxuICB8IFwiY2FsbC1vdXRnb2luZ1wiXG4gIHwgXCJjYWxsLXBob25lXCJcbiAgfCBcImNhbWVyYS0xLW9mZi1waWN0dXJlLWltYWdlLWNhbVwiXG4gIHwgXCJjYW1lcmEtMS1waWN0dXJlLWltYWdlLWNhbVwiXG4gIHwgXCJjYW1lcmEtMi1waWN0dXJlLWltYWdlLWNhbVwiXG4gIHwgXCJjYW1lcmEtMy1waWN0dXJlLWltYWdlLWNhbVwiXG4gIHwgXCJjYW1lcmEtNC1hY3Rpb24tY2FtLWdvLXByb1wiXG4gIHwgXCJjYW1lcmEtcGljdHVyZS1pbWFnZS1jYW0tY2xvc2UtY3Jvc3Mtb2ZmLTFcIlxuICB8IFwiY2FtZXJhLXBpY3R1cmUtaW1hZ2UtY2FtLWNsb3NlLWNyb3NzLW9mZlwiXG4gIHwgXCJjYW1lcmFcIlxuICB8IFwiY2FuY2VsLWNhbGxcIlxuICB8IFwiY2FyXCJcbiAgfCBcImNhcmRzXCJcbiAgfCBcImNhcnVzc2VsLXNsaWRlc1wiXG4gIHwgXCJjYXQtaW1hZ2UtYW5pbWFsLWN1dGVcIlxuICB8IFwiY2VsZWJyYXRlLXBhcnR5LWNvbmZldHRpXCJcbiAgfCBcImNoYXJ0LTEtc3RhdGlzdGljcy1mbGlwY2hhcnQtcHJlc2VudGF0aW9uLWdyYXBoXCJcbiAgfCBcImNoYXJ0LTItc3RhdGlzdGljcy1mbGlwY2hhcnQtcHJlc2VudGF0aW9uLWdyYXBoLTJcIlxuICB8IFwiY2hhcnQtMy1zdGF0aXN0aWNzLWdyYXBoLXNpZ25hbC0xXCJcbiAgfCBcImNoYXJ0LTMtc3RhdGlzdGljcy1ncmFwaC1zaWduYWxcIlxuICB8IFwiY2hhcnQtNC1zdGF0aXN0aWNzLWdyYXBoLTJcIlxuICB8IFwiY2hhcnQtNS1zdGF0aXN0aWNzLWdyYXBoLTNcIlxuICB8IFwiY2hhcnQtNi1zdGF0aXN0aWNzLWdyYXBoLTRcIlxuICB8IFwiY2hhcnQtNy1zdGF0aXN0aWNzLWdyYXBoLTVcIlxuICB8IFwiY2hhdC1ncHRcIlxuICB8IFwiY2hlY2stY2hlY21hcmtcIlxuICB8IFwiY2hlY2stcmFkaW8tY2lyY2xlLWNoZWNrYm94LWNoZWNrLWNoZWNrbWFyay1jb25maXJtXCJcbiAgfCBcImNoZWNrYm94LWNoZWNrLWNoZWNrbWFyay1jb25maXJtXCJcbiAgfCBcImNoZWNrbGlzdC1ib3gtY2hlY2stbGlzdC1zZWFyY2gtMVwiXG4gIHwgXCJjaGVja2xpc3QtYm94LWNoZWNrLWxpc3Qtc2VhcmNoXCJcbiAgfCBcImNoZWNrbGlzdC1ib3gtY2hlY2stbGlzdFwiXG4gIHwgXCJjaGVja2xpc3QtbGlzdFwiXG4gIHwgXCJjaGV2cm9uLWJvdHRvbVwiXG4gIHwgXCJjaGV2cm9uLWRvdWJsZS1kb3duXCJcbiAgfCBcImNoZXZyb24tZG91YmxlLWxlZnRcIlxuICB8IFwiY2hldnJvbi1kb3VibGUtcmlnaHRcIlxuICB8IFwiY2hldnJvbi1kb3VibGUtdXBcIlxuICB8IFwiY2hldnJvbi1kb3duLXNtYWxsXCJcbiAgfCBcImNoZXZyb24tZ3JhYmJlci1ob3Jpem9udGFsLTFcIlxuICB8IFwiY2hldnJvbi1ncmFiYmVyLWhvcml6b250YWxcIlxuICB8IFwiY2hldnJvbi1sYXJnZS1kb3duLWNoZXYtZG93blwiXG4gIHwgXCJjaGV2cm9uLWxhcmdlLWxlZnQtY2hldi1sZWZ0XCJcbiAgfCBcImNoZXZyb24tbGFyZ2UtcmlnaHQtY2hldi1yaWdodFwiXG4gIHwgXCJjaGV2cm9uLWxhcmdlLXRvcC1jaGV2LXRvcFwiXG4gIHwgXCJjaGV2cm9uLWxlZnRcIlxuICB8IFwiY2hldnJvbi1yaWdodC1zbWFsbC0xXCJcbiAgfCBcImNoZXZyb24tcmlnaHQtc21hbGxcIlxuICB8IFwiY2hldnJvbi1yaWdodFwiXG4gIHwgXCJjaGV2cm9uLXRvcC1zbWFsbFwiXG4gIHwgXCJjaGV2cm9uLXRvcFwiXG4gIHwgXCJjaHJvbWVjYXN0LWNhc3RcIlxuICB8IFwiY2lyY2xlLXBsYWNlaG9sZGVyLW9mZlwiXG4gIHwgXCJjaXJjbGUtcGxhY2Vob2xkZXItb25cIlxuICB8IFwiY2xpcGJvYXJkLTItY29weS1saXN0XCJcbiAgfCBcImNsaXBib2FyZC1jb3B5LWxpc3RcIlxuICB8IFwiY2xvY2stYWxlcnQtdGltZXJcIlxuICB8IFwiY2xvY2stY2lyY2xlLXRpbWVcIlxuICB8IFwiY2xvY2stc25vb3plLXRpbWVyLXNub296ZS16elwiXG4gIHwgXCJjbG9jay1zcXVhcmUtdGltZS10aW1lci13YXRjaFwiXG4gIHwgXCJjbG9zZS1xdW90ZS1ibG9ja3F1b3RlXCJcbiAgfCBcImNsb3NlLXgtY2hlY2tib3gtcmVtb3ZlXCJcbiAgfCBcImNsb3NlLXgtY2lyY2xlLXJlbW92ZVwiXG4gIHwgXCJjbG9zZWQtY2FwdGlvbmluZy1jY1wiXG4gIHwgXCJjbG91ZC1jbG91ZHNcIlxuICB8IFwiY2xvdWQtZG93bmxvYWRcIlxuICB8IFwiY2xvdWQtbGluZXMtc3luYy1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiXG4gIHwgXCJjbG91ZC1vZmYtMi1vZmZsaW5lXCJcbiAgfCBcImNsb3VkLW9mZi1vZmZsaW5lXCJcbiAgfCBcImNsb3VkLXNpbXBsZS1hcnJvdy1kb3duLWRvd25sb2FkXCJcbiAgfCBcImNsb3VkLXNpbXBsZS1kaXNjb25uZWN0ZWQtZXJyb3JcIlxuICB8IFwiY2xvdWQtc2ltcGxlXCJcbiAgfCBcImNsb3VkLXN5bmMtZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwiY2xvdWQtdXBsb2FkXCJcbiAgfCBcImNsb3VkXCJcbiAgfCBcImNsb3VkeS1jbG91ZHNcIlxuICB8IFwiY2xvdWR5LXN1bi1jbG91ZHNcIlxuICB8IFwiY21kLWJveC1jb21tYW5kLWFwcGxlLWtleVwiXG4gIHwgXCJjbWQtY29tbWFuZC1hcHBsZS1rZXlcIlxuICB8IFwiY29kZS1icmFja2V0c1wiXG4gIHwgXCJjb2RlLWluc2VydFwiXG4gIHwgXCJjb2RlLWxpbmVzXCJcbiAgfCBcImNvZGVcIlxuICB8IFwiY29sb3ItcGlja2VyLWNvbG9yXCJcbiAgfCBcImNvbG9yLXN3YXRjaC1wYWxldHRlLWNvbG91cnNcIlxuICB8IFwiY29sb3JcIlxuICB8IFwiY29sb3JzLXBhbGV0dGUtY29sb3Vyc1wiXG4gIHwgXCJjb2x1bW4td2lkZS1jb2x1bXNcIlxuICB8IFwiY29tcGFzcy1yb3VuZC1icm93c2VyLXNhZmFyaS13ZWItaW50ZXJuZXQtbmF2aWdhdGlvblwiXG4gIHwgXCJjb21wYXNzLXNxdWFyZS1icm93c2VyLXNhZmFyaS13ZWItaW50ZXJuZXQtbmF2aWdhdGlvblwiXG4gIHwgXCJjb25uZWN0LWRldmljZXMtbWFjYm9vay1pcGhvbmUtcGhvbmVcIlxuICB8IFwiY29uc29sZS10ZXJtaW5hbFwiXG4gIHwgXCJjb250cmFzdFwiXG4gIHwgXCJjb250cm9sXCJcbiAgfCBcImNvb2tpZXNcIlxuICB8IFwiY29weS0xLWxheWVycy1wYWdlc1wiXG4gIHwgXCJjb3B5LTItbGF5ZXJzLXBhZ2VzXCJcbiAgfCBcImNvcHktMy1sYXllcnMtcGFnZXNcIlxuICB8IFwiY29weS00LWxheWVycy1wYWdlc1wiXG4gIHwgXCJjb3B5LTUtbGF5ZXJzLXBhZ2VzXCJcbiAgfCBcImNvcm5lci1kb3duLWxlZnRcIlxuICB8IFwiY29ybmVyLWRvd24tcmlnaHRcIlxuICB8IFwiY29ybmVyLWxlZnQtZG93blwiXG4gIHwgXCJjb3JuZXItbGVmdC11cFwiXG4gIHwgXCJjb3JuZXItcmlnaHQtZG93blwiXG4gIHwgXCJjb3JuZXItcmlnaHQtdXBcIlxuICB8IFwiY29ybmVyLXVwLXJpZ2h0LTFcIlxuICB8IFwiY29ybmVyLXVwLXJpZ2h0XCJcbiAgfCBcImNvdXJ0XCJcbiAgfCBcImNyZWRpdC1jYXJkLTEtY2FyZC1wYXltZW50XCJcbiAgfCBcImNyZWRpdC1jYXJkLTItY2FyZC1wYXltZW50XCJcbiAgfCBcImNyZWRpdC1jYXJkLTMtY2FyZC1wYXltZW50XCJcbiAgfCBcImNyb3BcIlxuICB8IFwiY3Jvc3NlZC1sYXJnZS1jbG9zZVwiXG4gIHwgXCJjcm9zc2VkLXNtYWxsLWRlbGV0ZS1yZW1vdmVcIlxuICB8IFwiY3Jvd24tdmlwXCJcbiAgfCBcImNyeXB0by1jb2luXCJcbiAgfCBcImNyeXB0b1wiXG4gIHwgXCJjdXAtY29mZmVlLXRlYS1taWxrXCJcbiAgfCBcImN1cC10ZWEtY29mZmVlXCJcbiAgfCBcImN1cnNvci0xLWFycm93XCJcbiAgfCBcImN1cnNvci0yLWFycm93XCJcbiAgfCBcImN1cnNvci0zLWFycm93XCJcbiAgfCBcImN1cnNvci1ib3gtYXJyb3dcIlxuICB8IFwiY3Vyc29yLWNsaWNrLWFycm93LWNsaWNrYmFpdFwiXG4gIHwgXCJkYXNoYm9hcmQtZmFzdFwiXG4gIHwgXCJkYXNoYm9hcmQtbG93XCJcbiAgfCBcImRhc2hib2FyZC1taWRkbGVcIlxuICB8IFwiZGFzaGJvYXJkXCJcbiAgfCBcImRhdGUtdGltZS1jYWxlbmRhci10aW1lXCJcbiAgfCBcImRlYnVnLWRlYnVnZ2VyXCJcbiAgfCBcImRlbGV0ZS0yLXJlbW92ZS1nYXJiYWdlLXdhc3RlLXRyYXNoLWNhblwiXG4gIHwgXCJkZWxldGUtcmVtb3ZlLWJhY2tzcGFjZVwiXG4gIHwgXCJkZWxldGUtcmVtb3ZlLWdhcmJhZ2Utd2FzdGUtdHJhc2gtY2FuXCJcbiAgfCBcImRlbGV0ZS1zaW1wbGVcIlxuICB8IFwiZGljZS0xLXJvbGxcIlxuICB8IFwiZGljZS0yLXJvbGxcIlxuICB8IFwiZGljZS0zLXJvbGxcIlxuICB8IFwiZGljZS00LXJvbGxcIlxuICB8IFwiZGljZS01LXJvbGxcIlxuICB8IFwiZGljZS02LXJvbGxcIlxuICB8IFwiZGlyZWN0b3ItY2hhaXItcmVnaWUtY2hhaXJcIlxuICB8IFwiZGlzay0xLXNhdmVcIlxuICB8IFwiZGlzay0yLXNhdmVcIlxuICB8IFwiZGl2aWRlci1hZGQtbGluZVwiXG4gIHwgXCJkb2NrLWJveC1hcnJvd1wiXG4gIHwgXCJkb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiXG4gIHwgXCJkb2N1bWVudC13aXRoLWxpbmVzLWxpc3QtcGFnZS1maWxlXCJcbiAgfCBcImRvbGxhci1jdXJyZW5jeS1tb25leS1jb2luLXVzZFwiXG4gIHwgXCJkb251dFwiXG4gIHwgXCJkb3NzaWVyXCJcbiAgfCBcImRvdC1ncmlkLW1lbnUtZ3JhYlwiXG4gIHwgXCJkb3QtaG9yaXpvbnRhbC1tZW51LWdyYWJcIlxuICB8IFwiZG90LXZlcnRpY2FsLW1lbnUtZ3JhYlwiXG4gIHwgXCJkb3duLWdhbWVwYWQtYmFzZS1jb250cm9sbHMtZ2FtZS1qb3lzdGlja1wiXG4gIHwgXCJkb3duLWdhbWVwYWQtYmFzZS1yb3VuZC1jb250cm9sbHMtZ2FtZS1qb3lzdGlja1wiXG4gIHwgXCJkb3dubG9hZC1jaXJjbGUtYXJyb3ctZG93blwiXG4gIHwgXCJkb3dubG9hZC1maWxlLWRvd25cIlxuICB8IFwiZG93bmxvYWQtc3F1YXJlLWFycm93LWRvd25cIlxuICB8IFwiZHJhZy1ncmFiXCJcbiAgfCBcImRyaW5rLWN1cC1zdHJhd1wiXG4gIHwgXCJkcm9wLXdhdGVyLXByZWNpcGl0YXRpb24tbGlxdWlkXCJcbiAgfCBcImVhcnRoLWdsb2JlLXdvcmxkXCJcbiAgfCBcImVkaXQtMDFcIlxuICB8IFwiZWRpdC1iaWctYm94LXBlbmNpbC1wZW4td3JpdGUtZHJhd1wiXG4gIHwgXCJlZGl0LXBlbmNpbC13cml0ZVwiXG4gIHwgXCJlZGl0LXNtYWxsLWJveC1wZW5jaWwtcGVuLXdyaXRlLWRyYXdcIlxuICB8IFwiZW1haWwtMi1lbnZlbG9wZS1tYWlsXCJcbiAgfCBcImVtYWlsLTItbm90aWZpY2F0aW9uLWJhZGdlLWVudmVsb3BlLW1haWxcIlxuICB8IFwiZW1haWwtZW52ZWxvcGUtMVwiXG4gIHwgXCJlbWFpbC1lbnZlbG9wZVwiXG4gIHwgXCJlcnJvci13YXJuaW5nLWFsZXJ0XCJcbiAgfCBcImVzYy1wb3dlclwiXG4gIHwgXCJldGhlcmV1bVwiXG4gIHwgXCJldXJvLWN1cnJlbmN5LW1vbmV5LWNvaW4tZXVyb1wiXG4gIHwgXCJleHBhbmQtYXJyb3ctZW5sYXJnZVwiXG4gIHwgXCJleHBhbmQtd2luZG93LWxheW91dFwiXG4gIHwgXCJleHBsb3Npb24tYm9vbS1iYW5nLXBvcFwiXG4gIHwgXCJleWUtY2xvc2VkLXNlZS1oaWRkZW5cIlxuICB8IFwiZmFzdC1mb3J3YXJkLTEwc1wiXG4gIHwgXCJmYXN0LWZvcndhcmQtMTVzXCJcbiAgfCBcImZhc3QtZm9yd2FyZC0zMHNcIlxuICB8IFwiZmFzdC1mb3J3YXJkLTVzXCJcbiAgfCBcImZhc3QtZm9yd2FyZC1zeW1ib2xcIlxuICB8IFwiZmVhdHVyZXMtdG8tdGhlLW1vb25cIlxuICB8IFwiZmlsZS0xLWRvY3VtZW50LWNsb3VkLXN5bmNcIlxuICB8IFwiZmlsZS0yLWRvY3VtZW50cy1jb3B5XCJcbiAgfCBcImZpbGUtMy1kb2N1bWVudC1jbG91ZC1zeW5jXCJcbiAgfCBcImZpbGUtNC1kb2N1bWVudC1jbG91ZC1zeW5jXCJcbiAgfCBcImZpbGUtNS1kb2N1bWVudC1jbG91ZC1zeW5jXCJcbiAgfCBcImZpbGUtNi1kb2N1bWVudC10ZXh0XCJcbiAgfCBcImZpbGUtNy1kb2N1bWVudC1sb2NrZWQtcGFzc3dvcmRcIlxuICB8IFwiZmlsZS04LWRvY3VtZW50LWNsb3VkLXN5bmNcIlxuICB8IFwiZmlsdGVyLTEtc29ydFwiXG4gIHwgXCJmaWx0ZXItMi1zb3J0XCJcbiAgfCBcImZpbHRlci1hc2NlbmRpbmctc29ydC1hei1hc2NlbmRpbmctYXNjXCJcbiAgfCBcImZpbHRlci1kZXNjZW5kaW5nLXNvcnQtemEtZGVzY2VuZGluZy1kZXNjXCJcbiAgfCBcImZpbHRlci10aW1lbGluZS1zb3J0XCJcbiAgfCBcImZpbmRlci1mYWNlLWlkXCJcbiAgfCBcImZpbmRlci1maWxlcy1vc1wiXG4gIHwgXCJmaW5nZXItcHJpbnQtMi10b3VjaC1pZFwiXG4gIHwgXCJmaW5nZXItcHJpbnQtdG91Y2gtaWRcIlxuICB8IFwiZmlyZS0xLWZsYW1lLWhvdC1oZWF0XCJcbiAgfCBcImZpcmUtMi1mbGFtZS1ob3QtaGVhdFwiXG4gIHwgXCJmaXN0YnVtcC1ib29tLWhhbmRzLWZyaWVuZHNcIlxuICB8IFwiZmxhZy0yLXByaW9yaXR5LTFcIlxuICB8IFwiZmxhZy0yLXByaW9yaXR5XCJcbiAgfCBcImZvY3VzLWNhbWVyYS1leHBvc3VyZS1hdXRvZm9jdXMtYXV0b1wiXG4gIHwgXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtZmxhc2hcIlxuICB8IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlLWxvY2tcIlxuICB8IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlLW1hY3JvLWZsb3dlclwiXG4gIHwgXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtbWFnaWMtYXV0by1haS1zcGFya2xlcy1lZmZlY3RzXCJcbiAgfCBcImZvY3VzLWNhbWVyYS1leHBvc3VyZS1zcXVhcmVcIlxuICB8IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlLXVubG9ja1wiXG4gIHwgXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtem9vbS1pblwiXG4gIHwgXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtem9vbS1vdXRcIlxuICB8IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlXCJcbiAgfCBcImZvY3VzLWV4cG9zdXJlLW1hY3JvLWZsb3dlci0yXCJcbiAgfCBcImZvbGRlci0xXCJcbiAgfCBcImZvbGRlci0yXCJcbiAgfCBcImZvbGRlci0zXCJcbiAgfCBcImZvbGRlci1hZGQtcGx1c1wiXG4gIHwgXCJmb2xkZXItYm9va21hcmtzLWJvb2ttYXJrXCJcbiAgfCBcImZvbGRlci1jbG91ZC0xXCJcbiAgfCBcImZvbGRlci1jbG91ZC0yXCJcbiAgfCBcImZvbGRlci1kZWxldGUteFwiXG4gIHwgXCJmb2xkZXItZG93bmxvYWRcIlxuICB8IFwiZm9sZGVyLXJlc3RyaWN0ZWRcIlxuICB8IFwiZm9sZGVyLXNoYXJlZC11c2VyXCJcbiAgfCBcImZvbGRlci11cGxvYWRcIlxuICB8IFwiZm9sZGVyXCJcbiAgfCBcImZvbGRlcnNcIlxuICB8IFwiZm9ya1wiXG4gIHwgXCJmb3J3YXJkc1wiXG4gIHwgXCJnYW1lcGFkLWJhc2UtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIlxuICB8IFwiZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCJcbiAgfCBcImdhbWVwYWQtZ2FtaW5nLWpveXN0aWNrLWdhbWVzXCJcbiAgfCBcImdhcmFnZVwiXG4gIHwgXCJnYXNcIlxuICB8IFwiZ2Vhci1jb2ctd2hlZWxcIlxuICB8IFwiZ2hvc3QtaGlkZGVuLXVua25vd25cIlxuICB8IFwiZ2lmLXNxdWFyZVwiXG4gIHwgXCJnaWZcIlxuICB8IFwiZ2lmdC1zaWRlLXZpZXctcHJlc2VudFwiXG4gIHwgXCJnaWZ0LXRvcC12aWV3XCJcbiAgfCBcImdpZnRjYXJkXCJcbiAgfCBcImdpcm8tY2FyZFwiXG4gIHwgXCJnbG9idXMtbWFwLWVhcnRoLWdsb2JlXCJcbiAgfCBcImdvbGYtYmFsbFwiXG4gIHwgXCJncmFkdWF0ZS1jYXAtc3R1ZHktZWR1Y2F0aW9uLWFjYWRlbWljLXN0dWRlbnRcIlxuICB8IFwiZ3JhcGgtbGluZXMtc3RhdGlzdGljcy1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiXG4gIHwgXCJncmFwaC1zdGF0aXN0aWNzLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCJcbiAgfCBcImdyb3d0aC1ncm93LWxlYWZzXCJcbiAgfCBcImgxLWhlYWRpbmctaGVhZGxpbmVcIlxuICB8IFwiaDItaGVhZGluZy1oZWFkbGluZVwiXG4gIHwgXCJoMy1oZWFkaW5nLWhlYWRsaW5lXCJcbiAgfCBcImhhbmQtNC1maW5nZXItc2VsZWN0XCJcbiAgfCBcImhhbmQtNS1maW5nZXItc2VsZWN0XCJcbiAgfCBcImhhc2h0YWdcIlxuICB8IFwiaGRcIlxuICB8IFwiaGVhZC1hdmF0YXJcIlxuICB8IFwiaGVhZHBob25lcy1zdXBwb3J0XCJcbiAgfCBcImhlYXJ0LTItbGlrZS1oZWFsdGgtbGlmZS1mYXZcIlxuICB8IFwiaGVhcnQtYmVhdC1oZWFydC1yYXRlLXB1bHNlXCJcbiAgfCBcImhlYXJ0LWxpa2UtaGVhbHRoLWxpZmUtZmF2b3JpdGVcIlxuICB8IFwiaGlkZS1leWUtb2ZmLXNlZS1sb29rLW5vdC12aXNpYmxlXCJcbiAgfCBcImhpZ2hsaWdodFwiXG4gIHwgXCJob21lLWRvb3ItaG91c2UtMVwiXG4gIHwgXCJob21lLWRvb3ItaG91c2VcIlxuICB8IFwiaG9tZS1saW5lLWhvdXNlXCJcbiAgfCBcImhvbWUtb3Blbi1ob3VzZVwiXG4gIHwgXCJob21lLXJvb2YtaG91c2VcIlxuICB8IFwiaG9tZS1zaW1wbGUtaG91c2UtMVwiXG4gIHwgXCJob21lLXNpbXBsZS1ob3VzZVwiXG4gIHwgXCJob3VyZ2xhc3MtdGltZS13YXRjaC1jbG9ja1wiXG4gIHwgXCJpY2UtaG9ja2V5XCJcbiAgfCBcImljb24taWNvbnMtc2hhcGVzLWdhbWVzXCJcbiAgfCBcImltYWMtY29tcHV0ZXItZGV2aWNlLTJcIlxuICB8IFwiaW1hZ2Utd2FsbHBhcGVyLWxhbmRzY2FwZS1vc1wiXG4gIHwgXCJpbWFnZXMtMS1waG90b3MtcGljdHVyZXMtc2hvdFwiXG4gIHwgXCJpbWFnZXMtMi1waG90b3MtcGljdHVyZXMtc2hvdFwiXG4gIHwgXCJpbWFnZXMtMy1waG90b3MtcGljdHVyZXMtc2hvdFwiXG4gIHwgXCJpbWFnZXMtNC1waG90b3MtcGljdHVyZXMtc2hvdFwiXG4gIHwgXCJpbWFnZXMtNS1waG90b3MtcGljdHVyZXMtc2hvdFwiXG4gIHwgXCJpbmJveC0xLWFyY2hpdmUtdHJheS1zaGVsZlwiXG4gIHwgXCJpbmJveC0yLWFyY2hpdmUtdHJheS1zaGVsZlwiXG4gIHwgXCJpbmZpbml0eS1sb29wLWJvb21lcmFuZ1wiXG4gIHwgXCJpbmZvLWNpcmNsZS10b29sdGlwXCJcbiAgfCBcImluZm8tc3F1YXJlXCJcbiAgfCBcImludml0ZS0xXCJcbiAgfCBcImludml0ZVwiXG4gIHwgXCJpdGFsaWNcIlxuICB8IFwia2V5XCJcbiAgfCBcImtleWJvYXJkLWRvd24tY2xvc2UtZG93bi1vcGVuLWFycm93XCJcbiAgfCBcImtleWJvYXJkLW1pZGkta2V5cy1waWFub1wiXG4gIHwgXCJrZXlib2FyZC11cC0xLWNsb3NlLWRvd24tb3Blbi1hcnJvd1wiXG4gIHwgXCJrZXlib2FyZC11cC0yLWNsb3NlLWRvd24tb3Blbi1hcnJvd1wiXG4gIHwgXCJsYWJcIlxuICB8IFwibGF1bmNoLXJvY2tldFwiXG4gIHwgXCJsYXctbGVnYWwtdGVybXMtaW1wcmludC1iYWxhbmNlXCJcbiAgfCBcImxheWVyLWJlaGluZC1zbGlkZXMtcGFnZXNcIlxuICB8IFwibGF5ZXJzLTItc3RhY2tcIlxuICB8IFwibGF5ZXJzLTMtc3RhY2tcIlxuICB8IFwibGF5ZXJzLWNvcHlcIlxuICB8IFwibGF5b3V0LTItcm93cy1ncmlkLXdpbmRvd1wiXG4gIHwgXCJsYXlvdXQtMy1yb3dzLWdyaWQtd2luZG93XCJcbiAgfCBcImxheW91dC1ib3R0b20tZ3JpZC13aW5kb3dcIlxuICB8IFwibGF5b3V0LWNvbHVtbi1ncmlkLWNvbHVtblwiXG4gIHwgXCJsYXlvdXQtZGFzaGJvYXJkLWdyaWQtd2luZG93XCJcbiAgfCBcImxheW91dC1ncmlkLTEtZ3JpZC13aW5kb3dcIlxuICB8IFwibGF5b3V0LWdyaWQtMi1ncmlkXCJcbiAgfCBcImxheW91dC1ncmlkLWxpc3Qtc2VhcmNoLWZpbmQtbWFnaWZpZXJcIlxuICB8IFwibGF5b3V0LWxlZnQtZ3JpZC13aW5kb3dcIlxuICB8IFwibGF5b3V0LXJpZ2h0LWdyaWQtd2luZG93XCJcbiAgfCBcImxheW91dC1zaWRlYmFyLWdyaWQtd2luZG93XCJcbiAgfCBcImxheW91dC10b3AtZ3JpZC13aW5kb3dcIlxuICB8IFwibGF5b3V0LXRvcGJhci1ncmlkLXdpbmRvd1wiXG4gIHwgXCJsYXlvdXQtd2luZG93LWdyaWQtd2luZG93XCJcbiAgfCBcImxlZnQtZ2FtZXBhZC1iYXNlLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCJcbiAgfCBcImxlZnQtZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCJcbiAgfCBcImxpYnJhcnlcIlxuICB8IFwibGlmZS12ZXN0LXZlc3RcIlxuICB8IFwibGlnaHQtYnVsYi1pZGVhLWxpZ2h0XCJcbiAgfCBcImxpZ2h0LWJ1bGItc2ltcGxlLWlkZWFcIlxuICB8IFwibGlnaHQtcmFpblwiXG4gIHwgXCJsaWdodG5pbmctemFwLWZsYXNoXCJcbiAgfCBcImxpbmUtY2hhcnQtMi1zdGF0aXN0aWNzLWdyYXBoXCJcbiAgfCBcImxpbmUtY2hhcnQtMy1zdGF0aXN0aWNzLWdyYXBoLTFcIlxuICB8IFwibGluZS1jaGFydC0zLXN0YXRpc3RpY3MtZ3JhcGhcIlxuICB8IFwibGluZS1jaGFydC1zdGF0aXN0aWNzLWdyYXBoXCJcbiAgfCBcImxpbmstMS1jaGFpblwiXG4gIHwgXCJsaW5rLTItY2hhaW5cIlxuICB8IFwibGluay0zLWNoYWluXCJcbiAgfCBcImxpbmstZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwibGluay1saW5lcy1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiXG4gIHwgXCJsaXN0LXNlYXJjaC1maW5kLW1hZ2lmaWVyXCJcbiAgfCBcImxpdmUtc2lnbmFsXCJcbiAgfCBcImxvYWRlclwiXG4gIHwgXCJsb2NhdGlvbi1leHBsb3JlLWNvbXBhc3NcIlxuICB8IFwibG9jYXRpb24tbWFwLXJvdXRlXCJcbiAgfCBcImxvY2stcHJpdmF0ZVwiXG4gIHwgXCJsb2dpbi1lbnRlci1kb29yXCJcbiAgfCBcImxvZ291dC1sZWF2ZS1kb29yXCJcbiAgfCBcIm1hY2Jvb2stbGFwdG9wLWNvbXB1dGVyLWRldmljZVwiXG4gIHwgXCJtYWNpbnRob3NoLW1hY1wiXG4gIHwgXCJtYWdpYy1ib29rLW1hZ2ljaWFuXCJcbiAgfCBcIm1hZ2ljLWJveFwiXG4gIHwgXCJtYWdpYy1leWVzXCJcbiAgfCBcIm1hZ2ljLWhhbmRzLW1hZ2ljLXJhaW5ib3dcIlxuICB8IFwibWFnaWMtaGF0XCJcbiAgfCBcIm1hZ2ljLXBlbmNpbC1tYWdpYy1icnVzaFwiXG4gIHwgXCJtYWdpYy1zdGljay1zdGFyXCJcbiAgfCBcIm1hZ2ljLXN0aWNrLXRvcFwiXG4gIHwgXCJtYWdpYy1zdGlja1wiXG4gIHwgXCJtYXAtcGFwZXJcIlxuICB8IFwibWFya2Rvd25cIlxuICB8IFwibWVkYWwtdHJvcGh5LWJhZGdlLXdpbm5lci13aW5cIlxuICB8IFwibWVnYXBob25lLWxvdWQtc3BlYWstcHJvbW90ZVwiXG4gIHwgXCJtZW1vcnktMS1zaW0tY2FyZC1jYXJkXCJcbiAgfCBcIm1lbW9yeS0yLXNpbS1jYXJkLXNkLWNhcmRcIlxuICB8IFwibWVudS0xLWdyaWQtY2lyY2xlXCJcbiAgfCBcIm1lbnUtMS1saXN0LWhhbWJ1cmdlclwiXG4gIHwgXCJtZW51LTItZ3JpZC1jaXJjbGVcIlxuICB8IFwibWVudS0yLWxpc3QtaGFtYnVyZ2VyXCJcbiAgfCBcIm1lbnUtMy1saXN0LWhhbWJ1cmdlclwiXG4gIHwgXCJtZW51LXNpbXBsZS1uYXYtc2ltcGxlXCJcbiAgfCBcIm1pY3JvcGhvbmUtbWljLXNvdW5kLXBvZGNhc3QtMVwiXG4gIHwgXCJtaWNyb3Bob25lLW1pYy1zb3VuZC1wb2RjYXN0XCJcbiAgfCBcIm1pbmltaXplLWFycm93LXNocmlua1wiXG4gIHwgXCJtaW5pbWl6ZS13aW5kb3ctbGF5b3V0XCJcbiAgfCBcIm1pbnVzLWNpcmNsZS1yZW1vdmVcIlxuICB8IFwibWludXMtbGFyZ2VcIlxuICB8IFwibWludXMtc21hbGxcIlxuICB8IFwibWludXMtc3F1YXJlLXJlbW92ZS1kZWxldGVcIlxuICB8IFwibW9uZXktYmlsbC1kb2xsYXItZXVyb1wiXG4gIHwgXCJtb25leS1oYW5kLWNvaW5zXCJcbiAgfCBcIm1vb24tZGFyay1tb2RlLW5pZ2h0XCJcbiAgfCBcIm1vb24tc3Rhci1uaWdodFwiXG4gIHwgXCJtb3VzZS0xXCJcbiAgfCBcIm1vdXNlLTItc2Nyb2xsLWRvd25cIlxuICB8IFwibW91c2UtMy1zY3JvbGwtdXBcIlxuICB8IFwibW92ZS1mb2N1c1wiXG4gIHwgXCJtb3ZlXCJcbiAgfCBcIm11bHRpLW1lZGlhLW1lZGlhLWltYWdlLWFuZC12aWRlb1wiXG4gIHwgXCJtdXRlLXNvdW5kLW9mZlwiXG4gIHwgXCJuZXdzLXBhcGVyXCJcbiAgfCBcIm5ld3NwYXBlci1uZXdzLXBhcGVyXCJcbiAgfCBcIm5mYy0yXCJcbiAgfCBcIm5mY1wiXG4gIHwgXCJuby1mbGFzaFwiXG4gIHwgXCJub3RlLWNhcmQtdGV4dFwiXG4gIHwgXCJub3RlLXN0aWNrZXJcIlxuICB8IFwibm90ZXNcIlxuICB8IFwibm90aWZpY2F0aW9uLWFsYXJtLWJlbGwtYWN0aXZpdHktYWxlcnRcIlxuICB8IFwibm90aWZpY2F0aW9uLWJlbGwtYWN0aXZpdHlcIlxuICB8IFwibm90aWZpY2F0aW9uLW9mZi1iZWxsLWFjdGl2aXR5XCJcbiAgfCBcIm5vdGlmaWNhdGlvbnMtYmFkZ2VcIlxuICB8IFwibnVtYmVyZWQtbGlzdFwiXG4gIHwgXCJvY3VsdXNcIlxuICB8IFwib3Blbi0yLW5ldy1saW5rLW9wZW4tbGluay1ib3gtYXJyb3dcIlxuICB8IFwib3Blbi1uZXctbGluay1vcGVuLWxpbmstYm94LWFycm93XCJcbiAgfCBcIm9wZW4tcXVvdGUtYmxvY2txdW90ZVwiXG4gIHwgXCJvcHQtYWx0LW9wdGlvbi1hbHQta2V5XCJcbiAgfCBcIm9wdC1vcHRpb24ta2V5XCJcbiAgfCBcIm9yYW5nZVwiXG4gIHwgXCJwYWNrYWdlLWRlbGl2ZXJ5LTJcIlxuICB8IFwicGFja2FnZS1kZWxpdmVyeVwiXG4gIHwgXCJwYWdlcy1ib2FyZHNcIlxuICB8IFwicGFub3JhbWEtdmlld1wiXG4gIHwgXCJwYXBlci1wbGFuZS1zZW5kXCJcbiAgfCBcInBhc3NrZXlzLXBhc3NrZXktcGFzc3dvcmRsZXNzXCJcbiAgfCBcInBhc3Nwb3J0LXZpc2FcIlxuICB8IFwicGFzc3dvcmQtbG9jay1wcm90ZWN0aW9uXCJcbiAgfCBcInBhdXNlXCJcbiAgfCBcInBlbmNpbC0yLXBlbi10b29sLXdyaXRlXCJcbiAgfCBcInBlbmNpbC1wZW4tdG9vbC13cml0ZVwiXG4gIHwgXCJwZW9wbGUtYmVoaW5kLXVzZXItYXZhdGFyLWdyb3VwLTNcIlxuICB8IFwicGVvcGxlLWNpcmNsZS11c2VyLXBlcnNvbi1hdmF0YXItMlwiXG4gIHwgXCJwZW9wbGUtY29weS1tZW1iZXJzXCJcbiAgfCBcInBlb3BsZS1saWtlLWxvdmUtaGVhcnRcIlxuICB8IFwicGVvcGxlLXNoYWRvdy11c2VyLWF2YXRhci1ncm91cC0xXCJcbiAgfCBcInBlb3BsZS1zaGFkb3ctdXNlci1hdmF0YXItZ3JvdXBcIlxuICB8IFwicGVvcGxlLXRvZ2V0aGVyLXVzZXItYXZhdGFyLWdyb3VwLTJcIlxuICB8IFwicGVvcGxlLXVzZXItcGVyc29uLWF2YXRhclwiXG4gIHwgXCJwZXJjZW50LXNhbGVzLTFcIlxuICB8IFwicGVyY2VudC1zYWxlc1wiXG4gIHwgXCJwZXJmb3JtYW5jZS1zcGVlZC1zY2FsZVwiXG4gIHwgXCJwaG9uZS1kZXZpY2UtaXBob25lLW1vYmlsZVwiXG4gIHwgXCJwaG9uZS1keW5hbWljLWlzbGFuZFwiXG4gIHwgXCJwaWN0dXJlLWluLXBpY3R1cmVcIlxuICB8IFwicGllLWNoYXJ0LTEtZ3JhcGgtY2hhcnQtc3RhdGlzdGljc1wiXG4gIHwgXCJwaWUtY2hhcnQtMi1ncmFwaC1jaGFydC1zdGF0aXN0aWNzXCJcbiAgfCBcInBpZ2d5LWJhbmstc2F2ZS1tb25leVwiXG4gIHwgXCJwaW4tY2lyY2xlLWxvY2F0aW9uXCJcbiAgfCBcInBpbi1mbGFnLWxvY2F0aW9uXCJcbiAgfCBcInBpbi1sb2NhdGlvbi0xXCJcbiAgfCBcInBpbi1sb2NhdGlvbi1ib29rbWFya1wiXG4gIHwgXCJwaW4tbG9jYXRpb25cIlxuICB8IFwicGluY2hcIlxuICB8IFwicGl6emFcIlxuICB8IFwicGxhY2Vob2xkZXItZ2VuZXJhdGVcIlxuICB8IFwicGxheS1jaXJjbGVcIlxuICB8IFwicGxheS1nb1wiXG4gIHwgXCJwbGF5LWxpc3RcIlxuICB8IFwicGx1cy1hZGQtZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwicGx1cy1hZGQtbGFyZ2VcIlxuICB8IFwicGx1cy1hZGQtc21hbGxcIlxuICB8IFwicGx1cy1jaXJjbGUtYWRkXCJcbiAgfCBcInBsdXMtbGluZXMtYWRkLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCJcbiAgfCBcInBsdXMtc3F1YXJlLWFkZFwiXG4gIHwgXCJwb2ludGVyLWhhbmRcIlxuICB8IFwicG9vcC1zcGFtXCJcbiAgfCBcInBvcHNpY2xlLWItaWNlLWNyZWFtLXN3ZWV0c1wiXG4gIHwgXCJwb3BzaWNsZS1pY2UtY3JlYW0tc3dlZXRzXCJcbiAgfCBcInBvc3RjYXJkLWNhcmQtbmV3c1wiXG4gIHwgXCJwb3N0cy1ub3RlYm9vay1za2V0Y2hib29rXCJcbiAgfCBcInBvdW5kLWN1cnJlbmN5LW1vbmV5LWNvaW4tZ2JwXCJcbiAgfCBcInByaW50ZXItcHJpbnRcIlxuICB8IFwicHJvY2Vzc29yLWNoaXBcIlxuICB8IFwicHVsbC1yZXF1ZXN0XCJcbiAgfCBcInFtMy1yb29tLXRyYW5zZm9ybS14eXotM2RcIlxuICB8IFwicXItY29kZVwiXG4gIHwgXCJxdWVzdGlvbm1hcmstZmFxLWhlbHAtcXVlc3Rpb25haXJlXCJcbiAgfCBcInJhZGFyLWxvY2F0aW9uLXNlYXJjaFwiXG4gIHwgXCJyYWluYm93XCJcbiAgfCBcInJhaW55LXJhaW5cIlxuICB8IFwicmFpc2luZy1oYW5kLTQtZmluZ2VyLWhleS1oZWxsb1wiXG4gIHwgXCJyYWlzaW5nLWhhbmQtNS1maW5nZXItaGV5LWhlbGxvXCJcbiAgfCBcInJlYWRpbmctbGlzdC1nbGFzc2VzLXN0ZXZlLWpvYnNcIlxuICB8IFwicmVhci1mcm9udC1jYW1lcmEtY2FtLWNoYW5nZS1sZW5zXCJcbiAgfCBcInJlY2VpcHQtdGlja2V0XCJcbiAgfCBcInJlY29yZC12b2ljZW1haWwtYmFuZC10YXBlXCJcbiAgfCBcInJlY29yZFwiXG4gIHwgXCJyZWRvLWZvcndhcmQtMVwiXG4gIHwgXCJyZWRvLWZvcndhcmRcIlxuICB8IFwicmVmcmVzaC1yZW5ld1wiXG4gIHwgXCJyZW1vdmUtY29sdW1uLWRlbGV0ZS1jb2x1bW5cIlxuICB8IFwicmVtb3ZlLXBlb3BsZS1yZW1vdmUtdXNlci1yZW1vdmUtcGVyc29uLTJcIlxuICB8IFwicmVtb3ZlLXBlb3BsZS1yZW1vdmUtdXNlci1yZW1vdmUtcGVyc29uXCJcbiAgfCBcInJlbW92ZS1yb3ctZGVsZXRlLXJvd1wiXG4gIHwgXCJyZXBlYXQtMi1yZXR3ZWV0XCJcbiAgfCBcInJlcGVhdC1yZXR3ZWV0XCJcbiAgfCBcInJlcGVhdFwiXG4gIHwgXCJyZXNjdWUtcmluZy1zd2ltLWJveWxlLWhlbHAtc3VwcG9ydFwiXG4gIHwgXCJyZXNpemUtYmlnLWJveC1hcnJvd1wiXG4gIHwgXCJyZXNpemUtc21hbGwtYm94LWFycm93XCJcbiAgfCBcInJld2luZC0xMHNcIlxuICB8IFwicmV3aW5kLTE1c1wiXG4gIHwgXCJyZXdpbmQtMzBzXCJcbiAgfCBcInJld2luZC01c1wiXG4gIHwgXCJyZXdpbmQtc3ltYm9sXCJcbiAgfCBcInJpZ2h0LWdhbWVwYWQtYmFzZS1jb250cm9sbHMtZ2FtZS1qb3lzdGlja1wiXG4gIHwgXCJyaWdodC1nYW1lcGFkLWJhc2Utcm91bmQtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIlxuICB8IFwicm9ja2V0LXN0YXJ0dXAtbGF1bmNoXCJcbiAgfCBcInJvdGF0ZS0wMi1yZXBlYXQtcmVmcmVzaFwiXG4gIHwgXCJyb3RhdGUtY2xvY2t3aXNlLXJvdGF0ZVwiXG4gIHwgXCJyb3RhdGUtY291bnRlcmNsb2Nrd2lzZS1yb3RhdGVcIlxuICB8IFwicm90YXRlLXJlcGVhdC1yZWZyZXNoXCJcbiAgfCBcInJvdGF0ZS1yb3RhdGlvbi14LWF4aXNcIlxuICB8IFwicm93cy13aWRlLXJvd3Mtd2lkZVwiXG4gIHwgXCJydWxlclwiXG4gIHwgXCJydWxlcy1kaXJlY3Rpb24tc3BsaXRcIlxuICB8IFwic2FkLWVtb2ppLXVuaGFwcHlcIlxuICB8IFwic2FuZGJveC1zYWZlXCJcbiAgfCBcInNjYW4tZm9jdXMtMVwiXG4gIHwgXCJzY2FuLWZvY3VzXCJcbiAgfCBcInNjaG9vbC1iaWctYnVpbGRpbmdcIlxuICB8IFwic2Npc3NvcnMtMi1jdXRcIlxuICB8IFwic2Npc3NvcnMtY3V0XCJcbiAgfCBcInNkLWNhcmQtbWVtb3J5LXN0aWNrXCJcbiAgfCBcInNlYXJjaC0yLW1hZ25pZnlpbmctZ2xhc3NcIlxuICB8IFwic2VhcmNoLWxpbmVzLW1hZ25pZmllci1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiXG4gIHwgXCJzZWFyY2gtbWFnbmlmaWVyLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCJcbiAgfCBcInNlYXJjaC1tYWduaWZ5aW5nLWdsYXNzXCJcbiAgfCBcInNlYXJjaC1tZW51XCJcbiAgfCBcInNlYXJjaC1wYWdlLWZpbmRcIlxuICB8IFwic2VjdXJlZC1saW5lcy1sb2NrZWQtc2VjdXJpdHktZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwic2VjdXJlZC1sb2NrZWQtc2VjdXJpdHktZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIlxuICB8IFwic2VuZC1lbWFpbC1wYXBlci1wbGFuZS1hcnJvd1wiXG4gIHwgXCJzZXJ2ZXItMS1zdG9yYWdlLWRhdGEtY29pbnMtbW9uZXlcIlxuICB8IFwic2VydmVyLTItc3RvcmFnZS1kYXRhLWNvaW5zLW1vbmV5XCJcbiAgfCBcInNlcnZlci1kYXRhLXN0b3JhZ2VcIlxuICB8IFwic2V0dGluZ3MtMS1zd2l0Y2gtcHJlZmVyZW5jZXNcIlxuICB8IFwic2V0dGluZ3MtMi1nZWFyLXByZWZlcmVuY2VzXCJcbiAgfCBcInNldHRpbmdzLTMtZ2Vhci1wcmVmZXJlbmNlcy0xXCJcbiAgfCBcInNldHRpbmdzLTMtZ2Vhci1wcmVmZXJlbmNlc1wiXG4gIHwgXCJzZXR0aW5ncy02LXNsaWRlci10aHJlZVwiXG4gIHwgXCJzZXR0aW5ncy03LWtub2Itdm9sdW1lLW9uLW9mZlwiXG4gIHwgXCJzZXR0aW5ncy04LXN3aXRjaC0yXCJcbiAgfCBcInNldHRpbmdzLXNsaWRlci1ob3JcIlxuICB8IFwic2V0dGluZ3Mtc2xpZGVyLXZlci1zbGlkZXItdHdvXCJcbiAgfCBcInNoYWthLTItY2FsbC1tZS1oYW5nLXRlblwiXG4gIHwgXCJzaGFrYS1jYWxsLW1lLWhhbmctdGVuXCJcbiAgfCBcInNoYXJlLTItYXJyb3dcIlxuICB8IFwic2hhcmUtYXJyb3ctbG9naW5cIlxuICB8IFwic2hhcmUtYXJyb3dcIlxuICB8IFwic2hhcmUtc2NyZWVuLXNjcmVlbi1zaGFyaW5nXCJcbiAgfCBcInNoaWVsZC0yLWNoZWNrXCJcbiAgfCBcInNoaWVsZC1icmVhay1ub3Qtc2VjdXJlXCJcbiAgfCBcInNoaWVsZC1jaGVjay1zZWN1cml0eS1wcm90ZWN0aW9uXCJcbiAgfCBcInNoaWVsZC1jcm9zc2VkLXNlY3VyaXR5LXByb3RlY3Rpb25cIlxuICB8IFwic2hpZWxkLXByb3RlY3Qtc2VjdXJpdHktY2hlY2tcIlxuICB8IFwic2hpZWxkLXNlY3VyaXR5LXByb3RlY3Rpb25cIlxuICB8IFwic2hpZnRcIlxuICB8IFwic2hpcC1jaGFuZ2Vsb2dcIlxuICB8IFwic2hvdy1leWUtc2VlLXJldmVhbC1sb29rLXZpc2libGVcIlxuICB8IFwic2hyZWRkZXItcGVybWFuZW50bHlcIlxuICB8IFwic2h1ZmZsZS1yYW5kb21cIlxuICB8IFwic2lkZWJhci1tZW51LWxpc3Qtd2luZG93XCJcbiAgfCBcInNpZ24tZGlyZWN0aW9uLXJvdXRlXCJcbiAgfCBcInNpZ25hdHVyZS1wZW5jaWwtcGVuY2lsLXBlbi13cml0ZS1kcmF3XCJcbiAgfCBcInNpZ25hdHVyZS1zaWduXCJcbiAgfCBcInNsaWRlcy1wYWdlc1wiXG4gIHwgXCJzbWlsZS1lbW9qaVwiXG4gIHwgXCJzbWlsZXktZmFjZS1lbW9qaS1zbWlsZVwiXG4gIHwgXCJzbWlsaW5nLWZhY2UtaGVhcnQtZXllc1wiXG4gIHwgXCJzbm93LWNsb3VkXCJcbiAgfCBcInNub3ctZmxha2VzLWZyZWV6ZS1mcm96ZW5cIlxuICB8IFwic29jY2VyLWZvb3RiYWxsLW1sc1wiXG4gIHwgXCJzb3J0LTEtc3dpdGNoLWhvcml6b250YWxcIlxuICB8IFwic29ydC0xLXN3aXRjaC12ZXJ0aWNhbFwiXG4gIHwgXCJzb3J0LTItc3dpdGNoLWhvcml6b25hdGxcIlxuICB8IFwic29ydC0yLXN3aXRjaC12ZXJ0aWNhbFwiXG4gIHwgXCJzcGFjZS1zdGFyXCJcbiAgfCBcInNwYXRpYWwtc3BhdGlhbC1jYXB0dXJlXCJcbiAgfCBcInNwZWFrZXItbXVzaWMtc291bmRcIlxuICB8IFwic3F1YXJlLXBsYWNlaG9sZGVyXCJcbiAgfCBcInN0YXBsZS1ub3RlYm9vay1jb3ZlclwiXG4gIHwgXCJzdGFyLTItbWFnaWMtc3BhcmtsZVwiXG4gIHwgXCJzdGFyLWFpLXNwYXJrbGVcIlxuICB8IFwic3Rhci1mYXZvcml0ZS1hd2FyZFwiXG4gIHwgXCJzdG9ja3NcIlxuICB8IFwic3RvcFwiXG4gIHwgXCJzdG9wcC1jaXJjbGVcIlxuICB8IFwic3RvcHdhdGNoLXRyYWNrXCJcbiAgfCBcInN0b3JhZ2UtaGRkLXNzZFwiXG4gIHwgXCJzdG9yZS1zaG9wLWJ1c2luZXNzLTFcIlxuICB8IFwic3RvcmUtc2hvcC1idXNpbmVzc1wiXG4gIHwgXCJzdHJlYW1pbmctbGl2ZS1zdHJlYW1cIlxuICB8IFwic3RyaWtlLXRocm91Z2hcIlxuICB8IFwic3R1ZGlvLWRpc3BsYXktdGh1bmRlcmJvbHRcIlxuICB8IFwic3VpdGNhc2UtbHVnZ2FnZS1jYXNlXCJcbiAgfCBcInN1bi1kb3duXCJcbiAgfCBcInN1bi1saWdodC1tb2RlLWRheVwiXG4gIHwgXCJzdW4tdXBcIlxuICB8IFwic3VucmlzZVwiXG4gIHwgXCJzdW5zZXRcIlxuICB8IFwic3VwcG9ydFwiXG4gIHwgXCJzdXJwcmlzZS1idW5ueS1oYXQtbWFnaWMtaGF0XCJcbiAgfCBcInN5bmMtY2xvdWQtc3luY1wiXG4gIHwgXCJ0YWJsZS1zcHJlZWRzaGVldC1jaGFydFwiXG4gIHwgXCJ0YWctc2FsZVwiXG4gIHwgXCJ0YXBlXCJcbiAgfCBcInRhcmdldC0xLXpvb21cIlxuICB8IFwidGFyZ2V0LTItem9vbVwiXG4gIHwgXCJ0YXJnZXQtYXJyb3ctZ29hbC1haW1cIlxuICB8IFwidGF4LWRpc2NvdW50XCJcbiAgfCBcInRlbGVwaG9uZS1waG9uZS1jb250YWN0XCJcbiAgfCBcInRlbGV2aXNpb24tMS10di1tb25pdG9yLXZpZGVvLXNjcmVlbi1kaXNwbGF5XCJcbiAgfCBcInRlbGV2aXNpb24tMi10di1tb25pdG9yLXZpZGVvLXNjcmVlbi1kaXNwbGF5XCJcbiAgfCBcInRlbm5pc1wiXG4gIHwgXCJ0ZXN0LXR1YmVcIlxuICB8IFwidGV4dC0yLXQtMlwiXG4gIHwgXCJ0ZXh0LWluZGVudC1sZWZ0XCJcbiAgfCBcInRleHQtaW5kZW50LXJpZ2h0XCJcbiAgfCBcInRleHQtaW5kaWNhdG9yXCJcbiAgfCBcInRleHQtc2l6ZVwiXG4gIHwgXCJ0ZXh0LXRcIlxuICB8IFwidGh1bWJzLWRvd24tdGh1bWItaGFuZC1uby1jb250cmFcIlxuICB8IFwidGh1bWJzLXVwLXRodW1iLWhhbmQteWVzLXByb1wiXG4gIHwgXCJ0aWNrZXQtYWRtaXQtdmlwXCJcbiAgfCBcInRpdGxlLWNhc2VcIlxuICB8IFwidG9hc3QtYnJlYWtmZXN0XCJcbiAgfCBcInRvaWxldC1wYXBlci13aXBlXCJcbiAgfCBcInRvb2xib3hcIlxuICB8IFwidHJhZGUtdHJhZGluZ1wiXG4gIHwgXCJ0cmFuc2NyaXB0aW9uXCJcbiAgfCBcInRyZWVcIlxuICB8IFwidHJlbmRpbmctMS10cmVuZHNcIlxuICB8IFwidHJlbmRpbmctMi10cmVuZHNcIlxuICB8IFwidHJlbmRpbmctMy10cmVuZHNcIlxuICB8IFwidHJlbmRpbmctNC1jaGFydC1hbmFseXRpY3NcIlxuICB8IFwidHJlbmRpbmctNC1jaGFydFwiXG4gIHwgXCJ0cm9waHktd2luLWNoYW1waW9uXCJcbiAgfCBcInRydWNrLWRlbGl2ZXJ5XCJcbiAgfCBcInR3by1kaWNlLWdhbWUtcmFuZG9tXCJcbiAgfCBcInVmby1iZWFtXCJcbiAgfCBcInVtYnJlbGxhLXNlY3VyaXR5XCJcbiAgfCBcInVuZGVybGluZVwiXG4gIHwgXCJ1bmRvLWJhY2stYm90dG9tXCJcbiAgfCBcInVuZG8tYmFjay10b3BcIlxuICB8IFwidW5kb2NrLWJveC1hcnJvd1wiXG4gIHwgXCJ1bmxvY2tlZC11bmxvY2stcHJpdmF0ZVwiXG4gIHwgXCJ1cC1nYW1lcGFkLWJhc2UtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIlxuICB8IFwidXAtZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCJcbiAgfCBcInVwbG9hZC1zaGFyZVwiXG4gIHwgXCJ1c2ItY29ubmVjdGlvbi1jb25uZWN0LXNhdmUtZGF0YVwiXG4gIHwgXCJ2aWRlby1jYW1lcmEtMlwiXG4gIHwgXCJ2aWRlby1jYW1lcmEtbW92aWUtcGxheVwiXG4gIHwgXCJ2aWRlby1jbGFwcGVyYm9hcmRcIlxuICB8IFwidmlkZW8tY2xpcC1maWxtLW1vdmllXCJcbiAgfCBcInZpc2lvbi1wcm8tYXBwLXdpbmRvd1wiXG4gIHwgXCJ2aXNpb24tcHJvLWdvZ2dsZXNcIlxuICB8IFwidmlzaXQtcGFnZS1vcGVuLWFwcFwiXG4gIHwgXCJ2b2ljZVwiXG4gIHwgXCJ2b2xsZXliYWxsXCJcbiAgfCBcInZvbHVtZS1kb3duLXNwZWFrZXItbG91ZC1zb3VuZC1vbi1tdXNpY1wiXG4gIHwgXCJ2b2x1bWUtZnVsbC1zcGVha2VyLWxvdWQtc291bmQtb24tbXVzaWNcIlxuICB8IFwidm9sdW1lLWhhbGYtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCJcbiAgfCBcInZvbHVtZS1taW5pbXVtLXNwZWFrZXItbG91ZC1zb3VuZC1vbi1tdXNpY1wiXG4gIHwgXCJ2b2x1bWUtb2ZmLXNwZWFrZXItbG91ZC1zb3VuZC1vbi1tdXNpYy0xXCJcbiAgfCBcInZvbHVtZS1vZmYtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCJcbiAgfCBcIndhbGxldC0xXCJcbiAgfCBcIndhbGxldC0yXCJcbiAgfCBcIndhbGxldFwiXG4gIHwgXCJ3YXRjaC0xLWNsb2NrLXRpbWUtMVwiXG4gIHwgXCJ3YXRjaC0xLWNsb2NrLXRpbWVcIlxuICB8IFwid2ViMy1jcnlwdG8tc3BhY2VcIlxuICB8IFwid2ViY2FtLWNhbWVyYS12aWV3XCJcbiAgfCBcIndoaXNwZXItYXBpXCJcbiAgfCBcIndoaXRlYm9hcmQtYXJ0Ym9hcmRcIlxuICB8IFwid2lmaS0yLXNwb3Qtc2lnbmFsLWhvdC1zcG90XCJcbiAgfCBcIndpZmktc3BvdC1zaWduYWwtaG90LXNwb3RcIlxuICB8IFwid2luZHktMS13aW5kXCJcbiAgfCBcIndvcmxkLWdsb2J1cy1pbnRlcm5ldC13ZWJcIlxuICB8IFwid3JpdGUtYnJpZWZcIlxuICB8IFwid3JpdGUtZWRpdC1saXN0LWxpc3RcIlxuICB8IFwieWVuLWN1cnJlbmN5LW1vbmV5LWNvaW5cIlxuICB8IFwiemFwLWxpZ2h0bmluZy1mbGFzaFwiXG4gIHwgXCJ6aXAtcmFyLWNvbXByZXNzZWQtYXJjaGl2ZVwiXG4gIHwgXCJ6b29tLXNlYXJjaC1tYWduaWZ5aW5nLWdsYXNzLTFcIlxuICB8IFwiem9vbS1zZWFyY2gtbWFnbmlmeWluZy1nbGFzc1wiO1xuXG5leHBvcnQgdHlwZSBJY29uc0tleSA9XG4gIHwgXCJpNEtcIlxuICB8IFwiQWNjZXNzaWJpbGl0eUExMXlcIlxuICB8IFwiQWNjZXNzaWJpbGl0eUV5ZUExMXlcIlxuICB8IFwiQWN0aXZpdHlOb3RpZmljYXRpb25QdWxzZUhlYXJ0YmVhdEJlYXRcIlxuICB8IFwiQWRkQ29sdW1uQWRkUGFnZVwiXG4gIHwgXCJBZGRQYWdlc0FkZEJvYXJkc1wiXG4gIHwgXCJBZGRQYWdlc1dpZGVBZGRCb2FyZHNcIlxuICB8IFwiQWRkUGVvcGxlQWRkVXNlckFkZFBlcnNvbl8yXCJcbiAgfCBcIkFkZFBlb3BsZUFkZFVzZXJBZGRQZXJzb25cIlxuICB8IFwiQWRkUmVhY3Rpb25SZWFjdGlvbkVtb2ppXCJcbiAgfCBcIkFkZFJvd0FkZFJvd3NcIlxuICB8IFwiQWRkU2hlZXRBZGRDYW52YXNBZGRQYWdlVmVydGljYWxcIlxuICB8IFwiQWRkU2xpZGVBZGRDYW52YXNBZGRQYWdlSG9yaXpvbnRhbFwiXG4gIHwgXCJBZGRTbGlkZUFkZFBhZ2VBZGRDb3B5XCJcbiAgfCBcIkFkZGVkUGVvcGxlQWRkVXNlckFkZGVkUGVyc29uXCJcbiAgfCBcIkFkcmVzc1BhY2thZ2VEZWxpdmVyeVwiXG4gIHwgXCJBaV8yU3RhcnNfMTgwU3BhcmtsZXNcIlxuICB8IFwiQWlfMlN0YXJzU3BhcmtsZXNcIlxuICB8IFwiQWlfM1N0YXJzU3BhcmtsZXNcIlxuICB8IFwiQWlBdmF0YXJHZW5lcmF0ZWRBdmF0YXJQcm9maWxlQWlNYWdpY0F2YXRhclwiXG4gIHwgXCJBaUltYWdlc01pZGpvdXJuZXlBaUdlbmVyYXRlZFwiXG4gIHwgXCJBaVRleHRUZXh0R2VuZXJhdGlvblwiXG4gIHwgXCJBaXJwbGF5XCJcbiAgfCBcIkFpcnBvZENhc2VBaXJwb2RzXCJcbiAgfCBcIkFsYnVtc1wiXG4gIHwgXCJBbGlnbkJvdHRvbV8yQXJyb3dfMVwiXG4gIHwgXCJBbGlnbkJvdHRvbV8yQXJyb3dcIlxuICB8IFwiQWxpZ25Cb3R0b21BbGlnbm1lbnRcIlxuICB8IFwiQWxpZ25Cb3R0b21BcnJvd1wiXG4gIHwgXCJBbGlnbkxlZnRfMkFycm93XCJcbiAgfCBcIkFsaWduTGVmdEFsaWdubWVudFwiXG4gIHwgXCJBbGlnbkxlZnRBcnJvd1wiXG4gIHwgXCJBbGlnblJpZ2h0XzJBcnJvd1wiXG4gIHwgXCJBbGlnblJpZ2h0QWxpZ25tZW50XCJcbiAgfCBcIkFsaWduUmlnaHRBcnJvd1wiXG4gIHwgXCJBbGlnblRvcEFsaWdubWVudFwiXG4gIHwgXCJBbGlnblRvcEFycm93XCJcbiAgfCBcIkFsaWdubWVudEJhclwiXG4gIHwgXCJBbGlnbm1lbnRDZW50ZXJcIlxuICB8IFwiQWxpZ25tZW50SnVzdGlmeVwiXG4gIHwgXCJBbGlnbm1lbnRMZWZ0XCJcbiAgfCBcIkFsaWdubWVudFJpZ2h0XCJcbiAgfCBcIkFsdEFsdFRleHRBbHRUYWdcIlxuICB8IFwiQWx0VGV4dFwiXG4gIHwgXCJBbWVyaWNhbkZvb3RiYWxsTmZsXCJcbiAgfCBcIkFuY2hvcl8xXCJcbiAgfCBcIkFuY2hvcl8yXCJcbiAgfCBcIkFubm90YXRpb25CdWJibGVBZGRQbHVzXCJcbiAgfCBcIkFubm90YXRpb25CdWJibGVDaGVja1wiXG4gIHwgXCJBbm5vdGF0aW9uQnViYmxlWENsb3NlRGVsZXRlXCJcbiAgfCBcIkFub255bW91c0Fub255bUhpZGRlblwiXG4gIHwgXCJBcHBsZUZydWl0XCJcbiAgfCBcIkFyQXVnbWVudGVkUmVhbGl0eV8zZFZpZXdDdWJlXzFcIlxuICB8IFwiQXJBdWdtZW50ZWRSZWFsaXR5XzNkVmlld0N1YmVfMlwiXG4gIHwgXCJBckF1Z21lbnRlZFJlYWxpdHlfM2RWaWV3Q3ViZVwiXG4gIHwgXCJBckF1Z21lbnRlZFJlYWxpdHlDYXJkQm94XzNkVmlydHVhbFJlYWxpdHlWclwiXG4gIHwgXCJBckF1Z21lbnRlZFJlYWxpdHlTY2FuXzNkVmlld0N1YmVcIlxuICB8IFwiQXJBdWdtZW50ZWRSZWFsaXR5U2Nhbl8zZFwiXG4gIHwgXCJBckF1Z3VtZW50UmVhbGl0eVZyVmlydHVhbFJlYWxpdHlcIlxuICB8IFwiQXJjQnJvd3NlckZhY2VcIlxuICB8IFwiQXJjaGl2ZUJveEluYm94RmlsZVwiXG4gIHwgXCJBcmNoaXZlRm9sZGVyQm94XCJcbiAgfCBcIkFyb3VuZFNwYXRpYWxcIlxuICB8IFwiQXJyb3dCb3R0b21DaXJjbGVcIlxuICB8IFwiQXJyb3dCb3R0b21MZWZ0XCJcbiAgfCBcIkFycm93Qm90dG9tUmlnaHRcIlxuICB8IFwiQXJyb3dCb3R0b21cIlxuICB8IFwiQXJyb3dFeHBhbmRIXCJcbiAgfCBcIkFycm93RXhwYW5kVlwiXG4gIHwgXCJBcnJvd0xlZnRDaXJjbGVcIlxuICB8IFwiQXJyb3dMZWZ0XCJcbiAgfCBcIkFycm93UGF0aERvd25cIlxuICB8IFwiQXJyb3dQYXRoTGVmdFwiXG4gIHwgXCJBcnJvd1BhdGhSaWdodFwiXG4gIHwgXCJBcnJvd1BhdGhVcFwiXG4gIHwgXCJBcnJvd1JpZ2h0Q2lyY2xlXCJcbiAgfCBcIkFycm93UmlnaHRcIlxuICB8IFwiQXJyb3dUb3BDaXJjbGVcIlxuICB8IFwiQXJyb3dUb3BMZWZ0XCJcbiAgfCBcIkFycm93VG9wUmlnaHRcIlxuICB8IFwiQXJyb3dUb3BcIlxuICB8IFwiQXJyb3dUcmlhbmdsZUJvdHRvbVwiXG4gIHwgXCJBcnJvd1RyaWFuZ2xlTGVmdFwiXG4gIHwgXCJBcnJvd1RyaWFuZ2xlUmlnaHRcIlxuICB8IFwiQXJyb3dUcmlhbmdsZVRvcFwiXG4gIHwgXCJBc3Rlcmlza1BsYWNlaG9sZGVyXCJcbiAgfCBcIkF0XCJcbiAgfCBcIkF0dGFjaG1lbnRfMkF0dGFjaFBhcGVyQ2xpcFwiXG4gIHwgXCJBdHRhY2htZW50QXR0YWNoRG9jdW1lbnRBdHRhY2hlbWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJBdHRhY2htZW50QXR0YWNoUGFwZXJDbGlwXCJcbiAgfCBcIkF1ZGlvTXVzaWNQbGF5bGlzdE11c2ljYWxOb3RlXCJcbiAgfCBcIkF1dG9GbGFzaFwiXG4gIHwgXCJBdXRvU2l6ZUF1dG9tYXRpY1NpemVQYWdlUGFnZVNpemVcIlxuICB8IFwiQXZvY2Fkb1wiXG4gIHwgXCJCYWNrXCJcbiAgfCBcIkJhY2t3YXJkRGVsZXRlUmVtb3ZlS2V5XCJcbiAgfCBcIkJhZGdlVmVyaWZpZWRBd2FyZFwiXG4gIHwgXCJCYWdfMkx1Z2dhZ2VCdWdnYWdlXCJcbiAgfCBcIkJhZ18yU2hvcHBpbmdcIlxuICB8IFwiQmFnTHVnZ2FnZUJ1Z2dhZ2VcIlxuICB8IFwiQmFnU2hvcHBpbmdcIlxuICB8IFwiQmFua18xXCJcbiAgfCBcIkJhbmtcIlxuICB8IFwiQmFyY29kZVNjYW5cIlxuICB8IFwiQmFzZWJhbGxcIlxuICB8IFwiQmFza2V0XzFDYXJ0U2hvcHBpbmdcIlxuICB8IFwiQmFza2V0XzJTaG9wcGluZ0JhZ1wiXG4gIHwgXCJCYXNrZXRiYWxsTmJhXCJcbiAgfCBcIkJhdHRlcnlFbXB0eVBvd2VyXCJcbiAgfCBcIkJhdHRlcnlFcnJvclBvd2VyXCJcbiAgfCBcIkJhdHRlcnlGdWxsUG93ZXJcIlxuICB8IFwiQmF0dGVyeUxvYWRpbmdQb3dlclwiXG4gIHwgXCJCYXR0ZXJ5TG93UG93ZXJcIlxuICB8IFwiQmF0dGVyeU1lZGl1bVBvd2VyXCJcbiAgfCBcIkJlbGxDb25jaWVyZ2VcIlxuICB8IFwiQmVsbE5vdGlmeVwiXG4gIHwgXCJCZXppZXJBZGRQbHVzVmVjdG9yTm9kZXNcIlxuICB8IFwiQmV6aWVyQ2lyY2xlVmVjdG9yTm9kZXNcIlxuICB8IFwiQmV6aWVyQ3VydmVCZXppZXJWZWN0b3JcIlxuICB8IFwiQmV6aWVyQ3VydmVzQW5pbWF0aW9uTW90aW9uU3ByaW5nXCJcbiAgfCBcIkJlemllclJlbW92ZURlbGV0ZU1pbnVzVmVjdG9yTm9kZXNcIlxuICB8IFwiQmV6aWVyVmVjdG9yTm9kZXNFZGl0XzFcIlxuICB8IFwiQmV6aWVyVmVjdG9yTm9kZXNFZGl0XCJcbiAgfCBcIkJlemllclZlY3Rvck5vZGVzXCJcbiAgfCBcIkJpbGxQdXJjaGFjZUludm9pY2VfMVwiXG4gIHwgXCJCaWxsUHVyY2hhY2VJbnZvaWNlXCJcbiAgfCBcIkJpcnRoZGF5Q2FrZVwiXG4gIHwgXCJCbG9ja0Fkc1wiXG4gIHwgXCJCbG9ja1wiXG4gIHwgXCJCbHVldG9vdGhcIlxuICB8IFwiQm5vb3plQmVsbFwiXG4gIHwgXCJCb2xkXCJcbiAgfCBcIkJvbWJCb29tXCJcbiAgfCBcIkJvb2tfMkd1aWRlSW5mb0ZhcVwiXG4gIHwgXCJCb29rR3VpZGVJbmZvRmFxXCJcbiAgfCBcIkJvb2ttYXJrQmFubmVyRmxhZ1RhZ1wiXG4gIHwgXCJCb29rbWFya0NoZWNrQWRkQ2hlY2tcIlxuICB8IFwiQm9va21hcmtEZWxldGVSZW1vdmVCYW5uZXJGbGFnVGFnXCJcbiAgfCBcIkJvb2ttYXJrUGx1c0Jhbm5lckZsYWdUYWdcIlxuICB8IFwiQm90XCJcbiAgfCBcIkJyYWNrZXRzXzFcIlxuICB8IFwiQnJhY2tldHNfMlwiXG4gIHwgXCJCcmFpbkFpVGhpbmtpbmdcIlxuICB8IFwiQnJhbmNoZXNcIlxuICB8IFwiQnJva2VuTGlua1wiXG4gIHwgXCJCcm9vbUJydXNoXCJcbiAgfCBcIkJyb3dzZXJfMldpbmRvd0FwcERlc2t0b3BcIlxuICB8IFwiQnJvd3NlcldpbmRvd0FwcERlc2t0b3BcIlxuICB8IFwiQnJ1c2hDb2xvclwiXG4gIHwgXCJCdWJibGVfMkFubm90YXRpb25NZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZV8yTWVzc2FnZVwiXG4gIHwgXCJCdWJibGVfM01lc3NhZ2VcIlxuICB8IFwiQnViYmxlXzRBbm5vdGF0aW9uTWVzc2FnZVwiXG4gIHwgXCJCdWJibGVfNUFubm90YXRpb25NZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZV81TWVzc2FnZVwiXG4gIHwgXCJCdWJibGVfNkFubm90YXRpb25NZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZV82TWVzc2FnZVwiXG4gIHwgXCJCdWJibGVfN0Fubm90YXRpb25NZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZV83TWVzc2FnZVwiXG4gIHwgXCJCdWJibGVfN1RleHRNZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZUFubm90YXRpb25NZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VBbm5vdGF0aW9uRXhjbGFtYXRpb25NYXJrQWxlcnRUb29sdGlwXCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VBbm5vdGF0aW9uSW5mb1Rvb2x0aXBcIlxuICB8IFwiQnViYmxlTWVzc2FnZURvdHNUaHJlZURvdFwiXG4gIHwgXCJCdWJibGVNZXNzYWdlTGlrZUhlYXJ0XCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VRdWVzdGlvbk1hcmtUb29sdGlwXCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VTcGFya2xlQWlUb29sdGlwXCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VUZXh0XCJcbiAgfCBcIkJ1YmJsZU1lc3NhZ2VcIlxuICB8IFwiQnViYmxlTm90aWZpY2F0aW9uQmFkZ2VNZXNzYWdlXCJcbiAgfCBcIkJ1YmJsZXNfMk1lc3NhZ2VzQ2hhdENvbW11bmljYXRlXCJcbiAgfCBcIkJ1YmJsZXNcIlxuICB8IFwiQnVja2V0VHJhc2hDYW5cIlxuICB8IFwiQnVnXzFJc3N1ZVwiXG4gIHwgXCJCdWdJc3N1ZVwiXG4gIHwgXCJCdWlsZGluZ3NcIlxuICB8IFwiQnVsbGV0TGlzdFwiXG4gIHwgXCJCdXJnZXJIYW1idXJnZXJDaGVlc2VidXJnZXJTYW5kd2ljaFwiXG4gIHwgXCJCdXJnZXJIYW1idXJnZXJTYW5kd2ljaFwiXG4gIHwgXCJCdXNpbmVzc1Nob3BTdG9yZVwiXG4gIHwgXCJDYWxjdWxhdG9yXCJcbiAgfCBcIkNhbGVuZGFyXzFcIlxuICB8IFwiQ2FsZW5kYXJfMlwiXG4gIHwgXCJDYWxlbmRhckFkZEluc2VydERhdGVcIlxuICB8IFwiQ2FsZW5kYXJCXCJcbiAgfCBcIkNhbGVuZGFyQ2hlY2tDaGVja21hcmtBY2NlcHRcIlxuICB8IFwiQ2FsZW5kYXJDaGVja1wiXG4gIHwgXCJDYWxlbmRhckRhdGVTZWFyY2hNYWduaWZpZXJHbGFzc1wiXG4gIHwgXCJDYWxlbmRhckRheXNcIlxuICB8IFwiQ2FsZW5kYXJFZGl0RGF0ZUVkaXRcIlxuICB8IFwiQ2FsZW5kYXJUaW1lQ2xvY2tcIlxuICB8IFwiQ2FsZW5kYXJYQ2xvc2VSZW1vdmVEZWxldGVcIlxuICB8IFwiQ2FsZW5kZXJBZGRcIlxuICB8IFwiQ2FsZW5kZXJSZW1vdmVcIlxuICB8IFwiQ2FsbEluY29taW5nXCJcbiAgfCBcIkNhbGxPdXRnb2luZ1wiXG4gIHwgXCJDYWxsUGhvbmVcIlxuICB8IFwiQ2FtZXJhXzFPZmZQaWN0dXJlSW1hZ2VDYW1cIlxuICB8IFwiQ2FtZXJhXzFQaWN0dXJlSW1hZ2VDYW1cIlxuICB8IFwiQ2FtZXJhXzJQaWN0dXJlSW1hZ2VDYW1cIlxuICB8IFwiQ2FtZXJhXzNQaWN0dXJlSW1hZ2VDYW1cIlxuICB8IFwiQ2FtZXJhXzRBY3Rpb25DYW1Hb1Byb1wiXG4gIHwgXCJDYW1lcmFQaWN0dXJlSW1hZ2VDYW1DbG9zZUNyb3NzT2ZmXzFcIlxuICB8IFwiQ2FtZXJhUGljdHVyZUltYWdlQ2FtQ2xvc2VDcm9zc09mZlwiXG4gIHwgXCJDYW1lcmFcIlxuICB8IFwiQ2FuY2VsQ2FsbFwiXG4gIHwgXCJDYXJcIlxuICB8IFwiQ2FyZHNcIlxuICB8IFwiQ2FydXNzZWxTbGlkZXNcIlxuICB8IFwiQ2F0SW1hZ2VBbmltYWxDdXRlXCJcbiAgfCBcIkNlbGVicmF0ZVBhcnR5Q29uZmV0dGlcIlxuICB8IFwiQ2hhcnRfMVN0YXRpc3RpY3NGbGlwY2hhcnRQcmVzZW50YXRpb25HcmFwaFwiXG4gIHwgXCJDaGFydF8yU3RhdGlzdGljc0ZsaXBjaGFydFByZXNlbnRhdGlvbkdyYXBoXzJcIlxuICB8IFwiQ2hhcnRfM1N0YXRpc3RpY3NHcmFwaFNpZ25hbF8xXCJcbiAgfCBcIkNoYXJ0XzNTdGF0aXN0aWNzR3JhcGhTaWduYWxcIlxuICB8IFwiQ2hhcnRfNFN0YXRpc3RpY3NHcmFwaF8yXCJcbiAgfCBcIkNoYXJ0XzVTdGF0aXN0aWNzR3JhcGhfM1wiXG4gIHwgXCJDaGFydF82U3RhdGlzdGljc0dyYXBoXzRcIlxuICB8IFwiQ2hhcnRfN1N0YXRpc3RpY3NHcmFwaF81XCJcbiAgfCBcIkNoYXRHcHRcIlxuICB8IFwiQ2hlY2tDaGVjbWFya1wiXG4gIHwgXCJDaGVja1JhZGlvQ2lyY2xlQ2hlY2tib3hDaGVja0NoZWNrbWFya0NvbmZpcm1cIlxuICB8IFwiQ2hlY2tib3hDaGVja0NoZWNrbWFya0NvbmZpcm1cIlxuICB8IFwiQ2hlY2tsaXN0Qm94Q2hlY2tMaXN0U2VhcmNoXzFcIlxuICB8IFwiQ2hlY2tsaXN0Qm94Q2hlY2tMaXN0U2VhcmNoXCJcbiAgfCBcIkNoZWNrbGlzdEJveENoZWNrTGlzdFwiXG4gIHwgXCJDaGVja2xpc3RMaXN0XCJcbiAgfCBcIkNoZXZyb25Cb3R0b21cIlxuICB8IFwiQ2hldnJvbkRvdWJsZURvd25cIlxuICB8IFwiQ2hldnJvbkRvdWJsZUxlZnRcIlxuICB8IFwiQ2hldnJvbkRvdWJsZVJpZ2h0XCJcbiAgfCBcIkNoZXZyb25Eb3VibGVVcFwiXG4gIHwgXCJDaGV2cm9uRG93blNtYWxsXCJcbiAgfCBcIkNoZXZyb25HcmFiYmVySG9yaXpvbnRhbF8xXCJcbiAgfCBcIkNoZXZyb25HcmFiYmVySG9yaXpvbnRhbFwiXG4gIHwgXCJDaGV2cm9uTGFyZ2VEb3duQ2hldkRvd25cIlxuICB8IFwiQ2hldnJvbkxhcmdlTGVmdENoZXZMZWZ0XCJcbiAgfCBcIkNoZXZyb25MYXJnZVJpZ2h0Q2hldlJpZ2h0XCJcbiAgfCBcIkNoZXZyb25MYXJnZVRvcENoZXZUb3BcIlxuICB8IFwiQ2hldnJvbkxlZnRcIlxuICB8IFwiQ2hldnJvblJpZ2h0U21hbGxfMVwiXG4gIHwgXCJDaGV2cm9uUmlnaHRTbWFsbFwiXG4gIHwgXCJDaGV2cm9uUmlnaHRcIlxuICB8IFwiQ2hldnJvblRvcFNtYWxsXCJcbiAgfCBcIkNoZXZyb25Ub3BcIlxuICB8IFwiQ2hyb21lY2FzdENhc3RcIlxuICB8IFwiQ2lyY2xlUGxhY2Vob2xkZXJPZmZcIlxuICB8IFwiQ2lyY2xlUGxhY2Vob2xkZXJPblwiXG4gIHwgXCJDbGlwYm9hcmRfMkNvcHlMaXN0XCJcbiAgfCBcIkNsaXBib2FyZENvcHlMaXN0XCJcbiAgfCBcIkNsb2NrQWxlcnRUaW1lclwiXG4gIHwgXCJDbG9ja0NpcmNsZVRpbWVcIlxuICB8IFwiQ2xvY2tTbm9vemVUaW1lclNub296ZVp6XCJcbiAgfCBcIkNsb2NrU3F1YXJlVGltZVRpbWVyV2F0Y2hcIlxuICB8IFwiQ2xvc2VRdW90ZUJsb2NrcXVvdGVcIlxuICB8IFwiQ2xvc2VYQ2hlY2tib3hSZW1vdmVcIlxuICB8IFwiQ2xvc2VYQ2lyY2xlUmVtb3ZlXCJcbiAgfCBcIkNsb3NlZENhcHRpb25pbmdDY1wiXG4gIHwgXCJDbG91ZENsb3Vkc1wiXG4gIHwgXCJDbG91ZERvd25sb2FkXCJcbiAgfCBcIkNsb3VkTGluZXNTeW5jRG9jdW1lbnRMaXN0UGFnZUZpbGVcIlxuICB8IFwiQ2xvdWRPZmZfMk9mZmxpbmVcIlxuICB8IFwiQ2xvdWRPZmZPZmZsaW5lXCJcbiAgfCBcIkNsb3VkU2ltcGxlQXJyb3dEb3duRG93bmxvYWRcIlxuICB8IFwiQ2xvdWRTaW1wbGVEaXNjb25uZWN0ZWRFcnJvclwiXG4gIHwgXCJDbG91ZFNpbXBsZVwiXG4gIHwgXCJDbG91ZFN5bmNEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJDbG91ZFVwbG9hZFwiXG4gIHwgXCJDbG91ZFwiXG4gIHwgXCJDbG91ZHlDbG91ZHNcIlxuICB8IFwiQ2xvdWR5U3VuQ2xvdWRzXCJcbiAgfCBcIkNtZEJveENvbW1hbmRBcHBsZUtleVwiXG4gIHwgXCJDbWRDb21tYW5kQXBwbGVLZXlcIlxuICB8IFwiQ29kZUJyYWNrZXRzXCJcbiAgfCBcIkNvZGVJbnNlcnRcIlxuICB8IFwiQ29kZUxpbmVzXCJcbiAgfCBcIkNvZGVcIlxuICB8IFwiQ29sb3JQaWNrZXJDb2xvclwiXG4gIHwgXCJDb2xvclN3YXRjaFBhbGV0dGVDb2xvdXJzXCJcbiAgfCBcIkNvbG9yXCJcbiAgfCBcIkNvbG9yc1BhbGV0dGVDb2xvdXJzXCJcbiAgfCBcIkNvbHVtbldpZGVDb2x1bXNcIlxuICB8IFwiQ29tcGFzc1JvdW5kQnJvd3NlclNhZmFyaVdlYkludGVybmV0TmF2aWdhdGlvblwiXG4gIHwgXCJDb21wYXNzU3F1YXJlQnJvd3NlclNhZmFyaVdlYkludGVybmV0TmF2aWdhdGlvblwiXG4gIHwgXCJDb25uZWN0RGV2aWNlc01hY2Jvb2tJcGhvbmVQaG9uZVwiXG4gIHwgXCJDb25zb2xlVGVybWluYWxcIlxuICB8IFwiQ29udHJhc3RcIlxuICB8IFwiQ29udHJvbFwiXG4gIHwgXCJDb29raWVzXCJcbiAgfCBcIkNvcHlfMUxheWVyc1BhZ2VzXCJcbiAgfCBcIkNvcHlfMkxheWVyc1BhZ2VzXCJcbiAgfCBcIkNvcHlfM0xheWVyc1BhZ2VzXCJcbiAgfCBcIkNvcHlfNExheWVyc1BhZ2VzXCJcbiAgfCBcIkNvcHlfNUxheWVyc1BhZ2VzXCJcbiAgfCBcIkNvcm5lckRvd25MZWZ0XCJcbiAgfCBcIkNvcm5lckRvd25SaWdodFwiXG4gIHwgXCJDb3JuZXJMZWZ0RG93blwiXG4gIHwgXCJDb3JuZXJMZWZ0VXBcIlxuICB8IFwiQ29ybmVyUmlnaHREb3duXCJcbiAgfCBcIkNvcm5lclJpZ2h0VXBcIlxuICB8IFwiQ29ybmVyVXBSaWdodF8xXCJcbiAgfCBcIkNvcm5lclVwUmlnaHRcIlxuICB8IFwiQ291cnRcIlxuICB8IFwiQ3JlZGl0Q2FyZF8xQ2FyZFBheW1lbnRcIlxuICB8IFwiQ3JlZGl0Q2FyZF8yQ2FyZFBheW1lbnRcIlxuICB8IFwiQ3JlZGl0Q2FyZF8zQ2FyZFBheW1lbnRcIlxuICB8IFwiQ3JvcFwiXG4gIHwgXCJDcm9zc2VkTGFyZ2VDbG9zZVwiXG4gIHwgXCJDcm9zc2VkU21hbGxEZWxldGVSZW1vdmVcIlxuICB8IFwiQ3Jvd25WaXBcIlxuICB8IFwiQ3J5cHRvQ29pblwiXG4gIHwgXCJDcnlwdG9cIlxuICB8IFwiQ3VwQ29mZmVlVGVhTWlsa1wiXG4gIHwgXCJDdXBUZWFDb2ZmZWVcIlxuICB8IFwiQ3Vyc29yXzFBcnJvd1wiXG4gIHwgXCJDdXJzb3JfMkFycm93XCJcbiAgfCBcIkN1cnNvcl8zQXJyb3dcIlxuICB8IFwiQ3Vyc29yQm94QXJyb3dcIlxuICB8IFwiQ3Vyc29yQ2xpY2tBcnJvd0NsaWNrYmFpdFwiXG4gIHwgXCJEYXNoYm9hcmRGYXN0XCJcbiAgfCBcIkRhc2hib2FyZExvd1wiXG4gIHwgXCJEYXNoYm9hcmRNaWRkbGVcIlxuICB8IFwiRGFzaGJvYXJkXCJcbiAgfCBcIkRhdGVUaW1lQ2FsZW5kYXJUaW1lXCJcbiAgfCBcIkRlYnVnRGVidWdnZXJcIlxuICB8IFwiRGVsZXRlXzJSZW1vdmVHYXJiYWdlV2FzdGVUcmFzaENhblwiXG4gIHwgXCJEZWxldGVSZW1vdmVCYWNrc3BhY2VcIlxuICB8IFwiRGVsZXRlUmVtb3ZlR2FyYmFnZVdhc3RlVHJhc2hDYW5cIlxuICB8IFwiRGVsZXRlU2ltcGxlXCJcbiAgfCBcIkRpY2VfMVJvbGxcIlxuICB8IFwiRGljZV8yUm9sbFwiXG4gIHwgXCJEaWNlXzNSb2xsXCJcbiAgfCBcIkRpY2VfNFJvbGxcIlxuICB8IFwiRGljZV81Um9sbFwiXG4gIHwgXCJEaWNlXzZSb2xsXCJcbiAgfCBcIkRpcmVjdG9yQ2hhaXJSZWdpZUNoYWlyXCJcbiAgfCBcIkRpc2tfMVNhdmVcIlxuICB8IFwiRGlza18yU2F2ZVwiXG4gIHwgXCJEaXZpZGVyQWRkTGluZVwiXG4gIHwgXCJEb2NrQm94QXJyb3dcIlxuICB8IFwiRG9jdW1lbnRMaXN0UGFnZUZpbGVcIlxuICB8IFwiRG9jdW1lbnRXaXRoTGluZXNMaXN0UGFnZUZpbGVcIlxuICB8IFwiRG9sbGFyQ3VycmVuY3lNb25leUNvaW5Vc2RcIlxuICB8IFwiRG9udXRcIlxuICB8IFwiRG9zc2llclwiXG4gIHwgXCJEb3RHcmlkTWVudUdyYWJcIlxuICB8IFwiRG90SG9yaXpvbnRhbE1lbnVHcmFiXCJcbiAgfCBcIkRvdFZlcnRpY2FsTWVudUdyYWJcIlxuICB8IFwiRG93bkdhbWVwYWRCYXNlQ29udHJvbGxzR2FtZUpveXN0aWNrXCJcbiAgfCBcIkRvd25HYW1lcGFkQmFzZVJvdW5kQ29udHJvbGxzR2FtZUpveXN0aWNrXCJcbiAgfCBcIkRvd25sb2FkQ2lyY2xlQXJyb3dEb3duXCJcbiAgfCBcIkRvd25sb2FkRmlsZURvd25cIlxuICB8IFwiRG93bmxvYWRTcXVhcmVBcnJvd0Rvd25cIlxuICB8IFwiRHJhZ0dyYWJcIlxuICB8IFwiRHJpbmtDdXBTdHJhd1wiXG4gIHwgXCJEcm9wV2F0ZXJQcmVjaXBpdGF0aW9uTGlxdWlkXCJcbiAgfCBcIkVhcnRoR2xvYmVXb3JsZFwiXG4gIHwgXCJFZGl0XzAxXCJcbiAgfCBcIkVkaXRCaWdCb3hQZW5jaWxQZW5Xcml0ZURyYXdcIlxuICB8IFwiRWRpdFBlbmNpbFdyaXRlXCJcbiAgfCBcIkVkaXRTbWFsbEJveFBlbmNpbFBlbldyaXRlRHJhd1wiXG4gIHwgXCJFbWFpbF8yRW52ZWxvcGVNYWlsXCJcbiAgfCBcIkVtYWlsXzJOb3RpZmljYXRpb25CYWRnZUVudmVsb3BlTWFpbFwiXG4gIHwgXCJFbWFpbEVudmVsb3BlXzFcIlxuICB8IFwiRW1haWxFbnZlbG9wZVwiXG4gIHwgXCJFcnJvcldhcm5pbmdBbGVydFwiXG4gIHwgXCJFc2NQb3dlclwiXG4gIHwgXCJFdGhlcmV1bVwiXG4gIHwgXCJFdXJvQ3VycmVuY3lNb25leUNvaW5FdXJvXCJcbiAgfCBcIkV4cGFuZEFycm93RW5sYXJnZVwiXG4gIHwgXCJFeHBhbmRXaW5kb3dMYXlvdXRcIlxuICB8IFwiRXhwbG9zaW9uQm9vbUJhbmdQb3BcIlxuICB8IFwiRXllQ2xvc2VkU2VlSGlkZGVuXCJcbiAgfCBcIkZhc3RGb3J3YXJkXzEwc1wiXG4gIHwgXCJGYXN0Rm9yd2FyZF8xNXNcIlxuICB8IFwiRmFzdEZvcndhcmRfMzBzXCJcbiAgfCBcIkZhc3RGb3J3YXJkXzVzXCJcbiAgfCBcIkZhc3RGb3J3YXJkU3ltYm9sXCJcbiAgfCBcIkZlYXR1cmVzVG9UaGVNb29uXCJcbiAgfCBcIkZpbGVfMURvY3VtZW50Q2xvdWRTeW5jXCJcbiAgfCBcIkZpbGVfMkRvY3VtZW50c0NvcHlcIlxuICB8IFwiRmlsZV8zRG9jdW1lbnRDbG91ZFN5bmNcIlxuICB8IFwiRmlsZV80RG9jdW1lbnRDbG91ZFN5bmNcIlxuICB8IFwiRmlsZV81RG9jdW1lbnRDbG91ZFN5bmNcIlxuICB8IFwiRmlsZV82RG9jdW1lbnRUZXh0XCJcbiAgfCBcIkZpbGVfN0RvY3VtZW50TG9ja2VkUGFzc3dvcmRcIlxuICB8IFwiRmlsZV84RG9jdW1lbnRDbG91ZFN5bmNcIlxuICB8IFwiRmlsdGVyXzFTb3J0XCJcbiAgfCBcIkZpbHRlcl8yU29ydFwiXG4gIHwgXCJGaWx0ZXJBc2NlbmRpbmdTb3J0QXpBc2NlbmRpbmdBc2NcIlxuICB8IFwiRmlsdGVyRGVzY2VuZGluZ1NvcnRaYURlc2NlbmRpbmdEZXNjXCJcbiAgfCBcIkZpbHRlclRpbWVsaW5lU29ydFwiXG4gIHwgXCJGaW5kZXJGYWNlSWRcIlxuICB8IFwiRmluZGVyRmlsZXNPc1wiXG4gIHwgXCJGaW5nZXJQcmludF8yVG91Y2hJZFwiXG4gIHwgXCJGaW5nZXJQcmludFRvdWNoSWRcIlxuICB8IFwiRmlyZV8xRmxhbWVIb3RIZWF0XCJcbiAgfCBcIkZpcmVfMkZsYW1lSG90SGVhdFwiXG4gIHwgXCJGaXN0YnVtcEJvb21IYW5kc0ZyaWVuZHNcIlxuICB8IFwiRmxhZ18yUHJpb3JpdHlfMVwiXG4gIHwgXCJGbGFnXzJQcmlvcml0eVwiXG4gIHwgXCJGb2N1c0NhbWVyYUV4cG9zdXJlQXV0b2ZvY3VzQXV0b1wiXG4gIHwgXCJGb2N1c0NhbWVyYUV4cG9zdXJlRmxhc2hcIlxuICB8IFwiRm9jdXNDYW1lcmFFeHBvc3VyZUxvY2tcIlxuICB8IFwiRm9jdXNDYW1lcmFFeHBvc3VyZU1hY3JvRmxvd2VyXCJcbiAgfCBcIkZvY3VzQ2FtZXJhRXhwb3N1cmVNYWdpY0F1dG9BaVNwYXJrbGVzRWZmZWN0c1wiXG4gIHwgXCJGb2N1c0NhbWVyYUV4cG9zdXJlU3F1YXJlXCJcbiAgfCBcIkZvY3VzQ2FtZXJhRXhwb3N1cmVVbmxvY2tcIlxuICB8IFwiRm9jdXNDYW1lcmFFeHBvc3VyZVpvb21JblwiXG4gIHwgXCJGb2N1c0NhbWVyYUV4cG9zdXJlWm9vbU91dFwiXG4gIHwgXCJGb2N1c0NhbWVyYUV4cG9zdXJlXCJcbiAgfCBcIkZvY3VzRXhwb3N1cmVNYWNyb0Zsb3dlcl8yXCJcbiAgfCBcIkZvbGRlcl8xXCJcbiAgfCBcIkZvbGRlcl8yXCJcbiAgfCBcIkZvbGRlcl8zXCJcbiAgfCBcIkZvbGRlckFkZFBsdXNcIlxuICB8IFwiRm9sZGVyQm9va21hcmtzQm9va21hcmtcIlxuICB8IFwiRm9sZGVyQ2xvdWRfMVwiXG4gIHwgXCJGb2xkZXJDbG91ZF8yXCJcbiAgfCBcIkZvbGRlckRlbGV0ZVhcIlxuICB8IFwiRm9sZGVyRG93bmxvYWRcIlxuICB8IFwiRm9sZGVyUmVzdHJpY3RlZFwiXG4gIHwgXCJGb2xkZXJTaGFyZWRVc2VyXCJcbiAgfCBcIkZvbGRlclVwbG9hZFwiXG4gIHwgXCJGb2xkZXJcIlxuICB8IFwiRm9sZGVyc1wiXG4gIHwgXCJGb3JrXCJcbiAgfCBcIkZvcndhcmRzXCJcbiAgfCBcIkdhbWVwYWRCYXNlQ29udHJvbGxzR2FtZUpveXN0aWNrXCJcbiAgfCBcIkdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2tcIlxuICB8IFwiR2FtZXBhZEdhbWluZ0pveXN0aWNrR2FtZXNcIlxuICB8IFwiR2FyYWdlXCJcbiAgfCBcIkdhc1wiXG4gIHwgXCJHZWFyQ29nV2hlZWxcIlxuICB8IFwiR2hvc3RIaWRkZW5Vbmtub3duXCJcbiAgfCBcIkdpZlNxdWFyZVwiXG4gIHwgXCJHaWZcIlxuICB8IFwiR2lmdFNpZGVWaWV3UHJlc2VudFwiXG4gIHwgXCJHaWZ0VG9wVmlld1wiXG4gIHwgXCJHaWZ0Y2FyZFwiXG4gIHwgXCJHaXJvQ2FyZFwiXG4gIHwgXCJHbG9idXNNYXBFYXJ0aEdsb2JlXCJcbiAgfCBcIkdvbGZCYWxsXCJcbiAgfCBcIkdyYWR1YXRlQ2FwU3R1ZHlFZHVjYXRpb25BY2FkZW1pY1N0dWRlbnRcIlxuICB8IFwiR3JhcGhMaW5lc1N0YXRpc3RpY3NEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJHcmFwaFN0YXRpc3RpY3NEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJHcm93dGhHcm93TGVhZnNcIlxuICB8IFwiSDFIZWFkaW5nSGVhZGxpbmVcIlxuICB8IFwiSDJIZWFkaW5nSGVhZGxpbmVcIlxuICB8IFwiSDNIZWFkaW5nSGVhZGxpbmVcIlxuICB8IFwiSGFuZF80RmluZ2VyU2VsZWN0XCJcbiAgfCBcIkhhbmRfNUZpbmdlclNlbGVjdFwiXG4gIHwgXCJIYXNodGFnXCJcbiAgfCBcIkhkXCJcbiAgfCBcIkhlYWRBdmF0YXJcIlxuICB8IFwiSGVhZHBob25lc1N1cHBvcnRcIlxuICB8IFwiSGVhcnRfMkxpa2VIZWFsdGhMaWZlRmF2XCJcbiAgfCBcIkhlYXJ0QmVhdEhlYXJ0UmF0ZVB1bHNlXCJcbiAgfCBcIkhlYXJ0TGlrZUhlYWx0aExpZmVGYXZvcml0ZVwiXG4gIHwgXCJIaWRlRXllT2ZmU2VlTG9va05vdFZpc2libGVcIlxuICB8IFwiSGlnaGxpZ2h0XCJcbiAgfCBcIkhvbWVEb29ySG91c2VfMVwiXG4gIHwgXCJIb21lRG9vckhvdXNlXCJcbiAgfCBcIkhvbWVMaW5lSG91c2VcIlxuICB8IFwiSG9tZU9wZW5Ib3VzZVwiXG4gIHwgXCJIb21lUm9vZkhvdXNlXCJcbiAgfCBcIkhvbWVTaW1wbGVIb3VzZV8xXCJcbiAgfCBcIkhvbWVTaW1wbGVIb3VzZVwiXG4gIHwgXCJIb3VyZ2xhc3NUaW1lV2F0Y2hDbG9ja1wiXG4gIHwgXCJJY2VIb2NrZXlcIlxuICB8IFwiSWNvbkljb25zU2hhcGVzR2FtZXNcIlxuICB8IFwiSW1hY0NvbXB1dGVyRGV2aWNlXzJcIlxuICB8IFwiSW1hZ2VXYWxscGFwZXJMYW5kc2NhcGVPc1wiXG4gIHwgXCJJbWFnZXNfMVBob3Rvc1BpY3R1cmVzU2hvdFwiXG4gIHwgXCJJbWFnZXNfMlBob3Rvc1BpY3R1cmVzU2hvdFwiXG4gIHwgXCJJbWFnZXNfM1Bob3Rvc1BpY3R1cmVzU2hvdFwiXG4gIHwgXCJJbWFnZXNfNFBob3Rvc1BpY3R1cmVzU2hvdFwiXG4gIHwgXCJJbWFnZXNfNVBob3Rvc1BpY3R1cmVzU2hvdFwiXG4gIHwgXCJJbmJveF8xQXJjaGl2ZVRyYXlTaGVsZlwiXG4gIHwgXCJJbmJveF8yQXJjaGl2ZVRyYXlTaGVsZlwiXG4gIHwgXCJJbmZpbml0eUxvb3BCb29tZXJhbmdcIlxuICB8IFwiSW5mb0NpcmNsZVRvb2x0aXBcIlxuICB8IFwiSW5mb1NxdWFyZVwiXG4gIHwgXCJJbnZpdGVfMVwiXG4gIHwgXCJJbnZpdGVcIlxuICB8IFwiSXRhbGljXCJcbiAgfCBcIktleVwiXG4gIHwgXCJLZXlib2FyZERvd25DbG9zZURvd25PcGVuQXJyb3dcIlxuICB8IFwiS2V5Ym9hcmRNaWRpS2V5c1BpYW5vXCJcbiAgfCBcIktleWJvYXJkVXBfMUNsb3NlRG93bk9wZW5BcnJvd1wiXG4gIHwgXCJLZXlib2FyZFVwXzJDbG9zZURvd25PcGVuQXJyb3dcIlxuICB8IFwiTGFiXCJcbiAgfCBcIkxhdW5jaFJvY2tldFwiXG4gIHwgXCJMYXdMZWdhbFRlcm1zSW1wcmludEJhbGFuY2VcIlxuICB8IFwiTGF5ZXJCZWhpbmRTbGlkZXNQYWdlc1wiXG4gIHwgXCJMYXllcnNfMlN0YWNrXCJcbiAgfCBcIkxheWVyc18zU3RhY2tcIlxuICB8IFwiTGF5ZXJzQ29weVwiXG4gIHwgXCJMYXlvdXRfMlJvd3NHcmlkV2luZG93XCJcbiAgfCBcIkxheW91dF8zUm93c0dyaWRXaW5kb3dcIlxuICB8IFwiTGF5b3V0Qm90dG9tR3JpZFdpbmRvd1wiXG4gIHwgXCJMYXlvdXRDb2x1bW5HcmlkQ29sdW1uXCJcbiAgfCBcIkxheW91dERhc2hib2FyZEdyaWRXaW5kb3dcIlxuICB8IFwiTGF5b3V0R3JpZF8xR3JpZFdpbmRvd1wiXG4gIHwgXCJMYXlvdXRHcmlkXzJHcmlkXCJcbiAgfCBcIkxheW91dEdyaWRMaXN0U2VhcmNoRmluZE1hZ2lmaWVyXCJcbiAgfCBcIkxheW91dExlZnRHcmlkV2luZG93XCJcbiAgfCBcIkxheW91dFJpZ2h0R3JpZFdpbmRvd1wiXG4gIHwgXCJMYXlvdXRTaWRlYmFyR3JpZFdpbmRvd1wiXG4gIHwgXCJMYXlvdXRUb3BHcmlkV2luZG93XCJcbiAgfCBcIkxheW91dFRvcGJhckdyaWRXaW5kb3dcIlxuICB8IFwiTGF5b3V0V2luZG93R3JpZFdpbmRvd1wiXG4gIHwgXCJMZWZ0R2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2tcIlxuICB8IFwiTGVmdEdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2tcIlxuICB8IFwiTGlicmFyeVwiXG4gIHwgXCJMaWZlVmVzdFZlc3RcIlxuICB8IFwiTGlnaHRCdWxiSWRlYUxpZ2h0XCJcbiAgfCBcIkxpZ2h0QnVsYlNpbXBsZUlkZWFcIlxuICB8IFwiTGlnaHRSYWluXCJcbiAgfCBcIkxpZ2h0bmluZ1phcEZsYXNoXCJcbiAgfCBcIkxpbmVDaGFydF8yU3RhdGlzdGljc0dyYXBoXCJcbiAgfCBcIkxpbmVDaGFydF8zU3RhdGlzdGljc0dyYXBoXzFcIlxuICB8IFwiTGluZUNoYXJ0XzNTdGF0aXN0aWNzR3JhcGhcIlxuICB8IFwiTGluZUNoYXJ0U3RhdGlzdGljc0dyYXBoXCJcbiAgfCBcIkxpbmtfMUNoYWluXCJcbiAgfCBcIkxpbmtfMkNoYWluXCJcbiAgfCBcIkxpbmtfM0NoYWluXCJcbiAgfCBcIkxpbmtEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJMaW5rTGluZXNEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJMaXN0U2VhcmNoRmluZE1hZ2lmaWVyXCJcbiAgfCBcIkxpdmVTaWduYWxcIlxuICB8IFwiTG9hZGVyXCJcbiAgfCBcIkxvY2F0aW9uRXhwbG9yZUNvbXBhc3NcIlxuICB8IFwiTG9jYXRpb25NYXBSb3V0ZVwiXG4gIHwgXCJMb2NrUHJpdmF0ZVwiXG4gIHwgXCJMb2dpbkVudGVyRG9vclwiXG4gIHwgXCJMb2dvdXRMZWF2ZURvb3JcIlxuICB8IFwiTWFjYm9va0xhcHRvcENvbXB1dGVyRGV2aWNlXCJcbiAgfCBcIk1hY2ludGhvc2hNYWNcIlxuICB8IFwiTWFnaWNCb29rTWFnaWNpYW5cIlxuICB8IFwiTWFnaWNCb3hcIlxuICB8IFwiTWFnaWNFeWVzXCJcbiAgfCBcIk1hZ2ljSGFuZHNNYWdpY1JhaW5ib3dcIlxuICB8IFwiTWFnaWNIYXRcIlxuICB8IFwiTWFnaWNQZW5jaWxNYWdpY0JydXNoXCJcbiAgfCBcIk1hZ2ljU3RpY2tTdGFyXCJcbiAgfCBcIk1hZ2ljU3RpY2tUb3BcIlxuICB8IFwiTWFnaWNTdGlja1wiXG4gIHwgXCJNYXBQYXBlclwiXG4gIHwgXCJNYXJrZG93blwiXG4gIHwgXCJNZWRhbFRyb3BoeUJhZGdlV2lubmVyV2luXCJcbiAgfCBcIk1lZ2FwaG9uZUxvdWRTcGVha1Byb21vdGVcIlxuICB8IFwiTWVtb3J5XzFTaW1DYXJkQ2FyZFwiXG4gIHwgXCJNZW1vcnlfMlNpbUNhcmRTZENhcmRcIlxuICB8IFwiTWVudV8xR3JpZENpcmNsZVwiXG4gIHwgXCJNZW51XzFMaXN0SGFtYnVyZ2VyXCJcbiAgfCBcIk1lbnVfMkdyaWRDaXJjbGVcIlxuICB8IFwiTWVudV8yTGlzdEhhbWJ1cmdlclwiXG4gIHwgXCJNZW51XzNMaXN0SGFtYnVyZ2VyXCJcbiAgfCBcIk1lbnVTaW1wbGVOYXZTaW1wbGVcIlxuICB8IFwiTWljcm9waG9uZU1pY1NvdW5kUG9kY2FzdF8xXCJcbiAgfCBcIk1pY3JvcGhvbmVNaWNTb3VuZFBvZGNhc3RcIlxuICB8IFwiTWluaW1pemVBcnJvd1Nocmlua1wiXG4gIHwgXCJNaW5pbWl6ZVdpbmRvd0xheW91dFwiXG4gIHwgXCJNaW51c0NpcmNsZVJlbW92ZVwiXG4gIHwgXCJNaW51c0xhcmdlXCJcbiAgfCBcIk1pbnVzU21hbGxcIlxuICB8IFwiTWludXNTcXVhcmVSZW1vdmVEZWxldGVcIlxuICB8IFwiTW9uZXlCaWxsRG9sbGFyRXVyb1wiXG4gIHwgXCJNb25leUhhbmRDb2luc1wiXG4gIHwgXCJNb29uRGFya01vZGVOaWdodFwiXG4gIHwgXCJNb29uU3Rhck5pZ2h0XCJcbiAgfCBcIk1vdXNlXzFcIlxuICB8IFwiTW91c2VfMlNjcm9sbERvd25cIlxuICB8IFwiTW91c2VfM1Njcm9sbFVwXCJcbiAgfCBcIk1vdmVGb2N1c1wiXG4gIHwgXCJNb3ZlXCJcbiAgfCBcIk11bHRpTWVkaWFNZWRpYUltYWdlQW5kVmlkZW9cIlxuICB8IFwiTXV0ZVNvdW5kT2ZmXCJcbiAgfCBcIk5ld3NQYXBlclwiXG4gIHwgXCJOZXdzcGFwZXJOZXdzUGFwZXJcIlxuICB8IFwiTmZjXzJcIlxuICB8IFwiTmZjXCJcbiAgfCBcIk5vRmxhc2hcIlxuICB8IFwiTm90ZUNhcmRUZXh0XCJcbiAgfCBcIk5vdGVTdGlja2VyXCJcbiAgfCBcIk5vdGVzXCJcbiAgfCBcIk5vdGlmaWNhdGlvbkFsYXJtQmVsbEFjdGl2aXR5QWxlcnRcIlxuICB8IFwiTm90aWZpY2F0aW9uQmVsbEFjdGl2aXR5XCJcbiAgfCBcIk5vdGlmaWNhdGlvbk9mZkJlbGxBY3Rpdml0eVwiXG4gIHwgXCJOb3RpZmljYXRpb25zQmFkZ2VcIlxuICB8IFwiTnVtYmVyZWRMaXN0XCJcbiAgfCBcIk9jdWx1c1wiXG4gIHwgXCJPcGVuXzJOZXdMaW5rT3BlbkxpbmtCb3hBcnJvd1wiXG4gIHwgXCJPcGVuTmV3TGlua09wZW5MaW5rQm94QXJyb3dcIlxuICB8IFwiT3BlblF1b3RlQmxvY2txdW90ZVwiXG4gIHwgXCJPcHRBbHRPcHRpb25BbHRLZXlcIlxuICB8IFwiT3B0T3B0aW9uS2V5XCJcbiAgfCBcIk9yYW5nZVwiXG4gIHwgXCJQYWNrYWdlRGVsaXZlcnlfMlwiXG4gIHwgXCJQYWNrYWdlRGVsaXZlcnlcIlxuICB8IFwiUGFnZXNCb2FyZHNcIlxuICB8IFwiUGFub3JhbWFWaWV3XCJcbiAgfCBcIlBhcGVyUGxhbmVTZW5kXCJcbiAgfCBcIlBhc3NrZXlzUGFzc2tleVBhc3N3b3JkbGVzc1wiXG4gIHwgXCJQYXNzcG9ydFZpc2FcIlxuICB8IFwiUGFzc3dvcmRMb2NrUHJvdGVjdGlvblwiXG4gIHwgXCJQYXVzZVwiXG4gIHwgXCJQZW5jaWxfMlBlblRvb2xXcml0ZVwiXG4gIHwgXCJQZW5jaWxQZW5Ub29sV3JpdGVcIlxuICB8IFwiUGVvcGxlQmVoaW5kVXNlckF2YXRhckdyb3VwXzNcIlxuICB8IFwiUGVvcGxlQ2lyY2xlVXNlclBlcnNvbkF2YXRhcl8yXCJcbiAgfCBcIlBlb3BsZUNvcHlNZW1iZXJzXCJcbiAgfCBcIlBlb3BsZUxpa2VMb3ZlSGVhcnRcIlxuICB8IFwiUGVvcGxlU2hhZG93VXNlckF2YXRhckdyb3VwXzFcIlxuICB8IFwiUGVvcGxlU2hhZG93VXNlckF2YXRhckdyb3VwXCJcbiAgfCBcIlBlb3BsZVRvZ2V0aGVyVXNlckF2YXRhckdyb3VwXzJcIlxuICB8IFwiUGVvcGxlVXNlclBlcnNvbkF2YXRhclwiXG4gIHwgXCJQZXJjZW50U2FsZXNfMVwiXG4gIHwgXCJQZXJjZW50U2FsZXNcIlxuICB8IFwiUGVyZm9ybWFuY2VTcGVlZFNjYWxlXCJcbiAgfCBcIlBob25lRGV2aWNlSXBob25lTW9iaWxlXCJcbiAgfCBcIlBob25lRHluYW1pY0lzbGFuZFwiXG4gIHwgXCJQaWN0dXJlSW5QaWN0dXJlXCJcbiAgfCBcIlBpZUNoYXJ0XzFHcmFwaENoYXJ0U3RhdGlzdGljc1wiXG4gIHwgXCJQaWVDaGFydF8yR3JhcGhDaGFydFN0YXRpc3RpY3NcIlxuICB8IFwiUGlnZ3lCYW5rU2F2ZU1vbmV5XCJcbiAgfCBcIlBpbkNpcmNsZUxvY2F0aW9uXCJcbiAgfCBcIlBpbkZsYWdMb2NhdGlvblwiXG4gIHwgXCJQaW5Mb2NhdGlvbl8xXCJcbiAgfCBcIlBpbkxvY2F0aW9uQm9va21hcmtcIlxuICB8IFwiUGluTG9jYXRpb25cIlxuICB8IFwiUGluY2hcIlxuICB8IFwiUGl6emFcIlxuICB8IFwiUGxhY2Vob2xkZXJHZW5lcmF0ZVwiXG4gIHwgXCJQbGF5Q2lyY2xlXCJcbiAgfCBcIlBsYXlHb1wiXG4gIHwgXCJQbGF5TGlzdFwiXG4gIHwgXCJQbHVzQWRkRG9jdW1lbnRMaXN0UGFnZUZpbGVcIlxuICB8IFwiUGx1c0FkZExhcmdlXCJcbiAgfCBcIlBsdXNBZGRTbWFsbFwiXG4gIHwgXCJQbHVzQ2lyY2xlQWRkXCJcbiAgfCBcIlBsdXNMaW5lc0FkZERvY3VtZW50TGlzdFBhZ2VGaWxlXCJcbiAgfCBcIlBsdXNTcXVhcmVBZGRcIlxuICB8IFwiUG9pbnRlckhhbmRcIlxuICB8IFwiUG9vcFNwYW1cIlxuICB8IFwiUG9wc2ljbGVCSWNlQ3JlYW1Td2VldHNcIlxuICB8IFwiUG9wc2ljbGVJY2VDcmVhbVN3ZWV0c1wiXG4gIHwgXCJQb3N0Y2FyZENhcmROZXdzXCJcbiAgfCBcIlBvc3RzTm90ZWJvb2tTa2V0Y2hib29rXCJcbiAgfCBcIlBvdW5kQ3VycmVuY3lNb25leUNvaW5HYnBcIlxuICB8IFwiUHJpbnRlclByaW50XCJcbiAgfCBcIlByb2Nlc3NvckNoaXBcIlxuICB8IFwiUHVsbFJlcXVlc3RcIlxuICB8IFwiUW0zUm9vbVRyYW5zZm9ybVh5el8zZFwiXG4gIHwgXCJRckNvZGVcIlxuICB8IFwiUXVlc3Rpb25tYXJrRmFxSGVscFF1ZXN0aW9uYWlyZVwiXG4gIHwgXCJSYWRhckxvY2F0aW9uU2VhcmNoXCJcbiAgfCBcIlJhaW5ib3dcIlxuICB8IFwiUmFpbnlSYWluXCJcbiAgfCBcIlJhaXNpbmdIYW5kXzRGaW5nZXJIZXlIZWxsb1wiXG4gIHwgXCJSYWlzaW5nSGFuZF81RmluZ2VySGV5SGVsbG9cIlxuICB8IFwiUmVhZGluZ0xpc3RHbGFzc2VzU3RldmVKb2JzXCJcbiAgfCBcIlJlYXJGcm9udENhbWVyYUNhbUNoYW5nZUxlbnNcIlxuICB8IFwiUmVjZWlwdFRpY2tldFwiXG4gIHwgXCJSZWNvcmRWb2ljZW1haWxCYW5kVGFwZVwiXG4gIHwgXCJSZWNvcmRcIlxuICB8IFwiUmVkb0ZvcndhcmRfMVwiXG4gIHwgXCJSZWRvRm9yd2FyZFwiXG4gIHwgXCJSZWZyZXNoUmVuZXdcIlxuICB8IFwiUmVtb3ZlQ29sdW1uRGVsZXRlQ29sdW1uXCJcbiAgfCBcIlJlbW92ZVBlb3BsZVJlbW92ZVVzZXJSZW1vdmVQZXJzb25fMlwiXG4gIHwgXCJSZW1vdmVQZW9wbGVSZW1vdmVVc2VyUmVtb3ZlUGVyc29uXCJcbiAgfCBcIlJlbW92ZVJvd0RlbGV0ZVJvd1wiXG4gIHwgXCJSZXBlYXRfMlJldHdlZXRcIlxuICB8IFwiUmVwZWF0UmV0d2VldFwiXG4gIHwgXCJSZXBlYXRcIlxuICB8IFwiUmVzY3VlUmluZ1N3aW1Cb3lsZUhlbHBTdXBwb3J0XCJcbiAgfCBcIlJlc2l6ZUJpZ0JveEFycm93XCJcbiAgfCBcIlJlc2l6ZVNtYWxsQm94QXJyb3dcIlxuICB8IFwiUmV3aW5kXzEwc1wiXG4gIHwgXCJSZXdpbmRfMTVzXCJcbiAgfCBcIlJld2luZF8zMHNcIlxuICB8IFwiUmV3aW5kXzVzXCJcbiAgfCBcIlJld2luZFN5bWJvbFwiXG4gIHwgXCJSaWdodEdhbWVwYWRCYXNlQ29udHJvbGxzR2FtZUpveXN0aWNrXCJcbiAgfCBcIlJpZ2h0R2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGlja1wiXG4gIHwgXCJSb2NrZXRTdGFydHVwTGF1bmNoXCJcbiAgfCBcIlJvdGF0ZV8wMlJlcGVhdFJlZnJlc2hcIlxuICB8IFwiUm90YXRlQ2xvY2t3aXNlUm90YXRlXCJcbiAgfCBcIlJvdGF0ZUNvdW50ZXJjbG9ja3dpc2VSb3RhdGVcIlxuICB8IFwiUm90YXRlUmVwZWF0UmVmcmVzaFwiXG4gIHwgXCJSb3RhdGVSb3RhdGlvblhBeGlzXCJcbiAgfCBcIlJvd3NXaWRlUm93c1dpZGVcIlxuICB8IFwiUnVsZXJcIlxuICB8IFwiUnVsZXNEaXJlY3Rpb25TcGxpdFwiXG4gIHwgXCJTYWRFbW9qaVVuaGFwcHlcIlxuICB8IFwiU2FuZGJveFNhZmVcIlxuICB8IFwiU2NhbkZvY3VzXzFcIlxuICB8IFwiU2NhbkZvY3VzXCJcbiAgfCBcIlNjaG9vbEJpZ0J1aWxkaW5nXCJcbiAgfCBcIlNjaXNzb3JzXzJDdXRcIlxuICB8IFwiU2Npc3NvcnNDdXRcIlxuICB8IFwiU2RDYXJkTWVtb3J5U3RpY2tcIlxuICB8IFwiU2VhcmNoXzJNYWduaWZ5aW5nR2xhc3NcIlxuICB8IFwiU2VhcmNoTGluZXNNYWduaWZpZXJEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJTZWFyY2hNYWduaWZpZXJEb2N1bWVudExpc3RQYWdlRmlsZVwiXG4gIHwgXCJTZWFyY2hNYWduaWZ5aW5nR2xhc3NcIlxuICB8IFwiU2VhcmNoTWVudVwiXG4gIHwgXCJTZWFyY2hQYWdlRmluZFwiXG4gIHwgXCJTZWN1cmVkTGluZXNMb2NrZWRTZWN1cml0eURvY3VtZW50TGlzdFBhZ2VGaWxlXCJcbiAgfCBcIlNlY3VyZWRMb2NrZWRTZWN1cml0eURvY3VtZW50TGlzdFBhZ2VGaWxlXCJcbiAgfCBcIlNlbmRFbWFpbFBhcGVyUGxhbmVBcnJvd1wiXG4gIHwgXCJTZXJ2ZXJfMVN0b3JhZ2VEYXRhQ29pbnNNb25leVwiXG4gIHwgXCJTZXJ2ZXJfMlN0b3JhZ2VEYXRhQ29pbnNNb25leVwiXG4gIHwgXCJTZXJ2ZXJEYXRhU3RvcmFnZVwiXG4gIHwgXCJTZXR0aW5nc18xU3dpdGNoUHJlZmVyZW5jZXNcIlxuICB8IFwiU2V0dGluZ3NfMkdlYXJQcmVmZXJlbmNlc1wiXG4gIHwgXCJTZXR0aW5nc18zR2VhclByZWZlcmVuY2VzXzFcIlxuICB8IFwiU2V0dGluZ3NfM0dlYXJQcmVmZXJlbmNlc1wiXG4gIHwgXCJTZXR0aW5nc182U2xpZGVyVGhyZWVcIlxuICB8IFwiU2V0dGluZ3NfN0tub2JWb2x1bWVPbk9mZlwiXG4gIHwgXCJTZXR0aW5nc184U3dpdGNoXzJcIlxuICB8IFwiU2V0dGluZ3NTbGlkZXJIb3JcIlxuICB8IFwiU2V0dGluZ3NTbGlkZXJWZXJTbGlkZXJUd29cIlxuICB8IFwiU2hha2FfMkNhbGxNZUhhbmdUZW5cIlxuICB8IFwiU2hha2FDYWxsTWVIYW5nVGVuXCJcbiAgfCBcIlNoYXJlXzJBcnJvd1wiXG4gIHwgXCJTaGFyZUFycm93TG9naW5cIlxuICB8IFwiU2hhcmVBcnJvd1wiXG4gIHwgXCJTaGFyZVNjcmVlblNjcmVlblNoYXJpbmdcIlxuICB8IFwiU2hpZWxkXzJDaGVja1wiXG4gIHwgXCJTaGllbGRCcmVha05vdFNlY3VyZVwiXG4gIHwgXCJTaGllbGRDaGVja1NlY3VyaXR5UHJvdGVjdGlvblwiXG4gIHwgXCJTaGllbGRDcm9zc2VkU2VjdXJpdHlQcm90ZWN0aW9uXCJcbiAgfCBcIlNoaWVsZFByb3RlY3RTZWN1cml0eUNoZWNrXCJcbiAgfCBcIlNoaWVsZFNlY3VyaXR5UHJvdGVjdGlvblwiXG4gIHwgXCJTaGlmdFwiXG4gIHwgXCJTaGlwQ2hhbmdlbG9nXCJcbiAgfCBcIlNob3dFeWVTZWVSZXZlYWxMb29rVmlzaWJsZVwiXG4gIHwgXCJTaHJlZGRlclBlcm1hbmVudGx5XCJcbiAgfCBcIlNodWZmbGVSYW5kb21cIlxuICB8IFwiU2lkZWJhck1lbnVMaXN0V2luZG93XCJcbiAgfCBcIlNpZ25EaXJlY3Rpb25Sb3V0ZVwiXG4gIHwgXCJTaWduYXR1cmVQZW5jaWxQZW5jaWxQZW5Xcml0ZURyYXdcIlxuICB8IFwiU2lnbmF0dXJlU2lnblwiXG4gIHwgXCJTbGlkZXNQYWdlc1wiXG4gIHwgXCJTbWlsZUVtb2ppXCJcbiAgfCBcIlNtaWxleUZhY2VFbW9qaVNtaWxlXCJcbiAgfCBcIlNtaWxpbmdGYWNlSGVhcnRFeWVzXCJcbiAgfCBcIlNub3dDbG91ZFwiXG4gIHwgXCJTbm93Rmxha2VzRnJlZXplRnJvemVuXCJcbiAgfCBcIlNvY2NlckZvb3RiYWxsTWxzXCJcbiAgfCBcIlNvcnRfMVN3aXRjaEhvcml6b250YWxcIlxuICB8IFwiU29ydF8xU3dpdGNoVmVydGljYWxcIlxuICB8IFwiU29ydF8yU3dpdGNoSG9yaXpvbmF0bFwiXG4gIHwgXCJTb3J0XzJTd2l0Y2hWZXJ0aWNhbFwiXG4gIHwgXCJTcGFjZVN0YXJcIlxuICB8IFwiU3BhdGlhbFNwYXRpYWxDYXB0dXJlXCJcbiAgfCBcIlNwZWFrZXJNdXNpY1NvdW5kXCJcbiAgfCBcIlNxdWFyZVBsYWNlaG9sZGVyXCJcbiAgfCBcIlN0YXBsZU5vdGVib29rQ292ZXJcIlxuICB8IFwiU3Rhcl8yTWFnaWNTcGFya2xlXCJcbiAgfCBcIlN0YXJBaVNwYXJrbGVcIlxuICB8IFwiU3RhckZhdm9yaXRlQXdhcmRcIlxuICB8IFwiU3RvY2tzXCJcbiAgfCBcIlN0b3BcIlxuICB8IFwiU3RvcHBDaXJjbGVcIlxuICB8IFwiU3RvcHdhdGNoVHJhY2tcIlxuICB8IFwiU3RvcmFnZUhkZFNzZFwiXG4gIHwgXCJTdG9yZVNob3BCdXNpbmVzc18xXCJcbiAgfCBcIlN0b3JlU2hvcEJ1c2luZXNzXCJcbiAgfCBcIlN0cmVhbWluZ0xpdmVTdHJlYW1cIlxuICB8IFwiU3RyaWtlVGhyb3VnaFwiXG4gIHwgXCJTdHVkaW9EaXNwbGF5VGh1bmRlcmJvbHRcIlxuICB8IFwiU3VpdGNhc2VMdWdnYWdlQ2FzZVwiXG4gIHwgXCJTdW5Eb3duXCJcbiAgfCBcIlN1bkxpZ2h0TW9kZURheVwiXG4gIHwgXCJTdW5VcFwiXG4gIHwgXCJTdW5yaXNlXCJcbiAgfCBcIlN1bnNldFwiXG4gIHwgXCJTdXBwb3J0XCJcbiAgfCBcIlN1cnByaXNlQnVubnlIYXRNYWdpY0hhdFwiXG4gIHwgXCJTeW5jQ2xvdWRTeW5jXCJcbiAgfCBcIlRhYmxlU3ByZWVkc2hlZXRDaGFydFwiXG4gIHwgXCJUYWdTYWxlXCJcbiAgfCBcIlRhcGVcIlxuICB8IFwiVGFyZ2V0XzFab29tXCJcbiAgfCBcIlRhcmdldF8yWm9vbVwiXG4gIHwgXCJUYXJnZXRBcnJvd0dvYWxBaW1cIlxuICB8IFwiVGF4RGlzY291bnRcIlxuICB8IFwiVGVsZXBob25lUGhvbmVDb250YWN0XCJcbiAgfCBcIlRlbGV2aXNpb25fMVR2TW9uaXRvclZpZGVvU2NyZWVuRGlzcGxheVwiXG4gIHwgXCJUZWxldmlzaW9uXzJUdk1vbml0b3JWaWRlb1NjcmVlbkRpc3BsYXlcIlxuICB8IFwiVGVubmlzXCJcbiAgfCBcIlRlc3RUdWJlXCJcbiAgfCBcIlRleHRfMlRfMlwiXG4gIHwgXCJUZXh0SW5kZW50TGVmdFwiXG4gIHwgXCJUZXh0SW5kZW50UmlnaHRcIlxuICB8IFwiVGV4dEluZGljYXRvclwiXG4gIHwgXCJUZXh0U2l6ZVwiXG4gIHwgXCJUZXh0VFwiXG4gIHwgXCJUaHVtYnNEb3duVGh1bWJIYW5kTm9Db250cmFcIlxuICB8IFwiVGh1bWJzVXBUaHVtYkhhbmRZZXNQcm9cIlxuICB8IFwiVGlja2V0QWRtaXRWaXBcIlxuICB8IFwiVGl0bGVDYXNlXCJcbiAgfCBcIlRvYXN0QnJlYWtmZXN0XCJcbiAgfCBcIlRvaWxldFBhcGVyV2lwZVwiXG4gIHwgXCJUb29sYm94XCJcbiAgfCBcIlRyYWRlVHJhZGluZ1wiXG4gIHwgXCJUcmFuc2NyaXB0aW9uXCJcbiAgfCBcIlRyZWVcIlxuICB8IFwiVHJlbmRpbmdfMVRyZW5kc1wiXG4gIHwgXCJUcmVuZGluZ18yVHJlbmRzXCJcbiAgfCBcIlRyZW5kaW5nXzNUcmVuZHNcIlxuICB8IFwiVHJlbmRpbmdfNENoYXJ0QW5hbHl0aWNzXCJcbiAgfCBcIlRyZW5kaW5nXzRDaGFydFwiXG4gIHwgXCJUcm9waHlXaW5DaGFtcGlvblwiXG4gIHwgXCJUcnVja0RlbGl2ZXJ5XCJcbiAgfCBcIlR3b0RpY2VHYW1lUmFuZG9tXCJcbiAgfCBcIlVmb0JlYW1cIlxuICB8IFwiVW1icmVsbGFTZWN1cml0eVwiXG4gIHwgXCJVbmRlcmxpbmVcIlxuICB8IFwiVW5kb0JhY2tCb3R0b21cIlxuICB8IFwiVW5kb0JhY2tUb3BcIlxuICB8IFwiVW5kb2NrQm94QXJyb3dcIlxuICB8IFwiVW5sb2NrZWRVbmxvY2tQcml2YXRlXCJcbiAgfCBcIlVwR2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2tcIlxuICB8IFwiVXBHYW1lcGFkQmFzZVJvdW5kQ29udHJvbGxzR2FtZUpveXN0aWNrXCJcbiAgfCBcIlVwbG9hZFNoYXJlXCJcbiAgfCBcIlVzYkNvbm5lY3Rpb25Db25uZWN0U2F2ZURhdGFcIlxuICB8IFwiVmlkZW9DYW1lcmFfMlwiXG4gIHwgXCJWaWRlb0NhbWVyYU1vdmllUGxheVwiXG4gIHwgXCJWaWRlb0NsYXBwZXJib2FyZFwiXG4gIHwgXCJWaWRlb0NsaXBGaWxtTW92aWVcIlxuICB8IFwiVmlzaW9uUHJvQXBwV2luZG93XCJcbiAgfCBcIlZpc2lvblByb0dvZ2dsZXNcIlxuICB8IFwiVmlzaXRQYWdlT3BlbkFwcFwiXG4gIHwgXCJWb2ljZVwiXG4gIHwgXCJWb2xsZXliYWxsXCJcbiAgfCBcIlZvbHVtZURvd25TcGVha2VyTG91ZFNvdW5kT25NdXNpY1wiXG4gIHwgXCJWb2x1bWVGdWxsU3BlYWtlckxvdWRTb3VuZE9uTXVzaWNcIlxuICB8IFwiVm9sdW1lSGFsZlNwZWFrZXJMb3VkU291bmRPbk11c2ljXCJcbiAgfCBcIlZvbHVtZU1pbmltdW1TcGVha2VyTG91ZFNvdW5kT25NdXNpY1wiXG4gIHwgXCJWb2x1bWVPZmZTcGVha2VyTG91ZFNvdW5kT25NdXNpY18xXCJcbiAgfCBcIlZvbHVtZU9mZlNwZWFrZXJMb3VkU291bmRPbk11c2ljXCJcbiAgfCBcIldhbGxldF8xXCJcbiAgfCBcIldhbGxldF8yXCJcbiAgfCBcIldhbGxldFwiXG4gIHwgXCJXYXRjaF8xQ2xvY2tUaW1lXzFcIlxuICB8IFwiV2F0Y2hfMUNsb2NrVGltZVwiXG4gIHwgXCJXZWIzQ3J5cHRvU3BhY2VcIlxuICB8IFwiV2ViY2FtQ2FtZXJhVmlld1wiXG4gIHwgXCJXaGlzcGVyQXBpXCJcbiAgfCBcIldoaXRlYm9hcmRBcnRib2FyZFwiXG4gIHwgXCJXaWZpXzJTcG90U2lnbmFsSG90U3BvdFwiXG4gIHwgXCJXaWZpU3BvdFNpZ25hbEhvdFNwb3RcIlxuICB8IFwiV2luZHlfMVdpbmRcIlxuICB8IFwiV29ybGRHbG9idXNJbnRlcm5ldFdlYlwiXG4gIHwgXCJXcml0ZUJyaWVmXCJcbiAgfCBcIldyaXRlRWRpdExpc3RMaXN0XCJcbiAgfCBcIlllbkN1cnJlbmN5TW9uZXlDb2luXCJcbiAgfCBcIlphcExpZ2h0bmluZ0ZsYXNoXCJcbiAgfCBcIlppcFJhckNvbXByZXNzZWRBcmNoaXZlXCJcbiAgfCBcIlpvb21TZWFyY2hNYWduaWZ5aW5nR2xhc3NfMVwiXG4gIHwgXCJab29tU2VhcmNoTWFnbmlmeWluZ0dsYXNzXCI7XG5cbmV4cG9ydCBlbnVtIEljb25zIHtcbiAgaTRLID0gXCI0LWtcIixcbiAgQWNjZXNzaWJpbGl0eUExMXkgPSBcImFjY2Vzc2liaWxpdHktYTExeVwiLFxuICBBY2Nlc3NpYmlsaXR5RXllQTExeSA9IFwiYWNjZXNzaWJpbGl0eS1leWUtYTExeVwiLFxuICBBY3Rpdml0eU5vdGlmaWNhdGlvblB1bHNlSGVhcnRiZWF0QmVhdCA9IFwiYWN0aXZpdHktbm90aWZpY2F0aW9uLXB1bHNlLWhlYXJ0YmVhdC1iZWF0XCIsXG4gIEFkZENvbHVtbkFkZFBhZ2UgPSBcImFkZC1jb2x1bW4tYWRkLXBhZ2VcIixcbiAgQWRkUGFnZXNBZGRCb2FyZHMgPSBcImFkZC1wYWdlcy1hZGQtYm9hcmRzXCIsXG4gIEFkZFBhZ2VzV2lkZUFkZEJvYXJkcyA9IFwiYWRkLXBhZ2VzLXdpZGUtYWRkLWJvYXJkc1wiLFxuICBBZGRQZW9wbGVBZGRVc2VyQWRkUGVyc29uXzIgPSBcImFkZC1wZW9wbGUtYWRkLXVzZXItYWRkLXBlcnNvbi0yXCIsXG4gIEFkZFBlb3BsZUFkZFVzZXJBZGRQZXJzb24gPSBcImFkZC1wZW9wbGUtYWRkLXVzZXItYWRkLXBlcnNvblwiLFxuICBBZGRSZWFjdGlvblJlYWN0aW9uRW1vamkgPSBcImFkZC1yZWFjdGlvbi1yZWFjdGlvbi1lbW9qaVwiLFxuICBBZGRSb3dBZGRSb3dzID0gXCJhZGQtcm93LWFkZC1yb3dzXCIsXG4gIEFkZFNoZWV0QWRkQ2FudmFzQWRkUGFnZVZlcnRpY2FsID0gXCJhZGQtc2hlZXQtYWRkLWNhbnZhcy1hZGQtcGFnZS12ZXJ0aWNhbFwiLFxuICBBZGRTbGlkZUFkZENhbnZhc0FkZFBhZ2VIb3Jpem9udGFsID0gXCJhZGQtc2xpZGUtYWRkLWNhbnZhcy1hZGQtcGFnZS1ob3Jpem9udGFsXCIsXG4gIEFkZFNsaWRlQWRkUGFnZUFkZENvcHkgPSBcImFkZC1zbGlkZS1hZGQtcGFnZS1hZGQtY29weVwiLFxuICBBZGRlZFBlb3BsZUFkZFVzZXJBZGRlZFBlcnNvbiA9IFwiYWRkZWQtcGVvcGxlLWFkZC11c2VyLWFkZGVkLXBlcnNvblwiLFxuICBBZHJlc3NQYWNrYWdlRGVsaXZlcnkgPSBcImFkcmVzcy1wYWNrYWdlLWRlbGl2ZXJ5XCIsXG4gIEFpXzJTdGFyc18xODBTcGFya2xlcyA9IFwiYWktMi1zdGFycy0xODAtc3BhcmtsZXNcIixcbiAgQWlfMlN0YXJzU3BhcmtsZXMgPSBcImFpLTItc3RhcnMtc3BhcmtsZXNcIixcbiAgQWlfM1N0YXJzU3BhcmtsZXMgPSBcImFpLTMtc3RhcnMtc3BhcmtsZXNcIixcbiAgQWlBdmF0YXJHZW5lcmF0ZWRBdmF0YXJQcm9maWxlQWlNYWdpY0F2YXRhciA9IFwiYWktYXZhdGFyLWdlbmVyYXRlZC1hdmF0YXItcHJvZmlsZS1haS1tYWdpYy1hdmF0YXJcIixcbiAgQWlJbWFnZXNNaWRqb3VybmV5QWlHZW5lcmF0ZWQgPSBcImFpLWltYWdlcy1taWRqb3VybmV5LWFpLWdlbmVyYXRlZFwiLFxuICBBaVRleHRUZXh0R2VuZXJhdGlvbiA9IFwiYWktdGV4dC10ZXh0LWdlbmVyYXRpb25cIixcbiAgQWlycGxheSA9IFwiYWlycGxheVwiLFxuICBBaXJwb2RDYXNlQWlycG9kcyA9IFwiYWlycG9kLWNhc2UtYWlycG9kc1wiLFxuICBBbGJ1bXMgPSBcImFsYnVtc1wiLFxuICBBbGlnbkJvdHRvbV8yQXJyb3dfMSA9IFwiYWxpZ24tYm90dG9tLTItYXJyb3ctMVwiLFxuICBBbGlnbkJvdHRvbV8yQXJyb3cgPSBcImFsaWduLWJvdHRvbS0yLWFycm93XCIsXG4gIEFsaWduQm90dG9tQWxpZ25tZW50ID0gXCJhbGlnbi1ib3R0b20tYWxpZ25tZW50XCIsXG4gIEFsaWduQm90dG9tQXJyb3cgPSBcImFsaWduLWJvdHRvbS1hcnJvd1wiLFxuICBBbGlnbkxlZnRfMkFycm93ID0gXCJhbGlnbi1sZWZ0LTItYXJyb3dcIixcbiAgQWxpZ25MZWZ0QWxpZ25tZW50ID0gXCJhbGlnbi1sZWZ0LWFsaWdubWVudFwiLFxuICBBbGlnbkxlZnRBcnJvdyA9IFwiYWxpZ24tbGVmdC1hcnJvd1wiLFxuICBBbGlnblJpZ2h0XzJBcnJvdyA9IFwiYWxpZ24tcmlnaHQtMi1hcnJvd1wiLFxuICBBbGlnblJpZ2h0QWxpZ25tZW50ID0gXCJhbGlnbi1yaWdodC1hbGlnbm1lbnRcIixcbiAgQWxpZ25SaWdodEFycm93ID0gXCJhbGlnbi1yaWdodC1hcnJvd1wiLFxuICBBbGlnblRvcEFsaWdubWVudCA9IFwiYWxpZ24tdG9wLWFsaWdubWVudFwiLFxuICBBbGlnblRvcEFycm93ID0gXCJhbGlnbi10b3AtYXJyb3dcIixcbiAgQWxpZ25tZW50QmFyID0gXCJhbGlnbm1lbnQtYmFyXCIsXG4gIEFsaWdubWVudENlbnRlciA9IFwiYWxpZ25tZW50LWNlbnRlclwiLFxuICBBbGlnbm1lbnRKdXN0aWZ5ID0gXCJhbGlnbm1lbnQtanVzdGlmeVwiLFxuICBBbGlnbm1lbnRMZWZ0ID0gXCJhbGlnbm1lbnQtbGVmdFwiLFxuICBBbGlnbm1lbnRSaWdodCA9IFwiYWxpZ25tZW50LXJpZ2h0XCIsXG4gIEFsdEFsdFRleHRBbHRUYWcgPSBcImFsdC1hbHQtdGV4dC1hbHQtdGFnXCIsXG4gIEFsdFRleHQgPSBcImFsdC10ZXh0XCIsXG4gIEFtZXJpY2FuRm9vdGJhbGxOZmwgPSBcImFtZXJpY2FuLWZvb3RiYWxsLW5mbFwiLFxuICBBbmNob3JfMSA9IFwiYW5jaG9yLTFcIixcbiAgQW5jaG9yXzIgPSBcImFuY2hvci0yXCIsXG4gIEFubm90YXRpb25CdWJibGVBZGRQbHVzID0gXCJhbm5vdGF0aW9uLWJ1YmJsZS1hZGQtcGx1c1wiLFxuICBBbm5vdGF0aW9uQnViYmxlQ2hlY2sgPSBcImFubm90YXRpb24tYnViYmxlLWNoZWNrXCIsXG4gIEFubm90YXRpb25CdWJibGVYQ2xvc2VEZWxldGUgPSBcImFubm90YXRpb24tYnViYmxlLXgtY2xvc2UtZGVsZXRlXCIsXG4gIEFub255bW91c0Fub255bUhpZGRlbiA9IFwiYW5vbnltb3VzLWFub255bS1oaWRkZW5cIixcbiAgQXBwbGVGcnVpdCA9IFwiYXBwbGUtZnJ1aXRcIixcbiAgQXJBdWdtZW50ZWRSZWFsaXR5XzNkVmlld0N1YmVfMSA9IFwiYXItYXVnbWVudGVkLXJlYWxpdHktM2Qtdmlldy1jdWJlLTFcIixcbiAgQXJBdWdtZW50ZWRSZWFsaXR5XzNkVmlld0N1YmVfMiA9IFwiYXItYXVnbWVudGVkLXJlYWxpdHktM2Qtdmlldy1jdWJlLTJcIixcbiAgQXJBdWdtZW50ZWRSZWFsaXR5XzNkVmlld0N1YmUgPSBcImFyLWF1Z21lbnRlZC1yZWFsaXR5LTNkLXZpZXctY3ViZVwiLFxuICBBckF1Z21lbnRlZFJlYWxpdHlDYXJkQm94XzNkVmlydHVhbFJlYWxpdHlWciA9IFwiYXItYXVnbWVudGVkLXJlYWxpdHktY2FyZC1ib3gtM2QtdmlydHVhbC1yZWFsaXR5LXZyXCIsXG4gIEFyQXVnbWVudGVkUmVhbGl0eVNjYW5fM2RWaWV3Q3ViZSA9IFwiYXItYXVnbWVudGVkLXJlYWxpdHktc2Nhbi0zZC12aWV3LWN1YmVcIixcbiAgQXJBdWdtZW50ZWRSZWFsaXR5U2Nhbl8zZCA9IFwiYXItYXVnbWVudGVkLXJlYWxpdHktc2Nhbi0zZFwiLFxuICBBckF1Z3VtZW50UmVhbGl0eVZyVmlydHVhbFJlYWxpdHkgPSBcImFyLWF1Z3VtZW50LXJlYWxpdHktdnItdmlydHVhbC1yZWFsaXR5XCIsXG4gIEFyY0Jyb3dzZXJGYWNlID0gXCJhcmMtYnJvd3Nlci1mYWNlXCIsXG4gIEFyY2hpdmVCb3hJbmJveEZpbGUgPSBcImFyY2hpdmUtYm94LWluYm94LWZpbGVcIixcbiAgQXJjaGl2ZUZvbGRlckJveCA9IFwiYXJjaGl2ZS1mb2xkZXItYm94XCIsXG4gIEFyb3VuZFNwYXRpYWwgPSBcImFyb3VuZC1zcGF0aWFsXCIsXG4gIEFycm93Qm90dG9tQ2lyY2xlID0gXCJhcnJvdy1ib3R0b20tY2lyY2xlXCIsXG4gIEFycm93Qm90dG9tTGVmdCA9IFwiYXJyb3ctYm90dG9tLWxlZnRcIixcbiAgQXJyb3dCb3R0b21SaWdodCA9IFwiYXJyb3ctYm90dG9tLXJpZ2h0XCIsXG4gIEFycm93Qm90dG9tID0gXCJhcnJvdy1ib3R0b21cIixcbiAgQXJyb3dFeHBhbmRIID0gXCJhcnJvdy1leHBhbmQtaFwiLFxuICBBcnJvd0V4cGFuZFYgPSBcImFycm93LWV4cGFuZC12XCIsXG4gIEFycm93TGVmdENpcmNsZSA9IFwiYXJyb3ctbGVmdC1jaXJjbGVcIixcbiAgQXJyb3dMZWZ0ID0gXCJhcnJvdy1sZWZ0XCIsXG4gIEFycm93UGF0aERvd24gPSBcImFycm93LXBhdGgtZG93blwiLFxuICBBcnJvd1BhdGhMZWZ0ID0gXCJhcnJvdy1wYXRoLWxlZnRcIixcbiAgQXJyb3dQYXRoUmlnaHQgPSBcImFycm93LXBhdGgtcmlnaHRcIixcbiAgQXJyb3dQYXRoVXAgPSBcImFycm93LXBhdGgtdXBcIixcbiAgQXJyb3dSaWdodENpcmNsZSA9IFwiYXJyb3ctcmlnaHQtY2lyY2xlXCIsXG4gIEFycm93UmlnaHQgPSBcImFycm93LXJpZ2h0XCIsXG4gIEFycm93VG9wQ2lyY2xlID0gXCJhcnJvdy10b3AtY2lyY2xlXCIsXG4gIEFycm93VG9wTGVmdCA9IFwiYXJyb3ctdG9wLWxlZnRcIixcbiAgQXJyb3dUb3BSaWdodCA9IFwiYXJyb3ctdG9wLXJpZ2h0XCIsXG4gIEFycm93VG9wID0gXCJhcnJvdy10b3BcIixcbiAgQXJyb3dUcmlhbmdsZUJvdHRvbSA9IFwiYXJyb3ctdHJpYW5nbGUtYm90dG9tXCIsXG4gIEFycm93VHJpYW5nbGVMZWZ0ID0gXCJhcnJvdy10cmlhbmdsZS1sZWZ0XCIsXG4gIEFycm93VHJpYW5nbGVSaWdodCA9IFwiYXJyb3ctdHJpYW5nbGUtcmlnaHRcIixcbiAgQXJyb3dUcmlhbmdsZVRvcCA9IFwiYXJyb3ctdHJpYW5nbGUtdG9wXCIsXG4gIEFzdGVyaXNrUGxhY2Vob2xkZXIgPSBcImFzdGVyaXNrLXBsYWNlaG9sZGVyXCIsXG4gIEF0ID0gXCJhdFwiLFxuICBBdHRhY2htZW50XzJBdHRhY2hQYXBlckNsaXAgPSBcImF0dGFjaG1lbnQtMi1hdHRhY2gtcGFwZXItY2xpcFwiLFxuICBBdHRhY2htZW50QXR0YWNoRG9jdW1lbnRBdHRhY2hlbWVudExpc3RQYWdlRmlsZSA9IFwiYXR0YWNobWVudC1hdHRhY2gtZG9jdW1lbnQtYXR0YWNoZW1lbnQtbGlzdC1wYWdlLWZpbGVcIixcbiAgQXR0YWNobWVudEF0dGFjaFBhcGVyQ2xpcCA9IFwiYXR0YWNobWVudC1hdHRhY2gtcGFwZXItY2xpcFwiLFxuICBBdWRpb011c2ljUGxheWxpc3RNdXNpY2FsTm90ZSA9IFwiYXVkaW8tbXVzaWMtcGxheWxpc3QtbXVzaWNhbC1ub3RlXCIsXG4gIEF1dG9GbGFzaCA9IFwiYXV0by1mbGFzaFwiLFxuICBBdXRvU2l6ZUF1dG9tYXRpY1NpemVQYWdlUGFnZVNpemUgPSBcImF1dG8tc2l6ZS1hdXRvbWF0aWMtc2l6ZS1wYWdlLXBhZ2Utc2l6ZVwiLFxuICBBdm9jYWRvID0gXCJhdm9jYWRvXCIsXG4gIEJhY2sgPSBcImJhY2tcIixcbiAgQmFja3dhcmREZWxldGVSZW1vdmVLZXkgPSBcImJhY2t3YXJkLWRlbGV0ZS1yZW1vdmUta2V5XCIsXG4gIEJhZGdlVmVyaWZpZWRBd2FyZCA9IFwiYmFkZ2UtdmVyaWZpZWQtYXdhcmRcIixcbiAgQmFnXzJMdWdnYWdlQnVnZ2FnZSA9IFwiYmFnLTItbHVnZ2FnZS1idWdnYWdlXCIsXG4gIEJhZ18yU2hvcHBpbmcgPSBcImJhZy0yLXNob3BwaW5nXCIsXG4gIEJhZ0x1Z2dhZ2VCdWdnYWdlID0gXCJiYWctbHVnZ2FnZS1idWdnYWdlXCIsXG4gIEJhZ1Nob3BwaW5nID0gXCJiYWctc2hvcHBpbmdcIixcbiAgQmFua18xID0gXCJiYW5rLTFcIixcbiAgQmFuayA9IFwiYmFua1wiLFxuICBCYXJjb2RlU2NhbiA9IFwiYmFyY29kZS1zY2FuXCIsXG4gIEJhc2ViYWxsID0gXCJiYXNlYmFsbFwiLFxuICBCYXNrZXRfMUNhcnRTaG9wcGluZyA9IFwiYmFza2V0LTEtY2FydC1zaG9wcGluZ1wiLFxuICBCYXNrZXRfMlNob3BwaW5nQmFnID0gXCJiYXNrZXQtMi1zaG9wcGluZy1iYWdcIixcbiAgQmFza2V0YmFsbE5iYSA9IFwiYmFza2V0YmFsbC1uYmFcIixcbiAgQmF0dGVyeUVtcHR5UG93ZXIgPSBcImJhdHRlcnktZW1wdHktcG93ZXJcIixcbiAgQmF0dGVyeUVycm9yUG93ZXIgPSBcImJhdHRlcnktZXJyb3ItcG93ZXJcIixcbiAgQmF0dGVyeUZ1bGxQb3dlciA9IFwiYmF0dGVyeS1mdWxsLXBvd2VyXCIsXG4gIEJhdHRlcnlMb2FkaW5nUG93ZXIgPSBcImJhdHRlcnktbG9hZGluZy1wb3dlclwiLFxuICBCYXR0ZXJ5TG93UG93ZXIgPSBcImJhdHRlcnktbG93LXBvd2VyXCIsXG4gIEJhdHRlcnlNZWRpdW1Qb3dlciA9IFwiYmF0dGVyeS1tZWRpdW0tcG93ZXJcIixcbiAgQmVsbENvbmNpZXJnZSA9IFwiYmVsbC1jb25jaWVyZ2VcIixcbiAgQmVsbE5vdGlmeSA9IFwiYmVsbC1ub3RpZnlcIixcbiAgQmV6aWVyQWRkUGx1c1ZlY3Rvck5vZGVzID0gXCJiZXppZXItYWRkLXBsdXMtdmVjdG9yLW5vZGVzXCIsXG4gIEJlemllckNpcmNsZVZlY3Rvck5vZGVzID0gXCJiZXppZXItY2lyY2xlLXZlY3Rvci1ub2Rlc1wiLFxuICBCZXppZXJDdXJ2ZUJlemllclZlY3RvciA9IFwiYmV6aWVyLWN1cnZlLWJlemllci12ZWN0b3JcIixcbiAgQmV6aWVyQ3VydmVzQW5pbWF0aW9uTW90aW9uU3ByaW5nID0gXCJiZXppZXItY3VydmVzLWFuaW1hdGlvbi1tb3Rpb24tc3ByaW5nXCIsXG4gIEJlemllclJlbW92ZURlbGV0ZU1pbnVzVmVjdG9yTm9kZXMgPSBcImJlemllci1yZW1vdmUtZGVsZXRlLW1pbnVzLXZlY3Rvci1ub2Rlc1wiLFxuICBCZXppZXJWZWN0b3JOb2Rlc0VkaXRfMSA9IFwiYmV6aWVyLXZlY3Rvci1ub2Rlcy1lZGl0LTFcIixcbiAgQmV6aWVyVmVjdG9yTm9kZXNFZGl0ID0gXCJiZXppZXItdmVjdG9yLW5vZGVzLWVkaXRcIixcbiAgQmV6aWVyVmVjdG9yTm9kZXMgPSBcImJlemllci12ZWN0b3Itbm9kZXNcIixcbiAgQmlsbFB1cmNoYWNlSW52b2ljZV8xID0gXCJiaWxsLXB1cmNoYWNlLWludm9pY2UtMVwiLFxuICBCaWxsUHVyY2hhY2VJbnZvaWNlID0gXCJiaWxsLXB1cmNoYWNlLWludm9pY2VcIixcbiAgQmlydGhkYXlDYWtlID0gXCJiaXJ0aGRheS1jYWtlXCIsXG4gIEJsb2NrQWRzID0gXCJibG9jay1hZHNcIixcbiAgQmxvY2sgPSBcImJsb2NrXCIsXG4gIEJsdWV0b290aCA9IFwiYmx1ZXRvb3RoXCIsXG4gIEJub296ZUJlbGwgPSBcImJub296ZS1iZWxsXCIsXG4gIEJvbGQgPSBcImJvbGRcIixcbiAgQm9tYkJvb20gPSBcImJvbWItYm9vbVwiLFxuICBCb29rXzJHdWlkZUluZm9GYXEgPSBcImJvb2stMi1ndWlkZS1pbmZvLWZhcVwiLFxuICBCb29rR3VpZGVJbmZvRmFxID0gXCJib29rLWd1aWRlLWluZm8tZmFxXCIsXG4gIEJvb2ttYXJrQmFubmVyRmxhZ1RhZyA9IFwiYm9va21hcmstYmFubmVyLWZsYWctdGFnXCIsXG4gIEJvb2ttYXJrQ2hlY2tBZGRDaGVjayA9IFwiYm9va21hcmstY2hlY2stYWRkLWNoZWNrXCIsXG4gIEJvb2ttYXJrRGVsZXRlUmVtb3ZlQmFubmVyRmxhZ1RhZyA9IFwiYm9va21hcmstZGVsZXRlLXJlbW92ZS1iYW5uZXItZmxhZy10YWdcIixcbiAgQm9va21hcmtQbHVzQmFubmVyRmxhZ1RhZyA9IFwiYm9va21hcmstcGx1cy1iYW5uZXItZmxhZy10YWdcIixcbiAgQm90ID0gXCJib3RcIixcbiAgQnJhY2tldHNfMSA9IFwiYnJhY2tldHMtMVwiLFxuICBCcmFja2V0c18yID0gXCJicmFja2V0cy0yXCIsXG4gIEJyYWluQWlUaGlua2luZyA9IFwiYnJhaW4tYWktdGhpbmtpbmdcIixcbiAgQnJhbmNoZXMgPSBcImJyYW5jaGVzXCIsXG4gIEJyb2tlbkxpbmsgPSBcImJyb2tlbi1saW5rXCIsXG4gIEJyb29tQnJ1c2ggPSBcImJyb29tLWJydXNoXCIsXG4gIEJyb3dzZXJfMldpbmRvd0FwcERlc2t0b3AgPSBcImJyb3dzZXItMi13aW5kb3ctYXBwLWRlc2t0b3BcIixcbiAgQnJvd3NlcldpbmRvd0FwcERlc2t0b3AgPSBcImJyb3dzZXItd2luZG93LWFwcC1kZXNrdG9wXCIsXG4gIEJydXNoQ29sb3IgPSBcImJydXNoLWNvbG9yXCIsXG4gIEJ1YmJsZV8yQW5ub3RhdGlvbk1lc3NhZ2UgPSBcImJ1YmJsZS0yLWFubm90YXRpb24tbWVzc2FnZVwiLFxuICBCdWJibGVfMk1lc3NhZ2UgPSBcImJ1YmJsZS0yLW1lc3NhZ2VcIixcbiAgQnViYmxlXzNNZXNzYWdlID0gXCJidWJibGUtMy1tZXNzYWdlXCIsXG4gIEJ1YmJsZV80QW5ub3RhdGlvbk1lc3NhZ2UgPSBcImJ1YmJsZS00LWFubm90YXRpb24tbWVzc2FnZVwiLFxuICBCdWJibGVfNUFubm90YXRpb25NZXNzYWdlID0gXCJidWJibGUtNS1hbm5vdGF0aW9uLW1lc3NhZ2VcIixcbiAgQnViYmxlXzVNZXNzYWdlID0gXCJidWJibGUtNS1tZXNzYWdlXCIsXG4gIEJ1YmJsZV82QW5ub3RhdGlvbk1lc3NhZ2UgPSBcImJ1YmJsZS02LWFubm90YXRpb24tbWVzc2FnZVwiLFxuICBCdWJibGVfNk1lc3NhZ2UgPSBcImJ1YmJsZS02LW1lc3NhZ2VcIixcbiAgQnViYmxlXzdBbm5vdGF0aW9uTWVzc2FnZSA9IFwiYnViYmxlLTctYW5ub3RhdGlvbi1tZXNzYWdlXCIsXG4gIEJ1YmJsZV83TWVzc2FnZSA9IFwiYnViYmxlLTctbWVzc2FnZVwiLFxuICBCdWJibGVfN1RleHRNZXNzYWdlID0gXCJidWJibGUtNy10ZXh0LW1lc3NhZ2VcIixcbiAgQnViYmxlQW5ub3RhdGlvbk1lc3NhZ2UgPSBcImJ1YmJsZS1hbm5vdGF0aW9uLW1lc3NhZ2VcIixcbiAgQnViYmxlTWVzc2FnZUFubm90YXRpb25FeGNsYW1hdGlvbk1hcmtBbGVydFRvb2x0aXAgPSBcImJ1YmJsZS1tZXNzYWdlLWFubm90YXRpb24tZXhjbGFtYXRpb24tbWFyay1hbGVydC10b29sdGlwXCIsXG4gIEJ1YmJsZU1lc3NhZ2VBbm5vdGF0aW9uSW5mb1Rvb2x0aXAgPSBcImJ1YmJsZS1tZXNzYWdlLWFubm90YXRpb24taW5mby10b29sdGlwXCIsXG4gIEJ1YmJsZU1lc3NhZ2VEb3RzVGhyZWVEb3QgPSBcImJ1YmJsZS1tZXNzYWdlLWRvdHMtdGhyZWUtZG90XCIsXG4gIEJ1YmJsZU1lc3NhZ2VMaWtlSGVhcnQgPSBcImJ1YmJsZS1tZXNzYWdlLWxpa2UtaGVhcnRcIixcbiAgQnViYmxlTWVzc2FnZVF1ZXN0aW9uTWFya1Rvb2x0aXAgPSBcImJ1YmJsZS1tZXNzYWdlLXF1ZXN0aW9uLW1hcmstdG9vbHRpcFwiLFxuICBCdWJibGVNZXNzYWdlU3BhcmtsZUFpVG9vbHRpcCA9IFwiYnViYmxlLW1lc3NhZ2Utc3BhcmtsZS1haS10b29sdGlwXCIsXG4gIEJ1YmJsZU1lc3NhZ2VUZXh0ID0gXCJidWJibGUtbWVzc2FnZS10ZXh0XCIsXG4gIEJ1YmJsZU1lc3NhZ2UgPSBcImJ1YmJsZS1tZXNzYWdlXCIsXG4gIEJ1YmJsZU5vdGlmaWNhdGlvbkJhZGdlTWVzc2FnZSA9IFwiYnViYmxlLW5vdGlmaWNhdGlvbi1iYWRnZS1tZXNzYWdlXCIsXG4gIEJ1YmJsZXNfMk1lc3NhZ2VzQ2hhdENvbW11bmljYXRlID0gXCJidWJibGVzLTItbWVzc2FnZXMtY2hhdC1jb21tdW5pY2F0ZVwiLFxuICBCdWJibGVzID0gXCJidWJibGVzXCIsXG4gIEJ1Y2tldFRyYXNoQ2FuID0gXCJidWNrZXQtdHJhc2gtY2FuXCIsXG4gIEJ1Z18xSXNzdWUgPSBcImJ1Zy0xLWlzc3VlXCIsXG4gIEJ1Z0lzc3VlID0gXCJidWctaXNzdWVcIixcbiAgQnVpbGRpbmdzID0gXCJidWlsZGluZ3NcIixcbiAgQnVsbGV0TGlzdCA9IFwiYnVsbGV0LWxpc3RcIixcbiAgQnVyZ2VySGFtYnVyZ2VyQ2hlZXNlYnVyZ2VyU2FuZHdpY2ggPSBcImJ1cmdlci1oYW1idXJnZXItY2hlZXNlYnVyZ2VyLXNhbmR3aWNoXCIsXG4gIEJ1cmdlckhhbWJ1cmdlclNhbmR3aWNoID0gXCJidXJnZXItaGFtYnVyZ2VyLXNhbmR3aWNoXCIsXG4gIEJ1c2luZXNzU2hvcFN0b3JlID0gXCJidXNpbmVzcy1zaG9wLXN0b3JlXCIsXG4gIENhbGN1bGF0b3IgPSBcImNhbGN1bGF0b3JcIixcbiAgQ2FsZW5kYXJfMSA9IFwiY2FsZW5kYXItMVwiLFxuICBDYWxlbmRhcl8yID0gXCJjYWxlbmRhci0yXCIsXG4gIENhbGVuZGFyQWRkSW5zZXJ0RGF0ZSA9IFwiY2FsZW5kYXItYWRkLWluc2VydC1kYXRlXCIsXG4gIENhbGVuZGFyQiA9IFwiY2FsZW5kYXItYlwiLFxuICBDYWxlbmRhckNoZWNrQ2hlY2ttYXJrQWNjZXB0ID0gXCJjYWxlbmRhci1jaGVjay1jaGVja21hcmstYWNjZXB0XCIsXG4gIENhbGVuZGFyQ2hlY2sgPSBcImNhbGVuZGFyLWNoZWNrXCIsXG4gIENhbGVuZGFyRGF0ZVNlYXJjaE1hZ25pZmllckdsYXNzID0gXCJjYWxlbmRhci1kYXRlLXNlYXJjaC1tYWduaWZpZXItZ2xhc3NcIixcbiAgQ2FsZW5kYXJEYXlzID0gXCJjYWxlbmRhci1kYXlzXCIsXG4gIENhbGVuZGFyRWRpdERhdGVFZGl0ID0gXCJjYWxlbmRhci1lZGl0LWRhdGUtZWRpdFwiLFxuICBDYWxlbmRhclRpbWVDbG9jayA9IFwiY2FsZW5kYXItdGltZS1jbG9ja1wiLFxuICBDYWxlbmRhclhDbG9zZVJlbW92ZURlbGV0ZSA9IFwiY2FsZW5kYXIteC1jbG9zZS1yZW1vdmUtZGVsZXRlXCIsXG4gIENhbGVuZGVyQWRkID0gXCJjYWxlbmRlci1hZGRcIixcbiAgQ2FsZW5kZXJSZW1vdmUgPSBcImNhbGVuZGVyLXJlbW92ZVwiLFxuICBDYWxsSW5jb21pbmcgPSBcImNhbGwtaW5jb21pbmdcIixcbiAgQ2FsbE91dGdvaW5nID0gXCJjYWxsLW91dGdvaW5nXCIsXG4gIENhbGxQaG9uZSA9IFwiY2FsbC1waG9uZVwiLFxuICBDYW1lcmFfMU9mZlBpY3R1cmVJbWFnZUNhbSA9IFwiY2FtZXJhLTEtb2ZmLXBpY3R1cmUtaW1hZ2UtY2FtXCIsXG4gIENhbWVyYV8xUGljdHVyZUltYWdlQ2FtID0gXCJjYW1lcmEtMS1waWN0dXJlLWltYWdlLWNhbVwiLFxuICBDYW1lcmFfMlBpY3R1cmVJbWFnZUNhbSA9IFwiY2FtZXJhLTItcGljdHVyZS1pbWFnZS1jYW1cIixcbiAgQ2FtZXJhXzNQaWN0dXJlSW1hZ2VDYW0gPSBcImNhbWVyYS0zLXBpY3R1cmUtaW1hZ2UtY2FtXCIsXG4gIENhbWVyYV80QWN0aW9uQ2FtR29Qcm8gPSBcImNhbWVyYS00LWFjdGlvbi1jYW0tZ28tcHJvXCIsXG4gIENhbWVyYVBpY3R1cmVJbWFnZUNhbUNsb3NlQ3Jvc3NPZmZfMSA9IFwiY2FtZXJhLXBpY3R1cmUtaW1hZ2UtY2FtLWNsb3NlLWNyb3NzLW9mZi0xXCIsXG4gIENhbWVyYVBpY3R1cmVJbWFnZUNhbUNsb3NlQ3Jvc3NPZmYgPSBcImNhbWVyYS1waWN0dXJlLWltYWdlLWNhbS1jbG9zZS1jcm9zcy1vZmZcIixcbiAgQ2FtZXJhID0gXCJjYW1lcmFcIixcbiAgQ2FuY2VsQ2FsbCA9IFwiY2FuY2VsLWNhbGxcIixcbiAgQ2FyID0gXCJjYXJcIixcbiAgQ2FyZHMgPSBcImNhcmRzXCIsXG4gIENhcnVzc2VsU2xpZGVzID0gXCJjYXJ1c3NlbC1zbGlkZXNcIixcbiAgQ2F0SW1hZ2VBbmltYWxDdXRlID0gXCJjYXQtaW1hZ2UtYW5pbWFsLWN1dGVcIixcbiAgQ2VsZWJyYXRlUGFydHlDb25mZXR0aSA9IFwiY2VsZWJyYXRlLXBhcnR5LWNvbmZldHRpXCIsXG4gIENoYXJ0XzFTdGF0aXN0aWNzRmxpcGNoYXJ0UHJlc2VudGF0aW9uR3JhcGggPSBcImNoYXJ0LTEtc3RhdGlzdGljcy1mbGlwY2hhcnQtcHJlc2VudGF0aW9uLWdyYXBoXCIsXG4gIENoYXJ0XzJTdGF0aXN0aWNzRmxpcGNoYXJ0UHJlc2VudGF0aW9uR3JhcGhfMiA9IFwiY2hhcnQtMi1zdGF0aXN0aWNzLWZsaXBjaGFydC1wcmVzZW50YXRpb24tZ3JhcGgtMlwiLFxuICBDaGFydF8zU3RhdGlzdGljc0dyYXBoU2lnbmFsXzEgPSBcImNoYXJ0LTMtc3RhdGlzdGljcy1ncmFwaC1zaWduYWwtMVwiLFxuICBDaGFydF8zU3RhdGlzdGljc0dyYXBoU2lnbmFsID0gXCJjaGFydC0zLXN0YXRpc3RpY3MtZ3JhcGgtc2lnbmFsXCIsXG4gIENoYXJ0XzRTdGF0aXN0aWNzR3JhcGhfMiA9IFwiY2hhcnQtNC1zdGF0aXN0aWNzLWdyYXBoLTJcIixcbiAgQ2hhcnRfNVN0YXRpc3RpY3NHcmFwaF8zID0gXCJjaGFydC01LXN0YXRpc3RpY3MtZ3JhcGgtM1wiLFxuICBDaGFydF82U3RhdGlzdGljc0dyYXBoXzQgPSBcImNoYXJ0LTYtc3RhdGlzdGljcy1ncmFwaC00XCIsXG4gIENoYXJ0XzdTdGF0aXN0aWNzR3JhcGhfNSA9IFwiY2hhcnQtNy1zdGF0aXN0aWNzLWdyYXBoLTVcIixcbiAgQ2hhdEdwdCA9IFwiY2hhdC1ncHRcIixcbiAgQ2hlY2tDaGVjbWFyayA9IFwiY2hlY2stY2hlY21hcmtcIixcbiAgQ2hlY2tSYWRpb0NpcmNsZUNoZWNrYm94Q2hlY2tDaGVja21hcmtDb25maXJtID0gXCJjaGVjay1yYWRpby1jaXJjbGUtY2hlY2tib3gtY2hlY2stY2hlY2ttYXJrLWNvbmZpcm1cIixcbiAgQ2hlY2tib3hDaGVja0NoZWNrbWFya0NvbmZpcm0gPSBcImNoZWNrYm94LWNoZWNrLWNoZWNrbWFyay1jb25maXJtXCIsXG4gIENoZWNrbGlzdEJveENoZWNrTGlzdFNlYXJjaF8xID0gXCJjaGVja2xpc3QtYm94LWNoZWNrLWxpc3Qtc2VhcmNoLTFcIixcbiAgQ2hlY2tsaXN0Qm94Q2hlY2tMaXN0U2VhcmNoID0gXCJjaGVja2xpc3QtYm94LWNoZWNrLWxpc3Qtc2VhcmNoXCIsXG4gIENoZWNrbGlzdEJveENoZWNrTGlzdCA9IFwiY2hlY2tsaXN0LWJveC1jaGVjay1saXN0XCIsXG4gIENoZWNrbGlzdExpc3QgPSBcImNoZWNrbGlzdC1saXN0XCIsXG4gIENoZXZyb25Cb3R0b20gPSBcImNoZXZyb24tYm90dG9tXCIsXG4gIENoZXZyb25Eb3VibGVEb3duID0gXCJjaGV2cm9uLWRvdWJsZS1kb3duXCIsXG4gIENoZXZyb25Eb3VibGVMZWZ0ID0gXCJjaGV2cm9uLWRvdWJsZS1sZWZ0XCIsXG4gIENoZXZyb25Eb3VibGVSaWdodCA9IFwiY2hldnJvbi1kb3VibGUtcmlnaHRcIixcbiAgQ2hldnJvbkRvdWJsZVVwID0gXCJjaGV2cm9uLWRvdWJsZS11cFwiLFxuICBDaGV2cm9uRG93blNtYWxsID0gXCJjaGV2cm9uLWRvd24tc21hbGxcIixcbiAgQ2hldnJvbkdyYWJiZXJIb3Jpem9udGFsXzEgPSBcImNoZXZyb24tZ3JhYmJlci1ob3Jpem9udGFsLTFcIixcbiAgQ2hldnJvbkdyYWJiZXJIb3Jpem9udGFsID0gXCJjaGV2cm9uLWdyYWJiZXItaG9yaXpvbnRhbFwiLFxuICBDaGV2cm9uTGFyZ2VEb3duQ2hldkRvd24gPSBcImNoZXZyb24tbGFyZ2UtZG93bi1jaGV2LWRvd25cIixcbiAgQ2hldnJvbkxhcmdlTGVmdENoZXZMZWZ0ID0gXCJjaGV2cm9uLWxhcmdlLWxlZnQtY2hldi1sZWZ0XCIsXG4gIENoZXZyb25MYXJnZVJpZ2h0Q2hldlJpZ2h0ID0gXCJjaGV2cm9uLWxhcmdlLXJpZ2h0LWNoZXYtcmlnaHRcIixcbiAgQ2hldnJvbkxhcmdlVG9wQ2hldlRvcCA9IFwiY2hldnJvbi1sYXJnZS10b3AtY2hldi10b3BcIixcbiAgQ2hldnJvbkxlZnQgPSBcImNoZXZyb24tbGVmdFwiLFxuICBDaGV2cm9uUmlnaHRTbWFsbF8xID0gXCJjaGV2cm9uLXJpZ2h0LXNtYWxsLTFcIixcbiAgQ2hldnJvblJpZ2h0U21hbGwgPSBcImNoZXZyb24tcmlnaHQtc21hbGxcIixcbiAgQ2hldnJvblJpZ2h0ID0gXCJjaGV2cm9uLXJpZ2h0XCIsXG4gIENoZXZyb25Ub3BTbWFsbCA9IFwiY2hldnJvbi10b3Atc21hbGxcIixcbiAgQ2hldnJvblRvcCA9IFwiY2hldnJvbi10b3BcIixcbiAgQ2hyb21lY2FzdENhc3QgPSBcImNocm9tZWNhc3QtY2FzdFwiLFxuICBDaXJjbGVQbGFjZWhvbGRlck9mZiA9IFwiY2lyY2xlLXBsYWNlaG9sZGVyLW9mZlwiLFxuICBDaXJjbGVQbGFjZWhvbGRlck9uID0gXCJjaXJjbGUtcGxhY2Vob2xkZXItb25cIixcbiAgQ2xpcGJvYXJkXzJDb3B5TGlzdCA9IFwiY2xpcGJvYXJkLTItY29weS1saXN0XCIsXG4gIENsaXBib2FyZENvcHlMaXN0ID0gXCJjbGlwYm9hcmQtY29weS1saXN0XCIsXG4gIENsb2NrQWxlcnRUaW1lciA9IFwiY2xvY2stYWxlcnQtdGltZXJcIixcbiAgQ2xvY2tDaXJjbGVUaW1lID0gXCJjbG9jay1jaXJjbGUtdGltZVwiLFxuICBDbG9ja1Nub296ZVRpbWVyU25vb3plWnogPSBcImNsb2NrLXNub296ZS10aW1lci1zbm9vemUtenpcIixcbiAgQ2xvY2tTcXVhcmVUaW1lVGltZXJXYXRjaCA9IFwiY2xvY2stc3F1YXJlLXRpbWUtdGltZXItd2F0Y2hcIixcbiAgQ2xvc2VRdW90ZUJsb2NrcXVvdGUgPSBcImNsb3NlLXF1b3RlLWJsb2NrcXVvdGVcIixcbiAgQ2xvc2VYQ2hlY2tib3hSZW1vdmUgPSBcImNsb3NlLXgtY2hlY2tib3gtcmVtb3ZlXCIsXG4gIENsb3NlWENpcmNsZVJlbW92ZSA9IFwiY2xvc2UteC1jaXJjbGUtcmVtb3ZlXCIsXG4gIENsb3NlZENhcHRpb25pbmdDYyA9IFwiY2xvc2VkLWNhcHRpb25pbmctY2NcIixcbiAgQ2xvdWRDbG91ZHMgPSBcImNsb3VkLWNsb3Vkc1wiLFxuICBDbG91ZERvd25sb2FkID0gXCJjbG91ZC1kb3dubG9hZFwiLFxuICBDbG91ZExpbmVzU3luY0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJjbG91ZC1saW5lcy1zeW5jLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIENsb3VkT2ZmXzJPZmZsaW5lID0gXCJjbG91ZC1vZmYtMi1vZmZsaW5lXCIsXG4gIENsb3VkT2ZmT2ZmbGluZSA9IFwiY2xvdWQtb2ZmLW9mZmxpbmVcIixcbiAgQ2xvdWRTaW1wbGVBcnJvd0Rvd25Eb3dubG9hZCA9IFwiY2xvdWQtc2ltcGxlLWFycm93LWRvd24tZG93bmxvYWRcIixcbiAgQ2xvdWRTaW1wbGVEaXNjb25uZWN0ZWRFcnJvciA9IFwiY2xvdWQtc2ltcGxlLWRpc2Nvbm5lY3RlZC1lcnJvclwiLFxuICBDbG91ZFNpbXBsZSA9IFwiY2xvdWQtc2ltcGxlXCIsXG4gIENsb3VkU3luY0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJjbG91ZC1zeW5jLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIENsb3VkVXBsb2FkID0gXCJjbG91ZC11cGxvYWRcIixcbiAgQ2xvdWQgPSBcImNsb3VkXCIsXG4gIENsb3VkeUNsb3VkcyA9IFwiY2xvdWR5LWNsb3Vkc1wiLFxuICBDbG91ZHlTdW5DbG91ZHMgPSBcImNsb3VkeS1zdW4tY2xvdWRzXCIsXG4gIENtZEJveENvbW1hbmRBcHBsZUtleSA9IFwiY21kLWJveC1jb21tYW5kLWFwcGxlLWtleVwiLFxuICBDbWRDb21tYW5kQXBwbGVLZXkgPSBcImNtZC1jb21tYW5kLWFwcGxlLWtleVwiLFxuICBDb2RlQnJhY2tldHMgPSBcImNvZGUtYnJhY2tldHNcIixcbiAgQ29kZUluc2VydCA9IFwiY29kZS1pbnNlcnRcIixcbiAgQ29kZUxpbmVzID0gXCJjb2RlLWxpbmVzXCIsXG4gIENvZGUgPSBcImNvZGVcIixcbiAgQ29sb3JQaWNrZXJDb2xvciA9IFwiY29sb3ItcGlja2VyLWNvbG9yXCIsXG4gIENvbG9yU3dhdGNoUGFsZXR0ZUNvbG91cnMgPSBcImNvbG9yLXN3YXRjaC1wYWxldHRlLWNvbG91cnNcIixcbiAgQ29sb3IgPSBcImNvbG9yXCIsXG4gIENvbG9yc1BhbGV0dGVDb2xvdXJzID0gXCJjb2xvcnMtcGFsZXR0ZS1jb2xvdXJzXCIsXG4gIENvbHVtbldpZGVDb2x1bXMgPSBcImNvbHVtbi13aWRlLWNvbHVtc1wiLFxuICBDb21wYXNzUm91bmRCcm93c2VyU2FmYXJpV2ViSW50ZXJuZXROYXZpZ2F0aW9uID0gXCJjb21wYXNzLXJvdW5kLWJyb3dzZXItc2FmYXJpLXdlYi1pbnRlcm5ldC1uYXZpZ2F0aW9uXCIsXG4gIENvbXBhc3NTcXVhcmVCcm93c2VyU2FmYXJpV2ViSW50ZXJuZXROYXZpZ2F0aW9uID0gXCJjb21wYXNzLXNxdWFyZS1icm93c2VyLXNhZmFyaS13ZWItaW50ZXJuZXQtbmF2aWdhdGlvblwiLFxuICBDb25uZWN0RGV2aWNlc01hY2Jvb2tJcGhvbmVQaG9uZSA9IFwiY29ubmVjdC1kZXZpY2VzLW1hY2Jvb2staXBob25lLXBob25lXCIsXG4gIENvbnNvbGVUZXJtaW5hbCA9IFwiY29uc29sZS10ZXJtaW5hbFwiLFxuICBDb250cmFzdCA9IFwiY29udHJhc3RcIixcbiAgQ29udHJvbCA9IFwiY29udHJvbFwiLFxuICBDb29raWVzID0gXCJjb29raWVzXCIsXG4gIENvcHlfMUxheWVyc1BhZ2VzID0gXCJjb3B5LTEtbGF5ZXJzLXBhZ2VzXCIsXG4gIENvcHlfMkxheWVyc1BhZ2VzID0gXCJjb3B5LTItbGF5ZXJzLXBhZ2VzXCIsXG4gIENvcHlfM0xheWVyc1BhZ2VzID0gXCJjb3B5LTMtbGF5ZXJzLXBhZ2VzXCIsXG4gIENvcHlfNExheWVyc1BhZ2VzID0gXCJjb3B5LTQtbGF5ZXJzLXBhZ2VzXCIsXG4gIENvcHlfNUxheWVyc1BhZ2VzID0gXCJjb3B5LTUtbGF5ZXJzLXBhZ2VzXCIsXG4gIENvcm5lckRvd25MZWZ0ID0gXCJjb3JuZXItZG93bi1sZWZ0XCIsXG4gIENvcm5lckRvd25SaWdodCA9IFwiY29ybmVyLWRvd24tcmlnaHRcIixcbiAgQ29ybmVyTGVmdERvd24gPSBcImNvcm5lci1sZWZ0LWRvd25cIixcbiAgQ29ybmVyTGVmdFVwID0gXCJjb3JuZXItbGVmdC11cFwiLFxuICBDb3JuZXJSaWdodERvd24gPSBcImNvcm5lci1yaWdodC1kb3duXCIsXG4gIENvcm5lclJpZ2h0VXAgPSBcImNvcm5lci1yaWdodC11cFwiLFxuICBDb3JuZXJVcFJpZ2h0XzEgPSBcImNvcm5lci11cC1yaWdodC0xXCIsXG4gIENvcm5lclVwUmlnaHQgPSBcImNvcm5lci11cC1yaWdodFwiLFxuICBDb3VydCA9IFwiY291cnRcIixcbiAgQ3JlZGl0Q2FyZF8xQ2FyZFBheW1lbnQgPSBcImNyZWRpdC1jYXJkLTEtY2FyZC1wYXltZW50XCIsXG4gIENyZWRpdENhcmRfMkNhcmRQYXltZW50ID0gXCJjcmVkaXQtY2FyZC0yLWNhcmQtcGF5bWVudFwiLFxuICBDcmVkaXRDYXJkXzNDYXJkUGF5bWVudCA9IFwiY3JlZGl0LWNhcmQtMy1jYXJkLXBheW1lbnRcIixcbiAgQ3JvcCA9IFwiY3JvcFwiLFxuICBDcm9zc2VkTGFyZ2VDbG9zZSA9IFwiY3Jvc3NlZC1sYXJnZS1jbG9zZVwiLFxuICBDcm9zc2VkU21hbGxEZWxldGVSZW1vdmUgPSBcImNyb3NzZWQtc21hbGwtZGVsZXRlLXJlbW92ZVwiLFxuICBDcm93blZpcCA9IFwiY3Jvd24tdmlwXCIsXG4gIENyeXB0b0NvaW4gPSBcImNyeXB0by1jb2luXCIsXG4gIENyeXB0byA9IFwiY3J5cHRvXCIsXG4gIEN1cENvZmZlZVRlYU1pbGsgPSBcImN1cC1jb2ZmZWUtdGVhLW1pbGtcIixcbiAgQ3VwVGVhQ29mZmVlID0gXCJjdXAtdGVhLWNvZmZlZVwiLFxuICBDdXJzb3JfMUFycm93ID0gXCJjdXJzb3ItMS1hcnJvd1wiLFxuICBDdXJzb3JfMkFycm93ID0gXCJjdXJzb3ItMi1hcnJvd1wiLFxuICBDdXJzb3JfM0Fycm93ID0gXCJjdXJzb3ItMy1hcnJvd1wiLFxuICBDdXJzb3JCb3hBcnJvdyA9IFwiY3Vyc29yLWJveC1hcnJvd1wiLFxuICBDdXJzb3JDbGlja0Fycm93Q2xpY2tiYWl0ID0gXCJjdXJzb3ItY2xpY2stYXJyb3ctY2xpY2tiYWl0XCIsXG4gIERhc2hib2FyZEZhc3QgPSBcImRhc2hib2FyZC1mYXN0XCIsXG4gIERhc2hib2FyZExvdyA9IFwiZGFzaGJvYXJkLWxvd1wiLFxuICBEYXNoYm9hcmRNaWRkbGUgPSBcImRhc2hib2FyZC1taWRkbGVcIixcbiAgRGFzaGJvYXJkID0gXCJkYXNoYm9hcmRcIixcbiAgRGF0ZVRpbWVDYWxlbmRhclRpbWUgPSBcImRhdGUtdGltZS1jYWxlbmRhci10aW1lXCIsXG4gIERlYnVnRGVidWdnZXIgPSBcImRlYnVnLWRlYnVnZ2VyXCIsXG4gIERlbGV0ZV8yUmVtb3ZlR2FyYmFnZVdhc3RlVHJhc2hDYW4gPSBcImRlbGV0ZS0yLXJlbW92ZS1nYXJiYWdlLXdhc3RlLXRyYXNoLWNhblwiLFxuICBEZWxldGVSZW1vdmVCYWNrc3BhY2UgPSBcImRlbGV0ZS1yZW1vdmUtYmFja3NwYWNlXCIsXG4gIERlbGV0ZVJlbW92ZUdhcmJhZ2VXYXN0ZVRyYXNoQ2FuID0gXCJkZWxldGUtcmVtb3ZlLWdhcmJhZ2Utd2FzdGUtdHJhc2gtY2FuXCIsXG4gIERlbGV0ZVNpbXBsZSA9IFwiZGVsZXRlLXNpbXBsZVwiLFxuICBEaWNlXzFSb2xsID0gXCJkaWNlLTEtcm9sbFwiLFxuICBEaWNlXzJSb2xsID0gXCJkaWNlLTItcm9sbFwiLFxuICBEaWNlXzNSb2xsID0gXCJkaWNlLTMtcm9sbFwiLFxuICBEaWNlXzRSb2xsID0gXCJkaWNlLTQtcm9sbFwiLFxuICBEaWNlXzVSb2xsID0gXCJkaWNlLTUtcm9sbFwiLFxuICBEaWNlXzZSb2xsID0gXCJkaWNlLTYtcm9sbFwiLFxuICBEaXJlY3RvckNoYWlyUmVnaWVDaGFpciA9IFwiZGlyZWN0b3ItY2hhaXItcmVnaWUtY2hhaXJcIixcbiAgRGlza18xU2F2ZSA9IFwiZGlzay0xLXNhdmVcIixcbiAgRGlza18yU2F2ZSA9IFwiZGlzay0yLXNhdmVcIixcbiAgRGl2aWRlckFkZExpbmUgPSBcImRpdmlkZXItYWRkLWxpbmVcIixcbiAgRG9ja0JveEFycm93ID0gXCJkb2NrLWJveC1hcnJvd1wiLFxuICBEb2N1bWVudExpc3RQYWdlRmlsZSA9IFwiZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIixcbiAgRG9jdW1lbnRXaXRoTGluZXNMaXN0UGFnZUZpbGUgPSBcImRvY3VtZW50LXdpdGgtbGluZXMtbGlzdC1wYWdlLWZpbGVcIixcbiAgRG9sbGFyQ3VycmVuY3lNb25leUNvaW5Vc2QgPSBcImRvbGxhci1jdXJyZW5jeS1tb25leS1jb2luLXVzZFwiLFxuICBEb251dCA9IFwiZG9udXRcIixcbiAgRG9zc2llciA9IFwiZG9zc2llclwiLFxuICBEb3RHcmlkTWVudUdyYWIgPSBcImRvdC1ncmlkLW1lbnUtZ3JhYlwiLFxuICBEb3RIb3Jpem9udGFsTWVudUdyYWIgPSBcImRvdC1ob3Jpem9udGFsLW1lbnUtZ3JhYlwiLFxuICBEb3RWZXJ0aWNhbE1lbnVHcmFiID0gXCJkb3QtdmVydGljYWwtbWVudS1ncmFiXCIsXG4gIERvd25HYW1lcGFkQmFzZUNvbnRyb2xsc0dhbWVKb3lzdGljayA9IFwiZG93bi1nYW1lcGFkLWJhc2UtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIixcbiAgRG93bkdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2sgPSBcImRvd24tZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCIsXG4gIERvd25sb2FkQ2lyY2xlQXJyb3dEb3duID0gXCJkb3dubG9hZC1jaXJjbGUtYXJyb3ctZG93blwiLFxuICBEb3dubG9hZEZpbGVEb3duID0gXCJkb3dubG9hZC1maWxlLWRvd25cIixcbiAgRG93bmxvYWRTcXVhcmVBcnJvd0Rvd24gPSBcImRvd25sb2FkLXNxdWFyZS1hcnJvdy1kb3duXCIsXG4gIERyYWdHcmFiID0gXCJkcmFnLWdyYWJcIixcbiAgRHJpbmtDdXBTdHJhdyA9IFwiZHJpbmstY3VwLXN0cmF3XCIsXG4gIERyb3BXYXRlclByZWNpcGl0YXRpb25MaXF1aWQgPSBcImRyb3Atd2F0ZXItcHJlY2lwaXRhdGlvbi1saXF1aWRcIixcbiAgRWFydGhHbG9iZVdvcmxkID0gXCJlYXJ0aC1nbG9iZS13b3JsZFwiLFxuICBFZGl0XzAxID0gXCJlZGl0LTAxXCIsXG4gIEVkaXRCaWdCb3hQZW5jaWxQZW5Xcml0ZURyYXcgPSBcImVkaXQtYmlnLWJveC1wZW5jaWwtcGVuLXdyaXRlLWRyYXdcIixcbiAgRWRpdFBlbmNpbFdyaXRlID0gXCJlZGl0LXBlbmNpbC13cml0ZVwiLFxuICBFZGl0U21hbGxCb3hQZW5jaWxQZW5Xcml0ZURyYXcgPSBcImVkaXQtc21hbGwtYm94LXBlbmNpbC1wZW4td3JpdGUtZHJhd1wiLFxuICBFbWFpbF8yRW52ZWxvcGVNYWlsID0gXCJlbWFpbC0yLWVudmVsb3BlLW1haWxcIixcbiAgRW1haWxfMk5vdGlmaWNhdGlvbkJhZGdlRW52ZWxvcGVNYWlsID0gXCJlbWFpbC0yLW5vdGlmaWNhdGlvbi1iYWRnZS1lbnZlbG9wZS1tYWlsXCIsXG4gIEVtYWlsRW52ZWxvcGVfMSA9IFwiZW1haWwtZW52ZWxvcGUtMVwiLFxuICBFbWFpbEVudmVsb3BlID0gXCJlbWFpbC1lbnZlbG9wZVwiLFxuICBFcnJvcldhcm5pbmdBbGVydCA9IFwiZXJyb3Itd2FybmluZy1hbGVydFwiLFxuICBFc2NQb3dlciA9IFwiZXNjLXBvd2VyXCIsXG4gIEV0aGVyZXVtID0gXCJldGhlcmV1bVwiLFxuICBFdXJvQ3VycmVuY3lNb25leUNvaW5FdXJvID0gXCJldXJvLWN1cnJlbmN5LW1vbmV5LWNvaW4tZXVyb1wiLFxuICBFeHBhbmRBcnJvd0VubGFyZ2UgPSBcImV4cGFuZC1hcnJvdy1lbmxhcmdlXCIsXG4gIEV4cGFuZFdpbmRvd0xheW91dCA9IFwiZXhwYW5kLXdpbmRvdy1sYXlvdXRcIixcbiAgRXhwbG9zaW9uQm9vbUJhbmdQb3AgPSBcImV4cGxvc2lvbi1ib29tLWJhbmctcG9wXCIsXG4gIEV5ZUNsb3NlZFNlZUhpZGRlbiA9IFwiZXllLWNsb3NlZC1zZWUtaGlkZGVuXCIsXG4gIEZhc3RGb3J3YXJkXzEwcyA9IFwiZmFzdC1mb3J3YXJkLTEwc1wiLFxuICBGYXN0Rm9yd2FyZF8xNXMgPSBcImZhc3QtZm9yd2FyZC0xNXNcIixcbiAgRmFzdEZvcndhcmRfMzBzID0gXCJmYXN0LWZvcndhcmQtMzBzXCIsXG4gIEZhc3RGb3J3YXJkXzVzID0gXCJmYXN0LWZvcndhcmQtNXNcIixcbiAgRmFzdEZvcndhcmRTeW1ib2wgPSBcImZhc3QtZm9yd2FyZC1zeW1ib2xcIixcbiAgRmVhdHVyZXNUb1RoZU1vb24gPSBcImZlYXR1cmVzLXRvLXRoZS1tb29uXCIsXG4gIEZpbGVfMURvY3VtZW50Q2xvdWRTeW5jID0gXCJmaWxlLTEtZG9jdW1lbnQtY2xvdWQtc3luY1wiLFxuICBGaWxlXzJEb2N1bWVudHNDb3B5ID0gXCJmaWxlLTItZG9jdW1lbnRzLWNvcHlcIixcbiAgRmlsZV8zRG9jdW1lbnRDbG91ZFN5bmMgPSBcImZpbGUtMy1kb2N1bWVudC1jbG91ZC1zeW5jXCIsXG4gIEZpbGVfNERvY3VtZW50Q2xvdWRTeW5jID0gXCJmaWxlLTQtZG9jdW1lbnQtY2xvdWQtc3luY1wiLFxuICBGaWxlXzVEb2N1bWVudENsb3VkU3luYyA9IFwiZmlsZS01LWRvY3VtZW50LWNsb3VkLXN5bmNcIixcbiAgRmlsZV82RG9jdW1lbnRUZXh0ID0gXCJmaWxlLTYtZG9jdW1lbnQtdGV4dFwiLFxuICBGaWxlXzdEb2N1bWVudExvY2tlZFBhc3N3b3JkID0gXCJmaWxlLTctZG9jdW1lbnQtbG9ja2VkLXBhc3N3b3JkXCIsXG4gIEZpbGVfOERvY3VtZW50Q2xvdWRTeW5jID0gXCJmaWxlLTgtZG9jdW1lbnQtY2xvdWQtc3luY1wiLFxuICBGaWx0ZXJfMVNvcnQgPSBcImZpbHRlci0xLXNvcnRcIixcbiAgRmlsdGVyXzJTb3J0ID0gXCJmaWx0ZXItMi1zb3J0XCIsXG4gIEZpbHRlckFzY2VuZGluZ1NvcnRBekFzY2VuZGluZ0FzYyA9IFwiZmlsdGVyLWFzY2VuZGluZy1zb3J0LWF6LWFzY2VuZGluZy1hc2NcIixcbiAgRmlsdGVyRGVzY2VuZGluZ1NvcnRaYURlc2NlbmRpbmdEZXNjID0gXCJmaWx0ZXItZGVzY2VuZGluZy1zb3J0LXphLWRlc2NlbmRpbmctZGVzY1wiLFxuICBGaWx0ZXJUaW1lbGluZVNvcnQgPSBcImZpbHRlci10aW1lbGluZS1zb3J0XCIsXG4gIEZpbmRlckZhY2VJZCA9IFwiZmluZGVyLWZhY2UtaWRcIixcbiAgRmluZGVyRmlsZXNPcyA9IFwiZmluZGVyLWZpbGVzLW9zXCIsXG4gIEZpbmdlclByaW50XzJUb3VjaElkID0gXCJmaW5nZXItcHJpbnQtMi10b3VjaC1pZFwiLFxuICBGaW5nZXJQcmludFRvdWNoSWQgPSBcImZpbmdlci1wcmludC10b3VjaC1pZFwiLFxuICBGaXJlXzFGbGFtZUhvdEhlYXQgPSBcImZpcmUtMS1mbGFtZS1ob3QtaGVhdFwiLFxuICBGaXJlXzJGbGFtZUhvdEhlYXQgPSBcImZpcmUtMi1mbGFtZS1ob3QtaGVhdFwiLFxuICBGaXN0YnVtcEJvb21IYW5kc0ZyaWVuZHMgPSBcImZpc3RidW1wLWJvb20taGFuZHMtZnJpZW5kc1wiLFxuICBGbGFnXzJQcmlvcml0eV8xID0gXCJmbGFnLTItcHJpb3JpdHktMVwiLFxuICBGbGFnXzJQcmlvcml0eSA9IFwiZmxhZy0yLXByaW9yaXR5XCIsXG4gIEZvY3VzQ2FtZXJhRXhwb3N1cmVBdXRvZm9jdXNBdXRvID0gXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtYXV0b2ZvY3VzLWF1dG9cIixcbiAgRm9jdXNDYW1lcmFFeHBvc3VyZUZsYXNoID0gXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtZmxhc2hcIixcbiAgRm9jdXNDYW1lcmFFeHBvc3VyZUxvY2sgPSBcImZvY3VzLWNhbWVyYS1leHBvc3VyZS1sb2NrXCIsXG4gIEZvY3VzQ2FtZXJhRXhwb3N1cmVNYWNyb0Zsb3dlciA9IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlLW1hY3JvLWZsb3dlclwiLFxuICBGb2N1c0NhbWVyYUV4cG9zdXJlTWFnaWNBdXRvQWlTcGFya2xlc0VmZmVjdHMgPSBcImZvY3VzLWNhbWVyYS1leHBvc3VyZS1tYWdpYy1hdXRvLWFpLXNwYXJrbGVzLWVmZmVjdHNcIixcbiAgRm9jdXNDYW1lcmFFeHBvc3VyZVNxdWFyZSA9IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlLXNxdWFyZVwiLFxuICBGb2N1c0NhbWVyYUV4cG9zdXJlVW5sb2NrID0gXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtdW5sb2NrXCIsXG4gIEZvY3VzQ2FtZXJhRXhwb3N1cmVab29tSW4gPSBcImZvY3VzLWNhbWVyYS1leHBvc3VyZS16b29tLWluXCIsXG4gIEZvY3VzQ2FtZXJhRXhwb3N1cmVab29tT3V0ID0gXCJmb2N1cy1jYW1lcmEtZXhwb3N1cmUtem9vbS1vdXRcIixcbiAgRm9jdXNDYW1lcmFFeHBvc3VyZSA9IFwiZm9jdXMtY2FtZXJhLWV4cG9zdXJlXCIsXG4gIEZvY3VzRXhwb3N1cmVNYWNyb0Zsb3dlcl8yID0gXCJmb2N1cy1leHBvc3VyZS1tYWNyby1mbG93ZXItMlwiLFxuICBGb2xkZXJfMSA9IFwiZm9sZGVyLTFcIixcbiAgRm9sZGVyXzIgPSBcImZvbGRlci0yXCIsXG4gIEZvbGRlcl8zID0gXCJmb2xkZXItM1wiLFxuICBGb2xkZXJBZGRQbHVzID0gXCJmb2xkZXItYWRkLXBsdXNcIixcbiAgRm9sZGVyQm9va21hcmtzQm9va21hcmsgPSBcImZvbGRlci1ib29rbWFya3MtYm9va21hcmtcIixcbiAgRm9sZGVyQ2xvdWRfMSA9IFwiZm9sZGVyLWNsb3VkLTFcIixcbiAgRm9sZGVyQ2xvdWRfMiA9IFwiZm9sZGVyLWNsb3VkLTJcIixcbiAgRm9sZGVyRGVsZXRlWCA9IFwiZm9sZGVyLWRlbGV0ZS14XCIsXG4gIEZvbGRlckRvd25sb2FkID0gXCJmb2xkZXItZG93bmxvYWRcIixcbiAgRm9sZGVyUmVzdHJpY3RlZCA9IFwiZm9sZGVyLXJlc3RyaWN0ZWRcIixcbiAgRm9sZGVyU2hhcmVkVXNlciA9IFwiZm9sZGVyLXNoYXJlZC11c2VyXCIsXG4gIEZvbGRlclVwbG9hZCA9IFwiZm9sZGVyLXVwbG9hZFwiLFxuICBGb2xkZXIgPSBcImZvbGRlclwiLFxuICBGb2xkZXJzID0gXCJmb2xkZXJzXCIsXG4gIEZvcmsgPSBcImZvcmtcIixcbiAgRm9yd2FyZHMgPSBcImZvcndhcmRzXCIsXG4gIEdhbWVwYWRCYXNlQ29udHJvbGxzR2FtZUpveXN0aWNrID0gXCJnYW1lcGFkLWJhc2UtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIixcbiAgR2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGljayA9IFwiZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCIsXG4gIEdhbWVwYWRHYW1pbmdKb3lzdGlja0dhbWVzID0gXCJnYW1lcGFkLWdhbWluZy1qb3lzdGljay1nYW1lc1wiLFxuICBHYXJhZ2UgPSBcImdhcmFnZVwiLFxuICBHYXMgPSBcImdhc1wiLFxuICBHZWFyQ29nV2hlZWwgPSBcImdlYXItY29nLXdoZWVsXCIsXG4gIEdob3N0SGlkZGVuVW5rbm93biA9IFwiZ2hvc3QtaGlkZGVuLXVua25vd25cIixcbiAgR2lmU3F1YXJlID0gXCJnaWYtc3F1YXJlXCIsXG4gIEdpZiA9IFwiZ2lmXCIsXG4gIEdpZnRTaWRlVmlld1ByZXNlbnQgPSBcImdpZnQtc2lkZS12aWV3LXByZXNlbnRcIixcbiAgR2lmdFRvcFZpZXcgPSBcImdpZnQtdG9wLXZpZXdcIixcbiAgR2lmdGNhcmQgPSBcImdpZnRjYXJkXCIsXG4gIEdpcm9DYXJkID0gXCJnaXJvLWNhcmRcIixcbiAgR2xvYnVzTWFwRWFydGhHbG9iZSA9IFwiZ2xvYnVzLW1hcC1lYXJ0aC1nbG9iZVwiLFxuICBHb2xmQmFsbCA9IFwiZ29sZi1iYWxsXCIsXG4gIEdyYWR1YXRlQ2FwU3R1ZHlFZHVjYXRpb25BY2FkZW1pY1N0dWRlbnQgPSBcImdyYWR1YXRlLWNhcC1zdHVkeS1lZHVjYXRpb24tYWNhZGVtaWMtc3R1ZGVudFwiLFxuICBHcmFwaExpbmVzU3RhdGlzdGljc0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJncmFwaC1saW5lcy1zdGF0aXN0aWNzLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIEdyYXBoU3RhdGlzdGljc0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJncmFwaC1zdGF0aXN0aWNzLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIEdyb3d0aEdyb3dMZWFmcyA9IFwiZ3Jvd3RoLWdyb3ctbGVhZnNcIixcbiAgSDFIZWFkaW5nSGVhZGxpbmUgPSBcImgxLWhlYWRpbmctaGVhZGxpbmVcIixcbiAgSDJIZWFkaW5nSGVhZGxpbmUgPSBcImgyLWhlYWRpbmctaGVhZGxpbmVcIixcbiAgSDNIZWFkaW5nSGVhZGxpbmUgPSBcImgzLWhlYWRpbmctaGVhZGxpbmVcIixcbiAgSGFuZF80RmluZ2VyU2VsZWN0ID0gXCJoYW5kLTQtZmluZ2VyLXNlbGVjdFwiLFxuICBIYW5kXzVGaW5nZXJTZWxlY3QgPSBcImhhbmQtNS1maW5nZXItc2VsZWN0XCIsXG4gIEhhc2h0YWcgPSBcImhhc2h0YWdcIixcbiAgSGQgPSBcImhkXCIsXG4gIEhlYWRBdmF0YXIgPSBcImhlYWQtYXZhdGFyXCIsXG4gIEhlYWRwaG9uZXNTdXBwb3J0ID0gXCJoZWFkcGhvbmVzLXN1cHBvcnRcIixcbiAgSGVhcnRfMkxpa2VIZWFsdGhMaWZlRmF2ID0gXCJoZWFydC0yLWxpa2UtaGVhbHRoLWxpZmUtZmF2XCIsXG4gIEhlYXJ0QmVhdEhlYXJ0UmF0ZVB1bHNlID0gXCJoZWFydC1iZWF0LWhlYXJ0LXJhdGUtcHVsc2VcIixcbiAgSGVhcnRMaWtlSGVhbHRoTGlmZUZhdm9yaXRlID0gXCJoZWFydC1saWtlLWhlYWx0aC1saWZlLWZhdm9yaXRlXCIsXG4gIEhpZGVFeWVPZmZTZWVMb29rTm90VmlzaWJsZSA9IFwiaGlkZS1leWUtb2ZmLXNlZS1sb29rLW5vdC12aXNpYmxlXCIsXG4gIEhpZ2hsaWdodCA9IFwiaGlnaGxpZ2h0XCIsXG4gIEhvbWVEb29ySG91c2VfMSA9IFwiaG9tZS1kb29yLWhvdXNlLTFcIixcbiAgSG9tZURvb3JIb3VzZSA9IFwiaG9tZS1kb29yLWhvdXNlXCIsXG4gIEhvbWVMaW5lSG91c2UgPSBcImhvbWUtbGluZS1ob3VzZVwiLFxuICBIb21lT3BlbkhvdXNlID0gXCJob21lLW9wZW4taG91c2VcIixcbiAgSG9tZVJvb2ZIb3VzZSA9IFwiaG9tZS1yb29mLWhvdXNlXCIsXG4gIEhvbWVTaW1wbGVIb3VzZV8xID0gXCJob21lLXNpbXBsZS1ob3VzZS0xXCIsXG4gIEhvbWVTaW1wbGVIb3VzZSA9IFwiaG9tZS1zaW1wbGUtaG91c2VcIixcbiAgSG91cmdsYXNzVGltZVdhdGNoQ2xvY2sgPSBcImhvdXJnbGFzcy10aW1lLXdhdGNoLWNsb2NrXCIsXG4gIEljZUhvY2tleSA9IFwiaWNlLWhvY2tleVwiLFxuICBJY29uSWNvbnNTaGFwZXNHYW1lcyA9IFwiaWNvbi1pY29ucy1zaGFwZXMtZ2FtZXNcIixcbiAgSW1hY0NvbXB1dGVyRGV2aWNlXzIgPSBcImltYWMtY29tcHV0ZXItZGV2aWNlLTJcIixcbiAgSW1hZ2VXYWxscGFwZXJMYW5kc2NhcGVPcyA9IFwiaW1hZ2Utd2FsbHBhcGVyLWxhbmRzY2FwZS1vc1wiLFxuICBJbWFnZXNfMVBob3Rvc1BpY3R1cmVzU2hvdCA9IFwiaW1hZ2VzLTEtcGhvdG9zLXBpY3R1cmVzLXNob3RcIixcbiAgSW1hZ2VzXzJQaG90b3NQaWN0dXJlc1Nob3QgPSBcImltYWdlcy0yLXBob3Rvcy1waWN0dXJlcy1zaG90XCIsXG4gIEltYWdlc18zUGhvdG9zUGljdHVyZXNTaG90ID0gXCJpbWFnZXMtMy1waG90b3MtcGljdHVyZXMtc2hvdFwiLFxuICBJbWFnZXNfNFBob3Rvc1BpY3R1cmVzU2hvdCA9IFwiaW1hZ2VzLTQtcGhvdG9zLXBpY3R1cmVzLXNob3RcIixcbiAgSW1hZ2VzXzVQaG90b3NQaWN0dXJlc1Nob3QgPSBcImltYWdlcy01LXBob3Rvcy1waWN0dXJlcy1zaG90XCIsXG4gIEluYm94XzFBcmNoaXZlVHJheVNoZWxmID0gXCJpbmJveC0xLWFyY2hpdmUtdHJheS1zaGVsZlwiLFxuICBJbmJveF8yQXJjaGl2ZVRyYXlTaGVsZiA9IFwiaW5ib3gtMi1hcmNoaXZlLXRyYXktc2hlbGZcIixcbiAgSW5maW5pdHlMb29wQm9vbWVyYW5nID0gXCJpbmZpbml0eS1sb29wLWJvb21lcmFuZ1wiLFxuICBJbmZvQ2lyY2xlVG9vbHRpcCA9IFwiaW5mby1jaXJjbGUtdG9vbHRpcFwiLFxuICBJbmZvU3F1YXJlID0gXCJpbmZvLXNxdWFyZVwiLFxuICBJbnZpdGVfMSA9IFwiaW52aXRlLTFcIixcbiAgSW52aXRlID0gXCJpbnZpdGVcIixcbiAgSXRhbGljID0gXCJpdGFsaWNcIixcbiAgS2V5ID0gXCJrZXlcIixcbiAgS2V5Ym9hcmREb3duQ2xvc2VEb3duT3BlbkFycm93ID0gXCJrZXlib2FyZC1kb3duLWNsb3NlLWRvd24tb3Blbi1hcnJvd1wiLFxuICBLZXlib2FyZE1pZGlLZXlzUGlhbm8gPSBcImtleWJvYXJkLW1pZGkta2V5cy1waWFub1wiLFxuICBLZXlib2FyZFVwXzFDbG9zZURvd25PcGVuQXJyb3cgPSBcImtleWJvYXJkLXVwLTEtY2xvc2UtZG93bi1vcGVuLWFycm93XCIsXG4gIEtleWJvYXJkVXBfMkNsb3NlRG93bk9wZW5BcnJvdyA9IFwia2V5Ym9hcmQtdXAtMi1jbG9zZS1kb3duLW9wZW4tYXJyb3dcIixcbiAgTGFiID0gXCJsYWJcIixcbiAgTGF1bmNoUm9ja2V0ID0gXCJsYXVuY2gtcm9ja2V0XCIsXG4gIExhd0xlZ2FsVGVybXNJbXByaW50QmFsYW5jZSA9IFwibGF3LWxlZ2FsLXRlcm1zLWltcHJpbnQtYmFsYW5jZVwiLFxuICBMYXllckJlaGluZFNsaWRlc1BhZ2VzID0gXCJsYXllci1iZWhpbmQtc2xpZGVzLXBhZ2VzXCIsXG4gIExheWVyc18yU3RhY2sgPSBcImxheWVycy0yLXN0YWNrXCIsXG4gIExheWVyc18zU3RhY2sgPSBcImxheWVycy0zLXN0YWNrXCIsXG4gIExheWVyc0NvcHkgPSBcImxheWVycy1jb3B5XCIsXG4gIExheW91dF8yUm93c0dyaWRXaW5kb3cgPSBcImxheW91dC0yLXJvd3MtZ3JpZC13aW5kb3dcIixcbiAgTGF5b3V0XzNSb3dzR3JpZFdpbmRvdyA9IFwibGF5b3V0LTMtcm93cy1ncmlkLXdpbmRvd1wiLFxuICBMYXlvdXRCb3R0b21HcmlkV2luZG93ID0gXCJsYXlvdXQtYm90dG9tLWdyaWQtd2luZG93XCIsXG4gIExheW91dENvbHVtbkdyaWRDb2x1bW4gPSBcImxheW91dC1jb2x1bW4tZ3JpZC1jb2x1bW5cIixcbiAgTGF5b3V0RGFzaGJvYXJkR3JpZFdpbmRvdyA9IFwibGF5b3V0LWRhc2hib2FyZC1ncmlkLXdpbmRvd1wiLFxuICBMYXlvdXRHcmlkXzFHcmlkV2luZG93ID0gXCJsYXlvdXQtZ3JpZC0xLWdyaWQtd2luZG93XCIsXG4gIExheW91dEdyaWRfMkdyaWQgPSBcImxheW91dC1ncmlkLTItZ3JpZFwiLFxuICBMYXlvdXRHcmlkTGlzdFNlYXJjaEZpbmRNYWdpZmllciA9IFwibGF5b3V0LWdyaWQtbGlzdC1zZWFyY2gtZmluZC1tYWdpZmllclwiLFxuICBMYXlvdXRMZWZ0R3JpZFdpbmRvdyA9IFwibGF5b3V0LWxlZnQtZ3JpZC13aW5kb3dcIixcbiAgTGF5b3V0UmlnaHRHcmlkV2luZG93ID0gXCJsYXlvdXQtcmlnaHQtZ3JpZC13aW5kb3dcIixcbiAgTGF5b3V0U2lkZWJhckdyaWRXaW5kb3cgPSBcImxheW91dC1zaWRlYmFyLWdyaWQtd2luZG93XCIsXG4gIExheW91dFRvcEdyaWRXaW5kb3cgPSBcImxheW91dC10b3AtZ3JpZC13aW5kb3dcIixcbiAgTGF5b3V0VG9wYmFyR3JpZFdpbmRvdyA9IFwibGF5b3V0LXRvcGJhci1ncmlkLXdpbmRvd1wiLFxuICBMYXlvdXRXaW5kb3dHcmlkV2luZG93ID0gXCJsYXlvdXQtd2luZG93LWdyaWQtd2luZG93XCIsXG4gIExlZnRHYW1lcGFkQmFzZUNvbnRyb2xsc0dhbWVKb3lzdGljayA9IFwibGVmdC1nYW1lcGFkLWJhc2UtY29udHJvbGxzLWdhbWUtam95c3RpY2tcIixcbiAgTGVmdEdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2sgPSBcImxlZnQtZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCIsXG4gIExpYnJhcnkgPSBcImxpYnJhcnlcIixcbiAgTGlmZVZlc3RWZXN0ID0gXCJsaWZlLXZlc3QtdmVzdFwiLFxuICBMaWdodEJ1bGJJZGVhTGlnaHQgPSBcImxpZ2h0LWJ1bGItaWRlYS1saWdodFwiLFxuICBMaWdodEJ1bGJTaW1wbGVJZGVhID0gXCJsaWdodC1idWxiLXNpbXBsZS1pZGVhXCIsXG4gIExpZ2h0UmFpbiA9IFwibGlnaHQtcmFpblwiLFxuICBMaWdodG5pbmdaYXBGbGFzaCA9IFwibGlnaHRuaW5nLXphcC1mbGFzaFwiLFxuICBMaW5lQ2hhcnRfMlN0YXRpc3RpY3NHcmFwaCA9IFwibGluZS1jaGFydC0yLXN0YXRpc3RpY3MtZ3JhcGhcIixcbiAgTGluZUNoYXJ0XzNTdGF0aXN0aWNzR3JhcGhfMSA9IFwibGluZS1jaGFydC0zLXN0YXRpc3RpY3MtZ3JhcGgtMVwiLFxuICBMaW5lQ2hhcnRfM1N0YXRpc3RpY3NHcmFwaCA9IFwibGluZS1jaGFydC0zLXN0YXRpc3RpY3MtZ3JhcGhcIixcbiAgTGluZUNoYXJ0U3RhdGlzdGljc0dyYXBoID0gXCJsaW5lLWNoYXJ0LXN0YXRpc3RpY3MtZ3JhcGhcIixcbiAgTGlua18xQ2hhaW4gPSBcImxpbmstMS1jaGFpblwiLFxuICBMaW5rXzJDaGFpbiA9IFwibGluay0yLWNoYWluXCIsXG4gIExpbmtfM0NoYWluID0gXCJsaW5rLTMtY2hhaW5cIixcbiAgTGlua0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJsaW5rLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIExpbmtMaW5lc0RvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJsaW5rLWxpbmVzLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIExpc3RTZWFyY2hGaW5kTWFnaWZpZXIgPSBcImxpc3Qtc2VhcmNoLWZpbmQtbWFnaWZpZXJcIixcbiAgTGl2ZVNpZ25hbCA9IFwibGl2ZS1zaWduYWxcIixcbiAgTG9hZGVyID0gXCJsb2FkZXJcIixcbiAgTG9jYXRpb25FeHBsb3JlQ29tcGFzcyA9IFwibG9jYXRpb24tZXhwbG9yZS1jb21wYXNzXCIsXG4gIExvY2F0aW9uTWFwUm91dGUgPSBcImxvY2F0aW9uLW1hcC1yb3V0ZVwiLFxuICBMb2NrUHJpdmF0ZSA9IFwibG9jay1wcml2YXRlXCIsXG4gIExvZ2luRW50ZXJEb29yID0gXCJsb2dpbi1lbnRlci1kb29yXCIsXG4gIExvZ291dExlYXZlRG9vciA9IFwibG9nb3V0LWxlYXZlLWRvb3JcIixcbiAgTWFjYm9va0xhcHRvcENvbXB1dGVyRGV2aWNlID0gXCJtYWNib29rLWxhcHRvcC1jb21wdXRlci1kZXZpY2VcIixcbiAgTWFjaW50aG9zaE1hYyA9IFwibWFjaW50aG9zaC1tYWNcIixcbiAgTWFnaWNCb29rTWFnaWNpYW4gPSBcIm1hZ2ljLWJvb2stbWFnaWNpYW5cIixcbiAgTWFnaWNCb3ggPSBcIm1hZ2ljLWJveFwiLFxuICBNYWdpY0V5ZXMgPSBcIm1hZ2ljLWV5ZXNcIixcbiAgTWFnaWNIYW5kc01hZ2ljUmFpbmJvdyA9IFwibWFnaWMtaGFuZHMtbWFnaWMtcmFpbmJvd1wiLFxuICBNYWdpY0hhdCA9IFwibWFnaWMtaGF0XCIsXG4gIE1hZ2ljUGVuY2lsTWFnaWNCcnVzaCA9IFwibWFnaWMtcGVuY2lsLW1hZ2ljLWJydXNoXCIsXG4gIE1hZ2ljU3RpY2tTdGFyID0gXCJtYWdpYy1zdGljay1zdGFyXCIsXG4gIE1hZ2ljU3RpY2tUb3AgPSBcIm1hZ2ljLXN0aWNrLXRvcFwiLFxuICBNYWdpY1N0aWNrID0gXCJtYWdpYy1zdGlja1wiLFxuICBNYXBQYXBlciA9IFwibWFwLXBhcGVyXCIsXG4gIE1hcmtkb3duID0gXCJtYXJrZG93blwiLFxuICBNZWRhbFRyb3BoeUJhZGdlV2lubmVyV2luID0gXCJtZWRhbC10cm9waHktYmFkZ2Utd2lubmVyLXdpblwiLFxuICBNZWdhcGhvbmVMb3VkU3BlYWtQcm9tb3RlID0gXCJtZWdhcGhvbmUtbG91ZC1zcGVhay1wcm9tb3RlXCIsXG4gIE1lbW9yeV8xU2ltQ2FyZENhcmQgPSBcIm1lbW9yeS0xLXNpbS1jYXJkLWNhcmRcIixcbiAgTWVtb3J5XzJTaW1DYXJkU2RDYXJkID0gXCJtZW1vcnktMi1zaW0tY2FyZC1zZC1jYXJkXCIsXG4gIE1lbnVfMUdyaWRDaXJjbGUgPSBcIm1lbnUtMS1ncmlkLWNpcmNsZVwiLFxuICBNZW51XzFMaXN0SGFtYnVyZ2VyID0gXCJtZW51LTEtbGlzdC1oYW1idXJnZXJcIixcbiAgTWVudV8yR3JpZENpcmNsZSA9IFwibWVudS0yLWdyaWQtY2lyY2xlXCIsXG4gIE1lbnVfMkxpc3RIYW1idXJnZXIgPSBcIm1lbnUtMi1saXN0LWhhbWJ1cmdlclwiLFxuICBNZW51XzNMaXN0SGFtYnVyZ2VyID0gXCJtZW51LTMtbGlzdC1oYW1idXJnZXJcIixcbiAgTWVudVNpbXBsZU5hdlNpbXBsZSA9IFwibWVudS1zaW1wbGUtbmF2LXNpbXBsZVwiLFxuICBNaWNyb3Bob25lTWljU291bmRQb2RjYXN0XzEgPSBcIm1pY3JvcGhvbmUtbWljLXNvdW5kLXBvZGNhc3QtMVwiLFxuICBNaWNyb3Bob25lTWljU291bmRQb2RjYXN0ID0gXCJtaWNyb3Bob25lLW1pYy1zb3VuZC1wb2RjYXN0XCIsXG4gIE1pbmltaXplQXJyb3dTaHJpbmsgPSBcIm1pbmltaXplLWFycm93LXNocmlua1wiLFxuICBNaW5pbWl6ZVdpbmRvd0xheW91dCA9IFwibWluaW1pemUtd2luZG93LWxheW91dFwiLFxuICBNaW51c0NpcmNsZVJlbW92ZSA9IFwibWludXMtY2lyY2xlLXJlbW92ZVwiLFxuICBNaW51c0xhcmdlID0gXCJtaW51cy1sYXJnZVwiLFxuICBNaW51c1NtYWxsID0gXCJtaW51cy1zbWFsbFwiLFxuICBNaW51c1NxdWFyZVJlbW92ZURlbGV0ZSA9IFwibWludXMtc3F1YXJlLXJlbW92ZS1kZWxldGVcIixcbiAgTW9uZXlCaWxsRG9sbGFyRXVybyA9IFwibW9uZXktYmlsbC1kb2xsYXItZXVyb1wiLFxuICBNb25leUhhbmRDb2lucyA9IFwibW9uZXktaGFuZC1jb2luc1wiLFxuICBNb29uRGFya01vZGVOaWdodCA9IFwibW9vbi1kYXJrLW1vZGUtbmlnaHRcIixcbiAgTW9vblN0YXJOaWdodCA9IFwibW9vbi1zdGFyLW5pZ2h0XCIsXG4gIE1vdXNlXzEgPSBcIm1vdXNlLTFcIixcbiAgTW91c2VfMlNjcm9sbERvd24gPSBcIm1vdXNlLTItc2Nyb2xsLWRvd25cIixcbiAgTW91c2VfM1Njcm9sbFVwID0gXCJtb3VzZS0zLXNjcm9sbC11cFwiLFxuICBNb3ZlRm9jdXMgPSBcIm1vdmUtZm9jdXNcIixcbiAgTW92ZSA9IFwibW92ZVwiLFxuICBNdWx0aU1lZGlhTWVkaWFJbWFnZUFuZFZpZGVvID0gXCJtdWx0aS1tZWRpYS1tZWRpYS1pbWFnZS1hbmQtdmlkZW9cIixcbiAgTXV0ZVNvdW5kT2ZmID0gXCJtdXRlLXNvdW5kLW9mZlwiLFxuICBOZXdzUGFwZXIgPSBcIm5ld3MtcGFwZXJcIixcbiAgTmV3c3BhcGVyTmV3c1BhcGVyID0gXCJuZXdzcGFwZXItbmV3cy1wYXBlclwiLFxuICBOZmNfMiA9IFwibmZjLTJcIixcbiAgTmZjID0gXCJuZmNcIixcbiAgTm9GbGFzaCA9IFwibm8tZmxhc2hcIixcbiAgTm90ZUNhcmRUZXh0ID0gXCJub3RlLWNhcmQtdGV4dFwiLFxuICBOb3RlU3RpY2tlciA9IFwibm90ZS1zdGlja2VyXCIsXG4gIE5vdGVzID0gXCJub3Rlc1wiLFxuICBOb3RpZmljYXRpb25BbGFybUJlbGxBY3Rpdml0eUFsZXJ0ID0gXCJub3RpZmljYXRpb24tYWxhcm0tYmVsbC1hY3Rpdml0eS1hbGVydFwiLFxuICBOb3RpZmljYXRpb25CZWxsQWN0aXZpdHkgPSBcIm5vdGlmaWNhdGlvbi1iZWxsLWFjdGl2aXR5XCIsXG4gIE5vdGlmaWNhdGlvbk9mZkJlbGxBY3Rpdml0eSA9IFwibm90aWZpY2F0aW9uLW9mZi1iZWxsLWFjdGl2aXR5XCIsXG4gIE5vdGlmaWNhdGlvbnNCYWRnZSA9IFwibm90aWZpY2F0aW9ucy1iYWRnZVwiLFxuICBOdW1iZXJlZExpc3QgPSBcIm51bWJlcmVkLWxpc3RcIixcbiAgT2N1bHVzID0gXCJvY3VsdXNcIixcbiAgT3Blbl8yTmV3TGlua09wZW5MaW5rQm94QXJyb3cgPSBcIm9wZW4tMi1uZXctbGluay1vcGVuLWxpbmstYm94LWFycm93XCIsXG4gIE9wZW5OZXdMaW5rT3BlbkxpbmtCb3hBcnJvdyA9IFwib3Blbi1uZXctbGluay1vcGVuLWxpbmstYm94LWFycm93XCIsXG4gIE9wZW5RdW90ZUJsb2NrcXVvdGUgPSBcIm9wZW4tcXVvdGUtYmxvY2txdW90ZVwiLFxuICBPcHRBbHRPcHRpb25BbHRLZXkgPSBcIm9wdC1hbHQtb3B0aW9uLWFsdC1rZXlcIixcbiAgT3B0T3B0aW9uS2V5ID0gXCJvcHQtb3B0aW9uLWtleVwiLFxuICBPcmFuZ2UgPSBcIm9yYW5nZVwiLFxuICBQYWNrYWdlRGVsaXZlcnlfMiA9IFwicGFja2FnZS1kZWxpdmVyeS0yXCIsXG4gIFBhY2thZ2VEZWxpdmVyeSA9IFwicGFja2FnZS1kZWxpdmVyeVwiLFxuICBQYWdlc0JvYXJkcyA9IFwicGFnZXMtYm9hcmRzXCIsXG4gIFBhbm9yYW1hVmlldyA9IFwicGFub3JhbWEtdmlld1wiLFxuICBQYXBlclBsYW5lU2VuZCA9IFwicGFwZXItcGxhbmUtc2VuZFwiLFxuICBQYXNza2V5c1Bhc3NrZXlQYXNzd29yZGxlc3MgPSBcInBhc3NrZXlzLXBhc3NrZXktcGFzc3dvcmRsZXNzXCIsXG4gIFBhc3Nwb3J0VmlzYSA9IFwicGFzc3BvcnQtdmlzYVwiLFxuICBQYXNzd29yZExvY2tQcm90ZWN0aW9uID0gXCJwYXNzd29yZC1sb2NrLXByb3RlY3Rpb25cIixcbiAgUGF1c2UgPSBcInBhdXNlXCIsXG4gIFBlbmNpbF8yUGVuVG9vbFdyaXRlID0gXCJwZW5jaWwtMi1wZW4tdG9vbC13cml0ZVwiLFxuICBQZW5jaWxQZW5Ub29sV3JpdGUgPSBcInBlbmNpbC1wZW4tdG9vbC13cml0ZVwiLFxuICBQZW9wbGVCZWhpbmRVc2VyQXZhdGFyR3JvdXBfMyA9IFwicGVvcGxlLWJlaGluZC11c2VyLWF2YXRhci1ncm91cC0zXCIsXG4gIFBlb3BsZUNpcmNsZVVzZXJQZXJzb25BdmF0YXJfMiA9IFwicGVvcGxlLWNpcmNsZS11c2VyLXBlcnNvbi1hdmF0YXItMlwiLFxuICBQZW9wbGVDb3B5TWVtYmVycyA9IFwicGVvcGxlLWNvcHktbWVtYmVyc1wiLFxuICBQZW9wbGVMaWtlTG92ZUhlYXJ0ID0gXCJwZW9wbGUtbGlrZS1sb3ZlLWhlYXJ0XCIsXG4gIFBlb3BsZVNoYWRvd1VzZXJBdmF0YXJHcm91cF8xID0gXCJwZW9wbGUtc2hhZG93LXVzZXItYXZhdGFyLWdyb3VwLTFcIixcbiAgUGVvcGxlU2hhZG93VXNlckF2YXRhckdyb3VwID0gXCJwZW9wbGUtc2hhZG93LXVzZXItYXZhdGFyLWdyb3VwXCIsXG4gIFBlb3BsZVRvZ2V0aGVyVXNlckF2YXRhckdyb3VwXzIgPSBcInBlb3BsZS10b2dldGhlci11c2VyLWF2YXRhci1ncm91cC0yXCIsXG4gIFBlb3BsZVVzZXJQZXJzb25BdmF0YXIgPSBcInBlb3BsZS11c2VyLXBlcnNvbi1hdmF0YXJcIixcbiAgUGVyY2VudFNhbGVzXzEgPSBcInBlcmNlbnQtc2FsZXMtMVwiLFxuICBQZXJjZW50U2FsZXMgPSBcInBlcmNlbnQtc2FsZXNcIixcbiAgUGVyZm9ybWFuY2VTcGVlZFNjYWxlID0gXCJwZXJmb3JtYW5jZS1zcGVlZC1zY2FsZVwiLFxuICBQaG9uZURldmljZUlwaG9uZU1vYmlsZSA9IFwicGhvbmUtZGV2aWNlLWlwaG9uZS1tb2JpbGVcIixcbiAgUGhvbmVEeW5hbWljSXNsYW5kID0gXCJwaG9uZS1keW5hbWljLWlzbGFuZFwiLFxuICBQaWN0dXJlSW5QaWN0dXJlID0gXCJwaWN0dXJlLWluLXBpY3R1cmVcIixcbiAgUGllQ2hhcnRfMUdyYXBoQ2hhcnRTdGF0aXN0aWNzID0gXCJwaWUtY2hhcnQtMS1ncmFwaC1jaGFydC1zdGF0aXN0aWNzXCIsXG4gIFBpZUNoYXJ0XzJHcmFwaENoYXJ0U3RhdGlzdGljcyA9IFwicGllLWNoYXJ0LTItZ3JhcGgtY2hhcnQtc3RhdGlzdGljc1wiLFxuICBQaWdneUJhbmtTYXZlTW9uZXkgPSBcInBpZ2d5LWJhbmstc2F2ZS1tb25leVwiLFxuICBQaW5DaXJjbGVMb2NhdGlvbiA9IFwicGluLWNpcmNsZS1sb2NhdGlvblwiLFxuICBQaW5GbGFnTG9jYXRpb24gPSBcInBpbi1mbGFnLWxvY2F0aW9uXCIsXG4gIFBpbkxvY2F0aW9uXzEgPSBcInBpbi1sb2NhdGlvbi0xXCIsXG4gIFBpbkxvY2F0aW9uQm9va21hcmsgPSBcInBpbi1sb2NhdGlvbi1ib29rbWFya1wiLFxuICBQaW5Mb2NhdGlvbiA9IFwicGluLWxvY2F0aW9uXCIsXG4gIFBpbmNoID0gXCJwaW5jaFwiLFxuICBQaXp6YSA9IFwicGl6emFcIixcbiAgUGxhY2Vob2xkZXJHZW5lcmF0ZSA9IFwicGxhY2Vob2xkZXItZ2VuZXJhdGVcIixcbiAgUGxheUNpcmNsZSA9IFwicGxheS1jaXJjbGVcIixcbiAgUGxheUdvID0gXCJwbGF5LWdvXCIsXG4gIFBsYXlMaXN0ID0gXCJwbGF5LWxpc3RcIixcbiAgUGx1c0FkZERvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJwbHVzLWFkZC1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiLFxuICBQbHVzQWRkTGFyZ2UgPSBcInBsdXMtYWRkLWxhcmdlXCIsXG4gIFBsdXNBZGRTbWFsbCA9IFwicGx1cy1hZGQtc21hbGxcIixcbiAgUGx1c0NpcmNsZUFkZCA9IFwicGx1cy1jaXJjbGUtYWRkXCIsXG4gIFBsdXNMaW5lc0FkZERvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJwbHVzLWxpbmVzLWFkZC1kb2N1bWVudC1saXN0LXBhZ2UtZmlsZVwiLFxuICBQbHVzU3F1YXJlQWRkID0gXCJwbHVzLXNxdWFyZS1hZGRcIixcbiAgUG9pbnRlckhhbmQgPSBcInBvaW50ZXItaGFuZFwiLFxuICBQb29wU3BhbSA9IFwicG9vcC1zcGFtXCIsXG4gIFBvcHNpY2xlQkljZUNyZWFtU3dlZXRzID0gXCJwb3BzaWNsZS1iLWljZS1jcmVhbS1zd2VldHNcIixcbiAgUG9wc2ljbGVJY2VDcmVhbVN3ZWV0cyA9IFwicG9wc2ljbGUtaWNlLWNyZWFtLXN3ZWV0c1wiLFxuICBQb3N0Y2FyZENhcmROZXdzID0gXCJwb3N0Y2FyZC1jYXJkLW5ld3NcIixcbiAgUG9zdHNOb3RlYm9va1NrZXRjaGJvb2sgPSBcInBvc3RzLW5vdGVib29rLXNrZXRjaGJvb2tcIixcbiAgUG91bmRDdXJyZW5jeU1vbmV5Q29pbkdicCA9IFwicG91bmQtY3VycmVuY3ktbW9uZXktY29pbi1nYnBcIixcbiAgUHJpbnRlclByaW50ID0gXCJwcmludGVyLXByaW50XCIsXG4gIFByb2Nlc3NvckNoaXAgPSBcInByb2Nlc3Nvci1jaGlwXCIsXG4gIFB1bGxSZXF1ZXN0ID0gXCJwdWxsLXJlcXVlc3RcIixcbiAgUW0zUm9vbVRyYW5zZm9ybVh5el8zZCA9IFwicW0zLXJvb20tdHJhbnNmb3JtLXh5ei0zZFwiLFxuICBRckNvZGUgPSBcInFyLWNvZGVcIixcbiAgUXVlc3Rpb25tYXJrRmFxSGVscFF1ZXN0aW9uYWlyZSA9IFwicXVlc3Rpb25tYXJrLWZhcS1oZWxwLXF1ZXN0aW9uYWlyZVwiLFxuICBSYWRhckxvY2F0aW9uU2VhcmNoID0gXCJyYWRhci1sb2NhdGlvbi1zZWFyY2hcIixcbiAgUmFpbmJvdyA9IFwicmFpbmJvd1wiLFxuICBSYWlueVJhaW4gPSBcInJhaW55LXJhaW5cIixcbiAgUmFpc2luZ0hhbmRfNEZpbmdlckhleUhlbGxvID0gXCJyYWlzaW5nLWhhbmQtNC1maW5nZXItaGV5LWhlbGxvXCIsXG4gIFJhaXNpbmdIYW5kXzVGaW5nZXJIZXlIZWxsbyA9IFwicmFpc2luZy1oYW5kLTUtZmluZ2VyLWhleS1oZWxsb1wiLFxuICBSZWFkaW5nTGlzdEdsYXNzZXNTdGV2ZUpvYnMgPSBcInJlYWRpbmctbGlzdC1nbGFzc2VzLXN0ZXZlLWpvYnNcIixcbiAgUmVhckZyb250Q2FtZXJhQ2FtQ2hhbmdlTGVucyA9IFwicmVhci1mcm9udC1jYW1lcmEtY2FtLWNoYW5nZS1sZW5zXCIsXG4gIFJlY2VpcHRUaWNrZXQgPSBcInJlY2VpcHQtdGlja2V0XCIsXG4gIFJlY29yZFZvaWNlbWFpbEJhbmRUYXBlID0gXCJyZWNvcmQtdm9pY2VtYWlsLWJhbmQtdGFwZVwiLFxuICBSZWNvcmQgPSBcInJlY29yZFwiLFxuICBSZWRvRm9yd2FyZF8xID0gXCJyZWRvLWZvcndhcmQtMVwiLFxuICBSZWRvRm9yd2FyZCA9IFwicmVkby1mb3J3YXJkXCIsXG4gIFJlZnJlc2hSZW5ldyA9IFwicmVmcmVzaC1yZW5ld1wiLFxuICBSZW1vdmVDb2x1bW5EZWxldGVDb2x1bW4gPSBcInJlbW92ZS1jb2x1bW4tZGVsZXRlLWNvbHVtblwiLFxuICBSZW1vdmVQZW9wbGVSZW1vdmVVc2VyUmVtb3ZlUGVyc29uXzIgPSBcInJlbW92ZS1wZW9wbGUtcmVtb3ZlLXVzZXItcmVtb3ZlLXBlcnNvbi0yXCIsXG4gIFJlbW92ZVBlb3BsZVJlbW92ZVVzZXJSZW1vdmVQZXJzb24gPSBcInJlbW92ZS1wZW9wbGUtcmVtb3ZlLXVzZXItcmVtb3ZlLXBlcnNvblwiLFxuICBSZW1vdmVSb3dEZWxldGVSb3cgPSBcInJlbW92ZS1yb3ctZGVsZXRlLXJvd1wiLFxuICBSZXBlYXRfMlJldHdlZXQgPSBcInJlcGVhdC0yLXJldHdlZXRcIixcbiAgUmVwZWF0UmV0d2VldCA9IFwicmVwZWF0LXJldHdlZXRcIixcbiAgUmVwZWF0ID0gXCJyZXBlYXRcIixcbiAgUmVzY3VlUmluZ1N3aW1Cb3lsZUhlbHBTdXBwb3J0ID0gXCJyZXNjdWUtcmluZy1zd2ltLWJveWxlLWhlbHAtc3VwcG9ydFwiLFxuICBSZXNpemVCaWdCb3hBcnJvdyA9IFwicmVzaXplLWJpZy1ib3gtYXJyb3dcIixcbiAgUmVzaXplU21hbGxCb3hBcnJvdyA9IFwicmVzaXplLXNtYWxsLWJveC1hcnJvd1wiLFxuICBSZXdpbmRfMTBzID0gXCJyZXdpbmQtMTBzXCIsXG4gIFJld2luZF8xNXMgPSBcInJld2luZC0xNXNcIixcbiAgUmV3aW5kXzMwcyA9IFwicmV3aW5kLTMwc1wiLFxuICBSZXdpbmRfNXMgPSBcInJld2luZC01c1wiLFxuICBSZXdpbmRTeW1ib2wgPSBcInJld2luZC1zeW1ib2xcIixcbiAgUmlnaHRHYW1lcGFkQmFzZUNvbnRyb2xsc0dhbWVKb3lzdGljayA9IFwicmlnaHQtZ2FtZXBhZC1iYXNlLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCIsXG4gIFJpZ2h0R2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGljayA9IFwicmlnaHQtZ2FtZXBhZC1iYXNlLXJvdW5kLWNvbnRyb2xscy1nYW1lLWpveXN0aWNrXCIsXG4gIFJvY2tldFN0YXJ0dXBMYXVuY2ggPSBcInJvY2tldC1zdGFydHVwLWxhdW5jaFwiLFxuICBSb3RhdGVfMDJSZXBlYXRSZWZyZXNoID0gXCJyb3RhdGUtMDItcmVwZWF0LXJlZnJlc2hcIixcbiAgUm90YXRlQ2xvY2t3aXNlUm90YXRlID0gXCJyb3RhdGUtY2xvY2t3aXNlLXJvdGF0ZVwiLFxuICBSb3RhdGVDb3VudGVyY2xvY2t3aXNlUm90YXRlID0gXCJyb3RhdGUtY291bnRlcmNsb2Nrd2lzZS1yb3RhdGVcIixcbiAgUm90YXRlUmVwZWF0UmVmcmVzaCA9IFwicm90YXRlLXJlcGVhdC1yZWZyZXNoXCIsXG4gIFJvdGF0ZVJvdGF0aW9uWEF4aXMgPSBcInJvdGF0ZS1yb3RhdGlvbi14LWF4aXNcIixcbiAgUm93c1dpZGVSb3dzV2lkZSA9IFwicm93cy13aWRlLXJvd3Mtd2lkZVwiLFxuICBSdWxlciA9IFwicnVsZXJcIixcbiAgUnVsZXNEaXJlY3Rpb25TcGxpdCA9IFwicnVsZXMtZGlyZWN0aW9uLXNwbGl0XCIsXG4gIFNhZEVtb2ppVW5oYXBweSA9IFwic2FkLWVtb2ppLXVuaGFwcHlcIixcbiAgU2FuZGJveFNhZmUgPSBcInNhbmRib3gtc2FmZVwiLFxuICBTY2FuRm9jdXNfMSA9IFwic2Nhbi1mb2N1cy0xXCIsXG4gIFNjYW5Gb2N1cyA9IFwic2Nhbi1mb2N1c1wiLFxuICBTY2hvb2xCaWdCdWlsZGluZyA9IFwic2Nob29sLWJpZy1idWlsZGluZ1wiLFxuICBTY2lzc29yc18yQ3V0ID0gXCJzY2lzc29ycy0yLWN1dFwiLFxuICBTY2lzc29yc0N1dCA9IFwic2Npc3NvcnMtY3V0XCIsXG4gIFNkQ2FyZE1lbW9yeVN0aWNrID0gXCJzZC1jYXJkLW1lbW9yeS1zdGlja1wiLFxuICBTZWFyY2hfMk1hZ25pZnlpbmdHbGFzcyA9IFwic2VhcmNoLTItbWFnbmlmeWluZy1nbGFzc1wiLFxuICBTZWFyY2hMaW5lc01hZ25pZmllckRvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJzZWFyY2gtbGluZXMtbWFnbmlmaWVyLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIFNlYXJjaE1hZ25pZmllckRvY3VtZW50TGlzdFBhZ2VGaWxlID0gXCJzZWFyY2gtbWFnbmlmaWVyLWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIFNlYXJjaE1hZ25pZnlpbmdHbGFzcyA9IFwic2VhcmNoLW1hZ25pZnlpbmctZ2xhc3NcIixcbiAgU2VhcmNoTWVudSA9IFwic2VhcmNoLW1lbnVcIixcbiAgU2VhcmNoUGFnZUZpbmQgPSBcInNlYXJjaC1wYWdlLWZpbmRcIixcbiAgU2VjdXJlZExpbmVzTG9ja2VkU2VjdXJpdHlEb2N1bWVudExpc3RQYWdlRmlsZSA9IFwic2VjdXJlZC1saW5lcy1sb2NrZWQtc2VjdXJpdHktZG9jdW1lbnQtbGlzdC1wYWdlLWZpbGVcIixcbiAgU2VjdXJlZExvY2tlZFNlY3VyaXR5RG9jdW1lbnRMaXN0UGFnZUZpbGUgPSBcInNlY3VyZWQtbG9ja2VkLXNlY3VyaXR5LWRvY3VtZW50LWxpc3QtcGFnZS1maWxlXCIsXG4gIFNlbmRFbWFpbFBhcGVyUGxhbmVBcnJvdyA9IFwic2VuZC1lbWFpbC1wYXBlci1wbGFuZS1hcnJvd1wiLFxuICBTZXJ2ZXJfMVN0b3JhZ2VEYXRhQ29pbnNNb25leSA9IFwic2VydmVyLTEtc3RvcmFnZS1kYXRhLWNvaW5zLW1vbmV5XCIsXG4gIFNlcnZlcl8yU3RvcmFnZURhdGFDb2luc01vbmV5ID0gXCJzZXJ2ZXItMi1zdG9yYWdlLWRhdGEtY29pbnMtbW9uZXlcIixcbiAgU2VydmVyRGF0YVN0b3JhZ2UgPSBcInNlcnZlci1kYXRhLXN0b3JhZ2VcIixcbiAgU2V0dGluZ3NfMVN3aXRjaFByZWZlcmVuY2VzID0gXCJzZXR0aW5ncy0xLXN3aXRjaC1wcmVmZXJlbmNlc1wiLFxuICBTZXR0aW5nc18yR2VhclByZWZlcmVuY2VzID0gXCJzZXR0aW5ncy0yLWdlYXItcHJlZmVyZW5jZXNcIixcbiAgU2V0dGluZ3NfM0dlYXJQcmVmZXJlbmNlc18xID0gXCJzZXR0aW5ncy0zLWdlYXItcHJlZmVyZW5jZXMtMVwiLFxuICBTZXR0aW5nc18zR2VhclByZWZlcmVuY2VzID0gXCJzZXR0aW5ncy0zLWdlYXItcHJlZmVyZW5jZXNcIixcbiAgU2V0dGluZ3NfNlNsaWRlclRocmVlID0gXCJzZXR0aW5ncy02LXNsaWRlci10aHJlZVwiLFxuICBTZXR0aW5nc183S25vYlZvbHVtZU9uT2ZmID0gXCJzZXR0aW5ncy03LWtub2Itdm9sdW1lLW9uLW9mZlwiLFxuICBTZXR0aW5nc184U3dpdGNoXzIgPSBcInNldHRpbmdzLTgtc3dpdGNoLTJcIixcbiAgU2V0dGluZ3NTbGlkZXJIb3IgPSBcInNldHRpbmdzLXNsaWRlci1ob3JcIixcbiAgU2V0dGluZ3NTbGlkZXJWZXJTbGlkZXJUd28gPSBcInNldHRpbmdzLXNsaWRlci12ZXItc2xpZGVyLXR3b1wiLFxuICBTaGFrYV8yQ2FsbE1lSGFuZ1RlbiA9IFwic2hha2EtMi1jYWxsLW1lLWhhbmctdGVuXCIsXG4gIFNoYWthQ2FsbE1lSGFuZ1RlbiA9IFwic2hha2EtY2FsbC1tZS1oYW5nLXRlblwiLFxuICBTaGFyZV8yQXJyb3cgPSBcInNoYXJlLTItYXJyb3dcIixcbiAgU2hhcmVBcnJvd0xvZ2luID0gXCJzaGFyZS1hcnJvdy1sb2dpblwiLFxuICBTaGFyZUFycm93ID0gXCJzaGFyZS1hcnJvd1wiLFxuICBTaGFyZVNjcmVlblNjcmVlblNoYXJpbmcgPSBcInNoYXJlLXNjcmVlbi1zY3JlZW4tc2hhcmluZ1wiLFxuICBTaGllbGRfMkNoZWNrID0gXCJzaGllbGQtMi1jaGVja1wiLFxuICBTaGllbGRCcmVha05vdFNlY3VyZSA9IFwic2hpZWxkLWJyZWFrLW5vdC1zZWN1cmVcIixcbiAgU2hpZWxkQ2hlY2tTZWN1cml0eVByb3RlY3Rpb24gPSBcInNoaWVsZC1jaGVjay1zZWN1cml0eS1wcm90ZWN0aW9uXCIsXG4gIFNoaWVsZENyb3NzZWRTZWN1cml0eVByb3RlY3Rpb24gPSBcInNoaWVsZC1jcm9zc2VkLXNlY3VyaXR5LXByb3RlY3Rpb25cIixcbiAgU2hpZWxkUHJvdGVjdFNlY3VyaXR5Q2hlY2sgPSBcInNoaWVsZC1wcm90ZWN0LXNlY3VyaXR5LWNoZWNrXCIsXG4gIFNoaWVsZFNlY3VyaXR5UHJvdGVjdGlvbiA9IFwic2hpZWxkLXNlY3VyaXR5LXByb3RlY3Rpb25cIixcbiAgU2hpZnQgPSBcInNoaWZ0XCIsXG4gIFNoaXBDaGFuZ2Vsb2cgPSBcInNoaXAtY2hhbmdlbG9nXCIsXG4gIFNob3dFeWVTZWVSZXZlYWxMb29rVmlzaWJsZSA9IFwic2hvdy1leWUtc2VlLXJldmVhbC1sb29rLXZpc2libGVcIixcbiAgU2hyZWRkZXJQZXJtYW5lbnRseSA9IFwic2hyZWRkZXItcGVybWFuZW50bHlcIixcbiAgU2h1ZmZsZVJhbmRvbSA9IFwic2h1ZmZsZS1yYW5kb21cIixcbiAgU2lkZWJhck1lbnVMaXN0V2luZG93ID0gXCJzaWRlYmFyLW1lbnUtbGlzdC13aW5kb3dcIixcbiAgU2lnbkRpcmVjdGlvblJvdXRlID0gXCJzaWduLWRpcmVjdGlvbi1yb3V0ZVwiLFxuICBTaWduYXR1cmVQZW5jaWxQZW5jaWxQZW5Xcml0ZURyYXcgPSBcInNpZ25hdHVyZS1wZW5jaWwtcGVuY2lsLXBlbi13cml0ZS1kcmF3XCIsXG4gIFNpZ25hdHVyZVNpZ24gPSBcInNpZ25hdHVyZS1zaWduXCIsXG4gIFNsaWRlc1BhZ2VzID0gXCJzbGlkZXMtcGFnZXNcIixcbiAgU21pbGVFbW9qaSA9IFwic21pbGUtZW1vamlcIixcbiAgU21pbGV5RmFjZUVtb2ppU21pbGUgPSBcInNtaWxleS1mYWNlLWVtb2ppLXNtaWxlXCIsXG4gIFNtaWxpbmdGYWNlSGVhcnRFeWVzID0gXCJzbWlsaW5nLWZhY2UtaGVhcnQtZXllc1wiLFxuICBTbm93Q2xvdWQgPSBcInNub3ctY2xvdWRcIixcbiAgU25vd0ZsYWtlc0ZyZWV6ZUZyb3plbiA9IFwic25vdy1mbGFrZXMtZnJlZXplLWZyb3plblwiLFxuICBTb2NjZXJGb290YmFsbE1scyA9IFwic29jY2VyLWZvb3RiYWxsLW1sc1wiLFxuICBTb3J0XzFTd2l0Y2hIb3Jpem9udGFsID0gXCJzb3J0LTEtc3dpdGNoLWhvcml6b250YWxcIixcbiAgU29ydF8xU3dpdGNoVmVydGljYWwgPSBcInNvcnQtMS1zd2l0Y2gtdmVydGljYWxcIixcbiAgU29ydF8yU3dpdGNoSG9yaXpvbmF0bCA9IFwic29ydC0yLXN3aXRjaC1ob3Jpem9uYXRsXCIsXG4gIFNvcnRfMlN3aXRjaFZlcnRpY2FsID0gXCJzb3J0LTItc3dpdGNoLXZlcnRpY2FsXCIsXG4gIFNwYWNlU3RhciA9IFwic3BhY2Utc3RhclwiLFxuICBTcGF0aWFsU3BhdGlhbENhcHR1cmUgPSBcInNwYXRpYWwtc3BhdGlhbC1jYXB0dXJlXCIsXG4gIFNwZWFrZXJNdXNpY1NvdW5kID0gXCJzcGVha2VyLW11c2ljLXNvdW5kXCIsXG4gIFNxdWFyZVBsYWNlaG9sZGVyID0gXCJzcXVhcmUtcGxhY2Vob2xkZXJcIixcbiAgU3RhcGxlTm90ZWJvb2tDb3ZlciA9IFwic3RhcGxlLW5vdGVib29rLWNvdmVyXCIsXG4gIFN0YXJfMk1hZ2ljU3BhcmtsZSA9IFwic3Rhci0yLW1hZ2ljLXNwYXJrbGVcIixcbiAgU3RhckFpU3BhcmtsZSA9IFwic3Rhci1haS1zcGFya2xlXCIsXG4gIFN0YXJGYXZvcml0ZUF3YXJkID0gXCJzdGFyLWZhdm9yaXRlLWF3YXJkXCIsXG4gIFN0b2NrcyA9IFwic3RvY2tzXCIsXG4gIFN0b3AgPSBcInN0b3BcIixcbiAgU3RvcHBDaXJjbGUgPSBcInN0b3BwLWNpcmNsZVwiLFxuICBTdG9wd2F0Y2hUcmFjayA9IFwic3RvcHdhdGNoLXRyYWNrXCIsXG4gIFN0b3JhZ2VIZGRTc2QgPSBcInN0b3JhZ2UtaGRkLXNzZFwiLFxuICBTdG9yZVNob3BCdXNpbmVzc18xID0gXCJzdG9yZS1zaG9wLWJ1c2luZXNzLTFcIixcbiAgU3RvcmVTaG9wQnVzaW5lc3MgPSBcInN0b3JlLXNob3AtYnVzaW5lc3NcIixcbiAgU3RyZWFtaW5nTGl2ZVN0cmVhbSA9IFwic3RyZWFtaW5nLWxpdmUtc3RyZWFtXCIsXG4gIFN0cmlrZVRocm91Z2ggPSBcInN0cmlrZS10aHJvdWdoXCIsXG4gIFN0dWRpb0Rpc3BsYXlUaHVuZGVyYm9sdCA9IFwic3R1ZGlvLWRpc3BsYXktdGh1bmRlcmJvbHRcIixcbiAgU3VpdGNhc2VMdWdnYWdlQ2FzZSA9IFwic3VpdGNhc2UtbHVnZ2FnZS1jYXNlXCIsXG4gIFN1bkRvd24gPSBcInN1bi1kb3duXCIsXG4gIFN1bkxpZ2h0TW9kZURheSA9IFwic3VuLWxpZ2h0LW1vZGUtZGF5XCIsXG4gIFN1blVwID0gXCJzdW4tdXBcIixcbiAgU3VucmlzZSA9IFwic3VucmlzZVwiLFxuICBTdW5zZXQgPSBcInN1bnNldFwiLFxuICBTdXBwb3J0ID0gXCJzdXBwb3J0XCIsXG4gIFN1cnByaXNlQnVubnlIYXRNYWdpY0hhdCA9IFwic3VycHJpc2UtYnVubnktaGF0LW1hZ2ljLWhhdFwiLFxuICBTeW5jQ2xvdWRTeW5jID0gXCJzeW5jLWNsb3VkLXN5bmNcIixcbiAgVGFibGVTcHJlZWRzaGVldENoYXJ0ID0gXCJ0YWJsZS1zcHJlZWRzaGVldC1jaGFydFwiLFxuICBUYWdTYWxlID0gXCJ0YWctc2FsZVwiLFxuICBUYXBlID0gXCJ0YXBlXCIsXG4gIFRhcmdldF8xWm9vbSA9IFwidGFyZ2V0LTEtem9vbVwiLFxuICBUYXJnZXRfMlpvb20gPSBcInRhcmdldC0yLXpvb21cIixcbiAgVGFyZ2V0QXJyb3dHb2FsQWltID0gXCJ0YXJnZXQtYXJyb3ctZ29hbC1haW1cIixcbiAgVGF4RGlzY291bnQgPSBcInRheC1kaXNjb3VudFwiLFxuICBUZWxlcGhvbmVQaG9uZUNvbnRhY3QgPSBcInRlbGVwaG9uZS1waG9uZS1jb250YWN0XCIsXG4gIFRlbGV2aXNpb25fMVR2TW9uaXRvclZpZGVvU2NyZWVuRGlzcGxheSA9IFwidGVsZXZpc2lvbi0xLXR2LW1vbml0b3ItdmlkZW8tc2NyZWVuLWRpc3BsYXlcIixcbiAgVGVsZXZpc2lvbl8yVHZNb25pdG9yVmlkZW9TY3JlZW5EaXNwbGF5ID0gXCJ0ZWxldmlzaW9uLTItdHYtbW9uaXRvci12aWRlby1zY3JlZW4tZGlzcGxheVwiLFxuICBUZW5uaXMgPSBcInRlbm5pc1wiLFxuICBUZXN0VHViZSA9IFwidGVzdC10dWJlXCIsXG4gIFRleHRfMlRfMiA9IFwidGV4dC0yLXQtMlwiLFxuICBUZXh0SW5kZW50TGVmdCA9IFwidGV4dC1pbmRlbnQtbGVmdFwiLFxuICBUZXh0SW5kZW50UmlnaHQgPSBcInRleHQtaW5kZW50LXJpZ2h0XCIsXG4gIFRleHRJbmRpY2F0b3IgPSBcInRleHQtaW5kaWNhdG9yXCIsXG4gIFRleHRTaXplID0gXCJ0ZXh0LXNpemVcIixcbiAgVGV4dFQgPSBcInRleHQtdFwiLFxuICBUaHVtYnNEb3duVGh1bWJIYW5kTm9Db250cmEgPSBcInRodW1icy1kb3duLXRodW1iLWhhbmQtbm8tY29udHJhXCIsXG4gIFRodW1ic1VwVGh1bWJIYW5kWWVzUHJvID0gXCJ0aHVtYnMtdXAtdGh1bWItaGFuZC15ZXMtcHJvXCIsXG4gIFRpY2tldEFkbWl0VmlwID0gXCJ0aWNrZXQtYWRtaXQtdmlwXCIsXG4gIFRpdGxlQ2FzZSA9IFwidGl0bGUtY2FzZVwiLFxuICBUb2FzdEJyZWFrZmVzdCA9IFwidG9hc3QtYnJlYWtmZXN0XCIsXG4gIFRvaWxldFBhcGVyV2lwZSA9IFwidG9pbGV0LXBhcGVyLXdpcGVcIixcbiAgVG9vbGJveCA9IFwidG9vbGJveFwiLFxuICBUcmFkZVRyYWRpbmcgPSBcInRyYWRlLXRyYWRpbmdcIixcbiAgVHJhbnNjcmlwdGlvbiA9IFwidHJhbnNjcmlwdGlvblwiLFxuICBUcmVlID0gXCJ0cmVlXCIsXG4gIFRyZW5kaW5nXzFUcmVuZHMgPSBcInRyZW5kaW5nLTEtdHJlbmRzXCIsXG4gIFRyZW5kaW5nXzJUcmVuZHMgPSBcInRyZW5kaW5nLTItdHJlbmRzXCIsXG4gIFRyZW5kaW5nXzNUcmVuZHMgPSBcInRyZW5kaW5nLTMtdHJlbmRzXCIsXG4gIFRyZW5kaW5nXzRDaGFydEFuYWx5dGljcyA9IFwidHJlbmRpbmctNC1jaGFydC1hbmFseXRpY3NcIixcbiAgVHJlbmRpbmdfNENoYXJ0ID0gXCJ0cmVuZGluZy00LWNoYXJ0XCIsXG4gIFRyb3BoeVdpbkNoYW1waW9uID0gXCJ0cm9waHktd2luLWNoYW1waW9uXCIsXG4gIFRydWNrRGVsaXZlcnkgPSBcInRydWNrLWRlbGl2ZXJ5XCIsXG4gIFR3b0RpY2VHYW1lUmFuZG9tID0gXCJ0d28tZGljZS1nYW1lLXJhbmRvbVwiLFxuICBVZm9CZWFtID0gXCJ1Zm8tYmVhbVwiLFxuICBVbWJyZWxsYVNlY3VyaXR5ID0gXCJ1bWJyZWxsYS1zZWN1cml0eVwiLFxuICBVbmRlcmxpbmUgPSBcInVuZGVybGluZVwiLFxuICBVbmRvQmFja0JvdHRvbSA9IFwidW5kby1iYWNrLWJvdHRvbVwiLFxuICBVbmRvQmFja1RvcCA9IFwidW5kby1iYWNrLXRvcFwiLFxuICBVbmRvY2tCb3hBcnJvdyA9IFwidW5kb2NrLWJveC1hcnJvd1wiLFxuICBVbmxvY2tlZFVubG9ja1ByaXZhdGUgPSBcInVubG9ja2VkLXVubG9jay1wcml2YXRlXCIsXG4gIFVwR2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2sgPSBcInVwLWdhbWVwYWQtYmFzZS1jb250cm9sbHMtZ2FtZS1qb3lzdGlja1wiLFxuICBVcEdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2sgPSBcInVwLWdhbWVwYWQtYmFzZS1yb3VuZC1jb250cm9sbHMtZ2FtZS1qb3lzdGlja1wiLFxuICBVcGxvYWRTaGFyZSA9IFwidXBsb2FkLXNoYXJlXCIsXG4gIFVzYkNvbm5lY3Rpb25Db25uZWN0U2F2ZURhdGEgPSBcInVzYi1jb25uZWN0aW9uLWNvbm5lY3Qtc2F2ZS1kYXRhXCIsXG4gIFZpZGVvQ2FtZXJhXzIgPSBcInZpZGVvLWNhbWVyYS0yXCIsXG4gIFZpZGVvQ2FtZXJhTW92aWVQbGF5ID0gXCJ2aWRlby1jYW1lcmEtbW92aWUtcGxheVwiLFxuICBWaWRlb0NsYXBwZXJib2FyZCA9IFwidmlkZW8tY2xhcHBlcmJvYXJkXCIsXG4gIFZpZGVvQ2xpcEZpbG1Nb3ZpZSA9IFwidmlkZW8tY2xpcC1maWxtLW1vdmllXCIsXG4gIFZpc2lvblByb0FwcFdpbmRvdyA9IFwidmlzaW9uLXByby1hcHAtd2luZG93XCIsXG4gIFZpc2lvblByb0dvZ2dsZXMgPSBcInZpc2lvbi1wcm8tZ29nZ2xlc1wiLFxuICBWaXNpdFBhZ2VPcGVuQXBwID0gXCJ2aXNpdC1wYWdlLW9wZW4tYXBwXCIsXG4gIFZvaWNlID0gXCJ2b2ljZVwiLFxuICBWb2xsZXliYWxsID0gXCJ2b2xsZXliYWxsXCIsXG4gIFZvbHVtZURvd25TcGVha2VyTG91ZFNvdW5kT25NdXNpYyA9IFwidm9sdW1lLWRvd24tc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCIsXG4gIFZvbHVtZUZ1bGxTcGVha2VyTG91ZFNvdW5kT25NdXNpYyA9IFwidm9sdW1lLWZ1bGwtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCIsXG4gIFZvbHVtZUhhbGZTcGVha2VyTG91ZFNvdW5kT25NdXNpYyA9IFwidm9sdW1lLWhhbGYtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCIsXG4gIFZvbHVtZU1pbmltdW1TcGVha2VyTG91ZFNvdW5kT25NdXNpYyA9IFwidm9sdW1lLW1pbmltdW0tc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCIsXG4gIFZvbHVtZU9mZlNwZWFrZXJMb3VkU291bmRPbk11c2ljXzEgPSBcInZvbHVtZS1vZmYtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljLTFcIixcbiAgVm9sdW1lT2ZmU3BlYWtlckxvdWRTb3VuZE9uTXVzaWMgPSBcInZvbHVtZS1vZmYtc3BlYWtlci1sb3VkLXNvdW5kLW9uLW11c2ljXCIsXG4gIFdhbGxldF8xID0gXCJ3YWxsZXQtMVwiLFxuICBXYWxsZXRfMiA9IFwid2FsbGV0LTJcIixcbiAgV2FsbGV0ID0gXCJ3YWxsZXRcIixcbiAgV2F0Y2hfMUNsb2NrVGltZV8xID0gXCJ3YXRjaC0xLWNsb2NrLXRpbWUtMVwiLFxuICBXYXRjaF8xQ2xvY2tUaW1lID0gXCJ3YXRjaC0xLWNsb2NrLXRpbWVcIixcbiAgV2ViM0NyeXB0b1NwYWNlID0gXCJ3ZWIzLWNyeXB0by1zcGFjZVwiLFxuICBXZWJjYW1DYW1lcmFWaWV3ID0gXCJ3ZWJjYW0tY2FtZXJhLXZpZXdcIixcbiAgV2hpc3BlckFwaSA9IFwid2hpc3Blci1hcGlcIixcbiAgV2hpdGVib2FyZEFydGJvYXJkID0gXCJ3aGl0ZWJvYXJkLWFydGJvYXJkXCIsXG4gIFdpZmlfMlNwb3RTaWduYWxIb3RTcG90ID0gXCJ3aWZpLTItc3BvdC1zaWduYWwtaG90LXNwb3RcIixcbiAgV2lmaVNwb3RTaWduYWxIb3RTcG90ID0gXCJ3aWZpLXNwb3Qtc2lnbmFsLWhvdC1zcG90XCIsXG4gIFdpbmR5XzFXaW5kID0gXCJ3aW5keS0xLXdpbmRcIixcbiAgV29ybGRHbG9idXNJbnRlcm5ldFdlYiA9IFwid29ybGQtZ2xvYnVzLWludGVybmV0LXdlYlwiLFxuICBXcml0ZUJyaWVmID0gXCJ3cml0ZS1icmllZlwiLFxuICBXcml0ZUVkaXRMaXN0TGlzdCA9IFwid3JpdGUtZWRpdC1saXN0LWxpc3RcIixcbiAgWWVuQ3VycmVuY3lNb25leUNvaW4gPSBcInllbi1jdXJyZW5jeS1tb25leS1jb2luXCIsXG4gIFphcExpZ2h0bmluZ0ZsYXNoID0gXCJ6YXAtbGlnaHRuaW5nLWZsYXNoXCIsXG4gIFppcFJhckNvbXByZXNzZWRBcmNoaXZlID0gXCJ6aXAtcmFyLWNvbXByZXNzZWQtYXJjaGl2ZVwiLFxuICBab29tU2VhcmNoTWFnbmlmeWluZ0dsYXNzXzEgPSBcInpvb20tc2VhcmNoLW1hZ25pZnlpbmctZ2xhc3MtMVwiLFxuICBab29tU2VhcmNoTWFnbmlmeWluZ0dsYXNzID0gXCJ6b29tLXNlYXJjaC1tYWduaWZ5aW5nLWdsYXNzXCIsXG59XG5cbmV4cG9ydCBjb25zdCBJQ09OU19DT0RFUE9JTlRTOiB7IFtrZXkgaW4gSWNvbnNdOiBzdHJpbmcgfSA9IHtcbiAgW0ljb25zLmk0S106IFwiNjE2OTdcIixcbiAgW0ljb25zLkFjY2Vzc2liaWxpdHlBMTF5XTogXCI2MTY5OFwiLFxuICBbSWNvbnMuQWNjZXNzaWJpbGl0eUV5ZUExMXldOiBcIjYxNjk5XCIsXG4gIFtJY29ucy5BY3Rpdml0eU5vdGlmaWNhdGlvblB1bHNlSGVhcnRiZWF0QmVhdF06IFwiNjE3MDBcIixcbiAgW0ljb25zLkFkZENvbHVtbkFkZFBhZ2VdOiBcIjYxNzAxXCIsXG4gIFtJY29ucy5BZGRQYWdlc0FkZEJvYXJkc106IFwiNjE3MDJcIixcbiAgW0ljb25zLkFkZFBhZ2VzV2lkZUFkZEJvYXJkc106IFwiNjE3MDNcIixcbiAgW0ljb25zLkFkZFBlb3BsZUFkZFVzZXJBZGRQZXJzb25fMl06IFwiNjE3MDRcIixcbiAgW0ljb25zLkFkZFBlb3BsZUFkZFVzZXJBZGRQZXJzb25dOiBcIjYxNzA1XCIsXG4gIFtJY29ucy5BZGRSZWFjdGlvblJlYWN0aW9uRW1vamldOiBcIjYxNzA2XCIsXG4gIFtJY29ucy5BZGRSb3dBZGRSb3dzXTogXCI2MTcwN1wiLFxuICBbSWNvbnMuQWRkU2hlZXRBZGRDYW52YXNBZGRQYWdlVmVydGljYWxdOiBcIjYxNzA4XCIsXG4gIFtJY29ucy5BZGRTbGlkZUFkZENhbnZhc0FkZFBhZ2VIb3Jpem9udGFsXTogXCI2MTcwOVwiLFxuICBbSWNvbnMuQWRkU2xpZGVBZGRQYWdlQWRkQ29weV06IFwiNjE3MTBcIixcbiAgW0ljb25zLkFkZGVkUGVvcGxlQWRkVXNlckFkZGVkUGVyc29uXTogXCI2MTcxMVwiLFxuICBbSWNvbnMuQWRyZXNzUGFja2FnZURlbGl2ZXJ5XTogXCI2MTcxMlwiLFxuICBbSWNvbnMuQWlfMlN0YXJzXzE4MFNwYXJrbGVzXTogXCI2MTcxM1wiLFxuICBbSWNvbnMuQWlfMlN0YXJzU3BhcmtsZXNdOiBcIjYxNzE0XCIsXG4gIFtJY29ucy5BaV8zU3RhcnNTcGFya2xlc106IFwiNjE3MTVcIixcbiAgW0ljb25zLkFpQXZhdGFyR2VuZXJhdGVkQXZhdGFyUHJvZmlsZUFpTWFnaWNBdmF0YXJdOiBcIjYxNzE2XCIsXG4gIFtJY29ucy5BaUltYWdlc01pZGpvdXJuZXlBaUdlbmVyYXRlZF06IFwiNjE3MTdcIixcbiAgW0ljb25zLkFpVGV4dFRleHRHZW5lcmF0aW9uXTogXCI2MTcxOFwiLFxuICBbSWNvbnMuQWlycGxheV06IFwiNjE3MTlcIixcbiAgW0ljb25zLkFpcnBvZENhc2VBaXJwb2RzXTogXCI2MTcyMFwiLFxuICBbSWNvbnMuQWxidW1zXTogXCI2MTcyMVwiLFxuICBbSWNvbnMuQWxpZ25Cb3R0b21fMkFycm93XzFdOiBcIjYxNzIyXCIsXG4gIFtJY29ucy5BbGlnbkJvdHRvbV8yQXJyb3ddOiBcIjYxNzIzXCIsXG4gIFtJY29ucy5BbGlnbkJvdHRvbUFsaWdubWVudF06IFwiNjE3MjRcIixcbiAgW0ljb25zLkFsaWduQm90dG9tQXJyb3ddOiBcIjYxNzI1XCIsXG4gIFtJY29ucy5BbGlnbkxlZnRfMkFycm93XTogXCI2MTcyNlwiLFxuICBbSWNvbnMuQWxpZ25MZWZ0QWxpZ25tZW50XTogXCI2MTcyN1wiLFxuICBbSWNvbnMuQWxpZ25MZWZ0QXJyb3ddOiBcIjYxNzI4XCIsXG4gIFtJY29ucy5BbGlnblJpZ2h0XzJBcnJvd106IFwiNjE3MjlcIixcbiAgW0ljb25zLkFsaWduUmlnaHRBbGlnbm1lbnRdOiBcIjYxNzMwXCIsXG4gIFtJY29ucy5BbGlnblJpZ2h0QXJyb3ddOiBcIjYxNzMxXCIsXG4gIFtJY29ucy5BbGlnblRvcEFsaWdubWVudF06IFwiNjE3MzJcIixcbiAgW0ljb25zLkFsaWduVG9wQXJyb3ddOiBcIjYxNzMzXCIsXG4gIFtJY29ucy5BbGlnbm1lbnRCYXJdOiBcIjYxNzM0XCIsXG4gIFtJY29ucy5BbGlnbm1lbnRDZW50ZXJdOiBcIjYxNzM1XCIsXG4gIFtJY29ucy5BbGlnbm1lbnRKdXN0aWZ5XTogXCI2MTczNlwiLFxuICBbSWNvbnMuQWxpZ25tZW50TGVmdF06IFwiNjE3MzdcIixcbiAgW0ljb25zLkFsaWdubWVudFJpZ2h0XTogXCI2MTczOFwiLFxuICBbSWNvbnMuQWx0QWx0VGV4dEFsdFRhZ106IFwiNjE3MzlcIixcbiAgW0ljb25zLkFsdFRleHRdOiBcIjYxNzQwXCIsXG4gIFtJY29ucy5BbWVyaWNhbkZvb3RiYWxsTmZsXTogXCI2MTc0MVwiLFxuICBbSWNvbnMuQW5jaG9yXzFdOiBcIjYxNzQyXCIsXG4gIFtJY29ucy5BbmNob3JfMl06IFwiNjE3NDNcIixcbiAgW0ljb25zLkFubm90YXRpb25CdWJibGVBZGRQbHVzXTogXCI2MTc0NFwiLFxuICBbSWNvbnMuQW5ub3RhdGlvbkJ1YmJsZUNoZWNrXTogXCI2MTc0NVwiLFxuICBbSWNvbnMuQW5ub3RhdGlvbkJ1YmJsZVhDbG9zZURlbGV0ZV06IFwiNjE3NDZcIixcbiAgW0ljb25zLkFub255bW91c0Fub255bUhpZGRlbl06IFwiNjE3NDdcIixcbiAgW0ljb25zLkFwcGxlRnJ1aXRdOiBcIjYxNzQ4XCIsXG4gIFtJY29ucy5BckF1Z21lbnRlZFJlYWxpdHlfM2RWaWV3Q3ViZV8xXTogXCI2MTc0OVwiLFxuICBbSWNvbnMuQXJBdWdtZW50ZWRSZWFsaXR5XzNkVmlld0N1YmVfMl06IFwiNjE3NTBcIixcbiAgW0ljb25zLkFyQXVnbWVudGVkUmVhbGl0eV8zZFZpZXdDdWJlXTogXCI2MTc1MVwiLFxuICBbSWNvbnMuQXJBdWdtZW50ZWRSZWFsaXR5Q2FyZEJveF8zZFZpcnR1YWxSZWFsaXR5VnJdOiBcIjYxNzUyXCIsXG4gIFtJY29ucy5BckF1Z21lbnRlZFJlYWxpdHlTY2FuXzNkVmlld0N1YmVdOiBcIjYxNzUzXCIsXG4gIFtJY29ucy5BckF1Z21lbnRlZFJlYWxpdHlTY2FuXzNkXTogXCI2MTc1NFwiLFxuICBbSWNvbnMuQXJBdWd1bWVudFJlYWxpdHlWclZpcnR1YWxSZWFsaXR5XTogXCI2MTc1NVwiLFxuICBbSWNvbnMuQXJjQnJvd3NlckZhY2VdOiBcIjYxNzU2XCIsXG4gIFtJY29ucy5BcmNoaXZlQm94SW5ib3hGaWxlXTogXCI2MTc1N1wiLFxuICBbSWNvbnMuQXJjaGl2ZUZvbGRlckJveF06IFwiNjE3NThcIixcbiAgW0ljb25zLkFyb3VuZFNwYXRpYWxdOiBcIjYxNzU5XCIsXG4gIFtJY29ucy5BcnJvd0JvdHRvbUNpcmNsZV06IFwiNjE3NjBcIixcbiAgW0ljb25zLkFycm93Qm90dG9tTGVmdF06IFwiNjE3NjFcIixcbiAgW0ljb25zLkFycm93Qm90dG9tUmlnaHRdOiBcIjYxNzYyXCIsXG4gIFtJY29ucy5BcnJvd0JvdHRvbV06IFwiNjE3NjNcIixcbiAgW0ljb25zLkFycm93RXhwYW5kSF06IFwiNjE3NjRcIixcbiAgW0ljb25zLkFycm93RXhwYW5kVl06IFwiNjE3NjVcIixcbiAgW0ljb25zLkFycm93TGVmdENpcmNsZV06IFwiNjE3NjZcIixcbiAgW0ljb25zLkFycm93TGVmdF06IFwiNjE3NjdcIixcbiAgW0ljb25zLkFycm93UGF0aERvd25dOiBcIjYxNzY4XCIsXG4gIFtJY29ucy5BcnJvd1BhdGhMZWZ0XTogXCI2MTc2OVwiLFxuICBbSWNvbnMuQXJyb3dQYXRoUmlnaHRdOiBcIjYxNzcwXCIsXG4gIFtJY29ucy5BcnJvd1BhdGhVcF06IFwiNjE3NzFcIixcbiAgW0ljb25zLkFycm93UmlnaHRDaXJjbGVdOiBcIjYxNzcyXCIsXG4gIFtJY29ucy5BcnJvd1JpZ2h0XTogXCI2MTc3M1wiLFxuICBbSWNvbnMuQXJyb3dUb3BDaXJjbGVdOiBcIjYxNzc0XCIsXG4gIFtJY29ucy5BcnJvd1RvcExlZnRdOiBcIjYxNzc1XCIsXG4gIFtJY29ucy5BcnJvd1RvcFJpZ2h0XTogXCI2MTc3NlwiLFxuICBbSWNvbnMuQXJyb3dUb3BdOiBcIjYxNzc3XCIsXG4gIFtJY29ucy5BcnJvd1RyaWFuZ2xlQm90dG9tXTogXCI2MTc3OFwiLFxuICBbSWNvbnMuQXJyb3dUcmlhbmdsZUxlZnRdOiBcIjYxNzc5XCIsXG4gIFtJY29ucy5BcnJvd1RyaWFuZ2xlUmlnaHRdOiBcIjYxNzgwXCIsXG4gIFtJY29ucy5BcnJvd1RyaWFuZ2xlVG9wXTogXCI2MTc4MVwiLFxuICBbSWNvbnMuQXN0ZXJpc2tQbGFjZWhvbGRlcl06IFwiNjE3ODJcIixcbiAgW0ljb25zLkF0XTogXCI2MTc4M1wiLFxuICBbSWNvbnMuQXR0YWNobWVudF8yQXR0YWNoUGFwZXJDbGlwXTogXCI2MTc4NFwiLFxuICBbSWNvbnMuQXR0YWNobWVudEF0dGFjaERvY3VtZW50QXR0YWNoZW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYxNzg1XCIsXG4gIFtJY29ucy5BdHRhY2htZW50QXR0YWNoUGFwZXJDbGlwXTogXCI2MTc4NlwiLFxuICBbSWNvbnMuQXVkaW9NdXNpY1BsYXlsaXN0TXVzaWNhbE5vdGVdOiBcIjYxNzg3XCIsXG4gIFtJY29ucy5BdXRvRmxhc2hdOiBcIjYxNzg4XCIsXG4gIFtJY29ucy5BdXRvU2l6ZUF1dG9tYXRpY1NpemVQYWdlUGFnZVNpemVdOiBcIjYxNzg5XCIsXG4gIFtJY29ucy5Bdm9jYWRvXTogXCI2MTc5MFwiLFxuICBbSWNvbnMuQmFja106IFwiNjE3OTFcIixcbiAgW0ljb25zLkJhY2t3YXJkRGVsZXRlUmVtb3ZlS2V5XTogXCI2MTc5MlwiLFxuICBbSWNvbnMuQmFkZ2VWZXJpZmllZEF3YXJkXTogXCI2MTc5M1wiLFxuICBbSWNvbnMuQmFnXzJMdWdnYWdlQnVnZ2FnZV06IFwiNjE3OTRcIixcbiAgW0ljb25zLkJhZ18yU2hvcHBpbmddOiBcIjYxNzk1XCIsXG4gIFtJY29ucy5CYWdMdWdnYWdlQnVnZ2FnZV06IFwiNjE3OTZcIixcbiAgW0ljb25zLkJhZ1Nob3BwaW5nXTogXCI2MTc5N1wiLFxuICBbSWNvbnMuQmFua18xXTogXCI2MTc5OFwiLFxuICBbSWNvbnMuQmFua106IFwiNjE3OTlcIixcbiAgW0ljb25zLkJhcmNvZGVTY2FuXTogXCI2MTgwMFwiLFxuICBbSWNvbnMuQmFzZWJhbGxdOiBcIjYxODAxXCIsXG4gIFtJY29ucy5CYXNrZXRfMUNhcnRTaG9wcGluZ106IFwiNjE4MDJcIixcbiAgW0ljb25zLkJhc2tldF8yU2hvcHBpbmdCYWddOiBcIjYxODAzXCIsXG4gIFtJY29ucy5CYXNrZXRiYWxsTmJhXTogXCI2MTgwNFwiLFxuICBbSWNvbnMuQmF0dGVyeUVtcHR5UG93ZXJdOiBcIjYxODA1XCIsXG4gIFtJY29ucy5CYXR0ZXJ5RXJyb3JQb3dlcl06IFwiNjE4MDZcIixcbiAgW0ljb25zLkJhdHRlcnlGdWxsUG93ZXJdOiBcIjYxODA3XCIsXG4gIFtJY29ucy5CYXR0ZXJ5TG9hZGluZ1Bvd2VyXTogXCI2MTgwOFwiLFxuICBbSWNvbnMuQmF0dGVyeUxvd1Bvd2VyXTogXCI2MTgwOVwiLFxuICBbSWNvbnMuQmF0dGVyeU1lZGl1bVBvd2VyXTogXCI2MTgxMFwiLFxuICBbSWNvbnMuQmVsbENvbmNpZXJnZV06IFwiNjE4MTFcIixcbiAgW0ljb25zLkJlbGxOb3RpZnldOiBcIjYxODEyXCIsXG4gIFtJY29ucy5CZXppZXJBZGRQbHVzVmVjdG9yTm9kZXNdOiBcIjYxODEzXCIsXG4gIFtJY29ucy5CZXppZXJDaXJjbGVWZWN0b3JOb2Rlc106IFwiNjE4MTRcIixcbiAgW0ljb25zLkJlemllckN1cnZlQmV6aWVyVmVjdG9yXTogXCI2MTgxNVwiLFxuICBbSWNvbnMuQmV6aWVyQ3VydmVzQW5pbWF0aW9uTW90aW9uU3ByaW5nXTogXCI2MTgxNlwiLFxuICBbSWNvbnMuQmV6aWVyUmVtb3ZlRGVsZXRlTWludXNWZWN0b3JOb2Rlc106IFwiNjE4MTdcIixcbiAgW0ljb25zLkJlemllclZlY3Rvck5vZGVzRWRpdF8xXTogXCI2MTgxOFwiLFxuICBbSWNvbnMuQmV6aWVyVmVjdG9yTm9kZXNFZGl0XTogXCI2MTgxOVwiLFxuICBbSWNvbnMuQmV6aWVyVmVjdG9yTm9kZXNdOiBcIjYxODIwXCIsXG4gIFtJY29ucy5CaWxsUHVyY2hhY2VJbnZvaWNlXzFdOiBcIjYxODIxXCIsXG4gIFtJY29ucy5CaWxsUHVyY2hhY2VJbnZvaWNlXTogXCI2MTgyMlwiLFxuICBbSWNvbnMuQmlydGhkYXlDYWtlXTogXCI2MTgyM1wiLFxuICBbSWNvbnMuQmxvY2tBZHNdOiBcIjYxODI0XCIsXG4gIFtJY29ucy5CbG9ja106IFwiNjE4MjVcIixcbiAgW0ljb25zLkJsdWV0b290aF06IFwiNjE4MjZcIixcbiAgW0ljb25zLkJub296ZUJlbGxdOiBcIjYxODI3XCIsXG4gIFtJY29ucy5Cb2xkXTogXCI2MTgyOFwiLFxuICBbSWNvbnMuQm9tYkJvb21dOiBcIjYxODI5XCIsXG4gIFtJY29ucy5Cb29rXzJHdWlkZUluZm9GYXFdOiBcIjYxODMwXCIsXG4gIFtJY29ucy5Cb29rR3VpZGVJbmZvRmFxXTogXCI2MTgzMVwiLFxuICBbSWNvbnMuQm9va21hcmtCYW5uZXJGbGFnVGFnXTogXCI2MTgzMlwiLFxuICBbSWNvbnMuQm9va21hcmtDaGVja0FkZENoZWNrXTogXCI2MTgzM1wiLFxuICBbSWNvbnMuQm9va21hcmtEZWxldGVSZW1vdmVCYW5uZXJGbGFnVGFnXTogXCI2MTgzNFwiLFxuICBbSWNvbnMuQm9va21hcmtQbHVzQmFubmVyRmxhZ1RhZ106IFwiNjE4MzVcIixcbiAgW0ljb25zLkJvdF06IFwiNjE4MzZcIixcbiAgW0ljb25zLkJyYWNrZXRzXzFdOiBcIjYxODM3XCIsXG4gIFtJY29ucy5CcmFja2V0c18yXTogXCI2MTgzOFwiLFxuICBbSWNvbnMuQnJhaW5BaVRoaW5raW5nXTogXCI2MTgzOVwiLFxuICBbSWNvbnMuQnJhbmNoZXNdOiBcIjYxODQwXCIsXG4gIFtJY29ucy5Ccm9rZW5MaW5rXTogXCI2MTg0MVwiLFxuICBbSWNvbnMuQnJvb21CcnVzaF06IFwiNjE4NDJcIixcbiAgW0ljb25zLkJyb3dzZXJfMldpbmRvd0FwcERlc2t0b3BdOiBcIjYxODQzXCIsXG4gIFtJY29ucy5Ccm93c2VyV2luZG93QXBwRGVza3RvcF06IFwiNjE4NDRcIixcbiAgW0ljb25zLkJydXNoQ29sb3JdOiBcIjYxODQ1XCIsXG4gIFtJY29ucy5CdWJibGVfMkFubm90YXRpb25NZXNzYWdlXTogXCI2MTg0NlwiLFxuICBbSWNvbnMuQnViYmxlXzJNZXNzYWdlXTogXCI2MTg0N1wiLFxuICBbSWNvbnMuQnViYmxlXzNNZXNzYWdlXTogXCI2MTg0OFwiLFxuICBbSWNvbnMuQnViYmxlXzRBbm5vdGF0aW9uTWVzc2FnZV06IFwiNjE4NDlcIixcbiAgW0ljb25zLkJ1YmJsZV81QW5ub3RhdGlvbk1lc3NhZ2VdOiBcIjYxODUwXCIsXG4gIFtJY29ucy5CdWJibGVfNU1lc3NhZ2VdOiBcIjYxODUxXCIsXG4gIFtJY29ucy5CdWJibGVfNkFubm90YXRpb25NZXNzYWdlXTogXCI2MTg1MlwiLFxuICBbSWNvbnMuQnViYmxlXzZNZXNzYWdlXTogXCI2MTg1M1wiLFxuICBbSWNvbnMuQnViYmxlXzdBbm5vdGF0aW9uTWVzc2FnZV06IFwiNjE4NTRcIixcbiAgW0ljb25zLkJ1YmJsZV83TWVzc2FnZV06IFwiNjE4NTVcIixcbiAgW0ljb25zLkJ1YmJsZV83VGV4dE1lc3NhZ2VdOiBcIjYxODU2XCIsXG4gIFtJY29ucy5CdWJibGVBbm5vdGF0aW9uTWVzc2FnZV06IFwiNjE4NTdcIixcbiAgW0ljb25zLkJ1YmJsZU1lc3NhZ2VBbm5vdGF0aW9uRXhjbGFtYXRpb25NYXJrQWxlcnRUb29sdGlwXTogXCI2MTg1OFwiLFxuICBbSWNvbnMuQnViYmxlTWVzc2FnZUFubm90YXRpb25JbmZvVG9vbHRpcF06IFwiNjE4NTlcIixcbiAgW0ljb25zLkJ1YmJsZU1lc3NhZ2VEb3RzVGhyZWVEb3RdOiBcIjYxODYwXCIsXG4gIFtJY29ucy5CdWJibGVNZXNzYWdlTGlrZUhlYXJ0XTogXCI2MTg2MVwiLFxuICBbSWNvbnMuQnViYmxlTWVzc2FnZVF1ZXN0aW9uTWFya1Rvb2x0aXBdOiBcIjYxODYyXCIsXG4gIFtJY29ucy5CdWJibGVNZXNzYWdlU3BhcmtsZUFpVG9vbHRpcF06IFwiNjE4NjNcIixcbiAgW0ljb25zLkJ1YmJsZU1lc3NhZ2VUZXh0XTogXCI2MTg2NFwiLFxuICBbSWNvbnMuQnViYmxlTWVzc2FnZV06IFwiNjE4NjVcIixcbiAgW0ljb25zLkJ1YmJsZU5vdGlmaWNhdGlvbkJhZGdlTWVzc2FnZV06IFwiNjE4NjZcIixcbiAgW0ljb25zLkJ1YmJsZXNfMk1lc3NhZ2VzQ2hhdENvbW11bmljYXRlXTogXCI2MTg2N1wiLFxuICBbSWNvbnMuQnViYmxlc106IFwiNjE4NjhcIixcbiAgW0ljb25zLkJ1Y2tldFRyYXNoQ2FuXTogXCI2MTg2OVwiLFxuICBbSWNvbnMuQnVnXzFJc3N1ZV06IFwiNjE4NzBcIixcbiAgW0ljb25zLkJ1Z0lzc3VlXTogXCI2MTg3MVwiLFxuICBbSWNvbnMuQnVpbGRpbmdzXTogXCI2MTg3MlwiLFxuICBbSWNvbnMuQnVsbGV0TGlzdF06IFwiNjE4NzNcIixcbiAgW0ljb25zLkJ1cmdlckhhbWJ1cmdlckNoZWVzZWJ1cmdlclNhbmR3aWNoXTogXCI2MTg3NFwiLFxuICBbSWNvbnMuQnVyZ2VySGFtYnVyZ2VyU2FuZHdpY2hdOiBcIjYxODc1XCIsXG4gIFtJY29ucy5CdXNpbmVzc1Nob3BTdG9yZV06IFwiNjE4NzZcIixcbiAgW0ljb25zLkNhbGN1bGF0b3JdOiBcIjYxODc3XCIsXG4gIFtJY29ucy5DYWxlbmRhcl8xXTogXCI2MTg3OFwiLFxuICBbSWNvbnMuQ2FsZW5kYXJfMl06IFwiNjE4NzlcIixcbiAgW0ljb25zLkNhbGVuZGFyQWRkSW5zZXJ0RGF0ZV06IFwiNjE4ODBcIixcbiAgW0ljb25zLkNhbGVuZGFyQl06IFwiNjE4ODFcIixcbiAgW0ljb25zLkNhbGVuZGFyQ2hlY2tDaGVja21hcmtBY2NlcHRdOiBcIjYxODgyXCIsXG4gIFtJY29ucy5DYWxlbmRhckNoZWNrXTogXCI2MTg4M1wiLFxuICBbSWNvbnMuQ2FsZW5kYXJEYXRlU2VhcmNoTWFnbmlmaWVyR2xhc3NdOiBcIjYxODg0XCIsXG4gIFtJY29ucy5DYWxlbmRhckRheXNdOiBcIjYxODg1XCIsXG4gIFtJY29ucy5DYWxlbmRhckVkaXREYXRlRWRpdF06IFwiNjE4ODZcIixcbiAgW0ljb25zLkNhbGVuZGFyVGltZUNsb2NrXTogXCI2MTg4N1wiLFxuICBbSWNvbnMuQ2FsZW5kYXJYQ2xvc2VSZW1vdmVEZWxldGVdOiBcIjYxODg4XCIsXG4gIFtJY29ucy5DYWxlbmRlckFkZF06IFwiNjE4ODlcIixcbiAgW0ljb25zLkNhbGVuZGVyUmVtb3ZlXTogXCI2MTg5MFwiLFxuICBbSWNvbnMuQ2FsbEluY29taW5nXTogXCI2MTg5MVwiLFxuICBbSWNvbnMuQ2FsbE91dGdvaW5nXTogXCI2MTg5MlwiLFxuICBbSWNvbnMuQ2FsbFBob25lXTogXCI2MTg5M1wiLFxuICBbSWNvbnMuQ2FtZXJhXzFPZmZQaWN0dXJlSW1hZ2VDYW1dOiBcIjYxODk0XCIsXG4gIFtJY29ucy5DYW1lcmFfMVBpY3R1cmVJbWFnZUNhbV06IFwiNjE4OTVcIixcbiAgW0ljb25zLkNhbWVyYV8yUGljdHVyZUltYWdlQ2FtXTogXCI2MTg5NlwiLFxuICBbSWNvbnMuQ2FtZXJhXzNQaWN0dXJlSW1hZ2VDYW1dOiBcIjYxODk3XCIsXG4gIFtJY29ucy5DYW1lcmFfNEFjdGlvbkNhbUdvUHJvXTogXCI2MTg5OFwiLFxuICBbSWNvbnMuQ2FtZXJhUGljdHVyZUltYWdlQ2FtQ2xvc2VDcm9zc09mZl8xXTogXCI2MTg5OVwiLFxuICBbSWNvbnMuQ2FtZXJhUGljdHVyZUltYWdlQ2FtQ2xvc2VDcm9zc09mZl06IFwiNjE5MDBcIixcbiAgW0ljb25zLkNhbWVyYV06IFwiNjE5MDFcIixcbiAgW0ljb25zLkNhbmNlbENhbGxdOiBcIjYxOTAyXCIsXG4gIFtJY29ucy5DYXJdOiBcIjYxOTAzXCIsXG4gIFtJY29ucy5DYXJkc106IFwiNjE5MDRcIixcbiAgW0ljb25zLkNhcnVzc2VsU2xpZGVzXTogXCI2MTkwNVwiLFxuICBbSWNvbnMuQ2F0SW1hZ2VBbmltYWxDdXRlXTogXCI2MTkwNlwiLFxuICBbSWNvbnMuQ2VsZWJyYXRlUGFydHlDb25mZXR0aV06IFwiNjE5MDdcIixcbiAgW0ljb25zLkNoYXJ0XzFTdGF0aXN0aWNzRmxpcGNoYXJ0UHJlc2VudGF0aW9uR3JhcGhdOiBcIjYxOTA4XCIsXG4gIFtJY29ucy5DaGFydF8yU3RhdGlzdGljc0ZsaXBjaGFydFByZXNlbnRhdGlvbkdyYXBoXzJdOiBcIjYxOTA5XCIsXG4gIFtJY29ucy5DaGFydF8zU3RhdGlzdGljc0dyYXBoU2lnbmFsXzFdOiBcIjYxOTEwXCIsXG4gIFtJY29ucy5DaGFydF8zU3RhdGlzdGljc0dyYXBoU2lnbmFsXTogXCI2MTkxMVwiLFxuICBbSWNvbnMuQ2hhcnRfNFN0YXRpc3RpY3NHcmFwaF8yXTogXCI2MTkxMlwiLFxuICBbSWNvbnMuQ2hhcnRfNVN0YXRpc3RpY3NHcmFwaF8zXTogXCI2MTkxM1wiLFxuICBbSWNvbnMuQ2hhcnRfNlN0YXRpc3RpY3NHcmFwaF80XTogXCI2MTkxNFwiLFxuICBbSWNvbnMuQ2hhcnRfN1N0YXRpc3RpY3NHcmFwaF81XTogXCI2MTkxNVwiLFxuICBbSWNvbnMuQ2hhdEdwdF06IFwiNjE5MTZcIixcbiAgW0ljb25zLkNoZWNrQ2hlY21hcmtdOiBcIjYxOTE3XCIsXG4gIFtJY29ucy5DaGVja1JhZGlvQ2lyY2xlQ2hlY2tib3hDaGVja0NoZWNrbWFya0NvbmZpcm1dOiBcIjYxOTE4XCIsXG4gIFtJY29ucy5DaGVja2JveENoZWNrQ2hlY2ttYXJrQ29uZmlybV06IFwiNjE5MTlcIixcbiAgW0ljb25zLkNoZWNrbGlzdEJveENoZWNrTGlzdFNlYXJjaF8xXTogXCI2MTkyMFwiLFxuICBbSWNvbnMuQ2hlY2tsaXN0Qm94Q2hlY2tMaXN0U2VhcmNoXTogXCI2MTkyMVwiLFxuICBbSWNvbnMuQ2hlY2tsaXN0Qm94Q2hlY2tMaXN0XTogXCI2MTkyMlwiLFxuICBbSWNvbnMuQ2hlY2tsaXN0TGlzdF06IFwiNjE5MjNcIixcbiAgW0ljb25zLkNoZXZyb25Cb3R0b21dOiBcIjYxOTI0XCIsXG4gIFtJY29ucy5DaGV2cm9uRG91YmxlRG93bl06IFwiNjE5MjVcIixcbiAgW0ljb25zLkNoZXZyb25Eb3VibGVMZWZ0XTogXCI2MTkyNlwiLFxuICBbSWNvbnMuQ2hldnJvbkRvdWJsZVJpZ2h0XTogXCI2MTkyN1wiLFxuICBbSWNvbnMuQ2hldnJvbkRvdWJsZVVwXTogXCI2MTkyOFwiLFxuICBbSWNvbnMuQ2hldnJvbkRvd25TbWFsbF06IFwiNjE5MjlcIixcbiAgW0ljb25zLkNoZXZyb25HcmFiYmVySG9yaXpvbnRhbF8xXTogXCI2MTkzMFwiLFxuICBbSWNvbnMuQ2hldnJvbkdyYWJiZXJIb3Jpem9udGFsXTogXCI2MTkzMVwiLFxuICBbSWNvbnMuQ2hldnJvbkxhcmdlRG93bkNoZXZEb3duXTogXCI2MTkzMlwiLFxuICBbSWNvbnMuQ2hldnJvbkxhcmdlTGVmdENoZXZMZWZ0XTogXCI2MTkzM1wiLFxuICBbSWNvbnMuQ2hldnJvbkxhcmdlUmlnaHRDaGV2UmlnaHRdOiBcIjYxOTM0XCIsXG4gIFtJY29ucy5DaGV2cm9uTGFyZ2VUb3BDaGV2VG9wXTogXCI2MTkzNVwiLFxuICBbSWNvbnMuQ2hldnJvbkxlZnRdOiBcIjYxOTM2XCIsXG4gIFtJY29ucy5DaGV2cm9uUmlnaHRTbWFsbF8xXTogXCI2MTkzN1wiLFxuICBbSWNvbnMuQ2hldnJvblJpZ2h0U21hbGxdOiBcIjYxOTM4XCIsXG4gIFtJY29ucy5DaGV2cm9uUmlnaHRdOiBcIjYxOTM5XCIsXG4gIFtJY29ucy5DaGV2cm9uVG9wU21hbGxdOiBcIjYxOTQwXCIsXG4gIFtJY29ucy5DaGV2cm9uVG9wXTogXCI2MTk0MVwiLFxuICBbSWNvbnMuQ2hyb21lY2FzdENhc3RdOiBcIjYxOTQyXCIsXG4gIFtJY29ucy5DaXJjbGVQbGFjZWhvbGRlck9mZl06IFwiNjE5NDNcIixcbiAgW0ljb25zLkNpcmNsZVBsYWNlaG9sZGVyT25dOiBcIjYxOTQ0XCIsXG4gIFtJY29ucy5DbGlwYm9hcmRfMkNvcHlMaXN0XTogXCI2MTk0NVwiLFxuICBbSWNvbnMuQ2xpcGJvYXJkQ29weUxpc3RdOiBcIjYxOTQ2XCIsXG4gIFtJY29ucy5DbG9ja0FsZXJ0VGltZXJdOiBcIjYxOTQ3XCIsXG4gIFtJY29ucy5DbG9ja0NpcmNsZVRpbWVdOiBcIjYxOTQ4XCIsXG4gIFtJY29ucy5DbG9ja1Nub296ZVRpbWVyU25vb3plWnpdOiBcIjYxOTQ5XCIsXG4gIFtJY29ucy5DbG9ja1NxdWFyZVRpbWVUaW1lcldhdGNoXTogXCI2MTk1MFwiLFxuICBbSWNvbnMuQ2xvc2VRdW90ZUJsb2NrcXVvdGVdOiBcIjYxOTUxXCIsXG4gIFtJY29ucy5DbG9zZVhDaGVja2JveFJlbW92ZV06IFwiNjE5NTJcIixcbiAgW0ljb25zLkNsb3NlWENpcmNsZVJlbW92ZV06IFwiNjE5NTNcIixcbiAgW0ljb25zLkNsb3NlZENhcHRpb25pbmdDY106IFwiNjE5NTRcIixcbiAgW0ljb25zLkNsb3VkQ2xvdWRzXTogXCI2MTk1NVwiLFxuICBbSWNvbnMuQ2xvdWREb3dubG9hZF06IFwiNjE5NTZcIixcbiAgW0ljb25zLkNsb3VkTGluZXNTeW5jRG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYxOTU3XCIsXG4gIFtJY29ucy5DbG91ZE9mZl8yT2ZmbGluZV06IFwiNjE5NThcIixcbiAgW0ljb25zLkNsb3VkT2ZmT2ZmbGluZV06IFwiNjE5NTlcIixcbiAgW0ljb25zLkNsb3VkU2ltcGxlQXJyb3dEb3duRG93bmxvYWRdOiBcIjYxOTYwXCIsXG4gIFtJY29ucy5DbG91ZFNpbXBsZURpc2Nvbm5lY3RlZEVycm9yXTogXCI2MTk2MVwiLFxuICBbSWNvbnMuQ2xvdWRTaW1wbGVdOiBcIjYxOTYyXCIsXG4gIFtJY29ucy5DbG91ZFN5bmNEb2N1bWVudExpc3RQYWdlRmlsZV06IFwiNjE5NjNcIixcbiAgW0ljb25zLkNsb3VkVXBsb2FkXTogXCI2MTk2NFwiLFxuICBbSWNvbnMuQ2xvdWRdOiBcIjYxOTY1XCIsXG4gIFtJY29ucy5DbG91ZHlDbG91ZHNdOiBcIjYxOTY2XCIsXG4gIFtJY29ucy5DbG91ZHlTdW5DbG91ZHNdOiBcIjYxOTY3XCIsXG4gIFtJY29ucy5DbWRCb3hDb21tYW5kQXBwbGVLZXldOiBcIjYxOTY4XCIsXG4gIFtJY29ucy5DbWRDb21tYW5kQXBwbGVLZXldOiBcIjYxOTY5XCIsXG4gIFtJY29ucy5Db2RlQnJhY2tldHNdOiBcIjYxOTcwXCIsXG4gIFtJY29ucy5Db2RlSW5zZXJ0XTogXCI2MTk3MVwiLFxuICBbSWNvbnMuQ29kZUxpbmVzXTogXCI2MTk3MlwiLFxuICBbSWNvbnMuQ29kZV06IFwiNjE5NzNcIixcbiAgW0ljb25zLkNvbG9yUGlja2VyQ29sb3JdOiBcIjYxOTc0XCIsXG4gIFtJY29ucy5Db2xvclN3YXRjaFBhbGV0dGVDb2xvdXJzXTogXCI2MTk3NVwiLFxuICBbSWNvbnMuQ29sb3JdOiBcIjYxOTc2XCIsXG4gIFtJY29ucy5Db2xvcnNQYWxldHRlQ29sb3Vyc106IFwiNjE5NzdcIixcbiAgW0ljb25zLkNvbHVtbldpZGVDb2x1bXNdOiBcIjYxOTc4XCIsXG4gIFtJY29ucy5Db21wYXNzUm91bmRCcm93c2VyU2FmYXJpV2ViSW50ZXJuZXROYXZpZ2F0aW9uXTogXCI2MTk3OVwiLFxuICBbSWNvbnMuQ29tcGFzc1NxdWFyZUJyb3dzZXJTYWZhcmlXZWJJbnRlcm5ldE5hdmlnYXRpb25dOiBcIjYxOTgwXCIsXG4gIFtJY29ucy5Db25uZWN0RGV2aWNlc01hY2Jvb2tJcGhvbmVQaG9uZV06IFwiNjE5ODFcIixcbiAgW0ljb25zLkNvbnNvbGVUZXJtaW5hbF06IFwiNjE5ODJcIixcbiAgW0ljb25zLkNvbnRyYXN0XTogXCI2MTk4M1wiLFxuICBbSWNvbnMuQ29udHJvbF06IFwiNjE5ODRcIixcbiAgW0ljb25zLkNvb2tpZXNdOiBcIjYxOTg1XCIsXG4gIFtJY29ucy5Db3B5XzFMYXllcnNQYWdlc106IFwiNjE5ODZcIixcbiAgW0ljb25zLkNvcHlfMkxheWVyc1BhZ2VzXTogXCI2MTk4N1wiLFxuICBbSWNvbnMuQ29weV8zTGF5ZXJzUGFnZXNdOiBcIjYxOTg4XCIsXG4gIFtJY29ucy5Db3B5XzRMYXllcnNQYWdlc106IFwiNjE5ODlcIixcbiAgW0ljb25zLkNvcHlfNUxheWVyc1BhZ2VzXTogXCI2MTk5MFwiLFxuICBbSWNvbnMuQ29ybmVyRG93bkxlZnRdOiBcIjYxOTkxXCIsXG4gIFtJY29ucy5Db3JuZXJEb3duUmlnaHRdOiBcIjYxOTkyXCIsXG4gIFtJY29ucy5Db3JuZXJMZWZ0RG93bl06IFwiNjE5OTNcIixcbiAgW0ljb25zLkNvcm5lckxlZnRVcF06IFwiNjE5OTRcIixcbiAgW0ljb25zLkNvcm5lclJpZ2h0RG93bl06IFwiNjE5OTVcIixcbiAgW0ljb25zLkNvcm5lclJpZ2h0VXBdOiBcIjYxOTk2XCIsXG4gIFtJY29ucy5Db3JuZXJVcFJpZ2h0XzFdOiBcIjYxOTk3XCIsXG4gIFtJY29ucy5Db3JuZXJVcFJpZ2h0XTogXCI2MTk5OFwiLFxuICBbSWNvbnMuQ291cnRdOiBcIjYxOTk5XCIsXG4gIFtJY29ucy5DcmVkaXRDYXJkXzFDYXJkUGF5bWVudF06IFwiNjIwMDBcIixcbiAgW0ljb25zLkNyZWRpdENhcmRfMkNhcmRQYXltZW50XTogXCI2MjAwMVwiLFxuICBbSWNvbnMuQ3JlZGl0Q2FyZF8zQ2FyZFBheW1lbnRdOiBcIjYyMDAyXCIsXG4gIFtJY29ucy5Dcm9wXTogXCI2MjAwM1wiLFxuICBbSWNvbnMuQ3Jvc3NlZExhcmdlQ2xvc2VdOiBcIjYyMDA0XCIsXG4gIFtJY29ucy5Dcm9zc2VkU21hbGxEZWxldGVSZW1vdmVdOiBcIjYyMDA1XCIsXG4gIFtJY29ucy5Dcm93blZpcF06IFwiNjIwMDZcIixcbiAgW0ljb25zLkNyeXB0b0NvaW5dOiBcIjYyMDA3XCIsXG4gIFtJY29ucy5DcnlwdG9dOiBcIjYyMDA4XCIsXG4gIFtJY29ucy5DdXBDb2ZmZWVUZWFNaWxrXTogXCI2MjAwOVwiLFxuICBbSWNvbnMuQ3VwVGVhQ29mZmVlXTogXCI2MjAxMFwiLFxuICBbSWNvbnMuQ3Vyc29yXzFBcnJvd106IFwiNjIwMTFcIixcbiAgW0ljb25zLkN1cnNvcl8yQXJyb3ddOiBcIjYyMDEyXCIsXG4gIFtJY29ucy5DdXJzb3JfM0Fycm93XTogXCI2MjAxM1wiLFxuICBbSWNvbnMuQ3Vyc29yQm94QXJyb3ddOiBcIjYyMDE0XCIsXG4gIFtJY29ucy5DdXJzb3JDbGlja0Fycm93Q2xpY2tiYWl0XTogXCI2MjAxNVwiLFxuICBbSWNvbnMuRGFzaGJvYXJkRmFzdF06IFwiNjIwMTZcIixcbiAgW0ljb25zLkRhc2hib2FyZExvd106IFwiNjIwMTdcIixcbiAgW0ljb25zLkRhc2hib2FyZE1pZGRsZV06IFwiNjIwMThcIixcbiAgW0ljb25zLkRhc2hib2FyZF06IFwiNjIwMTlcIixcbiAgW0ljb25zLkRhdGVUaW1lQ2FsZW5kYXJUaW1lXTogXCI2MjAyMFwiLFxuICBbSWNvbnMuRGVidWdEZWJ1Z2dlcl06IFwiNjIwMjFcIixcbiAgW0ljb25zLkRlbGV0ZV8yUmVtb3ZlR2FyYmFnZVdhc3RlVHJhc2hDYW5dOiBcIjYyMDIyXCIsXG4gIFtJY29ucy5EZWxldGVSZW1vdmVCYWNrc3BhY2VdOiBcIjYyMDIzXCIsXG4gIFtJY29ucy5EZWxldGVSZW1vdmVHYXJiYWdlV2FzdGVUcmFzaENhbl06IFwiNjIwMjRcIixcbiAgW0ljb25zLkRlbGV0ZVNpbXBsZV06IFwiNjIwMjVcIixcbiAgW0ljb25zLkRpY2VfMVJvbGxdOiBcIjYyMDI2XCIsXG4gIFtJY29ucy5EaWNlXzJSb2xsXTogXCI2MjAyN1wiLFxuICBbSWNvbnMuRGljZV8zUm9sbF06IFwiNjIwMjhcIixcbiAgW0ljb25zLkRpY2VfNFJvbGxdOiBcIjYyMDI5XCIsXG4gIFtJY29ucy5EaWNlXzVSb2xsXTogXCI2MjAzMFwiLFxuICBbSWNvbnMuRGljZV82Um9sbF06IFwiNjIwMzFcIixcbiAgW0ljb25zLkRpcmVjdG9yQ2hhaXJSZWdpZUNoYWlyXTogXCI2MjAzMlwiLFxuICBbSWNvbnMuRGlza18xU2F2ZV06IFwiNjIwMzNcIixcbiAgW0ljb25zLkRpc2tfMlNhdmVdOiBcIjYyMDM0XCIsXG4gIFtJY29ucy5EaXZpZGVyQWRkTGluZV06IFwiNjIwMzVcIixcbiAgW0ljb25zLkRvY2tCb3hBcnJvd106IFwiNjIwMzZcIixcbiAgW0ljb25zLkRvY3VtZW50TGlzdFBhZ2VGaWxlXTogXCI2MjAzN1wiLFxuICBbSWNvbnMuRG9jdW1lbnRXaXRoTGluZXNMaXN0UGFnZUZpbGVdOiBcIjYyMDM4XCIsXG4gIFtJY29ucy5Eb2xsYXJDdXJyZW5jeU1vbmV5Q29pblVzZF06IFwiNjIwMzlcIixcbiAgW0ljb25zLkRvbnV0XTogXCI2MjA0MFwiLFxuICBbSWNvbnMuRG9zc2llcl06IFwiNjIwNDFcIixcbiAgW0ljb25zLkRvdEdyaWRNZW51R3JhYl06IFwiNjIwNDJcIixcbiAgW0ljb25zLkRvdEhvcml6b250YWxNZW51R3JhYl06IFwiNjIwNDNcIixcbiAgW0ljb25zLkRvdFZlcnRpY2FsTWVudUdyYWJdOiBcIjYyMDQ0XCIsXG4gIFtJY29ucy5Eb3duR2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2tdOiBcIjYyMDQ1XCIsXG4gIFtJY29ucy5Eb3duR2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGlja106IFwiNjIwNDZcIixcbiAgW0ljb25zLkRvd25sb2FkQ2lyY2xlQXJyb3dEb3duXTogXCI2MjA0N1wiLFxuICBbSWNvbnMuRG93bmxvYWRGaWxlRG93bl06IFwiNjIwNDhcIixcbiAgW0ljb25zLkRvd25sb2FkU3F1YXJlQXJyb3dEb3duXTogXCI2MjA0OVwiLFxuICBbSWNvbnMuRHJhZ0dyYWJdOiBcIjYyMDUwXCIsXG4gIFtJY29ucy5Ecmlua0N1cFN0cmF3XTogXCI2MjA1MVwiLFxuICBbSWNvbnMuRHJvcFdhdGVyUHJlY2lwaXRhdGlvbkxpcXVpZF06IFwiNjIwNTJcIixcbiAgW0ljb25zLkVhcnRoR2xvYmVXb3JsZF06IFwiNjIwNTNcIixcbiAgW0ljb25zLkVkaXRfMDFdOiBcIjYyMDU0XCIsXG4gIFtJY29ucy5FZGl0QmlnQm94UGVuY2lsUGVuV3JpdGVEcmF3XTogXCI2MjA1NVwiLFxuICBbSWNvbnMuRWRpdFBlbmNpbFdyaXRlXTogXCI2MjA1NlwiLFxuICBbSWNvbnMuRWRpdFNtYWxsQm94UGVuY2lsUGVuV3JpdGVEcmF3XTogXCI2MjA1N1wiLFxuICBbSWNvbnMuRW1haWxfMkVudmVsb3BlTWFpbF06IFwiNjIwNThcIixcbiAgW0ljb25zLkVtYWlsXzJOb3RpZmljYXRpb25CYWRnZUVudmVsb3BlTWFpbF06IFwiNjIwNTlcIixcbiAgW0ljb25zLkVtYWlsRW52ZWxvcGVfMV06IFwiNjIwNjBcIixcbiAgW0ljb25zLkVtYWlsRW52ZWxvcGVdOiBcIjYyMDYxXCIsXG4gIFtJY29ucy5FcnJvcldhcm5pbmdBbGVydF06IFwiNjIwNjJcIixcbiAgW0ljb25zLkVzY1Bvd2VyXTogXCI2MjA2M1wiLFxuICBbSWNvbnMuRXRoZXJldW1dOiBcIjYyMDY0XCIsXG4gIFtJY29ucy5FdXJvQ3VycmVuY3lNb25leUNvaW5FdXJvXTogXCI2MjA2NVwiLFxuICBbSWNvbnMuRXhwYW5kQXJyb3dFbmxhcmdlXTogXCI2MjA2NlwiLFxuICBbSWNvbnMuRXhwYW5kV2luZG93TGF5b3V0XTogXCI2MjA2N1wiLFxuICBbSWNvbnMuRXhwbG9zaW9uQm9vbUJhbmdQb3BdOiBcIjYyMDY4XCIsXG4gIFtJY29ucy5FeWVDbG9zZWRTZWVIaWRkZW5dOiBcIjYyMDY5XCIsXG4gIFtJY29ucy5GYXN0Rm9yd2FyZF8xMHNdOiBcIjYyMDcwXCIsXG4gIFtJY29ucy5GYXN0Rm9yd2FyZF8xNXNdOiBcIjYyMDcxXCIsXG4gIFtJY29ucy5GYXN0Rm9yd2FyZF8zMHNdOiBcIjYyMDcyXCIsXG4gIFtJY29ucy5GYXN0Rm9yd2FyZF81c106IFwiNjIwNzNcIixcbiAgW0ljb25zLkZhc3RGb3J3YXJkU3ltYm9sXTogXCI2MjA3NFwiLFxuICBbSWNvbnMuRmVhdHVyZXNUb1RoZU1vb25dOiBcIjYyMDc1XCIsXG4gIFtJY29ucy5GaWxlXzFEb2N1bWVudENsb3VkU3luY106IFwiNjIwNzZcIixcbiAgW0ljb25zLkZpbGVfMkRvY3VtZW50c0NvcHldOiBcIjYyMDc3XCIsXG4gIFtJY29ucy5GaWxlXzNEb2N1bWVudENsb3VkU3luY106IFwiNjIwNzhcIixcbiAgW0ljb25zLkZpbGVfNERvY3VtZW50Q2xvdWRTeW5jXTogXCI2MjA3OVwiLFxuICBbSWNvbnMuRmlsZV81RG9jdW1lbnRDbG91ZFN5bmNdOiBcIjYyMDgwXCIsXG4gIFtJY29ucy5GaWxlXzZEb2N1bWVudFRleHRdOiBcIjYyMDgxXCIsXG4gIFtJY29ucy5GaWxlXzdEb2N1bWVudExvY2tlZFBhc3N3b3JkXTogXCI2MjA4MlwiLFxuICBbSWNvbnMuRmlsZV84RG9jdW1lbnRDbG91ZFN5bmNdOiBcIjYyMDgzXCIsXG4gIFtJY29ucy5GaWx0ZXJfMVNvcnRdOiBcIjYyMDg0XCIsXG4gIFtJY29ucy5GaWx0ZXJfMlNvcnRdOiBcIjYyMDg1XCIsXG4gIFtJY29ucy5GaWx0ZXJBc2NlbmRpbmdTb3J0QXpBc2NlbmRpbmdBc2NdOiBcIjYyMDg2XCIsXG4gIFtJY29ucy5GaWx0ZXJEZXNjZW5kaW5nU29ydFphRGVzY2VuZGluZ0Rlc2NdOiBcIjYyMDg3XCIsXG4gIFtJY29ucy5GaWx0ZXJUaW1lbGluZVNvcnRdOiBcIjYyMDg4XCIsXG4gIFtJY29ucy5GaW5kZXJGYWNlSWRdOiBcIjYyMDg5XCIsXG4gIFtJY29ucy5GaW5kZXJGaWxlc09zXTogXCI2MjA5MFwiLFxuICBbSWNvbnMuRmluZ2VyUHJpbnRfMlRvdWNoSWRdOiBcIjYyMDkxXCIsXG4gIFtJY29ucy5GaW5nZXJQcmludFRvdWNoSWRdOiBcIjYyMDkyXCIsXG4gIFtJY29ucy5GaXJlXzFGbGFtZUhvdEhlYXRdOiBcIjYyMDkzXCIsXG4gIFtJY29ucy5GaXJlXzJGbGFtZUhvdEhlYXRdOiBcIjYyMDk0XCIsXG4gIFtJY29ucy5GaXN0YnVtcEJvb21IYW5kc0ZyaWVuZHNdOiBcIjYyMDk1XCIsXG4gIFtJY29ucy5GbGFnXzJQcmlvcml0eV8xXTogXCI2MjA5NlwiLFxuICBbSWNvbnMuRmxhZ18yUHJpb3JpdHldOiBcIjYyMDk3XCIsXG4gIFtJY29ucy5Gb2N1c0NhbWVyYUV4cG9zdXJlQXV0b2ZvY3VzQXV0b106IFwiNjIwOThcIixcbiAgW0ljb25zLkZvY3VzQ2FtZXJhRXhwb3N1cmVGbGFzaF06IFwiNjIwOTlcIixcbiAgW0ljb25zLkZvY3VzQ2FtZXJhRXhwb3N1cmVMb2NrXTogXCI2MjEwMFwiLFxuICBbSWNvbnMuRm9jdXNDYW1lcmFFeHBvc3VyZU1hY3JvRmxvd2VyXTogXCI2MjEwMVwiLFxuICBbSWNvbnMuRm9jdXNDYW1lcmFFeHBvc3VyZU1hZ2ljQXV0b0FpU3BhcmtsZXNFZmZlY3RzXTogXCI2MjEwMlwiLFxuICBbSWNvbnMuRm9jdXNDYW1lcmFFeHBvc3VyZVNxdWFyZV06IFwiNjIxMDNcIixcbiAgW0ljb25zLkZvY3VzQ2FtZXJhRXhwb3N1cmVVbmxvY2tdOiBcIjYyMTA0XCIsXG4gIFtJY29ucy5Gb2N1c0NhbWVyYUV4cG9zdXJlWm9vbUluXTogXCI2MjEwNVwiLFxuICBbSWNvbnMuRm9jdXNDYW1lcmFFeHBvc3VyZVpvb21PdXRdOiBcIjYyMTA2XCIsXG4gIFtJY29ucy5Gb2N1c0NhbWVyYUV4cG9zdXJlXTogXCI2MjEwN1wiLFxuICBbSWNvbnMuRm9jdXNFeHBvc3VyZU1hY3JvRmxvd2VyXzJdOiBcIjYyMTA4XCIsXG4gIFtJY29ucy5Gb2xkZXJfMV06IFwiNjIxMDlcIixcbiAgW0ljb25zLkZvbGRlcl8yXTogXCI2MjExMFwiLFxuICBbSWNvbnMuRm9sZGVyXzNdOiBcIjYyMTExXCIsXG4gIFtJY29ucy5Gb2xkZXJBZGRQbHVzXTogXCI2MjExMlwiLFxuICBbSWNvbnMuRm9sZGVyQm9va21hcmtzQm9va21hcmtdOiBcIjYyMTEzXCIsXG4gIFtJY29ucy5Gb2xkZXJDbG91ZF8xXTogXCI2MjExNFwiLFxuICBbSWNvbnMuRm9sZGVyQ2xvdWRfMl06IFwiNjIxMTVcIixcbiAgW0ljb25zLkZvbGRlckRlbGV0ZVhdOiBcIjYyMTE2XCIsXG4gIFtJY29ucy5Gb2xkZXJEb3dubG9hZF06IFwiNjIxMTdcIixcbiAgW0ljb25zLkZvbGRlclJlc3RyaWN0ZWRdOiBcIjYyMTE4XCIsXG4gIFtJY29ucy5Gb2xkZXJTaGFyZWRVc2VyXTogXCI2MjExOVwiLFxuICBbSWNvbnMuRm9sZGVyVXBsb2FkXTogXCI2MjEyMFwiLFxuICBbSWNvbnMuRm9sZGVyXTogXCI2MjEyMVwiLFxuICBbSWNvbnMuRm9sZGVyc106IFwiNjIxMjJcIixcbiAgW0ljb25zLkZvcmtdOiBcIjYyMTIzXCIsXG4gIFtJY29ucy5Gb3J3YXJkc106IFwiNjIxMjRcIixcbiAgW0ljb25zLkdhbWVwYWRCYXNlQ29udHJvbGxzR2FtZUpveXN0aWNrXTogXCI2MjEyNVwiLFxuICBbSWNvbnMuR2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGlja106IFwiNjIxMjZcIixcbiAgW0ljb25zLkdhbWVwYWRHYW1pbmdKb3lzdGlja0dhbWVzXTogXCI2MjEyN1wiLFxuICBbSWNvbnMuR2FyYWdlXTogXCI2MjEyOFwiLFxuICBbSWNvbnMuR2FzXTogXCI2MjEyOVwiLFxuICBbSWNvbnMuR2VhckNvZ1doZWVsXTogXCI2MjEzMFwiLFxuICBbSWNvbnMuR2hvc3RIaWRkZW5Vbmtub3duXTogXCI2MjEzMVwiLFxuICBbSWNvbnMuR2lmU3F1YXJlXTogXCI2MjEzMlwiLFxuICBbSWNvbnMuR2lmXTogXCI2MjEzM1wiLFxuICBbSWNvbnMuR2lmdFNpZGVWaWV3UHJlc2VudF06IFwiNjIxMzRcIixcbiAgW0ljb25zLkdpZnRUb3BWaWV3XTogXCI2MjEzNVwiLFxuICBbSWNvbnMuR2lmdGNhcmRdOiBcIjYyMTM2XCIsXG4gIFtJY29ucy5HaXJvQ2FyZF06IFwiNjIxMzdcIixcbiAgW0ljb25zLkdsb2J1c01hcEVhcnRoR2xvYmVdOiBcIjYyMTM4XCIsXG4gIFtJY29ucy5Hb2xmQmFsbF06IFwiNjIxMzlcIixcbiAgW0ljb25zLkdyYWR1YXRlQ2FwU3R1ZHlFZHVjYXRpb25BY2FkZW1pY1N0dWRlbnRdOiBcIjYyMTQwXCIsXG4gIFtJY29ucy5HcmFwaExpbmVzU3RhdGlzdGljc0RvY3VtZW50TGlzdFBhZ2VGaWxlXTogXCI2MjE0MVwiLFxuICBbSWNvbnMuR3JhcGhTdGF0aXN0aWNzRG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYyMTQyXCIsXG4gIFtJY29ucy5Hcm93dGhHcm93TGVhZnNdOiBcIjYyMTQzXCIsXG4gIFtJY29ucy5IMUhlYWRpbmdIZWFkbGluZV06IFwiNjIxNDRcIixcbiAgW0ljb25zLkgySGVhZGluZ0hlYWRsaW5lXTogXCI2MjE0NVwiLFxuICBbSWNvbnMuSDNIZWFkaW5nSGVhZGxpbmVdOiBcIjYyMTQ2XCIsXG4gIFtJY29ucy5IYW5kXzRGaW5nZXJTZWxlY3RdOiBcIjYyMTQ3XCIsXG4gIFtJY29ucy5IYW5kXzVGaW5nZXJTZWxlY3RdOiBcIjYyMTQ4XCIsXG4gIFtJY29ucy5IYXNodGFnXTogXCI2MjE0OVwiLFxuICBbSWNvbnMuSGRdOiBcIjYyMTUwXCIsXG4gIFtJY29ucy5IZWFkQXZhdGFyXTogXCI2MjE1MVwiLFxuICBbSWNvbnMuSGVhZHBob25lc1N1cHBvcnRdOiBcIjYyMTUyXCIsXG4gIFtJY29ucy5IZWFydF8yTGlrZUhlYWx0aExpZmVGYXZdOiBcIjYyMTUzXCIsXG4gIFtJY29ucy5IZWFydEJlYXRIZWFydFJhdGVQdWxzZV06IFwiNjIxNTRcIixcbiAgW0ljb25zLkhlYXJ0TGlrZUhlYWx0aExpZmVGYXZvcml0ZV06IFwiNjIxNTVcIixcbiAgW0ljb25zLkhpZGVFeWVPZmZTZWVMb29rTm90VmlzaWJsZV06IFwiNjIxNTZcIixcbiAgW0ljb25zLkhpZ2hsaWdodF06IFwiNjIxNTdcIixcbiAgW0ljb25zLkhvbWVEb29ySG91c2VfMV06IFwiNjIxNThcIixcbiAgW0ljb25zLkhvbWVEb29ySG91c2VdOiBcIjYyMTU5XCIsXG4gIFtJY29ucy5Ib21lTGluZUhvdXNlXTogXCI2MjE2MFwiLFxuICBbSWNvbnMuSG9tZU9wZW5Ib3VzZV06IFwiNjIxNjFcIixcbiAgW0ljb25zLkhvbWVSb29mSG91c2VdOiBcIjYyMTYyXCIsXG4gIFtJY29ucy5Ib21lU2ltcGxlSG91c2VfMV06IFwiNjIxNjNcIixcbiAgW0ljb25zLkhvbWVTaW1wbGVIb3VzZV06IFwiNjIxNjRcIixcbiAgW0ljb25zLkhvdXJnbGFzc1RpbWVXYXRjaENsb2NrXTogXCI2MjE2NVwiLFxuICBbSWNvbnMuSWNlSG9ja2V5XTogXCI2MjE2NlwiLFxuICBbSWNvbnMuSWNvbkljb25zU2hhcGVzR2FtZXNdOiBcIjYyMTY3XCIsXG4gIFtJY29ucy5JbWFjQ29tcHV0ZXJEZXZpY2VfMl06IFwiNjIxNjhcIixcbiAgW0ljb25zLkltYWdlV2FsbHBhcGVyTGFuZHNjYXBlT3NdOiBcIjYyMTY5XCIsXG4gIFtJY29ucy5JbWFnZXNfMVBob3Rvc1BpY3R1cmVzU2hvdF06IFwiNjIxNzBcIixcbiAgW0ljb25zLkltYWdlc18yUGhvdG9zUGljdHVyZXNTaG90XTogXCI2MjE3MVwiLFxuICBbSWNvbnMuSW1hZ2VzXzNQaG90b3NQaWN0dXJlc1Nob3RdOiBcIjYyMTcyXCIsXG4gIFtJY29ucy5JbWFnZXNfNFBob3Rvc1BpY3R1cmVzU2hvdF06IFwiNjIxNzNcIixcbiAgW0ljb25zLkltYWdlc181UGhvdG9zUGljdHVyZXNTaG90XTogXCI2MjE3NFwiLFxuICBbSWNvbnMuSW5ib3hfMUFyY2hpdmVUcmF5U2hlbGZdOiBcIjYyMTc1XCIsXG4gIFtJY29ucy5JbmJveF8yQXJjaGl2ZVRyYXlTaGVsZl06IFwiNjIxNzZcIixcbiAgW0ljb25zLkluZmluaXR5TG9vcEJvb21lcmFuZ106IFwiNjIxNzdcIixcbiAgW0ljb25zLkluZm9DaXJjbGVUb29sdGlwXTogXCI2MjE3OFwiLFxuICBbSWNvbnMuSW5mb1NxdWFyZV06IFwiNjIxNzlcIixcbiAgW0ljb25zLkludml0ZV8xXTogXCI2MjE4MFwiLFxuICBbSWNvbnMuSW52aXRlXTogXCI2MjE4MVwiLFxuICBbSWNvbnMuSXRhbGljXTogXCI2MjE4MlwiLFxuICBbSWNvbnMuS2V5XTogXCI2MjE4M1wiLFxuICBbSWNvbnMuS2V5Ym9hcmREb3duQ2xvc2VEb3duT3BlbkFycm93XTogXCI2MjE4NFwiLFxuICBbSWNvbnMuS2V5Ym9hcmRNaWRpS2V5c1BpYW5vXTogXCI2MjE4NVwiLFxuICBbSWNvbnMuS2V5Ym9hcmRVcF8xQ2xvc2VEb3duT3BlbkFycm93XTogXCI2MjE4NlwiLFxuICBbSWNvbnMuS2V5Ym9hcmRVcF8yQ2xvc2VEb3duT3BlbkFycm93XTogXCI2MjE4N1wiLFxuICBbSWNvbnMuTGFiXTogXCI2MjE4OFwiLFxuICBbSWNvbnMuTGF1bmNoUm9ja2V0XTogXCI2MjE4OVwiLFxuICBbSWNvbnMuTGF3TGVnYWxUZXJtc0ltcHJpbnRCYWxhbmNlXTogXCI2MjE5MFwiLFxuICBbSWNvbnMuTGF5ZXJCZWhpbmRTbGlkZXNQYWdlc106IFwiNjIxOTFcIixcbiAgW0ljb25zLkxheWVyc18yU3RhY2tdOiBcIjYyMTkyXCIsXG4gIFtJY29ucy5MYXllcnNfM1N0YWNrXTogXCI2MjE5M1wiLFxuICBbSWNvbnMuTGF5ZXJzQ29weV06IFwiNjIxOTRcIixcbiAgW0ljb25zLkxheW91dF8yUm93c0dyaWRXaW5kb3ddOiBcIjYyMTk1XCIsXG4gIFtJY29ucy5MYXlvdXRfM1Jvd3NHcmlkV2luZG93XTogXCI2MjE5NlwiLFxuICBbSWNvbnMuTGF5b3V0Qm90dG9tR3JpZFdpbmRvd106IFwiNjIxOTdcIixcbiAgW0ljb25zLkxheW91dENvbHVtbkdyaWRDb2x1bW5dOiBcIjYyMTk4XCIsXG4gIFtJY29ucy5MYXlvdXREYXNoYm9hcmRHcmlkV2luZG93XTogXCI2MjE5OVwiLFxuICBbSWNvbnMuTGF5b3V0R3JpZF8xR3JpZFdpbmRvd106IFwiNjIyMDBcIixcbiAgW0ljb25zLkxheW91dEdyaWRfMkdyaWRdOiBcIjYyMjAxXCIsXG4gIFtJY29ucy5MYXlvdXRHcmlkTGlzdFNlYXJjaEZpbmRNYWdpZmllcl06IFwiNjIyMDJcIixcbiAgW0ljb25zLkxheW91dExlZnRHcmlkV2luZG93XTogXCI2MjIwM1wiLFxuICBbSWNvbnMuTGF5b3V0UmlnaHRHcmlkV2luZG93XTogXCI2MjIwNFwiLFxuICBbSWNvbnMuTGF5b3V0U2lkZWJhckdyaWRXaW5kb3ddOiBcIjYyMjA1XCIsXG4gIFtJY29ucy5MYXlvdXRUb3BHcmlkV2luZG93XTogXCI2MjIwNlwiLFxuICBbSWNvbnMuTGF5b3V0VG9wYmFyR3JpZFdpbmRvd106IFwiNjIyMDdcIixcbiAgW0ljb25zLkxheW91dFdpbmRvd0dyaWRXaW5kb3ddOiBcIjYyMjA4XCIsXG4gIFtJY29ucy5MZWZ0R2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2tdOiBcIjYyMjA5XCIsXG4gIFtJY29ucy5MZWZ0R2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGlja106IFwiNjIyMTBcIixcbiAgW0ljb25zLkxpYnJhcnldOiBcIjYyMjExXCIsXG4gIFtJY29ucy5MaWZlVmVzdFZlc3RdOiBcIjYyMjEyXCIsXG4gIFtJY29ucy5MaWdodEJ1bGJJZGVhTGlnaHRdOiBcIjYyMjEzXCIsXG4gIFtJY29ucy5MaWdodEJ1bGJTaW1wbGVJZGVhXTogXCI2MjIxNFwiLFxuICBbSWNvbnMuTGlnaHRSYWluXTogXCI2MjIxNVwiLFxuICBbSWNvbnMuTGlnaHRuaW5nWmFwRmxhc2hdOiBcIjYyMjE2XCIsXG4gIFtJY29ucy5MaW5lQ2hhcnRfMlN0YXRpc3RpY3NHcmFwaF06IFwiNjIyMTdcIixcbiAgW0ljb25zLkxpbmVDaGFydF8zU3RhdGlzdGljc0dyYXBoXzFdOiBcIjYyMjE4XCIsXG4gIFtJY29ucy5MaW5lQ2hhcnRfM1N0YXRpc3RpY3NHcmFwaF06IFwiNjIyMTlcIixcbiAgW0ljb25zLkxpbmVDaGFydFN0YXRpc3RpY3NHcmFwaF06IFwiNjIyMjBcIixcbiAgW0ljb25zLkxpbmtfMUNoYWluXTogXCI2MjIyMVwiLFxuICBbSWNvbnMuTGlua18yQ2hhaW5dOiBcIjYyMjIyXCIsXG4gIFtJY29ucy5MaW5rXzNDaGFpbl06IFwiNjIyMjNcIixcbiAgW0ljb25zLkxpbmtEb2N1bWVudExpc3RQYWdlRmlsZV06IFwiNjIyMjRcIixcbiAgW0ljb25zLkxpbmtMaW5lc0RvY3VtZW50TGlzdFBhZ2VGaWxlXTogXCI2MjIyNVwiLFxuICBbSWNvbnMuTGlzdFNlYXJjaEZpbmRNYWdpZmllcl06IFwiNjIyMjZcIixcbiAgW0ljb25zLkxpdmVTaWduYWxdOiBcIjYyMjI3XCIsXG4gIFtJY29ucy5Mb2FkZXJdOiBcIjYyMjI4XCIsXG4gIFtJY29ucy5Mb2NhdGlvbkV4cGxvcmVDb21wYXNzXTogXCI2MjIyOVwiLFxuICBbSWNvbnMuTG9jYXRpb25NYXBSb3V0ZV06IFwiNjIyMzBcIixcbiAgW0ljb25zLkxvY2tQcml2YXRlXTogXCI2MjIzMVwiLFxuICBbSWNvbnMuTG9naW5FbnRlckRvb3JdOiBcIjYyMjMyXCIsXG4gIFtJY29ucy5Mb2dvdXRMZWF2ZURvb3JdOiBcIjYyMjMzXCIsXG4gIFtJY29ucy5NYWNib29rTGFwdG9wQ29tcHV0ZXJEZXZpY2VdOiBcIjYyMjM0XCIsXG4gIFtJY29ucy5NYWNpbnRob3NoTWFjXTogXCI2MjIzNVwiLFxuICBbSWNvbnMuTWFnaWNCb29rTWFnaWNpYW5dOiBcIjYyMjM2XCIsXG4gIFtJY29ucy5NYWdpY0JveF06IFwiNjIyMzdcIixcbiAgW0ljb25zLk1hZ2ljRXllc106IFwiNjIyMzhcIixcbiAgW0ljb25zLk1hZ2ljSGFuZHNNYWdpY1JhaW5ib3ddOiBcIjYyMjM5XCIsXG4gIFtJY29ucy5NYWdpY0hhdF06IFwiNjIyNDBcIixcbiAgW0ljb25zLk1hZ2ljUGVuY2lsTWFnaWNCcnVzaF06IFwiNjIyNDFcIixcbiAgW0ljb25zLk1hZ2ljU3RpY2tTdGFyXTogXCI2MjI0MlwiLFxuICBbSWNvbnMuTWFnaWNTdGlja1RvcF06IFwiNjIyNDNcIixcbiAgW0ljb25zLk1hZ2ljU3RpY2tdOiBcIjYyMjQ0XCIsXG4gIFtJY29ucy5NYXBQYXBlcl06IFwiNjIyNDVcIixcbiAgW0ljb25zLk1hcmtkb3duXTogXCI2MjI0NlwiLFxuICBbSWNvbnMuTWVkYWxUcm9waHlCYWRnZVdpbm5lcldpbl06IFwiNjIyNDdcIixcbiAgW0ljb25zLk1lZ2FwaG9uZUxvdWRTcGVha1Byb21vdGVdOiBcIjYyMjQ4XCIsXG4gIFtJY29ucy5NZW1vcnlfMVNpbUNhcmRDYXJkXTogXCI2MjI0OVwiLFxuICBbSWNvbnMuTWVtb3J5XzJTaW1DYXJkU2RDYXJkXTogXCI2MjI1MFwiLFxuICBbSWNvbnMuTWVudV8xR3JpZENpcmNsZV06IFwiNjIyNTFcIixcbiAgW0ljb25zLk1lbnVfMUxpc3RIYW1idXJnZXJdOiBcIjYyMjUyXCIsXG4gIFtJY29ucy5NZW51XzJHcmlkQ2lyY2xlXTogXCI2MjI1M1wiLFxuICBbSWNvbnMuTWVudV8yTGlzdEhhbWJ1cmdlcl06IFwiNjIyNTRcIixcbiAgW0ljb25zLk1lbnVfM0xpc3RIYW1idXJnZXJdOiBcIjYyMjU1XCIsXG4gIFtJY29ucy5NZW51U2ltcGxlTmF2U2ltcGxlXTogXCI2MjI1NlwiLFxuICBbSWNvbnMuTWljcm9waG9uZU1pY1NvdW5kUG9kY2FzdF8xXTogXCI2MjI1N1wiLFxuICBbSWNvbnMuTWljcm9waG9uZU1pY1NvdW5kUG9kY2FzdF06IFwiNjIyNThcIixcbiAgW0ljb25zLk1pbmltaXplQXJyb3dTaHJpbmtdOiBcIjYyMjU5XCIsXG4gIFtJY29ucy5NaW5pbWl6ZVdpbmRvd0xheW91dF06IFwiNjIyNjBcIixcbiAgW0ljb25zLk1pbnVzQ2lyY2xlUmVtb3ZlXTogXCI2MjI2MVwiLFxuICBbSWNvbnMuTWludXNMYXJnZV06IFwiNjIyNjJcIixcbiAgW0ljb25zLk1pbnVzU21hbGxdOiBcIjYyMjYzXCIsXG4gIFtJY29ucy5NaW51c1NxdWFyZVJlbW92ZURlbGV0ZV06IFwiNjIyNjRcIixcbiAgW0ljb25zLk1vbmV5QmlsbERvbGxhckV1cm9dOiBcIjYyMjY1XCIsXG4gIFtJY29ucy5Nb25leUhhbmRDb2luc106IFwiNjIyNjZcIixcbiAgW0ljb25zLk1vb25EYXJrTW9kZU5pZ2h0XTogXCI2MjI2N1wiLFxuICBbSWNvbnMuTW9vblN0YXJOaWdodF06IFwiNjIyNjhcIixcbiAgW0ljb25zLk1vdXNlXzFdOiBcIjYyMjY5XCIsXG4gIFtJY29ucy5Nb3VzZV8yU2Nyb2xsRG93bl06IFwiNjIyNzBcIixcbiAgW0ljb25zLk1vdXNlXzNTY3JvbGxVcF06IFwiNjIyNzFcIixcbiAgW0ljb25zLk1vdmVGb2N1c106IFwiNjIyNzJcIixcbiAgW0ljb25zLk1vdmVdOiBcIjYyMjczXCIsXG4gIFtJY29ucy5NdWx0aU1lZGlhTWVkaWFJbWFnZUFuZFZpZGVvXTogXCI2MjI3NFwiLFxuICBbSWNvbnMuTXV0ZVNvdW5kT2ZmXTogXCI2MjI3NVwiLFxuICBbSWNvbnMuTmV3c1BhcGVyXTogXCI2MjI3NlwiLFxuICBbSWNvbnMuTmV3c3BhcGVyTmV3c1BhcGVyXTogXCI2MjI3N1wiLFxuICBbSWNvbnMuTmZjXzJdOiBcIjYyMjc4XCIsXG4gIFtJY29ucy5OZmNdOiBcIjYyMjc5XCIsXG4gIFtJY29ucy5Ob0ZsYXNoXTogXCI2MjI4MFwiLFxuICBbSWNvbnMuTm90ZUNhcmRUZXh0XTogXCI2MjI4MVwiLFxuICBbSWNvbnMuTm90ZVN0aWNrZXJdOiBcIjYyMjgyXCIsXG4gIFtJY29ucy5Ob3Rlc106IFwiNjIyODNcIixcbiAgW0ljb25zLk5vdGlmaWNhdGlvbkFsYXJtQmVsbEFjdGl2aXR5QWxlcnRdOiBcIjYyMjg0XCIsXG4gIFtJY29ucy5Ob3RpZmljYXRpb25CZWxsQWN0aXZpdHldOiBcIjYyMjg1XCIsXG4gIFtJY29ucy5Ob3RpZmljYXRpb25PZmZCZWxsQWN0aXZpdHldOiBcIjYyMjg2XCIsXG4gIFtJY29ucy5Ob3RpZmljYXRpb25zQmFkZ2VdOiBcIjYyMjg3XCIsXG4gIFtJY29ucy5OdW1iZXJlZExpc3RdOiBcIjYyMjg4XCIsXG4gIFtJY29ucy5PY3VsdXNdOiBcIjYyMjg5XCIsXG4gIFtJY29ucy5PcGVuXzJOZXdMaW5rT3BlbkxpbmtCb3hBcnJvd106IFwiNjIyOTBcIixcbiAgW0ljb25zLk9wZW5OZXdMaW5rT3BlbkxpbmtCb3hBcnJvd106IFwiNjIyOTFcIixcbiAgW0ljb25zLk9wZW5RdW90ZUJsb2NrcXVvdGVdOiBcIjYyMjkyXCIsXG4gIFtJY29ucy5PcHRBbHRPcHRpb25BbHRLZXldOiBcIjYyMjkzXCIsXG4gIFtJY29ucy5PcHRPcHRpb25LZXldOiBcIjYyMjk0XCIsXG4gIFtJY29ucy5PcmFuZ2VdOiBcIjYyMjk1XCIsXG4gIFtJY29ucy5QYWNrYWdlRGVsaXZlcnlfMl06IFwiNjIyOTZcIixcbiAgW0ljb25zLlBhY2thZ2VEZWxpdmVyeV06IFwiNjIyOTdcIixcbiAgW0ljb25zLlBhZ2VzQm9hcmRzXTogXCI2MjI5OFwiLFxuICBbSWNvbnMuUGFub3JhbWFWaWV3XTogXCI2MjI5OVwiLFxuICBbSWNvbnMuUGFwZXJQbGFuZVNlbmRdOiBcIjYyMzAwXCIsXG4gIFtJY29ucy5QYXNza2V5c1Bhc3NrZXlQYXNzd29yZGxlc3NdOiBcIjYyMzAxXCIsXG4gIFtJY29ucy5QYXNzcG9ydFZpc2FdOiBcIjYyMzAyXCIsXG4gIFtJY29ucy5QYXNzd29yZExvY2tQcm90ZWN0aW9uXTogXCI2MjMwM1wiLFxuICBbSWNvbnMuUGF1c2VdOiBcIjYyMzA0XCIsXG4gIFtJY29ucy5QZW5jaWxfMlBlblRvb2xXcml0ZV06IFwiNjIzMDVcIixcbiAgW0ljb25zLlBlbmNpbFBlblRvb2xXcml0ZV06IFwiNjIzMDZcIixcbiAgW0ljb25zLlBlb3BsZUJlaGluZFVzZXJBdmF0YXJHcm91cF8zXTogXCI2MjMwN1wiLFxuICBbSWNvbnMuUGVvcGxlQ2lyY2xlVXNlclBlcnNvbkF2YXRhcl8yXTogXCI2MjMwOFwiLFxuICBbSWNvbnMuUGVvcGxlQ29weU1lbWJlcnNdOiBcIjYyMzA5XCIsXG4gIFtJY29ucy5QZW9wbGVMaWtlTG92ZUhlYXJ0XTogXCI2MjMxMFwiLFxuICBbSWNvbnMuUGVvcGxlU2hhZG93VXNlckF2YXRhckdyb3VwXzFdOiBcIjYyMzExXCIsXG4gIFtJY29ucy5QZW9wbGVTaGFkb3dVc2VyQXZhdGFyR3JvdXBdOiBcIjYyMzEyXCIsXG4gIFtJY29ucy5QZW9wbGVUb2dldGhlclVzZXJBdmF0YXJHcm91cF8yXTogXCI2MjMxM1wiLFxuICBbSWNvbnMuUGVvcGxlVXNlclBlcnNvbkF2YXRhcl06IFwiNjIzMTRcIixcbiAgW0ljb25zLlBlcmNlbnRTYWxlc18xXTogXCI2MjMxNVwiLFxuICBbSWNvbnMuUGVyY2VudFNhbGVzXTogXCI2MjMxNlwiLFxuICBbSWNvbnMuUGVyZm9ybWFuY2VTcGVlZFNjYWxlXTogXCI2MjMxN1wiLFxuICBbSWNvbnMuUGhvbmVEZXZpY2VJcGhvbmVNb2JpbGVdOiBcIjYyMzE4XCIsXG4gIFtJY29ucy5QaG9uZUR5bmFtaWNJc2xhbmRdOiBcIjYyMzE5XCIsXG4gIFtJY29ucy5QaWN0dXJlSW5QaWN0dXJlXTogXCI2MjMyMFwiLFxuICBbSWNvbnMuUGllQ2hhcnRfMUdyYXBoQ2hhcnRTdGF0aXN0aWNzXTogXCI2MjMyMVwiLFxuICBbSWNvbnMuUGllQ2hhcnRfMkdyYXBoQ2hhcnRTdGF0aXN0aWNzXTogXCI2MjMyMlwiLFxuICBbSWNvbnMuUGlnZ3lCYW5rU2F2ZU1vbmV5XTogXCI2MjMyM1wiLFxuICBbSWNvbnMuUGluQ2lyY2xlTG9jYXRpb25dOiBcIjYyMzI0XCIsXG4gIFtJY29ucy5QaW5GbGFnTG9jYXRpb25dOiBcIjYyMzI1XCIsXG4gIFtJY29ucy5QaW5Mb2NhdGlvbl8xXTogXCI2MjMyNlwiLFxuICBbSWNvbnMuUGluTG9jYXRpb25Cb29rbWFya106IFwiNjIzMjdcIixcbiAgW0ljb25zLlBpbkxvY2F0aW9uXTogXCI2MjMyOFwiLFxuICBbSWNvbnMuUGluY2hdOiBcIjYyMzI5XCIsXG4gIFtJY29ucy5QaXp6YV06IFwiNjIzMzBcIixcbiAgW0ljb25zLlBsYWNlaG9sZGVyR2VuZXJhdGVdOiBcIjYyMzMxXCIsXG4gIFtJY29ucy5QbGF5Q2lyY2xlXTogXCI2MjMzMlwiLFxuICBbSWNvbnMuUGxheUdvXTogXCI2MjMzM1wiLFxuICBbSWNvbnMuUGxheUxpc3RdOiBcIjYyMzM0XCIsXG4gIFtJY29ucy5QbHVzQWRkRG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYyMzM1XCIsXG4gIFtJY29ucy5QbHVzQWRkTGFyZ2VdOiBcIjYyMzM2XCIsXG4gIFtJY29ucy5QbHVzQWRkU21hbGxdOiBcIjYyMzM3XCIsXG4gIFtJY29ucy5QbHVzQ2lyY2xlQWRkXTogXCI2MjMzOFwiLFxuICBbSWNvbnMuUGx1c0xpbmVzQWRkRG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYyMzM5XCIsXG4gIFtJY29ucy5QbHVzU3F1YXJlQWRkXTogXCI2MjM0MFwiLFxuICBbSWNvbnMuUG9pbnRlckhhbmRdOiBcIjYyMzQxXCIsXG4gIFtJY29ucy5Qb29wU3BhbV06IFwiNjIzNDJcIixcbiAgW0ljb25zLlBvcHNpY2xlQkljZUNyZWFtU3dlZXRzXTogXCI2MjM0M1wiLFxuICBbSWNvbnMuUG9wc2ljbGVJY2VDcmVhbVN3ZWV0c106IFwiNjIzNDRcIixcbiAgW0ljb25zLlBvc3RjYXJkQ2FyZE5ld3NdOiBcIjYyMzQ1XCIsXG4gIFtJY29ucy5Qb3N0c05vdGVib29rU2tldGNoYm9va106IFwiNjIzNDZcIixcbiAgW0ljb25zLlBvdW5kQ3VycmVuY3lNb25leUNvaW5HYnBdOiBcIjYyMzQ3XCIsXG4gIFtJY29ucy5QcmludGVyUHJpbnRdOiBcIjYyMzQ4XCIsXG4gIFtJY29ucy5Qcm9jZXNzb3JDaGlwXTogXCI2MjM0OVwiLFxuICBbSWNvbnMuUHVsbFJlcXVlc3RdOiBcIjYyMzUwXCIsXG4gIFtJY29ucy5RbTNSb29tVHJhbnNmb3JtWHl6XzNkXTogXCI2MjM1MVwiLFxuICBbSWNvbnMuUXJDb2RlXTogXCI2MjM1MlwiLFxuICBbSWNvbnMuUXVlc3Rpb25tYXJrRmFxSGVscFF1ZXN0aW9uYWlyZV06IFwiNjIzNTNcIixcbiAgW0ljb25zLlJhZGFyTG9jYXRpb25TZWFyY2hdOiBcIjYyMzU0XCIsXG4gIFtJY29ucy5SYWluYm93XTogXCI2MjM1NVwiLFxuICBbSWNvbnMuUmFpbnlSYWluXTogXCI2MjM1NlwiLFxuICBbSWNvbnMuUmFpc2luZ0hhbmRfNEZpbmdlckhleUhlbGxvXTogXCI2MjM1N1wiLFxuICBbSWNvbnMuUmFpc2luZ0hhbmRfNUZpbmdlckhleUhlbGxvXTogXCI2MjM1OFwiLFxuICBbSWNvbnMuUmVhZGluZ0xpc3RHbGFzc2VzU3RldmVKb2JzXTogXCI2MjM1OVwiLFxuICBbSWNvbnMuUmVhckZyb250Q2FtZXJhQ2FtQ2hhbmdlTGVuc106IFwiNjIzNjBcIixcbiAgW0ljb25zLlJlY2VpcHRUaWNrZXRdOiBcIjYyMzYxXCIsXG4gIFtJY29ucy5SZWNvcmRWb2ljZW1haWxCYW5kVGFwZV06IFwiNjIzNjJcIixcbiAgW0ljb25zLlJlY29yZF06IFwiNjIzNjNcIixcbiAgW0ljb25zLlJlZG9Gb3J3YXJkXzFdOiBcIjYyMzY0XCIsXG4gIFtJY29ucy5SZWRvRm9yd2FyZF06IFwiNjIzNjVcIixcbiAgW0ljb25zLlJlZnJlc2hSZW5ld106IFwiNjIzNjZcIixcbiAgW0ljb25zLlJlbW92ZUNvbHVtbkRlbGV0ZUNvbHVtbl06IFwiNjIzNjdcIixcbiAgW0ljb25zLlJlbW92ZVBlb3BsZVJlbW92ZVVzZXJSZW1vdmVQZXJzb25fMl06IFwiNjIzNjhcIixcbiAgW0ljb25zLlJlbW92ZVBlb3BsZVJlbW92ZVVzZXJSZW1vdmVQZXJzb25dOiBcIjYyMzY5XCIsXG4gIFtJY29ucy5SZW1vdmVSb3dEZWxldGVSb3ddOiBcIjYyMzcwXCIsXG4gIFtJY29ucy5SZXBlYXRfMlJldHdlZXRdOiBcIjYyMzcxXCIsXG4gIFtJY29ucy5SZXBlYXRSZXR3ZWV0XTogXCI2MjM3MlwiLFxuICBbSWNvbnMuUmVwZWF0XTogXCI2MjM3M1wiLFxuICBbSWNvbnMuUmVzY3VlUmluZ1N3aW1Cb3lsZUhlbHBTdXBwb3J0XTogXCI2MjM3NFwiLFxuICBbSWNvbnMuUmVzaXplQmlnQm94QXJyb3ddOiBcIjYyMzc1XCIsXG4gIFtJY29ucy5SZXNpemVTbWFsbEJveEFycm93XTogXCI2MjM3NlwiLFxuICBbSWNvbnMuUmV3aW5kXzEwc106IFwiNjIzNzdcIixcbiAgW0ljb25zLlJld2luZF8xNXNdOiBcIjYyMzc4XCIsXG4gIFtJY29ucy5SZXdpbmRfMzBzXTogXCI2MjM3OVwiLFxuICBbSWNvbnMuUmV3aW5kXzVzXTogXCI2MjM4MFwiLFxuICBbSWNvbnMuUmV3aW5kU3ltYm9sXTogXCI2MjM4MVwiLFxuICBbSWNvbnMuUmlnaHRHYW1lcGFkQmFzZUNvbnRyb2xsc0dhbWVKb3lzdGlja106IFwiNjIzODJcIixcbiAgW0ljb25zLlJpZ2h0R2FtZXBhZEJhc2VSb3VuZENvbnRyb2xsc0dhbWVKb3lzdGlja106IFwiNjIzODNcIixcbiAgW0ljb25zLlJvY2tldFN0YXJ0dXBMYXVuY2hdOiBcIjYyMzg0XCIsXG4gIFtJY29ucy5Sb3RhdGVfMDJSZXBlYXRSZWZyZXNoXTogXCI2MjM4NVwiLFxuICBbSWNvbnMuUm90YXRlQ2xvY2t3aXNlUm90YXRlXTogXCI2MjM4NlwiLFxuICBbSWNvbnMuUm90YXRlQ291bnRlcmNsb2Nrd2lzZVJvdGF0ZV06IFwiNjIzODdcIixcbiAgW0ljb25zLlJvdGF0ZVJlcGVhdFJlZnJlc2hdOiBcIjYyMzg4XCIsXG4gIFtJY29ucy5Sb3RhdGVSb3RhdGlvblhBeGlzXTogXCI2MjM4OVwiLFxuICBbSWNvbnMuUm93c1dpZGVSb3dzV2lkZV06IFwiNjIzOTBcIixcbiAgW0ljb25zLlJ1bGVyXTogXCI2MjM5MVwiLFxuICBbSWNvbnMuUnVsZXNEaXJlY3Rpb25TcGxpdF06IFwiNjIzOTJcIixcbiAgW0ljb25zLlNhZEVtb2ppVW5oYXBweV06IFwiNjIzOTNcIixcbiAgW0ljb25zLlNhbmRib3hTYWZlXTogXCI2MjM5NFwiLFxuICBbSWNvbnMuU2NhbkZvY3VzXzFdOiBcIjYyMzk1XCIsXG4gIFtJY29ucy5TY2FuRm9jdXNdOiBcIjYyMzk2XCIsXG4gIFtJY29ucy5TY2hvb2xCaWdCdWlsZGluZ106IFwiNjIzOTdcIixcbiAgW0ljb25zLlNjaXNzb3JzXzJDdXRdOiBcIjYyMzk4XCIsXG4gIFtJY29ucy5TY2lzc29yc0N1dF06IFwiNjIzOTlcIixcbiAgW0ljb25zLlNkQ2FyZE1lbW9yeVN0aWNrXTogXCI2MjQwMFwiLFxuICBbSWNvbnMuU2VhcmNoXzJNYWduaWZ5aW5nR2xhc3NdOiBcIjYyNDAxXCIsXG4gIFtJY29ucy5TZWFyY2hMaW5lc01hZ25pZmllckRvY3VtZW50TGlzdFBhZ2VGaWxlXTogXCI2MjQwMlwiLFxuICBbSWNvbnMuU2VhcmNoTWFnbmlmaWVyRG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYyNDAzXCIsXG4gIFtJY29ucy5TZWFyY2hNYWduaWZ5aW5nR2xhc3NdOiBcIjYyNDA0XCIsXG4gIFtJY29ucy5TZWFyY2hNZW51XTogXCI2MjQwNVwiLFxuICBbSWNvbnMuU2VhcmNoUGFnZUZpbmRdOiBcIjYyNDA2XCIsXG4gIFtJY29ucy5TZWN1cmVkTGluZXNMb2NrZWRTZWN1cml0eURvY3VtZW50TGlzdFBhZ2VGaWxlXTogXCI2MjQwN1wiLFxuICBbSWNvbnMuU2VjdXJlZExvY2tlZFNlY3VyaXR5RG9jdW1lbnRMaXN0UGFnZUZpbGVdOiBcIjYyNDA4XCIsXG4gIFtJY29ucy5TZW5kRW1haWxQYXBlclBsYW5lQXJyb3ddOiBcIjYyNDA5XCIsXG4gIFtJY29ucy5TZXJ2ZXJfMVN0b3JhZ2VEYXRhQ29pbnNNb25leV06IFwiNjI0MTBcIixcbiAgW0ljb25zLlNlcnZlcl8yU3RvcmFnZURhdGFDb2luc01vbmV5XTogXCI2MjQxMVwiLFxuICBbSWNvbnMuU2VydmVyRGF0YVN0b3JhZ2VdOiBcIjYyNDEyXCIsXG4gIFtJY29ucy5TZXR0aW5nc18xU3dpdGNoUHJlZmVyZW5jZXNdOiBcIjYyNDEzXCIsXG4gIFtJY29ucy5TZXR0aW5nc18yR2VhclByZWZlcmVuY2VzXTogXCI2MjQxNFwiLFxuICBbSWNvbnMuU2V0dGluZ3NfM0dlYXJQcmVmZXJlbmNlc18xXTogXCI2MjQxNVwiLFxuICBbSWNvbnMuU2V0dGluZ3NfM0dlYXJQcmVmZXJlbmNlc106IFwiNjI0MTZcIixcbiAgW0ljb25zLlNldHRpbmdzXzZTbGlkZXJUaHJlZV06IFwiNjI0MTdcIixcbiAgW0ljb25zLlNldHRpbmdzXzdLbm9iVm9sdW1lT25PZmZdOiBcIjYyNDE4XCIsXG4gIFtJY29ucy5TZXR0aW5nc184U3dpdGNoXzJdOiBcIjYyNDE5XCIsXG4gIFtJY29ucy5TZXR0aW5nc1NsaWRlckhvcl06IFwiNjI0MjBcIixcbiAgW0ljb25zLlNldHRpbmdzU2xpZGVyVmVyU2xpZGVyVHdvXTogXCI2MjQyMVwiLFxuICBbSWNvbnMuU2hha2FfMkNhbGxNZUhhbmdUZW5dOiBcIjYyNDIyXCIsXG4gIFtJY29ucy5TaGFrYUNhbGxNZUhhbmdUZW5dOiBcIjYyNDIzXCIsXG4gIFtJY29ucy5TaGFyZV8yQXJyb3ddOiBcIjYyNDI0XCIsXG4gIFtJY29ucy5TaGFyZUFycm93TG9naW5dOiBcIjYyNDI1XCIsXG4gIFtJY29ucy5TaGFyZUFycm93XTogXCI2MjQyNlwiLFxuICBbSWNvbnMuU2hhcmVTY3JlZW5TY3JlZW5TaGFyaW5nXTogXCI2MjQyN1wiLFxuICBbSWNvbnMuU2hpZWxkXzJDaGVja106IFwiNjI0MjhcIixcbiAgW0ljb25zLlNoaWVsZEJyZWFrTm90U2VjdXJlXTogXCI2MjQyOVwiLFxuICBbSWNvbnMuU2hpZWxkQ2hlY2tTZWN1cml0eVByb3RlY3Rpb25dOiBcIjYyNDMwXCIsXG4gIFtJY29ucy5TaGllbGRDcm9zc2VkU2VjdXJpdHlQcm90ZWN0aW9uXTogXCI2MjQzMVwiLFxuICBbSWNvbnMuU2hpZWxkUHJvdGVjdFNlY3VyaXR5Q2hlY2tdOiBcIjYyNDMyXCIsXG4gIFtJY29ucy5TaGllbGRTZWN1cml0eVByb3RlY3Rpb25dOiBcIjYyNDMzXCIsXG4gIFtJY29ucy5TaGlmdF06IFwiNjI0MzRcIixcbiAgW0ljb25zLlNoaXBDaGFuZ2Vsb2ddOiBcIjYyNDM1XCIsXG4gIFtJY29ucy5TaG93RXllU2VlUmV2ZWFsTG9va1Zpc2libGVdOiBcIjYyNDM2XCIsXG4gIFtJY29ucy5TaHJlZGRlclBlcm1hbmVudGx5XTogXCI2MjQzN1wiLFxuICBbSWNvbnMuU2h1ZmZsZVJhbmRvbV06IFwiNjI0MzhcIixcbiAgW0ljb25zLlNpZGViYXJNZW51TGlzdFdpbmRvd106IFwiNjI0MzlcIixcbiAgW0ljb25zLlNpZ25EaXJlY3Rpb25Sb3V0ZV06IFwiNjI0NDBcIixcbiAgW0ljb25zLlNpZ25hdHVyZVBlbmNpbFBlbmNpbFBlbldyaXRlRHJhd106IFwiNjI0NDFcIixcbiAgW0ljb25zLlNpZ25hdHVyZVNpZ25dOiBcIjYyNDQyXCIsXG4gIFtJY29ucy5TbGlkZXNQYWdlc106IFwiNjI0NDNcIixcbiAgW0ljb25zLlNtaWxlRW1vamldOiBcIjYyNDQ0XCIsXG4gIFtJY29ucy5TbWlsZXlGYWNlRW1vamlTbWlsZV06IFwiNjI0NDVcIixcbiAgW0ljb25zLlNtaWxpbmdGYWNlSGVhcnRFeWVzXTogXCI2MjQ0NlwiLFxuICBbSWNvbnMuU25vd0Nsb3VkXTogXCI2MjQ0N1wiLFxuICBbSWNvbnMuU25vd0ZsYWtlc0ZyZWV6ZUZyb3plbl06IFwiNjI0NDhcIixcbiAgW0ljb25zLlNvY2NlckZvb3RiYWxsTWxzXTogXCI2MjQ0OVwiLFxuICBbSWNvbnMuU29ydF8xU3dpdGNoSG9yaXpvbnRhbF06IFwiNjI0NTBcIixcbiAgW0ljb25zLlNvcnRfMVN3aXRjaFZlcnRpY2FsXTogXCI2MjQ1MVwiLFxuICBbSWNvbnMuU29ydF8yU3dpdGNoSG9yaXpvbmF0bF06IFwiNjI0NTJcIixcbiAgW0ljb25zLlNvcnRfMlN3aXRjaFZlcnRpY2FsXTogXCI2MjQ1M1wiLFxuICBbSWNvbnMuU3BhY2VTdGFyXTogXCI2MjQ1NFwiLFxuICBbSWNvbnMuU3BhdGlhbFNwYXRpYWxDYXB0dXJlXTogXCI2MjQ1NVwiLFxuICBbSWNvbnMuU3BlYWtlck11c2ljU291bmRdOiBcIjYyNDU2XCIsXG4gIFtJY29ucy5TcXVhcmVQbGFjZWhvbGRlcl06IFwiNjI0NTdcIixcbiAgW0ljb25zLlN0YXBsZU5vdGVib29rQ292ZXJdOiBcIjYyNDU4XCIsXG4gIFtJY29ucy5TdGFyXzJNYWdpY1NwYXJrbGVdOiBcIjYyNDU5XCIsXG4gIFtJY29ucy5TdGFyQWlTcGFya2xlXTogXCI2MjQ2MFwiLFxuICBbSWNvbnMuU3RhckZhdm9yaXRlQXdhcmRdOiBcIjYyNDYxXCIsXG4gIFtJY29ucy5TdG9ja3NdOiBcIjYyNDYyXCIsXG4gIFtJY29ucy5TdG9wXTogXCI2MjQ2M1wiLFxuICBbSWNvbnMuU3RvcHBDaXJjbGVdOiBcIjYyNDY0XCIsXG4gIFtJY29ucy5TdG9wd2F0Y2hUcmFja106IFwiNjI0NjVcIixcbiAgW0ljb25zLlN0b3JhZ2VIZGRTc2RdOiBcIjYyNDY2XCIsXG4gIFtJY29ucy5TdG9yZVNob3BCdXNpbmVzc18xXTogXCI2MjQ2N1wiLFxuICBbSWNvbnMuU3RvcmVTaG9wQnVzaW5lc3NdOiBcIjYyNDY4XCIsXG4gIFtJY29ucy5TdHJlYW1pbmdMaXZlU3RyZWFtXTogXCI2MjQ2OVwiLFxuICBbSWNvbnMuU3RyaWtlVGhyb3VnaF06IFwiNjI0NzBcIixcbiAgW0ljb25zLlN0dWRpb0Rpc3BsYXlUaHVuZGVyYm9sdF06IFwiNjI0NzFcIixcbiAgW0ljb25zLlN1aXRjYXNlTHVnZ2FnZUNhc2VdOiBcIjYyNDcyXCIsXG4gIFtJY29ucy5TdW5Eb3duXTogXCI2MjQ3M1wiLFxuICBbSWNvbnMuU3VuTGlnaHRNb2RlRGF5XTogXCI2MjQ3NFwiLFxuICBbSWNvbnMuU3VuVXBdOiBcIjYyNDc1XCIsXG4gIFtJY29ucy5TdW5yaXNlXTogXCI2MjQ3NlwiLFxuICBbSWNvbnMuU3Vuc2V0XTogXCI2MjQ3N1wiLFxuICBbSWNvbnMuU3VwcG9ydF06IFwiNjI0NzhcIixcbiAgW0ljb25zLlN1cnByaXNlQnVubnlIYXRNYWdpY0hhdF06IFwiNjI0NzlcIixcbiAgW0ljb25zLlN5bmNDbG91ZFN5bmNdOiBcIjYyNDgwXCIsXG4gIFtJY29ucy5UYWJsZVNwcmVlZHNoZWV0Q2hhcnRdOiBcIjYyNDgxXCIsXG4gIFtJY29ucy5UYWdTYWxlXTogXCI2MjQ4MlwiLFxuICBbSWNvbnMuVGFwZV06IFwiNjI0ODNcIixcbiAgW0ljb25zLlRhcmdldF8xWm9vbV06IFwiNjI0ODRcIixcbiAgW0ljb25zLlRhcmdldF8yWm9vbV06IFwiNjI0ODVcIixcbiAgW0ljb25zLlRhcmdldEFycm93R29hbEFpbV06IFwiNjI0ODZcIixcbiAgW0ljb25zLlRheERpc2NvdW50XTogXCI2MjQ4N1wiLFxuICBbSWNvbnMuVGVsZXBob25lUGhvbmVDb250YWN0XTogXCI2MjQ4OFwiLFxuICBbSWNvbnMuVGVsZXZpc2lvbl8xVHZNb25pdG9yVmlkZW9TY3JlZW5EaXNwbGF5XTogXCI2MjQ4OVwiLFxuICBbSWNvbnMuVGVsZXZpc2lvbl8yVHZNb25pdG9yVmlkZW9TY3JlZW5EaXNwbGF5XTogXCI2MjQ5MFwiLFxuICBbSWNvbnMuVGVubmlzXTogXCI2MjQ5MVwiLFxuICBbSWNvbnMuVGVzdFR1YmVdOiBcIjYyNDkyXCIsXG4gIFtJY29ucy5UZXh0XzJUXzJdOiBcIjYyNDkzXCIsXG4gIFtJY29ucy5UZXh0SW5kZW50TGVmdF06IFwiNjI0OTRcIixcbiAgW0ljb25zLlRleHRJbmRlbnRSaWdodF06IFwiNjI0OTVcIixcbiAgW0ljb25zLlRleHRJbmRpY2F0b3JdOiBcIjYyNDk2XCIsXG4gIFtJY29ucy5UZXh0U2l6ZV06IFwiNjI0OTdcIixcbiAgW0ljb25zLlRleHRUXTogXCI2MjQ5OFwiLFxuICBbSWNvbnMuVGh1bWJzRG93blRodW1iSGFuZE5vQ29udHJhXTogXCI2MjQ5OVwiLFxuICBbSWNvbnMuVGh1bWJzVXBUaHVtYkhhbmRZZXNQcm9dOiBcIjYyNTAwXCIsXG4gIFtJY29ucy5UaWNrZXRBZG1pdFZpcF06IFwiNjI1MDFcIixcbiAgW0ljb25zLlRpdGxlQ2FzZV06IFwiNjI1MDJcIixcbiAgW0ljb25zLlRvYXN0QnJlYWtmZXN0XTogXCI2MjUwM1wiLFxuICBbSWNvbnMuVG9pbGV0UGFwZXJXaXBlXTogXCI2MjUwNFwiLFxuICBbSWNvbnMuVG9vbGJveF06IFwiNjI1MDVcIixcbiAgW0ljb25zLlRyYWRlVHJhZGluZ106IFwiNjI1MDZcIixcbiAgW0ljb25zLlRyYW5zY3JpcHRpb25dOiBcIjYyNTA3XCIsXG4gIFtJY29ucy5UcmVlXTogXCI2MjUwOFwiLFxuICBbSWNvbnMuVHJlbmRpbmdfMVRyZW5kc106IFwiNjI1MDlcIixcbiAgW0ljb25zLlRyZW5kaW5nXzJUcmVuZHNdOiBcIjYyNTEwXCIsXG4gIFtJY29ucy5UcmVuZGluZ18zVHJlbmRzXTogXCI2MjUxMVwiLFxuICBbSWNvbnMuVHJlbmRpbmdfNENoYXJ0QW5hbHl0aWNzXTogXCI2MjUxMlwiLFxuICBbSWNvbnMuVHJlbmRpbmdfNENoYXJ0XTogXCI2MjUxM1wiLFxuICBbSWNvbnMuVHJvcGh5V2luQ2hhbXBpb25dOiBcIjYyNTE0XCIsXG4gIFtJY29ucy5UcnVja0RlbGl2ZXJ5XTogXCI2MjUxNVwiLFxuICBbSWNvbnMuVHdvRGljZUdhbWVSYW5kb21dOiBcIjYyNTE2XCIsXG4gIFtJY29ucy5VZm9CZWFtXTogXCI2MjUxN1wiLFxuICBbSWNvbnMuVW1icmVsbGFTZWN1cml0eV06IFwiNjI1MThcIixcbiAgW0ljb25zLlVuZGVybGluZV06IFwiNjI1MTlcIixcbiAgW0ljb25zLlVuZG9CYWNrQm90dG9tXTogXCI2MjUyMFwiLFxuICBbSWNvbnMuVW5kb0JhY2tUb3BdOiBcIjYyNTIxXCIsXG4gIFtJY29ucy5VbmRvY2tCb3hBcnJvd106IFwiNjI1MjJcIixcbiAgW0ljb25zLlVubG9ja2VkVW5sb2NrUHJpdmF0ZV06IFwiNjI1MjNcIixcbiAgW0ljb25zLlVwR2FtZXBhZEJhc2VDb250cm9sbHNHYW1lSm95c3RpY2tdOiBcIjYyNTI0XCIsXG4gIFtJY29ucy5VcEdhbWVwYWRCYXNlUm91bmRDb250cm9sbHNHYW1lSm95c3RpY2tdOiBcIjYyNTI1XCIsXG4gIFtJY29ucy5VcGxvYWRTaGFyZV06IFwiNjI1MjZcIixcbiAgW0ljb25zLlVzYkNvbm5lY3Rpb25Db25uZWN0U2F2ZURhdGFdOiBcIjYyNTI3XCIsXG4gIFtJY29ucy5WaWRlb0NhbWVyYV8yXTogXCI2MjUyOFwiLFxuICBbSWNvbnMuVmlkZW9DYW1lcmFNb3ZpZVBsYXldOiBcIjYyNTI5XCIsXG4gIFtJY29ucy5WaWRlb0NsYXBwZXJib2FyZF06IFwiNjI1MzBcIixcbiAgW0ljb25zLlZpZGVvQ2xpcEZpbG1Nb3ZpZV06IFwiNjI1MzFcIixcbiAgW0ljb25zLlZpc2lvblByb0FwcFdpbmRvd106IFwiNjI1MzJcIixcbiAgW0ljb25zLlZpc2lvblByb0dvZ2dsZXNdOiBcIjYyNTMzXCIsXG4gIFtJY29ucy5WaXNpdFBhZ2VPcGVuQXBwXTogXCI2MjUzNFwiLFxuICBbSWNvbnMuVm9pY2VdOiBcIjYyNTM1XCIsXG4gIFtJY29ucy5Wb2xsZXliYWxsXTogXCI2MjUzNlwiLFxuICBbSWNvbnMuVm9sdW1lRG93blNwZWFrZXJMb3VkU291bmRPbk11c2ljXTogXCI2MjUzN1wiLFxuICBbSWNvbnMuVm9sdW1lRnVsbFNwZWFrZXJMb3VkU291bmRPbk11c2ljXTogXCI2MjUzOFwiLFxuICBbSWNvbnMuVm9sdW1lSGFsZlNwZWFrZXJMb3VkU291bmRPbk11c2ljXTogXCI2MjUzOVwiLFxuICBbSWNvbnMuVm9sdW1lTWluaW11bVNwZWFrZXJMb3VkU291bmRPbk11c2ljXTogXCI2MjU0MFwiLFxuICBbSWNvbnMuVm9sdW1lT2ZmU3BlYWtlckxvdWRTb3VuZE9uTXVzaWNfMV06IFwiNjI1NDFcIixcbiAgW0ljb25zLlZvbHVtZU9mZlNwZWFrZXJMb3VkU291bmRPbk11c2ljXTogXCI2MjU0MlwiLFxuICBbSWNvbnMuV2FsbGV0XzFdOiBcIjYyNTQzXCIsXG4gIFtJY29ucy5XYWxsZXRfMl06IFwiNjI1NDRcIixcbiAgW0ljb25zLldhbGxldF06IFwiNjI1NDVcIixcbiAgW0ljb25zLldhdGNoXzFDbG9ja1RpbWVfMV06IFwiNjI1NDZcIixcbiAgW0ljb25zLldhdGNoXzFDbG9ja1RpbWVdOiBcIjYyNTQ3XCIsXG4gIFtJY29ucy5XZWIzQ3J5cHRvU3BhY2VdOiBcIjYyNTQ4XCIsXG4gIFtJY29ucy5XZWJjYW1DYW1lcmFWaWV3XTogXCI2MjU0OVwiLFxuICBbSWNvbnMuV2hpc3BlckFwaV06IFwiNjI1NTBcIixcbiAgW0ljb25zLldoaXRlYm9hcmRBcnRib2FyZF06IFwiNjI1NTFcIixcbiAgW0ljb25zLldpZmlfMlNwb3RTaWduYWxIb3RTcG90XTogXCI2MjU1MlwiLFxuICBbSWNvbnMuV2lmaVNwb3RTaWduYWxIb3RTcG90XTogXCI2MjU1M1wiLFxuICBbSWNvbnMuV2luZHlfMVdpbmRdOiBcIjYyNTU0XCIsXG4gIFtJY29ucy5Xb3JsZEdsb2J1c0ludGVybmV0V2ViXTogXCI2MjU1NVwiLFxuICBbSWNvbnMuV3JpdGVCcmllZl06IFwiNjI1NTZcIixcbiAgW0ljb25zLldyaXRlRWRpdExpc3RMaXN0XTogXCI2MjU1N1wiLFxuICBbSWNvbnMuWWVuQ3VycmVuY3lNb25leUNvaW5dOiBcIjYyNTU4XCIsXG4gIFtJY29ucy5aYXBMaWdodG5pbmdGbGFzaF06IFwiNjI1NTlcIixcbiAgW0ljb25zLlppcFJhckNvbXByZXNzZWRBcmNoaXZlXTogXCI2MjU2MFwiLFxuICBbSWNvbnMuWm9vbVNlYXJjaE1hZ25pZnlpbmdHbGFzc18xXTogXCI2MjU2MVwiLFxuICBbSWNvbnMuWm9vbVNlYXJjaE1hZ25pZnlpbmdHbGFzc106IFwiNjI1NjJcIixcbn07XG4iLCJpbXBvcnQgeyBDb2xvclRva2VuLCBUb2tlbkdyb3VwLCBUb2tlblR5cGUgfSBmcm9tIFwiQHN1cGVybm92YWlvL3Nkay1leHBvcnRlcnNcIjtcbmltcG9ydCB7IFByaW1pdGl2ZUNvbG9yc1RlbXBsYXRlRGF0YSB9IGZyb20gXCJzcmMvdGVtcGxhdGVzL3ByaW1pdGl2ZV9jb2xvcnMudGVtcGxhdGVcIjtcbmltcG9ydCB7IFJlZmVyZW5jZUhlbHBlciwgZmx1dHRlckNvbG9yVmFsdWUsIGdyb3VwVmFyaWFibGVOYW1lIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jb25zdCBjbGFzc05hbWUgPSBcIkNvbG9yUHJpbWl0aXZlc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVDb2xvcnMoaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpOlxuICBQcmltaXRpdmVDb2xvcnNUZW1wbGF0ZURhdGEge1xuICBjb25zdCBjb2xvclRva2VuczogQ29sb3JUb2tlbltdID0gaGVscGVyLmdldFRva2Vuc0ZvclR5cGU8Q29sb3JUb2tlbj4oVG9rZW5UeXBlLmNvbG9yKTtcbiAgY29uc3QgdG9rZW5Hcm91cHM6IFRva2VuR3JvdXBbXSA9IGhlbHBlci5nZXRHcm91cHNGb3JUeXBlKFRva2VuVHlwZS5jb2xvcik7XG4gIC8vIENvbnZlcnQgYWxsIGNvbG9yIHRva2VucyB0byBDU1MgdmFyaWFibGVzXG4gIGNvbnN0IGNvbG9yU3dhdGNoR3JvdXBzID0gdG9rZW5Hcm91cHNcbiAgICAuZmlsdGVyKCh0KSA9PiB0LnRva2VuVHlwZSA9PT0gVG9rZW5UeXBlLmNvbG9yICYmIHQuY2hpbGRyZW5JZHMubGVuZ3RoID09IDE2KTtcblxuICBjb25zdCBtYXBwZWRUb2tlbnMgPSB7fSBhcyBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGxldCBzd2F0Y2hlcyA9IGNvbG9yU3dhdGNoR3JvdXBzLnJlZHVjZTxNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+Pj4oKHByZXYsIGdyb3VwKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGdyb3VwVmFyaWFibGVOYW1lKGdyb3VwKTtcbiAgICBwcmV2W25hbWVdID0gY29sb3JUb2tlbnMuZmlsdGVyKHggPT4gZ3JvdXAuaWQgPT0geC5wYXJlbnRHcm91cElkKS5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4ge1xuICAgICAgICBwcmV2W2N1cnIubmFtZV0gPSBmbHV0dGVyQ29sb3JWYWx1ZShjdXJyKVxuICAgICAgICBtYXBwZWRUb2tlbnNbY3Vyci5pZF0gPSBoZWxwZXIucmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lKGN1cnIsIGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge31cbiAgICApXG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHt9IGFzIE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+KVxuXG4gIGNvbnN0IGNvbG9yUHJpbWl0aXZlcyA9IGNvbG9yVG9rZW5zLmZpbHRlcihlID0+ICEoZS5pZCBpbiBtYXBwZWRUb2tlbnMpICYmICFlLnZhbHVlLnJlZmVyZW5jZWRUb2tlbklkKVxuICBsZXQgY29sb3JzID0ge30gYXMgTWFwPHN0cmluZywgc3RyaW5nPjtcblxuICBmb3IgKGxldCBwcmltaXRpdmVDb2xvciBvZiBjb2xvclByaW1pdGl2ZXMpIHtcbiAgICBjb25zdCBuYW1lID0gaGVscGVyLnJlc29sdmVUb2tlblZhcmlhYmxlTmFtZShwcmltaXRpdmVDb2xvciwgY2xhc3NOYW1lKTtcbiAgICBjb2xvcnNbbmFtZV0gPSBmbHV0dGVyQ29sb3JWYWx1ZShwcmltaXRpdmVDb2xvcik7XG4gICAgbWFwcGVkVG9rZW5zW3ByaW1pdGl2ZUNvbG9yLmlkXSA9IGNsYXNzTmFtZSArIFwiLlwiICsgbmFtZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNsYXNzTmFtZSxcbiAgICBzd2F0Y2hlcyxcbiAgICBjb2xvcnNcbiAgfTtcbn1cbiIsImltcG9ydCB7IERpbWVuc2lvblRva2VuLCBGb250U2l6ZVRva2VuLCBMZXR0ZXJTcGFjaW5nVG9rZW4sIExpbmVIZWlnaHRUb2tlbiwgU3BhY2VUb2tlbiwgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzVGVtcGxhdGUgfSBmcm9tIFwic3JjL3RlbXBsYXRlcy9jb25zdGFudHMudGVtcGxhdGVcIjtcbmltcG9ydCB7IFJlZmVyZW5jZUhlbHBlciB9IGZyb20gXCIuL3V0aWxcIjtcblxudHlwZSBDb25zdGFudHNEZXNjcmlwdGlvbjxUIGV4dGVuZHMgVG9rZW4+ID0ge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICAgIHR5cGVOYW1lOiBzdHJpbmcsXG4gICAgdG9rZW5UeXBlOiBUb2tlblR5cGUsXG4gICAgcHJlZml4Pzogc3RyaW5nLFxuICAgIHJlc29sdmVWYWx1ZTogKHRva2VuOiBUKSA9PiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uc3RhbnRzPFQgZXh0ZW5kcyBUb2tlbj4oaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsIGRlc2M6IENvbnN0YW50c0Rlc2NyaXB0aW9uPFQ+KSB7XG4gICAgY29uc3QgdG9rZW5zID0gaGVscGVyLmdldFRva2Vuc0ZvclR5cGU8VD4oZGVzYy50b2tlblR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IGRlc2MuY2xhc3NOYW1lLFxuICAgICAgdHlwZU5hbWU6IGRlc2MudHlwZU5hbWUsXG4gICAgICB2YXJpYWJsZXM6IHRva2Vucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBoZWxwZXIucmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lKGN1cnIsIGRlc2MuY2xhc3NOYW1lLCBkZXNjLnByZWZpeClcbiAgICAgICAgcHJldltuYW1lXSA9IGRlc2MucmVzb2x2ZVZhbHVlKGN1cnIpO1xuICAgICAgICByZXR1cm4gcHJldlxuICAgICAgfSwgbmV3IE1hcDxzdHJpbmcsc3RyaW5nPilcbiAgICB9O1xufVxuXG5jb25zdCBmb250U2l6ZXNEZXNjcmlwdGlvbjogQ29uc3RhbnRzRGVzY3JpcHRpb248Rm9udFNpemVUb2tlbj4gPSB7XG4gICAgY2xhc3NOYW1lOiBcIk9mZmVuYnVyZ0ZvbnRTaXplc1wiLFxuICAgIHR5cGVOYW1lOiBcImRvdWJsZVwiLFxuICAgIHRva2VuVHlwZTogVG9rZW5UeXBlLmZvbnRTaXplLFxuICAgIHByZWZpeDogJ2YnLFxuICAgIHJlc29sdmVWYWx1ZTogKHRva2VuKSA9PiBgJHt0b2tlbi52YWx1ZS5tZWFzdXJlfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbnRTaXplcyhoZWxwZXI6IFJlZmVyZW5jZUhlbHBlciwpOiBDb25zdGFudHNUZW1wbGF0ZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnN0YW50cyhoZWxwZXIsIGZvbnRTaXplc0Rlc2NyaXB0aW9uKTtcbn1cblxuY29uc3QgbGluZUhlaWdodHNEZXNjcmlwdGlvbjogQ29uc3RhbnRzRGVzY3JpcHRpb248TGluZUhlaWdodFRva2VuPiA9IHtcbiAgICBjbGFzc05hbWU6IFwiT2ZmZW5idXJnTGluZUhlaWdodHNcIixcbiAgICB0eXBlTmFtZTogXCJkb3VibGVcIixcbiAgICB0b2tlblR5cGU6IFRva2VuVHlwZS5saW5lSGVpZ2h0LFxuICAgIHByZWZpeDogJ2wnLFxuICAgIHJlc29sdmVWYWx1ZTogKHRva2VuKSA9PiBgJHt0b2tlbi52YWx1ZS5tZWFzdXJlfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmVIZWlnaHRzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCk6IENvbnN0YW50c1RlbXBsYXRlIHtcbiAgICByZXR1cm4gY3JlYXRlQ29uc3RhbnRzKGhlbHBlciwgbGluZUhlaWdodHNEZXNjcmlwdGlvbik7XG59XG5cbmNvbnN0IGxldHRlclNwYWNpbmdEZXNjcmlwdGlvbjogQ29uc3RhbnRzRGVzY3JpcHRpb248TGV0dGVyU3BhY2luZ1Rva2VuPiA9IHtcbiAgICBjbGFzc05hbWU6IFwiT2ZmZW5idXJnTGV0dGVyU3BhY2luZ3NcIixcbiAgICB0eXBlTmFtZTogXCJkb3VibGVcIixcbiAgICB0b2tlblR5cGU6IFRva2VuVHlwZS5sZXR0ZXJTcGFjaW5nLFxuICAgIHJlc29sdmVWYWx1ZTogKHRva2VuKSA9PiBgJHt0b2tlbi52YWx1ZS5tZWFzdXJlfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxldHRlclNwYWNpbmdzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCk6IENvbnN0YW50c1RlbXBsYXRlIHtcbiAgICByZXR1cm4gY3JlYXRlQ29uc3RhbnRzKGhlbHBlciwgbGV0dGVyU3BhY2luZ0Rlc2NyaXB0aW9uKTtcbn1cblxuY29uc3QgZ2VuZXJpY1NwYWNpbmdEZXNjcmlwdGlvbjogQ29uc3RhbnRzRGVzY3JpcHRpb248RGltZW5zaW9uVG9rZW4+ID0ge1xuICAgIGNsYXNzTmFtZTogXCJPZmZlbmJ1cmdHZW5lcmljU3BhY2luZ3NcIixcbiAgICB0eXBlTmFtZTogXCJkb3VibGVcIixcbiAgICB0b2tlblR5cGU6IFRva2VuVHlwZS5kaW1lbnNpb24sXG4gICAgcmVzb2x2ZVZhbHVlOiAodG9rZW4pID0+IGAke3Rva2VuLnZhbHVlLm1lYXN1cmV9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2VuZXJpY1NwYWNpbmdzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCk6IENvbnN0YW50c1RlbXBsYXRlIHtcbiAgICByZXR1cm4gY3JlYXRlQ29uc3RhbnRzKGhlbHBlciwgZ2VuZXJpY1NwYWNpbmdEZXNjcmlwdGlvbik7XG59IiwiaW1wb3J0IHsgQ29sb3JUb2tlbiwgVG9rZW4sIFRva2VuVHlwZSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiO1xuaW1wb3J0IHsgQ29sb3JTY2hlbWVUZW1wbGF0ZURhdGEgfSBmcm9tIFwic3JjL3RlbXBsYXRlcy9jb2xvcl9zY2hlbWUudGVtcGxhdGVcIjtcbmltcG9ydCB7IFJlZmVyZW5jZUhlbHBlciwgaXNQcmltaXRpdmUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGNsYXNzTmFtZSA9IFwiT2ZmZW5idXJnQ29sb3JTY2hlbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9ycyhoZWxwZXI6IFJlZmVyZW5jZUhlbHBlciwgdGhlbWVEYXRhOiBSZWNvcmQ8c3RyaW5nLCBUb2tlbltdPik6IENvbG9yU2NoZW1lVGVtcGxhdGVEYXRhIHtcbiAgLy8gQ29udmVydCBhbGwgY29sb3IgdG9rZW5zIHRvIENTUyB2YXJpYWJsZXNcbiAgY29uc3QgY29sb3JUb2tlbnMgPSBoZWxwZXIuZ2V0VW5wcm9jZXNzZWRUb2tlbnNGb3JUeXBlPENvbG9yVG9rZW4+KFRva2VuVHlwZS5jb2xvcilcbiAgY29uc3Qgc2VtYW50aWNDb2xvclRva2VucyA9IGNvbG9yVG9rZW5zLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG4gIGNvbnN0IGNvbG9yVmFyaWFibGVzID0gc2VtYW50aWNDb2xvcnMoc2VtYW50aWNDb2xvclRva2VucywgaGVscGVyKVxuXG4gIGxldCB0aGVtZXMgPSB7XG4gICAgXCJsaWdodFwiOiBjb2xvclZhcmlhYmxlc1xuICB9XG5cbiAgZm9yICh2YXIgdGhlbWVOYW1lIGluIHRoZW1lRGF0YSkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoZW1lRGF0YVt0aGVtZU5hbWVdO1xuICAgIGNvbnN0IHRoZW1lQ29sb3JUb2tlbnMgPSB0b2tlbnMuZmlsdGVyKHggPT4gc2VtYW50aWNDb2xvclRva2Vucy5zb21lKHkgPT4geS5pZCA9PSB4LmlkKSkgYXMgQ29sb3JUb2tlbltdO1xuICAgIHRoZW1lc1t0aGVtZU5hbWVdID0gc2VtYW50aWNDb2xvcnModGhlbWVDb2xvclRva2VucywgaGVscGVyKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbG9yczogT2JqZWN0LmtleXMoY29sb3JWYXJpYWJsZXMpLFxuICAgIHRoZW1lcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VtYW50aWNDb2xvcnMoY29sb3JUb2tlbnM6IENvbG9yVG9rZW5bXSwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgdmFyaWFibGVOYW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIGZvciAobGV0IHRva2VuIG9mIGNvbG9yVG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IGhlbHBlci5yZXNvbHZlVG9rZW5WYXJpYWJsZU5hbWUodG9rZW4sIGNsYXNzTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVOYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXJpYWJsZU5hbWVzW25hbWVdID0gaGVscGVyLnJlc29sdmVUb2tlblJlZmVyZW5jZSh0b2tlbi52YWx1ZS5yZWZlcmVuY2VkVG9rZW5JZCEpO1xuICB9XG4gIHJldHVybiB2YXJpYWJsZU5hbWVzO1xufVxuIiwiaW1wb3J0IHsgU2hhZG93VG9rZW4sIFRva2VuVHlwZSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiO1xuaW1wb3J0IHsgU2hhZG93RGF0YSwgU2hhZG93VGVtcGxhdGUgfSBmcm9tIFwic3JjL3RlbXBsYXRlcy9zaGFkb3dzLnRlbXBsYXRlXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VIZWxwZXIgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGNsYXNzTmFtZSA9IFwiT2ZmZW5idXJnU2hhZG93c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hhZG93cyhoZWxwZXI6IFJlZmVyZW5jZUhlbHBlciwpOiBTaGFkb3dUZW1wbGF0ZSB7XG4gICAgLy8gQ29udmVydCBhbGwgY29sb3IgdG9rZW5zIHRvIENTUyB2YXJpYWJsZXNcbiAgICBjb25zdCB0b2tlbnMgPSBoZWxwZXIuZ2V0VW5wcm9jZXNzZWRUb2tlbnNGb3JUeXBlPFNoYWRvd1Rva2VuPihUb2tlblR5cGUuc2hhZG93KVxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHByb2Nlc3NTaGFkb3dzKHRva2VucywgaGVscGVyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgdmFyaWFibGVzLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTaGFkb3dzKHRva2VuczogU2hhZG93VG9rZW5bXSwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpOiBNYXA8c3RyaW5nLCBTaGFkb3dEYXRhPiB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBTaGFkb3dEYXRhPigpO1xuICAgIGZvciAobGV0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgICBjb25zdCBuYW1lID0gaGVscGVyLnJlc29sdmVUb2tlblZhcmlhYmxlTmFtZSh0b2tlbiwgY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGVOYW1lcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhcmlhYmxlTmFtZXNbbmFtZV0gPSBtYXBTaGFkb3dWYWx1ZSh0b2tlbik7XG4gICAgfVxuICAgIHJldHVybiB2YXJpYWJsZU5hbWVzO1xufVxuXG5mdW5jdGlvbiBtYXBTaGFkb3dWYWx1ZSh0b2tlbjogU2hhZG93VG9rZW4pOiBTaGFkb3dEYXRhIHtcbiAgICBjb25zdCBibHVyUmFkaXVzID0gdG9rZW4udmFsdWUubWFwKHggPT4geC5yYWRpdXMpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGNvbnN0IG9mZnNldFggPSB0b2tlbi52YWx1ZS5tYXAoeCA9PiB4LngpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGNvbnN0IG9mZnNldFkgPSB0b2tlbi52YWx1ZS5tYXAoeCA9PiB4LnkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IHRva2VuLnZhbHVlLm1hcCh4ID0+IHguc3ByZWFkKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBjb25zdCBjb2xvciA9IHRva2VuLnZhbHVlLnJlZHVjZSgocHJldiwgY3VycikgPT4gKHtcbiAgICAgICAgYTogcHJldi5hICsgY3Vyci5jb2xvci5vcGFjaXR5Lm1lYXN1cmUsXG4gICAgICAgIHI6IHByZXYuciArIGN1cnIuY29sb3IuY29sb3IucixcbiAgICAgICAgZzogcHJldi5nICsgY3Vyci5jb2xvci5jb2xvci5nLFxuICAgICAgICBiOiBwcmV2LmIgKyBjdXJyLmNvbG9yLmNvbG9yLmIsXG4gICAgfSksIHtcbiAgICAgICAgYTogMCxcbiAgICAgICAgcjogMCxcbiAgICAgICAgZzogMCxcbiAgICAgICAgYjogMFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJsdXJSYWRpdXM6IGAke2JsdXJSYWRpdXN9YCxcbiAgICAgICAgb2Zmc2V0WDogYCR7b2Zmc2V0WH1gLFxuICAgICAgICBvZmZzZXRZOiBgJHtvZmZzZXRZfWAsXG4gICAgICAgIHNwcmVhZFJhZGl1czogYCR7c3ByZWFkUmFkaXVzfWAsXG4gICAgICAgIGJsdXJTdHlsZTogYEJsdXJTdHlsZS5pbm5lcmAsIC8vIFRPRE8gaG93IHRvIGltcGxlbWVudCBkcm9wIHNoYWRvdz9cbiAgICAgICAgY29sb3I6IGNvbnZlcnRBUkdCVG9GbHV0dGVyKGNvbG9yLmEsIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhZEhleE51bWJlclRvMkRpZ2l0cyhhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChhLmxlbmd0aCA9PSAwKSByZXR1cm4gXCIwMFwiO1xuICAgIGlmIChhLmxlbmd0aCA9PSAxKSByZXR1cm4gXCIwXCIgKyBhO1xuICAgIHJldHVybiBhO1xufVxuXG4vLyBvcGFjaXR5IGFzIHBlcmNlbnQgKDAgLSAxKVxuLy8gcixnLGIsIGFzIHZhbHVlcyBmcm9tIDAgLSAyNTVcbmZ1bmN0aW9uIGNvbnZlcnRBUkdCVG9GbHV0dGVyKG9wYWNpdHk6IG51bWJlciwgcmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IGEgPSAob3BhY2l0eSAqIDI1NSkudG9TdHJpbmcoMTYpLnNsaWNlKDAsIDIpO1xuICAgIGxldCByID0gcmVkLnRvU3RyaW5nKDE2KTtcbiAgICBsZXQgZyA9IGdyZWVuLnRvU3RyaW5nKDE2KTtcbiAgICBsZXQgYiA9IGJsdWUudG9TdHJpbmcoMTYpO1xuICAgIGEgPSBwYWRIZXhOdW1iZXJUbzJEaWdpdHMoYSlcbiAgICByID0gcGFkSGV4TnVtYmVyVG8yRGlnaXRzKHIpXG4gICAgZyA9IHBhZEhleE51bWJlclRvMkRpZ2l0cyhnKVxuICAgIGIgPSBwYWRIZXhOdW1iZXJUbzJEaWdpdHMoYilcbiAgICByZXR1cm4gYENvbG9yKDB4JHthICsgciArIGcgKyBifSlgO1xufSIsImltcG9ydCB7IEZvbnRTaXplVG9rZW5WYWx1ZSwgTGV0dGVyU3BhY2luZ1Rva2VuVmFsdWUsIExpbmVIZWlnaHRUb2tlblZhbHVlLCBUb2tlblR5cGUsIFR5cG9ncmFwaHlUb2tlbiwgVHlwb2dyYXBoeVRva2VuVmFsdWUgfSBmcm9tIFwiQHN1cGVybm92YWlvL3Nkay1leHBvcnRlcnNcIjtcbmltcG9ydCB7IEZvbnRGYW1pbHlUb2tlblZhbHVlLCBGb250V2VpZ2h0VG9rZW5WYWx1ZSwgVGV4dERlY29yYXRpb25Ub2tlblZhbHVlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzL2J1aWxkL3Nkay10eXBlc2NyaXB0L3NyYy9tb2RlbC90b2tlbnMvU0RLVG9rZW5WYWx1ZVwiO1xuaW1wb3J0IHsgRm9udERlc2NyaXB0aW9uLCBUeXBvZ3JhcGh5VGVtcGxhdGVEYXRhIH0gZnJvbSBcInNyYy90ZW1wbGF0ZXMvdHlwb2dyYXBoeS50ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSGVscGVyIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5jb25zdCBjbGFzc05hbWUgPSBcIk9mZmVuYnVyZ1R5cG9ncmFwaHlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkoXG4gIGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLFxuKTogVHlwb2dyYXBoeVRlbXBsYXRlRGF0YSB7XG4gIGNvbnN0IHR5cG9Ub2tlbnMgPSBoZWxwZXIuZ2V0VG9rZW5zRm9yVHlwZTxUeXBvZ3JhcGh5VG9rZW4+KFRva2VuVHlwZS50eXBvZ3JhcGh5KTtcbiAgdmFyIHR5cG9ncmFwaGllcyA9IG5ldyBNYXA8c3RyaW5nLCBGb250RGVzY3JpcHRpb24+KCk7XG4gIGZvciAobGV0IHR5cG9Ub2tlbiBvZiB0eXBvVG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gaGVscGVyLnJlc29sdmVUb2tlblZhcmlhYmxlTmFtZSh0eXBvVG9rZW4sIGNsYXNzTmFtZSk7XG4gICAgdHlwb2dyYXBoaWVzW3ZhcmlhYmxlTmFtZV0gPSB0b2tlblRvRm9udERlc2NyaXB0aW9uKHR5cG9Ub2tlbi52YWx1ZSwgaGVscGVyKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHR5cG9ncmFwaGllc1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2tlblRvRm9udERlc2NyaXB0aW9uKFxuICB2YWx1ZTogVHlwb2dyYXBoeVRva2VuVmFsdWUsXG4gIGhlbHBlcjogUmVmZXJlbmNlSGVscGVyXG4pOiBGb250RGVzY3JpcHRpb24ge1xuICByZXR1cm4ge1xuICAgIGxpbmVIZWlnaHQ6IG1hcE1lYXN1cmVtZW50UHJvcCh2YWx1ZS5saW5lSGVpZ2h0LCBoZWxwZXIpLFxuICAgIGZvbnRTaXplOiBtYXBNZWFzdXJlbWVudFByb3AodmFsdWUuZm9udFNpemUsIGhlbHBlciksXG4gICAgZm9udEZhbWlseTogbWFwRm9udEZhbWlseSh2YWx1ZS5mb250RmFtaWx5LCB2YWx1ZS5mb250V2VpZ2h0LCBoZWxwZXIpLFxuICAgIGZvbnRXZWlnaHQ6IG1hcEZvbnRXZWlnaHQodmFsdWUuZm9udFdlaWdodCwgaGVscGVyKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiBtYXBNZWFzdXJlbWVudFByb3AodmFsdWUubGV0dGVyU3BhY2luZywgaGVscGVyKSxcbiAgICBkZWNvcmF0aW9uOiBtYXBGb250RGVjb3JhdGlvblByb3AodmFsdWUudGV4dERlY29yYXRpb24sIGhlbHBlciksXG4gIH07XG59XG5cbnR5cGUgRm9udFByb3AgPSBMaW5lSGVpZ2h0VG9rZW5WYWx1ZSB8IEZvbnRTaXplVG9rZW5WYWx1ZSB8IExldHRlclNwYWNpbmdUb2tlblZhbHVlO1xuXG5mdW5jdGlvbiBtYXBNZWFzdXJlbWVudFByb3AocHJvcDogUGljazxGb250UHJvcCwgXCJyZWZlcmVuY2VkVG9rZW5JZFwiIHwgXCJtZWFzdXJlXCI+IHwgbnVsbCwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpOiBzdHJpbmcge1xuICBpZiAoIXByb3ApIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmIChwcm9wLnJlZmVyZW5jZWRUb2tlbklkKSB7XG4gICAgcmV0dXJuIGhlbHBlci5yZXNvbHZlVG9rZW5SZWZlcmVuY2UocHJvcC5yZWZlcmVuY2VkVG9rZW5JZClcbiAgfVxuICByZXR1cm4gYCR7cHJvcC5tZWFzdXJlfWA7XG59XG5cbmZ1bmN0aW9uIG1hcEZvbnRGYW1pbHkocHJvcDogRm9udEZhbWlseVRva2VuVmFsdWUgfCBudWxsLCB3ZWlnaHQ6IEZvbnRXZWlnaHRUb2tlblZhbHVlIHwgbnVsbCwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpIHtcbiAgaWYgKCFwcm9wKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAocHJvcC5yZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgIHJldHVybiBoZWxwZXIucmVzb2x2ZVRva2VuUmVmZXJlbmNlKHByb3AucmVmZXJlbmNlZFRva2VuSWQpXG4gIH1cbiAgcmV0dXJuIHByb3AudGV4dDtcbn1cblxuY29uc3QgZm9udFdlaWdodE1hcHBpbmcgPSB7XG4gICdyZWd1bGFyJzogJ0ZvbnRXZWlnaHQudzQwMCcsXG4gICdtZWRpdW0nOiAnRm9udFdlaWdodC53NTAwJyxcbiAgJ3NlbWlib2xkJzogJ0ZvbnRXZWlnaHQudzYwMCcsXG4gICc1MDAnOiAnRm9udFdlaWdodC53NTAwJyxcbiAgJzYwMCc6ICdGb250V2VpZ2h0Lnc2MDAnLFxuICAnNzAwJzogJ0ZvbnRXZWlnaHQudzcwMCcsXG59XG5cbmZ1bmN0aW9uIG1hcEZvbnRXZWlnaHQocHJvcDogRm9udFdlaWdodFRva2VuVmFsdWUgfCBudWxsLCBoZWxwZXI6IFJlZmVyZW5jZUhlbHBlcikge1xuICBpZiAoIXByb3ApIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmIChwcm9wLnJlZmVyZW5jZWRUb2tlbklkKSB7XG4gICAgcmV0dXJuIGhlbHBlci5yZXNvbHZlVG9rZW5SZWZlcmVuY2UocHJvcC5yZWZlcmVuY2VkVG9rZW5JZClcbiAgfVxuXG4gIHJldHVybiBmb250V2VpZ2h0TWFwcGluZ1twcm9wLnRleHQudG9Mb3dlckNhc2UoKV0gPz8gJ0ZvbnRXZWlnaHQudzQwMCc7XG59XG5cbmZ1bmN0aW9uIG1hcEZvbnREZWNvcmF0aW9uUHJvcChwcm9wOiBUZXh0RGVjb3JhdGlvblRva2VuVmFsdWUgfCBudWxsLCBoZWxwZXI6IFJlZmVyZW5jZUhlbHBlcikge1xuICBpZiAoIXByb3ApIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmIChwcm9wLnJlZmVyZW5jZWRUb2tlbklkKSB7XG4gICAgcmV0dXJuIGhlbHBlci5yZXNvbHZlVG9rZW5SZWZlcmVuY2UocHJvcC5yZWZlcmVuY2VkVG9rZW5JZClcbiAgfVxuICByZXR1cm4gYFRleHREZWNvcmF0aW9uLiR7cHJvcC52YWx1ZT8udG9Mb3dlckNhc2UoKSA/PyAnbm9uZSd9YDtcbn0iLCJpbXBvcnQgeyBOYW1pbmdIZWxwZXIsIFN0cmluZ0Nhc2UgfSBmcm9tIFwiQHN1cGVybm92YWlvL2V4cG9ydC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBDb2xvclRva2VuLCBUb2tlbiwgVG9rZW5Hcm91cCwgVG9rZW5UeXBlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCI7XG5cbi8vIHNlbWFudGljIHRva2VucyByZWZlcmVuY2UgcHJpbWl0aXZlIHRva2Vuc1xuLy8gdGhlcmVmb3JlIGEgcHJpbWl0aXZlIHRva2VuIGlzIGEgdG9rZW4gXG4vLyB3aXRoIGFuIG51bGwgcmVmZXJlbmNlVG9rZW5JZFxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHRva2VuOiBUb2tlbik6IGJvb2xlYW4ge1xuICAgIGlmICghKFwidmFsdWVcIiBpbiB0b2tlbikpIHJldHVybiB0cnVlXG4gICAgaWYgKCEoXCJyZWZlcmVuY2VUb2tlbklkXCIgaW4gKHRva2VuIGFzIENvbG9yVG9rZW4pKSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gKHRva2VuIGFzIENvbG9yVG9rZW4pLnZhbHVlLnJlZmVyZW5jZWRUb2tlbklkID09IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VtYW50aWModG9rZW46IFRva2VuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh0b2tlbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVmFyaWFibGVOYW1lKHRva2VuOiBUb2tlbiwgcGFyZW50OiBUb2tlbkdyb3VwLCBwcmVmaXggPSBcImNvbG9yXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBOYW1pbmdIZWxwZXIuY29kZVNhZmVWYXJpYWJsZU5hbWVGb3JUb2tlbih0b2tlbiwgU3RyaW5nQ2FzZS5jYW1lbENhc2UsIHBhcmVudCwgcHJlZml4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBWYXJpYWJsZU5hbWUoZ3JvdXA6IFRva2VuR3JvdXApOiBzdHJpbmcge1xuICAgIHJldHVybiBOYW1pbmdIZWxwZXIuY29kZVNhZmVWYXJpYWJsZU5hbWUoW1wiY29sb3JcIiwgZ3JvdXAubmFtZV0sIFN0cmluZ0Nhc2UuY2FtZWxDYXNlLClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsdXR0ZXJDb2xvclZhbHVlKHRva2VuOiBDb2xvclRva2VuKSB7XG4gICAgY29uc3QgaGV4ID0gdG9rZW4udG9IZXg4KCk7XG4gICAgY29uc3QgYWxwaGEgPSBoZXguc2xpY2UoNywgOSkudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCByZ2IgPSBoZXguc2xpY2UoMSwgNykudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gYENvbG9yKDB4JHthbHBoYX0ke3JnYn0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuU2hhZGVOYW1lKHRva2VuOiBDb2xvclRva2VuLCB0b2tlbkdyb3VwOiBUb2tlbkdyb3VwKSB7XG4gICAgcmV0dXJuIE5hbWluZ0hlbHBlci5jb2RlU2FmZVZhcmlhYmxlTmFtZShbJ2NvbG9yJywgdG9rZW5Hcm91cC5uYW1lXSwgU3RyaW5nQ2FzZS5jYW1lbENhc2UpICsgYC5zaGFkZSR7dG9rZW4ubmFtZX1gO1xufVxuXG5leHBvcnQgdHlwZSBSZWZlcmVuY2VIZWxwZXIgPSBSZXR1cm5UeXBlPHR5cGVvZiByZWZlcmVuY2VIZWxwZXI+XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9rZW5WYXJpYWJsZU5hbWUodG9rZW46IFRva2VuLCBwYXJlbnQ6IFRva2VuR3JvdXAsIHByZWZpeDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh0b2tlbi50b2tlblR5cGUgPT0gVG9rZW5UeXBlLmNvbG9yICYmICFpc05hTihwYXJzZUludCh0b2tlbi5uYW1lKSkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHNoYWRlLCBhcyB0aG9zZSB0b2tlbiBhcmUgY29sb3IgdG9rZW5zIHdpdGggbmFtZXMgY29uc2lzdGluZyBvbmx5IG9mIGRpZ2l0c1xuICAgICAgICByZXR1cm4gdG9rZW5TaGFkZU5hbWUodG9rZW4gYXMgQ29sb3JUb2tlbiwgcGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIE5hbWluZ0hlbHBlci5jb2RlU2FmZVZhcmlhYmxlTmFtZUZvclRva2VuKHRva2VuLCBTdHJpbmdDYXNlLmNhbWVsQ2FzZSwgcGFyZW50LCBwcmVmaXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlSGVscGVyKHRva2VuczogVG9rZW5bXSwgZ3JvdXBzOiBUb2tlbkdyb3VwW10pIHtcbiAgICB2YXIgdG9rZW5Ub1ZhcmlhYmxlTmFtZSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgdmFyIHRva2VuVG9DbGFzc05hbWUgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPlxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lKHRva2VuOiBUb2tlbiwgY2xhc3NOYW1lOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBuYW1lID0gdG9rZW5Ub1ZhcmlhYmxlTmFtZVt0b2tlbi5pZF07XG4gICAgICAgIGlmICghdG9rZW5Ub1ZhcmlhYmxlTmFtZS5oYXModG9rZW4uaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBncm91cHMuZmluZCgoZ3JvdXApID0+IGdyb3VwLmlkID09PSB0b2tlbi5wYXJlbnRHcm91cElkKSFcbiAgICAgICAgICAgIG5hbWUgPSBnZW5lcmF0ZVRva2VuVmFyaWFibGVOYW1lKHRva2VuLCBwYXJlbnQsIHByZWZpeCA/PyBudWxsKVxuICAgICAgICAgICAgLy8gaWYgYSB0b2tlbiBpcyBub3QgcmVmZXJyaW5nIHRvIGEgcHJpbWl0aXZlIHRva2VuXG4gICAgICAgICAgICAvLyByZXNvbHZlIHRoZSBkZXBlbmVuY3kgYW5kIHJlZmVyIHRvIHRoZSBwcmltaXRpdmUgdG9rZW5cbiAgICAgICAgICAgIGlmICgodG9rZW4gYXMgQ29sb3JUb2tlbik/LnZhbHVlPy5yZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZklkID0gKHRva2VuIGFzIENvbG9yVG9rZW4pLnZhbHVlLnJlZmVyZW5jZWRUb2tlbklkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICB0b2tlblRvQ2xhc3NOYW1lW3Rva2VuLmlkXSA9IHRva2VuVG9DbGFzc05hbWVbcmVmSWRdXG4gICAgICAgICAgICAgICAgdG9rZW5Ub1ZhcmlhYmxlTmFtZVt0b2tlbi5pZF0gPSB0b2tlblRvVmFyaWFibGVOYW1lW3JlZklkXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlblRvQ2xhc3NOYW1lW3Rva2VuLmlkXSA9IGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIHRva2VuVG9WYXJpYWJsZU5hbWVbdG9rZW4uaWRdID0gbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRva2VuUmVmZXJlbmNlKHJlZmVyZW5jZWRUb2tlbklkOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFyZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdG9rZW5Ub1ZhcmlhYmxlTmFtZVtyZWZlcmVuY2VkVG9rZW5JZF0hO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdG9rZW5Ub0NsYXNzTmFtZVtyZWZlcmVuY2VkVG9rZW5JZF0hO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lICsgXCIuXCIgKyByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5zRm9yVHlwZTxUIGV4dGVuZHMgVG9rZW4+KHRva2VuVHlwZTogVG9rZW5UeXBlKSB7XG4gICAgICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKCh0KSA9PiB0LnRva2VuVHlwZSA9PT0gdG9rZW5UeXBlKSBhcyBUW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JvdXBzRm9yVHlwZSh0b2tlblR5cGU6IFRva2VuVHlwZSkge1xuICAgICAgICByZXR1cm4gZ3JvdXBzLmZpbHRlcigodCkgPT4gdC50b2tlblR5cGUgPT09IHRva2VuVHlwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VW5wcm9jZXNzZWRUb2tlbnNGb3JUeXBlPFQgZXh0ZW5kcyBUb2tlbj4odG9rZW5UeXBlOiBUb2tlblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRva2Vucy5maWx0ZXIoKHQpID0+IHQudG9rZW5UeXBlID09PSB0b2tlblR5cGUgJiYgISh0LmlkIGluIHRva2VuVG9WYXJpYWJsZU5hbWUpKSBhcyBUW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lLFxuICAgICAgICByZXNvbHZlVG9rZW5SZWZlcmVuY2UsXG4gICAgICAgIGdldFRva2Vuc0ZvclR5cGUsXG4gICAgICAgIGdldEdyb3Vwc0ZvclR5cGUsXG4gICAgICAgIGdldFVucHJvY2Vzc2VkVG9rZW5zRm9yVHlwZSxcbiAgICB9XG59IiwiaW1wb3J0IHsgRXRhIH0gZnJvbSBcImV0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3JTY2hlbWUoZXRhOiBFdGEsIGRhdGE6IENvbG9yU2NoZW1lVGVtcGxhdGVEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXRhLnJlbmRlclN0cmluZyhjb2xvclNjaGVtZVRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IHR5cGUgQ29sb3JTY2hlbWVUZW1wbGF0ZURhdGEgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICBjb2xvcnM6IEFycmF5PHN0cmluZz5cbiAgdGhlbWVzOiBSZWNvcmQ8c3RyaW5nLCBNYXA8c3RyaW5nLHN0cmluZz4+XG59XG5cbmNvbnN0IGNvbG9yU2NoZW1lVGVtcGxhdGUgPSBgXG5pbXBvcnQgJ3BhY2thZ2U6Zmx1dHRlci9tYXRlcmlhbC5kYXJ0JztcbmltcG9ydCAncGFja2FnZTpzZXZfZGVzaWduX3Rva2Vucy9zcmMvY29sb3JzL3ByaW1pdGl2ZV9jb2xvcnMuZGFydCc7XG5cbi8qIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IFN1cGVybm92YSwgZG9uJ3QgY2hhbmdlIGJ5IGhhbmQgKi9cbkBpbW11dGFibGVcbmNsYXNzIDwlPWl0LmNsYXNzTmFtZSU+IGV4dGVuZHMgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IHtcbiAgY29uc3QgPCU9aXQuY2xhc3NOYW1lJT4oe1xuICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gICAgcmVxdWlyZWQgdGhpcy48JT1jb2xvciU+LFxuICA8JSB9ICU+XG4gIH0pO1xuXG4gIDwlIGZvcih2YXIgdGhlbWVOYW1lIGluIGl0LnRoZW1lcykge1xuICAgIHZhciB0aGVtZSA9IGl0LnRoZW1lc1t0aGVtZU5hbWVdXG4gICAgJT5cbiAgZmFjdG9yeSA8JT1pdC5jbGFzc05hbWUlPi48JT10aGVtZU5hbWUlPigpID0+IDwlPWl0LmNsYXNzTmFtZSU+KFxuICAgIDwlIGZvcih2YXIgY29sb3Igb2YgaXQuY29sb3JzKSB7JT5cbiAgICAgIDwlPWNvbG9yJT46IDwlPXRoZW1lW2NvbG9yXSU+LFxuICAgIDwlIH0gJT5cbiAgICAgICk7XG4gIDwlIH0gJT5cblxuICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gIGZpbmFsIENvbG9yIDwlPWNvbG9yJT47XG4gIDwlIH0gJT5cblxuICBAb3ZlcnJpZGVcbiAgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IGNvcHlXaXRoKHtcbiAgICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gICAgQ29sb3I/IDwlPWNvbG9yJT4sXG4gICAgPCUgfSAlPlxuICB9KSB7XG4gICAgcmV0dXJuIDwlPWl0LmNsYXNzTmFtZSU+KFxuICAgICAgPCUgZm9yKHZhciBjb2xvciBvZiBpdC5jb2xvcnMpIHslPlxuICAgICAgPCU9Y29sb3IlPjpcbiAgICAgICAgPCU9Y29sb3IlPiA/PyB0aGlzLjwlPWNvbG9yJT4sXG4gICAgICA8JSB9ICU+XG4gICAgKTtcbiAgfVxuXG4gIEBvdmVycmlkZVxuICBUaGVtZUV4dGVuc2lvbjw8JT1pdC5jbGFzc05hbWUlPj4gbGVycChcbiAgICA8JT1pdC5jbGFzc05hbWUlPj8gb3RoZXIsXG4gICAgZG91YmxlIHQsXG4gICkge1xuICAgIGlmIChvdGhlciBpcyEgPCU9aXQuY2xhc3NOYW1lJT4pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gPCU9aXQuY2xhc3NOYW1lJT4oXG4gICAgICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gIDwlPWNvbG9yJT46IENvbG9yLmxlcnAoXG4gICAgICAgIDwlPWNvbG9yJT4sXG4gICAgICAgIG90aGVyLjwlPWNvbG9yJT4sXG4gICAgICAgIHQsXG4gICAgICApISxcbiAgICAgIDwlIH0gJT5cbiAgICApO1xuICB9XG4gIFxuICBzdGF0aWMgPCU9aXQuY2xhc3NOYW1lJT4gb2YoQnVpbGRDb250ZXh0IGNvbnRleHQpID0+XG4gICAgICBUaGVtZS5vZihjb250ZXh0KS5leHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+KCkhO1xufVxuYFxuXG5cbiIsImltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnN0YW50c0ZpbGUoZXRhOiBFdGEsIGRhdGE6IENvbnN0YW50c1RlbXBsYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXRhLnJlbmRlclN0cmluZyhjb25zdGFudHNUZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCB0eXBlIENvbnN0YW50c1RlbXBsYXRlID0ge1xuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgdHlwZU5hbWU6IHN0cmluZztcbiAgdmFyaWFibGVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxufVxuXG5jb25zdCBjb25zdGFudHNUZW1wbGF0ZSA9IGBcbmltcG9ydCAncGFja2FnZTpmbHV0dGVyL21hdGVyaWFsLmRhcnQnO1xuXG4vKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCBieSBTdXBlcm5vdmEsIGRvbid0IGNoYW5nZSBieSBoYW5kICovXG5AaW1tdXRhYmxlXG5jbGFzcyA8JT1pdC5jbGFzc05hbWUlPiB7XG4gIDwlIGZvciAodmFyIG5hbWUgaW4gaXQudmFyaWFibGVzKSB7JT5cbiAgc3RhdGljIGNvbnN0IDwlPWl0LnR5cGVOYW1lJT4gPCU9bmFtZSU+ID0gPCU9aXQudmFyaWFibGVzW25hbWVdJT47XG4gIDwlIH0gJT5cbn1cbmBcblxuIiwiaW1wb3J0IHsgRXRhIH0gZnJvbSBcImV0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySWNvbnNGaWxlKGV0YTogRXRhLCBkYXRhOiBJY29uc1RlbXBsYXRlRGF0YSk6IHN0cmluZyB7XG4gIHJldHVybiBldGEucmVuZGVyU3RyaW5nKGljb25zVGVtcGxhdGUsIGRhdGEpO1xufVxuXG5leHBvcnQgdHlwZSBJY29uc1RlbXBsYXRlRGF0YSA9IHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIGZvbnRGYW1pbHk6IHN0cmluZyxcbiAgdmFyaWFibGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxufVxuXG5jb25zdCBpY29uc1RlbXBsYXRlID0gYGltcG9ydCAncGFja2FnZTpmbHV0dGVyL3dpZGdldHMuZGFydCc7XG5cbkBzdGF0aWNJY29uUHJvdmlkZXJcbmFic3RyYWN0IGZpbmFsIGNsYXNzIDwlPWl0LmNsYXNzTmFtZSU+IHtcbiAgPCUgZm9yICh2YXIgbmFtZSBpbiBpdC52YXJpYWJsZXMpIHslPlxuXG4gIC8vLyA8aSBjbGFzcz1cInNldi1pY29ucyBtZC0zNlwiPjwlPW5hbWUlPjwvaT4gJiN4MjAxNDsgc2V2IGljb24gbmFtZWQgXCI8JT1uYW1lJT5cIi5cbiAgc3RhdGljIGNvbnN0IEljb25EYXRhIDwlPW5hbWUlPiA9IEljb25EYXRhKDB4PCU9aXQudmFyaWFibGVzW25hbWVdJT4sIGZvbnRGYW1pbHk6ICdTZXZJY29ucycpO1xuICA8JSB9ICU+XG59XG5gXG5cbiIsImltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByaW1pdGl2ZUNvbG9ycyhldGE6IEV0YSwgZGF0YTogUHJpbWl0aXZlQ29sb3JzVGVtcGxhdGVEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXRhLnJlbmRlclN0cmluZyhwcmltaXRpdmVDb2xvcnNUZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCB0eXBlIFByaW1pdGl2ZUNvbG9yc1RlbXBsYXRlRGF0YSA9IHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIHN3YXRjaGVzOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PixcbiAgY29sb3JzOiBNYXA8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmNvbnN0IHByaW1pdGl2ZUNvbG9yc1RlbXBsYXRlID0gYFxuaW1wb3J0ICdwYWNrYWdlOmZsdXR0ZXIvbWF0ZXJpYWwuZGFydCc7XG5pbXBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL2NvbG9ycy9vZmZlbmJ1cmdfY29sb3Jfc3dhdGNoLmRhcnQnO1xuXG4vKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCBieSBTdXBlcm5vdmEsIGRvbid0IGNoYW5nZSBieSBoYW5kICovXG5jbGFzcyA8JT1pdC5jbGFzc05hbWUlPiB7XG4gIDwlIGZvcih2YXIgc3dhdGNoIGluIGl0LnN3YXRjaGVzKSB7JT5cbiAgc3RhdGljIGNvbnN0IE9mZmVuYnVyZ0NvbG9yU3dhdGNoIDwlPXN3YXRjaCU+ID0gT2ZmZW5idXJnQ29sb3JTd2F0Y2goXG4gICAgMHhGRjIwQTM4MSxcbiAgICB7XG4gICAgICA8JSBmb3IodmFyIHNoYWRlIGluIGl0LnN3YXRjaGVzW3N3YXRjaF0pIHslPlxuICAgICAgT2ZmZW5idXJnQ29sb3JTaGFkZS5zaGFkZTwlPXNoYWRlJT46IDwlPWl0LnN3YXRjaGVzW3N3YXRjaF1bc2hhZGVdJT4sXG4gICAgICA8JSB9ICU+XG4gICAgfSxcbiAgKTs8JSB9ICU+XG5cbiAgPCUgZm9yICh2YXIgY29sb3IgaW4gaXQuY29sb3JzKSB7JT5cbiAgc3RhdGljIGNvbnN0IENvbG9yIDwlPWNvbG9yJT4gPSA8JT1pdC5jb2xvcnNbY29sb3JdJT47XG4gIDwlIH0gJT5cbn1cbmBcblxuXG4iLCJpbXBvcnQgeyBFdGEgfSBmcm9tIFwiZXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaGFkb3dzKGV0YTogRXRhLCBkYXRhOiBTaGFkb3dUZW1wbGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBldGEucmVuZGVyU3RyaW5nKHNoYWRvd3NUZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCB0eXBlIFNoYWRvd0RhdGEgPSB7XG4gIGNvbG9yOiBzdHJpbmcsXG4gIGJsdXJTdHlsZTogc3RyaW5nLFxuICBvZmZzZXRYOiBzdHJpbmcsXG4gIG9mZnNldFk6IHN0cmluZyxcbiAgYmx1clJhZGl1czogc3RyaW5nLFxuICBzcHJlYWRSYWRpdXM6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgU2hhZG93VGVtcGxhdGUgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICB2YXJpYWJsZXM6IE1hcDxzdHJpbmcsIFNoYWRvd0RhdGE+LFxufVxuXG5jb25zdCBzaGFkb3dzVGVtcGxhdGUgPSBgXG5pbXBvcnQgJ3BhY2thZ2U6Zmx1dHRlci9tYXRlcmlhbC5kYXJ0JztcblxuLyogVGhpcyBmaWxlIHdhcyBnZW5lcmF0ZWQgYnkgU3VwZXJub3ZhLCBkb24ndCBjaGFuZ2UgYnkgaGFuZCAqL1xuQGltbXV0YWJsZVxuY2xhc3MgPCU9aXQuY2xhc3NOYW1lJT4ge1xuXG4gIDwlIGZvciAodmFyIG5hbWUgaW4gaXQudmFyaWFibGVzKSB7JT5cbiAgPCUgdmFyIHNoYWRvdyA9IGl0LnZhcmlhYmxlc1tuYW1lXSAlPlxuICBzdGF0aWMgY29uc3QgQm94U2hhZG93IDwlPW5hbWUlPiA9IEJveFNoYWRvdyhcbiAgICBjb2xvcjogPCU9c2hhZG93LmNvbG9yJT4sXG4gICAgYmx1clN0eWxlOiA8JT1zaGFkb3cuYmx1clN0eWxlJT4sXG4gICAgb2Zmc2V0OiBPZmZzZXQoPCU9c2hhZG93Lm9mZnNldFglPiwgPCU9c2hhZG93Lm9mZnNldFklPiksXG4gICAgYmx1clJhZGl1czogPCU9c2hhZG93LmJsdXJSYWRpdXMlPixcbiAgICBzcHJlYWRSYWRpdXM6IDwlPXNoYWRvdy5zcHJlYWRSYWRpdXMlPixcbiAgKTtcbiAgPCUgfSAlPlxufVxuYCIsImltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclR5cG9ncmFwaHlTY2hlbWUoZXRhOiBFdGEsIGRhdGE6IFR5cG9ncmFwaHlUZW1wbGF0ZURhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBldGEucmVuZGVyU3RyaW5nKHR5cG9ncmFwaHlUZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCB0eXBlIEZvbnREZXNjcmlwdGlvbiA9IHtcbiAgbGluZUhlaWdodDogc3RyaW5nLFxuICBmb250U2l6ZTogc3RyaW5nLFxuICBmb250RmFtaWx5OiBzdHJpbmcsXG4gIGZvbnRXZWlnaHQ6IHN0cmluZyxcbiAgbGV0dGVyU3BhY2luZzogc3RyaW5nLFxuICBkZWNvcmF0aW9uOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFR5cG9ncmFwaHlUZW1wbGF0ZURhdGEgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICB0eXBvZ3JhcGhpZXM6IE1hcDxTdHJpbmcsIEZvbnREZXNjcmlwdGlvbj4sXG59XG5cbmNvbnN0IHR5cG9ncmFwaHlUZW1wbGF0ZSA9IGBcbmltcG9ydCAncGFja2FnZTpmbHV0dGVyL21hdGVyaWFsLmRhcnQnO1xuaW1wb3J0ICdwYWNrYWdlOnNldl9kZXNpZ25fdG9rZW5zL3NyYy90eXBvZ3JhcGh5L2ZvbnRfc2l6ZXMuZGFydCc7XG5pbXBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvbGV0dGVyX3NwYWNpbmdzLmRhcnQnO1xuaW1wb3J0ICdwYWNrYWdlOnNldl9kZXNpZ25fdG9rZW5zL3NyYy90eXBvZ3JhcGh5L2xpbmVfaGVpZ2h0cy5kYXJ0JztcblxuZXhwb3J0ICdwYWNrYWdlOnNldl9kZXNpZ25fdG9rZW5zL3NyYy90eXBvZ3JhcGh5L2ZvbnRfc2l6ZXMuZGFydCc7XG5leHBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvbGV0dGVyX3NwYWNpbmdzLmRhcnQnO1xuZXhwb3J0ICdwYWNrYWdlOnNldl9kZXNpZ25fdG9rZW5zL3NyYy90eXBvZ3JhcGh5L2xpbmVfaGVpZ2h0cy5kYXJ0JztcblxuXG4vKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCBieSBTdXBlcm5vdmEsIGRvbid0IGNoYW5nZSBieSBoYW5kICovXG5AaW1tdXRhYmxlXG5jbGFzcyA8JT1pdC5jbGFzc05hbWUlPiBleHRlbmRzIFRoZW1lRXh0ZW5zaW9uPDwlPWl0LmNsYXNzTmFtZSU+PiB7XG4gIGNvbnN0IDwlPWl0LmNsYXNzTmFtZSU+KHtcbiAgPCUgZm9yKHZhciB0eXBvcyBpbiBpdC50eXBvZ3JhcGhpZXMpIHslPlxuICAgIHJlcXVpcmVkIHRoaXMuPCU9dHlwb3MlPixcbiAgPCUgfSAlPlxuICB9KTtcblxuICBmYWN0b3J5IDwlPWl0LmNsYXNzTmFtZSU+LmluaXQoKSA9PiA8JT1pdC5jbGFzc05hbWUlPihcbiAgICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgICAgIDwlPXR5cG8lPjogIGNvbnN0IFRleHRTdHlsZShcbiAgICAgICAgZm9udFNpemU6IDwlPWl0LnR5cG9ncmFwaGllc1t0eXBvXS5mb250U2l6ZSU+LFxuICAgICAgICBoZWlnaHQ6IDwlPWl0LnR5cG9ncmFwaGllc1t0eXBvXS5saW5lSGVpZ2h0JT4gLyA8JT1pdC50eXBvZ3JhcGhpZXNbdHlwb10uZm9udFNpemUlPiwgXG4gICAgICAgIGZvbnRGYW1pbHk6ICc8JT1pdC50eXBvZ3JhcGhpZXNbdHlwb10uZm9udEZhbWlseSU+JyxcbiAgICAgICAgZm9udFdlaWdodDogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmZvbnRXZWlnaHQlPixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmxldHRlclNwYWNpbmclPixcbiAgICAgICAgZGVjb3JhdGlvbjogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmRlY29yYXRpb24lPixcbiAgICAgICksXG4gICAgPCUgfSAlPlxuICAgICAgKTtcblxuICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgZmluYWwgVGV4dFN0eWxlIDwlPXR5cG8lPjtcbiAgPCUgfSAlPlxuXG4gIEBvdmVycmlkZVxuICBUaGVtZUV4dGVuc2lvbjw8JT1pdC5jbGFzc05hbWUlPj4gY29weVdpdGgoe1xuICAgIDwlIGZvcih2YXIgdHlwbyBpbiBpdC50eXBvZ3JhcGhpZXMpIHslPlxuICAgIFRleHRTdHlsZT8gPCU9dHlwbyU+LFxuICAgIDwlIH0gJT5cbiAgfSkge1xuICAgIHJldHVybiA8JT1pdC5jbGFzc05hbWUlPihcbiAgICAgIDwlIGZvcih2YXIgdHlwbyBpbiBpdC50eXBvZ3JhcGhpZXMpIHslPlxuICAgICAgPCU9dHlwbyU+OlxuICAgICAgICA8JT10eXBvJT4gPz8gdGhpcy48JT10eXBvJT4sXG4gICAgICA8JSB9ICU+XG4gICAgKTtcbiAgfVxuXG4gIEBvdmVycmlkZVxuICBUaGVtZUV4dGVuc2lvbjw8JT1pdC5jbGFzc05hbWUlPj4gbGVycChcbiAgICA8JT1pdC5jbGFzc05hbWUlPj8gb3RoZXIsXG4gICAgZG91YmxlIHQsXG4gICkge1xuICAgIGlmIChvdGhlciBpcyEgPCU9aXQuY2xhc3NOYW1lJT4pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gPCU9aXQuY2xhc3NOYW1lJT4oXG4gICAgICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgPCU9dHlwbyU+OiBUZXh0U3R5bGUubGVycChcbiAgICAgICAgPCU9dHlwbyU+LFxuICAgICAgICBvdGhlci48JT10eXBvJT4sXG4gICAgICAgIHQsXG4gICAgICApISxcbiAgICAgIDwlIH0gJT5cbiAgICApO1xuICB9XG4gIFxuICBzdGF0aWMgPCU9aXQuY2xhc3NOYW1lJT4gb2YoQnVpbGRDb250ZXh0IGNvbnRleHQpID0+XG4gICAgICBUaGVtZS5vZihjb250ZXh0KS5leHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+KCkhO1xufVxuYFxuXG5cbiIsImltcG9ydCB7IEZpbGVIZWxwZXIgfSBmcm9tIFwiQHN1cGVybm92YWlvL2V4cG9ydC1oZWxwZXJzXCJcbmltcG9ydCB7IFB1bHNhckNvbnRleHQsIFJlbW90ZVZlcnNpb25JZGVudGlmaWVyLCBTdXBlcm5vdmEsIFRva2VuLCBUb2tlbkdyb3VwIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCJcbmltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIlxuaW1wb3J0IHsgY3JlYXRlUHJpbWl0aXZlQ29sb3JzIH0gZnJvbSBcIi4vY29udGVudC9wcmltaXRpdmVfY29sb3JzXCJcbmltcG9ydCB7IGNyZWF0ZUZvbnRTaXplcywgY3JlYXRlR2VuZXJpY1NwYWNpbmdzLCBjcmVhdGVMZXR0ZXJTcGFjaW5ncywgY3JlYXRlTGluZUhlaWdodHMgfSBmcm9tIFwiLi9jb250ZW50L3ByaW1pdGl2ZV9kaW1lbnNpb25zXCJcbmltcG9ydCB7IGNyZWF0ZUNvbG9ycyB9IGZyb20gXCIuL2NvbnRlbnQvc2VtYW50aWNfY29sb3JzXCJcbmltcG9ydCB7IGNyZWF0ZVNoYWRvd3MgfSBmcm9tIFwiLi9jb250ZW50L3NoYWRvd3NcIlxuaW1wb3J0IHsgY3JlYXRlVHlwb2dyYXBoeSB9IGZyb20gXCIuL2NvbnRlbnQvdHlwb2dyYXBoeVwiXG5pbXBvcnQgeyByZWZlcmVuY2VIZWxwZXIgfSBmcm9tIFwiLi9jb250ZW50L3V0aWxcIlxuaW1wb3J0IHsgcmVuZGVyQ29sb3JTY2hlbWUgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvY29sb3Jfc2NoZW1lLnRlbXBsYXRlXCJcbmltcG9ydCB7IHJlbmRlckNvbnN0YW50c0ZpbGUgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvY29uc3RhbnRzLnRlbXBsYXRlXCJcbmltcG9ydCB7IHJlbmRlclByaW1pdGl2ZUNvbG9ycyB9IGZyb20gXCIuL3RlbXBsYXRlcy9wcmltaXRpdmVfY29sb3JzLnRlbXBsYXRlXCJcbmltcG9ydCB7IHJlbmRlclNoYWRvd3MgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvc2hhZG93cy50ZW1wbGF0ZVwiXG5pbXBvcnQgeyByZW5kZXJUeXBvZ3JhcGh5U2NoZW1lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL3R5cG9ncmFwaHkudGVtcGxhdGVcIlxuaW1wb3J0IHsgcmVuZGVySWNvbnNGaWxlIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2ljb25zLnRlbXBsYXRlXCJcbmltcG9ydCB7IHByb2Nlc3NBc3NldERhdGEgfSBmcm9tIFwiLi9hc3NldF9leHBvcnRcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbkRhdGEoXG4gIHNkazogU3VwZXJub3ZhLFxuICBjb250ZXh0OiBQdWxzYXJDb250ZXh0LFxuICByZW1vdGVWZXJzaW9uSWRlbnRpZmllcjogUmVtb3RlVmVyc2lvbklkZW50aWZpZXIsXG4pOiBQcm9taXNlPFtUb2tlbltdLCBUb2tlbkdyb3VwW10sIFJlY29yZDxzdHJpbmcsIFRva2VuW10+XT4ge1xuICAvLyBGZXRjaCB0aGUgbmVjZXNzYXJ5IGRhdGFcbiAgbGV0IHRva2VucyA9IGF3YWl0IHNkay50b2tlbnMuZ2V0VG9rZW5zKHJlbW90ZVZlcnNpb25JZGVudGlmaWVyKVxuICBsZXQgdG9rZW5Hcm91cHMgPSBhd2FpdCBzZGsudG9rZW5zLmdldFRva2VuR3JvdXBzKHJlbW90ZVZlcnNpb25JZGVudGlmaWVyKVxuXG4gIC8vIEZpbHRlciBieSBicmFuZCwgaWYgc3BlY2lmaWVkIGJ5IHRoZSBWU0NvZGUgZXh0ZW5zaW9uIG9yIHBpcGVsaW5lIGNvbmZpZ3VyYXRpb25cbiAgaWYgKGNvbnRleHQuYnJhbmRJZCkge1xuICAgIHRva2VucyA9IHRva2Vucy5maWx0ZXIoKHRva2VuKSA9PiB0b2tlbi5icmFuZElkID09PSBjb250ZXh0LmJyYW5kSWQpXG4gICAgdG9rZW5Hcm91cHMgPSB0b2tlbkdyb3Vwcy5maWx0ZXIoKHRva2VuR3JvdXApID0+IHRva2VuR3JvdXAuYnJhbmRJZCA9PT0gY29udGV4dC5icmFuZElkKVxuICB9XG5cbiAgLy8gQXBwbHkgdGhlbWUsIGlmIHNwZWNpZmllZCBieSB0aGUgVlNDb2RlIGV4dGVuc2lvbiBvciBwaXBlbGluZSBjb25maWd1cmF0aW9uXG4gIGxldCB0aGVtZVRva2VuczogUmVjb3JkPHN0cmluZywgVG9rZW5bXT4gPSB7fVxuICBjb25zdCB0aGVtZXMgPSBhd2FpdCBzZGsudG9rZW5zLmdldFRva2VuVGhlbWVzKHJlbW90ZVZlcnNpb25JZGVudGlmaWVyKVxuICB0aGVtZVRva2Vuc1tcIndlYkRlZmF1bHRcIl0gPSB0b2tlbnM7XG4gIGZvciAoY29uc3QgdGhlbWUgb2YgdGhlbWVzKSB7XG4gICAgY29uc3QgY3VycmVudFRva2VucyA9IGF3YWl0IHNkay50b2tlbnMuY29tcHV0ZVRva2Vuc0J5QXBwbHlpbmdUaGVtZXModG9rZW5zLCBbdGhlbWVdKTtcbiAgICBpZiAodGhlbWUuY29kZU5hbWUgPT0gXCJtb2JpbGVcIikge1xuICAgICAgdG9rZW5zID0gY3VycmVudFRva2Vuc1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVtZVRva2Vuc1t0aGVtZS5jb2RlTmFtZV0gPSBjdXJyZW50VG9rZW5zO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3Rva2VucywgdG9rZW5Hcm91cHMsIHRoZW1lVG9rZW5zXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NUb2tlbkRhdGEodG9rZW5zOiBUb2tlbltdLCB0b2tlbkdyb3VwczogVG9rZW5Hcm91cFtdLCB0aGVtZXM6IFJlY29yZDxzdHJpbmcsIFRva2VuW10+KSB7XG4gIGNvbnN0IGV0YSA9IG5ldyBFdGEoe1xuICAgIGRlYnVnOiB0cnVlLFxuICB9KTtcblxuXG4gIGNvbnN0IGhlbHBlciA9IHJlZmVyZW5jZUhlbHBlcih0b2tlbnMsIHRva2VuR3JvdXBzKTtcblxuICBjb25zdCBwcmltaXRpdmVUZW1wbGF0ZURhdGEgPSBjcmVhdGVQcmltaXRpdmVDb2xvcnMoaGVscGVyKTtcbiAgY29uc3Qgc2VtYW50aWNzQ29sb3JEYXRhID0gY3JlYXRlQ29sb3JzKGhlbHBlciwgdGhlbWVzKTtcbiAgY29uc3Qgc2hhZG93c0RhdGEgPSBjcmVhdGVTaGFkb3dzKGhlbHBlcik7XG5cbiAgY29uc3QgZm9udFNpemVzRGF0YSA9IGNyZWF0ZUZvbnRTaXplcyhoZWxwZXIpO1xuICBjb25zdCBsaW5lSGVpZ2h0RGF0YSA9IGNyZWF0ZUxpbmVIZWlnaHRzKGhlbHBlcik7XG4gIGNvbnN0IGxldHRlclNwYWNpbmdEYXRhID0gY3JlYXRlTGV0dGVyU3BhY2luZ3MoaGVscGVyKTtcbiAgY29uc3Qgc3BhY2luZ0RhdGEgPSBjcmVhdGVHZW5lcmljU3BhY2luZ3MoaGVscGVyKTtcblxuICBjb25zdCB0eXBvZ3JhcGh5VGVtcGxhdGVEYXRhID0gY3JlYXRlVHlwb2dyYXBoeShoZWxwZXIpO1xuXG4gIGNvbnN0IGljb25zRGF0YSA9IHByb2Nlc3NBc3NldERhdGEoKTtcbiAgcmV0dXJuIFtcbiAgICBGaWxlSGVscGVyLmNyZWF0ZVRleHRGaWxlKHtcbiAgICAgIHJlbGF0aXZlUGF0aDogXCIuL3NyYy9jb2xvcnNcIixcbiAgICAgIGZpbGVOYW1lOiBcInByaW1pdGl2ZV9jb2xvcnMuZGFydFwiLFxuICAgICAgY29udGVudDogcmVuZGVyUHJpbWl0aXZlQ29sb3JzKGV0YSwgcHJpbWl0aXZlVGVtcGxhdGVEYXRhKSxcbiAgICB9KSxcbiAgICBGaWxlSGVscGVyLmNyZWF0ZVRleHRGaWxlKHtcbiAgICAgIHJlbGF0aXZlUGF0aDogXCIuL3NyYy9jb2xvcnNcIixcbiAgICAgIGZpbGVOYW1lOiBcImNvbG9yX3NjaGVtZS5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb2xvclNjaGVtZShldGEsIHNlbWFudGljc0NvbG9yRGF0YSksXG4gICAgfSksXG4gICAgRmlsZUhlbHBlci5jcmVhdGVUZXh0RmlsZSh7XG4gICAgICByZWxhdGl2ZVBhdGg6IFwiLi9zcmMvc2hhZG93c1wiLFxuICAgICAgZmlsZU5hbWU6IFwic2hhZG93cy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJTaGFkb3dzKGV0YSwgc2hhZG93c0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImxpbmVfaGVpZ2h0cy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb25zdGFudHNGaWxlKGV0YSwgbGluZUhlaWdodERhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImZvbnRfc2l6ZXMuZGFydFwiLFxuICAgICAgY29udGVudDogcmVuZGVyQ29uc3RhbnRzRmlsZShldGEsIGZvbnRTaXplc0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImxldHRlcl9zcGFjaW5ncy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb25zdGFudHNGaWxlKGV0YSwgbGV0dGVyU3BhY2luZ0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL2RpbWVuc2lvbnNcIixcbiAgICAgIGZpbGVOYW1lOiBcInNwYWNpbmdzLmRhcnRcIixcbiAgICAgIGNvbnRlbnQ6IHJlbmRlckNvbnN0YW50c0ZpbGUoZXRhLCBzcGFjaW5nRGF0YSksXG4gICAgfSksXG4gICAgRmlsZUhlbHBlci5jcmVhdGVUZXh0RmlsZSh7XG4gICAgICByZWxhdGl2ZVBhdGg6IFwiLi9zcmMvdHlwb2dyYXBoeVwiLFxuICAgICAgZmlsZU5hbWU6IFwidHlwb2dyYXBoeS5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJUeXBvZ3JhcGh5U2NoZW1lKGV0YSwgdHlwb2dyYXBoeVRlbXBsYXRlRGF0YSksXG4gICAgfSksXG4gICAgRmlsZUhlbHBlci5jcmVhdGVUZXh0RmlsZSh7XG4gICAgICByZWxhdGl2ZVBhdGg6IFwiLi9zcmMvaWNvbnNcIixcbiAgICAgIGZpbGVOYW1lOiBcImljb25zLmRhcnRcIixcbiAgICAgIGNvbnRlbnQ6IHJlbmRlckljb25zRmlsZShldGEsIGljb25zRGF0YSksXG4gICAgfSksXG4gIF1cbn1cbiIsIi8qKlxuICogVXBwZXIgY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGFuIGlucHV0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyQ2FzZUZpcnN0KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc3Vic3RyKDEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBTb3VyY2U6IGZ0cDovL2Z0cC51bmljb2RlLm9yZy9QdWJsaWMvVUNEL2xhdGVzdC91Y2QvU3BlY2lhbENhc2luZy50eHRcbiAqL1xudmFyIFNVUFBPUlRFRF9MT0NBTEUgPSB7XG4gICAgdHI6IHtcbiAgICAgICAgcmVnZXhwOiAvW1xcdTAwNjldL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgaTogXCJcXHUwMTMwXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9bXFx1MDA2OV0vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpOiBcIlxcdTAxMzBcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGx0OiB7XG4gICAgICAgIHJlZ2V4cDogL1tcXHUwMDY5XFx1MDA2QVxcdTAxMkZdXFx1MDMwN3xcXHUwMDY5XFx1MDMwN1tcXHUwMzAwXFx1MDMwMVxcdTAzMDNdL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgacyHOiBcIlxcdTAwNDlcIixcbiAgICAgICAgICAgIGrMhzogXCJcXHUwMDRBXCIsXG4gICAgICAgICAgICDEr8yHOiBcIlxcdTAxMkVcIixcbiAgICAgICAgICAgIGnMh8yAOiBcIlxcdTAwQ0NcIixcbiAgICAgICAgICAgIGnMh8yBOiBcIlxcdTAwQ0RcIixcbiAgICAgICAgICAgIGnMh8yDOiBcIlxcdTAxMjhcIixcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8qKlxuICogTG9jYWxpemVkIHVwcGVyIGNhc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVVcHBlckNhc2Uoc3RyLCBsb2NhbGUpIHtcbiAgICB2YXIgbGFuZyA9IFNVUFBPUlRFRF9MT0NBTEVbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmIChsYW5nKVxuICAgICAgICByZXR1cm4gdXBwZXJDYXNlKHN0ci5yZXBsYWNlKGxhbmcucmVnZXhwLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gbGFuZy5tYXBbbV07IH0pKTtcbiAgICByZXR1cm4gdXBwZXJDYXNlKHN0cik7XG59XG4vKipcbiAqIFVwcGVyIGNhc2UgYXMgYSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwcGVyQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKCh0fHxzZWxmKS5ldGE9e30pfSh0aGlzLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gZT1PYmplY3QuYXNzaWduP09iamVjdC5hc3NpZ24uYmluZCgpOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKHRbcl09bltyXSl9cmV0dXJuIHR9LGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIG4odCxlKXt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSx0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj10LGkodCxlKX1mdW5jdGlvbiByKHQpe3JldHVybiByPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSxyKHQpfWZ1bmN0aW9uIGkodCxlKXtyZXR1cm4gaT1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKTpmdW5jdGlvbih0LGUpe3JldHVybiB0Ll9fcHJvdG9fXz1lLHR9LGkodCxlKX1mdW5jdGlvbiBhKHQsZSxuKXtyZXR1cm4gYT1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm94eSlyZXR1cm4hMDt0cnl7cmV0dXJuIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLFtdLGZ1bmN0aW9uKCl7fSkpLCEwfWNhdGNoKHQpe3JldHVybiExfX0oKT9SZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk6ZnVuY3Rpb24odCxlLG4pe3ZhciByPVtudWxsXTtyLnB1c2guYXBwbHkocixlKTt2YXIgYT1uZXcoRnVuY3Rpb24uYmluZC5hcHBseSh0LHIpKTtyZXR1cm4gbiYmaShhLG4ucHJvdG90eXBlKSxhfSxhLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBzKHQpe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIE1hcD9uZXcgTWFwOnZvaWQgMDtyZXR1cm4gcz1mdW5jdGlvbih0KXtpZihudWxsPT09dHx8LTE9PT1GdW5jdGlvbi50b1N0cmluZy5jYWxsKHQpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKXJldHVybiB0O2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2lmKHZvaWQgMCE9PWUpe2lmKGUuaGFzKHQpKXJldHVybiBlLmdldCh0KTtlLnNldCh0LG4pfWZ1bmN0aW9uIG4oKXtyZXR1cm4gYSh0LGFyZ3VtZW50cyxyKHRoaXMpLmNvbnN0cnVjdG9yKX1yZXR1cm4gbi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOm4sZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksaShuLHQpfSxzKHQpfXZhciBvPS8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5jYWNoZT12b2lkIDAsdGhpcy5jYWNoZT10fXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmRlZmluZT1mdW5jdGlvbih0LGUpe3RoaXMuY2FjaGVbdF09ZX0sbi5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2FjaGVbdF19LG4ucmVtb3ZlPWZ1bmN0aW9uKHQpe2RlbGV0ZSB0aGlzLmNhY2hlW3RdfSxuLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5jYWNoZT17fX0sbi5sb2FkPWZ1bmN0aW9uKHQpe3RoaXMuY2FjaGU9ZSh7fSx0aGlzLmNhY2hlLHQpfSx0fSgpLGM9LyojX19QVVJFX18qL2Z1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSl7dmFyIG47cmV0dXJuKG49dC5jYWxsKHRoaXMsZSl8fHRoaXMpLm5hbWU9XCJFdGEgRXJyb3JcIixufXJldHVybiBuKGUsdCksZX0oLyojX19QVVJFX18qL3MoRXJyb3IpKTtmdW5jdGlvbiBsKHQsZSxuKXt2YXIgcj1lLnNsaWNlKDAsbikuc3BsaXQoL1xcbi8pLGk9ci5sZW5ndGgsYT1yW2ktMV0ubGVuZ3RoKzE7dGhyb3cgdCs9XCIgYXQgbGluZSBcIitpK1wiIGNvbCBcIithK1wiOlxcblxcbiAgXCIrZS5zcGxpdCgvXFxuLylbaS0xXStcIlxcbiAgXCIrQXJyYXkoYSkuam9pbihcIiBcIikrXCJeXCIsbmV3IGModCl9ZnVuY3Rpb24gdSh0LGUsbixyKXt2YXIgaT1lLnNwbGl0KFwiXFxuXCIpLGE9TWF0aC5tYXgobi0zLDApLHM9TWF0aC5taW4oaS5sZW5ndGgsbiszKSxvPXIsbD1pLnNsaWNlKGEscykubWFwKGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZSthKzE7cmV0dXJuKHI9PW4/XCIgPj4gXCI6XCIgICAgXCIpK3IrXCJ8IFwiK3R9KS5qb2luKFwiXFxuXCIpLHU9bmV3IGMoKG8/bytcIjpcIituK1wiXFxuXCI6XCJsaW5lIFwiK24rXCJcXG5cIikrbCtcIlxcblxcblwiK3QubWVzc2FnZSk7dGhyb3cgdS5uYW1lPXQubmFtZSx1fXZhciBwPWZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfS5jb25zdHJ1Y3RvcjtmdW5jdGlvbiBmKHQsZSl7dmFyIG49dGhpcy5jb25maWcscj1lJiZlLmFzeW5jP3A6RnVuY3Rpb247dHJ5e3JldHVybiBuZXcgcihuLnZhck5hbWUsXCJvcHRpb25zXCIsdGhpcy5jb21waWxlVG9TdHJpbmcuY2FsbCh0aGlzLHQsZSkpfWNhdGNoKG4pe3Rocm93IG4gaW5zdGFuY2VvZiBTeW50YXhFcnJvcj9uZXcgYyhcIkJhZCB0ZW1wbGF0ZSBzeW50YXhcXG5cXG5cIituLm1lc3NhZ2UrXCJcXG5cIitBcnJheShuLm1lc3NhZ2UubGVuZ3RoKzEpLmpvaW4oXCI9XCIpK1wiXFxuXCIrdGhpcy5jb21waWxlVG9TdHJpbmcuY2FsbCh0aGlzLHQsZSkrXCJcXG5cIik6bn19ZnVuY3Rpb24gaCh0LGUpe3ZhciBuPXRoaXMuY29uZmlnLHI9ZSYmZS5hc3luYyxpPXRoaXMuY29tcGlsZUJvZHksYT10aGlzLnBhcnNlLmNhbGwodGhpcyx0KSxzPW4uZnVuY3Rpb25IZWFkZXIrJ1xcbmxldCBpbmNsdWRlID0gKHRlbXBsYXRlLCBkYXRhKSA9PiB0aGlzLnJlbmRlcih0ZW1wbGF0ZSwgZGF0YSwgb3B0aW9ucyk7XFxubGV0IGluY2x1ZGVBc3luYyA9ICh0ZW1wbGF0ZSwgZGF0YSkgPT4gdGhpcy5yZW5kZXJBc3luYyh0ZW1wbGF0ZSwgZGF0YSwgb3B0aW9ucyk7XFxuXFxubGV0IF9fZXRhID0ge3JlczogXCJcIiwgZTogdGhpcy5jb25maWcuZXNjYXBlRnVuY3Rpb24sIGY6IHRoaXMuY29uZmlnLmZpbHRlckZ1bmN0aW9uJysobi5kZWJ1Zz8nLCBsaW5lOiAxLCB0ZW1wbGF0ZVN0cjogXCInK3QucmVwbGFjZSgvXFxcXHxcIi9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcclxcbnxcXG58XFxyL2csXCJcXFxcblwiKSsnXCInOlwiXCIpK1wifTtcXG5cXG5mdW5jdGlvbiBsYXlvdXQocGF0aCwgZGF0YSkge1xcbiAgX19ldGEubGF5b3V0ID0gcGF0aDtcXG4gIF9fZXRhLmxheW91dERhdGEgPSBkYXRhO1xcbn1cIisobi5kZWJ1Zz9cInRyeSB7XCI6XCJcIikrKG4udXNlV2l0aD9cIndpdGgoXCIrbi52YXJOYW1lK1wifHx7fSl7XCI6XCJcIikrXCJcXG5cXG5cIitpLmNhbGwodGhpcyxhKStcIlxcbmlmIChfX2V0YS5sYXlvdXQpIHtcXG4gIF9fZXRhLnJlcyA9IFwiKyhyP1wiYXdhaXQgaW5jbHVkZUFzeW5jXCI6XCJpbmNsdWRlXCIpK1wiIChfX2V0YS5sYXlvdXQsIHsuLi5cIituLnZhck5hbWUrXCIsIGJvZHk6IF9fZXRhLnJlcywgLi4uX19ldGEubGF5b3V0RGF0YX0pO1xcbn1cXG5cIisobi51c2VXaXRoP1wifVwiOlwiXCIpKyhuLmRlYnVnP1wifSBjYXRjaCAoZSkgeyB0aGlzLlJ1bnRpbWVFcnIoZSwgX19ldGEudGVtcGxhdGVTdHIsIF9fZXRhLmxpbmUsIG9wdGlvbnMuZmlsZXBhdGgpIH1cIjpcIlwiKStcIlxcbnJldHVybiBfX2V0YS5yZXM7XFxuXCI7aWYobi5wbHVnaW5zKWZvcih2YXIgbz0wO288bi5wbHVnaW5zLmxlbmd0aDtvKyspe3ZhciBjPW4ucGx1Z2luc1tvXTtjLnByb2Nlc3NGblN0cmluZyYmKHM9Yy5wcm9jZXNzRm5TdHJpbmcocyxuKSl9cmV0dXJuIHN9ZnVuY3Rpb24gZCh0KXtmb3IodmFyIGU9dGhpcy5jb25maWcsbj0wLHI9dC5sZW5ndGgsaT1cIlwiO248cjtuKyspe3ZhciBhPXRbbl07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpaSs9XCJfX2V0YS5yZXMrPSdcIithK1wiJ1xcblwiO2Vsc2V7dmFyIHM9YS50LG89YS52YWx8fFwiXCI7ZS5kZWJ1ZyYmKGkrPVwiX19ldGEubGluZT1cIithLmxpbmVObytcIlxcblwiKSxcInJcIj09PXM/KGUuYXV0b0ZpbHRlciYmKG89XCJfX2V0YS5mKFwiK28rXCIpXCIpLGkrPVwiX19ldGEucmVzKz1cIitvK1wiXFxuXCIpOlwiaVwiPT09cz8oZS5hdXRvRmlsdGVyJiYobz1cIl9fZXRhLmYoXCIrbytcIilcIiksZS5hdXRvRXNjYXBlJiYobz1cIl9fZXRhLmUoXCIrbytcIilcIiksaSs9XCJfX2V0YS5yZXMrPVwiK28rXCJcXG5cIik6XCJlXCI9PT1zJiYoaSs9bytcIlxcblwiKX19cmV0dXJuIGl9dmFyIGc9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wifTtmdW5jdGlvbiB5KHQpe3JldHVybiBnW3RdfXZhciB2PXthdXRvRXNjYXBlOiEwLGF1dG9GaWx0ZXI6ITEsYXV0b1RyaW06WyExLFwibmxcIl0sY2FjaGU6ITEsY2FjaGVGaWxlcGF0aHM6ITAsZGVidWc6ITEsZXNjYXBlRnVuY3Rpb246ZnVuY3Rpb24odCl7dmFyIGU9U3RyaW5nKHQpO3JldHVybi9bJjw+XCInXS8udGVzdChlKT9lLnJlcGxhY2UoL1smPD5cIiddL2cseSk6ZX0sZmlsdGVyRnVuY3Rpb246ZnVuY3Rpb24odCl7cmV0dXJuIFN0cmluZyh0KX0sZnVuY3Rpb25IZWFkZXI6XCJcIixwYXJzZTp7ZXhlYzpcIlwiLGludGVycG9sYXRlOlwiPVwiLHJhdzpcIn5cIn0scGx1Z2luczpbXSxybVdoaXRlc3BhY2U6ITEsdGFnczpbXCI8JVwiLFwiJT5cIl0sdXNlV2l0aDohMSx2YXJOYW1lOlwiaXRcIixkZWZhdWx0RXh0ZW5zaW9uOlwiLmV0YVwifSxtPS9gKD86XFxcXFtcXHNcXFNdfFxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkqfXwoPyFcXCR7KVteXFxcXGBdKSpgL2cseD0vJyg/OlxcXFxbXFxzXFx3XCInXFxcXGBdfFteXFxuXFxyJ1xcXFxdKSo/Jy9nLF89L1wiKD86XFxcXFtcXHNcXHdcIidcXFxcYF18W15cXG5cXHJcIlxcXFxdKSo/XCIvZztmdW5jdGlvbiBiKHQpe3JldHVybiB0LnJlcGxhY2UoL1suKitcXC0/XiR7fSgpfFtcXF1cXFxcXS9nLFwiXFxcXCQmXCIpfWZ1bmN0aW9uIHcodCxlKXtyZXR1cm4gdC5zbGljZSgwLGUpLnNwbGl0KFwiXFxuXCIpLmxlbmd0aH1mdW5jdGlvbiBTKHQpe3ZhciBlPXRoaXMuY29uZmlnLG49W10scj0hMSxpPTAsYT1lLnBhcnNlO2lmKGUucGx1Z2lucylmb3IodmFyIHM9MDtzPGUucGx1Z2lucy5sZW5ndGg7cysrKXt2YXIgbz1lLnBsdWdpbnNbc107by5wcm9jZXNzVGVtcGxhdGUmJih0PW8ucHJvY2Vzc1RlbXBsYXRlKHQsZSkpfWZ1bmN0aW9uIGModCxpKXt0JiYodD1mdW5jdGlvbih0LGUsbixyKXt2YXIgaSxhO3JldHVybiBBcnJheS5pc0FycmF5KGUuYXV0b1RyaW0pPyhpPWUuYXV0b1RyaW1bMV0sYT1lLmF1dG9UcmltWzBdKTppPWE9ZS5hdXRvVHJpbSwobnx8ITE9PT1uKSYmKGk9biksKHJ8fCExPT09cikmJihhPXIpLGF8fGk/XCJzbHVycFwiPT09aSYmXCJzbHVycFwiPT09YT90LnRyaW0oKTooXCJfXCI9PT1pfHxcInNsdXJwXCI9PT1pP3Q9dC50cmltU3RhcnQoKTpcIi1cIiE9PWkmJlwibmxcIiE9PWl8fCh0PXQucmVwbGFjZSgvXig/OlxcclxcbnxcXG58XFxyKS8sXCJcIikpLFwiX1wiPT09YXx8XCJzbHVycFwiPT09YT90PXQudHJpbUVuZCgpOlwiLVwiIT09YSYmXCJubFwiIT09YXx8KHQ9dC5yZXBsYWNlKC8oPzpcXHJcXG58XFxufFxccikkLyxcIlwiKSksdCk6dH0odCxlLHIsaSksdCYmKHQ9dC5yZXBsYWNlKC9cXFxcfCcvZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9cXHJcXG58XFxufFxcci9nLFwiXFxcXG5cIiksbi5wdXNoKHQpKSl9ZS5ybVdoaXRlc3BhY2UmJih0PXQucmVwbGFjZSgvW1xcclxcbl0rL2csXCJcXG5cIikucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sXCJcIikpLG0ubGFzdEluZGV4PTAseC5sYXN0SW5kZXg9MCxfLmxhc3RJbmRleD0wO2Zvcih2YXIgdSxwPVthLmV4ZWMsYS5pbnRlcnBvbGF0ZSxhLnJhd10ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQmJmU/dCtcInxcIitiKGUpOmU/YihlKTp0fSxcIlwiKSxmPW5ldyBSZWdFeHAoYihlLnRhZ3NbMF0pK1wiKC18Xyk/XFxcXHMqKFwiK3ArXCIpP1xcXFxzKlwiLFwiZ1wiKSxoPW5ldyBSZWdFeHAoXCInfFxcXCJ8YHxcXFxcL1xcXFwqfChcXFxccyooLXxfKT9cIitiKGUudGFnc1sxXSkrXCIpXCIsXCJnXCIpO3U9Zi5leGVjKHQpOyl7dmFyIGQ9dC5zbGljZShpLHUuaW5kZXgpO2k9dVswXS5sZW5ndGgrdS5pbmRleDt2YXIgZz11WzJdfHxcIlwiO2MoZCx1WzFdKSxoLmxhc3RJbmRleD1pO2Zvcih2YXIgeT12b2lkIDAsdj0hMTt5PWguZXhlYyh0KTspe2lmKHlbMV0pe3ZhciBTPXQuc2xpY2UoaSx5LmluZGV4KTtmLmxhc3RJbmRleD1pPWgubGFzdEluZGV4LHI9eVsyXSx2PXt0Omc9PT1hLmV4ZWM/XCJlXCI6Zz09PWEucmF3P1wiclwiOmc9PT1hLmludGVycG9sYXRlP1wiaVwiOlwiXCIsdmFsOlN9O2JyZWFrfXZhciBGPXlbMF07aWYoXCIvKlwiPT09Ril7dmFyIE89dC5pbmRleE9mKFwiKi9cIixoLmxhc3RJbmRleCk7LTE9PT1PJiZsKFwidW5jbG9zZWQgY29tbWVudFwiLHQseS5pbmRleCksaC5sYXN0SW5kZXg9T31lbHNlXCInXCI9PT1GPyh4Lmxhc3RJbmRleD15LmluZGV4LHguZXhlYyh0KT9oLmxhc3RJbmRleD14Lmxhc3RJbmRleDpsKFwidW5jbG9zZWQgc3RyaW5nXCIsdCx5LmluZGV4KSk6J1wiJz09PUY/KF8ubGFzdEluZGV4PXkuaW5kZXgsXy5leGVjKHQpP2gubGFzdEluZGV4PV8ubGFzdEluZGV4OmwoXCJ1bmNsb3NlZCBzdHJpbmdcIix0LHkuaW5kZXgpKTpcImBcIj09PUYmJihtLmxhc3RJbmRleD15LmluZGV4LG0uZXhlYyh0KT9oLmxhc3RJbmRleD1tLmxhc3RJbmRleDpsKFwidW5jbG9zZWQgc3RyaW5nXCIsdCx5LmluZGV4KSl9dj8oZS5kZWJ1ZyYmKHYubGluZU5vPXcodCx1LmluZGV4KSksbi5wdXNoKHYpKTpsKFwidW5jbG9zZWQgdGFnXCIsdCx1LmluZGV4KX1pZihjKHQuc2xpY2UoaSx0Lmxlbmd0aCksITEpLGUucGx1Z2lucylmb3IodmFyIEk9MDtJPGUucGx1Z2lucy5sZW5ndGg7SSsrKXt2YXIgQT1lLnBsdWdpbnNbSV07QS5wcm9jZXNzQVNUJiYobj1BLnByb2Nlc3NBU1QobixlKSl9cmV0dXJuIG59ZnVuY3Rpb24gRih0LGUpe3ZhciBuPWUmJmUuYXN5bmM/dGhpcy50ZW1wbGF0ZXNBc3luYzp0aGlzLnRlbXBsYXRlc1N5bmM7aWYodGhpcy5yZXNvbHZlUGF0aCYmdGhpcy5yZWFkRmlsZSYmIXQuc3RhcnRzV2l0aChcIkBcIikpe3ZhciByPWUuZmlsZXBhdGgsaT1uLmdldChyKTtpZih0aGlzLmNvbmZpZy5jYWNoZSYmaSlyZXR1cm4gaTt2YXIgYT10aGlzLnJlYWRGaWxlKHIpLHM9dGhpcy5jb21waWxlKGEsZSk7cmV0dXJuIHRoaXMuY29uZmlnLmNhY2hlJiZuLmRlZmluZShyLHMpLHN9dmFyIG89bi5nZXQodCk7aWYobylyZXR1cm4gbzt0aHJvdyBuZXcgYyhcIkZhaWxlZCB0byBnZXQgdGVtcGxhdGUgJ1wiK3QrXCInXCIpfWZ1bmN0aW9uIE8odCxuLHIpe3ZhciBpLGE9ZSh7fSxyLHthc3luYzohMX0pO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0Pyh0aGlzLnJlc29sdmVQYXRoJiZ0aGlzLnJlYWRGaWxlJiYhdC5zdGFydHNXaXRoKFwiQFwiKSYmKGEuZmlsZXBhdGg9dGhpcy5yZXNvbHZlUGF0aCh0LGEpKSxpPUYuY2FsbCh0aGlzLHQsYSkpOmk9dCxpLmNhbGwodGhpcyxuLGEpfWZ1bmN0aW9uIEkodCxuLHIpe3ZhciBpLGE9ZSh7fSxyLHthc3luYzohMH0pO1wic3RyaW5nXCI9PXR5cGVvZiB0Pyh0aGlzLnJlc29sdmVQYXRoJiZ0aGlzLnJlYWRGaWxlJiYhdC5zdGFydHNXaXRoKFwiQFwiKSYmKGEuZmlsZXBhdGg9dGhpcy5yZXNvbHZlUGF0aCh0LGEpKSxpPUYuY2FsbCh0aGlzLHQsYSkpOmk9dDt2YXIgcz1pLmNhbGwodGhpcyxuLGEpO3JldHVybiBQcm9taXNlLnJlc29sdmUocyl9ZnVuY3Rpb24gQSh0LGUpe3ZhciBuPXRoaXMuY29tcGlsZSh0LHthc3luYzohMX0pO3JldHVybiBPLmNhbGwodGhpcyxuLGUpfWZ1bmN0aW9uIFQodCxlKXt2YXIgbj10aGlzLmNvbXBpbGUodCx7YXN5bmM6ITB9KTtyZXR1cm4gSS5jYWxsKHRoaXMsbixlKX12YXIgUD0vKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMuY29uZmlnPXZvaWQgMCx0aGlzLlJ1bnRpbWVFcnI9dSx0aGlzLmNvbXBpbGU9Zix0aGlzLmNvbXBpbGVUb1N0cmluZz1oLHRoaXMuY29tcGlsZUJvZHk9ZCx0aGlzLnBhcnNlPVMsdGhpcy5yZW5kZXI9Tyx0aGlzLnJlbmRlckFzeW5jPUksdGhpcy5yZW5kZXJTdHJpbmc9QSx0aGlzLnJlbmRlclN0cmluZ0FzeW5jPVQsdGhpcy5maWxlcGF0aENhY2hlPXt9LHRoaXMudGVtcGxhdGVzU3luYz1uZXcgbyh7fSksdGhpcy50ZW1wbGF0ZXNBc3luYz1uZXcgbyh7fSksdGhpcy5yZXNvbHZlUGF0aD1udWxsLHRoaXMucmVhZEZpbGU9bnVsbCx0aGlzLmNvbmZpZz10P2Uoe30sdix0KTplKHt9LHYpfXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmNvbmZpZ3VyZT1mdW5jdGlvbih0KXt0aGlzLmNvbmZpZz1lKHt9LHRoaXMuY29uZmlnLHQpfSxuLndpdGhDb25maWc9ZnVuY3Rpb24odCl7cmV0dXJuIGUoe30sdGhpcyx7Y29uZmlnOmUoe30sdGhpcy5jb25maWcsdCl9KX0sbi5sb2FkVGVtcGxhdGU9ZnVuY3Rpb24odCxlLG4pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKShuJiZuLmFzeW5jP3RoaXMudGVtcGxhdGVzQXN5bmM6dGhpcy50ZW1wbGF0ZXNTeW5jKS5kZWZpbmUodCx0aGlzLmNvbXBpbGUoZSxuKSk7ZWxzZXt2YXIgcj10aGlzLnRlbXBsYXRlc1N5bmM7KFwiQXN5bmNGdW5jdGlvblwiPT09ZS5jb25zdHJ1Y3Rvci5uYW1lfHxuJiZuLmFzeW5jKSYmKHI9dGhpcy50ZW1wbGF0ZXNBc3luYyksci5kZWZpbmUodCxlKX19LHR9KCksaj0vKiNfX1BVUkVfXyovZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3JldHVybiB0LmFwcGx5KHRoaXMsYXJndW1lbnRzKXx8dGhpc31yZXR1cm4gbihlLHQpLGV9KFApO3QuRXRhPWp9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXIudW1kLmpzLm1hcFxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xuICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQW55T3V0cHV0RmlsZSwgUHVsc2FyQ29udGV4dCwgUmVtb3RlVmVyc2lvbklkZW50aWZpZXIsIFN1cGVybm92YSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiXG5pbXBvcnQgeyBFeHBvcnRlckNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnXCJcbmltcG9ydCB7IGZldGNoVG9rZW5EYXRhLCBwcm9jZXNzVG9rZW5EYXRhIH0gZnJvbSBcIi4vdG9rZW5fZXhwb3J0XCJcbi8qKlxuICogRXhwb3J0IGVudHJ5cG9pbnQuXG4gKiBXaGVuIHJ1bm5pbmcgYGV4cG9ydGAgdGhyb3VnaCBleHRlbnNpb25zIG9yIHBpcGVsaW5lcywgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZC5cbiAqIENvbnRleHQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRlc2lnbiBzeXN0ZW0gYW5kIHZlcnNpb24gdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgZXhwb3J0ZWQuXG4gKi9cblB1bHNhci5leHBvcnQoYXN5bmMgKHNkazogU3VwZXJub3ZhLCBjb250ZXh0OiBQdWxzYXJDb250ZXh0KTogUHJvbWlzZTxBcnJheTxBbnlPdXRwdXRGaWxlPj4gPT4ge1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZGVzaWduIHN5c3RlbSB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBleHBvcnRlZCAoY29udGV4dClcbiAgY29uc3QgcmVtb3RlVmVyc2lvbklkZW50aWZpZXI6IFJlbW90ZVZlcnNpb25JZGVudGlmaWVyID0ge1xuICAgIGRlc2lnblN5c3RlbUlkOiBjb250ZXh0LmRzSWQsXG4gICAgdmVyc2lvbklkOiBjb250ZXh0LnZlcnNpb25JZCxcbiAgfVxuXG4gIGNvbnN0IFt0b2tlbnMsIHRva2VuR3JvdXBzLCB0aGVtZXNdID0gYXdhaXQgZmV0Y2hUb2tlbkRhdGEoc2RrLCBjb250ZXh0LCByZW1vdGVWZXJzaW9uSWRlbnRpZmllcik7XG5cbiAgcmV0dXJuIHByb2Nlc3NUb2tlbkRhdGEodG9rZW5zLCB0b2tlbkdyb3VwcywgdGhlbWVzKTtcbn0pXG4vKiogRXhwb3J0ZXIgY29uZmlndXJhdGlvbi4gQWRoZXJlcyB0byB0aGUgYEV4cG9ydGVyQ29uZmlndXJhdGlvbmAgaW50ZXJmYWNlIGFuZCBpdHMgY29udGVudCBjb21lcyBmcm9tIHRoZSByZXNvbHZlZCBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gKyB1c2VyIG92ZXJyaWRlcyBvZiB2YXJpb3VzIGNvbmZpZ3VyYXRpb24ga2V5cyAqL1xuZXhwb3J0IGNvbnN0IGV4cG9ydENvbmZpZ3VyYXRpb24gPSBQdWxzYXIuZXhwb3J0Q29uZmlnPEV4cG9ydGVyQ29uZmlndXJhdGlvbj4oKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9