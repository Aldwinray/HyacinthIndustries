import{m as D,j as e}from"./motion-jLvT6sLY.js";import{r as y}from"./vendor-DPKrZd5H.js";import{d as i}from"./styled-3-8BfJdI.js";import{S as R,T as L,a as $,F as q}from"./index-D8YeovzI.js";import"./ImageSlider-Dr3lJNIJ.js";import{H as F}from"./healthcare-C4VecUyJ.js";import{P as Y}from"./process-DpJ0_MSu.js";import{g as k,K as G,n as r,N,O as V,i as Q,z as U,J as X}from"./icons-D9O8TY1s.js";i.div`
  background-color: transparent;
  width: 250px;
  min-width: 250px; 
  height: 200px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;i.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden; /* Prevent flickering */
`;const M=i.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  will-change: transform;
`;i(M)`
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  h2{
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;i(M)`
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
`;i.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  h2 {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin: 0;
  }
  
  p {
    font-size: 0.8rem;
    margin: 0.5rem 0 0 0;
    color: #6c757d;
  }
`;i.div`
  .icon-container {
    width: 80px; /* Adjust this value as needed */
    height: 80px; /* Adjust this value as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto; /* Center the icon container */
  }
`;i.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;i(D.div)`
  font-family: "Lexend Light", sans-serif;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;i.button`
  width: 100%;
  padding: 1.5rem;
  background: ${t=>t.active?"#1a1a1a":"#2a2a2a"};
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
    background: ${t=>t.active?"#1a1a1a":"#333333"};
  }

  &::after {
    content: '${t=>t.active?"−":"+"}';
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    right: 1.5rem;
  }
`;i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;const _="/assets/stock2-WBaQqvHM.webp",J="/assets/abstract-B8U69tkz.webp",K="/assets/security-_SpQtk3V.webp",Z="/assets/Healthcare-ME_IVVT7.webp",ee=J,ie=()=>{const[t,E]=y.useState(()=>window.innerWidth<800);return y.useEffect(()=>{const o=()=>{E(window.innerWidth<800)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),e.jsxs(te,{children:[e.jsxs(re,{children:[e.jsx(ne,{src:F,"aria-hidden":!0}),e.jsx(ae,{}),e.jsx(oe,{}),e.jsx(se,{children:e.jsxs(de,{children:[e.jsxs(ce,{children:[e.jsx(le,{children:"Hyacinth Industries"}),e.jsx(me,{})]}),e.jsxs(he,{children:["Healthcare ",e.jsx("span",{children:"Solutions"})]}),e.jsx(pe,{children:"Advanced medical support and technology services designed for reliable care delivery and stronger operations."}),e.jsx(ge,{children:"End-to-end support for virtual care, administration, billing, and compliance operations."}),e.jsxs(fe,{children:[e.jsxs(xe,{onClick:o=>{o.preventDefault();const z=document.getElementById("healthcare-overview"),O=115;if(z){const A=z.getBoundingClientRect().top+window.pageYOffset-O;window.scrollTo({top:A,behavior:"smooth"})}},children:["Explore Our Solutions",e.jsx(k,{size:18})]}),e.jsxs(ue,{children:[e.jsx(be,{children:"3 Core Services"}),e.jsx(ve,{children:"Enterprise-grade support"})]})]})]})})]}),e.jsxs(S,{id:"healthcare-overview",background:"#ffffff",children:[e.jsx(a,{children:"Healthcare Industry Overview"}),e.jsxs(je,{children:[e.jsxs(we,{children:[e.jsx(C,{id:"healthcare-industry-overview",children:"The healthcare industry is undergoing a profound transformation driven by technological advancements, changing patient expectations, and the need for more efficient care delivery models. As healthcare providers face increasing pressure to deliver high-quality care while managing costs, innovative solutions are becoming essential."}),e.jsx(C,{children:"Our comprehensive healthcare solutions are designed to address these challenges by leveraging cutting-edge technology, streamlined processes, and specialized expertise to help healthcare organizations thrive in this evolving landscape."})]}),e.jsx(ye,{children:e.jsx(ze,{src:_,alt:"Healthcare Technology"})})]})]}),e.jsxs(ke,{children:[e.jsx(H,{}),e.jsx(a,{children:"Our Healthcare Services"}),e.jsxs(Se,{children:[e.jsxs(h,{children:[e.jsx(g,{children:"01"}),e.jsx(f,{children:e.jsx(G,{size:24,strokeWidth:1.5})}),e.jsx(x,{children:"Virtual Healthcare"}),e.jsx(u,{children:"Comprehensive telehealth solutions including remote consultations, monitoring, and digital health platforms."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Remote Consultations"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Patient Monitoring"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Digital Health Platforms"]})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:"02"}),e.jsx(f,{children:e.jsx(N,{size:24,strokeWidth:1.5})}),e.jsx(x,{children:"Administrative Support"}),e.jsx(u,{children:"Streamlined administrative support for healthcare organizations, including billing, documentation, and compliance."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Billing Management"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Documentation Support"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Compliance Management"]})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:"03"}),e.jsx(f,{children:e.jsx(V,{size:24,strokeWidth:1.5})}),e.jsx(x,{children:"Medical Billing"}),e.jsx(u,{children:"Streamlined medical billing and revenue cycle management to optimize healthcare finances."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Claims Processing"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Revenue Optimization"]}),e.jsxs(n,{children:[e.jsx(r,{size:14,strokeWidth:2})," Compliance Management"]})]})]})]})]}),e.jsxs(Be,{children:[e.jsx(a,{children:"Why Choose Our Healthcare Services"}),e.jsxs(Me,{children:[e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(Q,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Time Efficiency"}),e.jsx(w,{children:"Optimize patient care time and reduce administrative burden with our streamlined healthcare solutions."})]}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(U,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Cost Reduction"}),e.jsx(w,{children:"Lower operational costs through efficient resource allocation and optimized healthcare processes."})]}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(X,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Quality Assurance"}),e.jsx(w,{children:"Maintain the highest standards of patient care with our quality-focused healthcare solutions."})]})]})]}),e.jsxs(S,{background:"#ffffff",children:[e.jsx(a,{children:"Healthcare Innovations"}),e.jsxs(He,{children:[e.jsxs(W,{children:[e.jsx(P,{src:ee,alt:"Remote Patient Monitoring"}),e.jsxs(I,{children:[e.jsx(T,{children:"Remote Monitoring"}),e.jsx(B,{children:"Advanced systems for continuous tracking of patient health metrics from a distance, enabling proactive interventions."})]})]}),e.jsxs(W,{children:[e.jsx(P,{src:K,alt:"Healthcare Security"}),e.jsxs(I,{children:[e.jsx(T,{children:"Secure Health Data"}),e.jsx(B,{children:"State-of-the-art security protocols to protect sensitive patient information and ensure regulatory compliance."})]})]})]})]}),e.jsxs(Ce,{children:[e.jsx(H,{}),e.jsx(a,{children:"Our Healthcare Process"}),e.jsx(We,{children:"We follow a systematic approach to deliver exceptional healthcare services that meet the highest standards of quality and patient care."}),e.jsxs(Pe,{children:[e.jsx(Ie,{children:e.jsx("img",{src:Y,alt:"Healthcare Process",loading:"lazy"})}),e.jsxs(Te,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"01"}),e.jsxs(c,{children:[e.jsx(l,{children:"Assessment"}),e.jsx(m,{children:"We conduct a comprehensive evaluation of your healthcare needs and requirements."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"02"}),e.jsxs(c,{children:[e.jsx(l,{children:"Planning"}),e.jsx(m,{children:"We develop a customized healthcare solution tailored to your specific needs."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"03"}),e.jsxs(c,{children:[e.jsx(l,{children:"Implementation"}),e.jsx(m,{children:"We deploy our healthcare professionals and technology to execute the plan."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"04"}),e.jsxs(c,{children:[e.jsx(l,{children:"Monitoring"}),e.jsx(m,{children:"We continuously monitor performance and make adjustments to ensure optimal outcomes."})]})]})]})]})]}),e.jsxs(Ee,{children:[e.jsx(Oe,{}),e.jsxs(Ae,{children:[e.jsx(De,{children:"Ready to Transform Your Healthcare Operations?"}),e.jsx(Re,{children:"Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality."}),e.jsxs(Le,{href:"/contact/",children:["Contact Us Today",e.jsx(k,{size:18})]})]})]})]})},te=i.div`
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;
`,S=i.section`
  padding: 7rem 2rem;
  background-color: ${t=>t.background||"#fafbfc"};
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
  }
`,re=i.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #020617;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 8rem 0 5rem;
  }
`,ne=i.div`
  position: absolute;
  inset: 0;
  background-image: url(${t=>t.src});
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  opacity: 0.5;

  @media (max-width: 768px) {
    background-position: 65% center;
    opacity: 0.45;
  }
`,ae=i.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 100% 0%, rgba(139, 13, 42, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 0% 100%, rgba(2, 6, 23, 0.98) 0%, transparent 60%),
    linear-gradient(
      115deg,
      rgba(2, 6, 23, 0.97) 0%,
      rgba(2, 6, 23, 0.92) 30%,
      rgba(2, 6, 23, 0.78) 50%,
      rgba(2, 6, 23, 0.45) 70%,
      rgba(2, 6, 23, 0.15) 100%
    );

  @media (max-width: 1024px) {
    background: 
      radial-gradient(ellipse at 100% 0%, rgba(139, 13, 42, 0.1) 0%, transparent 40%),
      linear-gradient(
        115deg,
        rgba(2, 6, 23, 0.98) 0%,
        rgba(2, 6, 23, 0.95) 40%,
        rgba(2, 6, 23, 0.82) 65%,
        rgba(2, 6, 23, 0.5) 100%
      );
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.96) 0%,
      rgba(2, 6, 23, 0.92) 40%,
      rgba(2, 6, 23, 0.75) 100%
    );
  }
`,oe=i.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 6, 23, 0.4) 100%);
  pointer-events: none;
`,se=i.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 4rem 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,de=i.div`
  max-width: 720px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`,ce=i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`,le=i.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`,me=i.div`
  width: 60px;
  height: 1px;
  background: #8b0d2a;
`,he=i.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(4rem, 6vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #ffffff;

  span {
    display: block;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 300;
    margin-top: 0.25rem;
    font-size: 0.5em;
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 10vw, 4rem);
    line-height: 1;

    span {
      margin-top: 0.5rem;
    }
  }
`,pe=i.p`
  margin: 2.25rem 0 0;
  max-width: 560px;
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 1.75rem auto 0;
    max-width: 480px;
  }
