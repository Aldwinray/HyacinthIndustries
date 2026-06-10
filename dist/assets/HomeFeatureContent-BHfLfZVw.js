import{m as t,j as e,A as C}from"./motion-Cy3Fut2F.js";import{d as M,r as m}from"./vendor-BQFpGxKL.js";import{d as i,m as S}from"./styled-CFUkIykv.js";import{ai as T}from"./icons-BMgoPnMN.js";import{B as E}from"./index-MTnuMEob.js";import{b as I}from"./office-Bip-LbGP.js";import{w as A}from"./coding-DYEnY3xo.js";import{H}from"./healthcare-C4VecUyJ.js";const B=({image:n,title:a,description:o,tag:l,link:s,icon:g})=>{const v=M(),[y,f]=m.useState(!1),[d,k]=m.useState(()=>window.innerWidth<=768),[b,c]=m.useState(!1),z=p=>/^https?:\/\//i.test(p);m.useEffect(()=>{const p=()=>{const w=window.innerWidth<=768;k(w),w||c(!1)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const r=d?b:y,j=()=>{if(!s&&d){c(p=>!p);return}if(s){if(d&&!b){c(!0);return}if(z(s)){window.location.assign(s);return}v(s)}};return e.jsxs(U,{as:t.article,onHoverStart:()=>!d&&f(!0),onHoverEnd:()=>!d&&f(!1),onClick:j,style:{cursor:s||d?"pointer":"default"},initial:!1,animate:{y:r?-4:0},transition:{duration:.28,ease:[.23,1,.32,1]},children:[e.jsx(D,{as:t.div,image:n,animate:{opacity:r?1:0,scale:r?1.03:1},transition:{duration:.4,ease:[.23,1,.32,1]}}),e.jsx(W,{as:t.div,initial:!1,animate:{backgroundColor:r?"rgba(18, 18, 20, 0.2)":"rgba(255, 255, 255, 0.97)",borderColor:r?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.06)"},transition:{duration:r?.35:.28,ease:[.23,1,.32,1]},children:e.jsxs(L,{children:[g&&e.jsx(R,{as:t.div,animate:{backgroundColor:r?"rgba(255,255,255,0.16)":"#f7f7f8",borderColor:r?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.05)"},transition:{duration:.25},children:e.jsx(g,{size:22})}),e.jsxs(V,{children:[e.jsx(F,{as:t.h3,animate:{color:r?"#ffffff":"#23262f"},transition:{duration:.24},children:a}),e.jsx($,{as:t.p,animate:{color:r?"rgba(255,255,255,0.86)":"#667085"},transition:{duration:.24},children:o})]}),e.jsx(P,{children:e.jsx(C,{mode:"wait",children:r?e.jsxs(G,{as:t.div,initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.24},children:[e.jsx(O,{children:l}),e.jsx(N,{size:18})]},"cta"):e.jsx(X,{},"spacer")})})]})})]})},U=i.div`
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
`,W=i(t.div)`
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
  background-image: url(${n=>n.image});
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
`,L=i.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,R=i(t.div)`
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
    color: ${({theme:n})=>{var a;return((a=n.colors)==null?void 0:a.primary)||"#ff0033"}};
    stroke-width: 2px;
  }
`,V=i.div`
  flex: 1;
  min-width: 0;
