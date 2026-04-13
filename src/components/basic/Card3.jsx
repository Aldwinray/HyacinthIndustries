import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";

const Card3 = ({ image, title, description, tag, link, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const contentRef = React.useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isContentOverflowing =
          contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setIsOverflowing(isContentOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title, description]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsActiveMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = isMobile ? isActiveMobile : isHovered;

  const handleClick = () => {
    if (!link) return;

    if (isMobile && !isActiveMobile) {
      setIsActiveMobile(true);
      return;
    }

    window.location.href = link;
  };

  return (
    <CardWrapper
      as={motion.div}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <CardContent
        as={motion.div}
        initial={false}
        animate={{
          backgroundColor: isActive ? "transparent" : "#fff",
        }}
        transition={{ 
          duration: isActive ? 0.6 : 0.8,
          ease: "easeOut"
        }}
      >
        <ContentWrapper ref={contentRef} isOverflowing={isOverflowing} style={{ color: isActive ? "#fff" : "#333" }}>
          {Icon && (
            <IconWrapper>
              <Icon size={24} />
            </IconWrapper>
          )}
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </ContentWrapper>
        <AnimatePresence>
          {isActive && (
            <TagWrapper
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: "rgba(255, 0, 51, 0.6)",
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1
              }}
            >
              <Tag>
                {tag}
              </Tag>
              <StyledArrowIcon size={20} color="#fff"/>
            </TagWrapper>
          )}
        </AnimatePresence>
      </CardContent>
      <BackgroundImage isHovered={isActive} image={image} />
    </CardWrapper>
  );
};

export default Card3;

const CardWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;
  
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
      opacity: 0;
      z-index: 3;
      transition: opacity 0.3s ease;
    }
    
    &:active::before {
      opacity: 1;
    }
  }
`;

const CardContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
  padding: 20px;

  @media (hover: none) {
    &:active {
      background-color: transparent;
      h3, p { color: #fff; }
    }
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: 1;
  transition: opacity 0.8s ease-out;
  opacity: ${props => props.isHovered ? 1 : 0};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.isOverflowing ? '1.25rem' : '1.5rem'};
  height: calc(100% - 70px); /* Reserve space for TagWrapper */
  overflow-y: auto;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;

const Title = styled.h3`
  font-family: 'Lexend Medium', sans-serif;
  font-size: clamp(0.9rem, ${props => props.children?.length > 30 ? '1rem' : '1.25rem'}, 1.25rem);
  margin-bottom: 0.75rem;
  font-weight: 600;
  transition: color 0.8s ease-out;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  min-height: 2.6em;
`;

const Description = styled.p`
  font-family: 'Lexend Light', sans-serif;
  font-weight: 400;
  font-size: clamp(0.75rem, ${props => props.children?.length > 150 ? '0.8rem' : '0.9rem'}, 0.9rem);
  margin-bottom: 0.5rem;
  line-height: 1.4;
  transition: all 0.8s ease-out;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.children?.length > 200 ? '4' : '6'};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.75rem;
  transition: all 0.8s ease-out;
  backdrop-filter: blur(4px);
  background-color: #ff0033;
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.4);
  height: 40px; /* Fixed height */
`;

const Tag = styled.span`
  font-family: 'Lexend Light', sans-serif;
  font-weight: 600;
  font-size: clamp(0.75rem, ${props => props.children?.length > 20 ? '0.8rem' : '0.9rem'}, 0.9rem);
  color: white;
  padding: 4px 10px;

  background-color: rgba(0, 0, 0, 0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 170px;
`;

const StyledArrowIcon = styled(ArrowBigRightDash)`
  stroke-width: 2.5px;
  margin-left: 8px;
  color: rgba(0, 0, 0, 0.8);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-bottom: 16px;
  
  svg {
    color: #333;
  }
`;
