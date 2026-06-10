import{j as e}from"./motion-Cy3Fut2F.js";import{g as X,r as x}from"./vendor-BQFpGxKL.js";import{d as r,m as ee}from"./styled-CFUkIykv.js";import{S as te,T as re,a as ne,F as ie,B as oe}from"./index-nbaXq9k7.js";import{g as se,i as I,S as E,m as R,n as ae,M as ce,o as le}from"./icons-BMgoPnMN.js";class b{constructor(n=0,o="Network Error"){this.status=n,this.text=o}}const de=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,n)=>Promise.resolve(localStorage.setItem(t,n)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},m={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:de()},L=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},me=(t,n="https://api.emailjs.com")=>{if(!t)return;const o=L(t);m.publicKey=o.publicKey,m.blockHeadless=o.blockHeadless,m.storageProvider=o.storageProvider,m.blockList=o.blockList,m.limitRate=o.limitRate,m.origin=o.origin||n},M=async(t,n,o={})=>{const a=await fetch(m.origin+t,{method:"POST",headers:o,body:n}),c=await a.text(),p=new b(a.status,c);if(a.ok)return p;throw p},O=(t,n,o)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!n||typeof n!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},pe=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},V=t=>t.webdriver||!t.languages||t.languages.length===0,A=()=>new b(451,"Unavailable For Headless Browser"),he=(t,n)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof n!="string")throw"The BlockList watchVariable has to be a string"},ge=t=>{var n;return!((n=t.list)!=null&&n.length)||!t.watchVariable},fe=(t,n)=>t instanceof FormData?t.get(n):t[n],U=(t,n)=>{if(ge(t))return!1;he(t.list,t.watchVariable);const o=fe(n,t.watchVariable);return typeof o!="string"?!1:t.list.includes(o)},N=()=>new b(403,"Forbidden"),ue=(t,n)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(n&&typeof n!="string")throw"The LimitRate ID has to be a non-empty string"},xe=async(t,n,o)=>{const a=Number(await o.get(t)||0);return n-Date.now()+a},$=async(t,n,o)=>{if(!n.throttle||!o)return!1;ue(n.throttle,n.id);const a=n.id||t;return await xe(a,n.throttle,o)>0?!0:(await o.set(a,Date.now().toString()),!1)},K=()=>new b(429,"Too Many Requests"),be=async(t,n,o,a)=>{const c=L(a),p=c.publicKey||m.publicKey,h=c.blockHeadless||m.blockHeadless,g=c.storageProvider||m.storageProvider,f={...m.blockList,...c.blockList},u={...m.limitRate,...c.limitRate};return h&&V(navigator)?Promise.reject(A()):(O(p,t,n),pe(o),o&&U(f,o)?Promise.reject(N()):await $(location.pathname,u,g)?Promise.reject(K()):M("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:p,service_id:t,template_id:n,template_params:o}),{"Content-type":"application/json"}))},ye=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},we=t=>typeof t=="string"?document.querySelector(t):t,ve=async(t,n,o,a)=>{const c=L(a),p=c.publicKey||m.publicKey,h=c.blockHeadless||m.blockHeadless,g=m.storageProvider||c.storageProvider,f={...m.blockList,...c.blockList},u={...m.limitRate,...c.limitRate};if(h&&V(navigator))return Promise.reject(A());const i=we(o);O(p,t,n),ye(i);const s=new FormData(i);return U(f,s)?Promise.reject(N()):await $(location.pathname,u,g)?Promise.reject(K()):(s.append("lib_version","4.4.1"),s.append("service_id",t),s.append("template_id",n),s.append("user_id",p),M("/api/v1.0/email/send-form",s))},je={init:me,send:be,sendForm:ve,EmailJSResponseStatus:b};var Y={exports:{}},ke="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Se=ke,Te=Se;function G(){}function J(){}J.resetWarningCache=G;var Ce=function(){function t(a,c,p,h,g,f){if(f!==Te){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function n(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:J,resetWarningCache:G};return o.PropTypes=o,o};Y.exports=Ce();var Pe=Y.exports;const _e=X(Pe);function Z({onSuccess:t}){const[n,o]=x.useState({name:"",email:"",industry:"",message:""}),a=p=>{const{name:h,value:g}=p.target;o(f=>({...f,[h]:g}))},c=p=>{var h;p.preventDefault(),(h=window.gtag)==null||h.call(window,"event","contact_form_submit",{form_name:"contact_form",page_location:window.location.href}),t==null||t({name:n.name,email:n.email,industry:n.industry,message:n.message}),o({name:"",email:"",industry:"",message:""})};return e.jsxs(ze,{onSubmit:c,children:[e.jsxs(y,{children:[e.jsx(w,{children:"Name"}),e.jsx(F,{type:"text",name:"name",value:n.name,onChange:a,required:!0,placeholder:"Enter your name"})]}),e.jsxs(y,{children:[e.jsx(w,{children:"Email"}),e.jsx(F,{type:"email",name:"email",value:n.email,onChange:a,required:!0,placeholder:"Enter your email"})]}),e.jsxs(y,{children:[e.jsx(w,{children:"Industry"}),e.jsxs(Le,{name:"industry",value:n.industry,onChange:a,required:!0,children:[e.jsx("option",{value:"",disabled:!0,children:"Select an Industry"}),e.jsx("option",{value:"Logistics",children:"Logistics"}),e.jsx("option",{value:"General Services",children:"General Services"}),e.jsx("option",{value:"Administrative Support",children:"Administrative Support"}),e.jsx("option",{value:"Healthcare",children:"Healthcare"}),e.jsx("option",{value:"Marketing",children:"Marketing"}),e.jsx("option",{value:"Web Design",children:"Web Design"}),e.jsx("option",{value:"3D Animation",children:"3D Animation"}),e.jsx("option",{value:"Other",children:"Other"})]})]}),e.jsxs(y,{children:[e.jsx(w,{children:"What are you working on?"}),e.jsx(He,{name:"message",value:n.message,onChange:a,required:!0,placeholder:"Tell us a little about your project, goal, or challenge",rows:"5"})]}),e.jsx(Ie,{type:"submit",children:"Send Message"})]})}Z.propTypes={onSuccess:_e.func};const ze=r.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`,y=r.div`
  margin-bottom: 24px;
  
  &:last-of-type {
    margin-bottom: 32px;
  }
`,w=r.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
`,H=`
  width: 100%;
  padding: 14px;
  color: #333;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;

  &:hover {
    border-color: #bdbdbd;
    background-color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #424242;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 66, 66, 0.1);
  }
`,Le=r.select`
  ${H}
  appearance: none;
  background-color: #fafafa;
`,F=r.input`
  ${H}
`,He=r.textarea`
  ${H}
  min-height: 120px;
  resize: vertical;
`,Ie=r.button`
  width: 100%;
  background-color: var(--primary);
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #aa2b2b;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;function Ct(){x.useEffect(()=>{window.scrollTo(0,0)},[]),x.useEffect(()=>{const i="calendly-widget-css",s="calendly-widget-js";if(!document.getElementById(i)){const d=document.createElement("link");d.id=i,d.rel="stylesheet",d.href="https://assets.calendly.com/assets/external/widget.css",document.head.appendChild(d)}if(!document.getElementById(s)){const d=document.createElement("script");d.id=s,d.src="https://assets.calendly.com/assets/external/widget.js",d.async=!0,document.body.appendChild(d)}},[]);const[t,n]=x.useState(!1),[o,a]=x.useState(!1),[c,p]=x.useState({name:"",email:"",industry:"",message:""}),h=async(i,s={})=>{var d;try{const l=s||{},v=(l==null?void 0:l.event)||{},j=(l==null?void 0:l.invitee)||{},k=(v==null?void 0:v.start_time)||(j==null?void 0:j.start_time)||(l==null?void 0:l.event_start_time)||(l==null?void 0:l.start_time)||"",Q=k?`${new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})} - ${new Date(k).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",timeZoneName:"short"})}`:"Scheduled via Calendly";await je.send("service_4wc1wmw","template_195dfkp",{name:i.name,email:i.email,industry:i.industry,message:i.message,meeting_time:Q},"lV2C-TKUSMC28Bz6x"),(d=window.gtag)==null||d.call(window,"event","contact_email_sent",{page_location:window.location.href})}catch(l){console.error("EmailJS send error:",l)}},g=(i=c)=>{var d,l;const s=new URL("https://calendly.com/aldwinraya-hyacinthindustriesllc/strategy-call");i!=null&&i.name&&s.searchParams.set("name",i.name),i!=null&&i.email&&s.searchParams.set("email",i.email),i!=null&&i.industry&&s.searchParams.set("a2",i.industry),i!=null&&i.message&&s.searchParams.set("a1",i.message),(d=window.gtag)==null||d.call(window,"event","calendly_open",{source:"contact_popup",page_location:window.location.href}),(l=window.Calendly)!=null&&l.initPopupWidget?window.Calendly.initPopupWidget({url:s.toString()}):window.open(s.toString(),"_blank","noopener,noreferrer")},f=i=>{const s={name:(i==null?void 0:i.name)||"",email:(i==null?void 0:i.email)||"",industry:(i==null?void 0:i.industry)||"",message:(i==null?void 0:i.message)||""};p(s),a(!1),n(!0),setTimeout(()=>{g(s)},1400)};x.useEffect(()=>{if(!o)return;const i=setTimeout(()=>{a(!1)},3e3);return()=>clearTimeout(i)},[o]),x.useEffect(()=>{const i=async s=>{var d,l;s.origin==="https://calendly.com"&&((d=s.data)==null?void 0:d.event)==="calendly.event_scheduled"&&((l=window.gtag)==null||l.call(window,"event","calendly_booked",{source:"contact_popup",page_location:window.location.href}),await h(c,s.data.payload||{}),a(!0),n(!1))};return window.addEventListener("message",i),()=>{window.removeEventListener("message",i)}},[c]);const u=["Direct access to the right service conversation","Clear next steps based on your business needs","Confidential handling of partnership and service inquiries"];return e.jsxs(Ee,{id:"contact",children:[e.jsx(te,{title:"Work With Us | Hyacinth Industries LLC",description:"Contact Hyacinth Industries LLC for inquiries, partnerships, and service requests.",canonicalPath:"/contact/"}),e.jsx(re,{}),e.jsx(ne,{}),e.jsxs(Re,{children:[e.jsx(Fe,{}),e.jsxs(qe,{children:[e.jsxs(Be,{children:[e.jsx(We,{}),"Work With Us"]}),e.jsxs(Me,{children:["Start a conversation about",e.jsx("br",{}),e.jsx(Oe,{children:"what you're building."})]}),e.jsx(Ve,{children:"Have questions, partnership ideas, or a service request? Reach out and we'll direct your inquiry to the right next step."}),e.jsxs(Ae,{children:[e.jsxs(Ue,{href:"#contact-form",children:["Get Started",e.jsx(se,{size:17})]}),e.jsx(Ne,{href:"mailto:info@hyacinthindustriesllc.com",children:"Email Us Directly"})]}),e.jsxs($e,{children:[e.jsxs(S,{children:[e.jsx(I,{size:15}),e.jsx("span",{children:"Response within 1 business day"})]}),e.jsx(D,{}),e.jsxs(S,{children:[e.jsx(E,{size:15}),e.jsx("span",{children:"Confidential inquiries"})]}),e.jsx(D,{}),e.jsxs(S,{children:[e.jsx(R,{size:15}),e.jsx("span",{children:"Clear next steps"})]})]})]})]}),e.jsx(Ke,{children:e.jsx(Ye,{children:e.jsxs(Ge,{id:"contact-form",children:[e.jsxs(Je,{children:[e.jsxs(Ze,{children:[e.jsx(Qe,{children:e.jsx(Xe,{children:e.jsx(R,{size:20})})}),e.jsx(et,{children:"Business Inquiries"}),e.jsx(tt,{children:"Professional support for serious conversations."}),e.jsx(rt,{children:"Hyacinth Industries works with organizations looking for reliable execution, specialized support, and practical operating clarity. Use the form to start the conversation."}),e.jsx(nt,{}),e.jsx(it,{children:u.map(i=>e.jsxs(ot,{children:[e.jsx(st,{children:e.jsx(ae,{size:16})}),e.jsx("span",{children:i})]},i))})]}),e.jsxs(at,{children:[e.jsx(T,{children:e.jsxs(C,{children:[e.jsx(P,{children:e.jsx(ce,{size:18})}),e.jsxs(_,{children:[e.jsx(z,{children:"Email"}),e.jsx(q,{href:"mailto:info@hyacinthindustriesllc.com",children:"info@hyacinthindustriesllc.com"})]})]})}),e.jsx(T,{children:e.jsxs(C,{children:[e.jsx(P,{children:e.jsx(le,{size:18})}),e.jsxs(_,{children:[e.jsx(z,{children:"Phone"}),e.jsx(q,{href:"tel:+18132133276",children:"+1 (813) 213-3276"})]})]})}),e.jsx(T,{$full:!0,children:e.jsxs(C,{children:[e.jsx(P,{children:e.jsx(E,{size:18})}),e.jsxs(_,{children:[e.jsx(z,{children:"Our Approach"}),e.jsx(ct,{children:"Clear, confidential, and aligned with your business context."})]})]})})]})]}),e.jsx(lt,{children:e.jsxs(dt,{children:[e.jsxs(mt,{children:[e.jsxs(pt,{children:[e.jsxs(ht,{children:[e.jsx(gt,{}),"Inquiry Form"]}),e.jsxs(ft,{children:[e.jsx(I,{size:13}),"1 day response"]})]}),e.jsx(ut,{children:"What are you working on?"}),e.jsx(xt,{children:"Include your area of interest and a short overview of the opportunity, project, or support requirement."})]}),e.jsx(bt,{}),t&&e.jsxs(B,{role:"status",children:[e.jsxs(W,{children:["Thank you — your inquiry has been submitted successfully.",e.jsx("br",{}),e.jsx("br",{}),"Please complete the final step by selecting your preferred meeting data and time in the scheduling popup."]}),e.jsxs(yt,{children:["If the popup did not appear or was accidentally closed, you can"," ",e.jsx(wt,{href:"https://calendly.com/aldwinraya-hyacinthindustriesllc/strategy-call",target:"_blank",rel:"noopener noreferrer",onClick:i=>{i.preventDefault(),g()},children:"open the scheduling calendar again"}),"."]})]}),o&&e.jsx(B,{role:"status",children:e.jsx(W,{children:"Thank you — your strategy call has been scheduled successfully."})}),e.jsx(Z,{onSuccess:f})]})})]})})}),e.jsx(ie,{})]})}const Ee=r.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: #faf9f7;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`,Re=r.section`
  position: relative;
  width: 100%;
  padding: 5rem 2rem 4.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 3rem;
  }
`,Fe=r.div`
  position: absolute;
  inset: 0;
  background-image: url(${oe});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(250, 249, 247, 0.92) 0%,
      rgba(250, 249, 247, 0.96) 50%,
      rgba(250, 249, 247, 1) 100%
    );
  }
`,De=ee`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`,qe=r.div`
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  animation: ${De} 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
`,Be=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 0.6rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.08);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1.75rem;
`,We=r.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8b0d2a;
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.12);
  flex-shrink: 0;
