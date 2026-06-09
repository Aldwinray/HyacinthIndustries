import styled from 'styled-components'
import { 
  Box, 
  Video, 
  Palette, 
  Monitor, 
  LineChart, 
  Users, 
  Expand, 
  ShieldCheck,
  Layers,
  Lightbulb,
  Clock,
  ArrowRight,
  Gamepad2
} from 'lucide-react'

import BGanimation from '../../../assets/img/bgservices/3dAnimation.webp';
import animationHero from '../../../assets/img/industries/animation.webp'

const animationServices = [
  {
    icon: Box,
    title: "3D Modeling",
    items: [
      "Character modeling",
      "Product visualization",
      "Architectural rendering",
      "Environment design"
    ],
    accent: "#8b0d2a",
    accentLight: "rgba(139, 13, 42, 0.04)"
  },
  {
    icon: Video,
    title: "Animation Production",
    items: [
      "Character animation",
      "Motion graphics",
      "Visual effects (VFX)",
      "Cinematic sequences"
    ],
    accent: "#1a5c3a",
    accentLight: "rgba(26, 92, 58, 0.04)"
  },
  {
    icon: Monitor,
    title: "Interactive Media",
    items: [
      "Virtual reality (VR)",
      "Augmented reality (AR)",
      "Interactive presentations",
      "Real-time rendering"
    ],
    accent: "#7c3a15",
    accentLight: "rgba(124, 58, 21, 0.04)"
  },
  {
    icon: Palette,
    title: "Visual Design",
    items: [
      "Concept art",
      "Texture creation",
      "Lighting design",
      "Color grading"
    ],
    accent: "#8b0d2a",
    accentLight: "rgba(139, 13, 42, 0.04)"
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    items: [
      "Game asset creation",
      "Character rigging",
      "Animation integration",
      "Environment design"
    ],
    accent: "#1a5c3a",
    accentLight: "rgba(26, 92, 58, 0.04)"
  },
  {
    icon: Layers,
    title: "Compositing",
    items: [
      "Multi-layer compositing",
      "Post-production effects",
      "Color correction",
      "Final output rendering"
    ],
    accent: "#7c3a15",
    accentLight: "rgba(124, 58, 21, 0.04)"
  }
]

const animationBenefits = [
  {
    icon: LineChart,
    title: "Creative Excellence",
    description: "Stunning visuals that bring your ideas to life with cutting-edge animation techniques and artistic direction."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled 3D artists and animators bring years of experience across various industries and project types."
  },
  {
    icon: Expand,
    title: "Versatile Solutions",
    description: "Adaptable animation services for various industries including entertainment, education, marketing, and more."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "High-quality deliverables that meet industry standards with meticulous attention to detail."
  },
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "We leverage the latest technologies and creative techniques to deliver animations that stand out."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and deliver projects on time without compromising quality."
  }
]

const ThreeDAnimationOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroBg src={animationHero} aria-hidden />
        <HeroOverlay />
        <HeroVignette />
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>
              <EyebrowText>Hyacinth Industries</EyebrowText>
              <EyebrowLine />
            </HeroEyebrow>
            <HeroTitle>3D Animation & <span>Visualization</span></HeroTitle>
            <HeroSubtitle>Bringing ideas to life through stunning visual storytelling</HeroSubtitle>
            <HeroNote>
              End-to-end 3D animation from concept to final render and delivery.
            </HeroNote>
            <HeroActions>
              <HeroPrimaryButton href="#3d-animation-and-visualization">
                Explore Our Work
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroMeta>
                <MetaTop>6 Core Services</MetaTop>
                <MetaBottom>Enterprise-grade solutions</MetaBottom>
              </HeroMeta>
            </HeroActions>
          </HeroContent>
        </HeroInner>
      </HeroSection>

      {/* Overview Section */}
      <OverviewSection id='3d-animation-and-visualization'>
        <OverviewInner>
          <OverviewHeader>
            <OverviewTitle>Cutting-Edge 3D Animation Services</OverviewTitle>
            <OverviewDescription>
              At Hyacinth Industries, we bring ideas to life through cutting-edge 3D animation and visualization. 
              Our team combines artistic excellence with technical expertise to create stunning visual content 
              that captivates audiences and communicates your message effectively.
            </OverviewDescription>
          </OverviewHeader>
        </OverviewInner>
      </OverviewSection>

      {/* Services Section */}
      <ServicesSection>
        <SectionDivider />
        <SectionTitle>Our Animation Services</SectionTitle>
        <ServiceDescription>
          We offer a comprehensive range of 3D animation and visualization services to meet your creative needs, 
          from concept development to final rendering and everything in between.
        </ServiceDescription>
        <ServicesGrid>
          {animationServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceNumber>0{index + 1}</ServiceNumber>
              <ServiceIconWrapper>
                <service.icon size={24} strokeWidth={1.5} />
              </ServiceIconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item, idx) => (
                  <ServiceListItem key={idx}>{item}</ServiceListItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Animation Services?</SectionTitle>
        <BenefitDescription>
          Our approach to 3D animation combines creativity, technical expertise, and strategic thinking 
          to deliver visual content that not only looks impressive but also achieves your communication goals.
        </BenefitDescription>
        <BenefitsGrid>
          {animationBenefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIconWrapper>
                <benefit.icon size={24} strokeWidth={1.5} />
              </BenefitIconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.description}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionDivider />
        <SectionTitle>Our Animation Process</SectionTitle>
        <ProcessDescription>
          We follow a structured approach to 3D animation and visualization to ensure that every project 
          is delivered on time, within budget, and exceeds expectations.
        </ProcessDescription>
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={animationHero} alt="Animation Process" loading="lazy" />
          </ProcessImage>
          <ProcessSteps>
            {[
              { t: "Concept & Storyboarding", d: "We begin by understanding your vision and developing concepts and storyboards that outline the visual narrative." },
              { t: "3D Modeling & Texturing", d: "Our artists create detailed 3D models and apply realistic textures to bring characters and environments to life." },
              { t: "Animation & Lighting", d: "We animate the models with fluid motion and apply professional lighting to create the desired mood and atmosphere." },
              { t: "Rendering & Post-Production", d: "The final stage involves high-quality rendering and post-production enhancements to deliver the finished animation." }
            ].map((step, i) => (
              <ProcessStep key={i}>
                <ProcessStepNumber>0{i + 1}</ProcessStepNumber>
                <ProcessStepContent>
                  <ProcessStepTitle>{step.t}</ProcessStepTitle>
                  <ProcessStepDescription>{step.d}</ProcessStepDescription>
                </ProcessStepContent>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* Call to Action Section */}
      <CtaSection>
        <CtaOverlay />
        <CtaContent>
          <CtaTitle>Ready to Bring Your Vision to Life?</CtaTitle>
          <CtaDescription>
            Let&apos;s discuss how our 3D animation services can help you create compelling visual content that engages your audience and achieves your goals.
          </CtaDescription>
          <CtaButton href="/contact/">
            Start Your Project
            <ArrowRight size={18} />
          </CtaButton>
        </CtaContent>
      </CtaSection>
    </Wrapper>
  )
}

/* --- Styled Components - World-Class Enterprise Design System ----- */

const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;
`;

// Hero Section - World-Class Enterprise
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #020617;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 8rem 0 5rem;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  opacity: 0.5;

  @media (max-width: 768px) {
    background-position: 65% center;
    opacity: 0.45;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 100% 0%, rgba(139, 13, 42, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 0% 100%, rgba(2, 6, 23, 0.98) 0%, transparent 60%),
    linear-gradient(
      115deg,
      rgba(2, 6, 23, 0.97) 0%,
      rgba(2, 6, 23, 0.92) 30%,
      rgba(2, 6, 23, 0.78) 50%,
      rgba(2, 6, 23, 0.45) 70%,
      rgba(2, 6, 23, 0.15) 100%
    );

  @media (max-width: 1024px) {
    background: 
      radial-gradient(ellipse at 100% 0%, rgba(139, 13, 42, 0.1) 0%, transparent 40%),
      linear-gradient(
        115deg,
        rgba(2, 6, 23, 0.98) 0%,
        rgba(2, 6, 23, 0.95) 40%,
        rgba(2, 6, 23, 0.82) 65%,
        rgba(2, 6, 23, 0.5) 100%
      );
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.96) 0%,
      rgba(2, 6, 23, 0.92) 40%,
      rgba(2, 6, 23, 0.75) 100%
    );
  }
`;

const HeroVignette = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 6, 23, 0.4) 100%);
  pointer-events: none;
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 4rem 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 720px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroEyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

const EyebrowText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

const EyebrowLine = styled.div`
  width: 60px;
  height: 1px;
  background: #8b0d2a;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(4rem, 6vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: #ffffff;

  span {
    display: block;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 300;
    margin-top: 0.25rem;
    font-size: 0.5em;
    letter-spacing: 0.02em;
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 10vw, 4rem);
    line-height: 1;

    span {
      margin-top: 0.5rem;
    }
  }
`;

const HeroSubtitle = styled.p`
  margin: 2.25rem 0 0;
  max-width: 560px;
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 1.75rem auto 0;
    max-width: 480px;
  }
`;

