import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { 
  Heart, Activity, Stethoscope,
  BriefcaseMedical, Ambulance, PhoneForwarded, HandCoins, 
  ClipboardPlus, SquareActivity, LayoutList, Headset,
  Users, Clock, Shield, TrendingUp, CheckCircle2
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
import {
  heroContent,
  heroEyebrow,
  heroOverlay,
  heroSubtitle,
  heroTitle,
  primaryButton,
  sectionTitle
} from '../../../styles/premiumPageStyles';

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
        <HeroImage src={HealthcareHero} alt="Healthcare Services" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>Healthcare Solutions</HeroTitle>
            <HeroSubtitle>
              Advanced medical support and technology services designed for reliable care delivery and stronger operations.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("healthcare-overview");
              const offset = 115; // navbar height

              if (el) {
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Explore Our Solutions
          </HeroButton>
        </HeroOverlay>
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
        <SectionTitle>Our Healthcare Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><BriefcaseMedical size={40} /></ServiceIcon>
            <ServiceTitle>Virtual Healthcare</ServiceTitle>
            <ServiceCardDescription>
              Comprehensive telehealth solutions including remote consultations, monitoring, and digital health platforms.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Remote Consultations</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Patient Monitoring</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Digital Health Platforms</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><PhoneForwarded size={40} /></ServiceIcon>
            <ServiceTitle>Administrative Support</ServiceTitle>
            <ServiceCardDescription>
              Streamlined administrative support for healthcare organizations, including billing, documentation, and compliance.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Billing Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Documentation Support</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Compliance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><HandCoins size={40} /></ServiceIcon>
            <ServiceTitle>Medical Billing</ServiceTitle>
            <ServiceCardDescription>
              Streamlined medical billing and revenue cycle management to optimize healthcare finances.
            </ServiceCardDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Claims Processing</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Revenue Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Compliance Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Healthcare Services</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={32} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Optimize patient care time and reduce administrative burden with our streamlined healthcare solutions.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={32} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and optimized healthcare processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><Shield size={32} /></BenefitIcon>
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
        <SectionTitle>Our Healthcare Process</SectionTitle>
        <ProcessDescription>
          We follow a systematic approach to deliver exceptional healthcare services that meet the highest standards of quality and patient care.
        </ProcessDescription>
        
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={ProcessImg} alt="Healthcare Process" />
          </ProcessImage>
          
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>1</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Assessment</ProcessStepTitle>
                <ProcessStepDescription>
                  We conduct a comprehensive evaluation of your healthcare needs and requirements.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>2</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Planning</ProcessStepTitle>
                <ProcessStepDescription>
                  We develop a customized healthcare solution tailored to your specific needs.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>3</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Implementation</ProcessStepTitle>
                <ProcessStepDescription>
                  We deploy our healthcare professionals and technology to execute the plan.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessStep>
              <ProcessStepNumber>4</ProcessStepNumber>
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
        <CtaOverlay>
          <CtaContent>
            <CtaTitle>Ready to Transform Your Healthcare Operations?</CtaTitle>
            <CtaDescription>
              Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality.
            </CtaDescription>
            <CtaButton href="/contact">Contact Us Today</CtaButton>
          </CtaContent>
        </CtaOverlay>
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

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 3.5rem 2rem;
  background-color: ${props => props.background || '#ffffff'};
  scroll-margin-top: 140px;
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    scroll-margin-top: 110px;
  }
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

/*const StatsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
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

const StatIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-family: var(--font-body);
`;*/

const SectionTitle = styled.h2`
  ${sectionTitle};
  margin-bottom: 2rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentColumn = styled.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.5rem;
  scroll-margin-top: 140px;

  @media (max-width: 768px) {
    font-size: 1rem;
    scroll-margin-top: 110px;
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

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

const ServiceCardDescription = styled.p`
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

const InnovationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InnovationCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const InnovationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InnovationOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9));
  color: white;
`;

const InnovationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
`;

const InnovationDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  font-family: var(--font-body);
`;

const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ProcessDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`;

const ProcessStepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

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
`;

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
`;

const ProcessStepContent = styled.div`
  flex: 1;
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`;

const ProcessStepDescription = styled.p`
  font-size: 1rem;
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
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitIcon = styled.div`
  color: #DC143C;
  margin-bottom: 1.5rem;
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

const CtaSection = styled.section`
min-height: 300px;  
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${HealthcareImg2});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`;

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
`;

const CtaContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

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
`;

const FocusAreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FocusArea = styled.div`
  display: flex;
  flex-direction: ${props => props.isSmallScreen ? 'column' : 'row'};
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FocusAreaContent = styled.div`
  padding: 2rem;
  flex: 1;
`;

const FocusAreaTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const FocusAreaDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const FocusAreaImageContainer = styled.div`
  flex: 1;
  height: 100%;
  min-height: 200px;
  max-height: 300px;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FocusAreaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SectionDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const OutsourcingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const OutsourcingImage = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const OutsourcingBenefitCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledImageSlider = styled(ImageSlider)`
  height: 350px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceImage = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const ServiceAccordions = styled.div`
  @media (max-width: 1024px) {
    order: 2;
  }
`;

const StyledAccordionWrapper = styled(AccordionWrapper)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AccordionCaption = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
`;

const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// CTA styled components are already defined above


export default HealthcareOverview;
