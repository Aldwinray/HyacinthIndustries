import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import icons from lucide-react
import { 
  Heart, Brain, Activity, Microscope, Stethoscope, Pill,
  BriefcaseMedical, Ambulance, PhoneForwarded, HandCoins, 
  ClipboardPlus, SquareActivity, LayoutList, Headset,
  Users, Clock, Shield, TrendingUp
} from "lucide-react";

// Import components
import FlipCard from '../../components/basic/FlipCard';
import LongTile from '../../components/basic/LongTile';
import {AccordionWrapper, Accordion, AccordionContent} from '../../components/Nav/AccordionWrapper';
import ImageSlider from '../../components/basic/ImageSlider';

// Images
import HealthcareImg1 from '../../assets/img/Healthcare/stock1.webp';
import HealthcareImg2 from '../../assets/img/Healthcare/stock2.webp';
import HealthcareImg3 from '../../assets/img/Healthcare/stock3.webp';
import CostImg from "../../assets/img/Healthcare/icons/cost-savings.webp";
import ConferenceImg from "../../assets/img/Healthcare/icons/conference.webp";
import ExpertiseImg from "../../assets/img/Healthcare/icons/expertise.webp";
import SecuredImg from "../../assets/img/Healthcare/icons/secured.webp";

const HealthcareContentWrapperImproved = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Healthcare Solutions</HeroTitle>
          <HeroSubtitle>Advanced Medical Services & Technology</HeroSubtitle>
          <HeroDescription>
            Transforming healthcare delivery through innovative solutions and professional medical outsourcing services. 
            We help healthcare providers focus on what matters most - patient care.
          </HeroDescription>
          <HeroButton>Explore Our Solutions</HeroButton>
        </HeroContent>
      </HeroSection>
      
      {/* Overview Section */}
      <Section background="#ffffff">
        <SectionTitle>Healthcare Industry Overview</SectionTitle>
        <ContentGrid>
          <ContentColumn>
            <Paragraph>
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

      {/* Healthcare Trends Section */}
      <Section background="#f0f7ff">
        <SectionTitle>Key Healthcare Trends</SectionTitle>
        <TrendsGrid>
          {healthcareTrends.map((trend, index) => (
            <TrendCard 
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TrendIconContainer>
                {trend.icon}
              </TrendIconContainer>
              <TrendTitle>{trend.title}</TrendTitle>
              <TrendDescription>{trend.description}</TrendDescription>
            </TrendCard>
          ))}
        </TrendsGrid>
      </Section>

      {/* Focus Areas Section */}
      <Section background="#ffffff">
        <SectionTitle>Our Healthcare Focus Areas</SectionTitle>
        <FocusAreasContainer>
          {focusAreas.map((area, index) => (
            <FocusArea 
              key={index}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              isSmallScreen={isSmallScreen}
            >
              <FocusAreaContent>
                <FocusAreaTitle>{area.title}</FocusAreaTitle>
                <FocusAreaDescription>{area.description}</FocusAreaDescription>
              </FocusAreaContent>
              <FocusAreaImageContainer>
                <FocusAreaImage src={area.image} alt={area.title} />
              </FocusAreaImageContainer>
            </FocusArea>
          ))}
        </FocusAreasContainer>
      </Section>

      {/* Medical Outsourcing Section */}
      <Section background="#f8f9fa">
        <SectionTitle>Medical Outsourcing Services</SectionTitle>
        <ServiceDescription>
          Streamline your healthcare processes with our professional medical outsourcing solutions. 
          From invoicing to assessments, we manage the specifics so you can concentrate on what's most important—caring for your patients.
        </ServiceDescription>
        
        <OutsourcingGrid>
          <OutsourcingImage>
            <StyledImageSlider 
              images={[HealthcareImg3]} 
              autoPlayInterval={3500} 
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </OutsourcingImage>
          
          <BenefitsContainer>
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsContainer>
        </OutsourcingGrid>
      </Section>

      {/* Services Section */}
      <Section background="#ffffff">
        <SectionTitle>Our Healthcare Services</SectionTitle>
        <ServiceDescription>
          Our comprehensive medical outsourcing services are designed to optimize your healthcare operations, 
          reduce costs, and improve patient care quality. We offer specialized solutions tailored to your specific needs.
        </ServiceDescription>
        
        <ServicesContainer>
          <ServiceImage 
            as={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={HealthcareImg1} alt="Healthcare Services" loading="lazy" />
          </ServiceImage>
          
          <ServiceAccordions>
            <StyledAccordionWrapper>
              <Accordion icon={<BriefcaseMedical />}>Virtual Nursing</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  An innovative approach to healthcare delivery, virtual nursing utilizes technology to provide nursing care at remote locations. 
                  This strategy improves patient outcomes and healthcare delivery efficiency while reducing access barriers, 
                  particularly in communities with limited resources.
                </AccordionCaption>
                <CardHolder>
                  <FlipCard 
                    icon={<ClipboardPlus size={64}/>} 
                    title={"Teleconsultation"} 
                    description={"Remote patient consultations via video conferencing technology."}
                  />
                  <FlipCard 
                    icon={<SquareActivity size={64}/>} 
                    title={"Remote Monitoring"} 
                    description={"Continuous tracking of patient vitals and health metrics from a distance."}
                  />
                </CardHolder>
              </AccordionContent>
              
              <Accordion icon={<Ambulance />}>Emergency Response</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  Our emergency response services ensure rapid and effective care during critical situations. 
                  We provide comprehensive emergency management solutions that help healthcare facilities 
                  respond quickly and efficiently to urgent medical needs.
                </AccordionCaption>
                <CardHolder>
                  <FlipCard 
                    icon={<PhoneForwarded size={64}/>} 
                    title={"Crisis Hotline"} 
                    description={"24/7 emergency call center staffed by medical professionals."}
                  />
                  <FlipCard 
                    icon={<LayoutList size={64}/>} 
                    title={"Triage Services"} 
                    description={"Efficient patient assessment and prioritization during emergencies."}
                  />
                </CardHolder>
              </AccordionContent>
              
              <Accordion icon={<HandCoins />}>Medical Billing</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  Our medical billing services streamline the financial aspects of healthcare delivery. 
                  We handle the complex billing processes, insurance claims, and payment collection, 
                  allowing healthcare providers to focus on patient care while maximizing revenue.
                </AccordionCaption>
                <CardHolder>
                  <FlipCard 
                    icon={<Headset size={64}/>} 
                    title={"Claims Processing"} 
                    description={"Efficient handling of insurance claims and reimbursement processes."}
                  />
                  <FlipCard 
                    icon={<Users size={64}/>} 
                    title={"Patient Billing"} 
                    description={"Transparent and patient-friendly billing services and support."}
                  />
                </CardHolder>
              </AccordionContent>
            </StyledAccordionWrapper>
          </ServiceAccordions>
        </ServicesContainer>
      </Section>

      {/* Call to Action Section */}
      <CtaSection>
        <CtaContent>
          <CtaTitle>Ready to Transform Your Healthcare Operations?</CtaTitle>
          <CtaDescription>
            Partner with us to optimize your healthcare processes, reduce costs, and improve patient care quality.
          </CtaDescription>
          <CtaButton>Contact Us Today</CtaButton>
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
    icon: <Brain size={32} color="#DC143C" />,
    title: "AI in Diagnostics",
    description: "Artificial intelligence enhancing diagnostic accuracy and enabling early detection of health conditions."
  },
  {
    icon: <Activity size={32} color="#DC143C" />,
    title: "Remote Monitoring",
    description: "Continuous tracking of patient health metrics from a distance, enabling proactive interventions."
  },
  {
    icon: <Microscope size={32} color="#DC143C" />,
    title: "Precision Medicine",
    description: "Tailoring treatments to individual genetic profiles for more effective therapeutic outcomes."
  },
  {
    icon: <Stethoscope size={32} color="#DC143C" />,
    title: "Telehealth Expansion",
    description: "Growing adoption of virtual care delivery models, improving healthcare access and convenience."
  },
  {
    icon: <Pill size={32} color="#DC143C" />,
    title: "Digital Therapeutics",
    description: "Software-based interventions delivering evidence-based therapeutic interventions to patients."
  }
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
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  background-color: #DC143C;
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #B01030;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #DC143C;
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled(SectionTitle)`
  margin-bottom: 0.5rem;
  
  &::after {
    display: none;
  }
`;

const Subtitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: 500;
  color: #666;
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 1.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TrendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TrendCard = styled.div`
  background-color: white;
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TrendIconContainer = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #f8f9fa;
  border-radius: 50%;
`;

const TrendTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #1a1a1a;
`;

const TrendDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
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
  font-size: 1.5rem;
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
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const FocusAreaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1.1rem;
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

const BenefitCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled.div`
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h4`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #1a1a1a;
`;

const BenefitDescription = styled.p`
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
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

const CtaSection = styled.section`
  background: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);
  padding: 4rem 2rem;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CtaButton = styled.button`
  background-color: white;
  color: #DC143C;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
  }
`;

export default HealthcareContentWrapperImproved;
