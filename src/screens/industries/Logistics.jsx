import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import LogisticsContentWrapper from "../../elements/industries/LogisticsContentWrapper";

export default function Logistics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="logistics">
      <Seo
        title="Logistics Services | Hyacinth Industries LLC"
        description="Logistics services from Hyacinth Industries LLC to improve shipment visibility, coordination, operational efficiency, and business performance."
        canonicalPath="/logistics/"
      />

      <TopNavBar />
      <SideBar />
      <LogisticsContentWrapper />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 0;
`;
