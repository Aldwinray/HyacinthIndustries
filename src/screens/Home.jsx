import { useEffect, Suspense, lazy } from "react";
import styled from "styled-components";

import Seo from "../components/Seo";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import HomeHeader from "../elements/HomeHeader";
const FeatureContent = lazy(() => import("../elements/HomeFeatureContent"));
const BusinessActions = lazy(() => import("../elements/HomeBusinessActions"));
const IndustriesExpertise = lazy(() => import("../elements/HomeIndustriesExpertise"));
const HomeReforestationFeature = lazy(() => import("../elements/HomeReforestationFeature"));
const HomeTestimonials = lazy(() => import("../elements/HomeTestimonials"));

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
      <Suspense fallback={null}>
      {/*<HomeReforestationFeature />
      {/*<HomeTestimonials />*/}
      <IndustriesExpertise />
      <BusinessActions />
      <FeatureContent />
      </Suspense>
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
