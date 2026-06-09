import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ArrowRight, ChevronDown, MessageSquare, Zap, Users, Clock, Search, X, HelpCircle } from "lucide-react";
import Seo from "../components/Seo";

import TopNavBar from "../components/Nav/TopNavBar";
import SideBar from "../components/Nav/Sidebar";
import Footer from "../components/Nav/Footer";

const faqItems = [
  {
    question: "What is fractional executive consulting?",
    answer:
      "Fractional executive consulting gives you access to senior-level leadership support without making a full-time executive hire. It is designed for companies that need strategic direction, sharper execution, and experienced decision support for a defined period or priority area.",
  },
  {
    question: "Who is Hyacinth Industries for?",
    answer:
      "Hyacinth Industries is for founders, operators, and leadership teams that need help strengthening how the business is positioned, sold, or improved. It is especially useful for companies that are growing, entering a new market, trying to close larger opportunities, or working through product and execution friction.",
  },
  {
    question: "How long does engagement typically last?",
    answer:
      "Engagement length depends on the scope, urgency, and type of support needed. Some companies need short-term help around a specific initiative, while others benefit from ongoing support over several months as strategy and execution take shape.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Hyacinth Industries works across multiple sectors, including logistics, healthcare, marketing, administrative support, web design, general services, and related growth-focused business functions. The common thread is helping organizations improve commercial clarity, operational execution, and customer-facing outcomes.",
  },
  {
    question: "How is this different from hiring a consultant or a full-time hire?",
    answer:
      "The difference is the level of involvement and flexibility. Hyacinth Industries provides senior-level thinking that stays close to execution, so clients get strategic support without the cost, delay, and long-term commitment of hiring a full-time executive.",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way to get started is to reach out through the contact page and share what you are trying to solve. From there, the conversation can focus on your goals, the gaps in the current approach, and whether the engagement is a good fit.",
  },
];

const trustPoints = [
  { icon: Zap, label: "Senior-level support" },
  { icon: Clock, label: "Flexible engagements" },
  { icon: Users, label: "Multi-sector experience" },
];

