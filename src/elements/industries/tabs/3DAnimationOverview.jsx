import React from 'react';
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
  Zap,
  Gamepad2
} from 'lucide-react'

import bgImage from '../../../assets/img/backgrounds/bnw.webp'
import animationHero from '../../../assets/img/industries/animation.webp'
import { heroContent, heroEyebrow, heroOverlay, heroSubtitle, heroTitle, primaryButton, sectionTitle } from '../../../styles/premiumPageStyles'

const animationServices = [
  {
    icon: Box,
    title: "3D Modeling",
    items: [
      "Character modeling",
      "Product visualization",
      "Architectural rendering",
      "Environment design"
    ]
  },
  {
    icon: Video,
    title: "Animation Production",
    items: [
      "Character animation",
      "Motion graphics",
      "Visual effects (VFX)",
      "Cinematic sequences"
    ]
  },
  {
    icon: Monitor,
    title: "Interactive Media",
    items: [
      "Virtual reality (VR)",
      "Augmented reality (AR)",
      "Interactive presentations",
      "Real-time rendering"
    ]
  },
  {
    icon: Palette,
    title: "Visual Design",
    items: [
      "Concept art",
      "Texture creation",
      "Lighting design",
      "Color grading"
    ]
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    items: [
      "Game asset creation",
      "Character rigging",
      "Animation integration",
      "Environment design"
    ]
  },
  {
    icon: Layers,
    title: "Compositing",
    items: [
      "Multi-layer compositing",
      "Post-production effects",
      "Color correction",
      "Final output rendering"
    ]
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
        <HeroImageContainer>
          <HeroImage src={animationHero} alt="3D Animation Services" />
          <HeroOverlay>
            <HeroContent>
              <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
              <HeroTitle>3D Animation & Visualization</HeroTitle>
              <HeroSubtitle>Bringing ideas to life through stunning visual storytelling</HeroSubtitle>
              <HeroButton href="#3d-animation-and-visualization">Explore Our Work</HeroButton>
            </HeroContent>
          </HeroOverlay>
        </HeroImageContainer>
      </HeroSection>

      {/* Overview Section */}
      <OverviewSection id='3d-animation-and-visualization'>
        <SectionTitle>Cutting-Edge 3D Animation Services</SectionTitle>
        <OverviewDescription>
          At Hyacinth Industries, we bring ideas to life through cutting-edge 3D animation and visualization. 
          Our team combines artistic excellence with technical expertise to create stunning visual content 
          that captivates audiences and communicates your message effectively.
        </OverviewDescription>
      </OverviewSection>

      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>Our Animation Services</SectionTitle>
        <ServiceDescription>
          We offer a comprehensive range of 3D animation and visualization services to meet your creative needs, 
          from concept development to final rendering and everything in between.
        </ServiceDescription>
        <ServicesGrid>
          {animationServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIconWrapper>
                <service.icon size={24} color="#DC143C" />
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
                <benefit.icon size={24} color="#DC143C" />
              </BenefitIconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.description}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionTitle>Our Animation Process</SectionTitle>
        <ProcessDescription>
          We follow a structured approach to 3D animation and visualization to ensure that every project 
          is delivered on time, within budget, and exceeds expectations.
        </ProcessDescription>
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={animationHero} alt="Animation Process" />
          </ProcessImage>
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>1</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Concept & Storyboarding</ProcessStepTitle>
                <ProcessStepDescription>
                  We begin by understanding your vision and developing concepts and storyboards that outline the visual narrative.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>2</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>3D Modeling & Texturing</ProcessStepTitle>
                <ProcessStepDescription>
                  Our artists create detailed 3D models and apply realistic textures to bring characters and environments to life.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>3</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Animation & Lighting</ProcessStepTitle>
                <ProcessStepDescription>
                  We animate the models with fluid motion and apply professional lighting to create the desired mood and atmosphere.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>4</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Rendering & Post-Production</ProcessStepTitle>
                <ProcessStepDescription>
                  The final stage involves high-quality rendering and post-production enhancements to deliver the finished animation.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
          </ProcessSteps>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* Call to Action Section */}
      <CtaSection>
        <CtaOverlay>
          <CtaContent>
            <CtaTitle>Ready to Bring Your Vision to Life?</CtaTitle>
            <CtaDescription>
              Let&apos;s  discuss how our 3D animation services can help you create compelling visual content that engages your audience and achieves your goals.
            </CtaDescription>
            <CtaButton href="/contact">Start Your Project</CtaButton>
          </CtaContent>
        </CtaOverlay>
      </CtaSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

// Hero Section Styles
const HeroSection = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const HeroImageContainer = styled.div`
  position: relative;
  height: 655px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 450px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  ${heroOverlay};
`

const HeroContent = styled.div`
  ${heroContent};
`

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: rgba(255, 255, 255, 0.9);
`;

const HeroTitle = styled.h1`
  ${heroTitle};
`

const HeroSubtitle = styled.p`
  ${heroSubtitle};
`

const HeroButton = styled.a`
  ${primaryButton};
`

// Overview Section Styles
const OverviewSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`

const SectionTitle = styled.h2`
  ${sectionTitle};
  margin-bottom: 1.8rem;
`

const OverviewDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-body);
`

// Services Section Styles
const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`

const ServiceIconWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ServiceListItem = styled.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #666;
  font-family: var(--font-body);
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`

// Benefits Section Styles
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const BenefitDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BenefitCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const BenefitIconWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`

const BenefitText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`

// Process Section Styles
const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const ProcessDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ProcessStepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const ProcessImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    max-height: 400px;
    overflow: hidden;
  }
`

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ProcessStep = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const ProcessStepNumber = styled.div`
  background-color: #DC143C;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(220, 20, 60, 0.2);
`

const ProcessStepContent = styled.div`
  flex: 1;
`

const ProcessStepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`

const ProcessStepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`

// CTA Section Styles
const CtaSection = styled.section`
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  min-height: 300px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`

const CtaOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const CtaContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CtaDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const CtaButton = styled.a`
  background-color: #DC143C;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #B01030;
  }
`

export default ThreeDAnimationOverview
