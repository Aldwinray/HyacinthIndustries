import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import WebDesignOverview from "../../elements/industries/tabs/WebDesignOverview";


const webDesignStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Responsive Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Applications" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creative Design & Branding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance & Support" } }
    ]
  }
};

export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="web-design">
      <Seo
        title="Web Design Services | Hyacinth Industries LLC"
        description="Custome web design and development services including responsive UI/UX design, SEO optimization, and website maintenance. Build a high-converting digital presence."
        canonicalPath="/web-design/"
        image="/og-web-design.jpg"
        structuredData={webDesignStructuredData}
      />
      <TopNavBar />
      <SideBar />
      <WebDesignOverview />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
