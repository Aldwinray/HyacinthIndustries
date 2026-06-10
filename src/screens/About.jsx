import { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Seo from "../components/Seo";

import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import { lazy, Suspense } from "react";
const ImageSlider = lazy(() => import("../components/basic/ImageSlider"));

import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import OfficeImg from "../assets/img/industries/office.webp";
import HealthcareImg from "../assets/img/industries/healthcare.webp";
import AnimationImg from "../assets/img/industries/animation.webp";
import CodingImg from "../assets/img/industries/coding.webp";
import GlennJacinto from "../assets/img/glennjacinto.webp";

import {
  Users,
  Target,
  Award,
  Clock,
  Zap,
  Heart,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

function useReveal(threshold = 0.14) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0, ...rest }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <RevealDiv ref={ref} $visible={visible} $delay={delay} {...rest}>
      {children}
    </RevealDiv>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = useMemo(
    () => [
      {
        icon: <Target size={28} strokeWidth={1.8} />,
        title: "Excellence",
        description:
          "We aim for strong execution and clear results in every engagement.",
      },
      {
        icon: <Users size={28} strokeWidth={1.8} />,
        title: "Collaboration",
        description:
          "We work as an extension of your team, not as a disconnected advisor.",
      },
      {
        icon: <Award size={28} strokeWidth={1.8} />,
        title: "Integrity",
        description:
          "We value direct communication, trust, and responsible execution.",
      },
      {
        icon: <Zap size={28} strokeWidth={1.8} />,
        title: "Innovation",
        description:
          "We look for practical improvements that create real leverage.",
      },
      {
        icon: <Heart size={28} strokeWidth={1.8} />,
        title: "Passion",
        description:
          "We care deeply about helping clients move with confidence.",
      },
      {
        icon: <Clock size={28} strokeWidth={1.8} />,
        title: "Reliability",
        description:
          "We deliver with consistency, clarity, and follow-through.",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      "Reduced operational costs",
      "Access to specialized expertise",
      "Increased efficiency and productivity",
      "Focus on core business functions",
      "Scalable resources to meet changing demands",
      "Faster time-to-market for products and services",
    ],
    []
  );

  return (
    <Wrapper id="about">
      <Seo
        title="About Hyacinth Industries | Glenn Jacinto, Principal Executive"
        description="Meet Glenn Jacinto, Principal Executive at Hyacinth Industries. Explore leadership experience, industries served, and selected client outcomes."
        canonicalPath="/about/"
      />

      <TopNavBar />
      <SideBar />

      <HeroSection>
        <HeroOverlay />
        <HeroInner>
          <HeroBadge>
            <BadgeDot /> Hyacinth Industries
          </HeroBadge>

          <HeroTitle>
            Built for operators
            <br />
            who need <HeroAccent>sharper execution.</HeroAccent>
          </HeroTitle>

          <HeroRow>
            <HeroCopy>
              <CaptionLead>Streamline your business.</CaptionLead>
              <HeroText>
                Hyacinth Industries helps organizations improve how they
                operate, communicate, and deliver. Our work is designed to
                create practical leverage, stronger outcomes, and a more
                professional standard of execution.
              </HeroText>
            </HeroCopy>

            <HeroMedia>
              <Suspense fallback={<div style={{ height: "340px", borderRadius: "20px", background: "#f0f0f0"}} />}>
                <ImageSlider
                  images={[
                    OfficeImg,
                    HealthcareImg,
                    AnimationImg,
                    CodingImg,
                  ]}
                  autoPlayInterval={2500}
                  style={{ height: "340px", borderRadius: "20px" }}
                />
              </Suspense>
            </HeroMedia>
          </HeroRow>
        </HeroInner>
      </HeroSection>

      <MissionSection>
        <SectionInner>
          <Reveal>
            <SectionEyebrow>Purpose</SectionEyebrow>
            <SectionTitle>Our Mission</SectionTitle>
          </Reveal>

          <Reveal delay={60}>
            <MissionStatement>
              At Hyacinth Industries, our mission is to help businesses improve
              performance through practical outsourcing solutions that support
              growth, efficiency, and competitive strength.
            </MissionStatement>
          </Reveal>
        </SectionInner>
      </MissionSection>

      <ExecutiveSection>
        <SectionInner>
          <Reveal>
            <SectionEyebrow>Leadership</SectionEyebrow>
            <SectionTitle>Executive Leadership</SectionTitle>
          </Reveal>

          <Reveal delay={80}>
            <ExecWrapper>
              <ExecPhotoColumn>
                <ExecPhotoFrame>
                  <ExecutivePhoto
                    src={GlennJacinto}
                    alt="Glenn Jacinto, Principal Executive at Hyacinth Industries"
                  />
                </ExecPhotoFrame>

                <ExecContactBar>
                  <ExecContactLink
                    href="https://www.linkedin.com/in/glenn-jacinto-bb2a87122/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={15} />
                    LinkedIn Profile
                    <ArrowUpRight size={13} />
                  </ExecContactLink>
                </ExecContactBar>
              </ExecPhotoColumn>

              <ExecContentColumn>
                <ExecHeader>
                  <ExecKicker>Chief Executive Officer</ExecKicker>
                  <ExecName>Glenn Jacinto</ExecName>
                  <ExecTitleLine>
                    Chief Executive Officer · Hyacinth Industries LLC
                  </ExecTitleLine>
                </ExecHeader>

                <ExecDivider />

                <ExecNarrative>
                  <p>
                    Glenn Jacinto brings more than 15 years of leadership
                    experience helping companies sharpen commercial strategy,
                    strengthen delivery discipline, and build durable client
                    relationships across multiple sectors.
                  </p>
                  <p>
                    His work centers on translating business objectives into
                    practical operating plans, aligning teams around measurable
                    outcomes, and supporting partners that need reliable
                    execution alongside strategic judgment.
                  </p>
                </ExecNarrative>

                <ExecQuote>
                  <QuoteBar />
                  <QuoteText>
                    Trusted by organizations looking for disciplined leadership,
                    clearer commercial direction, and execution that holds up
                    under growth pressure.
                  </QuoteText>
                </ExecQuote>

                <ExecMetaStrip>
                  <ExecMetaItem>
                    <ExecMetaLabel>Years of Experience</ExecMetaLabel>
                    <ExecMetaValue>15+</ExecMetaValue>
                  </ExecMetaItem>
                  <ExecMetaDivider />
                  <ExecMetaItem>
                    <ExecMetaLabel>Focus Area</ExecMetaLabel>
                    <ExecMetaValue>
                      Growth Strategy &amp; Commercial Execution
                    </ExecMetaValue>
                  </ExecMetaItem>
                  <ExecMetaDivider />
                  <ExecMetaItem>
                    <ExecMetaLabel>Coverage</ExecMetaLabel>
                    <ExecMetaValue>Multi-sector</ExecMetaValue>
                  </ExecMetaItem>
                </ExecMetaStrip>

                <ExecColumnsBottom>
                  <ExecColumnBlock>
                    <ExecColumnLabel>Sector Experience</ExecColumnLabel>
                    <ExecTagRow>
                      {["SaaS", "Technology", "Logistics", "Healthcare", "Professional Services"].map(
                        (t) => (
                          <ExecTag key={t}>{t}</ExecTag>
                        )
                      )}
                    </ExecTagRow>
                  </ExecColumnBlock>

                  <ExecColumnBlock>
                    <ExecColumnLabel>Representative Outcomes</ExecColumnLabel>
                    <ExecOutcomes>
                      <li>
                        Helped a Series B SaaS company close a{" "}
                        <strong>$4M partnership deal</strong> in 90 days.
                      </li>
                      <li>
                        Improved proposal win rate by <strong>32%</strong> for a
                        logistics provider within two quarters.
                      </li>
                      <li>
                        Reduced service turnaround time by <strong>25%</strong> for
                        a healthcare team.
                      </li>
                    </ExecOutcomes>
                  </ExecColumnBlock>
                </ExecColumnsBottom>
              </ExecContentColumn>
            </ExecWrapper>
          </Reveal>
        </SectionInner>
      </ExecutiveSection>

      <ValuesSection>
        <SectionInner>
          <Reveal>
            <SectionEyebrow>Principles</SectionEyebrow>
            <SectionTitle>Our Values</SectionTitle>
          </Reveal>

          <ValueGrid>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <ValueCard>
                  <ValueIcon>{v.icon}</ValueIcon>
                  <ValueTitle>{v.title}</ValueTitle>
                  <ValueDesc>{v.description}</ValueDesc>
                </ValueCard>
              </Reveal>
            ))}
          </ValueGrid>
        </SectionInner>
      </ValuesSection>

      <WhyUsSection>
        <SectionInner>
          <Reveal>
            <SectionEyebrow>Advantages</SectionEyebrow>
            <SectionTitle>Why Choose Us</SectionTitle>
          </Reveal>

          <WhyUsGrid>
            <Reveal delay={40}>
              <WhyUsCopy>
                <Paragraph>
                  Hyacinth Industries LLC stands out because we understand that
                  each business has unique challenges and opportunities. Our
                  approach combines industry awareness with customized support
                  designed around your specific needs.
                </Paragraph>
                <Paragraph>
                  With experience across multiple sectors, we deliver practical
                  support in healthcare, logistics, administrative work, and
                  creative services. Our commitment to quality, reliability, and
                  innovation helps clients move forward with confidence.
                </Paragraph>
                <Paragraph>
                  We do not just provide services; we build working
                  relationships focused on clarity, consistency, and long-term
                  success.
                </Paragraph>
              </WhyUsCopy>
            </Reveal>

            <Reveal delay={120}>
              <BenefitsCard>
                <BenefitsHeading>What you get</BenefitsHeading>
                <BenefitsList>
                  {benefits.map((b) => (
                    <BenefitItem key={b}>
                      <BenefitCheck>
                        <CheckCircle size={18} />
                      </BenefitCheck>
                      <span>{b}</span>
                    </BenefitItem>
                  ))}
                </BenefitsList>
              </BenefitsCard>
            </Reveal>
          </WhyUsGrid>
        </SectionInner>
      </WhyUsSection>

      <CtaSection>
        <SectionInner>
          <Reveal>
            <CtaCard>
              <CtaContent>
                <CtaTitle>Ready to transform your business?</CtaTitle>
                <CtaText>
                  Partner with Hyacinth Industries LLC and discover how our
                  outsourcing solutions can help you achieve your business
                  goals.
                </CtaText>
              </CtaContent>

              <CtaButton href="/contact/">
                <span>Contact Us Today</span>
                <ArrowRight size={18} className="cta-arrow" />
              </CtaButton>
            </CtaCard>
          </Reveal>
        </SectionInner>
      </CtaSection>

      <Footer />
    </Wrapper>
  );
}

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const RevealDiv = styled.div`
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ $delay }) => $delay || 0}ms;

  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Wrapper = styled.div`
  --crimson-600: #c41230;
  --crimson-500: #dc143c;
  --ink-900: #111218;
  --ink-800: #1d1e26;
  --ink-700: #2f3040;
  --ink-500: #5d5f72;
  --ink-400: #7c7e92;
  --ink-200: #c8cad4;
  --ink-100: #e9eaef;
  --ink-50: #f5f5f8;
  --surface: #ffffff;
  --surface-alt: #f8f8fb;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.03);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.04), 0 14px 32px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 20px rgba(0, 0, 0, 0.04), 0 28px 56px rgba(0, 0, 0, 0.08);

  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: var(--surface);
  color: var(--ink-800);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  position: relative;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(4rem, 7vw, 6rem);
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 3;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.03;
  background-image: radial-gradient(circle at 1px 1px, #000 1px, transparent 0);
  background-size: 18px 18px;
  pointer-events: none;
`;

const HeroInner = styled.div`
  width: min(1200px, calc(100% - 3rem));
  margin: 0 auto;
  animation: ${fadeUp} 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (max-width: 640px) {
    width: calc(100% - 2rem);
  }
`;

const BadgeDot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--crimson-500);
  margin-right: 8px;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 0.75rem;
  border-radius: 999px;
  background: rgba(196, 18, 48, 0.06);
  border: 1px solid rgba(196, 18, 48, 0.12);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--crimson-600);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  margin: 0 0 2.2rem;
  font-size: clamp(2.6rem, 5.8vw, 4.6rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: var(--ink-900);
  max-width: 14ch;

  @media (max-width: 640px) {
    font-size: clamp(2.2rem, 8vw, 3rem);
    max-width: none;
  }
`;

const HeroAccent = styled.span`
  color: var(--crimson-500);
`;

const HeroRow = styled.div`
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const HeroCopy = styled.div`
  @media (max-width: 900px) {
    order: 2;
  }
`;

const HeroMedia = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  background: #fff;

  @media (max-width: 900px) {
    order: 1;
  }
`;

const CaptionLead = styled.p`
  margin: 0 0 0.75rem;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--ink-900);
`;

const HeroText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--ink-500);
  max-width: 34rem;
