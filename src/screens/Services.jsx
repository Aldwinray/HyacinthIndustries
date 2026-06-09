import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Compass,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import Seo from "../components/Seo";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";

const serviceSections = [
  {
    icon: Sparkles,
    title: "Brand Strengthening",
    kicker: "Positioning & Messaging",
    includes:
      "This service includes work on brand narrative, positioning clarity, messaging refinement, executive-level presentation, and the commercial materials that shape how the market understands your business. It can involve clarifying what you want to be known for, tightening category language, improving how value is communicated across leadership and sales conversations, and identifying where your current presentation is weakening trust or creating confusion. The goal is not superficial branding work. It is to make sure the company is described in a way that supports stronger conversations, better-fit opportunities, and a more credible presence with serious buyers, partners, and stakeholders.",
    body: "Hyacinth Industries helps companies sharpen how they are understood in the market so their positioning, messaging, and outward presence support growth instead of slowing it down. This work can include clarifying brand narrative, tightening category positioning, refining how teams talk about value, and aligning commercial materials with the level of buyer you want to attract.",
    forWho:
      "Best for companies repositioning for growth, entering a new market, or trying to present a more credible executive profile to higher-value buyers.",
    outcomes: [
      "Clearer market positioning and sharper category language",
      "Better alignment between leadership messaging and sales materials",
      "Stronger trust signals for partners, buyers, and investors",
    ],
    cta: "Talk About Brand Strategy",
    accent: "#8b0d2a",
    accentLight: "rgba(139, 13, 42, 0.06)",
  },
  {
    icon: BriefcaseBusiness,
    title: "Deal Strategy & Closing",
    kicker: "Commercial Execution",
    includes:
      "This service includes support across qualification, stakeholder mapping, opportunity strategy, offer framing, partnership structure, and the communication required to keep a deal moving. It can also include reviewing where momentum is breaking down, identifying weak points in the commercial process, and improving how teams manage decision-makers, objections, and next steps. The focus is on increasing discipline around complex opportunities rather than relying on reactive selling.",
    body: "This service is built for organizations that need more discipline and leverage across the deal cycle, especially when opportunities are strategic, high value, or operationally complex. Hyacinth Industries supports the work around qualification, stakeholder mapping, offer framing, partnership structuring, and the communication needed to keep momentum through closing.",
    forWho:
      "Best for commercial teams, founders, and principals pursuing larger accounts, partnerships, or strategic transactions where the process needs senior-level structure.",
    outcomes: [
      "Improved deal qualification and stakeholder alignment",
      "Stronger commercial messaging at key negotiation moments",
      "Higher confidence and discipline in moving complex deals to close",
    ],
    cta: "Discuss a Growth Opportunity",
    accent: "#1a5c3a",
    accentLight: "rgba(26, 92, 58, 0.06)",
  },
  {
    icon: Compass,
    title: "Product Improvement",
    kicker: "Execution & Prioritization",
    includes:
      "This service includes evaluating customer friction, clarifying product or service priorities, improving the handoff between teams, and turning market feedback into better operating decisions. It can cover where the current offer feels hard to use, hard to explain, or hard to scale, as well as where execution issues are creating product problems that are not purely technical.",
    body: "Product improvement work focuses on making what you already offer more effective, more usable, and more aligned with what customers actually need. That can mean identifying friction in the experience, tightening feature priorities, improving handoff between teams, or translating market feedback into clearer product decisions.",
    forWho:
      "Best for teams with an established product or service that needs sharper customer alignment, clearer prioritization, and stronger execution around delivery.",
    outcomes: [
      "Reduced friction in customer experience and internal workflows",
      "Stronger alignment between product decisions and business goals",
      "More focused roadmaps tied to adoption, retention, and growth",
    ],
    cta: "Start a Product Conversation",
    accent: "#7c3a15",
    accentLight: "rgba(124, 58, 21, 0.06)",
  },
];

