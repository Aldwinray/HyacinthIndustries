import{m as o,j as t,A as z}from"./motion-jLvT6sLY.js";import{R as n,r as a,u as O}from"./vendor-DPKrZd5H.js";import{d as i,m as R}from"./styled-3-8BfJdI.js";import{B as V}from"./bg1-B7rUjgNq.js";import{b as d}from"./office-Bip-LbGP.js";import{m as A}from"./marketing-UVJaPu9h.js";import{H as E}from"./healthcare-C4VecUyJ.js";import{a as I}from"./animation-DZXJdELE.js";import{w as W}from"./coding-DYEnY3xo.js";import{b as p}from"./logistics-BkZb81Yi.js";import{ab as F,ac as X,aj as U,ad as Z,P as q,ae as G,af as Y,ak as K,ah as J,al as M,am as Q,an as _,ao as ee,ap as te,aq as ie,ar as C,as as D,at as ne,au as oe,av as re,aw as ae,ax as se,V as de,ay as le,az as N,aA as ce,aB as pe,q as ge,C as me}from"./icons-D9O8TY1s.js";import{I as he,r as ue}from"./index-D8YeovzI.js";var x=new Map;x.set("bold",function(e){return n.createElement(n.Fragment,null,n.createElement("polygon",{points:"156 120 116 92 116 148 156 120",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n.createElement("line",{x1:"160",y1:"228",x2:"96",y2:"228",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});x.set("duotone",function(e){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M208,48H48A16,16,0,0,0,32,64V176a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48ZM112,152V88l48,32Z",opacity:"0.2"}),n.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});x.set("fill",function(){return n.createElement(n.Fragment,null,n.createElement("path",{d:"M168,224a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224ZM232,64V176a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V64A24.1,24.1,0,0,1,48,40H208A24.1,24.1,0,0,1,232,64Zm-68,56a7.9,7.9,0,0,0-3.7-6.7l-44-28a7.9,7.9,0,0,0-8.1-.3,8,8,0,0,0-4.2,7v56a8,8,0,0,0,4.2,7,7.7,7.7,0,0,0,8.1-.3l44-28A7.9,7.9,0,0,0,164,120Z"}))});x.set("light",function(e){return n.createElement(n.Fragment,null,n.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});x.set("thin",function(e){return n.createElement(n.Fragment,null,n.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});x.set("regular",function(e){return n.createElement(n.Fragment,null,n.createElement("rect",{x:"32",y:"48",width:"192",height:"144",rx:"16",transform:"translate(256 240) rotate(180)",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("line",{x1:"160",y1:"224",x2:"96",y2:"224",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n.createElement("polygon",{points:"160 120 112 88 112 152 160 120",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xe=function(l,h){return ue(l,h,x)},P=a.forwardRef(function(e,l){return n.createElement(he,Object.assign({ref:l},e,{renderPath:xe}))});P.displayName="MonitorPlay";const fe=({image:e,title:l,description:h,link:c,icon:u})=>{const S=O(),[$,b]=a.useState(!1),[f,j]=a.useState(()=>window.innerWidth<=768),[g,k]=a.useState(!1),y=m=>/^https?:\/\//i.test(m),s=f?g:$;a.useEffect(()=>{const m=()=>{j(window.innerWidth<=768)};return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const v=()=>{if(c){if(y(c)){window.location.assign(c);return}S(c)}},L=()=>{if(f){if(!g){k(!0);return}v();return}v()};return t.jsxs(we,{as:o.article,onHoverStart:()=>!f&&b(!0),onHoverEnd:()=>!f&&b(!1),onClick:L,initial:!1,animate:{y:s?-4:0},transition:{duration:.24,ease:[.23,1,.32,1]},$clickable:!!c||f,children:[t.jsx(ke,{as:o.div,image:e,animate:{opacity:s?1:0,scale:s?1.03:1},transition:{duration:.38,ease:[.23,1,.32,1]}}),t.jsxs(be,{as:o.div,initial:!1,animate:{backgroundColor:s?"rgba(17, 17, 19, 0.18)":"rgba(255, 255, 255, 0.97)",borderColor:s?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)"},transition:{duration:.28},children:[u&&t.jsx(ye,{as:o.div,animate:{y:s?-2:0,scale:s?.98:1},transition:{duration:.22},children:t.jsx(u,{size:22})}),t.jsxs(ve,{children:[t.jsxs(Ee,{as:o.div,animate:{y:s?-2:0},transition:{duration:.22},children:[t.jsx(je,{as:o.h3,animate:{color:s?"#ffffff":"#23252b"},transition:{duration:.22},children:l}),t.jsx(We,{as:o.p,animate:{color:s?"rgba(255,255,255,0.88)":"#666666"},transition:{duration:.22},children:h})]}),t.jsx(Se,{children:t.jsx(z,{mode:"wait",children:s?t.jsx(Le,{as:o.button,type:"button",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:6},transition:{duration:.22},onClick:m=>{m.stopPropagation(),v()},children:"Learn More"},"cta"):t.jsx(Ce,{},"spacer")})})]})]})]})},we=i.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 18px;
  overflow: visible;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  &:active {
    transform: scale(0.985);
  }
