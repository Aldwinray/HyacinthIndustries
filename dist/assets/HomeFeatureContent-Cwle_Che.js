import{j as e,m as t,A as C,u as S}from"./motion-jLvT6sLY.js";import{d as i,m as g}from"./styled-3-8BfJdI.js";import{u as E,r as c}from"./vendor-DPKrZd5H.js";import{ai as H,q as A}from"./icons-D9O8TY1s.js";import{B as I}from"./index-D8YeovzI.js";import{b as T}from"./office-Bip-LbGP.js";import{w as $}from"./coding-DYEnY3xo.js";import{H as M}from"./healthcare-C4VecUyJ.js";const W=({image:a,title:s,description:n,tag:d,link:o,icon:x})=>{const v=E(),[y,h]=c.useState(!1),[l,k]=c.useState(()=>window.innerWidth<=768),[b,m]=c.useState(!1),j=p=>/^https?:\/\//i.test(p);c.useEffect(()=>{const p=()=>{const f=window.innerWidth<=768;k(f),f||m(!1)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const r=l?b:y,z=()=>{if(!o&&l){m(p=>!p);return}if(o){if(l&&!b){m(!0);return}if(j(o)){window.location.assign(o);return}v(o)}};return e.jsxs(B,{as:t.article,onHoverStart:()=>!l&&h(!0),onHoverEnd:()=>!l&&h(!1),onClick:z,style:{cursor:o||l?"pointer":"default"},initial:!1,animate:{y:r?-4:0},transition:{duration:.28,ease:[.23,1,.32,1]},children:[e.jsx(D,{as:t.div,image:a,animate:{opacity:r?1:0,scale:r?1.03:1},transition:{duration:.4,ease:[.23,1,.32,1]}}),e.jsx(L,{as:t.div,initial:!1,animate:{backgroundColor:r?"rgba(18, 18, 20, 0.2)":"rgba(255, 255, 255, 0.97)",borderColor:r?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)"},transition:{duration:r?.35:.28,ease:[.23,1,.32,1]},children:e.jsxs(R,{children:[x&&e.jsx(G,{as:t.div,animate:{backgroundColor:r?"rgba(255,255,255,0.16)":"#f7f7f8",borderColor:r?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.05)"},transition:{duration:.25},children:e.jsx(x,{size:22})}),e.jsxs(O,{children:[e.jsx(P,{as:t.h3,animate:{color:r?"#ffffff":"#23262f"},transition:{duration:.24},children:s}),e.jsx(U,{as:t.p,animate:{color:r?"rgba(255,255,255,0.86)":"#667085"},transition:{duration:.24},children:n})]}),e.jsx(X,{children:e.jsx(C,{mode:"wait",children:r?e.jsxs(F,{as:t.div,initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.24},children:[e.jsx(V,{children:d}),e.jsx(Y,{size:18})]},"cta"):e.jsx(q,{},"spacer")})})]})})]})},B=i.div`
  position: relative;
  width: 100%;
  min-height: 360px;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  isolation: isolate;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    min-height: 340px;
    border-radius: 20px;
  }
`,L=i(t.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.97);
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 20px;
  }
`,D=i(t.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: url(${a=>a.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.14) 0%,
      rgba(0, 0, 0, 0.28) 45%,
      rgba(0, 0, 0, 0.72) 100%
    );
  }
`,R=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,G=i(t.div)`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: #f7f7f8;
  border: 1px solid rgba(0, 0, 0, 0.05);

  svg {
    color: ${({theme:a})=>{var s;return((s=a.colors)==null?void 0:s.primary)||"#ff0033"}};
    stroke-width: 2px;
  }
`,O=i.div`
  flex: 1;
  min-width: 0;
`,P=i.h3`
  font-family: "Lexend", sans-serif;
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  line-height: 1.22;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.8rem;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.22em * 2);
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 0.65rem;
  }
`,U=i.p`
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 0.86rem;
    line-height: 1.56;
  }
`,X=i.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 60px;
  padding-top: 0.85rem;
`,F=i.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-width: min(100%, 220px);
  max-width: 100%;
  padding: 0.68rem 0.95rem;
  border-radius: 14px;
  background: rgba(255, 0, 51, 0.7);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
`,V=i.span`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.82rem;
  }
`,Y=i(H)`
  stroke-width: 2.4px;
  color: #ffffff;
  flex-shrink: 0;
`,q=i.div`
  height: 44px;