const serviceSignals = [
  {
    text: "Senior-level thinking translated into practical execution",
    icon: BadgeCheck,
  },
  {
    text: "Structured support across brand, deals, and product decisions",
    icon: BadgeCheck,
  },
  {
    text: "Clear commercial and operational outcomes, not generic advisory language",
    icon: BadgeCheck,
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper id="services">
      <Seo
        title="Services | Hyacinth Industries LLC"
        description="Explore Hyacinth Industries services in brand strengthening, deal strategy and closing, and product improvement."
        canonicalPath="/services/"
      />

      <TopNavBar />
      <SideBar />

      <HeroSection>
        <HeroBg />
        <HeroInner>
          <HeroEyebrow>
            <EyebrowDot />
            Services
          </HeroEyebrow>
          <HeroTitle>
            Growth, execution, and
            <br />
            <HeroTitleAccent>commercial clarity.</HeroTitleAccent>
          </HeroTitle>
          <HeroDescription>
            Hyacinth Industries supports companies that need sharper positioning,
            stronger deal execution, and better product decisions — without
            adding unnecessary complexity.
          </HeroDescription>
          <HeroActions>
            <HeroPrimaryButton href="#services-list">
              Explore Services
              <ArrowRight size={17} />
            </HeroPrimaryButton>
            <HeroSecondaryButton href="/contact/">
              Get In Touch
            </HeroSecondaryButton>
          </HeroActions>
        </HeroInner>
      </HeroSection>

      <OverviewSection>
        <OverviewInner>
          <OverviewHeader>
            <OverviewEyebrow>
              <EyebrowDot $color="#8b0d2a" />
              What We Help Improve
            </OverviewEyebrow>
            <OverviewTitle>
              Consulting support built around the moments where clarity matters
              most.
            </OverviewTitle>
            <OverviewText>
              Our services are designed to help leadership teams move from broad
              ambition to clearer direction, stronger discipline, and outcomes
              that stand up under growth pressure.
            </OverviewText>
          </OverviewHeader>

          <SignalGrid>
            {serviceSignals.map((signal) => (
              <SignalCard key={signal.text}>
                <SignalIconWrap>
                  <signal.icon size={18} />
                </SignalIconWrap>
                <SignalContent>
                  <SignalText>{signal.text}</SignalText>
                </SignalContent>
                <SignalArrow>
                  <ChevronRight size={16} />
                </SignalArrow>
              </SignalCard>
            ))}
          </SignalGrid>
        </OverviewInner>
      </OverviewSection>

      <SectionsWrap id="services-list">
        <SectionsInner>
          {serviceSections.map((section, idx) => (
            <ServiceSection key={section.title}>
              <ServiceHeader $accent={section.accent}>
                <ServiceHeaderInner>
                  <ServiceIconWrap
                    $bg={section.accentLight}
                    $color={section.accent}
                  >
                    <section.icon size={22} />
                  </ServiceIconWrap>
                  <ServiceMeta>
                    <ServiceKicker $color={section.accent}>
                      {section.kicker}
                    </ServiceKicker>
                    <ServiceTitle>{section.title}</ServiceTitle>
                  </ServiceMeta>
                  <ServiceNumber $color={section.accent}>
                    {String(idx + 1).padStart(2, "0")}
                  </ServiceNumber>
                </ServiceHeaderInner>
              </ServiceHeader>

              <ServiceBody>
                <ServiceMainCol>
                  <ServiceIntro>{section.body}</ServiceIntro>

                  <IncludesBlock>
                    <IncludesLabel>What This Includes</IncludesLabel>
                    <IncludesText>{section.includes}</IncludesText>
                  </IncludesBlock>
                </ServiceMainCol>

                <ServiceSideCol>
                  <SideCard>
                    <SideCardLabel>Who It&apos;s For</SideCardLabel>
                    <SideCardText>{section.forWho}</SideCardText>
                  </SideCard>

                  <SideCard>
                    <SideCardLabel>Typical Outcomes</SideCardLabel>
                    <OutcomesList $color={section.accent}>
                      {section.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </OutcomesList>
                  </SideCard>

                  <ServiceCTA href="/contact/" $accent={section.accent}>
                    {section.cta}
                    <ArrowRight size={16} />
                  </ServiceCTA>
                </ServiceSideCol>
              </ServiceBody>
            </ServiceSection>
          ))}
        </SectionsInner>
      </SectionsWrap>

      <BottomCTA>
        <BottomCTAInner>
          <BottomCTAContent>
            <BottomCTATitle>Ready to start a conversation?</BottomCTATitle>
            <BottomCTAText>
              Every engagement begins with understanding context. Reach out and
              we'll figure out the best way to help.
            </BottomCTAText>
          </BottomCTAContent>
          <BottomCTAButton href="/contact/">
            <span>Get In Touch</span>
            <ArrowRight size={17} className="cta-arrow" />
          </BottomCTAButton>
        </BottomCTAInner>
      </BottomCTA>

      <Footer />
    </Wrapper>
  );
}

/* ─── Styled Components ──────────────────────────────────────────── */

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: #faf9f7;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

/* ─── Hero ──────────────────────────────────────────── */

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 2rem 4.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 3rem;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(250, 249, 247, 0.93) 0%,
      rgba(250, 249, 247, 0.96) 50%,
      rgba(250, 249, 247, 1) 100%
    );
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeUp} 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 0.6rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.08);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1.75rem;
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color || "#8b0d2a"};
  box-shadow: 0 0 0 3px
    ${({ $color }) =>
      $color ? `${$color}20` : "rgba(139, 13, 42, 0.12)"};
  flex-shrink: 0;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
  color: #1a1d20;

  @media (max-width: 560px) {
    font-size: 2.4rem;
    br {
      display: none;
    }
  }
