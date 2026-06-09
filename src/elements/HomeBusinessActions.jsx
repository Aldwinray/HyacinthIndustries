/* HomeBusinessActions.jsx */
import { memo } from "react";
import styled, { keyframes } from "styled-components";
import FeatureCard from "../components/basic/Card2";
import { motion } from "framer-motion";
import bg1 from "../assets/img/backgrounds/bg1.webp";

import card1 from "../assets/img/HomeBusinessTransformationActions/modernSolutions.webp";
import card2 from "../assets/img/HomeBusinessTransformationActions/process.webp";
import card3 from "../assets/img/HomeBusinessTransformationActions/innovation.webp";

// ============================================
// PREMIUM ANIMATION SYSTEM (Apple/Linear Inspired)
// ============================================

const EASING = {
  smooth: [0.23, 1, 0.32, 1],      // Primary entrance
  snappy: [0.16, 1, 0.3, 1],       // Exits and quick actions
  bounce: [0.34, 1.56, 0.64, 1],   // Playful interactions
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASING.smooth },
  },
};

// Action cards data
const actionCards = [
  {
    image: card1,
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions that drive efficiency and growth.",
    tag: "Learn More",
    link: "/services",
  },
  {
    image: card2,
    title: "Process Optimization",
    description: "Streamline operations and maximize productivity with our proven optimization strategies.",
    tag: "Discover",
    link: "/services",
  },
  {
    image: card3,
    title: "Innovation Strategy",
    description: "Stay ahead of the competition with forward-thinking innovation and strategic planning.",
    tag: "Explore",
    link: "/services",
  },
];

const BusinessActions = memo(() => {
  // Respect user's motion preferences
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getVariants = (variants) => 
    prefersReducedMotion 
      ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
      : variants;

  return (
    <Section
      as={motion.section}
      variants={getVariants(sectionVariants)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-100px" }}
    >
      <BackgroundLayer />
      <AmbientGlow />
      
      <Inner>
        <HeaderBlock
          as={motion.div}
          variants={getVariants(sectionVariants)}
        >
          <Eyebrow variants={getVariants(headerVariants)}>
            <EyebrowDot />
            <span>What We Help Improve</span>
          </Eyebrow>

          <Title variants={getVariants(headerVariants)}>
            Business Transformation
            <TitleAccent> Actions</TitleAccent>
          </Title>

          <Subtitle variants={getVariants(headerVariants)}>
            Practical initiatives designed to modernize operations, improve
            execution, and strengthen long-term business performance.
          </Subtitle>
        </HeaderBlock>

        <CardGrid
          as={motion.div}
          variants={getVariants(cardContainerVariants)}
        >
          {actionCards.map((card, index) => (
            <CardShell
              key={card.title}
              as={motion.div}
              variants={getVariants(cardItemVariants)}
              custom={index}
              whileHover={prefersReducedMotion ? {} : { 
                y: -8, 
                transition: { duration: 0.3, ease: EASING.smooth } 
              }}
            >
              <FeatureCard {...card} />
            </CardShell>
          ))}
        </CardGrid>
      </Inner>
    </Section>
  );
});

export default BusinessActions;

// ============================================
// PREMIUM STYLED COMPONENTS (Dark Theme)
// ============================================

// Performance: Removed noise texture - too expensive

// Ambient glow animation
const ambientPulse = keyframes`
  0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.08); }
`;

// Section with layered dark background
const Section = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 9rem;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
  background: #0c0c0e;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    padding: 4rem 0 5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    padding: 3.5rem 0 4.5rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    padding: 10rem 0 11rem;
  }
`;

// Simplified background layer - REMOVED fixed attachment and noise for performance
const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  /* Base background - REMOVED fixed attachment */
  background: url(${bg1}) center / cover no-repeat;
  
  /* Simplified dark overlay - fewer gradients */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 70% 10%, rgba(166, 29, 74, 0.1) 0%, transparent 50%),
      linear-gradient(
        180deg,
        rgba(12, 12, 14, 0.94) 0%,
        rgba(12, 12, 14, 0.9) 100%
      );
  }
  
  /* Performance: Removed noise texture */
`;

// Central ambient glow
const AmbientGlow = styled.div`
  position: absolute;
  width: 900px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center, 
    rgba(166, 29, 74, 0.06) 0%, 
    rgba(166, 29, 74, 0.02) 40%,
    transparent 70%
  );
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${ambientPulse} 12s ease-in-out infinite;
  pointer-events: none;
  filter: blur(80px);
`;

// Content container
const Inner = styled.div`
  position: relative;
  z-index: 2;
  width: min(1280px, 100%);
  margin: 0 auto;
  padding: 0 2rem;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    padding: 0 1rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    width: min(1400px, 95%);
    padding: 0 2.5rem;
  }
`;

// Header with refined vertical rhythm
const HeaderBlock = styled(motion.div)`
  max-width: 680px;
  margin: 0 auto 4.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    margin-bottom: 5rem;
  }
`;

// Minimal eyebrow with brand dot
const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #a1a1aa;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 0.6875rem;
    margin-bottom: 0.875rem;
  }
`;

const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a61d4a 0%, #7c1232 100%);
  box-shadow: 0 0 10px rgba(166, 29, 74, 0.4);
`;

// Display typography
const Title = styled(motion.h2)`
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #fafafa;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: clamp(1.875rem, 4.5vw, 2.75rem);
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: clamp(1.625rem, 5vw, 2.25rem);
    line-height: 1.15;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    font-size: 3.75rem;
  }
`;

// Accent color for "Actions"
const TitleAccent = styled.span`
  color: #fb7185;
  font-weight: 500;
`;

// Body text
const Subtitle = styled(motion.p)`
  margin: 1rem 0 0;
  max-width: 520px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 480px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-top: 0.75rem;
    padding: 0 0.5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.55;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    font-size: 1.125rem;
    max-width: 560px;
  }
`;

// Card grid with improved spacing
const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    max-width: 900px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 480px;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    gap: 1rem;
    max-width: 100%;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    gap: 1.75rem;
    max-width: 1320px;
  }
`;

// Card wrapper with premium shadow system
const CardShell = styled(motion.div)`
  min-width: 0;
  height: 100%;
  will-change: transform;
  
  /* Multi-layer shadow for depth */
  filter: 
    drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))
    drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))
    drop-shadow(0 16px 32px rgba(0, 0, 0, 0.2));

  & > * {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))
      drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3))
      drop-shadow(0 24px 48px rgba(166, 29, 74, 0.08));
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))
      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }
`;
