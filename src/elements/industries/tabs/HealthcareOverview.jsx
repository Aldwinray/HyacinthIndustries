import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  Heart, Activity, Stethoscope,
  BriefcaseMedical, Ambulance, PhoneForwarded, HandCoins, 
  ClipboardPlus, SquareActivity, LayoutList, Headset,
  Users, Clock, Shield, TrendingUp, CheckCircle2, ArrowRight
} from "lucide-react";

// Import components
import FlipCard from '../../../components/basic/FlipCard';
import {AccordionWrapper, Accordion, AccordionContent} from '../../../components/Nav/AccordionWrapper';
import ImageSlider from '../../../components/basic/ImageSlider';

// Images
import HealthcareHero from '../../../assets/img/industries/healthcare.webp';
import HealthcareImg1 from '../../../assets/img/Healthcare/stock1.webp';
import HealthcareImg2 from '../../../assets/img/Healthcare/stock2.webp';
import HealthcareImg3 from '../../../assets/img/Healthcare/stock3.webp';
import HealthcareAbstract from '../../../assets/img/Healthcare/abstract.webp';
import HealthcareSecurity from '../../../assets/img/Healthcare/security.webp';
import ProcessImg from '../../../assets/img/HomeBusinessTransformationActions/process.webp';
import BGhealtcare from "../../../assets/img/bgservices/Healthcare.webp";

const RPM = HealthcareAbstract;


const HealthcareOverview = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOverviewScroll = (event) => {
    event.preventDefault();

    const targetSection = document.getElementById('healthcare-overview');

    if (!targetSection) {
      return;
    }

    const headerOffset = window.innerWidth <= 768 ? 110 : 140;
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, '', '#healthcare-overview');
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroBg src={HealthcareHero} aria-hidden />
        <HeroOverlay />
        <HeroVignette />
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>
              <EyebrowDot /> Industry Solutions
            </HeroEyebrow>
            <HeroTitle>Healthcare <GradientText>Solutions</GradientText></HeroTitle>
            <HeroSubtitle>
              Advanced medical support and technology services designed for reliable care delivery and stronger operations.
            </HeroSubtitle>
            <HeroNote>
              End-to-end support for virtual care, administration, billing, and compliance operations.
            </HeroNote>
            <HeroActions>
              <HeroPrimaryButton
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("healthcare-overview");
                  const offset = 115;
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroMeta>
                <MetaTop>3 Core Services</MetaTop>
                <MetaBottom>Enterprise-grade support</MetaBottom>
              </HeroMeta>
            </HeroActions>
          </HeroContent>
        </HeroInner>
      </HeroSection>
      
      {/* Overview Section */}
      <Section id="healthcare-overview" background="#ffffff" >
        <SectionTitle >Healthcare Industry Overview</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <Paragraph id="healthcare-industry-overview">
              The healthcare industry is undergoing a profound transformation driven by technological advancements, 
              changing patient expectations, and the need for more efficient care delivery models. As healthcare 
              providers face increasing pressure to deliver high-quality care while managing costs, innovative 
              solutions are becoming essential.
            </Paragraph>
            <Paragraph>
              Our comprehensive healthcare solutions are designed to address these challenges by leveraging 
              cutting-edge technology, streamlined processes, and specialized expertise to help healthcare 
              organizations thrive in this evolving landscape.
            </Paragraph>
          </ContentColumn>
          <ImageColumn>
            <StyledImage src={HealthcareImg2} alt="Healthcare Technology" />
          </ImageColumn>
        </ContentGrid>
      </Section>

      {/* Services Section */}
      <ServicesSection>
        <SectionDivider />
        <SectionTitle>Our Healthcare Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceNumber>01</ServiceNumber>
            <ServiceIcon><BriefcaseMedical size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Virtual Healthcare</ServiceTitle>
            <ServiceCardDescription>
              Comprehensive telehealth solutions including remote consultations, monitoring, and digital health platforms.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Remote Consultations</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Patient Monitoring</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Digital Health Platforms</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>02</ServiceNumber>
            <ServiceIcon><PhoneForwarded size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Administrative Support</ServiceTitle>
            <ServiceCardDescription>
              Streamlined administrative support for healthcare organizations, including billing, documentation, and compliance.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Billing Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Documentation Support</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Compliance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>03</ServiceNumber>
            <ServiceIcon><HandCoins size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Medical Billing</ServiceTitle>
            <ServiceCardDescription>
              Streamlined medical billing and revenue cycle management to optimize healthcare finances.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Claims Processing</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Revenue Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Compliance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Healthcare Services</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Optimize patient care time and reduce administrative burden with our streamlined healthcare solutions.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and optimized healthcare processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><Shield size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Quality Assurance</BenefitTitle>
            <BenefitDescription>
              Maintain the highest standards of patient care with our quality-focused healthcare solutions.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>
      
      {/* Healthcare Innovations Section */}
      <Section background="#ffffff">
        <SectionTitle>Healthcare Innovations</SectionTitle>
        <InnovationsGrid>
  
          
          <InnovationCard>
            <InnovationImage src={RPM} alt="Remote Patient Monitoring" />
            <InnovationOverlay>
              <InnovationTitle>Remote Monitoring</InnovationTitle>
              <InnovationDescription>
                Advanced systems for continuous tracking of patient health metrics from a distance, enabling proactive interventions.
              </InnovationDescription>
            </InnovationOverlay>
          </InnovationCard>
          
          <InnovationCard>
            <InnovationImage src={HealthcareSecurity} alt="Healthcare Security" />
            <InnovationOverlay>
              <InnovationTitle>Secure Health Data</InnovationTitle>
              <InnovationDescription>
                State-of-the-art security protocols to protect sensitive patient information and ensure regulatory compliance.
              </InnovationDescription>
            </InnovationOverlay>
          </InnovationCard>
        </InnovationsGrid>
      </Section>

      {/* Process Section */}
      <ProcessSection>
        <SectionDivider />
        <SectionTitle>Our Healthcare Process</SectionTitle>
        <ProcessDescription>
          We follow a systematic approach to deliver exceptional healthcare services that meet the highest standards of quality and patient care.
        </ProcessDescription>
        
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={ProcessImg} alt="Healthcare Process" loading="lazy" />
          </ProcessImage>
          
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>01</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Assessment</ProcessStepTitle>
                <ProcessStepDescription>
                  We conduct a comprehensive evaluation of your healthcare needs and requirements.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>02</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Planning</ProcessStepTitle>
                <ProcessStepDescription>
                  We develop a customized healthcare solution tailored to your specific needs.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>03</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Implementation</ProcessStepTitle>
                <ProcessStepDescription>
                  We deploy our healthcare professionals and technology to execute the plan.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>04</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Monitoring</ProcessStepTitle>
                <ProcessStepDescription>
                  We continuously monitor performance and make adjustments to ensure optimal outcomes.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
          </ProcessSteps>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* Services Section */}
      

      {/* Call to Action Section */}
      <CtaSection>
        <CtaOverlay />
        <CtaContent>
          <CtaTitle>Ready to Transform Your Healthcare Operations?</CtaTitle>
          <CtaDescription>
            Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality.
          </CtaDescription>
          <CtaButton href="/contact/">
            Contact Us Today
            <ArrowRight size={18} />
          </CtaButton>
          <TrustIndicators>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>HIPAA Compliant</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Revenue Cycle Experts</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Telehealth Solutions</span>
            </TrustItem>
          </TrustIndicators>
        </CtaContent>
      </CtaSection>
    </Wrapper>
  );
};

