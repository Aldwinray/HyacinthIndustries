import { useEffect } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";

import ReforestationBg from "../assets/img/backgrounds/ReforestationBg4.webp";

import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import reforestationClients from "../data/reforestationClients";

export default function Reforestation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const structureData = [
  {
    "@context": "https://schema.org",
    "@type" : "WebPage",
    name: "Hyacinth Reforestation Project 2026",
    description:
      "Learn about the Hyacinth Industries Reforestation Project, including tree allocations, participating organizations, GPS-based planting visibility, and QR bark tag identification.",
    url: "https://hyacinthindustriesllc.com/reforestation",
  },
  {
    "@context": "https://schema.org",
    "@type" : "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hyacinthindustriesllc.com/",
      },
      {
        "@type" : "ListItem",
        position: 2,
        name: "Reforestation Project",
        item: "https://hyacinthindustriesllc.com/reforestation",
      },
    ],
  },
];

  return (
    <Wrapper>
      <Seo
        title="Reforestation Project 2026 | Tree Planting & Sustainability Initiative | Hyacinth Industries"
        description="Explore the Hyacinth Industries Reforestation Project, including tree planting allocations, participating organizations, QR bark tag identification, GPS-based planting records, and Earth Month sustainability efforts."
        canonicalPath="/reforestation"
        type="article"
        image="/og-image-v2.webp"
        structuredData={structureData}
      />

      <TopNavBar />
      <SideBar />

      <HeroSection>
        <HeroInner>
          <HeroPanel>
            <Eyebrow>Reforestation Initiative</Eyebrow>
            <HeroTitle>Hyacinth Reforestation Project 2026</HeroTitle>
            <HeroText>
              The Hyacinth Reforestation Project is a tree planting and sustainability
              initiative that helps organizations support environmental impact while gaining
              visibility through participating organization features, QR bark tag
              identification, and GPS-based planting records.
            </HeroText>
            
            <ProjectNote>
              Each QR tag routes back to this landing page, where participating
              organizations, planting details, and future project updates can be viewed.
            </ProjectNote>

            <HeroStats>
              <HeroStat>
                <strong>Planting Cycles</strong>
                <span>Organization-linked tree allocation</span>
              </HeroStat>
              <HeroStat>
                <strong>Bark Tag System</strong>
                <span>Natural tree-level identification</span>
              </HeroStat>
              <HeroStat>
                <strong>Tracked Impact</strong>
                <span>GPS-based planting records</span>
              </HeroStat>
            </HeroStats>
            <HeroActions>
              <HeroButton
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("client-directory");
                  const offset = 120; // navbar height

                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                View Participating Clients</HeroButton>
              <HeroButtonSecondary
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("how-it-works");
                  const offset = 120; // navbar height

                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                How It Works
              </HeroButtonSecondary>
            </HeroActions>
          </HeroPanel>
        </HeroInner>
      </HeroSection>

      <ContentSection>
        <SectionInner>
          <OverviewGrid>
            <OverviewCopy>
              <SectionEyebrow>Project Overview</SectionEyebrow>
              <SectionTitle>Project Purpose</SectionTitle>
              <SectionText>
                This initiative connects client relationships with measurable tree planting.
                Each participating organization receives a tree allocation based on employee
                tenure, and every planting cycle contributes to Hyacinth Industries&apos;
                long-term sustainability efforts.
              </SectionText>                                                             
              <SectionText>
                The program is designed to create environmental impact while giving clients
                a more visible and lasting connection to the initiative through bark tags,
                QR routing, and GPS-based planting records.
              </SectionText>
            </OverviewCopy>

            <OverviewPanel>
              <OverviewPanelTitle>One landing page. Multiple client allocations.</OverviewPanelTitle>
              <OverviewList>
                <li>Acts as the shared destination for every QR bark tag in the field</li>
                <li>Shows participating organizations and their current tree allocations</li>
                <li>Creates a long-term sustainability touchpoint for current and former clients</li>
                <li>Supports future paid add-ons such as banners, swag, photos, video, and social content</li>
              </OverviewList>
            </OverviewPanel>
          </OverviewGrid>

          <StatsGrid>
            <StatCard>
              <StatNumber>35</StatNumber>
              <StatLabel>Trees Planted in 2025</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>335</StatNumber>
              <StatLabel>Projected in 2026</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>960</StatNumber>
              <StatLabel>Projected for 2027</StatLabel>
            </StatCard>
          </StatsGrid>
        </SectionInner>
      </ContentSection>

      <AltSection id="how-it-works">
        <SectionInner>
          <SectionEyebrow>Process</SectionEyebrow>
          <SectionTitle>How The Reforestation System Works</SectionTitle>
          <ProcessGrid>
            <ProcessCard>
              <ProcessStep>01</ProcessStep>
              <ProcessHeading>Tree allocation</ProcessHeading>
              <ProcessText>
                Each participating organization receives a tree allocation tied to
                employee tenure and the current planting cycle.
              </ProcessText>
            </ProcessCard>

            <ProcessCard>
              <ProcessStep>02</ProcessStep>
              <ProcessHeading>Bark tag identification</ProcessHeading>
              <ProcessText>
                Each planted tree receives a bark-based tag with a laser-engraved QR code
                on the front and Hyacinth Reforestation Project branding on the reverse.
              </ProcessText>
            </ProcessCard>

            <ProcessCard>
              <ProcessStep>03</ProcessStep>
              <ProcessHeading>Cluster mapping</ProcessHeading>
              <ProcessText>
                Trees are planted in clusters, and GPS coordinates are recorded for every
                10 trees so planting areas remain identifiable even after the bark tags
                naturally degrade over time.
              </ProcessText>
            </ProcessCard>

            <ProcessCard>
              <ProcessStep>04</ProcessStep>
              <ProcessHeading>Visibility page</ProcessHeading>
              <ProcessText>
                Scanning the QR code routes visitors to this page, where the project,
                participating clients, and future updates can be viewed.
              </ProcessText>
            </ProcessCard>
          </ProcessGrid>
        </SectionInner>
      </AltSection>

      <ClientSection id="client-directory">
        <SectionInner>
          <SectionEyebrow>Participating Organizations</SectionEyebrow>
          <SectionTitle>Participating Organizations</SectionTitle>
          <ClientGrid>
            {reforestationClients.map((client) => (
              <ClientCard key={client.slug} id={client.slug}>
                <ClientBadge>Participating {client.year}</ClientBadge>
                <LogoWrap>
                  <ClientLogo src={client.logo} alt={`${client.name} logo`} />
                </LogoWrap>
                <ClientBody>
                  <ClientName>{client.name}</ClientName>
                  <TreeCount>{client.treeCount} Trees</TreeCount>
                  <ClientMeta>{client.year} Allocation</ClientMeta>
                  <ClientSummary>{client.summary}</ClientSummary>
                </ClientBody>
                <ClientButton
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </ClientButton>
              </ClientCard>
            ))}
          </ClientGrid>
        </SectionInner>
      </ClientSection>

      <AltSection>
        <SectionInner>
          <SectionEyebrow>Marketing Package</SectionEyebrow>
          <SectionTitle>Reforestation Packages</SectionTitle>
          <SectionText>
            Participating organizations may also choose optional support tied to the
            reforestation initiative, including tarpaulins, branded swag, photography,
            videography, and social content.
          </SectionText>
        </SectionInner>
      </AltSection>

      <CtaSection>
        <SectionInner>
          <CtaCard>
            <CtaTitle>Interested in participating in the next planting cycle?</CtaTitle>
            <CtaText>
              Hyacinth Industries can align future tree allocations, visibility assets, and optional brand activation support with your organization.
            </CtaText>
            <CtaButton href="/contact">Contact Hyacinth</CtaButton>
          </CtaCard>
        </SectionInner>
      </CtaSection>
      
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background:
    linear-gradient(180deg, #f6f2eb 0%, #ffffff 28%, #f5f7f2 100%);

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: calc(100dvh - 110px);
  padding: clamp(1.5rem, 2.2vw, 2.75rem) 20px clamp(1.75rem, 2.8vw, 3.25rem);
  display: flex;
  align-items: center;
  background-image: url(${ReforestationBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 18%, rgba(226, 196, 107, 0.2), transparent 20%),
      radial-gradient(circle at 82% 22%, rgba(72, 127, 94, 0.14), transparent 26%),
      linear-gradient(135deg, rgba(10, 24, 18, 0.68), rgba(58, 14, 25, 0.58)),
      linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.22));
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 42px 42px;
    opacity: 0.18;
    mix-blend-mode: soft-light;
    z-index: 1;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (min-width: 1680px) {
    min-height: calc(100dvh - 110px);
    padding: 2.5rem 28px 3rem;
  }

  @media (max-width: 1024px) {
    min-height: calc(100dvh - 60px);
    padding: 1.25rem 16px 1.75rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 1rem 16px 1.5rem;
  }
`;

const HeroInner = styled.div`
  width: min(1240px, calc(100% - 0.5rem));
  margin: 0 auto;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  min-height: inherit;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const HeroPanel = styled.div`
  width: min(760px, 100%);
  padding: clamp(1.2rem, 1.8vw, 2rem);
  border-radius: clamp(24px, 2vw, 32px);
  background: linear-gradient(180deg, rgba(10, 18, 14, 0.5), rgba(10, 18, 14, 0.24));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 52px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(12px);

  @media (min-width: 1680px) {
    width: min(860px, 100%);
    padding: 1.6rem 1.7rem 1.75rem;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0.95rem 0.9rem 1rem;
    border-radius: 20px;
  }
`;

const ProjectNote = styled.p`
  max-width: 42rem;
  margin: 0.8rem 0 0;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  line-height: 1.58;
  font-size: clamp(0.92rem, 0.98vw, 1rem);
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: 1680px) {
    max-width: 44rem;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.92rem;
    line-height: 1.5;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  color: #f1d28b;
  font-size: 0.76rem;
`;

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 10ch;
  font-size: clamp(2.2rem, 5vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  color: #ffffff;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.24);

  @media (min-width: 1680px) {
    font-size: clamp(3.6rem, 4.8vw, 5.8rem);
    max-width: 11ch;
  }

  @media (max-width: 1024px) {
    font-size: clamp(2rem, 5vw, 3.8rem);
  }

  @media (max-width: 768px) {
    max-width: 11ch;
    font-size: clamp(1.9rem, 8vw, 3.1rem);
  }
`;

const HeroText = styled.p`
  max-width: 46rem;
  margin: 0.8rem 0 0;
  line-height: 1.62;
  font-size: clamp(0.96rem, 1.08vw, 1.08rem);
  color: rgba(255, 255, 255, 0.91);

  @media (min-width: 1680px) {
    max-width: 48rem;
    font-size: 1.08rem;
    line-height: 1.68;
  }

  @media (max-width: 1024px) {
    font-size: 0.96rem;
    line-height: 1.56;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.88rem 1.12rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #f1c75c, #d9a73d);
  color: #111111;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.92rem;
  box-shadow: 0 14px 30px rgba(217, 167, 61, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(217, 167, 61, 0.3);
  }

  @media (min-width: 1680px) {
    padding: 0.95rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.95rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const HeroButtonSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.88rem 1.12rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.24);
  }

  @media (min-width: 1680px) {
    padding: 0.95rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const HeroStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.9rem;
`;

const HeroStat = styled.div`
  min-width: 150px;
  padding: 0.72rem 0.82rem;
  border-radius: 16px;
  background: rgba(248, 251, 247, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);

  strong {
    display: block;
    font-size: 0.95rem;
    color: #ffffff;
    letter-spacing: 0.01em;
  }

  span {
    display: block;
    margin-top: 0.15rem;
    font-size: 0.83rem;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (min-width: 1680px) {
    min-width: 165px;
    padding: 0.8rem 0.9rem;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.86rem;
    }
  }

  @media (max-width: 640px) {
    min-width: 100%;
  }
`;

const SectionEyebrow = styled.p`
  scroll-margin-top: 140px;
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const ContentSection = styled.section`
  position: relative;  
  padding: 5rem 20px;
  background: 
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.05), transparent 26%),
    linear-gradient(180deg, #f7f4ef 0%, #fcfaf7 48%, #ffffff 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
`;

const AltSection = styled.section`
  position: relative;
  padding: 5rem 20px;
  background:
    radial-gradient(circle at bottom right, rgba(61, 100, 74, 0.08), transparent 24%),
    linear-gradient(180deg, #f2f5f1 0%, #eef2ee 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 16px;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.article`
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), #f9fbf8);
  border: 1px solid rgba(20, 20, 20, 0.08);
  border-radius: 26px;
  padding: 1.5rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 42px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.14);
  }