`,ge=i.p`
  margin: 1.5rem 0 0;
  max-width: 560px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 1.25rem;
  border-left: 2px solid rgba(139, 13, 42, 0.5);

  @media (max-width: 768px) {
    margin: 1.25rem auto 0;
    max-width: 420px;
    padding-left: 1rem;
    font-size: 0.9rem;
  }
`,fe=i.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 2.5rem;
  }
`,xe=i.button`
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  height: 64px;
  padding: 0 2.5rem;
  background: #8b0d2a;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  &:hover {
    background: #9f1239;
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(139, 13, 42, 0.35);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    height: 56px;
  }
`,ue=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  margin-left: 2rem;

  @media (max-width: 640px) {
    flex-direction: row;
    gap: 0.5rem;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-left: 0;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
`,be=i.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`,ve=i.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.25rem;
  letter-spacing: 0.01em;

  @media (max-width: 640px) {
    margin-top: 0;
  }
`,H=i.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto 5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 13, 42, 0.2), transparent);

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,a=i.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0a1628;
  margin-bottom: 4rem;
  text-align: center;
  line-height: 1.15;
`,je=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,we=i.div``,ye=i.div`
  display: flex;
  justify-content: center;
`,ze=i.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`,C=i.p`
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.72;
  color: #6b7280;
  margin-bottom: 1rem;
  scroll-margin-top: 120px;

  @media (max-width: 768px) {
    font-size: 1rem;
    scroll-margin-top: 110px;
  }
`,ke=i.section`
  padding: 7rem 2rem;
  background: #fafbfc;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Se=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,h=i.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e9ed;
  padding: 2rem 1.75rem 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #8b0d2a;
    box-shadow: 0 20px 50px rgba(10, 22, 40, 0.1);
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem 1.5rem;
  }
