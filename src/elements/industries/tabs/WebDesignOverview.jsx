import React from 'react'
import styled from 'styled-components'
import { 
  LayoutDashboard, 
  Smartphone, 
  Code, 
  Rocket, 
  LineChart, 
  Users, 
  Expand, 
  ShieldCheck,
  PenTool,
  Search,
  Lightbulb,
  Gauge,
  Clock
} from 'lucide-react'

import bgImage from '../../../assets/img/backgrounds/bnw.webp'
import webHero from '../../../assets/img/industries/coding.webp'
import { heroContent, heroEyebrow, heroOverlay, heroSubtitle, heroTitle, primaryButton, sectionTitle } from '../../../styles/premiumPageStyles'

const webServices = [
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    items: [
      "User interface design",
      "User experience optimization",
      "Wireframing & prototyping",
      "Visual design systems"
    ]
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    items: [
      "Mobile-first design",
      "Cross-browser compatibility",
      "Progressive web apps",
      "Performance optimization"
    ]
  },
  {
    icon: Code,
    title: "Technical Solutions",
    items: [
      "Custom web applications",
      "Content management systems",
      "E-commerce platforms",
      "API integrations"
    ]
  },
  {
    icon: PenTool,
    title: "Creative Design",
    items: [
      "Brand identity integration",
      "Custom graphics & illustrations",
      "Animation & interactive elements",
      "Visual storytelling"
    ]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    items: [
      "Search engine friendly structure",
      "Performance optimization",
      "Semantic HTML markup",
      "Analytics integration"
    ]
  },
  {
    icon: Gauge,
    title: "Maintenance & Support",
    items: [
      "Regular updates & monitoring",
      "Performance optimization",
      "Security patches",
      "Content management"
    ]
  }
]

const webBenefits = [
  {
    icon: LineChart,
    title: "Performance-Driven",
    description: "Fast-loading, optimized websites that convert visitors into customers with measurable results."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled designers and developers bring years of experience to deliver exceptional digital solutions."
  },
  {
    icon: Expand,
    title: "Scalable Solutions",
    description: "Websites and applications that grow seamlessly with your business needs and user base."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Built with modern security standards to protect your business and customer data."
  },
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "We leverage the latest technologies and design trends to keep your digital presence ahead of the curve."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and deliver projects on time without compromising quality."
  }
]

const WebDesignOverview = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroImageContainer>
          <HeroImage src={webHero} alt="Web Design Services" />
          <HeroOverlay>
            <HeroContent>
              <HeroEyebrow>Hyacinth Industries</HeroEyebrow>
              <HeroTitle>Web Design & Development</HeroTitle>
              <HeroSubtitle>Creating digital experiences that engage, convert, and inspire</HeroSubtitle>
              <HeroButton href="#web-design-and-development">Get Started</HeroButton>
            </HeroContent>
          </HeroOverlay>
        </HeroImageContainer>
      </HeroSection>

      {/* Overview Section */}
      <OverviewSection id="web-design-and-development">
        <SectionTitle>Modern Web Solutions for the Digital Age</SectionTitle>
        <OverviewDescription>
          At Hyacinth Industries, we create stunning, responsive websites that combine aesthetic excellence with technical innovation. 
          Our web design services focus on delivering user-friendly, performance-optimized digital experiences that drive results and 
          help your business stand out in the competitive digital landscape.
        </OverviewDescription>
      </OverviewSection>

      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>Our Web Design Services</SectionTitle>
        <ServiceDescription>
          We offer a comprehensive range of web design and development services to meet your business needs, 
          from simple informational websites to complex web applications.
        </ServiceDescription>
        <ServicesGrid>
          {webServices.map((service, index) => (
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

      {/* Benefits Section */}
      <BenefitsSection>
        <SectionTitle>Why Choose Our Web Design Services?</SectionTitle>
        <BenefitDescription>
          Our approach to web design combines creativity, technical expertise, and business strategy 
          to deliver websites that not only look great but also perform exceptionally well.
        </BenefitDescription>
        <BenefitsGrid>
          {webBenefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIconWrapper>
                <benefit.icon size={24} color="#DC143C" />
              </BenefitIconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.description}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionTitle>Our Web Development Process</SectionTitle>
        <ProcessDescription>
          We follow a structured approach to web design and development to ensure that every project 
          is delivered on time, within budget, and exceeds expectations.
        </ProcessDescription>
        <ProcessStepsContainer>
          <ProcessImage>
            <img src={webHero} alt="Web Development Process" />
          </ProcessImage>
          <ProcessSteps>
            <ProcessStep>
              <ProcessStepNumber>1</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Discovery & Planning</ProcessStepTitle>
                <ProcessStepDescription>
                  We begin by understanding your business goals, target audience, and requirements to create a comprehensive project plan.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>2</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Design & Prototyping</ProcessStepTitle>
                <ProcessStepDescription>
                  Our designers create wireframes and visual designs that align with your brand identity and user experience goals.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>3</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Development & Testing</ProcessStepTitle>
                <ProcessStepDescription>
                  Our developers build your website using clean, efficient code and thoroughly test it across all devices and browsers.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
            <ProcessStep>
              <ProcessStepNumber>4</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Launch & Optimization</ProcessStepTitle>
                <ProcessStepDescription>
                  After final approval, we deploy your website and provide ongoing support to ensure optimal performance.
                </ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
          </ProcessSteps>
        </ProcessStepsContainer>
      </ProcessSection>

      {/* Call to Action Section */}
      <CtaSection>
        <CtaOverlay>
          <CtaContent>
            <CtaTitle>Ready to Transform Your Digital Presence?</CtaTitle>
            <CtaDescription>
              Let&apos;s discuss how our web design services can help you achieve your business goals and create a compelling online experience for your customers.
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

// Hero Section Styles
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
`;

const HeroTitle = styled.h1`
  ${heroTitle};
`

const HeroSubtitle = styled.p`
  ${heroSubtitle};
`

const HeroButton = styled.a`
  ${primaryButton};
`

// Overview Section Styles
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

// Services Section Styles
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
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
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
    content: "•";
    position: absolute;
    left: 0;
    color: #DC143C;
    font-weight: bold;
  }
`

// Benefits Section Styles
const BenefitsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const BenefitDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BenefitCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const BenefitIconWrapper = styled.div`
  margin-bottom: 1.5rem;
`

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-family: var(--font-heading);
`

const BenefitText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`

// Process Section Styles
const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const ProcessDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: var(--font-body);
`

const ProcessStepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

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
`

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ProcessStep = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

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
  box-shadow: 0 4px 8px rgba(220, 20, 60, 0.2);
`

const ProcessStepContent = styled.div`
  flex: 1;
`

const ProcessStepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-family: var(--font-heading);
`

const ProcessStepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-family: var(--font-body);
`

// CTA Section Styles
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

export default WebDesignOverview
