import  { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import GeneralServicesContentWrapper from "../../elements/industries/GeneralServicesContentWrapper";

const generalServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "General Business Services",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "General Business Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Administration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Human Resources" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Services" } }
    ]
  }
};

export default function GeneralServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Seo
        title="General Business Services | Hyacinth Industries LLC"
        description="Comprehensive business services including customer support, office administration, HR solutions, and security services. End-to-end operational support."
        canonicalPath="/general-services/"
        image="/og-general-services.jpg"
        structuredData={generalServicesStructuredData}
      />
      <TopNavBar />
      <SideBar />
      <GeneralServicesContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
