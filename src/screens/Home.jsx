import { useEffect } from "react";
import styled from "styled-components";

import Seo from "../components/Seo";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import HomeHeader from "../elements/HomeHeader";
import FeatureContent from "..//elements/HomeFeatureContent";
import BusinessActions from "..//elements/HomeBusinessActions";
import IndustriesExpertise from "..//elements/HomeIndustriesExpertise";
import HomeReforestationFeature from "../elements/HomeReforestationFeature";
import HomeTestimonials from "../elements/HomeTestimonials";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper id="home">
      <Seo
        title="Hyacinth Industries LLC | Fractional Executive Consulting for Brand, Deals & Product"
        description="Hyacinth Industries provides senior-level fractional executives to help companies strengthen brands, close bigger deals, and improve products without full-time hires."
        canonicalPath="/"
      />

      <TopNavBar />
      <SideBar />
      <HomeHeader />
      <HomeReforestationFeature />
      {/*<HomeTestimonials />*/} 
      <IndustriesExpertise />
      <BusinessActions />
      <FeatureContent />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;
