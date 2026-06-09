import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from '@emailjs/browser';
import {
  CheckCircle2,
  Mail,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  Clock,
  MessageSquare,
} from "lucide-react";

import BackgroundImg from "../assets/img/backgrounds/bg2.webp";
import Seo from "../components/Seo";

import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cssId = "calendly-widget-css";
    const scriptId = "calendly-widget-js";

    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [showScheduleHint, setShowScheduleHint] = useState(false);
  const [isMeetingBooked, setIsMeetingBooked] = useState(false);

  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    industry: "",
    message: "",
  });

  const sendInquiryEmail = async (data, calendlyEvent = {}) => {
      try {
        const payload = calendlyEvent || {};
        const eventObj = payload?.event || {};
        const inviteeObj = payload?.invitee || {};

        const rawStart = 
         eventObj?.start_time ||
         inviteeObj?.start_time ||
         payload?.event_start_time ||
         payload?.start_time ||
         "";

          const formattedMeetingTime = rawStart
            ? `${new Date(rawStart).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} - ${new Date(rawStart).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZoneName: "short",
              })}`
            : "Scheduled via Calendly";
        
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              name: data.name,
              email: data.email,
              industry: data.industry,
              message: data.message,
              meeting_time: formattedMeetingTime,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );

          window.gtag?.("event", "contact_email_sent", {
            page_location: window.location.href,
          });
      } catch (error) {
        console.error("EmailJS send error:", error);
      }
    };

  const openCalendlyPopup = (data = leadData) => {
    const url = new URL(
      "https://calendly.com/aldwinraya-hyacinthindustriesllc/strategy-call"
    );

    if (data?.name) url.searchParams.set("name", data.name);
    if (data?.email) url.searchParams.set("email", data.email);
    if (data?.industry) url.searchParams.set("a2", data.industry);
    if (data?.message) url.searchParams.set("a1", data.message);

    window.gtag?.("event", "calendly_open", {
      source: "contact_popup",
      page_location: window.location.href,
    });

    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: url.toString(),
      });
    } else {
      window.open(url.toString(), "_blank", "noopener,noreferrer");
    }
  };

  const handleFormSuccess = (data) => {
    const payload = {
      name: data?.name || "",
      email: data?.email || "",
      industry: data?.industry || "",
      message: data?.message || "",
    };

    setLeadData(payload);
    setIsMeetingBooked(false);
    setShowScheduleHint(true);

    setTimeout(() => {
      openCalendlyPopup(payload);
    }, 1400);
  };

  useEffect(() => {
    if (!isMeetingBooked) return;

    const timer = setTimeout(() => {
      setIsMeetingBooked(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isMeetingBooked]);

  useEffect(() => {
    const onCalendlyMessage = async (event) => {
      if (event.origin !== "https://calendly.com") return;

      if (event.data?.event === "calendly.event_scheduled") {
        window.gtag?.("event", "calendly_booked", {
          source: "contact_popup",
          page_location: window.location.href,
        });

        await sendInquiryEmail(
          leadData,
          event.data.payload || {}
        );

        setIsMeetingBooked(true);
        setShowScheduleHint(false);
      }
    };

    window.addEventListener("message", onCalendlyMessage);

    return () => {
      window.removeEventListener("message", onCalendlyMessage);
    };
  }, [leadData]);

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
        canonicalPath="/contact/"
      />

      <TopNavBar />
      <SideBar />

      <HeroSection>
        <HeroBg />

        <HeroInner>
          <HeroEyebrow>
            <EyebrowDot />
            Work With Us
          </HeroEyebrow>

          <HeroTitle>
            Start a conversation about
            <br />
            <HeroTitleAccent>what you&apos;re building.</HeroTitleAccent>
          </HeroTitle>

          <HeroDescription>
            Have questions, partnership ideas, or a service request? Reach out
            and we&apos;ll direct your inquiry to the right next step.
          </HeroDescription>

          <HeroActions>
            <HeroPrimaryButton href="#contact-form">
              Get Started
              <ArrowRight size={17} />
            </HeroPrimaryButton>

            <HeroSecondaryButton href="mailto:info@hyacinthindustriesllc.com">
              Email Us Directly
            </HeroSecondaryButton>
          </HeroActions>

          <HeroTrust>
            <TrustItem>
              <Clock size={15} />
              <span>Response within 1 business day</span>
            </TrustItem>

            <TrustDivider />

            <TrustItem>
              <ShieldCheck size={15} />
              <span>Confidential inquiries</span>
            </TrustItem>

            <TrustDivider />

            <TrustItem>
              <MessageSquare size={15} />
              <span>Clear next steps</span>
            </TrustItem>
          </HeroTrust>
        </HeroInner>
      </HeroSection>

      <ContentSection>
        <ContentInner>
          <ContactGrid id="contact-form">
            <LeftColumn>
              <IntroCard>
                <IntroIconRow>
                  <IntroIcon>
                    <MessageSquare size={20} />
                  </IntroIcon>
                </IntroIconRow>

                <IntroEyebrow>Business Inquiries</IntroEyebrow>

                <IntroTitle>
                  Professional support for serious conversations.
                </IntroTitle>

                <IntroText>
                  Hyacinth Industries works with organizations looking for
                  reliable execution, specialized support, and practical
                  operating clarity. Use the form to start the conversation.
                </IntroText>

                <Divider />

                <SignalsList>
                  {signals.map((signal) => (
                    <SignalItem key={signal}>
                      <SignalCheck>
                        <CheckCircle2 size={16} />
                      </SignalCheck>
                      <span>{signal}</span>
                    </SignalItem>
                  ))}
                </SignalsList>
              </IntroCard>

              <ContactCardsGrid>
                <ContactCard>
                  <ContactCardInner>
                    <CardIconWrap>
                      <Mail size={18} />
                    </CardIconWrap>

                    <CardContent>
                      <CardLabel>Email</CardLabel>
                      <CardValue href="mailto:info@hyacinthindustriesllc.com">
                        info@hyacinthindustriesllc.com
                      </CardValue>
                    </CardContent>
                  </ContactCardInner>
                </ContactCard>

                <ContactCard>
                  <ContactCardInner>
                    <CardIconWrap>
                      <PhoneCall size={18} />
                    </CardIconWrap>

                    <CardContent>
                      <CardLabel>Phone</CardLabel>
                      <CardValue href="tel:+18132133276">
                        +1 (813) 213-3276
                      </CardValue>
                    </CardContent>
                  </ContactCardInner>
                </ContactCard>

                <ContactCard $full>
                  <ContactCardInner>
                    <CardIconWrap>
                      <ShieldCheck size={18} />
                    </CardIconWrap>

                    <CardContent>
                      <CardLabel>Our Approach</CardLabel>
                      <CardCopy>
                        Clear, confidential, and aligned with your business
                        context.
                      </CardCopy>
                    </CardContent>
                  </ContactCardInner>
                </ContactCard>
              </ContactCardsGrid>
            </LeftColumn>

            <RightColumn>
              <FormCard>
                <FormHeader>
                  <FormHeaderTop>
                    <FormBadge>
                      <FormBadgeDot />
                      Inquiry Form
                    </FormBadge>

                    <ResponseBadge>
                      <Clock size={13} />
                      1 day response
                    </ResponseBadge>
                  </FormHeaderTop>

                  <FormTitle>What are you working on?</FormTitle>

                  <FormText>
                    Include your area of interest and a short overview of the
                    opportunity, project, or support requirement.
                  </FormText>
                </FormHeader>

                <FormDivider />

                  {showScheduleHint && (
                    <SuccessCard role="status">
                      <ScheduleHint>
                        Thank you — your inquiry has been submitted successfully.
                        <br />
                        <br />
                        Please complete the final step by selecting your preferred meeting data and time in the scheduling popup.
                      </ScheduleHint>

                      <SuccessMeta>
                        If the popup did not appear or was accidentally closed, you can{" "}
                        <CalendlyFallbackLink 
                          href="https://calendly.com/aldwinraya-hyacinthindustriesllc/strategy-call"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            openCalendlyPopup();
                          }}
                        >
                          open the scheduling calendar again
                        </CalendlyFallbackLink>
                        .
                      </SuccessMeta>
                    </SuccessCard>
                  )}

                  {isMeetingBooked && (
                    <SuccessCard role="status">
                      <ScheduleHint>
                        Thank you — your strategy call has been scheduled successfully.
                      </ScheduleHint>
                    </SuccessCard>
                  )}

                  <ContactForm onSuccess={handleFormSuccess} />
              </FormCard>
            </RightColumn>
          </ContactGrid>
        </ContentInner>
      </ContentSection>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;
  background: #faf9f7;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding: 5rem 2rem 4.5rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 3rem;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(250, 249, 247, 0.92) 0%,
      rgba(250, 249, 247, 0.96) 50%,
      rgba(250, 249, 247, 1) 100%
    );
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeUp} 0.85s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

const HeroEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 0.6rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.08);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.04em;
  margin-bottom: 1.75rem;
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8b0d2a;
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.12);
  flex-shrink: 0;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 5.5vw, 4rem);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.045em;
  color: #1a1d20;

  @media (max-width: 560px) {
    font-size: 2.4rem;

    br {
      display: none;
    }
  }
`;

const HeroTitleAccent = styled.span`
  color: #8b0d2a;
`;

const HeroDescription = styled.p`
  margin: 1.25rem auto 0;
  max-width: 500px;
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.7;
  color: #6b7280;
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08),
      0 12px 32px rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroSecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: #ffffff;
  color: #1a1d20;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
      0 4px 12px rgba(0, 0, 0, 0.04);
  }
`;

const HeroTrust = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 3rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 0.75rem;
    flex-direction: column;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  color: #9ca3af;

  svg {
    color: #8b0d2a;
    flex-shrink: 0;
  }
`;

const TrustDivider = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(0, 0, 0, 0.08);

  @media (max-width: 640px) {
    display: none;
  }
`;

const ContentSection = styled.section`
  padding: 0 2rem 5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem 3.5rem;
  }
`;

const ContentInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: 1.5rem;
  align-items: start;
  scroll-margin-top: 140px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const IntroCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    border-radius: 20px;
  }
`;

