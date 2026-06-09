import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import ThreeDAnimationOverview from "../../elements/industries/tabs/3DAnimationOverview";


export default function ThreeDAnimation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="3d-animation">
      <Seo
        title="3D Animation Services | Hyacinth Industries LLC"
        description="3D animation services from Hyacinth Industries LLC delivering high-quality visual storytelling and professional animation solutions."
        canonicalPath="/3d-animation/"
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
