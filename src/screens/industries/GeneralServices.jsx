import  { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import GeneralServicesContentWrapper from "../../elements/industries/GeneralServicesContentWrapper";

export default function GeneralServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <Seo
        title="General Business Services | Hyacinth Industries LLC"
        description="General business services from Hyacinth Industries LLC designed to strengthen operations, support teams, and accelerate business growth."
        canonicalPath="/general-services"
      />
      <TopNavBar />
      <SideBar />
      <GeneralServicesContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`;
