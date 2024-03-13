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
        const variableName = helper.resolveTypoTokenVariableName(typoToken, className);
        if (variableName.toLowerCase().indexOf("desktop") != -1)
            continue;
        typographies[variableName] = tokenToFontDescription(typoToken.value, helper);
    }
    return {
        className,
        typographies
    };
}
exports.createTypography = createTypography;
function tokenToFontDescription(value, helper) {
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
function mapMeasurementProp(prop, helper, fontSize) {
    if (!prop) {
        return 'null';
    }
    if (prop.referencedTokenId) {
        return helper.resolveTokenReference(prop.referencedTokenId);
    }
    if (prop.unit == sdk_exporters_1.Unit.percent) {
        return (fontSize / 100 * prop.measure).toFixed(2);
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
const duplicateNamesMap = {
    'headingHeading': 'heading',
    'bodyBody': 'body',
};
function removeDuplicates(name) {
    let newName = `${name}`;
    for (let dup in duplicateNamesMap) {
        newName = newName.replaceAll(dup, duplicateNamesMap[dup]);
    }
    return newName;
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
    function resolveTypoTokenVariableName(token, className, prefix) {
        let name = tokenToVariableName[token.id];
        if (!tokenToVariableName.has(token.id)) {
            const parent = groups.find((group) => group.id === token.parentGroupId);
            name = generateTokenVariableName(token, parent, prefix ?? null);
            name = removeDuplicates(name);
            // if a token is not referring to a primitive token
            // resolve the depenency and refer to the primitive token
            tokenToClassName[token.id] = className;
            tokenToVariableName[token.id] = name;
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
        resolveTypoTokenVariableName,
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

  factory <%=it.className%>.init(Color defaultTextColor) => <%=it.className%>(
    <% for(var typo in it.typographies) {%>
      <%=typo%>:  TextStyle(
        fontSize: <%=it.typographies[typo].fontSize%>,
        height: <%=it.typographies[typo].lineHeight%> / <%=it.typographies[typo].fontSize%>, 
        fontFamily: '<%=it.typographies[typo].fontFamily%>',
        fontWeight: <%=it.typographies[typo].fontWeight%>,
        letterSpacing: <%=it.typographies[typo].letterSpacing%>,
        decoration: <%=it.typographies[typo].decoration%>,
        color: defaultTextColor,
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
        themeTokens[theme.codeName] = currentTokens;
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
    // const iconsData = processAssetData();
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
        // TODO add icons as PNGs again with proper assets paths in SevIcons
        // FileHelper.createTextFile({
        //   relativePath: "./src/icons",
        //   fileName: "icons.dart",
        //   content: renderIconsFile(eta, iconsData),
        // }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7QUFDRiw0TEFBNEw7QUFDL0ssMkJBQW1CLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL0BzdXBlcm5vdmFpby9leHBvcnQtaGVscGVycy9idWlsZC9oZWxwZXJzLmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvQHN1cGVybm92YWlvL3Nkay1leHBvcnRlcnMvYnVpbGQvc3VwZXJub3ZhLXNkay10eXBlc2NyaXB0LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvY2FtZWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2NhcGl0YWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2NoYW5nZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvY29uc3RhbnQtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2RvdC1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvaGVhZGVyLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9sb3dlci1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvbm8tY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3BhcmFtLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9wYXNjYWwtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3BhdGgtY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL3NlbnRlbmNlLWNhc2UvZGlzdC5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy9zbmFrZS1jYXNlL2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9wcmltaXRpdmVfY29sb3JzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9wcmltaXRpdmVfZGltZW5zaW9ucy50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL2NvbnRlbnQvc2VtYW50aWNfY29sb3JzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC9zaGFkb3dzLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC90eXBvZ3JhcGh5LnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvY29udGVudC91dGlsLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvdGVtcGxhdGVzL2NvbG9yX3NjaGVtZS50ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL3RlbXBsYXRlcy9jb25zdGFudHMudGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy90ZW1wbGF0ZXMvcHJpbWl0aXZlX2NvbG9ycy50ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vc3JjL3RlbXBsYXRlcy9zaGFkb3dzLnRlbXBsYXRlLnRzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9zcmMvdGVtcGxhdGVzL3R5cG9ncmFwaHkudGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy90b2tlbl9leHBvcnQudHMiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL25vZGVfbW9kdWxlcy91cHBlci1jYXNlLWZpcnN0L2Rpc3QuZXMyMDE1L2luZGV4LmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvdXBwZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyLy4vbm9kZV9tb2R1bGVzL2V0YS9kaXN0L2Jyb3dzZXIudW1kLmpzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BzZXZkZXNrL2ZsdXR0ZXItZXhwb3J0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ac2V2ZGVzay9mbHV0dGVyLWV4cG9ydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHNldmRlc2svZmx1dHRlci1leHBvcnRlci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17NjM5OihlLHIsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLkl0ZXJhdG9ycz12b2lkIDA7Y29uc3Qgbz10KDU4KTtyLkl0ZXJhdG9ycz1jbGFzc3tzdGF0aWMgYWxsVG9rZW5UeXBlcygpe3JldHVybltvLlRva2VuVHlwZS5jb2xvcixvLlRva2VuVHlwZS50eXBvZ3JhcGh5LG8uVG9rZW5UeXBlLmRpbWVuc2lvbixvLlRva2VuVHlwZS5zaXplLG8uVG9rZW5UeXBlLnNwYWNlLG8uVG9rZW5UeXBlLm9wYWNpdHksby5Ub2tlblR5cGUuZm9udFNpemUsby5Ub2tlblR5cGUubGluZUhlaWdodCxvLlRva2VuVHlwZS5sZXR0ZXJTcGFjaW5nLG8uVG9rZW5UeXBlLnBhcmFncmFwaFNwYWNpbmcsby5Ub2tlblR5cGUuYm9yZGVyV2lkdGgsby5Ub2tlblR5cGUucmFkaXVzLG8uVG9rZW5UeXBlLmR1cmF0aW9uLG8uVG9rZW5UeXBlLnpJbmRleCxvLlRva2VuVHlwZS5zaGFkb3csby5Ub2tlblR5cGUuYm9yZGVyLG8uVG9rZW5UeXBlLmdyYWRpZW50LG8uVG9rZW5UeXBlLnN0cmluZyxvLlRva2VuVHlwZS5wcm9kdWN0Q29weSxvLlRva2VuVHlwZS5mb250RmFtaWx5LG8uVG9rZW5UeXBlLmZvbnRXZWlnaHQsby5Ub2tlblR5cGUudGV4dENhc2Usby5Ub2tlblR5cGUudGV4dERlY29yYXRpb24sby5Ub2tlblR5cGUudmlzaWJpbGl0eSxvLlRva2VuVHlwZS5ibHVyXX1zdGF0aWMgYWxsRGltZW5zaW9uVG9rZW5UeXBlcygpe3JldHVybltvLlRva2VuVHlwZS5kaW1lbnNpb24sby5Ub2tlblR5cGUuc2l6ZSxvLlRva2VuVHlwZS5zcGFjZSxvLlRva2VuVHlwZS5vcGFjaXR5LG8uVG9rZW5UeXBlLmZvbnRTaXplLG8uVG9rZW5UeXBlLmxpbmVIZWlnaHQsby5Ub2tlblR5cGUubGV0dGVyU3BhY2luZyxvLlRva2VuVHlwZS5wYXJhZ3JhcGhTcGFjaW5nLG8uVG9rZW5UeXBlLmJvcmRlcldpZHRoLG8uVG9rZW5UeXBlLnJhZGl1cyxvLlRva2VuVHlwZS5kdXJhdGlvbixvLlRva2VuVHlwZS56SW5kZXhdfXN0YXRpYyBhbGxTdHJpbmdUb2tlblR5cGVzKCl7cmV0dXJuW28uVG9rZW5UeXBlLnN0cmluZyxvLlRva2VuVHlwZS5wcm9kdWN0Q29weSxvLlRva2VuVHlwZS5mb250RmFtaWx5LG8uVG9rZW5UeXBlLmZvbnRXZWlnaHRdfXN0YXRpYyBhbGxPcHRpb25Ub2tlblR5cGVzKCl7cmV0dXJuW28uVG9rZW5UeXBlLnRleHRDYXNlLG8uVG9rZW5UeXBlLnRleHREZWNvcmF0aW9uLG8uVG9rZW5UeXBlLnZpc2liaWxpdHldfX19LDk4OTooZSxyKT0+e3ZhciB0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuQ29sb3JGb3JtYXQ9dm9pZCAwLCh0PXIuQ29sb3JGb3JtYXR8fChyLkNvbG9yRm9ybWF0PXt9KSkucmdiPVwicmdiXCIsdC5yZ2JhPVwicmdiYVwiLHQuc21hcnRSZ2JhPVwic21hcnRSZ2JhXCIsdC5oZXg2PVwiaGV4NlwiLHQuaGV4OD1cImhleDhcIix0Lmhhc2hIZXg2PVwiaGFzaEhleDZcIix0Lmhhc2hIZXg4PVwiaGFzaEhleDhcIix0LnNtYXJ0SGFzaEhleD1cInNtYXJ0SGFzaEhleFwiLHQuc21hcnRIZXg9XCJzbWFydEhleFwiLHQuaHNsPVwiaHNsXCIsdC5oc2xhPVwiaHNsYVwiLHQuc21hcnRIc2xhPVwic21hcnRIc2xhXCIsdC5zbWFydFVJQ29sb3I9XCJzbWFydFVJQ29sb3JcIn0sNTQ1OihlLHIpPT57dmFyIHQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5TdHJpbmdDYXNlPXZvaWQgMCwodD1yLlN0cmluZ0Nhc2V8fChyLlN0cmluZ0Nhc2U9e30pKS5jYW1lbENhc2U9XCJjYW1lbENhc2VcIix0LmNhcGl0YWxDYXNlPVwiY2FwaXRhbENhc2VcIix0LmNvbnN0YW50Q2FzZT1cImNvbnN0YW50Q2FzZVwiLHQuZG90Q2FzZT1cImRvdENhc2VcIix0LmhlYWRlckNhc2U9XCJoZWFkZXJDYXNlXCIsdC5ub0Nhc2U9XCJub0Nhc2VcIix0LnBhcmFtQ2FzZT1cInBhcmFtQ2FzZVwiLHQucGFzY2FsQ2FzZT1cInBhc2NhbENhc2VcIix0LnBhdGhDYXNlPVwicGF0aENhc2VcIix0LnNlbnRlbmNlQ2FzZT1cInNlbnRlbmNlQ2FzZVwiLHQuc25ha2VDYXNlPVwic25ha2VDYXNlXCJ9LDYxNzooZSxyLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5GaWxlSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoNTgpO3IuRmlsZUhlbHBlcj1jbGFzc3tzdGF0aWMgY3JlYXRlQ29weVJlbW90ZUZpbGUoe3JlbGF0aXZlUGF0aDplLGZpbGVOYW1lOnIsdXJsOnR9KXtyZXR1cm57cGF0aDplLG5hbWU6cix0eXBlOm8uT3V0cHV0RmlsZVR5cGUuY29weVJlbW90ZVVybCx1cmw6dH19c3RhdGljIGNyZWF0ZVRleHRGaWxlKHtyZWxhdGl2ZVBhdGg6ZSxmaWxlTmFtZTpyLGNvbnRlbnQ6dH0pe3JldHVybntwYXRoOmUsbmFtZTpyLHR5cGU6by5PdXRwdXRGaWxlVHlwZS50ZXh0LGNvbnRlbnQ6dH19c3RhdGljIGNyZWF0ZUJpbmFyeUZpbGUoe3JlbGF0aXZlUGF0aDplLGZpbGVOYW1lOnIsZGF0YTp0fSl7cmV0dXJue3BhdGg6ZSxuYW1lOnIsdHlwZTpvLk91dHB1dEZpbGVUeXBlLmJpbmFyeSxkYXRhOnR9fX19LDc2MTooZSxyKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuc3VyZU9wdGlvbmFsUmVmZXJlbmNlPXZvaWQgMCxyLnN1cmVPcHRpb25hbFJlZmVyZW5jZT1mdW5jdGlvbihlLHIsdD0hMCl7aWYoIWV8fCF0KXJldHVybiBudWxsO2NvbnN0IG89ci5nZXQoZSk7aWYoIW8pdGhyb3cgbmV3IEVycm9yKGBUcnlpbmcgdG8gcmV0cmlldmUgdW5rbm93biByZWZlcmVuY2VkIHRva2VuICR7ZX1gKTtyZXR1cm4gb319LDExODooZSxyKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuTmV0d29ya0hlbHBlcj12b2lkIDAsci5OZXR3b3JrSGVscGVyPWNsYXNze3N0YXRpYyBhc3luYyBmZXRjaEFzVGV4dChlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkudGV4dCgpfXN0YXRpYyBhc3luYyBmZXRjaEFzSlNPTihlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkuanNvbigpfXN0YXRpYyBhc3luYyBmZXRjaEFzRGF0YShlLHIsdCl7cmV0dXJuKGF3YWl0IHRoaXMucGVyZm9ybUZldGNoKGUscix0KSkuYXJyYXlCdWZmZXIoKX1zdGF0aWMgYXN5bmMgcGVyZm9ybUZldGNoKGUscix0KXt0cnl7Y29uc3Qgbz1hd2FpdCBlLm5ldHdvcmsuZmV0Y2gocix0KTtpZighby5vayl0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7by5zdGF0dXN9LCBlcnJvcjogJHthd2FpdCBvLnRleHQoKX1gKTtyZXR1cm4gb31jYXRjaChlKXt0aHJvdyBlfX19fSw3NzE6KGUscix0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuQ1NTSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoNTgpLGE9dCg3NjEpLG49dCg5NTIpO3IuQ1NTSGVscGVyPWNsYXNze3N0YXRpYyB0b2tlblRvQ1NTKGUscix0KXtzd2l0Y2goZS50b2tlblR5cGUpe2Nhc2Ugby5Ub2tlblR5cGUuY29sb3I6cmV0dXJuIHRoaXMuY29sb3JUb2tlblZhbHVlVG9DU1MoZS52YWx1ZSxyLHQpO2Nhc2Ugby5Ub2tlblR5cGUuYm9yZGVyOnJldHVybiB0aGlzLmJvcmRlclRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5ncmFkaWVudDpyZXR1cm4gdGhpcy5ncmFkaWVudFRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5kaW1lbnNpb246Y2FzZSBvLlRva2VuVHlwZS5zaXplOmNhc2Ugby5Ub2tlblR5cGUuc3BhY2U6Y2FzZSBvLlRva2VuVHlwZS5vcGFjaXR5OmNhc2Ugby5Ub2tlblR5cGUuZm9udFNpemU6Y2FzZSBvLlRva2VuVHlwZS5saW5lSGVpZ2h0OmNhc2Ugby5Ub2tlblR5cGUubGV0dGVyU3BhY2luZzpjYXNlIG8uVG9rZW5UeXBlLnBhcmFncmFwaFNwYWNpbmc6Y2FzZSBvLlRva2VuVHlwZS5ib3JkZXJXaWR0aDpjYXNlIG8uVG9rZW5UeXBlLnJhZGl1czpjYXNlIG8uVG9rZW5UeXBlLmR1cmF0aW9uOmNhc2Ugby5Ub2tlblR5cGUuekluZGV4OnJldHVybiB0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5zaGFkb3c6cmV0dXJuIHRoaXMuc2hhZG93VG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtjYXNlIG8uVG9rZW5UeXBlLmZvbnRXZWlnaHQ6Y2FzZSBvLlRva2VuVHlwZS5mb250RmFtaWx5OmNhc2Ugby5Ub2tlblR5cGUucHJvZHVjdENvcHk6Y2FzZSBvLlRva2VuVHlwZS5zdHJpbmc6cmV0dXJuIHRoaXMuc3RyaW5nVG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtjYXNlIG8uVG9rZW5UeXBlLnRleHRDYXNlOmNhc2Ugby5Ub2tlblR5cGUudGV4dERlY29yYXRpb246Y2FzZSBvLlRva2VuVHlwZS52aXNpYmlsaXR5OnJldHVybiB0aGlzLm9wdGlvblRva2VuVmFsdWVUb0NTUyhlLnZhbHVlLHIsdCk7Y2FzZSBvLlRva2VuVHlwZS5ibHVyOnJldHVybiB0aGlzLmJsdXJUb2tlblZhbHVlVG9DU1MoZS52YWx1ZSxyLHQpO2Nhc2Ugby5Ub2tlblR5cGUudHlwb2dyYXBoeTpyZXR1cm4gdGhpcy50eXBvZ3JhcGh5VG9rZW5WYWx1ZVRvQ1NTKGUudmFsdWUscix0KTtkZWZhdWx0OnRocm93IG5ldyBvLlVucmVhY2hhYmxlQ2FzZUVycm9yKGUudG9rZW5UeXBlLFwiVW5zdXBwb3J0ZWQgdG9rZW4gdHlwZSBmb3IgdHJhbnNmb3JtYXRpb24gdG8gQ1NTOlwiKX19c3RhdGljIGNvbG9yVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtyZXR1cm4gbi5Db2xvckhlbHBlci5mb3JtYXR0ZWRDb2xvck9yVmFyaWFibGVOYW1lKGUscix0KX1zdGF0aWMgYm9yZGVyVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO2lmKG8pcmV0dXJuIHQudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pO2NvbnN0IG49dGhpcy5kaW1lbnNpb25Ub2tlblZhbHVlVG9DU1MoZS53aWR0aCxyLHQpLHM9dGhpcy5ib3JkZXJTdHlsZVRvQ1NTKGUuc3R5bGUpLGk9dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCk7cmV0dXJuIHRoaXMuYm9yZGVyUG9zaXRpb25Ub0NTUyhlLnBvc2l0aW9uKSxgJHtufSAke3N9ICR7aX1gfXN0YXRpYyBncmFkaWVudFRva2VuVmFsdWVUb0NTUyhlLHIsdCl7cmV0dXJuIGUubWFwKChlPT50aGlzLmdyYWRpZW50TGF5ZXJUb0NTUyhlLHIsdCkpKS5qb2luKFwiLCBcIil9c3RhdGljIGdyYWRpZW50TGF5ZXJUb0NTUyhlLHIsdCl7Y29uc3Qgcz0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtpZihzKXJldHVybiB0LnRva2VuVG9WYXJpYWJsZVJlZihzKTtsZXQgaT1cIlwiO3N3aXRjaChlLnR5cGUpe2Nhc2Ugby5HcmFkaWVudFR5cGUubGluZWFyOmk9XCJsaW5lYXItZ3JhZGllbnQoMGRlZywgXCI7YnJlYWs7Y2FzZSBvLkdyYWRpZW50VHlwZS5yYWRpYWw6aT1cInJhZGlhbC1ncmFkaWVudChjaXJjbGUsIFwiO2JyZWFrO2Nhc2Ugby5HcmFkaWVudFR5cGUuYW5ndWxhcjppPVwiY29uaWMtZ3JhZGllbnQoXCI7YnJlYWs7ZGVmYXVsdDppPVwibGluZWFyLWdyYWRpZW50KDBkZWcsIFwifXJldHVybmAke2l9JHtlLnN0b3BzLm1hcCgoZT0+YCR7dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCl9ICR7bi5Db2xvckhlbHBlci5yb3VuZFRvRGVjaW1hbHMoMTAwKmUucG9zaXRpb24sdC5kZWNpbWFscyl9JWApKS5qb2luKFwiLCBcIil9KWB9c3RhdGljIGRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLHIsdCl7Y29uc3Qgbz0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtyZXR1cm4gbz90LnRva2VuVG9WYXJpYWJsZVJlZihvKTpgJHtuLkNvbG9ySGVscGVyLnJvdW5kVG9EZWNpbWFscyhlLm1lYXN1cmUsdC5kZWNpbWFscyl9JHt0aGlzLnVuaXRUb0NTUyhlLnVuaXQpfWB9c3RhdGljIHNoYWRvd1Rva2VuVmFsdWVUb0NTUyhlLHIsdCl7cmV0dXJuIGUubWFwKChlPT50aGlzLnNoYWRvd0xheWVyVG9DU1MoZSxyLHQpKSkuam9pbihcIiwgXCIpfXN0YXRpYyBzaGFkb3dMYXllclRvQ1NTKGUscix0KXtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBuP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG4pOmAke2UudHlwZT09PW8uU2hhZG93VHlwZS5pbm5lcj9cImluc2V0IFwiOlwiXCJ9JHtlLnh9cHggJHtlLnl9cHggJHtlLnJhZGl1c31weCAke2Uuc3ByZWFkfXB4ICR7dGhpcy5jb2xvclRva2VuVmFsdWVUb0NTUyhlLmNvbG9yLHIsdCl9YH1zdGF0aWMgc3RyaW5nVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBvP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pOmBcIiR7ZS50ZXh0fVwiYH1zdGF0aWMgb3B0aW9uVG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO3JldHVybiBvP3QudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pOmBcIiR7ZS52YWx1ZX1cImB9c3RhdGljIGJsdXJUb2tlblZhbHVlVG9DU1MoZSxyLHQpe2NvbnN0IG89KDAsYS5zdXJlT3B0aW9uYWxSZWZlcmVuY2UpKGUucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyk7cmV0dXJuIG8/dC50b2tlblRvVmFyaWFibGVSZWYobyk6YGJsdXIoJHt0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLnJhZGl1cyxyLHQpfSlgfXN0YXRpYyB0eXBvZ3JhcGh5VG9rZW5WYWx1ZVRvQ1NTKGUscix0KXtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO2lmKG4pcmV0dXJuIHQudG9rZW5Ub1ZhcmlhYmxlUmVmKG4pO2NvbnN0IHM9KDAsYS5zdXJlT3B0aW9uYWxSZWZlcmVuY2UpKGUuZm9udEZhbWlseS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKSxpPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLmZvbnRXZWlnaHQucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyksbD0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS50ZXh0RGVjb3JhdGlvbi5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKSxjPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLnRleHRDYXNlLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpLFQ9cz90LnRva2VuVG9WYXJpYWJsZVJlZihzKTplLmZvbnRGYW1pbHkudGV4dCxwPWk/dC50b2tlblRvVmFyaWFibGVSZWYoaSk6ZS5mb250V2VpZ2h0LnRleHQ7bD90LnRva2VuVG9WYXJpYWJsZVJlZihsKTplLnRleHREZWNvcmF0aW9uLnZhbHVlPT09by5UZXh0RGVjb3JhdGlvbi5vcmlnaW5hbCYmdGhpcy50ZXh0RGVjb3JhdGlvblRvQ1NTKGUudGV4dERlY29yYXRpb24udmFsdWUpLGM/dC50b2tlblRvVmFyaWFibGVSZWYoYyk6ZS50ZXh0Q2FzZS52YWx1ZT09PW8uVGV4dENhc2Uub3JpZ2luYWwmJnRoaXMudGV4dENhc2VUb0NTUyhlLnRleHRDYXNlLnZhbHVlKTtyZXR1cm5gJHtlLnRleHRDYXNlLnZhbHVlPT09by5UZXh0Q2FzZS5zbWFsbENhcHM/XCJzbWFsbC1jYXBzIFwiOlwiXCJ9JHtpP3A6YFwiJHtwfVwiYH0gJHt0aGlzLmRpbWVuc2lvblRva2VuVmFsdWVUb0NTUyhlLmZvbnRTaXplLHIsdCl9LyR7dGhpcy5kaW1lbnNpb25Ub2tlblZhbHVlVG9DU1MoZS5saW5lSGVpZ2h0LHIsdCl9ICR7cz9UOmBcIiR7VH1cImB9YH1zdGF0aWMgYm9yZGVyU3R5bGVUb0NTUyhlKXtzd2l0Y2goZSl7Y2FzZSBvLkJvcmRlclN0eWxlLmRhc2hlZDpyZXR1cm5cImRhc2hlZFwiO2Nhc2Ugby5Cb3JkZXJTdHlsZS5kb3R0ZWQ6cmV0dXJuXCJkb3R0ZWRcIjtjYXNlIG8uQm9yZGVyU3R5bGUuc29saWQ6cmV0dXJuXCJzb2xpZFwiO2Nhc2Ugby5Cb3JkZXJTdHlsZS5ncm9vdmU6cmV0dXJuXCJncm9vdmVcIjtkZWZhdWx0OnJldHVyblwic29saWRcIn19c3RhdGljIGJvcmRlclBvc2l0aW9uVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5Cb3JkZXJQb3NpdGlvbi5jZW50ZXI6cmV0dXJuXCJjZW50ZXJcIjtjYXNlIG8uQm9yZGVyUG9zaXRpb24uaW5zaWRlOnJldHVyblwiaW5zaWRlXCI7Y2FzZSBvLkJvcmRlclBvc2l0aW9uLm91dHNpZGU6ZGVmYXVsdDpyZXR1cm5cIm91dHNpZGVcIn19c3RhdGljIHVuaXRUb0NTUyhlKXtzd2l0Y2goZSl7Y2FzZSBvLlVuaXQucGVyY2VudDpyZXR1cm5cIiVcIjtjYXNlIG8uVW5pdC5waXhlbHM6cmV0dXJuXCJweFwiO2Nhc2Ugby5Vbml0LnJlbTpyZXR1cm5cInJlbVwiO2Nhc2Ugby5Vbml0LnJhdzpyZXR1cm5cIlwiO2Nhc2Ugby5Vbml0Lm1zOnJldHVyblwibXNcIjtkZWZhdWx0OnJldHVyblwicHhcIn19c3RhdGljIHRleHRDYXNlVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5UZXh0Q2FzZS5vcmlnaW5hbDpyZXR1cm5cIm5vbmVcIjtjYXNlIG8uVGV4dENhc2UudXBwZXI6cmV0dXJuXCJ1cHBlcmNhc2VcIjtjYXNlIG8uVGV4dENhc2UubG93ZXI6cmV0dXJuXCJsb3dlcmNhc2VcIjtjYXNlIG8uVGV4dENhc2UuY2FtZWw6Y2FzZSBvLlRleHRDYXNlLnNtYWxsQ2FwczpyZXR1cm5cImNhcGl0YWxpemVcIn19c3RhdGljIHRleHREZWNvcmF0aW9uVG9DU1MoZSl7c3dpdGNoKGUpe2Nhc2Ugby5UZXh0RGVjb3JhdGlvbi5vcmlnaW5hbDpyZXR1cm5cIm5vbmVcIjtjYXNlIG8uVGV4dERlY29yYXRpb24udW5kZXJsaW5lOnJldHVyblwidW5kZXJsaW5lXCI7Y2FzZSBvLlRleHREZWNvcmF0aW9uLnN0cmlrZXRocm91Z2g6cmV0dXJuXCJsaW5lLXRocm91Z2hcIn19fX0sOTUyOihlLHIsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLkNvbG9ySGVscGVyPXZvaWQgMDtjb25zdCBvPXQoOTg5KSxhPXQoNzYxKTtjbGFzcyBue3N0YXRpYyBmb3JtYXR0ZWRDb2xvck9yVmFyaWFibGVOYW1lKGUscix0KXtsZXQgbixzLGk7Y29uc3QgbD0oMCxhLnN1cmVPcHRpb25hbFJlZmVyZW5jZSkoZS5yZWZlcmVuY2VkVG9rZW5JZCxyLHQuYWxsb3dSZWZlcmVuY2VzKTtpZihsKW49dC50b2tlblRvVmFyaWFibGVSZWYobCk7ZWxzZXtjb25zdCBvPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLmNvbG9yLnJlZmVyZW5jZWRUb2tlbklkLHIsdC5hbGxvd1JlZmVyZW5jZXMpO28mJihzPXQudG9rZW5Ub1ZhcmlhYmxlUmVmKG8pKTtjb25zdCBuPSgwLGEuc3VyZU9wdGlvbmFsUmVmZXJlbmNlKShlLm9wYWNpdHkucmVmZXJlbmNlZFRva2VuSWQscix0LmFsbG93UmVmZXJlbmNlcyk7biYmKGk9dC50b2tlblRvVmFyaWFibGVSZWYobikpfWlmKG4pcmV0dXJuIG47aWYoIW4mJiFzJiYhaSlyZXR1cm4gdGhpcy5mb3JtYXR0ZWRDb2xvcihlLHQuY29sb3JGb3JtYXQsdC5kZWNpbWFscyk7c3dpdGNoKHQuY29sb3JGb3JtYXQpe2Nhc2Ugby5Db2xvckZvcm1hdC5yZ2I6Y2FzZSBvLkNvbG9yRm9ybWF0LnJnYmE6Y2FzZSBvLkNvbG9yRm9ybWF0LnNtYXJ0UmdiYTpyZXR1cm4gdGhpcy5jb2xvclRvUmdiKHQuY29sb3JGb3JtYXQsdGhpcy5ub3JtYWxpemVkSW50Q29sb3IoZSksZS5vcGFjaXR5Lm1lYXN1cmUsdC5kZWNpbWFscyxzLGkpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuZm9ybWF0dGVkQ29sb3IoZSx0LmNvbG9yRm9ybWF0LHQuZGVjaW1hbHMpfX1zdGF0aWMgZm9ybWF0dGVkQ29sb3IoZSxyLHQ9Myl7c3dpdGNoKHIpe2Nhc2Ugby5Db2xvckZvcm1hdC5oZXg2OmNhc2Ugby5Db2xvckZvcm1hdC5oZXg4OmNhc2Ugby5Db2xvckZvcm1hdC5oYXNoSGV4NjpjYXNlIG8uQ29sb3JGb3JtYXQuaGFzaEhleDg6Y2FzZSBvLkNvbG9yRm9ybWF0LnNtYXJ0SGV4OmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydEhhc2hIZXg6cmV0dXJuIHRoaXMuY29sb3JUb0hleChyLHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlKTtjYXNlIG8uQ29sb3JGb3JtYXQucmdiOmNhc2Ugby5Db2xvckZvcm1hdC5yZ2JhOmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydFJnYmE6cmV0dXJuIHRoaXMuY29sb3JUb1JnYihyLHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlLHQsbnVsbCxudWxsKTtjYXNlIG8uQ29sb3JGb3JtYXQuaHNsOmNhc2Ugby5Db2xvckZvcm1hdC5oc2xhOmNhc2Ugby5Db2xvckZvcm1hdC5zbWFydEhzbGE6cmV0dXJuIHRoaXMuY29sb3JUb0hzbChyLHRoaXMubm9ybWFsaXplZEZyYWN0aW9uYWxDb2xvcihlKSxlLm9wYWNpdHkubWVhc3VyZSx0KTtjYXNlIG8uQ29sb3JGb3JtYXQuc21hcnRVSUNvbG9yOnJldHVybiB0aGlzLmNvbG9yVG9VSUNvbG9yKHRoaXMubm9ybWFsaXplZEludENvbG9yKGUpLGUub3BhY2l0eS5tZWFzdXJlLHQpfX1zdGF0aWMgY29sb3JUb1JnYihlLHIsdCxhLG4scyl7bGV0IGk7cmV0dXJuIGk9ZT09PW8uQ29sb3JGb3JtYXQucmdiYXx8ZT09PW8uQ29sb3JGb3JtYXQuc21hcnRSZ2JhJiZ0PDE/YHJnYmEoJHtufHxgJHtyLnJ9LCAke3IuZ30sICR7ci5ifWB9LCAke3N8fHRoaXMucm91bmRUb0RlY2ltYWxzKHQsYSl9KWA6YHJnYigke258fGAke3Iucn0sICR7ci5nfSwgJHtyLmJ9YH0pYCxpfXN0YXRpYyBjb2xvclRvSGV4KGUscix0KXtsZXQgYT1gJHt0aGlzLnBIZXgoci5yKX0ke3RoaXMucEhleChyLmcpfSR7dGhpcy5wSGV4KHIuYil9YDtyZXR1cm4oZT09PW8uQ29sb3JGb3JtYXQuaGV4OHx8ZT09PW8uQ29sb3JGb3JtYXQuaGFzaEhleDh8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SGV4JiZ0PDF8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SGFzaEhleCYmdDwxKSYmKGErPWAke3RoaXMucEhleChNYXRoLnJvdW5kKDI1NSp0KSl9YCksZSE9PW8uQ29sb3JGb3JtYXQuaGFzaEhleDYmJmUhPT1vLkNvbG9yRm9ybWF0Lmhhc2hIZXg4JiZlIT09by5Db2xvckZvcm1hdC5zbWFydEhhc2hIZXh8fChhPWAjJHthfWApLGF9c3RhdGljIGNvbG9yVG9Ic2woZSxyLHQsYSl7Y29uc3Qgbj1NYXRoLm1heChyLnIsci5nLHIuYikscz1NYXRoLm1pbihyLnIsci5nLHIuYik7bGV0IGksbCxjLFQ9KG4rcykvMjtpZihuPT09cylpPWw9MDtlbHNle2NvbnN0IGU9bi1zO2w9VD4uNT9lLygyLW4tcyk6ZS8obitzKSxuPT09ci5yP2k9KHIuZy1yLmIpL2UrKHIuZzxyLmI/NjowKTpuPT09ci5nP2k9KHIuYi1yLnIpL2UrMjpuPT09ci5iJiYoaT0oci5yLXIuZykvZSs0KSxpLz02fXJldHVybiBjPWU9PT1vLkNvbG9yRm9ybWF0LmhzbGF8fGU9PT1vLkNvbG9yRm9ybWF0LnNtYXJ0SHNsYSYmdDwxP2Boc2xhKCR7TWF0aC5yb3VuZCgzNjAqaSl9JSwgJHtNYXRoLnJvdW5kKDEwMCpsKX0lLCAke01hdGgucm91bmQoMTAwKlQpfSUsICR7dGhpcy5yb3VuZFRvRGVjaW1hbHModCxhKX0pYDpgaHNsKCR7TWF0aC5yb3VuZCgzNjAqaSl9JSwgJHtNYXRoLnJvdW5kKDEwMCpsKX0lLCAke01hdGgucm91bmQoMTAwKlQpfSUpYCxjfXN0YXRpYyBjb2xvclRvVUlDb2xvcihlLHIsdD0zKXtsZXQgbz1gVUlDb2xvcihyZ2I6IDB4JHt0aGlzLnBIZXgoZS5yKX0ke3RoaXMucEhleChlLmcpfSR7dGhpcy5wSGV4KGUuYil9KWA7cmV0dXJuIHI8MSYmKG8rPWAud2l0aEFscGhhQ29tcG9uZW50KCR7cn0pYCksb31zdGF0aWMgbm9ybWFsaXplZEludENvbG9yKGUpe3JldHVybntyOk1hdGgucm91bmQoZS5jb2xvci5yKSxnOk1hdGgucm91bmQoZS5jb2xvci5nKSxiOk1hdGgucm91bmQoZS5jb2xvci5iKX19c3RhdGljIG5vcm1hbGl6ZWRGcmFjdGlvbmFsQ29sb3IoZSxyPTMpe3JldHVybntyOnRoaXMucm91bmRUb0RlY2ltYWxzKGUuY29sb3Iuci8yNTUsciksZzpuLnJvdW5kVG9EZWNpbWFscyhlLmNvbG9yLmcvMjU1LHIpLGI6bi5yb3VuZFRvRGVjaW1hbHMoZS5jb2xvci5iLzI1NSxyKX19c3RhdGljIHJvdW5kVG9EZWNpbWFscyhlLHIpe2NvbnN0IHQ9TWF0aC5wb3coMTAsciksbz1NYXRoLnJvdW5kKGUqdCkvdDtyZXR1cm4gcGFyc2VGbG9hdChvLnRvRml4ZWQocikpfXN0YXRpYyBwSGV4KGUpe3JldHVybiBlLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKX19ci5Db2xvckhlbHBlcj1ufSw0NTM6KGUscix0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuTmFtaW5nSGVscGVyPXZvaWQgMDtjb25zdCBvPXQoMTEwKSxhPXQoNTQ1KTtjbGFzcyBue3N0YXRpYyBjb2RlU2FmZVZhcmlhYmxlTmFtZUZvclRva2VuKGUscix0LG8pe2xldCBhPVtdO3JldHVybiB0JiYoYT1bLi4udC5wYXRoXSx0LmlzUm9vdHx8YS5wdXNoKHQubmFtZSkpLGEucHVzaChlLm5hbWUpLG8mJm8ubGVuZ3RoPjAmJmEudW5zaGlmdChvKSxuLmNvZGVTYWZlVmFyaWFibGVOYW1lKGEscil9c3RhdGljIGNvZGVTYWZlVmFyaWFibGVOYW1lKGUscil7bGV0IHQ9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplLmpvaW4oXCIgXCIpO3N3aXRjaCh0PXQucmVwbGFjZUFsbCgvW15hLXpBLVowLTlfLV0vZyxcIl9cIikscil7Y2FzZSBhLlN0cmluZ0Nhc2UuY2FtZWxDYXNlOnQ9KDAsby5jYW1lbENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmNhcGl0YWxDYXNlOnQ9KDAsby5jYXBpdGFsQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UuY29uc3RhbnRDYXNlOnQ9KDAsby5jb25zdGFudENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmRvdENhc2U6dD0oMCxvLmRvdENhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLmhlYWRlckNhc2U6dD0oMCxvLmhlYWRlckNhc2UpKHQpO2JyZWFrO2Nhc2UgYS5TdHJpbmdDYXNlLm5vQ2FzZTp0PSgwLG8ubm9DYXNlKSh0KTticmVhaztjYXNlIGEuU3RyaW5nQ2FzZS5wYXJhbUNhc2U6dD0oMCxvLnBhcmFtQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UucGFzY2FsQ2FzZTp0PSgwLG8ucGFzY2FsQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2UucGF0aENhc2U6dD0oMCxvLnBhdGhDYXNlKSh0KTticmVhaztjYXNlIGEuU3RyaW5nQ2FzZS5zZW50ZW5jZUNhc2U6dD0oMCxvLnNlbnRlbmNlQ2FzZSkodCk7YnJlYWs7Y2FzZSBhLlN0cmluZ0Nhc2Uuc25ha2VDYXNlOnQ9KDAsby5zbmFrZUNhc2UpKHQpfXJldHVybiByIT09YS5TdHJpbmdDYXNlLnNuYWtlQ2FzZSYmciE9PWEuU3RyaW5nQ2FzZS5jb25zdGFudENhc2UmJih0PXQucmVwbGFjZUFsbChcIl9cIixcIlwiKSksdC5tYXRjaCgvXlteYS16QS1aXS8pJiYodD1cIl9cIit0KSx0fXN0YXRpYyBuYW1lQXNDU1NWYXJSZWZlcmVuY2UoZSl7cmV0dXJuYHZhcigtLSR7ZX0pYH1zdGF0aWMgbmFtZUFzQ1NTVmFyRGVjbGFyYXRpb24oZSl7cmV0dXJuYC0tJHtlfWB9fXIuTmFtaW5nSGVscGVyPW59LDU4OmU9PntlLmV4cG9ydHM9cmVxdWlyZShcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCIpfSwxMTA6ZT0+e2UuZXhwb3J0cz1yZXF1aXJlKFwiY2hhbmdlLWNhc2VcIil9fSxyPXt9O2Z1bmN0aW9uIHQobyl7dmFyIGE9cltvXTtpZih2b2lkIDAhPT1hKXJldHVybiBhLmV4cG9ydHM7dmFyIG49cltvXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbb10obixuLmV4cG9ydHMsdCksbi5leHBvcnRzfXZhciBvPXt9OygoKT0+e3ZhciBlPW87T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5Db2xvckZvcm1hdD1lLlN0cmluZ0Nhc2U9ZS5JdGVyYXRvcnM9ZS5DU1NIZWxwZXI9ZS5GaWxlSGVscGVyPWUuQ29sb3JIZWxwZXI9ZS5OYW1pbmdIZWxwZXI9ZS5OZXR3b3JrSGVscGVyPXZvaWQgMDt2YXIgcj10KDExOCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJOZXR3b3JrSGVscGVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHIuTmV0d29ya0hlbHBlcn19KTt2YXIgYT10KDQ1Myk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJOYW1pbmdIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5OYW1pbmdIZWxwZXJ9fSk7dmFyIG49dCg5NTIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQ29sb3JIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5Db2xvckhlbHBlcn19KTt2YXIgcz10KDYxNyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJGaWxlSGVscGVyXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuRmlsZUhlbHBlcn19KTt2YXIgaT10KDc3MSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJDU1NIZWxwZXJcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaS5DU1NIZWxwZXJ9fSk7dmFyIGw9dCg2MzkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiSXRlcmF0b3JzXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGwuSXRlcmF0b3JzfX0pO3ZhciBjPXQoNTQ1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlN0cmluZ0Nhc2VcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYy5TdHJpbmdDYXNlfX0pO3ZhciBUPXQoOTg5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkNvbG9yRm9ybWF0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFQuQ29sb3JGb3JtYXR9fSl9KSgpO3ZhciBhPWV4cG9ydHM7Zm9yKHZhciBuIGluIG8pYVtuXT1vW25dO28uX19lc01vZHVsZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17Mjc1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzSW1hZ2VSZWZUeXBlPXZvaWQgMCwobz10LkRvY3NJbWFnZVJlZlR5cGV8fCh0LkRvY3NJbWFnZVJlZlR5cGU9e30pKS51cGxvYWQ9XCJVcGxvYWRcIixvLmFzc2V0PVwiQXNzZXRcIixvLmZpZ21hRnJhbWU9XCJGaWdtYUZyYW1lXCJ9LDI2OTU6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NMaW5rUmVmVHlwZT12b2lkIDAsKG89dC5Eb2NzTGlua1JlZlR5cGV8fCh0LkRvY3NMaW5rUmVmVHlwZT17fSkpLnBhZ2U9XCJQYWdlXCIsby5wYWdlSGVhZGluZz1cInBhZ2VIZWFkaW5nXCIsby5ncm91cD1cIkdyb3VwXCIsby51cmw9XCJ1cmxcIn0sMzQ3NjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1Nob3J0Y3V0PXQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1Nob3J0Y3V0VHlwZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5leHRlcm5hbD1cIkV4dGVybmFsXCIsZS5pbnRlcm5hbD1cIkludGVybmFsXCJ9KG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlPXt9KSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXQ9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dmFyIHQ7ZS51cmw/dGhpcy50eXBlPW8uZXh0ZXJuYWw6dGhpcy50eXBlPW8uaW50ZXJuYWwsdGhpcy50aXRsZT10aGlzLnNob3J0Y3V0VGl0bGVGcm9tTW9kZWwoZSx0aGlzLnR5cGUpLHRoaXMuZGVzY3JpcHRpb249dGhpcy5zaG9ydGN1dERlc2NyaXB0aW9uRnJvbU1vZGVsKGUsdGhpcy50eXBlKSx0aGlzLnByZXZpZXdVcmw9dGhpcy5zaG9ydGN1dFByZXZpZXdVcmxGcm9tTW9kZWwoZSksdGhpcy50eXBlPT09by5pbnRlcm5hbCYmKG51bGw9PT0odD1lLmRvY3VtZW50YXRpb25JdGVtUHJldmlldyl8fHZvaWQgMD09PXQ/dm9pZCAwOnQudmFsaWQpJiZlLmRvY3VtZW50YXRpb25JdGVtSWQ/dGhpcy5pbnRlcm5hbElkPWUuZG9jdW1lbnRhdGlvbkl0ZW1JZDoodGhpcy5pbnRlcm5hbElkPW51bGwsdGhpcy50eXBlPT09by5leHRlcm5hbCYmZS51cmw/dGhpcy5leHRlcm5hbFVybD1lLnVybDp0aGlzLmV4dGVybmFsVXJsPW51bGwpfXNob3J0Y3V0VGl0bGVGcm9tTW9kZWwoZSx0KXt2YXIgcixuLGksYSxjO2xldCBsPW51bGw7cmV0dXJuIGUudGl0bGUmJmUudGl0bGUudHJpbSgpLmxlbmd0aD4wP2w9ZS50aXRsZTp0PT09by5pbnRlcm5hbD9sPW51bGwhPT0obj1udWxsPT09KHI9ZS5kb2N1bWVudGF0aW9uSXRlbVByZXZpZXcpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnRpdGxlKSYmdm9pZCAwIT09bj9uOm51bGw6dD09PW8uZXh0ZXJuYWwmJihsPW51bGwhPT0oYz1udWxsIT09KGE9bnVsbD09PShpPWUudXJsUHJldmlldyl8fHZvaWQgMD09PWk/dm9pZCAwOmkudGl0bGUpJiZ2b2lkIDAhPT1hP2E6ZS51cmwpJiZ2b2lkIDAhPT1jP2M6bnVsbCksbCYmMCE9PWwudHJpbSgpLmxlbmd0aD9sOm51bGx9c2hvcnRjdXREZXNjcmlwdGlvbkZyb21Nb2RlbChlLHQpe3ZhciByO2xldCBuPW51bGw7cmV0dXJuIGUuZGVzY3JpcHRpb24mJmUuZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aD4wP249ZS5kZXNjcmlwdGlvbjp0PT09by5leHRlcm5hbCYmKG49bnVsbD09PShyPWUudXJsUHJldmlldyl8fHZvaWQgMD09PXI/dm9pZCAwOnIuZGVzY3JpcHRpb24pLG4mJjAhPT1uLnRyaW0oKS5sZW5ndGg/bjpudWxsfXNob3J0Y3V0UHJldmlld1VybEZyb21Nb2RlbChlKXt2YXIgdCxvLHIsbixpO3JldHVybiBudWxsIT09KGk9bnVsbCE9PShyPW51bGwhPT0odD1lLmFzc2V0VXJsKSYmdm9pZCAwIT09dD90Om51bGw9PT0obz1lLmFzc2V0KXx8dm9pZCAwPT09bz92b2lkIDA6by51cmwpJiZ2b2lkIDAhPT1yP3I6bnVsbD09PShuPWUudXJsUHJldmlldyl8fHZvaWQgMD09PW4/dm9pZCAwOm4udGh1bWJuYWlsVXJsKSYmdm9pZCAwIT09aT9pOm51bGx9fX0sNDIyMjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQWxpZ25tZW50PXZvaWQgMCwobz10LkFsaWdubWVudHx8KHQuQWxpZ25tZW50PXt9KSkubGVmdD1cIkxlZnRcIixvLmNlbnRlcj1cIkNlbnRlclwiLG8uc3RyZXRjaD1cIlN0cmV0Y2hcIn0sMTMzNDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQXNzZXRGb3JtYXQ9dm9pZCAwLChvPXQuQXNzZXRGb3JtYXR8fCh0LkFzc2V0Rm9ybWF0PXt9KSkucG5nPVwicG5nXCIsby5wZGY9XCJwZGZcIixvLnN2Zz1cInN2Z1wifSwxOTQwOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Bc3NldFNjYWxlPXZvaWQgMCwobz10LkFzc2V0U2NhbGV8fCh0LkFzc2V0U2NhbGU9e30pKS54MT1cIngxXCIsby54Mj1cIngyXCIsby54Mz1cIngzXCIsby54ND1cIng0XCJ9LDk1OTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQXNzZXRTY2FsZVR5cGU9dm9pZCAwLChvPXQuQXNzZXRTY2FsZVR5cGV8fCh0LkFzc2V0U2NhbGVUeXBlPXt9KSkuYXNwZWN0RmlsbD1cIkFzcGVjdEZpbGxcIixvLmFzcGVjdEZpdD1cIkFzcGVjdEZpdFwifSw5MjU3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5CbHVyVHlwZT12b2lkIDAsKG89dC5CbHVyVHlwZXx8KHQuQmx1clR5cGU9e30pKS5sYXllcj1cIkxheWVyXCIsby5iYWNrZ3JvdW5kPVwiQmFja2dyb3VuZFwifSw2Njc1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5BTExfQk9SREVSX1BPU0lUSU9OUz10LkJvcmRlclBvc2l0aW9uPXZvaWQgMCxmdW5jdGlvbihlKXtlLmluc2lkZT1cIkluc2lkZVwiLGUuY2VudGVyPVwiQ2VudGVyXCIsZS5vdXRzaWRlPVwiT3V0c2lkZVwifShvPXQuQm9yZGVyUG9zaXRpb258fCh0LkJvcmRlclBvc2l0aW9uPXt9KSksdC5BTExfQk9SREVSX1BPU0lUSU9OUz1bby5pbnNpZGUsby5jZW50ZXIsby5vdXRzaWRlXX0sNjcwMTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQUxMX0JPUkRFUl9TVFlMRVM9dC5Cb3JkZXJTdHlsZT12b2lkIDAsZnVuY3Rpb24oZSl7ZS5kYXNoZWQ9XCJEYXNoZWRcIixlLmRvdHRlZD1cIkRvdHRlZFwiLGUuc29saWQ9XCJTb2xpZFwiLGUuZ3Jvb3ZlPVwiR3Jvb3ZlXCJ9KG89dC5Cb3JkZXJTdHlsZXx8KHQuQm9yZGVyU3R5bGU9e30pKSx0LkFMTF9CT1JERVJfU1RZTEVTPVtvLmRhc2hlZCxvLmRvdHRlZCxvLnNvbGlkLG8uZ3Jvb3ZlXX0sODI5OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5JbXBvcnRXYXJuaW5nVHlwZT12b2lkIDAsKG89dC5JbXBvcnRXYXJuaW5nVHlwZXx8KHQuSW1wb3J0V2FybmluZ1R5cGU9e30pKS5VbnN1cHBvcnRlZEZpbGw9XCJVbnN1cHBvcnRlZEZpbGxcIixvLlVuc3VwcG9ydGVkU3Ryb2tlPVwiVW5zdXBwb3J0ZWRTdHJva2VcIixvLlVuc3VwcG9ydGVkRWZmZWN0PVwiVW5zdXBwb3J0ZWRFZmZlY3RcIixvLlN0eWxlTm90QXBwbGllZD1cIlN0eWxlTm90QXBwbGllZFwiLG8uTm9QdWJsaXNoZWRTdHlsZXM9XCJOb1B1Ymxpc2hlZFN0eWxlc1wiLG8uTm9QdWJsaXNoZWRDb21wb25lbnRzPVwiTm9QdWJsaXNoZWRDb21wb25lbnRzXCIsby5Ob1B1Ymxpc2hlZEFzc2V0cz1cIk5vUHVibGlzaGVkQXNzZXRzXCIsby5Ob1ZlcnNpb25Gb3VuZD1cIk5vVmVyc2lvbkZvdW5kXCIsby5Db21wb25lbnRIYXNOb1RodW1ibmFpbD1cIkNvbXBvbmVudEhhc05vVGh1bWJuYWlsXCIsby5EdXBsaWNhdGVJbXBvcnRlZFN0eWxlSWQ9XCJEdXBsaWNhdGVJbXBvcnRlZFN0eWxlSWRcIixvLkR1cGxpY2F0ZUltcG9ydGVkU3R5bGVQYXRoPVwiRHVwbGljYXRlSW1wb3J0ZWRTdHlsZVBhdGhcIixvLk5vUHVibGlzaGVkRWxlbWVudHM9XCJOb1B1Ymxpc2hlZEVsZW1lbnRzXCJ9LDM2MTE6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkN1c3RvbURvbWFpbkVycm9yQ29kZT12b2lkIDAsKG89dC5DdXN0b21Eb21haW5FcnJvckNvZGV8fCh0LkN1c3RvbURvbWFpbkVycm9yQ29kZT17fSkpLmdlbmVyYWxFcnJvcj1cIkdlbmVyYWxFcnJvclwiLG8uZG5zTm90Q29uZmlndXJlZD1cIkROU05vdENvbmZpZ3VyZWRcIixvLm1haW50ZW5hbmNlPVwiTWFpbnRlbmFuY2VcIn0sNjUzMDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuQ3VzdG9tRG9tYWluU3RhdGU9dm9pZCAwLChvPXQuQ3VzdG9tRG9tYWluU3RhdGV8fCh0LkN1c3RvbURvbWFpblN0YXRlPXt9KSkuaW5pdGlhbD1cIkluaXRpYWxcIixvLmRvbWFpblNldHVwSW5Qcm9ncmVzcz1cIkRvbWFpblNldHVwSW5Qcm9ncmVzc1wiLG8uZG9tYWluU2V0dXBGYWlsZWQ9XCJEb21haW5TZXR1cEZhaWxlZFwiLG8uZG9tYWluU2V0dXBzU3VjY2VzPVwiRG9tYWluU2V0dXBTdWNjZXNzXCIsby5zc2xTZXR1cEluUHJvZ3Jlc3M9XCJTU0xTZXR1cEluUHJvZ3Jlc3NcIixvLnNzbFNldHVwRmFpbGVkPVwiU1NMU2V0dXBGYWlsZWRcIixvLnNzbFNldHVwU3VjY2Vzcz1cIlNTTFNldHVwU3VjY2Vzc1wifSw0OTM0OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tCZWhhdmlvckRhdGFUeXBlPXZvaWQgMCwobz10LkRvY3NCbG9ja0JlaGF2aW9yRGF0YVR5cGV8fCh0LkRvY3NCbG9ja0JlaGF2aW9yRGF0YVR5cGU9e30pKS5pdGVtPVwiSXRlbVwiLG8udG9rZW49XCJUb2tlblwiLG8uYXNzZXQ9XCJBc3NldFwiLG8uY29tcG9uZW50PVwiQ29tcG9uZW50XCJ9LDgwODE6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0JlaGF2aW9yU2VsZWN0aW9uVHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tCZWhhdmlvclNlbGVjdGlvblR5cGV8fCh0LkRvY3NCbG9ja0JlaGF2aW9yU2VsZWN0aW9uVHlwZT17fSkpLmVudGl0eT1cIkVudGl0eVwiLG8uZ3JvdXA9XCJHcm91cFwiLG8uZW50aXR5QW5kR3JvdXA9XCJFbnRpdHlBbmRHcm91cFwifSw5NTM0OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW89dm9pZCAwLChvPXQuRG9jc0Jsb2NrSW1hZ2VQcm9wZXJ0eUFzcGVjdFJhdGlvfHwodC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW89e30pKS5zcXVhcmU9XCJTcXVhcmVcIixvLmxhbmRzY2FwZT1cIkxhbmRzY2FwZVwiLG8ucG9ydHJhaXQ9XCJQb3J0cmFpdFwiLG8ud2lkZT1cIldpZGVcIn0sMTA0MzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGV8fCh0LkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlPXt9KSkudG9rZW49XCJUb2tlblwiLG8udG9rZW5Hcm91cD1cIlRva2VuR3JvdXBcIixvLmFzc2V0PVwiQXNzZXRcIixvLmFzc2V0R3JvdXA9XCJBc3NldEdyb3VwXCIsby5jb21wb25lbnQ9XCJDb21wb25lbnRcIixvLmNvbXBvbmVudEdyb3VwPVwiQ29tcG9uZW50R3JvdXBcIn0sMzk0NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGV8fCh0LkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eU9wdGlvblJlbmRlcmluZ1N0eWxlPXt9KSkuc2VnbWVudGVkQ29udHJvbD1cIlNlZ21lbnRlZENvbnRyb2xcIixvLnRvZ2dsZUJ1dHRvbj1cIlRvZ2dsZUJ1dHRvblwiLG8uc2VsZWN0PVwiU2VsZWN0XCIsby5jaGVja2JveD1cIkNoZWNrYm94XCJ9LDQ3NDI6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5UmljaFRleHRTdHlsZXx8KHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5UmljaFRleHRTdHlsZT17fSkpLnRpdGxlMT1cIlRpdGxlMVwiLG8udGl0bGUyPVwiVGl0bGUyXCIsby50aXRsZTM9XCJUaXRsZTNcIixvLnRpdGxlND1cIlRpdGxlNFwiLG8udGl0bGU1PVwiVGl0bGU1XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8ub2w9XCJPTFwiLG8udWw9XCJVTFwifSw3ODI1OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VGV4dFN0eWxlfHwodC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGU9e30pKS5zbWFsbD1cIlNtYWxsXCIsby5yZWd1bGFyPVwiUmVndWxhclwiLG8uYm9sZD1cIkJvbGRcIn0sNjc1MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlfHwodC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlPXt9KSkucmljaFRleHQ9XCJSaWNoVGV4dFwiLG8udGV4dD1cIlRleHRcIixvLmJvb2xlYW49XCJCb29sZWFuXCIsby5udW1iZXI9XCJOdW1iZXJcIixvLnNpbmdsZVNlbGVjdD1cIlNpbmdsZVNlbGVjdFwiLG8ubXVsdGlTZWxlY3Q9XCJNdWx0aVNlbGVjdFwiLG8uaW1hZ2U9XCJJbWFnZVwiLG8udG9rZW49XCJUb2tlblwiLG8udG9rZW5UeXBlPVwiVG9rZW5UeXBlXCIsby50b2tlblByb3BlcnR5PVwiVG9rZW5Qcm9wZXJ0eVwiLG8uY29tcG9uZW50PVwiQ29tcG9uZW50XCIsby5jb21wb25lbnRQcm9wZXJ0eT1cIkNvbXBvbmVudFByb3BlcnR5XCIsby5hc3NldD1cIkFzc2V0XCIsby5hc3NldFByb3BlcnR5PVwiQXNzZXRQcm9wZXJ0eVwiLG8ucGFnZT1cIlBhZ2VcIixvLnBhZ2VQcm9wZXJ0eT1cIlBhZ2VQcm9wZXJ0eVwiLG8uZW1iZWRVUkw9XCJFbWJlZFVSTFwiLG8uZW1iZWRGcmFtZT1cIkVtYmVkRnJhbWVcIixvLm1hcmtkb3duPVwiTWFya2Rvd25cIixvLmNvZGU9XCJDb2RlXCIsby5jb2RlU2FuZGJveD1cIkNvZGVTYW5kYm94XCIsby50YWJsZT1cIlRhYmxlXCIsby5kaXZpZGVyPVwiRGl2aWRlclwiLG8uc3Rvcnlib29rPVwiU3Rvcnlib29rXCJ9LDY3Nzc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0VHlwZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGV8fCh0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0VHlwZT17fSkpLmNvbHVtbj1cIkNvbHVtblwiLG8ucm93PVwiUm93XCJ9LDkyNzk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0V2lkdGg9dm9pZCAwLChvPXQuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRXaWR0aHx8KHQuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRXaWR0aD17fSkpLmMxPVwiMVwiLG8uYzI9XCIyXCIsby5jMz1cIjNcIixvLmM0PVwiNFwiLG8uYzU9XCI1XCIsby5jNj1cIjZcIixvLmM3PVwiN1wiLG8uYzg9XCI4XCIsby5jOT1cIjlcIixvLmMxMD1cIjEwXCIsby5jMTE9XCIxMVwiLG8uYzEyPVwiMTJcIn0sNTI3MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGV8fCh0LkRvY3NCbG9ja09wdGlvblJlbmRlcmluZ1N0eWxlPXt9KSkuc2VnbWVudGVkQ29udHJvbD1cIlNlZ21lbnRlZENvbnRyb2xcIixvLnRvZ2dsZUJ1dHRvbj1cIlRvZ2dsZUJ1dHRvblwiLG8uc2VsZWN0PVwiU2VsZWN0XCIsby5jaGVja2JveD1cIkNoZWNrYm94XCJ9LDMyNzQ6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3NCbG9ja1JpY2hUZXh0UHJvcGVydHlTdHlsZT12b2lkIDAsKG89dC5Eb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGV8fCh0LkRvY3NCbG9ja1JpY2hUZXh0UHJvcGVydHlTdHlsZT17fSkpLnRpdGxlMT1cIlRpdGxlMVwiLG8udGl0bGUyPVwiVGl0bGUyXCIsby50aXRsZTM9XCJUaXRsZTNcIixvLnRpdGxlND1cIlRpdGxlNFwiLG8udGl0bGU1PVwiVGl0bGU1XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8ub2w9XCJPTFwiLG8udWw9XCJVTFwiLG8uZGVmYXVsdD1cIkRlZmF1bHRcIn0sNjAwMTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGU9dm9pZCAwLChvPXQuRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGV8fCh0LkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlPXt9KSkudGl0bGUxPVwiVGl0bGUxXCIsby50aXRsZTI9XCJUaXRsZTJcIixvLnRpdGxlMz1cIlRpdGxlM1wiLG8udGl0bGU0PVwiVGl0bGU0XCIsby50aXRsZTU9XCJUaXRsZTVcIixvLmRlZmF1bHQ9XCJEZWZhdWx0XCIsby5kZWZhdWx0Qm9sZD1cIkRlZmF1bHRCb2xkXCIsby5kZWZhdWx0U2VtaWJvbGQ9XCJEZWZhdWx0U2VtaWJvbGRcIixvLnNtYWxsPVwiU21hbGxcIixvLnNtYWxsQm9sZD1cIlNtYWxsQm9sZFwiLG8uc21hbGxTZW1pYm9sZD1cIlNtYWxsU2VtaWJvbGRcIn0sMTc1NTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3I9dm9pZCAwLChvPXQuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3J8fCh0LkRvY3NFbnRpdHlHcm91cEJlaGF2aW9yPXt9KSkuZ3JvdXA9XCJHcm91cFwiLG8udGFicz1cIlRhYnNcIn0sODI0MDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc0VudGl0eVR5cGU9dm9pZCAwLChvPXQuRG9jc0VudGl0eVR5cGV8fCh0LkRvY3NFbnRpdHlUeXBlPXt9KSkuZ3JvdXA9XCJHcm91cFwiLG8ucGFnZT1cIlBhZ2VcIn0sNDE0MjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jc1NlY3Rpb25UeXBlPXZvaWQgMCwobz10LkRvY3NTZWN0aW9uVHlwZXx8KHQuRG9jc1NlY3Rpb25UeXBlPXt9KSkucGxhaW49XCJQbGFpblwiLG8udGFicz1cIlRhYnNcIn0sNDc4MjooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lDYWxsb3V0VHlwZXx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPXt9KSkuaW5mbz1cIkluZm9cIixvLnN1Y2Nlc3M9XCJTdWNjZXNzXCIsby53YXJuaW5nPVwiV2FybmluZ1wiLG8uZXJyb3I9XCJFcnJvclwifSw4NTQ5OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvcj12b2lkIDAsKG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvcnx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeUdyb3VwQmVoYXZpb3I9e30pKS5ncm91cD1cIkdyb3VwXCIsby50YWJzPVwiVGFic1wifSwxOTMxOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGU9dm9pZCAwLChvPXQuRG9jdW1lbnRhdGlvbkxlZ2FjeUhlYWRpbmdUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGU9e30pKVtvLmgxPTFdPVwiaDFcIixvW28uaDI9Ml09XCJoMlwiLG9bby5oMz0zXT1cImgzXCJ9LDUzNTk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT12b2lkIDAsKG89dC5Eb2N1bWVudGF0aW9uTGVnYWN5SXRlbVR5cGV8fCh0LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT17fSkpLmdyb3VwPVwiR3JvdXBcIixvLnBhZ2U9XCJQYWdlXCJ9LDk0Mzc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQXNzZXRUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQXNzZXRUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZT17fSkpLmltYWdlPVwiaW1hZ2VcIixvLmZpZ21hRnJhbWU9XCJmaWdtYUZyYW1lXCJ9LDQ2NDk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUaGVtZVR5cGU9dm9pZCAwLChvPXQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZXx8KHQuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZT17fSkpLm92ZXJyaWRlPVwiT3ZlcnJpZGVcIixvLmNvbXBhcmlzb249XCJDb21wYXJpc29uXCJ9LDg1NjA6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUeXBlPXZvaWQgMCwobz10LkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUeXBlfHwodC5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVHlwZT17fSkpLnRleHQ9XCJUZXh0XCIsby5oZWFkaW5nPVwiSGVhZGluZ1wiLG8uY29kZT1cIkNvZGVcIixvLnVub3JkZXJlZExpc3Q9XCJVbm9yZGVyZWRMaXN0XCIsby5vcmRlcmVkTGlzdD1cIk9yZGVyZWRMaXN0XCIsby5xdW90ZT1cIlF1b3RlXCIsby5jYWxsb3V0PVwiQ2FsbG91dFwiLG8uZGl2aWRlcj1cIkRpdmlkZXJcIixvLmltYWdlPVwiSW1hZ2VcIixvLnRva2VuPVwiVG9rZW5cIixvLnRva2VuTGlzdD1cIlRva2VuTGlzdFwiLG8udG9rZW5Hcm91cD1cIlRva2VuR3JvdXBcIixvLnNob3J0Y3V0cz1cIlNob3J0Y3V0c1wiLG8ubGluaz1cIkxpbmtcIixvLmZpZ21hRW1iZWQ9XCJGaWdtYUVtYmVkXCIsby55b3V0dWJlRW1iZWQ9XCJZb3V0dWJlRW1iZWRcIixvLnN0b3J5Ym9va0VtYmVkPVwiU3Rvcnlib29rRW1iZWRcIixvLmdlbmVyaWNFbWJlZD1cIkVtYmVkXCIsby5maWdtYUZyYW1lcz1cIkZpZ21hRnJhbWVzXCIsby5jdXN0b209XCJDdXN0b21cIixvLnJlbmRlckNvZGU9XCJSZW5kZXJDb2RlXCIsby5jb21wb25lbnRBc3NldHM9XCJDb21wb25lbnRBc3NldHNcIixvLmNvbHVtbj1cIkNvbHVtblwiLG8uY29sdW1uSXRlbT1cIkNvbHVtbkl0ZW1cIixvLnRhYnM9XCJUYWJzXCIsby50YWJJdGVtPVwiVGFiSXRlbVwiLG8udGFibGU9XCJUYWJsZVwiLG8udGFibGVDZWxsPVwiVGFibGVDZWxsXCIsby50YWJsZVJvdz1cIlRhYmxlUm93XCJ9LDQ5MTQ6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkZyYW1lQWxpZ25tZW50PXZvaWQgMCwobz10LkZyYW1lQWxpZ25tZW50fHwodC5GcmFtZUFsaWdubWVudD17fSkpLmZyYW1lSGVpZ2h0PVwiRnJhbWVIZWlnaHRcIixvLmNlbnRlcj1cIkNlbnRlclwifSw1OTg2OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5GcmFtZUxheW91dD12b2lkIDAsKG89dC5GcmFtZUxheW91dHx8KHQuRnJhbWVMYXlvdXQ9e30pKS5jOD1cIkM4XCIsby5jNz1cIkM3XCIsby5jNj1cIkM2XCIsby5jNT1cIkM1XCIsby5jND1cIkM0XCIsby5jMz1cIkMzXCIsby5jMj1cIkMyXCIsby5jMT1cIkMxXCIsby5jMTc1PVwiQzFfNzVcIn0sNDY2NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuR3JhZGllbnRUeXBlPXZvaWQgMCwobz10LkdyYWRpZW50VHlwZXx8KHQuR3JhZGllbnRUeXBlPXt9KSkubGluZWFyPVwiTGluZWFyXCIsby5yYWRpYWw9XCJSYWRpYWxcIixvLmFuZ3VsYXI9XCJBbmd1bGFyXCJ9LDQzMzY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlJpY2hUZXh0U3BhbkF0dHJpYnV0ZVR5cGU9dm9pZCAwLChvPXQuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZXx8KHQuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZT17fSkpLmJvbGQ9XCJCb2xkXCIsby5pdGFsaWM9XCJJdGFsaWNcIixvLmxpbms9XCJMaW5rXCIsby5zdHJpa2V0aHJvdWdoPVwiU3RyaWtldGhyb3VnaFwiLG8uY29kZT1cIkNvZGVcIn0sNTQ2NzooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuU2hhZG93VHlwZT12b2lkIDAsKG89dC5TaGFkb3dUeXBlfHwodC5TaGFkb3dUeXBlPXt9KSkuZHJvcD1cIkRyb3BcIixvLmlubmVyPVwiSW5uZXJcIn0sMTY5NDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuU291cmNlVHlwZT12b2lkIDAsKG89dC5Tb3VyY2VUeXBlfHwodC5Tb3VyY2VUeXBlPXt9KSkuZmlnbWE9XCJGaWdtYVwiLG8udG9rZW5TdHVkaW89XCJUb2tlblN0dWRpb1wifSwyMDQ3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5UZXh0Q2FzZT12b2lkIDAsKG89dC5UZXh0Q2FzZXx8KHQuVGV4dENhc2U9e30pKS5vcmlnaW5hbD1cIk9yaWdpbmFsXCIsby51cHBlcj1cIlVwcGVyXCIsby5sb3dlcj1cIkxvd2VyXCIsby5jYW1lbD1cIkNhbWVsXCIsby5zbWFsbENhcHM9XCJTbWFsbENhcHNcIn0sNTc4MDooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuVGV4dERlY29yYXRpb249dm9pZCAwLChvPXQuVGV4dERlY29yYXRpb258fCh0LlRleHREZWNvcmF0aW9uPXt9KSkub3JpZ2luYWw9XCJOb25lXCIsby51bmRlcmxpbmU9XCJVbmRlcmxpbmVcIixvLnN0cmlrZXRocm91Z2g9XCJTdHJpa2V0aHJvdWdoXCJ9LDEyNTY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRUX1RPS0VOX1RZUEVTPXQudG9rZW5UeXBlSXNSZWZlcmVuY2FibGU9dC5SRUZFUkVOQ0FCTEVfVE9LRU5fVFlQRVM9dC5SRVBMQUNBQkxFX1RPS0VOX1RZUEVTPXQudG9rZW5UeXBlSXNOb25QdXJlPXQudG9rZW5UeXBlSXNQdXJlPXQuUFVSRV9UT0tFTl9UWVBFUz10LkFMTF9UT0tFTl9UWVBFUz10Lk1TX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz10LlJBV19ESU1FTlNJT05fVE9LRU5fVFlQRVM9dC5ESU1FTlNJT05fVE9LRU5fVFlQRVM9dC5PUFRJT05fVE9LRU5fVFlQRVM9dC5TVFJJTkdfVE9LRU5fVFlQRVM9dC5Ub2tlblR5cGU9dm9pZCAwLGZ1bmN0aW9uKGUpe2UuY29sb3I9XCJDb2xvclwiLGUudHlwb2dyYXBoeT1cIlR5cG9ncmFwaHlcIixlLmRpbWVuc2lvbj1cIkRpbWVuc2lvblwiLGUuc2l6ZT1cIlNpemVcIixlLnNwYWNlPVwiU3BhY2VcIixlLm9wYWNpdHk9XCJPcGFjaXR5XCIsZS5mb250U2l6ZT1cIkZvbnRTaXplXCIsZS5saW5lSGVpZ2h0PVwiTGluZUhlaWdodFwiLGUubGV0dGVyU3BhY2luZz1cIkxldHRlclNwYWNpbmdcIixlLnBhcmFncmFwaFNwYWNpbmc9XCJQYXJhZ3JhcGhTcGFjaW5nXCIsZS5ib3JkZXJXaWR0aD1cIkJvcmRlcldpZHRoXCIsZS5yYWRpdXM9XCJCb3JkZXJSYWRpdXNcIixlLmR1cmF0aW9uPVwiRHVyYXRpb25cIixlLnpJbmRleD1cIlpJbmRleFwiLGUuc2hhZG93PVwiU2hhZG93XCIsZS5ib3JkZXI9XCJCb3JkZXJcIixlLmdyYWRpZW50PVwiR3JhZGllbnRcIixlLnN0cmluZz1cIlN0cmluZ1wiLGUucHJvZHVjdENvcHk9XCJQcm9kdWN0Q29weVwiLGUuZm9udEZhbWlseT1cIkZvbnRGYW1pbHlcIixlLmZvbnRXZWlnaHQ9XCJGb250V2VpZ2h0XCIsZS50ZXh0Q2FzZT1cIlRleHRDYXNlXCIsZS50ZXh0RGVjb3JhdGlvbj1cIlRleHREZWNvcmF0aW9uXCIsZS52aXNpYmlsaXR5PVwiVmlzaWJpbGl0eVwiLGUuYmx1cj1cIkJsdXJcIn0obz10LlRva2VuVHlwZXx8KHQuVG9rZW5UeXBlPXt9KSksdC5TVFJJTkdfVE9LRU5fVFlQRVM9W28uc3RyaW5nLG8ucHJvZHVjdENvcHksby5mb250RmFtaWx5LG8uZm9udFdlaWdodF0sdC5PUFRJT05fVE9LRU5fVFlQRVM9W28udGV4dENhc2Usby50ZXh0RGVjb3JhdGlvbixvLnZpc2liaWxpdHldLHQuRElNRU5TSU9OX1RPS0VOX1RZUEVTPVtvLmRpbWVuc2lvbixvLnNpemUsby5zcGFjZSxvLm9wYWNpdHksby5mb250U2l6ZSxvLmxpbmVIZWlnaHQsby5sZXR0ZXJTcGFjaW5nLG8ucGFyYWdyYXBoU3BhY2luZyxvLmJvcmRlcldpZHRoLG8ucmFkaXVzLG8uZHVyYXRpb24sby56SW5kZXhdLHQuUkFXX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz1bby5vcGFjaXR5LG8uekluZGV4XSx0Lk1TX0RJTUVOU0lPTl9UT0tFTl9UWVBFUz1bby5kdXJhdGlvbl0sdC5BTExfVE9LRU5fVFlQRVM9Wy4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLC4uLnQuU1RSSU5HX1RPS0VOX1RZUEVTLC4uLnQuT1BUSU9OX1RPS0VOX1RZUEVTLG8uY29sb3Isby5ncmFkaWVudCxvLmJvcmRlcixvLnJhZGl1cyxvLnNoYWRvdyxvLnR5cG9ncmFwaHksby5ibHVyXSx0LlBVUkVfVE9LRU5fVFlQRVM9Wy4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLC4uLnQuU1RSSU5HX1RPS0VOX1RZUEVTLC4uLnQuT1BUSU9OX1RPS0VOX1RZUEVTXSx0LnRva2VuVHlwZUlzUHVyZT1lPT50LlBVUkVfVE9LRU5fVFlQRVMuaW5jbHVkZXMoZSksdC50b2tlblR5cGVJc05vblB1cmU9ZT0+ISgwLHQudG9rZW5UeXBlSXNQdXJlKShlKSx0LlJFUExBQ0FCTEVfVE9LRU5fVFlQRVM9W28uY29sb3IsLi4udC5ESU1FTlNJT05fVE9LRU5fVFlQRVMsLi4udC5TVFJJTkdfVE9LRU5fVFlQRVMsLi4udC5PUFRJT05fVE9LRU5fVFlQRVNdLHQuUkVGRVJFTkNBQkxFX1RPS0VOX1RZUEVTPVtvLmNvbG9yLC4uLnQuRElNRU5TSU9OX1RPS0VOX1RZUEVTLG8uZm9udEZhbWlseSxvLmZvbnRXZWlnaHQsby50ZXh0Q2FzZSxvLnRleHREZWNvcmF0aW9uXSx0LnRva2VuVHlwZUlzUmVmZXJlbmNhYmxlPWU9PnQuUkVGRVJFTkNBQkxFX1RPS0VOX1RZUEVTLmluY2x1ZGVzKGUpLHQuRFRfVE9LRU5fVFlQRVM9W28uY29sb3Isby5zaGFkb3csby5ncmFkaWVudCxvLnR5cG9ncmFwaHksby5ib3JkZXIsLi4udC5ESU1FTlNJT05fVE9LRU5fVFlQRVMsby5mb250RmFtaWx5LG8uZm9udFdlaWdodCwuLi50Lk9QVElPTl9UT0tFTl9UWVBFU119LDUzODk6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1TX1VOSVRTPXQuUFhfVU5JVFM9dC5SQVdfVU5JVFM9dC5MSU5FX0hFSUdIVF9VTklUUz10LlNJWkVfVU5JVFM9dC5Vbml0PXZvaWQgMCxmdW5jdGlvbihlKXtlLnBpeGVscz1cIlBpeGVsc1wiLGUucGVyY2VudD1cIlBlcmNlbnRcIixlLnJlbT1cIlJlbVwiLGUubXM9XCJNc1wiLGUucmF3PVwiUmF3XCJ9KG89dC5Vbml0fHwodC5Vbml0PXt9KSksdC5TSVpFX1VOSVRTPVtvLnBpeGVscyxvLnBlcmNlbnQsby5yZW1dLHQuTElORV9IRUlHSFRfVU5JVFM9W28ucGl4ZWxzLG8ucGVyY2VudCxvLnJlbSxvLnJhd10sdC5SQVdfVU5JVFM9W28ucmF3XSx0LlBYX1VOSVRTPVtvLnBpeGVsc10sdC5NU19VTklUUz1bby5tc119LDI5MTY6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlVzZXJSb2xlPXZvaWQgMCwobz10LlVzZXJSb2xlfHwodC5Vc2VyUm9sZT17fSkpLm93bmVyPVwiT3duZXJcIixvLmFkbWluPVwiQWRtaW5cIixvLmNyZWF0b3I9XCJDcmVhdG9yXCIsby52aWV3ZXI9XCJWaWV3ZXJcIixvLmJpbGxpbmc9XCJCaWxsaW5nXCJ9LDYzOTg6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlZpc2liaWxpdHlUeXBlPXZvaWQgMCwobz10LlZpc2liaWxpdHlUeXBlfHwodC5WaXNpYmlsaXR5VHlwZT17fSkpLnZpc2libGU9XCJWaXNpYmxlXCIsby5oaWRkZW49XCJIaWRkZW5cIn0sNDgzODooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZT12b2lkIDAsKG89dC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeUF1dGhUeXBlfHwodC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeUF1dGhUeXBlPXt9KSkuYmFzaWM9XCJCYXNpY1wiLG8uYmVhcmVyPVwiQmVhcmVyXCJ9LDIwMTU6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZT12b2lkIDAsKG89dC5Xb3Jrc3BhY2VOUE1SZWdpc3RyeVR5cGV8fCh0LldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZT17fSkpLm5wbUpTPVwiTlBNSlNcIixvLmdpdEh1Yj1cIkdpdEh1YlwiLG8uYXp1cmVEZXZPcHM9XCJBenVyZURldk9wc1wiLG8uYXJ0aWZhY3Rvcnk9XCJBcnRpZmFjdG9yeVwiLG8uY3VzdG9tPVwiQ3VzdG9tXCJ9LDQzNTc6KGUsdCk9Pnt2YXIgbztPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD12b2lkIDAsKG89dC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25QbGFuSW50ZXJ2YWx8fCh0LldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD17fSkpLnllYXJseT1cInllYXJseVwiLG8ubW9udGhseT1cIm1vbnRobHlcIn0sNzQzOihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25Qcm9kdWN0PXZvaWQgMCwobz10LldvcmtzcGFjZVN1YnNjcmlwdGlvblByb2R1Y3R8fCh0LldvcmtzcGFjZVN1YnNjcmlwdGlvblByb2R1Y3Q9e30pKS5mcmVlPVwiZnJlZVwiLG8udGVhbT1cInRlYW1cIixvLnRlYW1UZXN0PVwidGVhbV90ZXN0XCIsby5jb21wYW55PVwiY29tcGFueVwiLG8uZW50ZXJwcmlzZT1cImVudGVycHJpc2VcIn0sNTg0MTooZSx0KT0+e3ZhciBvO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPXZvaWQgMCwobz10LldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c3x8KHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPXt9KSkudHJpYWxpbmc9XCJ0cmlhbGluZ1wiLG8uYWN0aXZlPVwiYWN0aXZlXCIsby5wYXN0RHVlPVwicGFzdF9kdWVcIixvLmNhbmNlbGVkPVwiY2FuY2VsZWRcIixvLnVucGFpZD1cInVucGFpZFwiLG8uaW5jb21wbGV0ZUV4cGlyZWQ9XCJpbmNvbXBsZXRlX2V4cGlyZWRcIixvLmluY29tcGxldGU9XCJpbmNvbXBsZXRlXCIsby51bmtub3duPVwidW5rbm93blwifSw4OTE3OihlLHQpPT57dmFyIG87T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbD12b2lkIDAsKG89dC5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbHx8KHQuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzSW50ZXJuYWw9e30pKS5hY3RpdmU9XCJhY3RpdmVcIixvLmRvd25ncmFkZWRUb0ZyZWU9XCJkb3duZ3JhZGVkX3RvX2ZyZWVcIixvLnN1c3BlbmRlZD1cInN1c3BlbmRlZFwifSwzODAzOihlLHQpPT57dmFyIG8scjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlB1bHNhckV4ZWN1dG9yPXQuT3V0cHV0RmlsZVR5cGU9dm9pZCAwLChyPXQuT3V0cHV0RmlsZVR5cGV8fCh0Lk91dHB1dEZpbGVUeXBlPXt9KSkuY29weVJlbW90ZVVybD1cImNvcHlSZW1vdGVVcmxcIixyLnRleHQ9XCJ0ZXh0XCIsci5iaW5hcnk9XCJiaW5hcnlcIiwobz10LlB1bHNhckV4ZWN1dG9yfHwodC5QdWxzYXJFeGVjdXRvcj17fSkpLnN1cGVybm92YT1cInN1cGVybm92YVwiLG8ubG9jYWw9XCJsb2NhbFwifX0sdD17fTtmdW5jdGlvbiBvKHIpe3ZhciBuPXRbcl07aWYodm9pZCAwIT09bilyZXR1cm4gbi5leHBvcnRzO3ZhciBpPXRbcl09e2V4cG9ydHM6e319O3JldHVybiBlW3JdKGksaS5leHBvcnRzLG8pLGkuZXhwb3J0c312YXIgcj17fTsoKCk9Pnt2YXIgZT1yO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuVXNlclJvbGU9ZS5Vbml0PWUuVG9rZW5UeXBlPWUuVGV4dERlY29yYXRpb249ZS5UZXh0Q2FzZT1lLlNoYWRvd1R5cGU9ZS5SaWNoVGV4dFNwYW5BdHRyaWJ1dGVUeXBlPWUuR3JhZGllbnRUeXBlPWUuRnJhbWVMYXlvdXQ9ZS5GcmFtZUFsaWdubWVudD1lLlNvdXJjZVR5cGU9ZS5Eb2NzSW1hZ2VSZWZUeXBlPWUuRG9jc0xpbmtSZWZUeXBlPWUuRG9jc1NlY3Rpb25UeXBlPWUuRG9jc0VudGl0eVR5cGU9ZS5Eb2NzRW50aXR5R3JvdXBCZWhhdmlvcj1lLkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlPWUuRG9jc0Jsb2NrUmljaFRleHRQcm9wZXJ0eVN0eWxlPWUuRG9jc0Jsb2NrT3B0aW9uUmVuZGVyaW5nU3R5bGU9ZS5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFdpZHRoPWUuRG9jc0Jsb2NrSXRlbVZhcmlhbnRMYXlvdXRUeXBlPWUuRG9jc0Jsb2NrSXRlbVByb3BlcnR5VHlwZT1lLkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVRleHRTdHlsZT1lLkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGU9ZS5Eb2NzQmxvY2tJdGVtUHJvcGVydHlPcHRpb25SZW5kZXJpbmdTdHlsZT1lLkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlPWUuRG9jc0Jsb2NrSW1hZ2VQcm9wZXJ0eUFzcGVjdFJhdGlvPWUuRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlPWUuRG9jc0Jsb2NrQmVoYXZpb3JEYXRhVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tTaG9ydGN1dFR5cGU9ZS5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVGhlbWVUeXBlPWUuRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1R5cGU9ZS5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lIZWFkaW5nVHlwZT1lLkRvY3VtZW50YXRpb25MZWdhY3lHcm91cEJlaGF2aW9yPWUuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlPWUuQm9yZGVyU3R5bGU9ZS5Cb3JkZXJQb3NpdGlvbj1lLkJsdXJUeXBlPWUuQXNzZXRTY2FsZVR5cGU9ZS5Bc3NldFNjYWxlPWUuQXNzZXRGb3JtYXQ9ZS5BbGlnbm1lbnQ9ZS5BTExfVE9LRU5fVFlQRVM9ZS5BTExfQk9SREVSX1NUWUxFUz1lLkFMTF9CT1JERVJfUE9TSVRJT05TPWUuT1BUSU9OX1RPS0VOX1RZUEVTPWUuU1RSSU5HX1RPS0VOX1RZUEVTPWUuRElNRU5TSU9OX1RPS0VOX1RZUEVTPXZvaWQgMCxlLlB1bHNhckV4ZWN1dG9yPWUuT3V0cHV0RmlsZVR5cGU9ZS5DdXN0b21Eb21haW5TdGF0ZT1lLkN1c3RvbURvbWFpbkVycm9yQ29kZT1lLkltcG9ydFdhcm5pbmdUeXBlPWUuV29ya3NwYWNlTlBNUmVnaXN0cnlUeXBlPWUuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZT1lLldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c0ludGVybmFsPWUuV29ya3NwYWNlU3Vic2NyaXB0aW9uU3RhdHVzPWUuV29ya3NwYWNlU3Vic2NyaXB0aW9uUHJvZHVjdD1lLldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbD1lLlZpc2liaWxpdHlUeXBlPXZvaWQgMDt2YXIgdD1vKDEyNTYpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRElNRU5TSU9OX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuRElNRU5TSU9OX1RPS0VOX1RZUEVTfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiU1RSSU5HX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuU1RSSU5HX1RPS0VOX1RZUEVTfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiT1BUSU9OX1RPS0VOX1RZUEVTXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHQuT1BUSU9OX1RPS0VOX1RZUEVTfX0pO3ZhciBuPW8oNjY3NSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfQk9SREVSX1BPU0lUSU9OU1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBuLkFMTF9CT1JERVJfUE9TSVRJT05TfX0pO3ZhciBpPW8oNjcwMSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfQk9SREVSX1NUWUxFU1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBpLkFMTF9CT1JERVJfU1RZTEVTfX0pO3ZhciBhPW8oMTI1Nik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJBTExfVE9LRU5fVFlQRVNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5BTExfVE9LRU5fVFlQRVN9fSk7dmFyIGM9byg0MjIyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkFsaWdubWVudFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjLkFsaWdubWVudH19KTt2YXIgbD1vKDEzMzQpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRGb3JtYXRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbC5Bc3NldEZvcm1hdH19KTt2YXIgdT1vKDE5NDApO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRTY2FsZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB1LkFzc2V0U2NhbGV9fSk7dmFyIHA9byg5NTkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQXNzZXRTY2FsZVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcC5Bc3NldFNjYWxlVHlwZX19KTt2YXIgcz1vKDkyNTcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQmx1clR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5CbHVyVHlwZX19KTt2YXIgeT1vKDY2NzUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQm9yZGVyUG9zaXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4geS5Cb3JkZXJQb3NpdGlvbn19KTt2YXIgZD1vKDY3MDEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQm9yZGVyU3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZC5Cb3JkZXJTdHlsZX19KTt2YXIgVD1vKDQ3ODIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFQuRG9jdW1lbnRhdGlvbkxlZ2FjeUNhbGxvdXRUeXBlfX0pO3ZhciBtPW8oODU0OSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2N1bWVudGF0aW9uTGVnYWN5R3JvdXBCZWhhdmlvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBtLkRvY3VtZW50YXRpb25MZWdhY3lHcm91cEJlaGF2aW9yfX0pO3ZhciBQPW8oMTkzMSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUC5Eb2N1bWVudGF0aW9uTGVnYWN5SGVhZGluZ1R5cGV9fSk7dmFyIHY9byg1MzU5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkRvY3VtZW50YXRpb25MZWdhY3lJdGVtVHlwZX19KTt2YXIgZz1vKDk0MzcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VBc3NldFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUFzc2V0VHlwZX19KTt2YXIgUz1vKDg1NjApO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1R5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrVHlwZX19KTt2YXIgYj1vKDQ2NDkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jdW1lbnRhdGlvbkxlZ2FjeVBhZ2VCbG9ja1RoZW1lVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBiLkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tUaGVtZVR5cGV9fSk7dmFyIF89bygzNDc2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3VtZW50YXRpb25MZWdhY3lQYWdlQmxvY2tTaG9ydGN1dFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gXy5Eb2N1bWVudGF0aW9uTGVnYWN5UGFnZUJsb2NrU2hvcnRjdXRUeXBlfX0pO3ZhciBmPW8oNDkzNCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tCZWhhdmlvckRhdGFUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGYuRG9jc0Jsb2NrQmVoYXZpb3JEYXRhVHlwZX19KTt2YXIgTz1vKDgwODEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE8uRG9jc0Jsb2NrQmVoYXZpb3JTZWxlY3Rpb25UeXBlfX0pO3ZhciBEPW8oOTUzNCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW9cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRC5Eb2NzQmxvY2tJbWFnZVByb3BlcnR5QXNwZWN0UmF0aW99fSk7dmFyIGs9bygxMDQzKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1FbnRpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGsuRG9jc0Jsb2NrSXRlbUVudGl0eVR5cGV9fSk7dmFyIEU9bygzOTQ3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eU9wdGlvblJlbmRlcmluZ1N0eWxlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEUuRG9jc0Jsb2NrSXRlbVByb3BlcnR5T3B0aW9uUmVuZGVyaW5nU3R5bGV9fSk7dmFyIEk9byg0NzQyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVJpY2hUZXh0U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSS5Eb2NzQmxvY2tJdGVtUHJvcGVydHlSaWNoVGV4dFN0eWxlfX0pO3ZhciBCPW8oNzgyNSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQi5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUZXh0U3R5bGV9fSk7dmFyIGg9byg2NzUxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1Qcm9wZXJ0eVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaC5Eb2NzQmxvY2tJdGVtUHJvcGVydHlUeXBlfX0pO3ZhciBOPW8oNjc3Nyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTi5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFR5cGV9fSk7dmFyIEw9byg5Mjc5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja0l0ZW1WYXJpYW50TGF5b3V0V2lkdGhcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTC5Eb2NzQmxvY2tJdGVtVmFyaWFudExheW91dFdpZHRofX0pO3ZhciBSPW8oNTI3MSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tPcHRpb25SZW5kZXJpbmdTdHlsZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBSLkRvY3NCbG9ja09wdGlvblJlbmRlcmluZ1N0eWxlfX0pO3ZhciBqPW8oMzI3NCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJEb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gai5Eb2NzQmxvY2tSaWNoVGV4dFByb3BlcnR5U3R5bGV9fSk7dmFyIHg9byg2MDAxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NCbG9ja1RleHRQcm9wZXJ0eVN0eWxlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHguRG9jc0Jsb2NrVGV4dFByb3BlcnR5U3R5bGV9fSk7dmFyIEE9bygxNzU1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NFbnRpdHlHcm91cEJlaGF2aW9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEEuRG9jc0VudGl0eUdyb3VwQmVoYXZpb3J9fSk7dmFyIE09byg4MjQwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NFbnRpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE0uRG9jc0VudGl0eVR5cGV9fSk7dmFyIEM9byg0MTQyKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NTZWN0aW9uVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBDLkRvY3NTZWN0aW9uVHlwZX19KTt2YXIgRj1vKDI2OTUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRG9jc0xpbmtSZWZUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEYuRG9jc0xpbmtSZWZUeXBlfX0pO3ZhciBXPW8oMjc1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkRvY3NJbWFnZVJlZlR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVy5Eb2NzSW1hZ2VSZWZUeXBlfX0pO3ZhciBZPW8oMTY5NCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJTb3VyY2VUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFkuU291cmNlVHlwZX19KTt2YXIgRz1vKDQ5MTQpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRnJhbWVBbGlnbm1lbnRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRy5GcmFtZUFsaWdubWVudH19KTt2YXIgVT1vKDU5ODYpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiRnJhbWVMYXlvdXRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gVS5GcmFtZUxheW91dH19KTt2YXIgSz1vKDQ2NjcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiR3JhZGllbnRUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEsuR3JhZGllbnRUeXBlfX0pO3ZhciB3PW8oNDMzNik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJSaWNoVGV4dFNwYW5BdHRyaWJ1dGVUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHcuUmljaFRleHRTcGFuQXR0cmlidXRlVHlwZX19KTt2YXIgSD1vKDU0NjcpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiU2hhZG93VHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBILlNoYWRvd1R5cGV9fSk7dmFyIFY9bygyMDQ3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRleHRDYXNlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFYuVGV4dENhc2V9fSk7dmFyIHo9byg1NzgwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRleHREZWNvcmF0aW9uXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHouVGV4dERlY29yYXRpb259fSk7dmFyIHE9bygxMjU2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlRva2VuVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBxLlRva2VuVHlwZX19KTt2YXIgUT1vKDUzODkpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiVW5pdFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBRLlVuaXR9fSk7dmFyIFo9bygyOTE2KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlVzZXJSb2xlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFouVXNlclJvbGV9fSk7dmFyIEo9byg2Mzk4KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlZpc2liaWxpdHlUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEouVmlzaWJpbGl0eVR5cGV9fSk7dmFyIFg9byg0MzU3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBYLldvcmtzcGFjZVN1YnNjcmlwdGlvblBsYW5JbnRlcnZhbH19KTt2YXIgJD1vKDc0Myk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJXb3Jrc3BhY2VTdWJzY3JpcHRpb25Qcm9kdWN0XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuICQuV29ya3NwYWNlU3Vic2NyaXB0aW9uUHJvZHVjdH19KTt2YXIgZWU9byg1ODQxKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZVN1YnNjcmlwdGlvblN0YXR1c1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlZS5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXN9fSk7dmFyIHRlPW8oODkxNyk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJXb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0ZS5Xb3Jrc3BhY2VTdWJzY3JpcHRpb25TdGF0dXNJbnRlcm5hbH19KTt2YXIgb2U9byg0ODM4KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZU5QTVJlZ2lzdHJ5QXV0aFR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gb2UuV29ya3NwYWNlTlBNUmVnaXN0cnlBdXRoVHlwZX19KTt2YXIgcmU9bygyMDE1KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIldvcmtzcGFjZU5QTVJlZ2lzdHJ5VHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiByZS5Xb3Jrc3BhY2VOUE1SZWdpc3RyeVR5cGV9fSk7dmFyIG5lPW8oODI5KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkltcG9ydFdhcm5pbmdUeXBlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG5lLkltcG9ydFdhcm5pbmdUeXBlfX0pO3ZhciBpZT1vKDM2MTEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiQ3VzdG9tRG9tYWluRXJyb3JDb2RlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGllLkN1c3RvbURvbWFpbkVycm9yQ29kZX19KTt2YXIgYWU9byg2NTMwKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIkN1c3RvbURvbWFpblN0YXRlXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGFlLkN1c3RvbURvbWFpblN0YXRlfX0pO3ZhciBjZT1vKDM4MDMpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiT3V0cHV0RmlsZVR5cGVcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gY2UuT3V0cHV0RmlsZVR5cGV9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJQdWxzYXJFeGVjdXRvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBjZS5QdWxzYXJFeGVjdXRvcn19KX0pKCk7dmFyIG49ZXhwb3J0cztmb3IodmFyIGkgaW4gciluW2ldPXJbaV07ci5fX2VzTW9kdWxlJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0pKCk7IiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHBhc2NhbENhc2UsIHBhc2NhbENhc2VUcmFuc2Zvcm0sIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZSwgfSBmcm9tIFwicGFzY2FsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUcmFuc2Zvcm0oaW5wdXQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSAwKVxuICAgICAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRyYW5zZm9ybU1lcmdlKGlucHV0LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMClcbiAgICAgICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gcGFzY2FsQ2FzZShpbnB1dCwgX19hc3NpZ24oeyB0cmFuc2Zvcm06IGNhbWVsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgbm9DYXNlIH0gZnJvbSBcIm5vLWNhc2VcIjtcbmltcG9ydCB7IHVwcGVyQ2FzZUZpcnN0IH0gZnJvbSBcInVwcGVyLWNhc2UtZmlyc3RcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsQ2FzZVRyYW5zZm9ybShpbnB1dCkge1xuICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChpbnB1dC50b0xvd2VyQ2FzZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiIFwiLCB0cmFuc2Zvcm06IGNhcGl0YWxDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCJjYW1lbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY2FwaXRhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiY29uc3RhbnQtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiaGVhZGVyLWNhc2VcIjtcbmV4cG9ydCAqIGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGFyYW0tY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInBhc2NhbC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwicGF0aC1jYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwic2VudGVuY2UtY2FzZVwiO1xuZXhwb3J0ICogZnJvbSBcInNuYWtlLWNhc2VcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlIH0gZnJvbSBcInVwcGVyLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjb25zdGFudENhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBub0Nhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIl9cIiwgdHJhbnNmb3JtOiB1cHBlckNhc2UgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gZG90Q2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiLlwiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBjYXBpdGFsQ2FzZSB9IGZyb20gXCJjYXBpdGFsLWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gY2FwaXRhbENhc2UoaW5wdXQsIF9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIi1cIiB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwfFxcdTAwNDl8XFx1MDA0OVxcdTAzMDcvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhejoge1xuICAgICAgICByZWdleHA6IC9cXHUwMTMwL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgxLA6IFwiXFx1MDA2OVwiLFxuICAgICAgICAgICAgSTogXCJcXHUwMTMxXCIsXG4gICAgICAgICAgICBJzIc6IFwiXFx1MDA2OVwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvXFx1MDA0OXxcXHUwMDRBfFxcdTAxMkV8XFx1MDBDQ3xcXHUwMENEfFxcdTAxMjgvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBJOiBcIlxcdTAwNjlcXHUwMzA3XCIsXG4gICAgICAgICAgICBKOiBcIlxcdTAwNkFcXHUwMzA3XCIsXG4gICAgICAgICAgICDErjogXCJcXHUwMTJGXFx1MDMwN1wiLFxuICAgICAgICAgICAgw4w6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAwXCIsXG4gICAgICAgICAgICDDjTogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDFcIixcbiAgICAgICAgICAgIMSoOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwM1wiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgbG93ZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZUxvd2VyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiBsb3dlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiBsb3dlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogTG93ZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGxvd2VyQ2FzZSB9IGZyb20gXCJsb3dlci1jYXNlXCI7XG4vLyBTdXBwb3J0IGNhbWVsIGNhc2UgKFwiY2FtZWxDYXNlXCIgLT4gXCJjYW1lbCBDYXNlXCIgYW5kIFwiQ0FNRUxDYXNlXCIgLT4gXCJDQU1FTCBDYXNlXCIpLlxudmFyIERFRkFVTFRfU1BMSVRfUkVHRVhQID0gWy8oW2EtejAtOV0pKFtBLVpdKS9nLCAvKFtBLVpdKShbQS1aXVthLXpdKS9nXTtcbi8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVycy5cbnZhciBERUZBVUxUX1NUUklQX1JFR0VYUCA9IC9bXkEtWjAtOV0rL2dpO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIHN0cmluZyBpbnRvIHNvbWV0aGluZyBvdGhlciBsaWJyYXJpZXMgY2FuIG1hbmlwdWxhdGUgZWFzaWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9DYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnNwbGl0UmVnZXhwLCBzcGxpdFJlZ2V4cCA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxUX1NQTElUX1JFR0VYUCA6IF9hLCBfYiA9IG9wdGlvbnMuc3RyaXBSZWdleHAsIHN0cmlwUmVnZXhwID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFRfU1RSSVBfUkVHRVhQIDogX2IsIF9jID0gb3B0aW9ucy50cmFuc2Zvcm0sIHRyYW5zZm9ybSA9IF9jID09PSB2b2lkIDAgPyBsb3dlckNhc2UgOiBfYywgX2QgPSBvcHRpb25zLmRlbGltaXRlciwgZGVsaW1pdGVyID0gX2QgPT09IHZvaWQgMCA/IFwiIFwiIDogX2Q7XG4gICAgdmFyIHJlc3VsdCA9IHJlcGxhY2UocmVwbGFjZShpbnB1dCwgc3BsaXRSZWdleHAsIFwiJDFcXDAkMlwiKSwgc3RyaXBSZWdleHAsIFwiXFwwXCIpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGVuZCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgLy8gVHJpbSB0aGUgZGVsaW1pdGVyIGZyb20gYXJvdW5kIHRoZSBvdXRwdXQgc3RyaW5nLlxuICAgIHdoaWxlIChyZXN1bHQuY2hhckF0KHN0YXJ0KSA9PT0gXCJcXDBcIilcbiAgICAgICAgc3RhcnQrKztcbiAgICB3aGlsZSAocmVzdWx0LmNoYXJBdChlbmQgLSAxKSA9PT0gXCJcXDBcIilcbiAgICAgICAgZW5kLS07XG4gICAgLy8gVHJhbnNmb3JtIGVhY2ggdG9rZW4gaW5kZXBlbmRlbnRseS5cbiAgICByZXR1cm4gcmVzdWx0LnNsaWNlKHN0YXJ0LCBlbmQpLnNwbGl0KFwiXFwwXCIpLm1hcCh0cmFuc2Zvcm0pLmpvaW4oZGVsaW1pdGVyKTtcbn1cbi8qKlxuICogUmVwbGFjZSBgcmVgIGluIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgcmVwbGFjZW1lbnQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2UoaW5wdXQsIHJlLCB2YWx1ZSkge1xuICAgIGlmIChyZSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICByZXR1cm4gcmUucmVkdWNlKGZ1bmN0aW9uIChpbnB1dCwgcmUpIHsgcmV0dXJuIGlucHV0LnJlcGxhY2UocmUsIHZhbHVlKTsgfSwgaW5wdXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGRvdENhc2UgfSBmcm9tIFwiZG90LWNhc2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBwYXJhbUNhc2UoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBkb3RDYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCItXCIgfSwgb3B0aW9ucykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG5vQ2FzZSB9IGZyb20gXCJuby1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgZmlyc3RDaGFyID0gaW5wdXQuY2hhckF0KDApO1xuICAgIHZhciBsb3dlckNoYXJzID0gaW5wdXQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGluZGV4ID4gMCAmJiBmaXJzdENoYXIgPj0gXCIwXCIgJiYgZmlyc3RDaGFyIDw9IFwiOVwiKSB7XG4gICAgICAgIHJldHVybiBcIl9cIiArIGZpcnN0Q2hhciArIGxvd2VyQ2hhcnM7XG4gICAgfVxuICAgIHJldHVybiBcIlwiICsgZmlyc3RDaGFyLnRvVXBwZXJDYXNlKCkgKyBsb3dlckNoYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhc2NhbENhc2VUcmFuc2Zvcm1NZXJnZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsQ2FzZShpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5vQ2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiXCIsIHRyYW5zZm9ybTogcGFzY2FsQ2FzZVRyYW5zZm9ybSB9LCBvcHRpb25zKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2Fzc2lnbiB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZG90Q2FzZSB9IGZyb20gXCJkb3QtY2FzZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGhDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiL1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBub0Nhc2UgfSBmcm9tIFwibm8tY2FzZVwiO1xuaW1wb3J0IHsgdXBwZXJDYXNlRmlyc3QgfSBmcm9tIFwidXBwZXItY2FzZS1maXJzdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbnRlbmNlQ2FzZVRyYW5zZm9ybShpbnB1dCwgaW5kZXgpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaW5kZXggPT09IDApXG4gICAgICAgIHJldHVybiB1cHBlckNhc2VGaXJzdChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VudGVuY2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gbm9DYXNlKGlucHV0LCBfX2Fzc2lnbih7IGRlbGltaXRlcjogXCIgXCIsIHRyYW5zZm9ybTogc2VudGVuY2VDYXNlVHJhbnNmb3JtIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBkb3RDYXNlIH0gZnJvbSBcImRvdC1jYXNlXCI7XG5leHBvcnQgZnVuY3Rpb24gc25ha2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90Q2FzZShpbnB1dCwgX19hc3NpZ24oeyBkZWxpbWl0ZXI6IFwiX1wiIH0sIG9wdGlvbnMpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IENvbG9yVG9rZW4sIFRva2VuR3JvdXAsIFRva2VuVHlwZSB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiO1xuaW1wb3J0IHsgUHJpbWl0aXZlQ29sb3JzVGVtcGxhdGVEYXRhIH0gZnJvbSBcInNyYy90ZW1wbGF0ZXMvcHJpbWl0aXZlX2NvbG9ycy50ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSGVscGVyLCBmbHV0dGVyQ29sb3JWYWx1ZSwgZ3JvdXBWYXJpYWJsZU5hbWUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGNsYXNzTmFtZSA9IFwiQ29sb3JQcmltaXRpdmVzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZUNvbG9ycyhoZWxwZXI6IFJlZmVyZW5jZUhlbHBlcik6XG4gIFByaW1pdGl2ZUNvbG9yc1RlbXBsYXRlRGF0YSB7XG4gIGNvbnN0IGNvbG9yVG9rZW5zOiBDb2xvclRva2VuW10gPSBoZWxwZXIuZ2V0VG9rZW5zRm9yVHlwZTxDb2xvclRva2VuPihUb2tlblR5cGUuY29sb3IpO1xuICBjb25zdCB0b2tlbkdyb3VwczogVG9rZW5Hcm91cFtdID0gaGVscGVyLmdldEdyb3Vwc0ZvclR5cGUoVG9rZW5UeXBlLmNvbG9yKTtcbiAgLy8gQ29udmVydCBhbGwgY29sb3IgdG9rZW5zIHRvIENTUyB2YXJpYWJsZXNcbiAgY29uc3QgY29sb3JTd2F0Y2hHcm91cHMgPSB0b2tlbkdyb3Vwc1xuICAgIC5maWx0ZXIoKHQpID0+IHQudG9rZW5UeXBlID09PSBUb2tlblR5cGUuY29sb3IgJiYgdC5jaGlsZHJlbklkcy5sZW5ndGggPT0gMTYpO1xuXG4gIGNvbnN0IG1hcHBlZFRva2VucyA9IHt9IGFzIE1hcDxzdHJpbmcsIHN0cmluZz47XG5cbiAgbGV0IHN3YXRjaGVzID0gY29sb3JTd2F0Y2hHcm91cHMucmVkdWNlPE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+PigocHJldiwgZ3JvdXApID0+IHtcbiAgICBjb25zdCBuYW1lID0gZ3JvdXBWYXJpYWJsZU5hbWUoZ3JvdXApO1xuICAgIHByZXZbbmFtZV0gPSBjb2xvclRva2Vucy5maWx0ZXIoeCA9PiBncm91cC5pZCA9PSB4LnBhcmVudEdyb3VwSWQpLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHByZXZbY3Vyci5uYW1lXSA9IGZsdXR0ZXJDb2xvclZhbHVlKGN1cnIpXG4gICAgICAgIG1hcHBlZFRva2Vuc1tjdXJyLmlkXSA9IGhlbHBlci5yZXNvbHZlVG9rZW5WYXJpYWJsZU5hbWUoY3VyciwgY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fVxuICAgIClcbiAgICByZXR1cm4gcHJldjtcbiAgfSwge30gYXMgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj4pXG5cbiAgY29uc3QgY29sb3JQcmltaXRpdmVzID0gY29sb3JUb2tlbnMuZmlsdGVyKGUgPT4gIShlLmlkIGluIG1hcHBlZFRva2VucykgJiYgIWUudmFsdWUucmVmZXJlbmNlZFRva2VuSWQpXG4gIGxldCBjb2xvcnMgPSB7fSBhcyBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIGZvciAobGV0IHByaW1pdGl2ZUNvbG9yIG9mIGNvbG9yUHJpbWl0aXZlcykge1xuICAgIGNvbnN0IG5hbWUgPSBoZWxwZXIucmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lKHByaW1pdGl2ZUNvbG9yLCBjbGFzc05hbWUpO1xuICAgIGNvbG9yc1tuYW1lXSA9IGZsdXR0ZXJDb2xvclZhbHVlKHByaW1pdGl2ZUNvbG9yKTtcbiAgICBtYXBwZWRUb2tlbnNbcHJpbWl0aXZlQ29sb3IuaWRdID0gY2xhc3NOYW1lICsgXCIuXCIgKyBuYW1lO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN3YXRjaGVzLFxuICAgIGNvbG9yc1xuICB9O1xufVxuIiwiaW1wb3J0IHsgRGltZW5zaW9uVG9rZW4sIEZvbnRTaXplVG9rZW4sIExldHRlclNwYWNpbmdUb2tlbiwgTGluZUhlaWdodFRva2VuLCBTcGFjZVRva2VuLCBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCI7XG5pbXBvcnQgeyBDb25zdGFudHNUZW1wbGF0ZSB9IGZyb20gXCJzcmMvdGVtcGxhdGVzL2NvbnN0YW50cy50ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSGVscGVyIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG50eXBlIENvbnN0YW50c0Rlc2NyaXB0aW9uPFQgZXh0ZW5kcyBUb2tlbj4gPSB7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgdHlwZU5hbWU6IHN0cmluZyxcbiAgICB0b2tlblR5cGU6IFRva2VuVHlwZSxcbiAgICBwcmVmaXg/OiBzdHJpbmcsXG4gICAgcmVzb2x2ZVZhbHVlOiAodG9rZW46IFQpID0+IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb25zdGFudHM8VCBleHRlbmRzIFRva2VuPihoZWxwZXI6IFJlZmVyZW5jZUhlbHBlciwgZGVzYzogQ29uc3RhbnRzRGVzY3JpcHRpb248VD4pIHtcbiAgICBjb25zdCB0b2tlbnMgPSBoZWxwZXIuZ2V0VG9rZW5zRm9yVHlwZTxUPihkZXNjLnRva2VuVHlwZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogZGVzYy5jbGFzc05hbWUsXG4gICAgICB0eXBlTmFtZTogZGVzYy50eXBlTmFtZSxcbiAgICAgIHZhcmlhYmxlczogdG9rZW5zLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGhlbHBlci5yZXNvbHZlVG9rZW5WYXJpYWJsZU5hbWUoY3VyciwgZGVzYy5jbGFzc05hbWUsIGRlc2MucHJlZml4KVxuICAgICAgICBwcmV2W25hbWVdID0gZGVzYy5yZXNvbHZlVmFsdWUoY3Vycik7XG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICB9LCBuZXcgTWFwPHN0cmluZyxzdHJpbmc+KVxuICAgIH07XG59XG5cbmNvbnN0IGZvbnRTaXplc0Rlc2NyaXB0aW9uOiBDb25zdGFudHNEZXNjcmlwdGlvbjxGb250U2l6ZVRva2VuPiA9IHtcbiAgICBjbGFzc05hbWU6IFwiT2ZmZW5idXJnRm9udFNpemVzXCIsXG4gICAgdHlwZU5hbWU6IFwiZG91YmxlXCIsXG4gICAgdG9rZW5UeXBlOiBUb2tlblR5cGUuZm9udFNpemUsXG4gICAgcHJlZml4OiAnZicsXG4gICAgcmVzb2x2ZVZhbHVlOiAodG9rZW4pID0+IGAke3Rva2VuLnZhbHVlLm1lYXN1cmV9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9udFNpemVzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCk6IENvbnN0YW50c1RlbXBsYXRlIHtcbiAgICByZXR1cm4gY3JlYXRlQ29uc3RhbnRzKGhlbHBlciwgZm9udFNpemVzRGVzY3JpcHRpb24pO1xufVxuXG5jb25zdCBsaW5lSGVpZ2h0c0Rlc2NyaXB0aW9uOiBDb25zdGFudHNEZXNjcmlwdGlvbjxMaW5lSGVpZ2h0VG9rZW4+ID0ge1xuICAgIGNsYXNzTmFtZTogXCJPZmZlbmJ1cmdMaW5lSGVpZ2h0c1wiLFxuICAgIHR5cGVOYW1lOiBcImRvdWJsZVwiLFxuICAgIHRva2VuVHlwZTogVG9rZW5UeXBlLmxpbmVIZWlnaHQsXG4gICAgcHJlZml4OiAnbCcsXG4gICAgcmVzb2x2ZVZhbHVlOiAodG9rZW4pID0+IGAke3Rva2VuLnZhbHVlLm1lYXN1cmV9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluZUhlaWdodHMoaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsKTogQ29uc3RhbnRzVGVtcGxhdGUge1xuICAgIHJldHVybiBjcmVhdGVDb25zdGFudHMoaGVscGVyLCBsaW5lSGVpZ2h0c0Rlc2NyaXB0aW9uKTtcbn1cblxuY29uc3QgbGV0dGVyU3BhY2luZ0Rlc2NyaXB0aW9uOiBDb25zdGFudHNEZXNjcmlwdGlvbjxMZXR0ZXJTcGFjaW5nVG9rZW4+ID0ge1xuICAgIGNsYXNzTmFtZTogXCJPZmZlbmJ1cmdMZXR0ZXJTcGFjaW5nc1wiLFxuICAgIHR5cGVOYW1lOiBcImRvdWJsZVwiLFxuICAgIHRva2VuVHlwZTogVG9rZW5UeXBlLmxldHRlclNwYWNpbmcsXG4gICAgcmVzb2x2ZVZhbHVlOiAodG9rZW4pID0+IGAke3Rva2VuLnZhbHVlLm1lYXN1cmV9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGV0dGVyU3BhY2luZ3MoaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsKTogQ29uc3RhbnRzVGVtcGxhdGUge1xuICAgIHJldHVybiBjcmVhdGVDb25zdGFudHMoaGVscGVyLCBsZXR0ZXJTcGFjaW5nRGVzY3JpcHRpb24pO1xufVxuXG5jb25zdCBnZW5lcmljU3BhY2luZ0Rlc2NyaXB0aW9uOiBDb25zdGFudHNEZXNjcmlwdGlvbjxEaW1lbnNpb25Ub2tlbj4gPSB7XG4gICAgY2xhc3NOYW1lOiBcIk9mZmVuYnVyZ0dlbmVyaWNTcGFjaW5nc1wiLFxuICAgIHR5cGVOYW1lOiBcImRvdWJsZVwiLFxuICAgIHRva2VuVHlwZTogVG9rZW5UeXBlLmRpbWVuc2lvbixcbiAgICByZXNvbHZlVmFsdWU6ICh0b2tlbikgPT4gYCR7dG9rZW4udmFsdWUubWVhc3VyZX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZW5lcmljU3BhY2luZ3MoaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsKTogQ29uc3RhbnRzVGVtcGxhdGUge1xuICAgIHJldHVybiBjcmVhdGVDb25zdGFudHMoaGVscGVyLCBnZW5lcmljU3BhY2luZ0Rlc2NyaXB0aW9uKTtcbn0iLCJpbXBvcnQgeyBDb2xvclRva2VuLCBUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCI7XG5pbXBvcnQgeyBDb2xvclNjaGVtZVRlbXBsYXRlRGF0YSB9IGZyb20gXCJzcmMvdGVtcGxhdGVzL2NvbG9yX3NjaGVtZS50ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlSGVscGVyLCBpc1ByaW1pdGl2ZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuY29uc3QgY2xhc3NOYW1lID0gXCJPZmZlbmJ1cmdDb2xvclNjaGVtZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCB0aGVtZURhdGE6IFJlY29yZDxzdHJpbmcsIFRva2VuW10+KTogQ29sb3JTY2hlbWVUZW1wbGF0ZURhdGEge1xuICAvLyBDb252ZXJ0IGFsbCBjb2xvciB0b2tlbnMgdG8gQ1NTIHZhcmlhYmxlc1xuICBjb25zdCBjb2xvclRva2VucyA9IGhlbHBlci5nZXRVbnByb2Nlc3NlZFRva2Vuc0ZvclR5cGU8Q29sb3JUb2tlbj4oVG9rZW5UeXBlLmNvbG9yKVxuICBjb25zdCBzZW1hbnRpY0NvbG9yVG9rZW5zID0gY29sb3JUb2tlbnMuZmlsdGVyKGlzUHJpbWl0aXZlKTtcbiAgY29uc3QgY29sb3JWYXJpYWJsZXMgPSBzZW1hbnRpY0NvbG9ycyhzZW1hbnRpY0NvbG9yVG9rZW5zLCBoZWxwZXIpXG5cbiAgbGV0IHRoZW1lcyA9IHtcbiAgICBcImxpZ2h0XCI6IGNvbG9yVmFyaWFibGVzXG4gIH1cblxuICBmb3IgKHZhciB0aGVtZU5hbWUgaW4gdGhlbWVEYXRhKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhlbWVEYXRhW3RoZW1lTmFtZV07XG4gICAgY29uc3QgdGhlbWVDb2xvclRva2VucyA9IHRva2Vucy5maWx0ZXIoeCA9PiBzZW1hbnRpY0NvbG9yVG9rZW5zLnNvbWUoeSA9PiB5LmlkID09IHguaWQpKSBhcyBDb2xvclRva2VuW107XG4gICAgdGhlbWVzW3RoZW1lTmFtZV0gPSBzZW1hbnRpY0NvbG9ycyh0aGVtZUNvbG9yVG9rZW5zLCBoZWxwZXIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29sb3JzOiBPYmplY3Qua2V5cyhjb2xvclZhcmlhYmxlcyksXG4gICAgdGhlbWVzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBzZW1hbnRpY0NvbG9ycyhjb2xvclRva2VuczogQ29sb3JUb2tlbltdLCBoZWxwZXI6IFJlZmVyZW5jZUhlbHBlcik6IE1hcDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCB2YXJpYWJsZU5hbWVzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgZm9yIChsZXQgdG9rZW4gb2YgY29sb3JUb2tlbnMpIHtcbiAgICBjb25zdCBuYW1lID0gaGVscGVyLnJlc29sdmVUb2tlblZhcmlhYmxlTmFtZSh0b2tlbiwgY2xhc3NOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZU5hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhcmlhYmxlTmFtZXNbbmFtZV0gPSBoZWxwZXIucmVzb2x2ZVRva2VuUmVmZXJlbmNlKHRva2VuLnZhbHVlLnJlZmVyZW5jZWRUb2tlbklkISk7XG4gIH1cbiAgcmV0dXJuIHZhcmlhYmxlTmFtZXM7XG59XG4iLCJpbXBvcnQgeyBTaGFkb3dUb2tlbiwgVG9rZW5UeXBlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCI7XG5pbXBvcnQgeyBTaGFkb3dEYXRhLCBTaGFkb3dUZW1wbGF0ZSB9IGZyb20gXCJzcmMvdGVtcGxhdGVzL3NoYWRvd3MudGVtcGxhdGVcIjtcbmltcG9ydCB7IFJlZmVyZW5jZUhlbHBlciB9IGZyb20gXCIuL3V0aWxcIjtcblxuY29uc3QgY2xhc3NOYW1lID0gXCJPZmZlbmJ1cmdTaGFkb3dzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkb3dzKGhlbHBlcjogUmVmZXJlbmNlSGVscGVyLCk6IFNoYWRvd1RlbXBsYXRlIHtcbiAgICAvLyBDb252ZXJ0IGFsbCBjb2xvciB0b2tlbnMgdG8gQ1NTIHZhcmlhYmxlc1xuICAgIGNvbnN0IHRva2VucyA9IGhlbHBlci5nZXRVbnByb2Nlc3NlZFRva2Vuc0ZvclR5cGU8U2hhZG93VG9rZW4+KFRva2VuVHlwZS5zaGFkb3cpXG4gICAgY29uc3QgdmFyaWFibGVzID0gcHJvY2Vzc1NoYWRvd3ModG9rZW5zLCBoZWxwZXIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICB2YXJpYWJsZXMsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1NoYWRvd3ModG9rZW5zOiBTaGFkb3dUb2tlbltdLCBoZWxwZXI6IFJlZmVyZW5jZUhlbHBlcik6IE1hcDxzdHJpbmcsIFNoYWRvd0RhdGE+IHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWVzID0gbmV3IE1hcDxzdHJpbmcsIFNoYWRvd0RhdGE+KCk7XG4gICAgZm9yIChsZXQgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBoZWxwZXIucmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lKHRva2VuLCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZU5hbWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyaWFibGVOYW1lc1tuYW1lXSA9IG1hcFNoYWRvd1ZhbHVlKHRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhcmlhYmxlTmFtZXM7XG59XG5cbmZ1bmN0aW9uIG1hcFNoYWRvd1ZhbHVlKHRva2VuOiBTaGFkb3dUb2tlbik6IFNoYWRvd0RhdGEge1xuICAgIGNvbnN0IGJsdXJSYWRpdXMgPSB0b2tlbi52YWx1ZS5tYXAoeCA9PiB4LnJhZGl1cykucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRva2VuLnZhbHVlLm1hcCh4ID0+IHgueCkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IHRva2VuLnZhbHVlLm1hcCh4ID0+IHgueSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgY29uc3Qgc3ByZWFkUmFkaXVzID0gdG9rZW4udmFsdWUubWFwKHggPT4geC5zcHJlYWQpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGNvbnN0IGNvbG9yID0gdG9rZW4udmFsdWUucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoe1xuICAgICAgICBhOiBwcmV2LmEgKyBjdXJyLmNvbG9yLm9wYWNpdHkubWVhc3VyZSxcbiAgICAgICAgcjogcHJldi5yICsgY3Vyci5jb2xvci5jb2xvci5yLFxuICAgICAgICBnOiBwcmV2LmcgKyBjdXJyLmNvbG9yLmNvbG9yLmcsXG4gICAgICAgIGI6IHByZXYuYiArIGN1cnIuY29sb3IuY29sb3IuYixcbiAgICB9KSwge1xuICAgICAgICBhOiAwLFxuICAgICAgICByOiAwLFxuICAgICAgICBnOiAwLFxuICAgICAgICBiOiAwXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmx1clJhZGl1czogYCR7Ymx1clJhZGl1c31gLFxuICAgICAgICBvZmZzZXRYOiBgJHtvZmZzZXRYfWAsXG4gICAgICAgIG9mZnNldFk6IGAke29mZnNldFl9YCxcbiAgICAgICAgc3ByZWFkUmFkaXVzOiBgJHtzcHJlYWRSYWRpdXN9YCxcbiAgICAgICAgYmx1clN0eWxlOiBgQmx1clN0eWxlLmlubmVyYCwgLy8gVE9ETyBob3cgdG8gaW1wbGVtZW50IGRyb3Agc2hhZG93P1xuICAgICAgICBjb2xvcjogY29udmVydEFSR0JUb0ZsdXR0ZXIoY29sb3IuYSwgY29sb3IuciwgY29sb3IuZywgY29sb3IuYiksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFkSGV4TnVtYmVyVG8yRGlnaXRzKGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGEubGVuZ3RoID09IDApIHJldHVybiBcIjAwXCI7XG4gICAgaWYgKGEubGVuZ3RoID09IDEpIHJldHVybiBcIjBcIiArIGE7XG4gICAgcmV0dXJuIGE7XG59XG5cbi8vIG9wYWNpdHkgYXMgcGVyY2VudCAoMCAtIDEpXG4vLyByLGcsYiwgYXMgdmFsdWVzIGZyb20gMCAtIDI1NVxuZnVuY3Rpb24gY29udmVydEFSR0JUb0ZsdXR0ZXIob3BhY2l0eTogbnVtYmVyLCByZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgYSA9IChvcGFjaXR5ICogMjU1KS50b1N0cmluZygxNikuc2xpY2UoMCwgMik7XG4gICAgbGV0IHIgPSByZWQudG9TdHJpbmcoMTYpO1xuICAgIGxldCBnID0gZ3JlZW4udG9TdHJpbmcoMTYpO1xuICAgIGxldCBiID0gYmx1ZS50b1N0cmluZygxNik7XG4gICAgYSA9IHBhZEhleE51bWJlclRvMkRpZ2l0cyhhKVxuICAgIHIgPSBwYWRIZXhOdW1iZXJUbzJEaWdpdHMocilcbiAgICBnID0gcGFkSGV4TnVtYmVyVG8yRGlnaXRzKGcpXG4gICAgYiA9IHBhZEhleE51bWJlclRvMkRpZ2l0cyhiKVxuICAgIHJldHVybiBgQ29sb3IoMHgke2EgKyByICsgZyArIGJ9KWA7XG59IiwiaW1wb3J0IHsgRm9udFNpemVUb2tlblZhbHVlLCBMZXR0ZXJTcGFjaW5nVG9rZW5WYWx1ZSwgTGluZUhlaWdodFRva2VuVmFsdWUsIFRva2VuVHlwZSwgVHlwb2dyYXBoeVRva2VuLCBUeXBvZ3JhcGh5VG9rZW5WYWx1ZSwgVW5pdCB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiO1xuaW1wb3J0IHsgRm9udEZhbWlseVRva2VuVmFsdWUsIEZvbnRXZWlnaHRUb2tlblZhbHVlLCBUZXh0RGVjb3JhdGlvblRva2VuVmFsdWUgfSBmcm9tIFwiQHN1cGVybm92YWlvL3Nkay1leHBvcnRlcnMvYnVpbGQvc2RrLXR5cGVzY3JpcHQvc3JjL21vZGVsL3Rva2Vucy9TREtUb2tlblZhbHVlXCI7XG5pbXBvcnQgeyBGb250RGVzY3JpcHRpb24sIFR5cG9ncmFwaHlUZW1wbGF0ZURhdGEgfSBmcm9tIFwic3JjL3RlbXBsYXRlcy90eXBvZ3JhcGh5LnRlbXBsYXRlXCI7XG5pbXBvcnQgeyBSZWZlcmVuY2VIZWxwZXIgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IGNsYXNzTmFtZSA9IFwiT2ZmZW5idXJnVHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHlwb2dyYXBoeShcbiAgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsXG4pOiBUeXBvZ3JhcGh5VGVtcGxhdGVEYXRhIHtcbiAgY29uc3QgdHlwb1Rva2VucyA9IGhlbHBlci5nZXRUb2tlbnNGb3JUeXBlPFR5cG9ncmFwaHlUb2tlbj4oVG9rZW5UeXBlLnR5cG9ncmFwaHkpO1xuICB2YXIgdHlwb2dyYXBoaWVzID0gbmV3IE1hcDxzdHJpbmcsIEZvbnREZXNjcmlwdGlvbj4oKTtcbiAgZm9yIChsZXQgdHlwb1Rva2VuIG9mIHR5cG9Ub2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBoZWxwZXIucmVzb2x2ZVR5cG9Ub2tlblZhcmlhYmxlTmFtZSh0eXBvVG9rZW4sIGNsYXNzTmFtZSk7XG4gICAgaWYgKHZhcmlhYmxlTmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJkZXNrdG9wXCIpICE9IC0xKSBjb250aW51ZTtcbiAgICB0eXBvZ3JhcGhpZXNbdmFyaWFibGVOYW1lXSA9IHRva2VuVG9Gb250RGVzY3JpcHRpb24odHlwb1Rva2VuLnZhbHVlLCBoZWxwZXIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGFzc05hbWUsXG4gICAgdHlwb2dyYXBoaWVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIHRva2VuVG9Gb250RGVzY3JpcHRpb24oXG4gIHZhbHVlOiBUeXBvZ3JhcGh5VG9rZW5WYWx1ZSxcbiAgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXJcbik6IEZvbnREZXNjcmlwdGlvbiB7XG4gIGNvbnN0IGZvbnRTaXplID0gdmFsdWUuZm9udFNpemUubWVhc3VyZTtcbiAgcmV0dXJuIHtcbiAgICBsaW5lSGVpZ2h0OiBtYXBNZWFzdXJlbWVudFByb3AodmFsdWUubGluZUhlaWdodCwgaGVscGVyLCBmb250U2l6ZSksXG4gICAgZm9udFNpemU6IG1hcE1lYXN1cmVtZW50UHJvcCh2YWx1ZS5mb250U2l6ZSwgaGVscGVyLCBmb250U2l6ZSksXG4gICAgZm9udEZhbWlseTogbWFwRm9udEZhbWlseSh2YWx1ZS5mb250RmFtaWx5LCB2YWx1ZS5mb250V2VpZ2h0LCBoZWxwZXIpLFxuICAgIGZvbnRXZWlnaHQ6IG1hcEZvbnRXZWlnaHQodmFsdWUuZm9udFdlaWdodCwgaGVscGVyKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiBtYXBNZWFzdXJlbWVudFByb3AodmFsdWUubGV0dGVyU3BhY2luZywgaGVscGVyLCBmb250U2l6ZSksXG4gICAgZGVjb3JhdGlvbjogbWFwRm9udERlY29yYXRpb25Qcm9wKHZhbHVlLnRleHREZWNvcmF0aW9uLCBoZWxwZXIpLFxuICB9O1xufVxuXG50eXBlIEZvbnRQcm9wID0gTGluZUhlaWdodFRva2VuVmFsdWUgfCBGb250U2l6ZVRva2VuVmFsdWUgfCBMZXR0ZXJTcGFjaW5nVG9rZW5WYWx1ZTtcblxuZnVuY3Rpb24gbWFwTWVhc3VyZW1lbnRQcm9wKHByb3A6IFBpY2s8Rm9udFByb3AsIFwicmVmZXJlbmNlZFRva2VuSWRcIiB8IFwibWVhc3VyZVwiIHwgXCJ1bml0XCI+IHwgbnVsbCwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIsIGZvbnRTaXplOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoIXByb3ApIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmIChwcm9wLnJlZmVyZW5jZWRUb2tlbklkKSB7XG4gICAgcmV0dXJuIGhlbHBlci5yZXNvbHZlVG9rZW5SZWZlcmVuY2UocHJvcC5yZWZlcmVuY2VkVG9rZW5JZClcbiAgfVxuICBpZiAocHJvcC51bml0ID09IFVuaXQucGVyY2VudCkge1xuICAgIHJldHVybiAoZm9udFNpemUgLyAxMDAgKiBwcm9wLm1lYXN1cmUpLnRvRml4ZWQoMik7XG4gIH1cbiAgcmV0dXJuIGAke3Byb3AubWVhc3VyZX1gO1xufVxuXG5mdW5jdGlvbiBtYXBGb250RmFtaWx5KHByb3A6IEZvbnRGYW1pbHlUb2tlblZhbHVlIHwgbnVsbCwgd2VpZ2h0OiBGb250V2VpZ2h0VG9rZW5WYWx1ZSB8IG51bGwsIGhlbHBlcjogUmVmZXJlbmNlSGVscGVyKSB7XG4gIGlmICghcHJvcCkge1xuICAgIHJldHVybiAnbnVsbCc7XG4gIH1cbiAgaWYgKHByb3AucmVmZXJlbmNlZFRva2VuSWQpIHtcbiAgICByZXR1cm4gaGVscGVyLnJlc29sdmVUb2tlblJlZmVyZW5jZShwcm9wLnJlZmVyZW5jZWRUb2tlbklkKVxuICB9XG4gIHJldHVybiBwcm9wLnRleHQ7XG59XG5cbmNvbnN0IGZvbnRXZWlnaHRNYXBwaW5nID0ge1xuICAncmVndWxhcic6ICdGb250V2VpZ2h0Lnc0MDAnLFxuICAnbWVkaXVtJzogJ0ZvbnRXZWlnaHQudzUwMCcsXG4gICdzZW1pYm9sZCc6ICdGb250V2VpZ2h0Lnc2MDAnLFxuICAnNTAwJzogJ0ZvbnRXZWlnaHQudzUwMCcsXG4gICc2MDAnOiAnRm9udFdlaWdodC53NjAwJyxcbiAgJzcwMCc6ICdGb250V2VpZ2h0Lnc3MDAnLFxufVxuXG5mdW5jdGlvbiBtYXBGb250V2VpZ2h0KHByb3A6IEZvbnRXZWlnaHRUb2tlblZhbHVlIHwgbnVsbCwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpIHtcbiAgaWYgKCFwcm9wKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAocHJvcC5yZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgIHJldHVybiBoZWxwZXIucmVzb2x2ZVRva2VuUmVmZXJlbmNlKHByb3AucmVmZXJlbmNlZFRva2VuSWQpXG4gIH1cblxuICByZXR1cm4gZm9udFdlaWdodE1hcHBpbmdbcHJvcC50ZXh0LnRvTG93ZXJDYXNlKCldID8/ICdGb250V2VpZ2h0Lnc0MDAnO1xufVxuXG5mdW5jdGlvbiBtYXBGb250RGVjb3JhdGlvblByb3AocHJvcDogVGV4dERlY29yYXRpb25Ub2tlblZhbHVlIHwgbnVsbCwgaGVscGVyOiBSZWZlcmVuY2VIZWxwZXIpIHtcbiAgaWYgKCFwcm9wKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAocHJvcC5yZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgIHJldHVybiBoZWxwZXIucmVzb2x2ZVRva2VuUmVmZXJlbmNlKHByb3AucmVmZXJlbmNlZFRva2VuSWQpXG4gIH1cbiAgcmV0dXJuIGBUZXh0RGVjb3JhdGlvbi4ke3Byb3AudmFsdWU/LnRvTG93ZXJDYXNlKCkgPz8gJ25vbmUnfWA7XG59IiwiaW1wb3J0IHsgTmFtaW5nSGVscGVyLCBTdHJpbmdDYXNlIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9leHBvcnQtaGVscGVyc1wiO1xuaW1wb3J0IHsgQ29sb3JUb2tlbiwgVG9rZW4sIFRva2VuR3JvdXAsIFRva2VuVHlwZSwgVHlwb2dyYXBoeVRva2VuIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCI7XG5cbi8vIHNlbWFudGljIHRva2VucyByZWZlcmVuY2UgcHJpbWl0aXZlIHRva2Vuc1xuLy8gdGhlcmVmb3JlIGEgcHJpbWl0aXZlIHRva2VuIGlzIGEgdG9rZW4gXG4vLyB3aXRoIGFuIG51bGwgcmVmZXJlbmNlVG9rZW5JZFxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHRva2VuOiBUb2tlbik6IGJvb2xlYW4ge1xuICAgIGlmICghKFwidmFsdWVcIiBpbiB0b2tlbikpIHJldHVybiB0cnVlXG4gICAgaWYgKCEoXCJyZWZlcmVuY2VUb2tlbklkXCIgaW4gKHRva2VuIGFzIENvbG9yVG9rZW4pKSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gKHRva2VuIGFzIENvbG9yVG9rZW4pLnZhbHVlLnJlZmVyZW5jZWRUb2tlbklkID09IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VtYW50aWModG9rZW46IFRva2VuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh0b2tlbilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuVmFyaWFibGVOYW1lKHRva2VuOiBUb2tlbiwgcGFyZW50OiBUb2tlbkdyb3VwLCBwcmVmaXggPSBcImNvbG9yXCIpOiBzdHJpbmcge1xuICAgIHJldHVybiBOYW1pbmdIZWxwZXIuY29kZVNhZmVWYXJpYWJsZU5hbWVGb3JUb2tlbih0b2tlbiwgU3RyaW5nQ2FzZS5jYW1lbENhc2UsIHBhcmVudCwgcHJlZml4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBWYXJpYWJsZU5hbWUoZ3JvdXA6IFRva2VuR3JvdXApOiBzdHJpbmcge1xuICAgIHJldHVybiBOYW1pbmdIZWxwZXIuY29kZVNhZmVWYXJpYWJsZU5hbWUoW1wiY29sb3JcIiwgZ3JvdXAubmFtZV0sIFN0cmluZ0Nhc2UuY2FtZWxDYXNlLClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsdXR0ZXJDb2xvclZhbHVlKHRva2VuOiBDb2xvclRva2VuKSB7XG4gICAgY29uc3QgaGV4ID0gdG9rZW4udG9IZXg4KCk7XG4gICAgY29uc3QgYWxwaGEgPSBoZXguc2xpY2UoNywgOSkudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCByZ2IgPSBoZXguc2xpY2UoMSwgNykudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gYENvbG9yKDB4JHthbHBoYX0ke3JnYn0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuU2hhZGVOYW1lKHRva2VuOiBDb2xvclRva2VuLCB0b2tlbkdyb3VwOiBUb2tlbkdyb3VwKSB7XG4gICAgcmV0dXJuIE5hbWluZ0hlbHBlci5jb2RlU2FmZVZhcmlhYmxlTmFtZShbJ2NvbG9yJywgdG9rZW5Hcm91cC5uYW1lXSwgU3RyaW5nQ2FzZS5jYW1lbENhc2UpICsgYC5zaGFkZSR7dG9rZW4ubmFtZX1gO1xufVxuXG5leHBvcnQgdHlwZSBSZWZlcmVuY2VIZWxwZXIgPSBSZXR1cm5UeXBlPHR5cGVvZiByZWZlcmVuY2VIZWxwZXI+XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9rZW5WYXJpYWJsZU5hbWUodG9rZW46IFRva2VuLCBwYXJlbnQ6IFRva2VuR3JvdXAsIHByZWZpeDogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmICh0b2tlbi50b2tlblR5cGUgPT0gVG9rZW5UeXBlLmNvbG9yICYmICFpc05hTihwYXJzZUludCh0b2tlbi5uYW1lKSkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHNoYWRlLCBhcyB0aG9zZSB0b2tlbiBhcmUgY29sb3IgdG9rZW5zIHdpdGggbmFtZXMgY29uc2lzdGluZyBvbmx5IG9mIGRpZ2l0c1xuICAgICAgICByZXR1cm4gdG9rZW5TaGFkZU5hbWUodG9rZW4gYXMgQ29sb3JUb2tlbiwgcGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIE5hbWluZ0hlbHBlci5jb2RlU2FmZVZhcmlhYmxlTmFtZUZvclRva2VuKHRva2VuLCBTdHJpbmdDYXNlLmNhbWVsQ2FzZSwgcGFyZW50LCBwcmVmaXgpO1xufVxuXG5jb25zdCBkdXBsaWNhdGVOYW1lc01hcCA9IHtcbiAgICAnaGVhZGluZ0hlYWRpbmcnOiAnaGVhZGluZycsXG4gICAgJ2JvZHlCb2R5JzogJ2JvZHknLFxufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG5ld05hbWUgPSBgJHtuYW1lfWBcbiAgICBmb3IgKGxldCBkdXAgaW4gZHVwbGljYXRlTmFtZXNNYXApIHtcbiAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUucmVwbGFjZUFsbChkdXAsIGR1cGxpY2F0ZU5hbWVzTWFwW2R1cF0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZUhlbHBlcih0b2tlbnM6IFRva2VuW10sIGdyb3VwczogVG9rZW5Hcm91cFtdKSB7XG4gICAgdmFyIHRva2VuVG9WYXJpYWJsZU5hbWUgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIHZhciB0b2tlblRvQ2xhc3NOYW1lID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz5cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVUb2tlblZhcmlhYmxlTmFtZSh0b2tlbjogVG9rZW4sIGNsYXNzTmFtZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbmFtZSA9IHRva2VuVG9WYXJpYWJsZU5hbWVbdG9rZW4uaWRdO1xuICAgICAgICBpZiAoIXRva2VuVG9WYXJpYWJsZU5hbWUuaGFzKHRva2VuLmlkKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ3JvdXBzLmZpbmQoKGdyb3VwKSA9PiBncm91cC5pZCA9PT0gdG9rZW4ucGFyZW50R3JvdXBJZCkhXG4gICAgICAgICAgICBuYW1lID0gZ2VuZXJhdGVUb2tlblZhcmlhYmxlTmFtZSh0b2tlbiwgcGFyZW50LCBwcmVmaXggPz8gbnVsbClcbiAgICAgICAgICAgIC8vIGlmIGEgdG9rZW4gaXMgbm90IHJlZmVycmluZyB0byBhIHByaW1pdGl2ZSB0b2tlblxuICAgICAgICAgICAgLy8gcmVzb2x2ZSB0aGUgZGVwZW5lbmN5IGFuZCByZWZlciB0byB0aGUgcHJpbWl0aXZlIHRva2VuXG4gICAgICAgICAgICBpZiAoKHRva2VuIGFzIENvbG9yVG9rZW4pPy52YWx1ZT8ucmVmZXJlbmNlZFRva2VuSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZJZCA9ICh0b2tlbiBhcyBDb2xvclRva2VuKS52YWx1ZS5yZWZlcmVuY2VkVG9rZW5JZCBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgdG9rZW5Ub0NsYXNzTmFtZVt0b2tlbi5pZF0gPSB0b2tlblRvQ2xhc3NOYW1lW3JlZklkXVxuICAgICAgICAgICAgICAgIHRva2VuVG9WYXJpYWJsZU5hbWVbdG9rZW4uaWRdID0gdG9rZW5Ub1ZhcmlhYmxlTmFtZVtyZWZJZF1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW5Ub0NsYXNzTmFtZVt0b2tlbi5pZF0gPSBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICB0b2tlblRvVmFyaWFibGVOYW1lW3Rva2VuLmlkXSA9IG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVUeXBvVG9rZW5WYXJpYWJsZU5hbWUodG9rZW46IFR5cG9ncmFwaHlUb2tlbiwgY2xhc3NOYW1lOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBuYW1lID0gdG9rZW5Ub1ZhcmlhYmxlTmFtZVt0b2tlbi5pZF07XG4gICAgICAgIGlmICghdG9rZW5Ub1ZhcmlhYmxlTmFtZS5oYXModG9rZW4uaWQpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBncm91cHMuZmluZCgoZ3JvdXApID0+IGdyb3VwLmlkID09PSB0b2tlbi5wYXJlbnRHcm91cElkKSFcbiAgICAgICAgICAgIG5hbWUgPSBnZW5lcmF0ZVRva2VuVmFyaWFibGVOYW1lKHRva2VuLCBwYXJlbnQsIHByZWZpeCA/PyBudWxsKVxuICAgICAgICAgICAgbmFtZSA9IHJlbW92ZUR1cGxpY2F0ZXMobmFtZSk7XG4gICAgICAgICAgICAvLyBpZiBhIHRva2VuIGlzIG5vdCByZWZlcnJpbmcgdG8gYSBwcmltaXRpdmUgdG9rZW5cbiAgICAgICAgICAgIC8vIHJlc29sdmUgdGhlIGRlcGVuZW5jeSBhbmQgcmVmZXIgdG8gdGhlIHByaW1pdGl2ZSB0b2tlblxuICAgICAgICAgICAgdG9rZW5Ub0NsYXNzTmFtZVt0b2tlbi5pZF0gPSBjbGFzc05hbWVcbiAgICAgICAgICAgIHRva2VuVG9WYXJpYWJsZU5hbWVbdG9rZW4uaWRdID0gbmFtZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRva2VuUmVmZXJlbmNlKHJlZmVyZW5jZWRUb2tlbklkOiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFyZWZlcmVuY2VkVG9rZW5JZCkge1xuICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVmZXJlbmNlID0gdG9rZW5Ub1ZhcmlhYmxlTmFtZVtyZWZlcmVuY2VkVG9rZW5JZF0hO1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdG9rZW5Ub0NsYXNzTmFtZVtyZWZlcmVuY2VkVG9rZW5JZF0hO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lICsgXCIuXCIgKyByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5zRm9yVHlwZTxUIGV4dGVuZHMgVG9rZW4+KHRva2VuVHlwZTogVG9rZW5UeXBlKSB7XG4gICAgICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKCh0KSA9PiB0LnRva2VuVHlwZSA9PT0gdG9rZW5UeXBlKSBhcyBUW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JvdXBzRm9yVHlwZSh0b2tlblR5cGU6IFRva2VuVHlwZSkge1xuICAgICAgICByZXR1cm4gZ3JvdXBzLmZpbHRlcigodCkgPT4gdC50b2tlblR5cGUgPT09IHRva2VuVHlwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VW5wcm9jZXNzZWRUb2tlbnNGb3JUeXBlPFQgZXh0ZW5kcyBUb2tlbj4odG9rZW5UeXBlOiBUb2tlblR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRva2Vucy5maWx0ZXIoKHQpID0+IHQudG9rZW5UeXBlID09PSB0b2tlblR5cGUgJiYgISh0LmlkIGluIHRva2VuVG9WYXJpYWJsZU5hbWUpKSBhcyBUW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzb2x2ZVRva2VuVmFyaWFibGVOYW1lLFxuICAgICAgICByZXNvbHZlVHlwb1Rva2VuVmFyaWFibGVOYW1lLFxuICAgICAgICByZXNvbHZlVG9rZW5SZWZlcmVuY2UsXG4gICAgICAgIGdldFRva2Vuc0ZvclR5cGUsXG4gICAgICAgIGdldEdyb3Vwc0ZvclR5cGUsXG4gICAgICAgIGdldFVucHJvY2Vzc2VkVG9rZW5zRm9yVHlwZSxcbiAgICB9XG59IiwiaW1wb3J0IHsgRXRhIH0gZnJvbSBcImV0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29sb3JTY2hlbWUoZXRhOiBFdGEsIGRhdGE6IENvbG9yU2NoZW1lVGVtcGxhdGVEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXRhLnJlbmRlclN0cmluZyhjb2xvclNjaGVtZVRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IHR5cGUgQ29sb3JTY2hlbWVUZW1wbGF0ZURhdGEgPSB7XG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICBjb2xvcnM6IEFycmF5PHN0cmluZz5cbiAgdGhlbWVzOiBSZWNvcmQ8c3RyaW5nLCBNYXA8c3RyaW5nLHN0cmluZz4+XG59XG5cbmNvbnN0IGNvbG9yU2NoZW1lVGVtcGxhdGUgPSBgXG5pbXBvcnQgJ3BhY2thZ2U6Zmx1dHRlci9tYXRlcmlhbC5kYXJ0JztcbmltcG9ydCAncGFja2FnZTpzZXZfZGVzaWduX3Rva2Vucy9zcmMvY29sb3JzL3ByaW1pdGl2ZV9jb2xvcnMuZGFydCc7XG5cbi8qIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IFN1cGVybm92YSwgZG9uJ3QgY2hhbmdlIGJ5IGhhbmQgKi9cbkBpbW11dGFibGVcbmNsYXNzIDwlPWl0LmNsYXNzTmFtZSU+IGV4dGVuZHMgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IHtcbiAgY29uc3QgPCU9aXQuY2xhc3NOYW1lJT4oe1xuICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gICAgcmVxdWlyZWQgdGhpcy48JT1jb2xvciU+LFxuICA8JSB9ICU+XG4gIH0pO1xuXG4gIDwlIGZvcih2YXIgdGhlbWVOYW1lIGluIGl0LnRoZW1lcykge1xuICAgIHZhciB0aGVtZSA9IGl0LnRoZW1lc1t0aGVtZU5hbWVdXG4gICAgJT5cbiAgZmFjdG9yeSA8JT1pdC5jbGFzc05hbWUlPi48JT10aGVtZU5hbWUlPigpID0+IDwlPWl0LmNsYXNzTmFtZSU+KFxuICAgIDwlIGZvcih2YXIgY29sb3Igb2YgaXQuY29sb3JzKSB7JT5cbiAgICAgIDwlPWNvbG9yJT46IDwlPXRoZW1lW2NvbG9yXSU+LFxuICAgIDwlIH0gJT5cbiAgICAgICk7XG4gIDwlIH0gJT5cblxuICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gIGZpbmFsIENvbG9yIDwlPWNvbG9yJT47XG4gIDwlIH0gJT5cblxuICBAb3ZlcnJpZGVcbiAgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IGNvcHlXaXRoKHtcbiAgICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gICAgQ29sb3I/IDwlPWNvbG9yJT4sXG4gICAgPCUgfSAlPlxuICB9KSB7XG4gICAgcmV0dXJuIDwlPWl0LmNsYXNzTmFtZSU+KFxuICAgICAgPCUgZm9yKHZhciBjb2xvciBvZiBpdC5jb2xvcnMpIHslPlxuICAgICAgPCU9Y29sb3IlPjpcbiAgICAgICAgPCU9Y29sb3IlPiA/PyB0aGlzLjwlPWNvbG9yJT4sXG4gICAgICA8JSB9ICU+XG4gICAgKTtcbiAgfVxuXG4gIEBvdmVycmlkZVxuICBUaGVtZUV4dGVuc2lvbjw8JT1pdC5jbGFzc05hbWUlPj4gbGVycChcbiAgICA8JT1pdC5jbGFzc05hbWUlPj8gb3RoZXIsXG4gICAgZG91YmxlIHQsXG4gICkge1xuICAgIGlmIChvdGhlciBpcyEgPCU9aXQuY2xhc3NOYW1lJT4pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gPCU9aXQuY2xhc3NOYW1lJT4oXG4gICAgICA8JSBmb3IodmFyIGNvbG9yIG9mIGl0LmNvbG9ycykgeyU+XG4gIDwlPWNvbG9yJT46IENvbG9yLmxlcnAoXG4gICAgICAgIDwlPWNvbG9yJT4sXG4gICAgICAgIG90aGVyLjwlPWNvbG9yJT4sXG4gICAgICAgIHQsXG4gICAgICApISxcbiAgICAgIDwlIH0gJT5cbiAgICApO1xuICB9XG4gIFxuICBzdGF0aWMgPCU9aXQuY2xhc3NOYW1lJT4gb2YoQnVpbGRDb250ZXh0IGNvbnRleHQpID0+XG4gICAgICBUaGVtZS5vZihjb250ZXh0KS5leHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+KCkhO1xufVxuYFxuXG5cbiIsImltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNvbnN0YW50c0ZpbGUoZXRhOiBFdGEsIGRhdGE6IENvbnN0YW50c1RlbXBsYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXRhLnJlbmRlclN0cmluZyhjb25zdGFudHNUZW1wbGF0ZSwgZGF0YSk7XG59XG5cbmV4cG9ydCB0eXBlIENvbnN0YW50c1RlbXBsYXRlID0ge1xuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgdHlwZU5hbWU6IHN0cmluZztcbiAgdmFyaWFibGVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+LFxufVxuXG5jb25zdCBjb25zdGFudHNUZW1wbGF0ZSA9IGBcbmltcG9ydCAncGFja2FnZTpmbHV0dGVyL21hdGVyaWFsLmRhcnQnO1xuXG4vKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCBieSBTdXBlcm5vdmEsIGRvbid0IGNoYW5nZSBieSBoYW5kICovXG5AaW1tdXRhYmxlXG5jbGFzcyA8JT1pdC5jbGFzc05hbWUlPiB7XG4gIDwlIGZvciAodmFyIG5hbWUgaW4gaXQudmFyaWFibGVzKSB7JT5cbiAgc3RhdGljIGNvbnN0IDwlPWl0LnR5cGVOYW1lJT4gPCU9bmFtZSU+ID0gPCU9aXQudmFyaWFibGVzW25hbWVdJT47XG4gIDwlIH0gJT5cbn1cbmBcblxuIiwiaW1wb3J0IHsgRXRhIH0gZnJvbSBcImV0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJpbWl0aXZlQ29sb3JzKGV0YTogRXRhLCBkYXRhOiBQcmltaXRpdmVDb2xvcnNUZW1wbGF0ZURhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBldGEucmVuZGVyU3RyaW5nKHByaW1pdGl2ZUNvbG9yc1RlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlQ29sb3JzVGVtcGxhdGVEYXRhID0ge1xuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgc3dhdGNoZXM6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIHN0cmluZz4+LFxuICBjb2xvcnM6IE1hcDxzdHJpbmcsIHN0cmluZz5cbn1cblxuY29uc3QgcHJpbWl0aXZlQ29sb3JzVGVtcGxhdGUgPSBgXG5pbXBvcnQgJ3BhY2thZ2U6Zmx1dHRlci9tYXRlcmlhbC5kYXJ0JztcbmltcG9ydCAncGFja2FnZTpzZXZfZGVzaWduX3Rva2Vucy9zcmMvY29sb3JzL29mZmVuYnVyZ19jb2xvcl9zd2F0Y2guZGFydCc7XG5cbi8qIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IFN1cGVybm92YSwgZG9uJ3QgY2hhbmdlIGJ5IGhhbmQgKi9cbmNsYXNzIDwlPWl0LmNsYXNzTmFtZSU+IHtcbiAgPCUgZm9yKHZhciBzd2F0Y2ggaW4gaXQuc3dhdGNoZXMpIHslPlxuICBzdGF0aWMgY29uc3QgT2ZmZW5idXJnQ29sb3JTd2F0Y2ggPCU9c3dhdGNoJT4gPSBPZmZlbmJ1cmdDb2xvclN3YXRjaChcbiAgICAweEZGMjBBMzgxLFxuICAgIHtcbiAgICAgIDwlIGZvcih2YXIgc2hhZGUgaW4gaXQuc3dhdGNoZXNbc3dhdGNoXSkgeyU+XG4gICAgICBPZmZlbmJ1cmdDb2xvclNoYWRlLnNoYWRlPCU9c2hhZGUlPjogPCU9aXQuc3dhdGNoZXNbc3dhdGNoXVtzaGFkZV0lPixcbiAgICAgIDwlIH0gJT5cbiAgICB9LFxuICApOzwlIH0gJT5cblxuICA8JSBmb3IgKHZhciBjb2xvciBpbiBpdC5jb2xvcnMpIHslPlxuICBzdGF0aWMgY29uc3QgQ29sb3IgPCU9Y29sb3IlPiA9IDwlPWl0LmNvbG9yc1tjb2xvcl0lPjtcbiAgPCUgfSAlPlxufVxuYFxuXG5cbiIsImltcG9ydCB7IEV0YSB9IGZyb20gXCJldGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNoYWRvd3MoZXRhOiBFdGEsIGRhdGE6IFNoYWRvd1RlbXBsYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGV0YS5yZW5kZXJTdHJpbmcoc2hhZG93c1RlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IHR5cGUgU2hhZG93RGF0YSA9IHtcbiAgY29sb3I6IHN0cmluZyxcbiAgYmx1clN0eWxlOiBzdHJpbmcsXG4gIG9mZnNldFg6IHN0cmluZyxcbiAgb2Zmc2V0WTogc3RyaW5nLFxuICBibHVyUmFkaXVzOiBzdHJpbmcsXG4gIHNwcmVhZFJhZGl1czogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBTaGFkb3dUZW1wbGF0ZSA9IHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIHZhcmlhYmxlczogTWFwPHN0cmluZywgU2hhZG93RGF0YT4sXG59XG5cbmNvbnN0IHNoYWRvd3NUZW1wbGF0ZSA9IGBcbmltcG9ydCAncGFja2FnZTpmbHV0dGVyL21hdGVyaWFsLmRhcnQnO1xuXG4vKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCBieSBTdXBlcm5vdmEsIGRvbid0IGNoYW5nZSBieSBoYW5kICovXG5AaW1tdXRhYmxlXG5jbGFzcyA8JT1pdC5jbGFzc05hbWUlPiB7XG5cbiAgPCUgZm9yICh2YXIgbmFtZSBpbiBpdC52YXJpYWJsZXMpIHslPlxuICA8JSB2YXIgc2hhZG93ID0gaXQudmFyaWFibGVzW25hbWVdICU+XG4gIHN0YXRpYyBjb25zdCBCb3hTaGFkb3cgPCU9bmFtZSU+ID0gQm94U2hhZG93KFxuICAgIGNvbG9yOiA8JT1zaGFkb3cuY29sb3IlPixcbiAgICBibHVyU3R5bGU6IDwlPXNoYWRvdy5ibHVyU3R5bGUlPixcbiAgICBvZmZzZXQ6IE9mZnNldCg8JT1zaGFkb3cub2Zmc2V0WCU+LCA8JT1zaGFkb3cub2Zmc2V0WSU+KSxcbiAgICBibHVyUmFkaXVzOiA8JT1zaGFkb3cuYmx1clJhZGl1cyU+LFxuICAgIHNwcmVhZFJhZGl1czogPCU9c2hhZG93LnNwcmVhZFJhZGl1cyU+LFxuICApO1xuICA8JSB9ICU+XG59XG5gIiwiaW1wb3J0IHsgRXRhIH0gZnJvbSBcImV0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVHlwb2dyYXBoeVNjaGVtZShldGE6IEV0YSwgZGF0YTogVHlwb2dyYXBoeVRlbXBsYXRlRGF0YSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV0YS5yZW5kZXJTdHJpbmcodHlwb2dyYXBoeVRlbXBsYXRlLCBkYXRhKTtcbn1cblxuZXhwb3J0IHR5cGUgRm9udERlc2NyaXB0aW9uID0ge1xuICBsaW5lSGVpZ2h0OiBzdHJpbmcsXG4gIGZvbnRTaXplOiBzdHJpbmcsXG4gIGZvbnRGYW1pbHk6IHN0cmluZyxcbiAgZm9udFdlaWdodDogc3RyaW5nLFxuICBsZXR0ZXJTcGFjaW5nOiBzdHJpbmcsXG4gIGRlY29yYXRpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVHlwb2dyYXBoeVRlbXBsYXRlRGF0YSA9IHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIHR5cG9ncmFwaGllczogTWFwPFN0cmluZywgRm9udERlc2NyaXB0aW9uPixcbn1cblxuY29uc3QgdHlwb2dyYXBoeVRlbXBsYXRlID0gYFxuaW1wb3J0ICdwYWNrYWdlOmZsdXR0ZXIvbWF0ZXJpYWwuZGFydCc7XG5pbXBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvZm9udF9zaXplcy5kYXJ0JztcbmltcG9ydCAncGFja2FnZTpzZXZfZGVzaWduX3Rva2Vucy9zcmMvdHlwb2dyYXBoeS9sZXR0ZXJfc3BhY2luZ3MuZGFydCc7XG5pbXBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvbGluZV9oZWlnaHRzLmRhcnQnO1xuXG5leHBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvZm9udF9zaXplcy5kYXJ0JztcbmV4cG9ydCAncGFja2FnZTpzZXZfZGVzaWduX3Rva2Vucy9zcmMvdHlwb2dyYXBoeS9sZXR0ZXJfc3BhY2luZ3MuZGFydCc7XG5leHBvcnQgJ3BhY2thZ2U6c2V2X2Rlc2lnbl90b2tlbnMvc3JjL3R5cG9ncmFwaHkvbGluZV9oZWlnaHRzLmRhcnQnO1xuXG5cbi8qIFRoaXMgZmlsZSB3YXMgZ2VuZXJhdGVkIGJ5IFN1cGVybm92YSwgZG9uJ3QgY2hhbmdlIGJ5IGhhbmQgKi9cbkBpbW11dGFibGVcbmNsYXNzIDwlPWl0LmNsYXNzTmFtZSU+IGV4dGVuZHMgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IHtcbiAgY29uc3QgPCU9aXQuY2xhc3NOYW1lJT4oe1xuICA8JSBmb3IodmFyIHR5cG9zIGluIGl0LnR5cG9ncmFwaGllcykgeyU+XG4gICAgcmVxdWlyZWQgdGhpcy48JT10eXBvcyU+LFxuICA8JSB9ICU+XG4gIH0pO1xuXG4gIGZhY3RvcnkgPCU9aXQuY2xhc3NOYW1lJT4uaW5pdChDb2xvciBkZWZhdWx0VGV4dENvbG9yKSA9PiA8JT1pdC5jbGFzc05hbWUlPihcbiAgICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgICAgIDwlPXR5cG8lPjogIFRleHRTdHlsZShcbiAgICAgICAgZm9udFNpemU6IDwlPWl0LnR5cG9ncmFwaGllc1t0eXBvXS5mb250U2l6ZSU+LFxuICAgICAgICBoZWlnaHQ6IDwlPWl0LnR5cG9ncmFwaGllc1t0eXBvXS5saW5lSGVpZ2h0JT4gLyA8JT1pdC50eXBvZ3JhcGhpZXNbdHlwb10uZm9udFNpemUlPiwgXG4gICAgICAgIGZvbnRGYW1pbHk6ICc8JT1pdC50eXBvZ3JhcGhpZXNbdHlwb10uZm9udEZhbWlseSU+JyxcbiAgICAgICAgZm9udFdlaWdodDogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmZvbnRXZWlnaHQlPixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmxldHRlclNwYWNpbmclPixcbiAgICAgICAgZGVjb3JhdGlvbjogPCU9aXQudHlwb2dyYXBoaWVzW3R5cG9dLmRlY29yYXRpb24lPixcbiAgICAgICAgY29sb3I6IGRlZmF1bHRUZXh0Q29sb3IsXG4gICAgICApLFxuICAgIDwlIH0gJT5cbiAgICAgICk7XG5cbiAgPCUgZm9yKHZhciB0eXBvIGluIGl0LnR5cG9ncmFwaGllcykgeyU+XG4gIGZpbmFsIFRleHRTdHlsZSA8JT10eXBvJT47XG4gIDwlIH0gJT5cblxuICBAb3ZlcnJpZGVcbiAgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IGNvcHlXaXRoKHtcbiAgICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgICBUZXh0U3R5bGU/IDwlPXR5cG8lPixcbiAgICA8JSB9ICU+XG4gIH0pIHtcbiAgICByZXR1cm4gPCU9aXQuY2xhc3NOYW1lJT4oXG4gICAgICA8JSBmb3IodmFyIHR5cG8gaW4gaXQudHlwb2dyYXBoaWVzKSB7JT5cbiAgICAgIDwlPXR5cG8lPjpcbiAgICAgICAgPCU9dHlwbyU+ID8/IHRoaXMuPCU9dHlwbyU+LFxuICAgICAgPCUgfSAlPlxuICAgICk7XG4gIH1cblxuICBAb3ZlcnJpZGVcbiAgVGhlbWVFeHRlbnNpb248PCU9aXQuY2xhc3NOYW1lJT4+IGxlcnAoXG4gICAgPCU9aXQuY2xhc3NOYW1lJT4/IG90aGVyLFxuICAgIGRvdWJsZSB0LFxuICApIHtcbiAgICBpZiAob3RoZXIgaXMhIDwlPWl0LmNsYXNzTmFtZSU+KSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIDwlPWl0LmNsYXNzTmFtZSU+KFxuICAgICAgPCUgZm9yKHZhciB0eXBvIGluIGl0LnR5cG9ncmFwaGllcykgeyU+XG4gIDwlPXR5cG8lPjogVGV4dFN0eWxlLmxlcnAoXG4gICAgICAgIDwlPXR5cG8lPixcbiAgICAgICAgb3RoZXIuPCU9dHlwbyU+LFxuICAgICAgICB0LFxuICAgICAgKSEsXG4gICAgICA8JSB9ICU+XG4gICAgKTtcbiAgfVxuICBcbiAgc3RhdGljIDwlPWl0LmNsYXNzTmFtZSU+IG9mKEJ1aWxkQ29udGV4dCBjb250ZXh0KSA9PlxuICAgICAgVGhlbWUub2YoY29udGV4dCkuZXh0ZW5zaW9uPDwlPWl0LmNsYXNzTmFtZSU+PigpITtcbn1cbmBcblxuXG4iLCJpbXBvcnQgeyBGaWxlSGVscGVyIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9leHBvcnQtaGVscGVyc1wiXG5pbXBvcnQgeyBQdWxzYXJDb250ZXh0LCBSZW1vdGVWZXJzaW9uSWRlbnRpZmllciwgU3VwZXJub3ZhLCBUb2tlbiwgVG9rZW5Hcm91cCB9IGZyb20gXCJAc3VwZXJub3ZhaW8vc2RrLWV4cG9ydGVyc1wiXG5pbXBvcnQgeyBFdGEgfSBmcm9tIFwiZXRhXCJcbmltcG9ydCB7IGNyZWF0ZVByaW1pdGl2ZUNvbG9ycyB9IGZyb20gXCIuL2NvbnRlbnQvcHJpbWl0aXZlX2NvbG9yc1wiXG5pbXBvcnQgeyBjcmVhdGVGb250U2l6ZXMsIGNyZWF0ZUdlbmVyaWNTcGFjaW5ncywgY3JlYXRlTGV0dGVyU3BhY2luZ3MsIGNyZWF0ZUxpbmVIZWlnaHRzIH0gZnJvbSBcIi4vY29udGVudC9wcmltaXRpdmVfZGltZW5zaW9uc1wiXG5pbXBvcnQgeyBjcmVhdGVDb2xvcnMgfSBmcm9tIFwiLi9jb250ZW50L3NlbWFudGljX2NvbG9yc1wiXG5pbXBvcnQgeyBjcmVhdGVTaGFkb3dzIH0gZnJvbSBcIi4vY29udGVudC9zaGFkb3dzXCJcbmltcG9ydCB7IGNyZWF0ZVR5cG9ncmFwaHkgfSBmcm9tIFwiLi9jb250ZW50L3R5cG9ncmFwaHlcIlxuaW1wb3J0IHsgcmVmZXJlbmNlSGVscGVyIH0gZnJvbSBcIi4vY29udGVudC91dGlsXCJcbmltcG9ydCB7IHJlbmRlckNvbG9yU2NoZW1lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2NvbG9yX3NjaGVtZS50ZW1wbGF0ZVwiXG5pbXBvcnQgeyByZW5kZXJDb25zdGFudHNGaWxlIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2NvbnN0YW50cy50ZW1wbGF0ZVwiXG5pbXBvcnQgeyByZW5kZXJQcmltaXRpdmVDb2xvcnMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvcHJpbWl0aXZlX2NvbG9ycy50ZW1wbGF0ZVwiXG5pbXBvcnQgeyByZW5kZXJTaGFkb3dzIH0gZnJvbSBcIi4vdGVtcGxhdGVzL3NoYWRvd3MudGVtcGxhdGVcIlxuaW1wb3J0IHsgcmVuZGVyVHlwb2dyYXBoeVNjaGVtZSB9IGZyb20gXCIuL3RlbXBsYXRlcy90eXBvZ3JhcGh5LnRlbXBsYXRlXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVG9rZW5EYXRhKFxuICBzZGs6IFN1cGVybm92YSxcbiAgY29udGV4dDogUHVsc2FyQ29udGV4dCxcbiAgcmVtb3RlVmVyc2lvbklkZW50aWZpZXI6IFJlbW90ZVZlcnNpb25JZGVudGlmaWVyLFxuKTogUHJvbWlzZTxbVG9rZW5bXSwgVG9rZW5Hcm91cFtdLCBSZWNvcmQ8c3RyaW5nLCBUb2tlbltdPl0+IHtcbiAgLy8gRmV0Y2ggdGhlIG5lY2Vzc2FyeSBkYXRhXG4gIGxldCB0b2tlbnMgPSBhd2FpdCBzZGsudG9rZW5zLmdldFRva2VucyhyZW1vdGVWZXJzaW9uSWRlbnRpZmllcilcbiAgbGV0IHRva2VuR3JvdXBzID0gYXdhaXQgc2RrLnRva2Vucy5nZXRUb2tlbkdyb3VwcyhyZW1vdGVWZXJzaW9uSWRlbnRpZmllcilcblxuICAvLyBGaWx0ZXIgYnkgYnJhbmQsIGlmIHNwZWNpZmllZCBieSB0aGUgVlNDb2RlIGV4dGVuc2lvbiBvciBwaXBlbGluZSBjb25maWd1cmF0aW9uXG4gIGlmIChjb250ZXh0LmJyYW5kSWQpIHtcbiAgICB0b2tlbnMgPSB0b2tlbnMuZmlsdGVyKCh0b2tlbikgPT4gdG9rZW4uYnJhbmRJZCA9PT0gY29udGV4dC5icmFuZElkKVxuICAgIHRva2VuR3JvdXBzID0gdG9rZW5Hcm91cHMuZmlsdGVyKCh0b2tlbkdyb3VwKSA9PiB0b2tlbkdyb3VwLmJyYW5kSWQgPT09IGNvbnRleHQuYnJhbmRJZClcbiAgfVxuXG4gIC8vIEFwcGx5IHRoZW1lLCBpZiBzcGVjaWZpZWQgYnkgdGhlIFZTQ29kZSBleHRlbnNpb24gb3IgcGlwZWxpbmUgY29uZmlndXJhdGlvblxuICBsZXQgdGhlbWVUb2tlbnM6IFJlY29yZDxzdHJpbmcsIFRva2VuW10+ID0ge31cbiAgY29uc3QgdGhlbWVzID0gYXdhaXQgc2RrLnRva2Vucy5nZXRUb2tlblRoZW1lcyhyZW1vdGVWZXJzaW9uSWRlbnRpZmllcilcbiAgdGhlbWVUb2tlbnNbXCJ3ZWJEZWZhdWx0XCJdID0gdG9rZW5zO1xuICBmb3IgKGNvbnN0IHRoZW1lIG9mIHRoZW1lcykge1xuICAgIGNvbnN0IGN1cnJlbnRUb2tlbnMgPSBhd2FpdCBzZGsudG9rZW5zLmNvbXB1dGVUb2tlbnNCeUFwcGx5aW5nVGhlbWVzKHRva2VucywgW3RoZW1lXSk7XG4gICAgaWYgKHRoZW1lLmNvZGVOYW1lID09IFwibW9iaWxlXCIpIHtcbiAgICAgIHRva2VucyA9IGN1cnJlbnRUb2tlbnNcbiAgICB9XG4gICAgdGhlbWVUb2tlbnNbdGhlbWUuY29kZU5hbWVdID0gY3VycmVudFRva2VucztcbiAgfVxuICByZXR1cm4gW3Rva2VucywgdG9rZW5Hcm91cHMsIHRoZW1lVG9rZW5zXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NUb2tlbkRhdGEodG9rZW5zOiBUb2tlbltdLCB0b2tlbkdyb3VwczogVG9rZW5Hcm91cFtdLCB0aGVtZXM6IFJlY29yZDxzdHJpbmcsIFRva2VuW10+KSB7XG4gIGNvbnN0IGV0YSA9IG5ldyBFdGEoe1xuICAgIGRlYnVnOiB0cnVlLFxuICB9KTtcblxuXG4gIGNvbnN0IGhlbHBlciA9IHJlZmVyZW5jZUhlbHBlcih0b2tlbnMsIHRva2VuR3JvdXBzKTtcblxuICBjb25zdCBwcmltaXRpdmVUZW1wbGF0ZURhdGEgPSBjcmVhdGVQcmltaXRpdmVDb2xvcnMoaGVscGVyKTtcbiAgY29uc3Qgc2VtYW50aWNzQ29sb3JEYXRhID0gY3JlYXRlQ29sb3JzKGhlbHBlciwgdGhlbWVzKTtcbiAgY29uc3Qgc2hhZG93c0RhdGEgPSBjcmVhdGVTaGFkb3dzKGhlbHBlcik7XG5cbiAgY29uc3QgZm9udFNpemVzRGF0YSA9IGNyZWF0ZUZvbnRTaXplcyhoZWxwZXIpO1xuICBjb25zdCBsaW5lSGVpZ2h0RGF0YSA9IGNyZWF0ZUxpbmVIZWlnaHRzKGhlbHBlcik7XG4gIGNvbnN0IGxldHRlclNwYWNpbmdEYXRhID0gY3JlYXRlTGV0dGVyU3BhY2luZ3MoaGVscGVyKTtcbiAgY29uc3Qgc3BhY2luZ0RhdGEgPSBjcmVhdGVHZW5lcmljU3BhY2luZ3MoaGVscGVyKTtcblxuICBjb25zdCB0eXBvZ3JhcGh5VGVtcGxhdGVEYXRhID0gY3JlYXRlVHlwb2dyYXBoeShoZWxwZXIpO1xuXG4gIC8vIGNvbnN0IGljb25zRGF0YSA9IHByb2Nlc3NBc3NldERhdGEoKTtcbiAgcmV0dXJuIFtcbiAgICBGaWxlSGVscGVyLmNyZWF0ZVRleHRGaWxlKHtcbiAgICAgIHJlbGF0aXZlUGF0aDogXCIuL3NyYy9jb2xvcnNcIixcbiAgICAgIGZpbGVOYW1lOiBcInByaW1pdGl2ZV9jb2xvcnMuZGFydFwiLFxuICAgICAgY29udGVudDogcmVuZGVyUHJpbWl0aXZlQ29sb3JzKGV0YSwgcHJpbWl0aXZlVGVtcGxhdGVEYXRhKSxcbiAgICB9KSxcbiAgICBGaWxlSGVscGVyLmNyZWF0ZVRleHRGaWxlKHtcbiAgICAgIHJlbGF0aXZlUGF0aDogXCIuL3NyYy9jb2xvcnNcIixcbiAgICAgIGZpbGVOYW1lOiBcImNvbG9yX3NjaGVtZS5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb2xvclNjaGVtZShldGEsIHNlbWFudGljc0NvbG9yRGF0YSksXG4gICAgfSksXG4gICAgRmlsZUhlbHBlci5jcmVhdGVUZXh0RmlsZSh7XG4gICAgICByZWxhdGl2ZVBhdGg6IFwiLi9zcmMvc2hhZG93c1wiLFxuICAgICAgZmlsZU5hbWU6IFwic2hhZG93cy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJTaGFkb3dzKGV0YSwgc2hhZG93c0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImxpbmVfaGVpZ2h0cy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb25zdGFudHNGaWxlKGV0YSwgbGluZUhlaWdodERhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImZvbnRfc2l6ZXMuZGFydFwiLFxuICAgICAgY29udGVudDogcmVuZGVyQ29uc3RhbnRzRmlsZShldGEsIGZvbnRTaXplc0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL3R5cG9ncmFwaHlcIixcbiAgICAgIGZpbGVOYW1lOiBcImxldHRlcl9zcGFjaW5ncy5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJDb25zdGFudHNGaWxlKGV0YSwgbGV0dGVyU3BhY2luZ0RhdGEpLFxuICAgIH0pLFxuICAgIEZpbGVIZWxwZXIuY3JlYXRlVGV4dEZpbGUoe1xuICAgICAgcmVsYXRpdmVQYXRoOiBcIi4vc3JjL2RpbWVuc2lvbnNcIixcbiAgICAgIGZpbGVOYW1lOiBcInNwYWNpbmdzLmRhcnRcIixcbiAgICAgIGNvbnRlbnQ6IHJlbmRlckNvbnN0YW50c0ZpbGUoZXRhLCBzcGFjaW5nRGF0YSksXG4gICAgfSksXG4gICAgRmlsZUhlbHBlci5jcmVhdGVUZXh0RmlsZSh7XG4gICAgICByZWxhdGl2ZVBhdGg6IFwiLi9zcmMvdHlwb2dyYXBoeVwiLFxuICAgICAgZmlsZU5hbWU6IFwidHlwb2dyYXBoeS5kYXJ0XCIsXG4gICAgICBjb250ZW50OiByZW5kZXJUeXBvZ3JhcGh5U2NoZW1lKGV0YSwgdHlwb2dyYXBoeVRlbXBsYXRlRGF0YSksXG4gICAgfSksXG4gICAgLy8gVE9ETyBhZGQgaWNvbnMgYXMgUE5HcyBhZ2FpbiB3aXRoIHByb3BlciBhc3NldHMgcGF0aHMgaW4gU2V2SWNvbnNcbiAgICAvLyBGaWxlSGVscGVyLmNyZWF0ZVRleHRGaWxlKHtcbiAgICAvLyAgIHJlbGF0aXZlUGF0aDogXCIuL3NyYy9pY29uc1wiLFxuICAgIC8vICAgZmlsZU5hbWU6IFwiaWNvbnMuZGFydFwiLFxuICAgIC8vICAgY29udGVudDogcmVuZGVySWNvbnNGaWxlKGV0YSwgaWNvbnNEYXRhKSxcbiAgICAvLyB9KSxcbiAgXVxufVxuIiwiLyoqXG4gKiBVcHBlciBjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYW4gaW5wdXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJDYXNlRmlyc3QoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpbnB1dC5zdWJzdHIoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIFNvdXJjZTogZnRwOi8vZnRwLnVuaWNvZGUub3JnL1B1YmxpYy9VQ0QvbGF0ZXN0L3VjZC9TcGVjaWFsQ2FzaW5nLnR4dFxuICovXG52YXIgU1VQUE9SVEVEX0xPQ0FMRSA9IHtcbiAgICB0cjoge1xuICAgICAgICByZWdleHA6IC9bXFx1MDA2OV0vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpOiBcIlxcdTAxMzBcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGF6OiB7XG4gICAgICAgIHJlZ2V4cDogL1tcXHUwMDY5XS9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIGk6IFwiXFx1MDEzMFwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbHQ6IHtcbiAgICAgICAgcmVnZXhwOiAvW1xcdTAwNjlcXHUwMDZBXFx1MDEyRl1cXHUwMzA3fFxcdTAwNjlcXHUwMzA3W1xcdTAzMDBcXHUwMzAxXFx1MDMwM10vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBpzIc6IFwiXFx1MDA0OVwiLFxuICAgICAgICAgICAgasyHOiBcIlxcdTAwNEFcIixcbiAgICAgICAgICAgIMSvzIc6IFwiXFx1MDEyRVwiLFxuICAgICAgICAgICAgacyHzIA6IFwiXFx1MDBDQ1wiLFxuICAgICAgICAgICAgacyHzIE6IFwiXFx1MDBDRFwiLFxuICAgICAgICAgICAgacyHzIM6IFwiXFx1MDEyOFwiLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLyoqXG4gKiBMb2NhbGl6ZWQgdXBwZXIgY2FzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsZVVwcGVyQ2FzZShzdHIsIGxvY2FsZSkge1xuICAgIHZhciBsYW5nID0gU1VQUE9SVEVEX0xPQ0FMRVtsb2NhbGUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKGxhbmcpXG4gICAgICAgIHJldHVybiB1cHBlckNhc2Uoc3RyLnJlcGxhY2UobGFuZy5yZWdleHAsIGZ1bmN0aW9uIChtKSB7IHJldHVybiBsYW5nLm1hcFttXTsgfSkpO1xuICAgIHJldHVybiB1cHBlckNhc2Uoc3RyKTtcbn1cbi8qKlxuICogVXBwZXIgY2FzZSBhcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXJDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP2UoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLGUpOmUoKHR8fHNlbGYpLmV0YT17fSl9KHRoaXMsZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3JldHVybiBlPU9iamVjdC5hc3NpZ24/T2JqZWN0LmFzc2lnbi5iaW5kKCk6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0sZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gbih0LGUpe3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsaSh0LGUpfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHI9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9LHIodCl9ZnVuY3Rpb24gaSh0LGUpe3JldHVybiBpPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuX19wcm90b19fPWUsdH0saSh0LGUpfWZ1bmN0aW9uIGEodCxlLG4pe3JldHVybiBhPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sW10sZnVuY3Rpb24oKXt9KSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpP1JlZmxlY3QuY29uc3RydWN0LmJpbmQoKTpmdW5jdGlvbih0LGUsbil7dmFyIHI9W251bGxdO3IucHVzaC5hcHBseShyLGUpO3ZhciBhPW5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KHQscikpO3JldHVybiBuJiZpKGEsbi5wcm90b3R5cGUpLGF9LGEuYXBwbHkobnVsbCxhcmd1bWVudHMpfWZ1bmN0aW9uIHModCl7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgTWFwP25ldyBNYXA6dm9pZCAwO3JldHVybiBzPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10fHwtMT09PUZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpcmV0dXJuIHQ7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7aWYodm9pZCAwIT09ZSl7aWYoZS5oYXModCkpcmV0dXJuIGUuZ2V0KHQpO2Uuc2V0KHQsbil9ZnVuY3Rpb24gbigpe3JldHVybiBhKHQsYXJndW1lbnRzLHIodGhpcykuY29uc3RydWN0b3IpfXJldHVybiBuLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6bixlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxpKG4sdCl9LHModCl9dmFyIG89LyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLmNhY2hlPXZvaWQgMCx0aGlzLmNhY2hlPXR9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uZGVmaW5lPWZ1bmN0aW9uKHQsZSl7dGhpcy5jYWNoZVt0XT1lfSxuLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jYWNoZVt0XX0sbi5yZW1vdmU9ZnVuY3Rpb24odCl7ZGVsZXRlIHRoaXMuY2FjaGVbdF19LG4ucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPXt9fSxuLmxvYWQ9ZnVuY3Rpb24odCl7dGhpcy5jYWNoZT1lKHt9LHRoaXMuY2FjaGUsdCl9LHR9KCksYz0vKiNfX1BVUkVfXyovZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlKXt2YXIgbjtyZXR1cm4obj10LmNhbGwodGhpcyxlKXx8dGhpcykubmFtZT1cIkV0YSBFcnJvclwiLG59cmV0dXJuIG4oZSx0KSxlfSgvKiNfX1BVUkVfXyovcyhFcnJvcikpO2Z1bmN0aW9uIGwodCxlLG4pe3ZhciByPWUuc2xpY2UoMCxuKS5zcGxpdCgvXFxuLyksaT1yLmxlbmd0aCxhPXJbaS0xXS5sZW5ndGgrMTt0aHJvdyB0Kz1cIiBhdCBsaW5lIFwiK2krXCIgY29sIFwiK2ErXCI6XFxuXFxuICBcIitlLnNwbGl0KC9cXG4vKVtpLTFdK1wiXFxuICBcIitBcnJheShhKS5qb2luKFwiIFwiKStcIl5cIixuZXcgYyh0KX1mdW5jdGlvbiB1KHQsZSxuLHIpe3ZhciBpPWUuc3BsaXQoXCJcXG5cIiksYT1NYXRoLm1heChuLTMsMCkscz1NYXRoLm1pbihpLmxlbmd0aCxuKzMpLG89cixsPWkuc2xpY2UoYSxzKS5tYXAoZnVuY3Rpb24odCxlKXt2YXIgcj1lK2ErMTtyZXR1cm4ocj09bj9cIiA+PiBcIjpcIiAgICBcIikrcitcInwgXCIrdH0pLmpvaW4oXCJcXG5cIiksdT1uZXcgYygobz9vK1wiOlwiK24rXCJcXG5cIjpcImxpbmUgXCIrbitcIlxcblwiKStsK1wiXFxuXFxuXCIrdC5tZXNzYWdlKTt0aHJvdyB1Lm5hbWU9dC5uYW1lLHV9dmFyIHA9ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9LmNvbnN0cnVjdG9yO2Z1bmN0aW9uIGYodCxlKXt2YXIgbj10aGlzLmNvbmZpZyxyPWUmJmUuYXN5bmM/cDpGdW5jdGlvbjt0cnl7cmV0dXJuIG5ldyByKG4udmFyTmFtZSxcIm9wdGlvbnNcIix0aGlzLmNvbXBpbGVUb1N0cmluZy5jYWxsKHRoaXMsdCxlKSl9Y2F0Y2gobil7dGhyb3cgbiBpbnN0YW5jZW9mIFN5bnRheEVycm9yP25ldyBjKFwiQmFkIHRlbXBsYXRlIHN5bnRheFxcblxcblwiK24ubWVzc2FnZStcIlxcblwiK0FycmF5KG4ubWVzc2FnZS5sZW5ndGgrMSkuam9pbihcIj1cIikrXCJcXG5cIit0aGlzLmNvbXBpbGVUb1N0cmluZy5jYWxsKHRoaXMsdCxlKStcIlxcblwiKTpufX1mdW5jdGlvbiBoKHQsZSl7dmFyIG49dGhpcy5jb25maWcscj1lJiZlLmFzeW5jLGk9dGhpcy5jb21waWxlQm9keSxhPXRoaXMucGFyc2UuY2FsbCh0aGlzLHQpLHM9bi5mdW5jdGlvbkhlYWRlcisnXFxubGV0IGluY2x1ZGUgPSAodGVtcGxhdGUsIGRhdGEpID0+IHRoaXMucmVuZGVyKHRlbXBsYXRlLCBkYXRhLCBvcHRpb25zKTtcXG5sZXQgaW5jbHVkZUFzeW5jID0gKHRlbXBsYXRlLCBkYXRhKSA9PiB0aGlzLnJlbmRlckFzeW5jKHRlbXBsYXRlLCBkYXRhLCBvcHRpb25zKTtcXG5cXG5sZXQgX19ldGEgPSB7cmVzOiBcIlwiLCBlOiB0aGlzLmNvbmZpZy5lc2NhcGVGdW5jdGlvbiwgZjogdGhpcy5jb25maWcuZmlsdGVyRnVuY3Rpb24nKyhuLmRlYnVnPycsIGxpbmU6IDEsIHRlbXBsYXRlU3RyOiBcIicrdC5yZXBsYWNlKC9cXFxcfFwiL2csXCJcXFxcJCZcIikucmVwbGFjZSgvXFxyXFxufFxcbnxcXHIvZyxcIlxcXFxuXCIpKydcIic6XCJcIikrXCJ9O1xcblxcbmZ1bmN0aW9uIGxheW91dChwYXRoLCBkYXRhKSB7XFxuICBfX2V0YS5sYXlvdXQgPSBwYXRoO1xcbiAgX19ldGEubGF5b3V0RGF0YSA9IGRhdGE7XFxufVwiKyhuLmRlYnVnP1widHJ5IHtcIjpcIlwiKSsobi51c2VXaXRoP1wid2l0aChcIituLnZhck5hbWUrXCJ8fHt9KXtcIjpcIlwiKStcIlxcblxcblwiK2kuY2FsbCh0aGlzLGEpK1wiXFxuaWYgKF9fZXRhLmxheW91dCkge1xcbiAgX19ldGEucmVzID0gXCIrKHI/XCJhd2FpdCBpbmNsdWRlQXN5bmNcIjpcImluY2x1ZGVcIikrXCIgKF9fZXRhLmxheW91dCwgey4uLlwiK24udmFyTmFtZStcIiwgYm9keTogX19ldGEucmVzLCAuLi5fX2V0YS5sYXlvdXREYXRhfSk7XFxufVxcblwiKyhuLnVzZVdpdGg/XCJ9XCI6XCJcIikrKG4uZGVidWc/XCJ9IGNhdGNoIChlKSB7IHRoaXMuUnVudGltZUVycihlLCBfX2V0YS50ZW1wbGF0ZVN0ciwgX19ldGEubGluZSwgb3B0aW9ucy5maWxlcGF0aCkgfVwiOlwiXCIpK1wiXFxucmV0dXJuIF9fZXRhLnJlcztcXG5cIjtpZihuLnBsdWdpbnMpZm9yKHZhciBvPTA7bzxuLnBsdWdpbnMubGVuZ3RoO28rKyl7dmFyIGM9bi5wbHVnaW5zW29dO2MucHJvY2Vzc0ZuU3RyaW5nJiYocz1jLnByb2Nlc3NGblN0cmluZyhzLG4pKX1yZXR1cm4gc31mdW5jdGlvbiBkKHQpe2Zvcih2YXIgZT10aGlzLmNvbmZpZyxuPTAscj10Lmxlbmd0aCxpPVwiXCI7bjxyO24rKyl7dmFyIGE9dFtuXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSlpKz1cIl9fZXRhLnJlcys9J1wiK2ErXCInXFxuXCI7ZWxzZXt2YXIgcz1hLnQsbz1hLnZhbHx8XCJcIjtlLmRlYnVnJiYoaSs9XCJfX2V0YS5saW5lPVwiK2EubGluZU5vK1wiXFxuXCIpLFwiclwiPT09cz8oZS5hdXRvRmlsdGVyJiYobz1cIl9fZXRhLmYoXCIrbytcIilcIiksaSs9XCJfX2V0YS5yZXMrPVwiK28rXCJcXG5cIik6XCJpXCI9PT1zPyhlLmF1dG9GaWx0ZXImJihvPVwiX19ldGEuZihcIitvK1wiKVwiKSxlLmF1dG9Fc2NhcGUmJihvPVwiX19ldGEuZShcIitvK1wiKVwiKSxpKz1cIl9fZXRhLnJlcys9XCIrbytcIlxcblwiKTpcImVcIj09PXMmJihpKz1vK1wiXFxuXCIpfX1yZXR1cm4gaX12YXIgZz17XCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLCdcIic6XCImcXVvdDtcIixcIidcIjpcIiYjMzk7XCJ9O2Z1bmN0aW9uIHkodCl7cmV0dXJuIGdbdF19dmFyIHY9e2F1dG9Fc2NhcGU6ITAsYXV0b0ZpbHRlcjohMSxhdXRvVHJpbTpbITEsXCJubFwiXSxjYWNoZTohMSxjYWNoZUZpbGVwYXRoczohMCxkZWJ1ZzohMSxlc2NhcGVGdW5jdGlvbjpmdW5jdGlvbih0KXt2YXIgZT1TdHJpbmcodCk7cmV0dXJuL1smPD5cIiddLy50ZXN0KGUpP2UucmVwbGFjZSgvWyY8PlwiJ10vZyx5KTplfSxmaWx0ZXJGdW5jdGlvbjpmdW5jdGlvbih0KXtyZXR1cm4gU3RyaW5nKHQpfSxmdW5jdGlvbkhlYWRlcjpcIlwiLHBhcnNlOntleGVjOlwiXCIsaW50ZXJwb2xhdGU6XCI9XCIscmF3OlwiflwifSxwbHVnaW5zOltdLHJtV2hpdGVzcGFjZTohMSx0YWdzOltcIjwlXCIsXCIlPlwiXSx1c2VXaXRoOiExLHZhck5hbWU6XCJpdFwiLGRlZmF1bHRFeHRlbnNpb246XCIuZXRhXCJ9LG09L2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSp9fCg/IVxcJHspW15cXFxcYF0pKmAvZyx4PS8nKD86XFxcXFtcXHNcXHdcIidcXFxcYF18W15cXG5cXHInXFxcXF0pKj8nL2csXz0vXCIoPzpcXFxcW1xcc1xcd1wiJ1xcXFxgXXxbXlxcblxcclwiXFxcXF0pKj9cIi9nO2Z1bmN0aW9uIGIodCl7cmV0dXJuIHQucmVwbGFjZSgvWy4qK1xcLT9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gdyh0LGUpe3JldHVybiB0LnNsaWNlKDAsZSkuc3BsaXQoXCJcXG5cIikubGVuZ3RofWZ1bmN0aW9uIFModCl7dmFyIGU9dGhpcy5jb25maWcsbj1bXSxyPSExLGk9MCxhPWUucGFyc2U7aWYoZS5wbHVnaW5zKWZvcih2YXIgcz0wO3M8ZS5wbHVnaW5zLmxlbmd0aDtzKyspe3ZhciBvPWUucGx1Z2luc1tzXTtvLnByb2Nlc3NUZW1wbGF0ZSYmKHQ9by5wcm9jZXNzVGVtcGxhdGUodCxlKSl9ZnVuY3Rpb24gYyh0LGkpe3QmJih0PWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpLGE7cmV0dXJuIEFycmF5LmlzQXJyYXkoZS5hdXRvVHJpbSk/KGk9ZS5hdXRvVHJpbVsxXSxhPWUuYXV0b1RyaW1bMF0pOmk9YT1lLmF1dG9UcmltLChufHwhMT09PW4pJiYoaT1uKSwocnx8ITE9PT1yKSYmKGE9ciksYXx8aT9cInNsdXJwXCI9PT1pJiZcInNsdXJwXCI9PT1hP3QudHJpbSgpOihcIl9cIj09PWl8fFwic2x1cnBcIj09PWk/dD10LnRyaW1TdGFydCgpOlwiLVwiIT09aSYmXCJubFwiIT09aXx8KHQ9dC5yZXBsYWNlKC9eKD86XFxyXFxufFxcbnxcXHIpLyxcIlwiKSksXCJfXCI9PT1hfHxcInNsdXJwXCI9PT1hP3Q9dC50cmltRW5kKCk6XCItXCIhPT1hJiZcIm5sXCIhPT1hfHwodD10LnJlcGxhY2UoLyg/OlxcclxcbnxcXG58XFxyKSQvLFwiXCIpKSx0KTp0fSh0LGUscixpKSx0JiYodD10LnJlcGxhY2UoL1xcXFx8Jy9nLFwiXFxcXCQmXCIpLnJlcGxhY2UoL1xcclxcbnxcXG58XFxyL2csXCJcXFxcblwiKSxuLnB1c2godCkpKX1lLnJtV2hpdGVzcGFjZSYmKHQ9dC5yZXBsYWNlKC9bXFxyXFxuXSsvZyxcIlxcblwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSxcIlwiKSksbS5sYXN0SW5kZXg9MCx4Lmxhc3RJbmRleD0wLF8ubGFzdEluZGV4PTA7Zm9yKHZhciB1LHA9W2EuZXhlYyxhLmludGVycG9sYXRlLGEucmF3XS5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdCYmZT90K1wifFwiK2IoZSk6ZT9iKGUpOnR9LFwiXCIpLGY9bmV3IFJlZ0V4cChiKGUudGFnc1swXSkrXCIoLXxfKT9cXFxccyooXCIrcCtcIik/XFxcXHMqXCIsXCJnXCIpLGg9bmV3IFJlZ0V4cChcIid8XFxcInxgfFxcXFwvXFxcXCp8KFxcXFxzKigtfF8pP1wiK2IoZS50YWdzWzFdKStcIilcIixcImdcIik7dT1mLmV4ZWModCk7KXt2YXIgZD10LnNsaWNlKGksdS5pbmRleCk7aT11WzBdLmxlbmd0aCt1LmluZGV4O3ZhciBnPXVbMl18fFwiXCI7YyhkLHVbMV0pLGgubGFzdEluZGV4PWk7Zm9yKHZhciB5PXZvaWQgMCx2PSExO3k9aC5leGVjKHQpOyl7aWYoeVsxXSl7dmFyIFM9dC5zbGljZShpLHkuaW5kZXgpO2YubGFzdEluZGV4PWk9aC5sYXN0SW5kZXgscj15WzJdLHY9e3Q6Zz09PWEuZXhlYz9cImVcIjpnPT09YS5yYXc/XCJyXCI6Zz09PWEuaW50ZXJwb2xhdGU/XCJpXCI6XCJcIix2YWw6U307YnJlYWt9dmFyIEY9eVswXTtpZihcIi8qXCI9PT1GKXt2YXIgTz10LmluZGV4T2YoXCIqL1wiLGgubGFzdEluZGV4KTstMT09PU8mJmwoXCJ1bmNsb3NlZCBjb21tZW50XCIsdCx5LmluZGV4KSxoLmxhc3RJbmRleD1PfWVsc2VcIidcIj09PUY/KHgubGFzdEluZGV4PXkuaW5kZXgseC5leGVjKHQpP2gubGFzdEluZGV4PXgubGFzdEluZGV4OmwoXCJ1bmNsb3NlZCBzdHJpbmdcIix0LHkuaW5kZXgpKTonXCInPT09Rj8oXy5sYXN0SW5kZXg9eS5pbmRleCxfLmV4ZWModCk/aC5sYXN0SW5kZXg9Xy5sYXN0SW5kZXg6bChcInVuY2xvc2VkIHN0cmluZ1wiLHQseS5pbmRleCkpOlwiYFwiPT09RiYmKG0ubGFzdEluZGV4PXkuaW5kZXgsbS5leGVjKHQpP2gubGFzdEluZGV4PW0ubGFzdEluZGV4OmwoXCJ1bmNsb3NlZCBzdHJpbmdcIix0LHkuaW5kZXgpKX12PyhlLmRlYnVnJiYodi5saW5lTm89dyh0LHUuaW5kZXgpKSxuLnB1c2godikpOmwoXCJ1bmNsb3NlZCB0YWdcIix0LHUuaW5kZXgpfWlmKGModC5zbGljZShpLHQubGVuZ3RoKSwhMSksZS5wbHVnaW5zKWZvcih2YXIgST0wO0k8ZS5wbHVnaW5zLmxlbmd0aDtJKyspe3ZhciBBPWUucGx1Z2luc1tJXTtBLnByb2Nlc3NBU1QmJihuPUEucHJvY2Vzc0FTVChuLGUpKX1yZXR1cm4gbn1mdW5jdGlvbiBGKHQsZSl7dmFyIG49ZSYmZS5hc3luYz90aGlzLnRlbXBsYXRlc0FzeW5jOnRoaXMudGVtcGxhdGVzU3luYztpZih0aGlzLnJlc29sdmVQYXRoJiZ0aGlzLnJlYWRGaWxlJiYhdC5zdGFydHNXaXRoKFwiQFwiKSl7dmFyIHI9ZS5maWxlcGF0aCxpPW4uZ2V0KHIpO2lmKHRoaXMuY29uZmlnLmNhY2hlJiZpKXJldHVybiBpO3ZhciBhPXRoaXMucmVhZEZpbGUocikscz10aGlzLmNvbXBpbGUoYSxlKTtyZXR1cm4gdGhpcy5jb25maWcuY2FjaGUmJm4uZGVmaW5lKHIscyksc312YXIgbz1uLmdldCh0KTtpZihvKXJldHVybiBvO3Rocm93IG5ldyBjKFwiRmFpbGVkIHRvIGdldCB0ZW1wbGF0ZSAnXCIrdCtcIidcIil9ZnVuY3Rpb24gTyh0LG4scil7dmFyIGksYT1lKHt9LHIse2FzeW5jOiExfSk7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/KHRoaXMucmVzb2x2ZVBhdGgmJnRoaXMucmVhZEZpbGUmJiF0LnN0YXJ0c1dpdGgoXCJAXCIpJiYoYS5maWxlcGF0aD10aGlzLnJlc29sdmVQYXRoKHQsYSkpLGk9Ri5jYWxsKHRoaXMsdCxhKSk6aT10LGkuY2FsbCh0aGlzLG4sYSl9ZnVuY3Rpb24gSSh0LG4scil7dmFyIGksYT1lKHt9LHIse2FzeW5jOiEwfSk7XCJzdHJpbmdcIj09dHlwZW9mIHQ/KHRoaXMucmVzb2x2ZVBhdGgmJnRoaXMucmVhZEZpbGUmJiF0LnN0YXJ0c1dpdGgoXCJAXCIpJiYoYS5maWxlcGF0aD10aGlzLnJlc29sdmVQYXRoKHQsYSkpLGk9Ri5jYWxsKHRoaXMsdCxhKSk6aT10O3ZhciBzPWkuY2FsbCh0aGlzLG4sYSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzKX1mdW5jdGlvbiBBKHQsZSl7dmFyIG49dGhpcy5jb21waWxlKHQse2FzeW5jOiExfSk7cmV0dXJuIE8uY2FsbCh0aGlzLG4sZSl9ZnVuY3Rpb24gVCh0LGUpe3ZhciBuPXRoaXMuY29tcGlsZSh0LHthc3luYzohMH0pO3JldHVybiBJLmNhbGwodGhpcyxuLGUpfXZhciBQPS8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5jb25maWc9dm9pZCAwLHRoaXMuUnVudGltZUVycj11LHRoaXMuY29tcGlsZT1mLHRoaXMuY29tcGlsZVRvU3RyaW5nPWgsdGhpcy5jb21waWxlQm9keT1kLHRoaXMucGFyc2U9Uyx0aGlzLnJlbmRlcj1PLHRoaXMucmVuZGVyQXN5bmM9SSx0aGlzLnJlbmRlclN0cmluZz1BLHRoaXMucmVuZGVyU3RyaW5nQXN5bmM9VCx0aGlzLmZpbGVwYXRoQ2FjaGU9e30sdGhpcy50ZW1wbGF0ZXNTeW5jPW5ldyBvKHt9KSx0aGlzLnRlbXBsYXRlc0FzeW5jPW5ldyBvKHt9KSx0aGlzLnJlc29sdmVQYXRoPW51bGwsdGhpcy5yZWFkRmlsZT1udWxsLHRoaXMuY29uZmlnPXQ/ZSh7fSx2LHQpOmUoe30sdil9dmFyIG49dC5wcm90b3R5cGU7cmV0dXJuIG4uY29uZmlndXJlPWZ1bmN0aW9uKHQpe3RoaXMuY29uZmlnPWUoe30sdGhpcy5jb25maWcsdCl9LG4ud2l0aENvbmZpZz1mdW5jdGlvbih0KXtyZXR1cm4gZSh7fSx0aGlzLHtjb25maWc6ZSh7fSx0aGlzLmNvbmZpZyx0KX0pfSxuLmxvYWRUZW1wbGF0ZT1mdW5jdGlvbih0LGUsbil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpKG4mJm4uYXN5bmM/dGhpcy50ZW1wbGF0ZXNBc3luYzp0aGlzLnRlbXBsYXRlc1N5bmMpLmRlZmluZSh0LHRoaXMuY29tcGlsZShlLG4pKTtlbHNle3ZhciByPXRoaXMudGVtcGxhdGVzU3luYzsoXCJBc3luY0Z1bmN0aW9uXCI9PT1lLmNvbnN0cnVjdG9yLm5hbWV8fG4mJm4uYXN5bmMpJiYocj10aGlzLnRlbXBsYXRlc0FzeW5jKSxyLmRlZmluZSh0LGUpfX0sdH0oKSxqPS8qI19fUFVSRV9fKi9mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7cmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfXJldHVybiBuKGUsdCksZX0oUCk7dC5FdGE9an0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci51bWQuanMubWFwXG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBbnlPdXRwdXRGaWxlLCBQdWxzYXJDb250ZXh0LCBSZW1vdGVWZXJzaW9uSWRlbnRpZmllciwgU3VwZXJub3ZhIH0gZnJvbSBcIkBzdXBlcm5vdmFpby9zZGstZXhwb3J0ZXJzXCJcbmltcG9ydCB7IEV4cG9ydGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHsgZmV0Y2hUb2tlbkRhdGEsIHByb2Nlc3NUb2tlbkRhdGEgfSBmcm9tIFwiLi90b2tlbl9leHBvcnRcIlxuLyoqXG4gKiBFeHBvcnQgZW50cnlwb2ludC5cbiAqIFdoZW4gcnVubmluZyBgZXhwb3J0YCB0aHJvdWdoIGV4dGVuc2lvbnMgb3IgcGlwZWxpbmVzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLlxuICogQ29udGV4dCBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZGVzaWduIHN5c3RlbSBhbmQgdmVyc2lvbiB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBleHBvcnRlZC5cbiAqL1xuUHVsc2FyLmV4cG9ydChhc3luYyAoc2RrOiBTdXBlcm5vdmEsIGNvbnRleHQ6IFB1bHNhckNvbnRleHQpOiBQcm9taXNlPEFycmF5PEFueU91dHB1dEZpbGU+PiA9PiB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBkZXNpZ24gc3lzdGVtIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGV4cG9ydGVkIChjb250ZXh0KVxuICBjb25zdCByZW1vdGVWZXJzaW9uSWRlbnRpZmllcjogUmVtb3RlVmVyc2lvbklkZW50aWZpZXIgPSB7XG4gICAgZGVzaWduU3lzdGVtSWQ6IGNvbnRleHQuZHNJZCxcbiAgICB2ZXJzaW9uSWQ6IGNvbnRleHQudmVyc2lvbklkLFxuICB9XG5cbiAgY29uc3QgW3Rva2VucywgdG9rZW5Hcm91cHMsIHRoZW1lc10gPSBhd2FpdCBmZXRjaFRva2VuRGF0YShzZGssIGNvbnRleHQsIHJlbW90ZVZlcnNpb25JZGVudGlmaWVyKTtcblxuICByZXR1cm4gcHJvY2Vzc1Rva2VuRGF0YSh0b2tlbnMsIHRva2VuR3JvdXBzLCB0aGVtZXMpO1xufSlcbi8qKiBFeHBvcnRlciBjb25maWd1cmF0aW9uLiBBZGhlcmVzIHRvIHRoZSBgRXhwb3J0ZXJDb25maWd1cmF0aW9uYCBpbnRlcmZhY2UgYW5kIGl0cyBjb250ZW50IGNvbWVzIGZyb20gdGhlIHJlc29sdmVkIGRlZmF1bHQgY29uZmlndXJhdGlvbiArIHVzZXIgb3ZlcnJpZGVzIG9mIHZhcmlvdXMgY29uZmlndXJhdGlvbiBrZXlzICovXG5leHBvcnQgY29uc3QgZXhwb3J0Q29uZmlndXJhdGlvbiA9IFB1bHNhci5leHBvcnRDb25maWc8RXhwb3J0ZXJDb25maWd1cmF0aW9uPigpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=