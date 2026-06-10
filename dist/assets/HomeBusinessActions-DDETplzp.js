import{j as e,m as t,A as S}from"./motion-Cy3Fut2F.js";import{d as T,r as m}from"./vendor-BQFpGxKL.js";import{d as i,m as M}from"./styled-CFUkIykv.js";import{g as w}from"./icons-BMgoPnMN.js";import{B as I}from"./bg1-B7rUjgNq.js";import{P as B}from"./process-DpJ0_MSu.js";const C=({image:r,title:n,description:o,tag:l,link:s})=>{const v=T(),[y,h]=m.useState(!1),[d,k]=m.useState(()=>window.innerWidth<=768),[b,x]=m.useState(!1),j=p=>/^https?:\/\//i.test(p);m.useEffect(()=>{const p=()=>{const f=window.innerWidth<=768;k(f),f||x(!1)};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const a=d?b:y,z=()=>{if(!s&&d){x(p=>!p);return}if(s){if(d&&!b){x(!0);return}if(j(s)){window.location.assign(s);return}v(s)}};return e.jsxs(E,{as:t.article,onHoverStart:()=>!d&&h(!0),onHoverEnd:()=>!d&&h(!1),onClick:z,style:{cursor:s||d?"pointer":"default"},children:[e.jsxs(H,{children:[e.jsx(P,{as:t.div,$image:r,animate:{scale:a?1.06:1},transition:{duration:.5,ease:[.23,1,.32,1]}}),e.jsx(R,{as:t.div,animate:{opacity:a?.4:0},transition:{duration:.35}}),e.jsx(S,{children:a&&e.jsxs(V,{as:t.div,initial:{opacity:0,y:8,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.95},transition:{duration:.25,ease:[.23,1,.32,1]},children:[e.jsx(D,{children:l}),e.jsx(w,{size:14})]})})]}),e.jsxs(U,{children:[e.jsx(W,{children:n}),e.jsx($,{children:o}),e.jsxs(L,{children:[e.jsxs(F,{as:t.div,animate:{background:a?"rgba(139, 13, 42, 0.06)":"rgba(0, 0, 0, 0.03)",borderColor:a?"rgba(139, 13, 42, 0.12)":"rgba(0, 0, 0, 0.05)"},transition:{duration:.25},children:[e.jsx(G,{as:t.span,animate:{background:a?"#8b0d2a":"#9ca3af"},transition:{duration:.25}}),e.jsx(O,{as:t.span,animate:{color:a?"#8b0d2a":"#6b7280"},transition:{duration:.25},children:l})]}),e.jsx(N,{as:t.div,animate:{opacity:a?1:0,x:a?0:-6},transition:{duration:.25,ease:[.23,1,.32,1]},children:e.jsx(w,{size:16})})]})]}),e.jsx(A,{as:t.div,animate:{opacity:a?1:0},transition:{duration:.25}})]})},E=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 380px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 32px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    min-height: 360px;
    border-radius: 18px;
  }
`,A=i.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  border: 2px solid rgba(139, 13, 42, 0.15);
  pointer-events: none;
  z-index: 5;

  @media (max-width: 768px) {
    border-radius: 18px;
  }
`,H=i.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 160px;
  }
`,P=i.div`
  position: absolute;
  inset: 0;
  background-image: url(${r=>r.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,R=i.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(139, 13, 42, 0.1) 0%,
    rgba(139, 13, 42, 0.3) 100%
  );
  pointer-events: none;
`,V=i.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  color: #1a1d20;
`,D=i.span`
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`,U=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.35rem 1.35rem 1.25rem;

  @media (max-width: 768px) {
    padding: 1.15rem 1.15rem 1rem;
  }
`,W=i.h3`
  margin: 0 0 0.6rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a1d20;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`,$=i.p`
  margin: 0;
  flex: 1;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.65;
  color: #6b7280;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.86rem;
  }
`,L=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`,F=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;
`,G=i.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ca3af;
  flex-shrink: 0;
`,O=i.span`
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  white-space: nowrap;
`,N=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(139, 13, 42, 0.06);
  color: #8b0d2a;
  flex-shrink: 0;