`,F=i.h3`
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
`,$=i.p`
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
`,P=i.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 60px;
  padding-top: 0.85rem;
`,G=i.div`
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
`,O=i.span`
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
`,N=i(T)`
  stroke-width: 2.4px;
  color: #ffffff;
  flex-shrink: 0;
`,X=i.div`
  height: 44px;
`,h={smooth:[.23,1,.32,1],snappy:[.16,1,.3,1]},u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.08}}},x={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.6,ease:h.smooth}}},q={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.15}}},J={hidden:{opacity:0,y:32,scale:.96},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:h.smooth}}},K=[{id:1,image:I,title:"Professional Outsourcing",description:"Transform your business with our comprehensive outsourcing solutions. From administrative support to specialized medical services, we deliver excellence across industries.",tag:"Learn More"},{id:2,image:A,title:"Technical Expertise",description:"Access world-class engineering and web design services. Our team delivers cutting-edge solutions in CAD, product development, UI/UX design, and more.",tag:"Explore Services"},{id:3,image:H,title:"Healthcare Solutions",description:"Revolutionize healthcare delivery with our virtual nursing, emergency assistance, and medical support services. Experience healthcare innovation at its best.",tag:"Discover Healthcare"}],fe=m.memo(()=>{const n=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=o=>n?{hidden:{opacity:1},visible:{opacity:1}}:o;return e.jsxs(Y,{as:t.section,variants:a(u),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2,margin:"-100px"},children:[e.jsx(Z,{}),e.jsx(_,{}),e.jsxs(ee,{children:[e.jsxs(ie,{as:t.div,variants:a(u),children:[e.jsxs(te,{variants:a(x),children:[e.jsx(ae,{}),e.jsx("span",{children:"What We Do"})]}),e.jsx(re,{variants:a(x),children:"Featured Capabilities"}),e.jsx(ne,{variants:a(x),children:"Explore the solutions that help organizations streamline operations, strengthen delivery, and support long-term growth."})]}),e.jsx(oe,{as:t.div,variants:a(q),children:K.map((o,l)=>e.jsx(se,{as:t.div,variants:a(J),custom:l,whileHover:n?{}:{y:-8,transition:{duration:.3,ease:h.smooth}},children:e.jsx(B,{...o})},o.id))})]})]})}),Q=S`
  0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.08); }
`,Y=i(t.section)`
  width: 100%;
  position: relative;
  padding: 8rem 0 9rem;
  overflow: hidden;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
  background: #fafaf9;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    padding: 3.5rem 0 4.5rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    padding: 10rem 0 11rem;
  }
`,Z=i.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  /* Base background - REMOVED fixed attachment */
  background-image: url(${E});
  background-size: cover;
  background-position: center;
  
  /* Simplified overlay - fewer gradients */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 120% 60% at 50% 0%, rgba(166, 29, 74, 0.05) 0%, transparent 60%),
      linear-gradient(
        180deg,
        rgba(250, 250, 249, 0.98) 0%,
        rgba(250, 249, 247, 0.98) 100%
      );
  }
  
  /* Performance: Removed noise texture */
`,_=i.div`
  position: absolute;
  width: 900px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center, 
    rgba(166, 29, 74, 0.04) 0%, 
    rgba(166, 29, 74, 0.02) 40%,
    transparent 70%
  );
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${Q} 12s ease-in-out infinite;
  pointer-events: none;
  filter: blur(80px);
`,ee=i.div`
  position: relative;
  z-index: 2;
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: 0 2rem;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    width: min(1400px, 95%);
    padding: 0 2.5rem;
  }
`,ie=i(t.div)`
  max-width: 720px;
  margin: 0 auto 4.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    margin-bottom: 5rem;
  }
`,te=i(t.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52525b;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 0.6875rem;
    margin-bottom: 0.875rem;
  }
`,ae=i.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a61d4a 0%, #7c1232 100%);
  box-shadow: 0 0 10px rgba(166, 29, 74, 0.3);
`,re=i(t.h2)`
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #18181b;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: clamp(1.875rem, 4.5vw, 2.75rem);
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: clamp(1.625rem, 5vw, 2.25rem);
    line-height: 1.15;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    font-size: 3.75rem;
  }
`,ne=i(t.p)`
  margin: 1rem 0 0;
  max-width: 600px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: #71717a;
  font-weight: 400;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 520px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-top: 0.75rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    font-size: 1.125rem;
    max-width: 640px;
  }
`,oe=i(t.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    max-width: 900px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 480px;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    gap: 1rem;
    max-width: 100%;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    gap: 1.75rem;
    max-width: 1320px;
  }
`,se=i(t.div)`
  min-width: 0;
  height: 100%;
  will-change: transform;
  border-radius: 24px;
  
  /* Multi-layer shadow for depth */
  filter: 
    drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 12px rgba(0, 0, 0, 0.03))
    drop-shadow(0 16px 32px rgba(0, 0, 0, 0.02));

  & > * {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))
      drop-shadow(0 8px 20px rgba(0, 0, 0, 0.04))
      drop-shadow(0 24px 48px rgba(166, 29, 74, 0.06));
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    border-radius: 20px;
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.03))
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.02));
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    border-radius: 18px;
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.025))
      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.02));
  }
`;export{fe as default};
