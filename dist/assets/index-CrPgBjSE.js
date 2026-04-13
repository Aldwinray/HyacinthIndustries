var H5=Object.defineProperty;var V5=(e,t,n)=>t in e?H5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Tn=(e,t,n)=>V5(e,typeof t!="symbol"?t+"":t,n);function H4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var V4={exports:{}},Yc={},$4={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),$5=Symbol.for("react.portal"),z5=Symbol.for("react.fragment"),R5=Symbol.for("react.strict_mode"),D5=Symbol.for("react.profiler"),O5=Symbol.for("react.provider"),I5=Symbol.for("react.context"),F5=Symbol.for("react.forward_ref"),Z5=Symbol.for("react.suspense"),_5=Symbol.for("react.memo"),N5=Symbol.for("react.lazy"),rp=Symbol.iterator;function B5(e){return e===null||typeof e!="object"?null:(e=rp&&e[rp]||e["@@iterator"],typeof e=="function"?e:null)}var z4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R4=Object.assign,D4={};function So(e,t,n){this.props=e,this.context=t,this.refs=D4,this.updater=n||z4}So.prototype.isReactComponent={};So.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};So.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O4(){}O4.prototype=So.prototype;function Q1(e,t,n){this.props=e,this.context=t,this.refs=D4,this.updater=n||z4}var X1=Q1.prototype=new O4;X1.constructor=Q1;R4(X1,So.prototype);X1.isPureReactComponent=!0;var ip=Array.isArray,I4=Object.prototype.hasOwnProperty,J1={current:null},F4={key:!0,ref:!0,__self:!0,__source:!0};function Z4(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)I4.call(t,r)&&!F4.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ka,type:e,key:a,ref:s,props:i,_owner:J1.current}}function W5(e,t){return{$$typeof:Ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ka}function U5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var op=/\/+/g;function T0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U5(""+e.key):t.toString(36)}function $l(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ka:case $5:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+T0(s,0):r,ip(i)?(n="",e!=null&&(n=e.replace(op,"$&/")+"/"),$l(i,t,n,"",function(u){return u})):i!=null&&(eh(i)&&(i=W5(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(op,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ip(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+T0(a,l);s+=$l(a,t,n,c,i)}else if(c=B5(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+T0(a,l++),s+=$l(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ys(e,t,n){if(e==null)return e;var r=[],i=0;return $l(e,r,"","",function(a){return t.call(n,a,i++)}),r}function q5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},zl={transition:null},G5={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:zl,ReactCurrentOwner:J1};function _4(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:ys,forEach:function(e,t,n){ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ys(e,function(){t++}),t},toArray:function(e){return ys(e,function(t){return t})||[]},only:function(e){if(!eh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=So;ne.Fragment=z5;ne.Profiler=D5;ne.PureComponent=Q1;ne.StrictMode=R5;ne.Suspense=Z5;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G5;ne.act=_4;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=R4({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=J1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)I4.call(t,c)&&!F4.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ka,type:e.type,key:i,ref:a,props:r,_owner:s}};ne.createContext=function(e){return e={$$typeof:I5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O5,_context:e},e.Consumer=e};ne.createElement=Z4;ne.createFactory=function(e){var t=Z4.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:F5,render:e}};ne.isValidElement=eh;ne.lazy=function(e){return{$$typeof:N5,_payload:{_status:-1,_result:e},_init:q5}};ne.memo=function(e,t){return{$$typeof:_5,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=zl.transition;zl.transition={};try{e()}finally{zl.transition=t}};ne.unstable_act=_4;ne.useCallback=function(e,t){return vt.current.useCallback(e,t)};ne.useContext=function(e){return vt.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ne.useEffect=function(e,t){return vt.current.useEffect(e,t)};ne.useId=function(){return vt.current.useId()};ne.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return vt.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};ne.useRef=function(e){return vt.current.useRef(e)};ne.useState=function(e){return vt.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return vt.current.useTransition()};ne.version="18.3.1";$4.exports=ne;var b=$4.exports;const h=Ga(b),K5=H4({__proto__:null,default:h},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y5=b,Q5=Symbol.for("react.element"),X5=Symbol.for("react.fragment"),J5=Object.prototype.hasOwnProperty,e3=Y5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t3={key:!0,ref:!0,__self:!0,__source:!0};function N4(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)J5.call(t,r)&&!t3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Q5,type:e,key:a,ref:s,props:i,_owner:e3.current}}Yc.Fragment=X5;Yc.jsx=N4;Yc.jsxs=N4;V4.exports=Yc;var o=V4.exports,n3=typeof Element<"u",r3=typeof Map=="function",i3=typeof Set=="function",o3=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Rl(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Rl(e[r],t[r]))return!1;return!0}var a;if(r3&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!Rl(r.value[1],t.get(r.value[0])))return!1;return!0}if(i3&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(o3&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(n3&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Rl(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var a3=function(t,n){try{return Rl(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const s3=Ga(a3);var l3=function(e,t,n,r,i,a,s,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,a,s,l],f=0;c=new Error(t.replace(/%s/g,function(){return u[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},c3=l3;const ap=Ga(c3);var d3=function(t,n,r,i){var a=r?r.call(i,t,n):void 0;if(a!==void 0)return!!a;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var f=s[u];if(!c(f))return!1;var p=t[f],m=n[f];if(a=r?r.call(i,p,m,f):void 0,a===!1||a===void 0&&p!==m)return!1}return!0};const u3=Ga(d3);var B4=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(B4||{}),L0={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},sp=Object.values(B4),th={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},h3=Object.entries(th).reduce((e,[t,n])=>(e[n]=t,e),{}),sn="data-rh",Ji={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},eo=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},f3=e=>{let t=eo(e,"title");const n=eo(e,Ji.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=eo(e,Ji.DEFAULT_TITLE);return t||r||void 0},p3=e=>eo(e,Ji.ON_CHANGE_CLIENT_STATE)||(()=>{}),H0=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),m3=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let a=0;a<i.length;a+=1){const l=i[a].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),g3=e=>console&&typeof console.warn=="function"&&console.warn(e),Ho=(e,t,n)=>{const r={};return n.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&g3(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,a)=>{const s={};a.filter(c=>{let u;const f=Object.keys(c);for(let m=0;m<f.length;m+=1){const y=f[m],j=y.toLowerCase();t.indexOf(j)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(j==="rel"&&c[j].toLowerCase()==="stylesheet")&&(u=j),t.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(u=y)}if(!u||!c[u])return!1;const p=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][p]?!1:(s[u][p]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const u=l[c],f={...r[u],...s[u]};r[u]=f}return i},[]).reverse()},x3=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},y3=e=>({baseTag:m3(["href"],e),bodyAttributes:H0("bodyAttributes",e),defer:eo(e,Ji.DEFER),encode:eo(e,Ji.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:H0("htmlAttributes",e),linkTags:Ho("link",["rel","href"],e),metaTags:Ho("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Ho("noscript",["innerHTML"],e),onChangeClientState:p3(e),scriptTags:Ho("script",["src","innerHTML"],e),styleTags:Ho("style",["cssText"],e),title:f3(e),titleAttributes:H0("titleAttributes",e),prioritizeSeoTags:x3(e,Ji.PRIORITIZE_SEO_TAGS)}),W4=e=>Array.isArray(e)?e.join(""):e,v3=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},V0=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(v3(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},lp=(e,t)=>({...e,[t]:void 0}),w3=["noscript","script","style"],bu=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),U4=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),b3=(e,t,n,r)=>{const i=U4(n),a=W4(t);return i?`<${e} ${sn}="true" ${i}>${bu(a,r)}</${e}>`:`<${e} ${sn}="true">${bu(a,r)}</${e}>`},j3=(e,t,n=!0)=>t.reduce((r,i)=>{const a=i,s=Object.keys(a).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,f)=>{const p=typeof a[f]>"u"?f:`${f}="${bu(a[f],n)}"`;return u?`${u} ${p}`:p},""),l=a.innerHTML||a.cssText||"",c=w3.indexOf(e)===-1;return`${r}<${e} ${sn}="true" ${s}${c?"/>":`>${l}</${e}>`}`},""),q4=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=th[r];return n[i||r]=e[r],n},t),k3=(e,t,n)=>{const r={key:t,[sn]:!0},i=q4(n,r);return[h.createElement("title",i,t)]},Dl=(e,t)=>t.map((n,r)=>{const i={key:r,[sn]:!0};return Object.keys(n).forEach(a=>{const l=th[a]||a;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[a]}),h.createElement(e,i)}),qt=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>k3(e,t.title,t.titleAttributes),toString:()=>b3(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>q4(t),toString:()=>U4(t)};default:return{toComponent:()=>Dl(e,t),toString:()=>j3(e,t,n)}}},S3=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=V0(e,L0.meta),a=V0(t,L0.link),s=V0(n,L0.script);return{priorityMethods:{toComponent:()=>[...Dl("meta",i.priority),...Dl("link",a.priority),...Dl("script",s.priority)],toString:()=>`${qt("meta",i.priority,r)} ${qt("link",a.priority,r)} ${qt("script",s.priority,r)}`},metaTags:i.default,linkTags:a.default,scriptTags:s.default}},E3=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:a,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:f,metaTags:p,scriptTags:m}=e,y={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:y,linkTags:f,metaTags:p,scriptTags:m}=S3(e)),{priority:y,base:qt("base",t,r),bodyAttributes:qt("bodyAttributes",n,r),htmlAttributes:qt("htmlAttributes",i,r),link:qt("link",f,r),meta:qt("meta",p,r),noscript:qt("noscript",a,r),script:qt("script",m,r),style:qt("style",s,r),title:qt("title",{title:l,titleAttributes:c},r)}},ju=E3,vs=[],G4=!!(typeof window<"u"&&window.document&&window.document.createElement),ku=class{constructor(e,t){Tn(this,"instances",[]);Tn(this,"canUseDOM",G4);Tn(this,"context");Tn(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?vs:this.instances,add:e=>{(this.canUseDOM?vs:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?vs:this.instances).indexOf(e);(this.canUseDOM?vs:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=ju({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},C3={},K4=h.createContext(C3),Kr,Y4=(Kr=class extends b.Component{constructor(n){super(n);Tn(this,"helmetData");this.helmetData=new ku(this.props.context||{},Kr.canUseDOM)}render(){return h.createElement(K4.Provider,{value:this.helmetData.value},this.props.children)}},Tn(Kr,"canUseDOM",G4),Kr),Mi=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${sn}]`),i=[].slice.call(r),a=[];let s;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const f=u,p=typeof l[f]>"u"?"":l[f];c.setAttribute(u,p)}c.setAttribute(sn,"true"),i.some((u,f)=>(s=f,c.isEqualNode(u)))?i.splice(s,1):a.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),a.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:a}},Su=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(sn),i=r?r.split(","):[],a=[...i],s=Object.keys(t);for(const l of s){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const u=a.indexOf(l);u!==-1&&a.splice(u,1)}for(let l=a.length-1;l>=0;l-=1)n.removeAttribute(a[l]);i.length===a.length?n.removeAttribute(sn):n.getAttribute(sn)!==s.join(",")&&n.setAttribute(sn,s.join(","))},A3=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=W4(e)),Su("title",t)},cp=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:a,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:f,title:p,titleAttributes:m}=e;Su("body",r),Su("html",i),A3(p,m);const y={baseTag:Mi("base",n),linkTags:Mi("link",a),metaTags:Mi("meta",s),noscriptTags:Mi("noscript",l),scriptTags:Mi("script",u),styleTags:Mi("style",f)},j={},w={};Object.keys(y).forEach(C=>{const{newTags:x,oldTags:g}=y[C];x.length&&(j[C]=x),g.length&&(w[C]=y[C].oldTags)}),t&&t(),c(e,j,w)},Vo=null,P3=e=>{Vo&&cancelAnimationFrame(Vo),e.defer?Vo=requestAnimationFrame(()=>{cp(e,()=>{Vo=null})}):(cp(e),Vo=null)},M3=P3,dp=class extends b.Component{constructor(){super(...arguments);Tn(this,"rendered",!1)}shouldComponentUpdate(t){return!u3(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const i=y3(t.get().map(a=>{const s={...a.props};return delete s.context,s}));Y4.canUseDOM?M3(i):ju&&(r=ju(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},wu,T3=(wu=class extends b.Component{shouldComponentUpdate(e){return!s3(lp(this.props,"helmetData"),lp(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return ap(sp.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${sp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),ap(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return h.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:i,...a}=r.props,s=Object.keys(a).reduce((c,u)=>(c[h3[u]||u]=a[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:t=this.mapObjectTypeChildren(r,t,s,i);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof ku)){const i=r;r=new ku(i.context,!0),delete n.helmetData}return r?h.createElement(dp,{...n,context:r.value}):h.createElement(K4.Consumer,null,i=>h.createElement(dp,{...n,context:i}))}},Tn(wu,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),wu),Q4={exports:{}},Zt={},X4={exports:{}},J4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,D){var G=z.length;z.push(D);e:for(;0<G;){var ie=G-1>>>1,re=z[ie];if(0<i(re,D))z[ie]=D,z[G]=re,G=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var D=z[0],G=z.pop();if(G!==D){z[0]=G;e:for(var ie=0,re=z.length,Qe=re>>>1;ie<Qe;){var Be=2*(ie+1)-1,Et=z[Be],ke=Be+1,Xe=z[ke];if(0>i(Et,G))ke<re&&0>i(Xe,Et)?(z[ie]=Xe,z[ke]=G,ie=ke):(z[ie]=Et,z[Be]=G,ie=Be);else if(ke<re&&0>i(Xe,G))z[ie]=Xe,z[ke]=G,ie=ke;else break e}}return D}function i(z,D){var G=z.sortIndex-D.sortIndex;return G!==0?G:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],f=1,p=null,m=3,y=!1,j=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=z)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function E(z){if(w=!1,v(z),!j)if(n(c)!==null)j=!0,St(P);else{var D=n(u);D!==null&&he(E,D.startTime-z)}}function P(z,D){j=!1,w&&(w=!1,x(k),k=-1),y=!0;var G=m;try{for(v(D),p=n(c);p!==null&&(!(p.expirationTime>D)||z&&!U());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,m=p.priorityLevel;var re=ie(p.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(c)&&r(c),v(D)}else r(c);p=n(c)}if(p!==null)var Qe=!0;else{var Be=n(u);Be!==null&&he(E,Be.startTime-D),Qe=!1}return Qe}finally{p=null,m=G,y=!1}}var T=!1,L=null,k=-1,R=5,$=-1;function U(){return!(e.unstable_now()-$<R)}function se(){if(L!==null){var z=e.unstable_now();$=z;var D=!0;try{D=L(!0,z)}finally{D?be():(T=!1,L=null)}}else T=!1}var be;if(typeof g=="function")be=function(){g(se)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Lt=me.port2;me.port1.onmessage=se,be=function(){Lt.postMessage(null)}}else be=function(){C(se,0)};function St(z){L=z,T||(T=!0,be())}function he(z,D){k=C(function(){z(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){j||y||(j=!0,St(P))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var G=m;m=D;try{return z()}finally{m=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=m;m=z;try{return D()}finally{m=G}},e.unstable_scheduleCallback=function(z,D,G){var ie=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,z={id:f++,callback:D,priorityLevel:z,startTime:G,expirationTime:re,sortIndex:-1},G>ie?(z.sortIndex=G,t(u,z),n(c)===null&&z===n(u)&&(w?(x(k),k=-1):w=!0,he(E,G-ie))):(z.sortIndex=re,t(c,z),j||y||(j=!0,St(P))),z},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(z){var D=m;return function(){var G=m;m=D;try{return z.apply(this,arguments)}finally{m=G}}}})(J4);X4.exports=J4;var L3=X4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H3=b,It=L3;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e8=new Set,wa={};function ci(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(wa[e]=t,e=0;e<t.length;e++)e8.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,V3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},hp={};function $3(e){return Eu.call(hp,e)?!0:Eu.call(up,e)?!1:V3.test(e)?hp[e]=!0:(up[e]=!0,!1)}function z3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R3(e,t,n,r){if(t===null||typeof t>"u"||z3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function rh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nh,rh);rt[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nh,rh);rt[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nh,rh);rt[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ih(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R3(t,n,i,r)&&(n=null),r||i===null?$3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=H3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ws=Symbol.for("react.element"),$i=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),t8=Symbol.for("react.provider"),n8=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),r8=Symbol.for("react.offscreen"),fp=Symbol.iterator;function $o(e){return e===null||typeof e!="object"?null:(e=fp&&e[fp]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,$0;function Xo(e){if($0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$0=t&&t[1]||""}return`
`+$0+e}var z0=!1;function R0(e,t){if(!e||z0)return"";z0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{z0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xo(e):""}function D3(e){switch(e.tag){case 5:return Xo(e.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return e=R0(e.type,!1),e;case 11:return e=R0(e.type.render,!1),e;case 1:return e=R0(e.type,!0),e;default:return""}}function Mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zi:return"Fragment";case $i:return"Portal";case Cu:return"Profiler";case oh:return"StrictMode";case Au:return"Suspense";case Pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case n8:return(e.displayName||"Context")+".Consumer";case t8:return(e._context.displayName||"Context")+".Provider";case ah:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sh:return t=e.displayName||null,t!==null?t:Mu(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Mu(e(t))}catch{}}return null}function O3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(t);case 8:return t===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function i8(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I3(e){var t=i8(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bs(e){e._valueTracker||(e._valueTracker=I3(e))}function o8(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=i8(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ic(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tu(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function a8(e,t){t=t.checked,t!=null&&ih(e,"checked",t,!1)}function Lu(e,t){a8(e,t);var n=Er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hu(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hu(e,t,n){(t!=="number"||ic(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jo=Array.isArray;function to(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if(Jo(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Er(n)}}function s8(e,t){var n=Er(t.value),r=Er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function l8(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?l8(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,c8=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F3=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(e){F3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sa[t]=sa[e]})});function d8(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sa.hasOwnProperty(e)&&sa[e]?(""+t).trim():t+"px"}function u8(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d8(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Z3=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(e,t){if(t){if(Z3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function lh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,no=null,ro=null;function yp(e){if(e=Xa(e)){if(typeof Ou!="function")throw Error(V(280));var t=e.stateNode;t&&(t=t0(t),Ou(e.stateNode,e.type,t))}}function h8(e){no?ro?ro.push(e):ro=[e]:no=e}function f8(){if(no){var e=no,t=ro;if(ro=no=null,yp(e),t)for(e=0;e<t.length;e++)yp(t[e])}}function p8(e,t){return e(t)}function m8(){}var D0=!1;function g8(e,t,n){if(D0)return e(t,n);D0=!0;try{return p8(e,t,n)}finally{D0=!1,(no!==null||ro!==null)&&(m8(),f8())}}function ja(e,t){var n=e.stateNode;if(n===null)return null;var r=t0(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var Iu=!1;if(Un)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Iu=!1}function _3(e,t,n,r,i,a,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var la=!1,oc=null,ac=!1,Fu=null,N3={onError:function(e){la=!0,oc=e}};function B3(e,t,n,r,i,a,s,l,c){la=!1,oc=null,_3.apply(N3,arguments)}function W3(e,t,n,r,i,a,s,l,c){if(B3.apply(this,arguments),la){if(la){var u=oc;la=!1,oc=null}else throw Error(V(198));ac||(ac=!0,Fu=u)}}function di(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x8(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vp(e){if(di(e)!==e)throw Error(V(188))}function U3(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return vp(i),e;if(a===r)return vp(i),t;a=a.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function y8(e){return e=U3(e),e!==null?v8(e):null}function v8(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=v8(e);if(t!==null)return t;e=e.sibling}return null}var w8=It.unstable_scheduleCallback,wp=It.unstable_cancelCallback,q3=It.unstable_shouldYield,G3=It.unstable_requestPaint,ze=It.unstable_now,K3=It.unstable_getCurrentPriorityLevel,ch=It.unstable_ImmediatePriority,b8=It.unstable_UserBlockingPriority,sc=It.unstable_NormalPriority,Y3=It.unstable_LowPriority,j8=It.unstable_IdlePriority,Qc=null,wn=null;function Q3(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Qc,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:ew,X3=Math.log,J3=Math.LN2;function ew(e){return e>>>=0,e===0?32:31-(X3(e)/J3|0)|0}var ks=64,Ss=4194304;function ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ea(l):(a&=s,a!==0&&(r=ea(a)))}else s=n&~i,s!==0?r=ea(s):a!==0&&(r=ea(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ln(t),i=1<<n,r|=e[n],t&=~i;return r}function tw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-ln(a),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=tw(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function Zu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function k8(){var e=ks;return ks<<=1,!(ks&4194240)&&(ks=64),e}function O0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ya(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ln(t),e[t]=n}function rw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ln(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function dh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function S8(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var E8,uh,C8,A8,P8,_u=!1,Es=[],xr=null,yr=null,vr=null,ka=new Map,Sa=new Map,dr=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(e,t){switch(e){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function Ro(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&uh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ow(e,t,n,r,i){switch(t){case"focusin":return xr=Ro(xr,e,t,n,r,i),!0;case"dragenter":return yr=Ro(yr,e,t,n,r,i),!0;case"mouseover":return vr=Ro(vr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ka.set(a,Ro(ka.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Sa.set(a,Ro(Sa.get(a)||null,e,t,n,r,i)),!0}return!1}function M8(e){var t=Nr(e.target);if(t!==null){var n=di(t);if(n!==null){if(t=n.tag,t===13){if(t=x8(n),t!==null){e.blockedOn=t,P8(e.priority,function(){C8(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Du=r,n.target.dispatchEvent(r),Du=null}else return t=Xa(n),t!==null&&uh(t),e.blockedOn=n,!1;t.shift()}return!0}function jp(e,t,n){Ol(e)&&n.delete(t)}function aw(){_u=!1,xr!==null&&Ol(xr)&&(xr=null),yr!==null&&Ol(yr)&&(yr=null),vr!==null&&Ol(vr)&&(vr=null),ka.forEach(jp),Sa.forEach(jp)}function Do(e,t){e.blockedOn===t&&(e.blockedOn=null,_u||(_u=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,aw)))}function Ea(e){function t(i){return Do(i,e)}if(0<Es.length){Do(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xr!==null&&Do(xr,e),yr!==null&&Do(yr,e),vr!==null&&Do(vr,e),ka.forEach(t),Sa.forEach(t),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)M8(n),n.blockedOn===null&&dr.shift()}var io=Xn.ReactCurrentBatchConfig,cc=!0;function sw(e,t,n,r){var i=ue,a=io.transition;io.transition=null;try{ue=1,hh(e,t,n,r)}finally{ue=i,io.transition=a}}function lw(e,t,n,r){var i=ue,a=io.transition;io.transition=null;try{ue=4,hh(e,t,n,r)}finally{ue=i,io.transition=a}}function hh(e,t,n,r){if(cc){var i=Nu(e,t,n,r);if(i===null)G0(e,t,r,dc,n),bp(e,r);else if(ow(i,e,t,n,r))r.stopPropagation();else if(bp(e,r),t&4&&-1<iw.indexOf(e)){for(;i!==null;){var a=Xa(i);if(a!==null&&E8(a),a=Nu(e,t,n,r),a===null&&G0(e,t,r,dc,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else G0(e,t,r,null,n)}}var dc=null;function Nu(e,t,n,r){if(dc=null,e=lh(r),e=Nr(e),e!==null)if(t=di(e),t===null)e=null;else if(n=t.tag,n===13){if(e=x8(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dc=e,null}function T8(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K3()){case ch:return 1;case b8:return 4;case sc:case Y3:return 16;case j8:return 536870912;default:return 16}default:return 16}}var fr=null,fh=null,Il=null;function L8(){if(Il)return Il;var e,t=fh,n=t.length,r,i="value"in fr?fr.value:fr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Il=i.slice(e,1<r?1-r:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cs(){return!0}function kp(){return!1}function _t(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Cs:kp,this.isPropagationStopped=kp,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),t}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=_t(Eo),Qa=Pe({},Eo,{view:0,detail:0}),cw=_t(Qa),I0,F0,Oo,Xc=Pe({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(I0=e.screenX-Oo.screenX,F0=e.screenY-Oo.screenY):F0=I0=0,Oo=e),I0)},movementY:function(e){return"movementY"in e?e.movementY:F0}}),Sp=_t(Xc),dw=Pe({},Xc,{dataTransfer:0}),uw=_t(dw),hw=Pe({},Qa,{relatedTarget:0}),Z0=_t(hw),fw=Pe({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=_t(fw),mw=Pe({},Eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gw=_t(mw),xw=Pe({},Eo,{data:0}),Ep=_t(xw),yw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ww[e])?!!t[e]:!1}function mh(){return bw}var jw=Pe({},Qa,{key:function(e){if(e.key){var t=yw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kw=_t(jw),Sw=Pe({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=_t(Sw),Ew=Pe({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),Cw=_t(Ew),Aw=Pe({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pw=_t(Aw),Mw=Pe({},Xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tw=_t(Mw),Lw=[9,13,27,32],gh=Un&&"CompositionEvent"in window,ca=null;Un&&"documentMode"in document&&(ca=document.documentMode);var Hw=Un&&"TextEvent"in window&&!ca,H8=Un&&(!gh||ca&&8<ca&&11>=ca),Ap=" ",Pp=!1;function V8(e,t){switch(e){case"keyup":return Lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $8(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ri=!1;function Vw(e,t){switch(e){case"compositionend":return $8(t);case"keypress":return t.which!==32?null:(Pp=!0,Ap);case"textInput":return e=t.data,e===Ap&&Pp?null:e;default:return null}}function $w(e,t){if(Ri)return e==="compositionend"||!gh&&V8(e,t)?(e=L8(),Il=fh=fr=null,Ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return H8&&t.locale!=="ko"?null:t.data;default:return null}}var zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zw[e.type]:t==="textarea"}function z8(e,t,n,r){h8(r),t=uc(t,"onChange"),0<t.length&&(n=new ph("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var da=null,Ca=null;function Rw(e){U8(e,0)}function Jc(e){var t=Ii(e);if(o8(t))return e}function Dw(e,t){if(e==="change")return t}var R8=!1;if(Un){var _0;if(Un){var N0="oninput"in document;if(!N0){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),N0=typeof Tp.oninput=="function"}_0=N0}else _0=!1;R8=_0&&(!document.documentMode||9<document.documentMode)}function Lp(){da&&(da.detachEvent("onpropertychange",D8),Ca=da=null)}function D8(e){if(e.propertyName==="value"&&Jc(Ca)){var t=[];z8(t,Ca,e,lh(e)),g8(Rw,t)}}function Ow(e,t,n){e==="focusin"?(Lp(),da=t,Ca=n,da.attachEvent("onpropertychange",D8)):e==="focusout"&&Lp()}function Iw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jc(Ca)}function Fw(e,t){if(e==="click")return Jc(t)}function Zw(e,t){if(e==="input"||e==="change")return Jc(t)}function _w(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:_w;function Aa(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Eu.call(t,i)||!un(e[i],t[i]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,t){var n=Hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function O8(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O8(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I8(){for(var e=window,t=ic();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ic(e.document)}return t}function xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nw(e){var t=I8(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&O8(n.ownerDocument.documentElement,n)){if(r!==null&&xh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Vp(n,a);var s=Vp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bw=Un&&"documentMode"in document&&11>=document.documentMode,Di=null,Bu=null,ua=null,Wu=!1;function $p(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||Di==null||Di!==ic(r)||(r=Di,"selectionStart"in r&&xh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Aa(ua,r)||(ua=r,r=uc(Bu,"onSelect"),0<r.length&&(t=new ph("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Di)))}function As(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Oi={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},B0={},F8={};Un&&(F8=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function e0(e){if(B0[e])return B0[e];if(!Oi[e])return e;var t=Oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in F8)return B0[e]=t[n];return e}var Z8=e0("animationend"),_8=e0("animationiteration"),N8=e0("animationstart"),B8=e0("transitionend"),W8=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){W8.set(e,t),ci(t,[e])}for(var W0=0;W0<zp.length;W0++){var U0=zp[W0],Ww=U0.toLowerCase(),Uw=U0[0].toUpperCase()+U0.slice(1);Mr(Ww,"on"+Uw)}Mr(Z8,"onAnimationEnd");Mr(_8,"onAnimationIteration");Mr(N8,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(B8,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,W3(r,t,void 0,e),e.currentTarget=null}function U8(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;Rp(i,l,u),a=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;Rp(i,l,u),a=c}}}if(ac)throw e=Fu,ac=!1,Fu=null,e}function ye(e,t){var n=t[Yu];n===void 0&&(n=t[Yu]=new Set);var r=e+"__bubble";n.has(r)||(q8(t,e,2,!1),n.add(r))}function q0(e,t,n){var r=0;t&&(r|=4),q8(n,e,r,t)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Pa(e){if(!e[Ps]){e[Ps]=!0,e8.forEach(function(n){n!=="selectionchange"&&(qw.has(n)||q0(n,!1,e),q0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ps]||(t[Ps]=!0,q0("selectionchange",!1,t))}}function q8(e,t,n,r){switch(T8(t)){case 1:var i=sw;break;case 4:i=lw;break;default:i=hh}n=i.bind(null,t,n,e),i=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function G0(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Nr(l),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}l=l.parentNode}}r=r.return}g8(function(){var u=a,f=lh(n),p=[];e:{var m=W8.get(e);if(m!==void 0){var y=ph,j=e;switch(e){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":y=kw;break;case"focusin":j="focus",y=Z0;break;case"focusout":j="blur",y=Z0;break;case"beforeblur":case"afterblur":y=Z0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cw;break;case Z8:case _8:case N8:y=pw;break;case B8:y=Pw;break;case"scroll":y=cw;break;case"wheel":y=Tw;break;case"copy":case"cut":case"paste":y=gw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Cp}var w=(t&4)!==0,C=!w&&e==="scroll",x=w?m!==null?m+"Capture":null:m;w=[];for(var g=u,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,x!==null&&(E=ja(g,x),E!=null&&w.push(Ma(g,E,v)))),C)break;g=g.return}0<w.length&&(m=new y(m,j,null,n,f),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Du&&(j=n.relatedTarget||n.fromElement)&&(Nr(j)||j[qn]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(j=n.relatedTarget||n.toElement,y=u,j=j?Nr(j):null,j!==null&&(C=di(j),j!==C||j.tag!==5&&j.tag!==6)&&(j=null)):(y=null,j=u),y!==j)){if(w=Sp,E="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=Cp,E="onPointerLeave",x="onPointerEnter",g="pointer"),C=y==null?m:Ii(y),v=j==null?m:Ii(j),m=new w(E,g+"leave",y,n,f),m.target=C,m.relatedTarget=v,E=null,Nr(f)===u&&(w=new w(x,g+"enter",j,n,f),w.target=v,w.relatedTarget=C,E=w),C=E,y&&j)t:{for(w=y,x=j,g=0,v=w;v;v=Ti(v))g++;for(v=0,E=x;E;E=Ti(E))v++;for(;0<g-v;)w=Ti(w),g--;for(;0<v-g;)x=Ti(x),v--;for(;g--;){if(w===x||x!==null&&w===x.alternate)break t;w=Ti(w),x=Ti(x)}w=null}else w=null;y!==null&&Dp(p,m,y,w,!1),j!==null&&C!==null&&Dp(p,C,j,w,!0)}}e:{if(m=u?Ii(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var P=Dw;else if(Mp(m))if(R8)P=Zw;else{P=Iw;var T=Ow}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Fw);if(P&&(P=P(e,u))){z8(p,P,n,f);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Hu(m,"number",m.value)}switch(T=u?Ii(u):window,e){case"focusin":(Mp(T)||T.contentEditable==="true")&&(Di=T,Bu=u,ua=null);break;case"focusout":ua=Bu=Di=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,$p(p,n,f);break;case"selectionchange":if(Bw)break;case"keydown":case"keyup":$p(p,n,f)}var L;if(gh)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ri?V8(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(H8&&n.locale!=="ko"&&(Ri||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ri&&(L=L8()):(fr=f,fh="value"in fr?fr.value:fr.textContent,Ri=!0)),T=uc(u,k),0<T.length&&(k=new Ep(k,e,null,n,f),p.push({event:k,listeners:T}),L?k.data=L:(L=$8(n),L!==null&&(k.data=L)))),(L=Hw?Vw(e,n):$w(e,n))&&(u=uc(u,"onBeforeInput"),0<u.length&&(f=new Ep("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=L))}U8(p,t)})}function Ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ja(e,n),a!=null&&r.unshift(Ma(e,a,i)),a=ja(e,t),a!=null&&r.push(Ma(e,a,i))),e=e.return}return r}function Ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dp(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ja(n,a),c!=null&&s.unshift(Ma(n,c,l))):i||(c=ja(n,a),c!=null&&s.push(Ma(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function Op(e){return(typeof e=="string"?e:""+e).replace(Gw,`
`).replace(Kw,"")}function Ms(e,t,n){if(t=Op(t),Op(e)!==t&&n)throw Error(V(425))}function hc(){}var Uu=null,qu=null;function Gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,Qw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(e){return Ip.resolve(null).then(e).catch(Xw)}:Ku;function Xw(e){setTimeout(function(){throw e})}function K0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ea(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ea(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Co=Math.random().toString(36).slice(2),vn="__reactFiber$"+Co,Ta="__reactProps$"+Co,qn="__reactContainer$"+Co,Yu="__reactEvents$"+Co,Jw="__reactListeners$"+Co,eb="__reactHandles$"+Co;function Nr(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qn]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fp(e);e!==null;){if(n=e[vn])return n;e=Fp(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){return e=e[vn]||e[qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ii(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function t0(e){return e[Ta]||null}var Qu=[],Fi=-1;function Tr(e){return{current:e}}function we(e){0>Fi||(e.current=Qu[Fi],Qu[Fi]=null,Fi--)}function ge(e,t){Fi++,Qu[Fi]=e.current,e.current=t}var Cr={},ht=Tr(Cr),Pt=Tr(!1),ti=Cr;function lo(e,t){var n=e.type.contextTypes;if(!n)return Cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(e){return e=e.childContextTypes,e!=null}function fc(){we(Pt),we(ht)}function Zp(e,t,n){if(ht.current!==Cr)throw Error(V(168));ge(ht,t),ge(Pt,n)}function G8(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,O3(e)||"Unknown",i));return Pe({},n,r)}function pc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cr,ti=ht.current,ge(ht,e),ge(Pt,Pt.current),!0}function _p(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=G8(e,t,ti),r.__reactInternalMemoizedMergedChildContext=e,we(Pt),we(ht),ge(ht,e)):we(Pt),ge(Pt,n)}var Rn=null,n0=!1,Y0=!1;function K8(e){Rn===null?Rn=[e]:Rn.push(e)}function tb(e){n0=!0,K8(e)}function Lr(){if(!Y0&&Rn!==null){Y0=!0;var e=0,t=ue;try{var n=Rn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rn=null,n0=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(e+1)),w8(ch,Lr),i}finally{ue=t,Y0=!1}}return null}var Zi=[],_i=0,mc=null,gc=0,Gt=[],Kt=0,ni=null,Dn=1,On="";function Or(e,t){Zi[_i++]=gc,Zi[_i++]=mc,mc=e,gc=t}function Y8(e,t,n){Gt[Kt++]=Dn,Gt[Kt++]=On,Gt[Kt++]=ni,ni=e;var r=Dn;e=On;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var a=32-ln(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Dn=1<<32-ln(t)+i|n<<i|r,On=a+e}else Dn=1<<a|n<<i|r,On=e}function yh(e){e.return!==null&&(Or(e,1),Y8(e,1,0))}function vh(e){for(;e===mc;)mc=Zi[--_i],Zi[_i]=null,gc=Zi[--_i],Zi[_i]=null;for(;e===ni;)ni=Gt[--Kt],Gt[Kt]=null,On=Gt[--Kt],Gt[Kt]=null,Dn=Gt[--Kt],Gt[Kt]=null}var Ot=null,Dt=null,je=!1,an=null;function Q8(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Np(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ni!==null?{id:Dn,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Dt=null,!0):!1;default:return!1}}function Xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ju(e){if(je){var t=Dt;if(t){var n=t;if(!Np(e,t)){if(Xu(e))throw Error(V(418));t=wr(n.nextSibling);var r=Ot;t&&Np(e,t)?Q8(r,n):(e.flags=e.flags&-4097|2,je=!1,Ot=e)}}else{if(Xu(e))throw Error(V(418));e.flags=e.flags&-4097|2,je=!1,Ot=e}}}function Bp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function Ts(e){if(e!==Ot)return!1;if(!je)return Bp(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gu(e.type,e.memoizedProps)),t&&(t=Dt)){if(Xu(e))throw X8(),Error(V(418));for(;t;)Q8(e,t),t=wr(t.nextSibling)}if(Bp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ot?wr(e.stateNode.nextSibling):null;return!0}function X8(){for(var e=Dt;e;)e=wr(e.nextSibling)}function co(){Dt=Ot=null,je=!1}function wh(e){an===null?an=[e]:an.push(e)}var nb=Xn.ReactCurrentBatchConfig;function Io(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Ls(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wp(e){var t=e._init;return t(e._payload)}function J8(e){function t(x,g){if(e){var v=x.deletions;v===null?(x.deletions=[g],x.flags|=16):v.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=Sr(x,g),x.index=0,x.sibling=null,x}function a(x,g,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<g?(x.flags|=2,g):v):(x.flags|=2,g)):(x.flags|=1048576,g)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,v,E){return g===null||g.tag!==6?(g=rd(v,x.mode,E),g.return=x,g):(g=i(g,v),g.return=x,g)}function c(x,g,v,E){var P=v.type;return P===zi?f(x,g,v.props.children,E,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lr&&Wp(P)===g.type)?(E=i(g,v.props),E.ref=Io(x,g,v),E.return=x,E):(E=ql(v.type,v.key,v.props,null,x.mode,E),E.ref=Io(x,g,v),E.return=x,E)}function u(x,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=id(v,x.mode,E),g.return=x,g):(g=i(g,v.children||[]),g.return=x,g)}function f(x,g,v,E,P){return g===null||g.tag!==7?(g=Qr(v,x.mode,E,P),g.return=x,g):(g=i(g,v),g.return=x,g)}function p(x,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=rd(""+g,x.mode,v),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ws:return v=ql(g.type,g.key,g.props,null,x.mode,v),v.ref=Io(x,null,g),v.return=x,v;case $i:return g=id(g,x.mode,v),g.return=x,g;case lr:var E=g._init;return p(x,E(g._payload),v)}if(Jo(g)||$o(g))return g=Qr(g,x.mode,v,null),g.return=x,g;Ls(x,g)}return null}function m(x,g,v,E){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:l(x,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ws:return v.key===P?c(x,g,v,E):null;case $i:return v.key===P?u(x,g,v,E):null;case lr:return P=v._init,m(x,g,P(v._payload),E)}if(Jo(v)||$o(v))return P!==null?null:f(x,g,v,E,null);Ls(x,v)}return null}function y(x,g,v,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return x=x.get(v)||null,l(g,x,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ws:return x=x.get(E.key===null?v:E.key)||null,c(g,x,E,P);case $i:return x=x.get(E.key===null?v:E.key)||null,u(g,x,E,P);case lr:var T=E._init;return y(x,g,v,T(E._payload),P)}if(Jo(E)||$o(E))return x=x.get(v)||null,f(g,x,E,P,null);Ls(g,E)}return null}function j(x,g,v,E){for(var P=null,T=null,L=g,k=g=0,R=null;L!==null&&k<v.length;k++){L.index>k?(R=L,L=null):R=L.sibling;var $=m(x,L,v[k],E);if($===null){L===null&&(L=R);break}e&&L&&$.alternate===null&&t(x,L),g=a($,g,k),T===null?P=$:T.sibling=$,T=$,L=R}if(k===v.length)return n(x,L),je&&Or(x,k),P;if(L===null){for(;k<v.length;k++)L=p(x,v[k],E),L!==null&&(g=a(L,g,k),T===null?P=L:T.sibling=L,T=L);return je&&Or(x,k),P}for(L=r(x,L);k<v.length;k++)R=y(L,x,k,v[k],E),R!==null&&(e&&R.alternate!==null&&L.delete(R.key===null?k:R.key),g=a(R,g,k),T===null?P=R:T.sibling=R,T=R);return e&&L.forEach(function(U){return t(x,U)}),je&&Or(x,k),P}function w(x,g,v,E){var P=$o(v);if(typeof P!="function")throw Error(V(150));if(v=P.call(v),v==null)throw Error(V(151));for(var T=P=null,L=g,k=g=0,R=null,$=v.next();L!==null&&!$.done;k++,$=v.next()){L.index>k?(R=L,L=null):R=L.sibling;var U=m(x,L,$.value,E);if(U===null){L===null&&(L=R);break}e&&L&&U.alternate===null&&t(x,L),g=a(U,g,k),T===null?P=U:T.sibling=U,T=U,L=R}if($.done)return n(x,L),je&&Or(x,k),P;if(L===null){for(;!$.done;k++,$=v.next())$=p(x,$.value,E),$!==null&&(g=a($,g,k),T===null?P=$:T.sibling=$,T=$);return je&&Or(x,k),P}for(L=r(x,L);!$.done;k++,$=v.next())$=y(L,x,k,$.value,E),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?k:$.key),g=a($,g,k),T===null?P=$:T.sibling=$,T=$);return e&&L.forEach(function(se){return t(x,se)}),je&&Or(x,k),P}function C(x,g,v,E){if(typeof v=="object"&&v!==null&&v.type===zi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ws:e:{for(var P=v.key,T=g;T!==null;){if(T.key===P){if(P=v.type,P===zi){if(T.tag===7){n(x,T.sibling),g=i(T,v.props.children),g.return=x,x=g;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===lr&&Wp(P)===T.type){n(x,T.sibling),g=i(T,v.props),g.ref=Io(x,T,v),g.return=x,x=g;break e}n(x,T);break}else t(x,T);T=T.sibling}v.type===zi?(g=Qr(v.props.children,x.mode,E,v.key),g.return=x,x=g):(E=ql(v.type,v.key,v.props,null,x.mode,E),E.ref=Io(x,g,v),E.return=x,x=E)}return s(x);case $i:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(x,g.sibling),g=i(g,v.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=id(v,x.mode,E),g.return=x,x=g}return s(x);case lr:return T=v._init,C(x,g,T(v._payload),E)}if(Jo(v))return j(x,g,v,E);if($o(v))return w(x,g,v,E);Ls(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,v),g.return=x,x=g):(n(x,g),g=rd(v,x.mode,E),g.return=x,x=g),s(x)):n(x,g)}return C}var uo=J8(!0),ex=J8(!1),xc=Tr(null),yc=null,Ni=null,bh=null;function jh(){bh=Ni=yc=null}function kh(e){var t=xc.current;we(xc),e._currentValue=t}function e1(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oo(e,t){yc=e,bh=Ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(bh!==e)if(e={context:e,memoizedValue:t,next:null},Ni===null){if(yc===null)throw Error(V(308));Ni=e,yc.dependencies={lanes:0,firstContext:e}}else Ni=Ni.next=e;return t}var Br=null;function Sh(e){Br===null?Br=[e]:Br.push(e)}function tx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cr=!1;function Eh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gn(e,n)}function Zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dh(e,n)}}function Up(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vc(e,t,n,r){var i=e.updateQueue;cr=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?a=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;s=0,f=u=c=null,l=a;do{var m=l.lane,y=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var j=e,w=l;switch(m=t,y=n,w.tag){case 1:if(j=w.payload,typeof j=="function"){p=j.call(y,p,m);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=w.payload,m=typeof j=="function"?j.call(y,p,m):j,m==null)break e;p=Pe({},p,m);break e;case 2:cr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,c=p):f=f.next=y,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ii|=s,e.lanes=s,e.memoizedState=p}}function qp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Ja={},bn=Tr(Ja),La=Tr(Ja),Ha=Tr(Ja);function Wr(e){if(e===Ja)throw Error(V(174));return e}function Ch(e,t){switch(ge(Ha,t),ge(La,e),ge(bn,Ja),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$u(t,e)}we(bn),ge(bn,t)}function ho(){we(bn),we(La),we(Ha)}function rx(e){Wr(Ha.current);var t=Wr(bn.current),n=$u(t,e.type);t!==n&&(ge(La,e),ge(bn,n))}function Ah(e){La.current===e&&(we(bn),we(La))}var Ee=Tr(0);function wc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Q0=[];function Ph(){for(var e=0;e<Q0.length;e++)Q0[e]._workInProgressVersionPrimary=null;Q0.length=0}var _l=Xn.ReactCurrentDispatcher,X0=Xn.ReactCurrentBatchConfig,ri=0,Ae=null,_e=null,qe=null,bc=!1,ha=!1,Va=0,rb=0;function it(){throw Error(V(321))}function Mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function Th(e,t,n,r,i,a){if(ri=a,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_l.current=e===null||e.memoizedState===null?sb:lb,e=n(r,i),ha){a=0;do{if(ha=!1,Va=0,25<=a)throw Error(V(301));a+=1,qe=_e=null,t.updateQueue=null,_l.current=cb,e=n(r,i)}while(ha)}if(_l.current=jc,t=_e!==null&&_e.next!==null,ri=0,qe=_e=Ae=null,bc=!1,t)throw Error(V(300));return e}function Lh(){var e=Va!==0;return Va=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ae.memoizedState=qe=e:qe=qe.next=e,qe}function Jt(){if(_e===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=qe===null?Ae.memoizedState:qe.next;if(t!==null)qe=t,_e=e;else{if(e===null)throw Error(V(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},qe===null?Ae.memoizedState=qe=e:qe=qe.next=e}return qe}function $a(e,t){return typeof t=="function"?t(e):t}function J0(e){var t=Jt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var f=u.lane;if((ri&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=r):c=c.next=p,Ae.lanes|=f,ii|=f}u=u.next}while(u!==null&&u!==a);c===null?s=r:c.next=l,un(r,t.memoizedState)||(At=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ae.lanes|=a,ii|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ed(e){var t=Jt(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);un(a,t.memoizedState)||(At=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ix(){}function ox(e,t){var n=Ae,r=Jt(),i=t(),a=!un(r.memoizedState,i);if(a&&(r.memoizedState=i,At=!0),r=r.queue,Hh(lx.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,za(9,sx.bind(null,n,r,i,t),void 0,null),Ke===null)throw Error(V(349));ri&30||ax(n,t,i)}return i}function ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sx(e,t,n,r){t.value=n,t.getSnapshot=r,cx(t)&&dx(e)}function lx(e,t,n){return n(function(){cx(t)&&dx(e)})}function cx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function dx(e){var t=Gn(e,1);t!==null&&cn(t,e,1,-1)}function Gp(e){var t=xn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t.queue=e,e=e.dispatch=ab.bind(null,Ae,e),[t.memoizedState,e]}function za(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ux(){return Jt().memoizedState}function Nl(e,t,n,r){var i=xn();Ae.flags|=e,i.memoizedState=za(1|t,n,void 0,r===void 0?null:r)}function r0(e,t,n,r){var i=Jt();r=r===void 0?null:r;var a=void 0;if(_e!==null){var s=_e.memoizedState;if(a=s.destroy,r!==null&&Mh(r,s.deps)){i.memoizedState=za(t,n,a,r);return}}Ae.flags|=e,i.memoizedState=za(1|t,n,a,r)}function Kp(e,t){return Nl(8390656,8,e,t)}function Hh(e,t){return r0(2048,8,e,t)}function hx(e,t){return r0(4,2,e,t)}function fx(e,t){return r0(4,4,e,t)}function px(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mx(e,t,n){return n=n!=null?n.concat([e]):null,r0(4,4,px.bind(null,t,e),n)}function Vh(){}function gx(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xx(e,t){var n=Jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yx(e,t,n){return ri&21?(un(n,t)||(n=k8(),Ae.lanes|=n,ii|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function ib(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=X0.transition;X0.transition={};try{e(!1),t()}finally{ue=n,X0.transition=r}}function vx(){return Jt().memoizedState}function ob(e,t,n){var r=kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wx(e))bx(t,n);else if(n=tx(e,t,n,r),n!==null){var i=yt();cn(n,e,r,i),jx(n,t,r)}}function ab(e,t,n){var r=kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wx(e))bx(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,s)){var c=t.interleaved;c===null?(i.next=i,Sh(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=tx(e,t,i,r),n!==null&&(i=yt(),cn(n,e,r,i),jx(n,t,r))}}function wx(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function bx(e,t){ha=bc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dh(e,n)}}var jc={readContext:Xt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},sb={readContext:Xt,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Kp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4194308,4,px.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nl(4,2,e,t)},useMemo:function(e,t){var n=xn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ob.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:Gp,useDebugValue:Vh,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=Gp(!1),t=e[0];return e=ib.bind(null,e[1]),xn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=xn();if(je){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),Ke===null)throw Error(V(349));ri&30||ax(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Kp(lx.bind(null,r,a,e),[e]),r.flags|=2048,za(9,sx.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=xn(),t=Ke.identifierPrefix;if(je){var n=On,r=Dn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Va++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lb={readContext:Xt,useCallback:gx,useContext:Xt,useEffect:Hh,useImperativeHandle:mx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:xx,useReducer:J0,useRef:ux,useState:function(){return J0($a)},useDebugValue:Vh,useDeferredValue:function(e){var t=Jt();return yx(t,_e.memoizedState,e)},useTransition:function(){var e=J0($a)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:vx,unstable_isNewReconciler:!1},cb={readContext:Xt,useCallback:gx,useContext:Xt,useEffect:Hh,useImperativeHandle:mx,useInsertionEffect:hx,useLayoutEffect:fx,useMemo:xx,useReducer:ed,useRef:ux,useState:function(){return ed($a)},useDebugValue:Vh,useDeferredValue:function(e){var t=Jt();return _e===null?t.memoizedState=e:yx(t,_e.memoizedState,e)},useTransition:function(){var e=ed($a)[0],t=Jt().memoizedState;return[e,t]},useMutableSource:ix,useSyncExternalStore:ox,useId:vx,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function t1(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var i0={isMounted:function(e){return(e=e._reactInternals)?di(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yt(),i=kr(e),a=Fn(r,i);a.payload=t,n!=null&&(a.callback=n),t=br(e,a,i),t!==null&&(cn(t,e,i,r),Zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yt(),i=kr(e),a=Fn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=br(e,a,i),t!==null&&(cn(t,e,i,r),Zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),r=kr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=br(e,i,r),t!==null&&(cn(t,e,r,n),Zl(t,e,r))}};function Yp(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Aa(n,r)||!Aa(i,a):!0}function kx(e,t,n){var r=!1,i=Cr,a=t.contextType;return typeof a=="object"&&a!==null?a=Xt(a):(i=Mt(t)?ti:ht.current,r=t.contextTypes,a=(r=r!=null)?lo(e,i):Cr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=i0,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Qp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&i0.enqueueReplaceState(t,t.state,null)}function n1(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Eh(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Xt(a):(a=Mt(t)?ti:ht.current,i.context=lo(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(t1(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&i0.enqueueReplaceState(i,i.state,null),vc(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fo(e,t){try{var n="",r=t;do n+=D3(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function td(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function r1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var db=typeof WeakMap=="function"?WeakMap:Map;function Sx(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sc||(Sc=!0,f1=r),r1(e,t)},n}function Ex(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){r1(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){r1(e,t),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new db;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sb.bind(null,e,t,n),t.then(e,e))}function Jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,br(n,t,1))),n.lanes|=1),e)}var ub=Xn.ReactCurrentOwner,At=!1;function xt(e,t,n,r){t.child=e===null?ex(t,null,n,r):uo(t,e.child,n,r)}function tm(e,t,n,r,i){n=n.render;var a=t.ref;return oo(t,i),r=Th(e,t,n,r,a,i),n=Lh(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(je&&n&&yh(t),t.flags|=1,xt(e,t,r,i),t.child)}function nm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Zh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cx(e,t,a,r,i)):(e=ql(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(s,r)&&e.ref===t.ref)return Kn(e,t,i)}return t.flags|=1,e=Sr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Cx(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Aa(a,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,Kn(e,t,i)}return i1(e,t,n,r,i)}function Ax(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Wi,zt),zt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Wi,zt),zt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(Wi,zt),zt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ge(Wi,zt),zt|=r;return xt(e,t,i,n),t.child}function Px(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function i1(e,t,n,r,i){var a=Mt(n)?ti:ht.current;return a=lo(t,a),oo(t,i),n=Th(e,t,n,r,a,i),r=Lh(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Kn(e,t,i)):(je&&r&&yh(t),t.flags|=1,xt(e,t,n,i),t.child)}function rm(e,t,n,r,i){if(Mt(n)){var a=!0;pc(t)}else a=!1;if(oo(t,i),t.stateNode===null)Bl(e,t),kx(t,n,r),n1(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Mt(n)?ti:ht.current,u=lo(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Qp(t,s,r,u),cr=!1;var m=t.memoizedState;s.state=m,vc(t,r,s,i),c=t.memoizedState,l!==r||m!==c||Pt.current||cr?(typeof f=="function"&&(t1(t,n,f,r),c=t.memoizedState),(l=cr||Yp(t,n,l,r,m,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,nx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nn(t.type,l),s.props=u,p=t.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xt(c):(c=Mt(n)?ti:ht.current,c=lo(t,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==c)&&Qp(t,s,r,c),cr=!1,m=t.memoizedState,s.state=m,vc(t,r,s,i);var j=t.memoizedState;l!==p||m!==j||Pt.current||cr?(typeof y=="function"&&(t1(t,n,y,r),j=t.memoizedState),(u=cr||Yp(t,n,u,r,m,j,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,j,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,j,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),s.props=r,s.state=j,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return o1(e,t,n,r,a,i)}function o1(e,t,n,r,i,a){Px(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_p(t,n,!1),Kn(e,t,a);r=t.stateNode,ub.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=uo(t,e.child,null,a),t.child=uo(t,null,l,a)):xt(e,t,l,a),t.memoizedState=r.state,i&&_p(t,n,!0),t.child}function Mx(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),Ch(e,t.containerInfo)}function im(e,t,n,r,i){return co(),wh(i),t.flags|=256,xt(e,t,n,r),t.child}var a1={dehydrated:null,treeContext:null,retryLane:0};function s1(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tx(e,t,n){var r=t.pendingProps,i=Ee.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ee,i&1),e===null)return Ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=s0(s,r,0,null),e=Qr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=s1(n),t.memoizedState=a1,e):$h(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hb(e,t,s,r,l,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Sr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Sr(l,a):(a=Qr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?s1(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=a1,r}return a=e.child,e=a.sibling,r=Sr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $h(e,t){return t=s0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hs(e,t,n,r){return r!==null&&wh(r),uo(t,e.child,null,n),e=$h(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hb(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=td(Error(V(422))),Hs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=s0({mode:"visible",children:r.children},i,0,null),a=Qr(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&uo(t,e.child,null,s),t.child.memoizedState=s1(s),t.memoizedState=a1,a);if(!(t.mode&1))return Hs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(V(419)),r=td(a,r,void 0),Hs(e,t,s,r)}if(l=(s&e.childLanes)!==0,At||l){if(r=Ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Gn(e,i),cn(r,e,i,-1))}return Fh(),r=td(Error(V(421))),Hs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Eb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Dt=wr(i.nextSibling),Ot=t,je=!0,an=null,e!==null&&(Gt[Kt++]=Dn,Gt[Kt++]=On,Gt[Kt++]=ni,Dn=e.id,On=e.overflow,ni=t),t=$h(t,r.children),t.flags|=4096,t)}function om(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),e1(e.return,t,n)}function nd(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Lx(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,n,t);else if(e.tag===19)om(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nd(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nd(t,!0,n,null,a);break;case"together":nd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ii|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=Sr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fb(e,t,n){switch(t.tag){case 3:Mx(t),co();break;case 5:rx(t);break;case 1:Mt(t.type)&&pc(t);break;case 4:Ch(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(xc,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Tx(e,t,n):(ge(Ee,Ee.current&1),e=Kn(e,t,n),e!==null?e.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Ax(e,t,n)}return Kn(e,t,n)}var Hx,l1,Vx,$x;Hx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};l1=function(){};Vx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wr(bn.current);var a=null;switch(n){case"input":i=Tu(e,i),r=Tu(e,r),a=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),a=[];break;case"textarea":i=Vu(e,i),r=Vu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hc)}zu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wa.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ye("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};$x=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fo(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pb(e,t,n){var r=t.pendingProps;switch(vh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return Mt(t.type)&&fc(),ot(t),null;case 3:return r=t.stateNode,ho(),we(Pt),we(ht),Ph(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,an!==null&&(g1(an),an=null))),l1(e,t),ot(t),null;case 5:Ah(t);var i=Wr(Ha.current);if(n=t.type,e!==null&&t.stateNode!=null)Vx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return ot(t),null}if(e=Wr(bn.current),Ts(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[vn]=t,r[Ta]=a,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<ta.length;i++)ye(ta[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":pp(r,a),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ye("invalid",r);break;case"textarea":gp(r,a),ye("invalid",r)}zu(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ms(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ms(r.textContent,l,e),i=["children",""+l]):wa.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ye("scroll",r)}switch(n){case"input":bs(r),mp(r,a,!0);break;case"textarea":bs(r),xp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=hc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=l8(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vn]=t,e[Ta]=r,Hx(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ru(n,r),n){case"dialog":ye("cancel",e),ye("close",e),i=r;break;case"iframe":case"object":case"embed":ye("load",e),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)ye(ta[i],e);i=r;break;case"source":ye("error",e),i=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=r;break;case"details":ye("toggle",e),i=r;break;case"input":pp(e,r),i=Tu(e,r),ye("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ye("invalid",e);break;case"textarea":gp(e,r),i=Vu(e,r),ye("invalid",e);break;default:i=r}zu(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?u8(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&c8(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ba(e,c):typeof c=="number"&&ba(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(wa.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ye("scroll",e):c!=null&&ih(e,a,c,s))}switch(n){case"input":bs(e),mp(e,r,!1);break;case"textarea":bs(e),xp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Er(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?to(e,!!r.multiple,a,!1):r.defaultValue!=null&&to(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)$x(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Wr(Ha.current),Wr(bn.current),Ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[vn]=t,(a=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:Ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ms(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=t,t.stateNode=r}return ot(t),null;case 13:if(we(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&Dt!==null&&t.mode&1&&!(t.flags&128))X8(),co(),t.flags|=98560,a=!1;else if(a=Ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(V(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(V(317));a[vn]=t}else co(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),a=!1}else an!==null&&(g1(an),an=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Ne===0&&(Ne=3):Fh())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return ho(),l1(e,t),e===null&&Pa(t.stateNode.containerInfo),ot(t),null;case 10:return kh(t.type._context),ot(t),null;case 17:return Mt(t.type)&&fc(),ot(t),null;case 19:if(we(Ee),a=t.memoizedState,a===null)return ot(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Fo(a,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=wc(e),s!==null){for(t.flags|=128,Fo(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&ze()>po&&(t.flags|=128,r=!0,Fo(a,!1),t.lanes=4194304)}else{if(!r)if(e=wc(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!je)return ot(t),null}else 2*ze()-a.renderingStartTime>po&&n!==1073741824&&(t.flags|=128,r=!0,Fo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return Ih(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?zt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function mb(e,t){switch(vh(t),t.tag){case 1:return Mt(t.type)&&fc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),we(Pt),we(ht),Ph(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ah(t),null;case 13:if(we(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));co()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ee),null;case 4:return ho(),null;case 10:return kh(t.type._context),null;case 22:case 23:return Ih(),null;case 24:return null;default:return null}}var Vs=!1,lt=!1,gb=typeof WeakSet=="function"?WeakSet:Set,F=null;function Bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function c1(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var am=!1;function xb(e,t){if(Uu=cc,e=I8(),xh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==a||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===i&&(l=s),m===a&&++f===r&&(c=s),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},cc=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var w=j.memoizedProps,C=j.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?w:nn(t.type,w),C);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(E){Ve(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return j=am,am=!1,j}function fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&c1(t,n,a)}i=i.next}while(i!==r)}}function o0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function d1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zx(e){var t=e.alternate;t!==null&&(e.alternate=null,zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[Ta],delete t[Yu],delete t[Jw],delete t[eb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rx(e){return e.tag===5||e.tag===3||e.tag===4}function sm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function u1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hc));else if(r!==4&&(e=e.child,e!==null))for(u1(e,t,n),e=e.sibling;e!==null;)u1(e,t,n),e=e.sibling}function h1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(h1(e,t,n),e=e.sibling;e!==null;)h1(e,t,n),e=e.sibling}var Je=null,rn=!1;function rr(e,t,n){for(n=n.child;n!==null;)Dx(e,t,n),n=n.sibling}function Dx(e,t,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:lt||Bi(n,t);case 6:var r=Je,i=rn;Je=null,rr(e,t,n),Je=r,rn=i,Je!==null&&(rn?(e=Je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(rn?(e=Je,n=n.stateNode,e.nodeType===8?K0(e.parentNode,n):e.nodeType===1&&K0(e,n),Ea(e)):K0(Je,n.stateNode));break;case 4:r=Je,i=rn,Je=n.stateNode.containerInfo,rn=!0,rr(e,t,n),Je=r,rn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&c1(n,t,s),i=i.next}while(i!==r)}rr(e,t,n);break;case 1:if(!lt&&(Bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,t,l)}rr(e,t,n);break;case 21:rr(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,rr(e,t,n),lt=r):rr(e,t,n);break;default:rr(e,t,n)}}function lm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gb),t.forEach(function(r){var i=Cb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,rn=!1;break e;case 3:Je=l.stateNode.containerInfo,rn=!0;break e;case 4:Je=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(Je===null)throw Error(V(160));Dx(a,s,i),Je=null,rn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ox(t,e),t=t.sibling}function Ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(t,e),mn(e),r&4){try{fa(3,e,e.return),o0(3,e)}catch(w){Ve(e,e.return,w)}try{fa(5,e,e.return)}catch(w){Ve(e,e.return,w)}}break;case 1:tn(t,e),mn(e),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(tn(t,e),mn(e),r&512&&n!==null&&Bi(n,n.return),e.flags&32){var i=e.stateNode;try{ba(i,"")}catch(w){Ve(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&a8(i,a),Ru(l,s);var u=Ru(l,a);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?u8(i,p):f==="dangerouslySetInnerHTML"?c8(i,p):f==="children"?ba(i,p):ih(i,f,p,u)}switch(l){case"input":Lu(i,a);break;case"textarea":s8(i,a);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?to(i,!!a.multiple,y,!1):m!==!!a.multiple&&(a.defaultValue!=null?to(i,!!a.multiple,a.defaultValue,!0):to(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ta]=a}catch(w){Ve(e,e.return,w)}}break;case 6:if(tn(t,e),mn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){Ve(e,e.return,w)}}break;case 3:if(tn(t,e),mn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(t.containerInfo)}catch(w){Ve(e,e.return,w)}break;case 4:tn(t,e),mn(e);break;case 13:tn(t,e),mn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Dh=ze())),r&4&&lm(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||f,tn(t,e),lt=u):tn(t,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(p=F=f;F!==null;){switch(m=F,y=m.child,m.tag){case 0:case 11:case 14:case 15:fa(4,m,m.return);break;case 1:Bi(m,m.return);var j=m.stateNode;if(typeof j.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(w){Ve(r,n,w)}}break;case 5:Bi(m,m.return);break;case 22:if(m.memoizedState!==null){dm(p);continue}}y!==null?(y.return=m,F=y):dm(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=d8("display",s))}catch(w){Ve(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Ve(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tn(t,e),mn(e),r&4&&lm(e);break;case 21:break;default:tn(t,e),mn(e)}}function mn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rx(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var a=sm(e);h1(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=sm(e);u1(e,l,s);break;default:throw Error(V(161))}}catch(c){Ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yb(e,t,n){F=e,Ix(e)}function Ix(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Vs;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||lt;l=Vs;var u=lt;if(Vs=s,(lt=c)&&!u)for(F=i;F!==null;)s=F,c=s.child,s.tag===22&&s.memoizedState!==null?um(i):c!==null?(c.return=s,F=c):um(i);for(;a!==null;)F=a,Ix(a),a=a.sibling;F=i,Vs=l,lt=u}cm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,F=a):cm(e)}}function cm(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||o0(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&qp(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qp(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ea(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}lt||t.flags&512&&d1(t)}catch(m){Ve(t,t.return,m)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function dm(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function um(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{o0(4,t)}catch(c){Ve(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ve(t,i,c)}}var a=t.return;try{d1(t)}catch(c){Ve(t,a,c)}break;case 5:var s=t.return;try{d1(t)}catch(c){Ve(t,s,c)}}}catch(c){Ve(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var vb=Math.ceil,kc=Xn.ReactCurrentDispatcher,zh=Xn.ReactCurrentOwner,Qt=Xn.ReactCurrentBatchConfig,ae=0,Ke=null,Ze=null,nt=0,zt=0,Wi=Tr(0),Ne=0,Ra=null,ii=0,a0=0,Rh=0,pa=null,Ct=null,Dh=0,po=1/0,$n=null,Sc=!1,f1=null,jr=null,$s=!1,pr=null,Ec=0,ma=0,p1=null,Wl=-1,Ul=0;function yt(){return ae&6?ze():Wl!==-1?Wl:Wl=ze()}function kr(e){return e.mode&1?ae&2&&nt!==0?nt&-nt:nb.transition!==null?(Ul===0&&(Ul=k8()),Ul):(e=ue,e!==0||(e=window.event,e=e===void 0?16:T8(e.type)),e):1}function cn(e,t,n,r){if(50<ma)throw ma=0,p1=null,Error(V(185));Ya(e,n,r),(!(ae&2)||e!==Ke)&&(e===Ke&&(!(ae&2)&&(a0|=n),Ne===4&&ur(e,nt)),Tt(e,r),n===1&&ae===0&&!(t.mode&1)&&(po=ze()+500,n0&&Lr()))}function Tt(e,t){var n=e.callbackNode;nw(e,t);var r=lc(e,e===Ke?nt:0);if(r===0)n!==null&&wp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wp(n),t===1)e.tag===0?tb(hm.bind(null,e)):K8(hm.bind(null,e)),Qw(function(){!(ae&6)&&Lr()}),n=null;else{switch(S8(r)){case 1:n=ch;break;case 4:n=b8;break;case 16:n=sc;break;case 536870912:n=j8;break;default:n=sc}n=qx(n,Fx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fx(e,t){if(Wl=-1,Ul=0,ae&6)throw Error(V(327));var n=e.callbackNode;if(ao()&&e.callbackNode!==n)return null;var r=lc(e,e===Ke?nt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Cc(e,r);else{t=r;var i=ae;ae|=2;var a=_x();(Ke!==e||nt!==t)&&($n=null,po=ze()+500,Yr(e,t));do try{jb();break}catch(l){Zx(e,l)}while(!0);jh(),kc.current=a,ae=i,Ze!==null?t=0:(Ke=null,nt=0,t=Ne)}if(t!==0){if(t===2&&(i=Zu(e),i!==0&&(r=i,t=m1(e,i))),t===1)throw n=Ra,Yr(e,0),ur(e,r),Tt(e,ze()),n;if(t===6)ur(e,r);else{if(i=e.current.alternate,!(r&30)&&!wb(i)&&(t=Cc(e,r),t===2&&(a=Zu(e),a!==0&&(r=a,t=m1(e,a))),t===1))throw n=Ra,Yr(e,0),ur(e,r),Tt(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Ir(e,Ct,$n);break;case 3:if(ur(e,r),(r&130023424)===r&&(t=Dh+500-ze(),10<t)){if(lc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ku(Ir.bind(null,e,Ct,$n),t);break}Ir(e,Ct,$n);break;case 4:if(ur(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ln(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vb(r/1960))-r,10<r){e.timeoutHandle=Ku(Ir.bind(null,e,Ct,$n),r);break}Ir(e,Ct,$n);break;case 5:Ir(e,Ct,$n);break;default:throw Error(V(329))}}}return Tt(e,ze()),e.callbackNode===n?Fx.bind(null,e):null}function m1(e,t){var n=pa;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=Cc(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&g1(t)),e}function g1(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function wb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!un(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t){for(t&=~Rh,t&=~a0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),r=1<<n;e[n]=-1,t&=~r}}function hm(e){if(ae&6)throw Error(V(327));ao();var t=lc(e,0);if(!(t&1))return Tt(e,ze()),null;var n=Cc(e,t);if(e.tag!==0&&n===2){var r=Zu(e);r!==0&&(t=r,n=m1(e,r))}if(n===1)throw n=Ra,Yr(e,0),ur(e,t),Tt(e,ze()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,Ct,$n),Tt(e,ze()),null}function Oh(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(po=ze()+500,n0&&Lr())}}function oi(e){pr!==null&&pr.tag===0&&!(ae&6)&&ao();var t=ae;ae|=1;var n=Qt.transition,r=ue;try{if(Qt.transition=null,ue=1,e)return e()}finally{ue=r,Qt.transition=n,ae=t,!(ae&6)&&Lr()}}function Ih(){zt=Wi.current,we(Wi)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yw(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fc();break;case 3:ho(),we(Pt),we(ht),Ph();break;case 5:Ah(r);break;case 4:ho();break;case 13:we(Ee);break;case 19:we(Ee);break;case 10:kh(r.type._context);break;case 22:case 23:Ih()}n=n.return}if(Ke=e,Ze=e=Sr(e.current,null),nt=zt=t,Ne=0,Ra=null,Rh=a0=ii=0,Ct=pa=null,Br!==null){for(t=0;t<Br.length;t++)if(n=Br[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}Br=null}return e}function Zx(e,t){do{var n=Ze;try{if(jh(),_l.current=jc,bc){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bc=!1}if(ri=0,qe=_e=Ae=null,ha=!1,Va=0,zh.current=null,n===null||n.return===null){Ne=1,Ra=t,Ze=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=nt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Jp(s);if(y!==null){y.flags&=-257,em(y,s,l,a,t),y.mode&1&&Xp(a,u,t),t=y,c=u;var j=t.updateQueue;if(j===null){var w=new Set;w.add(c),t.updateQueue=w}else j.add(c);break e}else{if(!(t&1)){Xp(a,u,t),Fh();break e}c=Error(V(426))}}else if(je&&l.mode&1){var C=Jp(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),em(C,s,l,a,t),wh(fo(c,l));break e}}a=c=fo(c,l),Ne!==4&&(Ne=2),pa===null?pa=[a]:pa.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Sx(a,c,t);Up(a,x);break e;case 1:l=c;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(jr===null||!jr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Ex(a,l,t);Up(a,E);break e}}a=a.return}while(a!==null)}Bx(n)}catch(P){t=P,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function _x(){var e=kc.current;return kc.current=jc,e===null?jc:e}function Fh(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ke===null||!(ii&268435455)&&!(a0&268435455)||ur(Ke,nt)}function Cc(e,t){var n=ae;ae|=2;var r=_x();(Ke!==e||nt!==t)&&($n=null,Yr(e,t));do try{bb();break}catch(i){Zx(e,i)}while(!0);if(jh(),ae=n,kc.current=r,Ze!==null)throw Error(V(261));return Ke=null,nt=0,Ne}function bb(){for(;Ze!==null;)Nx(Ze)}function jb(){for(;Ze!==null&&!q3();)Nx(Ze)}function Nx(e){var t=Ux(e.alternate,e,zt);e.memoizedProps=e.pendingProps,t===null?Bx(e):Ze=t,zh.current=null}function Bx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mb(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ze=null;return}}else if(n=pb(n,t,zt),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);Ne===0&&(Ne=5)}function Ir(e,t,n){var r=ue,i=Qt.transition;try{Qt.transition=null,ue=1,kb(e,t,n,r)}finally{Qt.transition=i,ue=r}return null}function kb(e,t,n,r){do ao();while(pr!==null);if(ae&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(rw(e,a),e===Ke&&(Ze=Ke=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$s||($s=!0,qx(sc,function(){return ao(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Qt.transition,Qt.transition=null;var s=ue;ue=1;var l=ae;ae|=4,zh.current=null,xb(e,n),Ox(n,e),Nw(qu),cc=!!Uu,qu=Uu=null,e.current=n,yb(n),G3(),ae=l,ue=s,Qt.transition=a}else e.current=n;if($s&&($s=!1,pr=e,Ec=i),a=e.pendingLanes,a===0&&(jr=null),Q3(n.stateNode),Tt(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sc)throw Sc=!1,e=f1,f1=null,e;return Ec&1&&e.tag!==0&&ao(),a=e.pendingLanes,a&1?e===p1?ma++:(ma=0,p1=e):ma=0,Lr(),null}function ao(){if(pr!==null){var e=S8(Ec),t=Qt.transition,n=ue;try{if(Qt.transition=null,ue=16>e?16:e,pr===null)var r=!1;else{if(e=pr,pr=null,Ec=0,ae&6)throw Error(V(331));var i=ae;for(ae|=4,F=e.current;F!==null;){var a=F,s=a.child;if(F.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:fa(8,f,a)}var p=f.child;if(p!==null)p.return=f,F=p;else for(;F!==null;){f=F;var m=f.sibling,y=f.return;if(zx(f),f===u){F=null;break}if(m!==null){m.return=y,F=m;break}F=y}}}var j=a.alternate;if(j!==null){var w=j.child;if(w!==null){j.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}F=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,F=s;else e:for(;F!==null;){if(a=F,a.flags&2048)switch(a.tag){case 0:case 11:case 15:fa(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,F=x;break e}F=a.return}}var g=e.current;for(F=g;F!==null;){s=F;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,F=v;else e:for(s=g;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:o0(9,l)}}catch(P){Ve(l,l.return,P)}if(l===s){F=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,F=E;break e}F=l.return}}if(ae=i,Lr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Qc,e)}catch{}r=!0}return r}finally{ue=n,Qt.transition=t}}return!1}function fm(e,t,n){t=fo(n,t),t=Sx(e,t,1),e=br(e,t,1),t=yt(),e!==null&&(Ya(e,1,t),Tt(e,t))}function Ve(e,t,n){if(e.tag===3)fm(e,e,n);else for(;t!==null;){if(t.tag===3){fm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){e=fo(n,e),e=Ex(t,e,1),t=br(t,e,1),e=yt(),t!==null&&(Ya(t,1,e),Tt(t,e));break}}t=t.return}}function Sb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&n,Ke===e&&(nt&n)===n&&(Ne===4||Ne===3&&(nt&130023424)===nt&&500>ze()-Dh?Yr(e,0):Rh|=n),Tt(e,t)}function Wx(e,t){t===0&&(e.mode&1?(t=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):t=1);var n=yt();e=Gn(e,t),e!==null&&(Ya(e,t,n),Tt(e,n))}function Eb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wx(e,n)}function Cb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Wx(e,n)}var Ux;Ux=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,fb(e,t,n);At=!!(e.flags&131072)}else At=!1,je&&t.flags&1048576&&Y8(t,gc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=lo(t,ht.current);oo(t,n),i=Th(null,t,r,e,i,n);var a=Lh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mt(r)?(a=!0,pc(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(t),i.updater=i0,t.stateNode=i,i._reactInternals=t,n1(t,r,e,n),t=o1(null,t,r,!0,a,n)):(t.tag=0,je&&a&&yh(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pb(r),e=nn(r,e),i){case 0:t=i1(null,t,r,e,n);break e;case 1:t=rm(null,t,r,e,n);break e;case 11:t=tm(null,t,r,e,n);break e;case 14:t=nm(null,t,r,nn(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),i1(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),rm(e,t,r,i,n);case 3:e:{if(Mx(t),e===null)throw Error(V(387));r=t.pendingProps,a=t.memoizedState,i=a.element,nx(e,t),vc(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=fo(Error(V(423)),t),t=im(e,t,r,n,i);break e}else if(r!==i){i=fo(Error(V(424)),t),t=im(e,t,r,n,i);break e}else for(Dt=wr(t.stateNode.containerInfo.firstChild),Ot=t,je=!0,an=null,n=ex(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){t=Kn(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return rx(t),e===null&&Ju(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Gu(r,i)?s=null:a!==null&&Gu(r,a)&&(t.flags|=32),Px(e,t),xt(e,t,s,n),t.child;case 6:return e===null&&Ju(t),null;case 13:return Tx(e,t,n);case 4:return Ch(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),tm(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ge(xc,r._currentValue),r._currentValue=s,a!==null)if(un(a.value,s)){if(a.children===i.children&&!Pt.current){t=Kn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Fn(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),e1(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(V(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),e1(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oo(t,n),i=Xt(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=nn(r,t.pendingProps),i=nn(r.type,i),nm(e,t,r,i,n);case 15:return Cx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nn(r,i),Bl(e,t),t.tag=1,Mt(r)?(e=!0,pc(t)):e=!1,oo(t,n),kx(t,r,i),n1(t,r,i,n),o1(null,t,r,!0,e,n);case 19:return Lx(e,t,n);case 22:return Ax(e,t,n)}throw Error(V(156,t.tag))};function qx(e,t){return w8(e,t)}function Ab(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new Ab(e,t,n,r)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pb(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ah)return 11;if(e===sh)return 14}return 2}function Sr(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ql(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Zh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zi:return Qr(n.children,i,a,t);case oh:s=8,i|=8;break;case Cu:return e=Yt(12,n,t,i|2),e.elementType=Cu,e.lanes=a,e;case Au:return e=Yt(13,n,t,i),e.elementType=Au,e.lanes=a,e;case Pu:return e=Yt(19,n,t,i),e.elementType=Pu,e.lanes=a,e;case r8:return s0(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case t8:s=10;break e;case n8:s=9;break e;case ah:s=11;break e;case sh:s=14;break e;case lr:s=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Yt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Qr(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function s0(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=r8,e.lanes=n,e.stateNode={isHidden:!1},e}function rd(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function id(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=O0(0),this.expirationTimes=O0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=O0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _h(e,t,n,r,i,a,s,l,c){return e=new Mb(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Yt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(a),e}function Tb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gx(e){if(!e)return Cr;e=e._reactInternals;e:{if(di(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Mt(n))return G8(e,n,t)}return t}function Kx(e,t,n,r,i,a,s,l,c){return e=_h(n,r,!0,e,i,a,s,l,c),e.context=Gx(null),n=e.current,r=yt(),i=kr(n),a=Fn(r,i),a.callback=t??null,br(n,a,i),e.current.lanes=i,Ya(e,i,r),Tt(e,r),e}function l0(e,t,n,r){var i=t.current,a=yt(),s=kr(i);return n=Gx(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=br(i,t,s),e!==null&&(cn(e,i,s,a),Zl(e,i,s)),s}function Ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nh(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function Lb(){return null}var Yx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bh(e){this._internalRoot=e}c0.prototype.render=Bh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));l0(e,t,null,null)};c0.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;oi(function(){l0(null,e,null,null)}),t[qn]=null}};function c0(e){this._internalRoot=e}c0.prototype.unstable_scheduleHydration=function(e){if(e){var t=A8();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&M8(e)}};function Wh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Hb(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ac(s);a.call(u)}}var s=Kx(t,r,e,0,null,!1,!1,"",mm);return e._reactRootContainer=s,e[qn]=s.current,Pa(e.nodeType===8?e.parentNode:e),oi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ac(c);l.call(u)}}var c=_h(e,0,!1,null,null,!1,!1,"",mm);return e._reactRootContainer=c,e[qn]=c.current,Pa(e.nodeType===8?e.parentNode:e),oi(function(){l0(t,c,n,r)}),c}function u0(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=Ac(s);l.call(c)}}l0(t,s,e,i)}else s=Hb(n,t,e,i,r);return Ac(s)}E8=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ea(t.pendingLanes);n!==0&&(dh(t,n|1),Tt(t,ze()),!(ae&6)&&(po=ze()+500,Lr()))}break;case 13:oi(function(){var r=Gn(e,1);if(r!==null){var i=yt();cn(r,e,1,i)}}),Nh(e,1)}};uh=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=yt();cn(t,e,134217728,n)}Nh(e,134217728)}};C8=function(e){if(e.tag===13){var t=kr(e),n=Gn(e,t);if(n!==null){var r=yt();cn(n,e,t,r)}Nh(e,t)}};A8=function(){return ue};P8=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Ou=function(e,t,n){switch(t){case"input":if(Lu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=t0(r);if(!i)throw Error(V(90));o8(r),Lu(r,i)}}}break;case"textarea":s8(e,n);break;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}};p8=Oh;m8=oi;var Vb={usingClientEntryPoint:!1,Events:[Xa,Ii,t0,h8,f8,Oh]},Zo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$b={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=y8(e),e===null?null:e.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||Lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{Qc=zs.inject($b),wn=zs}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vb;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(t))throw Error(V(200));return Tb(e,t,null,n)};Zt.createRoot=function(e,t){if(!Wh(e))throw Error(V(299));var n=!1,r="",i=Yx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_h(e,1,!1,null,null,n,!1,r,i),e[qn]=t.current,Pa(e.nodeType===8?e.parentNode:e),new Bh(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=y8(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return oi(e)};Zt.hydrate=function(e,t,n){if(!d0(t))throw Error(V(200));return u0(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!Wh(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Yx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Kx(t,null,e,1,n??null,i,!1,a,s),e[qn]=t.current,Pa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new c0(t)};Zt.render=function(e,t,n){if(!d0(t))throw Error(V(200));return u0(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!d0(e))throw Error(V(40));return e._reactRootContainer?(oi(function(){u0(null,null,e,!1,function(){e._reactRootContainer=null,e[qn]=null})}),!0):!1};Zt.unstable_batchedUpdates=Oh;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!d0(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return u0(e,t,n,!1,r)};Zt.version="18.3.1-next-f1338f8080-20240426";function Qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qx)}catch(e){console.error(e)}}Qx(),Q4.exports=Zt;var Uh=Q4.exports;const zb=Ga(Uh),Rb=H4({__proto__:null,default:zb},[Uh]);/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Ie;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ie||(Ie={}));const gm="popstate";function Db(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:l}=r.location;return Da("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ai(i)}return Ib(t,n,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ob(){return Math.random().toString(36).substr(2,8)}function xm(e,t){return{usr:e.state,key:e.key,idx:t}}function Da(e,t,n,r){return n===void 0&&(n=null),Se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||Ob()})}function ai(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ib(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,l=Ie.Pop,c=null,u=f();u==null&&(u=0,s.replaceState(Se({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){l=Ie.Pop;let C=f(),x=C==null?null:C-u;u=C,c&&c({action:l,location:w.location,delta:x})}function m(C,x){l=Ie.Push;let g=Da(w.location,C,x);u=f()+1;let v=xm(g,u),E=w.createHref(g);try{s.pushState(v,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}a&&c&&c({action:l,location:w.location,delta:1})}function y(C,x){l=Ie.Replace;let g=Da(w.location,C,x);u=f();let v=xm(g,u),E=w.createHref(g);s.replaceState(v,"",E),a&&c&&c({action:l,location:w.location,delta:0})}function j(C){let x=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof C=="string"?C:ai(C);return g=g.replace(/ $/,"%20"),te(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let w={get action(){return l},get location(){return e(i,s)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(gm,p),c=C,()=>{i.removeEventListener(gm,p),c=null}},createHref(C){return t(i,C)},createURL:j,encodeLocation(C){let x=j(C);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(C){return s.go(C)}};return w}var fe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fe||(fe={}));const Fb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Zb(e){return e.index===!0}function Oa(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let s=[...n,String(a)],l=typeof i.id=="string"?i.id:s.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Zb(i)){let c=Se({},i,t(i),{id:l});return r[l]=c,c}else{let c=Se({},i,t(i),{id:l,children:void 0});return r[l]=c,i.children&&(c.children=Oa(i.children,t,s,r)),c}})}function _r(e,t,n){return n===void 0&&(n="/"),Gl(e,t,n,!1)}function Gl(e,t,n,r){let i=typeof t=="string"?Hr(t):t,a=Yn(i.pathname||"/",n);if(a==null)return null;let s=Xx(e);Nb(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=e7(a);l=Xb(s[c],u,r)}return l}function _b(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Xx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Zn([r,c.relativePath]),f=n.concat(c);a.children&&a.children.length>0&&(te(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xx(a.children,t,f,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Yb(u,a.index),routesMeta:f})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let c of Jx(a.path))i(a,s,c)}),t}function Jx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=Jx(r.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Nb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bb=/^:[\w-]+$/,Wb=3,Ub=2,qb=1,Gb=10,Kb=-2,ym=e=>e==="*";function Yb(e,t){let n=e.split("/"),r=n.length;return n.some(ym)&&(r+=Kb),t&&(r+=Ub),n.filter(i=>!ym(i)).reduce((i,a)=>i+(Bb.test(a)?Wb:a===""?qb:Gb),r)}function Qb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Xb(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=a==="/"?t:t.slice(a.length)||"/",p=Pc({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=Pc({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:Zn([a,p.pathname]),pathnameBase:r7(Zn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Zn([a,p.pathnameBase]))}return s}function Pc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,p)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let w=l[p]||"";s=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const j=l[p];return y&&!j?u[m]=void 0:u[m]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:s,pattern:e}}function Jb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function e7(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Yn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function t7(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Hr(e):e;return{pathname:n?n.startsWith("/")?n:n7(n,t):t,search:i7(r),hash:o7(i)}}function n7(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function od(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e6(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qh(e,t){let n=e6(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Hr(e):(i=Se({},e),te(!i.pathname||!i.pathname.includes("?"),od("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),od("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),od("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=t7(i,l),u=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),r7=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i7=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o7=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Mc{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function h0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t6=["post","put","patch","delete"],a7=new Set(t6),s7=["get",...t6],l7=new Set(s7),c7=new Set([301,302,303,307,308]),d7=new Set([307,308]),ad={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},u7={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_o={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h7=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),n6="remix-router-transitions";function f7(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let S=e.detectErrorBoundary;i=A=>({hasErrorBoundary:S(A)})}else i=h7;let a={},s=Oa(e.routes,i,void 0,a),l,c=e.basename||"/",u=e.unstable_dataStrategy||v7,f=e.unstable_patchRoutesOnNavigation,p=Se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),m=null,y=new Set,j=1e3,w=new Set,C=null,x=null,g=null,v=e.hydrationData!=null,E=_r(s,e.history.location,c),P=null;if(E==null&&!f){let S=mt(404,{pathname:e.history.location.pathname}),{matches:A,route:M}=Am(s);E=A,P={[M.id]:S}}E&&!e.hydrationData&&hs(E,s,e.history.location.pathname).active&&(E=null);let T;if(E)if(E.some(S=>S.route.lazy))T=!1;else if(!E.some(S=>S.route.loader))T=!0;else if(p.v7_partialHydration){let S=e.hydrationData?e.hydrationData.loaderData:null,A=e.hydrationData?e.hydrationData.errors:null,M=H=>H.route.loader?typeof H.route.loader=="function"&&H.route.loader.hydrate===!0?!1:S&&S[H.route.id]!==void 0||A&&A[H.route.id]!==void 0:!0;if(A){let H=E.findIndex(I=>A[I.route.id]!==void 0);T=E.slice(0,H+1).every(M)}else T=E.every(M)}else T=e.hydrationData!=null;else if(T=!1,E=[],p.v7_partialHydration){let S=hs(null,s,e.history.location.pathname);S.active&&S.matches&&(E=S.matches)}let L,k={historyAction:e.history.action,location:e.history.location,matches:E,initialized:T,navigation:ad,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||P,fetchers:new Map,blockers:new Map},R=Ie.Pop,$=!1,U,se=!1,be=new Map,me=null,Lt=!1,St=!1,he=[],z=new Set,D=new Map,G=0,ie=-1,re=new Map,Qe=new Set,Be=new Map,Et=new Map,ke=new Set,Xe=new Map,Ht=new Map,En=new Map,Jn;function Ci(){if(m=e.history.listen(S=>{let{action:A,location:M,delta:H}=S;if(Jn){Jn(),Jn=void 0;return}mo(Ht.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Xf({currentLocation:k.location,nextLocation:M,historyAction:A});if(I&&H!=null){let B=new Promise(Q=>{Jn=Q});e.history.go(H*-1),ds(I,{state:"blocked",location:M,proceed(){ds(I,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),B.then(()=>e.history.go(H))},reset(){let Q=new Map(k.blockers);Q.set(I,_o),pt({blockers:Q})}});return}return zr(A,M)}),n){$7(t,be);let S=()=>z7(t,be);t.addEventListener("pagehide",S),me=()=>t.removeEventListener("pagehide",S)}return k.initialized||zr(Ie.Pop,k.location,{initialHydration:!0}),L}function pn(){m&&m(),me&&me(),y.clear(),U&&U.abort(),k.fetchers.forEach((S,A)=>cs(A)),k.blockers.forEach((S,A)=>Qf(A))}function x5(S){return y.add(S),()=>y.delete(S)}function pt(S,A){A===void 0&&(A={}),k=Se({},k,S);let M=[],H=[];p.v7_fetcherPersist&&k.fetchers.forEach((I,B)=>{I.state==="idle"&&(ke.has(B)?H.push(B):M.push(B))}),[...y].forEach(I=>I(k,{deletedFetchers:H,unstable_viewTransitionOpts:A.viewTransitionOpts,unstable_flushSync:A.flushSync===!0})),p.v7_fetcherPersist&&(M.forEach(I=>k.fetchers.delete(I)),H.forEach(I=>cs(I)))}function Ai(S,A,M){var H,I;let{flushSync:B}=M===void 0?{}:M,Q=k.actionData!=null&&k.navigation.formMethod!=null&&on(k.navigation.formMethod)&&k.navigation.state==="loading"&&((H=S.state)==null?void 0:H._isRedirect)!==!0,O;A.actionData?Object.keys(A.actionData).length>0?O=A.actionData:O=null:Q?O=k.actionData:O=null;let K=A.loaderData?Em(k.loaderData,A.loaderData,A.matches||[],A.errors):k.loaderData,_=k.blockers;_.size>0&&(_=new Map(_),_.forEach((de,xe)=>_.set(xe,_o)));let N=$===!0||k.navigation.formMethod!=null&&on(k.navigation.formMethod)&&((I=S.state)==null?void 0:I._isRedirect)!==!0;l&&(s=l,l=void 0),Lt||R===Ie.Pop||(R===Ie.Push?e.history.push(S,S.state):R===Ie.Replace&&e.history.replace(S,S.state));let le;if(R===Ie.Pop){let de=be.get(k.location.pathname);de&&de.has(S.pathname)?le={currentLocation:k.location,nextLocation:S}:be.has(S.pathname)&&(le={currentLocation:S,nextLocation:k.location})}else if(se){let de=be.get(k.location.pathname);de?de.add(S.pathname):(de=new Set([S.pathname]),be.set(k.location.pathname,de)),le={currentLocation:k.location,nextLocation:S}}pt(Se({},A,{actionData:O,loaderData:K,historyAction:R,location:S,initialized:!0,navigation:ad,revalidation:"idle",restoreScrollPosition:ep(S,A.matches||k.matches),preventScrollReset:N,blockers:_}),{viewTransitionOpts:le,flushSync:B===!0}),R=Ie.Pop,$=!1,se=!1,Lt=!1,St=!1,he=[]}async function Bf(S,A){if(typeof S=="number"){e.history.go(S);return}let M=x1(k.location,k.matches,c,p.v7_prependBasename,S,p.v7_relativeSplatPath,A==null?void 0:A.fromRouteId,A==null?void 0:A.relative),{path:H,submission:I,error:B}=vm(p.v7_normalizeFormMethod,!1,M,A),Q=k.location,O=Da(k.location,H,A&&A.state);O=Se({},O,e.history.encodeLocation(O));let K=A&&A.replace!=null?A.replace:void 0,_=Ie.Push;K===!0?_=Ie.Replace:K===!1||I!=null&&on(I.formMethod)&&I.formAction===k.location.pathname+k.location.search&&(_=Ie.Replace);let N=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,le=(A&&A.unstable_flushSync)===!0,de=Xf({currentLocation:Q,nextLocation:O,historyAction:_});if(de){ds(de,{state:"blocked",location:O,proceed(){ds(de,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),Bf(S,A)},reset(){let xe=new Map(k.blockers);xe.set(de,_o),pt({blockers:xe})}});return}return await zr(_,O,{submission:I,pendingError:B,preventScrollReset:N,replace:A&&A.replace,enableViewTransition:A&&A.unstable_viewTransition,flushSync:le})}function y5(){if(A0(),pt({revalidation:"loading"}),k.navigation.state!=="submitting"){if(k.navigation.state==="idle"){zr(k.historyAction,k.location,{startUninterruptedRevalidation:!0});return}zr(R||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation,enableViewTransition:se===!0})}}async function zr(S,A,M){U&&U.abort(),U=null,R=S,Lt=(M&&M.startUninterruptedRevalidation)===!0,P5(k.location,k.matches),$=(M&&M.preventScrollReset)===!0,se=(M&&M.enableViewTransition)===!0;let H=l||s,I=M&&M.overrideNavigation,B=_r(H,A,c),Q=(M&&M.flushSync)===!0,O=hs(B,H,A.pathname);if(O.active&&O.matches&&(B=O.matches),!B){let{error:oe,notFoundMatches:We,route:Re}=P0(A.pathname);Ai(A,{matches:We,loaderData:{},errors:{[Re.id]:oe}},{flushSync:Q});return}if(k.initialized&&!St&&E7(k.location,A)&&!(M&&M.submission&&on(M.submission.formMethod))){Ai(A,{matches:B},{flushSync:Q});return}U=new AbortController;let K=Li(e.history,A,U.signal,M&&M.submission),_;if(M&&M.pendingError)_=[Ui(B).route.id,{type:fe.error,error:M.pendingError}];else if(M&&M.submission&&on(M.submission.formMethod)){let oe=await v5(K,A,M.submission,B,O.active,{replace:M.replace,flushSync:Q});if(oe.shortCircuited)return;if(oe.pendingActionResult){let[We,Re]=oe.pendingActionResult;if(Rt(Re)&&h0(Re.error)&&Re.error.status===404){U=null,Ai(A,{matches:oe.matches,loaderData:{},errors:{[We]:Re.error}});return}}B=oe.matches||B,_=oe.pendingActionResult,I=sd(A,M.submission),Q=!1,O.active=!1,K=Li(e.history,K.url,K.signal)}let{shortCircuited:N,matches:le,loaderData:de,errors:xe}=await w5(K,A,B,O.active,I,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,Q,_);N||(U=null,Ai(A,Se({matches:le||B},Cm(_),{loaderData:de,errors:xe})))}async function v5(S,A,M,H,I,B){B===void 0&&(B={}),A0();let Q=H7(A,M);if(pt({navigation:Q},{flushSync:B.flushSync===!0}),I){let _=await fs(H,A.pathname,S.signal);if(_.type==="aborted")return{shortCircuited:!0};if(_.type==="error"){let{boundaryId:N,error:le}=us(A.pathname,_);return{matches:_.partialMatches,pendingActionResult:[N,{type:fe.error,error:le}]}}else if(_.matches)H=_.matches;else{let{notFoundMatches:N,error:le,route:de}=P0(A.pathname);return{matches:N,pendingActionResult:[de.id,{type:fe.error,error:le}]}}}let O,K=na(H,A);if(!K.route.action&&!K.route.lazy)O={type:fe.error,error:mt(405,{method:S.method,pathname:A.pathname,routeId:K.route.id})};else if(O=(await To("action",k,S,[K],H,null))[K.route.id],S.signal.aborted)return{shortCircuited:!0};if(Ur(O)){let _;return B&&B.replace!=null?_=B.replace:_=jm(O.response.headers.get("Location"),new URL(S.url),c)===k.location.pathname+k.location.search,await Rr(S,O,!0,{submission:M,replace:_}),{shortCircuited:!0}}if(mr(O))throw mt(400,{type:"defer-action"});if(Rt(O)){let _=Ui(H,K.route.id);return(B&&B.replace)!==!0&&(R=Ie.Push),{matches:H,pendingActionResult:[_.route.id,O]}}return{matches:H,pendingActionResult:[K.route.id,O]}}async function w5(S,A,M,H,I,B,Q,O,K,_,N){let le=I||sd(A,B),de=B||Q||Mm(le),xe=!Lt&&(!p.v7_partialHydration||!K);if(H){if(xe){let Te=Wf(N);pt(Se({navigation:le},Te!==void 0?{actionData:Te}:{}),{flushSync:_})}let J=await fs(M,A.pathname,S.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let{boundaryId:Te,error:Vt}=us(A.pathname,J);return{matches:J.partialMatches,loaderData:{},errors:{[Te]:Vt}}}else if(J.matches)M=J.matches;else{let{error:Te,notFoundMatches:Vt,route:Le}=P0(A.pathname);return{matches:Vt,loaderData:{},errors:{[Le.id]:Te}}}}let oe=l||s,[We,Re]=wm(e.history,k,M,de,A,p.v7_partialHydration&&K===!0,p.v7_skipActionErrorRevalidation,St,he,z,ke,Be,Qe,oe,c,N);if(M0(J=>!(M&&M.some(Te=>Te.route.id===J))||We&&We.some(Te=>Te.route.id===J)),ie=++G,We.length===0&&Re.length===0){let J=Kf();return Ai(A,Se({matches:M,loaderData:{},errors:N&&Rt(N[1])?{[N[0]]:N[1].error}:null},Cm(N),J?{fetchers:new Map(k.fetchers)}:{}),{flushSync:_}),{shortCircuited:!0}}if(xe){let J={};if(!H){J.navigation=le;let Te=Wf(N);Te!==void 0&&(J.actionData=Te)}Re.length>0&&(J.fetchers=b5(Re)),pt(J,{flushSync:_})}Re.forEach(J=>{D.has(J.key)&&tr(J.key),J.controller&&D.set(J.key,J.controller)});let Lo=()=>Re.forEach(J=>tr(J.key));U&&U.signal.addEventListener("abort",Lo);let{loaderResults:An,fetcherResults:Pi}=await Uf(k,M,We,Re,S);if(S.signal.aborted)return{shortCircuited:!0};U&&U.signal.removeEventListener("abort",Lo),Re.forEach(J=>D.delete(J.key));let nr=Rs(An);if(nr)return await Rr(S,nr.result,!0,{replace:O}),{shortCircuited:!0};if(nr=Rs(Pi),nr)return Qe.add(nr.key),await Rr(S,nr.result,!0,{replace:O}),{shortCircuited:!0};let{loaderData:ps,errors:Pn}=Sm(k,M,We,An,N,Re,Pi,Xe);Xe.forEach((J,Te)=>{J.subscribe(Vt=>{(Vt||J.done)&&Xe.delete(Te)})}),p.v7_partialHydration&&K&&k.errors&&Object.entries(k.errors).filter(J=>{let[Te]=J;return!We.some(Vt=>Vt.route.id===Te)}).forEach(J=>{let[Te,Vt]=J;Pn=Object.assign(Pn||{},{[Te]:Vt})});let ms=Kf(),gs=Yf(ie),xs=ms||gs||Re.length>0;return Se({matches:M,loaderData:ps,errors:Pn},xs?{fetchers:new Map(k.fetchers)}:{})}function Wf(S){if(S&&!Rt(S[1]))return{[S[0]]:S[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}function b5(S){return S.forEach(A=>{let M=k.fetchers.get(A.key),H=No(void 0,M?M.data:void 0);k.fetchers.set(A.key,H)}),new Map(k.fetchers)}function j5(S,A,M,H){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(S)&&tr(S);let I=(H&&H.unstable_flushSync)===!0,B=l||s,Q=x1(k.location,k.matches,c,p.v7_prependBasename,M,p.v7_relativeSplatPath,A,H==null?void 0:H.relative),O=_r(B,Q,c),K=hs(O,B,Q);if(K.active&&K.matches&&(O=K.matches),!O){Cn(S,A,mt(404,{pathname:Q}),{flushSync:I});return}let{path:_,submission:N,error:le}=vm(p.v7_normalizeFormMethod,!0,Q,H);if(le){Cn(S,A,le,{flushSync:I});return}let de=na(O,_);if($=(H&&H.preventScrollReset)===!0,N&&on(N.formMethod)){k5(S,A,_,de,O,K.active,I,N);return}Be.set(S,{routeId:A,path:_}),S5(S,A,_,de,O,K.active,I,N)}async function k5(S,A,M,H,I,B,Q,O){A0(),Be.delete(S);function K(Le){if(!Le.route.action&&!Le.route.lazy){let Mn=mt(405,{method:O.formMethod,pathname:M,routeId:A});return Cn(S,A,Mn,{flushSync:Q}),!0}return!1}if(!B&&K(H))return;let _=k.fetchers.get(S);er(S,V7(O,_),{flushSync:Q});let N=new AbortController,le=Li(e.history,M,N.signal,O);if(B){let Le=await fs(I,M,le.signal);if(Le.type==="aborted")return;if(Le.type==="error"){let{error:Mn}=us(M,Le);Cn(S,A,Mn,{flushSync:Q});return}else if(Le.matches){if(I=Le.matches,H=na(I,M),K(H))return}else{Cn(S,A,mt(404,{pathname:M}),{flushSync:Q});return}}D.set(S,N);let de=G,oe=(await To("action",k,le,[H],I,S))[H.route.id];if(le.signal.aborted){D.get(S)===N&&D.delete(S);return}if(p.v7_fetcherPersist&&ke.has(S)){if(Ur(oe)||Rt(oe)){er(S,ir(void 0));return}}else{if(Ur(oe))if(D.delete(S),ie>de){er(S,ir(void 0));return}else return Qe.add(S),er(S,No(O)),Rr(le,oe,!1,{fetcherSubmission:O});if(Rt(oe)){Cn(S,A,oe.error);return}}if(mr(oe))throw mt(400,{type:"defer-action"});let We=k.navigation.location||k.location,Re=Li(e.history,We,N.signal),Lo=l||s,An=k.navigation.state!=="idle"?_r(Lo,k.navigation.location,c):k.matches;te(An,"Didn't find any matches after fetcher action");let Pi=++G;re.set(S,Pi);let nr=No(O,oe.data);k.fetchers.set(S,nr);let[ps,Pn]=wm(e.history,k,An,O,We,!1,p.v7_skipActionErrorRevalidation,St,he,z,ke,Be,Qe,Lo,c,[H.route.id,oe]);Pn.filter(Le=>Le.key!==S).forEach(Le=>{let Mn=Le.key,np=k.fetchers.get(Mn),L5=No(void 0,np?np.data:void 0);k.fetchers.set(Mn,L5),D.has(Mn)&&tr(Mn),Le.controller&&D.set(Mn,Le.controller)}),pt({fetchers:new Map(k.fetchers)});let ms=()=>Pn.forEach(Le=>tr(Le.key));N.signal.addEventListener("abort",ms);let{loaderResults:gs,fetcherResults:xs}=await Uf(k,An,ps,Pn,Re);if(N.signal.aborted)return;N.signal.removeEventListener("abort",ms),re.delete(S),D.delete(S),Pn.forEach(Le=>D.delete(Le.key));let J=Rs(gs);if(J)return Rr(Re,J.result,!1);if(J=Rs(xs),J)return Qe.add(J.key),Rr(Re,J.result,!1);let{loaderData:Te,errors:Vt}=Sm(k,An,ps,gs,void 0,Pn,xs,Xe);if(k.fetchers.has(S)){let Le=ir(oe.data);k.fetchers.set(S,Le)}Yf(Pi),k.navigation.state==="loading"&&Pi>ie?(te(R,"Expected pending action"),U&&U.abort(),Ai(k.navigation.location,{matches:An,loaderData:Te,errors:Vt,fetchers:new Map(k.fetchers)})):(pt({errors:Vt,loaderData:Em(k.loaderData,Te,An,Vt),fetchers:new Map(k.fetchers)}),St=!1)}async function S5(S,A,M,H,I,B,Q,O){let K=k.fetchers.get(S);er(S,No(O,K?K.data:void 0),{flushSync:Q});let _=new AbortController,N=Li(e.history,M,_.signal);if(B){let oe=await fs(I,M,N.signal);if(oe.type==="aborted")return;if(oe.type==="error"){let{error:We}=us(M,oe);Cn(S,A,We,{flushSync:Q});return}else if(oe.matches)I=oe.matches,H=na(I,M);else{Cn(S,A,mt(404,{pathname:M}),{flushSync:Q});return}}D.set(S,_);let le=G,xe=(await To("loader",k,N,[H],I,S))[H.route.id];if(mr(xe)&&(xe=await Yh(xe,N.signal,!0)||xe),D.get(S)===_&&D.delete(S),!N.signal.aborted){if(ke.has(S)){er(S,ir(void 0));return}if(Ur(xe))if(ie>le){er(S,ir(void 0));return}else{Qe.add(S),await Rr(N,xe,!1);return}if(Rt(xe)){Cn(S,A,xe.error);return}te(!mr(xe),"Unhandled fetcher deferred data"),er(S,ir(xe.data))}}async function Rr(S,A,M,H){let{submission:I,fetcherSubmission:B,replace:Q}=H===void 0?{}:H;A.response.headers.has("X-Remix-Revalidate")&&(St=!0);let O=A.response.headers.get("Location");te(O,"Expected a Location header on the redirect Response"),O=jm(O,new URL(S.url),c);let K=Da(k.location,O,{_isRedirect:!0});if(n){let oe=!1;if(A.response.headers.has("X-Remix-Reload-Document"))oe=!0;else if(Kh.test(O)){const We=e.history.createURL(O);oe=We.origin!==t.location.origin||Yn(We.pathname,c)==null}if(oe){Q?t.location.replace(O):t.location.assign(O);return}}U=null;let _=Q===!0||A.response.headers.has("X-Remix-Replace")?Ie.Replace:Ie.Push,{formMethod:N,formAction:le,formEncType:de}=k.navigation;!I&&!B&&N&&le&&de&&(I=Mm(k.navigation));let xe=I||B;if(d7.has(A.response.status)&&xe&&on(xe.formMethod))await zr(_,K,{submission:Se({},xe,{formAction:O}),preventScrollReset:$,enableViewTransition:M?se:void 0});else{let oe=sd(K,I);await zr(_,K,{overrideNavigation:oe,fetcherSubmission:B,preventScrollReset:$,enableViewTransition:M?se:void 0})}}async function To(S,A,M,H,I,B){let Q,O={};try{Q=await w7(u,S,A,M,H,I,B,a,i)}catch(K){return H.forEach(_=>{O[_.route.id]={type:fe.error,error:K}}),O}for(let[K,_]of Object.entries(Q))if(A7(_)){let N=_.result;O[K]={type:fe.redirect,response:k7(N,M,K,I,c,p.v7_relativeSplatPath)}}else O[K]=await j7(_);return O}async function Uf(S,A,M,H,I){let B=S.matches,Q=To("loader",S,I,M,A,null),O=Promise.all(H.map(async N=>{if(N.matches&&N.match&&N.controller){let de=(await To("loader",S,Li(e.history,N.path,N.controller.signal),[N.match],N.matches,N.key))[N.match.route.id];return{[N.key]:de}}else return Promise.resolve({[N.key]:{type:fe.error,error:mt(404,{pathname:N.path})}})})),K=await Q,_=(await O).reduce((N,le)=>Object.assign(N,le),{});return await Promise.all([T7(A,K,I.signal,B,S.loaderData),L7(A,_,H)]),{loaderResults:K,fetcherResults:_}}function A0(){St=!0,he.push(...M0()),Be.forEach((S,A)=>{D.has(A)&&(z.add(A),tr(A))})}function er(S,A,M){M===void 0&&(M={}),k.fetchers.set(S,A),pt({fetchers:new Map(k.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Cn(S,A,M,H){H===void 0&&(H={});let I=Ui(k.matches,A);cs(S),pt({errors:{[I.route.id]:M},fetchers:new Map(k.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function qf(S){return p.v7_fetcherPersist&&(Et.set(S,(Et.get(S)||0)+1),ke.has(S)&&ke.delete(S)),k.fetchers.get(S)||u7}function cs(S){let A=k.fetchers.get(S);D.has(S)&&!(A&&A.state==="loading"&&re.has(S))&&tr(S),Be.delete(S),re.delete(S),Qe.delete(S),ke.delete(S),z.delete(S),k.fetchers.delete(S)}function E5(S){if(p.v7_fetcherPersist){let A=(Et.get(S)||0)-1;A<=0?(Et.delete(S),ke.add(S)):Et.set(S,A)}else cs(S);pt({fetchers:new Map(k.fetchers)})}function tr(S){let A=D.get(S);te(A,"Expected fetch controller: "+S),A.abort(),D.delete(S)}function Gf(S){for(let A of S){let M=qf(A),H=ir(M.data);k.fetchers.set(A,H)}}function Kf(){let S=[],A=!1;for(let M of Qe){let H=k.fetchers.get(M);te(H,"Expected fetcher: "+M),H.state==="loading"&&(Qe.delete(M),S.push(M),A=!0)}return Gf(S),A}function Yf(S){let A=[];for(let[M,H]of re)if(H<S){let I=k.fetchers.get(M);te(I,"Expected fetcher: "+M),I.state==="loading"&&(tr(M),re.delete(M),A.push(M))}return Gf(A),A.length>0}function C5(S,A){let M=k.blockers.get(S)||_o;return Ht.get(S)!==A&&Ht.set(S,A),M}function Qf(S){k.blockers.delete(S),Ht.delete(S)}function ds(S,A){let M=k.blockers.get(S)||_o;te(M.state==="unblocked"&&A.state==="blocked"||M.state==="blocked"&&A.state==="blocked"||M.state==="blocked"&&A.state==="proceeding"||M.state==="blocked"&&A.state==="unblocked"||M.state==="proceeding"&&A.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+A.state);let H=new Map(k.blockers);H.set(S,A),pt({blockers:H})}function Xf(S){let{currentLocation:A,nextLocation:M,historyAction:H}=S;if(Ht.size===0)return;Ht.size>1&&mo(!1,"A router only supports one blocker at a time");let I=Array.from(Ht.entries()),[B,Q]=I[I.length-1],O=k.blockers.get(B);if(!(O&&O.state==="proceeding")&&Q({currentLocation:A,nextLocation:M,historyAction:H}))return B}function P0(S){let A=mt(404,{pathname:S}),M=l||s,{matches:H,route:I}=Am(M);return M0(),{notFoundMatches:H,route:I,error:A}}function us(S,A){return{boundaryId:Ui(A.partialMatches).route.id,error:mt(400,{type:"route-discovery",pathname:S,message:A.error!=null&&"message"in A.error?A.error:String(A.error)})}}function M0(S){let A=[];return Xe.forEach((M,H)=>{(!S||S(H))&&(M.cancel(),A.push(H),Xe.delete(H))}),A}function A5(S,A,M){if(C=S,g=A,x=M||null,!v&&k.navigation===ad){v=!0;let H=ep(k.location,k.matches);H!=null&&pt({restoreScrollPosition:H})}return()=>{C=null,g=null,x=null}}function Jf(S,A){return x&&x(S,A.map(H=>_b(H,k.loaderData)))||S.key}function P5(S,A){if(C&&g){let M=Jf(S,A);C[M]=g()}}function ep(S,A){if(C){let M=Jf(S,A),H=C[M];if(typeof H=="number")return H}return null}function hs(S,A,M){if(f){if(w.has(M))return{active:!1,matches:S};if(S){if(Object.keys(S[0].params).length>0)return{active:!0,matches:Gl(A,M,c,!0)}}else return{active:!0,matches:Gl(A,M,c,!0)||[]}}return{active:!1,matches:null}}async function fs(S,A,M){let H=S;for(;;){let I=l==null,B=l||s;try{await x7(f,A,H,B,a,i,En,M)}catch(K){return{type:"error",error:K,partialMatches:H}}finally{I&&(s=[...s])}if(M.aborted)return{type:"aborted"};let Q=_r(B,A,c);if(Q)return tp(A,w),{type:"success",matches:Q};let O=Gl(B,A,c,!0);if(!O||H.length===O.length&&H.every((K,_)=>K.route.id===O[_].route.id))return tp(A,w),{type:"success",matches:null};H=O}}function tp(S,A){if(A.size>=j){let M=A.values().next().value;A.delete(M)}A.add(S)}function M5(S){a={},l=Oa(S,i,void 0,a)}function T5(S,A){let M=l==null;i6(S,A,l||s,a,i),M&&(s=[...s],pt({}))}return L={get basename(){return c},get future(){return p},get state(){return k},get routes(){return s},get window(){return t},initialize:Ci,subscribe:x5,enableScrollRestoration:A5,navigate:Bf,fetch:j5,revalidate:y5,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:qf,deleteFetcher:E5,dispose:pn,getBlocker:C5,deleteBlocker:Qf,patchRoutes:T5,_internalFetchControllers:D,_internalActiveDeferreds:Xe,_internalSetRoutes:M5},L}function p7(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function x1(e,t,n,r,i,a,s,l){let c,u;if(s){c=[];for(let p of t)if(c.push(p),p.route.id===s){u=p;break}}else c=t,u=t[t.length-1];let f=Gh(i||".",qh(c,a),Yn(e.pathname,n)||e.pathname,l==="path");return i==null&&(f.search=e.search,f.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Qh(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Zn([n,f.pathname])),ai(f)}function vm(e,t,n,r){if(!r||!p7(r))return{path:n};if(r.formMethod&&!M7(r.formMethod))return{path:n,error:mt(405,{method:r.formMethod})};let i=()=>({path:n,error:mt(400,{type:"invalid-body"})}),a=r.formMethod||"get",s=e?a.toUpperCase():a.toLowerCase(),l=o6(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!on(s))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,j)=>{let[w,C]=j;return""+y+w+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!on(s))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}te(typeof FormData=="function","FormData is not available in this environment");let c,u;if(r.formData)c=y1(r.formData),u=r.formData;else if(r.body instanceof FormData)c=y1(r.body),u=r.body;else if(r.body instanceof URLSearchParams)c=r.body,u=km(c);else if(r.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(r.body),u=km(c)}catch{return i()}let f={formMethod:s,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(on(f.formMethod))return{path:n,submission:f};let p=Hr(n);return t&&p.search&&Qh(p.search)&&c.append("index",""),p.search="?"+c,{path:ai(p),submission:f}}function m7(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function wm(e,t,n,r,i,a,s,l,c,u,f,p,m,y,j,w){let C=w?Rt(w[1])?w[1].error:w[1].data:void 0,x=e.createURL(t.location),g=e.createURL(i),v=w&&Rt(w[1])?w[0]:void 0,E=v?m7(n,v):n,P=w?w[1].statusCode:void 0,T=s&&P&&P>=400,L=E.filter((R,$)=>{let{route:U}=R;if(U.lazy)return!0;if(U.loader==null)return!1;if(a)return typeof U.loader!="function"||U.loader.hydrate?!0:t.loaderData[U.id]===void 0&&(!t.errors||t.errors[U.id]===void 0);if(g7(t.loaderData,t.matches[$],R)||c.some(me=>me===R.route.id))return!0;let se=t.matches[$],be=R;return bm(R,Se({currentUrl:x,currentParams:se.params,nextUrl:g,nextParams:be.params},r,{actionResult:C,actionStatus:P,defaultShouldRevalidate:T?!1:l||x.pathname+x.search===g.pathname+g.search||x.search!==g.search||r6(se,be)}))}),k=[];return p.forEach((R,$)=>{if(a||!n.some(Lt=>Lt.route.id===R.routeId)||f.has($))return;let U=_r(y,R.path,j);if(!U){k.push({key:$,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let se=t.fetchers.get($),be=na(U,R.path),me=!1;m.has($)?me=!1:u.has($)?(u.delete($),me=!0):se&&se.state!=="idle"&&se.data===void 0?me=l:me=bm(be,Se({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:C,actionStatus:P,defaultShouldRevalidate:T?!1:l})),me&&k.push({key:$,routeId:R.routeId,path:R.path,matches:U,match:be,controller:new AbortController})}),[L,k]}function g7(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function r6(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function bm(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function x7(e,t,n,r,i,a,s,l){let c=[t,...n.map(u=>u.route.id)].join("-");try{let u=s.get(c);u||(u=e({path:t,matches:n,patch:(f,p)=>{l.aborted||i6(f,p,r,i,a)}}),s.set(c,u)),u&&C7(u)&&await u}finally{s.delete(c)}}function i6(e,t,n,r,i){if(e){var a;let s=r[e];te(s,"No route found to patch children into: routeId = "+e);let l=Oa(t,i,[e,"patch",String(((a=s.children)==null?void 0:a.length)||"0")],r);s.children?s.children.push(...l):s.children=l}else{let s=Oa(t,i,["patch",String(n.length||"0")],r);n.push(...s)}}async function y7(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];te(i,"No route found in manifest");let a={};for(let s in r){let c=i[s]!==void 0&&s!=="hasErrorBoundary";mo(!c,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!Fb.has(s)&&(a[s]=r[s])}Object.assign(i,a),Object.assign(i,Se({},t(i),{lazy:void 0}))}async function v7(e){let{matches:t}=e,n=t.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,a,s)=>Object.assign(i,{[n[s].route.id]:a}),{})}async function w7(e,t,n,r,i,a,s,l,c,u){let f=a.map(y=>y.route.lazy?y7(y.route,c,l):void 0),p=a.map((y,j)=>{let w=f[j],C=i.some(g=>g.route.id===y.route.id);return Se({},y,{shouldLoad:C,resolve:async g=>(g&&r.method==="GET"&&(y.route.lazy||y.route.loader)&&(C=!0),C?b7(t,r,y,w,g,u):Promise.resolve({type:fe.data,result:void 0}))})}),m=await e({matches:p,request:r,params:a[0].params,fetcherKey:s,context:u});try{await Promise.all(f)}catch{}return m}async function b7(e,t,n,r,i,a){let s,l,c=u=>{let f,p=new Promise((j,w)=>f=w);l=()=>f(),t.signal.addEventListener("abort",l);let m=j=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:a},...j!==void 0?[j]:[]),y=(async()=>{try{return{type:"data",result:await(i?i(w=>m(w)):m())}}catch(j){return{type:"error",result:j}}})();return Promise.race([y,p])};try{let u=n.route[e];if(r)if(u){let f,[p]=await Promise.all([c(u).catch(m=>{f=m}),r]);if(f!==void 0)throw f;s=p}else if(await r,u=n.route[e],u)s=await c(u);else if(e==="action"){let f=new URL(t.url),p=f.pathname+f.search;throw mt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:fe.data,result:void 0};else if(u)s=await c(u);else{let f=new URL(t.url),p=f.pathname+f.search;throw mt(404,{pathname:p})}te(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:fe.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function j7(e){let{result:t,type:n}=e;if(a6(t)){let u;try{let f=t.headers.get("Content-Type");f&&/\bapplication\/json\b/.test(f)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(f){return{type:fe.error,error:f}}return n===fe.error?{type:fe.error,error:new Mc(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:fe.data,data:u,statusCode:t.status,headers:t.headers}}if(n===fe.error){if(Pm(t)){var r;if(t.data instanceof Error){var i;return{type:fe.error,error:t.data,statusCode:(i=t.init)==null?void 0:i.status}}t=new Mc(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:fe.error,error:t,statusCode:h0(t)?t.status:void 0}}if(P7(t)){var a,s;return{type:fe.deferred,deferredData:t,statusCode:(a=t.init)==null?void 0:a.status,headers:((s=t.init)==null?void 0:s.headers)&&new Headers(t.init.headers)}}if(Pm(t)){var l,c;return{type:fe.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(c=t.init)!=null&&c.headers?new Headers(t.init.headers):void 0}}return{type:fe.data,data:t}}function k7(e,t,n,r,i,a){let s=e.headers.get("Location");if(te(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!Kh.test(s)){let l=r.slice(0,r.findIndex(c=>c.route.id===n)+1);s=x1(new URL(t.url),l,i,!0,s,a),e.headers.set("Location",s)}return e}function jm(e,t,n){if(Kh.test(e)){let r=e,i=r.startsWith("//")?new URL(t.protocol+r):new URL(r),a=Yn(i.pathname,n)!=null;if(i.origin===t.origin&&a)return i.pathname+i.search+i.hash}return e}function Li(e,t,n,r){let i=e.createURL(o6(t)).toString(),a={signal:n};if(r&&on(r.formMethod)){let{formMethod:s,formEncType:l}=r;a.method=s.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(r.json)):l==="text/plain"?a.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?a.body=y1(r.formData):a.body=r.formData}return new Request(i,a)}function y1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function km(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function S7(e,t,n,r,i){let a={},s=null,l,c=!1,u={},f=n&&Rt(n[1])?n[1].error:void 0;return e.forEach(p=>{if(!(p.route.id in t))return;let m=p.route.id,y=t[m];if(te(!Ur(y),"Cannot handle redirect results in processLoaderData"),Rt(y)){let j=y.error;f!==void 0&&(j=f,f=void 0),s=s||{};{let w=Ui(e,m);s[w.route.id]==null&&(s[w.route.id]=j)}a[m]=void 0,c||(c=!0,l=h0(y.error)?y.error.status:500),y.headers&&(u[m]=y.headers)}else mr(y)?(r.set(m,y.deferredData),a[m]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!c&&(l=y.statusCode),y.headers&&(u[m]=y.headers)):(a[m]=y.data,y.statusCode&&y.statusCode!==200&&!c&&(l=y.statusCode),y.headers&&(u[m]=y.headers))}),f!==void 0&&n&&(s={[n[0]]:f},a[n[0]]=void 0),{loaderData:a,errors:s,statusCode:l||200,loaderHeaders:u}}function Sm(e,t,n,r,i,a,s,l){let{loaderData:c,errors:u}=S7(t,r,i,l);return a.forEach(f=>{let{key:p,match:m,controller:y}=f,j=s[p];if(te(j,"Did not find corresponding fetcher result"),!(y&&y.signal.aborted))if(Rt(j)){let w=Ui(e.matches,m==null?void 0:m.route.id);u&&u[w.route.id]||(u=Se({},u,{[w.route.id]:j.error})),e.fetchers.delete(p)}else if(Ur(j))te(!1,"Unhandled fetcher revalidation redirect");else if(mr(j))te(!1,"Unhandled fetcher deferred data");else{let w=ir(j.data);e.fetchers.set(p,w)}}),{loaderData:c,errors:u}}function Em(e,t,n,r){let i=Se({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&a.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function Cm(e){return e?Rt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ui(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Am(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function mt(e,t){let{pathname:n,routeId:r,method:i,type:a,message:s}=t===void 0?{}:t,l="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(l="Bad Request",a==="route-discovery"?c='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+s):i&&n&&r?c="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?c="defer() is not supported in actions":a==="invalid-body"&&(c="Unable to encode submission body")):e===403?(l="Forbidden",c='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",c='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?c="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(c='Invalid request method "'+i.toUpperCase()+'"')),new Mc(e||500,l,new Error(c),!0)}function Rs(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,i]=t[n];if(Ur(i))return{key:r,result:i}}}function o6(e){let t=typeof e=="string"?Hr(e):e;return ai(Se({},t,{hash:""}))}function E7(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function C7(e){return typeof e=="object"&&e!=null&&"then"in e}function A7(e){return a6(e.result)&&c7.has(e.result.status)}function mr(e){return e.type===fe.deferred}function Rt(e){return e.type===fe.error}function Ur(e){return(e&&e.type)===fe.redirect}function Pm(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function P7(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function a6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function M7(e){return l7.has(e.toLowerCase())}function on(e){return a7.has(e.toLowerCase())}async function T7(e,t,n,r,i){let a=Object.entries(t);for(let s=0;s<a.length;s++){let[l,c]=a[s],u=e.find(m=>(m==null?void 0:m.route.id)===l);if(!u)continue;let f=r.find(m=>m.route.id===u.route.id),p=f!=null&&!r6(f,u)&&(i&&i[u.route.id])!==void 0;mr(c)&&p&&await Yh(c,n,!1).then(m=>{m&&(t[l]=m)})}}async function L7(e,t,n){for(let r=0;r<n.length;r++){let{key:i,routeId:a,controller:s}=n[r],l=t[i];e.find(u=>(u==null?void 0:u.route.id)===a)&&mr(l)&&(te(s,"Expected an AbortController for revalidating fetcher deferred result"),await Yh(l,s.signal,!0).then(u=>{u&&(t[i]=u)}))}}async function Yh(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:fe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:fe.error,error:i}}return{type:fe.data,data:e.deferredData.data}}}function Qh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function na(e,t){let n=typeof t=="string"?Hr(t).search:t.search;if(e[e.length-1].route.index&&Qh(n||""))return e[e.length-1];let r=e6(e);return r[r.length-1]}function Mm(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:s}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:s,text:void 0}}}function sd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function H7(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function No(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function V7(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ir(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $7(e,t){try{let n=e.sessionStorage.getItem(n6);if(n){let r=JSON.parse(n);for(let[i,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(i,new Set(a||[]))}}catch{}}function z7(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(n6,JSON.stringify(n))}catch(r){mo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tc.apply(this,arguments)}const es=b.createContext(null),Xh=b.createContext(null),Vr=b.createContext(null),Jh=b.createContext(null),ui=b.createContext({outlet:null,matches:[],isDataRoute:!1}),s6=b.createContext(null);function R7(e,t){let{relative:n}=t===void 0?{}:t;ts()||te(!1);let{basename:r,navigator:i}=b.useContext(Vr),{hash:a,pathname:s,search:l}=f0(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Zn([r,s])),i.createHref({pathname:c,search:l,hash:a})}function ts(){return b.useContext(Jh)!=null}function ns(){return ts()||te(!1),b.useContext(Jh).location}function l6(e){b.useContext(Vr).static||b.useLayoutEffect(e)}function D7(){let{isDataRoute:e}=b.useContext(ui);return e?K7():O7()}function O7(){ts()||te(!1);let e=b.useContext(es),{basename:t,future:n,navigator:r}=b.useContext(Vr),{matches:i}=b.useContext(ui),{pathname:a}=ns(),s=JSON.stringify(qh(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return l6(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Gh(u,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Zn([t,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[t,r,s,a,e])}function f0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Vr),{matches:i}=b.useContext(ui),{pathname:a}=ns(),s=JSON.stringify(qh(i,r.v7_relativeSplatPath));return b.useMemo(()=>Gh(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function I7(e,t,n,r){ts()||te(!1);let{navigator:i}=b.useContext(Vr),{matches:a}=b.useContext(ui),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=ns(),f;f=u;let p=f.pathname||"/",m=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=_r(e,{pathname:m});return B7(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Zn([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Zn([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r)}function F7(){let e=G7(),t=h0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const Z7=b.createElement(F7,null);class _7 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(ui.Provider,{value:this.props.routeContext},b.createElement(s6.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N7(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(es);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ui.Provider,{value:t},r)}function B7(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||te(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let p=s[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=f),p.route.id){let{loaderData:m,errors:y}=n,j=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||j){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,p,m)=>{let y,j=!1,w=null,C=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||Z7,c&&(u<0&&m===0?(Y7("route-fallback"),j=!0,C=null):u===m&&(j=!0,C=p.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,m+1)),g=()=>{let v;return y?v=w:j?v=C:p.route.Component?v=b.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,b.createElement(N7,{match:p,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(_7,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var c6=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(c6||{}),Lc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Lc||{});function W7(e){let t=b.useContext(es);return t||te(!1),t}function U7(e){let t=b.useContext(Xh);return t||te(!1),t}function q7(e){let t=b.useContext(ui);return t||te(!1),t}function d6(e){let t=q7(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function G7(){var e;let t=b.useContext(s6),n=U7(Lc.UseRouteError),r=d6(Lc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function K7(){let{router:e}=W7(c6.UseNavigateStable),t=d6(Lc.UseNavigateStable),n=b.useRef(!1);return l6(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Tc({fromRouteId:t},a)))},[e,t])}const Tm={};function Y7(e,t,n){Tm[e]||(Tm[e]=!0)}function Q7(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ie.Pop,navigator:a,static:s=!1,future:l}=e;ts()&&te(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:a,static:s,future:Tc({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof r=="string"&&(r=Hr(r));let{pathname:f="/",search:p="",hash:m="",state:y=null,key:j="default"}=r,w=b.useMemo(()=>{let C=Yn(f,c);return C==null?null:{location:{pathname:C,search:p,hash:m,state:y,key:j},navigationType:i}},[c,f,p,m,y,j,i]);return w==null?null:b.createElement(Vr.Provider,{value:u},b.createElement(Jh.Provider,{children:n,value:w}))}new Promise(()=>{});function X7(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:b.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:b.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:b.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function u6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function J7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ej(e,t){return e.button===0&&(!t||t==="_self")&&!J7(e)}const tj=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nj=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],rj="6";try{window.__reactRouterVersion=rj}catch{}function ij(e,t){return f7({basename:void 0,future:go({},void 0,{v7_prependBasename:!0}),history:Db({window:void 0}),hydrationData:oj(),routes:e,mapRouteProperties:X7,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function oj(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=go({},t,{errors:aj(t.errors)})),t}function aj(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let s=new a(i.message);s.stack="",n[r]=s}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const h6=b.createContext({isTransitioning:!1}),sj=b.createContext(new Map),lj="startTransition",Lm=K5[lj],cj="flushSync",Hm=Rb[cj];function dj(e){Lm?Lm(e):e()}function Bo(e){Hm?Hm(e):e()}class uj{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function hj(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=b.useState(n.state),[s,l]=b.useState(),[c,u]=b.useState({isTransitioning:!1}),[f,p]=b.useState(),[m,y]=b.useState(),[j,w]=b.useState(),C=b.useRef(new Map),{v7_startTransition:x}=r||{},g=b.useCallback(k=>{x?dj(k):k()},[x]),v=b.useCallback((k,R)=>{let{deletedFetchers:$,unstable_flushSync:U,unstable_viewTransitionOpts:se}=R;$.forEach(me=>C.current.delete(me)),k.fetchers.forEach((me,Lt)=>{me.data!==void 0&&C.current.set(Lt,me.data)});let be=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!se||be){U?Bo(()=>a(k)):g(()=>a(k));return}if(U){Bo(()=>{m&&(f&&f.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:se.currentLocation,nextLocation:se.nextLocation})});let me=n.window.document.startViewTransition(()=>{Bo(()=>a(k))});me.finished.finally(()=>{Bo(()=>{p(void 0),y(void 0),l(void 0),u({isTransitioning:!1})})}),Bo(()=>y(me));return}m?(f&&f.resolve(),m.skipTransition(),w({state:k,currentLocation:se.currentLocation,nextLocation:se.nextLocation})):(l(k),u({isTransitioning:!0,flushSync:!1,currentLocation:se.currentLocation,nextLocation:se.nextLocation}))},[n.window,m,f,C,g]);b.useLayoutEffect(()=>n.subscribe(v),[n,v]),b.useEffect(()=>{c.isTransitioning&&!c.flushSync&&p(new uj)},[c]),b.useEffect(()=>{if(f&&s&&n.window){let k=s,R=f.promise,$=n.window.document.startViewTransition(async()=>{g(()=>a(k)),await R});$.finished.finally(()=>{p(void 0),y(void 0),l(void 0),u({isTransitioning:!1})}),y($)}},[g,s,f,n.window]),b.useEffect(()=>{f&&s&&i.location.key===s.location.key&&f.resolve()},[f,m,i.location,s]),b.useEffect(()=>{!c.isTransitioning&&j&&(l(j.state),u({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}),w(void 0))},[c.isTransitioning,j]),b.useEffect(()=>{},[]);let E=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:k=>n.navigate(k),push:(k,R,$)=>n.navigate(k,{state:R,preventScrollReset:$==null?void 0:$.preventScrollReset}),replace:(k,R,$)=>n.navigate(k,{replace:!0,state:R,preventScrollReset:$==null?void 0:$.preventScrollReset})}),[n]),P=n.basename||"/",T=b.useMemo(()=>({router:n,navigator:E,static:!1,basename:P}),[n,E,P]),L=b.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return b.createElement(b.Fragment,null,b.createElement(es.Provider,{value:T},b.createElement(Xh.Provider,{value:i},b.createElement(sj.Provider,{value:C.current},b.createElement(h6.Provider,{value:c},b.createElement(Q7,{basename:P,location:i.location,navigationType:i.historyAction,navigator:E,future:L},i.initialized||n.future.v7_partialHydration?b.createElement(fj,{routes:n.routes,future:n.future,state:i}):t))))),null)}const fj=b.memo(pj);function pj(e){let{routes:t,future:n,state:r}=e;return I7(t,void 0,r,n)}const mj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hc=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:l,target:c,to:u,preventScrollReset:f,unstable_viewTransition:p}=t,m=u6(t,tj),{basename:y}=b.useContext(Vr),j,w=!1;if(typeof u=="string"&&gj.test(u)&&(j=u,mj))try{let v=new URL(window.location.href),E=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=Yn(E.pathname,y);E.origin===v.origin&&P!=null?u=P+E.search+E.hash:w=!0}catch{}let C=R7(u,{relative:i}),x=vj(u,{replace:s,state:l,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:p});function g(v){r&&r(v),v.defaultPrevented||x(v)}return b.createElement("a",go({},m,{href:j||C,onClick:w||a?r:g,ref:n,target:c}))}),xj=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:s=!1,style:l,to:c,unstable_viewTransition:u,children:f}=t,p=u6(t,nj),m=f0(c,{relative:p.relative}),y=ns(),j=b.useContext(Xh),{navigator:w,basename:C}=b.useContext(Vr),x=j!=null&&wj(m)&&u===!0,g=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,v=y.pathname,E=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(v=v.toLowerCase(),E=E?E.toLowerCase():null,g=g.toLowerCase()),E&&C&&(E=Yn(E,C)||E);const P=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let T=v===g||!s&&v.startsWith(g)&&v.charAt(P)==="/",L=E!=null&&(E===g||!s&&E.startsWith(g)&&E.charAt(g.length)==="/"),k={isActive:T,isPending:L,isTransitioning:x},R=T?r:void 0,$;typeof a=="function"?$=a(k):$=[a,T?"active":null,L?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(k):l;return b.createElement(Hc,go({},p,{"aria-current":R,className:$,ref:n,style:U,to:c,unstable_viewTransition:u}),typeof f=="function"?f(k):f)});var v1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(v1||(v1={}));var Vm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vm||(Vm={}));function yj(e){let t=b.useContext(es);return t||te(!1),t}function vj(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,c=D7(),u=ns(),f=f0(e,{relative:s});return b.useCallback(p=>{if(ej(p,n)){p.preventDefault();let m=r!==void 0?r:ai(u)===ai(f);c(e,{replace:m,state:i,preventScrollReset:a,relative:s,unstable_viewTransition:l})}},[u,c,f,r,i,n,e,a,s,l])}function wj(e,t){t===void 0&&(t={});let n=b.useContext(h6);n==null&&te(!1);let{basename:r}=yj(v1.useViewTransitionState),i=f0(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Yn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Yn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Pc(i.pathname,s)!=null||Pc(i.pathname,a)!=null}var w1={},$m=Uh;w1.createRoot=$m.createRoot,w1.hydrateRoot=$m.hydrateRoot;var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ct.apply(this,arguments)};function Ia(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ve="-ms-",ga="-moz-",ce="-webkit-",f6="comm",p0="rule",ef="decl",bj="@import",p6="@keyframes",jj="@layer",m6=Math.abs,tf=String.fromCharCode,b1=Object.assign;function kj(e,t){return Ge(e,0)^45?(((t<<2^Ge(e,0))<<2^Ge(e,1))<<2^Ge(e,2))<<2^Ge(e,3):0}function g6(e){return e.trim()}function zn(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Kl(e,t,n){return e.indexOf(t,n)}function Ge(e,t){return e.charCodeAt(t)|0}function xo(e,t,n){return e.slice(t,n)}function yn(e){return e.length}function x6(e){return e.length}function ra(e,t){return t.push(e),e}function Sj(e,t){return e.map(t).join("")}function zm(e,t){return e.filter(function(n){return!zn(n,t)})}var m0=1,yo=1,y6=0,en=0,Fe=0,Ao="";function g0(e,t,n,r,i,a,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:m0,column:yo,length:s,return:"",siblings:l}}function or(e,t){return b1(g0("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hi(e){for(;e.root;)e=or(e.root,{children:[e]});ra(e,e.siblings)}function Ej(){return Fe}function Cj(){return Fe=en>0?Ge(Ao,--en):0,yo--,Fe===10&&(yo=1,m0--),Fe}function dn(){return Fe=en<y6?Ge(Ao,en++):0,yo++,Fe===10&&(yo=1,m0++),Fe}function Xr(){return Ge(Ao,en)}function Yl(){return en}function x0(e,t){return xo(Ao,e,t)}function j1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Aj(e){return m0=yo=1,y6=yn(Ao=e),en=0,[]}function Pj(e){return Ao="",e}function ld(e){return g6(x0(en-1,k1(e===91?e+2:e===40?e+1:e)))}function Mj(e){for(;(Fe=Xr())&&Fe<33;)dn();return j1(e)>2||j1(Fe)>3?"":" "}function Tj(e,t){for(;--t&&dn()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return x0(e,Yl()+(t<6&&Xr()==32&&dn()==32))}function k1(e){for(;dn();)switch(Fe){case e:return en;case 34:case 39:e!==34&&e!==39&&k1(Fe);break;case 40:e===41&&k1(e);break;case 92:dn();break}return en}function Lj(e,t){for(;dn()&&e+Fe!==57;)if(e+Fe===84&&Xr()===47)break;return"/*"+x0(t,en-1)+"*"+tf(e===47?e:dn())}function Hj(e){for(;!j1(Xr());)dn();return x0(e,en)}function Vj(e){return Pj(Ql("",null,null,null,[""],e=Aj(e),0,[0],e))}function Ql(e,t,n,r,i,a,s,l,c){for(var u=0,f=0,p=s,m=0,y=0,j=0,w=1,C=1,x=1,g=0,v="",E=i,P=a,T=r,L=v;C;)switch(j=g,g=dn()){case 40:if(j!=108&&Ge(L,p-1)==58){Kl(L+=ee(ld(g),"&","&\f"),"&\f",m6(u?l[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:L+=ld(g);break;case 9:case 10:case 13:case 32:L+=Mj(j);break;case 92:L+=Tj(Yl()-1,7);continue;case 47:switch(Xr()){case 42:case 47:ra($j(Lj(dn(),Yl()),t,n,c),c);break;default:L+="/"}break;case 123*w:l[u++]=yn(L)*x;case 125*w:case 59:case 0:switch(g){case 0:case 125:C=0;case 59+f:x==-1&&(L=ee(L,/\f/g,"")),y>0&&yn(L)-p&&ra(y>32?Dm(L+";",r,n,p-1,c):Dm(ee(L," ","")+";",r,n,p-2,c),c);break;case 59:L+=";";default:if(ra(T=Rm(L,t,n,u,f,i,l,v,E=[],P=[],p,a),a),g===123)if(f===0)Ql(L,t,T,T,E,a,p,l,P);else switch(m===99&&Ge(L,3)===110?100:m){case 100:case 108:case 109:case 115:Ql(e,T,T,r&&ra(Rm(e,T,T,0,0,i,l,v,i,E=[],p,P),P),i,P,p,l,r?E:P);break;default:Ql(L,T,T,T,[""],P,0,l,P)}}u=f=y=0,w=x=1,v=L="",p=s;break;case 58:p=1+yn(L),y=j;default:if(w<1){if(g==123)--w;else if(g==125&&w++==0&&Cj()==125)continue}switch(L+=tf(g),g*w){case 38:x=f>0?1:(L+="\f",-1);break;case 44:l[u++]=(yn(L)-1)*x,x=1;break;case 64:Xr()===45&&(L+=ld(dn())),m=Xr(),f=p=yn(v=L+=Hj(Yl())),g++;break;case 45:j===45&&yn(L)==2&&(w=0)}}return a}function Rm(e,t,n,r,i,a,s,l,c,u,f,p){for(var m=i-1,y=i===0?a:[""],j=x6(y),w=0,C=0,x=0;w<r;++w)for(var g=0,v=xo(e,m+1,m=m6(C=s[w])),E=e;g<j;++g)(E=g6(C>0?y[g]+" "+v:ee(v,/&\f/g,y[g])))&&(c[x++]=E);return g0(e,t,n,i===0?p0:l,c,u,f,p)}function $j(e,t,n,r){return g0(e,t,n,f6,tf(Ej()),xo(e,2,-2),0,r)}function Dm(e,t,n,r,i){return g0(e,t,n,ef,xo(e,0,r),xo(e,r+1,-1),r,i)}function v6(e,t,n){switch(kj(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+e+e;case 4789:return ga+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+ga+e+ve+e+e;case 5936:switch(Ge(e,t+11)){case 114:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ve+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ve+e+e;case 6165:return ce+e+ve+"flex-"+e+e;case 5187:return ce+e+ee(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ve+"flex-$1$2")+e;case 5443:return ce+e+ve+"flex-item-"+ee(e,/flex-|-self/g,"")+(zn(e,/flex-|baseline/)?"":ve+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ve+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ve+ee(e,"shrink","negative")+e;case 5292:return ce+e+ve+ee(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+ee(e,"-grow","")+ce+e+ve+ee(e,"grow","positive")+e;case 4554:return ce+ee(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ve+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+e+e;case 4200:if(!zn(e,/flex-|baseline/))return ve+"grid-column-align"+xo(e,t)+e;break;case 2592:case 3360:return ve+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zn(r.props,/grid-\w+-end/)})?~Kl(e+(n=n[t].value),"span",0)?e:ve+ee(e,"-start","")+e+ve+"grid-row-span:"+(~Kl(n,"span",0)?zn(n,/\d+/):+zn(n,/\d+/)-+zn(e,/\d+/))+";":ve+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zn(r.props,/grid-\w+-start/)})?e:ve+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(e)-1-t>6)switch(Ge(e,t+1)){case 109:if(Ge(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+ga+(Ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Kl(e,"stretch",0)?v6(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,s,l,c,u){return ve+i+":"+a+u+(s?ve+i+"-span:"+(l?c:+c-+a)+u:"")+e});case 4949:if(Ge(e,t+6)===121)return ee(e,":",":"+ce)+e;break;case 6444:switch(Ge(e,Ge(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Ge(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ve+"$2box$3")+e;case 100:return ee(e,":",":"+ve)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Vc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zj(e,t,n,r){switch(e.type){case jj:if(e.children.length)break;case bj:case ef:return e.return=e.return||e.value;case f6:return"";case p6:return e.return=e.value+"{"+Vc(e.children,r)+"}";case p0:if(!yn(e.value=e.props.join(",")))return""}return yn(n=Vc(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rj(e){var t=x6(e);return function(n,r,i,a){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,a)||"";return s}}function Dj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Oj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ef:e.return=v6(e.value,e.length,n);return;case p6:return Vc([or(e,{value:ee(e.value,"@","@"+ce)})],r);case p0:if(e.length)return Sj(n=e.props,function(i){switch(zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hi(or(e,{props:[ee(i,/:(read-\w+)/,":"+ga+"$1")]})),Hi(or(e,{props:[i]})),b1(e,{props:zm(n,r)});break;case"::placeholder":Hi(or(e,{props:[ee(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Hi(or(e,{props:[ee(i,/:(plac\w+)/,":"+ga+"$1")]})),Hi(or(e,{props:[ee(i,/:(plac\w+)/,ve+"input-$1")]})),Hi(or(e,{props:[i]})),b1(e,{props:zm(n,r)});break}return""})}}var Ij={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},vo=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",w6="active",b6="data-styled-version",y0="6.1.13",nf=`/*!sc*/
`,$c=typeof window<"u"&&"HTMLElement"in window,Fj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),v0=Object.freeze([]),wo=Object.freeze({});function Zj(e,t,n){return n===void 0&&(n=wo),e.theme!==n.theme&&e.theme||t||n.theme}var j6=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_j=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nj=/(^-|-$)/g;function Om(e){return e.replace(_j,"-").replace(Nj,"")}var Bj=/(a)(d)/gi,Ds=52,Im=function(e){return String.fromCharCode(e+(e>25?39:97))};function S1(e){var t,n="";for(t=Math.abs(e);t>Ds;t=t/Ds|0)n=Im(t%Ds)+n;return(Im(t%Ds)+n).replace(Bj,"$1-$2")}var cd,k6=5381,qi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},S6=function(e){return qi(k6,e)};function E6(e){return S1(S6(e)>>>0)}function Wj(e){return e.displayName||e.name||"Component"}function dd(e){return typeof e=="string"&&!0}var C6=typeof Symbol=="function"&&Symbol.for,A6=C6?Symbol.for("react.memo"):60115,Uj=C6?Symbol.for("react.forward_ref"):60112,qj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},P6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kj=((cd={})[Uj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cd[A6]=P6,cd);function Fm(e){return("type"in(t=e)&&t.type.$$typeof)===A6?P6:"$$typeof"in e?Kj[e.$$typeof]:qj;var t}var Yj=Object.defineProperty,Qj=Object.getOwnPropertyNames,Zm=Object.getOwnPropertySymbols,Xj=Object.getOwnPropertyDescriptor,Jj=Object.getPrototypeOf,_m=Object.prototype;function M6(e,t,n){if(typeof t!="string"){if(_m){var r=Jj(t);r&&r!==_m&&M6(e,r,n)}var i=Qj(t);Zm&&(i=i.concat(Zm(t)));for(var a=Fm(e),s=Fm(t),l=0;l<i.length;++l){var c=i[l];if(!(c in Gj||n&&n[c]||s&&c in s||a&&c in a)){var u=Xj(t,c);try{Yj(e,c,u)}catch{}}}}return e}function si(e){return typeof e=="function"}function rf(e){return typeof e=="object"&&"styledComponentId"in e}function qr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function E1(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Fa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function C1(e,t,n){if(n===void 0&&(n=!1),!n&&!Fa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=C1(e[r],t[r]);else if(Fa(t))for(var r in t)e[r]=C1(e[r],t[r]);return e}function of(e,t){Object.defineProperty(e,"toString",{value:t})}function li(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var e9=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw li(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,s=i;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(nf);return n},e}(),Xl=new Map,zc=new Map,Jl=1,Os=function(e){if(Xl.has(e))return Xl.get(e);for(;zc.has(Jl);)Jl++;var t=Jl++;return Xl.set(e,t),zc.set(t,e),t},t9=function(e,t){Jl=t+1,Xl.set(e,t),zc.set(t,e)},n9="style[".concat(vo,"][").concat(b6,'="').concat(y0,'"]'),r9=new RegExp("^".concat(vo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),i9=function(e,t,n){for(var r,i=n.split(","),a=0,s=i.length;a<s;a++)(r=i[a])&&e.registerName(t,r)},o9=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(nf),i=[],a=0,s=r.length;a<s;a++){var l=r[a].trim();if(l){var c=l.match(r9);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(t9(f,u),i9(e,f,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Nm=function(e){for(var t=document.querySelectorAll(n9),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(vo)!==w6&&(o9(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function a9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T6=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(vo,"]")));return c[c.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(vo,w6),r.setAttribute(b6,y0);var s=a9();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},s9=function(){function e(t){this.element=T6(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var s=r[i];if(s.ownerNode===n)return s}throw li(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),l9=function(){function e(t){this.element=T6(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),c9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bm=$c,d9={isServer:!$c,useCSSOMInjection:!Fj},L6=function(){function e(t,n,r){t===void 0&&(t=wo),n===void 0&&(n={});var i=this;this.options=ct(ct({},d9),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&$c&&Bm&&(Bm=!1,Nm(this)),of(this,function(){return function(a){for(var s=a.getTag(),l=s.length,c="",u=function(p){var m=function(x){return zc.get(x)}(p);if(m===void 0)return"continue";var y=a.names.get(m),j=s.getGroup(p);if(y===void 0||!y.size||j.length===0)return"continue";var w="".concat(vo,".g").concat(p,'[id="').concat(m,'"]'),C="";y!==void 0&&y.forEach(function(x){x.length>0&&(C+="".concat(x,","))}),c+="".concat(j).concat(w,'{content:"').concat(C,'"}').concat(nf)},f=0;f<l;f++)u(f);return c}(i)})}return e.registerId=function(t){return Os(t)},e.prototype.rehydrate=function(){!this.server&&$c&&Nm(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new c9(i):r?new s9(i):new l9(i)}(this.options),new e9(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),u9=/&/g,h9=/^\s*\/\/.*$/gm;function H6(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=H6(n.children,t)),n})}function f9(e){var t,n,r,i=wo,a=i.options,s=a===void 0?wo:a,l=i.plugins,c=l===void 0?v0:l,u=function(m,y,j){return j.startsWith(n)&&j.endsWith(n)&&j.replaceAll(n,"").length>0?".".concat(t):m},f=c.slice();f.push(function(m){m.type===p0&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(u9,n).replace(r,u))}),s.prefix&&f.push(Oj),f.push(zj);var p=function(m,y,j,w){y===void 0&&(y=""),j===void 0&&(j=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var C=m.replace(h9,""),x=Vj(j||y?"".concat(j," ").concat(y," { ").concat(C," }"):C);s.namespace&&(x=H6(x,s.namespace));var g=[];return Vc(x,Rj(f.concat(Dj(function(v){return g.push(v)})))),g};return p.hash=c.length?c.reduce(function(m,y){return y.name||li(15),qi(m,y.name)},k6).toString():"",p}var p9=new L6,A1=f9(),V6=h.createContext({shouldForwardProp:void 0,styleSheet:p9,stylis:A1});V6.Consumer;h.createContext(void 0);function Wm(){return b.useContext(V6)}var $6=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=A1);var s=r.name+a.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,of(this,function(){throw li(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=A1),this.name+t.hash},e}(),m9=function(e){return e>="A"&&e<="Z"};function Um(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;m9(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z6=function(e){return e==null||e===!1||e===""},R6=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!z6(a)&&(Array.isArray(a)&&a.isCss||si(a)?r.push("".concat(Um(i),":"),a,";"):Fa(a)?r.push.apply(r,Ia(Ia(["".concat(i," {")],R6(a),!1),["}"],!1)):r.push("".concat(Um(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ij||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jr(e,t,n,r){if(z6(e))return[];if(rf(e))return[".".concat(e.styledComponentId)];if(si(e)){if(!si(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Jr(i,t,n,r)}var a;return e instanceof $6?n?(e.inject(n,r),[e.getName(r)]):[e]:Fa(e)?R6(e):Array.isArray(e)?Array.prototype.concat.apply(v0,e.map(function(s){return Jr(s,t,n,r)})):[e.toString()]}function g9(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(si(n)&&!rf(n))return!1}return!0}var x9=S6(y0),y9=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&g9(t),this.componentId=n,this.baseHash=qi(x9,n),this.baseStyle=r,L6.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qr(i,this.staticRulesId);else{var a=E1(Jr(this.rules,t,n,r)),s=S1(qi(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=qr(i,s),this.staticRulesId=s}else{for(var c=qi(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var p=this.rules[f];if(typeof p=="string")u+=p;else if(p){var m=E1(Jr(p,t,n,r));c=qi(c,m+f),u+=m}}if(u){var y=S1(c>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=qr(i,y)}}return i},e}(),Rc=h.createContext(void 0);Rc.Consumer;function v9(e){var t=h.useContext(Rc),n=b.useMemo(function(){return function(r,i){if(!r)throw li(14);if(si(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw li(8);return i?ct(ct({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?h.createElement(Rc.Provider,{value:n},e.children):null}var ud={};function w9(e,t,n){var r=rf(e),i=e,a=!dd(e),s=t.attrs,l=s===void 0?v0:s,c=t.componentId,u=c===void 0?function(E,P){var T=typeof E!="string"?"sc":Om(E);ud[T]=(ud[T]||0)+1;var L="".concat(T,"-").concat(E6(y0+T+ud[T]));return P?"".concat(P,"-").concat(L):L}(t.displayName,t.parentComponentId):c,f=t.displayName,p=f===void 0?function(E){return dd(E)?"styled.".concat(E):"Styled(".concat(Wj(E),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Om(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,j=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;j=function(E,P){return w(E,P)&&C(E,P)}}else j=w}var x=new y9(n,m,r?i.componentStyle:void 0);function g(E,P){return function(T,L,k){var R=T.attrs,$=T.componentStyle,U=T.defaultProps,se=T.foldedComponentIds,be=T.styledComponentId,me=T.target,Lt=h.useContext(Rc),St=Wm(),he=T.shouldForwardProp||St.shouldForwardProp,z=Zj(L,Lt,U)||wo,D=function(Et,ke,Xe){for(var Ht,En=ct(ct({},ke),{className:void 0,theme:Xe}),Jn=0;Jn<Et.length;Jn+=1){var Ci=si(Ht=Et[Jn])?Ht(En):Ht;for(var pn in Ci)En[pn]=pn==="className"?qr(En[pn],Ci[pn]):pn==="style"?ct(ct({},En[pn]),Ci[pn]):Ci[pn]}return ke.className&&(En.className=qr(En.className,ke.className)),En}(R,L,z),G=D.as||me,ie={};for(var re in D)D[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&D.theme===z||(re==="forwardedAs"?ie.as=D.forwardedAs:he&&!he(re,G)||(ie[re]=D[re]));var Qe=function(Et,ke){var Xe=Wm(),Ht=Et.generateAndInjectStyles(ke,Xe.styleSheet,Xe.stylis);return Ht}($,D),Be=qr(se,be);return Qe&&(Be+=" "+Qe),D.className&&(Be+=" "+D.className),ie[dd(G)&&!j6.has(G)?"class":"className"]=Be,ie.ref=k,b.createElement(G,ie)}(v,E,P)}g.displayName=p;var v=h.forwardRef(g);return v.attrs=y,v.componentStyle=x,v.displayName=p,v.shouldForwardProp=j,v.foldedComponentIds=r?qr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=m,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(P){for(var T=[],L=1;L<arguments.length;L++)T[L-1]=arguments[L];for(var k=0,R=T;k<R.length;k++)C1(P,R[k],!0);return P}({},i.defaultProps,E):E}}),of(v,function(){return".".concat(v.styledComponentId)}),a&&M6(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function qm(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gm=function(e){return Object.assign(e,{isCss:!0})};function Ye(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(si(e)||Fa(e))return Gm(Jr(qm(v0,Ia([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jr(r):Gm(Jr(qm(r,t)))}function P1(e,t,n){if(n===void 0&&(n=wo),!t)throw li(1,t);var r=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,Ye.apply(void 0,Ia([i],a,!1)))};return r.attrs=function(i){return P1(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return P1(e,t,ct(ct({},n),i))},r}var D6=function(e){return P1(w9,e)},d=D6;j6.forEach(function(e){d[e]=D6(e)});function O6(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=E1(Ye.apply(void 0,Ia([e],t,!1))),i=E6(r);return new $6(i,r)}const ia={name:"light",colors:{primary:"#9E1C24",primaryDeep:"#6F0F16",primarySoft:"rgba(158, 28, 36, 0.65)",primaryHover:"rgba(158, 28, 36, 0.85)",gold:"#C9A227",secondary:"#4a6163",accent:"#f9a826",background:"#ffffff",surface:"#f5f5f5",text:"#333333",textLight:"#666666",error:"#d32f2f",success:"#388e3c",warning:"#f57c00",info:"#0288d1"},typography:{headingFont:"var(--font-heading)",bodyFont:"var(--font-body)",accentFont:"var(--font-accent)",learnfont:{H1:"Montserrat",H2:"Poppins Bold",bodydesc:"Inter Regular"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},borderRadius:{sm:"0.125rem",md:"0.25rem",lg:"0.5rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},transitions:{default:"0.3s ease",fast:"0.15s ease",slow:"0.5s ease"}};({...ia.typography},{...ia.spacing}),{...ia.borderRadius},{...ia.transitions};const I6=b.createContext(),F6=()=>{const e=b.useContext(I6);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e},b9=({children:e})=>{const[t]=b.useState(ia);b.useEffect(()=>{document.body.style.backgroundColor=t.colors.background,document.body.style.color=t.colors.text},[]);const n={theme:t,isLightTheme:!0,isDarkTheme:!1};return o.jsx(I6.Provider,{value:n,children:o.jsx(v9,{theme:t,children:e})})},j9=({children:e})=>(F6(),o.jsx(o.Fragment,{children:e})),Km="https://hyacinthindustriesllc.com",k9="/og-image-v2.webp";function Ym(e=""){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${Km}${e.startsWith("/")?e:`/${e}`}`:Km}function bt({title:e,description:t,canonicalPath:n,image:r=k9,type:i="website",noindex:a=!1,structuredData:s}){const l=Ym(n),c=Ym(r);return o.jsxs(T3,{children:[o.jsx("title",{children:e}),o.jsx("meta",{name:"description",content:t}),o.jsx("meta",{name:"robots",content:a?"noindex, nofollow":"index, follow"}),o.jsx("link",{rel:"canonical",href:l}),o.jsx("meta",{property:"og:site_name",content:"Hyacinth Industries LLC"}),o.jsx("meta",{property:"og:type",content:i}),o.jsx("meta",{property:"og:title",content:e}),o.jsx("meta",{property:"og:description",content:t}),o.jsx("meta",{property:"og:url",content:l}),o.jsx("meta",{property:"og:image",content:c}),o.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),o.jsx("meta",{name:"twitter:title",content:e}),o.jsx("meta",{name:"twitter:description",content:t}),o.jsx("meta",{name:"twitter:image",content:c}),s?o.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)}):null]})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z6=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E9={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...l},c)=>b.createElement("svg",{ref:c,...E9,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Z6("lucide",i),...l},[...s.map(([u,f])=>b.createElement(u,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,t)=>{const n=b.forwardRef(({className:r,...i},a)=>b.createElement(C9,{ref:a,iconNode:t,className:Z6(`lucide-${S9(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=Z("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=Z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=Z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=Z("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=Z("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=Z("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=Z("BriefcaseMedical",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=Z("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=Z("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=Z("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=Z("ChartColumnIncreasing",[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=Z("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=Z("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=Z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=Z("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=Z("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Z("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=Z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=Z("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=Z("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=Z("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=Z("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=Z("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=Z("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=Z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=Z("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=Z("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=Z("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=Z("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=Z("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=Z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=Z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=Z("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=Z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=Z("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=Z("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=Z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=Z("MapPinned",[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=Z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=Z("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=Z("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=Z("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=Z("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Z("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=Z("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=Z("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=Z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=Z("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=Z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=Z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=Z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=Z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=Z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=Z("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=Z("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=Z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=Z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=Z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=Z("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=Z("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=Z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function wk(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function w0(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const M1=e=>Array.isArray(e);function K6(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Na(e){return typeof e=="string"||Array.isArray(e)}function Xm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function lf(e,t,n,r){if(typeof t=="function"){const[i,a]=Xm(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Xm(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function b0(e,t,n){const r=e.getProps();return lf(r,t,n!==void 0?n:r.custom,e)}const cf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],df=["initial",...cf],is=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fi=new Set(is),_n=e=>e*1e3,Nn=e=>e/1e3,bk={type:"spring",stiffness:500,damping:25,restSpeed:10},jk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),kk={type:"keyframes",duration:.8},Sk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ek=(e,{keyframes:t})=>t.length>2?kk:fi.has(e)?e.startsWith("scale")?jk(t[1]):bk:Sk;function uf(e,t){return e?e[t]||e.default||e:void 0}const Ck={skipAnimations:!1,useManualTiming:!1},Ak=e=>e!==null;function j0(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Ak),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const ut=e=>e;function Pk(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,f=!1,p=!1)=>{const y=p&&r?t:n;return f&&a.add(u),y.has(u)||y.add(u),u},cancel:u=>{n.delete(u),a.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(l),r=!1,i&&(i=!1,c.process(u))}};return c}const Is=["read","resolveKeyframes","update","preRender","render","postRender"],Mk=40;function Y6(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,s=Is.reduce((x,g)=>(x[g]=Pk(a),x),{}),{read:l,resolveKeyframes:c,update:u,preRender:f,render:p,postRender:m}=s,y=()=>{const x=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(x-i.timestamp,Mk),1),i.timestamp=x,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},j=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Is.reduce((x,g)=>{const v=s[g];return x[g]=(E,P=!1,T=!1)=>(n||j(),v.schedule(E,P,T)),x},{}),cancel:x=>{for(let g=0;g<Is.length;g++)s[Is[g]].cancel(x)},state:i,steps:s}}const{schedule:pe,cancel:Ar,state:et,steps:hd}=Y6(typeof requestAnimationFrame<"u"?requestAnimationFrame:ut,!0),Q6=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Tk=1e-7,Lk=12;function Hk(e,t,n,r,i){let a,s,l=0;do s=t+(n-t)/2,a=Q6(s,r,i)-e,a>0?n=s:t=s;while(Math.abs(a)>Tk&&++l<Lk);return s}function os(e,t,n,r){if(e===t&&n===r)return ut;const i=a=>Hk(a,0,1,e,n);return a=>a===0||a===1?a:Q6(i(a),t,r)}const X6=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,J6=e=>t=>1-e(1-t),ey=os(.33,1.53,.69,.99),hf=J6(ey),ty=X6(hf),ny=e=>(e*=2)<1?.5*hf(e):.5*(2-Math.pow(2,-10*(e-1))),ff=e=>1-Math.sin(Math.acos(e)),ry=J6(ff),iy=X6(ff),oy=e=>/^0[^.\s]+$/u.test(e);function Vk(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||oy(e):!0}let T1=ut;const ay=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),sy=e=>t=>typeof t=="string"&&t.startsWith(e),ly=sy("--"),$k=sy("var(--"),pf=e=>$k(e)?zk.test(e.split("/*")[0].trim()):!1,zk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Rk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Dk(e){const t=Rk.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function cy(e,t,n=1){const[r,i]=Dk(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const s=a.trim();return ay(s)?parseFloat(s):s}return pf(i)?cy(i,t,n+1):i}const Qn=(e,t,n)=>n>t?t:n<e?e:n,Po={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ba={...Po,transform:e=>Qn(0,1,e)},Fs={...Po,default:1},as=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ar=as("deg"),jn=as("%"),Y=as("px"),Ok=as("vh"),Ik=as("vw"),Jm={...jn,parse:e=>jn.parse(e)/100,transform:e=>jn.transform(e*100)},Fk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),e2=e=>e===Po||e===Y,t2=(e,t)=>parseFloat(e.split(", ")[t]),n2=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return t2(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?t2(a[1],e):0}},Zk=new Set(["x","y","z"]),_k=is.filter(e=>!Zk.has(e));function Nk(e){const t=[];return _k.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const bo={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:n2(4,13),y:n2(5,14)};bo.translateX=bo.x;bo.translateY=bo.y;const dy=e=>t=>t.test(e),Bk={test:e=>e==="auto",parse:e=>e},uy=[Po,Y,jn,ar,Ik,Ok,Bk],r2=e=>uy.find(dy(e)),ei=new Set;let L1=!1,H1=!1;function hy(){if(H1){const e=Array.from(ei).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Nk(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,s])=>{var l;(l=r.getValue(a))===null||l===void 0||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}H1=!1,L1=!1,ei.forEach(e=>e.complete()),ei.clear()}function fy(){ei.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(H1=!0)})}function Wk(){fy(),hy()}class mf{constructor(t,n,r,i,a,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ei.add(this),L1||(L1=!0,pe.read(fy),pe.resolveKeyframes(hy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const s=i==null?void 0:i.get(),l=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&s===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ei.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ei.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const xa=e=>Math.round(e*1e5)/1e5,gf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Uk(e){return e==null}const qk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xf=(e,t)=>n=>!!(typeof n=="string"&&qk.test(n)&&n.startsWith(e)||t&&!Uk(n)&&Object.prototype.hasOwnProperty.call(n,t)),py=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,s,l]=r.match(gf);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},Gk=e=>Qn(0,255,e),fd={...Po,transform:e=>Math.round(Gk(e))},Gr={test:xf("rgb","red"),parse:py("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+fd.transform(e)+", "+fd.transform(t)+", "+fd.transform(n)+", "+xa(Ba.transform(r))+")"};function Kk(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const V1={test:xf("#"),parse:Kk,transform:Gr.transform},Gi={test:xf("hsl","hue"),parse:py("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+jn.transform(xa(t))+", "+jn.transform(xa(n))+", "+xa(Ba.transform(r))+")"},st={test:e=>Gr.test(e)||V1.test(e)||Gi.test(e),parse:e=>Gr.test(e)?Gr.parse(e):Gi.test(e)?Gi.parse(e):V1.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Gr.transform(e):Gi.transform(e)},Yk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Qk(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(gf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Yk))===null||n===void 0?void 0:n.length)||0)>0}const my="number",gy="color",Xk="var",Jk="var(",i2="${}",eS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wa(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const l=t.replace(eS,c=>(st.test(c)?(r.color.push(a),i.push(gy),n.push(st.parse(c))):c.startsWith(Jk)?(r.var.push(a),i.push(Xk),n.push(c)):(r.number.push(a),i.push(my),n.push(parseFloat(c))),++a,i2)).split(i2);return{values:n,split:l,indexes:r,types:i}}function xy(e){return Wa(e).values}function yy(e){const{split:t,types:n}=Wa(e),r=t.length;return i=>{let a="";for(let s=0;s<r;s++)if(a+=t[s],i[s]!==void 0){const l=n[s];l===my?a+=xa(i[s]):l===gy?a+=st.transform(i[s]):a+=i[s]}return a}}const tS=e=>typeof e=="number"?0:e;function nS(e){const t=xy(e);return yy(e)(t.map(tS))}const Pr={test:Qk,parse:xy,createTransformer:yy,getAnimatableNone:nS},rS=new Set(["brightness","contrast","saturate","opacity"]);function iS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(gf)||[];if(!r)return e;const i=n.replace(r,"");let a=rS.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const oS=/\b([a-z-]*)\(.*?\)/gu,$1={...Pr,getAnimatableNone:e=>{const t=e.match(oS);return t?t.map(iS).join(" "):e}},aS={borderWidth:Y,borderTopWidth:Y,borderRightWidth:Y,borderBottomWidth:Y,borderLeftWidth:Y,borderRadius:Y,radius:Y,borderTopLeftRadius:Y,borderTopRightRadius:Y,borderBottomRightRadius:Y,borderBottomLeftRadius:Y,width:Y,maxWidth:Y,height:Y,maxHeight:Y,top:Y,right:Y,bottom:Y,left:Y,padding:Y,paddingTop:Y,paddingRight:Y,paddingBottom:Y,paddingLeft:Y,margin:Y,marginTop:Y,marginRight:Y,marginBottom:Y,marginLeft:Y,backgroundPositionX:Y,backgroundPositionY:Y},sS={rotate:ar,rotateX:ar,rotateY:ar,rotateZ:ar,scale:Fs,scaleX:Fs,scaleY:Fs,scaleZ:Fs,skew:ar,skewX:ar,skewY:ar,distance:Y,translateX:Y,translateY:Y,translateZ:Y,x:Y,y:Y,z:Y,perspective:Y,transformPerspective:Y,opacity:Ba,originX:Jm,originY:Jm,originZ:Y},o2={...Po,transform:Math.round},yf={...aS,...sS,zIndex:o2,size:Y,fillOpacity:Ba,strokeOpacity:Ba,numOctaves:o2},lS={...yf,color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,filter:$1,WebkitFilter:$1},vf=e=>lS[e];function vy(e,t){let n=vf(e);return n!==$1&&(n=Pr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const cS=new Set(["auto","none","0"]);function dS(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!cS.has(a)&&Wa(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=vy(n,i)}class wy extends mf{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),pf(u))){const f=cy(u,n.current);f!==void 0&&(t[c]=f),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Fk.has(r)||t.length!==2)return;const[i,a]=t,s=r2(i),l=r2(a);if(s!==l)if(e2(s)&&e2(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Vk(t[i])&&r.push(i);r.length&&dS(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=bo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const s=i.length-1,l=i[s];i[s]=bo[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function wf(e){return typeof e=="function"}let ec;function uS(){ec=void 0}const kn={now:()=>(ec===void 0&&kn.set(et.isProcessing||Ck.useManualTiming?et.timestamp:performance.now()),ec),set:e=>{ec=e,queueMicrotask(uS)}},a2=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Pr.test(e)||e==="0")&&!e.startsWith("url("));function hS(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function fS(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],s=a2(i,t),l=a2(a,t);return!s||!l?!1:hS(e)||(n==="spring"||wf(n))&&r}const pS=40;class by{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:s="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=kn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:s,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>pS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Wk(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=kn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:s,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!fS(t,r,i,a))if(s)this.options.duration=0;else{c==null||c(j0(t,this.options,n)),l==null||l(),this.resolveFinishedPromise();return}const f=this.initPlayback(t,n);f!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...f},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const jo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},jy=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(jo(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function ky(e,t){return t?e*(1e3/t):0}const mS=5;function Sy(e,t,n){const r=Math.max(t-mS,0);return ky(n-e(r),t-r)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},pd=.001;function gS({duration:e=He.duration,bounce:t=He.bounce,velocity:n=He.velocity,mass:r=He.mass}){let i,a,s=1-t;s=Qn(He.minDamping,He.maxDamping,s),e=Qn(He.minDuration,He.maxDuration,Nn(e)),s<1?(i=u=>{const f=u*s,p=f*e,m=f-n,y=z1(u,s),j=Math.exp(-p);return pd-m/y*j},a=u=>{const p=u*s*e,m=p*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,j=Math.exp(-p),w=z1(Math.pow(u,2),s);return(-i(u)+pd>0?-1:1)*((m-y)*j)/w}):(i=u=>{const f=Math.exp(-u*e),p=(u-n)*e+1;return-pd+f*p},a=u=>{const f=Math.exp(-u*e),p=(n-u)*(e*e);return f*p});const l=5/e,c=yS(i,a,l);if(e=_n(e),isNaN(c))return{stiffness:He.stiffness,damping:He.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const xS=12;function yS(e,t,n){let r=n;for(let i=1;i<xS;i++)r=r-e(r)/t(r);return r}function z1(e,t){return e*Math.sqrt(1-t*t)}const R1=2e4;function Ey(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<R1;)t+=n,r=e.next(t);return t>=R1?1/0:t}const vS=["duration","bounce"],wS=["stiffness","damping","mass"];function s2(e,t){return t.some(n=>e[n]!==void 0)}function bS(e){let t={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...e};if(!s2(e,wS)&&s2(e,vS))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Qn(.05,1,1-e.bounce)*Math.sqrt(i);t={...t,mass:He.mass,stiffness:i,damping:a}}else{const n=gS(e);t={...t,...n,mass:He.mass},t.isResolvedFromDuration=!0}return t}function Cy(e=He.visualDuration,t=He.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:u,mass:f,duration:p,velocity:m,isResolvedFromDuration:y}=bS({...n,velocity:-Nn(n.velocity||0)}),j=m||0,w=u/(2*Math.sqrt(c*f)),C=s-a,x=Nn(Math.sqrt(c/f)),g=Math.abs(C)<5;r||(r=g?He.restSpeed.granular:He.restSpeed.default),i||(i=g?He.restDelta.granular:He.restDelta.default);let v;if(w<1){const P=z1(x,w);v=T=>{const L=Math.exp(-w*x*T);return s-L*((j+w*x*C)/P*Math.sin(P*T)+C*Math.cos(P*T))}}else if(w===1)v=P=>s-Math.exp(-x*P)*(C+(j+x*C)*P);else{const P=x*Math.sqrt(w*w-1);v=T=>{const L=Math.exp(-w*x*T),k=Math.min(P*T,300);return s-L*((j+w*x*C)*Math.sinh(k)+P*C*Math.cosh(k))/P}}const E={calculatedDuration:y&&p||null,next:P=>{const T=v(P);if(y)l.done=P>=p;else{let L=0;w<1&&(L=P===0?_n(j):Sy(v,P,T));const k=Math.abs(L)<=r,R=Math.abs(s-T)<=i;l.done=k&&R}return l.value=l.done?s:T,l},toString:()=>{const P=Math.min(Ey(E),R1),T=jy(L=>E.next(P*L).value,P,30);return P+"ms "+T}};return E}function l2({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:f}){const p=e[0],m={done:!1,value:p},y=k=>l!==void 0&&k<l||c!==void 0&&k>c,j=k=>l===void 0?c:c===void 0||Math.abs(l-k)<Math.abs(c-k)?l:c;let w=n*t;const C=p+w,x=s===void 0?C:s(C);x!==C&&(w=x-p);const g=k=>-w*Math.exp(-k/r),v=k=>x+g(k),E=k=>{const R=g(k),$=v(k);m.done=Math.abs(R)<=u,m.value=m.done?x:$};let P,T;const L=k=>{y(m.value)&&(P=k,T=Cy({keyframes:[m.value,j(m.value)],velocity:Sy(v,k,m.value),damping:i,stiffness:a,restDelta:u,restSpeed:f}))};return L(0),{calculatedDuration:null,next:k=>{let R=!1;return!T&&P===void 0&&(R=!0,E(k),L(k)),P!==void 0&&k>=P?T.next(k-P):(!R&&E(k),m)}}}const jS=os(.42,0,1,1),kS=os(0,0,.58,1),Ay=os(.42,0,.58,1),SS=e=>Array.isArray(e)&&typeof e[0]!="number",bf=e=>Array.isArray(e)&&typeof e[0]=="number",c2={linear:ut,easeIn:jS,easeInOut:Ay,easeOut:kS,circIn:ff,circInOut:iy,circOut:ry,backIn:hf,backInOut:ty,backOut:ey,anticipate:ny},d2=e=>{if(bf(e)){T1(e.length===4);const[t,n,r,i]=e;return os(t,n,r,i)}else if(typeof e=="string")return T1(c2[e]!==void 0),c2[e];return e},ES=(e,t)=>n=>t(e(n)),Bn=(...e)=>e.reduce(ES),Ce=(e,t,n)=>e+(t-e)*n;function md(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function CS({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,s=0;if(!t)i=a=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=md(c,l,e+1/3),a=md(c,l,e),s=md(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:r}}function Oc(e,t){return n=>n>0?t:e}const gd=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},AS=[V1,Gr,Gi],PS=e=>AS.find(t=>t.test(e));function u2(e){const t=PS(e);if(!t)return!1;let n=t.parse(e);return t===Gi&&(n=CS(n)),n}const h2=(e,t)=>{const n=u2(e),r=u2(t);if(!n||!r)return Oc(e,t);const i={...n};return a=>(i.red=gd(n.red,r.red,a),i.green=gd(n.green,r.green,a),i.blue=gd(n.blue,r.blue,a),i.alpha=Ce(n.alpha,r.alpha,a),Gr.transform(i))},D1=new Set(["none","hidden"]);function MS(e,t){return D1.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function TS(e,t){return n=>Ce(e,t,n)}function jf(e){return typeof e=="number"?TS:typeof e=="string"?pf(e)?Oc:st.test(e)?h2:VS:Array.isArray(e)?Py:typeof e=="object"?st.test(e)?h2:LS:Oc}function Py(e,t){const n=[...e],r=n.length,i=e.map((a,s)=>jf(a)(a,t[s]));return a=>{for(let s=0;s<r;s++)n[s]=i[s](a);return n}}function LS(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=jf(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function HS(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const s=t.types[a],l=e.indexes[s][i[s]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[a]=c,i[s]++}return r}const VS=(e,t)=>{const n=Pr.createTransformer(t),r=Wa(e),i=Wa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?D1.has(e)&&!i.values.length||D1.has(t)&&!r.values.length?MS(e,t):Bn(Py(HS(r,i),i.values),n):Oc(e,t)};function My(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ce(e,t,n):jf(e)(e,t)}function $S(e,t,n){const r=[],i=n||My,a=e.length-1;for(let s=0;s<a;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||ut:t;l=Bn(c,l)}r.push(l)}return r}function zS(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(T1(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=$S(t,r,i),l=s.length,c=u=>{let f=0;if(l>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const p=jo(e[f],e[f+1],u);return s[f](p)};return n?u=>c(Qn(e[0],e[a-1],u)):c}function RS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=jo(0,t,r);e.push(Ce(n,1,i))}}function DS(e){const t=[0];return RS(t,e.length-1),t}function OS(e,t){return e.map(n=>n*t)}function IS(e,t){return e.map(()=>t||Ay).splice(0,e.length-1)}function Ic({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=SS(r)?r.map(d2):d2(r),a={done:!1,value:t[0]},s=OS(n&&n.length===t.length?n:DS(t),e),l=zS(s,t,{ease:Array.isArray(i)?i:IS(t,i)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}const FS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>pe.update(t,!0),stop:()=>Ar(t),now:()=>et.isProcessing?et.timestamp:kn.now()}},ZS={decay:l2,inertia:l2,tween:Ic,keyframes:Ic,spring:Cy},_S=e=>e/100;class kf extends by{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,s=(i==null?void 0:i.KeyframeResolver)||mf,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new s(a,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:s=0}=this.options,l=wf(n)?n:ZS[n]||Ic;let c,u;l!==Ic&&typeof t[0]!="number"&&(c=Bn(_S,My(t[0],t[1])),t=[0,100]);const f=l({...this.options,keyframes:t});a==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-s})),f.calculatedDuration===null&&(f.calculatedDuration=Ey(f));const{calculatedDuration:p}=f,m=p+i,y=m*(r+1)-i;return{generator:f,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:p,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:s,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:f,resolvedDuration:p}=r;if(this.startTime===null)return a.next(0);const{delay:m,repeat:y,repeatType:j,repeatDelay:w,onUpdate:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-f/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const x=this.currentTime-m*(this.speed>=0?1:-1),g=this.speed>=0?x<0:x>f;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=f);let v=this.currentTime,E=a;if(y){const k=Math.min(this.currentTime,f)/p;let R=Math.floor(k),$=k%1;!$&&k>=1&&($=1),$===1&&R--,R=Math.min(R,y+1),!!(R%2)&&(j==="reverse"?($=1-$,w&&($-=w/p)):j==="mirror"&&(E=s)),v=Qn(0,1,$)*p}const P=g?{done:!1,value:c[0]}:E.next(v);l&&(P.value=l(P.value));let{done:T}=P;!g&&u!==null&&(T=this.speed>=0?this.currentTime>=f:this.currentTime<=0);const L=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return L&&i!==void 0&&(P.value=j0(c,this.options,i)),C&&C(P.value),L&&this.finish(),P}get duration(){const{resolved:t}=this;return t?Nn(t.calculatedDuration):0}get time(){return Nn(this.currentTime)}set time(t){t=_n(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Nn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=FS,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const NS=new Set(["opacity","clipPath","filter","transform"]);function Sf(e){let t;return()=>(t===void 0&&(t=e()),t)}const BS={linearEasing:void 0};function WS(e,t){const n=Sf(e);return()=>{var r;return(r=BS[t])!==null&&r!==void 0?r:n()}}const Fc=WS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Ty(e){return!!(typeof e=="function"&&Fc()||!e||typeof e=="string"&&(e in O1||Fc())||bf(e)||Array.isArray(e)&&e.every(Ty))}const oa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,O1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oa([0,.65,.55,1]),circOut:oa([.55,0,1,.45]),backIn:oa([.31,.01,.66,-.59]),backOut:oa([.33,1.53,.69,.99])};function Ly(e,t){if(e)return typeof e=="function"&&Fc()?jy(e,t):bf(e)?oa(e):Array.isArray(e)?e.map(n=>Ly(n,t)||O1.easeOut):O1[e]}function US(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:s="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const f=Ly(l,i);return Array.isArray(f)&&(u.easing=f),e.animate(u,{delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:a+1,direction:s==="reverse"?"alternate":"normal"})}function f2(e,t){e.timeline=t,e.onfinish=null}const qS=Sf(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Zc=10,GS=2e4;function KS(e){return wf(e.type)||e.type==="spring"||!Ty(e.ease)}function YS(e,t){const n=new kf({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<GS;)r=n.sample(a),i.push(r.value),a+=Zc;return{times:void 0,keyframes:i,duration:a-Zc,ease:"linear"}}const Hy={anticipate:ny,backInOut:ty,circInOut:iy};function QS(e){return e in Hy}class p2 extends by{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new wy(a,(s,l)=>this.onKeyframesResolved(s,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:a,ease:s,type:l,motionValue:c,name:u,startTime:f}=this.options;if(!(!((r=c.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&Fc()&&QS(s)&&(s=Hy[s]),KS(this.options)){const{onComplete:m,onUpdate:y,motionValue:j,element:w,...C}=this.options,x=YS(t,C);t=x.keyframes,t.length===1&&(t[1]=t[0]),i=x.duration,a=x.times,s=x.ease,l="keyframes"}const p=US(c.owner.current,u,t,{...this.options,duration:i,times:a,ease:s});return p.startTime=f??this.calcStartTime(),this.pendingTimeline?(f2(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:m}=this.options;c.set(j0(t,this.options,n)),m&&m(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:a,type:l,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Nn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Nn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=_n(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ut;const{animation:r}=n;f2(r,t)}return ut}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:s,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:f,onComplete:p,element:m,...y}=this.options,j=new kf({...y,keyframes:r,duration:i,type:a,ease:s,times:l,isGenerator:!0}),w=_n(this.time);u.setWithVelocity(j.sample(w-Zc).value,j.sample(w).value,Zc)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:s,type:l}=t;return qS()&&r&&NS.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&a!=="mirror"&&s!==0&&l!=="inertia"}}const XS=Sf(()=>window.ScrollTimeline!==void 0);class JS{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>XS()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function eE({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...f}){return!!Object.keys(f).length}const Ef=(e,t,n,r={},i,a)=>s=>{const l=uf(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-_n(c);let f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:m=>{t.set(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:a?void 0:i};eE(l)||(f={...f,...Ek(e,f)}),f.duration&&(f.duration=_n(f.duration)),f.repeatDelay&&(f.repeatDelay=_n(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let p=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(f.duration=0,f.delay===0&&(p=!0)),p&&!a&&t.get()!==void 0){const m=j0(f.keyframes,l);if(m!==void 0)return pe.update(()=>{f.onUpdate(m),f.onComplete()}),new JS([])}return!a&&p2.supports(f)?new p2(f):new kf(f)},tE=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),nE=e=>M1(e)?e[e.length-1]||0:e;function Cf(e,t){e.indexOf(t)===-1&&e.push(t)}function Af(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Pf{constructor(){this.subscriptions=[]}add(t){return Cf(this.subscriptions,t),()=>Af(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const s=this.subscriptions[a];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const m2=30,rE=e=>!isNaN(parseFloat(e));class iE{constructor(t,n={}){this.version="11.12.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=kn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=kn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=rE(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pf);const r=this.events[t].add(n);return t==="change"?()=>{r(),pe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>m2)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,m2);return ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ua(e,t){return new iE(e,t)}function oE(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ua(n))}function aE(e,t){const n=b0(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const s in a){const l=nE(a[s]);oE(e,s,l)}}const Mf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),sE="framerAppearId",Vy="data-"+Mf(sE);function $y(e){return e.props[Vy]}const dt=e=>!!(e&&e.getVelocity);function lE(e){return!!(dt(e)&&e.add)}function I1(e,t){const n=e.getValue("willChange");if(lE(n))return n.add(t)}function cE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function zy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:s=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(s=r);const u=[],f=i&&e.animationState&&e.animationState.getState()[i];for(const p in c){const m=e.getValue(p,(a=e.latestValues[p])!==null&&a!==void 0?a:null),y=c[p];if(y===void 0||f&&cE(f,p))continue;const j={delay:n,...uf(s||{},p)};let w=!1;if(window.MotionHandoffAnimation){const x=$y(e);if(x){const g=window.MotionHandoffAnimation(x,p,pe);g!==null&&(j.startTime=g,w=!0)}}I1(e,p),m.start(Ef(p,m,y,e.shouldReduceMotion&&fi.has(p)?{type:!1}:j,e,w));const C=m.animation;C&&u.push(C)}return l&&Promise.all(u).then(()=>{pe.update(()=>{l&&aE(e,l)})}),u}function F1(e,t,n={}){var r;const i=b0(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const s=i?()=>Promise.all(zy(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:f=0,staggerChildren:p,staggerDirection:m}=a;return dE(e,t,f+u,p,m,n)}:()=>Promise.resolve(),{when:c}=a;if(c){const[u,f]=c==="beforeChildren"?[s,l]:[l,s];return u().then(()=>f())}else return Promise.all([s(),l(n.delay)])}function dE(e,t,n=0,r=0,i=1,a){const s=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(uE).forEach((u,f)=>{u.notify("AnimationStart",t),s.push(F1(u,t,{...a,delay:n+c(f)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function uE(e,t){return e.sortNodePosition(t)}function hE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>F1(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=F1(e,t,n);else{const i=typeof t=="function"?b0(e,t,n.custom):t;r=Promise.all(zy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const fE=df.length;function Ry(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ry(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<fE;n++){const r=df[n],i=e.props[r];(Na(i)||i===!1)&&(t[r]=i)}return t}const pE=[...cf].reverse(),mE=cf.length;function gE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>hE(e,n,r)))}function xE(e){let t=gE(e),n=g2(),r=!0;const i=c=>(u,f)=>{var p;const m=b0(e,f,c==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(m){const{transition:y,transitionEnd:j,...w}=m;u={...u,...w,...j}}return u};function a(c){t=c(e)}function s(c){const{props:u}=e,f=Ry(e.parent)||{},p=[],m=new Set;let y={},j=1/0;for(let C=0;C<mE;C++){const x=pE[C],g=n[x],v=u[x]!==void 0?u[x]:f[x],E=Na(v),P=x===c?g.isActive:null;P===!1&&(j=C);let T=v===f[x]&&v!==u[x]&&E;if(T&&r&&e.manuallyAnimateOnMount&&(T=!1),g.protectedKeys={...y},!g.isActive&&P===null||!v&&!g.prevProp||w0(v)||typeof v=="boolean")continue;const L=yE(g.prevProp,v);let k=L||x===c&&g.isActive&&!T&&E||C>j&&E,R=!1;const $=Array.isArray(v)?v:[v];let U=$.reduce(i(x),{});P===!1&&(U={});const{prevResolvedValues:se={}}=g,be={...se,...U},me=he=>{k=!0,m.has(he)&&(R=!0,m.delete(he)),g.needsAnimating[he]=!0;const z=e.getValue(he);z&&(z.liveStyle=!1)};for(const he in be){const z=U[he],D=se[he];if(y.hasOwnProperty(he))continue;let G=!1;M1(z)&&M1(D)?G=!K6(z,D):G=z!==D,G?z!=null?me(he):m.add(he):z!==void 0&&m.has(he)?me(he):g.protectedKeys[he]=!0}g.prevProp=v,g.prevResolvedValues=U,g.isActive&&(y={...y,...U}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(T&&L)||R)&&p.push(...$.map(he=>({animation:he,options:{type:x}})))}if(m.size){const C={};m.forEach(x=>{const g=e.getBaseTarget(x),v=e.getValue(x);v&&(v.liveStyle=!0),C[x]=g??null}),p.push({animation:C})}let w=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(p):Promise.resolve()}function l(c,u){var f;if(n[c].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(c,u)}),n[c].isActive=u;const p=s(c);for(const m in n)n[m].protectedKeys={};return p}return{animateChanges:s,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=g2(),r=!0}}}function yE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!K6(t,e):!1}function Dr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function g2(){return{animate:Dr(!0),whileInView:Dr(),whileHover:Dr(),whileTap:Dr(),whileDrag:Dr(),whileFocus:Dr(),exit:Dr()}}class $r{constructor(t){this.isMounted=!1,this.node=t}update(){}}class vE extends $r{constructor(t){super(t),t.animationState||(t.animationState=xE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();w0(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let wE=0;class bE extends $r{constructor(){super(...arguments),this.id=wE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const jE={animation:{Feature:vE},exit:{Feature:bE}},Dy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function k0(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const kE=e=>t=>Dy(t)&&e(t,k0(t));function In(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Wn(e,t,n,r){return In(e,t,kE(n),r)}const x2=(e,t)=>Math.abs(e-t);function SE(e,t){const n=x2(e.x,t.x),r=x2(e.y,t.y);return Math.sqrt(n**2+r**2)}class Oy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=yd(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=SE(p.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:j}=p,{timestamp:w}=et;this.history.push({...j,timestamp:w});const{onStart:C,onMove:x}=this.handlers;m||(C&&C(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,p)},this.handlePointerMove=(p,m)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=xd(m,this.transformPagePoint),pe.update(this.updatePoint,!0)},this.handlePointerUp=(p,m)=>{this.end();const{onEnd:y,onSessionEnd:j,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=yd(p.type==="pointercancel"?this.lastMoveEventInfo:xd(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,C),j&&j(p,C)},!Dy(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=k0(t),l=xd(s,this.transformPagePoint),{point:c}=l,{timestamp:u}=et;this.history=[{...c,timestamp:u}];const{onSessionStart:f}=n;f&&f(t,yd(l,this.history)),this.removeListeners=Bn(Wn(this.contextWindow,"pointermove",this.handlePointerMove),Wn(this.contextWindow,"pointerup",this.handlePointerUp),Wn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ar(this.updatePoint)}}function xd(e,t){return t?{point:t(e.point)}:e}function y2(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yd({point:e},t){return{point:e,delta:y2(e,Iy(t)),offset:y2(e,EE(t)),velocity:CE(t,.1)}}function EE(e){return e[0]}function Iy(e){return e[e.length-1]}function CE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Iy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>_n(t)));)n--;if(!r)return{x:0,y:0};const a=Nn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const s={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Fy(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const v2=Fy("dragHorizontal"),w2=Fy("dragVertical");function Zy(e){let t=!1;if(e==="y")t=w2();else if(e==="x")t=v2();else{const n=v2(),r=w2();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function _y(){const e=Zy(!0);return e?(e(),!1):!0}function Ki(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Ny=1e-4,AE=1-Ny,PE=1+Ny,By=.01,ME=0-By,TE=0+By;function Ft(e){return e.max-e.min}function LE(e,t,n){return Math.abs(e-t)<=n}function b2(e,t,n,r=.5){e.origin=r,e.originPoint=Ce(t.min,t.max,e.origin),e.scale=Ft(n)/Ft(t),e.translate=Ce(n.min,n.max,e.origin)-e.originPoint,(e.scale>=AE&&e.scale<=PE||isNaN(e.scale))&&(e.scale=1),(e.translate>=ME&&e.translate<=TE||isNaN(e.translate))&&(e.translate=0)}function ya(e,t,n,r){b2(e.x,t.x,n.x,r?r.originX:void 0),b2(e.y,t.y,n.y,r?r.originY:void 0)}function j2(e,t,n){e.min=n.min+t.min,e.max=e.min+Ft(t)}function HE(e,t,n){j2(e.x,t.x,n.x),j2(e.y,t.y,n.y)}function k2(e,t,n){e.min=t.min-n.min,e.max=e.min+Ft(t)}function va(e,t,n){k2(e.x,t.x,n.x),k2(e.y,t.y,n.y)}function VE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ce(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ce(n,e,r.max):Math.min(e,n)),e}function S2(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function $E(e,{top:t,left:n,bottom:r,right:i}){return{x:S2(e.x,n,i),y:S2(e.y,t,r)}}function E2(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function zE(e,t){return{x:E2(e.x,t.x),y:E2(e.y,t.y)}}function RE(e,t){let n=.5;const r=Ft(e),i=Ft(t);return i>r?n=jo(t.min,t.max-r,e.min):r>i&&(n=jo(e.min,e.max-i,t.min)),Qn(0,1,n)}function DE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Z1=.35;function OE(e=Z1){return e===!1?e=0:e===!0&&(e=Z1),{x:C2(e,"left","right"),y:C2(e,"top","bottom")}}function C2(e,t,n){return{min:A2(e,t),max:A2(e,n)}}function A2(e,t){return typeof e=="number"?e:e[t]||0}const P2=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yi=()=>({x:P2(),y:P2()}),M2=()=>({min:0,max:0}),$e=()=>({x:M2(),y:M2()});function Ut(e){return[e("x"),e("y")]}function Wy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function IE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function FE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function vd(e){return e===void 0||e===1}function _1({scale:e,scaleX:t,scaleY:n}){return!vd(e)||!vd(t)||!vd(n)}function Fr(e){return _1(e)||Uy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Uy(e){return T2(e.x)||T2(e.y)}function T2(e){return e&&e!=="0%"}function _c(e,t,n){const r=e-n,i=t*r;return n+i}function L2(e,t,n,r,i){return i!==void 0&&(e=_c(e,i,r)),_c(e,n,r)+t}function N1(e,t=0,n=1,r,i){e.min=L2(e.min,t,n,r,i),e.max=L2(e.max,t,n,r,i)}function qy(e,{x:t,y:n}){N1(e.x,t.translate,t.scale,t.originPoint),N1(e.y,n.translate,n.scale,n.originPoint)}const H2=.999999999999,V2=1.0000000000001;function ZE(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,s;for(let l=0;l<i;l++){a=n[l],s=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Xi(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,qy(e,s)),r&&Fr(a.latestValues)&&Xi(e,a.latestValues))}t.x<V2&&t.x>H2&&(t.x=1),t.y<V2&&t.y>H2&&(t.y=1)}function Qi(e,t){e.min=e.min+t,e.max=e.max+t}function $2(e,t,n,r,i=.5){const a=Ce(e.min,e.max,i);N1(e,t,n,a,r)}function Xi(e,t){$2(e.x,t.x,t.scaleX,t.scale,t.originX),$2(e.y,t.y,t.scaleY,t.scale,t.originY)}function Gy(e,t){return Wy(FE(e.getBoundingClientRect(),t))}function _E(e,t,n){const r=Gy(e,n),{scroll:i}=t;return i&&(Qi(r.x,i.offset.x),Qi(r.y,i.offset.y)),r}const Ky=({current:e})=>e?e.ownerDocument.defaultView:null,NE=new WeakMap;class BE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=f=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(k0(f,"page").point)},a=(f,p)=>{const{drag:m,dragPropagation:y,onDragStart:j}=this.getProps();if(m&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Zy(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ut(C=>{let x=this.getAxisMotionValue(C).get()||0;if(jn.test(x)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[C];v&&(x=Ft(v)*(parseFloat(x)/100))}}this.originPoint[C]=x}),j&&pe.postRender(()=>j(f,p)),I1(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(f,p)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:j,onDrag:w}=this.getProps();if(!m&&!this.openGlobalLock)return;const{offset:C}=p;if(y&&this.currentDirection===null){this.currentDirection=WE(C),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",p.point,C),this.updateAxis("y",p.point,C),this.visualElement.render(),w&&w(f,p)},l=(f,p)=>this.stop(f,p),c=()=>Ut(f=>{var p;return this.getAnimationState(f)==="paused"&&((p=this.getAxisMotionValue(f).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Oy(t,{onSessionStart:i,onStart:a,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Ky(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&pe.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Zs(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=VE(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Ki(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=$E(i.layoutBox,n):this.constraints=!1,this.elastic=OE(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Ut(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=DE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ki(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=_E(r,i.root,this.visualElement.getTransformPagePoint());let s=zE(i.layout.layoutBox,a);if(n){const l=n(IE(s));this.hasMutatedConstraints=!!l,l&&(s=Wy(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=Ut(f=>{if(!Zs(f,n,this.currentDirection))return;let p=c&&c[f]||{};s&&(p={min:0,max:0});const m=i?200:1e6,y=i?40:1e7,j={type:"inertia",velocity:r?t[f]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...p};return this.startAxisValueAnimation(f,j)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return I1(this.visualElement,t),r.start(Ef(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ut(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ut(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ut(n=>{const{drag:r}=this.getProps();if(!Zs(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n];a.set(t[n]-Ce(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ki(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ut(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=RE({min:c,max:c},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ut(s=>{if(!Zs(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(Ce(c,u,i[s]))})}addListeners(){if(!this.visualElement.current)return;NE.set(this.visualElement,this);const t=this.visualElement.current,n=Wn(t,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps();u&&f&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();Ki(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),pe.read(r);const s=In(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Ut(f=>{const p=this.getAxisMotionValue(f);p&&(this.originPoint[f]+=c[f].translate,p.set(p.get()+c[f].translate))}),this.visualElement.render())});return()=>{s(),n(),a(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:s=Z1,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:s,dragMomentum:l}}}function Zs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function WE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class UE extends $r{constructor(t){super(t),this.removeGroupControls=ut,this.removeListeners=ut,this.controls=new BE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const z2=e=>(t,n)=>{e&&pe.postRender(()=>e(t,n))};class qE extends $r{constructor(){super(...arguments),this.removePointerDownListener=ut}onPointerDown(t){this.session=new Oy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ky(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:z2(t),onStart:z2(n),onMove:r,onEnd:(a,s)=>{delete this.session,i&&pe.postRender(()=>i(a,s))}}}mount(){this.removePointerDownListener=Wn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const S0=b.createContext(null);function GE(){const e=b.useContext(S0);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=b.useId();b.useEffect(()=>r(i),[]);const a=b.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}const Tf=b.createContext({}),Yy=b.createContext({}),tc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function R2(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Wo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Y.test(e))e=parseFloat(e);else return e;const n=R2(e,t.target.x),r=R2(e,t.target.y);return`${n}% ${r}%`}},KE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Pr.parse(e);if(i.length>5)return r;const a=Pr.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=Ce(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),a(i)}},Nc={};function YE(e){Object.assign(Nc,e)}const{schedule:Lf,cancel:KZ}=Y6(queueMicrotask,!1);class QE extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;YE(XE),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),tc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,s=r.projection;return s&&(s.isPresent=a,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||pe.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Lf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Qy(e){const[t,n]=GE(),r=b.useContext(Tf);return o.jsx(QE,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Yy),isPresent:t,safeToRemove:n})}const XE={borderRadius:{...Wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Wo,borderTopRightRadius:Wo,borderBottomLeftRadius:Wo,borderBottomRightRadius:Wo,boxShadow:KE},Xy=["TopLeft","TopRight","BottomLeft","BottomRight"],JE=Xy.length,D2=e=>typeof e=="string"?parseFloat(e):e,O2=e=>typeof e=="number"||Y.test(e);function eC(e,t,n,r,i,a){i?(e.opacity=Ce(0,n.opacity!==void 0?n.opacity:1,tC(r)),e.opacityExit=Ce(t.opacity!==void 0?t.opacity:1,0,nC(r))):a&&(e.opacity=Ce(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<JE;s++){const l=`border${Xy[s]}Radius`;let c=I2(t,l),u=I2(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||O2(c)===O2(u)?(e[l]=Math.max(Ce(D2(c),D2(u),r),0),(jn.test(u)||jn.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=Ce(t.rotate||0,n.rotate||0,r))}function I2(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const tC=Jy(0,.5,ry),nC=Jy(.5,.95,ut);function Jy(e,t,n){return r=>r<e?0:r>t?1:n(jo(e,t,r))}function F2(e,t){e.min=t.min,e.max=t.max}function Nt(e,t){F2(e.x,t.x),F2(e.y,t.y)}function Z2(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function _2(e,t,n,r,i){return e-=t,e=_c(e,1/n,r),i!==void 0&&(e=_c(e,1/i,r)),e}function rC(e,t=0,n=1,r=.5,i,a=e,s=e){if(jn.test(t)&&(t=parseFloat(t),t=Ce(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=Ce(a.min,a.max,r);e===a&&(l-=t),e.min=_2(e.min,t,n,l,i),e.max=_2(e.max,t,n,l,i)}function N2(e,t,[n,r,i],a,s){rC(e,t[n],t[r],t[i],t.scale,a,s)}const iC=["x","scaleX","originX"],oC=["y","scaleY","originY"];function B2(e,t,n,r){N2(e.x,t,iC,n?n.x:void 0,r?r.x:void 0),N2(e.y,t,oC,n?n.y:void 0,r?r.y:void 0)}function W2(e){return e.translate===0&&e.scale===1}function ev(e){return W2(e.x)&&W2(e.y)}function U2(e,t){return e.min===t.min&&e.max===t.max}function aC(e,t){return U2(e.x,t.x)&&U2(e.y,t.y)}function q2(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function tv(e,t){return q2(e.x,t.x)&&q2(e.y,t.y)}function G2(e){return Ft(e.x)/Ft(e.y)}function K2(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class sC{constructor(){this.members=[]}add(t){Cf(this.members,t),t.scheduleRender()}remove(t){if(Af(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lC(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||a||s)&&(r=`translate3d(${i}px, ${a}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:f,rotateX:p,rotateY:m,skewX:y,skewY:j}=n;u&&(r=`perspective(${u}px) ${r}`),f&&(r+=`rotate(${f}deg) `),p&&(r+=`rotateX(${p}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),j&&(r+=`skewY(${j}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const cC=(e,t)=>e.depth-t.depth;class dC{constructor(){this.children=[],this.isDirty=!1}add(t){Cf(this.children,t),this.isDirty=!0}remove(t){Af(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(cC),this.isDirty=!1,this.children.forEach(t)}}function nc(e){const t=dt(e)?e.get():e;return tE(t)?t.toValue():t}function uC(e,t){const n=kn.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Ar(r),e(a-t))};return pe.read(r,!0),()=>Ar(r)}function hC(e){return e instanceof SVGElement&&e.tagName!=="svg"}function fC(e,t,n){const r=dt(e)?e:Ua(e);return r.start(Ef("",r,t,n)),r.animation}const Zr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},aa=typeof window<"u"&&window.MotionDebug!==void 0,wd=["","X","Y","Z"],pC={visibility:"hidden"},Y2=1e3;let mC=0;function bd(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function nv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=$y(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",pe,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&nv(r)}function rv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=mC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,aa&&(Zr.totalNodes=Zr.resolvedTargetDeltas=Zr.recalculatedProjection=0),this.nodes.forEach(yC),this.nodes.forEach(kC),this.nodes.forEach(SC),this.nodes.forEach(vC),aa&&window.MotionDebug.record(Zr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new dC)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Pf),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=hC(s),this.instance=s;const{layoutId:c,layout:u,visualElement:f}=this.options;if(f&&!f.current&&f.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let p;const m=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=uC(m,250),tc.hasAnimatedSinceResize&&(tc.hasAnimatedSinceResize=!1,this.nodes.forEach(X2))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&f&&(c||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||f.getDefaultTransition()||MC,{onLayoutAnimationStart:C,onLayoutAnimationComplete:x}=f.getProps(),g=!this.targetLayout||!tv(this.targetLayout,j)||y,v=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||m&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,v);const E={...uf(w,"layout"),onPlay:C,onComplete:x};(f.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E)}else m||X2(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ar(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(EC),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&nv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const p=this.path[f];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Q2);return}this.isUpdating||this.nodes.forEach(bC),this.isUpdating=!1,this.nodes.forEach(jC),this.nodes.forEach(gC),this.nodes.forEach(xC),this.clearAllSnapshots();const l=kn.now();et.delta=Qn(0,1e3/60,l-et.timestamp),et.timestamp=l,et.isProcessing=!0,hd.update.process(et),hd.preRender.process(et),hd.render.process(et),et.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wC),this.sharedNodes.forEach(CC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!ev(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;s&&(l||Fr(this.latestValues)||f)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),TC(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:l}=this.options;if(!l)return $e();const c=l.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(LC))){const{scroll:f}=this.root;f&&(Qi(c.x,f.offset.x),Qi(c.y,f.offset.y))}return c}removeElementScroll(s){var l;const c=$e();if(Nt(c,s),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const f=this.path[u],{scroll:p,options:m}=f;f!==this.root&&p&&m.layoutScroll&&(p.wasRoot&&Nt(c,s),Qi(c.x,p.offset.x),Qi(c.y,p.offset.y))}return c}applyTransform(s,l=!1){const c=$e();Nt(c,s);for(let u=0;u<this.path.length;u++){const f=this.path[u];!l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Xi(c,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Fr(f.latestValues)&&Xi(c,f.latestValues)}return Fr(this.latestValues)&&Xi(c,this.latestValues),c}removeTransform(s){const l=$e();Nt(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Fr(u.latestValues))continue;_1(u.latestValues)&&u.updateSnapshot();const f=$e(),p=u.measurePageBox();Nt(f,p),B2(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,f)}return Fr(this.latestValues)&&B2(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:m}=this.options;if(!(!this.layout||!(p||m))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),va(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Nt(this.target,this.layout.layoutBox),qy(this.target,this.targetDelta)):Nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),va(this.relativeTargetOrigin,this.target,y.target),Nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}aa&&Zr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||_1(this.parent.latestValues)||Uy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===et.timestamp&&(u=!1),u)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Nt(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;ZE(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=$e());const{target:j}=l;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Z2(this.prevProjectionDelta.x,this.projectionDelta.x),Z2(this.prevProjectionDelta.y,this.projectionDelta.y)),ya(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!K2(this.projectionDelta.x,this.prevProjectionDelta.x)||!K2(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j)),aa&&Zr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yi(),this.projectionDelta=Yi(),this.projectionDeltaWithTransform=Yi()}setAnimationOrigin(s,l=!1){const c=this.snapshot,u=c?c.latestValues:{},f={...this.latestValues},p=Yi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const m=$e(),y=c?c.source:void 0,j=this.layout?this.layout.source:void 0,w=y!==j,C=this.getStack(),x=!C||C.members.length<=1,g=!!(w&&!x&&this.options.crossfade===!0&&!this.path.some(PC));this.animationProgress=0;let v;this.mixTargetDelta=E=>{const P=E/1e3;J2(p.x,s.x,P),J2(p.y,s.y,P),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(va(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AC(this.relativeTarget,this.relativeTargetOrigin,m,P),v&&aC(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=$e()),Nt(v,this.relativeTarget)),w&&(this.animationValues=f,eC(f,u,this.latestValues,P,g,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ar(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pe.update(()=>{tc.hasAnimatedSinceResize=!0,this.currentAnimation=fC(0,Y2,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Y2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:f}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&iv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||$e();const p=Ft(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+p;const m=Ft(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+m}Nt(l,c),Xi(l,f),ya(this.projectionDeltaWithTransform,this.layoutCorrected,l,f)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new sC),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&bd("z",s,u,this.animationValues);for(let f=0;f<wd.length;f++)bd(`rotate${wd[f]}`,s,u,this.animationValues),bd(`skew${wd[f]}`,s,u,this.animationValues);s.render();for(const f in u)s.setStaticValue(f,u[f]),this.animationValues&&(this.animationValues[f]=u[f]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return pC;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=nc(s==null?void 0:s.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=nc(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Fr(this.latestValues)&&(w.transform=f?f({},""):"none",this.hasProjected=!1),w}const m=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=lC(this.projectionDeltaWithTransform,this.treeScale,m),f&&(u.transform=f(m,u.transform));const{x:y,y:j}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${j.origin*100}% 0`,p.animationValues?u.opacity=p===this?(c=(l=m.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const w in Nc){if(m[w]===void 0)continue;const{correct:C,applyTo:x}=Nc[w],g=u.transform==="none"?m[w]:C(m[w],p);if(x){const v=x.length;for(let E=0;E<v;E++)u[x[E]]=g}else u[w]=g}return this.options.layoutId&&(u.pointerEvents=p===this?nc(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Q2),this.root.sharedNodes.clear()}}}function gC(e){e.updateLayout()}function xC(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,s=n.source!==e.layout.source;a==="size"?Ut(p=>{const m=s?n.measuredBox[p]:n.layoutBox[p],y=Ft(m);m.min=r[p].min,m.max=m.min+y}):iv(a,n.layoutBox,r)&&Ut(p=>{const m=s?n.measuredBox[p]:n.layoutBox[p],y=Ft(r[p]);m.max=m.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+y)});const l=Yi();ya(l,r,n.layoutBox);const c=Yi();s?ya(c,e.applyTransform(i,!0),n.measuredBox):ya(c,r,n.layoutBox);const u=!ev(l);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:m,layout:y}=p;if(m&&y){const j=$e();va(j,n.layoutBox,m.layoutBox);const w=$e();va(w,r,y.layoutBox),tv(j,w)||(f=!0),p.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=j,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function yC(e){aa&&Zr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function vC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wC(e){e.clearSnapshot()}function Q2(e){e.clearMeasurements()}function bC(e){e.isLayoutDirty=!1}function jC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function X2(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function kC(e){e.resolveTargetDelta()}function SC(e){e.calcProjection()}function EC(e){e.resetSkewAndRotation()}function CC(e){e.removeLeadSnapshot()}function J2(e,t,n){e.translate=Ce(t.translate,0,n),e.scale=Ce(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function eg(e,t,n,r){e.min=Ce(t.min,n.min,r),e.max=Ce(t.max,n.max,r)}function AC(e,t,n,r){eg(e.x,t.x,n.x,r),eg(e.y,t.y,n.y,r)}function PC(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const MC={duration:.45,ease:[.4,0,.1,1]},tg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ng=tg("applewebkit/")&&!tg("chrome/")?Math.round:ut;function rg(e){e.min=ng(e.min),e.max=ng(e.max)}function TC(e){rg(e.x),rg(e.y)}function iv(e,t,n){return e==="position"||e==="preserve-aspect"&&!LE(G2(t),G2(n),.2)}function LC(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const HC=rv({attachResizeListener:(e,t)=>In(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),jd={current:void 0},ov=rv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!jd.current){const e=new HC({});e.mount(window),e.setOptions({layoutScroll:!0}),jd.current=e}return jd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),VC={pan:{Feature:qE},drag:{Feature:UE,ProjectionNode:ov,MeasureLayout:Qy}};function ig(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(a,s)=>{if(a.pointerType==="touch"||_y())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t);const c=l[r];c&&pe.postRender(()=>c(a,s))};return Wn(e.current,n,i,{passive:!e.getProps()[r]})}class $C extends $r{mount(){this.unmount=Bn(ig(this.node,!0),ig(this.node,!1))}unmount(){}}class zC extends $r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bn(In(this.node.current,"focus",()=>this.onFocus()),In(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const av=(e,t)=>t?e===t?!0:av(e,t.parentElement):!1;function kd(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,k0(n))}class RC extends $r{constructor(){super(...arguments),this.removeStartListeners=ut,this.removeEndListeners=ut,this.removeAccessibleListeners=ut,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=Wn(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:f,globalTapTarget:p}=this.node.getProps(),m=!p&&!av(this.node.current,l.target)?f:u;m&&pe.update(()=>m(l,c))},{passive:!(r.onTap||r.onPointerUp)}),s=Wn(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Bn(a,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const s=l=>{l.key!=="Enter"||!this.checkPressEnd()||kd("up",(c,u)=>{const{onTap:f}=this.node.getProps();f&&pe.postRender(()=>f(c,u))})};this.removeEndListeners(),this.removeEndListeners=In(this.node.current,"keyup",s),kd("down",(l,c)=>{this.startPress(l,c)})},n=In(this.node.current,"keydown",t),r=()=>{this.isPressing&&kd("cancel",(a,s)=>this.cancelPress(a,s))},i=In(this.node.current,"blur",r);this.removeAccessibleListeners=Bn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&pe.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!_y()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&pe.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Wn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=In(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Bn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const B1=new WeakMap,Sd=new WeakMap,DC=e=>{const t=B1.get(e.target);t&&t(e)},OC=e=>{e.forEach(DC)};function IC({root:e,...t}){const n=e||document;Sd.has(n)||Sd.set(n,{});const r=Sd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(OC,{root:e,...t})),r[i]}function FC(e,t,n){const r=IC(t);return B1.set(e,n),r.observe(e),()=>{B1.delete(e),r.unobserve(e)}}const ZC={some:0,all:1};class _C extends $r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:ZC[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,a&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:p}=this.node.getProps(),m=u?f:p;m&&m(c)};return FC(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(NC(t,n))&&this.startObserver()}unmount(){}}function NC({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const BC={inView:{Feature:_C},tap:{Feature:RC},focus:{Feature:zC},hover:{Feature:$C}},WC={layout:{ProjectionNode:ov,MeasureLayout:Qy}},Hf=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),E0=b.createContext({}),Vf=typeof window<"u",sv=Vf?b.useLayoutEffect:b.useEffect,lv=b.createContext({strict:!1});function UC(e,t,n,r,i){var a,s;const{visualElement:l}=b.useContext(E0),c=b.useContext(lv),u=b.useContext(S0),f=b.useContext(Hf).reducedMotion,p=b.useRef();r=r||c.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:f}));const m=p.current,y=b.useContext(Yy);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&qC(p.current,n,i,y);const j=b.useRef(!1);b.useInsertionEffect(()=>{m&&j.current&&m.update(n,u)});const w=n[Vy],C=b.useRef(!!w&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,w))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,w)));return sv(()=>{m&&(j.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),Lf.render(m.render),C.current&&m.animationState&&m.animationState.animateChanges())}),b.useEffect(()=>{m&&(!C.current&&m.animationState&&m.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,w)}),C.current=!1))}),m}function qC(e,t,n,r){const{layoutId:i,layout:a,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:cv(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!s||l&&Ki(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function cv(e){if(e)return e.options.allowProjection!==!1?e.projection:cv(e.parent)}function GC(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ki(n)&&(n.current=r))},[t])}function C0(e){return w0(e.animate)||df.some(t=>Na(e[t]))}function dv(e){return!!(C0(e)||e.variants)}function KC(e,t){if(C0(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Na(n)?n:void 0,animate:Na(r)?r:void 0}}return e.inherit!==!1?t:{}}function YC(e){const{initial:t,animate:n}=KC(e,b.useContext(E0));return b.useMemo(()=>({initial:t,animate:n}),[og(t),og(n)])}function og(e){return Array.isArray(e)?e.join(" "):e}const ag={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ko={};for(const e in ag)ko[e]={isEnabled:t=>ag[e].some(n=>!!t[n])};function QC(e){for(const t in e)ko[t]={...ko[t],...e[t]}}const XC=Symbol.for("motionComponentSymbol");function JC({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&QC(e);function a(l,c){let u;const f={...b.useContext(Hf),...l,layoutId:eA(l)},{isStatic:p}=f,m=YC(l),y=r(l,p);if(!p&&Vf){tA();const j=nA(f);u=j.MeasureLayout,m.visualElement=UC(i,y,f,t,j.ProjectionNode)}return o.jsxs(E0.Provider,{value:m,children:[u&&m.visualElement?o.jsx(u,{visualElement:m.visualElement,...f}):null,n(i,l,GC(y,m.visualElement,c),y,p,m.visualElement)]})}const s=b.forwardRef(a);return s[XC]=i,s}function eA({layoutId:e}){const t=b.useContext(Tf).id;return t&&e!==void 0?t+"-"+e:e}function tA(e,t){b.useContext(lv).strict}function nA(e){const{drag:t,layout:n}=ko;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const rA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $f(e){return typeof e!="string"||e.includes("-")?!1:!!(rA.indexOf(e)>-1||/[A-Z]/u.test(e))}function uv(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const hv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function fv(e,t,n,r){uv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(hv.has(i)?i:Mf(i),t.attrs[i])}function pv(e,{layout:t,layoutId:n}){return fi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Nc[e]||e==="opacity")}function zf(e,t,n){var r;const{style:i}=e,a={};for(const s in i)(dt(i[s])||t.style&&dt(t.style[s])||pv(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[s]=i[s]);return a}function mv(e,t,n){const r=zf(e,t,n);for(const i in e)if(dt(e[i])||dt(t[i])){const a=is.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function Rf(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}function iA({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const s={latestValues:oA(r,i,a,e),renderState:t()};return n&&(s.mount=l=>n(r,l,s)),s}const gv=e=>(t,n)=>{const r=b.useContext(E0),i=b.useContext(S0),a=()=>iA(e,t,r,i);return n?a():Rf(a)};function oA(e,t,n,r){const i={},a=r(e,{});for(const m in a)i[m]=nc(a[m]);let{initial:s,animate:l}=e;const c=C0(e),u=dv(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let f=n?n.initial===!1:!1;f=f||s===!1;const p=f?l:s;if(p&&typeof p!="boolean"&&!w0(p)){const m=Array.isArray(p)?p:[p];for(let y=0;y<m.length;y++){const j=lf(e,m[y]);if(j){const{transitionEnd:w,transition:C,...x}=j;for(const g in x){let v=x[g];if(Array.isArray(v)){const E=f?v.length-1:0;v=v[E]}v!==null&&(i[g]=v)}for(const g in w)i[g]=w[g]}}}return i}const Df=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),xv=()=>({...Df(),attrs:{}}),yv=(e,t)=>t&&typeof e=="number"?t.transform(e):e,aA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sA=is.length;function lA(e,t,n){let r="",i=!0;for(let a=0;a<sA;a++){const s=is[a],l=e[s];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(s.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=yv(l,yf[s]);if(!c){i=!1;const f=aA[s]||s;r+=`${f}(${u}) `}n&&(t[s]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Of(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(fi.has(c)){s=!0;continue}else if(ly(c)){i[c]=u;continue}else{const f=yv(u,yf[c]);c.startsWith("origin")?(l=!0,a[c]=f):r[c]=f}}if(t.transform||(s||n?r.transform=lA(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:f=0}=a;r.transformOrigin=`${c} ${u} ${f}`}}function sg(e,t,n){return typeof e=="string"?e:Y.transform(t+n*e)}function cA(e,t,n){const r=sg(t,e.x,e.width),i=sg(n,e.y,e.height);return`${r} ${i}`}const dA={offset:"stroke-dashoffset",array:"stroke-dasharray"},uA={offset:"strokeDashoffset",array:"strokeDasharray"};function hA(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?dA:uA;e[a.offset]=Y.transform(-r);const s=Y.transform(t),l=Y.transform(n);e[a.array]=`${s} ${l}`}function If(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...u},f,p){if(Of(e,u,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:y,dimensions:j}=e;m.transform&&(j&&(y.transform=m.transform),delete m.transform),j&&(i!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=cA(j,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),s!==void 0&&hA(m,s,l,c,!1)}const Ff=e=>typeof e=="string"&&e.toLowerCase()==="svg",fA={useVisualState:gv({scrapeMotionValuesFromProps:mv,createRenderState:xv,onMount:(e,t,{renderState:n,latestValues:r})=>{pe.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),pe.render(()=>{If(n,r,Ff(t.tagName),e.transformTemplate),fv(t,n)})}})},pA={useVisualState:gv({scrapeMotionValuesFromProps:zf,createRenderState:Df})};function vv(e,t,n){for(const r in t)!dt(t[r])&&!pv(r,n)&&(e[r]=t[r])}function mA({transformTemplate:e},t){return b.useMemo(()=>{const n=Df();return Of(n,t,e),Object.assign({},n.vars,n.style)},[t])}function gA(e,t){const n=e.style||{},r={};return vv(r,n,e),Object.assign(r,mA(e,t)),r}function xA(e,t){const n={},r=gA(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const yA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yA.has(e)}let wv=e=>!Bc(e);function vA(e){e&&(wv=t=>t.startsWith("on")?!Bc(t):e(t))}try{vA(require("@emotion/is-prop-valid").default)}catch{}function wA(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(wv(i)||n===!0&&Bc(i)||!t&&!Bc(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function bA(e,t,n,r){const i=b.useMemo(()=>{const a=xv();return If(a,t,Ff(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};vv(a,e.style,e),i.style={...a,...i.style}}return i}function jA(e=!1){return(n,r,i,{latestValues:a},s)=>{const c=($f(n)?bA:xA)(r,a,s,n),u=wA(r,typeof n=="string",e),f=n!==b.Fragment?{...u,...c,ref:i}:{},{children:p}=r,m=b.useMemo(()=>dt(p)?p.get():p,[p]);return b.createElement(n,{...f,children:m})}}function kA(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...$f(r)?fA:pA,preloadedFeatures:e,useRender:jA(i),createVisualElement:t,Component:r};return JC(s)}}const W1={current:null},bv={current:!1};function SA(){if(bv.current=!0,!!Vf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>W1.current=e.matches;e.addListener(t),t()}else W1.current=!1}function EA(e,t,n){for(const r in t){const i=t[r],a=n[r];if(dt(i))e.addValue(r,i);else if(dt(a))e.addValue(r,Ua(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Ua(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const lg=new WeakMap,CA=[...uy,st,Pr],AA=e=>CA.find(dy(e)),cg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class PA{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=kn.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,pe.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=C0(n),this.isVariantNode=dv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const y=p[m];c[m]!==void 0&&dt(y)&&y.set(c[m],!1)}}mount(t){this.current=t,lg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),bv.current||SA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:W1.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){lg.delete(this.current),this.projection&&this.projection.unmount(),Ar(this.notifyUpdate),Ar(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=fi.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&pe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ko){const n=ko[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cg.length;r++){const i=cg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,s=t[a];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=EA(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Ua(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(ay(i)||oy(i))?i=parseFloat(i):!AA(i)&&Pr.test(n)&&(i=vy(t,n)),this.setBaseTarget(t,dt(i)?i.get():i)),dt(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=lf(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!dt(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class jv extends PA{constructor(){super(...arguments),this.KeyframeResolver=wy}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function MA(e){return window.getComputedStyle(e)}class TA extends jv{constructor(){super(...arguments),this.type="html",this.renderInstance=uv}readValueFromInstance(t,n){if(fi.has(n)){const r=vf(n);return r&&r.default||0}else{const r=MA(t),i=(ly(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Gy(t,n)}build(t,n,r){Of(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return zf(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;dt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class LA extends jv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$e}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(fi.has(n)){const r=vf(n);return r&&r.default||0}return n=hv.has(n)?n:Mf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return mv(t,n,r)}build(t,n,r){If(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){fv(t,n,r,i)}mount(t){this.isSVGTag=Ff(t.tagName),super.mount(t)}}const HA=(e,t)=>$f(e)?new LA(t):new TA(t,{allowProjection:e!==b.Fragment}),VA=kA({...jE,...BC,...VC,...WC},HA),W=wk(VA);class $A extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function zA({children:e,isPresent:t}){const n=b.useId(),r=b.useRef(null),i=b.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=b.useContext(Hf);return b.useInsertionEffect(()=>{const{width:s,height:l,top:c,left:u}=i.current;if(t||!r.current||!s||!l)return;r.current.dataset.motionPopId=n;const f=document.createElement("style");return a&&(f.nonce=a),document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[t]),o.jsx($A,{isPresent:t,childRef:r,sizeRef:i,children:b.cloneElement(e,{ref:r})})}const RA=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:s})=>{const l=Rf(DA),c=b.useId(),u=b.useCallback(p=>{l.set(p,!0);for(const m of l.values())if(!m)return;r&&r()},[l,r]),f=b.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(l.set(p,!1),()=>l.delete(p))}),a?[Math.random(),u]:[n,u]);return b.useMemo(()=>{l.forEach((p,m)=>l.set(m,!1))},[n]),b.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=o.jsx(zA,{isPresent:n,children:e})),o.jsx(S0.Provider,{value:f,children:e})};function DA(){return new Map}const _s=e=>e.key||"";function dg(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Wc=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:s="sync"})=>{const l=b.useMemo(()=>dg(e),[e]),c=l.map(_s),u=b.useRef(!0),f=b.useRef(l),p=Rf(()=>new Map),[m,y]=b.useState(l),[j,w]=b.useState(l);sv(()=>{u.current=!1,f.current=l;for(let g=0;g<j.length;g++){const v=_s(j[g]);c.includes(v)?p.delete(v):p.get(v)!==!0&&p.set(v,!1)}},[j,c.length,c.join("-")]);const C=[];if(l!==m){let g=[...l];for(let v=0;v<j.length;v++){const E=j[v],P=_s(E);c.includes(P)||(g.splice(v,0,E),C.push(E))}s==="wait"&&C.length&&(g=C),w(dg(g)),y(l);return}const{forceRender:x}=b.useContext(Tf);return o.jsx(o.Fragment,{children:j.map(g=>{const v=_s(g),E=l===j||c.includes(v),P=()=>{if(p.has(v))p.set(v,!0);else return;let T=!0;p.forEach(L=>{L||(T=!1)}),T&&(x==null||x(),w(f.current),i&&i())};return o.jsx(RA,{isPresent:E,initial:!u.current||r?void 0:!1,custom:E?void 0:n,presenceAffectsLayout:a,mode:s,onExitComplete:E?void 0:P,children:g},v)})})},OA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M252,124a60.14,60.14,0,0,0-32-53.08,52,52,0,0,0-92-32.11A52,52,0,0,0,36,70.92a60,60,0,0,0,0,106.14,52,52,0,0,0,92,32.13,52,52,0,0,0,92-32.13A60.05,60.05,0,0,0,252,124ZM88,204a28,28,0,0,1-26.85-20.07c1,0,1.89.07,2.85.07h8a12,12,0,0,0,0-24H64A36,36,0,0,1,52,90.05a12,12,0,0,0,8-11.32V72a28,28,0,0,1,56,0v60.18a51.61,51.61,0,0,0-7.2-3.85,12,12,0,1,0-9.6,22A28,28,0,0,1,88,204Zm104-44h-8a12,12,0,0,0,0,24h8c1,0,1.9,0,2.85-.07a28,28,0,1,1-38-33.61,12,12,0,1,0-9.6-22,51.61,51.61,0,0,0-7.2,3.85V72a28,28,0,0,1,56,0v6.73a12,12,0,0,0,8,11.32,36,36,0,0,1-12,70Zm16-44a12,12,0,0,1-12,12,40,40,0,0,1-40-40V84a12,12,0,0,1,24,0v4a16,16,0,0,0,16,16A12,12,0,0,1,208,116ZM100,88a40,40,0,0,1-40,40,12,12,0,0,1,0-24A16,16,0,0,0,76,88V84a12,12,0,0,1,24,0Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z",opacity:"0.2"}),h.createElement("path",{d:"M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16ZM88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M246,124a54.13,54.13,0,0,0-32-49.33V72a46,46,0,0,0-86-22.67A46,46,0,0,0,42,72v2.67a54,54,0,0,0,0,98.63V176a46,46,0,0,0,86,22.67A46,46,0,0,0,214,176v-2.7A54.07,54.07,0,0,0,246,124ZM88,210a34,34,0,0,1-34-32.94A53.67,53.67,0,0,0,64,178h8a6,6,0,0,0,0-12H64A42,42,0,0,1,50,84.39a6,6,0,0,0,4-5.66V72a34,34,0,0,1,68,0v73.05A45.89,45.89,0,0,0,88,130a6,6,0,0,0,0,12,34,34,0,0,1,0,68Zm104-44h-8a6,6,0,0,0,0,12h8a53.67,53.67,0,0,0,10-.94A34,34,0,1,1,168,142a6,6,0,0,0,0-12,45.89,45.89,0,0,0-34,15.05V72a34,34,0,0,1,68,0v6.73a6,6,0,0,0,4,5.66A42,42,0,0,1,192,166Zm14-54a6,6,0,0,1-6,6h-4a34,34,0,0,1-34-34V80a6,6,0,0,1,12,0v4a22,22,0,0,0,22,22h4A6,6,0,0,1,206,112ZM60,118H56a6,6,0,0,1,0-12h4A22,22,0,0,0,82,84V80a6,6,0,0,1,12,0v4A34,34,0,0,1,60,118Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244,124a52.1,52.1,0,0,0-32-48V72a44,44,0,0,0-84-18.3A44,44,0,0,0,44,72v4a52,52,0,0,0,0,96v4a44,44,0,0,0,84,18.3A44,44,0,0,0,212,176v-4A52.07,52.07,0,0,0,244,124ZM88,212a36,36,0,0,1-36-36v-1.41A52.13,52.13,0,0,0,64,176h8a4,4,0,0,0,0-8H64A44,44,0,0,1,49.33,82.5,4,4,0,0,0,52,78.73V72a36,36,0,0,1,72,0v78.75A44,44,0,0,0,88,132a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a52.13,52.13,0,0,0,12-1.41V176a36,36,0,1,1-36-36,4,4,0,0,0,0-8,44,44,0,0,0-36,18.75V72a36,36,0,0,1,72,0v6.73a4,4,0,0,0,2.67,3.77A44,44,0,0,1,192,168Zm12-56a4,4,0,0,1-4,4h-4a32,32,0,0,1-32-32V80a4,4,0,0,1,8,0v4a24,24,0,0,0,24,24h4A4,4,0,0,1,204,112ZM92,84a32,32,0,0,1-32,32H56a4,4,0,0,1,0-8h4A24,24,0,0,0,84,84V80a4,4,0,0,1,8,0Z"}))]]),IA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM80,76A12,12,0,0,1,92,64h72a12,12,0,0,1,0,24H92A12,12,0,0,1,80,76Zm40,52a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,128Zm-48,48a16,16,0,1,1-16-16A16,16,0,0,1,120,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,176Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,64v48H80V64Z",opacity:"0.2"}),h.createElement("path",{d:"M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM88,200a12,12,0,1,1,12-12A12,12,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,168,160Zm16-56a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,58H80a6,6,0,0,0-6,6v48a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V64A6,6,0,0,0,176,58Zm-6,48H86V70h84Zm30-80H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM98,148a10,10,0,1,1-10-10A10,10,0,0,1,98,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,148Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,148ZM98,188a10,10,0,1,1-10-10A10,10,0,0,1,98,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,138,188Zm40,0a10,10,0,1,1-10-10A10,10,0,0,1,178,188Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,60H80a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V64A4,4,0,0,0,176,60Zm-4,48H84V68h88Zm28-80H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM96,148a8,8,0,1,1-8-8A8,8,0,0,1,96,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,148Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,148ZM96,188a8,8,0,1,1-8-8A8,8,0,0,1,96,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,136,188Zm40,0a8,8,0,1,1-8-8A8,8,0,0,1,176,188Z"}))]]),FA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),h.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z"}))]]),ZA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M172,164a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,164Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-64V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM100.29,60h55.42a28,28,0,0,0-55.42,0ZM196,52H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z",opacity:"0.2"}),h.createElement("path",{d:"M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M166,152a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,152Zm-6-38H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm54-66V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V48A14,14,0,0,1,56,34H93.17a45.91,45.91,0,0,1,69.66,0H200A14,14,0,0,1,214,48ZM94,64v2h68V64a34,34,0,0,0-68,0ZM202,48a2,2,0,0,0-2-2H170.33A45.77,45.77,0,0,1,174,64v8a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V64a45.77,45.77,0,0,1,3.67-18H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M164,152a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,152Zm-4-36H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm52-68V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V48A12,12,0,0,1,56,36H94.08a44,44,0,0,1,67.84,0H200A12,12,0,0,1,212,48ZM92,64v4h72V64a36,36,0,0,0-72,0ZM204,48a4,4,0,0,0-4-4H167.17A43.71,43.71,0,0,1,172,64v8a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V64a43.71,43.71,0,0,1,4.83-20H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4Z"}))]]),_A=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),h.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),NA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196,35.52C177.62,25.51,153.48,20,128,20S78.38,25.51,60,35.52C39.37,46.79,28,62.58,28,80v96c0,17.42,11.37,33.21,32,44.48,18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52c20.66-11.27,32-27.06,32-44.48V80C228,62.58,216.63,46.79,196,35.52ZM204,128c0,17-31.21,36-76,36s-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94ZM128,44c44.79,0,76,19,76,36s-31.21,36-76,36S52,97,52,80,83.21,44,128,44Zm0,168c-44.79,0-76-19-76-36v-8.46a88.9,88.9,0,0,0,8,4.94c18.35,10,42.49,15.52,68,15.52s49.62-5.51,68-15.52a88.9,88.9,0,0,0,8-4.94V176C204,193,172.79,212,128,212Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192.14,42.55C174.94,33.17,152.16,28,128,28S81.06,33.17,63.86,42.55C45.89,52.35,36,65.65,36,80v96c0,14.35,9.89,27.65,27.86,37.45,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c18-9.8,27.86-23.1,27.86-37.45V80C220,65.65,210.11,52.35,192.14,42.55ZM212,176c0,11.29-8.41,22.1-23.69,30.43C172.27,215.18,150.85,220,128,220s-44.27-4.82-60.31-13.57C52.41,198.1,44,187.29,44,176V149.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm0-48c0,11.29-8.41,22.1-23.69,30.43C172.27,167.18,150.85,172,128,172s-44.27-4.82-60.31-13.57C52.41,150.1,44,139.29,44,128V101.48c4.69,5.93,11.37,11.34,19.86,16,17.2,9.38,40,14.55,64.14,14.55s46.94-5.17,64.14-14.55c8.49-4.63,15.17-10,19.86-16Zm-23.69-17.57C172.27,119.18,150.85,124,128,124s-44.27-4.82-60.31-13.57C52.41,102.1,44,91.29,44,80s8.41-22.1,23.69-30.43C83.73,40.82,105.15,36,128,36s44.27,4.82,60.31,13.57C203.59,57.9,212,68.71,212,80S203.59,102.1,188.31,110.43Z"}))]]),BA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,36H48A28,28,0,0,0,20,64V172a28,28,0,0,0,28,28h68v12H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24H140V200h68a28,28,0,0,0,28-28V64A28,28,0,0,0,208,36ZM48,60H208a4,4,0,0,1,4,4v72H44V64A4,4,0,0,1,48,60ZM208,176H48a4,4,0,0,1-4-4V160H212v12A4,4,0,0,1,208,176Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z",opacity:"0.2"}),h.createElement("path",{d:"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22h74v20H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V198h74a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42ZM48,54H208a10,10,0,0,1,10,10v82H38V64A10,10,0,0,1,48,54ZM208,186H48a10,10,0,0,1-10-10V158H218v18A10,10,0,0,1,208,186Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20h76v24H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V196h76a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44ZM48,52H208a12,12,0,0,1,12,12v84H36V64A12,12,0,0,1,48,52ZM208,188H48a12,12,0,0,1-12-12V156H220v20A12,12,0,0,1,208,188Z"}))]]),WA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,56l-96,88L32,56Z",opacity:"0.2"}),h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"}))]]),UA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"}))]]),qA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.49,59.51l-40-40A12,12,0,0,0,172,16H92A20,20,0,0,0,72,36V56H56A20,20,0,0,0,36,76V216a20,20,0,0,0,20,20H164a20,20,0,0,0,20-20V196h20a20,20,0,0,0,20-20V68A12,12,0,0,0,220.49,59.51ZM160,212H60V80h67l33,33Zm40-40H184V108a12,12,0,0,0-3.51-8.49l-40-40A12,12,0,0,0,132,56H96V40h71l33,33Zm-56-28a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h44A12,12,0,0,1,144,144Zm0,40a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h44A12,12,0,0,1,144,184Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,72V184a8,8,0,0,1-8,8H176V104L136,64H80V40a8,8,0,0,1,8-8h80Z",opacity:"0.2"}),h.createElement("path",{d:"M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M212.24,67.76l-40-40A6,6,0,0,0,168,26H88A14,14,0,0,0,74,40V58H56A14,14,0,0,0,42,72V216a14,14,0,0,0,14,14H168a14,14,0,0,0,14-14V198h18a14,14,0,0,0,14-14V72A6,6,0,0,0,212.24,67.76ZM170,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h77.51L170,106.49Zm32-32a2,2,0,0,1-2,2H182V104a6,6,0,0,0-1.76-4.24l-40-40A6,6,0,0,0,136,58H86V40a2,2,0,0,1,2-2h77.51L202,74.49Zm-60-32a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,152Zm0,32a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h48A6,6,0,0,1,142,184Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M210.83,69.17l-40-40A4,4,0,0,0,168,28H88A12,12,0,0,0,76,40V60H56A12,12,0,0,0,44,72V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V196h20a12,12,0,0,0,12-12V72A4,4,0,0,0,210.83,69.17ZM172,216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h78.34L172,105.66Zm32-32a4,4,0,0,1-4,4H180V104a4,4,0,0,0-1.17-2.83l-40-40A4,4,0,0,0,136,60H84V40a4,4,0,0,1,4-4h78.34L204,73.66Zm-64-32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,152Zm0,32a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h48A4,4,0,0,1,140,184Z"}))]]),GA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,52H180V44a28,28,0,0,0-28-28H104A28,28,0,0,0,76,44v8H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM100,44a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,196H44V76H212Zm-48-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V148H104a12,12,0,0,1,0-24h12V112a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,136Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,72V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z",opacity:"0.2"}),h.createElement("path",{d:"M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56Zm-64,88H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm8-88H96V48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,58H174V48a22,22,0,0,0-22-22H104A22,22,0,0,0,82,48V58H40A14,14,0,0,0,26,72V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V72A14,14,0,0,0,216,58ZM94,48a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V58H94ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Zm-60-64a6,6,0,0,1-6,6H134v18a6,6,0,0,1-12,0V142H104a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,158,136Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,60H172V48a20,20,0,0,0-20-20H104A20,20,0,0,0,84,48V60H40A12,12,0,0,0,28,72V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V72A12,12,0,0,0,216,60ZM92,48a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V60H92ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Zm-64-64a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V140H104a4,4,0,0,1,0-8h20V112a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,136Z"}))]]),KA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),h.createElement("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm78.36,64H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM216,128a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM128,43a115.27,115.27,0,0,1,26,45H102A115.11,115.11,0,0,1,128,43ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48Zm50.35,61.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z"}))]]),YA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h19.6A20,20,0,0,1,192,228H136a12,12,0,0,0,0,24h56a44.05,44.05,0,0,0,44-44V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm124,44V144a4,4,0,0,1,4-4h20v48H192A4,4,0,0,1,188,184Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M80,144v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128H64A16,16,0,0,1,80,144Zm112-16a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z",opacity:"0.2"}),h.createElement("path",{d:"M201.89,54.66A104.08,104.08,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200.47,56.07A101.37,101.37,0,0,0,128.77,26H128A102,102,0,0,0,26,128v56a22,22,0,0,0,22,22H64a22,22,0,0,0,22-22V144a22,22,0,0,0-22-22H38.2A90,90,0,0,1,128,38h.68a89.71,89.71,0,0,1,89.13,84H192a22,22,0,0,0-22,22v40a22,22,0,0,0,22,22h26v2a26,26,0,0,1-26,26H136a6,6,0,0,0,0,12h56a38,38,0,0,0,38-38V128A101.44,101.44,0,0,0,200.47,56.07ZM64,134a10,10,0,0,1,10,10v40a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V134Zm118,50V144a10,10,0,0,1,10-10h26v60H192A10,10,0,0,1,182,184Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M199.05,57.48A100.07,100.07,0,0,0,28,128v56a20,20,0,0,0,20,20H64a20,20,0,0,0,20-20V144a20,20,0,0,0-20-20H36.08A92,92,0,0,1,128,36h.7a91.75,91.75,0,0,1,91.22,88H192a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20h28v4a28,28,0,0,1-28,28H136a4,4,0,0,0,0,8h56a36,36,0,0,0,36-36V128A99.44,99.44,0,0,0,199.05,57.48ZM64,132a12,12,0,0,1,12,12v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V132Zm116,52V144a12,12,0,0,1,12-12h28v64H192A12,12,0,0,1,180,184Z"}))]]),QA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244,204h-4V128a20,20,0,0,0-20-20H172V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V204H32a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24Zm-28-72v72H172V132ZM60,52h88V204H136V160a12,12,0,0,0-12-12H84a12,12,0,0,0-12,12v44H60Zm52,152H96V172h16ZM72,96A12,12,0,0,1,84,84h8V76a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0v-8H84A12,12,0,0,1,72,96Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M160,48V216H128V160H80v56H48V48a8,8,0,0,1,8-8h96A8,8,0,0,1,160,48Z",opacity:"0.2"}),h.createElement("path",{d:"M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-120,0H80V160h48Zm0-104H112v16a8,8,0,0,1-16,0V104H80a8,8,0,0,1,0-16H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16Zm96,104H168V128h56Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,210H238V128a14,14,0,0,0-14-14H166V48a14,14,0,0,0-14-14H56A14,14,0,0,0,42,48V210H32a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12Zm-24-84a2,2,0,0,1,2,2v82H166V126ZM54,48a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2V210H134V160a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v50H54Zm68,162H86V166h36ZM74,96a6,6,0,0,1,6-6H98V72a6,6,0,0,1,12,0V90h18a6,6,0,0,1,0,12H110v18a6,6,0,0,1-12,0V102H80A6,6,0,0,1,74,96Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,212H236V128a12,12,0,0,0-12-12H164V48a12,12,0,0,0-12-12H56A12,12,0,0,0,44,48V212H32a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8Zm-24-88a4,4,0,0,1,4,4v84H164V124ZM52,48a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4V212H132V160a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v52H52Zm72,164H84V164h40ZM76,96a4,4,0,0,1,4-4h20V72a4,4,0,0,1,8,0V92h20a4,4,0,0,1,0,8H108v20a4,4,0,0,1-8,0V100H80A4,4,0,0,1,76,96Z"}))]]),XA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),h.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"}))]]),JA=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",opacity:"0.2"}),h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z"}))]]),eP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),h.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),tP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",opacity:"0.2"}),h.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z"}))]]),nP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M72,104a16,16,0,1,1,16,16A16,16,0,0,1,72,104Zm96,16a16,16,0,1,0-16-16A16,16,0,0,0,168,120Zm68-40V192a36,36,0,0,1-36,36H56a36,36,0,0,1-36-36V80A36,36,0,0,1,56,44h60V16a12,12,0,0,1,24,0V44h60A36,36,0,0,1,236,80Zm-24,0a12,12,0,0,0-12-12H56A12,12,0,0,0,44,80V192a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Zm-12,82a30,30,0,0,1-30,30H86a30,30,0,0,1,0-60h84A30,30,0,0,1,200,162Zm-80-6v12h16V156ZM86,168H96V156H86a6,6,0,0,0,0,12Zm90-6a6,6,0,0,0-6-6H160v12h10A6,6,0,0,0,176,162Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,56H56A24,24,0,0,0,32,80V192a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z",opacity:"0.2"}),h.createElement("path",{d:"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Zm4,28H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,50H134V16a6,6,0,0,0-12,0V50H56A30,30,0,0,0,26,80V192a30,30,0,0,0,30,30H200a30,30,0,0,0,30-30V80A30,30,0,0,0,200,50Zm18,142a18,18,0,0,1-18,18H56a18,18,0,0,1-18-18V80A18,18,0,0,1,56,62H200a18,18,0,0,1,18,18ZM74,108a10,10,0,1,1,10,10A10,10,0,0,1,74,108Zm88,0a10,10,0,1,1,10,10A10,10,0,0,1,162,108Zm2,30H92a26,26,0,0,0,0,52h72a26,26,0,0,0,0-52Zm-22,12v28H114V150ZM78,164a14,14,0,0,1,14-14h10v28H92A14,14,0,0,1,78,164Zm86,14H154V150h10a14,14,0,0,1,0,28Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,52H132V16a4,4,0,0,0-8,0V52H56A28,28,0,0,0,28,80V192a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V80A28,28,0,0,0,200,52Zm20,140a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V80A20,20,0,0,1,56,60H200a20,20,0,0,1,20,20ZM76,108a8,8,0,1,1,8,8A8,8,0,0,1,76,108Zm88,0a8,8,0,1,1,8,8A8,8,0,0,1,164,108Zm0,32H92a24,24,0,0,0,0,48h72a24,24,0,0,0,0-48Zm-20,8v32H112V148ZM76,164a16,16,0,0,1,16-16h12v32H92A16,16,0,0,1,76,164Zm88,16H152V148h12a16,16,0,0,1,0,32Z"}))]]),rP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M248,160a40,40,0,1,0-52.64,37.94A28,28,0,0,1,168,220H144a28,28,0,0,1-28-28V154.9c31.73-5.78,56-34.09,56-67.73V40a12,12,0,0,0-12-12H136a12,12,0,0,0,0,24h12V87.17c0,24.4-19.47,44.52-43.41,44.83A44,44,0,0,1,60,88V52H72a12,12,0,0,0,0-24H48A12,12,0,0,0,36,40V88a68,68,0,0,0,56,66.93V192a52.06,52.06,0,0,0,52,52h24a52.06,52.06,0,0,0,51.61-45.72A40.08,40.08,0,0,0,248,160Zm-40,16a16,16,0,1,1,16-16A16,16,0,0,1,208,176Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,160a32,32,0,1,1-32-32A32,32,0,0,1,240,160Z",opacity:"0.2"}),h.createElement("path",{d:"M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,160a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H144a32,32,0,0,1-32-32V151.48c31.47-4,56-31.47,56-64.31V40a8,8,0,0,0-8-8H136a8,8,0,0,0,0,16h16V87.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,56,88V48H72a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V88a64,64,0,0,0,56,63.49V192a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,240,160Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,208,168Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M218,160a10,10,0,1,1-10-10A10,10,0,0,1,218,160Zm-4.35,37.58A46.05,46.05,0,0,1,168,238H144a46.06,46.06,0,0,1-46-46V149.71A62,62,0,0,1,42,88V40a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H54V88a50,50,0,0,0,50,50h.67c27.2-.36,49.33-23.16,49.33-50.83V46H136a6,6,0,0,1,0-12h24a6,6,0,0,1,6,6V87.17c0,32.43-24.68,59.44-56,62.52V192a34,34,0,0,0,34,34h24a34.05,34.05,0,0,0,33.56-28.56,38,38,0,1,1,12.09.14ZM234,160a26,26,0,1,0-26,26A26,26,0,0,0,234,160Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,160a8,8,0,1,1-8-8A8,8,0,0,1,216,160Zm-4.17,35.79A44.06,44.06,0,0,1,168,236H144a44.05,44.05,0,0,1-44-44V147.85A60,60,0,0,1,44,88V40a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H52V88a52,52,0,0,0,52.69,52C133,139.63,156,115.93,156,87.17V44H136a4,4,0,0,1,0-8h24a4,4,0,0,1,4,4V87.17c0,32-24.84,58.59-56,60.69V192a36,36,0,0,0,36,36h24a36.05,36.05,0,0,0,35.8-32.25,36,36,0,1,1,8,0ZM236,160a28,28,0,1,0-28,28A28,28,0,0,0,236,160Z"}))]]),iP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240.49,63.51l-48-48a12,12,0,0,0-17,17L191,48,168,71,136.49,39.51a12,12,0,1,0-17,17L123,60,41.86,141.17A19.86,19.86,0,0,0,36,155.31V203L15.51,223.51a12,12,0,0,0,17,17L53,220h47.72a19.86,19.86,0,0,0,14.14-5.86L196,133l3.51,3.52a12,12,0,0,0,17-17L185,88l23-23,15.51,15.52a12,12,0,1,0,17-17ZM99,196H60V157l14-14,17.51,17.52a12,12,0,0,0,17-17L91,126l11-11,17.51,17.52a12,12,0,0,0,17-17L119,98l21-21,39,39Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M196,116l-89.66,89.66a8,8,0,0,1-5.65,2.34H48V155.31a8,8,0,0,1,2.34-5.65L140,60Z",opacity:"0.2"}),h.createElement("path",{d:"M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M237.66,77.6a8,8,0,0,1-11.32,0L208,59.25,179.3,88l34.35,34.35a8,8,0,0,1-11.32,11.32L196,127.27l-84,84A16,16,0,0,1,100.65,216H51.26L29.6,237.66a8,8,0,0,1-11.72-.43,8.21,8.21,0,0,1,.61-11.1l21.45-21.46V155.28A16,16,0,0,1,44.63,144l15.18-15.18a4,4,0,0,1,5.66,0L94.3,157.63a8,8,0,1,0,11.32-11.32L76.78,117.47a4,4,0,0,1,0-5.66l11-11a4,4,0,0,1,5.66,0l28.84,28.84a8,8,0,1,0,11.32-11.32L104.79,89.46a4,4,0,0,1,0-5.66l23.87-23.86-6.35-6.35a8,8,0,0,1,.18-11.49,8.22,8.22,0,0,1,11.37.41L168,76.63l28.69-28.7L178.33,29.58a8,8,0,0,1,.17-11.49,8.23,8.23,0,0,1,11.38.41l47.78,47.78A8,8,0,0,1,237.66,77.6Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236.24,67.76l-48-48a6,6,0,0,0-8.48,8.48L199.51,48,168,79.51,132.24,43.76a6,6,0,1,0-8.48,8.48L131.51,60,46.1,145.41a13.94,13.94,0,0,0-4.1,9.9v50.2L19.76,227.76a6,6,0,1,0,8.48,8.48L50.49,214h50.2a13.94,13.94,0,0,0,9.9-4.1L196,124.49l7.76,7.75a6,6,0,0,0,8.48-8.48L176.49,88,208,56.49l19.76,19.75a6,6,0,0,0,8.48-8.48ZM102.1,201.41a2,2,0,0,1-1.41.59H54V155.31a2,2,0,0,1,.59-1.41L74,134.49l21.76,21.75a6,6,0,1,0,8.48-8.48L82.49,126,98,110.49l21.76,21.75a6,6,0,0,0,8.48-8.48L106.49,102,140,68.49,187.51,116Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M237.66,66.34l-48-48a8,8,0,0,0-11.32,11.32L196.69,48,168,76.69,133.66,42.34a8,8,0,0,0-11.32,11.32L128.69,60l-84,84A15.86,15.86,0,0,0,40,155.31v49.38L18.34,226.34a8,8,0,0,0,11.32,11.32L51.31,216h49.38A15.86,15.86,0,0,0,112,211.31l84-84,6.34,6.35a8,8,0,0,0,11.32-11.32L179.31,88,208,59.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM100.69,200H56V155.31l18-18,20.34,20.35a8,8,0,0,0,11.32-11.32L85.31,126,98,113.31l20.34,20.35a8,8,0,0,0,11.32-11.32L109.31,102,140,71.31,184.69,116Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.83,69.17l-48-48a4,4,0,0,0-5.66,5.66L202.34,48,168,82.34,130.83,45.17a4,4,0,1,0-5.66,5.66L134.34,60,47.51,146.83A12,12,0,0,0,44,155.31v51L21.17,229.17a4,4,0,0,0,5.66,5.66L49.66,212h51a11.93,11.93,0,0,0,8.48-3.51L196,121.66l9.17,9.17a4,4,0,0,0,5.66-5.66L173.66,88,208,53.66l21.17,21.17a4,4,0,1,0,5.66-5.66ZM103.51,202.83a4,4,0,0,1-2.82,1.17H52V155.31a4,4,0,0,1,1.17-2.82L74,131.66l23.17,23.17a4,4,0,1,0,5.66-5.66L79.66,126,98,107.66l23.17,23.17a4,4,0,0,0,5.66-5.66L103.66,102,140,65.66l25.17,25.17h0L190.34,116Z"}))]]),oP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56v64L168,56Z",opacity:"0.2"}),h.createElement("path",{d:"M232,48H168a8,8,0,0,0-5.66,13.66L188.69,88,136,140.69l-34.34-34.35a8,8,0,0,0-11.32,0l-72,72a8,8,0,0,0,11.32,11.32L96,123.31l34.34,34.35a8,8,0,0,0,11.32,0L200,99.31l26.34,26.35A8,8,0,0,0,240,120V56A8,8,0,0,0,232,48Zm-8,52.69L187.31,64H224Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M240,56v64a8,8,0,0,1-16,0V75.31l-82.34,82.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,212.69,64H168a8,8,0,0,1,0-16h64A8,8,0,0,1,240,56Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"}))]]),aP=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M125.18,156.94a64,64,0,1,0-82.36,0,100.23,100.23,0,0,0-39.49,32,12,12,0,0,0,19.35,14.2,76,76,0,0,1,122.64,0,12,12,0,0,0,19.36-14.2A100.33,100.33,0,0,0,125.18,156.94ZM44,108a40,40,0,1,1,40,40A40,40,0,0,1,44,108Zm206.1,97.67a12,12,0,0,1-16.78-2.57A76.31,76.31,0,0,0,172,172a12,12,0,0,1,0-24,40,40,0,1,0-10.3-78.67,12,12,0,1,1-6.16-23.19,64,64,0,0,1,57.64,110.8,100.23,100.23,0,0,1,39.49,32A12,12,0,0,1,250.1,205.67Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M136,108A52,52,0,1,1,84,56,52,52,0,0,1,136,108Z",opacity:"0.2"}),h.createElement("path",{d:"M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M112.6,158.43a58,58,0,1,0-57.2,0A93.83,93.83,0,0,0,5.21,196.72a6,6,0,0,0,10.05,6.56,82,82,0,0,1,137.48,0,6,6,0,0,0,10-6.56A93.83,93.83,0,0,0,112.6,158.43ZM38,108a46,46,0,1,1,46,46A46.06,46.06,0,0,1,38,108Zm211,97a6,6,0,0,1-8.3-1.74A81.8,81.8,0,0,0,172,166a6,6,0,0,1,0-12,46,46,0,1,0-17.08-88.73,6,6,0,1,1-4.46-11.14,58,58,0,0,1,50.14,104.3,93.83,93.83,0,0,1,50.19,38.29A6,6,0,0,1,249,205Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M107.19,159a56,56,0,1,0-46.38,0A91.83,91.83,0,0,0,6.88,197.81a4,4,0,1,0,6.7,4.37,84,84,0,0,1,140.84,0,4,4,0,1,0,6.7-4.37A91.83,91.83,0,0,0,107.19,159ZM36,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,36,108Zm212,95.35a4,4,0,0,1-5.53-1.17A83.81,83.81,0,0,0,172,164a4,4,0,0,1,0-8,48,48,0,1,0-17.82-92.58,4,4,0,1,1-3-7.43,56,56,0,0,1,44,103,91.83,91.83,0,0,1,53.93,38.86A4,4,0,0,1,248,203.35Z"}))]]),sP=b.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var lP=Object.defineProperty,Uc=Object.getOwnPropertySymbols,kv=Object.prototype.hasOwnProperty,Sv=Object.prototype.propertyIsEnumerable,ug=(e,t,n)=>t in e?lP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hg=(e,t)=>{for(var n in t||(t={}))kv.call(t,n)&&ug(e,n,t[n]);if(Uc)for(var n of Uc(t))Sv.call(t,n)&&ug(e,n,t[n]);return e},fg=(e,t)=>{var n={};for(var r in e)kv.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Uc)for(var r of Uc(e))t.indexOf(r)<0&&Sv.call(e,r)&&(n[r]=e[r]);return n};const Ev=b.forwardRef((e,t)=>{const n=e,{alt:r,color:i,size:a,weight:s,mirrored:l,children:c,weights:u}=n,f=fg(n,["alt","color","size","weight","mirrored","children","weights"]),p=b.useContext(sP),{color:m="currentColor",size:y,weight:j="regular",mirrored:w=!1}=p,C=fg(p,["color","size","weight","mirrored"]);return h.createElement("svg",hg(hg({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a??y,height:a??y,fill:i??m,viewBox:"0 0 256 256",transform:l||w?"scale(-1, 1)":void 0},C),f),!!r&&h.createElement("title",null,r),c,u.get(s??j))});Ev.displayName="IconBase";const Me=Ev;var cP=Object.defineProperty,dP=Object.defineProperties,uP=Object.getOwnPropertyDescriptors,pg=Object.getOwnPropertySymbols,hP=Object.prototype.hasOwnProperty,fP=Object.prototype.propertyIsEnumerable,mg=(e,t,n)=>t in e?cP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pP=(e,t)=>{for(var n in t||(t={}))hP.call(t,n)&&mg(e,n,t[n]);if(pg)for(var n of pg(t))fP.call(t,n)&&mg(e,n,t[n]);return e},mP=(e,t)=>dP(e,uP(t));const Cv=b.forwardRef((e,t)=>h.createElement(Me,mP(pP({ref:t},e),{weights:OA})));Cv.displayName="Brain";var gP=Object.defineProperty,xP=Object.defineProperties,yP=Object.getOwnPropertyDescriptors,gg=Object.getOwnPropertySymbols,vP=Object.prototype.hasOwnProperty,wP=Object.prototype.propertyIsEnumerable,xg=(e,t,n)=>t in e?gP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bP=(e,t)=>{for(var n in t||(t={}))vP.call(t,n)&&xg(e,n,t[n]);if(gg)for(var n of gg(t))wP.call(t,n)&&xg(e,n,t[n]);return e},jP=(e,t)=>xP(e,yP(t));const Av=b.forwardRef((e,t)=>h.createElement(Me,jP(bP({ref:t},e),{weights:IA})));Av.displayName="Calculator";var kP=Object.defineProperty,SP=Object.defineProperties,EP=Object.getOwnPropertyDescriptors,yg=Object.getOwnPropertySymbols,CP=Object.prototype.hasOwnProperty,AP=Object.prototype.propertyIsEnumerable,vg=(e,t,n)=>t in e?kP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,PP=(e,t)=>{for(var n in t||(t={}))CP.call(t,n)&&vg(e,n,t[n]);if(yg)for(var n of yg(t))AP.call(t,n)&&vg(e,n,t[n]);return e},MP=(e,t)=>SP(e,EP(t));const Pv=b.forwardRef((e,t)=>h.createElement(Me,MP(PP({ref:t},e),{weights:FA})));Pv.displayName="Calendar";var TP=Object.defineProperty,LP=Object.defineProperties,HP=Object.getOwnPropertyDescriptors,wg=Object.getOwnPropertySymbols,VP=Object.prototype.hasOwnProperty,$P=Object.prototype.propertyIsEnumerable,bg=(e,t,n)=>t in e?TP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zP=(e,t)=>{for(var n in t||(t={}))VP.call(t,n)&&bg(e,n,t[n]);if(wg)for(var n of wg(t))$P.call(t,n)&&bg(e,n,t[n]);return e},RP=(e,t)=>LP(e,HP(t));const rc=b.forwardRef((e,t)=>h.createElement(Me,RP(zP({ref:t},e),{weights:ZA})));rc.displayName="ClipboardText";var DP=Object.defineProperty,OP=Object.defineProperties,IP=Object.getOwnPropertyDescriptors,jg=Object.getOwnPropertySymbols,FP=Object.prototype.hasOwnProperty,ZP=Object.prototype.propertyIsEnumerable,kg=(e,t,n)=>t in e?DP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_P=(e,t)=>{for(var n in t||(t={}))FP.call(t,n)&&kg(e,n,t[n]);if(jg)for(var n of jg(t))ZP.call(t,n)&&kg(e,n,t[n]);return e},NP=(e,t)=>OP(e,IP(t));const Mv=b.forwardRef((e,t)=>h.createElement(Me,NP(_P({ref:t},e),{weights:_A})));Mv.displayName="Code";var BP=Object.defineProperty,WP=Object.defineProperties,UP=Object.getOwnPropertyDescriptors,Sg=Object.getOwnPropertySymbols,qP=Object.prototype.hasOwnProperty,GP=Object.prototype.propertyIsEnumerable,Eg=(e,t,n)=>t in e?BP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,KP=(e,t)=>{for(var n in t||(t={}))qP.call(t,n)&&Eg(e,n,t[n]);if(Sg)for(var n of Sg(t))GP.call(t,n)&&Eg(e,n,t[n]);return e},YP=(e,t)=>WP(e,UP(t));const U1=b.forwardRef((e,t)=>h.createElement(Me,YP(KP({ref:t},e),{weights:NA})));U1.displayName="Database";var QP=Object.defineProperty,XP=Object.defineProperties,JP=Object.getOwnPropertyDescriptors,Cg=Object.getOwnPropertySymbols,eM=Object.prototype.hasOwnProperty,tM=Object.prototype.propertyIsEnumerable,Ag=(e,t,n)=>t in e?QP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nM=(e,t)=>{for(var n in t||(t={}))eM.call(t,n)&&Ag(e,n,t[n]);if(Cg)for(var n of Cg(t))tM.call(t,n)&&Ag(e,n,t[n]);return e},rM=(e,t)=>XP(e,JP(t));const q1=b.forwardRef((e,t)=>h.createElement(Me,rM(nM({ref:t},e),{weights:BA})));q1.displayName="Desktop";var iM=Object.defineProperty,oM=Object.defineProperties,aM=Object.getOwnPropertyDescriptors,Pg=Object.getOwnPropertySymbols,sM=Object.prototype.hasOwnProperty,lM=Object.prototype.propertyIsEnumerable,Mg=(e,t,n)=>t in e?iM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cM=(e,t)=>{for(var n in t||(t={}))sM.call(t,n)&&Mg(e,n,t[n]);if(Pg)for(var n of Pg(t))lM.call(t,n)&&Mg(e,n,t[n]);return e},dM=(e,t)=>oM(e,aM(t));const Tv=b.forwardRef((e,t)=>h.createElement(Me,dM(cM({ref:t},e),{weights:WA})));Tv.displayName="EnvelopeSimple";var uM=Object.defineProperty,hM=Object.defineProperties,fM=Object.getOwnPropertyDescriptors,Tg=Object.getOwnPropertySymbols,pM=Object.prototype.hasOwnProperty,mM=Object.prototype.propertyIsEnumerable,Lg=(e,t,n)=>t in e?uM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gM=(e,t)=>{for(var n in t||(t={}))pM.call(t,n)&&Lg(e,n,t[n]);if(Tg)for(var n of Tg(t))mM.call(t,n)&&Lg(e,n,t[n]);return e},xM=(e,t)=>hM(e,fM(t));const Lv=b.forwardRef((e,t)=>h.createElement(Me,xM(gM({ref:t},e),{weights:UA})));Lv.displayName="FacebookLogo";var yM=Object.defineProperty,vM=Object.defineProperties,wM=Object.getOwnPropertyDescriptors,Hg=Object.getOwnPropertySymbols,bM=Object.prototype.hasOwnProperty,jM=Object.prototype.propertyIsEnumerable,Vg=(e,t,n)=>t in e?yM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kM=(e,t)=>{for(var n in t||(t={}))bM.call(t,n)&&Vg(e,n,t[n]);if(Hg)for(var n of Hg(t))jM.call(t,n)&&Vg(e,n,t[n]);return e},SM=(e,t)=>vM(e,wM(t));const Hv=b.forwardRef((e,t)=>h.createElement(Me,SM(kM({ref:t},e),{weights:qA})));Hv.displayName="Files";var EM=Object.defineProperty,CM=Object.defineProperties,AM=Object.getOwnPropertyDescriptors,$g=Object.getOwnPropertySymbols,PM=Object.prototype.hasOwnProperty,MM=Object.prototype.propertyIsEnumerable,zg=(e,t,n)=>t in e?EM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,TM=(e,t)=>{for(var n in t||(t={}))PM.call(t,n)&&zg(e,n,t[n]);if($g)for(var n of $g(t))MM.call(t,n)&&zg(e,n,t[n]);return e},LM=(e,t)=>CM(e,AM(t));const Vv=b.forwardRef((e,t)=>h.createElement(Me,LM(TM({ref:t},e),{weights:GA})));Vv.displayName="FirstAidKit";var HM=Object.defineProperty,VM=Object.defineProperties,$M=Object.getOwnPropertyDescriptors,Rg=Object.getOwnPropertySymbols,zM=Object.prototype.hasOwnProperty,RM=Object.prototype.propertyIsEnumerable,Dg=(e,t,n)=>t in e?HM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,DM=(e,t)=>{for(var n in t||(t={}))zM.call(t,n)&&Dg(e,n,t[n]);if(Rg)for(var n of Rg(t))RM.call(t,n)&&Dg(e,n,t[n]);return e},OM=(e,t)=>VM(e,$M(t));const $v=b.forwardRef((e,t)=>h.createElement(Me,OM(DM({ref:t},e),{weights:KA})));$v.displayName="Globe";var IM=Object.defineProperty,FM=Object.defineProperties,ZM=Object.getOwnPropertyDescriptors,Og=Object.getOwnPropertySymbols,_M=Object.prototype.hasOwnProperty,NM=Object.prototype.propertyIsEnumerable,Ig=(e,t,n)=>t in e?IM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,BM=(e,t)=>{for(var n in t||(t={}))_M.call(t,n)&&Ig(e,n,t[n]);if(Og)for(var n of Og(t))NM.call(t,n)&&Ig(e,n,t[n]);return e},WM=(e,t)=>FM(e,ZM(t));const zv=b.forwardRef((e,t)=>h.createElement(Me,WM(BM({ref:t},e),{weights:YA})));zv.displayName="Headset";var UM=Object.defineProperty,qM=Object.defineProperties,GM=Object.getOwnPropertyDescriptors,Fg=Object.getOwnPropertySymbols,KM=Object.prototype.hasOwnProperty,YM=Object.prototype.propertyIsEnumerable,Zg=(e,t,n)=>t in e?UM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,QM=(e,t)=>{for(var n in t||(t={}))KM.call(t,n)&&Zg(e,n,t[n]);if(Fg)for(var n of Fg(t))YM.call(t,n)&&Zg(e,n,t[n]);return e},XM=(e,t)=>qM(e,GM(t));const Rv=b.forwardRef((e,t)=>h.createElement(Me,XM(QM({ref:t},e),{weights:QA})));Rv.displayName="Hospital";var JM=Object.defineProperty,eT=Object.defineProperties,tT=Object.getOwnPropertyDescriptors,_g=Object.getOwnPropertySymbols,nT=Object.prototype.hasOwnProperty,rT=Object.prototype.propertyIsEnumerable,Ng=(e,t,n)=>t in e?JM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,iT=(e,t)=>{for(var n in t||(t={}))nT.call(t,n)&&Ng(e,n,t[n]);if(_g)for(var n of _g(t))rT.call(t,n)&&Ng(e,n,t[n]);return e},oT=(e,t)=>eT(e,tT(t));const Dv=b.forwardRef((e,t)=>h.createElement(Me,oT(iT({ref:t},e),{weights:XA})));Dv.displayName="InstagramLogo";var aT=Object.defineProperty,sT=Object.defineProperties,lT=Object.getOwnPropertyDescriptors,Bg=Object.getOwnPropertySymbols,cT=Object.prototype.hasOwnProperty,dT=Object.prototype.propertyIsEnumerable,Wg=(e,t,n)=>t in e?aT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,uT=(e,t)=>{for(var n in t||(t={}))cT.call(t,n)&&Wg(e,n,t[n]);if(Bg)for(var n of Bg(t))dT.call(t,n)&&Wg(e,n,t[n]);return e},hT=(e,t)=>sT(e,lT(t));const Ov=b.forwardRef((e,t)=>h.createElement(Me,hT(uT({ref:t},e),{weights:JA})));Ov.displayName="LinkedinLogo";var fT=Object.defineProperty,pT=Object.defineProperties,mT=Object.getOwnPropertyDescriptors,Ug=Object.getOwnPropertySymbols,gT=Object.prototype.hasOwnProperty,xT=Object.prototype.propertyIsEnumerable,qg=(e,t,n)=>t in e?fT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yT=(e,t)=>{for(var n in t||(t={}))gT.call(t,n)&&qg(e,n,t[n]);if(Ug)for(var n of Ug(t))xT.call(t,n)&&qg(e,n,t[n]);return e},vT=(e,t)=>pT(e,mT(t));const G1=b.forwardRef((e,t)=>h.createElement(Me,vT(yT({ref:t},e),{weights:eP})));G1.displayName="MagnifyingGlass";var wT=Object.defineProperty,bT=Object.defineProperties,jT=Object.getOwnPropertyDescriptors,Gg=Object.getOwnPropertySymbols,kT=Object.prototype.hasOwnProperty,ST=Object.prototype.propertyIsEnumerable,Kg=(e,t,n)=>t in e?wT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ET=(e,t)=>{for(var n in t||(t={}))kT.call(t,n)&&Kg(e,n,t[n]);if(Gg)for(var n of Gg(t))ST.call(t,n)&&Kg(e,n,t[n]);return e},CT=(e,t)=>bT(e,jT(t));const Iv=b.forwardRef((e,t)=>h.createElement(Me,CT(ET({ref:t},e),{weights:tP})));Iv.displayName="Phone";var AT=Object.defineProperty,PT=Object.defineProperties,MT=Object.getOwnPropertyDescriptors,Yg=Object.getOwnPropertySymbols,TT=Object.prototype.hasOwnProperty,LT=Object.prototype.propertyIsEnumerable,Qg=(e,t,n)=>t in e?AT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,HT=(e,t)=>{for(var n in t||(t={}))TT.call(t,n)&&Qg(e,n,t[n]);if(Yg)for(var n of Yg(t))LT.call(t,n)&&Qg(e,n,t[n]);return e},VT=(e,t)=>PT(e,MT(t));const Fv=b.forwardRef((e,t)=>h.createElement(Me,VT(HT({ref:t},e),{weights:nP})));Fv.displayName="Robot";var $T=Object.defineProperty,zT=Object.defineProperties,RT=Object.getOwnPropertyDescriptors,Xg=Object.getOwnPropertySymbols,DT=Object.prototype.hasOwnProperty,OT=Object.prototype.propertyIsEnumerable,Jg=(e,t,n)=>t in e?$T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,IT=(e,t)=>{for(var n in t||(t={}))DT.call(t,n)&&Jg(e,n,t[n]);if(Xg)for(var n of Xg(t))OT.call(t,n)&&Jg(e,n,t[n]);return e},FT=(e,t)=>zT(e,RT(t));const Zv=b.forwardRef((e,t)=>h.createElement(Me,FT(IT({ref:t},e),{weights:rP})));Zv.displayName="Stethoscope";var ZT=Object.defineProperty,_T=Object.defineProperties,NT=Object.getOwnPropertyDescriptors,e4=Object.getOwnPropertySymbols,BT=Object.prototype.hasOwnProperty,WT=Object.prototype.propertyIsEnumerable,t4=(e,t,n)=>t in e?ZT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,UT=(e,t)=>{for(var n in t||(t={}))BT.call(t,n)&&t4(e,n,t[n]);if(e4)for(var n of e4(t))WT.call(t,n)&&t4(e,n,t[n]);return e},qT=(e,t)=>_T(e,NT(t));const _v=b.forwardRef((e,t)=>h.createElement(Me,qT(UT({ref:t},e),{weights:iP})));_v.displayName="Syringe";var GT=Object.defineProperty,KT=Object.defineProperties,YT=Object.getOwnPropertyDescriptors,n4=Object.getOwnPropertySymbols,QT=Object.prototype.hasOwnProperty,XT=Object.prototype.propertyIsEnumerable,r4=(e,t,n)=>t in e?GT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,JT=(e,t)=>{for(var n in t||(t={}))QT.call(t,n)&&r4(e,n,t[n]);if(n4)for(var n of n4(t))XT.call(t,n)&&r4(e,n,t[n]);return e},eL=(e,t)=>KT(e,YT(t));const Nv=b.forwardRef((e,t)=>h.createElement(Me,eL(JT({ref:t},e),{weights:oP})));Nv.displayName="TrendUp";var tL=Object.defineProperty,nL=Object.defineProperties,rL=Object.getOwnPropertyDescriptors,i4=Object.getOwnPropertySymbols,iL=Object.prototype.hasOwnProperty,oL=Object.prototype.propertyIsEnumerable,o4=(e,t,n)=>t in e?tL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,aL=(e,t)=>{for(var n in t||(t={}))iL.call(t,n)&&o4(e,n,t[n]);if(i4)for(var n of i4(t))oL.call(t,n)&&o4(e,n,t[n]);return e},sL=(e,t)=>nL(e,rL(t));const Bv=b.forwardRef((e,t)=>h.createElement(Me,sL(aL({ref:t},e),{weights:aP})));Bv.displayName="Users";var Wv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a4=h.createContext&&h.createContext(Wv),lL=["attr","size","title"];function cL(e,t){if(e==null)return{};var n=dL(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dL(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function qc(){return qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qc.apply(this,arguments)}function s4(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?s4(Object(n),!0).forEach(function(r){uL(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s4(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uL(e,t,n){return t=hL(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hL(e){var t=fL(e,"string");return typeof t=="symbol"?t:t+""}function fL(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uv(e){return e&&e.map((t,n)=>h.createElement(t.tag,Gc({key:n},t.attr),Uv(t.child)))}function pL(e){return t=>h.createElement(mL,qc({attr:Gc({},e.attr)},t),Uv(e.child))}function mL(e){var t=n=>{var{attr:r,size:i,title:a}=e,s=cL(e,lL),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),h.createElement("svg",qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:Gc(Gc({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&h.createElement("title",null,a),e.children)};return a4!==void 0?h.createElement(a4.Consumer,null,n=>t(n)):t(Wv)}function qv(e){return pL({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}const ft=({isOpen:e,setIsOpen:t})=>{const[n,r]=b.useState(!1),i=b.useRef(null),a=window.innerWidth<=600,s=()=>{i.current&&clearTimeout(i.current),r(!0)},l=()=>{i.current=setTimeout(()=>{r(!1)},300)};b.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const c={closed:{x:"100%",transition:{type:"spring",stiffness:400,damping:40}},open:{x:0,transition:{type:"spring",stiffness:400,damping:40,staggerChildren:.1}}},u={closed:{x:20,opacity:0},open:{x:0,opacity:1}},f={closed:{x:"100%",opacity:0,transition:{type:"spring",stiffness:400,damping:40}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:400,damping:40,staggerChildren:.1}}},p={closed:{x:"-100%",opacity:0,transition:{type:"spring",stiffness:400,damping:40}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:400,damping:40,staggerChildren:.1}}},m=[{to:"/logistics",text:"Logistics"},{to:"/general-services",text:"General Services"},{to:"/administrative-support",text:"Administrative Support"},{to:"/healthcare",text:"Healthcare"},{to:"/marketing",text:"Marketing"},{to:"/web-design",text:"Web Design"},{to:"/3d-animation",text:"3D Animation"}];return o.jsx(gL,{children:o.jsx(Wc,{children:e&&o.jsxs(o.Fragment,{children:[o.jsx(wL,{as:W.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1)}),o.jsxs(bL,{as:W.div,variants:c,initial:"closed",animate:"open",exit:"closed",children:[o.jsx(jL,{as:W.button,whileHover:{scale:1.1},whileTap:{scale:.95},onClick:()=>t(!1),children:"×"}),o.jsx(kL,{children:[{to:"/about",text:"ABOUT US"},{to:"/services",text:"SERVICES"},{to:"#",text:"INDUSTRIES",hasSubmenu:!0},{to:"/contact",text:"CONTACT US"},{to:"/faq",text:"FAQ"}].map((y,j)=>o.jsx(Gv,{as:W.div,variants:u,onMouseEnter:()=>y.hasSubmenu&&s(),onMouseLeave:()=>y.hasSubmenu&&l(),children:o.jsx(Hc,{to:y.to,onClick:()=>{y.hasSubmenu||t(!1)},children:y.text})},j))}),o.jsxs(xL,{as:W.div,variants:u,children:[o.jsx(yL,{children:"Contact Us"}),o.jsxs(l4,{href:"mailto:info@hyacinthindustriesllc.com",children:[o.jsx(Tv,{size:16,weight:"regular"}),"info@hyacinthindustriesllc.com"]}),o.jsxs(l4,{href:"tel:+18132133276",children:[o.jsx(Iv,{size:16,weight:"regular"}),"+1 (813) 213-3276"]}),o.jsxs(vL,{children:[o.jsx(Ns,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer",children:o.jsx(Lv,{size:18,weight:"regular"})}),o.jsx(Ns,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer",children:o.jsx(Dv,{size:18,weight:"regular"})}),o.jsx(Ns,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer",children:o.jsx(Ov,{size:18,weight:"regular"})}),o.jsx(Ns,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer",children:o.jsx(qv,{size:18})})]})]}),o.jsx(Wc,{mode:"wait",children:n&&o.jsxs(SL,{as:W.div,variants:a?p:f,initial:"closed",animate:"open",exit:"closed",onMouseEnter:s,onMouseLeave:l,children:[o.jsx(EL,{children:"Industries"}),m.map((y,j)=>o.jsx(CL,{as:W.div,variants:u,onClick:()=>{r(!1),t(!1)},children:o.jsx(Hc,{to:y.to,children:y.text})},j))]})})]})]})})})},gL=d.div`
  position: relative;
  z-index: 1000;
`,xL=d.div`
  margin-top: auto;
  padding: 1.25rem 0.75rem 0.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,yL=d.h4`
  margin: 0 0 0.5rem 0;
  color: #f8f8f8;
  font-size: 1.1rem;
  font-weight: 600;
`,l4=d.a`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #f8f8f8;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;
  
  &:hover {
    color: #ff6b35;
  }
  
  svg {
    color: #ff6b35;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`,vL=d.div`
  display: flex;
  gap: 0.85rem;
  margin-top: 0.85rem;
  flex-wrap: wrap;
`,Ns=d.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #ff6b35;
    transform: translateY(-2px);
  }
`,wL=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`,bL=d(W.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 88vw);
  height: 100vh;
  background: linear-gradient(180deg, #1b1b1b, #171717);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1.25rem 1.25rem;
  z-index: 1001;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,jL=d.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.35rem;
  line-height: 1;
`,kL=d.div`
  margin-top: 4.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Gv=d.div`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    transition: color 0.3s ease;
    padding: 0.45rem 0.75rem;
    border-radius: 8px;
    display: block;
    
    &:hover {
      color: #ccc;
    }
  }
`,SL=d(W.div)`
  position: absolute;
  top: 0;
  right: 300px;
  width: 320px;
  height: 100vh;
  background: #1a1a1a;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 20px;
    height: 100%;
    background: transparent;
  }

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    right: auto;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    z-index: 999;

    &::before {
      display: none;
    }
  }
`,EL=d.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`,CL=d(Gv)`
  margin: 0.5rem 0;
  white-space: nowrap;
  
  a {
    font-size: 1rem;
    color: #ccc;
    
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    margin: 0.7rem 0;
    
    a {
      font-size: 0.95rem;
    }
  }
`;function jt(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,a]=b.useState(!1),s=window.location.pathname;b.useEffect(()=>{const u=()=>{r(window.innerWidth<=1024)};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)}},[]);const l=[{to:"/logistics",text:"Logistics"},{to:"/general-services",text:"General Services"},{to:"/administrative-support",text:"Administrative Support"},{to:"/healthcare",text:"Healthcare"},{to:"/marketing",text:"Marketing"},{to:"/web-design",text:"Web Design"},{to:"/3d-animation",text:"3D Animation"}],c=l.some(u=>s===u.to);return o.jsxs(AL,{children:[!n&&o.jsxs(HL,{children:[o.jsxs($L,{children:[o.jsxs(c4,{href:"mailto:info@hyacinthindustriesllc.com",children:[o.jsx(sf,{size:16}),"info@hyacinthindustriesllc.com"]}),o.jsxs(c4,{href:"tel:+18132133276",children:[o.jsx(U6,{size:16}),"+1 (813) 213-3276"]})]}),o.jsxs(zL,{children:[o.jsx(Bs,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer",children:o.jsx(B9,{size:20})}),o.jsx(Bs,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer",children:o.jsx(Q9,{size:20})}),o.jsx(Bs,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer",children:o.jsx(ek,{size:20})}),o.jsx(Bs,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer",children:o.jsx(gk,{size:20})})]})]}),o.jsxs(VL,{children:[o.jsx(PL,{children:o.jsx(Hc,{to:"/",children:o.jsxs(ML,{children:[o.jsx(TL,{src:"/petals.webp",alt:"Petals Logo"}),o.jsx(LL,{src:"/name.webp",alt:"Hyacinth Industries"})]})})}),!n&&o.jsxs(DL,{children:[o.jsx(Uo,{children:o.jsx(qo,{to:"/about",children:"ABOUT US"})}),o.jsx(Uo,{children:o.jsx(qo,{to:"/services",children:"SERVICES"})}),o.jsxs(Uo,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[o.jsxs(OL,{onClick:u=>u.preventDefault(),className:c?"active":"",children:["INDUSTRIES ",o.jsx(D9,{size:16})]}),i&&o.jsx(IL,{children:l.map((u,f)=>o.jsx(FL,{children:o.jsx(qo,{to:u.to,children:u.text})},f))})]}),o.jsx(Uo,{children:o.jsx(qo,{to:"/contact",children:"CONTACT US"})}),o.jsx(Uo,{children:o.jsx(qo,{to:"/faq",children:"FAQ"})})]}),n&&o.jsx(RL,{onClick:()=>t(!e),children:o.jsx(nk,{size:24})})]}),n&&o.jsx(ft,{isOpen:e,setIsOpen:t})]})}const AL=d.nav`
  font-family: "Lexend", sans-serif;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 0 10px #000;
`,PL=d.div`
  position: relative;
  margin-right: 40px;
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 0 3rem;
  height: 100%;
  transition: background-color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -30px;
    width: 60px;
    height: 100%;
    background-color: inherit;
    transform: skewX(-20deg);
    z-index: -1;
  }
  
  &:hover {
    background-color: #222;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`,ML=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,TL=d.img`
  height: 40px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(15deg);
  }
`,LL=d.img`
  height: 30px;
  transition: filter 0.3s ease;
`,HL=d.div`
  background: linear-gradient(135deg, #DC143C, #B71C1C, #DC143C, #FF5252, #DC143C); /* Metallic red gradient */
  background-size: 200% 200%;
  box-shadow: inset 0 0 10px rgba(220, 20, 60, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #FFFFFF; /* White text */
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  /* Add subtle shine effect */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
    opacity: 0.5;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
`,VL=d.div`
  height: 60px;
  background-color: #eee;
  color: #111;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
`,$L=d.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`,c4=d.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8); /* Slightly dimmed white on hover */
  }

  svg {
    margin-right: 0.5rem;
    color: #FFFFFF; /* White icons */
  }
`,zL=d.div`
  display: flex;
  gap: 1rem;
`,RL=d.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 1.5rem;
  color: #333;
  transition: color 0.2s ease;
  
  &:hover {
    color: #00674f;
  }
`,DL=d.ul`
  display: flex;
  list-style: none;
  margin: 0 ;
  padding: 0;
  gap: 2.5rem;
  margin-right: 4rem;
`,Uo=d.li`
  position: relative;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #00674f;
  }
`,qo=d(xj)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #DC143c;
  }
  
  &.active {
    color: #DC143c;
    font-weight: 600;
  }
`,OL=d.div`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: #DC143c;
  }
  
  &.active {
    color: #DC143c;
    font-weight: 600;
  }
`,IL=d.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 100;
`,FL=d.div`
  padding: 0.5rem 1rem;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: #333;
    transition: color 0.2s ease;
    
    &:hover {
      color: #DC143c;
    }
  }
`,Bs=d.a`
  color: #FFFFFF; /* White icons */
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8); /* Slightly dimmed white on hover */
  }
`;var ZL=b.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Mo=function(t,n,r){var i=r.get(t);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function d4(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var pi=b.forwardRef(function(e,t){var n=e.alt,r=e.color,i=e.size,a=e.weight,s=e.mirrored,l=e.children,c=e.renderPath,u=d4(e,["alt","color","size","weight","mirrored","children","renderPath"]),f=b.useContext(ZL),p=f.color,m=p===void 0?"currentColor":p,y=f.size,j=f.weight,w=j===void 0?"regular":j,C=f.mirrored,x=C===void 0?!1:C,g=d4(f,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i??y,height:i??y,fill:r??m,viewBox:"0 0 256 256",transform:s||x?"scale(-1, 1)":void 0},g,u),!!n&&h.createElement("title",null,n),l,h.createElement("rect",{width:"256",height:"256",fill:"none"}),c(a??w,r??m))});pi.displayName="IconBase";var mi=new Map;mi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});mi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),h.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});mi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"}))});mi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});mi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});mi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _L=function(t,n){return Mo(t,n,mi)},Kv=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:_L}))});Kv.displayName="EnvelopeSimple";var gi=new Map;gi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});gi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});gi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"}))});gi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});gi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});gi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NL=function(t,n){return Mo(t,n,gi)},Yv=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:NL}))});Yv.displayName="FacebookLogo";var xi=new Map;xi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"34",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("rect",{x:"32",y:"32",width:"192",height:"192",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("circle",{cx:"180",cy:"76",r:"16"}))});xi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("circle",{cx:"180",cy:"76",r:"12"}))});xi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"32"}),h.createElement("path",{d:"M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"}))});xi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("circle",{cx:"180",cy:"76",r:"10"}))});xi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("circle",{cx:"180",cy:"76",r:"8"}))});xi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("circle",{cx:"180",cy:"76",r:"12"}))});var BL=function(t,n){return Mo(t,n,xi)},Qv=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:BL}))});Qv.displayName="InstagramLogo";var yi=new Map;yi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("line",{x1:"124",y1:"120",x2:"124",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("line",{x1:"84",y1:"120",x2:"84",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M124,148a28,28,0,0,1,56,0v28",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("circle",{cx:"84",cy:"80",r:"16"}))});yi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",opacity:"0.2"}),h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("circle",{cx:"88",cy:"80",r:"12"}))});yi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"}))});yi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("circle",{cx:"88",cy:"80",r:"10"}))});yi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("circle",{cx:"88",cy:"80",r:"8"}))});yi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("circle",{cx:"88",cy:"80",r:"12"}))});var WL=function(t,n){return Mo(t,n,yi)},Xv=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:WL}))});Xv.displayName="LinkedinLogo";var vi=new Map;vi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polygon",{points:"156 120 116 92 116 148 156 120",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("line",{x1:"160",y1:"228",x2:"96",y2:"228",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,48H48A16,16,0,0,0,32,64V176a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48ZM112,152V88l48,32Z",opacity:"0.2"}),h.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V64A24.1,24.1,0,0,1,48,40H208A24.1,24.1,0,0,1,232,64Zm-68,56a7.9,7.9,0,0,0-3.7-6.7l-44-28a7.9,7.9,0,0,0-8.1-.3,8,8,0,0,0-4.2,7v56a8,8,0,0,0,4.2,7,7.7,7.7,0,0,0,8.1-.3l44-28A7.9,7.9,0,0,0,164,120Z"}))});vi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),h.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UL=function(t,n){return Mo(t,n,vi)},Jv=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:UL}))});Jv.displayName="MonitorPlay";var wi=new Map;wi.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});wi.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",opacity:"0.2"}),h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});wi.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"}))});wi.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});wi.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});wi.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qL=function(t,n){return Mo(t,n,wi)},e5=b.forwardRef(function(e,t){return h.createElement(pi,Object.assign({ref:t},e,{renderPath:qL}))});e5.displayName="Phone";const Zf="/assets/Logo-D1zaocPJ.webp",kt=()=>{const e=new Date().getFullYear();return o.jsx(GL,{children:o.jsxs(KL,{children:[o.jsxs(YL,{children:[o.jsxs(QL,{children:[o.jsxs(XL,{href:"/",children:[o.jsx(JL,{src:Zf,alt:"Hyacinth Industries logo"}),o.jsxs(eH,{children:[o.jsx(tH,{children:"Hyacinth Industries"}),o.jsx(nH,{children:"Fractional Executive Consulting"})]})]}),o.jsx(rH,{children:"Strategic consulting for leaders and organizations building stronger brands, better deals, and sharper execution."})]}),o.jsxs(Ed,{children:[o.jsx(Cd,{children:"Quick Links"}),o.jsxs(Ad,{children:[o.jsx(Ln,{children:o.jsx(sr,{href:"/",children:"Home"})}),o.jsx(Ln,{children:o.jsx(sr,{href:"/about",children:"About"})}),o.jsx(Ln,{children:o.jsx(sr,{href:"/services",children:"Services"})}),o.jsx(Ln,{children:o.jsx(sr,{href:"/contact",children:"Contact"})}),o.jsx(Ln,{children:o.jsx(sr,{href:"/faq",children:"FAQ"})})]})]}),o.jsxs(Ed,{children:[o.jsx(Cd,{children:"Contacts"}),o.jsxs(Ad,{children:[o.jsx(Ln,{children:o.jsxs(u4,{href:"mailto:info@hyacinthindustriesllc.com",children:[o.jsx(Kv,{size:22,weight:"regular"}),"info@hyacinthindustriesllc.com"]})}),o.jsx(Ln,{children:o.jsxs(u4,{href:"tel:+18132133276",children:[o.jsx(e5,{size:22,weight:"regular"}),"+1 (813) 213-3276"]})})]}),o.jsxs(iH,{children:[o.jsx(Ws,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",title:"Facebook",children:o.jsx(Yv,{size:22,weight:"regular"})}),o.jsx(Ws,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",title:"Instagram",children:o.jsx(Qv,{size:22,weight:"regular"})}),o.jsx(Ws,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",title:"LinkedIn",children:o.jsx(Xv,{size:22,weight:"regular"})}),o.jsx(Ws,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",title:"Twitter",children:o.jsx(qv,{size:22})})]})]}),o.jsxs(Ed,{children:[o.jsx(Cd,{children:"Support"}),o.jsxs(Ad,{children:[o.jsx(Ln,{children:o.jsx(sr,{href:"/#home-faq-heading",children:"Common Questions"})}),o.jsx(Ln,{children:o.jsx(sr,{href:"/contact",children:"Get Support"})})]})]})]}),o.jsxs(sH,{children:[o.jsxs(lH,{children:["© ",e," Hyacinth Industries, LLC. All rights reserved."]}),o.jsx(oH,{children:o.jsx(aH,{href:"/privacy-policy",children:"Privacy Policy"})})]})]})})},GL=d.footer`
  background: #111111;
  color: rgba(255, 255, 255, 0.88);
  padding: 4.75rem 0 1.5rem;
`,KL=d.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 0 18px;
  }
`,YL=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(170px, 0.8fr) minmax(260px, 1fr) minmax(150px, 0.8fr);
  gap: 2.5rem 3rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`,QL=d.div`
  max-width: 370px;

  @media (max-width: 680px) {
    max-width: none;
  }
`,XL=d.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
`,JL=d.img`
  width: 84px;
  height: 84px;
  object-fit: contain;
  flex-shrink: 0;
`,eH=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`,tH=d.span`
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1;
`,nH=d.span`
  font-family: var(--font-body);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.66);
`,rH=d.p`
  margin: 1.75rem 0 0;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
`,Ed=d.div`
  min-width: 0;

  @media (max-width: 680px) {
    width: 100%;
  }
`,Cd=d.h3`
  margin: 0 0 1.1rem;
  font-family: var(--font-heading);
  font-size: 0.96rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 680px) {
    margin-bottom: 0.9rem;
  }
`,Ad=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`,Ln=d.li`
  margin: 0;
`,sr=d.a`
  color: rgba(255, 255, 255, 0.86);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(2px);
  }
`,u4=d(sr)`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.65rem;
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`,iH=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1rem;

  @media (max-width: 680px) {
    margin-top: 0.85rem;
    justify-content: flex-start;
  }
`,Ws=d.a`
  color: rgba(255, 255, 255, 0.82);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
  }
`,oH=d.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`,aH=d.a`
  font-family: var(--font-body);
  font-size: 0.94rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`,sH=d.div`
  margin-top: 3rem;
  padding-top: 1.35rem;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,lH=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.86);
`,ss="/assets/bg2-DZdCbQqZ.webp";function cH(){const e={initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut",delay:.3}},t={initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut",delay:.3}};return o.jsxs(dH,{children:[o.jsx(uH,{}),o.jsx(hH,{children:o.jsxs(fH,{id:"home",children:[o.jsx(pH,{as:W.div,...e,className:"flexCenter",children:o.jsxs("div",{children:[o.jsx(mH,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.35},children:"Fractional Executive Consulting"}),o.jsx(gH,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.6,delay:.44},children:"Hyacinth Industries LLC"}),o.jsx(W.h3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:"Fractional Executive Support That Helps You win bigger deals, build stronger brands, and launch better products"}),o.jsx(xH,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.62},children:"Senior leadership support for high-growth teams that need execution power across brand, deals, and product without the cost and drag of a full-time executive hire."}),o.jsxs(yH,{as:W.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.74},children:[o.jsx(vH,{href:"/contact",children:"Schedule a Discovery Call"}),o.jsx(wH,{children:"30 minutes. No commitment. Let's see if we're a fit."})]})]})}),o.jsx(bH,{as:W.div,...t,children:o.jsx(jH,{children:o.jsx(kH,{src:Zf,alt:"logo",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.4,ease:[.6,-.05,.01,.99]},whileHover:{scale:1.05}})})})]})})]})}const dH=d.div`
  width: 100%;
  min-height: clamp(700px, 92vh, 900px);
  margin-top: 0;
  overflow: clip;
  position: relative;
  margin-bottom: 0;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 0;
    padding: 0 0 24px;
  }
`,uH=d.div`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: url(${ss}) center/cover no-repeat;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0.15)
    );
  }
`,hH=d.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
`,fH=d.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 760px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1160px) {
    padding: 0 28px;
  }

  @media (max-height: 820px) and (min-width: 801px) {
    min-height: 700px;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 800px) {
    height: auto;
    min-height: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.85rem 18px 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 14px 1rem;
  }
`,pH=d.div`
  width: 58%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 5rem;

  &::before {
    content: '';
    position: absolute;
    width: 76%;
    top: 0;
    bottom: -160px;
    left: -13%;
    background: rgba(0, 0, 0, 0.42);
    clip-path: polygon(18% 0%, 100% 0%, 88% 100%, 0% 100%);
    z-index: -1;
    overflow-x: visible;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 44rem;
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: clamp(1.85rem, 3.35vw, 2.8rem);
      line-height: 1.02;
      text-align: left;
    }
  }

  @media (max-width: 1160px) {
    width: 64%;

    &::before {
      width: 84%;
      top: 0;
      bottom: -130px;
      left: -15%;
    }

    > div {
      max-width: 40rem;
    }

    h3 {
      font-size: clamp(1.75rem, 3.7vw, 2.5rem);
    }
  }

  @media (max-width: 920px) {
    width: 100%;
    padding: 1.75rem 1.2rem;
    min-height: 0;

    &::before {
      width: 100%;
      height: 100%;
      left: 0;
      clip-path: none;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35));
    }

    > div {
      max-width: 100%;
    }
  }

  @media (max-height: 820px) and (min-width: 801px) {
    margin-top: 2.5rem;

    > div {
      max-width: 38rem;
    }

    h3 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      max-width: 18ch;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    order: 2;
    margin-top: 0;
    padding: 0.9rem 0 0;
    height: auto;

    &::before {
      width: 100%;
      left: 0;
      clip-path: none;
      top: 0;
      bottom: 0;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.32));
    }

    > div {
      max-width: 100%;
      padding: 0 0.95rem 1rem;
    }
  }

  h3 {
    font-weight: 600;
    font-size: clamp(1.85rem, 3.45vw, 2rem);
    line-height: 1.01;
    letter-spacing: -0.045em;
    color: #fff;
    margin: 0;
    max-width: 30ch;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: clamp(1.7rem, 7vw, 2.4rem);
      line-height: 1.04;
      max-width: 18ch;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: clamp(1.5rem, 8vw, 2rem);
    }
  }
`,mH=d(W.p)`
  margin: 0 0 0.95rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  color: #f4c44d;
  font-family: var(--font-heading);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    padding: 0.45rem 0.7rem;
  }
`,gH=d(W.h2)`
  margin: 0 0 0.7rem;
  font-family: var(--font-heading);
  font-size: clamp(2.3rem, 4vw, 3rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  font-weight: 800;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: clamp(2rem, 9vw, 2.8rem);
    line-height: 0.95;
  }
`,xH=d(W.p)`
  max-width: 31rem;
  margin: 1rem 0 0;
  font-family: var(--font-body);
  font-size: clamp(0.92rem, 1.05vw, 0.98rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.86);

  @media (max-height: 820px) and (min-width: 801px) {
    max-width: 28rem;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 0.94rem;
    line-height: 1.6;
  }
`,yH=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem 1rem;
  margin-top: 1.15rem;

  @media (max-height: 820px) and (min-width: 801px) {
    margin-top: 0.95rem;
    gap: 0.75rem 0.85rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`,vH=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.15rem;
  border-radius: 999px;
  border: 1px solid #5b3cc4;
  background: linear-gradient(180deg, #6d4ee6, #5637c4);
  box-shadow: 0 10px 24px rgba(94, 60, 196, 0.22);
  color: #fff;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(94, 60, 196, 0.28);
    color: #fff;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`,wH=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.8);
  max-width: 18rem;

  @media (max-height: 820px) and (min-width: 801px) {
    max-width: 15rem;
    font-size: 0.82rem;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 0.84rem;
  }
`,bH=d.div`
  width: 42%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (min-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 1160px) {
    width: 36%;
  }

  @media (max-height: 820px) and (min-width: 801px) {
    width: 34%;
  }

  @media (max-width: 920px) {
    width: 72%;
    order: 1;
    margin: 0 auto 1rem;
  }

  @media (max-width: 800px) {
    width: 82%;
  }

  @media (max-width: 560px) {
    width: 92%;
  }
`,jH=d.div`
  display: flex;
  justify-content: center;
  width: 100%;


  @media (min-width: 1000px) {
    width: 80%;
    margin: 0 auto;
  }
`,kH=d(W.img)`
  width: 100%;
  height: auto;
  transform-origin: center;
  filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.18));

  @media (min-width: 1000px) {
    filter: drop-shadow(0 30px 70px rgba(0, 0, 0, 0.22));
  }

  @media (max-width: 800px) {
    max-width: 260px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`,SH=({image:e,title:t,description:n,tag:r,onUpdate:i})=>{const[a,s]=b.useState(!1),[l,c]=b.useState(!1),[u,f]=b.useState(t),[p,m]=b.useState(n),[y,j]=b.useState(r),w=()=>{i==null||i({title:u,description:p,tag:y}),c(!1)};return o.jsxs(EH,{as:W.div,image:e,isHovered:a,animate:{y:a?-5:0},transition:{duration:.3,ease:"easeOut"},onHoverStart:()=>s(!0),onHoverEnd:()=>s(!1),children:[o.jsx(CH,{isHovered:a,children:l?o.jsxs(o.Fragment,{children:[o.jsx(h4,{value:u,onChange:C=>f(C.target.value),placeholder:"Enter title"}),o.jsx(HH,{value:p,onChange:C=>m(C.target.value),placeholder:"Enter description"}),o.jsx(h4,{value:y,onChange:C=>j(C.target.value),placeholder:"Enter tag",onKeyDown:C=>{C.key==="Enter"&&w()}})]}):o.jsxs(o.Fragment,{children:[o.jsx(AH,{children:u}),o.jsx(PH,{children:p})]})}),o.jsx(Wc,{children:!l&&a&&o.jsx(W.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{duration:.3},children:o.jsxs(TH,{children:[o.jsx(MH,{children:y}),o.jsx(LH,{size:20})]})})})]})},EH=d.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;

  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${e=>e.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    filter: blur(${e=>e.isHovered?"8px":"0"});
    transition: filter 0.3s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    z-index: -1;
  }
`,CH=d.div`
  padding: 20px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: transparent;
  transform: translateY(${e=>e.isHovered?"-25px":"0"});
  transition: transform 0.3s ease;
`,AH=d.h3`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #fff;
  font-family: 'Lexend', sans-serif;
`,PH=d.p`
  font-size: 14px;
  color: #f0f0f0;
  font-weight: 300;
  font-family: 'Lexend', sans-serif;
  line-height: 1.4;
`,MH=d.span`
  background-color: rgba(255, 0, 20, 0.8);
  padding: 7px 15px;
  
  font-size: 13px;
  color: #fff;
  font-family: 'Lexend', sans-serif;
  font-weight: 300;
`,TH=d.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
`,LH=d(af)`
  stroke-width: 2px;
  color: #fff;
`,h4=d.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.9);
`,HH=d.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  background: rgba(255, 255, 255, 0.9);
`;d.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;
  
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
      opacity: 0;
      z-index: 3;
      transition: opacity 0.3s ease;
    }
    
    &:active::before {
      opacity: 1;
    }
  }
`;d(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  padding: 20px;

  @media (hover: none) {
    &:active {
      background-color: transparent;
      h3, p { color: #fff; }
    }
  }
`;d(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  z-index: 1;
  transition: opacity 0.8s ease-out;
  opacity: ${e=>e.isHovered?1:0};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
  }
`;d.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${e=>e.isOverflowing?"1.25rem":"1.5rem"};
  height: calc(100% - 70px); /* Reserve space for TagWrapper */
  overflow-y: auto;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;d.h3`
  font-family: 'Lexend Medium', sans-serif;
  font-size: clamp(0.9rem, ${e=>{var t;return((t=e.children)==null?void 0:t.length)>30?"1rem":"1.25rem"}}, 1.25rem);
  margin-bottom: 0.75rem;
  font-weight: 600;
  transition: color 0.8s ease-out;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  min-height: 2.6em;
`;d.p`
  font-family: 'Lexend Light', sans-serif;
  font-weight: 400;
  font-size: clamp(0.75rem, ${e=>{var t;return((t=e.children)==null?void 0:t.length)>150?"0.8rem":"0.9rem"}}, 0.9rem);
  margin-bottom: 0.5rem;
  line-height: 1.4;
  transition: all 0.8s ease-out;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: ${e=>{var t;return((t=e.children)==null?void 0:t.length)>200?"4":"6"}};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;d.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.75rem;
  transition: all 0.8s ease-out;
  backdrop-filter: blur(4px);
  background-color: #ff0033;
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.4);
  height: 40px; /* Fixed height */
`;d.span`
  font-family: 'Lexend Light', sans-serif;
  font-weight: 600;
  font-size: clamp(0.75rem, ${e=>{var t;return((t=e.children)==null?void 0:t.length)>20?"0.8rem":"0.9rem"}}, 0.9rem);
  color: white;
  padding: 4px 10px;

  background-color: rgba(0, 0, 0, 0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 170px;
`;d(af)`
  stroke-width: 2.5px;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.8);
`;d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 16px;
  
  svg {
    color: #333;
  }
`;const VH=Ye`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;Ye`
  max-width: 1200px;
  margin: 0 auto;
`;const Sn=Ye`
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  color: #1d1d1f;
  text-align: center;
  margin: 0 0 3.25rem;
  line-height: 1.08;
  letter-spacing: -0.035em;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 84px;
    height: 4px;
    margin: 1.1rem auto 0;
    border-radius: 999px;
    background: linear-gradient(90deg, #dc143c, #990000);
  }
`,bi=Ye`
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.9;
  color: #5d6169;
`,$H=Ye`
  ${bi};
  max-width: 52rem;
  margin: 0 auto 3rem;
  text-align: center;
`,t5=Ye`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 20px;
  box-shadow: 0 14px 36px rgba(17, 17, 17, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 44px rgba(17, 17, 17, 0.12);
  }
`;Ye`
  position: relative;
  overflow: hidden;
  min-height: clamp(420px, 62vh, 620px);
`;const ji=Ye`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(9, 10, 14, 0.78), rgba(9, 10, 14, 0.52)),
    linear-gradient(180deg, rgba(220, 20, 60, 0.18), rgba(0, 0, 0, 0.08));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
`,ki=Ye`
  max-width: 58rem;
  padding: 0 2rem;
`,hn=Ye`
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`,Si=Ye`
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.04em;
  margin: 0 0 1rem;
`,Ei=Ye`
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 42rem;
  margin: 0 auto 2rem;
`,zH=Ye`
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  color: #131313;
  text-align: center;
  margin: 0 0 1.2rem;
  line-height: 1.03;
  letter-spacing: -0.04em;
`,fn=Ye`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.95rem 2rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #dc143c, #990000);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease,
    color 0.25s ease,
    text-shadow 0.25s ease;
  box-shadow: 0 16px 36px rgba(153, 0, 0, 0.24);

  &:link,
  &:visited,
  &:active {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background: linear-gradient(135deg, #c11235, #7f0000);
    color: #ffe7b8;
    text-decoration: none;
    text-shadow: 0 1px 10px rgba(255, 231, 184, 0.24);
    transform: translateY(-3px);
    box-shadow: 0 22px 44px rgba(153, 0, 0, 0.3);
    filter: none;
  }
`;Ye`
  ${fn};
  background: #ffffff;
  color: #dc143c;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14);
`;Ye`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dc143c, #990000);
  color: #ffffff;
  font-family: var(--font-heading);
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(220, 20, 60, 0.22);
`;const gt="/assets/office-CLpuQnBp.webp",gr="/assets/coding-CvDBlB-Q.webp",hr="/assets/healthcare-BYdEzM4-.webp",RH=()=>{const[e,t]=b.useState([{id:1,image:gt,title:"Professional Outsourcing",description:"Transform your business with our comprehensive outsourcing solutions. From administrative support to specialized medical services, we deliver excellence across industries.",tag:"Learn More"},{id:2,image:gr,title:"Technical Expertise",description:"Access world-class engineering and web design services. Our team delivers cutting-edge solutions in CAD, product development, UI/UX design, and more.",tag:"Explore Services"},{id:3,image:hr,title:"Healthcare Solutions",description:"Revolutionize healthcare delivery with our virtual nursing, emergency assistance, and medical support services. Experience healthcare innovation at its best.",tag:"Discover Healthcare"}]),n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},r={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i={hidden:{opacity:0,y:-30},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},a=(s,l)=>{const c=[...e];c[s]={...c[s],...l},t(c)};return o.jsxs(DH,{as:W.div,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},variants:n,children:[o.jsx(OH,{as:W.h1,variants:i,children:"Feature Content"}),o.jsx(IH,{as:W.div,variants:n,children:e.map((s,l)=>o.jsx(W.div,{variants:r,children:o.jsx(SH,{image:s.image,title:s.title,description:s.description,tag:s.tag,onUpdate:c=>a(l,c)})},s.id))})]})},DH=d.div`
  width: 100vw;
  min-height: 720px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 4rem 0;
  overflow-x: hidden;
  background-image: url(${ss});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 0 2rem;
  }
`,OH=d.h1`
  ${Sn};
  margin: 0 0 3.5rem;
`,IH=d.div`   
  width: min(1200px, calc(100% - 4rem));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  padding: 0;
`,Pd=({image:e,title:t,description:n,tag:r})=>{const[i,a]=b.useState(!1),[s,l]=b.useState(window.innerWidth<=600),[c,u]=b.useState(!1),f=s?c:i;b.useEffect(()=>{const y=()=>{l(window.innerWidth<=600)};return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const p=()=>s?f?120:0:f?250:0,m=()=>s?f?-120:0:f?-250:0;return o.jsxs(FH,{as:W.div,initial:{marginLeft:0},animate:{marginLeft:p()},transition:{duration:.5,ease:"easeInOut"},onHoverStart:()=>!s&&a(!0),onHoverEnd:()=>!s&&a(!1),onClick:()=>{s&&u(y=>!y)},isHovered:f,children:[o.jsx(ZH,{style:{backgroundImage:`url(${e})`},animate:{x:m(),opacity:f?1:0},transition:{duration:.5,ease:"easeInOut"}}),o.jsx(_H,{as:W.div,animate:{y:f?-5:0},transition:{duration:.3,ease:"easeOut"},children:o.jsx(NH,{as:W.div,animate:{backgroundColor:f?"rgb(51, 51, 51)":"rgba(255, 255, 255, 0.95)"},transition:{duration:.3},children:o.jsxs(BH,{children:[o.jsx(WH,{as:W.h3,animate:{color:f?"#ffffff":"#333333"},transition:{duration:.3},children:t}),o.jsx(UH,{as:W.p,animate:{color:f?"#cccccc":"#666666"},transition:{duration:.3},children:n}),o.jsxs(GH,{as:W.div,animate:{opacity:f?1:0},transition:{duration:.3},children:[o.jsx(qH,{as:W.span,animate:{backgroundColor:"#FFD700",color:"#333333"},transition:{duration:.3},children:r}),o.jsx(KH,{size:20,color:"#FFD700"})]})]})})})]})},FH=d.div`
  font-family: 'Lexend', sans-serif;
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;
  overflow: visible;
  height: 350px;
  margin-right: 20px;
`,ZH=d(W.div)`
  position: absolute;
  top: 5%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: 315px;
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`,_H=d.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  height: 350px;

  overflow: visible;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  flex-shrink: 0;
  z-index: 1;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
  }
`,NH=d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.95);
  
  overflow: visible;
  transition: all 0.3s ease-in-out;
  
  @media (hover: none) {
    &:active {
      background-color: rgb(51, 51, 51);
      h3 { color: #ffffff; }
      p { color: #cccccc; }
    }
  }
`,BH=d.div`
  padding: 25px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`,WH=d.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
  flex-shrink: 0;
`,UH=d.p`
  font-size: 16px;
  margin-bottom: 15px;
  flex: 1;
  overflow-y: auto;
`,qH=d.span`
  padding: 7px 15px;
  font-size: 14px;
  display: inline-block;
  background-color: #FFD700;
  font-weight: 500;
`,GH=d(W.div)`
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: space-between;
  width: 100%;
`,KH=d(af)`
  stroke-width: 2px;
  color: #FFD700;
  margin-right: 8px;
`,n5="/assets/bg1-CxEdLzbS.webp",YH="/assets/modernSolutions-BbhiXBLQ.webp",r5="/assets/process-_Sn2Wjn6.webp",QH="/assets/innovation-JfZcTP44.webp",XH=()=>{const e={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}};return o.jsxs(JH,{as:W.div,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},variants:e,children:[o.jsx(eV,{as:W.h1,variants:t,children:"Business Transformation Actions"}),o.jsxs(tV,{as:W.div,variants:e,children:[o.jsx(W.div,{variants:n,children:o.jsx(Pd,{image:YH,title:"Digital Transformation",description:"Modernize your business with cutting-edge digital solutions that drive efficiency and growth.",tag:"Learn More"})}),o.jsx(W.div,{variants:n,children:o.jsx(Pd,{image:r5,title:"Process Optimization",description:"Streamline operations and maximize productivity with our proven optimization strategies.",tag:"Discover"})}),o.jsx(W.div,{variants:n,children:o.jsx(Pd,{image:QH,title:"Innovation Strategy",description:"Stay ahead of the competition with forward-thinking innovation and strategic planning.",tag:"Explore Now"})})]})]})},JH=d.div`
  width: 100%;
  min-height: 720px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5.5rem 0 6rem;
  background: url(${n5}) center/cover no-repeat;
  //background-color: #222;
  overflow: visible;
  margin: 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(10, 10, 12, 0.82), rgba(10, 10, 12, 0.72));
    z-index: 1;
  }
`,eV=d.h1`
  ${Sn};
  color: #ffffff;
  margin: 0 0 3.5rem;
  z-index: 2;
`,tV=d.div`
  width: min(1200px, calc(100% - 4rem));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  padding: 0;
  z-index: 2;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,nV=({image:e,title:t,description:n,link:r,icon:i})=>{const[a,s]=b.useState(!1),[l,c]=b.useState(!1),u=h.useRef(null);F6(),b.useEffect(()=>{const p=()=>{if(u.current){const m=u.current.scrollHeight>u.current.clientHeight;c(m)}};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[t,n]);const f=()=>{r&&(window.location.href=r)};return o.jsxs(rV,{as:W.div,onHoverStart:()=>s(!0),onHoverEnd:()=>s(!1),onClick:f,style:{cursor:r?"pointer":"default"},children:[o.jsxs(iV,{as:W.div,initial:!1,animate:{backgroundColor:a?"transparent":"#fff"},transition:{duration:a?.6:.8,ease:"easeOut"},children:[i&&o.jsx(cV,{children:o.jsx(i,{size:32})}),o.jsxs(aV,{ref:u,isOverflowing:l,style:{color:a?"#fff":"#333"},children:[o.jsx(sV,{children:t}),o.jsx(lV,{children:n})]}),a&&o.jsx(dV,{as:W.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:"Learn More"})]}),o.jsx(oV,{isHovered:a,image:e})]})},rV=d.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 290px;
  max-height: 290px;
  margin-top: 32px;
  padding-top: 32px;
  overflow: visible;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  border-radius: 8px;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
      opacity: 0;
      z-index: 3;
      transition: opacity 0.3s ease;
    }
    
    &:active::before {
      opacity: 1;
    }
  }
`,iV=d(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  padding: 18px;
  padding-top: 36px;
  border-radius: 8px;

  @media (hover: none) {
    &:active {
      background-color: transparent;
      h3, p { color: #fff; }
    }
  }
`,oV=d(W.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  z-index: 1;
  transition: opacity 0.8s ease-out;
  opacity: ${e=>e.isHovered?1:0};
  border-radius: 8px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
    border-radius: 8px;
  }
`,aV=d.div`
  font-family: ${e=>e.theme.typography.bodyFont};
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  padding-top: 2.25rem;
  padding-bottom: 3.25rem;
  height: 100%;
  overflow: hidden;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`,sV=d.h3`
  font-family: ${e=>e.theme.typography.headingFont};
  font-weight: ${e=>e.theme.typography.fontWeights.semibold};
  font-size: clamp(0.9rem, ${e=>{var t;return((t=e.children)==null?void 0:t.length)>30?"1rem":"1.25rem"}}, 1.25rem);
  margin-bottom: 0.75rem;
  color: inherit;
  transition: color 0.3s ease;
  text-align: center;
  line-height: 1.4;
  min-height: calc(1.4em * 2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,lV=d.p`
  font-family: ${e=>e.theme.typography.bodyFont};
  font-weight: ${e=>e.theme.typography.fontWeights.normal};
  font-size: clamp(0.75rem, ${e=>{var t;return((t=e.children)==null?void 0:t.length)>150?"0.78rem":"0.88rem"}}, 0.88rem);
  color: inherit;
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  line-height: 1.45;
  min-height: calc(1.45em * 5);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,cV=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffeb6a;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid white;
  
  svg {
    color: #FF0033;
    stroke-width: 2px;
    scale: 1.2;
  }
`,dV=d.div`
  position: absolute;
  bottom: 20px;
  left: 27%;
  transform: translateX(-50%);

  font-family: ${e=>e.theme.typography.learnfont};
  font-weight: ${e=>e.theme.typography.fontWeights.medium};
  font-size: ${e=>e.theme.typography.fontSizes.sm};

  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;

  background-color: ${({theme:e})=>e.colors.primary};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  z-index: 5;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDeep};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`,K1="/assets/marketing-9zDYm2nv.webp",qa="/assets/animation-HZhXRbAd.webp",gn="/assets/logistics-gp59Lxl4.webp",Y1={Logistics:[{image:gn,icon:_9,iconWeight:"duotone",title:"Data Entry",description:"Meticulous accuracy and efficiency at every step",tag:"Explore Now",link:"/logistics"},{image:gn,icon:tk,iconWeight:"duotone",title:"Track and Trace",description:"Real-time visibility for all your shipments",tag:"Explore Now",link:"/logistics"},{image:gn,icon:Nv,iconWeight:"duotone",title:"Carrier Sales",description:"Effective sales strategies to increase your carrier's revenue",tag:"Explore Now",link:"/logistics"},{image:gn,icon:ik,iconWeight:"duotone",title:"Load Planning",description:"Planning and optimization of loads for efficient transportation",tag:"Explore Now",link:"/logistics"},{image:gn,icon:U6,iconWeight:"duotone",title:"Customer Support",description:"Prompt, professional issue resolution for enhanced satisfaction",tag:"Explore Now",link:"/logistics"},{image:gn,icon:K9,iconWeight:"duotone",title:"Afterhours Support",description:"Support during non-work hours, including evenings and weekends",tag:"Explore Now",link:"/logistics"},{image:gn,icon:xk,iconWeight:"duotone",title:"Logistics Coordinator",description:"Seamless orchestration from origin to destination",tag:"Explore Now",link:"/logistics"},{image:gn,icon:N9,iconWeight:"duotone",title:"Data Analyst",description:"Analysis of data for insights, trends, and decisions",tag:"Explore Now",link:"/logistics"},{image:gn,icon:F9,iconWeight:"duotone",title:"Account Management",description:"Dedicated expertise for tailored solutions",tag:"Explore Now",link:"/logistics"}],"Administrative Support":[{image:gt,icon:U1,iconWeight:"duotone",title:"Data Management",description:"Data Entry, Data Processing, and Database Management",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:zv,iconWeight:"duotone",title:"Communication Support",description:"Email Management, Call Handling, and Customer Support",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:Pv,iconWeight:"duotone",title:"Scheduling and Coordination",description:"Calendar Management, Meeting Arrangements, and Task Coordination",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:Hv,iconWeight:"duotone",title:"Documentations and Reporting",description:"Document Preparation, Record Keeping, and Transcription",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:Av,iconWeight:"duotone",title:"Accounting Support",description:"Invoicing, Expense Tracking, and Payroll Support",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:Bv,iconWeight:"duotone",title:"Human Resource Assistance",description:"Recruitment Support, Employee Records Management",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:rc,iconWeight:"duotone",title:"Project and Task Management",description:"Task Delegation, Project Coordination, Workflow Optimization",tag:"Explore Now",link:"/administrative-support"},{image:gt,icon:G1,iconWeight:"duotone",title:"Research and Analysis",description:"Market Research, Administrative Audits, and Data Analysis",tag:"Explore Now",link:"/administrative-support"}],"Medical Outsourcing":[{image:hr,icon:Zv,iconWeight:"duotone",title:"Medical Billing",description:"Comprehensive medical billing services and claims processing",tag:"Explore Now",link:"/healthcare"},{image:hr,icon:Rv,iconWeight:"duotone",title:"Healthcare Administration",description:"Administrative support for healthcare facilities",tag:"Explore Now",link:"/healthcare"},{image:hr,icon:Vv,iconWeight:"duotone",title:"Medical Records Management",description:"Electronic health records management and organization",tag:"Explore Now",link:"/healthcare"},{image:hr,icon:_v,iconWeight:"duotone",title:"Clinical Documentation",description:"Accurate documentation of clinical procedures and findings",tag:"Explore Now",link:"/healthcare"},{image:hr,icon:Cv,iconWeight:"duotone",title:"Medical Research Support",description:"Assistance with medical research and data analysis",tag:"Explore Now",link:"/healthcare"}],Marketing:[{image:K1,icon:Jv,iconWeight:"duotone",title:"Multimedia",description:"Creating visual content through video editing and graphic design.",tag:"Explore Now",link:"/marketing"},{image:K1,icon:B6,iconWeight:"duotone",title:"Social Media Management",description:"Handling a brand's presence across platforms like Instagram, Facebook, X, LinkedIn, and more.",tag:"Explore Now",link:"/marketing"}],"Web Design":[{image:gr,icon:Mv,iconWeight:"duotone",title:"UI/UX Design",description:"UI/UX design for websites and mobile apps",tag:"Explore Now",link:"/web-design"},{image:gr,icon:q1,iconWeight:"duotone",title:"Custom Website Design",description:"Custom website design for businesses and organizations",tag:"Explore Now",link:"/web-design"},{image:gr,icon:G1,iconWeight:"duotone",title:"SEO Management",description:"Incorporate SEO strategies to improve website visibility",tag:"Explore Now",link:"/web-design"},{image:gr,icon:rc,iconWeight:"duotone",title:"Website Redesign",description:"Optimize existing and outdated websites for improved user experience",tag:"Explore Now",link:"/web-design"}],"3D Animation":[{image:qa,icon:$v,iconWeight:"duotone",title:"Architectural Visualization",description:"Create 3D models and animations for architectural projects",tag:"Explore Now",link:"/3d-animation"},{image:qa,icon:q1,iconWeight:"duotone",title:"Product Animation",description:"Showcase your products in stunning 3D animations",tag:"Explore Now",link:"/3d-animation"}],"General Services":[{image:gt,icon:U1,iconWeight:"duotone",title:"Administrative Support",description:"Office management, document processing, data entry, etc.",tag:"Explore Now",link:"/general-services"},{image:gt,icon:rc,iconWeight:"duotone",title:"Business Process Support",description:"Process optimization, quality control, and workflow management",tag:"Explore Now",link:"/general-services"},{image:gt,icon:Fv,iconWeight:"duotone",title:"Technical Support",description:"IT infrastructure management, help desk services, etc.",tag:"Explore Now",link:"/general-services"}]},uV={open:{opacity:1,y:0,transition:{duration:.2,staggerChildren:.05}},closed:{opacity:0,y:-20,transition:{duration:.2}}},hV={open:{opacity:1,y:0},closed:{opacity:0,y:-10}},fV={visible:{transition:{staggerChildren:.1}}},f4=Object.keys(Y1);O6`
  0% {
    box-shadow:
      0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent),
      0 0 10px color-mix(in srgb, var(--accentSoft) 70%, transparent);
  }
  70% {
    box-shadow:
      0 0 0 16px color-mix(in srgb, var(--accent) 0%, transparent),
      0 0 14px color-mix(in srgb, var(--accentSoft) 45%, transparent);
  }
  100% {
    box-shadow:
      0 0 0 0 color-mix(in srgb, var(--accent) 0%, transparent),
      0 0 0 color-mix(in srgb, var(--accentSoft) 0%, transparent);
  }
`;O6`
  0% { transform: translateY(-50%) translateY(0); }
  50% { transform: translateY(-50%) translateY(-4px); }
  100% { transform: translateY(-50%) translateY(0); }
`;const i5=()=>{var x;const[e,t]=b.useState(f4[0]),[n,r]=b.useState(!1),[i,a]=b.useState(window.innerWidth<800),[s,l]=b.useState(!1),[c,u]=b.useState(!0),f=b.useRef(null);b.useEffect(()=>{const g=()=>{a(window.innerWidth<800),p()};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),b.useEffect(()=>{p(),f.current&&(f.current.scrollLeft=0,l(!1),u(!0))},[e]);const p=()=>{if(!f.current)return;const{scrollLeft:g,scrollWidth:v,clientWidth:E}=f.current;l(g>0),u(g<v-E-10)},m=()=>r(!n),y=()=>{p()};(x=Y1[e])==null||x.length;const j=i,w=!i,C=!1;return o.jsx(pV,{children:o.jsxs(mV,{children:[o.jsx(gV,{initial:{opacity:0,y:-40},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.6},transition:{duration:.7,ease:"easeOut"},children:"Industries & Expertise"}),o.jsx(xV,{}),o.jsx(yV,{initial:{opacity:0,y:-40},whileInView:{opacity:1,y:0},children:"Discover our comprehensive range of services across various industries"}),o.jsxs(vV,{children:[o.jsx(wV,{onClick:m,isOpen:n,children:e}),o.jsx(Wc,{children:n&&o.jsx(bV,{variants:uV,initial:"closed",animate:"open",exit:"closed",children:f4.map(g=>o.jsx(jV,{variants:hV,selected:e===g,onClick:()=>{t(g),r(!1)},children:g},g))})})]}),o.jsxs(kV,{children:[C,o.jsx(SV,{showScroll:j,shouldCenter:w,as:W.div,variants:fV,initial:"visible",animate:"visible",ref:f,onScroll:y,children:Y1[e].map((g,v)=>o.jsx(EV,{as:W.div,"data-card":"true",initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,delay:v*.1}},children:o.jsx(nV,{...g})},v))},e),C]})]})})},pV=d.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 4rem 0;
  overflow-x: hidden;
  background-image: url(${n5});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 640px) {
    & > * {
      padding: 0 1rem;
    }
  }
`,mV=d.div`
  text-align: center;
  margin-bottom: 3rem;
`,gV=d(W.h2)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #1e1f24;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 4rem);
  
  @media (max-width: 560px) {
    font-size: 3rem;
  }
`,xV=d.div`
  width: 200px;
  height: 4px;
  margin: 0.75rem auto 2rem;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary},
    #c89b2c
  );
  opacity: 0.95;
  box-shadow: 0 8px 18px rgba(139, 13, 42, 0.12);
`,yV=d(W.p)`
  font-size: 1.4rem;
  color: #5a6572;
  margin-bottom: 2rem;
  font-family: ${e=>e.theme.typography.learnfont};
`,vV=d.div`
  position: relative;
  width: min(300px, 100%);
  margin: 0 auto 3rem;
`,wV=d.button`
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1.5px solid rgba(139, 13, 42, 0.15);
  border-radius: 14px;
  color: #1f2430;
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: all 0.25s ease;
  position: relative;
  box-shadow: 0 16px 28px rgba(17, 17, 17, 0.05);

  &:hover {
    background: #ffffff;
    border-color: rgba(139, 13, 42, 0.32);
    box-shadow: 0 20px 34px rgba(17, 17, 17, 0.08);
  }

  &:focus-visible {
    outline: 3px solid rgba(201, 162, 39, 0.35); 
    outline-offset: 2px;
  }

  &::after {
    content: '▼';
    position: absolute;
    right: 1rem;
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0)"};
    color: #8b0d2a;
  }
`,bV=d(W.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.6rem;
  overflow: hidden;
  z-index: 10;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(139, 13, 42, 0.12);
  border-radius: 14px;
  box-shadow: 0 22px 44px rgba(17, 17, 17, 0.1);
`,jV=d(W.div)`
  padding: 1rem 1.3rem;
  color: #2b2f36;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;

  &:hover {
    background: rgba(139, 13, 42, 0.05);
    color: #8b0d2a;
    padding-left: 1.6rem;
  }

  ${e=>e.selected&&`
    background: rgba(139, 13, 42, 0.08);
    color: #8b0d2a;
    font-weight: 700;
  `}
`,kV=d.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: visible;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 0.25rem;
    padding-top: 1rem;
  }
`;d.button`
  position: absolute;
  top: 50%;
  translate: translateY(-50%);
  ${e=>e.left?"left: -33px;":"right: -18px;"}
  z-index: 10;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 999px;
  border: 1px solid rgba(139, 13, 42, 0.14);
  background: rgba(255, 255, 255, 0.96);
  color: #8b0d2a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 16px 28px rgba(17, 17, 17, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(1.06);
    background: #fffaf5;
    box-shadow: 0 20px 32px rgba(17, 17, 17, 0.12);
  }

  &:focus-visible {
    outline: 3px solid rgba(201, 162, 39, 0.28);
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${e=>e.left?"left: 0;":"right: 0;"}
  }

  @media (max-width: 640px) {
    display: none;
  }
`;const SV=d.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0 1rem;
  width: 100%;
  align-items: stretch;

  flex-wrap: ${({showScroll:e})=>e?"nowrap":"wrap"};
  justify-content: ${({shouldCenter:e,showScroll:t})=>t?"flex-start":e?"center":"flex-start"};

  overflow-x: ${({showScroll:e})=>e?"auto":"visible"};
  overflow-y: visible;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ${({showScroll:e})=>e?`
      scroll-snap-type: x mandatory;
      scroll-padding-inline: 0.25rem;
      cursor: grab;
    `:`
      scroll-snap-type: none;
      cursor: default;
    `}

  &:active {
    cursor: ${({showScroll:e})=>e?"grabbing":"default"};
  }

  &::-webkit-scrollbar {
    height: ${({showScroll:e})=>e?"8px":"0"};
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: rgba(42, 42, 42, 0.6);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primarySoft};
    border-radius: 4px;

    &:hover {
      background: ${({theme:e})=>e.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem 0.5rem 1rem;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
  }
`,EV=d(W.div)`
  flex: 0 0 auto;
  width: 280px;
  user-select: none;
  display: flex;
  align-items: stretch;
  scroll-snap-align: start;

  @media (min-width: 769px) {
    width: min(280px, calc(25% - 1.125rem));
  }
  
  &:last-child {
    margin-right: 0;
  }
`,CV="/assets/ReforestationBg3-CY4k5sJg.webp";d.section`
  padding: 5.25rem 20px 5.75rem;
  background:
    radial-gradient(circle at top right, rgba(180, 8, 33, 0.16), transparent 24%),
    radial-gradient(circle at 12% 85%, rgba(34, 97, 69, 0.12), transparent 30%),
    linear-gradient(180deg, #f4ede7 0%, #fcfaf8 52%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 4.25rem 16px 4.5rem;
  }
`;d.div`
  width: min(1220px, 100%);
  margin: 0 auto;
`;d.div`
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
  gap: 1.4rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;d.div`
  position: relative;
  padding: 2.7rem 2.5rem 2.4rem;
  border-radius: 34px;
  background-image: url(${CV});
  background-size: cover;
  background-position: center;
  color: #fff7f2;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 28px 60px rgba(52, 18, 24, 0.24);
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(9, 13, 12, 0.76) 0%, rgba(9, 13, 12, 0.56) 38%, rgba(9, 13, 12, 0.22) 72%, rgba(9, 13, 12, 0.12) 100%),
      linear-gradient(180deg, rgba(9, 13, 12, 0.18) 0%, rgba(9, 13, 12, 0.3) 100%);
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: auto -70px -80px auto;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 68%);
    z-index: 0;
    pointer-events: none;
  }

  @media (min-width: 1280px) {
    min-height: 640px;
  }

  @media (max-width: 640px) {
    padding: 2rem 1.35rem 1.9rem;
    border-radius: 26px;

    &::before {
      background:
        linear-gradient(180deg, rgba(10, 12, 11, 0.82) 0%, rgba(10, 12, 11, 0.56) 48%, rgba(10, 12, 11, 0.34) 100%);
    }
  }
`;d.p`
  position: relative;
  z-index: 1;
  margin: 0 0 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 700;
  color: #f6d4b2;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #f4c44d;
    box-shadow: 0 0 0 6px rgba(244, 196, 77, 0.16);
  }
`;d.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  max-width: 10ch;
  font-family: var(--font-heading);
  font-size: clamp(2.65rem, 4.8vw, 4.4rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
  color: #fffdf8;
  text-shadow: 0 8px 28px rgba(0, 0, 0, 0.36);

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 10vw, 3.3rem);
  }
`;d.p`
  position: relative;
  z-index: 1;
  max-width: 40rem;
  margin: 1.1rem 0 0;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 247, 242, 0.94);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    font-size: 0.97rem;
    line-height: 1.7;
  }
`;d.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;d.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 1rem;
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  color: #fff9f5;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    margin-right: 0.55rem;
    border-radius: 50%;
    background: #f4c44d;
    flex-shrink: 0;
  }
`;d.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.1rem;
  margin-top: 1.7rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 1.4rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #f4c44d, #e4ab1c);
  color: #24150f;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: 0 16px 34px rgba(13, 13, 13, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(13, 13, 13, 0.26);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;d.a`
  color: #fff7f0;
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: 640px) {
    align-self: flex-start;
  }
`;d.aside`
  position: relative;
  padding: 2rem 1.6rem;
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, rgba(139, 13, 42, 0.06), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(249, 244, 238, 0.97)),
    #ffffff;
  border: 1px solid rgba(36, 24, 22, 0.08);
  box-shadow: 0 24px 46px rgba(17, 17, 17, 0.08);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    right: -36px;
    bottom: -46px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(244, 196, 77, 0.16), transparent 72%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 1.6rem 1.2rem;
    border-radius: 24px;
  }
`;d.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 700;
  color: #8b0d2a;
`;d.h3`
  margin: 0.75rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3vw, 2.45rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: #1e1f24;
`;d.p`
  margin: 1rem 0 0;
  font-family: var(--font-body);
  line-height: 1.78;
  color: #526070;
`;d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem;
  margin-top: 1.5rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;d.div`
  padding: 1.05rem 1rem;
  border-radius: 22px;
  background: linear-gradient(180deg, #fffaf5, #fff1df);
  border: 1px solid rgba(139, 13, 42, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
`;d.div`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #8b0d2a;
`;d.p`
  margin: 0.45rem 0 0;
  font-family: var(--font-body);
  color: #5f6b78;
  line-height: 1.45;
`;d.a`
  display: inline-flex;
  margin-top: 1.3rem;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  background: #8b0d2a;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;d.div`
  width: 100%;
  padding: 6rem 2rem;
  background: 
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.08), transparent 24%),
    linear-gradient(180deg, #fffdf9 0%, #f8f2f0 100%);
`;d.div`
  max-width: 1200px;
  margin: 0 auto;
`;d.div`
  text-align: center;
  margin-bottom: 3rem;
`;d.p`
  margin: 0 0 0.75rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
`;d.h2`
  ${Sn};
  margin-bottom: 1.4rem;
`;d.p`
  ${$H};
  margin-bottom: 0;
`;d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;d.article`
  ${t5};
  position: relative;
  padding: 2rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 5px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }
`;d.span`
  display: block;
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 0.8;
  color: rgba(139, 13, 42, 0.18);
  margin-bottom: 0.8rem;
`;d.p`
  margin: 0 0 1.25rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.8;
  color: #2e3238;  
`;d.p`
  margin: 0 0 1.2rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #5d6169;
  font-family: var(--font-body);
  font-size: 0.95rem;

  strong {
    color: #17181b;
  }
`;d.div`
  text-align: center;
  margin-bottom: 1.75rem;
`;d.h3`
  margin: 0 0 0.75rem;
  color: #1d1d1f;
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.8vw, 2.15rem);
  line-height: 1.08;
`;d.p`
  margin: 0 auto;
  max-width: 46rem;
  color: #5d6169;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
`;d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;d.article`
  ${t5};
  padding: 2rem;
`;d.p`
  margin: 0 0 0.65rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;d.h4`
  margin: 0 0 1.2rem;
  color: #1b1e22;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.2;
`;d.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: #4d535c;
    font-family: var(--font-body);
    font-size: 0.98rem;
    line-height: 1.75;
  }
`;d.p`
  margin: 0 0 0.35rem;
  color: #17181b;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;function AV(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(PV,{id:"home",children:[o.jsx(bt,{title:"Hyacinth Industries LLC | Fractional Executive Consulting for Brand, Deals & Product",description:"Hyacinth Industries provides senior-level fractional executives to help companies strengthen brands, close bigger deals, and improve products without full-time hires.",canonicalPath:"/"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(cH,{}),o.jsx(i5,{}),o.jsx(XH,{}),o.jsx(RH,{}),o.jsx(kt,{})]})}const PV=d.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,o5=({images:e,autoPlayInterval:t})=>{const[n,r]=b.useState(0);b.useEffect(()=>{const a=setInterval(()=>{r(s=>(s+1)%e.length)},t);return()=>clearInterval(a)},[e.length,t]);const i=a=>{r(a)};return o.jsxs(MV,{children:[o.jsx(TV,{children:e.map((a,s)=>o.jsx(LV,{$active:s===n,style:{backgroundImage:`url(${a})`}},s))}),o.jsx(HV,{children:e.map((a,s)=>o.jsx(VV,{$active:s===n,onClick:()=>i(s)},s))})]})},MV=d.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%); //clipping the image slider
  max-width: 100vw;
  @media (max-width: 768px) {
    height: 40vh;
    margin-bottom: 2rem;
  } 
`,TV=d.div`
  width: 100%;
  height: 100%;
  position: relative;
`,LV=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: ${e=>e.$active?1:0};
  pointer-events: ${e=>e.$active?"auto":"none"};
`,HV=d.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`,VV=d.button`
  font-size: 1px;
  width: 16px;
  height: 8px;
  border-radius: 8px;   
  border: none;
  background: ${e=>e.$active?"#fff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${e=>e.$active?"#fff":"rgba(255, 255, 255, 0.7)"};
  }
`,$V="/assets/construction-DKlmpx-2.webp",zV="/assets/glennjacinto-uoWNrVf2.webp";function RV(){const[e,t]=b.useState(window.innerWidth<800);b.useEffect(()=>{window.scrollTo(0,0);const i=()=>{t(window.innerWidth<800)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]);const n=[{icon:o.jsx(pk,{size:32}),title:"Excellence",description:"We strive for excellence in every project we undertake, ensuring the highest quality results for our clients."},{icon:o.jsx(rs,{size:32}),title:"Collaboration",description:"We believe in the power of teamwork and foster collaborative relationships with our clients and partners."},{icon:o.jsx(P9,{size:32}),title:"Integrity",description:"We uphold the highest standards of integrity and ethics in all our business dealings and relationships."},{icon:o.jsx(vk,{size:32}),title:"Innovation",description:"We embrace innovation and continuously seek new ways to improve our services and solutions."},{icon:o.jsx(Y9,{size:32}),title:"Passion",description:"We are passionate about what we do and committed to helping our clients achieve their goals."},{icon:o.jsx(hi,{size:32}),title:"Reliability",description:"We deliver on our promises and are committed to meeting deadlines and exceeding expectations."}],r=["Reduced operational costs","Access to specialized expertise","Increased efficiency and productivity","Focus on core business functions","Scalable resources to meet changing demands","Faster time-to-market for products and services"];return o.jsxs(DV,{id:"about",children:[o.jsx(bt,{title:"About Hyacinth Industries | Glenn Jacinto, Principal Executive",description:"Meet Glenn Jacinto, Principal Executive at Hyacinth Industries. Explore leadership experience, industries served, and selected client outcomes.",canonicalPath:"/about"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsxs(OV,{children:[o.jsxs(IV,{children:[o.jsx(FV,{children:"Hyacinth Industries"}),o.jsx(ZV,{children:"Built for operators who need sharper execution."})]}),o.jsxs(_V,{style:{flexDirection:e?"column":"row"},children:[o.jsx(NV,{style:{order:e?2:1,width:"100%"},children:o.jsxs(WV,{children:[o.jsx(UV,{children:"Streamline your business."}),o.jsx("br",{}),"Partner with Hyacinth Industries LLC for top-tier outsourcing solutions tailored to your industry's unique needs. Save time, cut costs, and stay ahead with our expert support. Let's make success your new standard, start outsourcing smarter today."]})}),o.jsx(BV,{style:{order:e?1:2,width:"100%"},children:o.jsx(o5,{images:[gt,$V,hr,qa,gr],autoPlayInterval:2500,style:{height:"300px"}})})]})]}),o.jsx(Kc,{children:o.jsxs(Go,{children:[o.jsx(Us,{children:"Our Mission"}),o.jsx(KV,{children:"At Hyacinth Industries, our mission is to empower businesses through innovative outsourcing solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional value by providing access to top-tier talent, cutting-edge technologies, and industry-leading expertise across diverse sectors."})]})}),o.jsx(qV,{children:o.jsxs(Go,{children:[o.jsx(Us,{children:"Executive Leadership"}),o.jsx(u$,{children:o.jsxs(h$,{children:[o.jsx(f$,{children:o.jsxs(p$,{children:[o.jsx(m$,{src:zV,alt:"Glenn Jacinto, Principal Executive at Hyacinth Industries"}),o.jsxs(g$,{children:[o.jsx(x$,{children:"Executive Profile"}),o.jsx(y$,{children:"Senior leadership across growth strategy, commercial partnerships, and operational execution."})]})]})}),o.jsxs(v$,{children:[o.jsx(w$,{children:"Principal Executive"}),o.jsx(b$,{children:"Glenn Jacinto"}),o.jsx(j$,{children:"Principal Executive, Hyacinth Industries"}),o.jsx(k$,{children:"Glenn Jacinto brings more than 15 years of leadership experience helping companies sharpen commercial strategy, strengthen delivery discipline, and build durable client relationships across multiple sectors."}),o.jsx(S$,{children:"His work centers on translating business objectives into practical operating plans, aligning teams around measurable outcomes, and supporting partners that need reliable execution alongside strategic judgment."}),o.jsxs(E$,{children:[o.jsxs(Td,{children:[o.jsx(Ld,{children:"Experience"}),o.jsx(Hd,{children:"15+ years"})]}),o.jsxs(Td,{children:[o.jsx(Ld,{children:"Core Discipline"}),o.jsx(Hd,{children:"Growth strategy, partnerships, and execution"})]}),o.jsxs(Td,{children:[o.jsx(Ld,{children:"Professional Profile"}),o.jsx(Hd,{children:o.jsx("a",{href:"https://www.linkedin.com/in/glenn-jacinto-bb2a87122/",target:"_blank",rel:"noopener noreferrer",children:"View Profile"})})]})]}),o.jsx(C$,{children:"Trusted by organizations looking for disciplined leadership, clearer commercial direction, and execution that holds up under growth pressure."}),o.jsxs(A$,{children:[o.jsxs(p4,{children:[o.jsx(m4,{children:"Sector Experience"}),o.jsxs(P$,{children:[o.jsx(Ko,{children:"SaaS"}),o.jsx(Ko,{children:"Technology"}),o.jsx(Ko,{children:"Logistics"}),o.jsx(Ko,{children:"Healthcare"}),o.jsx(Ko,{children:"Professional Services"})]})]}),o.jsxs(p4,{children:[o.jsx(m4,{children:"Representative Outcomes"}),o.jsxs(M$,{children:[o.jsx("li",{children:"Helped a Series B SaaS company close a $4M partnership deal in 90 days."}),o.jsx("li",{children:"Improved proposal win rate by 32% for a logistics provider within two quarters."}),o.jsx("li",{children:"Reduced service turnaround time by 25% for a healthcare team."})]})]})]})]})]})})]})}),o.jsx(GV,{children:o.jsxs(Go,{children:[o.jsx(Us,{children:"Our Values"}),o.jsx(YV,{children:n.map((i,a)=>o.jsxs(QV,{children:[o.jsx(XV,{children:i.icon}),o.jsx(JV,{children:i.title}),o.jsx(e$,{children:i.description})]},a))})]})}),o.jsx(Kc,{children:o.jsxs(Go,{children:[o.jsx(Us,{children:"Why Choose Us"}),o.jsxs(t$,{children:[o.jsxs(n$,{children:[o.jsx(Md,{children:"Hyacinth Industries LLC stands out as a premier outsourcing partner because we understand that each business has unique challenges and opportunities. Our approach combines deep industry knowledge with customized solutions designed to address your specific needs."}),o.jsx(Md,{children:"With a global network of highly skilled professionals, we deliver exceptional results across various industries including healthcare, engineering, administrative support, and creative services. Our commitment to quality, reliability, and innovation has earned us the trust of clients worldwide."}),o.jsx(Md,{children:"We don't just provide services; we build lasting partnerships focused on your long-term success. Our collaborative approach ensures that we align with your business objectives and work as an extension of your team."})]}),o.jsx(r$,{children:o.jsx(i$,{children:r.map((i,a)=>o.jsxs(o$,{children:[o.jsx(O9,{size:20,color:"#DC143C"}),o.jsx("span",{children:i})]},a))})})]})]})}),o.jsx(a$,{children:o.jsx(Go,{children:o.jsxs(s$,{children:[o.jsx(l$,{children:"Ready to transform your business?"}),o.jsx(c$,{children:"Partner with Hyacinth Industries LLC and discover how our outsourcing solutions can help you achieve your business goals."}),o.jsx(d$,{href:"/contact",children:"Contact Us Today"})]})})}),o.jsx(kt,{})]})}const DV=d.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  font-family: var(--font-body);
  padding-top: 110px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,OV=d.div`
  width: 100%;
  height: 100%;
  background-image: url(${ss});
  background-size: cover;
  background-position: center;
  padding: 3rem 0 4.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`,IV=d.div`
  max-width: 860px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
    margin-bottom: 2rem;
  }
`,FV=d.p`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #8b0d2a;
`,ZV=d.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;

  @media (max-width: 560px) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #dc143c, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`,_V=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 2.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 0 1.25rem;
  }
`,NV=d.div`
  flex: 0.4;
  padding: 0 1rem 0 0;
`,BV=d.div`
  flex: 0.6;
  padding: 0;
`,WV=d.p`
  font-family: var(--font-body);
  font-weight: 400;
  color: #2f3137;
  text-align: left;
  font-size: clamp(1.1rem, 1.45vw, 1.28rem);
  line-height: 1.9;
  max-width: 32rem;
  margin: 0;
`,UV=d.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-family: var(--font-accent);
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.02;
  color: #dc143c;
  letter-spacing: -0.03em;
`,Kc=d.section`
  padding: 6.5rem 0;
  background-color: #fff;
`,qV=d(Kc)`
  background:
    linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%);
`,GV=d(Kc)`
  background-color: #f9f9f9;
`,Go=d.div`
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: min(1200px, calc(100% - 1.25rem));
  }
`,Us=d.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  color: #1d1d1f;
  text-align: center;
  margin: 0 0 3.25rem;
  position: relative;
  letter-spacing: -0.035em;
  line-height: 1.08;

  &::after {
    content: "";
    display: block;
    width: 84px;
    height: 4px;
    background: #dc143c;
    margin: 1.1rem auto 0;
    border-radius: 999px;
  }
`,KV=d.p`
  font-family: var(--font-accent);
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  line-height: 1.9;
  color: #2f3137;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  font-style: italic;
`,YV=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,QV=d.div`
  background-color: white;
  padding: 2.1rem 2rem 2rem;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(17, 17, 17, 0.08);
  border: 1px solid rgba(20, 20, 20, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(17, 17, 17, 0.12);
  }
`,XV=d.div`
  color: #dc143c;
  margin-bottom: 1.25rem;
`,JV=d.h3`
  font-family: var(--font-heading);
  font-size: 1.42rem;
  color: #202124;
  margin: 0 0 0.8rem;
  letter-spacing: -0.02em;
`,e$=d.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: #5d6169;
  margin: 0;
`,t$=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`,n$=d.div``,r$=d.div`
  display: flex;
  align-items: center;
`,Md=d.p`
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.95;
  color: #30313a;
  margin: 0 0 1.5rem;
  max-width: 38rem;
`,i$=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,o$=d.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.3rem;
  color: #30313a;
`,a$=d.section`
  background: linear-gradient(135deg, #dc143c, #990000);
  padding: 6rem 0;
  color: white;
`,s$=d.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,l$=d.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 0 0 1.2rem;
  letter-spacing: -0.03em;
`,c$=d.p`
  font-family: var(--font-body);
  font-size: 1.12rem;
  line-height: 1.9;
  margin: 0 auto 2.2rem;
  max-width: 42rem;
`,d$=d.a`
  display: inline-block;
  background-color: white;
  color: #dc143c;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.1rem;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,u$=d.div`
  position: relative;
  padding: 1rem;
  border-radius: 28px;
  background: linear-gradient(180deg, #f8f9fb 0%, #eef1f5 100%);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    padding: 0.75rem;
    border-radius: 24px;
  }
`,h$=d.div`
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 2rem;
  align-items: stretch;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1.25rem;
    gap: 1.5rem;
  }
`,f$=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,p$=d.div`
  width: 100%;
  max-width: 300px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  padding: 0.75rem;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
`,m$=d.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
`,g$=d.div`
  padding: 0.9rem 0.2rem 0.1rem;
`,x$=d.p`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a10f2b;
`,y$=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.7;
  color: #4b5563;
`,v$=d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.35rem 0;
`,w$=d.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a10f2b;
`,b$=d.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: #111827;
`,j$=d.p`
  margin: 0.65rem 0 1rem;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #5b6472;
  max-width: 42rem;
`,k$=d.p`
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.85;
  color: #1f2937;
  max-width: 46rem;
`,S$=d.p`
  margin: 0 0 1.35rem;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.82;
  color: #4b5563;
  max-width: 46rem;
`,E$=d.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0 0 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Td=d.div`
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  min-height: 88px;
`,Ld=d.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`,Hd=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.55;

  a {
    color: #0f4c81;
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`,C$=d.p`
  margin: 0 0 1.5rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(220, 20, 60, 0.12);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(220, 20, 60, 0.04), rgba(220, 20, 60, 0.02));
  font-family: var(--font-accent);
  font-size: 0.98rem;
  line-height: 1.75;
  color: #7a2033;
`,A$=d.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,p4=d.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  padding: 1.15rem 1.2rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
`,m4=d.h4`
  margin: 0 0 0.9rem;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7c2d12;
`,P$=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`,Ko=d.span`
  display: inline-flex;
  align-items: center;
  background: #f8fafc;
  color: #334155;
  border: 1px solid #dbe3ec;
  border-radius: 999px;
  padding: 0.5rem 0.85rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
`,M$=d.ul`
  margin: 0;
  padding-left: 1.2rem;

  li {
    font-family: var(--font-body);
    font-size: 0.96rem;
    line-height: 1.78;
    color: #1f2937;
    margin-bottom: 0.8rem;
  }

  li::marker {
    color: #dc143c;
  }
`;function T$(){b.useEffect(()=>{window.scrollTo(0,0)},[]);const e=[{"@context":"https://schema.org","@type":"WebPage",name:"Industries & Expertise",description:"Explore the industries Hyacinth Industries supports, including logistics, healthcare, marketing, administrative support, web design, and business operations.",url:"https://hyacinthindustriesllc.com/industries"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://hyacinthindustriesllc.com/"},{"@type":"ListItem",position:2,name:"Industries",item:"https://hyacinthindustriesllc.com/industries"}]}];return o.jsxs(L$,{id:"industries",children:[o.jsx(bt,{title:"Industries We Support | Logistics, Healthcare, Marketing & More | Hyacinth Industries",description:"Explore the industries Hyacinth Industries supports, including logistics, healthcare, marketing, administrative support, web design, 3D animation, and general business services.",canonicalPath:"/industries",type:"website",image:"/og-image-v2.webp",structuredData:e}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(H$,{children:o.jsxs(V$,{children:[o.jsx($$,{children:"Capabilities"}),o.jsx(z$,{children:"Cross-functional support built around real operating pressure."}),o.jsx(R$,{children:"Explore the industries where Hyacinth Industries delivers specialized execution, domain fluency, and scalable support."})]})}),o.jsx(i5,{}),o.jsx(kt,{})]})}const L$=d.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px; /* Account for fixed navbar height */

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,H$=d.section`
  ${VH};
  padding-bottom: 3rem;
  background:
    radial-gradient(circle at top center, rgba(220, 20, 60, 0.08), transparent 58%),
    linear-gradient(180deg, #ffffff, #fbf7f8);
`,V$=d.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`,$$=d.p`
  ${hn};
  color: #8b0d2a;
`,z$=d.h1`
  ${zH};
`,R$=d.p`
  ${bi};
  max-width: 46rem;
  margin: 0 auto;
  text-align: center;
`;class ls{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const D$=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},tt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:D$()},_f=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},O$=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=_f(e);tt.publicKey=n.publicKey,tt.blockHeadless=n.blockHeadless,tt.storageProvider=n.storageProvider,tt.blockList=n.blockList,tt.limitRate=n.limitRate,tt.origin=n.origin||t},a5=async(e,t,n={})=>{const r=await fetch(tt.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),a=new ls(r.status,i);if(r.ok)return a;throw a},s5=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},I$=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},l5=e=>e.webdriver||!e.languages||e.languages.length===0,c5=()=>new ls(451,"Unavailable For Headless Browser"),F$=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},Z$=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},_$=(e,t)=>e instanceof FormData?e.get(t):e[t],d5=(e,t)=>{if(Z$(e))return!1;F$(e.list,e.watchVariable);const n=_$(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},u5=()=>new ls(403,"Forbidden"),N$=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},B$=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},h5=async(e,t,n)=>{if(!t.throttle||!n)return!1;N$(t.throttle,t.id);const r=t.id||e;return await B$(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},f5=()=>new ls(429,"Too Many Requests"),W$=async(e,t,n,r)=>{const i=_f(r),a=i.publicKey||tt.publicKey,s=i.blockHeadless||tt.blockHeadless,l=i.storageProvider||tt.storageProvider,c={...tt.blockList,...i.blockList},u={...tt.limitRate,...i.limitRate};return s&&l5(navigator)?Promise.reject(c5()):(s5(a,e,t),I$(n),n&&d5(c,n)?Promise.reject(u5()):await h5(location.pathname,u,l)?Promise.reject(f5()):a5("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},U$=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},q$=e=>typeof e=="string"?document.querySelector(e):e,G$=async(e,t,n,r)=>{const i=_f(r),a=i.publicKey||tt.publicKey,s=i.blockHeadless||tt.blockHeadless,l=tt.storageProvider||i.storageProvider,c={...tt.blockList,...i.blockList},u={...tt.limitRate,...i.limitRate};if(s&&l5(navigator))return Promise.reject(c5());const f=q$(n);s5(a,e,t),U$(f);const p=new FormData(f);return d5(c,p)?Promise.reject(u5()):await h5(location.pathname,u,l)?Promise.reject(f5()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",a),a5("/api/v1.0/email/send-form",p))},K$={init:O$,send:W$,sendForm:G$,EmailJSResponseStatus:ls};function Y$(){const e=b.useRef(),[t,n]=b.useState({name:"",email:"",message:""}),[r,i]=b.useState({type:"",message:""}),a=l=>{const{name:c,value:u}=l.target;n(f=>({...f,[c]:u}))},s=l=>{l.preventDefault(),i({type:"info",message:"Sending..."}),K$.sendForm("service_kg4sxue","template_ssxuezt",e.current,"8RFXsVRIJyMbgbUP3").then(c=>{i({type:"success",message:"Message sent successfully!"}),n({name:"",email:"",message:""})}).catch(c=>{i({type:"error",message:"Failed to send message. Please try again."}),console.error("EmailJS error:",c)})};return o.jsxs(Q$,{ref:e,onSubmit:s,children:[o.jsxs(Vd,{children:[o.jsx($d,{children:"Name"}),o.jsx(g4,{type:"text",name:"name",value:t.name,onChange:a,required:!0,placeholder:"Enter your name"})]}),o.jsxs(Vd,{children:[o.jsx($d,{children:"Email"}),o.jsx(g4,{type:"email",name:"email",value:t.email,onChange:a,required:!0,placeholder:"Enter your email"})]}),o.jsxs(Vd,{children:[o.jsx($d,{children:"What are you working on?"}),o.jsx(X$,{name:"message",value:t.message,onChange:a,required:!0,placeholder:"Tell us a little about your project, goal, or challenge",rows:"5"})]}),r.message&&o.jsx(ez,{type:r.type,children:r.message}),o.jsx(J$,{type:"submit",children:"Send Message"})]})}const Q$=d.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`,Vd=d.div`
  margin-bottom: 24px;
  
  &:last-of-type {
    margin-bottom: 32px;
  }
`,$d=d.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`,p5=`
  width: 100%;
  padding: 14px;
  color: #333;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;

  &:hover {
    border-color: #bdbdbd;
    background-color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #424242;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 66, 66, 0.1);
  }
`,g4=d.input`
  ${p5}
`,X$=d.textarea`
  ${p5}
  min-height: 120px;
  resize: vertical;
`,J$=d.button`
  width: 100%;
  background-color: #424242;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #212121;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,ez=d.div`
  margin: 0 0 24px;
  padding: 14px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${e=>{switch(e.type){case"error":return"background-color: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7;";case"success":return"background-color: #f0fff4; color: #38a169; border: 1px solid #c6f6d5;";default:return"background-color: #f5f5f5; color: #424242; border: 1px solid #e0e0e0;"}}}
`;function tz(){b.useEffect(()=>{window.scrollTo(0,0)},[]);const e=["Direct access to the right service conversation","Clear next steps based on your business needs","Confidential handling of partnership and service inquiries"];return o.jsxs(nz,{id:"contact",children:[o.jsx(bt,{title:"Work With Us | Hyacinth Industries LLC",description:"Contact Hyacinth Industries LLC for inquiries, partnerships, and service requests.",canonicalPath:"/contact"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(rz,{children:o.jsxs(iz,{children:[o.jsx(oz,{children:"Work With Us"}),o.jsx(lz,{children:"Start a conversation about what you're building."}),o.jsx(cz,{children:"Have questions, partnership ideas, or a service request? Reach out and we'll direct your inquiry to the right next step."}),o.jsx(dz,{children:o.jsx(uz,{href:"#contact-form",children:"Get Started"})})]})}),o.jsx(az,{children:o.jsxs(sz,{id:"contact-form",children:[o.jsxs(hz,{children:[o.jsx(fz,{children:"Business Inquiries"}),o.jsx(pz,{children:"Professional support for serious conversations."}),o.jsx(mz,{children:"Hyacinth Industries works with organizations looking for reliable execution, specialized support, and practical operating clarity. Use the form to start the conversation and share the service area or challenge you're evaluating."}),o.jsx(gz,{children:e.map(t=>o.jsxs(xz,{children:[o.jsx(X,{size:18}),o.jsx("span",{children:t})]},t))}),o.jsxs(yz,{children:[o.jsxs(zd,{children:[o.jsx(Rd,{children:o.jsx(sf,{size:18})}),o.jsx(Dd,{children:"Email"}),o.jsx(x4,{href:"mailto:info@hyacinthindustriesllc.com",children:"info@hyacinthindustriesllc.com"})]}),o.jsxs(zd,{children:[o.jsx(Rd,{children:o.jsx(lk,{size:18})}),o.jsx(Dd,{children:"Phone"}),o.jsx(x4,{href:"tel:+18132133276",children:"+1 (813) 213-3276"})]}),o.jsxs(zd,{children:[o.jsx(Rd,{children:o.jsx(Za,{size:18})}),o.jsx(Dd,{children:"Approach"}),o.jsx(vz,{children:"Clear, confidential, and aligned with your business context."})]})]})]}),o.jsxs(wz,{children:[o.jsxs(bz,{children:[o.jsx(jz,{children:"Inquiry Form"}),o.jsx(kz,{children:"Tell us what you need."}),o.jsx(Ez,{children:"Include your area of interest and a short overview of the opportunity, project, or support requirement."}),o.jsx(Sz,{children:"We respond within 1 business day."})]}),o.jsx(Y$,{})]})]})}),o.jsx(kt,{})]})}const nz=d.div`
  width: 100%;
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px; /* Account for fixed navbar height */

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,rz=d.section`
  width: 100%;
  background-image: url(${ss});
  background-size: cover;
  height: 100vh;
  background-position: center;
  padding: 3rem 0 4rem;
  position: relative;
  justify-content: center;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`,iz=d.div`
  max-width: 860px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`,oz=d.p`
  ${hn};
  color: #8b0d2a;
`,az=d.div`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto 80px;

  @media (max-width: 640px) {
    width: min(1180px, calc(100% - 1.25rem));
    margin-bottom: 56px;
  }
`,sz=d.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 2rem;
  align-items: start;
  scroll-margin-top: 140px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,lz=d.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0 auto 1rem;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  max-width: 20ch;

  @media (max-width: 560px) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #dc143c, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`,cz=d.p`
  ${bi};
  max-width: 34rem;
  margin: 0 auto;
  text-align: center;
  color: #2f3137;
  font-size: clamp(1.05rem, 1.45vw, 1.18rem);
`,dz=d.div`
  margin-top: 1.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`,uz=d.a`
  ${fn};
`,hz=d.section`
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 248, 250, 0.98));
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2.1rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.4rem;
    border-radius: 22px;
  }
`,fz=d.p`
  ${hn};
  color: #8b0d2a;
  margin-bottom: 0.9rem;
`,pz=d.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 3vw, 2.65rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #1d1d1f;
  margin: 0 0 1rem;
`,mz=d.p`
  ${bi};
  text-align: left;
  margin: 0 0 1.5rem;
  max-width: 38rem;
`,gz=d.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: grid;
  gap: 0.85rem;
`,xz=d.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #27303f;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;

  svg {
    color: #a10f2b;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`,yz=d.div`
  display: grid;
  gap: 0.9rem;
`,zd=d.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  padding: 1rem 1.05rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);

  @media (max-width: 640px) {
    padding: 0.95rem;
  }
`,Rd=d.div`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.8rem;
`,Dd=d.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
`,x4=d.a`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  line-height: 1.6;
  overflow-wrap: anywhere;

  &:hover {
    color: #a10f2b;
  }
`,vz=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #374151;
`,wz=d.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 16px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,bz=d.div`
  margin-bottom: 1.4rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
`,jz=d.p`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`,kz=d.h2`
  margin: 0 0 0.55rem;
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #16181d;
`,Sz=d.p`
  margin: 0.85rem 0 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8b0d2a;
  font-weight: 600;
`,Ez=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #5b6472;
  max-width: 36rem;
`,Cz=[{icon:fk,title:"Brand Strengthening",kicker:"Positioning, messaging, and market credibility",includes:"This service includes work on brand narrative, positioning clarity, messaging refinement, executive-level presentation, and the commercial materials that shape how the market understands your business. It can involve clarifying what you want to be known for, tightening category language, improving how value is communicated across leadership and sales conversations, and identifying where your current presentation is weakening trust or creating confusion. The goal is not superficial branding work. It is to make sure the company is described in a way that supports stronger conversations, better-fit opportunities, and a more credible presence with serious buyers, partners, and stakeholders.",body:"Hyacinth Industries helps companies sharpen how they are understood in the market so their positioning, messaging, and outward presence support growth instead of slowing it down. This work can include clarifying brand narrative, tightening category positioning, refining how teams talk about value, and aligning commercial materials with the level of buyer you want to attract. It is best suited for founders, operators, and commercial leaders who know their company has real strengths but need those strengths expressed more clearly and consistently. Typical outcomes include stronger market confidence, cleaner sales conversations, better alignment between marketing and leadership, and a brand presentation that supports larger opportunities instead of underselling the business.",forWho:"Best for companies repositioning for growth, entering a new market, or trying to present a more credible executive profile to higher-value buyers.",outcomes:["Clearer market positioning and sharper category language","Better alignment between leadership messaging and sales materials","Stronger trust signals for partners, buyers, and investors"],cta:"Talk About Brand Strategy"},{icon:L9,title:"Deal Strategy & Closing",kicker:"Commercial structure, momentum, and decision support",includes:"This service includes support across qualification, stakeholder mapping, opportunity strategy, offer framing, partnership structure, and the communication required to keep a deal moving. It can also include reviewing where momentum is breaking down, identifying weak points in the commercial process, and improving how teams manage decision-makers, objections, and next steps. The focus is on increasing discipline around complex opportunities rather than relying on reactive selling. For organizations pursuing larger accounts, strategic partnerships, or higher-stakes transactions, this work helps create a more controlled process so leadership can move with stronger leverage, cleaner alignment, and better judgment throughout the path to close.",body:"This service is built for organizations that need more discipline and leverage across the deal cycle, especially when opportunities are strategic, high value, or operationally complex. Hyacinth Industries supports the work around qualification, stakeholder mapping, offer framing, partnership structuring, and the communication needed to keep momentum through closing. Rather than treating deals as isolated pitches, the focus is on improving the quality of the commercial process so leadership can move with more clarity and control. This is a strong fit for teams pursuing enterprise accounts, channel partnerships, or expansion opportunities where execution quality matters as much as relationship quality. Typical outcomes include stronger win rates, cleaner internal alignment on priorities, shorter cycles on qualified opportunities, and more confidence in how major deals are advanced and closed.",forWho:"Best for commercial teams, founders, and principals pursuing larger accounts, partnerships, or strategic transactions where the process needs senior-level structure.",outcomes:["Improved deal qualification and stakeholder alignment","Stronger commercial messaging at key negotiation moments","Higher confidence and discipline in moving complex deals to close"],cta:"Discuss a Growth Opportunity"},{icon:Z9,title:"Product Improvement",kicker:"Execution clarity, customer fit, and better prioritization",includes:"This service includes evaluating customer friction, clarifying product or service priorities, improving the handoff between teams, and turning market feedback into better operating decisions. It can cover where the current offer feels hard to use, hard to explain, or hard to scale, as well as where execution issues are creating product problems that are not purely technical. The work is designed to help teams make better decisions about what to improve, what to simplify, and what to prioritize next. Instead of adding features without direction, the emphasis is on practical improvements that strengthen customer fit, improve internal execution, and support clearer adoption, retention, and revenue outcomes.",body:"Product improvement work focuses on making what you already offer more effective, more usable, and more aligned with what customers actually need. That can mean identifying friction in the experience, tightening feature priorities, improving handoff between teams, or translating market feedback into clearer product decisions. Hyacinth Industries approaches this as an operating problem as much as a product problem, because good products usually improve when execution improves around them. This service is especially useful for teams with an existing offer that is underperforming, hard to explain, or not converting as well as it should despite clear demand signals. Typical outcomes include better product clarity, faster prioritization decisions, improved customer experience, and a more practical roadmap tied to adoption, retention, and revenue goals.",forWho:"Best for teams with an established product or service that needs sharper customer alignment, clearer prioritization, and stronger execution around delivery.",outcomes:["Reduced friction in customer experience and internal workflows","Stronger alignment between product decisions and business goals","More focused roadmaps tied to adoption, retention, and growth"],cta:"Start a Product Conversation"}],Az=["Senior-level thinking translated into practical execution","Structured support across brand, deals, and product decisions","Clear commercial and operational outcomes, not generic advisory language"];function Pz(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(Mz,{id:"services",children:[o.jsx(bt,{title:"Services | Hyacinth Industries LLC",description:"Explore Hyacinth Industries services in brand strengthening, deal strategy and closing, and product improvement.",canonicalPath:"/services"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(Tz,{children:o.jsxs(Lz,{children:[o.jsx(Hz,{children:"Services"}),o.jsx(Vz,{children:"Three service lines built around growth, execution, and commercial clarity."}),o.jsx($z,{children:"Hyacinth Industries supports companies that need sharper positioning, stronger deal execution, and better product decisions without adding unnecessary complexity."}),o.jsx(zz,{href:"#services-list",children:"Get Started"})]})}),o.jsx(Rz,{children:o.jsxs(Dz,{children:[o.jsxs(Oz,{children:[o.jsx(Iz,{children:"What We Help Improve"}),o.jsx(Fz,{children:"Consulting support built around the moments where clarity matters most."}),o.jsx(Zz,{children:"Hyacinth Industries works with companies that need stronger market positioning, sharper commercial execution, and better product decisions without adding noise to the operating model. Our services are designed to help leadership teams move from broad ambition to clearer direction, stronger discipline, and outcomes that stand up under growth pressure."})]}),o.jsx(_z,{children:Az.map(e=>o.jsxs(Nz,{children:[o.jsx(Bz,{children:o.jsx(M9,{size:18})}),o.jsx(Wz,{children:e})]},e))})]})}),o.jsx(Uz,{id:"services-list",children:Cz.map(e=>o.jsx(qz,{children:o.jsxs(Gz,{children:[o.jsxs(Kz,{children:[o.jsx(Yz,{children:o.jsx(e.icon,{size:22})}),o.jsx(Qz,{children:e.kicker}),o.jsx(Xz,{children:e.title}),o.jsx(Jz,{children:e.body})]}),o.jsxs(eR,{children:[o.jsxs(tR,{children:[o.jsxs(Od,{children:[o.jsx(Id,{children:"What It Includes"}),o.jsx(y4,{children:e.includes})]}),o.jsxs(Od,{children:[o.jsx(Id,{children:"Who It's For"}),o.jsx(y4,{children:e.forWho})]}),o.jsxs(Od,{children:[o.jsx(Id,{children:"Typical Outcomes"}),o.jsx(nR,{children:e.outcomes.map(t=>o.jsx("li",{children:t},t))})]})]}),o.jsxs(rR,{href:"/contact",children:[e.cta,o.jsx(A9,{size:18})]})]})]})},e.title))}),o.jsx(kt,{})]})}const Mz=d.div`
  width: 100%;
  overflow: hidden;
  padding-top: 110px;
`,Tz=d.section`
  width: 100%;
  background-image: url(${ss});
  background-size: cover;
  background-position: center;
  padding: 3rem 0 4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`,Lz=d.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`,Hz=d.p`
  ${hn};
  color: #8b0d2a;
`,Vz=d.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0 auto 1rem;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  max-width: 20ch;

  @media (max-width: 560px) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #dc143c, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`,$z=d.p`
  ${bi};
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  color: #2f3137;
  font-size: clamp(1.05rem, 1.45vw, 1.18rem);
`,zz=d.a`
  ${fn};
  margin-top: 1.5rem;
`,Rz=d.section`
  padding: 4rem 20px 1.25rem;
`,Dz=d.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`,Oz=d.div`
  background: linear-gradient(180deg, #ffffff, #fbfbfc);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2rem 2.1rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);
`,Iz=d.p`
  margin: 0 0 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`,Fz=d.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #17181c;
  max-width: 15ch;
`,Zz=d.p`
  ${bi};
  margin: 0;
  color: #374151;
`,_z=d.div`
  display: grid;
  gap: 1rem;
`,Nz=d.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 22px;
  padding: 1.2rem 1.25rem;
  box-shadow: 0 14px 34px rgba(17, 17, 17, 0.07);
`,Bz=d.div`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.75rem;
`,Wz=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #334155;
`,Uz=d.div`
  max-width: 1180px;
  margin: 0 auto 4rem;
  padding: 1rem 20px 0;
  display: grid;
  gap: 1.25rem;
  scroll-margin-top: 140px;
`,qz=d.section`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 1.7rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 22px;
  }
`,Gz=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,Kz=d.div`
  min-width: 0;
`,Yz=d.div`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.8rem;
`,Qz=d.p`
  margin: 0 0 0.4rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`,Xz=d.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.85rem, 3vw, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #17181c;
  margin: 0 0 0.7rem;
`,Jz=d.p`
  ${bi};
  margin: 0;
  color: #374151;
  max-width: 34rem;
`,eR=d.div`
  min-width: 0;
`,tR=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
  margin-bottom: 1.15rem;
`,Od=d.div`
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  height: fit-content;
`,Id=d.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`,y4=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.72;
  color: #334155;
`,nR=d.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    font-family: var(--font-body);
    font-size: 0.98rem;
    line-height: 1.72;
    color: #334155;
    margin-bottom: 0.35rem;
  }

  li::marker {
    color: #dc143c;
  }
`,rR=d.a`
  ${fn};
  gap: 0.65rem;
`,v4=[{question:"What is fractional executive consulting?",answer:"Fractional executive consulting gives you access to senior-level leadership support without making a full-time executive hire. It is designed for companies that need strategic direction, sharper execution, and experienced decision support for a defined period or priority area."},{question:"Who is Hyacinth Industries for?",answer:"Hyacinth Industries is for founders, operators, and leadership teams that need help strengthening how the business is positioned, sold, or improved. It is especially useful for companies that are growing, entering a new market, trying to close larger opportunities, or working through product and execution friction."},{question:"How long does engagement typically last?",answer:"Engagement length depends on the scope, urgency, and type of support needed. Some companies need short-term help around a specific initiative, while others benefit from ongoing support over several months as strategy and execution take shape."},{question:"What industries do you work with?",answer:"Hyacinth Industries works across multiple sectors, including logistics, healthcare, marketing, administrative support, web design, general services, and related growth-focused business functions. The common thread is helping organizations improve commercial clarity, operational execution, and customer-facing outcomes."},{question:"How is this different from hiring a consultant or a full-time hire?",answer:"The difference is the level of involvement and flexibility. Hyacinth Industries provides senior-level thinking that stays close to execution, so clients get strategic support without the cost, delay, and long-term commitment of hiring a full-time executive."},{question:"How do I get started?",answer:"The easiest way to get started is to reach out through the contact page and share what you are trying to solve. From there, the conversation can focus on your goals, the gaps in the current approach, and whether the engagement is a good fit."}];function iR(){const[e,t]=b.useState(0);return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(oR,{children:[o.jsx(bt,{title:"FAQ | Hyacinth Industries LLC",description:"Answers to common questions about Hyacinth Industries, our consulting model, industries served, and how to get started.",canonicalPath:"/faq",structuredData:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:v4.map(n=>({"@type":"Question",name:n.question,acceptedAnswer:{"@type":"Answer",text:n.answer}}))}}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(aR,{"aria-labelledby":"faq-page-heading",children:o.jsx(sR,{children:o.jsxs(lR,{children:[o.jsxs(cR,{children:[o.jsx(dR,{children:"FAQ"}),o.jsx(uR,{id:"faq-page-heading",children:"Questions teams usually ask before they reach out."}),o.jsx(hR,{children:"These answers are meant to make the first conversation easier and help you decide whether Hyacinth Industries is the right fit for what your business needs next."}),o.jsx(fR,{children:"Clear answers matter early. This page is designed to help leadership teams understand the model, the fit, and what working together usually looks like."}),o.jsxs(kR,{children:[o.jsx(Fd,{children:"Senior-level support"}),o.jsx(Fd,{children:"Flexible engagements"}),o.jsx(Fd,{children:"Multi-sector experience"})]})]}),o.jsx(pR,{"aria-label":"Frequently asked questions",children:v4.map((n,r)=>o.jsxs(mR,{$isOpen:e===r,children:[o.jsx(gR,{children:String(r+1).padStart(2,"0")}),o.jsxs(xR,{children:[o.jsxs(yR,{type:"button","aria-expanded":e===r,"aria-controls":`faq-answer-${r}`,onClick:()=>t(i=>i===r?-1:r),children:[o.jsx(vR,{children:n.question}),o.jsx(wR,{"aria-hidden":"true",$isOpen:e===r,children:e===r?"-":"+"})]}),o.jsx(bR,{id:`faq-answer-${r}`,$isOpen:e===r,"aria-hidden":e===r?"false":"true",children:o.jsx(jR,{children:n.answer})})]})]},n.question))})]})})}),o.jsx(SR,{children:o.jsxs(ER,{children:[o.jsx(CR,{children:"Still deciding if Hyacinth is the right fit?"}),o.jsx(AR,{children:"We can talk through your goals, timing, and where leadership support would have the biggest impact."}),o.jsx(PR,{href:"/contact",children:"Schedule a Discovery Call"})]})}),o.jsx(kt,{})]})}const oR=d.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,aR=d.section`
  padding: 2rem 20px 5rem;
  background: 
    radial-gradient(circle at the top left, rgba(180, 8, 33, 0.1), transparent 38%),
    linear-gradient(180deg, #f8f8f7 0%, #ffffff 100%);

  @media (max-width: 640px) {
    padding: 1.5rem 16px 4rem;
  }
`,sR=d.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`,lR=d.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,cR=d.div`
  position: sticky;
  top: 132px;
  background:
    linear-gradient(160deg, rgba(139, 13, 42, 0.97), rgba(45, 11, 17, 0.98)), #2b1014;
  border-radius: 30px;
  padding: 2rem 1.8rem;
  color: #fff7f2;
  box-shadow: 0 24px 48px rgba(48, 16, 21, 0.24);
  overflow: hidden;

  &::after{
    content: "";
    position: absolute;
    inset: auto -60px -80px auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 68%);
    pointer-events: none;
  }

  @media (max-width: 960px) {
    position: relative;
    top: auto;
  }

  @media (max-width: 640px) {
    padding: 1.4rem 1.2rem;
    border-radius: 22px;
  }
`,dR=d.p`
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffd7b8;
`,uR=d.h1`
  margin: 0;
  max-width: 14ch;
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #ffffff;
`,hR=d.p`
  margin: 1rem 0 2rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.75;
  color: rgba(255, 247, 242, 0.86);
`,fR=d.p`
  margin: 0;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 247, 242, 0.75);
`,pR=d.div`
  display: grid;
  gap: 1rem;
`,mR=d.article`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(20, 20, 20, 0.07);
  border-radius: 26px;
  padding: 1.35rem 1.4rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 44px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.18);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.15rem;
  }

  ${({$isOpen:e})=>e&&`
    border-color: rgba(139, 13, 42, 0.22);
    box-shadow: 0 22px 40px rgba(139, 13, 42, 0.08);
  `}
`,gR=d.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #fff4ee, #f8e0d1);
  border: 1px solid rgba(180, 8, 33, 0.12);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8b0d2a;
`,xR=d.div`
  min-width: 0;
`,yR=d.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
`,vR=d.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.18rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #17181c;
`,wR=d.span`
  width: 36px;
  height: 36px;
  flex:  0 0 36px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({$isOpen:e})=>e?"#8b0d2a":"#f8e8de"};
  color: ${({$isOpen:e})=>e?"#ffffff":"#8b0d2a"};
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};

`,bR=d.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"}; 
  transition: grid-template-rows 0.28s ease, margin-top 0.28s ease;
  margin-top: ${({$isOpen:e})=>e?"1rem":"0"};

  & > * {
    overflow: hidden;
  }
`,jR=d.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.97rem;
  line-height: 1.78;
  color: #475569;
`,kR=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
`,Fd=d.span`
  display: inline-flex;
  align-items: center;
  padding: 0.58rem 0.9rem;
  border-radius: 999px;
  background:  rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff7f2;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
`,SR=d.section`
  padding: 0 20px 5rem;
  background: linear-gradient(180deg, #ffffff 0%, #fbf7f4 100%);

  @media (max-width: 640px) {
    padding: 0 16px 4rem;
  }
`,ER=d.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  border-radius: 28px;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #8b0d2a, #5a0a1b);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 50px rgba(91, 10, 27, 0.2);

  @media (max-width: 640px) {
    padding: 1.75rem 1.2rem;
    border-radius: 22px;
  }
`,CR=d.h2`
  margin: 0 0 0.9rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
`,AR=d.p`
  margin: 0 auto 1.5rem;
  max-width: 42rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.86);
`,PR=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  background: #ffffff;
  color: #8b0d2a;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
  }
`,MR="/assets/ReforestationBg4-CqDKIcYq.webp",TR=[{name:"Togo Logistics",slug:"togo-logistics",website:"https://www.togologistics.com",logo:"/logos/togo-logistics.webp",treeCount:220,year:2026,summary:"Trees allocated through Hyacinth Industries' annual reforestation program."},{name:"Sample Client",slug:"sample-client",website:"https://www.sampleclient.com",logo:"/logos/sample-client.webp",treeCount:35,year:2026,summary:"Client supported through Hyacinth's reforestation initiative and Earth Month campaign."}];function LR(){b.useEffect(()=>{window.scrollTo(0,0)},[]);const e=[{"@context":"https://schema.org","@type":"WebPage",name:"Hyacinth Reforestation Project 2026",description:"Learn about the Hyacinth Industries Reforestation Project, including tree allocations, participating organizations, GPS-based planting visibility, and QR bark tag identification.",url:"https://hyacinthindustriesllc.com/reforestation"},{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://hyacinthindustriesllc.com/"},{"@type":"ListItem",position:2,name:"Reforestation Project",item:"https://hyacinthindustriesllc.com/reforestation"}]}];return o.jsxs(HR,{children:[o.jsx(bt,{title:"Reforestation Project 2026 | Tree Planting & Sustainability Initiative | Hyacinth Industries",description:"Explore the Hyacinth Industries Reforestation Project, including tree planting allocations, participating organizations, QR bark tag identification, GPS-based planting records, and Earth Month sustainability efforts.",canonicalPath:"/reforestation",type:"article",image:"/og-image-v2.webp",structuredData:e}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(VR,{children:o.jsx($R,{children:o.jsxs(zR,{children:[o.jsx(DR,{children:"Reforestation Initiative"}),o.jsx(OR,{children:"Hyacinth Reforestation Project 2026"}),o.jsx(IR,{children:"The Hyacinth Reforestation Project is a tree planting and sustainability initiative that helps organizations support environmental impact while gaining visibility through participating organization features, QR bark tag identification, and GPS-based planting records."}),o.jsx(RR,{children:"Each QR tag routes back to this landing page, where participating organizations, planting details, and future project updates can be viewed."}),o.jsxs(NR,{children:[o.jsxs(Zd,{children:[o.jsx("strong",{children:"Planting Cycles"}),o.jsx("span",{children:"Organization-linked tree allocation"})]}),o.jsxs(Zd,{children:[o.jsx("strong",{children:"Bark Tag System"}),o.jsx("span",{children:"Natural tree-level identification"})]}),o.jsxs(Zd,{children:[o.jsx("strong",{children:"Tracked Impact"}),o.jsx("span",{children:"GPS-based planting records"})]})]}),o.jsxs(ZR,{children:[o.jsx(FR,{onClick:t=>{t.preventDefault();const n=document.getElementById("client-directory"),r=120;if(n){const i=n.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:i,behavior:"smooth"})}},children:"View Participating Clients"}),o.jsx(_R,{onClick:t=>{t.preventDefault();const n=document.getElementById("how-it-works"),r=120;if(n){const i=n.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:i,behavior:"smooth"})}},children:"How It Works"})]})]})})}),o.jsx(BR,{children:o.jsxs(Yo,{children:[o.jsxs(qR,{children:[o.jsxs(GR,{children:[o.jsx(qs,{children:"Project Overview"}),o.jsx(Xs,{children:"Project Purpose"}),o.jsx(_d,{children:"This initiative connects client relationships with measurable tree planting. Each participating organization receives a tree allocation based on employee tenure, and every planting cycle contributes to Hyacinth Industries' long-term sustainability efforts."}),o.jsx(_d,{children:"The program is designed to create environmental impact while giving clients a more visible and lasting connection to the initiative through bark tags, QR routing, and GPS-based planting records."})]}),o.jsxs(KR,{children:[o.jsx(YR,{children:"One landing page. Multiple client allocations."}),o.jsxs(QR,{children:[o.jsx("li",{children:"Acts as the shared destination for every QR bark tag in the field"}),o.jsx("li",{children:"Shows participating organizations and their current tree allocations"}),o.jsx("li",{children:"Creates a long-term sustainability touchpoint for current and former clients"}),o.jsx("li",{children:"Supports future paid add-ons such as banners, swag, photos, video, and social content"})]})]})]}),o.jsxs(XR,{children:[o.jsxs(Nd,{children:[o.jsx(Bd,{children:"35"}),o.jsx(Wd,{children:"Trees Planted in 2025"})]}),o.jsxs(Nd,{children:[o.jsx(Bd,{children:"335"}),o.jsx(Wd,{children:"Projected in 2026"})]}),o.jsxs(Nd,{children:[o.jsx(Bd,{children:"960"}),o.jsx(Wd,{children:"Projected for 2027"})]})]})]})}),o.jsx(w4,{id:"how-it-works",children:o.jsxs(Yo,{children:[o.jsx(qs,{children:"Process"}),o.jsx(Xs,{children:"How The Reforestation System Works"}),o.jsxs(WR,{children:[o.jsxs(Gs,{children:[o.jsx(Ks,{children:"01"}),o.jsx(Ys,{children:"Tree allocation"}),o.jsx(Qs,{children:"Each participating organization receives a tree allocation tied to employee tenure and the current planting cycle."})]}),o.jsxs(Gs,{children:[o.jsx(Ks,{children:"02"}),o.jsx(Ys,{children:"Bark tag identification"}),o.jsx(Qs,{children:"Each planted tree receives a bark-based tag with a laser-engraved QR code on the front and Hyacinth Reforestation Project branding on the reverse."})]}),o.jsxs(Gs,{children:[o.jsx(Ks,{children:"03"}),o.jsx(Ys,{children:"Cluster mapping"}),o.jsx(Qs,{children:"Trees are planted in clusters, and GPS coordinates are recorded for every 10 trees so planting areas remain identifiable even after the bark tags naturally degrade over time."})]}),o.jsxs(Gs,{children:[o.jsx(Ks,{children:"04"}),o.jsx(Ys,{children:"Visibility page"}),o.jsx(Qs,{children:"Scanning the QR code routes visitors to this page, where the project, participating clients, and future updates can be viewed."})]})]})]})}),o.jsx(UR,{id:"client-directory",children:o.jsxs(Yo,{children:[o.jsx(qs,{children:"Participating Organizations"}),o.jsx(Xs,{children:"Participating Organizations"}),o.jsx(JR,{children:TR.map(t=>o.jsxs(eD,{id:t.slug,children:[o.jsxs(tD,{children:["Participating ",t.year]}),o.jsx(nD,{children:o.jsx(rD,{src:t.logo,alt:`${t.name} logo`})}),o.jsxs(iD,{children:[o.jsx(oD,{children:t.name}),o.jsxs(aD,{children:[t.treeCount," Trees"]}),o.jsxs(sD,{children:[t.year," Allocation"]}),o.jsx(lD,{children:t.summary})]}),o.jsx(cD,{href:t.website,target:"_blank",rel:"noopener noreferrer",children:"Visit Website"})]},t.slug))})]})}),o.jsx(w4,{children:o.jsxs(Yo,{children:[o.jsx(qs,{children:"Marketing Package"}),o.jsx(Xs,{children:"Reforestation Packages"}),o.jsx(_d,{children:"Participating organizations may also choose optional support tied to the reforestation initiative, including tarpaulins, branded swag, photography, videography, and social content."})]})}),o.jsx(dD,{children:o.jsx(Yo,{children:o.jsxs(uD,{children:[o.jsx(hD,{children:"Interested in participating in the next planting cycle?"}),o.jsx(fD,{children:"Hyacinth Industries can align future tree allocations, visibility assets, and optional brand activation support with your organization."}),o.jsx(pD,{href:"/contact",children:"Contact Hyacinth"})]})})}),o.jsx(kt,{})]})}const HR=d.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background:
    linear-gradient(180deg, #f6f2eb 0%, #ffffff 28%, #f5f7f2 100%);

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,VR=d.section`
  position: relative;
  min-height: calc(100dvh - 110px);
  padding: clamp(1.5rem, 2.2vw, 2.75rem) 20px clamp(1.75rem, 2.8vw, 3.25rem);
  display: flex;
  align-items: center;
  background-image: url(${MR});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 18%, rgba(226, 196, 107, 0.2), transparent 20%),
      radial-gradient(circle at 82% 22%, rgba(72, 127, 94, 0.14), transparent 26%),
      linear-gradient(135deg, rgba(10, 24, 18, 0.68), rgba(58, 14, 25, 0.58)),
      linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.22));
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 42px 42px;
    opacity: 0.18;
    mix-blend-mode: soft-light;
    z-index: 1;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1680px) {
    min-height: calc(100dvh - 110px);
    padding: 2.5rem 28px 3rem;
  }

  @media (max-width: 1024px) {
    min-height: calc(100dvh - 60px);
    padding: 1.25rem 16px 1.75rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 1rem 16px 1.5rem;
  }
`,$R=d.div`
  position: absolute;
  width: min(1240px, 100%);
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  min-height: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`,zR=d.div`
  width: min(760px, 100%);
  padding: clamp(1.2rem, 1.8vw, 2rem);
  border-radius: clamp(24px, 2vw, 32px);
  background: linear-gradient(180deg, rgba(10, 18, 14, 0.5), rgba(10, 18, 14, 0.24));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 52px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(12px);

  @media (max-width: 1680px) {
    width: min(860px, 100%);
    padding: 1.6rem 1.7rem 1.75rem;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0.95rem 0.9rem 1rem;
    border-radius: 20px;
  }
`,RR=d.p`
  max-width: 42rem;
  margin: 0.8rem 0 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  line-height: 1.58;
  font-size: clamp(0.92rem, 0.98vw, 1rem);
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: 1680px) {
    max-width: 44rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.92rem;
    line-height: 1.5;
  }
`,DR=d.p`
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: #f1d28b;
  font-size: 0.76rem;
`,OR=d.h1`
  margin: 0;
  max-width: 10ch;
  font-size: clamp(2.2rem, 5vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.24);

  @media (max-width: 1680px) {
    font-size: clamp(3.6rem, 4.8vw, 5.8rem);
    max-width: 11ch;
  }

  @media (max-width: 1024px) {
    font-size: clamp(2rem, 5vw, 3.8rem);
  }

  @media (max-width: 768px) {
    max-width: 11ch;
    font-size: clamp(1.9rem, 8vw, 3.1rem);
  }
`,IR=d.p`
  max-width: 46rem;
  margin: 0.8rem 0 0;
  line-height: 1.62;
  font-size: clamp(0.96rem, 1.08vw, 1.08rem);
  color: rgba(255, 255, 255, 0.91);

  @media (min-width: 1680px) {
    max-width: 48rem;
    font-size: 1.08rem;
    line-height: 1.68;
  }

  @media (max-width: 1024px) {
    font-size: 0.96rem;
    line-height: 1.56;
  }
`,FR=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.88rem 1.12rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f1c75c, #d9a73d);
  color: #111111;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.92rem;
  box-shadow: 0 14px 30px rgba(217, 167, 61, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(217, 167, 61, 0.3);
  }

  @media (max-width: 1680px) {
    padding: 0.95rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`,ZR=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.95rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`,_R=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.88rem 1.12rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.24);
  }

  @media (max-width: 1680px) {
    padding: 0.95rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`,NR=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.9rem;
`,Zd=d.div`
  min-width: 150px;
  padding: 0.72rem 0.82rem;
  border-radius: 16px;
  background: rgba(248, 251, 247, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

  strong {
    display: block;
    font-size: 0.95rem;
    color: #ffffff;
    letter-spacing: 0.01em;
  }

  span {
    display: block;
    margin-top: 0.15rem;
    font-size: 0.83rem;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (min-width: 1680px) {
    min-width: 165px;
    padding: 0.8rem 0.9rem;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.86rem;
    }
  }

  @media (max-width: 640px) {
    min-width: 100%;
  }
`,qs=d.p`
  scroll-margin-top: 140px;
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #8b0d2a;
`,BR=d.section`
  position: relative;  
  padding: 5rem 20px;
  background: 
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.05), transparent 26%),
    linear-gradient(180deg, #f7f4ef 0%, #fcfaf7 48%, #ffffff 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
`,w4=d.section`
  position: relative;
  padding: 5rem 20px;
  background:
    radial-gradient(circle at bottom right, rgba(61, 100, 74, 0.08), transparent 24%),
    linear-gradient(180deg, #f2f5f1 0%, #eef2ee 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
`,WR=d.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`,Gs=d.article`
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), #f9fbf8);
  border: 1px solid rgba(20, 20, 20, 0.08);
  border-radius: 26px;
  padding: 1.5rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 42px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.14);
  }
`,Ks=d.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b0d2a, #c89b2c);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  margin-bottom: 1rem;
  box-shadow: 0 12px 24px rgba(139, 13, 42, 0.18);
`,Ys=d.h3`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.08rem;
  line-height: 1.25;
  color: #17181c;
`,Qs=d.p`
  margin: 0;
  font-family: var(--font-body);
  line-height: 1.8;
  color: #4f5b68;
`,UR=d.section`
  position: relative;
  padding: 5rem 20px 5.5rem;
  background:
    radial-gradient(circle at top right, rgba(200, 155, 44, 0.08), transparent 18%),
    linear-gradient(180deg, #ffffff 0%, #f8faf6 100%);

  @media (max-width: 768px) {
    padding: 4rem 16px 4.5rem;
  }
`,Yo=d.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`,Xs=d.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
  color: #16181b;

  &::after {
    content: "";
    display: block;
    width: 88px;
    height: 4px;
    margin-top: 1rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }
`,_d=d.p`
  max-width: 50rem;
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1.03rem;
  line-height: 1.9;
  color: #475569;
`,qR=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,GR=d.div``,KR=d.div`
  background: linear-gradient(180deg, #ffffff, #f7faf8);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 1.7rem;
  box-shadow: 0 22px 44px rgba(17, 17, 17, 0.08);

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 22px;
  }
`,YR=d.h3`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 1.28rem;
  line-height: 1.2;
  color: #17181c;
`,QR=d.ul`
  margin: 0;
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.85rem;
    line-height: 1.75;
    color: #475569;
  }

  li::marker {
    color: #8b0d2a;
  }
`,XR=d.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,Nd=d.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfa);
  border: 1px solid rgba(20, 20, 20, 0.07);
  border-radius: 26px;
  padding: 1.6rem;
  box-shadow: 0 16px 32px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 40px rgba(17, 17, 17, 0.09);
  }
`,Bd=d.div`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #8b0d2a;
`,Wd=d.p`
  margin: 0.55rem 0 0;
  font-family: var(--font-body);
  font-size: 0.96rem;
  line-height: 1.6;
  color: #5b6675;
`,JR=d.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem;
  margin-top: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,eD=d.article`
  background: linear-gradient(180deg, #ffffff, #fcfdfb);
  border: 1px solid rgba(20, 20, 20, 0.08);
  border-radius: 26px;
  padding: 1.5rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(139, 13, 42, 0.92), rgba(200, 155, 44, 0.9));
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 42px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.16);
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 22px;
  }
`,tD=d.span`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.48rem 0.82rem;
  border-radius: 999px;
  background: #fff4ee;
  border: 1px solid rgba(139, 13, 42, 0.12);
  color: #8b0d2a;
  font-size: 0.82rem;
  font-weight: 700;
`,nD=d.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`,rD=d.img`
  max-width: 160px;
  max-height: 72px;
  object-fit: contain;
  display: block;
`,iD=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,oD=d.h3`
  margin: 0;
  font-size: 1.25rem;
`,aD=d.p`
  margin: 0.5rem 0 0;
  font-weight: 800;
  color: #8b0d2a;
`,sD=d.p`
  margin: 0.35rem 0 0;
  color: #64748b;
`,lD=d.p`
  margin: 1rem 0 0;
  line-height: 1.7;
  color: #475569;
  min-height: 5.2rem;
`,cD=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  padding: 0.78rem 1.05rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #141414, #0b0b0b);
  color: white;
  text-decoration: none;
  font-weight: 700;
  align-self: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 22px rgba(17, 17, 17, 0.16);
  }
`,dD=d.section`
  padding: 0 20px 5rem;

  @media (max-width: 768px) {
    padding: 0 16px 4rem;
  }
`,uD=d.div`
  border-radius: 30px;
  padding: 2.5rem 2rem;
  background:
    radial-gradient(circle at top left, rgba(244, 196, 77, 0.14), transparent 22%),
    linear-gradient(135deg, #8b0d2a, #2a3c2f);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 50px rgba(48, 16, 21, 0.18);

  @media (max-width: 640px) {
    padding: 1.75rem 1.2rem;
    border-radius: 22px;
  }
`,hD=d.h2`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
`,fD=d.p`
  max-width: 44rem;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.86);
`,pD=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  background: #f4c44d;
  color: #111111;
  text-decoration: none;
  font-weight: 800;
`,Vi=[{id:"introduction",label:"1. Introduction"},{id:"information-we-collect",label:"2. Information We Collect"},{id:"artificial-intelligence-features",label:"3. Artificial Intelligence Features"},{id:"how-we-use-information",label:"4. How We Use Information"},{id:"telephony-systems",label:"5. Telephony Systems & Call Recording"},{id:"disclosure-of-information",label:"6. Disclosure of Information"},{id:"data-processing-agreements",label:"7. Data Processing Agreements"},{id:"data-security",label:"8. Data Security"},{id:"data-breach-notification",label:"9. Data Breach Notification"},{id:"data-retention",label:"10. Data Retention"},{id:"industry-specific-compliance",label:"11. Industry-Specific Compliance"},{id:"your-privacy-rights",label:"12. Your Privacy Rights"},{id:"state-specific",label:"13. State-Specific Privacy Rights"},{id:"international-data-transfers",label:"14. International Data Transfers"},{id:"childrens-privacy",label:"15. Children's Privacy"},{id:"cookies",label:"16. Cookies & Tracking Technologies"},{id:"this-policy",label:"17. Changes to This Policy"},{id:"contact-us",label:"18. Contact Us"},{id:"data-sharing",label:"Data Sharing"},{id:"messaging-terms",label:"Messaging Terms & Conditions"}];function mD(){const e=b.useRef(null),t=b.useRef(null),n=b.useRef(null),r=b.useRef({}),[i,a]=b.useState({}),[s,l]=b.useState(0),[c,u]=b.useState(Vi[0].id),[f,p]=b.useState(Vi[0].id),[m,y]=b.useState(!1);b.useEffect(()=>{const w=()=>{if(!e.current||!t.current||!n.current)return;if(window.innerWidth<=980){a({}),l(0);return}const C=120,x=e.current.getBoundingClientRect(),g=t.current.getBoundingClientRect(),v=n.current.offsetHeight,E=t.current.offsetWidth,P=window.scrollY,T=P+x.top,L=P+x.bottom;if(l(v),P+C<=T){a({position:"relative",top:"0",left:"0",width:"100%"});return}if(P+C+v>=L){a({position:"absolute",top:`${Math.max(0,L-T-v)}px`,left:"0",width:"100%"});return}a({position:"fixed",top:`${C}px`,left:`${g.left}px`,width:`${E}px`})};return w(),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",w),window.removeEventListener("resize",w)}},[]),b.useEffect(()=>{const w=Vi.map(x=>document.getElementById(x.id)).filter(Boolean);if(!w.length)return;const C=new IntersectionObserver(x=>{var v;const g=x.filter(E=>E.isIntersecting).sort((E,P)=>P.intersectionRatio-E.intersectionRatio)[0];(v=g==null?void 0:g.target)!=null&&v.id&&(u(g.target.id),p(g.target.id))},{rootMargin:"-20% 0px -55% 0px",threshold:[.1,.25,.4,.6]});return w.forEach(x=>C.observe(x)),()=>C.disconnect()},[]),b.useEffect(()=>{if(window.innerWidth<=980)return;const w=r.current[c];w&&w.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[c]),b.useEffect(()=>{const w=document.querySelector("footer");if(!w)return;const C=new IntersectionObserver(([x])=>{y(x.isIntersecting)},{threshold:.05});return C.observe(w),()=>C.disconnect()},[]);const j=w=>{p(w),u(w);const C=document.getElementById(w);if(C){const x=window.innerWidth<=980?110:130,g=C.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:g,behavior:"smooth"})}};return o.jsxs(gD,{children:[o.jsx(bt,{title:"Privacy Policy | Hyacinth Industries LLC",description:"Read the Hyacinth Industries LLC Privacy Policy, including how personal information is collected, used, disclosed, retained, and protected.",canonicalPath:"/privacy-policy",type:"article"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(xD,{children:o.jsxs(yD,{children:[o.jsxs(vD,{children:[o.jsx(jD,{children:"Legal"}),o.jsx(kD,{children:"Privacy Policy"}),o.jsx(SD,{children:"Hyacinth Industries LLC"}),o.jsx(b4,{children:"Effective Date: March 17, 2026"}),o.jsx(b4,{children:"Last Revised: March 17, 2026"}),o.jsx(ED,{href:"/HyacinthIndustries_PrivacyPolicy.pdf",target:"_blank",rel:"noopener noreferrer",children:"Download PDF Version"})]}),o.jsx(wD,{children:o.jsx(bD,{src:Zf,alt:"Hyacinth Industries LLC logo"})})]})}),o.jsx(CD,{children:o.jsxs(AD,{children:[o.jsx(zD,{$isHidden:m,children:o.jsx(j4,{"aria-label":"Jump to a privacy policy section",value:f,onChange:w=>j(w.target.value),children:Vi.map(w=>o.jsx("option",{value:w.id,children:w.label},w.id))})}),o.jsxs(LD,{ref:e,children:[o.jsx(HD,{ref:t,style:s?{minHeight:`${s}px`}:void 0,children:o.jsxs(VD,{ref:n,style:i,children:[o.jsx($D,{children:"On this Page"}),o.jsx(j4,{"aria-label":"Jump to a privacy policy section",value:f,onChange:w=>j(w.target.value),children:Vi.map(w=>o.jsx("option",{value:w.id,children:w.label},w.id))}),o.jsx(RD,{children:Vi.map(w=>o.jsx(DD,{children:o.jsx(OD,{href:`#${w.id}`,$isActive:c===w.id,ref:C=>{C&&(r.current[w.id]=C)},onClick:C=>{C.preventDefault(),j(w.id)},children:w.label})},w.id))})]})}),o.jsxs(PD,{children:[o.jsxs(De,{id:"introduction",children:[o.jsx(Oe,{children:"1. Introduction"}),o.jsx(q,{children:'Hyacinth Industries LLC ("Hyacinth," "we," "our," or "us") is a business process outsourcing (BPO) company serving professional industries. We provide outsourced business functions supported by our proprietary technology suite, which includes a CRM platform with AI-assisted features, an accounting system, an enterprise resource planning (ERP) platform, and telephony and communications systems.'}),o.jsx(q,{children:"This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Our BPO services performed on behalf of client organizations;"}),o.jsx("li",{children:"Our proprietary CRM, accounting, and ERP platforms;"}),o.jsx("li",{children:"Our telephony and phone-based communication systems;"}),o.jsx("li",{children:"Our website and digital communications; and"}),o.jsx("li",{children:"Our relationships with clients, vendors, employees, and business contacts."})]}),o.jsx(q,{children:"Our core commitment: Hyacinth collects and retains only the information strictly necessary for users to operate our platforms and for us to deliver our services. We do not retain data behind the scenes, track users for secondary purposes, or sell, license, or otherwise monetize personal information in any form."}),o.jsx(q,{children:"Residents of California, Indiana, Kentucky, Rhode Island, Virginia, Colorado, Connecticut, Texas, Florida, and other states with applicable privacy laws have additional rights described in Section 12."})]}),o.jsxs(De,{id:"information-we-collect",children:[o.jsx(Oe,{children:"2. Information We Collect"}),o.jsx(q,{children:"We limit data collection to what is operationally necessary. We do not build profiles, aggregate data across clients, or retain information beyond the purposes described below."}),o.jsx(at,{children:"2.1 Through Our BPO Services"}),o.jsx(q,{children:"When performing services on behalf of clients, we process personal information provided by or directed to us by those clients. This may include:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Contact and account information (names, addresses, phone numbers, email addresses);"}),o.jsx("li",{children:"Customer records entered into or managed within our CRM platform;"}),o.jsx("li",{children:"Financial and transactional data processed through our accounting system;"}),o.jsx("li",{children:"Business records and workflow data within our ERP platform;"}),o.jsx("li",{children:"Call recordings and interaction logs from our telephony systems, where legally permitted and disclosed; and"}),o.jsx("li",{children:"Identity or verification information required for specific service functions."})]}),o.jsx(q,{children:"We process this information solely as directed by our clients and only for the purpose of delivering agreed services. We do not retain, aggregate, or use this information for any secondary purpose."}),o.jsx(at,{children:"2.2 From Platform Users"}),o.jsx(q,{children:"Users authorized to access our CRM, ERP, or accounting platforms provide:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Login credentials and account profile information;"}),o.jsx("li",{children:"Data entered into the platform in the course of their work (records, notes, transactions); and"}),o.jsx("li",{children:"Usage activity within the platform necessary for session management and system function."})]}),o.jsx(q,{children:"Platform data is used exclusively to enable the user to operate the system. We do not analyze user behavior for marketing, sell usage data, or retain data beyond what is required for system operation and legal compliance."}),o.jsx(at,{children:"2.3 From Clients, Vendors & Business Contacts"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Business contact information (names, titles, company, email, phone numbers);"}),o.jsx("li",{children:"Contract and billing information for service agreements; and"}),o.jsx("li",{children:"Communications in connection with our business relationship."})]}),o.jsx(at,{children:"2.4 From Employees & Job Applicants"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Job applicant information (resume, work history, references, contact details);"}),o.jsx("li",{children:"Employee information necessary for onboarding, payroll, benefits, and HR administration (name, address, Social Security Number, banking details, benefits elections);"}),o.jsx("li",{children:"Performance and attendance records maintained in our ERP system; and"}),o.jsx("li",{children:"Emergency contact information."})]}),o.jsx(q,{children:"Employee data is collected and retained only as required by law and for active employment administration. It is not shared beyond HR, payroll, and legal compliance purposes."}),o.jsx(at,{children:"2.5 Automatically Collected Technical Data"}),o.jsx(q,{children:"Our platforms and website may automatically collect minimal technical data for system functionality, including:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"IP addresses and session identifiers (for authentication and access control);"}),o.jsx("li",{children:"Browser and device type (for compatibility); and"}),o.jsx("li",{children:"Platform access logs (for security and error resolution)."})]}),o.jsx(q,{children:"We do not use third-party advertising trackers, behavioral analytics platforms, session replay tools, or retargeting technologies on our platforms or website."})]}),o.jsxs(De,{id:"artificial-intelligence-features",children:[o.jsx(Oe,{children:"3. Artificial Intelligence Features"}),o.jsx(q,{children:"Our CRM platform incorporates AI-assisted features to help users work more effectively. This section explains how those features operate and, importantly, what they do not do."}),o.jsx(at,{children:"3.1 What Our AI Does"}),o.jsx(q,{children:"The AI features within our CRM assist authorized platform users by:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Suggesting next actions, drafting responses, or summarizing records based on data the user has already entered into the platforms;"}),o.jsx("li",{children:"Organizing or categorizing records to improve workflow efficiency; and"}),o.jsx("li",{children:"Flagging incomplete or inconsistent data entries for user review."})]}),o.jsx(at,{children:"3.2 What our AI Does Not Do"}),o.jsx(q,{children:"Our CRM‘s AI features operate only on data within the active user session and platform environment. Specifically:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"We do not use client data to train AI models for use outside of the contracted service;"}),o.jsx("li",{children:"We do not sell or share CRM data with AI vendors for their own purposes;"}),o.jsx("li",{children:"No automated decision with significant consequences is taken without human review and user confirmation; and "}),o.jsx("li",{children:"AI activity within the platform is logged only to the extent necessary for system troubleshooting and security."})]}),o.jsx(at,{children:"3.3 Automated Decision-Making Disclosure (CCPA 2026/ ADMT)"}),o.jsx(q,{children:"Pursuant to California's 2026 CCPA regulations on Automated Decision-Making Technology (ADMT), we disclose the following:"}),o.jsxs(Ue,{children:[o.jsxs("li",{children:[o.jsx("b",{children:"Purpose:"})," AI features in our CRM are used to improve workflow efficiency for authorized platform users. They are not used to make decisions about consumers' eligibility for credit, employment, insurance, housing, or other significant determinations."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Logic:"})," AI suggestions are generated based on data the user has input into the current platform session and are surfaced to assist the user's own judgment."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Human Oversight:"})," All AI-generated outputs require affirmative user action to take effect. No action is taken automatically without user confirmation."]}),o.jsxs("li",{children:[o.jsx("b",{children:"Opt-Out:"})," Users who wish disable AI-assisted features may contact their account administrator or email ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]})]}),o.jsxs(De,{id:"how-we-use-information",children:[o.jsx(Oe,{children:"4. How We Use Information"}),o.jsx(q,{children:"We use personal information only for the following purposes. We do not use information for purposes beyond what is described here, and we do not use personal information for advertising, behavioral profiling, data brokerage, or any commercial purpose beyond direct service delivery."}),o.jsxs(Ue,{children:[o.jsxs("li",{children:[o.jsx("b",{children:"Service Delivery:"})," To perform BPO services and fulfill obligations under client agreements;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Platform Operation:"})," To operate, maintain, and support our CRM, accounting, and ERP platforms;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Telephony & Communications:"})," To manage phone systems, record calls where legally required, and respond to inquiries; "]}),o.jsxs("li",{children:[o.jsx("b",{children:"Billing & Accounting:"})," To process payments, generate invoices, and maintain required financial records;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Security & System Integrity:"})," To detect unauthorized access, protect our systems, and investigate incidents;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Legal Compliance:"})," To comply with applicable laws, regulations, subpoenas, and lawful government requests;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"HR & Employment: "})," To manage employee and applicant relationships, payroll, and benefits; and"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Business Operations:"})," To manage client, vendor, and partner relationships."]})]})]}),o.jsxs(De,{id:"telephony-systems",children:[o.jsx(Oe,{children:"5. Telephony Systems & Call Recording"}),o.jsx(q,{children:"Phone systems are a core part of our BPO operations. Where calls are recorded or monitored, we comply with all applicable federal and state wiretapping and call recording laws, including one-party and two-party consent requirements under the Federal Wiretap Act and applicable state statutes (e.g., California Penal Code § 632. Florida § 934.03, and similar laws in other two-party consent states)."}),o.jsx(q,{children:"Our call recording practices include:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:'Providing required disclosures at the start of recorded calls (e.g, "This call may be recorded");'}),o.jsx("li",{children:"Restricting access to call recordings to authorized personnel only;"}),o.jsx("li",{children:"Retaining recordings only as long as required by client agreements, applicable law, or legal hold obligations; and"}),o.jsx("li",{children:"Not using third-party session replay tools or web-based listening technologies on our platforms."})]}),o.jsx(q,{children:"Individuals who do not consent to call recording may request an unrecorded communication channel where operationally feasible."})]}),o.jsxs(De,{id:"disclosure-of-information",children:[o.jsx(Oe,{children:"6. Disclosure of Information"}),o.jsx(q,{children:"We do not sell, rent, license, or otherwise transfer personal information to third parties for their own commercial purposes. We do not share personal information for cross-context behavioral advertising."}),o.jsx(q,{children:"We may disclose information only in the following limited circumstances:"}),o.jsx(at,{children:"6.1 With Clients"}),o.jsx(q,{children:"Information processed on behalf of a client is returned to or available to that client as directed by our service agreement. Clients control the data they entrust to us for processing."}),o.jsx(at,{children:"6.2 With Service Providers (Sub-processors)"}),o.jsx(q,{children:"We may engage third-party vendors who provide infrastructure or support services to us (e.g., cloud hosting, telephony infrastructure, IT security). These vendors are contractually bound to process information only as directed by Hyacinth, maintain appropriate security measures, and not use the information for their own purposes."}),o.jsx(at,{children:"6.3 For Legal Compliance"}),o.jsx(q,{children:"We may disclose information to law enforcement, courts, or regulatory agencies where required by applicable law, valid legal process, or to protect the safety, rights, or property of Hyacinth, our clients, or the public."}),o.jsx(at,{children:"6.4 Business Transfers"}),o.jsx(q,{children:"In the event of a merger, acquisition, or asset sale, personal information may be transferred to a successor entity. Affected individuals will be notified as required by applicable law."}),o.jsx(at,{children:"6.5 With Consent"}),o.jsx(q,{children:"We may share information in other circumstances with your prior express consent."})]}),o.jsxs(De,{id:"data-processing-agreements",children:[o.jsx(Oe,{children:"7. Data Processing Agreements"}),o.jsx(q,{children:"As a BPO acting as a data processor on behalf of our clients, we operate under written service agreements that govern data handling obligations. For clients subject to GDPR, CCPA/CPRA, or other regulations requiring formal data processing agreements, Hyacinth will execute a Data Processing Agreement (DPA) or Data Processing Addendum as part of the client engagement."}),o.jsx(q,{children:"Our DPAs address the nature, purpose, and duration of processing; the categories of personal data and data subjects involved; Hyacinth's obligations as a processor (security, confidentiality, sub-processor controls, breach notification support); the client's rights to audit and receive assistance with data subject requests; and data deletion or return upon contract termination."}),o.jsxs(q,{children:["Clients are the data controllers for information they provide to Hyacinth for processing and are responsible for ensuring their own lawful basis for that processing. Prospective clients requiring a DPA should request one at ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]}),o.jsxs(De,{id:"data-security",children:[o.jsx(Oe,{children:"8. Data Security"}),o.jsx(q,{children:"We implement administrative, technical, and physical safeguards appropriate to the nature and sensitivity of the information we handle, including:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Encryption of data in transit (TLS) and at rest within our platforms;"}),o.jsx("li",{children:"Role-based access controls limiting data access to personnel who require it to perform their functions;"}),o.jsx("li",{children:"Multi-factor authentication (MFA) for system and platform access;"}),o.jsx("li",{children:"Network monitoring and intrusion detection;"}),o.jsx("li",{children:"Regular internal security reviews and vulnerability assessments;"}),o.jsx("li",{children:"Employee training on data handling, security practices, and phishing awareness; and "}),o.jsx("li",{children:"Documented incident response procedures."})]}),o.jsx(q,{children:"We do not currently hold third-party security certifications (such as SOC 2 or ISO 27001) but are committed to maintaining security practices consistent with industry standards appropriate to a BPO of our size and scope. We will communicate material changes to our security posture to clients."}),o.jsx(q,{children:"No electronic system is completely secure. In the event of a security incident affecting personal information, we will act promptly to contain and assess the incident and notify affected parties as required by applicable law."})]}),o.jsxs(De,{id:"data-breach-notification",children:[o.jsx(Oe,{children:"9. Data Breach Notification"}),o.jsx(q,{children:"In the event of a data breach involving personal information, Hyacinth will:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Contain and assess the breach promptly upon discovery;"}),o.jsx("li",{children:"Notify affected clients without undue delay, and within the timeframes required by applicable law — including within 72 hours where GDPR applies, and within 30 to 45 days as required by applicable U.S state breach notification laws;"}),o.jsx("li",{children:"Notify affected individuals directly where required by law or where we are acting as the data controller;"}),o.jsx("li",{children:"Cooperate with clients in fulfilling their own breach notification obligations to regulators and individuals; and"}),o.jsx("li",{children:"Document the breach, our response, and remediation steps in accordance with our incident response procedures."})]})]}),o.jsxs(De,{id:"data-retention",children:[o.jsx(Oe,{children:"10. Data Retention"}),o.jsx(q,{children:"We retain personal information only for as long as necessary to fulfill the purpose for which it was collected or as required by law. We do not maintain data repositories beyond operational necessity. Specific retention periods are as follows:"}),o.jsxs(Ue,{children:[o.jsxs("li",{children:[o.jsx("b",{children:"Client service data (CRM, ERP records):"})," Retained during the active service relationship; deleted or returned within 90 days of contract termination unless otherwise required by law or agreed in writing;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Call recordings:"})," Up to 3 years, or as required by client agreement, litigation hold, or applicable law;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Accounting and financial records:"})," 7 years as required by IRS regulations and applicable law;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Employee records:"})," Duration of employment plus up to 7 years as required by applicable labor and tax law;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Job applicant records:"})," Up to 2 years from the date of application, unless extended by applicable law;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Website and platform access logs: "})," Up to 12 months for security and operational purposes;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Business correspondence:"})," Up to 7 years for legal and compliance purposes."]})]}),o.jsx(q,{children:"Upon expiration of the applicable retention period, we securely delete or anonymize data using methods appropriate to its sensitivity. We do not archive, sell, or transfer data that has passed its retention period."})]}),o.jsxs(De,{id:"industry-specific-compliance",children:[o.jsx(Oe,{children:"11. Industry-Specific Compliance"}),o.jsx(q,{children:"As a BPO serving all professional industries, we recognize that clients in specific sectors are subject to additional regulatory requirements. We support client compliance with the following frameworks:"}),o.jsxs(Ue,{children:[o.jsxs("li",{children:[o.jsx("b",{children:"HIPAA:"})," For healthcare clients, we enter into Business Associate Agreements (BAAs) and implement required safeguards for Protected Health Information (PHI);"]}),o.jsxs("li",{children:[o.jsx("b",{children:"GLBA:"})," For financial services clients, we observe Gramm-Leach-Bliley Act requirements for non-public personal financial information;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"PCI-DSS:"})," For services involving payment card data, we apply applicable PCI-DSS security standards; and"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Legal & Professional Services:"})," We recognize that attorney-client privilege and similar professional obligations may apply to data processed on behalf of legal or professional services clients and will cooperate to honor those requirements."]})]}),o.jsx(q,{children:"Clients are responsible for identifying applicable sector-specific regulations at the time of engagement so that Hyacinth can tailor service agreements and data handling accordingly."})]}),o.jsxs(De,{id:"your-privacy-rights",children:[o.jsx(Oe,{children:"12. Your Privacy Rights"}),o.jsx(q,{children:"Depending on your jurisdiction and relationship with us, you may have the following rights regarding your personal information:"}),o.jsxs(Ue,{children:[o.jsxs("li",{children:[o.jsx("b",{children:"Right to Know / Access:"})," Request information about what personal data we hold about you and how it is used;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Correction:"})," Request correction of inaccurate or incomplete data;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Deletion:"})," Request deletion of your personal data, subject to legal retention requirements;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Data Portability:"})," Request your data in a structured, machine-readable format;"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Opt Out of AI / ADMT:"})," Opt out of AI-assisted features within our CRM (see Section 3.3);"]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Opt Out of Sale or Sharing:"})," We do not sell or share data for advertising — this right is satisfied by our practices; and "]}),o.jsxs("li",{children:[o.jsx("b",{children:"Right to Non-Discrimination: "})," We will not penalize you for exercising your privacy right."]})]}),o.jsxs(q,{children:["To submit a request, email ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"})," with your name, contact information, and a description of your request. We will verify your identity before responding and aim to respond within 30 days, not exceeding 45 days under CCPA or 30 days under GDPR without providing notice of an extension."]}),o.jsx(q,{children:"If your information is processed by Hyacinth on behalf of one of our clients, please direct your request to that client organization. We will assist the client in responding as required by our service agreement."})]}),o.jsxs(De,{id:"state-specific",children:[o.jsx(Oe,{children:"13. State-Specific Privacy Rights"}),o.jsx(at,{children:"13.1  California (CCPA / CPRA)"}),o.jsx(q,{children:"California residents have rights under the California Consumer Privacy Act as amended by the California Privacy Rights Act, including regulations effective January 1, 2026. Categories of personal information Hyacinth may have collected in the preceding 12 months include: identifiers, professional and employment information, commercial information (client records), internet or network activity (platform access logs), and inferences drawn from the above."}),o.jsxs(q,{children:["We do not sell personal information. We do not share personal information for cross-context behavioral advertising. California residents may submit verifiable rights requests to ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]}),o.jsx(at,{children:"13.2 CIPA & Website Tracking (California)"}),o.jsx(q,{children:"The California Invasion of Privacy Act (CIPA) and related wiretapping laws impose requirements on the use of tracking technologies. Hyacinth does not use advertising pixels, third-party behavioral trackers, session replay tools, or similar technologies on our website or platforms. We use only essential technical tools required for authentication, session management, and security. No consent to tracking beyond these operational technologies is required for use of our services."}),o.jsx(at,{children:"13.3 Other U.S States"}),o.jsx(q,{children:"Residents of the following states have privacy rights under their perspective laws, and Hyacinth honors applicable rights requests:"}),o.jsxs(Ue,{children:[o.jsx("li",{children:"Virginia — Consumer Data Protection Act;"}),o.jsx("li",{children:"Colorado — Colorado Privacy Act;"}),o.jsx("li",{children:"Connecticut — Connecticut Data Privacy Act;"}),o.jsx("li",{children:"Texas — Texas Data Privacy and Security Act;"}),o.jsx("li",{children:"Florida — Florida Digital Bill of Rights;"}),o.jsx("li",{children:"Indiana — Indiana Consumer Data Protection Act (effective January 1, 2026);"}),o.jsx("li",{children:"Kentucky — Kentucky Consumer Data Protection Act (effective January 1, 2026); and "}),o.jsx("li",{children:"Rhode Island — Rhode Island Data Transparency and Privacy Protection Act (effective January 1, 2026)."})]}),o.jsxs(q,{children:["As additional state privacy laws take effect, we will update this Policy accordingly. Contact ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"})," to determine which rights apply based on your state of residence."]})]}),o.jsxs(De,{id:"international-data-transfers",children:[o.jsx(Oe,{children:"14. International Data Transfers"}),o.jsx(q,{children:"If we process personal information relating to individuals in the European Economic Area (EEA), United Kingdom, or other jurisdictions with cross-border data transfer restrictions, we will implement appropriate safeguards as required by applicable law, including Standard Contractual Clauses where required under GDPR. Clients with international data handling requirements should specify these in their service agreements."})]}),o.jsxs(De,{id:"childrens-privacy",children:[o.jsx(Oe,{children:"15. Children's Privacy"}),o.jsxs(q,{children:["Our services are directed exclusively to businesses and professional users. We do not knowingly collect personal information from individuals under the age of 16. If we learn that we have inadvertently collected such information, we will promptly delete it. If you believe we have collected information from a minor, please contact us at ",o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]}),o.jsxs(De,{id:"cookies",children:[o.jsx(Oe,{children:"16. Cookies & Tracking Technologies"}),o.jsx(q,{children:"Our website and platforms use only essential cookies and technical session tools required for user authentication and session management, security and fraud prevention, and basic operational functionality. We do not use advertising cookies, cross-site tracking tools, or behavioral analytics platforms. You may manage cookie behavior through your browser settings; disabling session cookies may impair platform functionality."})]}),o.jsxs(De,{id:"this-policy",children:[o.jsx(Oe,{children:"17. Changes to This Policy"}),o.jsx(q,{children:"We review this Privacy Policy at least annually and update it to reflect changes in our services, operations, or applicable law. Material changes will be communicated to active clients via direct notice and will be reflected with an updated effective date at the top of this document. Continued use of our services following notice of a material update constitutes acknowledgment of the revised policy."})]}),o.jsxs(De,{id:"contact-us",children:[o.jsx(Oe,{children:"18. Contact Us"}),o.jsx(q,{children:"Hyacinth has designated a Privacy & Compliance Officer responsible for overseeing our data protection practices and responding to rights requests. For questions, concerns, or privacy requests, please contact us at:"}),o.jsxs(TD,{children:[o.jsx("strong",{children:"Hyacinth Industries LLC"}),o.jsx("span",{children:"Attn: Privacy & Compliance Officer"}),o.jsx("span",{children:"Email:"}),o.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),o.jsx("span",{children:"[Company Mailing Address]"})]}),o.jsx(q,{children:"We will acknowledge all privacy inquiries within 5 business days and respond substantively within the timeframes required by applicable law."})]}),o.jsxs(De,{id:"data-sharing",children:[o.jsx(Oe,{children:"Data Sharing"}),o.jsx(q,{children:o.jsxs(Ue,{children:[o.jsx("li",{children:"Customer data is not shared with 3rd parties for promotional or marketing purposes."}),o.jsx("li",{children:"Marketing opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data."})]})})]}),o.jsxs(De,{id:"messaging-terms",children:[o.jsx(Oe,{children:"Hyacinth Industries LLC Messaging Terms and Conditions"}),o.jsxs(MD,{children:[o.jsx("li",{children:"The messaging program consists of general conversational messaging to answer questions and provide support to customers."}),o.jsx("li",{children:"You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again."}),o.jsx("li",{children:"If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@hyacinthindustriesllc.com."}),o.jsx("li",{children:"Carriers are not liable for delayed or undelivered messages."}),o.jsx("li",{children:"As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider."}),o.jsx("li",{children:"If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page."})]})]})]})]})]})}),o.jsx(kt,{})]})}const gD=d.div`
  width: 100%;
  padding-top: 110px;
  background: #ffffff;
`,xD=d.section`
  position: relative;
  padding: 3.5rem 20px 2.8rem;
  background:
    radial-gradient(circle at top right, rgba(139, 13, 42, 0.1), transparent 22%),
    radial-gradient(circle at botton left, rgba(207, 168, 92, 0.08), transparent 20%),
    linear-gradient(180deg, #f8f4ef 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(20, 20, 20, 0.06);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2.6rem 16px 2rem;
  }
`,yD=d.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem 2rem 1.9rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(20, 20, 20, 0.06);
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.06);
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(240px, 0.9fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    padding: 1.35rem 1.1rem 1.25rem;
    border-radius: 20px;
    gap: 1rem;
  }
`,vD=d.div`
  min-width: 0;
  max-width: 34rem;
`,wD=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    justify-content: flex-start;
  }
`,bD=d.img`
  width: min(320px, 100%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 12px 26px rgba(0, 0, 0, 0.12));

  @media (max-width: 860px) {
    width: min(260px, 78%);
  }

  @media (max-width: 640px) {
    width: min(220px, 72%);
  }
`,jD=d.p`
  margin:  0 0 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 800;
  color: #8b0d2a;
`,kD=d.h1`
  margin: 0;
  font-size: clamp(2.45rem, 4.8vw, 4rem);
  line-height: 0.96;
  letter-spacing: -0.05em;
  color: #1c2128;

  @media (max-width: 640px) {
    font-size: clamp(2rem, 9vw, 3rem);
    line-height: 1;
  }
`,SD=d.p`
  margin: 1rem 0 0;
  font-size: 1.06rem;
  font-weight: 700;
  color: #2f3640;
  line-height: 1.45;

  @media (max-width: 640px) {
    font-size: 1.05rem;
  }
`,b4=d.p`
  margin: 0.4rem 0 0;
  font-size: 0.96rem;
  color: #64748b;
  line-height: 1.6;
`,ED=d.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.15rem;
  min-height: 46px;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #8b0d2a, #6e0b21);
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 24px rgba(139, 13, 42, 0.16);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 28px rgba(139, 13, 42, 0.2);
  }
`,CD=d.section`
  padding: 2rem 20px 5rem;
  background:
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.03), transparent 18%),
    linear-gradient(180deg, #ffffff 0%, #faf8f5 100%);

  @media (max-width: 768px) {
    padding: 1.4rem 16px 4rem;
  }
`,AD=d.div`
  max-width: 1180px;
  margin: 0 auto;
`,PD=d.article`
  min-width: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 26px;
  padding: 2.15rem 2.15rem 1.9rem;
  box-shadow: 0 18px 42px rgba(17, 17, 17, 0.06);

  @media (max-width: 640px) {
    padding: 1.25rem 1.1rem;
    border-radius: 18px;
  }
`,De=d.section`
  padding: 1.7rem 0;
  border-top: 1px solid rgba(20, 20, 20, 0.06);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`,Oe=d.h2`
  margin: 0 0 0.9rem;
  font-size: 1.45rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #1c2128;

  @media (max-width: 640px) {
    font-size: 1.22rem;
  }
`,at=d.h3`
  margin: 1.25rem 0 0.7rem;
  font-size: 1.03rem;
  line-height: 1.35;
  color: #374151;
  font-weight: 700;
`,q=d.div`
  font-size: 0.99rem;
  line-height: 1.9;
  color: #475569;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;

  strong,
  b {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,Ue=d.ul`
  margin: 0.9rem 0 1.1rem 1.2rem;
  padding: 0;
  color: #475569;
  line-height: 1.9;
  list-style-position: outside;

  li {
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,MD=d.ol`
  margin: 0.9rem 0 1.1rem;
  padding-left: 1.35rem;
  color: #475569;
  line-height: 1.9;

  li {
    margin-bottom: 0.7rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,TD=d.div`
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: linear-gradient(180deg, #faf8f5, #fffdfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #334155;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  strong {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 700;
  }
`,LD=d.div`
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
  min-width: 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,HD=d.aside`
  position: relative;
  align-self: start;
  min-width: 0;

  @media (max-width: 980px) {
    display: none;
  }
`,VD=d.div`
  background: rgba(255, 253, 251, 0.94);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 22px;
  padding: 1rem 0.9rem;
  box-shadow: 0 12px 28px rgba(17, 17, 17, 0.05);
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  backdrop-filter: blur(8px);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  @media (max-width: 980px) {
    position: static;
    max-height: none;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0.85rem 0.8rem;
    border-radius: 18px;
  }
`,$D=d.p`
  margin: 0 0 0.65rem;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8b0d2a;

  @media (max-width: 980px) {
    margin-bottom: 0.55rem;
  }
`,zD=d.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
    position: fixed;
    top: 72px;
    left: 16px;
    right: 16px;
    z-index: 12;
    width: calc(100% - 32px);
    max-width: 1180px;
    margin: 0 auto;
    padding: 0.35rem 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.88));
    backdrop-filter: blur(8px);
    opacity: ${({$isHidden:e})=>e?0:1};
    pointer-events: ${({$isHidden:e})=>e?"none":"auto"};
    transition: opacity 0.2s ease;
  }
`,j4=d.select`
  display: none;
  width: 100%;
  margin-bottom: 0.8rem;
  padding: 0.8rem 0.95rem;
  border-radius: 14px;
  border: 1px solid rgba(139, 13, 42, 0.12);
  background: #ffffff;
  color: #334155;
  font-size: 0.95rem;
  font-family: var(--font-body);

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 0;
    box-shadow: 0 10px 22px rgba(17, 17, 17, 0.08);
  }
`,RD=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.3rem;

  @media (max-width: 980px) {
    display: none;
  }
`,DD=d.li`
  margin: 0;
`,OD=d.a`
  display: block;
  padding: 0.58rem 0.72rem;
  border-radius: 14px;
  color: ${({$isActive:e})=>e?"#8b0d2a":"#475569"};
  text-decoration: none;
  font-size: 0.88rem;
  line-height: 1.35;
  background: ${({$isActive:e})=>e?"rgba(139, 13, 42, 0.08)":"transparent"};
  border: 1px solid
    ${({$isActive:e})=>e?"rgba(139, 13, 42, 0.12)":"transparent"};
  font-weight: ${({$isActive:e})=>e?700:500};
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease,
    transform 0.2s ease;
  overflow-wrap: anywhere;

  &:hover {
    background: rgba(139, 13, 42, 0.06);
    color: #8b0d2a;
    border-color: rgba(139, 13, 42, 0.08);
    transform: translateX(2px);
  }
`,ID=()=>o.jsxs(FD,{children:[o.jsxs(ZD,{children:[o.jsx(_D,{src:gt,alt:"General Services"}),o.jsxs(ND,{children:[o.jsxs(BD,{children:[o.jsx(WD,{children:"Hyacinth Industries"}),o.jsx(UD,{children:"General Services"}),o.jsx(qD,{children:"Comprehensive business support designed to stabilize daily operations and improve service delivery."})]}),o.jsx(GD,{href:"#general-services",children:"Explore Services"})]})]}),o.jsxs(KD,{id:"general-services",children:[o.jsx(Ud,{children:"Our General Services"}),o.jsxs(YD,{children:[o.jsxs(Js,{children:[o.jsx(el,{children:o.jsx($9,{size:40})}),o.jsx(tl,{children:"Facility Management"}),o.jsx(nl,{children:"Comprehensive facility management solutions to maintain and optimize your business environment."}),o.jsxs(rl,{children:[o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Maintenance & Repairs"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Space Optimization"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Security Services"]})]})]}),o.jsxs(Js,{children:[o.jsx(el,{children:o.jsx(Dc,{size:40})}),o.jsx(tl,{children:"Office Administration"}),o.jsx(nl,{children:"Streamline your office operations with our professional administrative support services."}),o.jsxs(rl,{children:[o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Document Management"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Office Coordination"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Administrative Support"]})]})]}),o.jsxs(Js,{children:[o.jsx(el,{children:o.jsx(rs,{size:40})}),o.jsx(tl,{children:"Human Resources"}),o.jsx(nl,{children:"Comprehensive HR solutions to manage your workforce effectively and efficiently."}),o.jsxs(rl,{children:[o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Recruitment & Onboarding"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Employee Relations"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Performance Management"]})]})]}),o.jsxs(Js,{children:[o.jsx(el,{children:o.jsx(Za,{size:40})}),o.jsx(tl,{children:"Security Services"}),o.jsx(nl,{children:"Protect your assets and ensure a safe working environment with our security solutions."}),o.jsxs(rl,{children:[o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Access Control"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Surveillance Systems"]}),o.jsxs(Bt,{children:[o.jsx(X,{size:16})," Security Personnel"]})]})]})]})]}),o.jsxs(QD,{children:[o.jsx(Ud,{children:"Our Approach"}),o.jsx(XD,{children:"We follow a systematic approach to deliver exceptional general services that meet your business needs."}),o.jsxs(JD,{children:[o.jsxs(il,{children:[o.jsx(ol,{children:o.jsx(Dc,{size:32})}),o.jsx(al,{children:"Assessment"}),o.jsx(sl,{children:"We evaluate your current operations and identify areas for improvement."})]}),o.jsxs(il,{children:[o.jsx(ol,{children:o.jsx(G6,{size:32})}),o.jsx(al,{children:"Planning"}),o.jsx(sl,{children:"We develop a customized service plan tailored to your specific requirements."})]}),o.jsxs(il,{children:[o.jsx(ol,{children:o.jsx(V9,{size:32})}),o.jsx(al,{children:"Implementation"}),o.jsx(sl,{children:"We execute the plan with precision and attention to detail."})]}),o.jsxs(il,{children:[o.jsx(ol,{children:o.jsx(R9,{size:32})}),o.jsx(al,{children:"Monitoring"}),o.jsx(sl,{children:"We continuously monitor performance and make adjustments as needed."})]})]})]}),o.jsxs(eO,{children:[o.jsx(Ud,{children:"Why Choose Our General Services"}),o.jsxs(tO,{children:[o.jsxs(qd,{children:[o.jsx(Gd,{children:o.jsx(hi,{size:32})}),o.jsx(Kd,{children:"Time Efficiency"}),o.jsx(Yd,{children:"Free up valuable time for your core business activities by outsourcing general services to our experts."})]}),o.jsxs(qd,{children:[o.jsx(Gd,{children:o.jsx(_a,{size:32})}),o.jsx(Kd,{children:"Cost Reduction"}),o.jsx(Yd,{children:"Lower operational costs through efficient resource allocation and streamlined processes."})]}),o.jsxs(qd,{children:[o.jsx(Gd,{children:o.jsx(Za,{size:32})}),o.jsx(Kd,{children:"Enhanced Security"}),o.jsx(Yd,{children:"Protect your assets and ensure a safe working environment with our comprehensive security solutions."})]})]})]})]}),FD=d.div`
  width: 100%;
`,ZD=d.section`
  position: relative;
  height: 655px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`,_D=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ND=d.div`
  ${ji};
  flex-direction: column;
  gap: 2rem;
`,BD=d.div`
  ${ki};
`,WD=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,UD=d.h1`
  ${Si};
`,qD=d.p`
  ${Ei};
`,GD=d.a`
  ${fn};
`,Ud=d.h2`
  ${Sn};
`,KD=d.section`
  padding: 5rem 2rem;
  background-color: white;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,YD=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,Js=d.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,el=d.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`,tl=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,nl=d.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,rl=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Bt=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
  }
`,QD=d.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,XD=d.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,JD=d.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: #ddd;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    
    &:before {
      display: none;
    }
  }
`,il=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 22%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;d.div`
  background-color: #DC143C;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;const ol=d.div`
  background-color: white;
  color: #DC143C;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,al=d.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`,sl=d.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,eO=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,tO=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qd=d.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,Gd=d.div`
  color: #DC143C;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`,Kd=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,Yd=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,nO=()=>o.jsx(rO,{children:o.jsx(ID,{})}),rO=d.div`
  width: 100%;
`;function iO(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(oO,{children:[o.jsx(bt,{title:"General Business Services | Hyacinth Industries LLC",description:"General business services from Hyacinth Industries LLC designed to strengthen operations, support teams, and accelerate business growth.",canonicalPath:"/general-services"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(nO,{}),o.jsx(kt,{})]})}const oO=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`,aO=()=>o.jsxs(sO,{children:[o.jsxs(lO,{children:[o.jsx(cO,{src:gt,alt:"Administrative Support Services"}),o.jsxs(dO,{children:[o.jsxs(uO,{children:[o.jsx(hO,{children:"Hyacinth Industries"}),o.jsx(fO,{children:"Administrative Support"}),o.jsx(pO,{children:"Professional business administration built to reduce operational drag and keep teams focused on execution."})]}),o.jsx(mO,{href:"#administrative-services",children:"Get Started"})]})]}),o.jsxs(gO,{id:"administrative-services",children:[o.jsx(Qd,{children:"Our Administrative Services"}),o.jsxs(xO,{children:[o.jsxs(ll,{children:[o.jsx(cl,{children:o.jsx(Dc,{size:40})}),o.jsx(dl,{children:"Office Management"}),o.jsx(ul,{children:"Comprehensive office management solutions to streamline your business operations."}),o.jsxs(hl,{children:[o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Workflow Optimization"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Resource Allocation"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Office Coordination"]})]})]}),o.jsxs(ll,{children:[o.jsx(cl,{children:o.jsx(W9,{size:40})}),o.jsx(dl,{children:"Document Processing"}),o.jsx(ul,{children:"Efficient document management and processing services for your business needs."}),o.jsxs(hl,{children:[o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Document Creation"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Filing & Organization"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Data Entry"]})]})]}),o.jsxs(ll,{children:[o.jsx(cl,{children:o.jsx(z9,{size:40})}),o.jsx(dl,{children:"Scheduling & Planning"}),o.jsx(ul,{children:"Professional scheduling and planning services to optimize your time and resources."}),o.jsxs(hl,{children:[o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Appointment Setting"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Meeting Coordination"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Event Planning"]})]})]}),o.jsxs(ll,{children:[o.jsx(cl,{children:o.jsx(sf,{size:40})}),o.jsx(dl,{children:"Correspondence Management"}),o.jsx(ul,{children:"Efficient handling of business correspondence to maintain professional communications."}),o.jsxs(hl,{children:[o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Email Management"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Letter Drafting"]}),o.jsxs(Wt,{children:[o.jsx(X,{size:16})," Response Handling"]})]})]})]})]}),o.jsxs(yO,{children:[o.jsx(Qd,{children:"Our Administrative Process"}),o.jsx(vO,{children:"We follow a systematic approach to deliver exceptional administrative support that meets your business needs."}),o.jsxs(wO,{children:[o.jsxs(fl,{children:[o.jsx(pl,{children:o.jsx(Dc,{size:32})}),o.jsx(ml,{children:"Assessment"}),o.jsx(gl,{children:"We evaluate your current administrative processes and identify areas for improvement."})]}),o.jsxs(fl,{children:[o.jsx(pl,{children:o.jsx(G6,{size:32})}),o.jsx(ml,{children:"Planning"}),o.jsx(gl,{children:"We develop a customized administrative support plan tailored to your specific requirements."})]}),o.jsxs(fl,{children:[o.jsx(pl,{children:o.jsx(rs,{size:32})}),o.jsx(ml,{children:"Implementation"}),o.jsx(gl,{children:"We assign dedicated administrative professionals to execute the plan with precision."})]}),o.jsxs(fl,{children:[o.jsx(pl,{children:o.jsx(_a,{size:32})}),o.jsx(ml,{children:"Optimization"}),o.jsx(gl,{children:"We continuously monitor performance and optimize processes for maximum efficiency."})]})]})]}),o.jsxs(bO,{children:[o.jsx(Qd,{children:"Why Choose Our Administrative Support"}),o.jsxs(jO,{children:[o.jsxs(Xd,{children:[o.jsx(Jd,{children:o.jsx(hi,{size:32})}),o.jsx(eu,{children:"Time Efficiency"}),o.jsx(tu,{children:"Free up valuable time for core business activities by outsourcing administrative tasks to our experts."})]}),o.jsxs(Xd,{children:[o.jsx(Jd,{children:o.jsx(_a,{size:32})}),o.jsx(eu,{children:"Cost Reduction"}),o.jsx(tu,{children:"Lower operational costs through efficient resource allocation and streamlined administrative processes."})]}),o.jsxs(Xd,{children:[o.jsx(Jd,{children:o.jsx(q6,{size:32})}),o.jsx(eu,{children:"Professional Quality"}),o.jsx(tu,{children:"Ensure consistent, high-quality administrative support from experienced professionals."})]})]})]}),o.jsx(kO,{children:o.jsxs(SO,{children:[o.jsx(EO,{children:"Ready to Streamline Your Administrative Processes?"}),o.jsx(CO,{children:"Contact us today to learn how our administrative support services can help your business thrive."}),o.jsx(AO,{href:"/contact",children:"Contact Us"})]})})]}),sO=d.div`
  width: 100%;
`,lO=d.section`
  position: relative;
  height: 655px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`,cO=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,dO=d.div`
  ${ji};
  flex-direction: column;
  gap: 2rem;
`,uO=d.div`
  ${ki};
`,hO=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,fO=d.h1`
  ${Si};
`,pO=d.p`
  ${Ei};
`,mO=d.a`
  ${fn};
`,Qd=d.h2`
  ${Sn};
`,gO=d.section`
  padding: 5rem 2rem;
  background-color: white;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,xO=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,ll=d.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,cl=d.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`,dl=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,ul=d.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,hl=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Wt=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
  }
`,yO=d.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,vO=d.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,wO=d.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: #ddd;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    
    &:before {
      display: none;
    }
  }
`,fl=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 22%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,pl=d.div`
  background-color: white;
  color: #DC143C;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,ml=d.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`,gl=d.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,bO=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,jO=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xd=d.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,Jd=d.div`
  color: #DC143C;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`,eu=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,tu=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,kO=d.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,SO=d.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`,EO=d.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,CO=d.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,AO=d.a`
  background-color: white;
  color: #DC143C;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
  }
`,PO=()=>o.jsx(MO,{children:o.jsx(aO,{})}),MO=d.div`
  width: 100%;
`;function TO(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(LO,{id:"administrative-support",children:[o.jsx(bt,{title:"Administrative Support Services | Hyacinth Industries LLC",description:"Administrative support services from Hyacinth Industries LLC to streamline operations, improve productivity, and keep teams focused on growth.",canonicalPath:"/administrative-support"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(PO,{}),o.jsx(kt,{})]})}const LO=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`;d.div`
  background-color: transparent;
  width: 250px;
  min-width: 250px; 
  height: 200px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;d.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden; /* Prevent flickering */
`;const m5=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  will-change: transform;
`;d(m5)`
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  h2{
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;d(m5)`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  transform: rotateY(180deg);
  h2{
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
  p{
    font-size: 0.8rem;
  }
`;d.div`
  .icon-container {
    width: 80px; /* Adjust this value as needed */
    height: 80px; /* Adjust this value as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto; /* Center the icon container */
  }
`;const HO=({children:e})=>{const[t,n]=b.useState(null),r=[],i=[];return h.Children.forEach(e,a=>{a.type===VO?r.push(a):a.type===$O&&i.push(a)}),o.jsx(zO,{children:r.map((a,s)=>o.jsxs(RO,{children:[h.cloneElement(a,{active:t===s,onClick:()=>n(t===s?null:s)}),h.cloneElement(i[s],{active:t===s})]},s))})},VO=({children:e,icon:t,active:n,onClick:r})=>o.jsx(DO,{active:n,onClick:r,children:o.jsxs(OO,{children:[t&&o.jsx(IO,{children:t}),o.jsx("span",{children:e})]})}),$O=({active:e,children:t})=>o.jsx(W.div,{initial:{maxHeight:0,opacity:0,padding:0},animate:e?{maxHeight:1500,opacity:1,padding:"1rem"}:{maxHeight:0,opacity:0,padding:0},exit:{maxHeight:0,opacity:0,padding:0},transition:{duration:.3,ease:"easeInOut"},style:{overflow:"hidden",background:"#ffffff",color:"#333333"},children:t}),zO=d.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,RO=d(W.div)`
  font-family: "Lexend Light", sans-serif;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  &:last-child {
    border-bottom: none;
  }
`,DO=d.button`
  width: 100%;
  padding: 1.5rem;
  background: ${e=>e.active?"#1a1a1a":"#2a2a2a"};
  color: #ffffff;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background: ${e=>e.active?"#1a1a1a":"#333333"};
  }

  &::after {
    content: '${e=>e.active?"−":"+"}';
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    right: 1.5rem;
  }
`,OO=d.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`,IO=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`,g5="/assets/stock2-CibTSQaN.webp",FO="/assets/security-CdefBLZ4.webp",ZO=()=>{const[e,t]=b.useState(()=>window.innerWidth<800);return b.useEffect(()=>{const n=()=>{t(window.innerWidth<800)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),o.jsxs(_O,{children:[o.jsxs(NO,{children:[o.jsx(BO,{src:hr,alt:"Healthcare Services"}),o.jsxs(WO,{children:[o.jsxs(UO,{children:[o.jsx(qO,{children:"Hyacinth Industries"}),o.jsx(GO,{children:"Healthcare Solutions"}),o.jsx(KO,{children:"Advanced medical support and technology services designed for reliable care delivery and stronger operations."})]}),o.jsx(YO,{onClick:n=>{n.preventDefault();const r=document.getElementById("healthcare-overview"),i=115;if(r){const a=r.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:a,behavior:"smooth"})}},children:"Explore Our Solutions"})]})]}),o.jsxs(k4,{id:"healthcare-overview",background:"#ffffff",children:[o.jsx(Qo,{children:"Healthcare Industry Overview"}),o.jsxs(QO,{children:[o.jsxs(XO,{children:[o.jsx(S4,{id:"healthcare-industry-overview",children:"The healthcare industry is undergoing a profound transformation driven by technological advancements, changing patient expectations, and the need for more efficient care delivery models. As healthcare providers face increasing pressure to deliver high-quality care while managing costs, innovative solutions are becoming essential."}),o.jsx(S4,{children:"Our comprehensive healthcare solutions are designed to address these challenges by leveraging cutting-edge technology, streamlined processes, and specialized expertise to help healthcare organizations thrive in this evolving landscape."})]}),o.jsx(JO,{children:o.jsx(eI,{src:g5,alt:"Healthcare Technology"})})]})]}),o.jsxs(tI,{children:[o.jsx(Qo,{children:"Our Healthcare Services"}),o.jsxs(nI,{children:[o.jsxs(nu,{children:[o.jsx(ru,{children:o.jsx(H9,{size:40})}),o.jsx(iu,{children:"Virtual Healthcare"}),o.jsx(ou,{children:"Comprehensive telehealth solutions including remote consultations, monitoring, and digital health platforms."}),o.jsxs(au,{children:[o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Remote Consultations"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Patient Monitoring"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Digital Health Platforms"]})]})]}),o.jsxs(nu,{children:[o.jsx(ru,{children:o.jsx(ck,{size:40})}),o.jsx(iu,{children:"Administrative Support"}),o.jsx(ou,{children:"Streamlined administrative support for healthcare organizations, including billing, documentation, and compliance."}),o.jsxs(au,{children:[o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Billing Management"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Documentation Support"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Compliance Management"]})]})]}),o.jsxs(nu,{children:[o.jsx(ru,{children:o.jsx(G9,{size:40})}),o.jsx(iu,{children:"Medical Billing"}),o.jsx(ou,{children:"Streamlined medical billing and revenue cycle management to optimize healthcare finances."}),o.jsxs(au,{children:[o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Claims Processing"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Revenue Optimization"]}),o.jsxs(Hn,{children:[o.jsx(X,{size:16})," Compliance Management"]})]})]})]})]}),o.jsxs(cI,{children:[o.jsx(Qo,{children:"Why Choose Our Healthcare Services"}),o.jsxs(dI,{children:[o.jsxs(su,{children:[o.jsx(lu,{children:o.jsx(hi,{size:32})}),o.jsx(cu,{children:"Time Efficiency"}),o.jsx(du,{children:"Optimize patient care time and reduce administrative burden with our streamlined healthcare solutions."})]}),o.jsxs(su,{children:[o.jsx(lu,{children:o.jsx(_a,{size:32})}),o.jsx(cu,{children:"Cost Reduction"}),o.jsx(du,{children:"Lower operational costs through efficient resource allocation and optimized healthcare processes."})]}),o.jsxs(su,{children:[o.jsx(lu,{children:o.jsx(q6,{size:32})}),o.jsx(cu,{children:"Quality Assurance"}),o.jsx(du,{children:"Maintain the highest standards of patient care with our quality-focused healthcare solutions."})]})]})]}),o.jsxs(k4,{background:"#ffffff",children:[o.jsx(Qo,{children:"Healthcare Innovations"}),o.jsxs(rI,{children:[o.jsxs(E4,{children:[o.jsx(C4,{src:RPM,alt:"Remote Patient Monitoring"}),o.jsxs(A4,{children:[o.jsx(P4,{children:"Remote Monitoring"}),o.jsx(M4,{children:"Advanced systems for continuous tracking of patient health metrics from a distance, enabling proactive interventions."})]})]}),o.jsxs(E4,{children:[o.jsx(C4,{src:FO,alt:"Healthcare Security"}),o.jsxs(A4,{children:[o.jsx(P4,{children:"Secure Health Data"}),o.jsx(M4,{children:"State-of-the-art security protocols to protect sensitive patient information and ensure regulatory compliance."})]})]})]})]}),o.jsxs(iI,{children:[o.jsx(Qo,{children:"Our Healthcare Process"}),o.jsx(oI,{children:"We follow a systematic approach to deliver exceptional healthcare services that meet the highest standards of quality and patient care."}),o.jsxs(aI,{children:[o.jsx(sI,{children:o.jsx("img",{src:r5,alt:"Healthcare Process"})}),o.jsxs(lI,{children:[o.jsxs(xl,{children:[o.jsx(yl,{children:"1"}),o.jsxs(vl,{children:[o.jsx(wl,{children:"Assessment"}),o.jsx(bl,{children:"We conduct a comprehensive evaluation of your healthcare needs and requirements."})]})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:"2"}),o.jsxs(vl,{children:[o.jsx(wl,{children:"Planning"}),o.jsx(bl,{children:"We develop a customized healthcare solution tailored to your specific needs."})]})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:"3"}),o.jsxs(vl,{children:[o.jsx(wl,{children:"Implementation"}),o.jsx(bl,{children:"We deploy our healthcare professionals and technology to execute the plan."})]})]}),o.jsxs(xl,{children:[o.jsx(yl,{children:"4"}),o.jsxs(vl,{children:[o.jsx(wl,{children:"Monitoring"}),o.jsx(bl,{children:"We continuously monitor performance and make adjustments to ensure optimal outcomes."})]})]})]})]})]}),o.jsx(uI,{children:o.jsx(hI,{children:o.jsxs(fI,{children:[o.jsx(pI,{children:"Ready to Transform Your Healthcare Operations?"}),o.jsx(mI,{children:"Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality."}),o.jsx(gI,{href:"/contact",children:"Contact Us Today"})]})})})]})},_O=d.div`
  width: 100%;
  overflow-x: hidden;
`,k4=d.section`
  padding: 3.5rem 2rem;
  background-color: ${e=>e.background||"#ffffff"};
  scroll-margin-top: 140px;
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,NO=d.section`
  position: relative;
  height: 655px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`,BO=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,WO=d.div`
  ${ji};
  flex-direction: column;
  gap: 2rem;
`,UO=d.div`
  ${ki};
`,qO=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,GO=d.h1`
  ${Si};
`,KO=d.p`
  ${Ei};
`,YO=d.a`
  ${fn};
`,Qo=d.h2`
  ${Sn};
  margin-bottom: 2rem;
`,QO=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,XO=d.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`,JO=d.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 1024px) {
    order: 1;
  }
`,eI=d.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`,S4=d.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.5rem;
  scroll-margin-top: 140px;

  @media (max-width: 768px) {
    font-size: 1rem;
    scroll-margin-top: 110px;
  }
`,tI=d.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,nI=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,nu=d.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,ru=d.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`,iu=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,ou=d.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,au=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Hn=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
  }
`,rI=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,E4=d.div`
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,C4=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,A4=d.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9));
  color: white;
`,P4=d.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
`,M4=d.p`
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: var(--font-body);
`,iI=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,oI=d.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,aI=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,sI=d.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`,lI=d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,xl=d.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,yl=d.div`
  background-color: #DC143C;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
`,vl=d.div`
  flex: 1;
`,wl=d.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`,bl=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,cI=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,dI=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,su=d.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,lu=d.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`,cu=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,du=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,uI=d.section`
min-height: 300px;  
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${g5});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`,hI=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,fI=d.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`,pI=d.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,mI=d.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,gI=d.a`
  background-color: #DC143C;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #B01030;
  }
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;d.div`
  display: flex;
  flex-direction: ${e=>e.isSmallScreen?"column":"row"};
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;d.div`
  padding: 2rem;
  flex: 1;
`;d.h3`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;d.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;d.div`
  flex: 1;
  height: 100%;
  min-height: 200px;
  max-height: 300px;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;d.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;d.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 1024px) {
    order: 2;
  }
`;d.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;d(o5)`
  height: 350px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;d.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1024px) {
    order: 1;
  }
`;d.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;d(HO)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;d.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
`;d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;const xI=()=>o.jsx(yI,{children:o.jsx(ZO,{})}),yI=d.div`
  width: 100%;
`;function vI(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(wI,{id:"healthcare",children:[o.jsx(bt,{title:"Healthcare Support Services | Hyacinth Industries LLC",description:"Healthcare support services from Hyacinth Industries LLC focused on reliable assistance, operational excellence, and improved patient-service workflows.",canonicalPath:"/healthcare"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(xI,{}),o.jsx(kt,{})]})}const wI=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`,Nf="/assets/bnw-Cri3570_.webp",bI=[{icon:dk,title:"Multimedia Production",items:["Video editing","Graphic design","Brand-aligned visual content","Visual storytelling assets"]},{icon:B6,title:"Social Media Management",items:["Content scheduling","Platform coordination","Brand voice consistency","Audience engagement support"]}],jI=()=>o.jsxs(kI,{children:[o.jsx(SI,{children:o.jsxs(EI,{children:[o.jsx(CI,{src:K1,alt:"Marketing Services"}),o.jsx(AI,{children:o.jsxs(PI,{children:[o.jsx(MI,{children:"Hyacinth Industries"}),o.jsx(TI,{children:"Marketing Support"}),o.jsx(LI,{children:"Multimedia and social media support built to strengthen digital brand presence."}),o.jsx(HI,{href:"#marketing",children:"Explore Marketing Support"})]})})]})}),o.jsxs(VI,{id:"marketing",children:[o.jsx(T4,{children:"Modern Marketing Support for Growing Teams"}),o.jsx($I,{children:"Hyacinth Industries helps companies improve digital communication through multimedia production and social media support. The focus is on helping your brand look more consistent, stay active across channels, and present content in a way that is easier for your audience to notice and trust."})]}),o.jsxs(zI,{children:[o.jsx(T4,{children:"Our Marketing Services"}),o.jsx(RI,{children:"We provide practical marketing support across multimedia production, social media management, to help teams move faster without compromising quality."}),o.jsx(DI,{children:bI.map((e,t)=>o.jsxs(OI,{children:[o.jsx(II,{children:o.jsx(e.icon,{size:24,color:"#DC143C"})}),o.jsx(FI,{children:e.title}),o.jsx(ZI,{children:e.items.map((n,r)=>o.jsx(_I,{children:n},r))})]},t))})]}),o.jsx(NI,{children:o.jsx(BI,{children:o.jsxs(WI,{children:[o.jsx(UI,{children:"Ready to Strengthen Your Marketing Execution?"}),o.jsx(qI,{children:"Let's discuss how Hyacinth Industries can support your brand with stronger multimedia output and more consistent social media coordination."}),o.jsx(GI,{href:"/contact",children:"Contact Us Today"})]})})})]}),kI=d.div`
  width: 100%;
`,SI=d.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`,EI=d.div`
  position: relative;
  height: 655px;
  width: 100%;

  @media (max-width: 768px) {
    height: 450px;
  }
`,CI=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,AI=d.div`
  ${ji};
`,PI=d.div`
  ${ki};
`,MI=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,TI=d.h1`
  ${Si};
`,LI=d.p`
  ${Ei};
`,HI=d.a`
  ${fn};
`,VI=d.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 115px;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,T4=d.h2`
  ${Sn};
  margin-bottom: 1.8rem;
`,$I=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-body);
`,zI=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,RI=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,DI=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 420px));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,OI=d.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`,II=d.div`
  margin-bottom: 1.5rem;
`,FI=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,ZI=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,_I=d.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #666;
  font-family: var(--font-body);

  &:before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`,NI=d.section`
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${Nf});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`,BI=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,WI=d.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`,UI=d.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,qI=d.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,GI=d.a`
  background-color: #DC143C;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;

  &:hover {
    background-color: #B01030;
  }
`;function KI(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(YI,{children:[o.jsx(bt,{title:"Marketing Services | Hyacinth Industries LLC",description:"Marketing services from Hyacinth Industries LLC focused on multimedia production, social media management, and stronger digital brand execution.",canonicalPath:"/marketing"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(jI,{}),o.jsx(kt,{})]})}const YI=d.div`
  width: 100vw;
  padding-top: 110px;
`,QI=[{icon:J9,title:"UI/UX Design",items:["User interface design","User experience optimization","Wireframing & prototyping","Visual design systems"]},{icon:hk,title:"Responsive Development",items:["Mobile-first design","Cross-browser compatibility","Progressive web apps","Performance optimization"]},{icon:I9,title:"Technical Solutions",items:["Custom web applications","Content management systems","E-commerce platforms","API integrations"]},{icon:sk,title:"Creative Design",items:["Brand identity integration","Custom graphics & illustrations","Animation & interactive elements","Visual storytelling"]},{icon:uk,title:"SEO Optimization",items:["Search engine friendly structure","Performance optimization","Semantic HTML markup","Analytics integration"]},{icon:q9,title:"Maintenance & Support",items:["Regular updates & monitoring","Performance optimization","Security patches","Content management"]}],XI=[{icon:_6,title:"Performance-Driven",description:"Fast-loading, optimized websites that convert visitors into customers with measurable results."},{icon:rs,title:"Expert Team",description:"Our skilled designers and developers bring years of experience to deliver exceptional digital solutions."},{icon:N6,title:"Scalable Solutions",description:"Websites and applications that grow seamlessly with your business needs and user base."},{icon:Za,title:"Secure & Reliable",description:"Built with modern security standards to protect your business and customer data."},{icon:W6,title:"Innovative Approach",description:"We leverage the latest technologies and design trends to keep your digital presence ahead of the curve."},{icon:hi,title:"Timely Delivery",description:"We understand the importance of deadlines and deliver projects on time without compromising quality."}],JI=()=>o.jsxs(eF,{children:[o.jsx(tF,{children:o.jsxs(nF,{children:[o.jsx(rF,{src:gr,alt:"Web Design Services"}),o.jsx(iF,{children:o.jsxs(oF,{children:[o.jsx(aF,{children:"Hyacinth Industries"}),o.jsx(sF,{children:"Web Design & Development"}),o.jsx(lF,{children:"Creating digital experiences that engage, convert, and inspire"}),o.jsx(cF,{href:"#web-design-and-development",children:"Get Started"})]})})]})}),o.jsxs(dF,{id:"web-design-and-development",children:[o.jsx(jl,{children:"Modern Web Solutions for the Digital Age"}),o.jsx(uF,{children:"At Hyacinth Industries, we create stunning, responsive websites that combine aesthetic excellence with technical innovation. Our web design services focus on delivering user-friendly, performance-optimized digital experiences that drive results and help your business stand out in the competitive digital landscape."})]}),o.jsxs(hF,{children:[o.jsx(jl,{children:"Our Web Design Services"}),o.jsx(fF,{children:"We offer a comprehensive range of web design and development services to meet your business needs, from simple informational websites to complex web applications."}),o.jsx(pF,{children:QI.map((e,t)=>o.jsxs(mF,{children:[o.jsx(gF,{children:o.jsx(e.icon,{size:24,color:"#DC143C"})}),o.jsx(xF,{children:e.title}),o.jsx(yF,{children:e.items.map((n,r)=>o.jsx(vF,{children:n},r))})]},t))})]}),o.jsxs(wF,{children:[o.jsx(jl,{children:"Why Choose Our Web Design Services?"}),o.jsx(bF,{children:"Our approach to web design combines creativity, technical expertise, and business strategy to deliver websites that not only look great but also perform exceptionally well."}),o.jsx(jF,{children:XI.map((e,t)=>o.jsxs(kF,{children:[o.jsx(SF,{children:o.jsx(e.icon,{size:24,color:"#DC143C"})}),o.jsx(EF,{children:e.title}),o.jsx(CF,{children:e.description})]},t))})]}),o.jsxs(AF,{children:[o.jsx(jl,{children:"Our Web Development Process"}),o.jsx(PF,{children:"We follow a structured approach to web design and development to ensure that every project is delivered on time, within budget, and exceeds expectations."}),o.jsxs(MF,{children:[o.jsx(TF,{children:o.jsx("img",{src:gr,alt:"Web Development Process"})}),o.jsxs(LF,{children:[o.jsxs(kl,{children:[o.jsx(Sl,{children:"1"}),o.jsxs(El,{children:[o.jsx(Cl,{children:"Discovery & Planning"}),o.jsx(Al,{children:"We begin by understanding your business goals, target audience, and requirements to create a comprehensive project plan."})]})]}),o.jsxs(kl,{children:[o.jsx(Sl,{children:"2"}),o.jsxs(El,{children:[o.jsx(Cl,{children:"Design & Prototyping"}),o.jsx(Al,{children:"Our designers create wireframes and visual designs that align with your brand identity and user experience goals."})]})]}),o.jsxs(kl,{children:[o.jsx(Sl,{children:"3"}),o.jsxs(El,{children:[o.jsx(Cl,{children:"Development & Testing"}),o.jsx(Al,{children:"Our developers build your website using clean, efficient code and thoroughly test it across all devices and browsers."})]})]}),o.jsxs(kl,{children:[o.jsx(Sl,{children:"4"}),o.jsxs(El,{children:[o.jsx(Cl,{children:"Launch & Optimization"}),o.jsx(Al,{children:"After final approval, we deploy your website and provide ongoing support to ensure optimal performance."})]})]})]})]})]}),o.jsx(HF,{children:o.jsx(VF,{children:o.jsxs($F,{children:[o.jsx(zF,{children:"Ready to Transform Your Digital Presence?"}),o.jsx(RF,{children:"Let's discuss how our web design services can help you achieve your business goals and create a compelling online experience for your customers."}),o.jsx(DF,{href:"/contact",children:"Contact Us Today"})]})})})]}),eF=d.div`
  width: 100%;
`,tF=d.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`,nF=d.div`
  position: relative;
  height: 655px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 450px;
  }
`,rF=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,iF=d.div`
  ${ji};
`,oF=d.div`
  ${ki};
`,aF=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,sF=d.h1`
  ${Si};
`,lF=d.p`
  ${Ei};
`,cF=d.a`
  ${fn};
`,dF=d.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,jl=d.h2`
  ${Sn};
  margin-bottom: 1.8rem;
`,uF=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-body);
`,hF=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,fF=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,pF=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,mF=d.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`,gF=d.div`
  margin-bottom: 1.5rem;
`,xF=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,yF=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,vF=d.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #666;
  font-family: var(--font-body);
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`,wF=d.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,bF=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,jF=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kF=d.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,SF=d.div`
  margin-bottom: 1.5rem;
`,EF=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,CF=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,AF=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,PF=d.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,MF=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,TF=d.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`,LF=d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,kl=d.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,Sl=d.div`
  background-color: #DC143C;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(220, 20, 60, 0.2);
`,El=d.div`
  flex: 1;
`,Cl=d.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`,Al=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,HF=d.section`
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${Nf});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  min-height: 300px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`,VF=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,$F=d.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`,zF=d.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,RF=d.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,DF=d.a`
  background-color: #DC143C;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #B01030;
  }
`;function OF(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(IF,{id:"web-design",children:[o.jsx(bt,{title:"Web Design Services | Hyacinth Industries LLC",description:"Web design services from Hyacinth Industries LLC to improve digital presence, user experience, conversion performance, and online growth.",canonicalPath:"/web-design"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(JI,{}),o.jsx(kt,{})]})}const IF=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`,FF=[{icon:T9,title:"3D Modeling",items:["Character modeling","Product visualization","Architectural rendering","Environment design"]},{icon:yk,title:"Animation Production",items:["Character animation","Motion graphics","Visual effects (VFX)","Cinematic sequences"]},{icon:rk,title:"Interactive Media",items:["Virtual reality (VR)","Augmented reality (AR)","Interactive presentations","Real-time rendering"]},{icon:ak,title:"Visual Design",items:["Concept art","Texture creation","Lighting design","Color grading"]},{icon:U9,title:"Game Development",items:["Game asset creation","Character rigging","Animation integration","Environment design"]},{icon:X9,title:"Compositing",items:["Multi-layer compositing","Post-production effects","Color correction","Final output rendering"]}],ZF=[{icon:_6,title:"Creative Excellence",description:"Stunning visuals that bring your ideas to life with cutting-edge animation techniques and artistic direction."},{icon:rs,title:"Expert Team",description:"Our skilled 3D artists and animators bring years of experience across various industries and project types."},{icon:N6,title:"Versatile Solutions",description:"Adaptable animation services for various industries including entertainment, education, marketing, and more."},{icon:Za,title:"Quality Assurance",description:"High-quality deliverables that meet industry standards with meticulous attention to detail."},{icon:W6,title:"Innovative Approach",description:"We leverage the latest technologies and creative techniques to deliver animations that stand out."},{icon:hi,title:"Timely Delivery",description:"We understand the importance of deadlines and deliver projects on time without compromising quality."}],_F=()=>o.jsxs(NF,{children:[o.jsx(BF,{children:o.jsxs(WF,{children:[o.jsx(UF,{src:qa,alt:"3D Animation Services"}),o.jsx(qF,{children:o.jsxs(GF,{children:[o.jsx(KF,{children:"Hyacinth Industries"}),o.jsx(YF,{children:"3D Animation & Visualization"}),o.jsx(QF,{children:"Bringing ideas to life through stunning visual storytelling"}),o.jsx(XF,{href:"#3d-animation-and-visualization",children:"Explore Our Work"})]})})]})}),o.jsxs(JF,{id:"3d-animation-and-visualization",children:[o.jsx(Pl,{children:"Cutting-Edge 3D Animation Services"}),o.jsx(eZ,{children:"At Hyacinth Industries, we bring ideas to life through cutting-edge 3D animation and visualization. Our team combines artistic excellence with technical expertise to create stunning visual content that captivates audiences and communicates your message effectively."})]}),o.jsxs(tZ,{children:[o.jsx(Pl,{children:"Our Animation Services"}),o.jsx(nZ,{children:"We offer a comprehensive range of 3D animation and visualization services to meet your creative needs, from concept development to final rendering and everything in between."}),o.jsx(rZ,{children:FF.map((e,t)=>o.jsxs(iZ,{children:[o.jsx(oZ,{children:o.jsx(e.icon,{size:24,color:"#DC143C"})}),o.jsx(aZ,{children:e.title}),o.jsx(sZ,{children:e.items.map((n,r)=>o.jsx(lZ,{children:n},r))})]},t))})]}),o.jsxs(cZ,{children:[o.jsx(Pl,{children:"Why Choose Our Animation Services?"}),o.jsx(dZ,{children:"Our approach to 3D animation combines creativity, technical expertise, and strategic thinking to deliver visual content that not only looks impressive but also achieves your communication goals."}),o.jsx(uZ,{children:ZF.map((e,t)=>o.jsxs(hZ,{children:[o.jsx(fZ,{children:o.jsx(e.icon,{size:24,color:"#DC143C"})}),o.jsx(pZ,{children:e.title}),o.jsx(mZ,{children:e.description})]},t))})]}),o.jsxs(gZ,{children:[o.jsx(Pl,{children:"Our Animation Process"}),o.jsx(xZ,{children:"We follow a structured approach to 3D animation and visualization to ensure that every project is delivered on time, within budget, and exceeds expectations."}),o.jsxs(yZ,{children:[o.jsx(vZ,{children:o.jsx("img",{src:qa,alt:"Animation Process"})}),o.jsxs(wZ,{children:[o.jsxs(Ml,{children:[o.jsx(Tl,{children:"1"}),o.jsxs(Ll,{children:[o.jsx(Hl,{children:"Concept & Storyboarding"}),o.jsx(Vl,{children:"We begin by understanding your vision and developing concepts and storyboards that outline the visual narrative."})]})]}),o.jsxs(Ml,{children:[o.jsx(Tl,{children:"2"}),o.jsxs(Ll,{children:[o.jsx(Hl,{children:"3D Modeling & Texturing"}),o.jsx(Vl,{children:"Our artists create detailed 3D models and apply realistic textures to bring characters and environments to life."})]})]}),o.jsxs(Ml,{children:[o.jsx(Tl,{children:"3"}),o.jsxs(Ll,{children:[o.jsx(Hl,{children:"Animation & Lighting"}),o.jsx(Vl,{children:"We animate the models with fluid motion and apply professional lighting to create the desired mood and atmosphere."})]})]}),o.jsxs(Ml,{children:[o.jsx(Tl,{children:"4"}),o.jsxs(Ll,{children:[o.jsx(Hl,{children:"Rendering & Post-Production"}),o.jsx(Vl,{children:"The final stage involves high-quality rendering and post-production enhancements to deliver the finished animation."})]})]})]})]})]}),o.jsx(bZ,{children:o.jsx(jZ,{children:o.jsxs(kZ,{children:[o.jsx(SZ,{children:"Ready to Bring Your Vision to Life?"}),o.jsx(EZ,{children:"Let's  discuss how our 3D animation services can help you create compelling visual content that engages your audience and achieves your goals."}),o.jsx(CZ,{href:"/contact",children:"Start Your Project"})]})})})]}),NF=d.div`
  width: 100%;
`,BF=d.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`,WF=d.div`
  position: relative;
  height: 655px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 450px;
  }
`,UF=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,qF=d.div`
  ${ji};
`,GF=d.div`
  ${ki};
`,KF=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,YF=d.h1`
  ${Si};
`,QF=d.p`
  ${Ei};
`,XF=d.a`
  ${fn};
`,JF=d.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,Pl=d.h2`
  ${Sn};
  margin-bottom: 1.8rem;
`,eZ=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-body);
`,tZ=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,nZ=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,rZ=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,iZ=d.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`,oZ=d.div`
  margin-bottom: 1.5rem;
`,aZ=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,sZ=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,lZ=d.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #666;
  font-family: var(--font-body);
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`,cZ=d.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,dZ=d.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,uZ=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,hZ=d.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,fZ=d.div`
  margin-bottom: 1.5rem;
`,pZ=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,mZ=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,gZ=d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,xZ=d.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`,yZ=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,vZ=d.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`,wZ=d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ml=d.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,Tl=d.div`
  background-color: #DC143C;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(220, 20, 60, 0.2);
`,Ll=d.div`
  flex: 1;
`,Hl=d.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`,Vl=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,bZ=d.section`
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${Nf});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  min-height: 300px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`,jZ=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,kZ=d.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`,SZ=d.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,EZ=d.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,CZ=d.a`
  background-color: #DC143C;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #B01030;
  }
`;function AZ(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(PZ,{id:"3d-animation",children:[o.jsx(bt,{title:"3D Animation Services | Hyacinth Industries LLC",description:"3D animation services from Hyacinth Industries LLC delivering high-quality visual storytelling and professional animation solutions.",canonicalPath:"/3d-animation"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(_F,{}),o.jsx(kt,{})]})}const PZ=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`,MZ=()=>o.jsxs(TZ,{children:[o.jsxs(LZ,{children:[o.jsx(HZ,{src:gn,alt:"Logistics Services"}),o.jsxs(VZ,{children:[o.jsxs($Z,{children:[o.jsx(zZ,{children:"Hyacinth Industries"}),o.jsx(RZ,{children:"Logistics Services"}),o.jsx(DZ,{children:"Efficient supply chain support that improves visibility, coordination, and operational throughput."})]}),o.jsx(OZ,{href:"#logistics-services",children:"Get Started"})]})]}),o.jsxs(IZ,{id:"logistics-services",children:[o.jsx(L4,{children:"Our Logistics Services"}),o.jsxs(FZ,{children:[o.jsxs(uu,{children:[o.jsx(hu,{children:o.jsx(mk,{size:40})}),o.jsx(fu,{children:"Transportation Management"}),o.jsx(pu,{children:"Comprehensive transportation solutions including route optimization, carrier selection, and freight management."}),o.jsxs(mu,{children:[o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Fleet Management"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Route Optimization"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Carrier Selection"]})]})]}),o.jsxs(uu,{children:[o.jsx(hu,{children:o.jsx(ok,{size:40})}),o.jsx(fu,{children:"Warehousing & Distribution"}),o.jsx(pu,{children:"Strategic warehousing services with inventory management and distribution network optimization."}),o.jsxs(mu,{children:[o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Inventory Control"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Order Fulfillment"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Cross-Docking"]})]})]}),o.jsxs(uu,{children:[o.jsx(hu,{children:o.jsx(Qm,{size:40})}),o.jsx(fu,{children:"Supply Chain Analytics"}),o.jsx(pu,{children:"Data-driven insights to optimize your supply chain operations and identify improvement opportunities."}),o.jsxs(mu,{children:[o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Performance Metrics"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Predictive Analytics"]}),o.jsxs(Vn,{children:[o.jsx(X,{size:16})," Cost Optimization"]})]})]})]})]}),o.jsxs(ZZ,{children:[o.jsx(L4,{children:"Why Choose Our Logistics Services"}),o.jsxs(_Z,{children:[o.jsxs(gu,{children:[o.jsx(xu,{children:o.jsx(hi,{size:32})}),o.jsx(yu,{children:"Time Efficiency"}),o.jsx(vu,{children:"Optimize delivery times and reduce delays with our advanced logistics solutions."})]}),o.jsxs(gu,{children:[o.jsx(xu,{children:o.jsx(_a,{size:32})}),o.jsx(yu,{children:"Cost Reduction"}),o.jsx(vu,{children:"Lower operational costs through route optimization and efficient resource allocation."})]}),o.jsxs(gu,{children:[o.jsx(xu,{children:o.jsx(Qm,{size:32})}),o.jsx(yu,{children:"Data-Driven Decisions"}),o.jsx(vu,{children:"Make informed decisions based on comprehensive analytics and performance metrics."})]})]})]})]}),TZ=d.div`
  width: 100%;
`,LZ=d.section`
  position: relative;
  height: 655px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`,HZ=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,VZ=d.div`
  ${ji};
  flex-direction: column;
  gap: 2rem;
`,$Z=d.div`
  ${ki};
`,zZ=d.p`
  ${hn};
  color: rgba(255, 255, 255, 0.9);
`,RZ=d.h1`
  ${Si};
`,DZ=d.p`
  ${Ei};
`,OZ=d.a`
  ${fn};
`,L4=d.h2`
  ${Sn};
`;d.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;d.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;d.div`
  color: #DC143C;
  margin-bottom: 1rem;
`;d.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`;d.div`
  font-size: 1rem;
  color: #666;
  font-family: var(--font-body);
`;const IZ=d.section`
  padding: 5rem 2rem;
  background-color: white;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`,FZ=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,uu=d.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,hu=d.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`,fu=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,pu=d.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,mu=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Vn=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
  }
`,ZZ=d.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,_Z=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gu=d.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,xu=d.div`
  color: #DC143C;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`,yu=d.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`,vu=d.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`,NZ=()=>o.jsx(BZ,{children:o.jsx(MZ,{})}),BZ=d.div`
  width: 100%;
`;function WZ(){return b.useEffect(()=>{window.scrollTo(0,0)},[]),o.jsxs(UZ,{id:"logistics",children:[o.jsx(bt,{title:"Logistics Services | Hyacinth Industries LLC",description:"Logistics services from Hyacinth Industries LLC to improve shipment visibility, coordination, operational efficiency, and business performance.",canonicalPath:"/logistics"}),o.jsx(jt,{}),o.jsx(ft,{}),o.jsx(NZ,{}),o.jsx(kt,{})]})}const UZ=d.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`,qZ=ij([{path:"/",element:o.jsx(AV,{})},{path:"/about",element:o.jsx(RV,{})},{path:"/industries",element:o.jsx(T$,{})},{path:"/contact",element:o.jsx(tz,{})},{path:"/services",element:o.jsx(Pz,{})},{path:"/faq",element:o.jsx(iR,{})},{path:"/reforestation",element:o.jsx(LR,{})},{path:"/general-services",element:o.jsx(iO,{})},{path:"/administrative-support",element:o.jsx(TO,{})},{path:"/healthcare",element:o.jsx(vI,{})},{path:"/marketing",element:o.jsx(KI,{})},{path:"/web-design",element:o.jsx(OF,{})},{path:"/3d-animation",element:o.jsx(AZ,{})},{path:"/logistics",element:o.jsx(WZ,{})},{path:"/privacy-policy",element:o.jsx(mD,{})}]);w1.createRoot(document.getElementById("root")).render(o.jsx(Y4,{children:o.jsx(h.StrictMode,{children:o.jsx(b9,{children:o.jsx(j9,{children:o.jsx(hj,{router:qZ})})})})}));
