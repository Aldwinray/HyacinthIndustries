import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Seo from "../components/Seo";
import TopNavBar from "../components/Nav/TopNavBar";
import Sidebar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import HyacinthLogo from "../assets/img/Logo.webp";

const policySections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "artificial-intelligence-features", label: "3. Artificial Intelligence Features" },
  { id: "how-we-use-information", label: "4. How We Use Information" },
  { id: "telephony-systems", label: "5. Telephony Systems & Call Recording" },
  { id: "disclosure-of-information", label: "6. Disclosure of Information" },
  { id: "data-processing-agreements", label: "7. Data Processing Agreements" },
  { id: "data-security", label: "8. Data Security" },
  { id: "data-breach-notification", label: "9. Data Breach Notification" },
  { id: "data-retention", label: "10. Data Retention" },
  { id: "industry-specific-compliance", label: "11. Industry-Specific Compliance" },
  { id: "your-privacy-rights", label: "12. Your Privacy Rights" },
  { id: "state-specific", label: "13. State-Specific Privacy Rights" },
  { id: "international-data-transfers", label: "14. International Data Transfers" },
  { id: "childrens-privacy", label: "15. Children's Privacy" },
  { id: "cookies", label: "16. Cookies & Tracking Technologies" },
  { id: "this-policy", label: "17. Changes to This Policy" },
  { id: "contact-us", label: "18. Contact Us" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "messaging-terms", label: "Messaging Terms & Conditions" },
];

