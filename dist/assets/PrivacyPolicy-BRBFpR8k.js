import{j as e}from"./motion-Cy3Fut2F.js";import{r as f}from"./vendor-BQFpGxKL.js";import{d as r}from"./styled-CFUkIykv.js";import{S as Xe,T as Ze,a as ei,H as ii,F as ri,B as ni}from"./index-MTnuMEob.js";import{g as ti,p as si}from"./icons-BMgoPnMN.js";const w=[{id:"introduction",label:"1. Introduction",shortTitle:"Introduction",number:"01"},{id:"information-we-collect",label:"2. Information We Collect",shortTitle:"Information We Collect",number:"02"},{id:"artificial-intelligence-features",label:"3. Artificial Intelligence Features",shortTitle:"Artificial Intelligence Features",number:"03"},{id:"how-we-use-information",label:"4. How We Use Information",shortTitle:"How We Use Information",number:"04"},{id:"telephony-systems",label:"5. Telephony Systems & Call Recording",shortTitle:"Telephony Systems & Call Recording",number:"05"},{id:"disclosure-of-information",label:"6. Disclosure of Information",shortTitle:"Disclosure of Information",number:"06"},{id:"data-processing-agreements",label:"7. Data Processing Agreements",shortTitle:"Data Processing Agreements",number:"07"},{id:"data-security",label:"8. Data Security",shortTitle:"Data Security",number:"08"},{id:"data-breach-notification",label:"9. Data Breach Notification",shortTitle:"Data Breach Notification",number:"09"},{id:"data-retention",label:"10. Data Retention",shortTitle:"Data Retention",number:"10"},{id:"industry-specific-compliance",label:"11. Industry-Specific Compliance",shortTitle:"Industry-Specific Compliance",number:"11"},{id:"your-privacy-rights",label:"12. Your Privacy Rights",shortTitle:"Your Privacy Rights",number:"12"},{id:"state-specific",label:"13. State-Specific Privacy Rights",shortTitle:"State-Specific Privacy Rights",number:"13"},{id:"international-data-transfers",label:"14. International Data Transfers",shortTitle:"International Data Transfers",number:"14"},{id:"childrens-privacy",label:"15. Children's Privacy",shortTitle:"Children's Privacy",number:"15"},{id:"cookies",label:"16. Cookies & Tracking Technologies",shortTitle:"Cookies & Tracking Technologies",number:"16"},{id:"this-policy",label:"17. Changes to This Policy",shortTitle:"Changes to This Policy",number:"17"},{id:"contact-us",label:"18. Contact Us",shortTitle:"Contact Us",number:"18"},{id:"data-sharing",label:"Data Sharing",shortTitle:"Data Sharing",number:"19"},{id:"messaging-terms",label:"Messaging Terms & Conditions",shortTitle:"Messaging Terms & Conditions",number:"20"}],oi=["Operationally necessary data collection only","No sale or sharing of personal data for advertising","Clear retention, security, and rights request practices"];function Zi(){var O,z,B,E,M,L,N,F,U,$,J,G,Y,V,K,_,Q,X,Z,ee,ie,re,ne,te,se,oe,ae,le,ce,de,he,pe,me,ue,fe,ge,xe,ye,be,je,we,ve,Ce,Se,Pe,Te,ke,Re,Ie,Ae,qe,We,De,He,Oe,ze,Be,Ee,Me,Le;const u=f.useRef(null),C=f.useRef(null),P=f.useRef(null),R=f.useRef({}),v=f.useRef(null),I=f.useRef(0),A=f.useRef({position:"relative",top:"0",left:"0",width:"100%"}),[Ge,Ye]=f.useState({}),[q,Ve]=f.useState(0),[T,W]=f.useState(w[0].id),[D,H]=f.useState(w[0].id),[Ke,_e]=f.useState(!1);f.useEffect(()=>{window.scrollTo(0,0)},[]),f.useEffect(()=>{const t=(p,b)=>{I.current!==b&&(I.current=b,Ve(b));const y=A.current;(y.position!==p.position||y.top!==p.top||y.left!==p.left||y.width!==p.width)&&(A.current=p,Ye(p))},h=()=>{if(!u.current||!C.current||!P.current)return;if(window.innerWidth<=980){t({},0);return}const p=120,b=u.current.getBoundingClientRect(),y=C.current.getBoundingClientRect(),j=P.current.offsetHeight,Qe=C.current.offsetWidth,S=window.scrollY,Ne=S+b.top,Fe=S+b.bottom;if(S+p<=Ne){t({position:"relative",top:"0",left:"0",width:"100%"},j);return}if(S+p+j>=Fe){t({position:"absolute",top:`${Math.max(0,Fe-Ne-j)}px`,left:"0",width:"100%"},j);return}t({position:"fixed",top:`${p}px`,left:`${y.left}px`,width:`${Qe}px`},j)},x=()=>{v.current===null&&(v.current=window.requestAnimationFrame(()=>{v.current=null,h()}))};return h(),window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("resize",x,{passive:!0}),()=>{v.current!==null&&window.cancelAnimationFrame(v.current),window.removeEventListener("scroll",x),window.removeEventListener("resize",x)}},[]),f.useEffect(()=>{const t=w.map(x=>document.getElementById(x.id)).filter(Boolean);if(!t.length)return;const h=new IntersectionObserver(x=>{var b;const p=x.filter(y=>y.isIntersecting).sort((y,j)=>j.intersectionRatio-y.intersectionRatio)[0];(b=p==null?void 0:p.target)!=null&&b.id&&(W(p.target.id),H(p.target.id))},{rootMargin:"-20% 0px -55% 0px",threshold:[.1,.25,.4,.6]});return t.forEach(x=>h.observe(x)),()=>h.disconnect()},[]),f.useEffect(()=>{if(window.innerWidth<=980)return;const t=R.current[T];t&&t.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[T]),f.useEffect(()=>{const t=document.querySelector("footer");if(!t)return;const h=new IntersectionObserver(([x])=>{_e(x.isIntersecting)},{threshold:.05});return h.observe(t),()=>h.disconnect()},[]);const k=t=>{H(t),W(t);const h=document.getElementById(t);if(h){const x=window.innerWidth<=980?110:130,p=h.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:p,behavior:"smooth"})}},i=t=>w.find(h=>h.id===t);return e.jsxs(ai,{children:[e.jsx(Xe,{title:"Privacy Policy | Hyacinth Industries LLC",description:"Read the Hyacinth Industries LLC Privacy Policy, including how personal information is collected, used, disclosed, retained, and protected.",canonicalPath:"/privacy-policy/",type:"article"}),e.jsx(Ze,{}),e.jsx(ei,{}),e.jsxs(li,{children:[e.jsx(ci,{}),e.jsxs(di,{children:[e.jsxs(hi,{children:[e.jsx(Ue,{}),"Legal"]}),e.jsxs(pi,{children:["Privacy,",e.jsx("br",{}),e.jsx(mi,{children:"transparency, and protection."})]}),e.jsx(ui,{children:"This policy explains how Hyacinth Industries LLC collects, uses, discloses, retains, and protects information across our services, platforms, and business operations."}),e.jsxs(fi,{children:[e.jsx($e,{children:"Effective Date: March 17, 2026"}),e.jsx($e,{children:"Last Revised: March 17, 2026"})]}),e.jsx(gi,{children:e.jsxs(xi,{href:"/HyacinthIndustries_PrivacyPolicy.pdf",target:"_blank",rel:"noopener noreferrer",children:["Download PDF Version",e.jsx(ti,{size:16})]})}),e.jsxs(yi,{children:[e.jsxs(bi,{children:[e.jsx(ji,{children:"Hyacinth Industries LLC"}),e.jsx(wi,{children:"Privacy practices designed to support professional services, platform operations, and responsible data handling."})]}),e.jsx(vi,{children:e.jsx(Ci,{src:ii,alt:"Hyacinth Industries LLC logo"})})]})]})]}),e.jsx(Si,{children:e.jsxs(Pi,{children:[e.jsxs(Ti,{children:[e.jsxs(ki,{children:[e.jsx(Ue,{}),"Privacy Overview"]}),e.jsx(Ri,{children:"Built for clarity, not hidden complexity."}),e.jsx(Ii,{children:"Our approach is straightforward: collect only what is operationally necessary, use it for legitimate business and service purposes, and avoid secondary uses that do not support the user or client relationship."})]}),e.jsx(Ai,{children:oi.map(t=>e.jsxs(qi,{children:[e.jsx(Wi,{children:e.jsx(si,{size:16})}),e.jsx(Di,{children:e.jsx(Hi,{children:t})})]},t))})]})}),e.jsx(Oi,{children:e.jsxs(zi,{children:[e.jsx(Ji,{$isHidden:Ke,children:e.jsx(Je,{"aria-label":"Jump to a privacy policy section",value:D,onChange:t=>k(t.target.value),children:w.map(t=>e.jsx("option",{value:t.id,children:t.label},t.id))})}),e.jsxs(Bi,{ref:u,children:[e.jsx(Mi,{ref:C,style:q?{minHeight:`${q}px`}:void 0,children:e.jsxs(Li,{ref:P,style:Ge,children:[e.jsx(Ni,{children:"On this page"}),e.jsx(Je,{"aria-label":"Jump to a privacy policy section",value:D,onChange:t=>k(t.target.value),children:w.map(t=>e.jsx("option",{value:t.id,children:t.label},t.id))}),e.jsx(Fi,{children:w.map(t=>e.jsx(Ui,{children:e.jsx($i,{href:`#${t.id}`,$isActive:T===t.id,ref:h=>{h&&(R.current[t.id]=h)},onClick:h=>{h.preventDefault(),k(t.id)},children:t.label})},t.id))})]})}),e.jsxs(Ei,{children:[e.jsxs(s,{id:"introduction",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(O=i("introduction"))==null?void 0:O.number]}),e.jsx(c,{children:(z=i("introduction"))==null?void 0:z.shortTitle})]}),e.jsx(d,{children:(B=i("introduction"))==null?void 0:B.number})]}),e.jsx(n,{children:'Hyacinth Industries LLC ("Hyacinth," "we," "our," or "us") is a business process outsourcing (BPO) company serving professional industries. We provide outsourced business functions supported by our proprietary technology suite, which includes a CRM platform with AI-assisted features, an accounting system, an enterprise resource planning (ERP) platform, and telephony and communications systems.'}),e.jsx(n,{children:"This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Our BPO services performed on behalf of client organizations;"}),e.jsx("li",{children:"Our proprietary CRM, accounting, and ERP platforms;"}),e.jsx("li",{children:"Our telephony and phone-based communication systems;"}),e.jsx("li",{children:"Our website and digital communications; and"}),e.jsx("li",{children:"Our relationships with clients, vendors, employees, and business contacts."})]}),e.jsx(n,{children:"Our core commitment: Hyacinth collects and retains only the information strictly necessary for users to operate our platforms and for us to deliver our services. We do not retain data behind the scenes, track users for secondary purposes, or sell, license, or otherwise monetize personal information in any form."}),e.jsx(n,{children:"Residents of California, Indiana, Kentucky, Rhode Island, Virginia, Colorado, Connecticut, Texas, Florida, and other states with applicable privacy laws have additional rights described in Section 12."})]}),e.jsxs(s,{id:"information-we-collect",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(E=i("information-we-collect"))==null?void 0:E.number]}),e.jsx(c,{children:(M=i("information-we-collect"))==null?void 0:M.shortTitle})]}),e.jsx(d,{children:(L=i("information-we-collect"))==null?void 0:L.number})]}),e.jsx(n,{children:"We limit data collection to what is operationally necessary. We do not build profiles, aggregate data across clients, or retain information beyond the purposes described below."}),e.jsx(g,{children:"2.1 Through Our BPO Services"}),e.jsx(n,{children:"When performing services on behalf of clients, we process personal information provided by or directed to us by those clients. This may include:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Contact and account information (names, addresses, phone numbers, email addresses);"}),e.jsx("li",{children:"Customer records entered into or managed within our CRM platform;"}),e.jsx("li",{children:"Financial and transactional data processed through our accounting system;"}),e.jsx("li",{children:"Business records and workflow data within our ERP platform;"}),e.jsx("li",{children:"Call recordings and interaction logs from our telephony systems, where legally permitted and disclosed; and"}),e.jsx("li",{children:"Identity or verification information required for specific service functions."})]}),e.jsx(n,{children:"We process this information solely as directed by our clients and only for the purpose of delivering agreed services. We do not retain, aggregate, or use this information for any secondary purpose."}),e.jsx(g,{children:"2.2 From Platform Users"}),e.jsx(n,{children:"Users authorized to access our CRM, ERP, or accounting platforms provide:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Login credentials and account profile information;"}),e.jsx("li",{children:"Data entered into the platform in the course of their work (records, notes, transactions); and"}),e.jsx("li",{children:"Usage activity within the platform necessary for session management and system function."})]}),e.jsx(n,{children:"Platform data is used exclusively to enable the user to operate the system. We do not analyze user behavior for marketing, sell usage data, or retain data beyond what is required for system operation and legal compliance."}),e.jsx(g,{children:"2.3 From Clients, Vendors & Business Contacts"}),e.jsxs(m,{children:[e.jsx("li",{children:"Business contact information (names, titles, company, email, phone numbers);"}),e.jsx("li",{children:"Contract and billing information for service agreements; and"}),e.jsx("li",{children:"Communications in connection with our business relationship."})]}),e.jsx(g,{children:"2.4 From Employees & Job Applicants"}),e.jsxs(m,{children:[e.jsx("li",{children:"Job applicant information (resume, work history, references, contact details);"}),e.jsx("li",{children:"Employee information necessary for onboarding, payroll, benefits, and HR administration (name, address, Social Security Number, banking details, benefits elections);"}),e.jsx("li",{children:"Performance and attendance records maintained in our ERP system; and"}),e.jsx("li",{children:"Emergency contact information."})]}),e.jsx(n,{children:"Employee data is collected and retained only as required by law and for active employment administration. It is not shared beyond HR, payroll, and legal compliance purposes."}),e.jsx(g,{children:"2.5 Automatically Collected Technical Data"}),e.jsx(n,{children:"Our platforms and website may automatically collect minimal technical data for system functionality, including:"}),e.jsxs(m,{children:[e.jsx("li",{children:"IP addresses and session identifiers (for authentication and access control);"}),e.jsx("li",{children:"Browser and device type (for compatibility); and"}),e.jsx("li",{children:"Platform access logs (for security and error resolution)."})]}),e.jsx(n,{children:"We do not use third-party advertising trackers, behavioral analytics platforms, session replay tools, or retargeting technologies on our platforms or website."})]}),e.jsxs(s,{id:"artificial-intelligence-features",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(N=i("artificial-intelligence-features"))==null?void 0:N.number]}),e.jsx(c,{children:(F=i("artificial-intelligence-features"))==null?void 0:F.shortTitle})]}),e.jsx(d,{children:(U=i("artificial-intelligence-features"))==null?void 0:U.number})]}),e.jsx(n,{children:"Our CRM platform incorporates AI-assisted features to help users work more effectively. This section explains how those features operate and, importantly, what they do not do."}),e.jsx(g,{children:"3.1 What Our AI Does"}),e.jsx(n,{children:"The AI features within our CRM assist authorized platform users by:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Suggesting next actions, drafting responses, or summarizing records based on data the user has already entered into the platforms;"}),e.jsx("li",{children:"Organizing or categorizing records to improve workflow efficiency; and"}),e.jsx("li",{children:"Flagging incomplete or inconsistent data entries for user review."})]}),e.jsx(g,{children:"3.2 What Our AI Does Not Do"}),e.jsx(n,{children:"Our CRM's AI features operate only on data within the active user session and platform environment. Specifically:"}),e.jsxs(m,{children:[e.jsx("li",{children:"We do not use client data to train AI models for use outside of the contracted service;"}),e.jsx("li",{children:"We do not sell or share CRM data with AI vendors for their own purposes;"}),e.jsx("li",{children:"No automated decision with significant consequences is taken without human review and user confirmation; and"}),e.jsx("li",{children:"AI activity within the platform is logged only to the extent necessary for system troubleshooting and security."})]}),e.jsx(g,{children:"3.3 Automated Decision-Making Disclosure (CCPA 2026 / ADMT)"}),e.jsx(n,{children:"Pursuant to California's 2026 CCPA regulations on Automated Decision-Making Technology (ADMT), we disclose the following:"}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Purpose:"})," AI features in our CRM are used to improve workflow efficiency for authorized platform users. They are not used to make decisions about consumers' eligibility for credit, employment, insurance, housing, or other significant determinations."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Logic:"})," AI suggestions are generated based on data the user has input into the current platform session and are surfaced to assist the user's own judgment."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Human Oversight:"})," All AI-generated outputs require affirmative user action to take effect. No action is taken automatically without user confirmation."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Opt-Out:"})," Users who wish disable AI-assisted features may contact their account administrator or email ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]})]}),e.jsxs(s,{id:"how-we-use-information",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",($=i("how-we-use-information"))==null?void 0:$.number]}),e.jsx(c,{children:(J=i("how-we-use-information"))==null?void 0:J.shortTitle})]}),e.jsx(d,{children:(G=i("how-we-use-information"))==null?void 0:G.number})]}),e.jsx(n,{children:"We use personal information only for the following purposes. We do not use information for purposes beyond what is described here, and we do not use personal information for advertising, behavioral profiling, data brokerage, or any commercial purpose beyond direct service delivery."}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Service Delivery:"})," To perform BPO services and fulfill obligations under client agreements;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Platform Operation:"})," To operate, maintain, and support our CRM, accounting, and ERP platforms;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Telephony & Communications:"})," To manage phone systems, record calls where legally required, and respond to inquiries;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Billing & Accounting:"})," To process payments, generate invoices, and maintain required financial records;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Security & System Integrity:"})," To detect unauthorized access, protect our systems, and investigate incidents;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Legal Compliance:"})," To comply with applicable laws, regulations, subpoenas, and lawful government requests;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"HR & Employment:"})," To manage employee and applicant relationships, payroll, and benefits; and"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Business Operations:"})," To manage client, vendor, and partner relationships."]})]})]}),e.jsxs(s,{id:"telephony-systems",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Y=i("telephony-systems"))==null?void 0:Y.number]}),e.jsx(c,{children:(V=i("telephony-systems"))==null?void 0:V.shortTitle})]}),e.jsx(d,{children:(K=i("telephony-systems"))==null?void 0:K.number})]}),e.jsx(n,{children:"Phone systems are a core part of our BPO operations. Where calls are recorded or monitored, we comply with all applicable federal and state wiretapping and call recording laws, including one-party and two-party consent requirements under the Federal Wiretap Act and applicable state statutes (e.g., California Penal Code § 632, Florida § 934.03, and similar laws in other two-party consent states)."}),e.jsx(n,{children:"Our call recording practices include:"}),e.jsxs(m,{children:[e.jsx("li",{children:'Providing required disclosures at the start of recorded calls (e.g., "This call may be recorded");'}),e.jsx("li",{children:"Restricting access to call recordings to authorized personnel only;"}),e.jsx("li",{children:"Retaining recordings only as long as required by client agreements, applicable law, or legal hold obligations; and"}),e.jsx("li",{children:"Not using third-party session replay tools or web-based listening technologies on our platforms."})]}),e.jsx(n,{children:"Individuals who do not consent to call recording may request an unrecorded communication channel where operationally feasible."})]}),e.jsxs(s,{id:"disclosure-of-information",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(_=i("disclosure-of-information"))==null?void 0:_.number]}),e.jsx(c,{children:(Q=i("disclosure-of-information"))==null?void 0:Q.shortTitle})]}),e.jsx(d,{children:(X=i("disclosure-of-information"))==null?void 0:X.number})]}),e.jsx(n,{children:"We do not sell, rent, license, or otherwise transfer personal information to third parties for their own commercial purposes. We do not share personal information for cross-context behavioral advertising."}),e.jsx(n,{children:"We may disclose information only in the following limited circumstances:"}),e.jsx(g,{children:"6.1 With Clients"}),e.jsx(n,{children:"Information processed on behalf of a client is returned to or available to that client as directed by our service agreement. Clients control the data they entrust to us for processing."}),e.jsx(g,{children:"6.2 With Service Providers (Sub-processors)"}),e.jsx(n,{children:"We may engage third-party vendors who provide infrastructure or support services to us (e.g., cloud hosting, telephony infrastructure, IT security). These vendors are contractually bound to process information only as directed by Hyacinth, maintain appropriate security measures, and not use the information for their own purposes."}),e.jsx(g,{children:"6.3 For Legal Compliance"}),e.jsx(n,{children:"We may disclose information to law enforcement, courts, or regulatory agencies where required by applicable law, valid legal process, or to protect the safety, rights, or property of Hyacinth, our clients, or the public."}),e.jsx(g,{children:"6.4 Business Transfers"}),e.jsx(n,{children:"In the event of a merger, acquisition, or asset sale, personal information may be transferred to a successor entity. Affected individuals will be notified as required by applicable law."}),e.jsx(g,{children:"6.5 With Consent"}),e.jsx(n,{children:"We may share information in other circumstances with your prior express consent."})]}),e.jsxs(s,{id:"data-processing-agreements",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Z=i("data-processing-agreements"))==null?void 0:Z.number]}),e.jsx(c,{children:(ee=i("data-processing-agreements"))==null?void 0:ee.shortTitle})]}),e.jsx(d,{children:(ie=i("data-processing-agreements"))==null?void 0:ie.number})]}),e.jsx(n,{children:"As a BPO acting as a data processor on behalf of our clients, we operate under written service agreements that govern data handling obligations. For clients subject to GDPR, CCPA/CPRA, or other regulations requiring formal data processing agreements, Hyacinth will execute a Data Processing Agreement (DPA) or Data Processing Addendum as part of the client engagement."}),e.jsx(n,{children:"Our DPAs address the nature, purpose, and duration of processing; the categories of personal data and data subjects involved; Hyacinth's obligations as a processor (security, confidentiality, sub-processor controls, breach notification support); the client's rights to audit and receive assistance with data subject requests; and data deletion or return upon contract termination."}),e.jsxs(n,{children:["Clients are the data controllers for information they provide to Hyacinth for processing and are responsible for ensuring their own lawful basis for that processing. Prospective clients requiring a DPA should request one at"," ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]}),e.jsxs(s,{id:"data-security",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(re=i("data-security"))==null?void 0:re.number]}),e.jsx(c,{children:(ne=i("data-security"))==null?void 0:ne.shortTitle})]}),e.jsx(d,{children:(te=i("data-security"))==null?void 0:te.number})]}),e.jsx(n,{children:"We implement administrative, technical, and physical safeguards appropriate to the nature and sensitivity of the information we handle, including:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Encryption of data in transit (TLS) and at rest within our platforms;"}),e.jsx("li",{children:"Role-based access controls limiting data access to personnel who require it to perform their functions;"}),e.jsx("li",{children:"Multi-factor authentication (MFA) for system and platform access;"}),e.jsx("li",{children:"Network monitoring and intrusion detection;"}),e.jsx("li",{children:"Regular internal security reviews and vulnerability assessments;"}),e.jsx("li",{children:"Employee training on data handling, security practices, and phishing awareness; and"}),e.jsx("li",{children:"Documented incident response procedures."})]}),e.jsx(n,{children:"We do not currently hold third-party security certifications (such as SOC 2 or ISO 27001) but are committed to maintaining security practices consistent with industry standards appropriate to a BPO of our size and scope. We will communicate material changes to our security posture to clients."}),e.jsx(n,{children:"No electronic system is completely secure. In the event of a security incident affecting personal information, we will act promptly to contain and assess the incident and notify affected parties as required by applicable law."})]}),e.jsxs(s,{id:"data-breach-notification",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(se=i("data-breach-notification"))==null?void 0:se.number]}),e.jsx(c,{children:(oe=i("data-breach-notification"))==null?void 0:oe.shortTitle})]}),e.jsx(d,{children:(ae=i("data-breach-notification"))==null?void 0:ae.number})]}),e.jsx(n,{children:"In the event of a data breach involving personal information, Hyacinth will:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Contain and assess the breach promptly upon discovery;"}),e.jsx("li",{children:"Notify affected clients without undue delay, and within the timeframes required by applicable law — including within 72 hours where GDPR applies, and within 30 to 45 days as required by applicable U.S. state breach notification laws;"}),e.jsx("li",{children:"Notify affected individuals directly where required by law or where we are acting as the data controller;"}),e.jsx("li",{children:"Cooperate with clients in fulfilling their own breach notification obligations to regulators and individuals; and"}),e.jsx("li",{children:"Document the breach, our response, and remediation steps in accordance with our incident response procedures."})]})]}),e.jsxs(s,{id:"data-retention",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(le=i("data-retention"))==null?void 0:le.number]}),e.jsx(c,{children:(ce=i("data-retention"))==null?void 0:ce.shortTitle})]}),e.jsx(d,{children:(de=i("data-retention"))==null?void 0:de.number})]}),e.jsx(n,{children:"We retain personal information only for as long as necessary to fulfill the purpose for which it was collected or as required by law. We do not maintain data repositories beyond operational necessity. Specific retention periods are as follows:"}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Client service data (CRM, ERP records):"})," Retained during the active service relationship; deleted or returned within 90 days of contract termination unless otherwise required by law or agreed in writing;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Call recordings:"})," Up to 3 years, or as required by client agreement, litigation hold, or applicable law;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Accounting and financial records:"})," 7 years as required by IRS regulations and applicable law;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Employee records:"})," Duration of employment plus up to 7 years as required by applicable labor and tax law;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Job applicant records:"})," Up to 2 years from the date of application, unless extended by applicable law;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Website and platform access logs:"})," Up to 12 months for security and operational purposes;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Business correspondence:"})," Up to 7 years for legal and compliance purposes."]})]}),e.jsx(n,{children:"Upon expiration of the applicable retention period, we securely delete or anonymize data using methods appropriate to its sensitivity. We do not archive, sell, or transfer data that has passed its retention period."})]}),e.jsxs(s,{id:"industry-specific-compliance",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(he=i("industry-specific-compliance"))==null?void 0:he.number]}),e.jsx(c,{children:(pe=i("industry-specific-compliance"))==null?void 0:pe.shortTitle})]}),e.jsx(d,{children:(me=i("industry-specific-compliance"))==null?void 0:me.number})]}),e.jsx(n,{children:"As a BPO serving all professional industries, we recognize that clients in specific sectors are subject to additional regulatory requirements. We support client compliance with the following frameworks:"}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"HIPAA:"})," For healthcare clients, we enter into Business Associate Agreements (BAAs) and implement required safeguards for Protected Health Information (PHI);"]}),e.jsxs("li",{children:[e.jsx("b",{children:"GLBA:"})," For financial services clients, we observe Gramm-Leach-Bliley Act requirements for non-public personal financial information;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"PCI-DSS:"})," For services involving payment card data, we apply applicable PCI-DSS security standards; and"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Legal & Professional Services:"})," We recognize that attorney-client privilege and similar professional obligations may apply to data processed on behalf of legal or professional services clients and will cooperate to honor those requirements."]})]}),e.jsx(n,{children:"Clients are responsible for identifying applicable sector-specific regulations at the time of engagement so that Hyacinth can tailor service agreements and data handling accordingly."})]}),e.jsxs(s,{id:"your-privacy-rights",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(ue=i("your-privacy-rights"))==null?void 0:ue.number]}),e.jsx(c,{children:(fe=i("your-privacy-rights"))==null?void 0:fe.shortTitle})]}),e.jsx(d,{children:(ge=i("your-privacy-rights"))==null?void 0:ge.number})]}),e.jsx(n,{children:"Depending on your jurisdiction and relationship with us, you may have the following rights regarding your personal information:"}),e.jsxs(m,{children:[e.jsxs("li",{children:[e.jsx("b",{children:"Right to Know / Access:"})," Request information about what personal data we hold about you and how it is used;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Correction:"})," Request correction of inaccurate or incomplete data;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Deletion:"})," Request deletion of your personal data, subject to legal retention requirements;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Data Portability:"})," Request your data in a structured, machine-readable format;"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Opt Out of AI / ADMT:"})," Opt out of AI-assisted features within our CRM (see Section 3.3);"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Opt Out of Sale or Sharing:"})," We do not sell or share data for advertising — this right is satisfied by our practices; and"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Right to Non-Discrimination:"})," We will not penalize you for exercising your privacy right."]})]}),e.jsxs(n,{children:["To submit a request, email"," ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"})," ","with your name, contact information, and a description of your request. We will verify your identity before responding and aim to respond within 30 days, not exceeding 45 days under CCPA or 30 days under GDPR without providing notice of an extension."]}),e.jsx(n,{children:"If your information is processed by Hyacinth on behalf of one of our clients, please direct your request to that client organization. We will assist the client in responding as required by our service agreement."})]}),e.jsxs(s,{id:"state-specific",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(xe=i("state-specific"))==null?void 0:xe.number]}),e.jsx(c,{children:(ye=i("state-specific"))==null?void 0:ye.shortTitle})]}),e.jsx(d,{children:(be=i("state-specific"))==null?void 0:be.number})]}),e.jsx(g,{children:"13.1 California (CCPA / CPRA)"}),e.jsx(n,{children:"California residents have rights under the California Consumer Privacy Act as amended by the California Privacy Rights Act, including regulations effective January 1, 2026. Categories of personal information Hyacinth may have collected in the preceding 12 months include: identifiers, professional and employment information, commercial information (client records), internet or network activity (platform access logs), and inferences drawn from the above."}),e.jsxs(n,{children:["We do not sell personal information. We do not share personal information for cross-context behavioral advertising. California residents may submit verifiable rights requests to"," ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]}),e.jsx(g,{children:"13.2 CIPA & Website Tracking (California)"}),e.jsx(n,{children:"The California Invasion of Privacy Act (CIPA) and related wiretapping laws impose requirements on the use of tracking technologies. Hyacinth does not use advertising pixels, third-party behavioral trackers, session replay tools, or similar technologies on our website or platforms. We use only essential technical tools required for authentication, session management, and security. No consent to tracking beyond these operational technologies is required for use of our services."}),e.jsx(g,{children:"13.3 Other U.S. States"}),e.jsx(n,{children:"Residents of the following states have privacy rights under their respective laws, and Hyacinth honors applicable rights requests:"}),e.jsxs(m,{children:[e.jsx("li",{children:"Virginia — Consumer Data Protection Act;"}),e.jsx("li",{children:"Colorado — Colorado Privacy Act;"}),e.jsx("li",{children:"Connecticut — Connecticut Data Privacy Act;"}),e.jsx("li",{children:"Texas — Texas Data Privacy and Security Act;"}),e.jsx("li",{children:"Florida — Florida Digital Bill of Rights;"}),e.jsx("li",{children:"Indiana — Indiana Consumer Data Protection Act (effective January 1, 2026);"}),e.jsx("li",{children:"Kentucky — Kentucky Consumer Data Protection Act (effective January 1, 2026); and"}),e.jsx("li",{children:"Rhode Island — Rhode Island Data Transparency and Privacy Protection Act (effective January 1, 2026)."})]}),e.jsxs(n,{children:["As additional state privacy laws take effect, we will update this Policy accordingly. Contact"," ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"})," ","to determine which rights apply based on your state of residence."]})]}),e.jsxs(s,{id:"international-data-transfers",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(je=i("international-data-transfers"))==null?void 0:je.number]}),e.jsx(c,{children:(we=i("international-data-transfers"))==null?void 0:we.shortTitle})]}),e.jsx(d,{children:(ve=i("international-data-transfers"))==null?void 0:ve.number})]}),e.jsx(n,{children:"If we process personal information relating to individuals in the European Economic Area (EEA), United Kingdom, or other jurisdictions with cross-border data transfer restrictions, we will implement appropriate safeguards as required by applicable law, including Standard Contractual Clauses where required under GDPR. Clients with international data handling requirements should specify these in their service agreements."})]}),e.jsxs(s,{id:"childrens-privacy",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Ce=i("childrens-privacy"))==null?void 0:Ce.number]}),e.jsx(c,{children:(Se=i("childrens-privacy"))==null?void 0:Se.shortTitle})]}),e.jsx(d,{children:(Pe=i("childrens-privacy"))==null?void 0:Pe.number})]}),e.jsxs(n,{children:["Our services are directed exclusively to businesses and professional users. We do not knowingly collect personal information from individuals under the age of 16. If we learn that we have inadvertently collected such information, we will promptly delete it. If you believe we have collected information from a minor, please contact us at"," ",e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),"."]})]}),e.jsxs(s,{id:"cookies",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Te=i("cookies"))==null?void 0:Te.number]}),e.jsx(c,{children:(ke=i("cookies"))==null?void 0:ke.shortTitle})]}),e.jsx(d,{children:(Re=i("cookies"))==null?void 0:Re.number})]}),e.jsx(n,{children:"Our website and platforms use only essential cookies and technical session tools required for user authentication and session management, security and fraud prevention, and basic operational functionality. We do not use advertising cookies, cross-site tracking tools, or behavioral analytics platforms. You may manage cookie behavior through your browser settings; disabling session cookies may impair platform functionality."})]}),e.jsxs(s,{id:"this-policy",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Ie=i("this-policy"))==null?void 0:Ie.number]}),e.jsx(c,{children:(Ae=i("this-policy"))==null?void 0:Ae.shortTitle})]}),e.jsx(d,{children:(qe=i("this-policy"))==null?void 0:qe.number})]}),e.jsx(n,{children:"We review this Privacy Policy at least annually and update it to reflect changes in our services, operations, or applicable law. Material changes will be communicated to active clients via direct notice and will be reflected with an updated effective date at the top of this document. Continued use of our services following notice of a material update constitutes acknowledgment of the revised policy."})]}),e.jsxs(s,{id:"contact-us",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(We=i("contact-us"))==null?void 0:We.number]}),e.jsx(c,{children:(De=i("contact-us"))==null?void 0:De.shortTitle})]}),e.jsx(d,{children:(He=i("contact-us"))==null?void 0:He.number})]}),e.jsx(n,{children:"Hyacinth has designated a Privacy & Compliance Officer responsible for overseeing our data protection practices and responding to rights requests. For questions, concerns, or privacy requests, please contact us at:"}),e.jsxs(Yi,{children:[e.jsx("strong",{children:"Hyacinth Industries LLC"}),e.jsx("span",{children:"Attn: Privacy & Compliance Officer"}),e.jsx("span",{children:"Email:"}),e.jsx("a",{href:"mailto:privacy@hyacinthindustriesllc.com",children:"privacy@hyacinthindustriesllc.com"}),e.jsx("span",{children:"[Company Mailing Address]"})]}),e.jsx(n,{children:"We will acknowledge all privacy inquiries within 5 business days and respond substantively within the timeframes required by applicable law."})]}),e.jsxs(s,{id:"data-sharing",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Oe=i("data-sharing"))==null?void 0:Oe.number]}),e.jsx(c,{children:(ze=i("data-sharing"))==null?void 0:ze.shortTitle})]}),e.jsx(d,{children:(Be=i("data-sharing"))==null?void 0:Be.number})]}),e.jsxs(m,{children:[e.jsx("li",{children:"Customer data is not shared with 3rd parties for promotional or marketing purposes."}),e.jsx("li",{children:"Marketing opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data."})]})]}),e.jsxs(s,{id:"messaging-terms",children:[e.jsxs(o,{children:[e.jsxs(a,{children:[e.jsxs(l,{children:["Section ",(Ee=i("messaging-terms"))==null?void 0:Ee.number]}),e.jsx(c,{children:(Me=i("messaging-terms"))==null?void 0:Me.shortTitle})]}),e.jsx(d,{children:(Le=i("messaging-terms"))==null?void 0:Le.number})]}),e.jsxs(Gi,{children:[e.jsx("li",{children:"The messaging program consists of general conversational messaging to answer questions and provide support to customers."}),e.jsx("li",{children:"You can cancel the SMS service at any time. Just text 'STOP' to the phone number from which you received messages. After you send the SMS message 'STOP' to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again."}),e.jsx("li",{children:"If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@hyacinthindustriesllc.com."}),e.jsx("li",{children:"Carriers are not liable for delayed or undelivered messages."}),e.jsx("li",{children:"As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider."}),e.jsx("li",{children:"If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page."})]})]})]})]})]})}),e.jsx(ri,{})]})}const ai=r.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: #faf9f7;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,li=r.section`
  position: relative;
  width: 100%;
  padding: 5rem 2rem 4.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 3rem;
  }
