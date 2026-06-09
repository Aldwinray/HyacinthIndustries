// Card2.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card2 = ({ image, title, description, tag, link }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const isExternal = (url) => /^https?:\/\//i.test(url);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsActiveMobile(false);
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
    >
      <ImageSection>
        <CardImage
          as={motion.div}
          $image={image}
          animate={{
            scale: isActive ? 1.06 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        />
        <ImageOverlay
          as={motion.div}
          animate={{
            opacity: isActive ? 0.4 : 0,
          }}
          transition={{ duration: 0.35 }}
        />

        <AnimatePresence>
          {isActive && (
            <ImageBadge
              as={motion.div}
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            >
              <BadgeText>{tag}</BadgeText>
              <ArrowRight size={14} />
            </ImageBadge>
          )}
        </AnimatePresence>
      </ImageSection>

      <ContentSection>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <BottomRow>
          <TagPill
            as={motion.div}
            animate={{
              background: isActive
                ? "rgba(139, 13, 42, 0.06)"
                : "rgba(0, 0, 0, 0.03)",
              borderColor: isActive
                ? "rgba(139, 13, 42, 0.12)"
                : "rgba(0, 0, 0, 0.05)",
            }}
            transition={{ duration: 0.25 }}
          >
            <TagDot
              as={motion.span}
              animate={{
                background: isActive ? "#8b0d2a" : "#9ca3af",
              }}
              transition={{ duration: 0.25 }}
            />
            <TagLabel
              as={motion.span}
              animate={{
                color: isActive ? "#8b0d2a" : "#6b7280",
              }}
              transition={{ duration: 0.25 }}
            >
              {tag}
            </TagLabel>
          </TagPill>

          <ArrowWrap
            as={motion.div}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -6,
            }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <ArrowRight size={16} />
          </ArrowWrap>
        </BottomRow>
      </ContentSection>

      <HoverBorder
        as={motion.div}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      />
    </CardWrapper>
  );
};

export default Card2;

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 380px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 32px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 768px) {
    min-height: 360px;
    border-radius: 18px;
  }
`;

const HoverBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  border: 2px solid rgba(139, 13, 42, 0.15);
  pointer-events: none;
  z-index: 5;

  @media (max-width: 768px) {
    border-radius: 18px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const CardImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(139, 13, 42, 0.1) 0%,
    rgba(139, 13, 42, 0.3) 100%
  );
  pointer-events: none;
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 3;
  color: #1a1d20;
`;

const BadgeText = styled.span`
  font-family: var(--font-heading);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.35rem 1.35rem 1.25rem;

  @media (max-width: 768px) {
    padding: 1.15rem 1.15rem 1rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.6rem;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #1a1d20;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const Description = styled.p`
  margin: 0;
  flex: 1;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.65;
  color: #6b7280;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.86rem;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.15rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const TagPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;
`;

const TagDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ca3af;
  flex-shrink: 0;
`;

const TagLabel = styled.span`
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  white-space: nowrap;
`;

const ArrowWrap = styled.div`
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
