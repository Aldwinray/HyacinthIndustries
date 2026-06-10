import styled from 'styled-components';
import { 
  Computer, MapPinned, TrendingUp, PackageCheck, Phone, Headset, User, Database, Coins, 
  CheckCircle2, ArrowRight, Clock, TrendingUp as TrendUp, Shield
} from 'lucide-react';

// Images
import bgImage from '../../../assets/img/industries/logistics.webp';

const LogisticsOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection aria-labelledby="logistics-hero-title">
        <HeroBg src={bgImage} aria-hidden />
        <HeroOverlay />
        <HeroVignette />
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>
              <EyebrowDot aria-hidden="true" /> Industry Solutions
            </HeroEyebrow>
            <HeroTitle id="logistics-hero-title">Logistics <GradientText>Support</GradientText></HeroTitle>
            <HeroSubtitle>
              Professional logistics support services designed to streamline your supply chain operations and enhance operational efficiency.
            </HeroSubtitle>
            <HeroNote>
              End-to-end support for data management, tracking, carrier sales, and 24/7 operations.
            </HeroNote>
            <HeroActions>
              <HeroPrimaryButton href="#logistics-services">
                Get Started
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroMeta>
                <MetaTop>9 Core Services</MetaTop>
                <MetaBottom>Enterprise-grade support</MetaBottom>
              </HeroMeta>
            </HeroActions>
          </HeroContent>
        </HeroInner>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection id="logistics-services">
        <SectionDivider />
        <SectionTitle>Our Logistics Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceNumber>01</ServiceNumber>
            <ServiceIcon><Computer size={24} strokeWidth={1.5} aria-label="Data entry and shipment processing services" /></ServiceIcon>
            <ServiceTitle>Data Entry</ServiceTitle>
            <ServiceDescription>
              Meticulous accuracy and efficiency at every step of your logistics data management.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Shipment Data Entry</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Order Processing</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Documentation Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>02</ServiceNumber>
            <ServiceIcon><MapPinned size={24} strokeWidth={1.5} aria-label="Real-time shipment tracking and trace services" /></ServiceIcon>
            <ServiceTitle>Track and Trace</ServiceTitle>
            <ServiceDescription>
              Real-time visibility for all your shipments with comprehensive monitoring and updates.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Real-time Tracking</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Status Updates</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Exception Alerts</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>03</ServiceNumber>
            <ServiceIcon><TrendingUp size={24} strokeWidth={1.5} aria-label="Carrier sales and revenue growth services" /></ServiceIcon>
            <ServiceTitle>Carrier Sales</ServiceTitle>
            <ServiceDescription>
              Effective sales strategies to increase your carrier&apos;s revenue and expand market reach.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Lead Generation</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Client Acquisition</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Rate Negotiation</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>04</ServiceNumber>
            <ServiceIcon><PackageCheck size={24} strokeWidth={1.5} aria-label="Load planning and route optimization services" /></ServiceIcon>
            <ServiceTitle>Load Planning</ServiceTitle>
            <ServiceDescription>
              Planning and optimization of loads for efficient transportation and cost reduction.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Route Optimization</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Capacity Planning</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Load Consolidation</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>05</ServiceNumber>
            <ServiceIcon><Phone size={24} strokeWidth={1.5} aria-label="Customer support and issue resolution services" /></ServiceIcon>
            <ServiceTitle>Customer Support</ServiceTitle>
            <ServiceDescription>
              Prompt, professional issue resolution for enhanced customer satisfaction.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Inbound/Outbound Calls</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Issue Resolution</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Client Communication</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>06</ServiceNumber>
            <ServiceIcon><Headset size={24} strokeWidth={1.5} aria-label="24/7 afterhours logistics support" /></ServiceIcon>
            <ServiceTitle>Afterhours Support</ServiceTitle>
            <ServiceDescription>
              Support during non-work hours, including evenings and weekends for continuous operations.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> 24/7 Availability</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Emergency Handling</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Weekend Coverage</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>07</ServiceNumber>
            <ServiceIcon><User size={24} strokeWidth={1.5} aria-label="Logistics coordination and vendor management" /></ServiceIcon>
            <ServiceTitle>Logistics Coordinator</ServiceTitle>
            <ServiceDescription>
              Seamless orchestration from origin to destination ensuring smooth operations.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Shipment Coordination</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Vendor Management</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Schedule Management</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>08</ServiceNumber>
            <ServiceIcon><Database size={24} strokeWidth={1.5} aria-label="Logistics data analytics and reporting" /></ServiceIcon>
            <ServiceTitle>Data Analyst</ServiceTitle>
            <ServiceDescription>
              Analysis of data for insights, trends, and informed business decisions.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Performance Metrics</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Trend Analysis</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Reporting & Dashboards</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceNumber>09</ServiceNumber>
            <ServiceIcon><Coins size={24} strokeWidth={1.5} /></ServiceIcon>
            <ServiceTitle>Account Management</ServiceTitle>
            <ServiceDescription>
              Dedicated expertise for tailored solutions and strong client relationships.
            </ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Client Relations</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Account Growth</ServiceFeature>
              <ServiceFeature><CheckCircle2 size={14} strokeWidth={2} /> Service Optimization</ServiceFeature>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Logistics Support</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon><Clock size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Operational Efficiency</BenefitTitle>
            <BenefitDescription>
              Streamline your logistics operations with dedicated support teams working around the clock.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><TrendUp size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Cost Reduction</BenefitTitle>
            <BenefitDescription>
              Lower operational costs through efficient resource allocation and streamlined processes.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard>
            <BenefitIcon><Shield size={24} strokeWidth={1.5} /></BenefitIcon>
            <BenefitTitle>Reliable Quality</BenefitTitle>
            <BenefitDescription>
              Ensure consistent, high-quality logistics support from experienced professionals.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      {/* Contact Section */}
      <ContactSection>
        <ContactContent>
          <ContactTitle>Ready to Optimize Your Logistics Operations?</ContactTitle>
          <ContactDescription>
            Contact us today to learn how our logistics support services can help your business thrive.
          </ContactDescription>
          <ContactButton href="/contact/">
            Contact Us
            <ArrowRight size={18} />
          </ContactButton>
          <TrustIndicators>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Real-Time Tracking</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>24/7 Support</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Load Optimization</span>
            </TrustItem>
          </TrustIndicators>
        </ContactContent>
      </ContactSection>
    </Wrapper>
  );
};

