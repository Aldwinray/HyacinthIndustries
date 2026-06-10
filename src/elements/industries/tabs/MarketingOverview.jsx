import styled from 'styled-components'
import {
  Presentation,
  LaptopIcon,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

import marketingHero from '../../../assets/img/industries/marketing.webp'
import BGmarketing from "../../../assets/img/bgservices/Marketing.webp";

const marketingServices = [
  {
    icon: Presentation,
    title: "Multimedia Production",
    items: [
      "Video editing",
      "Graphic design",
      "Brand-aligned visual content",
      "Visual storytelling assets"
    ]
  },
  {
    icon: LaptopIcon,
    title: "Social Media Management",
    items: [
      "Content scheduling",
      "Platform coordination",
      "Brand voice consistency",
      "Audience engagement support"
    ]
  }
]

const MarketingOverview = () => {
  return (
    <Wrapper>
      <HeroSection aria-labelledby="marketing-hero-title">
        <HeroBg src={marketingHero} aria-hidden="true" />
        <HeroOverlay />
        <HeroVignette />
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>
              <EyebrowDot aria-hidden="true" /> Industry Solutions
            </HeroEyebrow>
            <HeroTitle id="marketing-hero-title">Marketing <GradientText>Support</GradientText></HeroTitle>
            <HeroSubtitle>
              Multimedia and social media support built to strengthen digital brand presence.
            </HeroSubtitle>
            <HeroNote>
              End-to-end support for multimedia production and social media management.
            </HeroNote>
            <HeroActions>
              <HeroPrimaryButton href="#marketing">
                Explore Marketing Support
                <ArrowRight size={18} />
              </HeroPrimaryButton>
              <HeroMeta>
                <MetaTop>2 Core Services</MetaTop>
                <MetaBottom>Enterprise-grade support</MetaBottom>
              </HeroMeta>
            </HeroActions>
          </HeroContent>
        </HeroInner>
      </HeroSection>

      <OverviewSection id="marketing">
        <SectionTitle>Modern Marketing Support for Growing Teams</SectionTitle>
        <OverviewDescription >
          Hyacinth Industries helps companies improve digital communication through multimedia
          production and social media support. The focus is on helping your brand look more
          consistent, stay active across channels, and present content in a way that is easier for
          your audience to notice and trust.
        </OverviewDescription>
      </OverviewSection>

      <ServicesSection>
        <SectionDivider />
        <SectionTitle>Our Marketing Services</SectionTitle>
        <ServiceDescription>
          We provide practical marketing support across multimedia production, social media
          management, to help teams move faster without compromising quality.
        </ServiceDescription>
        <ServicesGrid>
          {marketingServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceNumber>0{index + 1}</ServiceNumber>
              <ServiceIconWrapper>
                <service.icon size={24} strokeWidth={1.5} aria-label={service.title + " services"} />
              </ServiceIconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.items.map((item, idx) => (
                  <ServiceListItem key={idx}>{item}</ServiceListItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <CtaSection>
        <CtaOverlay />
        <CtaContent>
          <CtaTitle>Ready to Strengthen Your Marketing Execution?</CtaTitle>
          <CtaDescription>
            Let&apos;s discuss how Hyacinth Industries can support your brand with stronger
            multimedia output and more consistent social media coordination.
          </CtaDescription>
          <CtaButton href="/contact/">
            Contact Us Today
            <ArrowRight size={18} />
          </CtaButton>
          <TrustIndicators>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Multimedia Production</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Social Media Management</span>
            </TrustItem>
            <TrustItem>
              <CheckCircle2 size={16} />
              <span>Brand Content Strategy</span>
            </TrustItem>
          </TrustIndicators>
        </CtaContent>
      </CtaSection>
    </Wrapper>
  )
}

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

const OverviewSection = styled.section`
  padding: 7rem 2rem;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
    scroll-margin-top: 80px;
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

const OverviewDescription = styled.p`
  font-size: 1.05rem;
  color: #6b7280;
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.72;
  font-family: var(--font-body);
`;

// Services Section - World-Class Enterprise Modules
const ServicesSection = styled.section`
  padding: 7rem 2rem;
  background: #fafbfc;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.125rem;
  color: #5a6578;
  max-width: 640px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;

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

const ServiceIconWrapper = styled.div`
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

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e9ed;
`;

const ServiceListItem = styled.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  color: #5a6578;
  font-family: var(--font-body);
  font-size: 0.875rem;
  line-height: 1.5;

  &:before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #9E1C24;
    font-weight: bold;
  }
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
    url(${BGmarketing}) center / cover no-repeat;
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

export default MarketingOverview



