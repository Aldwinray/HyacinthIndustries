import { useEffect } from "react";
import styled from "styled-components";
import { CheckCircle2, Mail, PhoneCall, ShieldCheck } from "lucide-react";
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import Seo from "../components/Seo";

//components
import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import ContactForm from "../components/forms/ContactForm";
import {
  heroEyebrow,
  primaryButton,
  supportingText,
} from "../styles/premiumPageStyles";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signals = [
    "Direct access to the right service conversation",
    "Clear next steps based on your business needs",
    "Confidential handling of partnership and service inquiries",
  ];

  return (
    <Wrapper id="contact">
      <Seo
        title="Work With Us | Hyacinth Industries LLC"
        description="Contact Hyacinth Industries LLC for inquiries, partnerships, and service requests."
        canonicalPath="/contact"
      />
      
      <TopNavBar />
      <SideBar />
      <HeroSection>
        <HeroInner>
          <HeroEyebrow>Work With Us</HeroEyebrow>
          <Title>Start a conversation about what you&apos;re building.</Title>
          <Description>
            Have questions, partnership ideas, or a service request? Reach out and we&apos;ll
            direct your inquiry to the right next step.
          </Description>
          <HeroButton>
            <SubButton href="#contact-form">Get Started</SubButton>
          </HeroButton>
        </HeroInner>
      </HeroSection>
      <ContentWrapper>
        <ContactGrid id="contact-form">
          <IntroPanel>
            <PanelEyebrow>Business Inquiries</PanelEyebrow>
            <PanelTitle>Professional support for serious conversations.</PanelTitle>
            <PanelText>
              Hyacinth Industries works with organizations looking for reliable execution,
              specialized support, and practical operating clarity. Use the form to start the
              conversation and share the service area or challenge you&apos;re evaluating.
            </PanelText>

            <SignalsList>
              {signals.map((signal) => (
                <SignalItem key={signal}>
                  <CheckCircle2 size={18} />
                  <span>{signal}</span>
                </SignalItem>
              ))}
            </SignalsList>

            <ContactCards>
              <ContactCard>
                <CardIcon>
                  <Mail size={18} />
                </CardIcon>
                <CardLabel>Email</CardLabel>
                <CardValue href="mailto:info@hyacinthindustriesllc.com">
                  info@hyacinthindustriesllc.com
                </CardValue>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <PhoneCall size={18} />
                </CardIcon>
                <CardLabel>Phone</CardLabel>
                <CardValue href="tel:+18132133276">+1 (813) 213-3276</CardValue>
              </ContactCard>

              <ContactCard>
                <CardIcon>
                  <ShieldCheck size={18} />
                </CardIcon>
                <CardLabel>Approach</CardLabel>
                <CardCopy>Clear, confidential, and aligned with your business context.</CardCopy>
              </ContactCard>
            </ContactCards>
          </IntroPanel>

          <FormShell>
            <FormHeader>
              <FormKicker>Inquiry Form</FormKicker>
              <FormTitle>Tell us what you need.</FormTitle>
              <FormText>
                Include your area of interest and a short overview of the opportunity, project, or
                support requirement.
              </FormText>
              <FormResponseTime>We respond within 1 business day.</FormResponseTime>
            </FormHeader>
            <ContactForm />
          </FormShell>
        </ContactGrid>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px; /* Account for fixed navbar height */

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;
  min-height: calc(100dvh - 110px);
  background-position: center;
  padding: 3rem 0 4rem;
  position: relative;
  justify-content: center;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    min-height: calc(100dvh - 60px);
    padding: 2.25rem 0 3rem;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 2rem 0 2.6rem;
  }
`;

const HeroInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`;

const HeroEyebrow = styled.p`
  ${heroEyebrow};
  color: #8b0d2a;
`;

const ContentWrapper = styled.div`
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto 80px;

  @media (max-width: 640px) {
    width: min(1180px, calc(100% - 1.25rem));
    margin-bottom: 56px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 2rem;
  align-items: start;
  scroll-margin-top: 140px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-weight: 700;
  color: #131313;
  text-align: center;
  margin: 0 auto 1rem;
  font-size: clamp(3rem, 6vw, 5.1rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  max-width: 20ch;

  @media (max-width: 560px) {
    font-size: 2.8rem;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #dc143c, #990000);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const Description = styled.p`
  ${supportingText};
  max-width: 34rem;
  margin: 0 auto;
  text-align: center;
  color: #2f3137;
  font-size: clamp(1.05rem, 1.45vw, 1.18rem);
`;

const HeroButton = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SubButton = styled.a`
  ${primaryButton};
`;

const IntroPanel = styled.section`
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 248, 250, 0.98));
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2.1rem;
  box-shadow: 0 18px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.4rem;
    border-radius: 22px;
  }
`;

const PanelEyebrow = styled.p`
  ${heroEyebrow};
  color: #8b0d2a;
  margin-bottom: 0.9rem;
`;

const PanelTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 3vw, 2.65rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: #1d1d1f;
  margin: 0 0 1rem;
`;

const PanelText = styled.p`
  ${supportingText};
  text-align: left;
  margin: 0 0 1.5rem;
  max-width: 38rem;
`;

const SignalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: grid;
  gap: 0.85rem;
`;

const SignalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #27303f;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;

  svg {
    color: #a10f2b;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`;

const ContactCards = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const ContactCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 18px;
  padding: 1rem 1.05rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);

  @media (max-width: 640px) {
    padding: 0.95rem;
  }
`;

const CardIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 20, 60, 0.08);
  color: #a10f2b;
  margin-bottom: 0.8rem;
`;

const CardLabel = styled.p`
  margin: 0 0 0.35rem;
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
`;

const CardValue = styled.a`
  display: inline-block;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  line-height: 1.6;
  overflow-wrap: anywhere;

  &:hover {
    color: #a10f2b;
  }
`;

const CardCopy = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #374151;
`;

const FormShell = styled.div`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 16px 40px rgba(17, 17, 17, 0.08);

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 1.4rem;
  padding-bottom: 1.15rem;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
`;

const FormKicker = styled.p`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const FormTitle = styled.h2`
  margin: 0 0 0.55rem;
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: #16181d;
`;

const FormResponseTime = styled.p`
  margin: 0.85rem 0 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8b0d2a;
  font-weight: 600;
`;

const FormText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.7;
  color: #5b6472;
  max-width: 36rem;
`;
