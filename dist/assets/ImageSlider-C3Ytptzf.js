import{j as i}from"./motion-Cy3Fut2F.js";import{r as n}from"./vendor-BQFpGxKL.js";import{d as o}from"./styled-CFUkIykv.js";const j=({images:t,autoPlayInterval:s,style:d})=>{const[h,c]=n.useState(0),[l,p]=n.useState(new Set([0]));return n.useEffect(()=>{const r=setInterval(()=>{c(e=>{const a=(e+1)%t.length;return p(m=>new Set([...m,a])),a})},s);return()=>clearInterval(r)},[t.length,s]),i.jsx(v,{style:d,children:i.jsx(g,{children:t.map((r,e)=>i.jsx(u,{$active:e===h,children:i.jsx(w,{src:r,alt:`Slide ${e+1}`,width:"800",height:"600",loading:e===0?"eager":"lazy",style:{display:l.has(e)?"block":"none"}})},e))})})},v=o.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius: 20px;
  max-width: 100vw;
  @media (max-width: 768px) {
    height: 40vh;
    margin-bottom: 2rem;
  } 
`,g=o.div`
  width: 100%;
  height: 100%;
  position: relative;
`,u=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${t=>t.$active?1:0};
  pointer-events: ${t=>t.$active?"auto":"none"};
  overflow: hidden;
`,w=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;export{j as default};
