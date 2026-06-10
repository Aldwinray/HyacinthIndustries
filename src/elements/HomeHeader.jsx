import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeaderImage from "../assets/img/Logo.webp";
import HeaderBackground from "../assets/img/backgrounds/bg2.webp";

// Animation easing curves
const EASING = {
  smooth: [0.22, 1, 0.36, 1],
  snappy: [0.16, 1, 0.3, 1],
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASING.snappy },
  },
};

const HomeHeader = memo(() => {
  return (
    <HeroSection>
      <HeroBg />
      <HeroOverlay />

      <HeroInner>
        <HeroLeft
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Eyebrow as={motion.p} variants={itemVariants}>
            <EyebrowDot /> Fractional Executive Support
          </Eyebrow>

          <HeroTitle as={motion.h1} variants={titleVariants}>
            Close bigger deals
            <br />
            <GradientText>Build stronger brands</GradientText>
            <br />
            Execute faster
          </HeroTitle>

          <HeroSubtitle as={motion.p} variants={itemVariants}>
            Senior-level execution support for high-growth teams without the cost
            or drag of a full-time hire.
          </HeroSubtitle>

          <HeroNote as={motion.p} variants={itemVariants}>
            Embedded in your operations. Focused on results across brand, deals,
            and product.
          </HeroNote>

          <HeroActions as={motion.div} variants={itemVariants}>
            <PrimaryButton
              as={motion.a}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact/"
            >
              BOOK A STRATEGY CALL
              <ArrowRight size={18} />
            </PrimaryButton>

            <MetaBlock>
              <MetaTop>30 min • No commitment</MetaTop>
              <MetaBottom>See if we&apos;re a fit</MetaBottom>
            </MetaBlock>
          </HeroActions>
        </HeroLeft>

        <HeroRight>
          <HeroVisual>
            <LogoContainer
              as={motion.div}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.4,
                ease: EASING.snappy,
              }}
            >
              <LogoGlow />
              <LogoImage
                src={HeaderImage}
                alt="Hyacinth Industries logo"
                as={motion.img}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </LogoContainer>
          </HeroVisual>
        </HeroRight>
      </HeroInner>

      <ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroSection>
  );
});

export default HomeHeader;

