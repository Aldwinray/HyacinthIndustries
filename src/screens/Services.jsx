import { useEffect } from "react";
import styled from "styled-components";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Compass, Sparkles } from "lucide-react";
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import Seo from "../components/Seo";
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import {
  heroEyebrow,
  primaryButton,
  supportingText,
} from "../styles/premiumPageStyles";

const serviceSections = [
  {
    icon: Sparkles,
    title: "Brand Strengthening",
    kicker: "Positioning, messaging, and market credibility",
    includes:
      "This service includes work on brand narrative, positioning clarity, messaging refinement, executive-level presentation, and the commercial materials that shape how the market understands your business. It can involve clarifying what you want to be known for, tightening category language, improving how value is communicated across leadership and sales conversations, and identifying where your current presentation is weakening trust or creating confusion. The goal is not superficial branding work. It is to make sure the company is described in a way that supports stronger conversations, better-fit opportunities, and a more credible presence with serious buyers, partners, and stakeholders.",
    body:
      "Hyacinth Industries helps companies sharpen how they are understood in the market so their positioning, messaging, and outward presence support growth instead of slowing it down. This work can include clarifying brand narrative, tightening category positioning, refining how teams talk about value, and aligning commercial materials with the level of buyer you want to attract. It is best suited for founders, operators, and commercial leaders who know their company has real strengths but need those strengths expressed more clearly and consistently. Typical outcomes include stronger market confidence, cleaner sales conversations, better alignment between marketing and leadership, and a brand presentation that supports larger opportunities instead of underselling the business.",
    forWho: "Best for companies repositioning for growth, entering a new market, or trying to present a more credible executive profile to higher-value buyers.",
    outcomes: [
      "Clearer market positioning and sharper category language",
      "Better alignment between leadership messaging and sales materials",
      "Stronger trust signals for partners, buyers, and investors",
    ],
    cta: "Talk About Brand Strategy",
  },
  {
    icon: BriefcaseBusiness,
    title: "Deal Strategy & Closing",
    kicker: "Commercial structure, momentum, and decision support",
    includes:
      "This service includes support across qualification, stakeholder mapping, opportunity strategy, offer framing, partnership structure, and the communication required to keep a deal moving. It can also include reviewing where momentum is breaking down, identifying weak points in the commercial process, and improving how teams manage decision-makers, objections, and next steps. The focus is on increasing discipline around complex opportunities rather than relying on reactive selling. For organizations pursuing larger accounts, strategic partnerships, or higher-stakes transactions, this work helps create a more controlled process so leadership can move with stronger leverage, cleaner alignment, and better judgment throughout the path to close.",
    body:
      "This service is built for organizations that need more discipline and leverage across the deal cycle, especially when opportunities are strategic, high value, or operationally complex. Hyacinth Industries supports the work around qualification, stakeholder mapping, offer framing, partnership structuring, and the communication needed to keep momentum through closing. Rather than treating deals as isolated pitches, the focus is on improving the quality of the commercial process so leadership can move with more clarity and control. This is a strong fit for teams pursuing enterprise accounts, channel partnerships, or expansion opportunities where execution quality matters as much as relationship quality. Typical outcomes include stronger win rates, cleaner internal alignment on priorities, shorter cycles on qualified opportunities, and more confidence in how major deals are advanced and closed.",
    forWho: "Best for commercial teams, founders, and principals pursuing larger accounts, partnerships, or strategic transactions where the process needs senior-level structure.",
    outcomes: [
      "Improved deal qualification and stakeholder alignment",
      "Stronger commercial messaging at key negotiation moments",
      "Higher confidence and discipline in moving complex deals to close",
    ],
    cta: "Discuss a Growth Opportunity",
  },
  {
    icon: Compass,
    title: "Product Improvement",
    kicker: "Execution clarity, customer fit, and better prioritization",
    includes:
      "This service includes evaluating customer friction, clarifying product or service priorities, improving the handoff between teams, and turning market feedback into better operating decisions. It can cover where the current offer feels hard to use, hard to explain, or hard to scale, as well as where execution issues are creating product problems that are not purely technical. The work is designed to help teams make better decisions about what to improve, what to simplify, and what to prioritize next. Instead of adding features without direction, the emphasis is on practical improvements that strengthen customer fit, improve internal execution, and support clearer adoption, retention, and revenue outcomes.",
    body:
      "Product improvement work focuses on making what you already offer more effective, more usable, and more aligned with what customers actually need. That can mean identifying friction in the experience, tightening feature priorities, improving handoff between teams, or translating market feedback into clearer product decisions. Hyacinth Industries approaches this as an operating problem as much as a product problem, because good products usually improve when execution improves around them. This service is especially useful for teams with an existing offer that is underperforming, hard to explain, or not converting as well as it should despite clear demand signals. Typical outcomes include better product clarity, faster prioritization decisions, improved customer experience, and a more practical roadmap tied to adoption, retention, and revenue goals.",
    forWho: "Best for teams with an established product or service that needs sharper customer alignment, clearer prioritization, and stronger execution around delivery.",
    outcomes: [
      "Reduced friction in customer experience and internal workflows",
      "Stronger alignment between product decisions and business goals",
      "More focused roadmaps tied to adoption, retention, and growth",
    ],
    cta: "Start a Product Conversation",
  },
];