export default function PrivacyPolicy() {
  const contentGridRef = useRef(null);
  const sideNavRef = useRef(null);
  const sideNavInnerRef = useRef(null);
  const sideNavLinkRefs = useRef({});
  const [sideNavStyle, setSideNavStyle] = useState({});
  const [sideNavHeight, setSideNavHeight] = useState(0);
  const [activeSection, setActiveSection] = useState(policySections[0].id);
  const [selectedSection, setSelectedSection] = useState(policySections[0].id);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const updateSideNavPosition = () => {
      if (!contentGridRef.current || !sideNavRef.current || !sideNavInnerRef.current) {
        return;
      }

      if (window.innerWidth <= 980) {
        setSideNavStyle({});
        setSideNavHeight(0);
        return;
      }

      const offsetTop = 120;
      const gridRect = contentGridRef.current.getBoundingClientRect();
      const wrapperRect = sideNavRef.current.getBoundingClientRect();
      const panelHeight = sideNavInnerRef.current.offsetHeight;
      const wrapperWidth = sideNavRef.current.offsetWidth;
      const scrollY = window.scrollY;
      const gridTop = scrollY + gridRect.top;
      const gridBottom = scrollY + gridRect.bottom;

      setSideNavHeight(panelHeight);

      if (scrollY + offsetTop <= gridTop) {
        setSideNavStyle({
          position: "relative",
          top: "0",
          left: "0",
          width: "100%",
        });
        return;
      }

      if (scrollY + offsetTop + panelHeight >= gridBottom) {
        setSideNavStyle({
          position: "absolute",
          top: `${Math.max(0, gridBottom - gridTop - panelHeight)}px`,
          left: "0",
          width: "100%",
        });
        return;
      }

      setSideNavStyle({
        position: "fixed",
        top: `${offsetTop}px`,
        left: `${wrapperRect.left}px`,
        width: `${wrapperWidth}px`,
      });
    };

    updateSideNavPosition();
    window.addEventListener("scroll", updateSideNavPosition, { passive: true });
    window.addEventListener("resize", updateSideNavPosition);

    return () => {
      window.removeEventListener("scroll", updateSideNavPosition);
      window.removeEventListener("resize", updateSideNavPosition);
    };
  }, []);

  useEffect(() => {
    const sectionElements = policySections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
          setSelectedSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 980) {
      return;
    }

    const activeLink = sideNavLinkRefs.current[activeSection];

    if (activeLink) {
      activeLink.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleSectionJump = (sectionId) => {
    setSelectedSection(sectionId);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      const topOffset = window.innerWidth <= 980 ? 110 : 130;
      const elementTop = element.getBoundingClientRect().top + window.scrollY - topOffset;
      window.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <Seo
        title="Privacy Policy | Hyacinth Industries LLC"
        description="Read the Hyacinth Industries LLC Privacy Policy, including how personal information is collected, used, disclosed, retained, and protected."
        canonicalPath="/privacy-policy"
        type="article"
      />

      <TopNavBar />
      <Sidebar />

      <Hero>
        <HeroInner>
          <HeroContent>
            <Eyebrow>Legal</Eyebrow>
            <Title>Privacy Policy</Title>
            <CompanyName>Hyacinth Industries LLC</CompanyName>
            <MetaText>Effective Date: March 17, 2026</MetaText>
            <MetaText>Last Revised: March 17, 2026</MetaText>
            <PdfLink
             href="/HyacinthIndustries_PrivacyPolicy.pdf"
             target="_blank"
             rel="noopener noreferrer"
            >
              Download PDF Version
            </PdfLink>
          </HeroContent>
          <HeroLogoWrap>
            <HeroLogo src={HyacinthLogo} alt="Hyacinth Industries LLC logo" />
          </HeroLogoWrap>
        </HeroInner>
      </Hero>

      <ContentSection>
        <ContentInner>
          <MobileStickyNav $isHidden={isFooterVisible}>
            <MobileSectionJump
              aria-label="Jump to a privacy policy section"
              value={selectedSection}
              onChange={(event) => handleSectionJump(event.target.value)}
            >
              {policySections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </MobileSectionJump>
          </MobileStickyNav>
          <ContentGrid ref={contentGridRef}>
            <SideNav ref={sideNavRef} style={sideNavHeight ? { minHeight: `${sideNavHeight}px` } : undefined}>
              <SideNavInner ref={sideNavInnerRef} style={sideNavStyle}>
                <SideNavTitle>On this Page</SideNavTitle>
                <MobileSectionJump
                  aria-label="Jump to a privacy policy section"
                  value={selectedSection}
                  onChange={(event) => handleSectionJump(event.target.value)}
                >
                  {policySections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.label}
                    </option>
                  ))}
                </MobileSectionJump>
                <SideNavList>
                  {policySections.map((section) => (
                    <SideNavItem key={section.id}>
                      <SideNavLink
                        href={`#${section.id}`}
                        $isActive={activeSection === section.id}
                        ref={(element) => {
                          if (element) {
                            sideNavLinkRefs.current[section.id] = element;
                          }
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          handleSectionJump(section.id);
                        }}
                      >
                        {section.label}
                      </SideNavLink>
                    </SideNavItem>
                  ))}
                </SideNavList>
              </SideNavInner>
            </SideNav>
          

          <PolicyCard>
            <SectionBlock id="introduction">
              <SectionTitle>1. Introduction</SectionTitle>
              <SectionText>
                Hyacinth Industries LLC (&quot;Hyacinth,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a business process outsourcing (BPO) company serving professional industries. We provide outsourced business functions supported by our proprietary technology suite, which includes a CRM platform with AI-assisted features, an accounting system, an enterprise resource planning (ERP) platform, and telephony and communications systems.
              </SectionText>
              <SectionText>
                This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with:
              </SectionText>
              <List>
                <li>Our BPO services performed on behalf of client organizations;</li>
                <li>Our proprietary CRM, accounting, and ERP platforms;</li>
                <li>Our telephony and phone-based communication systems;</li>
                <li>Our website and digital communications; and</li>
                <li>Our relationships with clients, vendors, employees, and business contacts.</li>
              </List>
              <SectionText>
                Our core commitment: Hyacinth collects and retains only the information strictly necessary for users to operate our platforms and for us to deliver our services. We do not retain data behind the scenes, track users for secondary purposes, or sell, license, or otherwise monetize personal information in any form.
              </SectionText>
              <SectionText>
                Residents of California, Indiana, Kentucky, Rhode Island, Virginia, Colorado, Connecticut, Texas, Florida, and other states with applicable privacy laws have additional rights described in Section 12.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="information-we-collect">
              <SectionTitle>2. Information We Collect</SectionTitle>
              <SectionText>
                We limit data collection to what is operationally necessary. We do not build
                profiles, aggregate data across clients, or retain information beyond the
                purposes described below.
              </SectionText>

              <Subheading>2.1 Through Our BPO Services</Subheading>
              <SectionText>
                When performing services on behalf of clients, we process personal
                information provided by or directed to us by those clients. This may include:
              </SectionText>
              <List>
                <li>Contact and account information (names, addresses, phone numbers, email addresses);</li>
                <li>Customer records entered into or managed within our CRM platform;</li>
                <li>Financial and transactional data processed through our accounting system;</li>
                <li>Business records and workflow data within our ERP platform;</li>
                <li>Call recordings and interaction logs from our telephony systems, where legally permitted and disclosed; and</li>
                <li>Identity or verification information required for specific service functions.</li>
              </List>
              <SectionText>
                We process this information solely as directed by our clients and only for
                the purpose of delivering agreed services. We do not retain, aggregate, or
                use this information for any secondary purpose.
              </SectionText>

              <Subheading>2.2 From Platform Users</Subheading>
              <SectionText>
                Users authorized to access our CRM, ERP, or accounting platforms provide:
              </SectionText>
              <List>
                <li>Login credentials and account profile information;</li>
                <li>Data entered into the platform in the course of their work (records, notes, transactions); and</li>
                <li>Usage activity within the platform necessary for session management and system function.</li>
              </List>
              <SectionText>
                Platform data is used exclusively to enable the user to operate the system.
                We do not analyze user behavior for marketing, sell usage data, or retain
                data beyond what is required for system operation and legal compliance.
              </SectionText>

              <Subheading>2.3 From Clients, Vendors &amp; Business Contacts</Subheading>
              <List>
                <li>Business contact information (names, titles, company, email, phone numbers);</li>
                <li>Contract and billing information for service agreements; and</li>
                <li>Communications in connection with our business relationship.</li>
              </List>

              <Subheading>2.4 From Employees &amp; Job Applicants</Subheading>
              <List>
                <li>Job applicant information (resume, work history, references, contact details);</li>
                <li>Employee information necessary for onboarding, payroll, benefits, and HR administration (name, address, Social Security Number, banking details, benefits elections);</li>
                <li>Performance and attendance records maintained in our ERP system; and</li>
                <li>Emergency contact information.</li>
              </List>
              <SectionText>
                Employee data is collected and retained only as required by law and for active employment administration. It is not shared beyond HR, payroll, and legal compliance purposes.
              </SectionText>

              <Subheading>2.5 Automatically Collected Technical Data</Subheading>
              <SectionText>
                Our platforms and website may automatically collect minimal technical data for system functionality, including: 
              </SectionText>
              <List>
                <li>IP addresses and session identifiers (for authentication and access control);</li>
                <li>Browser and device type (for compatibility); and</li>
                <li>Platform access logs (for security and error resolution).</li>
              </List>
              <SectionText>
                We do not use third-party advertising trackers, behavioral analytics platforms, session replay tools, or retargeting technologies on our platforms or website.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="artificial-intelligence-features">
              <SectionTitle>3. Artificial Intelligence Features</SectionTitle>
              <SectionText>
                Our CRM platform incorporates AI-assisted features to help users work more effectively. This section explains how those features operate and, importantly, what they do not do.
              </SectionText>

              <Subheading>3.1 What Our AI Does</Subheading>
              <SectionText>
                The AI features within our CRM assist authorized platform users by:
              </SectionText>
              <List>
                <li>Suggesting next actions, drafting responses, or summarizing records based on data the user has already entered into the platforms;</li>
                <li>Organizing or categorizing records to improve workflow efficiency; and</li>
                <li>Flagging incomplete or inconsistent data entries for user review.</li>
              </List>

              <Subheading>3.2 What our AI Does Not Do</Subheading>
              <SectionText>
                Our CRM&lsquo;s AI features operate only on data within the active user session and platform environment. Specifically:
              </SectionText>
              <List>
                <li>We do not use client data to train AI models for use outside of the contracted service;</li>
                <li>We do not sell or share CRM data with AI vendors for their own purposes;</li>
                <li>No automated decision with significant consequences is taken without human review and user confirmation; and </li>
                <li>AI activity within the platform is logged only to the extent necessary for system troubleshooting and security.</li>
              </List>

              <Subheading>3.3 Automated Decision-Making Disclosure (CCPA 2026/ ADMT)</Subheading>
              <SectionText>
                Pursuant to California&apos;s 2026 CCPA regulations on Automated Decision-Making Technology (ADMT), we disclose the following:
              </SectionText>
              <List>
                <li><b>Purpose:</b> AI features in our CRM are used to improve workflow efficiency for authorized platform users. They are not used to make decisions about consumers&apos; eligibility for credit, employment, insurance, housing, or other significant determinations.</li>
                <li><b>Logic:</b> AI suggestions are generated based on data the user has input into the current platform session and are surfaced to assist the user&apos;s own judgment.</li>
                <li><b>Human Oversight:</b> All AI-generated outputs require affirmative user action to take effect. No action is taken automatically without user confirmation.</li>
                <li><b>Opt-Out:</b> Users who wish disable AI-assisted features may contact their account administrator or email <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a>.</li>
              </List>
            </SectionBlock>

            <SectionBlock id="how-we-use-information">
              <SectionTitle>4. How We Use Information</SectionTitle>
              <SectionText>
                We use personal information only for the following purposes. We do not use information for purposes beyond what is described here, and we do not use personal information for advertising, behavioral profiling, data brokerage, or any commercial purpose beyond direct service delivery.
              </SectionText>
              <List>
                <li><b>Service Delivery:</b> To perform BPO services and fulfill obligations under client agreements;</li>
                <li><b>Platform Operation:</b> To operate, maintain, and support our CRM, accounting, and ERP platforms;</li>
                <li><b>Telephony & Communications:</b> To manage phone systems, record calls where legally required, and respond to inquiries; </li>
                <li><b>Billing & Accounting:</b> To process payments, generate invoices, and maintain required financial records;</li>
                <li><b>Security & System Integrity:</b> To detect unauthorized access, protect our systems, and investigate incidents;</li>
                <li><b>Legal Compliance:</b> To comply with applicable laws, regulations, subpoenas, and lawful government requests;</li>
                <li><b>HR & Employment: </b> To manage employee and applicant relationships, payroll, and benefits; and</li>
                <li><b>Business Operations:</b> To manage client, vendor, and partner relationships.</li>
              </List>
            </SectionBlock>

            <SectionBlock id="telephony-systems">
              <SectionTitle>5. Telephony Systems & Call Recording</SectionTitle>
              <SectionText>
                Phone systems are a core part of our BPO operations. Where calls are recorded or monitored, we comply with all applicable federal and state wiretapping and call recording laws, including one-party and two-party consent requirements under the Federal Wiretap Act and applicable state statutes (e.g., California Penal Code § 632. Florida § 934.03, and similar laws in other two-party consent states).
              </SectionText>
              <SectionText>Our call recording practices include:</SectionText>
              <List>
                <li>Providing required disclosures at the start of recorded calls (e.g, &quot;This call may be recorded&quot;);</li>
                <li>Restricting access to call recordings to authorized personnel only;</li>
                <li>Retaining recordings only as long as required by client agreements, applicable law, or legal hold obligations; and</li>
                <li>Not using third-party session replay tools or web-based listening technologies on our platforms.</li>
              </List>
              <SectionText>
                Individuals who do not consent to call recording may request an unrecorded communication channel where operationally feasible.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="disclosure-of-information">
              <SectionTitle>6. Disclosure of Information</SectionTitle>
              <SectionText>
                We do not sell, rent, license, or otherwise transfer personal information to third parties for their own commercial purposes. We do not share personal information for cross-context behavioral advertising.
              </SectionText>
              <SectionText>
                We may disclose information only in the following limited circumstances:
              </SectionText>
              <Subheading>6.1 With Clients</Subheading>
              <SectionText>
                Information processed on behalf of a client is returned to or available to that client as directed by our service agreement. Clients control the data they entrust to us for processing.
              </SectionText>
              <Subheading>6.2 With Service Providers (Sub-processors)</Subheading>
              <SectionText>
                We may engage third-party vendors who provide infrastructure or support services to us (e.g., cloud hosting, telephony infrastructure, IT security). These vendors are contractually bound to process information only as directed by Hyacinth, maintain appropriate security measures, and not use the information for their own purposes.
              </SectionText>
              <Subheading>6.3 For Legal Compliance</Subheading>
              <SectionText>
                We may disclose information to law enforcement, courts, or regulatory agencies where required by applicable law, valid legal process, or to protect the safety, rights, or property of Hyacinth, our clients, or the public.
              </SectionText>
              <Subheading>6.4 Business Transfers</Subheading>
              <SectionText>
                In the event of a merger, acquisition, or asset sale, personal information may be transferred to a successor entity. Affected individuals will be notified as required by applicable law.
              </SectionText>
              <Subheading>6.5 With Consent</Subheading>
              <SectionText>
                We may share information in other circumstances with your prior express consent.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="data-processing-agreements">
              <SectionTitle>7. Data Processing Agreements</SectionTitle>
              <SectionText>
                As a BPO acting as a data processor on behalf of our clients, we operate under written service agreements that govern data handling obligations. For clients subject to GDPR, CCPA/CPRA, or other regulations requiring formal data processing agreements, Hyacinth will execute a Data Processing Agreement (DPA) or Data Processing Addendum as part of the client engagement. 
              </SectionText>
              <SectionText>
                Our DPAs address the nature, purpose, and duration of processing; the categories of personal data and data subjects involved; Hyacinth&apos;s obligations as a processor (security, confidentiality, sub-processor controls, breach notification support); the client&apos;s rights to audit and receive assistance with data subject requests; and data deletion or return upon contract termination.
              </SectionText>
              <SectionText>
                Clients are the data controllers for information they provide to Hyacinth for processing and are responsible for ensuring their own lawful basis for that processing. Prospective clients requiring a DPA should request one at <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a>.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="data-security">
              <SectionTitle>8. Data Security</SectionTitle>
              <SectionText>
                We implement administrative, technical, and physical safeguards appropriate to the nature and sensitivity of the information we handle, including:
              </SectionText>
              <List>
                <li>Encryption of data in transit (TLS) and at rest within our platforms;</li>
                <li>Role-based access controls limiting data access to personnel who require it to perform their functions;
                </li>
                <li>Multi-factor authentication (MFA) for system and platform access;</li>
                <li>Network monitoring and intrusion detection;</li>
                <li>Regular internal security reviews and vulnerability assessments;</li>
                <li>Employee training on data handling, security practices, and phishing awareness; and </li>
                <li>Documented incident response procedures.</li>
              </List>
              <SectionText>
                We do not currently hold third-party security certifications (such as SOC 2 or ISO 27001) but are committed to maintaining security practices consistent with industry standards appropriate to a BPO of our size and scope. We will communicate material changes to our security posture to clients.
              </SectionText>
              <SectionText>
                No electronic system is completely secure. In the event of a security incident affecting personal information, we will act promptly to contain and assess the incident and notify affected parties as required by applicable law.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="data-breach-notification">
              <SectionTitle>9. Data Breach Notification</SectionTitle>
              <SectionText>
                In the event of a data breach involving personal information, Hyacinth will:
              </SectionText>
              <List>
                <li>Contain and assess the breach promptly upon discovery;</li>
                <li>Notify affected clients without undue delay, and within the timeframes required by applicable law — including within 72 hours where GDPR applies, and within 30 to 45 days as required by applicable U.S state breach notification laws;</li>
                <li>Notify affected individuals directly where required by law or where we are acting as the data controller;</li>
                <li>Cooperate with clients in fulfilling their own breach notification obligations to regulators and individuals; and</li>
                <li>Document the breach, our response, and remediation steps in accordance with our incident response procedures.</li>
              </List>
            </SectionBlock>

            <SectionBlock id="data-retention">
              <SectionTitle>10. Data Retention</SectionTitle>
              <SectionText>
                We retain personal information only for as long as necessary to fulfill the purpose for which it was collected or as required by law. We do not maintain data repositories beyond operational necessity. Specific retention periods are as follows:
              </SectionText>
              <List>
                <li><b>Client service data (CRM, ERP records):</b> Retained during the active service relationship; deleted or returned within 90 days of contract termination unless otherwise required by law or agreed in writing;</li>
                <li><b>Call recordings:</b> Up to 3 years, or as required by client agreement, litigation hold, or applicable law;</li>
                <li><b>Accounting and financial records:</b> 7 years as required by IRS regulations and applicable law;</li>
                <li><b>Employee records:</b> Duration of employment plus up to 7 years as required by applicable labor and tax law;</li>
                <li><b>Job applicant records:</b> Up to 2 years from the date of application, unless extended by applicable law;</li>
                <li><b>Website and platform access logs: </b> Up to 12 months for security and operational purposes;</li>
                <li><b>Business correspondence:</b> Up to 7 years for legal and compliance purposes.</li>
              </List>
              <SectionText>
                Upon expiration of the applicable retention period, we securely delete or anonymize data using methods appropriate to its sensitivity. We do not archive, sell, or transfer data that has passed its retention period.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="industry-specific-compliance">
              <SectionTitle>11. Industry-Specific Compliance</SectionTitle>
              <SectionText>
                As a BPO serving all professional industries, we recognize that clients in specific sectors are subject to additional regulatory requirements. We support client compliance with the following frameworks:
              </SectionText>
              <List>
                <li><b>HIPAA:</b> For healthcare clients, we enter into Business Associate Agreements (BAAs) and implement required safeguards for Protected Health Information (PHI);</li>
                <li><b>GLBA:</b> For financial services clients, we observe Gramm-Leach-Bliley Act requirements for non-public personal financial information;</li>
                <li><b>PCI-DSS:</b> For services involving payment card data, we apply applicable PCI-DSS security standards; and</li>
                <li><b>Legal & Professional Services:</b> We recognize that attorney-client privilege and similar professional obligations may apply to data processed on behalf of legal or professional services clients and will cooperate to honor those requirements.</li>
              </List>
              <SectionText>
                Clients are responsible for identifying applicable sector-specific regulations at the time of engagement so that Hyacinth can tailor service agreements and data handling accordingly.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="your-privacy-rights">
              <SectionTitle>12. Your Privacy Rights</SectionTitle>
              <SectionText>
                Depending on your jurisdiction and relationship with us, you may have the following rights regarding your personal information:
              </SectionText>
              <List>
                <li><b>Right to Know / Access:</b> Request information about what personal data we hold about you and how it is used;</li>
                <li><b>Right to Correction:</b> Request correction of inaccurate or incomplete data;</li>
                <li><b>Right to Deletion:</b> Request deletion of your personal data, subject to legal retention requirements;</li>
                <li><b>Right to Data Portability:</b> Request your data in a structured, machine-readable format;</li>
                <li><b>Right to Opt Out of AI / ADMT:</b> Opt out of AI-assisted features within our CRM (see Section 3.3);</li>
                <li><b>Right to Opt Out of Sale or Sharing:</b> We do not sell or share data for advertising — this right is satisfied by our practices; and </li>
                <li><b>Right to Non-Discrimination: </b> We will not penalize you for exercising your privacy right.</li>
              </List>
              <SectionText>
                To submit a request, email <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a> with your name, contact information, and a description of your request. We will verify your identity before responding and aim to respond within 30 days, not exceeding 45 days under CCPA or 30 days under GDPR without providing notice of an extension.
              </SectionText>
              <SectionText>
                If your information is processed by Hyacinth on behalf of one of our clients, please direct your request to that client organization. We will assist the client in responding as required by our service agreement.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="state-specific">
              <SectionTitle>13. State-Specific Privacy Rights</SectionTitle>
              <Subheading>13.1  California (CCPA / CPRA)</Subheading>
              <SectionText>
                California residents have rights under the California Consumer Privacy Act as amended by the California Privacy Rights Act, including regulations effective January 1, 2026. Categories of personal information Hyacinth may have collected in the preceding 12 months include: identifiers, professional and employment information, commercial information (client records), internet or network activity (platform access logs), and inferences drawn from the above.
              </SectionText>
              <SectionText>
                We do not sell personal information. We do not share personal information for cross-context behavioral advertising. California residents may submit verifiable rights requests to <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a>.
              </SectionText>
              <Subheading>13.2 CIPA & Website Tracking (California)</Subheading>
              <SectionText>
                The California Invasion of Privacy Act (CIPA) and related wiretapping laws impose requirements on the use of tracking technologies. Hyacinth does not use advertising pixels, third-party behavioral trackers, session replay tools, or similar technologies on our website or platforms. We use only essential technical tools required for authentication, session management, and security. No consent to tracking beyond these operational technologies is required for use of our services.
              </SectionText>
              <Subheading>13.3 Other U.S States</Subheading>
              <SectionText>
                Residents of the following states have privacy rights under their perspective laws, and Hyacinth honors applicable rights requests:
              </SectionText>
              <List>
                <li>Virginia — Consumer Data Protection Act;</li>
                <li>Colorado — Colorado Privacy Act;</li>
                <li>Connecticut — Connecticut Data Privacy Act;</li>
                <li>Texas — Texas Data Privacy and Security Act;</li>
                <li>Florida — Florida Digital Bill of Rights;</li>
                <li>Indiana — Indiana Consumer Data Protection Act (effective January 1, 2026);</li>
                <li>Kentucky — Kentucky Consumer Data Protection Act (effective January 1, 2026); and </li>
                <li>Rhode Island — Rhode Island Data Transparency and Privacy Protection Act (effective January 1, 2026).</li>
              </List>
              <SectionText>
                As additional state privacy laws take effect, we will update this Policy accordingly. Contact <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a> to determine which rights apply based on your state of residence.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="international-data-transfers">
              <SectionTitle>14. International Data Transfers</SectionTitle>
              <SectionText>
                If we process personal information relating to individuals in the European Economic Area (EEA), United Kingdom, or other jurisdictions with cross-border data transfer restrictions, we will implement appropriate safeguards as required by applicable law, including Standard Contractual Clauses where required under GDPR. Clients with international data handling requirements should specify these in their service agreements.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="childrens-privacy">
              <SectionTitle>15. Children&apos;s Privacy</SectionTitle>
              <SectionText>
                Our services are directed exclusively to businesses and professional users. We do not knowingly collect personal information from individuals under the age of 16. If we learn that we have inadvertently collected such information, we will promptly delete it. If you believe we have collected information from a minor, please contact us at <a href="mailto:privacy@hyacinthindustriesllc.com">privacy@hyacinthindustriesllc.com</a>.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="cookies">
              <SectionTitle>16. Cookies & Tracking Technologies</SectionTitle>
              <SectionText>
                Our website and platforms use only essential cookies and technical session tools required for user authentication and session management, security and fraud prevention, and basic operational functionality. We do not use advertising cookies, cross-site tracking tools, or behavioral analytics platforms. You may manage cookie behavior through your browser settings; disabling session cookies may impair platform functionality.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="this-policy">
              <SectionTitle>17. Changes to This Policy</SectionTitle>
              <SectionText>
              We review this Privacy Policy at least annually and update it to reflect changes in our services, operations, or applicable law. Material changes will be communicated to active clients via direct notice and will be reflected with an updated effective date at the top of this document. Continued use of our services following notice of a material update constitutes acknowledgment of the revised policy.
              </SectionText>
            </SectionBlock>

            <SectionBlock id="contact-us">
              <SectionTitle>18. Contact Us</SectionTitle>
              <SectionText>
                Hyacinth has designated a Privacy & Compliance Officer responsible for overseeing our data protection practices and responding to rights requests. For questions, concerns, or privacy requests, please contact us at:
              </SectionText>
              <ContactCard>
                <strong>Hyacinth Industries LLC</strong>
                <span>Attn: Privacy &amp; Compliance Officer</span>
                <span>Email:</span>
                <a href="mailto:privacy@hyacinthindustriesllc.com">
                  privacy@hyacinthindustriesllc.com
                </a>
                <span>[Company Mailing Address]</span>
              </ContactCard>
              <SectionText>
                We will acknowledge all privacy inquiries within 5 business days and respond substantively within the timeframes required by applicable law.
              </SectionText>
            </SectionBlock>
            
            <SectionBlock id="data-sharing">
              <SectionTitle>Data Sharing</SectionTitle>
              <SectionText>
                <List>
                  <li>Customer data is not shared with 3rd parties for promotional or marketing purposes.</li>
                  <li>Marketing opt-in and consent are never shared with anyone for any purpose. Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.</li>
                </List>
              </SectionText>
            </SectionBlock>

            <SectionBlock id="messaging-terms">
              <SectionTitle>Hyacinth Industries LLC Messaging Terms and Conditions</SectionTitle>
              <OrderedList>
                <li>The messaging program consists of general conversational messaging to answer questions and provide support to customers.</li>
                <li>You can cancel the SMS service at any time. Just text &apos;STOP&apos; to the phone number from which you received messages. After you send the SMS message &apos;STOP&apos; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</li>
                <li>If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at info@hyacinthindustriesllc.com.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
                <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
                <li>If you have any questions regarding privacy, please read our privacy policy contained in the rest of this document/page.</li>
              </OrderedList>
            </SectionBlock>
          </PolicyCard>
          </ContentGrid>
        </ContentInner>
      </ContentSection>

      <Footer />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: #ffffff;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const Hero = styled.section`
  position: relative;
  padding: 3.5rem 20px 2.8rem;
  background:
    radial-gradient(circle at top right, rgba(139, 13, 42, 0.1), transparent 22%),
    radial-gradient(circle at botton left, rgba(207, 168, 92, 0.08), transparent 20%),
    linear-gradient(180deg, #f8f4ef 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(20, 20, 20, 0.06);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2.6rem 16px 2rem;
  }
`;

const HeroInner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem 2rem 1.9rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(20, 20, 20, 0.06);
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.06);
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(240px, 0.9fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    padding: 1.35rem 1.1rem 1.25rem;
    border-radius: 20px;
    gap: 1rem;
  }
`;

const HeroContent = styled.div`
  min-width: 0;
  max-width: 34rem;
`;

const HeroLogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 860px) {
    justify-content: flex-start;
  }
`;

const HeroLogo = styled.img`
  width: min(320px, 100%);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 12px 26px rgba(0, 0, 0, 0.12));

  @media (max-width: 860px) {
    width: min(260px, 78%);
  }

  @media (max-width: 640px) {
    width: min(220px, 72%);
  }
