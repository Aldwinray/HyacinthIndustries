import{j as e,m as n,A as I,u as A,L as T,d as B,a as r}from"./motion-jLvT6sLY.js";import{d as i,m as C}from"./styled-3-8BfJdI.js";import{u as E,r as p}from"./vendor-DPKrZd5H.js";import{g as v,q as H}from"./icons-D9O8TY1s.js";import{B as M}from"./bg1-B7rUjgNq.js";import{P as V}from"./process-DpJ0_MSu.js";const x=({image:o,title:m,description:c,tag:l,link:t})=>{const y=E(),[j,b]=p.useState(!1),[s,z]=p.useState(()=>window.innerWidth<=768),[f,g]=p.useState(!1),k=d=>/^https?:\/\//i.test(d);p.useEffect(()=>{const d=()=>{const u=window.innerWidth<=768;z(u),u||g(!1)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]);const a=s?f:j,S=()=>{if(!t&&s){g(d=>!d);return}if(t){if(s&&!f){g(!0);return}if(k(t)){window.location.assign(t);return}y(t)}};return e.jsxs(P,{as:n.article,onHoverStart:()=>!s&&b(!0),onHoverEnd:()=>!s&&b(!1),onClick:S,style:{cursor:t||s?"pointer":"default"},children:[e.jsxs(L,{children:[e.jsx(W,{as:n.div,$image:o,animate:{scale:a?1.06:1},transition:{duration:.5,ease:[.23,1,.32,1]}}),e.jsx($,{as:n.div,animate:{opacity:a?.4:0},transition:{duration:.35}}),e.jsx(I,{children:a&&e.jsxs(D,{as:n.div,initial:{opacity:0,y:8,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.95},transition:{duration:.25,ease:[.23,1,.32,1]},children:[e.jsx(O,{children:l}),e.jsx(v,{size:14})]})})]}),e.jsxs(G,{children:[e.jsx(N,{children:m}),e.jsx(q,{children:c}),e.jsxs(U,{children:[e.jsxs(X,{as:n.div,animate:{background:a?"rgba(139, 13, 42, 0.06)":"rgba(0, 0, 0, 0.03)",borderColor:a?"rgba(139, 13, 42, 0.12)":"rgba(0, 0, 0, 0.05)"},transition:{duration:.25},children:[e.jsx(F,{as:n.span,animate:{background:a?"#8b0d2a":"#9ca3af"},transition:{duration:.25}}),e.jsx(J,{as:n.span,animate:{color:a?"#8b0d2a":"#6b7280"},transition:{duration:.25},children:l})]}),e.jsx(K,{as:n.div,animate:{opacity:a?1:0,x:a?0:-6},transition:{duration:.25,ease:[.23,1,.32,1]},children:e.jsx(v,{size:16})})]})]}),e.jsx(R,{as:n.div,animate:{opacity:a?1:0},transition:{duration:.25}})]})},P=i.div`
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
`,R=i.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  border: 2px solid rgba(139, 13, 42, 0.15);
  pointer-events: none;
  z-index: 5;

  @media (max-width: 768px) {
    border-radius: 18px;
  }
`,L=i.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 160px;
  }