`,g=i.span`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #8b0d2a;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`,f=i.div`
  width: 48px;
  height: 48px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${h}:hover & {
    background: #8b0d2a;
    border-color: #8b0d2a;
    color: #ffffff;
    transform: scale(1.05);
  }
`,x=i.h3`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #0a1628;
  line-height: 1.25;
  letter-spacing: -0.01em;
`,u=i.p`
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5a6578;
  flex-grow: 1;
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e9ed;
`,n=i.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #5a6578;
  line-height: 1.5;
  
  svg {
    color: #8b0d2a;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`,He=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,W=i.div`
  position: relative;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
`,P=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,I=i.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.74) 100%);
  color: #ffffff;
`,T=i.h3`
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
  font-family: var(--font-heading);
`,B=i.p`
  font-size: 0.92rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,Ce=i.section`
  padding: 7rem 2rem;
  background: #ffffff;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,We=i.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`,Pe=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ie=i.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`,Te=i.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,s=i.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: #fafbfc;
  border: 1px solid #e5e9ed;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #8b0d2a;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(10, 22, 40, 0.06);
  }
`,d=i.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #8b0d2a;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  padding: 0.25rem 0.5rem;
  background: rgba(139, 13, 42, 0.1);
  flex-shrink: 0;
`,c=i.div`
  flex: 1;