`,be=i(o.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px 18px 16px;
  padding-top: 34px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    border-radius: 16px;
    padding: 18px 16px 14px;
    padding-top: 32px;
  }
`,ke=i(o.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.24) 0%,
      rgba(0, 0, 0, 0.4) 46%,
      rgba(0, 0, 0, 0.7) 100%
    );
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    border-radius: 16px;

    &::after {
      border-radius: 16px;
    }
  }
`,ye=i(o.div)`
  position: absolute;
  top: -26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #f3de58;
  border: 3px solid rgba(255, 255, 255, 0.96);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.14),
    0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 10;

  svg {
    width: 22px;
    height: 22px;
    color: #ff0033;
    stroke-width: 2px;
    display: block;
  }

  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
    top: -22px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,ve=i.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  text-align: center;
`,Ee=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 1rem 0.9rem 0.5rem;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 0.95rem 0.65rem 0.4rem;
  }
`,je=i.h3`
  font-family: ${({theme:e})=>e.typography.headingFont};
  font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
  font-size: 1.1rem;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin: 0 0 0.7rem;
  color: inherit;
  text-align: center;
  min-height: calc(1.28em * 2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.55rem;
  }
`,We=i.p`
  font-family: ${({theme:e})=>e.typography.bodyFont};
  font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
  color: inherit;
  text-align: center;
  min-height: calc(1.55em * 4);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 0.84rem;
  }
`,Se=i.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 56px;
  padding-top: 0.35rem;
`,Le=i.div`
  min-width: max-content;
  font-family: ${({theme:e})=>e.typography.learnfont};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  color: #ffffff;
  padding: 0.72rem 1.1rem;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background-color: ${({theme:e})=>e.colors.primary};
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryDeep};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 0.82rem;
    padding: 0.62rem 0.95rem;
  }
`,Ce=i.div`
  height: 42px;