`;

const SectionInner = styled.div`
  width: min(1140px, calc(100% - 3rem));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: calc(100% - 2rem);
  }
`;

const SectionEyebrow = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--crimson-500);
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin: 0 0 2.4rem;
  font-size: clamp(2rem, 3.8vw, 2.6rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: var(--ink-900);
  text-align: center;
`;

const MissionSection = styled.section`
  padding: 5.5rem 0;
  background: var(--surface);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const MissionStatement = styled.blockquote`
  margin: 0 auto;
  max-width: 780px;
  font-size: clamp(1.15rem, 1.8vw, 1.4rem);
  line-height: 1.85;
  color: var(--ink-700);
  text-align: center;
  font-style: italic;
  position: relative;
  padding: 0 1rem;

  &::before {
    content: '"';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    line-height: 1;
    color: var(--crimson-500);
    opacity: 0.12;
    font-style: normal;
  }
`;

const ExecutiveSection = styled.section`
  padding: 6rem 0;
  background: var(--surface-alt);

  @media (max-width: 768px) {
    padding: 4.2rem 0;
  }
`;

const ExecWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ExecPhotoColumn = styled.div`
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  @media (max-width: 960px) {
    position: static;
    align-items: center;
  }
`;

const ExecPhotoFrame = styled.div`
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-md);
  background: var(--ink-50);

  @media (max-width: 960px) {
    max-width: 260px;
  }