`,l=i.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`,m=i.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`,Be=i.section`
  padding: 7rem 2rem;
  background: #fafbfc;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139, 13, 42, 0.15), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Me=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,p=i.div`
  position: relative;
  display: flex;
  gap: 1rem;
  background: #ffffff;
  padding: 1.75rem 1.5rem;
  border: 1px solid #e5e9ed;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: #8b0d2a;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: #8b0d2a;
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.08);

    &::before {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`,v=i.div`
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${p}:hover & {
    background: #8b0d2a;
    border-color: #8b0d2a;
    color: #ffffff;
  }
`,j=i.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`,w=i.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`,Ee=i.section`
  padding: 7rem 2rem;
  background: #020617;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Oe=i.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(139, 13, 42, 0.08) 0%, transparent 60%),
    url(${Z}) center / cover no-repeat;
  opacity: 0.12;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.95) 0%,
      rgba(2, 6, 23, 0.85) 50%,
      rgba(2, 6, 23, 0.95) 100%
    );
  }
`,Ae=i.div`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: 3.5rem 3rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`,De=i.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
`,Re=i.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`,Le=i.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 60px;
  padding: 0 3rem;
  background: #8b0d2a;
  color: #ffffff;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

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
    transition: left 0.5s ease;
  }

  &:hover {
    background: #9f1239;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(139, 13, 42, 0.4);

    &::before {
      left: 100%;
    }
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`,$e=()=>e.jsx(qe,{children:e.jsx(ie,{})}),qe=i.div`
  width: 100%;
`;function Je(){return y.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Fe,{id:"healthcare",children:[e.jsx(R,{title:"Healthcare Support Services | Hyacinth Industries LLC",description:"Healthcare support services from Hyacinth Industries LLC focused on reliable assistance, operational excellence, and improved patient-service workflows.",canonicalPath:"/healthcare/"}),e.jsx(L,{}),e.jsx($,{}),e.jsx($e,{}),e.jsx(q,{})]})}const Fe=i.div`
  width: 100vw;
  padding-top: 0;
`;export{Je as default};
