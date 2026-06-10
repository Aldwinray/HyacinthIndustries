import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card4 = ({ image, title, description, link, icon: Icon }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const isExternal = (url) => /^https?:\/\//i.test(url);

  const isActive = isMobile ? isActiveMobile : isHovered;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToLink = () => {
    if (!link) return;
    if (isExternal(link)) {
      window.location.assign(link);
      return;
    }
    navigate(link);
  };

  const handleClick = () => {
    if (isMobile) {
      if (!isActiveMobile) {
        setIsActiveMobile(true);
        return;
      }
      goToLink();
      return;
    }

    goToLink();
  };

  return (
    <CardWrapper
      as={motion.article}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
      initial={false}
      animate={{ y: isActive ? -4 : 0 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      $clickable={!!link || isMobile}
    >
      <BackgroundImage
        as={motion.div}
        image={image}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1.03 : 1,
        }}
        transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
      />

      <CardContent
        as={motion.div}
        initial={false}
        animate={{
          backgroundColor: isActive
            ? "rgba(17, 17, 19, 0.18)"
            : "rgba(255, 255, 255, 0.97)",
          borderColor: isActive
            ? "rgba(255,255,255,0.14)"
            : "rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.28 }}
      >
        {Icon && (
          <IconWrapper
            as={motion.div}
            animate={{
              y: isActive ? -2 : 0,
              scale: isActive ? 0.98 : 1,
            }}
            transition={{ duration: 0.22 }}
          >
            <Icon size={22} />
          </IconWrapper>
        )}

        <ContentWrapper>
          <TextArea
            as={motion.div}
            animate={{ y: isActive ? -2 : 0 }}
            transition={{ duration: 0.22 }}
          >
            <Title
              as={motion.h3}
              animate={{
                color: isActive ? "#ffffff" : "#23252b",
              }}
              transition={{ duration: 0.22 }}
            >
              {title}
            </Title>

            <Description
              as={motion.p}
              animate={{
                color: isActive ? "rgba(255,255,255,0.88)" : "#666666",
              }}
              transition={{ duration: 0.22 }}
            >
              {description}
            </Description>
          </TextArea>

          <BottomArea>
            <AnimatePresence mode="wait">
              {isActive ? (
                <LearnMoreText
                  as={motion.button}
                  type="button"
                  key="cta"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.22 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToLink();
                  }}
                >
                  Learn More  
                </LearnMoreText>
              ) : (
                <BottomSpacer key="spacer" />
              )}
            </AnimatePresence>
          </BottomArea>   
        </ContentWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default Card4;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: visible;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: translateY(-6px);
  }

  &:active {
    transform: scale(0.985) translateY(0);
  }
`;

const CardContent = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 36px 20px 18px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.97);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.3s ease;

  ${CardWrapper}:hover & {
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.12),
      0 4px 8px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 34px 16px 14px;
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.24) 0%,
      rgba(0, 0, 0, 0.4) 46%,
      rgba(0, 0, 0, 0.7) 100%
    );
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;

    &::after {
      border-radius: 12px;
    }
  }
`;

const IconWrapper = styled(motion.div)`
  position: absolute;
  top: -26px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #f3de58;
  border: 3px solid rgba(255, 255, 255, 0.96);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.14),
    0 2px 6px rgba(0, 0, 0, 0.08);
  z-index: 10;

  svg {
    width: 22px;
    height: 22px;
    color: #9E1C24;
    stroke-width: 2px;
    display: block;
  }

  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
    top: -22px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  text-align: center;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 1rem 0.9rem 0.5rem;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 0.95rem 0.65rem 0.4rem;
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  font-size: 1.1rem;
  line-height: 1.28;
  letter-spacing: -0.02em;
  margin: 0 0 0.7rem;
  color: inherit;
  text-align: center;
  min-height: calc(1.28em * 2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.55rem;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
  color: inherit;
  text-align: center;
  min-height: calc(1.55em * 4);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 0.84rem;
  }
`;

const BottomArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 56px;
  padding-top: 0.35rem;
`;

const LearnMoreText = styled.div`
  min-width: max-content;
  font-family: ${({ theme }) => theme.typography.learnfont};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: #ffffff;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: #9E1C24;
  box-shadow: 0 4px 12px rgba(158, 28, 36, 0.25);
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-color: #7a161c;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(158, 28, 36, 0.35);
  }

  @media (max-width: 768px) {
    font-size: 0.82rem;
    padding: 0.6rem 0.9rem;
  }
`;

const BottomSpacer = styled.div`
  height: 42px;
`;
