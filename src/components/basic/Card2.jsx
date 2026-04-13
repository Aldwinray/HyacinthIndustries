import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";

const Card2 = ({ image, title, description, tag }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isActiveMobile, setIsActiveMobile] = useState(false);
  const isActive = isMobile ? isActiveMobile : isHovered;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMarginLeft = () => {
    if (isMobile) {
      return isActive ? 120 : 0;
    }
    return isActive ? 250 : 0;
  };

  const getImageTransform = () => {
    if (isMobile) {
      return isActive ? -120 : 0;
    }
    return isActive ? -250 : 0;
  };

  return ( 
    <CardContainer
      as={motion.div}
      initial={{ marginLeft: 0 }}
      animate={{ marginLeft: getMarginLeft() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={() => {
        if (isMobile) {
          setIsActiveMobile((prev) => !prev);
        }
      }}
      isHovered={isActive}
    >
      <BackgroundImage
        style={{ backgroundImage: `url(${image})` }}
        animate={{ 
          x: getImageTransform(),
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <CardWrapper
        as={motion.div}
        animate={{ y: isActive ? -5 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <ContentWrapper
          as={motion.div}
          animate={{
            backgroundColor: isActive ? "rgb(51, 51, 51)" : "rgba(255, 255, 255, 0.95)"
          }}
          transition={{ duration: 0.3 }}
        >
          <ContentContainer>
            <Title
              as={motion.h3}
              animate={{
                color: isActive ? "#ffffff" : "#333333"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </Title>
            <Description
              as={motion.p}
              animate={{
                color: isActive ? "#cccccc" : "#666666"
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </Description>
            <TagWrapper
              as={motion.div}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tag
                as={motion.span}
                animate={{
                  backgroundColor: "#FFD700",
                  color: "#333333"
                }}
                transition={{ duration: 0.3 }}
              >
                {tag}
              </Tag>
              <StyledArrowIcon 
                size={20} 
                color="#FFD700"
              />
            </TagWrapper>
          </ContentContainer>
        </ContentWrapper>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card2;

const CardContainer = styled.div`
  font-family: 'Lexend', sans-serif;
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;
  overflow: visible;
  height: 350px;
  margin-right: 20px;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 5%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: 315px;
  background-size: cover;
  background-position: center;
  z-index: 0;
  opacity: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const CardWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  height: 350px;

  overflow: visible;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  flex-shrink: 0;
  z-index: 1;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.95);
  
  overflow: visible;
  transition: all 0.3s ease-in-out;
  
  @media (hover: none) {
    &:active {
      background-color: rgb(51, 51, 51);
      h3 { color: #ffffff; }
      p { color: #cccccc; }
    }
  }
`;

const ContentContainer = styled.div`
  padding: 25px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
  flex-shrink: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  flex: 1;
  overflow-y: auto;
`;

const Tag = styled.span`
  padding: 7px 15px;
  font-size: 14px;
  display: inline-block;
  background-color: #FFD700;
  font-weight: 500;
`;

const TagWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: space-between;
  width: 100%;
`;

const StyledArrowIcon = styled(ArrowBigRightDash)`
  stroke-width: 2px;
  color: #FFD700;
  margin-right: 8px;
`;