`,ci=r.div`
  position: absolute;
  inset: 0;
  background-image: url(${ni});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(250, 249, 247, 0.94) 0%,
      rgba(250, 249, 247, 0.97) 48%,
      rgba(250, 249, 247, 1) 100%
    );
  }
`,di=r.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`,hi=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.08);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
`,Ue=r.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8b0d2a;
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.12);
  flex-shrink: 0;
`,pi=r.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
  color: #1a1d20;

  @media (max-width: 560px) {
    font-size: 2.35rem;

    br {
      display: none;
    }
  }
`,mi=r.span`
  color: #8b0d2a;
`,ui=r.p`
  margin: 1.2rem auto 0;
  max-width: 650px;
  font-family: var(--font-body);
  font-size: 1.06rem;
  line-height: 1.75;
  color: #6b7280;
`,fi=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`,$e=r.div`
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.06);
  color: #4b5563;
  font-size: 0.88rem;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`,gi=r.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`,xi=r.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 50px;
  padding: 0 1.5rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.14);
  }
`,yi=r.div`
  margin: 2.2rem auto 0;
  max-width: 760px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.25rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 22px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 10px 28px rgba(0, 0, 0, 0.04);
  text-align: left;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1rem;
  }
`,bi=r.div`
  min-width: 0;
`,ji=r.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1a1d20;
`,wi=r.p`
  margin: 0.5rem 0 0;
  font-family: var(--font-body);
  font-size: 0.94rem;
  line-height: 1.65;
  color: #6b7280;
