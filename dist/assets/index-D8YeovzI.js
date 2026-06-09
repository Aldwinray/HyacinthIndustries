const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeFeatureContent-Cwle_Che.js","assets/motion-jLvT6sLY.js","assets/vendor-DPKrZd5H.js","assets/styled-3-8BfJdI.js","assets/icons-D9O8TY1s.js","assets/office-Bip-LbGP.js","assets/coding-DYEnY3xo.js","assets/healthcare-C4VecUyJ.js","assets/HomeBusinessActions-C6J9v0DY.js","assets/bg1-B7rUjgNq.js","assets/process-DpJ0_MSu.js","assets/HomeIndustriesExpertise-Dk6R2y8q.js","assets/marketing-UVJaPu9h.js","assets/animation-DZXJdELE.js","assets/logistics-BkZb81Yi.js","assets/HomeReforestationFeature-DITYnVkd.js","assets/HomeTestimonials-CycUlw9U.js","assets/premiumPageStyles-B-qrlWmb.js","assets/About-B1SnXKGs.js","assets/Industries-CuMGWlvG.js","assets/Contact-IeRZw9Ce.js","assets/Services-C94432Tw.js","assets/FAQ-997kGrEM.js","assets/Reforestation-jHTv_U8x.js","assets/PrivacyPolicy-qeIYs3us.js","assets/GeneralServices-DYL9Rctt.js","assets/AdministrativeSupport-C8IIquvj.js","assets/Healthcare-gxwPD7g0.js","assets/ImageSlider-Dr3lJNIJ.js","assets/Marketing-CQK9rLSo.js","assets/WebDesign-DN8Sk0vZ.js","assets/3DAnimation-C2Ie6Sxg.js","assets/Logistics-C08yqAMr.js"])))=>i.map(i=>d[i]);
var Ke=Object.defineProperty;var Ge=(e,r,n)=>r in e?Ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var L=(e,r,n)=>Ge(e,typeof r!="symbol"?r+"":r,n);import{j as t,m as b,A as ge}from"./motion-jLvT6sLY.js";import{g as Pe,R as i,r as h,a as Qe,L as le,N as He,c as Je,b as et}from"./vendor-DPKrZd5H.js";import{p as tt,o as rt,d as s,m as nt,l as it}from"./styled-3-8BfJdI.js";import{A as ot,G as at,R as st,l as lt,w as ct,I as dt,a as mt,b as pt,c as ht,d as ut,M as ft,P as gt,F as xt,e as bt,L as yt,f as wt,C as vt,g as kt}from"./icons-D9O8TY1s.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const jt="modulepreload",Et=function(e){return"/"+e},xe={},w=function(r,n,o){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),c=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));a=Promise.allSettled(n.map(m=>{if(m=Et(m),m in xe)return;xe[m]=!0;const d=m.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${f}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":jt,d||(g.as="script"),g.crossOrigin="",g.href=m,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((v,y)=>{g.addEventListener("load",v),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(p){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=p,window.dispatchEvent(c),!c.defaultPrevented)throw p}return a.then(p=>{for(const c of p||[])c.status==="rejected"&&l(c.reason);return r().catch(l)})};var Lt=typeof Element<"u",Tt=typeof Map=="function",At=typeof Set=="function",Ct=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function G(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!G(e[o],r[o]))return!1;return!0}var l;if(Tt&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(l=e.entries();!(o=l.next()).done;)if(!r.has(o.value[0]))return!1;for(l=e.entries();!(o=l.next()).done;)if(!G(o.value[1],r.get(o.value[0])))return!1;return!0}if(At&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(l=e.entries();!(o=l.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(Ct&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(e[o]!==r[o])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof r.valueOf=="function")return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof r.toString=="function")return e.toString()===r.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;if(Lt&&e instanceof Element)return!1;for(o=n;o--!==0;)if(!((a[o]==="_owner"||a[o]==="__v"||a[o]==="__o")&&e.$$typeof)&&!G(e[a[o]],r[a[o]]))return!1;return!0}return e!==e&&r!==r}var zt=function(r,n){try{return G(r,n)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};const _t=Pe(zt);var St=function(e,r,n,o,a,l,p,c){if(!e){var m;if(r===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,o,a,l,p,c],f=0;m=new Error(r.replace(/%s/g,function(){return d[f++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}},It=St;const be=Pe(It);var Oe=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Oe||{}),ee={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ye=Object.values(Oe),ue={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$t=Object.entries(ue).reduce((e,[r,n])=>(e[n]=r,e),{}),E="data-rh",M={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},F=(e,r)=>{for(let n=e.length-1;n>=0;n-=1){const o=e[n];if(Object.prototype.hasOwnProperty.call(o,r))return o[r]}return null},Pt=e=>{let r=F(e,"title");const n=F(e,M.TITLE_TEMPLATE);if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,()=>r);const o=F(e,M.DEFAULT_TITLE);return r||o||void 0},Ht=e=>F(e,M.ON_CHANGE_CLIENT_STATE)||(()=>{}),te=(e,r)=>r.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,o)=>({...n,...o}),{}),Ot=(e,r)=>r.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,o)=>{if(!n.length){const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l].toLowerCase();if(e.indexOf(c)!==-1&&o[c])return n.concat(o)}}return n},[]),Mt=e=>console&&typeof console.warn=="function"&&console.warn(e),W=(e,r,n)=>{const o={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Mt(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,l)=>{const p={};l.filter(m=>{let d;const f=Object.keys(m);for(let v=0;v<f.length;v+=1){const y=f[v],k=y.toLowerCase();r.indexOf(k)!==-1&&!(d==="rel"&&m[d].toLowerCase()==="canonical")&&!(k==="rel"&&m[k].toLowerCase()==="stylesheet")&&(d=k),r.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(d=y)}if(!d||!m[d])return!1;const g=m[d].toLowerCase();return o[d]||(o[d]={}),p[d]||(p[d]={}),o[d][g]?!1:(p[d][g]=!0,!0)}).reverse().forEach(m=>a.push(m));const c=Object.keys(p);for(let m=0;m<c.length;m+=1){const d=c[m],f={...o[d],...p[d]};o[d]=f}return a},[]).reverse()},Ft=(e,r)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][r])return!0}return!1},Dt=e=>({baseTag:Ot(["href"],e),bodyAttributes:te("bodyAttributes",e),defer:F(e,M.DEFER),encode:F(e,M.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:te("htmlAttributes",e),linkTags:W("link",["rel","href"],e),metaTags:W("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:W("noscript",["innerHTML"],e),onChangeClientState:Ht(e),scriptTags:W("script",["src","innerHTML"],e),styleTags:W("style",["cssText"],e),title:Pt(e),titleAttributes:te("titleAttributes",e),prioritizeSeoTags:Ft(e,M.PRIORITIZE_SEO_TAGS)}),Me=e=>Array.isArray(e)?e.join(""):e,Wt=(e,r)=>{const n=Object.keys(e);for(let o=0;o<n.length;o+=1)if(r[n[o]]&&r[n[o]].includes(e[n[o]]))return!0;return!1},re=(e,r)=>Array.isArray(e)?e.reduce((n,o)=>(Wt(o,r)?n.priority.push(o):n.default.push(o),n),{priority:[],default:[]}):{default:e,priority:[]},we=(e,r)=>({...e,[r]:void 0}),Rt=["noscript","script","style"],ce=(e,r=!0)=>r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Fe=e=>Object.keys(e).reduce((r,n)=>{const o=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return r?`${r} ${o}`:o},""),Vt=(e,r,n,o)=>{const a=Fe(n),l=Me(r);return a?`<${e} ${E}="true" ${a}>${ce(l,o)}</${e}>`:`<${e} ${E}="true">${ce(l,o)}</${e}>`},Bt=(e,r,n=!0)=>r.reduce((o,a)=>{const l=a,p=Object.keys(l).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,f)=>{const g=typeof l[f]>"u"?f:`${f}="${ce(l[f],n)}"`;return d?`${d} ${g}`:g},""),c=l.innerHTML||l.cssText||"",m=Rt.indexOf(e)===-1;return`${o}<${e} ${E}="true" ${p}${m?"/>":`>${c}</${e}>`}`},""),De=(e,r={})=>Object.keys(e).reduce((n,o)=>{const a=ue[o];return n[a||o]=e[o],n},r),Nt=(e,r,n)=>{const o={key:r,[E]:!0},a=De(n,o);return[i.createElement("title",a,r)]},Q=(e,r)=>r.map((n,o)=>{const a={key:o,[E]:!0};return Object.keys(n).forEach(l=>{const c=ue[l]||l;if(c==="innerHTML"||c==="cssText"){const m=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:m}}else a[c]=n[l]}),i.createElement(e,a)}),j=(e,r,n=!0)=>{switch(e){case"title":return{toComponent:()=>Nt(e,r.title,r.titleAttributes),toString:()=>Vt(e,r.title,r.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>De(r),toString:()=>Fe(r)};default:return{toComponent:()=>Q(e,r),toString:()=>Bt(e,r,n)}}},Yt=({metaTags:e,linkTags:r,scriptTags:n,encode:o})=>{const a=re(e,ee.meta),l=re(r,ee.link),p=re(n,ee.script);return{priorityMethods:{toComponent:()=>[...Q("meta",a.priority),...Q("link",l.priority),...Q("script",p.priority)],toString:()=>`${j("meta",a.priority,o)} ${j("link",l.priority,o)} ${j("script",p.priority,o)}`},metaTags:a.default,linkTags:l.default,scriptTags:p.default}},Zt=e=>{const{baseTag:r,bodyAttributes:n,encode:o=!0,htmlAttributes:a,noscriptTags:l,styleTags:p,title:c="",titleAttributes:m,prioritizeSeoTags:d}=e;let{linkTags:f,metaTags:g,scriptTags:v}=e,y={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:y,linkTags:f,metaTags:g,scriptTags:v}=Yt(e)),{priority:y,base:j("base",r,o),bodyAttributes:j("bodyAttributes",n,o),htmlAttributes:j("htmlAttributes",a,o),link:j("link",f,o),meta:j("meta",g,o),noscript:j("noscript",l,o),script:j("script",v,o),style:j("style",p,o),title:j("title",{title:c,titleAttributes:m},o)}},de=Zt,Z=[],We=!!(typeof window<"u"&&window.document&&window.document.createElement),me=class{constructor(e,r){L(this,"instances",[]);L(this,"canUseDOM",We);L(this,"context");L(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Z:this.instances,add:e=>{(this.canUseDOM?Z:this.instances).push(e)},remove:e=>{const r=(this.canUseDOM?Z:this.instances).indexOf(e);(this.canUseDOM?Z:this.instances).splice(r,1)}}});this.context=e,this.canUseDOM=r||!1,r||(e.helmet=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ut={},Re=i.createContext(Ut),z,Ve=(z=class extends h.Component{constructor(n){super(n);L(this,"helmetData");this.helmetData=new me(this.props.context||{},z.canUseDOM)}render(){return i.createElement(Re.Provider,{value:this.helmetData.value},this.props.children)}},L(z,"canUseDOM",We),z),O=(e,r)=>{const n=document.head||document.querySelector("head"),o=n.querySelectorAll(`${e}[${E}]`),a=[].slice.call(o),l=[];let p;return r&&r.length&&r.forEach(c=>{const m=document.createElement(e);for(const d in c)if(Object.prototype.hasOwnProperty.call(c,d))if(d==="innerHTML")m.innerHTML=c.innerHTML;else if(d==="cssText")m.styleSheet?m.styleSheet.cssText=c.cssText:m.appendChild(document.createTextNode(c.cssText));else{const f=d,g=typeof c[f]>"u"?"":c[f];m.setAttribute(d,g)}m.setAttribute(E,"true"),a.some((d,f)=>(p=f,m.isEqualNode(d)))?a.splice(p,1):l.push(m)}),a.forEach(c=>{var m;return(m=c.parentNode)==null?void 0:m.removeChild(c)}),l.forEach(c=>n.appendChild(c)),{oldTags:a,newTags:l}},pe=(e,r)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const o=n.getAttribute(E),a=o?o.split(","):[],l=[...a],p=Object.keys(r);for(const c of p){const m=r[c]||"";n.getAttribute(c)!==m&&n.setAttribute(c,m),a.indexOf(c)===-1&&a.push(c);const d=l.indexOf(c);d!==-1&&l.splice(d,1)}for(let c=l.length-1;c>=0;c-=1)n.removeAttribute(l[c]);a.length===l.length?n.removeAttribute(E):n.getAttribute(E)!==p.join(",")&&n.setAttribute(E,p.join(","))},qt=(e,r)=>{typeof e<"u"&&document.title!==e&&(document.title=Me(e)),pe("title",r)},ve=(e,r)=>{const{baseTag:n,bodyAttributes:o,htmlAttributes:a,linkTags:l,metaTags:p,noscriptTags:c,onChangeClientState:m,scriptTags:d,styleTags:f,title:g,titleAttributes:v}=e;pe("body",o),pe("html",a),qt(g,v);const y={baseTag:O("base",n),linkTags:O("link",l),metaTags:O("meta",p),noscriptTags:O("noscript",c),scriptTags:O("script",d),styleTags:O("style",f)},k={},H={};Object.keys(y).forEach(x=>{const{newTags:A,oldTags:J}=y[x];A.length&&(k[x]=A),J.length&&(H[x]=y[x].oldTags)}),r&&r(),m(e,k,H)},R=null,Xt=e=>{R&&cancelAnimationFrame(R),e.defer?R=requestAnimationFrame(()=>{ve(e,()=>{R=null})}):(ve(e),R=null)},Kt=Xt,ke=class extends h.Component{constructor(){super(...arguments);L(this,"rendered",!1)}shouldComponentUpdate(r){return!tt(r,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:r}=this.props.context;r.remove(this),this.emitChange()}emitChange(){const{helmetInstances:r,setHelmet:n}=this.props.context;let o=null;const a=Dt(r.get().map(l=>{const p={...l.props};return delete p.context,p}));Ve.canUseDOM?Kt(a):de&&(o=de(a)),n(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:r}=this.props.context;r.add(this),this.emitChange()}render(){return this.init(),null}},se,Gt=(se=class extends h.Component{shouldComponentUpdate(e){return!_t(we(this.props,"helmetData"),we(e,"helmetData"))}mapNestedChildrenToProps(e,r){if(!r)return null;switch(e.type){case"script":case"noscript":return{innerHTML:r};case"style":return{cssText:r};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,r,n,o){return{...r,[e.type]:[...r[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,o)}]}}mapObjectTypeChildren(e,r,n,o){switch(e.type){case"title":return{...r,[e.type]:o,titleAttributes:{...n}};case"body":return{...r,bodyAttributes:{...n}};case"html":return{...r,htmlAttributes:{...n}};default:return{...r,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,r){let n={...r};return Object.keys(e).forEach(o=>{n={...n,[o]:e[o]}}),n}warnOnInvalidChildren(e,r){return be(ye.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ye.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),be(!r||typeof r=="string"||Array.isArray(r)&&!r.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,r){let n={};return i.Children.forEach(e,o=>{if(!o||!o.props)return;const{children:a,...l}=o.props,p=Object.keys(l).reduce((m,d)=>(m[$t[d]||d]=l[d],m),{});let{type:c}=o;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(o,a),c){case"Symbol(react.fragment)":r=this.mapChildrenToProps(a,r);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(o,n,p,a);break;default:r=this.mapObjectTypeChildren(o,r,p,a);break}}),this.mapArrayTypeChildrenToProps(n,r)}render(){const{children:e,...r}=this.props;let n={...r},{helmetData:o}=r;if(e&&(n=this.mapChildrenToProps(e,n)),o&&!(o instanceof me)){const a=o;o=new me(a.context,!0),delete n.helmetData}return o?i.createElement(ke,{...n,context:o.value}):i.createElement(Re.Consumer,null,a=>i.createElement(ke,{...n,context:a}))}},L(se,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),se),he={},je=Qe;he.createRoot=je.createRoot,he.hydrateRoot=je.hydrateRoot;const B={name:"light",colors:{primary:"#9E1C24",primaryDeep:"#6F0F16",primarySoft:"rgba(158, 28, 36, 0.65)",primaryHover:"rgba(158, 28, 36, 0.85)",gold:"#C9A227",secondary:"#4a6163",accent:"#f9a826",background:"#ffffff",surface:"#f5f5f5",text:"#333333",textLight:"#666666",error:"#d32f2f",success:"#388e3c",warning:"#f57c00",info:"#0288d1"},typography:{headingFont:"var(--font-heading)",bodyFont:"var(--font-body)",accentFont:"var(--font-accent)",learnfont:{H1:"Montserrat",H2:"Poppins Bold",bodydesc:"Inter Regular"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},borderRadius:{sm:"0.125rem",md:"0.25rem",lg:"0.5rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},transitions:{default:"0.3s ease",fast:"0.15s ease",slow:"0.5s ease"}};({...B.typography},{...B.spacing}),{...B.borderRadius},{...B.transitions};const Qt=h.createContext(),Jt=({children:e})=>{const[r]=h.useState(B);h.useEffect(()=>{document.body.style.backgroundColor=r.colors.background,document.body.style.color=r.colors.text},[]);const n={theme:r,isLightTheme:!0,isDarkTheme:!1};return t.jsx(Qt.Provider,{value:n,children:t.jsx(rt,{theme:r,children:e})})},er=()=>{const[e,r]=h.useState(!1);h.useEffect(()=>{const o=()=>{window.scrollY>300?r(!0):r(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsx(tr,{onClick:n,$isVisible:e,"aria-label":"Scroll to top",children:t.jsx(ot,{size:20,strokeWidth:2})})},tr=s.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({$isVisible:e})=>e?1:0};
  visibility: ${({$isVisible:e})=>e?"visible":"hidden"};
  transform: ${({$isVisible:e})=>e?"translateY(0) scale(1)":"translateY(16px) scale(0.9)"};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(225, 29, 72, 0.4);
  z-index: 999;

  &:hover {
    transform: ${({$isVisible:e})=>e?"translateY(-4px) scale(1.05)":"translateY(16px) scale(0.9)"};
    box-shadow: 0 8px 24px rgba(225, 29, 72, 0.5);
  }

  &:active {
    transform: ${({$isVisible:e})=>e?"translateY(-2px) scale(0.98)":"translateY(16px) scale(0.9)"};
  }

  svg {
    display: block;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 44px;
    height: 44px;
  }
`,rr=({children:e})=>t.jsxs(t.Fragment,{children:[e,t.jsx(er,{})]}),Ee="https://hyacinthindustriesllc.com",nr="/og-image-v2.webp";function Le(e=""){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${Ee}${e.startsWith("/")?e:`/${e}`}`:Ee}function ir({title:e,description:r,canonicalPath:n,image:o=nr,type:a="website",noindex:l=!1,structuredData:p}){const c=Le(n),m=Le(o);return t.jsxs(Gt,{children:[t.jsx("title",{children:e}),t.jsx("meta",{name:"description",content:r}),t.jsx("meta",{name:"robots",content:l?"noindex, nofollow":"index, follow"}),t.jsx("link",{rel:"canonical",href:c}),t.jsx("meta",{property:"og:site_name",content:"Hyacinth Industries LLC"}),t.jsx("meta",{property:"og:type",content:a}),t.jsx("meta",{property:"og:title",content:e}),t.jsx("meta",{property:"og:description",content:r}),t.jsx("meta",{property:"og:url",content:c}),t.jsx("meta",{property:"og:image",content:m}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{name:"twitter:title",content:e}),t.jsx("meta",{name:"twitter:description",content:r}),t.jsx("meta",{name:"twitter:image",content:m}),p?t.jsx("script",{type:"application/ld+json",children:JSON.stringify(p)}):null]})}function fe(e){return at({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}const or="clamp(380px, 40vw, 520px)",ar="clamp(340px, 34vw, 480px)",u={bgPrimary:"#0B0F19",bgSecondary:"#0D1320",bgElevated:"#111827",accent:"#E11D48",accentHover:"#BE123C",textPrimary:"#F8FAFC",textSecondary:"#94A3B8",border:"rgba(255, 255, 255, 0.06)",glassBg:"rgba(11, 15, 25, 0.98)"},Be=({isOpen:e,setIsOpen:r})=>{const[n,o]=h.useState(!1),[a,l]=h.useState(()=>window.innerWidth<=1024),p=h.useRef(null);h.useEffect(()=>{const x=()=>l(window.innerWidth<=1024);return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),h.useEffect(()=>{o(!1)},[a,e]),h.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const c=()=>{a||(p.current&&clearTimeout(p.current),o(!0))},m=()=>{a||(p.current=setTimeout(()=>{o(!1)},220))},d=()=>{o(a?x=>!x:!0)},f={closed:{x:"100%",transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.06}}},g={closed:{x:24,opacity:0},open:{x:0,opacity:1}},v={closed:{x:"12%",opacity:0,transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.05}}},y={closed:{x:"-100%",opacity:0,transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.05}}},k=[{to:"/logistics/",text:"Logistics"},{to:"/general-services/",text:"General Services"},{to:"/administrative-support/",text:"Administrative Support"},{to:"/healthcare/",text:"Healthcare"},{to:"/marketing/",text:"Marketing"},{to:"/web-design/",text:"Web Design"},{to:"/3d-animation/",text:"3D Animation"}],H=[{to:"/about/",text:"About Us"},{to:"/services/",text:"Services"},{to:"#",text:"Industries",hasSubmenu:!0},{to:"/contact/",text:"Contact Us"},{to:"/faq/",text:"FAQ"}];return t.jsx(sr,{children:t.jsx(ge,{children:e&&t.jsxs(t.Fragment,{children:[t.jsx(lr,{as:b.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>r(!1)}),t.jsxs(cr,{as:b.div,variants:f,initial:"closed",animate:"open",exit:"closed",children:[t.jsx(dr,{as:b.button,whileHover:{scale:1.05,rotate:90},whileTap:{scale:.95},onClick:()=>r(!1),"aria-label":"Close sidebar",children:t.jsx(st,{size:24,weight:"light"})}),t.jsx(mr,{children:H.map((x,A)=>t.jsx(pr,{as:b.div,variants:g,onMouseEnter:()=>x.hasSubmenu&&c(),onMouseLeave:()=>x.hasSubmenu&&m(),children:x.hasSubmenu?t.jsxs(hr,{type:"button",onClick:d,"aria-expanded":n,"aria-controls":"industries-submenu",children:[t.jsx("span",{children:x.text}),t.jsx(ur,{$open:n,children:t.jsx(lt,{size:18,weight:"light"})})]}):t.jsx(le,{to:x.to,onClick:()=>r(!1),children:x.text})},A))}),t.jsxs(fr,{as:b.div,variants:g,children:[t.jsxs(gr,{children:[t.jsx(xr,{children:"Get in Touch"}),t.jsx(br,{})]}),t.jsxs(yr,{children:[t.jsxs(Te,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(Ae,{children:t.jsx(ct,{size:18,weight:"light"})}),t.jsx(Ce,{children:"info@hyacinthindustriesllc.com"})]}),t.jsxs(Te,{href:"tel:+18132133276",children:[t.jsx(Ae,{children:t.jsx(dt,{size:18,weight:"light"})}),t.jsx(Ce,{children:"+1 (813) 213-3276"})]})]}),t.jsxs(wr,{children:[t.jsx(U,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(mt,{size:20,weight:"light"})}),t.jsx(U,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(pt,{size:20,weight:"light"})}),t.jsx(U,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(ht,{size:20,weight:"light"})}),t.jsx(U,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X / Twitter",children:t.jsx(fe,{size:18})})]})]}),t.jsx(ge,{mode:"wait",children:n&&t.jsxs(vr,{id:"industries-submenu",as:b.div,variants:a?y:v,initial:"closed",animate:"open",exit:"closed",onMouseEnter:c,onMouseLeave:m,children:[t.jsxs(kr,{children:[a&&t.jsxs(Er,{type:"button",onClick:()=>o(!1),as:b.button,whileTap:{scale:.96},children:[t.jsx(ut,{size:18,weight:"light"}),t.jsx("span",{children:"Back"})]}),!a&&t.jsx(jr,{children:"Industries"})]}),t.jsx(Lr,{children:k.map((x,A)=>t.jsx(Tr,{as:b.div,variants:g,onClick:()=>{o(!1),r(!1)},children:t.jsx(le,{to:x.to,children:x.text})},A))})]})})]})]})})})},sr=s.div`
  position: relative;
  z-index: 1100;
`,lr=s.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`,cr=s(b.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${or};
  height: 100dvh;
  background: ${u.glassBg};
  border-left: 1px solid ${u.border};
  box-shadow: -16px 0 50px rgba(0, 0, 0, 0.35), -4px 0 20px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  z-index: 1101;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: "Lexend", -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 1.25rem;
  }
`,dr=s.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${u.border};
  color: ${u.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${u.textPrimary};
    border-color: rgba(255, 255, 255, 0.12);
  }

  svg {
    display: block;
  }
`,mr=s.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`,pr=s.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${u.accent}, ${u.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${u.textSecondary};
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.5;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0.875rem 1rem;
    border-radius: 10px;
    display: block;

    &:hover {
      color: ${u.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`,hr=s.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: ${u.textSecondary};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;

  &:hover {
    color: ${u.textPrimary};
    background: rgba(255, 255, 255, 0.03);
    padding-left: 1.25rem;
  }
`,ur=s.span`
  display: flex;
  align-items: center;
  color: ${u.textSecondary};
  transform: ${({$open:e})=>e?"rotate(90deg)":"rotate(0deg)"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`,fr=s.div`
  margin-top: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,xr=s.h4`
  margin: 0;
  color: ${u.textPrimary};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,br=s.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${u.border}, transparent);
`,yr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Te=s.a`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${u.textSecondary};
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;

  &:hover {
    color: ${u.textPrimary};
    transform: translateX(4px);
  }

  &:hover svg {
    color: ${u.accent};
  }
`,Ae=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(225, 29, 72, 0.1);
  color: ${u.accent};
  flex-shrink: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`,Ce=s.span`
  font-weight: 400;
  letter-spacing: 0.01em;
`,wr=s.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`,U=s.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${u.border};
  color: ${u.textSecondary};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${u.accent};
    border-color: ${u.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
  }

  svg {
    display: block;
  }
`,vr=s(b.div)`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
  width: ${ar};
  height: 100dvh;
  background: ${u.glassBg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 16px 0 0 16px;
  border: 1px solid ${u.border};
  border-right: none;
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.45), -8px 0 24px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px 0 0 16px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    right: auto;
    left: 0;
    border-radius: 0;
    border: none;
    padding: 1.25rem;
    z-index: 2;
    background: ${u.bgPrimary};

    &::before {
      border-radius: 0;
    }
  }
`,kr=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${u.border};
`,jr=s.h2`
  color: ${u.textPrimary};
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0;
  flex: 1;
`,Er=s.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: ${u.textSecondary};
  border-radius: 10px;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${u.textPrimary};
  }

  svg {
    display: block;
  }
`,Lr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Tr=s.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${u.accent}, ${u.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${u.textSecondary};
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.5;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0.875rem 1rem;
    border-radius: 10px;
    display: block;

    &:hover {
      color: ${u.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`;function Ar(){const[e,r]=h.useState(!1),[n,o]=h.useState(!1),[a,l]=h.useState(!1),p=window.location.pathname;h.useEffect(()=>{const d=()=>o(window.innerWidth<=1024);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const c=[{to:"/logistics/",text:"Logistics"},{to:"/general-services/",text:"General Services"},{to:"/administrative-support/",text:"Administrative Support"},{to:"/healthcare/",text:"Healthcare"},{to:"/marketing/",text:"Marketing"},{to:"/web-design/",text:"Web Design"},{to:"/3d-animation/",text:"3D Animation"}],m=c.some(d=>p===d.to);return t.jsxs(zr,{children:[!n&&t.jsxs(Pr,{children:[t.jsxs(Or,{children:[t.jsxs(ze,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(ft,{size:15,strokeWidth:1.5}),"info@hyacinthindustriesllc.com"]}),t.jsxs(ze,{href:"tel:+18132133276",children:[t.jsx(gt,{size:15,strokeWidth:1.5}),"+1 (813) 213-3276"]})]}),t.jsxs(Mr,{children:[t.jsx(X,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(xt,{size:18,strokeWidth:1.5})}),t.jsx(X,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(bt,{size:18,strokeWidth:1.5})}),t.jsx(X,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(yt,{size:18,strokeWidth:1.5})}),t.jsx(X,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:t.jsx(fe,{size:18})})]})]}),t.jsxs(Hr,{children:[t.jsx(_r,{children:t.jsx(le,{to:"/",children:t.jsxs(Sr,{children:[t.jsx(Ir,{src:"/petals.webp",alt:"Petals Logo"}),t.jsx($r,{src:"/name.webp",alt:"Hyacinth Industries"})]})})}),!n&&t.jsxs(Dr,{children:[t.jsx(N,{children:t.jsx(q,{to:"/about/",children:"About Us"})}),t.jsx(N,{children:t.jsx(q,{to:"/services/",children:"Services"})}),t.jsxs(Wr,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[t.jsxs(Vr,{$isActive:m,$isOpen:a,children:["Industries",t.jsx(Rr,{size:16,$isOpen:a})]}),t.jsx(Br,{$isOpen:a,children:c.map(d=>t.jsx(Nr,{children:t.jsx(Yr,{to:d.to,children:d.text})},d.to))})]}),t.jsx(N,{children:t.jsx(q,{to:"/contact/",children:"Contact Us"})}),t.jsx(N,{children:t.jsx(q,{to:"/faq/",children:"FAQ"})})]}),n&&t.jsx(Fr,{onClick:()=>r(!e),"aria-label":"Toggle menu","aria-expanded":e,children:t.jsx(wt,{size:24,strokeWidth:2})})]}),n&&t.jsx(Be,{isOpen:e,setIsOpen:r})]})}const Cr=nt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,zr=s.nav`
  font-family: "Lexend", -apple-system, BlinkMacSystemFont, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`,_r=s.div`
  position: relative;
  margin-right: 50px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 0 2.5rem;
  height: 100%;
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 100%, 0 100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1360px) {
    padding: 0 2rem;
    margin-right: 40px;
  }

  @media (max-width: 1024px) {
    clip-path: none;
    margin-right: auto;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }

  &:hover {
    background: linear-gradient(135deg, #1f1f3a 0%, #1a2845 100%);
  }
`,Sr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Ir=s.img`
  height: 38px;
  width: auto;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: rotate(12deg) scale(1.05);
  }
`,$r=s.img`
  height: 28px;
  width: auto;
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1);

  &:hover {
    filter: brightness(1.1);
  }
`,Pr=s.div`
  background: linear-gradient(90deg, #9F1239 0%, #DC143C 50%, #9F1239 100%);
  color: #ffffff;
  width: 100%;
  padding: 0.75rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(159, 18, 57, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Hr=s.div`
  height: 72px;
  background: #ffffff;
  color: #0f172a;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(159, 18, 57, 0.2), transparent);
  }

  @media (max-width: 1024px) {
    height: 64px;
  }
`,Or=s.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`,ze=s.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
  }

  svg {
    color: rgba(255, 255, 255, 0.85);
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #ffffff;
  }
`,Mr=s.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`,Fr=s.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  margin-right: 1.5rem;
  color: #0f172a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.08);
  }

  &:active {
    transform: scale(0.95);
  }
`,Dr=s.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  margin-right: 3rem;
  align-items: center;
  height: 100%;

  @media (max-width: 1360px) {
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,N=s.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`,Wr=s(N)`
  position: relative;
  height: 100%;
`,q=s(He)`
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  text-transform: capitalize;
  line-height: 1.5;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #DC143C, #9F1239);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);

    &::after {
      width: calc(100% - 2rem);
    }
  }

  &.active {
    color: #DC143C;
    font-weight: 600;
    background: rgba(220, 20, 60, 0.06);

    &::after {
      width: calc(100% - 2rem);
    }
  }
`,Rr=s(vt)`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`,Vr=s.div`
  text-decoration: none;
  color: ${({$isActive:e})=>e?"#DC143C":"#334155"};
  font-weight: ${({$isActive:e})=>e?"600":"500"};
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 6px;
  text-transform: capitalize;
  line-height: 1.5;
  background: ${({$isActive:e})=>e?"rgba(220, 20, 60, 0.06)":"transparent"};

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: ${({$isActive:e})=>e?"calc(100% - 2rem)":"0"};
    height: 2px;
    background: linear-gradient(90deg, #DC143C, #9F1239);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);

    &::after {
      width: calc(100% - 2rem);
    }
  }
`,Br=s.div`
  position: absolute;
  top: calc(100% - 8px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  min-width: 220px;
  z-index: 1001;
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  ${({$isOpen:e})=>e&&it`
    animation: ${Cr} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  `};
  transform-origin: top center;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.98);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    transform: translateX(-50%) rotate(45deg);
  }
`,Nr=s.div`
  padding: 0;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    background: rgba(220, 20, 60, 0.06);
  }
`,Yr=s(He)`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #334155;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  line-height: 1.5;

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);
  }

  &.active {
    color: #DC143C;
    font-weight: 600;
    background: rgba(220, 20, 60, 0.08);
  }
`,X=s.a`
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border-radius: 6px;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;var Zr=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Y=function(r,n,o){var a=o.get(r);return a?a(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function _e(e,r){if(e==null)return{};var n={},o=Object.keys(e),a,l;for(l=0;l<o.length;l++)a=o[l],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var D=h.forwardRef(function(e,r){var n=e.alt,o=e.color,a=e.size,l=e.weight,p=e.mirrored,c=e.children,m=e.renderPath,d=_e(e,["alt","color","size","weight","mirrored","children","renderPath"]),f=h.useContext(Zr),g=f.color,v=g===void 0?"currentColor":g,y=f.size,k=f.weight,H=k===void 0?"regular":k,x=f.mirrored,A=x===void 0?!1:x,J=_e(f,["color","size","weight","mirrored"]);return i.createElement("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a??y,height:a??y,fill:o??v,viewBox:"0 0 256 256",transform:p||A?"scale(-1, 1)":void 0},J,d),!!n&&i.createElement("title",null,n),c,i.createElement("rect",{width:"256",height:"256",fill:"none"}),m(l??H,o??v))});D.displayName="IconBase";var _=new Map;_.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"}))});_.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ur=function(r,n){return Y(r,n,_)},Ne=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Ur}))});Ne.displayName="EnvelopeSimple";var S=new Map;S.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});S.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});S.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"}))});S.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});S.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});S.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qr=function(r,n){return Y(r,n,S)},Ye=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:qr}))});Ye.displayName="FacebookLogo";var I=new Map;I.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"34",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("rect",{x:"32",y:"32",width:"192",height:"192",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("circle",{cx:"180",cy:"76",r:"16"}))});I.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"180",cy:"76",r:"12"}))});I.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"32"}),i.createElement("path",{d:"M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"}))});I.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("circle",{cx:"180",cy:"76",r:"10"}))});I.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("circle",{cx:"180",cy:"76",r:"8"}))});I.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"180",cy:"76",r:"12"}))});var Xr=function(r,n){return Y(r,n,I)},Ze=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Xr}))});Ze.displayName="InstagramLogo";var $=new Map;$.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"124",y1:"120",x2:"124",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"84",y1:"120",x2:"84",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M124,148a28,28,0,0,1,56,0v28",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("circle",{cx:"84",cy:"80",r:"16"}))});$.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",opacity:"0.2"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"88",cy:"80",r:"12"}))});$.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"}))});$.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("circle",{cx:"88",cy:"80",r:"10"}))});$.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("circle",{cx:"88",cy:"80",r:"8"}))});$.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"88",cy:"80",r:"12"}))});var Kr=function(r,n){return Y(r,n,$)},Ue=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Kr}))});Ue.displayName="LinkedinLogo";var P=new Map;P.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});P.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",opacity:"0.2"}),i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});P.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"}))});P.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});P.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});P.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Gr=function(r,n){return Y(r,n,P)},qe=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Gr}))});qe.displayName="Phone";const Xe="/assets/Logo-D1zaocPJ.webp",Qr=()=>{const e=new Date().getFullYear();return t.jsx(Jr,{children:t.jsxs(en,{children:[t.jsxs(tn,{children:[t.jsxs(rn,{children:[t.jsxs(nn,{href:"/",children:[t.jsx(on,{src:Xe,alt:"Hyacinth Industries logo",loading:"lazy",decoding:"async"}),t.jsxs(an,{children:[t.jsx(sn,{children:"Hyacinth Industries"}),t.jsx(ln,{children:"Fractional Executive Consulting"})]})]}),t.jsx(cn,{children:"Strategic consulting for leaders and organizations building stronger brands, better deals, and sharper execution."})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Quick Links"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsx(C,{href:"/",children:"Home"})}),t.jsx(T,{children:t.jsx(C,{href:"/about/",children:"About"})}),t.jsx(T,{children:t.jsx(C,{href:"/services/",children:"Services"})}),t.jsx(T,{children:t.jsx(C,{href:"/contact/",children:"Contact"})}),t.jsx(T,{children:t.jsx(C,{href:"/faq/",children:"FAQ"})})]})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Contact"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsxs(Se,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(Ne,{size:20,weight:"regular"}),"info@hyacinthindustriesllc.com"]})}),t.jsx(T,{children:t.jsxs(Se,{href:"tel:+18132133276",children:[t.jsx(qe,{size:20,weight:"regular"}),"+1 (813) 213-3276"]})})]}),t.jsxs(dn,{children:[t.jsx(K,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(Ye,{size:20,weight:"regular"})}),t.jsx(K,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(Ze,{size:20,weight:"regular"})}),t.jsx(K,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(Ue,{size:20,weight:"regular"})}),t.jsx(K,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X",children:t.jsx(fe,{size:18})})]})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Support"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsx(C,{href:"/#home-faq-heading",children:"Common Questions"})}),t.jsx(T,{children:t.jsx(C,{href:"/contact/",children:"Get Support"})})]})]})]}),t.jsxs(mn,{children:[t.jsxs(pn,{children:["© ",e," Hyacinth Industries, LLC. All rights reserved."]}),t.jsx(hn,{children:t.jsx(un,{href:"/privacy-policy/",children:"Privacy Policy"})})]})]})})},Jr=s.footer`
  position: relative;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.9);
  background:
    radial-gradient(1000px 520px at 92% 0%, rgba(225, 29, 72, 0.18), transparent 55%),
    radial-gradient(700px 380px at 0% 100%, rgba(148, 163, 184, 0.08), transparent 60%),
    linear-gradient(180deg, #0b1018 0%, #090d14 100%);
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 1.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(120deg, rgba(255,255,255,0.03) 0%, transparent 30%, rgba(255,255,255,0.02) 100%);
  }
`,en=s.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 2vw, 1.5rem);
  position: relative;
  z-index: 1;

  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 0 2rem;
  }

  @media (max-width: 320px) {
    padding: 0 0.75rem;
  }
`,tn=s.div`
  display: grid;
  grid-template-columns: minmax(0, 1.65fr) repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 3vw, 3rem);
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (min-width: 1440px) {
    gap: 3.5rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  @media (max-width: 320px) {
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }
`,rn=s.div`
  max-width: 420px;

  @media (max-width: 680px) {
    max-width: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,nn=s.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  } 
`,on=s.img`
  width: clamp(92px, 8vw, 128px);
  height: clamp(92px, 8vw, 128px);
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));

  @media (min-width: 1440px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 680px) {
    width: clamp(104px, 28vw, 140px);
    height: clamp(104px, 28vw, 140px);
  }

  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
  }
`,an=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (max-width: 680px) {
    align-items: center;
  }
`,sn=s.span`
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 1.8vw, 1.7rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1;
  color: #ffffff;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`,ln=s.span`
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
`,cn=s.p`
  margin: 1.35rem 0 0;
  max-width: 420px;
  font-family: var(--font-body);
  font-size: clamp(0.875rem, 1vw, 0.98rem);
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.82);

  @media (max-width: 680px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`,ne=s.div`
  min-width: 0;
  overflow: hidden;
`,ie=s.h3`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
`,oe=s.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,T=s.li`
  margin: 0;
`,C=s.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.2s ease, transform 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
    opacity: 0.75;
  }

  &:hover,
  &:focus-visible {
    color: #fff;
    transform: translateX(2px);
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid rgba(225, 29, 72, 0.8);
    outline-offset: 4px;
    border-radius: 6px;
  }
`,Se=s(C)`
  white-space: normal;
  align-items: flex-start;
  gap: 0.6rem;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  svg {
    flex-shrink: 0;
    margin-top: 0.12rem;
  }
`,dn=s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.72rem;
  margin-top: 1rem;

  @media (max-width: 680px) {
    justify-content: center;
  }
`,K=s.a`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.84);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(225, 29, 72, 0.5);
    background: rgba(225, 29, 72, 0.16);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid rgba(225, 29, 72, 0.85);
    outline-offset: 3px;
  }
`,mn=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 320px) {
    padding-top: 1rem;
    gap: 0.75rem;
  }
`,pn=s.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: rgba(255, 255, 255, 0.72);

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`,hn=s.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,un=s.a`
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`,ae="/assets/bg2-DZdCbQqZ.webp",fn={hidden:{},show:{transition:{staggerChildren:.12,delayChildren:.15}}},V={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},gn={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:.75,ease:[.16,1,.3,1]}}},xn=()=>t.jsxs(bn,{children:[t.jsx(yn,{}),t.jsx(wn,{}),t.jsxs(vn,{children:[t.jsxs(kn,{as:b.div,variants:fn,initial:"hidden",animate:"show",children:[t.jsx(jn,{as:b.p,variants:V,children:"FRACTIONAL EXECUTIVE SUPPORT"}),t.jsx(En,{as:b.div,variants:V}),t.jsxs(Ln,{as:b.h1,variants:gn,children:["Close bigger deals",t.jsx("span",{className:"dot"}),t.jsx("br",{}),"Build stronger brands",t.jsx("span",{className:"dot"}),t.jsx("br",{}),"Execute faster",t.jsx("span",{className:"dot"})]}),t.jsx(Tn,{as:b.p,variants:V,children:"Senior-level execution support for high-growth teams without the cost or drag of a full-time hire."}),t.jsx(An,{as:b.p,variants:V,children:"Embedded in your operations. Focused on results across brand, deals, and product."}),t.jsxs(Cn,{as:b.div,variants:V,children:[t.jsxs(zn,{as:b.a,whileHover:{y:-2,scale:1.02},whileTap:{scale:.98},href:"/contact/",children:["BOOK A STRATEGY CALL",t.jsx(kt,{size:18})]}),t.jsxs(_n,{children:[t.jsx(Sn,{children:"30 min • No commitment"}),t.jsx(In,{children:"See if we're a fit"})]})]})]}),t.jsx($n,{children:t.jsx(Pn,{children:t.jsxs(Hn,{as:b.div,initial:{opacity:0,scale:.88},animate:{opacity:1,scale:1},transition:{duration:.85,delay:.4,ease:[.16,1,.3,1]},children:[t.jsx(On,{}),t.jsx(Mn,{src:Xe,alt:"Hyacinth Industries logo",as:b.img,whileHover:{scale:1.08},transition:{duration:.35,ease:"easeOut"}})]})})})]}),t.jsxs(Fn,{as:b.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.5},children:[t.jsx(Dn,{children:"Scroll to explore"}),t.jsx(Wn,{})]})]}),bn=s.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: clamp(5.5rem, 7vw, 7.5rem) clamp(1rem, 3vw, 2rem) clamp(2rem, 4vw, 4rem);

  @media (max-width: 640px) {
    padding: 5rem 1.25rem 3rem;
    align-items: flex-start;
    padding-top: 6rem;
  }
`,yn=s.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 82% 20%, rgba(225, 29, 72, 0.28), transparent 34%),
    radial-gradient(circle at 72% 68%, rgba(71, 85, 105, 0.22), transparent 42%),
    linear-gradient(
      102deg,
      rgba(2, 6, 23, 0.92) 0%,
      rgba(2, 6, 23, 0.78) 38%,
      rgba(2, 6, 23, 0.5) 66%,
      rgba(2, 6, 23, 0.35) 100%
    ),
    url(${ae});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.01);

  @media (max-width: 980px) {
    background-image:
      linear-gradient(
        180deg,
        rgba(2, 6, 23, 0.85) 0%,
        rgba(2, 6, 23, 0.75) 40%,
        rgba(2, 6, 23, 0.65) 100%
      ),
      url(${ae});
    background-position: 60% center;
  }

  @media (max-width: 640px) {
    background-position: 65% center;
    background-image:
      linear-gradient(
        180deg,
        rgba(2, 6, 23, 0.9) 0%,
        rgba(2, 6, 23, 0.8) 30%,
        rgba(2, 6, 23, 0.7) 60%,
        rgba(2, 6, 23, 0.5) 100%
      ),
      url(${ae});
  }
`,wn=s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(3, 7, 18, 0.82) 0%,
    rgba(3, 7, 18, 0.72) 42%,
    rgba(3, 7, 18, 0.35) 72%,
    rgba(3, 7, 18, 0.2) 100%
  );

  @media (max-width: 980px) {
    background: linear-gradient(
      180deg,
      rgba(3, 7, 18, 0.7) 0%,
      rgba(3, 7, 18, 0.5) 50%,
      rgba(3, 7, 18, 0.6) 100%
    );
  }

  @media (max-width: 640px) {
    background: linear-gradient(
      180deg,
      rgba(3, 7, 18, 0.75) 0%,
      rgba(3, 7, 18, 0.55) 40%,
      rgba(3, 7, 18, 0.45) 100%
    );
  }
`,vn=s.div`
  position: relative;
  z-index: 1;
  width: min(1500px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: clamp(1rem, 2vw, 2rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`,kn=s.div`
  width: 100%;
  max-width: 980px;

  @media (max-width: 980px) {
    max-width: 100%;
    order: 2;
  }

  @media (max-width: 640px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`,jn=s.p`
  margin: 0;
  font-size: clamp(0.78rem, 1vw, 0.95rem);
  letter-spacing: 0.1em;
  font-weight: 800;
  color: #e11d48;
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    margin-bottom: 0.5rem;
  }
`,En=s.div`
  width: clamp(36px, 5vw, 46px);
  height: 2px;
  background: #e11d48;
  margin: 0.9rem 0 1.5rem;

  @media (max-width: 640px) {
    margin: 0.75rem 0 1.25rem;
    width: 40px;
  }
`,Ln=s.h1`
  margin: 0;
  font-size: clamp(2rem, 3.6vw, 4.1rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #f8fafc;

  .dot {
    display: inline-block;
    width: 0.15em;
    height: 0.15em;
    margin-left: 0.1em;
    border-radius: 50%;
    background: #e11d48;
    vertical-align: 0.1em;
  }

  @media (max-width: 980px) {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    line-height: 1.08;
  }

  @media (max-width: 640px) {
    font-size: clamp(1.85rem, 8.5vw, 2.5rem);
    line-height: 1.1;
    letter-spacing: -0.02em;

    .dot {
      width: 0.12em;
      height: 0.12em;
    }
  }

  @media (max-width: 380px) {
    font-size: 1.65rem;
  }
`,Tn=s.p`
  margin: 1.25rem 0 0;
  max-width: 780px;
  font-size: clamp(1rem, 1.2vw, 1.35rem);
  line-height: 1.5;
  color: #cbd5e1;
  font-size: 400;

  @media (max-width: 980px) {
    margin: 1.5rem auto 0;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.55;
    margin: 1.25rem 0 0;
    text-align: left;
    max-width: 100%;
  }
  
  @media (max-width: 380px) {
    font-size: 0.95rem;
  }
`,An=s.p`
  margin: 1.25rem 0 0;
  padding-left: 1rem;
  border-left: 2px solid #e11d48;
  font-size: clamp(0.9rem, 1.1vw, 1.05rem);
  line-height: 1.6;
  color: #b8c0cf;
  max-width: 900px;
  font-weight: 400;

  @media (max-width: 980px) {
    margin: 1.25rem auto 0;
    max-width: 550px;
  }

  @media (max-width: 640px) {
    margin: 1.25rem 0 0;
    padding-left: 0.875rem;
    font-size: 0.9rem;
    line-height: 1.55;
    text-align: left;
    max-width: 100%;
    border-left-width: 2px;
  }
`,Cn=s.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: center;
    margin-top: 2.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    margin-top: 1.75rem;
    width: 100%;
  }
`,zn=s.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 56px;
  padding: 0 1.75rem;
  border-radius: 10px;
  background: #be123c;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 14px rgba(190, 18, 60, 0.3);

  &:hover {
    background: #e11d48;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(190, 18, 60, 0.4);
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 52px;
    font-size: 0.9rem;
    padding: 0 1.5rem;
    border-radius: 8px;
    order: 1;
  }

  @media (max-width: 380px) {
    font-size: 0.85rem;
    min-height: 48px
  }
`,_n=s.div`
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 640px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-left: 0;
    padding-top: 1rem;
    margin-top: 0.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    order: 2;
  }

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`,Sn=s.p`
  margin: 0;
  color: #f1f5f9;
  font-weight: 700;
  font-size: 1rem;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`,In=s.p`
  margin: 0.2rem 0 0;
  color: #cbd5e1;
  font-size: 0.95rem;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
`,$n=s.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    order: 1;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 0;
    width: 100%;
    justify-content: center;
  }