`,T={Logistics:[{image:p,icon:F,iconWeight:"duotone",title:"Data Entry",description:"Meticulous accuracy and efficiency at every step",tag:"Explore Now",link:"/logistics"},{image:p,icon:X,iconWeight:"duotone",title:"Track and Trace",description:"Real-time visibility for all your shipments",tag:"Explore Now",link:"/logistics"},{image:p,icon:U,iconWeight:"duotone",title:"Carrier Sales",description:"Effective sales strategies to increase your carrier's revenue",tag:"Explore Now",link:"/logistics"},{image:p,icon:Z,iconWeight:"duotone",title:"Load Planning",description:"Planning and optimization of loads for efficient transportation",tag:"Explore Now",link:"/logistics"},{image:p,icon:q,iconWeight:"duotone",title:"Customer Support",description:"Prompt, professional issue resolution for enhanced satisfaction",tag:"Explore Now",link:"/logistics"},{image:p,icon:G,iconWeight:"duotone",title:"Afterhours Support",description:"Support during non-work hours, including evenings and weekends",tag:"Explore Now",link:"/logistics"},{image:p,icon:Y,iconWeight:"duotone",title:"Logistics Coordinator",description:"Seamless orchestration from origin to destination",tag:"Explore Now",link:"/logistics"},{image:p,icon:K,iconWeight:"duotone",title:"Data Analyst",description:"Analysis of data for insights, trends, and decisions",tag:"Explore Now",link:"/logistics"},{image:p,icon:J,iconWeight:"duotone",title:"Account Management",description:"Dedicated expertise for tailored solutions",tag:"Explore Now",link:"/logistics"}],"Administrative Support":[{image:d,icon:M,iconWeight:"duotone",title:"Data Management",description:"Data Entry, Data Processing, and Database Management",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:Q,iconWeight:"duotone",title:"Communication Support",description:"Email Management, Call Handling, and Customer Support",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:_,iconWeight:"duotone",title:"Scheduling and Coordination",description:"Calendar Management, Meeting Arrangements, and Task Coordination",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:ee,iconWeight:"duotone",title:"Documentations and Reporting",description:"Document Preparation, Record Keeping, and Transcription",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:te,iconWeight:"duotone",title:"Accounting Support",description:"Invoicing, Expense Tracking, and Payroll Support",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:ie,iconWeight:"duotone",title:"Human Resource Assistance",description:"Recruitment Support, Employee Records Management",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:C,iconWeight:"duotone",title:"Project and Task Management",description:"Task Delegation, Project Coordination, Workflow Optimization",tag:"Explore Now",link:"/administrative-support"},{image:d,icon:D,iconWeight:"duotone",title:"Research and Analysis",description:"Market Research, Administrative Audits, and Data Analysis",tag:"Explore Now",link:"/administrative-support"}],"Medical Outsourcing":[{image:E,icon:ne,iconWeight:"duotone",title:"Medical Billing",description:"Comprehensive medical billing services and claims processing",tag:"Explore Now",link:"/healthcare"},{image:E,icon:oe,iconWeight:"duotone",title:"Healthcare Administration",description:"Administrative support for healthcare facilities",tag:"Explore Now",link:"/healthcare"},{image:E,icon:re,iconWeight:"duotone",title:"Medical Records Management",description:"Electronic health records management and organization",tag:"Explore Now",link:"/healthcare"},{image:E,icon:ae,iconWeight:"duotone",title:"Clinical Documentation",description:"Accurate documentation of clinical procedures and findings",tag:"Explore Now",link:"/healthcare"},{image:E,icon:se,iconWeight:"duotone",title:"Medical Research Support",description:"Assistance with medical research and data analysis",tag:"Explore Now",link:"/healthcare"}],Marketing:[{image:A,icon:P,iconWeight:"duotone",title:"Multimedia",description:"Creating visual content through video editing and graphic design.",tag:"Explore Now",link:"/marketing"},{image:A,icon:de,iconWeight:"duotone",title:"Social Media Management",description:"Handling a brand's presence across platforms like Instagram, Facebook, X, LinkedIn, and more.",tag:"Explore Now",link:"/marketing"}],"Web Design":[{image:W,icon:le,iconWeight:"duotone",title:"UI/UX Design",description:"UI/UX design for websites and mobile apps",tag:"Explore Now",link:"/web-design"},{image:W,icon:N,iconWeight:"duotone",title:"Custom Website Design",description:"Custom website design for businesses and organizations",tag:"Explore Now",link:"/web-design"},{image:W,icon:D,iconWeight:"duotone",title:"SEO Management",description:"Incorporate SEO strategies to improve website visibility",tag:"Explore Now",link:"/web-design"},{image:W,icon:C,iconWeight:"duotone",title:"Website Redesign",description:"Optimize existing and outdated websites for improved user experience",tag:"Explore Now",link:"/web-design"}],"3D Animation":[{image:I,icon:ce,iconWeight:"duotone",title:"Architectural Visualization",description:"Create 3D models and animations for architectural projects",tag:"Explore Now",link:"/3d-animation"},{image:I,icon:N,iconWeight:"duotone",title:"Product Animation",description:"Showcase your products in stunning 3D animations",tag:"Explore Now",link:"/3d-animation"}],"General Services":[{image:d,icon:M,iconWeight:"duotone",title:"Administrative Support",description:"Office management, document processing, data entry, etc.",tag:"Explore Now",link:"/general-services"},{image:d,icon:C,iconWeight:"duotone",title:"Business Process Support",description:"Process optimization, quality control, and workflow management",tag:"Explore Now",link:"/general-services"},{image:d,icon:pe,iconWeight:"duotone",title:"Technical Support",description:"IT infrastructure management, help desk services, etc.",tag:"Explore Now",link:"/general-services"}]},ze={open:{opacity:1,y:0,scale:1,transition:{duration:.3,ease:[.16,1,.3,1],staggerChildren:.05,delayChildren:.05}},closed:{opacity:0,y:-12,scale:.96,transition:{duration:.2,ease:[.16,1,.3,1]}}},$e={open:{opacity:1,x:0,transition:{duration:.25,ease:[.16,1,.3,1]}},closed:{opacity:0,x:-12,transition:{duration:.15}}},Ae={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.1}}},H=Object.keys(T),kt=()=>{const[e,l]=a.useState(H[0]),[h,c]=a.useState(!1),[u,S]=a.useState(()=>window.innerWidth<=768),[$,b]=a.useState(!1),[f,j]=a.useState(!0),g=a.useRef(null),k=a.useRef(null),y=()=>{if(!g.current)return;const{scrollLeft:r,scrollWidth:w,clientWidth:B}=g.current;b(r>0),j(r<w-B-10)};a.useEffect(()=>{const r=()=>{S(window.innerWidth<=768),y()};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),a.useEffect(()=>{const r=w=>{k.current&&!k.current.contains(w.target)&&c(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]),a.useEffect(()=>{g.current&&(g.current.scrollLeft=0,b(!1),j(!0),y())},[e,u]);const s=()=>c(r=>!r),v=()=>y(),L=u,m=!u;return t.jsxs(Me,{children:[t.jsx(De,{}),t.jsxs(Ne,{children:[t.jsxs(He,{children:[t.jsxs(Re,{as:o.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:[.16,1,.3,1]},children:[t.jsx(Pe,{children:t.jsx(ge,{size:14})}),t.jsx(Te,{children:"What We Do"})]}),t.jsx(Be,{as:o.h2,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.1,ease:[.16,1,.3,1]},children:"Industries & Expertise"}),t.jsx(Oe,{as:o.p,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.2,ease:[.16,1,.3,1]},children:"Discover our comprehensive range of services across various industries"}),t.jsxs(Ve,{ref:k,as:o.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.3,ease:[.16,1,.3,1]},children:[t.jsxs(Fe,{onClick:s,$isOpen:h,type:"button",children:[t.jsx(Xe,{children:e}),t.jsx(Ue,{$isOpen:h,children:t.jsx(me,{size:18,strokeWidth:2.5})})]}),t.jsx(z,{children:h&&t.jsxs(Ze,{variants:ze,initial:"closed",animate:"open",exit:"closed",children:[t.jsx(qe,{}),H.map(r=>t.jsxs(Ge,{variants:$e,$selected:e===r,onClick:()=>{l(r),c(!1)},children:[t.jsxs(Ye,{children:[e===r&&t.jsx(Ke,{children:t.jsx(Je,{})}),t.jsx(Qe,{$selected:e===r,children:r})]}),e===r&&t.jsx(o.CheckIcon,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.2},children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M3 8L6.5 11.5L13 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]},r))]})})]})]}),t.jsxs(_e,{children:[t.jsx(z,{mode:"wait",children:t.jsx(et,{variants:Ae,initial:"hidden",animate:"visible",children:t.jsx(tt,{$showScroll:L,$shouldCenter:m,ref:g,onScroll:v,children:T[e].map((r,w)=>t.jsx(it,{as:o.div,"data-card":"true",initial:{opacity:0,y:40,scale:.95},animate:{opacity:1,y:0,scale:1,transition:{duration:.5,delay:w*.1,ease:[.16,1,.3,1]}},exit:{opacity:0,y:-20,scale:.95,transition:{duration:.25,ease:[.16,1,.3,1]}},whileHover:{y:-8,transition:{duration:.3}},children:t.jsx(fe,{...r})},`${e}-${w}`))})},e)}),u&&t.jsxs(ot,{as:o.div,initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:[t.jsx(rt,{children:t.jsx(at,{})}),t.jsx(st,{children:"Swipe to explore"})]})]})]})]})},Ie=R`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
`,Me=i.section`
  width: 100%;
  position: relative;
  padding: 6rem 0 7rem;
  overflow: hidden;
  background-image: url(${V});
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  content-visibility: auto;
  contain-intrinsic-size: 900px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 13, 42, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 50% 120%, rgba(139, 13, 42, 0.05) 0%, transparent 50%),
      linear-gradient(
        180deg,
        rgba(250, 249, 247, 0.96) 0%,
        rgba(245, 243, 240, 0.98) 30%,
        rgba(248, 246, 243, 0.95) 60%,
        rgba(252, 250, 248, 0.96) 100%
      );
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(139, 13, 42, 0.15) 20%, 
      rgba(139, 13, 42, 0.15) 80%, 
      transparent 100%
    );
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }
`,De=i.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 13, 42, 0.06) 0%, transparent 70%);
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  animation: ${Ie} 8s ease-in-out infinite;
  pointer-events: none;
`,Ne=i.div`
  position: relative;
  z-index: 2;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,He=i.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,Re=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.2rem 0.5rem 0.7rem;
  border-radius: 100px;
  background: linear-gradient(135deg, #8b0d2a 0%, #a61d4a 100%);
  border: none;
  margin-bottom: 1.75rem;
  box-shadow: 0 2px 8px rgba(139, 13, 42, 0.3);
`,Pe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`,Te=i.span`
  font-family: "Montserrat", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Be=i.h2`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #1e1f24;

  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  @media (max-width: 560px) {
    font-size: 1.65rem;
    line-height: 1.1;
  }
`,Oe=i.p`
  margin: 1.25rem auto 0;
  max-width: 520px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #5a6572;
  font-weight: 400;
`,Ve=i.div`
  position: relative;
  width: min(360px, 100%);
  margin: 2.5rem auto 0;
  z-index: 100;
`,Fe=i.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border: 1px solid rgba(139, 13, 42, 0.12);
  border-radius: 14px;
  color: #1e1f24;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  &:hover {
    border-color: rgba(139, 13, 42, 0.2);
    box-shadow:
      0 4px 12px rgba(139, 13, 42, 0.08),
      0 16px 48px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(139, 13, 42, 0.2);
    outline-offset: 3px;
  }

  ${({$isOpen:e})=>e&&`
      border-color: rgba(139, 13, 42, 0.25);
      box-shadow:
        0 4px 16px rgba(139, 13, 42, 0.1),
        0 24px 64px rgba(0, 0, 0, 0.08);
    `}
