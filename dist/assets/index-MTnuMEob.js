const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeFeatureContent-BHfLfZVw.js","assets/motion-Cy3Fut2F.js","assets/vendor-BQFpGxKL.js","assets/styled-CFUkIykv.js","assets/icons-BMgoPnMN.js","assets/office-Bip-LbGP.js","assets/coding-DYEnY3xo.js","assets/healthcare-C4VecUyJ.js","assets/HomeBusinessActions-DDETplzp.js","assets/bg1-B7rUjgNq.js","assets/process-DpJ0_MSu.js","assets/HomeIndustriesExpertise-CM5vxyUu.js","assets/marketing-UVJaPu9h.js","assets/animation-DZXJdELE.js","assets/logistics-BkZb81Yi.js","assets/HomeReforestationFeature-C99On8WB.js","assets/HomeTestimonials-clI__lZZ.js","assets/premiumPageStyles-AiPHUFhz.js","assets/About-CXS2Jelu.js","assets/petals-BAgCU3Sq.js","assets/Industries-DqwyoQZg.js","assets/Contact-BhdB9K9m.js","assets/Services-BiqWAmpU.js","assets/FAQ-kyvSz8xL.js","assets/Reforestation-DNDNyEQr.js","assets/PrivacyPolicy-BRBFpR8k.js","assets/GeneralServices-B8YkwVaI.js","assets/AdministrativeSupport-C8y1R9OT.js","assets/Healthcare-DCqMP_qa.js","assets/ImageSlider-C3Ytptzf.js","assets/Marketing-JiWVeEkR.js","assets/WebDesign-2dLFfOyP.js","assets/3DAnimation-BQkqrGaB.js","assets/Logistics-CrqC023F.js"])))=>i.map(i=>d[i]);
var Ge=Object.defineProperty;var Ke=(e,r,n)=>r in e?Ge(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var L=(e,r,n)=>Ke(e,typeof r!="symbol"?r+"":r,n);import{j as t,m as y,A as xe}from"./motion-Cy3Fut2F.js";import{g as Pe,R as i,r as h,a as Qe,L as se,u as Je,N as He,c as et,b as tt}from"./vendor-BQFpGxKL.js";import{p as rt,o as nt,d as s,m as it,l as ot}from"./styled-CFUkIykv.js";import{A as at,G as st,R as lt,l as ct,w as dt,I as mt,a as pt,b as ht,c as ut,d as ft,M as xt,P as gt,F as bt,e as yt,L as wt,f as vt,C as kt,g as jt}from"./icons-BMgoPnMN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const Et="modulepreload",Lt=function(e){return"/"+e},ge={},w=function(r,n,o){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),c=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));a=Promise.allSettled(n.map(d=>{if(d=Lt(d),d in ge)return;ge[d]=!0;const p=d.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":Et,p||(x.as="script"),x.crossOrigin="",x.href=d,c&&x.setAttribute("nonce",c),document.head.appendChild(x),p)return new Promise((v,b)=>{x.addEventListener("load",v),x.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(m){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=m,window.dispatchEvent(c),!c.defaultPrevented)throw m}return a.then(m=>{for(const c of m||[])c.status==="rejected"&&l(c.reason);return r().catch(l)})};var Tt=typeof Element<"u",At=typeof Map=="function",Ct=typeof Set=="function",zt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function K(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(!K(e[o],r[o]))return!1;return!0}var l;if(At&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(l=e.entries();!(o=l.next()).done;)if(!r.has(o.value[0]))return!1;for(l=e.entries();!(o=l.next()).done;)if(!K(o.value[1],r.get(o.value[0])))return!1;return!0}if(Ct&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(l=e.entries();!(o=l.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(zt&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(n=e.length,n!=r.length)return!1;for(o=n;o--!==0;)if(e[o]!==r[o])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof r.valueOf=="function")return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof r.toString=="function")return e.toString()===r.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;if(Tt&&e instanceof Element)return!1;for(o=n;o--!==0;)if(!((a[o]==="_owner"||a[o]==="__v"||a[o]==="__o")&&e.$$typeof)&&!K(e[a[o]],r[a[o]]))return!1;return!0}return e!==e&&r!==r}var St=function(r,n){try{return K(r,n)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};const _t=Pe(St);var It=function(e,r,n,o,a,l,m,c){if(!e){var d;if(r===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,o,a,l,m,c],u=0;d=new Error(r.replace(/%s/g,function(){return p[u++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}},$t=It;const be=Pe($t);var Oe=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Oe||{}),ee={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ye=Object.values(Oe),he={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Pt=Object.entries(he).reduce((e,[r,n])=>(e[n]=r,e),{}),E="data-rh",M={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},F=(e,r)=>{for(let n=e.length-1;n>=0;n-=1){const o=e[n];if(Object.prototype.hasOwnProperty.call(o,r))return o[r]}return null},Ht=e=>{let r=F(e,"title");const n=F(e,M.TITLE_TEMPLATE);if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,()=>r);const o=F(e,M.DEFAULT_TITLE);return r||o||void 0},Ot=e=>F(e,M.ON_CHANGE_CLIENT_STATE)||(()=>{}),te=(e,r)=>r.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,o)=>({...n,...o}),{}),Mt=(e,r)=>r.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,o)=>{if(!n.length){const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const c=a[l].toLowerCase();if(e.indexOf(c)!==-1&&o[c])return n.concat(o)}}return n},[]),Ft=e=>console&&typeof console.warn=="function"&&console.warn(e),W=(e,r,n)=>{const o={};return n.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Ft(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,l)=>{const m={};l.filter(d=>{let p;const u=Object.keys(d);for(let v=0;v<u.length;v+=1){const b=u[v],k=b.toLowerCase();r.indexOf(k)!==-1&&!(p==="rel"&&d[p].toLowerCase()==="canonical")&&!(k==="rel"&&d[k].toLowerCase()==="stylesheet")&&(p=k),r.indexOf(b)!==-1&&(b==="innerHTML"||b==="cssText"||b==="itemprop")&&(p=b)}if(!p||!d[p])return!1;const x=d[p].toLowerCase();return o[p]||(o[p]={}),m[p]||(m[p]={}),o[p][x]?!1:(m[p][x]=!0,!0)}).reverse().forEach(d=>a.push(d));const c=Object.keys(m);for(let d=0;d<c.length;d+=1){const p=c[d],u={...o[p],...m[p]};o[p]=u}return a},[]).reverse()},Dt=(e,r)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][r])return!0}return!1},Wt=e=>({baseTag:Mt(["href"],e),bodyAttributes:te("bodyAttributes",e),defer:F(e,M.DEFER),encode:F(e,M.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:te("htmlAttributes",e),linkTags:W("link",["rel","href"],e),metaTags:W("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:W("noscript",["innerHTML"],e),onChangeClientState:Ot(e),scriptTags:W("script",["src","innerHTML"],e),styleTags:W("style",["cssText"],e),title:Ht(e),titleAttributes:te("titleAttributes",e),prioritizeSeoTags:Dt(e,M.PRIORITIZE_SEO_TAGS)}),Me=e=>Array.isArray(e)?e.join(""):e,Rt=(e,r)=>{const n=Object.keys(e);for(let o=0;o<n.length;o+=1)if(r[n[o]]&&r[n[o]].includes(e[n[o]]))return!0;return!1},re=(e,r)=>Array.isArray(e)?e.reduce((n,o)=>(Rt(o,r)?n.priority.push(o):n.default.push(o),n),{priority:[],default:[]}):{default:e,priority:[]},we=(e,r)=>({...e,[r]:void 0}),Vt=["noscript","script","style"],le=(e,r=!0)=>r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Fe=e=>Object.keys(e).reduce((r,n)=>{const o=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return r?`${r} ${o}`:o},""),Bt=(e,r,n,o)=>{const a=Fe(n),l=Me(r);return a?`<${e} ${E}="true" ${a}>${le(l,o)}</${e}>`:`<${e} ${E}="true">${le(l,o)}</${e}>`},Nt=(e,r,n=!0)=>r.reduce((o,a)=>{const l=a,m=Object.keys(l).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,u)=>{const x=typeof l[u]>"u"?u:`${u}="${le(l[u],n)}"`;return p?`${p} ${x}`:x},""),c=l.innerHTML||l.cssText||"",d=Vt.indexOf(e)===-1;return`${o}<${e} ${E}="true" ${m}${d?"/>":`>${c}</${e}>`}`},""),De=(e,r={})=>Object.keys(e).reduce((n,o)=>{const a=he[o];return n[a||o]=e[o],n},r),Yt=(e,r,n)=>{const o={key:r,[E]:!0},a=De(n,o);return[i.createElement("title",a,r)]},Q=(e,r)=>r.map((n,o)=>{const a={key:o,[E]:!0};return Object.keys(n).forEach(l=>{const c=he[l]||l;if(c==="innerHTML"||c==="cssText"){const d=n.innerHTML||n.cssText;a.dangerouslySetInnerHTML={__html:d}}else a[c]=n[l]}),i.createElement(e,a)}),j=(e,r,n=!0)=>{switch(e){case"title":return{toComponent:()=>Yt(e,r.title,r.titleAttributes),toString:()=>Bt(e,r.title,r.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>De(r),toString:()=>Fe(r)};default:return{toComponent:()=>Q(e,r),toString:()=>Nt(e,r,n)}}},Zt=({metaTags:e,linkTags:r,scriptTags:n,encode:o})=>{const a=re(e,ee.meta),l=re(r,ee.link),m=re(n,ee.script);return{priorityMethods:{toComponent:()=>[...Q("meta",a.priority),...Q("link",l.priority),...Q("script",m.priority)],toString:()=>`${j("meta",a.priority,o)} ${j("link",l.priority,o)} ${j("script",m.priority,o)}`},metaTags:a.default,linkTags:l.default,scriptTags:m.default}},Ut=e=>{const{baseTag:r,bodyAttributes:n,encode:o=!0,htmlAttributes:a,noscriptTags:l,styleTags:m,title:c="",titleAttributes:d,prioritizeSeoTags:p}=e;let{linkTags:u,metaTags:x,scriptTags:v}=e,b={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:b,linkTags:u,metaTags:x,scriptTags:v}=Zt(e)),{priority:b,base:j("base",r,o),bodyAttributes:j("bodyAttributes",n,o),htmlAttributes:j("htmlAttributes",a,o),link:j("link",u,o),meta:j("meta",x,o),noscript:j("noscript",l,o),script:j("script",v,o),style:j("style",m,o),title:j("title",{title:c,titleAttributes:d},o)}},ce=Ut,Y=[],We=!!(typeof window<"u"&&window.document&&window.document.createElement),de=class{constructor(e,r){L(this,"instances",[]);L(this,"canUseDOM",We);L(this,"context");L(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Y:this.instances,add:e=>{(this.canUseDOM?Y:this.instances).push(e)},remove:e=>{const r=(this.canUseDOM?Y:this.instances).indexOf(e);(this.canUseDOM?Y:this.instances).splice(r,1)}}});this.context=e,this.canUseDOM=r||!1,r||(e.helmet=ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},qt={},Re=i.createContext(qt),z,Ve=(z=class extends h.Component{constructor(n){super(n);L(this,"helmetData");this.helmetData=new de(this.props.context||{},z.canUseDOM)}render(){return i.createElement(Re.Provider,{value:this.helmetData.value},this.props.children)}},L(z,"canUseDOM",We),z),O=(e,r)=>{const n=document.head||document.querySelector("head"),o=n.querySelectorAll(`${e}[${E}]`),a=[].slice.call(o),l=[];let m;return r&&r.length&&r.forEach(c=>{const d=document.createElement(e);for(const p in c)if(Object.prototype.hasOwnProperty.call(c,p))if(p==="innerHTML")d.innerHTML=c.innerHTML;else if(p==="cssText")d.styleSheet?d.styleSheet.cssText=c.cssText:d.appendChild(document.createTextNode(c.cssText));else{const u=p,x=typeof c[u]>"u"?"":c[u];d.setAttribute(p,x)}d.setAttribute(E,"true"),a.some((p,u)=>(m=u,d.isEqualNode(p)))?a.splice(m,1):l.push(d)}),a.forEach(c=>{var d;return(d=c.parentNode)==null?void 0:d.removeChild(c)}),l.forEach(c=>n.appendChild(c)),{oldTags:a,newTags:l}},me=(e,r)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const o=n.getAttribute(E),a=o?o.split(","):[],l=[...a],m=Object.keys(r);for(const c of m){const d=r[c]||"";n.getAttribute(c)!==d&&n.setAttribute(c,d),a.indexOf(c)===-1&&a.push(c);const p=l.indexOf(c);p!==-1&&l.splice(p,1)}for(let c=l.length-1;c>=0;c-=1)n.removeAttribute(l[c]);a.length===l.length?n.removeAttribute(E):n.getAttribute(E)!==m.join(",")&&n.setAttribute(E,m.join(","))},Xt=(e,r)=>{typeof e<"u"&&document.title!==e&&(document.title=Me(e)),me("title",r)},ve=(e,r)=>{const{baseTag:n,bodyAttributes:o,htmlAttributes:a,linkTags:l,metaTags:m,noscriptTags:c,onChangeClientState:d,scriptTags:p,styleTags:u,title:x,titleAttributes:v}=e;me("body",o),me("html",a),Xt(x,v);const b={baseTag:O("base",n),linkTags:O("link",l),metaTags:O("meta",m),noscriptTags:O("noscript",c),scriptTags:O("script",p),styleTags:O("style",u)},k={},H={};Object.keys(b).forEach(g=>{const{newTags:A,oldTags:J}=b[g];A.length&&(k[g]=A),J.length&&(H[g]=b[g].oldTags)}),r&&r(),d(e,k,H)},R=null,Gt=e=>{R&&cancelAnimationFrame(R),e.defer?R=requestAnimationFrame(()=>{ve(e,()=>{R=null})}):(ve(e),R=null)},Kt=Gt,ke=class extends h.Component{constructor(){super(...arguments);L(this,"rendered",!1)}shouldComponentUpdate(r){return!rt(r,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:r}=this.props.context;r.remove(this),this.emitChange()}emitChange(){const{helmetInstances:r,setHelmet:n}=this.props.context;let o=null;const a=Wt(r.get().map(l=>{const m={...l.props};return delete m.context,m}));Ve.canUseDOM?Kt(a):ce&&(o=ce(a)),n(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:r}=this.props.context;r.add(this),this.emitChange()}render(){return this.init(),null}},ae,Qt=(ae=class extends h.Component{shouldComponentUpdate(e){return!_t(we(this.props,"helmetData"),we(e,"helmetData"))}mapNestedChildrenToProps(e,r){if(!r)return null;switch(e.type){case"script":case"noscript":return{innerHTML:r};case"style":return{cssText:r};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,r,n,o){return{...r,[e.type]:[...r[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,o)}]}}mapObjectTypeChildren(e,r,n,o){switch(e.type){case"title":return{...r,[e.type]:o,titleAttributes:{...n}};case"body":return{...r,bodyAttributes:{...n}};case"html":return{...r,htmlAttributes:{...n}};default:return{...r,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,r){let n={...r};return Object.keys(e).forEach(o=>{n={...n,[o]:e[o]}}),n}warnOnInvalidChildren(e,r){return be(ye.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ye.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),be(!r||typeof r=="string"||Array.isArray(r)&&!r.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,r){let n={};return i.Children.forEach(e,o=>{if(!o||!o.props)return;const{children:a,...l}=o.props,m=Object.keys(l).reduce((d,p)=>(d[Pt[p]||p]=l[p],d),{});let{type:c}=o;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(o,a),c){case"Symbol(react.fragment)":r=this.mapChildrenToProps(a,r);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(o,n,m,a);break;default:r=this.mapObjectTypeChildren(o,r,m,a);break}}),this.mapArrayTypeChildrenToProps(n,r)}render(){const{children:e,...r}=this.props;let n={...r},{helmetData:o}=r;if(e&&(n=this.mapChildrenToProps(e,n)),o&&!(o instanceof de)){const a=o;o=new de(a.context,!0),delete n.helmetData}return o?i.createElement(ke,{...n,context:o.value}):i.createElement(Re.Consumer,null,a=>i.createElement(ke,{...n,context:a}))}},L(ae,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ae),pe={},je=Qe;pe.createRoot=je.createRoot,pe.hydrateRoot=je.hydrateRoot;const V={name:"light",colors:{primary:"#9E1C24",primaryDeep:"#6F0F16",primarySoft:"rgba(158, 28, 36, 0.65)",primaryHover:"rgba(158, 28, 36, 0.85)",gold:"#C9A227",secondary:"#4a6163",accent:"#f9a826",background:"#ffffff",surface:"#f5f5f5",text:"#333333",textLight:"#666666",error:"#d32f2f",success:"#388e3c",warning:"#f57c00",info:"#0288d1"},typography:{headingFont:"var(--font-heading)",bodyFont:"var(--font-body)",accentFont:"var(--font-accent)",learnfont:{H1:"Montserrat",H2:"Poppins Bold",bodydesc:"Inter Regular"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700}},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},borderRadius:{sm:"0.125rem",md:"0.25rem",lg:"0.5rem",xl:"1rem",full:"9999px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},transitions:{default:"0.3s ease",fast:"0.15s ease",slow:"0.5s ease"}};({...V.typography},{...V.spacing}),{...V.borderRadius},{...V.transitions};const Jt=h.createContext(),er=({children:e})=>{const[r]=h.useState(V);h.useEffect(()=>{document.body.style.backgroundColor=r.colors.background,document.body.style.color=r.colors.text},[]);const n={theme:r,isLightTheme:!0,isDarkTheme:!1};return t.jsx(Jt.Provider,{value:n,children:t.jsx(nt,{theme:r,children:e})})},tr=()=>{const[e,r]=h.useState(!1);h.useEffect(()=>{const o=()=>{window.scrollY>300?r(!0):r(!1)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsx(rr,{onClick:n,$isVisible:e,"aria-label":"Scroll to top",children:t.jsx(at,{size:20,strokeWidth:2})})},rr=s.button`
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

  @media (max-width: 1024px) {
    bottom: 1.75rem;
    right: 1.75rem;
  }

  @media (max-width: 768px) {
    bottom: 10rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }

  @media (max-width: 480px) {
    bottom: 9rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 320px) {
    bottom: 8rem;
    right: 0.5rem;
    width: 36px;
    height: 36px;
  }
`,nr=({children:e})=>t.jsxs(t.Fragment,{children:[e,t.jsx(tr,{})]}),Ee="https://hyacinthindustriesllc.com",ir="/og-image-v2.webp";function Le(e=""){return e?e.startsWith("http://")||e.startsWith("https://")?e:`${Ee}${e.startsWith("/")?e:`/${e}`}`:Ee}function or({title:e,description:r,canonicalPath:n,image:o=ir,type:a="website",noindex:l=!1,structuredData:m}){const c=Le(n),d=Le(o);return t.jsxs(Qt,{children:[t.jsx("title",{children:e}),t.jsx("meta",{name:"description",content:r}),t.jsx("meta",{name:"robots",content:l?"noindex, nofollow":"index, follow"}),t.jsx("link",{rel:"canonical",href:c}),t.jsx("meta",{property:"og:site_name",content:"Hyacinth Industries LLC"}),t.jsx("meta",{property:"og:type",content:a}),t.jsx("meta",{property:"og:title",content:e}),t.jsx("meta",{property:"og:description",content:r}),t.jsx("meta",{property:"og:url",content:c}),t.jsx("meta",{property:"og:image",content:d}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{name:"twitter:title",content:e}),t.jsx("meta",{name:"twitter:description",content:r}),t.jsx("meta",{name:"twitter:image",content:d}),m?t.jsx("script",{type:"application/ld+json",children:JSON.stringify(m)}):null]})}function ue(e){return st({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(e)}const ar="clamp(380px, 40vw, 520px)",sr="clamp(340px, 34vw, 480px)",f={bgPrimary:"#0B0F19",bgSecondary:"#0D1320",bgElevated:"#111827",accent:"#E11D48",accentHover:"#BE123C",textPrimary:"#F8FAFC",textSecondary:"#94A3B8",border:"rgba(255, 255, 255, 0.06)",glassBg:"rgba(11, 15, 25, 0.98)"},Be=({isOpen:e,setIsOpen:r})=>{const[n,o]=h.useState(!1),[a,l]=h.useState(()=>window.innerWidth<=1024),m=h.useRef(null);h.useEffect(()=>{const g=()=>l(window.innerWidth<=1024);return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[]),h.useEffect(()=>{o(!1)},[a,e]),h.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const c=()=>{a||(m.current&&clearTimeout(m.current),o(!0))},d=()=>{a||(m.current=setTimeout(()=>{o(!1)},220))},p=()=>{o(a?g=>!g:!0)},u={closed:{x:"100%",transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.06}}},x={closed:{x:24,opacity:0},open:{x:0,opacity:1}},v={closed:{x:"12%",opacity:0,transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.05}}},b={closed:{x:"-100%",opacity:0,transition:{type:"spring",stiffness:380,damping:32}},open:{x:0,opacity:1,transition:{type:"spring",stiffness:380,damping:32,staggerChildren:.05}}},k=[{to:"/logistics/",text:"Logistics"},{to:"/general-services/",text:"General Services"},{to:"/administrative-support/",text:"Administrative Support"},{to:"/healthcare/",text:"Healthcare"},{to:"/marketing/",text:"Marketing"},{to:"/web-design/",text:"Web Design"},{to:"/3d-animation/",text:"3D Animation"}],H=[{to:"/about/",text:"About Us"},{to:"/services/",text:"Services"},{to:"#",text:"Industries",hasSubmenu:!0},{to:"/contact/",text:"Contact Us"},{to:"/faq/",text:"FAQ"}];return t.jsx(lr,{children:t.jsx(xe,{children:e&&t.jsxs(t.Fragment,{children:[t.jsx(cr,{as:y.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>r(!1)}),t.jsxs(dr,{as:y.div,variants:u,initial:"closed",animate:"open",exit:"closed",children:[t.jsx(mr,{as:y.button,whileHover:{scale:1.05,rotate:90},whileTap:{scale:.95},onClick:()=>r(!1),"aria-label":"Close sidebar",children:t.jsx(lt,{size:24,weight:"light"})}),t.jsx(pr,{children:H.map((g,A)=>t.jsx(hr,{as:y.div,variants:x,onMouseEnter:()=>g.hasSubmenu&&c(),onMouseLeave:()=>g.hasSubmenu&&d(),children:g.hasSubmenu?t.jsxs(ur,{type:"button",onClick:p,"aria-expanded":n,"aria-controls":"industries-submenu",children:[t.jsx("span",{children:g.text}),t.jsx(fr,{$open:n,children:t.jsx(ct,{size:18,weight:"light"})})]}):t.jsx(se,{to:g.to,onClick:()=>r(!1),children:g.text})},A))}),t.jsxs(xr,{as:y.div,variants:x,children:[t.jsxs(gr,{children:[t.jsx(br,{children:"Get in Touch"}),t.jsx(yr,{})]}),t.jsxs(wr,{children:[t.jsxs(Te,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(Ae,{children:t.jsx(dt,{size:18,weight:"light"})}),t.jsx(Ce,{children:"info@hyacinthindustriesllc.com"})]}),t.jsxs(Te,{href:"tel:+18132133276",children:[t.jsx(Ae,{children:t.jsx(mt,{size:18,weight:"light"})}),t.jsx(Ce,{children:"+1 (813) 213-3276"})]})]}),t.jsxs(vr,{children:[t.jsx(Z,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(pt,{size:20,weight:"light"})}),t.jsx(Z,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(ht,{size:20,weight:"light"})}),t.jsx(Z,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(ut,{size:20,weight:"light"})}),t.jsx(Z,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X / Twitter",children:t.jsx(ue,{size:18})})]})]}),t.jsx(xe,{mode:"wait",children:n&&t.jsxs(kr,{id:"industries-submenu",as:y.div,variants:a?b:v,initial:"closed",animate:"open",exit:"closed",onMouseEnter:c,onMouseLeave:d,children:[t.jsxs(jr,{children:[a&&t.jsxs(Lr,{type:"button",onClick:()=>o(!1),as:y.button,whileTap:{scale:.96},children:[t.jsx(ft,{size:18,weight:"light"}),t.jsx("span",{children:"Back"})]}),!a&&t.jsx(Er,{children:"Industries"})]}),t.jsx(Tr,{children:k.map((g,A)=>t.jsx(Ar,{as:y.div,variants:x,onClick:()=>{o(!1),r(!1)},children:t.jsx(se,{to:g.to,children:g.text})},A))})]})})]})]})})})},lr=s.div`
  position: relative;
  z-index: 1100;
`,cr=s.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`,dr=s(y.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${ar};
  height: 100dvh;
  background: ${f.glassBg};
  border-left: 1px solid ${f.border};
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
`,mr=s.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${f.border};
  color: ${f.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${f.textPrimary};
    border-color: rgba(255, 255, 255, 0.12);
  }

  svg {
    display: block;
  }
`,pr=s.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`,hr=s.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${f.accent}, ${f.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${f.textSecondary};
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
      color: ${f.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`,ur=s.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: ${f.textSecondary};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;

  &:hover {
    color: ${f.textPrimary};
    background: rgba(255, 255, 255, 0.03);
    padding-left: 1.25rem;
  }
`,fr=s.span`
  display: flex;
  align-items: center;
  color: ${f.textSecondary};
  transform: ${({$open:e})=>e?"rotate(90deg)":"rotate(0deg)"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`,xr=s.div`
  margin-top: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,br=s.h4`
  margin: 0;
  color: ${f.textPrimary};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,yr=s.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${f.border}, transparent);
`,wr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Te=s.a`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${f.textSecondary};
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;

  &:hover {
    color: ${f.textPrimary};
    transform: translateX(4px);
  }

  &:hover svg {
    color: ${f.accent};
  }
`,Ae=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(225, 29, 72, 0.1);
  color: ${f.accent};
  flex-shrink: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`,Ce=s.span`
  font-weight: 400;
  letter-spacing: 0.01em;
`,vr=s.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`,Z=s.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${f.border};
  color: ${f.textSecondary};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${f.accent};
    border-color: ${f.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
  }

  svg {
    display: block;
  }
`,kr=s(y.div)`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
  width: ${sr};
  height: 100dvh;
  background: ${f.glassBg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 16px 0 0 16px;
  border: 1px solid ${f.border};
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
    background: ${f.bgPrimary};

    &::before {
      border-radius: 0;
    }
  }
`,jr=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${f.border};
`,Er=s.h2`
  color: ${f.textPrimary};
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0;
  flex: 1;
`,Lr=s.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: ${f.textSecondary};
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
    color: ${f.textPrimary};
  }

  svg {
    display: block;
  }
`,Tr=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ar=s.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${f.accent}, ${f.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${f.textSecondary};
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
      color: ${f.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`;function Cr(){const[e,r]=h.useState(!1),[n,o]=h.useState(!1),[a,l]=h.useState(!1),c=Je().pathname;h.useEffect(()=>{const u=()=>o(window.innerWidth<=1024);return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const d=[{to:"/logistics/",text:"Logistics"},{to:"/general-services/",text:"General Services"},{to:"/administrative-support/",text:"Administrative Support"},{to:"/healthcare/",text:"Healthcare"},{to:"/marketing/",text:"Marketing"},{to:"/web-design/",text:"Web Design"},{to:"/3d-animation/",text:"3D Animation"}],p=d.some(u=>c===u.to);return t.jsxs(Sr,{children:[!n&&t.jsxs(Hr,{children:[t.jsxs(Mr,{children:[t.jsxs(ze,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(xt,{size:15,strokeWidth:1.5}),"info@hyacinthindustriesllc.com"]}),t.jsxs(ze,{href:"tel:+18132133276",children:[t.jsx(gt,{size:15,strokeWidth:1.5}),"+1 (813) 213-3276"]})]}),t.jsxs(Fr,{children:[t.jsx(q,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(bt,{size:18,strokeWidth:1.5})}),t.jsx(q,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(yt,{size:18,strokeWidth:1.5})}),t.jsx(q,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(wt,{size:18,strokeWidth:1.5})}),t.jsx(q,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X (Twitter)",children:t.jsx(ue,{size:18})})]})]}),t.jsxs(Or,{children:[t.jsx(_r,{children:t.jsx(se,{to:"/",children:t.jsxs(Ir,{children:[t.jsx($r,{src:"/petals.webp",alt:"Petals Logo"}),t.jsx(Pr,{src:"/name.webp",alt:"Hyacinth Industries"})]})})}),!n&&t.jsxs(Wr,{children:[t.jsx(B,{children:t.jsx(U,{to:"/about/",children:"About Us"})}),t.jsx(B,{children:t.jsx(U,{to:"/services/",children:"Services"})}),t.jsxs(Rr,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[t.jsxs(Br,{$isActive:p,$isOpen:a,children:["Industries",t.jsx(Vr,{size:16,$isOpen:a})]}),t.jsx(Nr,{$isOpen:a,children:d.map(u=>t.jsx(Yr,{children:t.jsx(Zr,{to:u.to,children:u.text})},u.to))})]}),t.jsx(B,{children:t.jsx(U,{to:"/contact/",children:"Contact Us"})}),t.jsx(B,{children:t.jsx(U,{to:"/faq/",children:"FAQ"})})]}),n&&t.jsx(Dr,{onClick:()=>r(!e),"aria-label":"Toggle menu","aria-expanded":e,children:t.jsx(vt,{size:24,strokeWidth:2})})]}),n&&t.jsx(Be,{isOpen:e,setIsOpen:r})]})}const zr=it`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
`,Sr=s.nav`
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
`,Ir=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,$r=s.img`
  height: 38px;
  width: auto;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: rotate(12deg) scale(1.05);
  }
`,Pr=s.img`
  height: 28px;
  width: auto;
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1);

  &:hover {
    filter: brightness(1.1);
  }
`,Hr=s.div`
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
`,Or=s.div`
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
`,Mr=s.div`
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
`,Fr=s.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`,Dr=s.button`
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
`,Wr=s.ul`
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
`,B=s.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`,Rr=s(B)`
  position: relative;
  height: 100%;
`,U=s(He)`
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
`,Vr=s(kt)`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`,Br=s.div`
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
`,Nr=s.div`
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
  ${({$isOpen:e})=>e&&ot`
    animation: ${zr} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
`,Yr=s.div`
  padding: 0;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    background: rgba(220, 20, 60, 0.06);
  }
`,Zr=s(He)`
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
`,q=s.a`
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
`;var Ur=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),N=function(r,n,o){var a=o.get(r);return a?a(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function Se(e,r){if(e==null)return{};var n={},o=Object.keys(e),a,l;for(l=0;l<o.length;l++)a=o[l],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var D=h.forwardRef(function(e,r){var n=e.alt,o=e.color,a=e.size,l=e.weight,m=e.mirrored,c=e.children,d=e.renderPath,p=Se(e,["alt","color","size","weight","mirrored","children","renderPath"]),u=h.useContext(Ur),x=u.color,v=x===void 0?"currentColor":x,b=u.size,k=u.weight,H=k===void 0?"regular":k,g=u.mirrored,A=g===void 0?!1:g,J=Se(u,["color","size","weight","mirrored"]);return i.createElement("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a??b,height:a??b,fill:o??v,viewBox:"0 0 256 256",transform:m||A?"scale(-1, 1)":void 0},J,p),!!n&&i.createElement("title",null,n),c,i.createElement("rect",{width:"256",height:"256",fill:"none"}),d(l??H,o??v))});D.displayName="IconBase";var S=new Map;S.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});S.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});S.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z"}))});S.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});S.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});S.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qr=function(r,n){return N(r,n,S)},Ne=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:qr}))});Ne.displayName="EnvelopeSimple";var _=new Map;_.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z"}))});_.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M168,88H152a23.9,23.9,0,0,0-24,24V224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"96",y1:"144",x2:"160",y2:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Xr=function(r,n){return N(r,n,_)},Ye=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Xr}))});Ye.displayName="FacebookLogo";var I=new Map;I.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"34",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("rect",{x:"32",y:"32",width:"192",height:"192",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("circle",{cx:"180",cy:"76",r:"16"}))});I.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"180",cy:"76",r:"12"}))});I.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"32"}),i.createElement("path",{d:"M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"}))});I.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("circle",{cx:"180",cy:"76",r:"10"}))});I.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("circle",{cx:"180",cy:"76",r:"8"}))});I.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"180",cy:"76",r:"12"}))});var Gr=function(r,n){return N(r,n,I)},Ze=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Gr}))});Ze.displayName="InstagramLogo";var $=new Map;$.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"124",y1:"120",x2:"124",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("line",{x1:"84",y1:"120",x2:"84",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("path",{d:"M124,148a28,28,0,0,1,56,0v28",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),i.createElement("circle",{cx:"84",cy:"80",r:"16"}))});$.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",opacity:"0.2"}),i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"88",cy:"80",r:"12"}))});$.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M212,28H44A16,16,0,0,0,28,44V212a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16V44A16,16,0,0,0,212,28ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,92a12,12,0,1,1,12-12A12,12,0,0,1,88,92Zm96,84a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.8-1.8A36,36,0,0,1,184,140Z"}))});$.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),i.createElement("circle",{cx:"88",cy:"80",r:"10"}))});$.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),i.createElement("circle",{cx:"88",cy:"80",r:"8"}))});$.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("rect",{x:"36",y:"36",width:"184",height:"184",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"120",y1:"112",x2:"120",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("line",{x1:"88",y1:"112",x2:"88",y2:"176",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("path",{d:"M120,140a28,28,0,0,1,56,0v36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),i.createElement("circle",{cx:"88",cy:"80",r:"12"}))});var Kr=function(r,n){return N(r,n,$)},Ue=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Kr}))});Ue.displayName="LinkedinLogo";var P=new Map;P.set("bold",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});P.set("duotone",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",opacity:"0.2"}),i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});P.set("fill",function(){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M222,158.4l-46.9-20a15.6,15.6,0,0,0-15.1,1.3l-25.1,16.7a76.5,76.5,0,0,1-35.2-35h0L116.3,96a15.9,15.9,0,0,0,1.4-15.1L97.6,34a16.3,16.3,0,0,0-16.7-9.6A56.2,56.2,0,0,0,32,80c0,79.4,64.6,144,144,144a56.2,56.2,0,0,0,55.6-48.9A16.3,16.3,0,0,0,222,158.4Z"}))});P.set("light",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});P.set("thin",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});P.set("regular",function(e){return i.createElement(i.Fragment,null,i.createElement("path",{d:"M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Qr=function(r,n){return N(r,n,P)},qe=h.forwardRef(function(e,r){return i.createElement(D,Object.assign({ref:r},e,{renderPath:Qr}))});qe.displayName="Phone";const Xe="/assets/Logo-D1zaocPJ.webp",Jr=()=>{const e=new Date().getFullYear();return t.jsx(en,{children:t.jsxs(tn,{children:[t.jsxs(rn,{children:[t.jsxs(nn,{children:[t.jsxs(on,{href:"/",children:[t.jsx(an,{src:Xe,alt:"Hyacinth Industries logo",loading:"lazy",decoding:"async"}),t.jsxs(sn,{children:[t.jsx(ln,{children:"Hyacinth Industries"}),t.jsx(cn,{children:"Fractional Executive Consulting"})]})]}),t.jsx(dn,{children:"Strategic consulting for leaders and organizations building stronger brands, better deals, and sharper execution."})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Quick Links"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsx(C,{href:"/",children:"Home"})}),t.jsx(T,{children:t.jsx(C,{href:"/about/",children:"About"})}),t.jsx(T,{children:t.jsx(C,{href:"/services/",children:"Services"})}),t.jsx(T,{children:t.jsx(C,{href:"/contact/",children:"Contact"})}),t.jsx(T,{children:t.jsx(C,{href:"/faq/",children:"FAQ"})})]})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Contact"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsxs(_e,{href:"mailto:info@hyacinthindustriesllc.com",children:[t.jsx(Ne,{size:20,weight:"regular"}),"info@hyacinthindustriesllc.com"]})}),t.jsx(T,{children:t.jsxs(_e,{href:"tel:+18132133276",children:[t.jsx(qe,{size:20,weight:"regular"}),"+1 (813) 213-3276"]})})]}),t.jsxs(mn,{children:[t.jsx(X,{href:"https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:t.jsx(Ye,{size:20,weight:"regular"})}),t.jsx(X,{href:"https://www.instagram.com/hyacinthindustriesllc/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:t.jsx(Ze,{size:20,weight:"regular"})}),t.jsx(X,{href:"https://www.linkedin.com/company/hyacinth-industries-llc/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:t.jsx(Ue,{size:20,weight:"regular"})}),t.jsx(X,{href:"https://x.com/HyacinthILLC",target:"_blank",rel:"noopener noreferrer","aria-label":"X",children:t.jsx(ue,{size:18})})]})]}),t.jsxs(ne,{children:[t.jsx(ie,{children:"Support"}),t.jsxs(oe,{children:[t.jsx(T,{children:t.jsx(C,{href:"/#home-faq-heading",children:"Common Questions"})}),t.jsx(T,{children:t.jsx(C,{href:"/contact/",children:"Get Support"})})]})]})]}),t.jsxs(pn,{children:[t.jsxs(hn,{children:["© ",e," Hyacinth Industries, LLC. All rights reserved."]}),t.jsx(un,{children:t.jsx(fn,{href:"/privacy-policy/",children:"Privacy Policy"})})]})]})})},en=s.footer`
  position: relative;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.9);
  background:
    radial-gradient(1000px 520px at 92% 0%, rgba(158, 28, 36, 0.15), transparent 55%),
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
`,tn=s.div`
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
`,rn=s.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr) minmax(0, 1.4fr) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (min-width: 1440px) {
    gap: 4rem;
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
`,nn=s.div`
  max-width: 420px;

  @media (max-width: 680px) {
    max-width: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,on=s.a`
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
`,an=s.img`
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
`,sn=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (max-width: 680px) {
    align-items: center;
  }
`,ln=s.span`
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
`,cn=s.span`
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
`,dn=s.p`
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
    outline: 2px solid rgba(158, 28, 36, 0.8);
    outline-offset: 4px;
    border-radius: 6px;
  }
`,_e=s(C)`
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
`,mn=s.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.72rem;
  margin-top: 1rem;

  @media (max-width: 680px) {
    justify-content: center;
  }
`,X=s.a`
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
    border-color: rgba(158, 28, 36, 0.5);
    background: rgba(158, 28, 36, 0.15);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid rgba(158, 28, 36, 0.85);
    outline-offset: 3px;
  }