`;

const Eyebrow = styled.p`
  margin:  0 0 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 800;
  color: #8b0d2a;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.45rem, 4.8vw, 4rem);
  line-height: 0.96;
  letter-spacing: -0.05em;
  color: #1c2128;

  @media (max-width: 640px) {
    font-size: clamp(2rem, 9vw, 3rem);
    line-height: 1;
  }
`;

const CompanyName = styled.p`
  margin: 1rem 0 0;
  font-size: 1.06rem;
  font-weight: 700;
  color: #2f3640;
  line-height: 1.45;

  @media (max-width: 640px) {
    font-size: 1.05rem;
  }
`;

const MetaText = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.96rem;
  color: #64748b;
  line-height: 1.6;
`;

const PdfLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.15rem;
  min-height: 46px;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #8b0d2a, #6e0b21);
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 24px rgba(139, 13, 42, 0.16);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 28px rgba(139, 13, 42, 0.2);
  }
`;

const ContentSection = styled.section`
  padding: 2rem 20px 5rem;
  background:
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.03), transparent 18%),
    linear-gradient(180deg, #ffffff 0%, #faf8f5 100%);

  @media (max-width: 768px) {
    padding: 1.4rem 16px 4rem;
  }
`;

const ContentInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const PolicyCard = styled.article`
  min-width: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 26px;
  padding: 2.15rem 2.15rem 1.9rem;
  box-shadow: 0 18px 42px rgba(17, 17, 17, 0.06);

  @media (max-width: 640px) {
    padding: 1.25rem 1.1rem;
    border-radius: 18px;
  }
`;

const SectionBlock = styled.section`
  padding: 1.7rem 0;
  border-top: 1px solid rgba(20, 20, 20, 0.06);

  &:first-child {
    border-top: none;
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 0.9rem;
  font-size: 1.45rem;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #1c2128;

  @media (max-width: 640px) {
    font-size: 1.22rem;
  }
`;

const Subheading = styled.h3`
  margin: 1.25rem 0 0.7rem;
  font-size: 1.03rem;
  line-height: 1.35;
  color: #374151;
  font-weight: 700;
`;

const SectionText = styled.div`
  font-size: 0.99rem;
  line-height: 1.9;
  color: #475569;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;

  strong,
  b {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`;

const List = styled.ul`
  margin: 0.9rem 0 1.1rem 1.2rem;
  padding: 0;
  color: #475569;
  line-height: 1.9;
  list-style-position: outside;

  li {
    margin-bottom: 0.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 600;
  }
`;

const OrderedList = styled.ol`
  margin: 0.9rem 0 1.1rem;
  padding-left: 1.35rem;
  color: #475569;
  line-height: 1.9;

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
`;

const ContactCard = styled.div`
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: linear-gradient(180deg, #faf8f5, #fffdfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #334155;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  strong {
    color: #1f2937;
  }

  a {
    color: #8b0d2a;
    text-decoration: none;
    font-weight: 700;
  }
`;

//SideNav

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
  min-width: 0;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SideNav = styled.aside`
  position: relative;
  align-self: start;
  min-width: 0;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SideNavInner = styled.div`
  background: rgba(255, 253, 251, 0.94);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 22px;
  padding: 1rem 0.9rem;
  box-shadow: 0 12px 28px rgba(17, 17, 17, 0.05);
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

  @media (max-width: 980px) {
    position: static;
    max-height: none;
    overflow-x: visible;
    overflow-y: visible;
    padding: 0.85rem 0.8rem;
    border-radius: 18px;
  }
`;

const SideNavTitle = styled.p`
  margin: 0 0 0.65rem;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8b0d2a;

  @media (max-width: 980px) {
    margin-bottom: 0.55rem;
  }
`;

const MobileStickyNav = styled.div`
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
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.88));
    backdrop-filter: blur(8px);
    opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
    pointer-events: ${({ $isHidden }) => ($isHidden ? "none" : "auto")};
    transition: opacity 0.2s ease;
  }
`;

const MobileSectionJump = styled.select`
  display: none;
  width: 100%;
  margin-bottom: 0.8rem;
  padding: 0.8rem 0.95rem;
  border-radius: 14px;
  border: 1px solid rgba(139, 13, 42, 0.12);
  background: #ffffff;
  color: #334155;
  font-size: 0.95rem;
  font-family: var(--font-body);

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 0;
    box-shadow: 0 10px 22px rgba(17, 17, 17, 0.08);
  }
`;

const SideNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.3rem;

  @media (max-width: 980px) {
    display: none;
  }
`;

const SideNavItem = styled.li`
  margin: 0;
`;

const SideNavLink = styled.a`
  display: block;
  padding: 0.58rem 0.72rem;
  border-radius: 14px;
  color: ${({ $isActive }) => ($isActive ? "#8b0d2a" : "#475569")};
  text-decoration: none;
  font-size: 0.88rem;
  line-height: 1.35;
  background: ${({ $isActive }) =>
    $isActive ? "rgba(139, 13, 42, 0.08)" : "transparent"};
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? "rgba(139, 13, 42, 0.12)" : "transparent"};
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease,
    transform 0.2s ease;
  overflow-wrap: anywhere;

  &:hover {
    background: rgba(139, 13, 42, 0.06);
    color: #8b0d2a;
    border-color: rgba(139, 13, 42, 0.08);
    transform: translateX(2px);
  }
`;