// Styled Components - Premium Enterprise Design System
const Wrapper = styled.div`
  width: 100%;
  background: #ffffff;
  overflow-x: hidden;
`;

// Hero Section - World-Class Enterprise (Maersk/DHL/Accenture Level)
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

  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 0 5rem 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 320px) {
    padding: 0 1rem;
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

  @media (max-width: 320px) {
    font-size: 2.25rem;
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
  padding-left: 1.25rem;
  border-left: 2px solid rgba(158, 28, 36, 0.6);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 1rem;
    margin: 1.25rem auto 0;
    text-align: left;
    display: inline-block;
  }
`;

const HeroActions = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: stretch;
  gap: 0;

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 2.5rem;
  }
`;

const HeroPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.875rem;
  height: 64px;
  padding: 0 2.5rem;
  background: #9E1C24;
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
    box-shadow: 0 12px 40px rgba(158, 28, 36, 0.35);
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

const HeroMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0 2rem;
  margin-left: 2rem;
  text-align: left;

  @media (max-width: 640px) {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.25rem 0 0;
    margin-left: 0;
    margin-top: 1.25rem;
    text-align: center;
    width: 100%;
  }
`;

const MetaTop = styled.p`
  margin: 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
`;

const MetaBottom = styled.p`
  margin: 0.25rem 0 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
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

// Section Components
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 1400px;
    gap: 2rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 320px) {
    gap: 1rem;
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
    color: #9E1C24;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }
`;

// Benefits Section - Strategic Value Proposition
const BenefitsSection = styled.section`
  padding: 7rem 2rem;
  background: #ffffff;
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
    padding: 5rem 1.5rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 1400px;
    gap: 2.5rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (max-width: 320px) {
    gap: 1rem;
  }
`;

const BenefitCard = styled.div`
  position: relative;
  padding: 2.25rem 1.75rem;
  background: #ffffff;
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
    padding: 1.75rem 1.5rem;
  }
`;

const BenefitIcon = styled.div`
  width: 52px;
  height: 52px;
  background: #f8fafc;
  border: 1px solid #e5e9ed;
  color: #9E1C24;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${BenefitCard}:hover & {
    background: #9E1C24;
    border-color: #9E1C24;
    color: #ffffff;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0a1628;
  margin-bottom: 0.625rem;
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
`;

const BenefitDescription = styled.p`
  font-size: 0.925rem;
  line-height: 1.65;
  color: #5a6578;
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

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse at 50% 0%, rgba(158, 28, 36, 0.08) 0%, transparent 60%),
      url(${bgImage}) center / cover no-repeat;
    opacity: 0.12;
  }

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
  background: #9E1C24;
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
    box-shadow: 0 12px 40px rgba(158, 28, 36, 0.4);

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

export default LogisticsOverview;