const IntroIconRow = styled.div`
  margin-bottom: 1.25rem;
`;

const IntroIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
`;

const IntroEyebrow = styled.p`
  margin: 0 0 0.5rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const IntroTitle = styled.h2`
  margin: 0 0 0.85rem;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`;

const IntroText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.72;
  color: #6b7280;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  margin: 1.5rem 0;
`;

const SignalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`;

const SignalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.6;
  color: #374151;
  font-weight: 500;
`;

const SignalCheck = styled.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: #8b0d2a;
  display: flex;
`;

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 18px;
  padding: 1.15rem 1.2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
  grid-column: ${({ $full }) => ($full ? "1 / -1" : "auto")};

  &:hover {
    border-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 20px rgba(0, 0, 0, 0.04);
  }
`;

const ContactCardInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
`;

const CardIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.05);
  color: #8b0d2a;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  min-width: 0;
  padding-top: 2px;
`;

const CardLabel = styled.p`
  margin: 0 0 0.2rem;
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9ca3af;
`;

const CardValue = styled.a`
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1d20;
  text-decoration: none;
  line-height: 1.5;
  overflow-wrap: anywhere;
  transition: color 0.15s ease;

  &:hover {
    color: #8b0d2a;
  }
`;

const CardCopy = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.6;
  color: #6b7280;
`;

const RightColumn = styled.div``;

const FormCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    border-radius: 20px;
  }
`;

const FormHeader = styled.div``;

const FormHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const FormBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8b0d2a;
`;

const FormBadgeDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #8b0d2a;
  box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.1);
`;

const ResponseBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: rgba(139, 13, 42, 0.04);
  border: 1px solid rgba(139, 13, 42, 0.06);
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  color: #8b0d2a;
  letter-spacing: 0.02em;

  svg {
    flex-shrink: 0;
  }
`;

const FormTitle = styled.h2`
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: #1a1d20;
`;

const FormText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.68;
  color: #6b7280;
  max-width: 36rem;
`;

const FormDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  margin: 1.5rem 0;
`;

const SuccessCard = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid rgba(139, 13, 42, 0.14);
`;

const ScheduleHint = styled.div`
  color: #334155;
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.65;
`;

const SuccessMeta = styled.p`
  margin: 0.85rem 0 0;
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.6;
  color: #64748b;
`;

const CalendlyFallbackLink = styled.a`
  color: #8b0d2a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
