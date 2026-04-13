import React from 'react';
import styled from 'styled-components';
import { 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle2,
  Clock
} from "lucide-react";

import bgImage from '../../../assets/img/backgrounds/bnw.webp';
import engineeringHero from '../../../assets/img/engineering/construction.webp';
import { Activity, Heart, LayoutList, Headset, BriefcaseMedical, ClipboardPlus } from 'lucide-react';
import EngineeringForm from '../../../components/forms/EngineeringForm';
import {
  heroContent,
  heroEyebrow,
  heroOverlay,
  heroSubtitle,
  heroTitle,
  primaryButton,
  sectionTitle
} from '../../../styles/premiumPageStyles';

const engineeringServices = [
  {
    icon: LayoutList,
    title: "Structural Plans",
    items: [
      "Detailed layout plans, sections, and connection details. "
    ]
  },
  {
    icon: ClipboardPlus,
    title: "Finite Element Analysis (FEA)",
    items: [
      "Comprehensive 3D modeling and stress analysis for complex structures",
    ]
  },
  {
    icon: BriefcaseMedical,
    title: "Retrofitting and Strengthening Design",
    items: [
      "For existing structures requiring upgrades."
    ]
  },
  {
    icon: Activity,
    title: "Load and Seismic Analysis",
    items: [
      "Earthquake and wind resistance checks with detailed reports. "
    ]
  },
  {
    icon: Heart,
    title: "Construction Detailing",
    items: [
      "Reinforcement detailing, steel connections, and bar bending schedules"
    ]
  },
  {
    icon: Headset,
    title: "Consultation Services",
    items: [
      "Online meetings for structural assessment and advice."
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Cost Savings",
    description: "Reduce costs for wider area projects"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified engineers with diverse industry experience"
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Solutions that adapt to your growing business needs"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and validation processes"
  }
];

const EngineeringDesignOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={engineeringHero || bgImage} alt="Engineering Design" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>Engineering Design</HeroTitle>
            <HeroSubtitle>
              Innovative technical solutions for complex structural, analysis, and implementation challenges.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton>Explore Our Solutions</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Overview Section */}
      <Section background="#ffffff">
        <SectionTitle>Engineering Design Overview</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <Paragraph>
              At Hyacinth Industries, we provide cutting-edge engineering design services that transform ideas into reality. 
              Our team of expert engineers combines creativity with technical precision to deliver innovative solutions 
              across various industries.
            </Paragraph>
            <Paragraph>
              From structural analysis to detailed construction plans, our comprehensive engineering services 
              are designed to meet the complex challenges of modern infrastructure and product development.
            </Paragraph>
          </ContentColumn>
          <ImageColumn>
            <StyledImage src={bgImage} alt="Engineering Design" />
          </ImageColumn>
        </ContentGrid>
      </Section>
      
      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>Our Engineering Services</SectionTitle>
        <ServicesGrid>
          {engineeringServices.map((service, index) => (
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
        <SectionTitle>Why Choose Our Engineering Services</SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
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
        <SectionTitle>Our Engineering Process</SectionTitle>
        <ProcessDescription>
          We follow a structured approach to deliver high-quality engineering solutions that meet your specific requirements.
        </ProcessDescription>
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={bgImage} alt="Engineering Process" />
          </ProcessImage>
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>1</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Requirements Analysis</ProcessStepTitle>
                <ProcessStepDescription>
                  We begin by thoroughly understanding your project needs and objectives.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>2</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Conceptual Design</ProcessStepTitle>
                <ProcessStepDescription>
                  Our engineers develop initial concepts and solutions tailored to your requirements.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>3</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Detailed Engineering</ProcessStepTitle>
                <ProcessStepDescription>
                  We create comprehensive designs with precise specifications and calculations.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>4</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Implementation Support</ProcessStepTitle>
                <ProcessStepDescription>
                  We provide ongoing support during the implementation phase to ensure success.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
          </ProcessSteps>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* Contact Form Section */}
      <FormSection>
        <FormContainer>
          <FormColumn>
            <SectionTitle>Request Engineering Services</SectionTitle>
            <FormDescription>
              Ready to start your engineering project? Fill out the form and our team will get back to you with a customized solution.
            </FormDescription>
          </FormColumn>
          <FormColumn>
            <EngineeringForm />
          </FormColumn>
        </FormContainer>
      </FormSection>

      {/* Call to Action Section */}
      <CtaSection>
        <CtaOverlay>
          <CtaContent>
            <CtaTitle>Ready to Transform Your Engineering Projects?</CtaTitle>
            <CtaDescription>
              Partner with us to bring your engineering vision to life with precision, innovation, and expertise.
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

const FormSection = styled.section`
  padding: 5rem 2rem;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const FormColumn = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`

const FormDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
  margin-bottom: 1rem;
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

export default EngineeringDesignOverview;
