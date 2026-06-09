import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
//components
import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
//elements
import WebDesignOverview from "../../elements/industries/tabs/WebDesignOverview";


export default function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper id="web-design">
      <Seo
        title="Web Design Services | Hyacinth Industries LLC"
        description="Web design services from Hyacinth Industries LLC to improve digital presence, user experience, conversion performance, and online growth."
        canonicalPath="/web-design/"
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