`,Me=r.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 5.5vw, 4rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
  color: #1a1d20;

  @media (max-width: 560px) {
    font-size: 2.4rem;

    br {
      display: none;
    }
  }
`,Oe=r.span`
  color: #8b0d2a;
`,Ve=r.p`
  margin: 1.25rem auto 0;
  max-width: 500px;
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.7;
  color: #6b7280;
`,Ae=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Ue=r.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08),
      0 12px 32px rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: translateY(0);
  }
`,Ne=r.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: #ffffff;
  color: #1a1d20;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
      0 4px 12px rgba(0, 0, 0, 0.04);
  }
`,$e=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 0.75rem;
    flex-direction: column;
  }
`,S=r.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  color: #9ca3af;

  svg {
    color: #8b0d2a;
    flex-shrink: 0;
  }
`,D=r.div`
  width: 1px;
  height: 16px;
  background: rgba(0, 0, 0, 0.08);

  @media (max-width: 640px) {
    display: none;
  }
`,Ke=r.section`
  padding: 0 2rem 5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem 3.5rem;
  }
`,Ye=r.div`
  max-width: 1180px;
  margin: 0 auto;
`,Ge=r.div`
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: 1.5rem;
  align-items: start;
  scroll-margin-top: 140px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,Je=r.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Ze=r.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    border-radius: 20px;
  }
`,Qe=r.div`
  margin-bottom: 1.25rem;
`,Xe=r.div`
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
`,et=r.p`
  margin: 0 0 0.5rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8b0d2a;
`,tt=r.h2`
  margin: 0 0 0.85rem;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`,rt=r.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.72;
  color: #6b7280;