const HeroNote = styled.p`
  margin: 1.5rem 0 0;
  max-width: 560px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 1.25rem;
  border-left: 2px solid rgba(139, 13, 42, 0.5);

  @media (max-width: 768px) {
    margin: 1.25rem auto 0;
    max-width: 420px;
    padding-left: 1rem;
    font-size: 0.9rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 2.5rem;
  }
`;

const HeroPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  height: 64px;
  padding: 0 2.5rem;
  background: #8b0d2a;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  &:hover {
    background: #9f1239;
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(139, 13, 42, 0.35);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    height: 56px;
  }
`;

const HeroMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  margin-left: 2rem;

  @media (max-width: 640px) {
    flex-direction: row;
    gap: 0.5rem;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-left: 0;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
`;

const MetaTop = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const MetaBottom = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.25rem;
  letter-spacing: 0.01em;

  @media (max-width: 640px) {
    margin-top: 0;
  }
`;

const OverviewSection = styled.section`
  padding: 7rem 2rem;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
  }
`;

const OverviewInner = styled.div`
  width: min(1180px, 100%);
  max-width: 1180px;
  margin: 0 auto;
`;

const OverviewHeader = styled.div`
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const SectionDivider = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto 5rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 13, 42, 0.2), transparent);

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0a1628;
  margin-bottom: 4rem;
  text-align: center;
  line-height: 1.15;
`;

const OverviewTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0a1628;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 1.15;
`;

const OverviewDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #5a6578;
  margin: 0 auto;
  text-align: center;
`;

// Services Section - World-Class Enterprise Modules
const ServicesSection = styled.section`
  padding: 7rem 2rem;
  background: #fafbfc;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e9ed;
  padding: 2rem 1.75rem 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;

  &:hover {
    border-color: #8b0d2a;
    box-shadow: 0 20px 50px rgba(10, 22, 40, 0.1);
    transform: translateY(-6px);
  }

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem 1.5rem;
  }
`;

const ServiceNumber = styled.span`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #8b0d2a;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  opacity: 0.7;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ServiceIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ServiceCard}:hover & {
    background: #8b0d2a;
    border-color: #8b0d2a;
    color: #ffffff;
    transform: scale(1.05);
  }
`;

const ServiceTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: #0a1628;
  line-height: 1.25;
  letter-spacing: -0.01em;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e9ed;
`;

const ServiceListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #5a6578;
  line-height: 1.5;
  &::before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #8b0d2a;
    font-weight: bold;
  }
`;

// Benefits Section - Strategic Value
const BenefitsSection = styled.section`
  padding: 7rem 2rem;
  background: #fafbfc;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139, 13, 42, 0.15), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const BenefitDescription = styled.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const BenefitCard = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  background: #ffffff;
  padding: 1.75rem 1.5rem;
  border: 1px solid #e5e9ed;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: #8b0d2a;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: #8b0d2a;
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.08);

    &::before {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const BenefitIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${BenefitCard}:hover & {
    background: #8b0d2a;
    border-color: #8b0d2a;
    color: #ffffff;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const BenefitText = styled.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`;

// Process Section - Professional Process
const ProcessSection = styled.section`
  padding: 7rem 2rem;
  background: #ffffff;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const ProcessDescription = styled.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`;

const ProcessStepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProcessImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    box-shadow: 0 16px 48px rgba(10, 22, 40, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProcessStep = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: #fafbfc;
  border: 1px solid #e5e9ed;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #8b0d2a;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(10, 22, 40, 0.06);
  }
`;

const ProcessStepNumber = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #8b0d2a;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  padding: 0.25rem 0.5rem;
  background: rgba(139, 13, 42, 0.1);
  flex-shrink: 0;
`;

const ProcessStepContent = styled.div`
  flex: 1;
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const ProcessStepDescription = styled.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`;

// CTA Section - World-Class Enterprise Conversion
const CtaSection = styled.section`
  padding: 7rem 2rem;
  background: #020617;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const CtaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(139, 13, 42, 0.08) 0%, transparent 60%),
    url(${BGanimation}) center / cover no-repeat;
  opacity: 0.12;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(2, 6, 23, 0.95) 0%,
      rgba(2, 6, 23, 0.85) 50%,
      rgba(2, 6, 23, 0.95) 100%
    );
  }
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: 3.5rem 3rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const CtaTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
`;

const CtaDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 60px;
  padding: 0 3rem;
  background: #8b0d2a;
  color: #ffffff;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: #9f1239;
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(139, 13, 42, 0.4);

    &::before {
      left: 100%;
    }
  }

  svg {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export default ThreeDAnimationOverview;
