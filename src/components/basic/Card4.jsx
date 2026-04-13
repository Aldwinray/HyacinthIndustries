import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Card4 = ({ image, title, description, link, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = React.useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const isContentOverflowing = 
          contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setIsOverflowing(isContentOverflowing);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [title, description]);

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <CardWrapper
      as={motion.div}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <CardContent
        as={motion.div}
        initial={false}
        animate={{
          backgroundColor: isHovered ? "transparent" : "#fff",
        }}
        transition={{ 
          duration: isHovered ? 0.6 : 0.8,
          ease: "easeOut"
        }}
      >
        {Icon && (
          <IconWrapper>
            <Icon size={32} />
          </IconWrapper>
        )}
        <ContentWrapper ref={contentRef} isOverflowing={isOverflowing} style={{ color: isHovered ? "#fff" : "#333" }}>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
        </ContentWrapper>  
        {isHovered && (
            <LearnMoreText
              as={motion.div}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Learn More
            </LearnMoreText>
          )} 
      </CardContent>
      <BackgroundImage isHovered={isHovered} image={image} />
    </CardWrapper>
  );
};

export default Card4;

const CardWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 290px;
  max-height: 290px;
  margin-top: 32px;
  padding-top: 32px;
  overflow: visible;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  border-radius: 8px;

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
  padding: 18px;
  padding-top: 36px;
  border-radius: 8px;

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
  border-radius: 8px;
  
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
    border-radius: 8px;
  }
`;

const ContentWrapper = styled.div`
  font-family: ${props => props.theme.typography.bodyFont};
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  padding-top: 2.25rem;
  padding-bottom: 3.25rem;
  height: 100%;
  overflow: hidden;

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
  font-family: ${props => props.theme.typography.headingFont};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  font-size: clamp(0.9rem, ${props => props.children?.length > 30 ? '1rem' : '1.25rem'}, 1.25rem);
  margin-bottom: 0.75rem;
  color: inherit;
  transition: color 0.3s ease;
  text-align: center;
  line-height: 1.4;
  min-height: calc(1.4em * 2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-family: ${props => props.theme.typography.bodyFont};
  font-weight: ${props => props.theme.typography.fontWeights.normal};
  font-size: clamp(0.75rem, ${props => props.children?.length > 150 ? '0.78rem' : '0.88rem'}, 0.88rem);
  color: inherit;
  transition: color 0.3s ease;
  margin-bottom: 1rem;
  line-height: 1.45;
  min-height: calc(1.45em * 5);
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffeb6a;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 3px solid white;
  
  svg {
    color: #FF0033;
    stroke-width: 2px;
    scale: 1.2;
  }
`;

const LearnMoreText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 27%;
  transform: translateX(-50%);

  font-family: ${props => props.theme.typography.learnfont};
  font-weight: ${props => props.theme.typography.fontWeights.medium};
  font-size: ${props => props.theme.typography.fontSizes.sm};

  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  z-index: 5;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDeep};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