`,N=[{id:1,image:T,title:"Professional Outsourcing",description:"Transform your business with our comprehensive outsourcing solutions. From administrative support to specialized medical services, we deliver excellence across industries.",tag:"Learn More"},{id:2,image:$,title:"Technical Expertise",description:"Access world-class engineering and web design services. Our team delivers cutting-edge solutions in CAD, product development, UI/UX design, and more.",tag:"Explore Services"},{id:3,image:M,title:"Healthcare Solutions",description:"Revolutionize healthcare delivery with our virtual nursing, emergency assistance, and medical support services. Experience healthcare innovation at its best.",tag:"Discover Healthcare"}];function ye(){const a=S(),s={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:a?0:.12}}},n={hidden:{opacity:0,y:a?0:40},visible:{opacity:1,y:0,transition:{duration:a?0:.8,ease:[.16,1,.3,1]}}};return e.jsxs(Q,{as:t.section,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:s,children:[e.jsx(Z,{}),e.jsx(_,{}),e.jsxs(ee,{children:[e.jsx(u,{$position:"top-left"}),e.jsx(u,{$position:"bottom-right"}),e.jsxs(ie,{children:[e.jsxs(te,{as:t.div,variants:n,children:[e.jsx(ae,{children:e.jsx(A,{size:14})}),e.jsx(re,{children:"What We Do"})]}),e.jsxs(ne,{children:[e.jsx(oe,{as:t.h2,variants:n,children:"Featured Capabilities"}),e.jsx(se,{as:t.div,variants:n})]}),e.jsx(de,{as:t.p,variants:n,children:"Explore the solutions that help organizations streamline operations, strengthen delivery, and support long-term growth."})]}),e.jsx(le,{as:t.div,variants:s,children:N.map((d,o)=>e.jsxs(w,{as:t.div,variants:n,custom:o,whileHover:{y:-16,scale:1.02,transition:{duration:.4,ease:[.16,1,.3,1]}},whileTap:{scale:.98},children:[e.jsx(pe,{}),e.jsx(W,{image:d.image,title:d.title,description:d.description,tag:d.tag})]},d.id))}),e.jsx(ce,{as:t.div,variants:n,children:e.jsx(me,{})})]})]})}const J=g`
  0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.6; transform: translateX(-50%) scale(1.1); }
`,K=g`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;g`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;const Q=i(t.section)`
  width: 100%;
  position: relative;
  padding: 9rem 0 10rem;
  overflow: hidden;
  background-image: url(${I});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 120% 80% at 30% -20%, rgba(139, 13, 42, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 100% 60% at 70% 110%, rgba(139, 13, 42, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 70%),
      linear-gradient(
        180deg,
        rgba(252, 251, 249, 0.98) 0%,
        rgba(248, 246, 243, 0.96) 25%,
        rgba(245, 243, 240, 0.95) 50%,
        rgba(248, 246, 243, 0.96) 75%,
        rgba(252, 251, 249, 0.98) 100%
      );
    z-index: 1;
    pointer-events: none;
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
      rgba(139, 13, 42, 0.2) 15%, 
      rgba(139, 13, 42, 0.3) 50%,
      rgba(139, 13, 42, 0.2) 85%, 
      transparent 100%
    );
    z-index: 2;
  }

  @media (max-width: 1024px) {
    padding: 7rem 0 8rem;
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    padding: 5rem 0 6rem;
  }
`,Z=i.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: 
    radial-gradient(circle, rgba(139, 13, 42, 0.08) 0%, transparent 50%),
    radial-gradient(circle, rgba(166, 29, 74, 0.05) 30%, transparent 70%);
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  animation: ${J} 10s ease-in-out infinite;
  pointer-events: none;
  filter: blur(60px);
`,_=i.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(139, 13, 42, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 13, 42, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  z-index: 1;
  opacity: 0.5;
  pointer-events: none;
`,u=i.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 13, 42, 0.06) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  animation: ${K} 6s ease-in-out infinite;
  
  ${({$position:a})=>a==="top-left"&&`
    top: 10%;
    left: -100px;
    animation-delay: 0s;
  `}
  
  ${({$position:a})=>a==="bottom-right"&&`
    bottom: 10%;
    right: -100px;
    animation-delay: 3s;
  `}

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    display: none;
  }
`,ee=i.div`
  position: relative;
  z-index: 3;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 0 2.5rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`,ie=i.div`
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,te=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.2rem 0.5rem 0.7rem;
  border-radius: 100px;
  background: linear-gradient(135deg, #8b0d2a 0%, #a61d4a 100%);
  border: none;
  box-shadow: 0 2px 8px rgba(139, 13, 42, 0.3);
  margin-bottom: 1.75rem;
`,ae=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  color: white;
  position: relative;
  z-index: 1;
`,re=i.span`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`,ne=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`,oe=i(t.h2)`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #0f172a;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: clamp(1.85rem, 7vw, 2.5rem);
    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: 1.65rem;
  }
`,se=i(t.div)`
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, #8b0d2a, #a61d4a);
  border-radius: 2px;
  margin-top: 16px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #8b0d2a, #a61d4a);
    border-radius: 2px;
    filter: blur(8px);
    opacity: 0.5;
  }
`,de=i(t.p)`
  margin: 1.5rem auto 0;
  max-width: 640px;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.7;
  color: #475569;
  font-weight: 400;
  letter-spacing: 0.01em;
`,le=i(t.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  align-items: stretch;
  position: relative;

  @media (max-width: 1200px) {
    gap: 1.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,w=i(t.div)`
  min-width: 0;
  height: 100%;
  position: relative;
  border-radius: 28px;
  
  & > * {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`,pe=i.div`
  position: absolute;
  inset: -2px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(139, 13, 42, 0.3), rgba(166, 29, 74, 0.2), rgba(139, 13, 42, 0.3));
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  
  ${w}:hover & {
    opacity: 1;
  }
`,ce=i(t.div)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`,me=i.div`
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, #8b0d2a, transparent);
  opacity: 0.4;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;export{ye as default};