`;

const ExecutivePhoto = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  display: block;
  filter: grayscale(0.05);
`;

const ExecContactBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ExecContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 0.9rem;
  border-radius: var(--radius-sm);
  background: var(--surface);
  border: 1px solid var(--ink-100);
  color: var(--ink-700);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: var(--crimson-500);
    border-color: rgba(196, 18, 48, 0.2);
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.05);
  }

  svg:last-child {
    margin-left: auto;
    opacity: 0.4;
  }
`;

const ExecContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const ExecHeader = styled.div``;

const ExecKicker = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--crimson-500);
`;

const ExecName = styled.h3`
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.035em;
  color: var(--ink-900);
`;

const ExecTitleLine = styled.p`
  margin: 0.45rem 0 0;
  font-size: 0.9rem;
  color: var(--ink-400);
  font-weight: 500;
`;

const ExecDivider = styled.hr`
  border: none;
  height: 1px;
  background: var(--ink-100);
  margin: 1.5rem 0;
`;

const ExecNarrative = styled.div`
  max-width: 44rem;

  p {
    margin: 0 0 1rem;
    font-size: 0.98rem;
    line-height: 1.82;
    color: var(--ink-700);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ExecQuote = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin: 1.6rem 0;
  padding: 1rem 0;
`;

