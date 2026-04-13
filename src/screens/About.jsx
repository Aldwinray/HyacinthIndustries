import { useEffect, useState } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";

// components
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import ImageSlider from "../components/basic/ImageSlider";

// assets
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import OfficeImg from "../assets/img/industries/office.webp";
import EngineeringImg from "../assets/img/engineering/construction.webp";
import HealthcareImg from "../assets/img/industries/healthcare.webp";
import AnimationImg from "../assets/img/industries/animation.webp";
import CodingImg from "../assets/img/industries/coding.webp";
import GlennJacinto from "../assets/img/glennjacinto.webp";

// icons
import { Users, Target, Award, Clock, Zap, Heart, CheckCircle } from "lucide-react";

export default function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = [
    {
      icon: <Target size={32} />,
      title: "Excellence",
      description:
        "We strive for excellence in every project we undertake, ensuring the highest quality results for our clients.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster collaborative relationships with our clients and partners.",
    },
    {
      icon: <Award size={32} />,
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity and ethics in all our business dealings and relationships.",
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description:
        "We embrace innovation and continuously seek new ways to improve our services and solutions.",
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description:
        "We are passionate about what we do and committed to helping our clients achieve their goals.",
    },
    {
      icon: <Clock size={32} />,
      title: "Reliability",
      description:
        "We deliver on our promises and are committed to meeting deadlines and exceeding expectations.",
    },
  ];

  const benefits = [
    "Reduced operational costs",
    "Access to specialized expertise",
    "Increased efficiency and productivity",
    "Focus on core business functions",
    "Scalable resources to meet changing demands",
    "Faster time-to-market for products and services",
  ];

  return (
    <Wrapper id="about">
      <Seo
        title="About Hyacinth Industries | Glenn Jacinto, Principal Executive"
        description="Meet Glenn Jacinto, Principal Executive at Hyacinth Industries. Explore leadership experience, industries served, and selected client outcomes."
        canonicalPath="/about"
      />

      <TopNavBar />
      <SideBar />

      {/* Hero Section */}
      <HeaderSection>
        <HeroInner>
          <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
          <Title>Built for operators who need sharper execution.</Title>
        </HeroInner>

        <Content style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
          <LeftColumn style={{ order: isSmallScreen ? 2 : 1, width: "100%" }}>
            <Caption>
              <CaptionLead>Streamline your business.</CaptionLead>
              <br />
              Partner with Hyacinth Industries LLC for top-tier outsourcing solutions tailored to
              your industry&apos;s unique needs. Save time, cut costs, and stay ahead with our
              expert support. Let&apos;s make success your new standard, start outsourcing smarter
              today.
            </Caption>
          </LeftColumn>

          <RightColumn style={{ order: isSmallScreen ? 1 : 2, width: "100%" }}>
            <ImageSlider
              images={[OfficeImg, EngineeringImg, HealthcareImg, AnimationImg, CodingImg]}
              autoPlayInterval={2500}
              style={{ height: "300px" }}
            />
          </RightColumn>
        </Content>
      </HeaderSection>

      {/* Mission Statement Section */}
      <Section>
        <Container>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionStatement>
            At Hyacinth Industries, our mission is to empower businesses through innovative
            outsourcing solutions that drive growth, efficiency, and competitive advantage. We are
            committed to delivering exceptional value by providing access to top-tier talent,
            cutting-edge technologies, and industry-leading expertise across diverse sectors.
          </MissionStatement>
        </Container>
      </Section>

      {/* Executive Leadership Section */}
      <ExecutiveSection>
        <Container>
          <SectionTitle>Executive Leadership</SectionTitle>

          <ExecutiveShowcase>
            <ExecutiveCard>
              <ExecutivePhotoWrap>
                <ExecutivePhotoCard>
                  <ExecutivePhoto
                    src={GlennJacinto}
                    alt="Glenn Jacinto, Principal Executive at Hyacinth Industries"
                  />
                  <ExecutivePortraitMeta>
                    <PortraitEyebrow>Executive Profile</PortraitEyebrow>
                    <PortraitNote>
                      Senior leadership across growth strategy, commercial partnerships, and
                      operational execution.
                    </PortraitNote>
                  </ExecutivePortraitMeta>
                </ExecutivePhotoCard>
              </ExecutivePhotoWrap>

              <ExecutiveContent>
                <ExecutiveKicker>Principal Executive</ExecutiveKicker>
                <ExecutiveName>Glenn Jacinto</ExecutiveName>
                <ExecutiveRole>Principal Executive, Hyacinth Industries</ExecutiveRole>

                <ExecutiveIntro>
                  Glenn Jacinto brings more than 15 years of leadership experience helping
                  companies sharpen commercial strategy, strengthen delivery discipline, and build
                  durable client relationships across multiple sectors.
                </ExecutiveIntro>

                <ExecutiveSummary>
                  His work centers on translating business objectives into practical operating
                  plans, aligning teams around measurable outcomes, and supporting partners that
                  need reliable execution alongside strategic judgment.
                </ExecutiveSummary>

                <ExecutiveMeta>
                  <MetaCard>
                    <MetaLabel>Experience</MetaLabel>
                    <MetaValue>15+ years</MetaValue>
                  </MetaCard>

                  <MetaCard>
                    <MetaLabel>Core Discipline</MetaLabel>
                    <MetaValue>Growth strategy, partnerships, and execution</MetaValue>
                  </MetaCard>

                  <MetaCard>
                    <MetaLabel>Professional Profile</MetaLabel>
                    <MetaValue>
                      <a
                        href="https://www.linkedin.com/in/glenn-jacinto-bb2a87122/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </a>
                    </MetaValue>
                  </MetaCard>
                </ExecutiveMeta>

                <ExecutivePositioning>
                  Trusted by organizations looking for disciplined leadership, clearer commercial
                  direction, and execution that holds up under growth pressure.
                </ExecutivePositioning>

                <ExecutiveBodyGrid>
                  <ExecutiveBodySection>
                    <SubHeading>Sector Experience</SubHeading>
                    <TagList>
                      <Tag>SaaS</Tag>
                      <Tag>Technology</Tag>
                      <Tag>Logistics</Tag>
                      <Tag>Healthcare</Tag>
                      <Tag>Professional Services</Tag>
                    </TagList>
                  </ExecutiveBodySection>

                  <ExecutiveBodySection>
                    <SubHeading>Representative Outcomes</SubHeading>
                    <OutcomesList>
                      <li>Helped a Series B SaaS company close a $4M partnership deal in 90 days.</li>
                      <li>
                        Improved proposal win rate by 32% for a logistics provider within two
                        quarters.
                      </li>
                      <li>Reduced service turnaround time by 25% for a healthcare team.</li>
                    </OutcomesList>
                  </ExecutiveBodySection>
                </ExecutiveBodyGrid>
              </ExecutiveContent>
            </ExecutiveCard>
          </ExecutiveShowcase>
        </Container>
      </ExecutiveSection>

      {/* Company Values Section */}
      <ValuesSection>
        <Container>
          <SectionTitle>Our Values</SectionTitle>
          <ValueGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <IconContainer>{value.icon}</IconContainer>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValueGrid>
        </Container>
      </ValuesSection>

      {/* Why Choose Us Section */}
      <Section>
        <Container>
          <SectionTitle>Why Choose Us</SectionTitle>
          <TwoColumnLayout>
            <LeftContent>
              <Paragraph>
                Hyacinth Industries LLC stands out as a premier outsourcing partner because we
                understand that each business has unique challenges and opportunities. Our approach
                combines deep industry knowledge with customized solutions designed to address your
                specific needs.
              </Paragraph>
              <Paragraph>
                With a global network of highly skilled professionals, we deliver exceptional
                results across various industries including healthcare, engineering, administrative
                support, and creative services. Our commitment to quality, reliability, and
                innovation has earned us the trust of clients worldwide.
              </Paragraph>
              <Paragraph>
                We don&apos;t just provide services; we build lasting partnerships focused on your
                long-term success. Our collaborative approach ensures that we align with your
                business objectives and work as an extension of your team.
              </Paragraph>
            </LeftContent>

            <RightContent>
              <BenefitsList>
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index}>
                    <CheckCircle size={20} color="#DC143C" />
                    <span>{benefit}</span>
                  </BenefitItem>
                ))}
              </BenefitsList>
            </RightContent>
          </TwoColumnLayout>
        </Container>
      </Section>

      {/* Call to Action Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to transform your business?</CTATitle>
            <CTAText>
              Partner with Hyacinth Industries LLC and discover how our outsourcing solutions can
              help you achieve your business goals.
            </CTAText>
            <CTAButton href="/contact">Contact Us Today</CTAButton>
          </CTAContent>
        </Container>
      </CTASection>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  font-family: var(--font-body);
  padding-top: 110px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  padding: 3rem 0 4.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroInner = styled.div`
  max-width: 860px;
  margin: 0 auto 3rem;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
    margin-bottom: 2rem;
  }
`;

const HeroEyebrow = styled.p`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;

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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 2.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    padding: 0 1.25rem;
  }
`;

const LeftColumn = styled.div`
  flex: 0.4;
  padding: 0 1rem 0 0;
`;

const RightColumn = styled.div`
  flex: 0.6;
  padding: 0;
`;

const Caption = styled.p`
  font-family: var(--font-body);
  font-weight: 400;
  color: #2f3137;
  text-align: left;
  font-size: clamp(1.1rem, 1.45vw, 1.28rem);
  line-height: 1.9;
  max-width: 32rem;
  margin: 0;
`;

const CaptionLead = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-family: var(--font-accent);
  font-size: clamp(2rem, 4vw, 3.15rem);
  line-height: 1.02;
  color: #dc143c;
  letter-spacing: -0.03em;
`;

const Section = styled.section`
  padding: 6.5rem 0;
  background-color: #fff;
`;

const ExecutiveSection = styled(Section)`
  background:
    linear-gradient(180deg, #ffffff 0%, #f6f7fb 100%);
`;

const ValuesSection = styled(Section)`
  background-color: #f9f9f9;
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: min(1200px, calc(100% - 1.25rem));
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  color: #1d1d1f;
  text-align: center;
  margin: 0 0 3.25rem;
  position: relative;
  letter-spacing: -0.035em;
  line-height: 1.08;

  &::after {
    content: "";
    display: block;
    width: 84px;
    height: 4px;
    background: #dc143c;
    margin: 1.1rem auto 0;
    border-radius: 999px;
  }
`;

const MissionStatement = styled.p`
  font-family: var(--font-accent);
  font-size: clamp(1.4rem, 2.2vw, 1.8rem);
  line-height: 1.9;
  color: #2f3137;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  font-style: italic;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  padding: 2.1rem 2rem 2rem;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(17, 17, 17, 0.08);
  border: 1px solid rgba(20, 20, 20, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(17, 17, 17, 0.12);
  }
`;

const IconContainer = styled.div`
  color: #dc143c;
  margin-bottom: 1.25rem;
`;

const ValueTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.42rem;
  color: #202124;
  margin: 0 0 0.8rem;
  letter-spacing: -0.02em;
`;

const ValueDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: #5d6169;
  margin: 0;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.95;
  color: #30313a;
  margin: 0 0 1.5rem;
  max-width: 38rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.3rem;
  color: #30313a;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #dc143c, #990000);
  padding: 6rem 0;
  color: white;
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 0 0 1.2rem;
  letter-spacing: -0.03em;
`;

const CTAText = styled.p`
  font-family: var(--font-body);
  font-size: 1.12rem;
  line-height: 1.9;
  margin: 0 auto 2.2rem;
  max-width: 42rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #dc143c;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1rem 2.1rem;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// About Executive
const ExecutiveShowcase = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 28px;
  background: linear-gradient(180deg, #f8f9fb 0%, #eef1f5 100%);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    padding: 0.75rem;
    border-radius: 24px;
  }
`;

const ExecutiveCard = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 2rem;
  align-items: stretch;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 24px;
  padding: 1.5rem;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1.25rem;
    gap: 1.5rem;
  }
`;

const ExecutivePhotoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExecutivePhotoCard = styled.div`
  width: 100%;
  max-width: 300px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 20px;
  padding: 0.75rem;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
`;

const ExecutivePhoto = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center top;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.1);
`;

const ExecutivePortraitMeta = styled.div`
  padding: 0.9rem 0.2rem 0.1rem;
`;

const PortraitEyebrow = styled.p`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a10f2b;
`;

const PortraitNote = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.7;
  color: #4b5563;
`;

const ExecutiveContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.35rem 0;
`;

const ExecutiveKicker = styled.p`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a10f2b;
`;

const ExecutiveName = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: #111827;
`;

const ExecutiveRole = styled.p`
  margin: 0.65rem 0 1rem;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #5b6472;
  max-width: 42rem;
`;

const ExecutiveIntro = styled.p`
  margin: 0 0 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.85;
  color: #1f2937;
  max-width: 46rem;
`;

const ExecutiveSummary = styled.p`
  margin: 0 0 1.35rem;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.82;
  color: #4b5563;
  max-width: 46rem;
`;

const ExecutiveMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0 0 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MetaCard = styled.div`
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  min-height: 88px;
`;

const MetaLabel = styled.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
`;

const MetaValue = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.55;

  a {
    color: #0f4c81;
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ExecutivePositioning = styled.p`
  margin: 0 0 1.5rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(220, 20, 60, 0.12);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(220, 20, 60, 0.04), rgba(220, 20, 60, 0.02));
  font-family: var(--font-accent);
  font-size: 0.98rem;
  line-height: 1.75;
  color: #7a2033;
`;

const ExecutiveBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ExecutiveBodySection = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  padding: 1.15rem 1.2rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
`;

const SubHeading = styled.h4`
  margin: 0 0 0.9rem;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7c2d12;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  background: #f8fafc;
  color: #334155;
  border: 1px solid #dbe3ec;
  border-radius: 999px;
  padding: 0.5rem 0.85rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
`;

const OutcomesList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;

  li {
    font-family: var(--font-body);
    font-size: 0.96rem;
    line-height: 1.78;
    color: #1f2937;
    margin-bottom: 0.8rem;
  }

  li::marker {
    color: #dc143c;
  }
`;
