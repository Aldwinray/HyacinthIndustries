import{m as R,j as e}from"./motion-Cy3Fut2F.js";import{r as z}from"./vendor-BQFpGxKL.js";import{d as t}from"./styled-CFUkIykv.js";import{S as L,T as $,a as G,F as V}from"./index-nbaXq9k7.js";import"./ImageSlider-C3Ytptzf.js";import{H as q}from"./healthcare-C4VecUyJ.js";import{P as F}from"./process-DpJ0_MSu.js";import{g as C,K as Y,n as i,N,O as Q,i as U,z as X,J as _}from"./icons-BMgoPnMN.js";t.div`
  background-color: transparent;
  width: 250px;
  min-width: 250px; 
  height: 200px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;t.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden; /* Prevent flickering */
`;const T=t.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  will-change: transform;
`;t(T)`
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  h2{
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;t(T)`
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
`;t.div`
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
`;t.div`
  .icon-container {
    width: 80px; /* Adjust this value as needed */
    height: 80px; /* Adjust this value as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto; /* Center the icon container */
  }
`;t.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;t(R.div)`
  font-family: "Lexend Light", sans-serif;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;t.button`
  width: 100%;
  padding: 1.5rem;
  background: ${r=>r.active?"#1a1a1a":"#2a2a2a"};
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
    background: ${r=>r.active?"#1a1a1a":"#333333"};
  }

  &::after {
    content: '${r=>r.active?"−":"+"}';
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    right: 1.5rem;
  }
