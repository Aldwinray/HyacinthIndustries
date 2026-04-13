import React from 'react';
import styled from 'styled-components';
import { Truck, Package, Clock, TrendingUp, BarChart, CheckCircle2 } from 'lucide-react';
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
import logisticsHero from '../../../assets/img/industries/logistics.webp';

const LogisticsOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage src={logisticsHero} alt="Logistics Services" />
        <HeroOverlay>
          <HeroContent>
            <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
            <HeroTitle>Logistics Services</HeroTitle>
            <HeroSubtitle>
              Efficient supply chain support that improves visibility, coordination, and operational throughput.
            </HeroSubtitle>
          </HeroContent>
          <HeroButton href="#logistics-services">Get Started</HeroButton>
        </HeroOverlay>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id="logistics-services">
        <SectionTitle>Our Logistics Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon><Truck size={40} /></ServiceIcon>
            <ServiceTitle>Transportation Management</ServiceTitle>
            <ServiceDescription>
              Comprehensive transportation solutions including route optimization, carrier selection, and freight management.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Fleet Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Route Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Carrier Selection</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><Package size={40} /></ServiceIcon>
            <ServiceTitle>Warehousing & Distribution</ServiceTitle>
            <ServiceDescription>
              Strategic warehousing services with inventory management and distribution network optimization.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Inventory Control</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Order Fulfillment</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Cross-Docking</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon><BarChart size={40} /></ServiceIcon>
            <ServiceTitle>Supply Chain Analytics</ServiceTitle>
            <ServiceDescription>
              Data-driven insights to optimize your supply chain operations and identify improvement opportunities.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={16} /> Performance Metrics</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Predictive Analytics</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={16} /> Cost Optimization</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Logistics Services</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={32} /></BenefitIcon>
            <BenefitTitle>Time Efficiency</BenefitTitle>
            <BenefitDescription>
              Optimize delivery times and reduce delays with our advanced logistics solutions.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendingUp size={32} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through route optimization and efficient resource allocation.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><BarChart size={32} /></BenefitIcon>
            <BenefitTitle>Data-Driven Decisions</BenefitTitle>
            <BenefitDescription>
              Make informed decisions based on comprehensive analytics and performance metrics.
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

const StatsSection = styled.section`
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

const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f0f0f0;
  
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

export default LogisticsOverview;