const QuoteBar = styled.div`
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--crimson-500), rgba(196, 18, 48, 0.2));
`;

const QuoteText = styled.p`
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.72;
  color: var(--ink-500);
  font-style: italic;
  max-width: 42rem;
`;

const ExecMetaStrip = styled.div`
  display: flex;
  align-items: stretch;
  background: var(--surface);
  border: 1px solid var(--ink-100);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.8rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ExecMetaItem = styled.div`
  flex: 1;
  padding: 1rem 1.15rem;
`;

const ExecMetaDivider = styled.div`
  width: 1px;
  background: var(--ink-100);

  @media (max-width: 700px) {
    width: 100%;
    height: 1px;
  }
`;

const ExecMetaLabel = styled.p`
  margin: 0 0 0.28rem;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-400);
`;

const ExecMetaValue = styled.p`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink-900);
  line-height: 1.35;
`;

const ExecColumnsBottom = styled.div`
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  gap: 1.15rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ExecColumnBlock = styled.div`
  background: var(--surface);
  border: 1px solid var(--ink-100);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.2rem;
`;

const ExecColumnLabel = styled.h4`
  margin: 0 0 1rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-400);
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--ink-100);
`;

const ExecTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const ExecTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: var(--ink-50);
  border: 1px solid var(--ink-100);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--ink-700);