`,nt=r.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  margin: 1.5rem 0;
`,it=r.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`,ot=r.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.6;
  color: #374151;
  font-weight: 500;
`,st=r.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: #8b0d2a;
  display: flex;
`,at=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,T=r.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  padding: 1.15rem 1.2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
  grid-column: ${({$full:t})=>t?"1 / -1":"auto"};

  &:hover {
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 20px rgba(0, 0, 0, 0.04);
  }
`,C=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
`,P=r.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
  flex-shrink: 0;
`,_=r.div`
  min-width: 0;
  padding-top: 2px;
`,z=r.p`
  margin: 0 0 0.2rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
`,q=r.a`
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1d20;
  text-decoration: none;
  line-height: 1.5;
  overflow-wrap: anywhere;
  transition: color 0.15s ease;

  &:hover {
    color: #8b0d2a;
  }
`,ct=r.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.6;
  color: #6b7280;
`,lt=r.div``,dt=r.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    border-radius: 20px;
  }
`,mt=r.div``,pt=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,ht=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8b0d2a;
`,gt=r.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8b0d2a;
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.1);
`,ft=r.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.06);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.02em;

  svg {
    flex-shrink: 0;
  }
`,ut=r.h2`
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`,xt=r.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.68;
  color: #6b7280;
  max-width: 36rem;
`,bt=r.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  margin: 1.5rem 0;
`,B=r.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid rgba(139, 13, 42, 0.14);
`,W=r.div`
  color: #334155;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.65;
`,yt=r.p`
  margin: 0.85rem 0 0;
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.6;
  color: #64748b;
`,wt=r.a`
  color: #8b0d2a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{Ct as default};
