import { memo } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Card3 from "../components/basic/Card3";
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";

// Assets
import card1 from "../assets/img/industries/office.webp";
import card2 from "../assets/img/industries/coding.webp";
import card3 from "../assets/img/industries/healthcare.webp";

// ============================================
// PREMIUM ANIMATION SYSTEM (Apple/Linear Inspired)
// ============================================

const EASING = {
  smooth: [0.23, 1, 0.32, 1],      // Primary entrance
  snappy: [0.16, 1, 0.3, 1],       // Exits and quick actions
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
      delayChildren: 0.15,
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

// Cards data
const cards = [
  {
    id: 1,
    image: card1,
    title: "Professional Outsourcing",
    description:
      "Transform your business with our comprehensive outsourcing solutions. From administrative support to specialized medical services, we deliver excellence across industries.",
    tag: "Learn More",
  },
  {
    id: 2,
    image: card2,
    title: "Digital Solutions",
    description:
      "Access world-class web design, development, and creative services. Our team delivers cutting-edge solutions in UI/UX design, digital marketing, 3D animation, and more.",
    tag: "Explore Services",
  },
  {
    id: 3,
    image: card3,
    title: "Healthcare Solutions",
    description:
      "Revolutionize healthcare delivery with our virtual nursing, emergency assistance, and medical support services. Experience healthcare innovation at its best.",
    tag: "Discover Healthcare",
  },
];

const HomeFeatureContent = memo(() => {
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
            <span>What We Do</span>
          </Eyebrow>

          <Title variants={getVariants(headerVariants)}>
            Featured Capabilities
          </Title>

          <Subtitle variants={getVariants(headerVariants)}>
            Explore the solutions that help organizations streamline operations,
            strengthen delivery, and support long-term growth.
          </Subtitle>
        </HeaderBlock>

        <CardGrid
          as={motion.div}
          variants={getVariants(cardContainerVariants)}
        >
          {cards.map((card, index) => (
            <CardItem
              key={card.id}
              as={motion.div}
              variants={getVariants(cardItemVariants)}
              custom={index}
              whileHover={prefersReducedMotion ? {} : { 
                y: -8, 
                transition: { duration: 0.3, ease: EASING.smooth } 
              }}
            >
              <Card3 {...card} />
            </CardItem>
          ))}
        </CardGrid>
      </Inner>
    </Section>
  );
});

export default HomeFeatureContent;

// ============================================
// PREMIUM STYLED COMPONENTS (Light Theme)
// ============================================

// Performance: Removed noise texture - too expensive

// Ambient glow animation
const ambientPulse = keyframes`
  0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.08); }
`;

// Section with layered light background
const Section = styled(motion.section)`
  width: 100%;
  position: relative;
  padding: 8rem 0 9rem;
  overflow: hidden;
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
  background: #fafaf9;

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
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  
  /* Simplified overlay - fewer gradients */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 120% 60% at 50% 0%, rgba(166, 29, 74, 0.05) 0%, transparent 60%),
      linear-gradient(
        180deg,
        rgba(250, 250, 249, 0.98) 0%,
        rgba(250, 249, 247, 0.98) 100%
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
    rgba(166, 29, 74, 0.04) 0%, 
    rgba(166, 29, 74, 0.02) 40%,
    transparent 70%
  );
  top: 20%;
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
  max-width: 720px;
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
  color: #52525b;

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
  box-shadow: 0 0 10px rgba(166, 29, 74, 0.3);
`;

// Display typography
const Title = styled(motion.h2)`
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #18181b;
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

// Body text
const Subtitle = styled(motion.p)`
  margin: 1rem 0 0;
  max-width: 600px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: #71717a;
  font-weight: 400;
  text-wrap: balance;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 520px;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-top: 0.75rem;
    max-width: 100%;
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
    max-width: 640px;
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
const CardItem = styled(motion.div)`
  min-width: 0;
  height: 100%;
  will-change: transform;
  border-radius: 24px;
  
  /* Multi-layer shadow for depth */
  filter: 
    drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 12px rgba(0, 0, 0, 0.03))
    drop-shadow(0 16px 32px rgba(0, 0, 0, 0.02));

  & > * {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))
      drop-shadow(0 8px 20px rgba(0, 0, 0, 0.04))
      drop-shadow(0 24px 48px rgba(166, 29, 74, 0.06));
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    border-radius: 20px;
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.03))
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.02));
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    border-radius: 18px;
    filter: 
      drop-shadow(0 1px 2px rgba(0, 0, 0, 0.025))
      drop-shadow(0 4px 8px rgba(0, 0, 0, 0.02));
  }
`;
