import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";

import TopNavBar from "../../components/Nav/TopNavBar";
import SideBar from "../../components/Nav/Sidebar";
import Footer from "../../components/Nav/Footer";
import MarketingOverview from "../../elements/industries/tabs/MarketingOverview";

export default function Marketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Seo
        title="Marketing Services | Hyacinth Industries LLC"
        description="Marketing services from Hyacinth Industries LLC focused on multimedia production, social media management, and stronger digital brand execution."
        canonicalPath="/marketing"
      />

      <TopNavBar />
      <SideBar />
      <MarketingOverview />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  padding-top: 110px;
`;