export default function FAQ() {
  const [openFaqIndices, setOpenFaqIndices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqItems, setFilteredFaqItems] = useState(faqItems);
  const faqRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqItems(faqItems);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
      setFilteredFaqItems(filtered);
    }
  }, [searchQuery]);

  const toggleFaq = (index) => {
    setOpenFaqIndices((prev) => {
      const isOpen = prev.includes(index);
      const newIndices = isOpen
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      // Smooth scroll to the FAQ item if opening
      if (!isOpen && faqRefs.current[index]) {
        setTimeout(() => {
          faqRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 100);
      }

      return newIndices;
    });
  };

  const isOpen = (index) => openFaqIndices.includes(index);

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(index);
    }
  };

  return (
    <Wrapper>
      <Seo
        title="FAQ | Hyacinth Industries LLC"
        description="Answers to common questions about Hyacinth Industries, our consulting model, industries served, and how to get started."
        canonicalPath="/faq/"
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

      <HeroSection>
        <HeroInner>
          <HeroEyebrow>
            <EyebrowDot />
            Frequently Asked Questions
          </HeroEyebrow>
          <HeroTitle>
            Questions teams ask
            <br />
            <HeroTitleAccent>before they reach out.</HeroTitleAccent>
          </HeroTitle>
          <HeroDescription>
            Clear answers to help you understand the model, the fit, and what
            working together usually looks like.
          </HeroDescription>

          <SearchContainer>
            <SearchIconWrapper>
              <Search size={18} />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQ questions"
            />
            {searchQuery && (
              <ClearButton
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </ClearButton>
            )}
          </SearchContainer>

          <HeroActions>
            <HeroPrimaryButton href="#faq-list">
              Browse All Questions
              <ChevronDown size={17} />
            </HeroPrimaryButton>
            <HeroSecondaryButton href="/contact/">
              Contact Us
            </HeroSecondaryButton>
          </HeroActions>

          <TrustRow>
            {trustPoints.map((tp) => (
              <TrustItem key={tp.label}>
                <TrustIconWrap>
                  <tp.icon size={18} />
                </TrustIconWrap>
                <span>{tp.label}</span>
              </TrustItem>
            ))}
          </TrustRow>
        </HeroInner>
      </HeroSection>

      <FaqSection id="faq-list" aria-labelledby="faq-page-heading">
        <FaqSectionInner>
          <FaqLayout>
            <FaqSidebar>
              <SidebarCard>
                <SidebarIcon>
                  <MessageSquare size={20} />
                </SidebarIcon>
                <SidebarTitle>Can't find your answer?</SidebarTitle>
                <SidebarText>
                  Reach out directly and we'll walk through your specific
                  situation.
                </SidebarText>
                <SidebarButton href="/contact/">
                  Get In Touch
                  <ArrowRight size={15} />
                </SidebarButton>
              </SidebarCard>

              <StatsCard>
                <StatsGrid>
                  <StatItem>
                    <StatValue>{faqItems.length}</StatValue>
                    <StatLabel>Common Questions</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>1 day</StatValue>
                    <StatLabel>Response Time</StatLabel>
                  </StatItem>
                </StatsGrid>
              </StatsCard>
            </FaqSidebar>

            <FaqList aria-label="Frequently asked questions">
              {filteredFaqItems.length === 0 ? (
                <NoResults>
                  <NoResultsIcon>
                    <Search size={32} />
                  </NoResultsIcon>
                  <NoResultsTitle>No results found</NoResultsTitle>
                  <NoResultsText>
                    Try a different search term or{" "}
                    <a href="/contact/">contact us directly</a>
                  </NoResultsText>
                </NoResults>
              ) : (
                filteredFaqItems.map((item) => {
                  const originalIndex = faqItems.findIndex(
                    (fi) => fi.question === item.question
                  );
                  const itemIsOpen = isOpen(originalIndex);
                  return (
                    <FaqCard
                      key={item.question}
                      $isOpen={itemIsOpen}
                      ref={(el) => (faqRefs.current[originalIndex] = el)}
                    >
                      <FaqToggle
                        type="button"
                        aria-expanded={itemIsOpen}
                        aria-controls={`faq-answer-${originalIndex}`}
                        onClick={() => toggleFaq(originalIndex)}
                        onKeyDown={(e) => handleKeyDown(e, originalIndex)}
                        tabIndex={0}
                      >
                        <FaqToggleLeft>
                          <FaqNumber $isOpen={itemIsOpen}>
                            {String(originalIndex + 1).padStart(2, "0")}
                          </FaqNumber>
                          <FaqQuestion $isOpen={itemIsOpen}>
                            {item.question}
                          </FaqQuestion>
                        </FaqToggleLeft>
                        <FaqIconWrap $isOpen={itemIsOpen}>
                          <ChevronDown size={18} />
                        </FaqIconWrap>
                      </FaqToggle>

                      <FaqAnswerWrap
                        id={`faq-answer-${originalIndex}`}
                        $isOpen={itemIsOpen}
                        aria-hidden={!itemIsOpen}
                      >
                        <FaqAnswerInner>
                          <FaqAnswer>{item.answer}</FaqAnswer>
                        </FaqAnswerInner>
                      </FaqAnswerWrap>
                    </FaqCard>
                  );
                })
              )}
            </FaqList>
          </FaqLayout>
        </FaqSectionInner>
      </FaqSection>

      <CtaSection>
        <CtaInner>
          <CtaContent>
            <CtaTitle>Still deciding if Hyacinth is the right fit?</CtaTitle>
            <CtaText>
              We can talk through your goals, timing, and where leadership
              support would have the biggest impact.
            </CtaText>
          </CtaContent>
          <CtaButton href="/contact/">
            <span>Schedule a Discovery Call</span>
            <ArrowRight size={17} className="cta-arrow" />
          </CtaButton>
        </CtaInner>
      </CtaSection>

      <Footer />
    </Wrapper>
  );
}

/* ─── Base ────────────────────────────────── */

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

/* ─── Hero ────────────────────────────────── */

const HeroSection = styled.section`
  padding: 5rem 2rem 4.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(139, 13, 42, 0.03),
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem 3rem;
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
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
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.045em;
  color: #1a1d20;

  @media (max-width: 560px) {
    font-size: 2.2rem;
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
  max-width: 480px;
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.7;
  color: #6b7280;
`;

/* ─── Search ────────────────────────────────── */

const SearchContainer = styled.div`
  position: relative;
  max-width: 420px;
  margin: 1.75rem auto 0;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 3rem 0 2.75rem;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #ffffff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #1a1d20;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: rgba(139, 13, 42, 0.3);
    box-shadow: 0 0 0 3px rgba(139, 13, 42, 0.08);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    color: #6b7280;
    background: rgba(0, 0, 0, 0.04);
  }
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
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
  gap: 0.45rem;
  height: 50px;
  padding: 0 1.6rem;
  border-radius: 14px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08),
      0 12px 32px rgba(0, 0, 0, 0.14);
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

const TrustRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const TrustIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(139, 13, 42, 0.06);
  color: #8b0d2a;
  flex-shrink: 0;
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.86rem;
  font-weight: 500;
  color: #6b7280;
`;

/* ─── FAQ Section ────────────────────────── */

const FaqSection = styled.section`
  padding: 0 2rem 5rem;
  scroll-margin-top: 140px;

  @media (max-width: 768px) {
    padding: 0 1.25rem 3.5rem;
  }
`;

const FaqSectionInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const FaqLayout = styled.div`
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── Sidebar ────────────────────────────── */

const FaqSidebar = styled.div`
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 960px) {
    position: relative;
    top: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SidebarCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 22px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);
`;

const SidebarIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 13, 42, 0.06);
  color: #8b0d2a;
  margin-bottom: 1.15rem;
`;

const SidebarTitle = styled.h3`
  margin: 0 0 0.45rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1a1d20;
  line-height: 1.2;
`;

const SidebarText = styled.p`
  margin: 0 0 1.25rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.65;
  color: #6b7280;
`;

const SidebarButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.15rem;
  border-radius: 12px;
  background: var(--primary);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08),
      0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StatsCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 22px;
  padding: 1.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.03);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #8b0d2a;
  line-height: 1;
`;

const StatLabel = styled.p`
  margin: 0.3rem 0 0;
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
`;

/* ─── FAQ Cards ──────────────────────────── */

const FaqList = styled.div`
  display: grid;
  gap: 1rem;
`;

const FaqCard = styled.article`
  background: #ffffff;
  border: 2px solid
    ${({ $isOpen }) =>
      $isOpen ? "rgba(139, 13, 42, 0.15)" : "rgba(0, 0, 0, 0.05)"};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04),
    0 4px 12px
      ${({ $isOpen }) =>
        $isOpen ? "rgba(139, 13, 42, 0.06)" : "rgba(0, 0, 0, 0.02)"};
  transition: all 0.25s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${({ $isOpen }) =>
      $isOpen ? "var(--primary)" : "transparent"};
    transition: background 0.25s ease;
  }

  &:hover {
    border-color: rgba(139, 13, 42, 0.12);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05),
      0 8px 20px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }
`;

const FaqToggle = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  padding: 1.25rem 1.35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(139, 13, 42, 0.02);
  }

  &:focus-visible {
    outline: 3px solid rgba(139, 13, 42, 0.2);
    outline-offset: -3px;
    border-radius: 18px;
  }
`;

const FaqToggleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
`;

const FaqNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ $isOpen }) =>
    $isOpen ? "rgba(139, 13, 42, 0.08)" : "#fafaf9"};
  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen ? "rgba(139, 13, 42, 0.12)" : "rgba(0, 0, 0, 0.04)"};
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ $isOpen }) => ($isOpen ? "#8b0d2a" : "#9ca3af")};
  flex-shrink: 0;
  transition: all 0.25s ease;
`;

const FaqQuestion = styled.h3`
  margin: 0;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: #1a1d20;
  transition: color 0.25s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    color: #8b0d2a;
  `}
`;

const FaqIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: ${({ $isOpen }) =>
    $isOpen ? "rgba(139, 13, 42, 0.08)" : "transparent"};
  color: ${({ $isOpen }) => ($isOpen ? "#8b0d2a" : "#9ca3af")};
  flex-shrink: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
`;

const FaqAnswerWrap = styled.div`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  & > * {
    overflow: hidden;
  }
`;

const FaqAnswerInner = styled.div``;

const FaqAnswer = styled.p`
  margin: 0;
  padding: 0 1.35rem 1.35rem calc(1.35rem + 36px + 0.85rem);
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.8;
  color: #4b5563;

  @media (max-width: 640px) {
    padding: 0 1.15rem 1.15rem;
  }
`;

/* ─── No Results ─────────────────────────── */

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #ffffff;
  border-radius: 18px;
  border: 1px dashed rgba(0, 0, 0, 0.1);
`;

const NoResultsIcon = styled.div`
  color: #9ca3af;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const NoResultsTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1d20;
`;

const NoResultsText = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: #6b7280;

  a {
    color: var(--primary);
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      text-decoration: none;
    }
  }
`;

/* ─── Bottom CTA ─────────────────────────── */

const CtaSection = styled.section`
  padding: 0 2rem 5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem 3.5rem;
  }
`;

import PetalsImg from "../assets/img/petals.webp";

const CtaInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 3rem;
  background: #1a1d20;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    height: 380px;
    background: url(${PetalsImg}) center center/contain no-repeat;
    opacity: 0.06;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }
`;

const CtaContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const CtaTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.15;
`;

const CtaText = styled.p`
  margin: 0.5rem 0 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: 52px;
  padding: 0 1.6rem 0 1.75rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(225, 29, 72, 0.35);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, #f43f5e 0%, #E11D48 100%);
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: -1;
  }

  .cta-arrow {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(225, 29, 72, 0.45);
    padding: 0 1.5rem 0 1.75rem;

    &::before {
      opacity: 1;
    }

    .cta-arrow {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;