`;

const ExecOutcomes = styled.ul`
  margin: 0;
  padding-left: 1.1rem;

  li {
    font-size: 0.9rem;
    line-height: 1.72;
    color: var(--ink-700);
    margin-bottom: 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: var(--ink-900);
      font-weight: 700;
    }
  }

  li::marker {
    color: var(--crimson-500);
    font-size: 0.7em;
  }
`;

const ValuesSection = styled.section`
  padding: 5.5rem 0;
  background: var(--surface);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: var(--surface);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.6rem 1.45rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
  height: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    border-color: rgba(196, 18, 48, 0.1);
  }
`;

const ValueIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(196, 18, 48, 0.06);
  color: var(--crimson-500);
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  margin: 0 0 0.55rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink-900);
`;

const ValueDesc = styled.p`
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.72;
  color: var(--ink-500);
`;

const WhyUsSection = styled.section`
  padding: 5.5rem 0;
  background: var(--surface-alt);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const WhyUsCopy = styled.div``;

const Paragraph = styled.p`
  margin: 0 0 1.15rem;
  font-size: 1rem;
  line-height: 1.82;
  color: var(--ink-500);
  max-width: 38rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BenefitsCard = styled.div`
  background: var(--surface);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-lg);
  padding: 1.8rem 1.6rem;
  box-shadow: var(--shadow-sm);
`;

const BenefitsHeading = styled.p`
  margin: 0 0 1rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--crimson-500);
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--ink-700);

  &:last-child {
    margin-bottom: 0;
  }
`;

const BenefitCheck = styled.span`
  flex-shrink: 0;
  color: var(--crimson-500);
  margin-top: 1px;
`;

const CtaSection = styled.section`
  padding: 0 0 5.5rem;
  background: var(--surface-alt);

  @media (max-width: 768px) {
    padding: 0 1rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.85rem 2.5rem;
  }
`;

import PetalsImg from "../assets/img/petals.webp";

const CtaCard = styled.div`
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
    align-items: center;
    padding: 2.5rem 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }
`;

const CtaContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const CtaTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.15;
`;

const CtaText = styled.p`
  margin: 0.5rem 0 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 580px;
`;

const CtaButton = styled.a`
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
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(225, 29, 72, 0.35);
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

  @media (max-width: 480px) {
    min-height: 48px;
    padding: 0 1.4rem;
    font-size: 0.9rem;
    border-radius: 12px;
  }
`;