import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import ThreeDAnimationOverview from "../../elements/industries/tabs/3DAnimationOverview";

const animationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "3D Animation & Visualization",
  "provider": {
    "@type": "Organization",
    "name": "Hyacinth Industries LLC",
    "url": "https://hyacinthindustriesllc.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "3D Animation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Modeling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Animation Production" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interactive Media (VR/AR)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visual Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Game Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compositing & VFX" } }
    ]
  }
};

export default function ThreeDAnimation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="3d-animation">
      <Seo
        title="3D Animation Services | Hyacinth Industries LLC"
        description="Professional 3D animation services including modeling, rendering, character animation, and visual effects. High-quality visual storytelling for your brand."
        canonicalPath="/3d-animation/"
        image="/og-3d-animation.jpg"
        structuredData={animationStructuredData}
      />
      
      <TopNavBar />
      <SideBar />
      <ThreeDAnimationOverview />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