// Data for the page
const healthcareTrends = [
  {
    icon: <Heart size={32} color="#DC143C" />,
    title: "Patient-Centered Care",
    description: "Shifting focus to personalized care experiences that prioritize individual patient needs and preferences."
  },

  {
    icon: <Activity size={32} color="#DC143C" />,
    title: "Remote Monitoring",
    description: "Continuous tracking of patient health metrics from a distance, enabling proactive interventions."
  },
  
  {
    icon: <Stethoscope size={32} color="#DC143C" />,
    title: "Telehealth Expansion",
    description: "Growing adoption of virtual care delivery models, improving healthcare access and convenience."
  },
 
];

const focusAreas = [
  {
    title: "Clinical Excellence",
    description: "We prioritize clinical excellence through evidence-based practices, continuous quality improvement, and patient-centered care approaches that enhance health outcomes.",
    image: HealthcareImg1
  },
  {
    title: "Operational Efficiency",
    description: "Our solutions streamline healthcare operations, optimize resource allocation, and reduce administrative burden, allowing providers to focus more on patient care.",
    image: HealthcareImg2
  },
  {
    title: "Technology Integration",
    description: "We leverage cutting-edge healthcare technologies, from AI-powered diagnostics to remote monitoring systems, enhancing care delivery and patient engagement.",
    image: HealthcareImg3
  },
  {
    title: "Regulatory Compliance",
    description: "Our expertise ensures healthcare organizations maintain compliance with evolving regulations while implementing best practices in data security and privacy.",
    image: HealthcareImg1
  }
];

