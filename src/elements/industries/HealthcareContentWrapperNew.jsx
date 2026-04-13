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
const HealthcareContentWrapperNew = () => {
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
