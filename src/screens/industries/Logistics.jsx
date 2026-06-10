import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import LogisticsContentWrapper from "../../elements/industries/LogisticsContentWrapper";

const logisticsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Logistics Support",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Logistics Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Entry & Shipment Processing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Track and Trace" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carrier Sales" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Load Planning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Afterhours Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logistics Coordination" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics" } }
    ]
  }
};

export default function Logistics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="logistics">
      <Seo
        title="Logistics Support Services | Track & Trace, Load Planning | Hyacinth Industries LLC"
        description="Professional logistics support including 24/7 track and trace, load planning, carrier sales, and dispatch services. Improve shipment visibility and operational efficiency."
        canonicalPath="/logistics/"
        image="/og-logistics.jpg"
        structuredData={logisticsStructuredData}
      />

      <TopNavBar />
      <SideBar />
      <LogisticsContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