`,vi=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ci=r.img`
  width: min(120px, 100%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.08));
`,Si=r.section`
  padding: 0 2rem 2.75rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem 2rem;
  }
`,Pi=r.div`
  max-width: 1180px;
  margin: 0 auto;
`,Ti=r.div`
  max-width: 700px;
  margin-bottom: 2rem;
`,ki=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
`,Ri=r.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: #1a1d20;
`,Ii=r.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.03rem;
  line-height: 1.72;
  color: #6b7280;
`,Ai=r.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`,qi=r.div`
  display: flex;
  align-items: center;
  gap: 0.95rem;
  padding: 1.15rem 1.25rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.02);
`,Wi=r.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
  flex-shrink: 0;
`,Di=r.div`
  flex: 1;
  min-width: 0;
`,Hi=r.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.55;
  color: #374151;
  font-weight: 500;
`,Oi=r.section`
  padding: 1rem 2rem 4rem;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 3rem;
  }
`,zi=r.div`
  max-width: 1180px;
  margin: 0 auto;
`,Bi=r.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
  min-width: 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Ei=r.div`
  display: grid;
  gap: 1.15rem;
`,Mi=r.aside`
  position: relative;
  align-self: start;
  min-width: 0;

  @media (max-width: 980px) {
    display: none;
  }
