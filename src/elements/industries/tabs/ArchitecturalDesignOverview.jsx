import React from 'react';
import styled from 'styled-components';
import { 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle2,
  Clock,
  Activity, 
  Heart, 
  LayoutList, 
  Headset, 
  BriefcaseMedical, 
  ClipboardPlus
} from "lucide-react";

import bgImage from '../../../assets/img/backgrounds/bnw.webp';
import architecturalHero from '../../../assets/img/industries/office.webp';
import {
  heroContent,
  heroEyebrow,
  heroOverlay,
  heroSubtitle,
  heroTitle,
  primaryButton,
  sectionTitle
} from '../../../styles/premiumPageStyles';

const architecturalServices = [
  {
    icon: LayoutList,
    title: "Architectural Plans",
    items: [
      "Includes floor plans, roof plans, elevations, and sections"
    ]
  },
  {
    icon: Heart,
    title: "Interior Design",
    items: [
      "Space planning, 3D renderings, material specifications, and furniture layouts."
    ]
  },
  {
    icon: BriefcaseMedical,
    title: "Exterior Design",
    items: [
      "Facade development, 3D modeling, material selection, and landscaping. "
    ]
  },
  {
    icon: ClipboardPlus,
    title: "Conceptual Design",
    items: [
      "Mood boards, initial sketches, and design concepts."
    ]
  },
  {
    icon: Activity,
    title: "3D Rendering and Visualization",
    items: [
      "High-quality renders for presentation and marketing."
    ]
  },
  {
    icon: Headset,
    title: "Other Services",
    items: [
      "Revision Requests",
      "Project Management Services",
      "Rush Designs"
    ]
  },
];

const architecturalBenefits = [
  {
    icon: Clock,
    title: "Free Revisions",
    description: "Be flexible with your design, as the first 2 revisions are free."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced architects and designers at your service"
  },
  {
    icon: TrendingUp,
    title: "Versatile Solutions",
    description: "Adaptable designs for various project scales and types"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control throughout the design process"
  }
];

const ArchitecturalDesignOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={architecturalHero || bgImage} alt="Architectural Design Services" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>Architectural Design</HeroTitle>
            <HeroSubtitle>
              Innovative spatial solutions that balance aesthetics, functionality, and real project constraints.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton>Explore Our Solutions</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Overview Section */}
      <Section background="#ffffff">
        <SectionTitle>Architectural Design Overview</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <Paragraph>
              At Hyacinth Industries, we provide innovative architectural design services that blend aesthetics with functionality. 
              Our team of expert architects creates sustainable, efficient, and visually striking spaces that exceed client expectations.
            </Paragraph>
            <Paragraph>
              From concept to completion, we work closely with clients to transform their vision into reality, 
              creating spaces that are both beautiful and functional.
            </Paragraph>
          </ContentColumn>
          <ImageColumn>
            <StyledImage src={bgImage} alt="Architectural Design" />
          </ImageColumn>
        </ContentGrid>
      </Section>
      
      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>Our Architectural Services</SectionTitle>
        <ServicesGrid>
          {architecturalServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <service.icon size={40} color="#DC143C" />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceCardDescription>
                {service.items.join(' ')}
              </ServiceCardDescription>
              <ServiceFeatures>
                {service.items.map((item, itemIndex) => (
                  <ServiceFeature key={itemIndex}><CheckCircle2 size={16} color="#DC143C" /> {item}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Architectural Services</SectionTitle>
        <BenefitsGrid>
          {architecturalBenefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>
                <benefit.icon size={32} color="#DC143C" />
              </BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>
                {benefit.description}
              </BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionTitle>Our Architectural Process</SectionTitle>
        <ProcessDescription>
          We follow a structured approach to deliver exceptional architectural designs that meet your specific requirements.
        </ProcessDescription>
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={bgImage} alt="Architectural Process" />
          </ProcessImage>
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>1</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Consultation & Brief</ProcessStepTitle>
                <ProcessStepDescription>
                  We begin by understanding your vision, requirements, and constraints for the project.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>2</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Concept Design</ProcessStepTitle>
                <ProcessStepDescription>
                  Our architects develop initial concepts and preliminary designs based on your brief.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>3</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Detailed Design</ProcessStepTitle>
                <ProcessStepDescription>
                  We create comprehensive plans, elevations, and 3D visualizations of your project.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>4</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Final Delivery</ProcessStepTitle>
                <ProcessStepDescription>
                  We provide all necessary documentation and support for the implementation of your design.
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
            <CtaTitle>Ready to Transform Your Space?</CtaTitle>
            <CtaDescription>
              Partner with us to create architectural designs that inspire and elevate your environment.
            </CtaDescription>
            <CtaButton>Contact Us Today</CtaButton>
          </CtaContent>
        </CtaOverlay>
      </CtaSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const HeroSection = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  ${heroOverlay};
  flex-direction: column;
  gap: 2rem;
`

const HeroContent = styled.div`
  ${heroContent};
`

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: rgba(255, 255, 255, 0.9);
`

const HeroTitle = styled.h1`
  ${heroTitle};
`

const HeroSubtitle = styled.p`
  ${heroSubtitle};
`

const HeroButton = styled.button`
  ${primaryButton};
`

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${props => props.background || '#f8f9fa'};
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const SectionTitle = styled.h2`
  ${sectionTitle};
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ImageColumn = styled.div`
  @media (max-width: 992px) {
    order: -1;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-family: var(--font-body);
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`

const ServiceIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
  
  svg {
    color: #DC143C;
  }
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ServiceCardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ServiceFeatures = styled.div`
  margin-top: auto;
`

const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #444;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
    flex-shrink: 0;
  }
`

const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BenefitCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
  }
`

const BenefitIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
  
  svg {
    color: #DC143C;
  }
`

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`

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

const CtaButton = styled.button`
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

export default ArchitecturalDesignOverview
