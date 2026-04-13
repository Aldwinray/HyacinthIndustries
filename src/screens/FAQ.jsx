import { useState, useEffect } from "react";
import styled from "styled-components";
import Seo from "../components/Seo";

import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";

const faqItems = [
  {
    question: "What is fractional executive consulting?",
    answer: "Fractional executive consulting gives you access to senior-level leadership support without making a full-time executive hire. It is designed for companies that need strategic direction, sharper execution, and experienced decision support for a defined period or priority area.",
  },
  {
    question: "Who is Hyacinth Industries for?",
    answer: "Hyacinth Industries is for founders, operators, and leadership teams that need help strengthening how the business is positioned, sold, or improved. It is especially useful for companies that are growing, entering a new market, trying to close larger opportunities, or working through product and execution friction.",
  },
  {
    question: "How long does engagement typically last?",
    answer: "Engagement length depends on the scope, urgency, and type of support needed. Some companies need short-term help around a specific initiative, while others benefit from ongoing support over several months as strategy and execution take shape.",
  },
  {
    question: "What industries do you work with?",
    answer: "Hyacinth Industries works across multiple sectors, including logistics, healthcare, marketing, administrative support, web design, general services, and related growth-focused business functions. The common thread is helping organizations improve commercial clarity, operational execution, and customer-facing outcomes.",
  },
  {
    question: "How is this different from hiring a consultant or a full-time hire?",
    answer: "The difference is the level of involvement and flexibility. Hyacinth Industries provides senior-level thinking that stays close to execution, so clients get strategic support without the cost, delay, and long-term commitment of hiring a full-time executive.",
  },
  {
    question: "How do I get started?",
    answer: "The easiest way to get started is to reach out through the contact page and share what you are trying to solve. From there, the conversation can focus on your goals, the gaps in the current approach, and whether the engagement is a good fit.",
  },
];

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Seo
        title="FAQ | Hyacinth Industries LLC"
        description="Answers to common questions about Hyacinth Industries, our consulting model, industries served, and how to get started."
        canonicalPath="/faq"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <TopNavBar />
      <SideBar />

      <FaqSection aria-labelledby ="faq-page-heading">
        <FaqInner>
          <FaqShell>
            <FaqIntroPanel>
              <FaqEyebrow>FAQ</FaqEyebrow>
              <FaqHeading id="faq-page-heading">
                Questions teams usually ask before they reach out.
              </FaqHeading>
              <FaqLead>
                These answers are meant to make the first conversation easier and help you decide whether Hyacinth Industries is the right fit for what your business needs next.
              </FaqLead>
              <FaqIntroNote>
                Clear answers matter early. This page is designed to help leadership teams understand the model, the fit, and what working together usually looks like.
              </FaqIntroNote>
              <TrustChipRow>
                <TrustChip>Senior-level support</TrustChip>
                <TrustChip>Flexible engagements</TrustChip>
                <TrustChip>Multi-sector experience</TrustChip>
              </TrustChipRow>
            </FaqIntroPanel>

            <FaqList aria-label="Frequently asked questions">
              {faqItems.map((item, index) => (
                <FaqCard key={item.question} $isOpen={openFaqIndex === index}>
                  <FaqNumber>{String(index + 1).padStart(2, "0")}</FaqNumber>
                  <FaqContent>
                    <FaqToggle
                      type="button"
                      aria-expanded={openFaqIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() =>
                        setOpenFaqIndex((currentIndex) =>
                          currentIndex === index ? -1 : index
                        )
                      }
                    >
                      <FaqQuestion>{item.question}</FaqQuestion>
                      <FaqIcon aria-hidden="true" $isOpen={openFaqIndex === index}>
                        {openFaqIndex === index ? "-" : "+"}
                      </FaqIcon>
                    </FaqToggle>

                    <FaqAnswerWrap
                      id={`faq-answer-${index}`}
                      $isOpen={openFaqIndex === index}
                      aria-hidden={openFaqIndex === index ? "false" : "true"}
                    >
                      <FaqAnswer>{item.answer}</FaqAnswer>
                    </FaqAnswerWrap>
                  </FaqContent>
                </FaqCard>
              ))}
            </FaqList>
          </FaqShell>
        </FaqInner>
      </FaqSection>

      <FaqCtaSection>
        <FaqCtaInner>
          <FaqCtaTitle>Still deciding if Hyacinth is the right fit?</FaqCtaTitle>
          <FaqCtaText>
            We can talk through your goals, timing, and where leadership support would have the biggest impact.
          </FaqCtaText>
          <FaqCtaButton href="/contact">Schedule a Discovery Call</FaqCtaButton>
        </FaqCtaInner>
      </FaqCtaSection>

      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-top: 110px;

  @media (max-width: 1024px) {
    padding-top: 60px;
  }