`,Li=r.div`
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 1rem 0.9rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.04);
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  backdrop-filter: blur(8px);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`,Ni=r.p`
  margin: 0 0 0.7rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
`,Fi=r.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.2rem;

  @media (max-width: 980px) {
    display: none;
  }
`,Ui=r.li`
  margin: 0;
`,$i=r.a`
  position: relative;
  display: block;
  padding: 0.64rem 0.75rem 0.64rem 0.95rem;
  border-radius: 12px;
  color: ${({$isActive:u})=>u?"#1a1d20":"#6b7280"};
  text-decoration: none;
  font-size: 0.88rem;
  line-height: 1.35;
  font-weight: ${({$isActive:u})=>u?700:500};
  transition: all 0.2s ease;
  overflow-wrap: anywhere;
  background: ${({$isActive:u})=>u?"rgba(139, 13, 42, 0.04)":"transparent"};

  &::before {
    content: "";
    position: absolute;
    left: 0.32rem;
    top: 7px;
    bottom: 7px;
    width: 3px;
    border-radius: 999px;
    background: #8b0d2a;
    opacity: ${({$isActive:u})=>u?1:0};
    transform: scaleY(${({$isActive:u})=>u?1:.45});
    transition: all 0.2s ease;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    color: #1a1d20;
  }
`,Ji=r.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
    position: fixed;
    top: 72px;
    left: 16px;
    right: 16px;
    z-index: 12;
    width: calc(100% - 32px);
    max-width: 1180px;
    margin: 0 auto;
    padding: 0.35rem 0;
    background: linear-gradient(180deg, rgba(250, 249, 247, 0.96), rgba(250, 249, 247, 0.88));
    backdrop-filter: blur(8px);
    opacity: ${({$isHidden:u})=>u?0:1};
    pointer-events: ${({$isHidden:u})=>u?"none":"auto"};
    transition: opacity 0.2s ease;
  }