`;

const HeroTitleAccent = styled.span`
  color: #8b0d2a;
`;

const HeroDescription = styled.p`
  margin: 1.25rem auto 0;
  max-width: 540px;
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.7;
  color: #6b7280;
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroSecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: #ffffff;
  color: #1a1d20;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04);
  }
`;

const HeroMetrics = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 560px) {
    gap: 1.25rem;
  }
`;

const MetricItem = styled.div`
  text-align: center;
`;

const MetricNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #1a1d20;
  line-height: 1;
`;

const MetricDesc = styled.p`
  margin: 0.3rem 0 0;
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: #9ca3af;
  font-weight: 500;
`;

const MetricDivider = styled.div`
  width: 1px;
  height: 36px;
  background: rgba(0, 0, 0, 0.06);
`;

/* ─── Overview ──────────────────────────────────────── */

const OverviewSection = styled.section`
  padding: 4rem 2rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.25rem 2rem;
  }
`;

const OverviewInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const OverviewHeader = styled.div`
  max-width: 620px;
  margin-bottom: 2.5rem;
`;

const OverviewEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
`;

const OverviewTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: #1a1d20;
`;

const OverviewText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.72;
  color: #6b7280;
`;

const SignalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SignalCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.35rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.04);
  }
`;

const SignalIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
  flex-shrink: 0;
`;

const SignalContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const SignalText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.55;
  color: #374151;
  font-weight: 500;
`;

const SignalArrow = styled.div`
  flex-shrink: 0;
  color: #d1d5db;
  display: flex;
  align-items: center;
`;

/* ─── Service Sections ──────────────────────────────── */

const SectionsWrap = styled.div`
  padding: 1rem 2rem 4rem;
  scroll-margin-top: 140px;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 3rem;
  }
`;

const SectionsInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const ServiceSection = styled.section`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 32px rgba(0, 0, 0, 0.05);
  }
`;

const ServiceHeader = styled.div`
  padding: 1.75rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  background: ${({ $accent }) => `${$accent}03`};

  @media (max-width: 768px) {
    padding: 1.35rem 1.25rem;
  }
`;

const ServiceHeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ServiceIconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const ServiceMeta = styled.div`
  flex: 1;
  min-width: 0;
`;

const ServiceKicker = styled.p`
  margin: 0 0 0.15rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $color }) => $color};
`;

const ServiceTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`;

const ServiceNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${({ $color }) => `${$color}12`};
  flex-shrink: 0;
  line-height: 1;

  @media (max-width: 640px) {
    display: none;
  }
`;

const ServiceBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  gap: 0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceMainCol = styled.div`
  padding: 2rem;
  border-right: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 920px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const ServiceIntro = styled.p`
  margin: 0 0 1.5rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.75;
  color: #374151;
`;

const IncludesBlock = styled.div`
  padding: 1.25rem 1.35rem;
  background: #fafaf9;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

const IncludesLabel = styled.p`
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #9ca3af;
`;

const IncludesText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.72;
  color: #6b7280;
`;

const ServiceSideCol = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const SideCard = styled.div`
  padding: 1.15rem 1.25rem;
  background: #fafaf9;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

const SideCardLabel = styled.p`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #9ca3af;
`;

const SideCardText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.68;
  color: #374151;
`;

const OutcomesList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.4rem;

  li {
    font-family: var(--font-body);
    font-size: 0.93rem;
    line-height: 1.6;
    color: #374151;
  }

  li::marker {
    color: ${({ $color }) => $color || "#8b0d2a"};
  }
`;

const ServiceCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 48px;
  padding: 0 1.4rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  cursor: pointer;
  margin-top: auto;
  width: fit-content;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.12);
    opacity: 0.92;
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ─── Bottom CTA ──────────────────────────────────────── */

const BottomCTA = styled.section`
  padding: 0 2rem 4rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem 3rem;
  }
`;

import PetalsImg from "../assets/img/petals.webp";

const BottomCTAInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 3rem;
  background: #1a1d20;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    height: 380px;
    background: url(${PetalsImg}) center center/contain no-repeat;
    opacity: 0.06;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }
`;

const BottomCTAContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const BottomCTATitle = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.15;
`;

const BottomCTAText = styled.p`
  margin: 0.5rem 0 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`;

const BottomCTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: 52px;
  padding: 0 1.6rem 0 1.75rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(225, 29, 72, 0.35);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, #f43f5e 0%, #E11D48 100%);
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: -1;
  }

  .cta-arrow {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(225, 29, 72, 0.45);
    padding: 0 1.5rem 0 1.75rem;

    &::before {
      opacity: 1;
    }

    .cta-arrow {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;