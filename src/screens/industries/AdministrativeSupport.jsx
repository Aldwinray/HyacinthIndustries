import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import AdministrativeSupportContentWrapper from "../../elements/industries/AdministrativeSupportContentWrapper";

const adminStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Administrative Support",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Administrative Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Document Processing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheduling & Planning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Correspondence Management" } }
    ]
  }
};

export default function AdministrativeSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="administrative-support">
      <Seo
        title="Administrative Support Services | Hyacinth Industries LLC"
        description="Professional adminstrative support including document management, data entry, scheduling, email management, and research. Streamline your back-office operations."
        canonicalPath="/administrative-support/"
        image="/og-administrative.jpg"
        structuredData={adminStructuredData}
      />
      
      <TopNavBar />
      <SideBar />
      <AdministrativeSupportContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