`,W=i.div`
  position: absolute;
  inset: 0;
  background-image: url(${o=>o.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,$=i.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(139, 13, 42, 0.1) 0%,
    rgba(139, 13, 42, 0.3) 100%
  );
  pointer-events: none;
`,D=i.div`
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
`,O=i.span`
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`,G=i.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.35rem 1.35rem 1.25rem;

  @media (max-width: 768px) {
    padding: 1.15rem 1.15rem 1rem;
  }
`,N=i.h3`
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
`,q=i.p`
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
`,U=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`,X=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;
`,F=i.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ca3af;
  flex-shrink: 0;
`,J=i.span`
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  white-space: nowrap;
`,K=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(139, 13, 42, 0.06);
  color: #8b0d2a;
  flex-shrink: 0;
`,Q="/assets/modernSolutions-vtXHSiBn.webp",Y="/assets/innovation-4sVTRsT8.webp",w={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.08}}},Z={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.16,1,.3,1]}}},_={hidden:{opacity:0,y:40,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.16,1,.3,1]}}},we=()=>{const o=A(),m=o?{hidden:{opacity:1},visible:{opacity:1}}:w,c=o?{hidden:{opacity:1,y:0},visible:{opacity:1,y:0}}:Z,l=o?{hidden:{opacity:1},visible:{opacity:1}}:w,t=o?{hidden:{opacity:1,y:0,scale:1},visible:{opacity:1,y:0,scale:1}}:_;return e.jsx(T,{features:B,children:e.jsxs(ie,{as:r.section,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.25},variants:m,children:[e.jsx(te,{}),e.jsx(ae,{}),e.jsx(ne,{}),e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsxs(se,{as:r.div,variants:c,children:[e.jsx(de,{children:e.jsx(H,{size:14})}),e.jsx(ce,{children:"What We Help Improve"})]}),e.jsxs(le,{as:r.h2,variants:c,children:["Business Transformation",e.jsx(pe,{children:" Actions"})]}),e.jsx(me,{as:r.p,variants:c,children:"Practical initiatives designed to modernize operations, improve execution, and strengthen long-term business performance."})]}),e.jsxs(ge,{as:r.div,variants:l,children:[e.jsx(h,{as:r.div,variants:t,whileHover:{y:-12,transition:{duration:.35,ease:[.16,1,.3,1]}},children:e.jsx(x,{image:Q,title:"Digital Transformation",description:"Modernize your business with cutting-edge digital solutions that drive efficiency and growth.",tag:"Learn More"})}),e.jsx(h,{as:r.div,variants:t,whileHover:{y:-12,transition:{duration:.35,ease:[.16,1,.3,1]}},children:e.jsx(x,{image:V,title:"Process Optimization",description:"Streamline operations and maximize productivity with our proven optimization strategies.",tag:"Discover"})}),e.jsx(h,{as:r.div,variants:t,whileHover:{y:-12,transition:{duration:.35,ease:[.16,1,.3,1]}},children:e.jsx(x,{image:Y,title:"Innovation Strategy",description:"Stay ahead of the competition with forward-thinking innovation and strategic planning.",tag:"Explore Now"})})]})]})]})})},ee=C`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.15); }
`,ie=i.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 7rem 0 7.5rem;
  content-visibility: auto;
  contain-intrinsic-size: 900px;

  @media (max-width: 768px) {
    padding: 5rem 0 5.5rem;
  }
`,te=i.div`
  position: absolute;
  inset: 0;
  background: url(${M}) center / cover no-repeat;
  z-index: 0;
`,ae=i.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: 
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 60%),
    radial-gradient(ellipse 50% 30% at 20% 80%, rgba(139, 13, 42, 0.1) 0%, transparent 50%),
    linear-gradient(
      180deg,
      rgba(15, 15, 18, 0.9) 0%,
      rgba(15, 15, 18, 0.85) 50%,
      rgba(15, 15, 18, 0.92) 100%
    );

  &::before {
    content: "";
    position: absolute;
    top: -300px;
    right: -100px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(220, 38, 38, 0.15) 0%,
      rgba(139, 13, 42, 0.08) 40%,
      transparent 70%
    );
    pointer-events: none;
    filter: blur(60px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -200px;
    left: -100px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(139, 13, 42, 0.12) 0%,
      rgba(220, 38, 60, 0.06) 40%,
      transparent 70%
    );
    pointer-events: none;
    filter: blur(80px);
  }
`,ne=i.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.04) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  animation: ${ee} 10s ease-in-out infinite;
  pointer-events: none;
  filter: blur(100px);
`,re=i.div`
  position: relative;
  z-index: 2;
  width: min(1320px, calc(100% - 3rem));
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`,oe=i.div`
  max-width: 720px;
  margin: 0 auto 4rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,se=i.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.2rem 0.5rem 0.7rem;
  border-radius: 100px;
  background: linear-gradient(135deg, #8b0d2a 0%, #a61d4a 100%);
  border: none;
  margin-bottom: 1.75rem;
  box-shadow: 0 2px 8px rgba(139, 13, 42, 0.3);
`,de=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`,ce=i.span`
  font-family: "Montserrat", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,le=i.h2`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #ffffff;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }

  @media (max-width: 560px) {
    font-size: 1.65rem;
    line-height: 1.1;
  }
`,pe=i.span`
  color: #fca5a5;
`,me=i.p`
  margin: 1.25rem auto 0;
  max-width: 520px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  text-wrap: balance;
  font-weight: 400;
  padding: 0 0.5rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,ge=i.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,h=i(r.div)`
  min-width: 0;
  height: 100%;
  will-change: transform, opacity;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));

  & > * {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: drop-shadow(0 8px 30px rgba(220, 38, 38, 0.15));
  }
`;export{we as default};