`,Xe=i.span`
  flex: 1;
  text-align: center;
  letter-spacing: -0.01em;
`,Ue=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(139, 13, 42, 0.08) 0%, rgba(139, 13, 42, 0.04) 100%);
  color: #8b0d2a;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  
  svg {
    transition: transform 0.3s ease;
  }

  ${({$isOpen:e})=>e&&`
      background: linear-gradient(135deg, #8b0d2a 0%, #a61d4a 100%);
      color: white;
    `}
`,Ze=i(o.div)`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 100;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(252, 252, 252, 0.98) 100%);
  border: 1px solid rgba(139, 13, 42, 0.08);
  border-radius: 16px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.02),
    0 24px 64px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(139, 13, 42, 0.04);
  padding: 8px;
  backdrop-filter: blur(20px);
`,qe=i.div`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(252, 252, 252, 0.98) 100%);
  border-left: 1px solid rgba(139, 13, 42, 0.08);
  border-top: 1px solid rgba(139, 13, 42, 0.08);
  transform: translateX(-50%) rotate(45deg);
  z-index: 101;
`,Ge=i(o.div)`
  position: relative;
  padding: 0.875rem 1rem;
  color: #5a6572;
  cursor: pointer;
  border-radius: 12px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  &:hover {
    background: linear-gradient(135deg, rgba(139, 13, 42, 0.06) 0%, rgba(139, 13, 42, 0.03) 100%);
    color: #8b0d2a;
  }

  ${({$selected:e})=>e&&`
      background: linear-gradient(135deg, rgba(139, 13, 42, 0.1) 0%, rgba(139, 13, 42, 0.05) 100%);
      color: #8b0d2a;
      font-weight: 600;
    `}
`,Ye=i.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`,Ke=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`,Je=i.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b0d2a 0%, #a61d4a 100%);
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.15);
`,Qe=i.span`
  flex: 1;
  letter-spacing: -0.01em;
  ${({$selected:e})=>e&&"font-weight: 600;"}
