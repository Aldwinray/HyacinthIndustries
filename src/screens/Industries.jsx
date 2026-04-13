import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";
//components
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import IndustriesExpertise from "../elements/HomeIndustriesExpertise";
import { heroEyebrow, pageTitle, sectionSpacing, supportingText } from "../styles/premiumPageStyles";


export default function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Industries & Expertise",
    description:
      "Explore the industries Hyacinth Industries supports, including logistics, healthcare, marketing, administrative support, web design, and business operations.",
    url: "https://hyacinthindustriesllc.com/industries",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hyacinthindustriesllc.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://hyacinthindustriesllc.com/industries",
      },
    ],
  },
];

  return (
    <Wrapper id="industries">
      <Seo
        title="Industries We Support | Logistics, Healthcare, Marketing & More | Hyacinth Industries"
        description="Explore the industries Hyacinth Industries supports, including logistics, healthcare, marketing, administrative support, web design, 3D animation, and general business services."
        canonicalPath="/industries"
        type="website"
        image="/og-image-v2.webp"
        structuredData={structuredData}
      />


      <TopNavBar />
      <SideBar />
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>Capabilities</HeroEyebrow>
          <Title>Cross-functional support built around real operating pressure.</Title>
          <Description>
            Explore the industries where Hyacinth Industries delivers specialized execution, domain fluency, and scalable support.
          </Description>
        </HeroInner>
      </HeroSection>
      <IndustriesExpertise />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px; /* Account for fixed navbar height */

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  ${sectionSpacing};
  padding-bottom: 3rem;
  background:
    radial-gradient(circle at top center, rgba(220, 20, 60, 0.08), transparent 58%),
    linear-gradient(180deg, #ffffff, #fbf7f8);
`;

const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`;

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: #8b0d2a;
`;

const Title = styled.h1`
  ${pageTitle};
`;

const Description = styled.p`
  ${supportingText};
  max-width: 46rem;
  margin: 0 auto;
  text-align: center;
`;