const serviceSignals = [
  "Senior-level thinking translated into practical execution",
  "Structured support across brand, deals, and product decisions",
  "Clear commercial and operational outcomes, not generic advisory language",
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
        canonicalPath="/services"
      />

      <TopNavBar />
      <SideBar />

      <HeroSection>
        <HeroInner>
          <HeroEyebrow>Services</HeroEyebrow>
          <Title>Three service lines built around growth, execution, and commercial clarity.</Title>
          <Description>
            Hyacinth Industries supports companies that need sharper positioning, stronger deal
            execution, and better product decisions without adding unnecessary complexity.
          </Description>
          <HeroButton href="#services-list">Get Started</HeroButton>
        </HeroInner>
      </HeroSection>

      <OverviewSection>
        <OverviewShell>
          <OverviewCopy>
            <OverviewEyebrow>What We Help Improve</OverviewEyebrow>
            <OverviewTitle>Consulting support built around the moments where clarity matters most.</OverviewTitle>
            <OverviewText>
              Hyacinth Industries works with companies that need stronger market positioning,
              sharper commercial execution, and better product decisions without adding noise to
              the operating model. Our services are designed to help leadership teams move from
              broad ambition to clearer direction, stronger discipline, and outcomes that stand up
              under growth pressure.
            </OverviewText>
          </OverviewCopy>

          <SignalGrid>
            {serviceSignals.map((signal) => (
              <SignalCard key={signal}>
                <SignalIcon>
                  <BadgeCheck size={18} />
                </SignalIcon>
                <SignalText>{signal}</SignalText>
              </SignalCard>
            ))}
          </SignalGrid>
        </OverviewShell>
      </OverviewSection>

      <SectionsWrap id="services-list">
        {serviceSections.map((section) => (
          <SectionCard key={section.title}>
            <SectionBody>
              <SectionHeader>
                <SectionIconWrap>
                  <section.icon size={22} />
                </SectionIconWrap>
                <SectionKicker>{section.kicker}</SectionKicker>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionIntro>{section.body}</SectionIntro>
              </SectionHeader>

              <SectionAside>
                <DetailGrid>
                  <DetailCard>
                    <DetailLabel>What It Includes</DetailLabel>
                    <DetailText>{section.includes}</DetailText>
                  </DetailCard>

                  <DetailCard>
                    <DetailLabel>Who It&apos;s For</DetailLabel>
                    <DetailText>{section.forWho}</DetailText>
                  </DetailCard>

                  <DetailCard>
                    <DetailLabel>Typical Outcomes</DetailLabel>
                    <OutcomesList>
                      {section.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </OutcomesList>
                  </DetailCard>
                </DetailGrid>

                <CTAButton href="/contact">
                  {section.cta}
                  <ArrowRight size={18} />
                </CTAButton>
              </SectionAside>
            </SectionBody>
          </SectionCard>
        ))}
      </SectionsWrap>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  padding: 3rem 0 4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: #8b0d2a;
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0 auto 1rem;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  max-width: 20ch;

  @media (max-width: 560px) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #dc143c, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  ${supportingText};
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  color: #2f3137;
  font-size: clamp(1.05rem, 1.45vw, 1.18rem);
`;

const HeroButton = styled.a`
  ${primaryButton};
  margin-top: 1.5rem;
`;

const OverviewSection = styled.section`
  padding: 4rem 20px 1.25rem;
`;

const OverviewShell = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const OverviewCopy = styled.div`
  background: linear-gradient(180deg, #ffffff, #fbfbfc);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2rem 2.1rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);
`;

const OverviewEyebrow = styled.p`
  margin: 0 0 0.7rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const OverviewTitle = styled.h2`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #17181c;
  max-width: 15ch;
`;

const OverviewText = styled.p`
  ${supportingText};
  margin: 0;
  color: #374151;
`;

const SignalGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const SignalCard = styled.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 22px;
  padding: 1.2rem 1.25rem;
  box-shadow: 0 14px 34px rgba(17, 17, 17, 0.07);
`;

const SignalIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.75rem;
`;

const SignalText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #334155;
`;

const SectionsWrap = styled.div`
  max-width: 1180px;
  margin: 0 auto 4rem;
  padding: 1rem 20px 0;
  display: grid;
  gap: 1.25rem;
  scroll-margin-top: 140px;
`;

const SectionCard = styled.section`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 1.7rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 22px;
  }
`;

const SectionBody = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SectionHeader = styled.div`
  min-width: 0;
`;

const SectionIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.8rem;
`;

const SectionKicker = styled.p`
  margin: 0 0 0.4rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.85rem, 3vw, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: #17181c;
  margin: 0 0 0.7rem;
`;

const SectionIntro = styled.p`
  ${supportingText};
  margin: 0;
  color: #374151;
  max-width: 34rem;
`;

const SectionAside = styled.div`
  min-width: 0;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
  margin-bottom: 1.15rem;
`;

const DetailCard = styled.div`
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  height: fit-content;
`;

const DetailLabel = styled.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const DetailText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.72;
  color: #334155;
`;

const OutcomesList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    font-family: var(--font-body);
    font-size: 0.98rem;
    line-height: 1.72;
    color: #334155;
    margin-bottom: 0.35rem;
  }

  li::marker {
    color: #dc143c;
  }
`;

const CTAButton = styled.a`
  ${primaryButton};
  gap: 0.65rem;
`;