`,Pn=s.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    justify-content: center;
    margin: 1rem 0;
  }
`,Hn=s.div`
  position: relative;
  width: min(640px, 100%);
  aspect-ratio: 1.4 / 1;
  border-radius: 24px;
  display: grid;
  place-items: center;

  @media (max-width: 980px) {
    width: min(280px, 50%);
    aspect-ratio: 1.5 / 1;
  }

  @media (max-width: 640px) {
    width: 200px;
    aspect-ratio: auto;
    height: auto;
    border-radius: 0;
    position: relative;
    margin: 0 auto;
  }

  @media (max-width: 380px) {
    width: 160px;
  }
`,On=s.div`
  position: absolute;
  inset: 10% 8%;
  border-radius: 24px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    transparent 75%
  );
  filter: blur(20px);

  @media (max-width: 640px) {
    display: none;
  }
`,Mn=s.img`
  position: relative;
  z-index: 2;
  width: min(88%, 480px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 35px rgba(0, 0, 0, 0.42));

  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 180px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 380px) {
    max-width: 140px;
  }
`,Fn=s.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    bottom: 1rem;
    gap: 0.35rem;
  }
`,Dn=s.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 640px) {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
  }
`,Wn=s.div`
  width: 18px;
  height: 18px;
  border-right: 2px solid rgba(255, 255, 255, 0.45);
  border-bottom: 2px solid rgba(255, 255, 255, 0.45);
  transform: rotate(45deg);
  animation: bounce 1.8s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    50% {
      transform: rotate(45deg) translateY(6px);
    }
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 640px) {
    width: 14px;
    height: 14px;
    border-width: 1.5px;
  }
`,Rn=h.lazy(()=>w(()=>import("./HomeFeatureContent-Cwle_Che.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Vn=h.lazy(()=>w(()=>import("./HomeBusinessActions-C6J9v0DY.js"),__vite__mapDeps([8,1,2,3,4,9,10]))),Bn=h.lazy(()=>w(()=>import("./HomeIndustriesExpertise-Dk6R2y8q.js"),__vite__mapDeps([11,1,2,3,9,5,12,7,13,6,14,4])));h.lazy(()=>w(()=>import("./HomeReforestationFeature-DITYnVkd.js"),__vite__mapDeps([15,1,2,3])));h.lazy(()=>w(()=>import("./HomeTestimonials-CycUlw9U.js"),__vite__mapDeps([16,1,2,3,17])));function Nn(){return h.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(Yn,{id:"home",children:[t.jsx(ir,{title:"Hyacinth Industries LLC | Fractional Executive Consulting for Brand, Deals & Product",description:"Hyacinth Industries provides senior-level fractional executives to help companies strengthen brands, close bigger deals, and improve products without full-time hires.",canonicalPath:"/"}),t.jsx(Ar,{}),t.jsx(Be,{}),t.jsx(xn,{}),t.jsxs(h.Suspense,{fallback:null,children:[t.jsx(Bn,{}),t.jsx(Vn,{}),t.jsx(Rn,{})]}),t.jsx(Qr,{})]})}const Yn=s.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,Zn=h.lazy(()=>w(()=>import("./About-B1SnXKGs.js"),__vite__mapDeps([18,1,2,3,5,7,13,6,4]))),Un=h.lazy(()=>w(()=>import("./Industries-CuMGWlvG.js"),__vite__mapDeps([19,1,2,3,11,9,5,12,7,13,6,14,4,17]))),qn=h.lazy(()=>w(()=>import("./Contact-IeRZw9Ce.js"),__vite__mapDeps([20,1,2,3,4]))),Xn=h.lazy(()=>w(()=>import("./Services-C94432Tw.js"),__vite__mapDeps([21,1,2,3,4]))),Ie=h.lazy(()=>w(()=>import("./FAQ-997kGrEM.js"),__vite__mapDeps([22,1,2,3,4]))),Kn=h.lazy(()=>w(()=>import("./Reforestation-jHTv_U8x.js"),__vite__mapDeps([23,1,2,3,4]))),$e=h.lazy(()=>w(()=>import("./PrivacyPolicy-qeIYs3us.js"),__vite__mapDeps([24,1,2,3,4]))),Gn=h.lazy(()=>w(()=>import("./GeneralServices-DYL9Rctt.js"),__vite__mapDeps([25,1,2,3,5,4]))),Qn=h.lazy(()=>w(()=>import("./AdministrativeSupport-C8IIquvj.js"),__vite__mapDeps([26,1,2,3,5,4]))),Jn=h.lazy(()=>w(()=>import("./Healthcare-gxwPD7g0.js"),__vite__mapDeps([27,1,2,3,28,7,10,4]))),ei=h.lazy(()=>w(()=>import("./Marketing-CQK9rLSo.js"),__vite__mapDeps([29,1,2,3,12,4]))),ti=h.lazy(()=>w(()=>import("./WebDesign-DN8Sk0vZ.js"),__vite__mapDeps([30,1,2,3,6,4]))),ri=h.lazy(()=>w(()=>import("./3DAnimation-C2Ie6Sxg.js"),__vite__mapDeps([31,1,2,3,13,4]))),ni=h.lazy(()=>w(()=>import("./Logistics-C08yqAMr.js"),__vite__mapDeps([32,1,2,3,14,4]))),ii=t.jsx("div",{style:{minHeight:"40vh",display:"grid",placeItems:"center"},children:"Loading..."}),oi=Je([{path:"/",element:t.jsx(Nn,{})},{path:"/about/",element:t.jsx(Zn,{})},{path:"/industries/",element:t.jsx(Un,{})},{path:"/contact/",element:t.jsx(qn,{})},{path:"/services/",element:t.jsx(Xn,{})},{path:"/faq/",element:t.jsx(Ie,{})},{path:"/faq",element:t.jsx(Ie,{})},{path:"/reforestation/",element:t.jsx(Kn,{})},{path:"/general-services/",element:t.jsx(Gn,{})},{path:"/administrative-support/",element:t.jsx(Qn,{})},{path:"/healthcare/",element:t.jsx(Jn,{})},{path:"/marketing/",element:t.jsx(ei,{})},{path:"/web-design/",element:t.jsx(ti,{})},{path:"/3d-animation/",element:t.jsx(ri,{})},{path:"/logistics/",element:t.jsx(ni,{})},{path:"/privacy-policy/",element:t.jsx($e,{})},{path:"/privacy-policy",element:t.jsx($e,{})}]);he.createRoot(document.getElementById("root")).render(t.jsx(Ve,{children:t.jsx(i.StrictMode,{children:t.jsx(Jt,{children:t.jsx(rr,{children:t.jsx(h.Suspense,{fallback:ii,children:t.jsx(et,{router:oi})})})})})}));export{ae as B,Qr as F,Xe as H,D as I,ir as S,Ar as T,w as _,Be as a,Y as r};
