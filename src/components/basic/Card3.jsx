import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card3 = ({ image, title, description, tag, link, icon: Icon }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const isExternal = (url) => /^https?:\/\//i.test(url);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsActiveMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = isMobile ? isActiveMobile : isHovered;

  const handleClick = () => {
    if (!link && isMobile) {
      setIsActiveMobile((prev) => !prev);
      return;
    }

    if (!link) return;

    if (isMobile && !isActiveMobile) {
      setIsActiveMobile(true);
      return;
    }

    if (isExternal(link)) {
      window.location.assign(link);
      return;
    }
    navigate(link);
  };

  return (
    <CardWrapper
      as={motion.article}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: link || isMobile ? "pointer" : "default" }}
      initial={false}
      animate={{ y: isActive ? -4 : 0 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
    >
      <BackgroundImage
        as={motion.div}
        image={image}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1.03 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      />

      <CardContent
        as={motion.div}
        initial={false}
        animate={{
          backgroundColor: isActive
            ? "rgba(18, 18, 20, 0.2)"
            : "rgba(255, 255, 255, 0.97)",
          borderColor: isActive
            ? "rgba(255,255,255,0.14)"
            : "rgba(0,0,0,0.06)",
        }}
        transition={{
          duration: isActive ? 0.35 : 0.28,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <ContentWrapper>
          {Icon && (
            <IconWrapper
              as={motion.div}
              animate={{
                backgroundColor: isActive
                  ? "rgba(255,255,255,0.16)"
                  : "#f7f7f8",
                borderColor: isActive
                  ? "rgba(255,255,255,0.14)"
                  : "rgba(0,0,0,0.05)",
              }}
              transition={{ duration: 0.25 }}
            >
              <Icon size={22} />
            </IconWrapper>
          )}

          <TextArea>
            <Title
              as={motion.h3}
              animate={{
                color: isActive ? "#ffffff" : "#23262f",
              }}
              transition={{ duration: 0.24 }}
            >
              {title}
            </Title>

            <Description
              as={motion.p}
              animate={{
                color: isActive ? "rgba(255,255,255,0.86)" : "#667085",
              }}
              transition={{ duration: 0.24 }}
            >
              {description}
            </Description>
          </TextArea>

          <BottomArea>
            <AnimatePresence mode="wait">
              {isActive ? (
                <TagWrapper
                  as={motion.div}
                  key="cta"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.24 }}
                >
                  <Tag>{tag}</Tag>
                  <StyledArrowIcon size={18} />
                </TagWrapper>
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

export default Card3;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 360px;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  isolation: isolate;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    min-height: 340px;
    border-radius: 20px;
  }
`;

const CardContent = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.97);
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 20px;
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.14) 0%,
      rgba(0, 0, 0, 0.28) 45%,
      rgba(0, 0, 0, 0.72) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const IconWrapper = styled(motion.div)`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: #f7f7f8;
  border: 1px solid rgba(0, 0, 0, 0.05);

  svg {
    color: ${({ theme }) => theme.colors?.primary || "#ff0033"};
    stroke-width: 2px;
  }
`;

const TextArea = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h3`
  font-family: "Lexend", sans-serif;
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  line-height: 1.22;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.8rem;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.22em * 2);
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 0.65rem;
  }
`;

const Description = styled.p`
  font-family: "Lexend", sans-serif;
  font-weight: 400;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 0.86rem;
    line-height: 1.56;
  }
`;

const BottomArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 60px;
  padding-top: 0.85rem;
`;

const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-width: min(100%, 220px);
  max-width: 100%;
  padding: 0.68rem 0.95rem;
  border-radius: 14px;
  background: rgba(255, 0, 51, 0.7);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
`;

const Tag = styled.span`
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.82rem;
  }
`;

const StyledArrowIcon = styled(ArrowBigRightDash)`
  stroke-width: 2.4px;
  color: #ffffff;
  flex-shrink: 0;
`;

const BottomSpacer = styled.div`
  height: 44px;
`;