`,Je=r.select`
  display: none;
  width: 100%;
  margin-bottom: 0.8rem;
  padding: 0.82rem 0.95rem;
  border-radius: 14px;
  border: 1px solid rgba(139, 13, 42, 0.12);
  background: #ffffff;
  color: #334155;
  font-size: 0.95rem;
  font-family: var(--font-body);
  box-shadow: 0 10px 22px rgba(17, 17, 17, 0.08);

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 0;
  }
`,s=r.section`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 1.75rem 1.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);
  scroll-margin-top: 140px;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 28px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 640px) {
    padding: 1.25rem 1.1rem;
    border-radius: 18px;
  }
`,o=r.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`,a=r.div`
  min-width: 0;
`,l=r.p`
  margin: 0 0 0.22rem;
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8b0d2a;
`,c=r.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.35rem, 2.2vw, 1.65rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`,d=r.div`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: rgba(139, 13, 42, 0.12);
  flex-shrink: 0;
  line-height: 1;

  @media (max-width: 640px) {
    display: none;
  }
`,g=r.h3`
  margin: 1.35rem 0 0.65rem;
  font-size: 1rem;
  line-height: 1.35;
  color: #374151;
  font-weight: 700;
`,n=r.div`
  font-size: 0.99rem;
  line-height: 1.88;
  color: #475569;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;

  & + & {
    margin-top: 0.9rem;
  }

  strong,
  b {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,m=r.ul`
  margin: 0.9rem 0 1.05rem 1.2rem;
  padding: 0;
  color: #475569;
  line-height: 1.85;
  list-style-position: outside;

  li {
    margin-bottom: 0.45rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,Gi=r.ol`
  margin: 0;
  padding-left: 1.25rem;
  color: #475569;
  line-height: 1.85;

  li {
    margin-bottom: 0.7rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`,Yi=r.div`
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: #fafaf9;
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
  color: #334155;

  strong {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 700;
  }
`;export{Zi as default};
