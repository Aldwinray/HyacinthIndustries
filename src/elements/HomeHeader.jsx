import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Assets
import HeaderImage from "../assets/img/Logo.webp";
import bg2 from '../assets/img/backgrounds/bg2.webp';

export default function HomeHeader() {

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
  };

  return (
    <MainWrapper>
      <ParallaxBg />
      <ContentWrapper>
        <Wrapper id="home">
          <LeftSide 
            as={motion.div}
            {...fadeInLeft}
            className="flexCenter"
          >
            <div>
              <HeroEyebrow
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
              >
                Fractional Executive Consulting
              </HeroEyebrow>
              <BrandHeading
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.44 }}
              >
                Hyacinth Industries LLC
              </BrandHeading>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Fractional Executive Support That Helps You win bigger deals, build stronger
                brands, and launch better products
              </motion.h3>
              <HeroLead
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.62 }}
              >
                Senior leadership support for high-growth teams that need execution power across
                brand, deals, and product without the cost and drag of a full-time executive hire.
              </HeroLead>
              <HeroActionRow
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.74 }}
              >
                <HeroCta href="/contact">Schedule a Discovery Call</HeroCta>
                <HeroMeta>30 minutes. No commitment. Let&apos;s see if we&apos;re a fit.</HeroMeta>
              </HeroActionRow>
            </div>
          </LeftSide>
          <RightSide
            as={motion.div}
            {...fadeInRight}
          >
            <ImageWrapper>
              <Img
                src={HeaderImage}
                alt="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{ scale: 1.05 }}
              />
            </ImageWrapper>
          </RightSide>
        </Wrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  min-height: clamp(700px, 92vh, 900px);
  margin-top: 0;
  overflow: clip;
  position: relative;
  margin-bottom: 0;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 0;
    padding: 0 0 24px;
  }
`;

const ParallaxBg = styled.div`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: url(${bg2}) center/cover no-repeat;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0.15)
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 760px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1160px) {
    padding: 0 28px;
  }

  @media (max-height: 820px) and (min-width: 801px) {
    min-height: 700px;
    padding-top: 0.75rem;
    padding-bottom: 1rem;
  }

  @media (max-width: 800px) {
    height: auto;
    min-height: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0.85rem 18px 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 14px 1rem;
  }
`;

const LeftSide = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 5rem;

  &::before {
    content: '';
    position: absolute;
    width: 76%;
    top: 0;
    bottom: -160px;
    left: -13%;
    background: rgba(0, 0, 0, 0.42);
    clip-path: polygon(18% 0%, 100% 0%, 88% 100%, 0% 100%);
    z-index: -1;
    overflow-x: visible;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 44rem;
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: clamp(1.85rem, 3.35vw, 2.8rem);
      line-height: 1.02;
      text-align: left;
    }
  }

  @media (max-width: 1160px) {
    width: 64%;

    &::before {
      width: 84%;
      top: 0;
      bottom: -130px;
      left: -15%;
    }

    > div {
      max-width: 40rem;
    }

    h3 {
      font-size: clamp(1.75rem, 3.7vw, 2.5rem);
    }
  }

  @media (max-width: 920px) {
    width: 100%;
    padding: 1.75rem 1.2rem;
    min-height: 0;

    &::before {
      width: 100%;
      height: 100%;
      left: 0;
      clip-path: none;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35));
    }

    > div {
      max-width: 100%;
    }
  }

  @media (max-height: 820px) and (min-width: 801px) {
    margin-top: 2.5rem;

    > div {
      max-width: 38rem;
    }

    h3 {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      max-width: 18ch;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    order: 2;
    margin-top: 0;
    padding: 0.9rem 0 0;
    height: auto;

    &::before {
      width: 100%;
      left: 0;
      clip-path: none;
      top: 0;
      bottom: 0;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.32));
    }

    > div {
      max-width: 100%;
      padding: 0 0.95rem 1rem;
    }
  }

  h3 {
    font-weight: 600;
    font-size: clamp(1.85rem, 3.45vw, 2rem);
    line-height: 1.01;
    letter-spacing: -0.045em;
    color: #fff;
    margin: 0;
    max-width: 30ch;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: clamp(1.7rem, 7vw, 2.4rem);
      line-height: 1.04;
      max-width: 18ch;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: clamp(1.5rem, 8vw, 2rem);
    }
  }
`;

const HeroEyebrow = styled(motion.p)`
  margin: 0 0 0.95rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  color: #f4c44d;
  font-family: var(--font-heading);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    padding: 0.45rem 0.7rem;
  }
`;

const BrandHeading = styled(motion.h2)`
  margin: 0 0 0.7rem;
  font-family: var(--font-heading);
  font-size: clamp(2.3rem, 4vw, 3rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  font-weight: 800;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: clamp(2rem, 9vw, 2.8rem);
    line-height: 0.95;
  }
`;

const HeroLead = styled(motion.p)`
  max-width: 31rem;
  margin: 1rem 0 0;
  font-family: var(--font-body);
  font-size: clamp(0.92rem, 1.05vw, 0.98rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.86);

  @media (max-height: 820px) and (min-width: 801px) {
    max-width: 28rem;
    font-size: 0.9rem;
    line-height: 1.55;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 0.94rem;
    line-height: 1.6;
  }
`;

const HeroActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem 1rem;
  margin-top: 1.15rem;

  @media (max-height: 820px) and (min-width: 801px) {
    margin-top: 0.95rem;
    gap: 0.75rem 0.85rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.15rem;
  border-radius: 999px;
  border: 1px solid #5b3cc4;
  background: linear-gradient(180deg, #6d4ee6, #5637c4);
  box-shadow: 0 10px 24px rgba(94, 60, 196, 0.22);
  color: #fff;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(94, 60, 196, 0.28);
    color: #fff;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const HeroMeta = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.8);
  max-width: 18rem;

  @media (max-height: 820px) and (min-width: 801px) {
    max-width: 15rem;
    font-size: 0.82rem;
  }

  @media (max-width: 800px) {
    max-width: 100%;
    font-size: 0.84rem;
  }
`;

const RightSide = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (min-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 1160px) {
    width: 36%;
  }

  @media (max-height: 820px) and (min-width: 801px) {
    width: 34%;
  }

  @media (max-width: 920px) {
    width: 72%;
    order: 1;
    margin: 0 auto 1rem;
  }

  @media (max-width: 800px) {
    width: 82%;
  }

  @media (max-width: 560px) {
    width: 92%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;


  @media (min-width: 1000px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Img = styled(motion.img)`
  width: 100%;
  height: auto;
  transform-origin: center;
  filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.18));

  @media (min-width: 1000px) {
    filter: drop-shadow(0 30px 70px rgba(0, 0, 0, 0.22));
  }

  @media (max-width: 800px) {
    max-width: 260px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    max-width: 220px;
  }
`;