`,pn=s.div`
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
`,hn=s.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: rgba(255, 255, 255, 0.72);

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`,un=s.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,fn=s.a`
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
`,xn="/assets/bg2-DZdCbQqZ.webp",fe={smooth:[.22,1,.36,1],snappy:[.16,1,.3,1]},gn={hidden:{},show:{transition:{staggerChildren:.12,delayChildren:.15}}},G={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.6,ease:fe.smooth}}},bn={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:.75,ease:fe.snappy}}},yn=h.memo(()=>t.jsxs(wn,{children:[t.jsx(vn,{}),t.jsx(kn,{}),t.jsxs(jn,{children:[t.jsxs(En,{as:y.div,variants:gn,initial:"hidden",animate:"show",children:[t.jsxs(Tn,{as:y.p,variants:G,children:[t.jsx(An,{})," Fractional Executive Support"]}),t.jsxs(Cn,{as:y.h1,variants:bn,children:["Close bigger deals",t.jsx("br",{}),t.jsx(zn,{children:"Build stronger brands"}),t.jsx("br",{}),"Execute faster"]}),t.jsx(Sn,{as:y.p,variants:G,children:"Senior-level execution support for high-growth teams without the cost or drag of a full-time hire."}),t.jsx(_n,{as:y.p,variants:G,children:"Embedded in your operations. Focused on results across brand, deals, and product."}),t.jsxs(In,{as:y.div,variants:G,children:[t.jsxs($n,{as:y.a,whileHover:{y:-2,scale:1.02},whileTap:{scale:.98},href:"/contact/",children:["BOOK A STRATEGY CALL",t.jsx(jt,{size:18})]}),t.jsxs(Pn,{children:[t.jsx(Hn,{children:"30 min • No commitment"}),t.jsx(On,{children:"See if we're a fit"})]})]})]}),t.jsx(Ln,{children:t.jsx(Mn,{children:t.jsxs(Fn,{as:y.div,initial:{opacity:0,scale:.88},animate:{opacity:1,scale:1},transition:{duration:.85,delay:.4,ease:fe.snappy},children:[t.jsx(Dn,{}),t.jsx(Wn,{src:Xe,alt:"Hyacinth Industries logo",as:y.img,whileHover:{scale:1.08},transition:{duration:.35,ease:"easeOut"}})]})})})]}),t.jsxs(Rn,{as:y.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2,duration:.5},children:[t.jsx(Vn,{children:"Scroll to explore"}),t.jsx(Bn,{})]})]})),wn=s.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 7rem 2rem 5rem;
  background: #0a0a0f;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 5.5rem 1.25rem 4rem;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 5rem 1rem 3.5rem;
  }
