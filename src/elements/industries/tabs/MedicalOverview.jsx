import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Icons
import { Heart, Brain, Activity, Microscope, Stethoscope, Pill } from 'lucide-react'

// Images
import HealthcareImg1 from '../../../assets/img/Healthcare/stock1.webp'
import HealthcareImg2 from '../../../assets/img/Healthcare/stock2.webp'
import HealthcareImg3 from '../../../assets/img/Healthcare/stock3.webp'

const MedicalOverview = () => {
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
      <Section>
        <Title>Healthcare Industry Overview</Title>
        <Subtitle>Transforming Healthcare Through Innovation</Subtitle>
        
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

      <Section background="#f8f9fa">
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

      <Section>
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

      <Section background="#1a1a1a">
        <StatisticsContainer>
          <StatisticsTitle>Healthcare Industry Statistics</StatisticsTitle>
          <StatisticsGrid>
            {statistics.map((stat, index) => (
              <StatCard 
                key={index}
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatisticsGrid>
        </StatisticsContainer>
      </Section>
    </Wrapper>
  )
}

// Data
const healthcareTrends = [
  {
    icon: <Heart size={32} color="#FF0033" />,
    title: "Patient-Centered Care",
    description: "Shifting focus to personalized healthcare experiences that prioritize patient needs and preferences."
  },
  {
    icon: <Brain size={32} color="#FF0033" />,
    title: "AI in Healthcare",
    description: "Artificial intelligence is revolutionizing diagnostics, treatment planning, and administrative processes."
  },
  {
    icon: <Activity size={32} color="#FF0033" />,
    title: "Remote Patient Monitoring",
    description: "Technology enabling continuous tracking of patient health metrics outside traditional clinical settings."
  },
  {
    icon: <Microscope size={32} color="#FF0033" />,
    title: "Precision Medicine",
    description: "Tailoring medical treatments to individual patient characteristics for optimal outcomes."
  },
  {
    icon: <Stethoscope size={32} color="#FF0033" />,
    title: "Telehealth Expansion",
    description: "Virtual care delivery expanding access to healthcare services regardless of location."
  },
  {
    icon: <Pill size={32} color="#FF0033" />,
    title: "Value-Based Care",
    description: "Payment models that reward healthcare providers for quality of care rather than quantity of services."
  }
];

const focusAreas = [
  {
    title: "Digital Health Solutions",
    description: "Implementing innovative digital technologies to improve healthcare delivery, patient engagement, and clinical outcomes.",
    image: HealthcareImg1
  },
  {
    title: "Healthcare Process Optimization",
    description: "Streamlining administrative and clinical workflows to enhance efficiency, reduce costs, and improve care quality.",
    image: HealthcareImg2
  },
  {
    title: "Medical Data Management",
    description: "Secure, compliant solutions for managing and analyzing healthcare data to support clinical decision-making and research.",
    image: HealthcareImg3
  }
];

const statistics = [
  { value: "$8.3T", label: "Global Healthcare Market Size by 2024" },
  { value: "64%", label: "of Patients Using Telehealth Services" },
  { value: "$280B", label: "Digital Health Market Value" },
  { value: "42%", label: "Reduction in Costs Through Outsourcing" }
];

export default MedicalOverview;

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  font-family: "Lexend Light", sans-serif;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.background || 'white'};
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-family: "Lexend Medium", sans-serif;
  font-weight: 500;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  color: ${props => props.color || '#1a1a1a'};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FF0033, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TrendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TrendCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const TrendIconContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #f8f9fa;
  border-radius: 50%;
`;

const TrendTitle = styled.h3`
  font-family: "Lexend Medium", sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const TrendDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const FocusAreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const FocusArea = styled.div`
  display: flex;
  flex-direction: ${props => props.isSmallScreen ? 'column' : 'row'};
  gap: 2rem;
  align-items: center;
  
  &:nth-child(even) {
    flex-direction: ${props => props.isSmallScreen ? 'column' : 'row-reverse'};
  }
`;

const FocusAreaContent = styled.div`
  flex: 1;
`;

const FocusAreaTitle = styled.h3`
  font-family: "Lexend Medium", sans-serif;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const FocusAreaDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const FocusAreaImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FocusAreaImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StatisticsContainer = styled.div`
  padding: 2rem 0;
  color: white;
`;

const StatisticsTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: white;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FF0033, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const StatValue = styled.div`
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #FF0033;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-family: "Lexend Light", sans-serif;
  font-size: 1rem;
  color: #f8f9fa;
`;