const benefits = [
  {
    icon: <Clock size={32} color="#DC143C" />,
    title: "Time Efficiency",
    description: "Reduce administrative burden and free up valuable time for patient care."
  },
  {
    icon: <Shield size={32} color="#DC143C" />,
    title: "Compliance Assurance",
    description: "Stay compliant with healthcare regulations and data protection standards."
  },
  {
    icon: <TrendingUp size={32} color="#DC143C" />,
    title: "Cost Optimization",
    description: "Reduce operational costs while improving service quality and outcomes."
  },
  {
    icon: <Users size={32} color="#DC143C" />,
    title: "Expertise Access",
    description: "Gain access to specialized healthcare professionals and knowledge."
  }
];

// Styled Components - World-Class Enterprise Design System
const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 7rem 2rem;
  background-color: ${props => props.background || '#fafbfc'};
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
  }
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
    radial-gradient(ellipse at 100% 0%, rgba(158, 28, 36, 0.12) 0%, transparent 50%),
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
      radial-gradient(ellipse at 100% 0%, rgba(158, 28, 36, 0.1) 0%, transparent 40%),
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem 0.4rem 0.5rem;
  background: rgba(201, 162, 39, 0.1);
  border: 1px solid rgba(201, 162, 39, 0.2);
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  font-weight: 600;
  color: #C9A227;
  text-transform: uppercase;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C9A227;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #C9A227 0%, #e8d58a 50%, #C9A227 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
    line-height: 1.1;

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
  border-left: 2px solid rgba(158, 28, 36, 0.5);

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

const HeroPrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 52px;
  padding: 0 1.75rem;
  background: #9E1C24;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);
  flex-shrink: 0;

  &:hover {
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    height: 48px;
    font-size: 0.875rem;
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
  background: linear-gradient(90deg, transparent, rgba(158, 28, 36, 0.2), transparent);

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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentColumn = styled.div``;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.72;
  color: #6b7280;
  margin-bottom: 1rem;
  scroll-margin-top: 120px;

  @media (max-width: 768px) {
    font-size: 1rem;
    scroll-margin-top: 110px;
  }
`;

// Services Section - World-Class Enterprise Modules
const ServicesSection = styled.section`
  padding: 7rem 2rem;
  background: #fafbfc;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
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
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #9E1C24;
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
  color: #9E1C24;
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
  color: #9E1C24;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ServiceCard}:hover & {
    background: #9E1C24;
    border-color: #9E1C24;
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

const ServiceCardDescription = styled.p`
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
    color: #9E1C24;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`;

const InnovationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InnovationCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
`;

const InnovationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InnovationOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.74) 100%);
  color: #ffffff;
`;

const InnovationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
  font-family: var(--font-heading);
`;

const InnovationDescription = styled.p`
  font-size: 0.92rem;
  line-height: 1.6;
  font-family: var(--font-body);
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
    border-color: #9E1C24;
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(10, 22, 40, 0.06);
  }
`;

const ProcessStepNumber = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  color: #9E1C24;
  font-family: var(--font-heading);
  letter-spacing: 0.1em;
  padding: 0.25rem 0.5rem;
  background: rgba(158, 28, 36, 0.1);
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
    background: linear-gradient(90deg, transparent, rgba(158, 28, 36, 0.15), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
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
    background: #9E1C24;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: #9E1C24;
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
  color: #9E1C24;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${BenefitCard}:hover & {
    background: #9E1C24;
    border-color: #9E1C24;
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
    radial-gradient(ellipse at 50% 0%, rgba(158, 28, 36, 0.08) 0%, transparent 60%),
    url(${BGhealtcare}) center / cover no-repeat;
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
  border: 1px solid rgba(201, 162, 39, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-shadow: 
    0 0 60px rgba(158, 28, 36, 0.15),
    0 0 100px rgba(201, 162, 39, 0.08);

  /* Gold corner accents */
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 40px;
    height: 40px;
    border-top: 2px solid #C9A227;
    border-left: 2px solid #C9A227;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 40px;
    height: 40px;
    border-bottom: 2px solid #C9A227;
    border-right: 2px solid #C9A227;
  }

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
  height: 56px;
  padding: 0 2.5rem;
  background: #9E1C24;
  color: #ffffff;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);
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
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);

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

const TrustIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  
  svg {
    color: #C9A227;
  }
`;

export default HealthcareOverview;