// ============================================
// STYLED COMPONENTS
// ============================================

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 7rem 2rem 5rem;
  background: #0a0a0f;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 5.5rem 1.25rem 4rem;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 5rem 1rem 3.5rem;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${HeaderBackground});
  background-size: cover;
  background-position: center;
  transform: scale(1.01);
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(3, 7, 18, 0.85) 0%,
    rgba(3, 7, 18, 0.7) 40%,
    rgba(3, 7, 18, 0.4) 70%,
    rgba(3, 7, 18, 0.2) 100%
  );

  @media (max-width: 980px) {
    background: linear-gradient(
      180deg,
      rgba(3, 7, 18, 0.85) 0%,
      rgba(3, 7, 18, 0.6) 50%,
      rgba(3, 7, 18, 0.75) 100%
    );
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  width: min(1500px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: clamp(1rem, 2vw, 2rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
`;

const HeroLeft = styled.div`
  width: 100%;
  max-width: 980px;

  @media (max-width: 980px) {
    max-width: 100%;
    order: 2;
  }

  @media (max-width: 640px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    order: 1;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 0;
    width: 100%;
    justify-content: center;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 1.5rem;
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

  @media (max-width: 640px) {
    font-size: 0.7rem;
    margin-bottom: 1.25rem;
  }
`;

const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #C9A227;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(2.25rem, 4vw, 3.75rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: #fafaf9;

  @media (max-width: 980px) {
    font-size: clamp(2rem, 5.5vw, 3rem);
    line-height: 1.1;
  }

  @media (max-width: 640px) {
    font-size: clamp(1.75rem, 7vw, 2.25rem);
    line-height: 1.12;
  }

  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #C9A227 0%, #e8d58a 50%, #C9A227 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  margin: 1.25rem 0 0;
  max-width: 780px;
  font-size: clamp(1rem, 1.2vw, 1.35rem);
  line-height: 1.5;
  color: #cbd5e1;
  font-weight: 400;

  @media (max-width: 980px) {
    margin: 1.5rem auto 0;
    max-width: 600px;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.55;
    margin: 1.25rem 0 0;
    text-align: left;
    max-width: 100%;
  }
  
  @media (max-width: 380px) {
    font-size: 0.95rem;
  }
`;

const HeroNote = styled.p`
  margin: 1.25rem 0 0;
  padding-left: 1rem;
  border-left: 2px solid #9E1C24;
  font-size: clamp(0.9rem, 1.1vw, 1.05rem);
  line-height: 1.6;
  color: #b8c0cf;
  max-width: 900px;
  font-weight: 400;

  @media (max-width: 980px) {
    margin: 1.25rem auto 0;
    max-width: 550px;
  }

  @media (max-width: 640px) {
    margin: 1.25rem 0 0;
    padding-left: 0.875rem;
    font-size: 0.9rem;
    line-height: 1.55;
    text-align: left;
    max-width: 100%;
    border-left-width: 2px;
  }
`;

const HeroActions = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 980px) {
    justify-content: center;
    margin-top: 2.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    margin-top: 1.75rem;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 52px;
  padding: 0 1.5rem;
  border-radius: 12px;
  background: #9E1C24;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);

  &:hover {
    background: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(158, 28, 36, 0.35);
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 48px;
    font-size: 0.875rem;
    order: 1;
  }
`;

const MetaBlock = styled.div`
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 640px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-left: 0;
    padding-top: 1rem;
    margin-top: 0.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    order: 2;
  }

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

const MetaTop = styled.p`
  margin: 0;
  color: #f1f5f9;
  font-weight: 700;
  font-size: 1rem;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const MetaBottom = styled.p`
  margin: 0.2rem 0 0;
  color: #cbd5e1;
  font-size: 0.95rem;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
`;

const HeroVisual = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    justify-content: center;
  }

  @media (max-width: 640px) {
    justify-content: center;
    margin: 1rem 0;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: min(400px, 100%);
  aspect-ratio: 1.4 / 1;
  border-radius: 12px;
  display: grid;
  place-items: center;

  @media (max-width: 980px) {
    width: min(260px, 50%);
    aspect-ratio: 1.5 / 1;
  }

  @media (max-width: 640px) {
    width: 180px;
    aspect-ratio: auto;
    height: auto;
    border-radius: 0;
    position: relative;
    margin: 0 auto;
  }

  @media (max-width: 380px) {
    width: 140px;
  }
`;

const LogoGlow = styled.div`
  position: absolute;
  inset: 10% 8%;
  border-radius: 12px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    transparent 75%
  );
  filter: blur(20px);

  @media (max-width: 640px) {
    display: none;
  }
`;

const LogoImage = styled.img`
  position: relative;
  z-index: 2;
  width: min(88%, 480px);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 35px rgba(0, 0, 0, 0.42));

  @media (max-width: 980px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 180px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  }

  @media (max-width: 380px) {
    max-width: 140px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: 1.25rem;
  }

  @media (max-width: 640px) {
    bottom: 1rem;
    gap: 0.35rem;
  }
`;

const ScrollText = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 640px) {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
  }
`;

const ScrollArrow = styled.div`
  width: 18px;
  height: 18px;
  border-right: 2px solid rgba(255, 255, 255, 0.45);
  border-bottom: 2px solid rgba(255, 255, 255, 0.45);
  transform: rotate(45deg);
  animation: bounce 1.8s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    50% {
      transform: rotate(45deg) translateY(6px);
    }
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 640px) {
    width: 14px;
    height: 14px;
    border-width: 1.5px;
  }
`;