`;t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;const J="/assets/stock2-WBaQqvHM.webp",K="/assets/abstract-B8U69tkz.webp",Z="/assets/security-_SpQtk3V.webp",ee="/assets/Healthcare-ME_IVVT7.webp",te=K,ie=()=>{const[r,B]=z.useState(()=>window.innerWidth<800);return z.useEffect(()=>{const o=()=>{B(window.innerWidth<800)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),e.jsxs(re,{children:[e.jsxs(ne,{"aria-labelledby":"healthcare-hero-title",children:[e.jsx(ae,{src:q,"aria-hidden":"true"}),e.jsx(oe,{}),e.jsx(se,{}),e.jsx(de,{children:e.jsxs(ce,{children:[e.jsxs(le,{children:[e.jsx(me,{"aria-hidden":"true"})," Industry Solutions"]}),e.jsxs(pe,{id:"healthcare-hero-title",children:["Healthcare ",e.jsx(he,{children:"Solutions"})]}),e.jsx(ge,{children:"Advanced medical support and technology services designed for reliable care delivery and stronger operations."}),e.jsx(xe,{children:"End-to-end support for virtual care, administration, billing, and compliance operations."}),e.jsxs(fe,{children:[e.jsxs(ue,{onClick:o=>{o.preventDefault();const k=document.getElementById("healthcare-overview"),M=115;if(k){const D=k.getBoundingClientRect().top+window.pageYOffset-M;window.scrollTo({top:D,behavior:"smooth"})}},children:["Explore Our Solutions",e.jsx(C,{size:18})]}),e.jsxs(be,{children:[e.jsx(ve,{children:"3 Core Services"}),e.jsx(je,{children:"Enterprise-grade support"})]})]})]})})]}),e.jsxs(S,{id:"healthcare-overview",background:"#ffffff",children:[e.jsx(a,{children:"Healthcare Industry Overview"}),e.jsxs(we,{children:[e.jsxs(ye,{children:[e.jsx(E,{id:"healthcare-industry-overview",children:"The healthcare industry is undergoing a profound transformation driven by technological advancements, changing patient expectations, and the need for more efficient care delivery models. As healthcare providers face increasing pressure to deliver high-quality care while managing costs, innovative solutions are becoming essential."}),e.jsx(E,{children:"Our comprehensive healthcare solutions are designed to address these challenges by leveraging cutting-edge technology, streamlined processes, and specialized expertise to help healthcare organizations thrive in this evolving landscape."})]}),e.jsx(ze,{children:e.jsx(ke,{src:J,alt:"Healthcare professional using modern medical technology and digital health systems"})})]})]}),e.jsxs(Ce,{children:[e.jsx(H,{}),e.jsx(a,{children:"Our Healthcare Services"}),e.jsxs(Se,{children:[e.jsxs(h,{children:[e.jsx(g,{children:"01"}),e.jsx(x,{children:e.jsx(Y,{size:24,strokeWidth:1.5,"aria-label":"Virtual healthcare and telehealth services"})}),e.jsx(f,{children:"Virtual Healthcare"}),e.jsx(u,{children:"Comprehensive telehealth solutions including remote consultations, monitoring, and digital health platforms."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Remote Consultations"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Patient Monitoring"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Digital Health Platforms"]})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:"02"}),e.jsx(x,{children:e.jsx(N,{size:24,strokeWidth:1.5,"aria-label":"Healthcare administrative support services"})}),e.jsx(f,{children:"Administrative Support"}),e.jsx(u,{children:"Streamlined administrative support for healthcare organizations, including billing, documentation, and compliance."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Billing Management"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Documentation Support"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Compliance Management"]})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:"03"}),e.jsx(x,{children:e.jsx(Q,{size:24,strokeWidth:1.5})}),e.jsx(f,{children:"Medical Billing"}),e.jsx(u,{children:"Streamlined medical billing and revenue cycle management to optimize healthcare finances."}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Claims Processing"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Revenue Optimization"]}),e.jsxs(n,{children:[e.jsx(i,{size:14,strokeWidth:2})," Compliance Management"]})]})]})]})]}),e.jsxs(We,{children:[e.jsx(a,{children:"Why Choose Our Healthcare Services"}),e.jsxs(Te,{children:[e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(U,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Time Efficiency"}),e.jsx(w,{children:"Optimize patient care time and reduce administrative burden with our streamlined healthcare solutions."})]}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(X,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Cost Reduction"}),e.jsx(w,{children:"Lower operational costs through efficient resource allocation and optimized healthcare processes."})]}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(_,{size:24,strokeWidth:1.5})}),e.jsx(j,{children:"Quality Assurance"}),e.jsx(w,{children:"Maintain the highest standards of patient care with our quality-focused healthcare solutions."})]})]})]}),e.jsxs(S,{background:"#ffffff",children:[e.jsx(a,{children:"Healthcare Innovations"}),e.jsxs(He,{children:[e.jsxs(I,{children:[e.jsx(O,{src:te,alt:"Remote patient monitoring dashboard displaying vital signs and health metrics"}),e.jsxs(A,{children:[e.jsx(P,{children:"Remote Monitoring"}),e.jsx(W,{children:"Advanced systems for continuous tracking of patient health metrics from a distance, enabling proactive interventions."})]})]}),e.jsxs(I,{children:[e.jsx(O,{src:Z,alt:"Healthcare data security with encryption and HIPAA compliance protection"}),e.jsxs(A,{children:[e.jsx(P,{children:"Secure Health Data"}),e.jsx(W,{children:"State-of-the-art security protocols to protect sensitive patient information and ensure regulatory compliance."})]})]})]})]}),e.jsxs(Ee,{children:[e.jsx(H,{}),e.jsx(a,{children:"Our Healthcare Process"}),e.jsx(Ie,{children:"We follow a systematic approach to deliver exceptional healthcare services that meet the highest standards of quality and patient care."}),e.jsxs(Oe,{children:[e.jsx(Ae,{children:e.jsx("img",{src:F,alt:"Healthcare administrative process workflow from assessment to monitoring",loading:"lazy"})}),e.jsxs(Pe,{children:[e.jsxs(s,{children:[e.jsx(d,{children:"01"}),e.jsxs(c,{children:[e.jsx(l,{children:"Assessment"}),e.jsx(m,{children:"We conduct a comprehensive evaluation of your healthcare needs and requirements."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"02"}),e.jsxs(c,{children:[e.jsx(l,{children:"Planning"}),e.jsx(m,{children:"We develop a customized healthcare solution tailored to your specific needs."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"03"}),e.jsxs(c,{children:[e.jsx(l,{children:"Implementation"}),e.jsx(m,{children:"We deploy our healthcare professionals and technology to execute the plan."})]})]}),e.jsxs(s,{children:[e.jsx(d,{children:"04"}),e.jsxs(c,{children:[e.jsx(l,{children:"Monitoring"}),e.jsx(m,{children:"We continuously monitor performance and make adjustments to ensure optimal outcomes."})]})]})]})]})]}),e.jsxs(Be,{children:[e.jsx(Me,{}),e.jsxs(De,{children:[e.jsx(Re,{children:"Ready to Transform Your Healthcare Operations?"}),e.jsx(Le,{children:"Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality."}),e.jsxs($e,{href:"/contact/",children:["Contact Us Today",e.jsx(C,{size:18})]}),e.jsxs(Ge,{children:[e.jsxs(y,{children:[e.jsx(i,{size:16}),e.jsx("span",{children:"HIPAA Compliant"})]}),e.jsxs(y,{children:[e.jsx(i,{size:16}),e.jsx("span",{children:"Revenue Cycle Experts"})]}),e.jsxs(y,{children:[e.jsx(i,{size:16}),e.jsx("span",{children:"Telehealth Solutions"})]})]})]})]})]})},re=t.div`
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;
`,S=t.section`
  padding: 7rem 2rem;
  background-color: ${r=>r.background||"#fafbfc"};
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
  }
