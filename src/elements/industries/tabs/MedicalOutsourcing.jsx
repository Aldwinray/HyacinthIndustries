import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ImageSlider from '../../../components/basic/ImageSlider';
import {AccordionWrapper, Accordion, AccordionContent} from '../../../components/Nav/AccordionWrapper';
import FlipCard from '../../../components/basic/FlipCard';
import LongTile from '../../../components/basic/LongTile';

// Icons
import { 
  BriefcaseMedical, 
  Ambulance, 
  PhoneForwarded, 
  HandCoins, 
  ClipboardPlus, 
  SquareActivity, 
  LayoutList, 
  Headset,
  Users,
  Clock,
  Shield,
  TrendingUp
} from "lucide-react"

// Images
import Stock1 from "../../../assets/img/Healthcare/stock1.webp";
import Stock2 from "../../../assets/img/Healthcare/stock2.webp";
import Stock3 from "../../../assets/img/Healthcare/stock3.webp";
import CostImg from "../../../assets/img/Healthcare/icons/cost-savings.webp";
import ConferenceImg from "../../../assets/img/Healthcare/icons/conference.webp";
import ExpertiseImg from "../../../assets/img/Healthcare/icons/expertise.webp";
import SecuredImg from "../../../assets/img/Healthcare/icons/secured.webp";

const MedicalOutsourcing = () => {
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
      <IntroSection>
        <IntroContent>
          <SectionTitle>Medical Outsourcing Services</SectionTitle>
          <IntroDescription>
            Streamline your healthcare processes with our professional medical outsourcing solutions. 
            From invoicing to assessments, we manage the specifics so you can concentrate on what's most important—caring for your patients.
          </IntroDescription>
          
          <BenefitsGrid>
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
          </BenefitsGrid>
        </IntroContent>
        
        <IntroImageContainer>
          <StyledImageSlider 
            images={[Stock3]} 
            autoPlayInterval={3500} 
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </IntroImageContainer>
      </IntroSection>

      <ServicesSection>
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
            <img src={Stock1} alt="Healthcare Services" loading="lazy" />
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
                    caption={"Expert medical advice from healthcare providers at remote locations."} 
                  />
                  <FlipCard 
                    icon={<SquareActivity size={64}/>} 
                    title={"Remote Monitoring"} 
                    caption={"Continuous patient monitoring outside clinical settings for improved care."} 
                  />
                  <FlipCard 
                    icon={<LayoutList size={64}/>} 
                    title={"Administrative Tasks"}
                    caption={"Efficient management of data entry, scheduling, and documentation."} 
                  />
                  <FlipCard 
                    icon={<Headset size={64}/>} 
                    title={"Customer Support"} 
                    caption={"Comprehensive management of patient inquiries and support needs."} 
                  />
                </CardHolder>
              </AccordionContent>
              
              <Accordion icon={<Ambulance />}>Emergency Assistance</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  Our emergency assistance services provide rapid response and coordination for urgent medical situations. 
                  We ensure prompt treatment and minimize patient injury or illness through efficient triage and resource allocation.
                </AccordionCaption>
              </AccordionContent>
              
              <Accordion icon={<PhoneForwarded />}>Call Routing & Management</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  Optimize your communication workflow with our advanced call routing services. We ensure efficient distribution 
                  of incoming calls to the appropriate healthcare professionals, reducing wait times and improving patient satisfaction.
                </AccordionCaption>
              </AccordionContent>
              
              <Accordion icon={<HandCoins />}>Healthcare Marketing</Accordion>
              <AccordionContent>
                <AccordionCaption>
                  Enhance your healthcare organization's visibility and patient acquisition with our specialized marketing services. 
                  We develop targeted strategies to promote your services, build your brand, and increase patient engagement.
                </AccordionCaption>
              </AccordionContent>
            </StyledAccordionWrapper>
          </ServiceAccordions>
        </ServicesContainer>
      </ServicesSection>

      <AdvantagesSection>
        <SectionTitle>Why Choose Our Medical Outsourcing</SectionTitle>
        <AdvantageDescription>
          Partner with us to transform your healthcare operations. Our medical outsourcing solutions deliver measurable 
          benefits that help you focus on providing exceptional patient care while optimizing your resources.
        </AdvantageDescription>
        
        <AdvantagesContainer>
          <LongTile 
            title={"Cost Efficiency"} 
            caption={"Reduce operational expenses by up to 40% while maintaining high-quality healthcare support. Our outsourcing solutions eliminate overhead costs associated with in-house staffing."} 
            image={CostImg} 
            order={"left"} 
          /> 
          <LongTile 
            title={"Medical Expertise"} 
            caption={"Access a global network of highly qualified healthcare professionals with specialized skills and internationally recognized qualifications, ensuring top-tier service delivery."} 
            image={ExpertiseImg} 
            order={"right"} 
          />
          <LongTile 
            title={"Enhanced Patient Experience"} 
            caption={"Improve patient satisfaction through responsive, empathetic communication and personalized care coordination. Our professionals excel at addressing patient concerns and needs."} 
            image={ConferenceImg} 
            order={"left"} 
          /> 
          <LongTile 
            title={"Data Security & Compliance"} 
            caption={"Maintain the highest standards of patient data protection with our HIPAA-compliant systems and protocols, ensuring confidentiality and preventing unauthorized access."} 
            image={SecuredImg} 
            order={"right"} 
          />  
        </AdvantagesContainer>
      </AdvantagesSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Transform Your Healthcare Operations?</CTATitle>
          <CTADescription>
            Contact us today to discover how our medical outsourcing services can help your organization 
            improve efficiency, reduce costs, and enhance patient care quality.
          </CTADescription>
          <CTAButton>Request a Consultation</CTAButton>
        </CTAContent>
      </CTASection>
    </Wrapper>
  );
}

// Data
const benefits = [
  {
    icon: <TrendingUp size={24} color="#FF0033" />,
    title: "Increased Efficiency",
    description: "Optimize healthcare workflows and resource allocation"
  },
  {
    icon: <Clock size={24} color="#FF0033" />,
    title: "Time Savings",
    description: "Focus more time on patient care rather than administration"
  },
  {
    icon: <Users size={24} color="#FF0033" />,
    title: "Specialized Expertise",
    description: "Access to skilled healthcare professionals"
  },
  {
    icon: <Shield size={24} color="#FF0033" />,
    title: "Reduced Risk",
    description: "Minimize compliance and operational risks"
  }
];

export default MedicalOutsourcing;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  font-family: "Lexend Light", sans-serif;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
`;

const IntroContent = styled.div`
  flex: 1;
  max-width: 650px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const IntroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const StyledImageSlider = styled(ImageSlider)`
  height: 400px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #FF0033, #990000);
    margin: 0.75rem 0 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    
    &::after {
      margin: 0.75rem auto 0;
    }
  }
`;

const IntroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  display: inline-block;
  background-color: #f8f9fa;
  padding: 0.75rem;
  border-radius: 50%;
`;

const BenefitTitle = styled.h3`
  font-family: "Lexend Medium", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const BenefitDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
`;

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceAccordions = styled.div`
  width: 100%;
`;

const StyledAccordionWrapper = styled(AccordionWrapper)`
  margin: 0;
  max-width: 100%;
`;

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1.5rem 0;
`;

const AccordionCaption = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;

const AdvantagesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const AdvantageDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const AdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Stock2});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  background-color: #FF0033;
  color: white;
  font-family: "Lexend Medium", sans-serif;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #cc0029;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 2rem;
  }
`;