`;

const ProcessStep = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b0d2a, #c89b2c);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  margin-bottom: 1rem;
  box-shadow: 0 12px 24px rgba(139, 13, 42, 0.18);
`;

const ProcessHeading = styled.h3`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.08rem;
  line-height: 1.25;
  color: #17181c;
`;

const ProcessText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  line-height: 1.8;
  color: #4f5b68;
`;

const ClientSection = styled.section`
  position: relative;
  padding: 5rem 20px 5.5rem;
  background:
    radial-gradient(circle at top right, rgba(200, 155, 44, 0.08), transparent 18%),
    linear-gradient(180deg, #ffffff 0%, #f8faf6 100%);

  @media (max-width: 768px) {
    padding: 4rem 16px 4.5rem;
  }
`;

const SectionInner = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
  color: #16181b;

  &::after {
    content: "";
    display: block;
    width: 88px;
    height: 4px;
    margin-top: 1rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }
`;

const SectionText = styled.p`
  max-width: 50rem;
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1.03rem;
  line-height: 1.9;
  color: #475569;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 1.5rem;
  align-items: start;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const OverviewCopy = styled.div``;

const OverviewPanel = styled.div`
  background: linear-gradient(180deg, #ffffff, #f7faf8);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 1.7rem;
  box-shadow: 0 22px 44px rgba(17, 17, 17, 0.08);

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 22px;
  }
`;

const OverviewPanelTitle = styled.h3`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 1.28rem;
  line-height: 1.2;
  color: #17181c;
`;

const OverviewList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.85rem;
    line-height: 1.75;
    color: #475569;
  }

  li::marker {
    color: #8b0d2a;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfa);
  border: 1px solid rgba(20, 20, 20, 0.07);
  border-radius: 26px;
  padding: 1.6rem;
  box-shadow: 0 16px 32px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 40px rgba(17, 17, 17, 0.09);
  }
`;

const StatNumber = styled.div`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #8b0d2a;
`;

const StatLabel = styled.p`
  margin: 0.55rem 0 0;
  font-family: var(--font-body);
  font-size: 0.96rem;
  line-height: 1.6;
  color: #5b6675;
`;

const ClientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.35rem;
  margin-top: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ClientCard = styled.article`
  background: linear-gradient(180deg, #ffffff, #fcfdfb);
  border: 1px solid rgba(20, 20, 20, 0.08);
  border-radius: 26px;
  padding: 1.5rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 4px;
    background: linear-gradient(90deg, rgba(139, 13, 42, 0.92), rgba(200, 155, 44, 0.9));
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 42px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.16);
  }

  @media (max-width: 640px) {
    padding: 1.25rem;
    border-radius: 22px;
  }
`;

const ClientBadge = styled.span`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.48rem 0.82rem;
  border-radius: 999px;
  background: #fff4ee;
  border: 1px solid rgba(139, 13, 42, 0.12);
  color: #8b0d2a;
  font-size: 0.82rem;
  font-weight: 700;
`;

const LogoWrap = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const ClientLogo = styled.img`
  max-width: 160px;
  max-height: 72px;
  object-fit: contain;
  display: block;
`;

const ClientBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ClientName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const TreeCount = styled.p`
  margin: 0.5rem 0 0;
  font-weight: 800;
  color: #8b0d2a;
`;

const ClientMeta = styled.p`
  margin: 0.35rem 0 0;
  color: #64748b;
`;

const ClientSummary = styled.p`
  margin: 1rem 0 0;
  line-height: 1.7;
  color: #475569;
  min-height: 5.2rem;
`;

const ClientButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
  padding: 0.78rem 1.05rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #141414, #0b0b0b);
  color: white;
  text-decoration: none;
  font-weight: 700;
  align-self: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 22px rgba(17, 17, 17, 0.16);
  }
`;

const CtaSection = styled.section`
  padding: 0 20px 5rem;

  @media (max-width: 768px) {
    padding: 0 16px 4rem;
  }
`;

const CtaCard = styled.div`
  border-radius: 30px;
  padding: 2.5rem 2rem;
  background:
    radial-gradient(circle at top left, rgba(244, 196, 77, 0.14), transparent 22%),
    linear-gradient(135deg, #8b0d2a, #2a3c2f);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 50px rgba(48, 16, 21, 0.18);

  @media (max-width: 640px) {
    padding: 1.75rem 1.2rem;
    border-radius: 22px;
  }
`;

const CtaTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
`;

const CtaText = styled.p`
  max-width: 44rem;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.86);
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  background: #f4c44d;
  color: #111111;
  text-decoration: none;
  font-weight: 800;
`;