`,X="/assets/modernSolutions-vtXHSiBn.webp",q="/assets/innovation-4sVTRsT8.webp",g={smooth:[.23,1,.32,1],snappy:[.16,1,.3,1],bounce:[.34,1.56,.64,1]},u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.08}}},c={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.6,ease:g.smooth}}},J={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.2}}},K={hidden:{opacity:0,y:32,scale:.96},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:g.smooth}}},Q=[{image:X,title:"Digital Transformation",description:"Modernize your business with cutting-edge digital solutions that drive efficiency and growth.",tag:"Learn More",link:"/services"},{image:B,title:"Process Optimization",description:"Streamline operations and maximize productivity with our proven optimization strategies.",tag:"Discover",link:"/services"},{image:q,title:"Innovation Strategy",description:"Stay ahead of the competition with forward-thinking innovation and strategic planning.",tag:"Explore",link:"/services"}],be=m.memo(()=>{const r=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=o=>r?{hidden:{opacity:1},visible:{opacity:1}}:o;return e.jsxs(Z,{as:t.section,variants:n(u),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2,margin:"-100px"},children:[e.jsx(_,{}),e.jsx(ee,{}),e.jsxs(ie,{children:[e.jsxs(te,{as:t.div,variants:n(u),children:[e.jsxs(ae,{variants:n(c),children:[e.jsx(ne,{}),e.jsx("span",{children:"What We Help Improve"})]}),e.jsxs(re,{variants:n(c),children:["Business Transformation",e.jsx(oe,{children:" Actions"})]}),e.jsx(se,{variants:n(c),children:"Practical initiatives designed to modernize operations, improve execution, and strengthen long-term business performance."})]}),e.jsx(de,{as:t.div,variants:n(J),children:Q.map((o,l)=>e.jsx(pe,{as:t.div,variants:n(K),custom:l,whileHover:r?{}:{y:-8,transition:{duration:.3,ease:g.smooth}},children:e.jsx(C,{...o})},o.title))})]})]})}),Y=M`
  0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.08); }
`,Z=i.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 9rem;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
  background: #0c0c0e;

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
`,_=i.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  /* Base background - REMOVED fixed attachment */
  background: url(${I}) center / cover no-repeat;
  
  /* Simplified dark overlay - fewer gradients */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 70% 10%, rgba(166, 29, 74, 0.1) 0%, transparent 50%),
      linear-gradient(
        180deg,
        rgba(12, 12, 14, 0.94) 0%,
        rgba(12, 12, 14, 0.9) 100%
      );
  }
  
  /* Performance: Removed noise texture */
`,ee=i.div`
  position: absolute;
  width: 900px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center, 
    rgba(166, 29, 74, 0.06) 0%, 
    rgba(166, 29, 74, 0.02) 40%,
    transparent 70%
  );
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${Y} 12s ease-in-out infinite;
  pointer-events: none;
  filter: blur(80px);
`,ie=i.div`
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
`,te=i(t.div)`
  max-width: 680px;
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
`,ae=i(t.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #a1a1aa;

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
`,ne=i.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a61d4a 0%, #7c1232 100%);
  box-shadow: 0 0 10px rgba(166, 29, 74, 0.4);
`,re=i(t.h2)`
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #fafafa;
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
`,oe=i.span`
  color: #fb7185;
  font-weight: 500;
`,se=i(t.p)`
  margin: 1rem 0 0;
  max-width: 520px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 480px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-top: 0.75rem;
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
    max-width: 560px;
  }
`,de=i(t.div)`
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
`,pe=i(t.div)`
  min-width: 0;
  height: 100%;
  will-change: transform;
  
  /* Multi-layer shadow for depth */
  filter: 
    drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))
    drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))
    drop-shadow(0 16px 32px rgba(0, 0, 0, 0.2));

  & > * {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))
      drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3))
      drop-shadow(0 24px 48px rgba(166, 29, 74, 0.08));
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))
      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }
`;export{be as default};