`,ne=t.section`
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
`,ae=t.div`
  position: absolute;
  inset: 0;
  background-image: url(${r=>r.src});
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  opacity: 0.5;

  @media (max-width: 768px) {
    background-position: 65% center;
    opacity: 0.45;
  }
`,oe=t.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 100% 0%, rgba(158, 28, 36, 0.12) 0%, transparent 50%),
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
      radial-gradient(ellipse at 100% 0%, rgba(158, 28, 36, 0.1) 0%, transparent 40%),
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
`,se=t.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 6, 23, 0.4) 100%);
  pointer-events: none;
`,de=t.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 4rem 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,ce=t.div`
  max-width: 720px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`,le=t.div`
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
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,me=t.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C9A227;
`,he=t.span`
  background: linear-gradient(135deg, #C9A227 0%, #e8d58a 50%, #C9A227 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,pe=t.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    line-height: 1.1;

    span {
      margin-top: 0.5rem;
    }
  }
`,ge=t.p`
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
`,xe=t.p`
  margin: 1.5rem 0 0;
  max-width: 560px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 1.25rem;
  border-left: 2px solid rgba(158, 28, 36, 0.5);

  @media (max-width: 768px) {
    margin: 1.25rem auto 0;
    max-width: 420px;
    padding-left: 1rem;
    font-size: 0.9rem;
  }
`,fe=t.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 2.5rem;
  }
`,ue=t.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 52px;
  padding: 0 1.75rem;
  background: #9E1C24;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);
  flex-shrink: 0;

  &:hover {
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    height: 48px;
    font-size: 0.875rem;
  }
`,be=t.div`
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
`,ve=t.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`,je=t.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.25rem;
  letter-spacing: 0.01em;

  @media (max-width: 640px) {
    margin-top: 0;
  }
`,H=t.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto 5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(158, 28, 36, 0.2), transparent);

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`,a=t.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0a1628;
  margin-bottom: 4rem;
  text-align: center;
  line-height: 1.15;
`,we=t.div`
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
`,ye=t.div``,ze=t.div`
  display: flex;
  justify-content: center;
