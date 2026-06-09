import{j as i}from"./motion-jLvT6sLY.js";import{r as a}from"./vendor-DPKrZd5H.js";import{d as r}from"./styled-3-8BfJdI.js";const I=({images:e,autoPlayInterval:s,style:h})=>{const[n,c]=a.useState(0),[p,l]=a.useState(new Set([0]));a.useEffect(()=>{const o=setInterval(()=>{c(t=>{const d=(t+1)%e.length;return l(f=>new Set([...f,d])),d})},s);return()=>clearInterval(o)},[e.length,s]);const g=o=>{l(t=>new Set([...t,o])),c(o)};return i.jsxs(m,{style:h,children:[i.jsx(u,{children:e.map((o,t)=>i.jsx(v,{$active:t===n,children:i.jsx(b,{src:o,alt:`Slide ${t+1}`,width:"800",height:"600",loading:t===0?"eager":"lazy",style:{display:p.has(t)?"block":"none"}})},t))}),i.jsx(x,{children:e.map((o,t)=>i.jsx(w,{$active:t===n,onClick:()=>g(t),"aria-label":`Go to slide ${t+1}`,"aria-current":t===n?"true":"false"},t))})]})},m=r.div`
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
`,u=r.div`
  width: 100%;
  height: 100%;
  position: relative;
`,v=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${e=>e.$active?1:0};
  pointer-events: ${e=>e.$active?"auto":"none"};
  overflow: hidden;
`,b=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,x=r.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`,w=r.button`
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
`;export{I as default};
