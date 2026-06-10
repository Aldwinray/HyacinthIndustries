import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import HealthcareContentWrapper from "../../elements/industries/HealthcareContentWrapperStandard";


const healthcareStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Healthcare Support",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual Healthcare & Telehealth" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Administrative Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Billing & Coding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revenue Cycle Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remote Patient Monitoring" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HIPAA Compliant Data Security" } }
    ]
  }
};

export default function Healthcare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="healthcare">
      <Seo
        title="Healthcare Support Services | Hyacinth Industries LLC"
        description="HIPAA-compliant healthcare support including medical billing, revenue cycle management, telehealth coordination, and patient scheduling. Reliable assistance for healthcare providers."
        canonicalPath="/healthcare/"
        image="/og-healthcare.jpg"
        structuredData={healthcareStructuredData}
      />
      <TopNavBar />
      <SideBar />
      <HealthcareContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