`;i(o.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #8b0d2a;
`;const _e=i.div`
  position: relative;
  margin-top: 1rem;
  padding-top: 22px;

  @media (max-width: 768px) {
    padding-top: 22px;
  }
`,et=i(o.div)`
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 0;
`,tt=i.div`
  display: flex;
  width: 100%;
  align-items: stretch;

  column-gap: 1.5rem;
  row-gap: ${({$showScroll:e})=>e?"0":"2.5rem"};

  flex-wrap: ${({$showScroll:e})=>e?"nowrap":"wrap"};
  justify-content: ${({$shouldCenter:e,$showScroll:l})=>l?"flex-start":e?"center":"flex-start"};

  padding: ${({$showScroll:e})=>e?"0.5rem 0":"1rem 0"};

  overflow-x: ${({$showScroll:e})=>e?"auto":"visible"};
  overflow-y: visible;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ${({$showScroll:e})=>e?`
      scroll-snap-type: x mandatory;
      scroll-padding-inline: 1rem;
      cursor: grab;
    `:`
      scroll-snap-type: none;
      cursor: default;
    `}

  &:active {
    cursor: ${({$showScroll:e})=>e?"grabbing":"default"};
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    column-gap: 1rem;
    row-gap: 0;
    padding: 0.5rem 1rem 1.5rem;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: visible;
  }
`,it=i(o.div)`
  display: flex;
  align-items: stretch;
  min-width: 0;
  scroll-snap-align: center;
  user-select: none;
  will-change: transform;

  & > * {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex: 0 0 clamp(280px, 85vw, 340px);
    width: clamp(280px, 85vw, 340px);
    scroll-snap-align: center;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    flex: 0 0 calc((100% - 1.5rem) / 2);
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    flex: 0 0 calc((100% - (1.5rem * 2)) / 3);
    width: calc((100% - (1.5rem * 2)) / 3);
  }

  @media (min-width: 1280px) {
    flex: 0 0 calc((100% - (1.5rem * 3)) / 4);
    width: calc((100% - (1.5rem * 3)) / 4);
  }
`,nt=R`
  0%, 100% { opacity: 0.3; transform: translateX(-100%); }
  50% { opacity: 1; transform: translateX(100%); }
`,ot=i(o.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`,rt=i.div`
  width: 56px;
  height: 4px;
  border-radius: 100px;
  background: linear-gradient(90deg, rgba(139, 13, 42, 0.1) 0%, rgba(139, 13, 42, 0.05) 100%);
  overflow: hidden;
  position: relative;
`,at=i.div`
  position: absolute;
  width: 40%;
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(90deg, #8b0d2a 0%, #a61d4a 100%);
  animation: ${nt} 3s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(139, 13, 42, 0.3);
`,st=i.span`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  color: #5a6572;
  font-weight: 500;
  letter-spacing: 0.02em;
`;export{kt as default};
