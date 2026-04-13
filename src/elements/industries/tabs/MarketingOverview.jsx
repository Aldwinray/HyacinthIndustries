import React from 'react'
import styled from 'styled-components'
import {
  Presentation,
  LaptopIcon,
} from 'lucide-react'

import bgImage from '../../../assets/img/backgrounds/bnw.webp'
import marketingHero from '../../../assets/img/industries/marketing.webp'
import {
  heroContent,
  heroEyebrow,
  heroOverlay,
  heroSubtitle,
  heroTitle,
  primaryButton,
  sectionTitle
} from '../../../styles/premiumPageStyles'

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
      <HeroSection>
        <HeroImageContainer>
          <HeroImage src={marketingHero} alt="Marketing Services" />
          <HeroOverlay>
            <HeroContent>
              <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
              <HeroTitle>Marketing Support</HeroTitle>
              <HeroSubtitle>
                Multimedia and social media support built to strengthen digital brand presence.
              </HeroSubtitle>
              <HeroButton href="#marketing">Explore Marketing Support</HeroButton>
            </HeroContent>
          </HeroOverlay>
        </HeroImageContainer>
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
        <SectionTitle>Our Marketing Services</SectionTitle>
        <ServiceDescription>
          We provide practical marketing support across multimedia production, social media
          management, to help teams move faster without compromising quality.
        </ServiceDescription>
        <ServicesGrid>
          {marketingServices.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIconWrapper>
                <service.icon size={24} color="#DC143C" />
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
        <CtaOverlay>
          <CtaContent>
            <CtaTitle>Ready to Strengthen Your Marketing Execution?</CtaTitle>
            <CtaDescription>
              Let&apos;s discuss how Hyacinth Industries can support your brand with stronger
              multimedia output and more consistent social media coordination.
            </CtaDescription>
            <CtaButton href="/contact">Contact Us Today</CtaButton>
          </CtaContent>
        </CtaOverlay>
      </CtaSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const HeroSection = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const HeroImageContainer = styled.div`
  position: relative;
  height: 655px;
  width: 100%;

  @media (max-width: 768px) {
    height: 450px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  ${heroOverlay};
`

const HeroContent = styled.div`
  ${heroContent};
`

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: rgba(255, 255, 255, 0.9);
`

const HeroTitle = styled.h1`
  ${heroTitle};
`

const HeroSubtitle = styled.p`
  ${heroSubtitle};
`

const HeroButton = styled.a`
  ${primaryButton};
`

const OverviewSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 115px;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    scroll-margin-top: 110px;
  }
`

const SectionTitle = styled.h2`
  ${sectionTitle};
  margin-bottom: 1.8rem;
`

const OverviewDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 420px));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`

const ServiceIconWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ServiceListItem = styled.li`
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.8rem;
  color: #666;
  font-family: var(--font-body);

  &:before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`

const CtaSection = styled.section`
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #005792 0%, #00205B 100%);
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  margin-top: 3rem;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-top: 2rem;
  }
`

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
`

const CtaContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CtaDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: var(--font-body);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

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
`

export default MarketingOverview
