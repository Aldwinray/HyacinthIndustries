import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import HealthcareContentWrapper from "../../elements/industries/HealthcareContentWrapperStandard";


export default function Healthcare() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="healthcare">
      <Seo
        title="Healthcare Support Services | Hyacinth Industries LLC"
        description="Healthcare support services from Hyacinth Industries LLC focused on reliable assistance, operational excellence, and improved patient-service workflows."
        canonicalPath="/healthcare"
      />
      <TopNavBar />
      <SideBar />
      <HealthcareContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 110px; /* Account for fixed navbar height */
`;
