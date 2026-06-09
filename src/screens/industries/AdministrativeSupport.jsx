import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import AdministrativeSupportContentWrapper from "../../elements/industries/AdministrativeSupportContentWrapper";


export default function AdministrativeSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="administrative-support">
      <Seo
        title="Administrative Support Services | Hyacinth Industries LLC"
        description="Administrative support services from Hyacinth Industries LLC to streamline operations, improve productivity, and keep teams focused on growth."
        canonicalPath="/administrative-support/"
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