`,ke=t.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`,E=t.p`
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
`,Ce=t.section`
  padding: 7rem 2rem;
  background: #fafbfc;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Se=t.div`
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
`,h=t.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e9ed;
  padding: 2rem 1.75rem 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #9E1C24;
    box-shadow: 0 20px 50px rgba(10, 22, 40, 0.1);
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem 1.5rem;
  }
`,g=t.span`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #9E1C24;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`,x=t.div`
  width: 48px;
  height: 48px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #9E1C24;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${h}:hover & {
    background: #9E1C24;
    border-color: #9E1C24;
    color: #ffffff;
    transform: scale(1.05);
  }
`,f=t.h3`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #0a1628;
  line-height: 1.25;
  letter-spacing: -0.01em;
`,u=t.p`
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5a6578;
  flex-grow: 1;
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e9ed;
`,n=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #5a6578;
  line-height: 1.5;
  
  svg {
    color: #9E1C24;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`,He=t.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,I=t.div`
  position: relative;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
`,O=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,A=t.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.74) 100%);
  color: #ffffff;
`,P=t.h3`
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
  font-family: var(--font-heading);
`,W=t.p`
  font-size: 0.92rem;
  line-height: 1.6;
  font-family: var(--font-body);
`,Ee=t.section`
  padding: 7rem 2rem;
  background: #ffffff;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Ie=t.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`,Oe=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ae=t.div`
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
`,Pe=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,s=t.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: #fafbfc;
  border: 1px solid #e5e9ed;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #9E1C24;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(10, 22, 40, 0.06);
  }
`,d=t.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #9E1C24;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  padding: 0.25rem 0.5rem;
  background: rgba(158, 28, 36, 0.1);
  flex-shrink: 0;
`,c=t.div`
  flex: 1;
`,l=t.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`,m=t.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`,We=t.section`
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
    background: linear-gradient(90deg, transparent, rgba(158, 28, 36, 0.15), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Te=t.div`
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
`,p=t.div`
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
    background: #9E1C24;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: #9E1C24;
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.08);

    &::before {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`,v=t.div`
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #9E1C24;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${p}:hover & {
    background: #9E1C24;
    border-color: #9E1C24;
    color: #ffffff;
  }
`,j=t.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`,w=t.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`,Be=t.section`
  padding: 7rem 2rem;
  background: #020617;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`,Me=t.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(158, 28, 36, 0.08) 0%, transparent 60%),
    url(${ee}) center / cover no-repeat;
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
`,De=t.div`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: 3.5rem 3rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(201, 162, 39, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-shadow: 
    0 0 60px rgba(158, 28, 36, 0.15),
    0 0 100px rgba(201, 162, 39, 0.08);

  /* Gold corner accents */
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 40px;
    height: 40px;
    border-top: 2px solid #C9A227;
    border-left: 2px solid #C9A227;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 40px;
    height: 40px;
    border-bottom: 2px solid #C9A227;
    border-right: 2px solid #C9A227;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`,Re=t.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
`,Le=t.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`,$e=t.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 56px;
  padding: 0 2.5rem;
  background: #9E1C24;
  color: #ffffff;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);
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
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);

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
`,Ge=t.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`,y=t.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: #C9A227;
  }
`,Ve=()=>e.jsx(qe,{children:e.jsx(ie,{})}),qe=t.div`
  width: 100%;
`,Fe={"@context":"https://schema.org","@type":"Service",serviceType:"Healthcare Support",provider:{"@type":"Organization",name:"Hyacinth Industries LLC",url:"https://hyacinthindustriesllc.com"},areaServed:"Global",hasOfferCatalog:{"@type":"OfferCatalog",name:"Healthcare Services",itemListElement:[{"@type":"Offer",itemOffered:{"@type":"Service",name:"Virtual Healthcare & Telehealth"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Healthcare Administrative Support"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Medical Billing & Coding"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Revenue Cycle Management"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Remote Patient Monitoring"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"HIPAA Compliant Data Security"}}]}};function et(){return z.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Ye,{id:"healthcare",children:[e.jsx(L,{title:"Healthcare Support Services | Hyacinth Industries LLC",description:"HIPAA-compliant healthcare support including medical billing, revenue cycle management, telehealth coordination, and patient scheduling. Reliable assistance for healthcare providers.",canonicalPath:"/healthcare/",image:"/og-healthcare.jpg",structuredData:Fe}),e.jsx($,{}),e.jsx(G,{}),e.jsx(Ve,{}),e.jsx(V,{})]})}const Ye=t.div`
  width: 100vw;
  padding-top: 0;
`;export{et as default};