`;

const FaqSection = styled.section`
  padding: 2rem 20px 5rem;
  background: 
    radial-gradient(circle at the top left, rgba(180, 8, 33, 0.1), transparent 38%),
    linear-gradient(180deg, #f8f8f7 0%, #ffffff 100%);

  @media (max-width: 640px) {
    padding: 1.5rem 16px 4rem;
  }
`;

const FaqInner = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`;

const FaqShell = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FaqIntroPanel = styled.div`
  position: sticky;
  top: 132px;
  background:
    linear-gradient(160deg, rgba(139, 13, 42, 0.97), rgba(45, 11, 17, 0.98)), #2b1014;
  border-radius: 30px;
  padding: 2rem 1.8rem;
  color: #fff7f2;
  box-shadow: 0 24px 48px rgba(48, 16, 21, 0.24);
  overflow: hidden;

  &::after{
    content: "";
    position: absolute;
    inset: auto -60px -80px auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 68%);
    pointer-events: none;
  }

  @media (max-width: 960px) {
    position: relative;
    top: auto;
  }

  @media (max-width: 640px) {
    padding: 1.4rem 1.2rem;
    border-radius: 22px;
  }
`;

const FaqEyebrow = styled.p`
  margin: 0 0 0.65rem;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ffd7b8;
`;

const FaqHeading = styled.h1`
  margin: 0;
  max-width: 14ch;
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

const FaqLead = styled.p`
  margin: 1rem 0 2rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.75;
  color: rgba(255, 247, 242, 0.86);
`;

const FaqIntroNote = styled.p`
  margin: 0;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 247, 242, 0.75);
`;

const FaqList = styled.div`
  display: grid;
  gap: 1rem;
`;

const FaqCard = styled.article`
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(20, 20, 20, 0.07);
  border-radius: 26px;
  padding: 1.35rem 1.4rem;
  box-shadow: 0 18px 34px rgba(17, 17, 17, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 24px 44px rgba(17, 17, 17, 0.1);
    border-color: rgba(139, 13, 42, 0.18);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 1.15rem;
  }

  ${({ $isOpen }) =>
    $isOpen &&
  `
    border-color: rgba(139, 13, 42, 0.22);
    box-shadow: 0 22px 40px rgba(139, 13, 42, 0.08);
  `}
`;

const FaqNumber = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #fff4ee, #f8e0d1);
  border: 1px solid rgba(180, 8, 33, 0.12);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8b0d2a;
`;

const FaqContent = styled.div`
  min-width: 0;
`;

const FaqToggle = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
`;

const FaqQuestion = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.18rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #17181c;
`;

const FaqIcon = styled.span`
  width: 36px;
  height: 36px;
  flex:  0 0 36px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $isOpen }) => ($isOpen ? "#8b0d2a" : "#f8e8de")};
  color: ${({ $isOpen }) => ($isOpen ? "#ffffff" : "#8b0d2a")};
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0deg)")};

`;

const FaqAnswerWrap = styled.div`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")}; 
  transition: grid-template-rows 0.28s ease, margin-top 0.28s ease;
  margin-top: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};

  & > * {
    overflow: hidden;
  }
`;

const FaqAnswer = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.97rem;
  line-height: 1.78;
  color: #475569;
`;

const TrustChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.4rem;
`;

const TrustChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.58rem 0.9rem;
  border-radius: 999px;
  background:  rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff7f2;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
`;

const FaqCtaSection  = styled.section`
  padding: 0 20px 5rem;
  background: linear-gradient(180deg, #ffffff 0%, #fbf7f4 100%);

  @media (max-width: 640px) {
    padding: 0 16px 4rem;
  }
`;

const FaqCtaInner = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  border-radius: 28px;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #8b0d2a, #5a0a1b);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 50px rgba(91, 10, 27, 0.2);

  @media (max-width: 640px) {
    padding: 1.75rem 1.2rem;
    border-radius: 22px;
  }
`;

const FaqCtaTitle = styled.h2`
  margin: 0 0 0.9rem;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.05;
`;

const FaqCtaText = styled.p`
  margin: 0 auto 1.5rem;
  max-width: 42rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.86);
`;

const FaqCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.95rem 1.5rem;
  border-radius: 999px;
  background: #ffffff;
  color: #8b0d2a;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
  }
`;
