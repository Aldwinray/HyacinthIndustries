import React from 'react';
import styled from 'styled-components';
import { 
  ClipboardList, 
  FileText, 
  Calendar, 
  Mail, 
  Phone, 
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  Shield,
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

const AdministrativeSupportOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={bgImage} alt="Administrative Support Services" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>Administrative Support</HeroTitle>
            <HeroSubtitle>
              Professional business administration built to reduce operational drag and keep teams focused on execution.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton href="#administrative-services">Get Started</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id="administrative-services">
        <SectionTitle>Our Administrative Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><ClipboardList size={40} /></ServiceIcon>
            <ServiceTitle>Office Management</ServiceTitle>
            <ServiceDescription>
              Comprehensive office management solutions to streamline your business operations.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Workflow Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Resource Allocation</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Office Coordination</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><FileText size={40} /></ServiceIcon>
            <ServiceTitle>Document Processing</ServiceTitle>
            <ServiceDescription>
              Efficient document management and processing services for your business needs.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Document Creation</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Filing & Organization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Data Entry</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><Calendar size={40} /></ServiceIcon>
            <ServiceTitle>Scheduling & Planning</ServiceTitle>
            <ServiceDescription>
              Professional scheduling and planning services to optimize your time and resources.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Appointment Setting</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Meeting Coordination</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Event Planning</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><Mail size={40} /></ServiceIcon>
            <ServiceTitle>Correspondence Management</ServiceTitle>
            <ServiceDescription>
              Efficient handling of business correspondence to maintain professional communications.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Email Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Letter Drafting</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Response Handling</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionTitle>Our Administrative Process</SectionTitle>
        <ProcessDescription>
          We follow a systematic approach to deliver exceptional administrative support that meets your business needs.
        </ProcessDescription>
        
        <ProcessSteps>
          <ProcessStep>
            <ProcessStepIcon><ClipboardList size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Assessment</ProcessStepTitle>
            <ProcessStepDescription>
              We evaluate your current administrative processes and identify areas for improvement.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepIcon><Workflow size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Planning</ProcessStepTitle>
            <ProcessStepDescription>
              We develop a customized administrative support plan tailored to your specific requirements.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepIcon><Users size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Implementation</ProcessStepTitle>
            <ProcessStepDescription>
              We assign dedicated administrative professionals to execute the plan with precision.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepIcon><TrendingUp size={32} /></ProcessStepIcon>
            <ProcessStepTitle>Optimization</ProcessStepTitle>
            <ProcessStepDescription>
              We continuously monitor performance and optimize processes for maximum efficiency.
            </ProcessStepDescription>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Administrative Support</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={32} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Free up valuable time for core business activities by outsourcing administrative tasks to our experts.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={32} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and streamlined administrative processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><Shield size={32} /></BenefitIcon>
            <BenefitTitle>Professional Quality</BenefitTitle>
            <BenefitDescription>
              Ensure consistent, high-quality administrative support from experienced professionals.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      {/* Contact Section */}
      <ContactSection>
        <ContactContent>
          <ContactTitle>Ready to Streamline Your Administrative Processes?</ContactTitle>
          <ContactDescription>
            Contact us today to learn how our administrative support services can help your business thrive.
          </ContactDescription>
          <ContactButton href="/contact">Contact Us</ContactButton>
        </ContactContent>
      </ContactSection>
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

const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ProcessDescription = styled.p`
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

{/*const ProcessStepNumber = styled.div`
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
`;*/}

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

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactButton = styled.a`
  background-color: white;
  color: #DC143C;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-body);
  font-weight: 600;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
  }
`;

export default AdministrativeSupportOverview;
