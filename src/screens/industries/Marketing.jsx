import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";

import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
import MarketingOverview from "../../elements/industries/tabs/MarketingOverview";

const marketingStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Marketing Support",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multimedia Production" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Editing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Voice Consistency" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Scheduling" } }
    ]
  }
};

export default function Marketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Seo
        title="Marketing Services | Hyacinth Industries LLC"
        description="Marketing support including multimedia production, video editing, graphic design, and social media management. Strengthen your brand's digital presence."
        canonicalPath="/marketing/"
        image="/og-marketing.jpg"
        structuredData={marketingStructuredData}
      />

      <TopNavBar />
      <SideBar />
      <MarketingOverview />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