`,vn=s.div`
  position: absolute;
  inset: 0;
  background-image: url(${xn});
  background-size: cover;
  background-position: center;
  transform: scale(1.01);
`,kn=s.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(3, 7, 18, 0.85) 0%,
    rgba(3, 7, 18, 0.7) 40%,
    rgba(3, 7, 18, 0.4) 70%,
    rgba(3, 7, 18, 0.2) 100%
  );

  @media (max-width: 980px) {
    background: linear-gradient(
      180deg,
      rgba(3, 7, 18, 0.85) 0%,
      rgba(3, 7, 18, 0.6) 50%,
      rgba(3, 7, 18, 0.75) 100%
    );
  }
`,jn=s.div`
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
`,En=s.div`
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
`,Ln=s.div`
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
`,Tn=s.p`
  margin: 0 0 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem 0.4rem 0.5rem;
  background: rgba(201, 162, 39, 0.1);
  border: 1px solid rgba(201, 162, 39, 0.2);
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  font-weight: 600;
  color: #C9A227;
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 0.7rem;
    margin-bottom: 1.25rem;
  }
`,An=s.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C9A227;
`,Cn=s.h1`
  margin: 0;
  font-size: clamp(2.25rem, 4vw, 3.75rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #fafaf9;

  @media (max-width: 980px) {
    font-size: clamp(2rem, 5.5vw, 3rem);
    line-height: 1.1;
  }

  @media (max-width: 640px) {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    line-height: 1.12;
  }

  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`,zn=s.span`
  background: linear-gradient(135deg, #C9A227 0%, #e8d58a 50%, #C9A227 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Sn=s.p`
  margin: 1.25rem 0 0;
  max-width: 780px;
  font-size: clamp(1rem, 1.2vw, 1.35rem);
  line-height: 1.5;
  color: #cbd5e1;
  font-weight: 400;

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
`,_n=s.p`
  margin: 1.25rem 0 0;
  padding-left: 1rem;
  border-left: 2px solid #9E1C24;
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
`,In=s.div`
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
`,$n=s.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 52px;
  padding: 0 1.5rem;
  border-radius: 12px;
  background: #9E1C24;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);

  &:hover {
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 48px;
    font-size: 0.875rem;
    order: 1;
  }
`,Pn=s.div`
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
`,Hn=s.p`
  margin: 0;
  color: #f1f5f9;
  font-weight: 700;
  font-size: 1rem;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`,On=s.p`
  margin: 0.2rem 0 0;
  color: #cbd5e1;
  font-size: 0.95rem;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
`,Mn=s.div`
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
`,Fn=s.div`
  position: relative;
  width: min(400px, 100%);
  aspect-ratio: 1.4 / 1;
  border-radius: 12px;
  display: grid;
  place-items: center;

  @media (max-width: 980px) {
    width: min(260px, 50%);
    aspect-ratio: 1.5 / 1;
  }

  @media (max-width: 640px) {
    width: 180px;
    aspect-ratio: auto;
    height: auto;
    border-radius: 0;
    position: relative;
    margin: 0 auto;
  }

  @media (max-width: 380px) {
    width: 140px;
  }
`,Dn=s.div`
  position: absolute;
  inset: 10% 8%;
  border-radius: 12px;
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
`,Wn=s.img`
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
`,Rn=s.div`
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
`,Vn=s.span`
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
`,Bn=s.div`
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
`,Nn=h.lazy(()=>w(()=>import("./HomeFeatureContent-BHfLfZVw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Yn=h.lazy(()=>w(()=>import("./HomeBusinessActions-DDETplzp.js"),__vite__mapDeps([8,1,2,3,4,9,10]))),Zn=h.lazy(()=>w(()=>import("./HomeIndustriesExpertise-CM5vxyUu.js"),__vite__mapDeps([11,1,2,3,9,5,12,7,13,6,14,4])));h.lazy(()=>w(()=>import("./HomeReforestationFeature-C99On8WB.js"),__vite__mapDeps([15,1,2,3])));h.lazy(()=>w(()=>import("./HomeTestimonials-clI__lZZ.js"),__vite__mapDeps([16,1,2,3,17])));function Un(){return h.useEffect(()=>{window.scrollTo(0,0)},[]),t.jsxs(qn,{id:"home",children:[t.jsx(or,{title:"Hyacinth Industries LLC | Fractional Executive Consulting for Brand, Deals & Product",description:"Hyacinth Industries provides senior-level fractional executives to help companies strengthen brands, close bigger deals, and improve products without full-time hires.",canonicalPath:"/"}),t.jsx(Cr,{}),t.jsx(Be,{}),t.jsx(yn,{}),t.jsxs(h.Suspense,{fallback:null,children:[t.jsx(Zn,{}),t.jsx(Yn,{}),t.jsx(Nn,{})]}),t.jsx(Jr,{})]})}const qn=s.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,Xn=h.lazy(()=>w(()=>import("./About-CXS2Jelu.js"),__vite__mapDeps([18,1,2,3,5,7,13,6,19,4]))),Gn=h.lazy(()=>w(()=>import("./Industries-DqwyoQZg.js"),__vite__mapDeps([20,1,2,3,11,9,5,12,7,13,6,14,4,17]))),Kn=h.lazy(()=>w(()=>import("./Contact-BhdB9K9m.js"),__vite__mapDeps([21,1,2,3,4]))),Qn=h.lazy(()=>w(()=>import("./Services-BiqWAmpU.js"),__vite__mapDeps([22,1,2,3,19,4]))),Ie=h.lazy(()=>w(()=>import("./FAQ-kyvSz8xL.js"),__vite__mapDeps([23,1,2,3,19,4]))),Jn=h.lazy(()=>w(()=>import("./Reforestation-DNDNyEQr.js"),__vite__mapDeps([24,1,2,3,4]))),$e=h.lazy(()=>w(()=>import("./PrivacyPolicy-BRBFpR8k.js"),__vite__mapDeps([25,1,2,3,4]))),ei=h.lazy(()=>w(()=>import("./GeneralServices-B8YkwVaI.js"),__vite__mapDeps([26,1,2,3,5,4]))),ti=h.lazy(()=>w(()=>import("./AdministrativeSupport-C8y1R9OT.js"),__vite__mapDeps([27,1,2,3,5,4]))),ri=h.lazy(()=>w(()=>import("./Healthcare-DCqMP_qa.js"),__vite__mapDeps([28,1,2,3,29,7,10,4]))),ni=h.lazy(()=>w(()=>import("./Marketing-JiWVeEkR.js"),__vite__mapDeps([30,1,2,3,12,4]))),ii=h.lazy(()=>w(()=>import("./WebDesign-2dLFfOyP.js"),__vite__mapDeps([31,1,2,3,6,4]))),oi=h.lazy(()=>w(()=>import("./3DAnimation-BQkqrGaB.js"),__vite__mapDeps([32,1,2,3,13,4]))),ai=h.lazy(()=>w(()=>import("./Logistics-CrqC023F.js"),__vite__mapDeps([33,1,2,3,14,4]))),si=t.jsx("div",{style:{minHeight:"40vh",display:"grid",placeItems:"center"},children:"Loading..."}),li=et([{path:"/",element:t.jsx(Un,{})},{path:"/about/",element:t.jsx(Xn,{})},{path:"/industries/",element:t.jsx(Gn,{})},{path:"/contact/",element:t.jsx(Kn,{})},{path:"/services/",element:t.jsx(Qn,{})},{path:"/faq/",element:t.jsx(Ie,{})},{path:"/faq",element:t.jsx(Ie,{})},{path:"/reforestation/",element:t.jsx(Jn,{})},{path:"/general-services/",element:t.jsx(ei,{})},{path:"/administrative-support/",element:t.jsx(ti,{})},{path:"/healthcare/",element:t.jsx(ri,{})},{path:"/marketing/",element:t.jsx(ni,{})},{path:"/web-design/",element:t.jsx(ii,{})},{path:"/3d-animation/",element:t.jsx(oi,{})},{path:"/logistics/",element:t.jsx(ai,{})},{path:"/privacy-policy/",element:t.jsx($e,{})},{path:"/privacy-policy",element:t.jsx($e,{})}]);pe.createRoot(document.getElementById("root")).render(t.jsx(Ve,{children:t.jsx(i.StrictMode,{children:t.jsx(er,{children:t.jsx(nr,{children:t.jsx(h.Suspense,{fallback:si,children:t.jsx(tt,{router:li})})})})})}));export{xn as B,Jr as F,Xe as H,D as I,or as S,Cr as T,w as _,Be as a,N as r};
