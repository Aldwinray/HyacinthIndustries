import React from 'react';
import styled from 'styled-components';
import { 
  ClipboardList, 
  Building2, 
  Users, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp,
  CheckCircle2,
  Clock,
  BarChart4,
  Workflow
} from 'lucide-react';
import {
  heroContent,
  heroEyebrow,
  heroOverlay,
  heroSubtitle,
  heroTitle,
  primaryButton,
  sectionTitle
} from '../../../styles/premiumPageStyles';

// Images
import bgImage from '../../../assets/img/industries/office.webp';

const GeneralServicesOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={bgImage} alt="General Services" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>General Services</HeroTitle>
            <HeroSubtitle>
              Comprehensive business support designed to stabilize daily operations and improve service delivery.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton href="#general-services">Explore Services</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id='general-services'>
        <SectionTitle>Our General Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><Building2 size={40} /></ServiceIcon>
            <ServiceTitle>Facility Management</ServiceTitle>
            <ServiceDescription>
              Comprehensive facility management solutions to maintain and optimize your business environment.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Maintenance & Repairs</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Space Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Security Services</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><ClipboardList size={40} /></ServiceIcon>
            <ServiceTitle>Office Administration</ServiceTitle>
            <ServiceDescription>
              Streamline your office operations with our professional administrative support services.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Document Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Office Coordination</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Administrative Support</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><Users size={40} /></ServiceIcon>
            <ServiceTitle>Human Resources</ServiceTitle>
            <ServiceDescription>
              Comprehensive HR solutions to manage your workforce effectively and efficiently.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Recruitment & Onboarding</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Employee Relations</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Performance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><ShieldCheck size={40} /></ServiceIcon>
            <ServiceTitle>Security Services</ServiceTitle>
            <ServiceDescription>
              Protect your assets and ensure a safe working environment with our security solutions.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Access Control</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Surveillance Systems</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Security Personnel</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Our Approach Section */}
      <ApproachSection>
        <SectionTitle>Our Approach</SectionTitle>
        <ApproachDescription>
          We follow a systematic approach to deliver exceptional general services that meet your business needs.
        </ApproachDescription>
        
        <ProcessSteps>
          <ProcessStep>
            <ProcessStepIcon><ClipboardList size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Assessment</ProcessStepTitle>
            <ProcessStepDescription>
              We evaluate your current operations and identify areas for improvement.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepIcon><Workflow size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Planning</ProcessStepTitle>
            <ProcessStepDescription>
              We develop a customized service plan tailored to your specific requirements.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepIcon><Briefcase size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Implementation</ProcessStepTitle>
            <ProcessStepDescription>
              We execute the plan with precision and attention to detail.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>

            <ProcessStepIcon><BarChart4 size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Monitoring</ProcessStepTitle>
            <ProcessStepDescription>
              We continuously monitor performance and make adjustments as needed.
            </ProcessStepDescription>
          </ProcessStep>
        </ProcessSteps>
      </ApproachSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our General Services</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={32} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Free up valuable time for your core business activities by outsourcing general services to our experts.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={32} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and streamlined processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><ShieldCheck size={32} /></BenefitIcon>
            <BenefitTitle>Enhanced Security</BenefitTitle>
            <BenefitDescription>
              Protect your assets and ensure a safe working environment with our comprehensive security solutions.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  height: 655px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  ${heroOverlay};
  flex-direction: column;
  gap: 2rem;
`;

const HeroContent = styled.div`
  ${heroContent};
`;

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: rgba(255, 255, 255, 0.9);
`;

const HeroTitle = styled.h1`
  ${heroTitle};
`;

const HeroSubtitle = styled.p`
  ${heroSubtitle};
`;

const HeroButton = styled.a`
  ${primaryButton};
`;

const SectionTitle = styled.h2`
  ${sectionTitle};
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  scroll-margin-top: 115px;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-body);
`;

const ServiceFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
  font-family: var(--font-body);
  
  svg {
    color: #DC143C;
  }
`;

const ApproachSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ApproachDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background-color: #ddd;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    
    &:before {
      display: none;
    }
  }
`;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 22%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProcessStepNumber = styled.div`
  background-color: #DC143C;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
`;

const ProcessStepIcon = styled.div`
  background-color: white;
  color: #DC143C;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`;

const ProcessStepDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`;

const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const BenefitsGrid = styled.div`
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
`;

const BenefitCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`;

export default GeneralServicesOverview;
