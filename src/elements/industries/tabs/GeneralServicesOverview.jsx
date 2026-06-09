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
  Workflow,
  ArrowRight
} from 'lucide-react';

// Images
import bgImage from '../../../assets/img/industries/office.webp';
import BGgeneralservices from "../../../assets/img/bgservices/General Services.webp";

const GeneralServicesOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroBg src={bgImage} aria-hidden />
        <HeroOverlay />
        <HeroVignette />
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>
              <EyebrowText>Hyacinth Industries</EyebrowText>
              <EyebrowLine />
            </HeroEyebrow>
            <HeroTitle>General <span>Services</span></HeroTitle>
            <HeroSubtitle>
              Comprehensive business support designed to stabilize daily operations and improve service delivery.
            </HeroSubtitle>
            <HeroNote>
              End-to-end support for facilities, administration, HR, and security operations.
            </HeroNote>
            <HeroActions>
              <HeroPrimaryButton href="#general-services">
                Explore Services
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroMeta>
                <MetaTop>4 Core Services</MetaTop>
                <MetaBottom>Enterprise-grade support</MetaBottom>
              </HeroMeta>
            </HeroActions>
          </HeroContent>
        </HeroInner>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id='general-services'>
        <SectionDivider />
        <SectionTitle>Our General Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceNumber>01</ServiceNumber>
            <ServiceIcon><Building2 size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Facility Management</ServiceTitle>
            <ServiceDescription>
              Comprehensive facility management solutions to maintain and optimize your business environment.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Maintenance & Repairs</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Space Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Security Services</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>02</ServiceNumber>
            <ServiceIcon><ClipboardList size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Office Administration</ServiceTitle>
            <ServiceDescription>
              Streamline your office operations with our professional administrative support services.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Document Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Office Coordination</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Administrative Support</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>03</ServiceNumber>
            <ServiceIcon><Users size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Human Resources</ServiceTitle>
            <ServiceDescription>
              Comprehensive HR solutions to manage your workforce effectively and efficiently.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Recruitment & Onboarding</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Employee Relations</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Performance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>04</ServiceNumber>
            <ServiceIcon><ShieldCheck size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Security Services</ServiceTitle>
            <ServiceDescription>
              Protect your assets and ensure a safe working environment with our security solutions.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Access Control</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Surveillance Systems</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Security Personnel</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Our Approach Section */}
      <ApproachSection>
        <SectionDivider />
        <SectionTitle>Our Approach</SectionTitle>
        <ApproachDescription>
          We follow a systematic approach to deliver exceptional general services that meet your business needs.
        </ApproachDescription>
        
        <ProcessSteps>
          <ProcessStep>
            <ProcessStepNumber>01</ProcessStepNumber>
            <ProcessStepIcon><ClipboardList size={24} strokeWidth={1.5} /></ProcessStepIcon>
            <ProcessStepTitle>Assessment</ProcessStepTitle>
            <ProcessStepDescription>
              We evaluate your current operations and identify areas for improvement.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepNumber>02</ProcessStepNumber>
            <ProcessStepIcon><Workflow size={24} strokeWidth={1.5} /></ProcessStepIcon>
            <ProcessStepTitle>Planning</ProcessStepTitle>
            <ProcessStepDescription>
              We develop a customized service plan tailored to your specific requirements.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepNumber>03</ProcessStepNumber>
            <ProcessStepIcon><Briefcase size={24} strokeWidth={1.5} /></ProcessStepIcon>
            <ProcessStepTitle>Implementation</ProcessStepTitle>
            <ProcessStepDescription>
              We execute the plan with precision and attention to detail.
            </ProcessStepDescription>
          </ProcessStep>
          
          <ProcessStep>
            <ProcessStepNumber>04</ProcessStepNumber>
            <ProcessStepIcon><BarChart4 size={24} strokeWidth={1.5} /></ProcessStepIcon>
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
            <BenefitIcon><Clock size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Free up valuable time for your core business activities by outsourcing general services to our experts.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and streamlined processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><ShieldCheck size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Enhanced Security</BenefitTitle>
            <BenefitDescription>
              Protect your assets and ensure a safe working environment with our comprehensive security solutions.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      <ContactSection>
        <ContactOverlay />
        <ContactContent>
          <ContactTitle>
            Ready to Simplify Your Business Processes?
          </ContactTitle>
          <ContactDescription>
            We help you streamline operations, improve team productivity, and keep your business moving.
          </ContactDescription>
          <ContactButton href="/contact/">
            Contact Us
            <ArrowRight size={18} />
          </ContactButton>
        </ContactContent>
      </ContactSection>
    </Wrapper>
  );
};

// Styled Components - World-Class Enterprise Design System
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

// Services Section - World-Class Enterprise Modules
const ServicesSection = styled.section`
  padding: 7rem 2rem;
  background-color: #fafbfc;
  scroll-margin-top: 100px;
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
    scroll-margin-top: 80px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e9ed;
  padding: 2rem 1.75rem 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;

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

const ServiceIcon = styled.div`
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

const ServiceDescription = styled.p`
  margin: 0 0 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5a6578;
  flex-grow: 1;
`;

const ServiceFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e9ed;
`;

const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #5a6578;
  line-height: 1.5;
  
  svg {
    color: #8b0d2a;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`;

// Approach Section - Professional Process
const ApproachSection = styled.section`
  padding: 7rem 2rem;
  background-color: #ffffff;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const ApproachDescription = styled.p`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  color: #5a6578;
  line-height: 1.7;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProcessStep = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e9ed;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #8b0d2a;
    box-shadow: 0 16px 40px rgba(10, 22, 40, 0.08);
    transform: translateY(-4px);
  }
`;

const ProcessStepNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #8b0d2a;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  opacity: 0.6;
`;

const ProcessStepIcon = styled.div`
  width: 52px;
  height: 52px;
  margin: 0 auto 1.25rem;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProcessStep}:hover & {
    background: #8b0d2a;
    border-color: #8b0d2a;
    color: #ffffff;
  }
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #0a1628;
  font-family: var(--font-heading);
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const ProcessStepDescription = styled.p`
  font-size: 0.9rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`;

// Benefits Section - Strategic Value
const BenefitsSection = styled.section`
  padding: 7rem 2rem;
  background-color: #fafbfc;
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
    padding: 5rem 1.5rem;
  }
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

const BenefitIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #8b0d2a;
  display: flex;
  justify-content: center;
  align-items: center;
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

const BenefitDescription = styled.p`
  font-size: 0.925rem;
  color: #5a6578;
  line-height: 1.65;
  margin: 0;
`;

// Contact Section - World-Class Enterprise Conversion
const ContactSection = styled.section`
  padding: 7rem 2rem;
  background: #020617;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
  }
`;

const ContactOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 50% 0%, rgba(139, 13, 42, 0.08) 0%, transparent 60%),
    url(${BGgeneralservices}) center / cover no-repeat;
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

const ContactContent = styled.div`
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

const ContactTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
`;

const ContactDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2.5rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactButton = styled.a`
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

export default GeneralServicesOverview;


