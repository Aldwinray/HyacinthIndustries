import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Card4 from '../components/basic/Card4';
import BackgroundImg from '../assets/img/backgrounds/bg1.webp';
import { industriesData } from '../data/industriesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Animation variants
const dropdownVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05
    }
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: -10
  }
};

const sliderVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const industries = Object.keys(industriesData);

const softPulse = keyframes`
  0% {
    box-shadow:
      0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent),
      0 0 10px color-mix(in srgb, var(--accentSoft) 70%, transparent);
  }
  70% {
    box-shadow:
      0 0 0 16px color-mix(in srgb, var(--accent) 0%, transparent),
      0 0 14px color-mix(in srgb, var(--accentSoft) 45%, transparent);
  }
  100% {
    box-shadow:
      0 0 0 0 color-mix(in srgb, var(--accent) 0%, transparent),
      0 0 0 color-mix(in srgb, var(--accentSoft) 0%, transparent);
  }
`;

const idleBob = keyframes`
  0% { transform: translateY(-50%) translateY(0); }
  50% { transform: translateY(-50%) translateY(-4px); }
  100% { transform: translateY(-50%) translateY(0); }
`;

const IndustriesExpertise = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
      checkArrowVisibility();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    // Check arrow visibility when industry changes
    checkArrowVisibility();
    // Reset scroll position when industry changes
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
      setShowLeftArrow(false);
      setShowRightArrow(true);
    }
  }, [selectedIndustry]);
  
  const checkArrowVisibility = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleScroll = () => {
    checkArrowVisibility();
  };
  
  const scrollLeft = () => {
    if (!sliderRef.current) return;
    const sliderStyles = window.getComputedStyle(sliderRef.current);
    const gap = parseFloat(sliderStyles.gap || '0');
    const firstCard = sliderRef.current.querySelector('[data-card="true"]');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 280;
    const step = isSmallScreen ? 1 : 2;
    const scrollAmount = (cardWidth + gap) * step;
    const currentScroll = sliderRef.current.scrollLeft;
    const targetScroll = Math.max(0, currentScroll - scrollAmount);
    
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };
  
  const scrollRight = () => {
    if (!sliderRef.current) return;
    const sliderStyles = window.getComputedStyle(sliderRef.current);
    const gap = parseFloat(sliderStyles.gap || '0');
    const firstCard = sliderRef.current.querySelector('[data-card="true"]');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 280;
    const step = isSmallScreen ? 1 : 2;
    const scrollAmount = (cardWidth + gap) * step;
    const currentScroll = sliderRef.current.scrollLeft;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
    
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

const cardCount = industriesData[selectedIndustry]?.length ?? 0;
const shouldShowScroll = isSmallScreen;
const shouldCenterCards = !isSmallScreen;
const shouldShowArrows = false;

  return (
    <Container>
      <Header>
        <Title
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Industries & Expertise
        </Title>
        <TitleUnderline />
        <Subtitle
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0}}
        >
          Discover our comprehensive range of services across various industries
        </Subtitle>
        
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown} isOpen={isOpen}>
            {selectedIndustry}
          </DropdownButton>
          <AnimatePresence>
            {isOpen && (
              <DropdownList
                variants={dropdownVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {industries.map((industry) => (
                  <DropdownItem
                    key={industry}
                    variants={itemVariants}
                    selected={selectedIndustry === industry}
                    onClick={() => {
                      setSelectedIndustry(industry);
                      setIsOpen(false);
                    }}
                  >
                    {industry}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </AnimatePresence>
        </DropdownContainer>

        <SliderContainer>
          {shouldShowArrows && (
            <ArrowButton
              left
              type="button"
              onClick={scrollLeft}
              disabled={!showLeftArrow}
              aria-label="Scroll cards left"
            >
              <ChevronLeft size={24} />
            </ArrowButton>
          )}
          <CardSlider
            showScroll={shouldShowScroll}
            shouldCenter={shouldCenterCards}
            as={motion.div}
            variants={sliderVariants}
            key={selectedIndustry}
            initial="visible"
            animate="visible"
            ref={sliderRef}
            onScroll={handleScroll}
          >
            {industriesData[selectedIndustry].map((card, index) => (
              <CardWrapper
                as={motion.div}
                key={index}
                data-card="true"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
              >
                <Card4 {...card} />
              </CardWrapper>
            ))}
          </CardSlider>
          {shouldShowArrows && (
            <ArrowButton
              right
              type="button"
              onClick={scrollRight}
              disabled={!showRightArrow}
              aria-label="Scroll cards right"
            >
              <ChevronRight size={24} />
            </ArrowButton>
          )}
        </SliderContainer>
      </Header>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 4rem 0;
  overflow-x: hidden;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 640px) {
    & > * {
      padding: 0 1rem;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #1e1f24;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 4rem);
  
  @media (max-width: 560px) {
    font-size: 3rem;
  }
`;

const TitleUnderline = styled.div`
  width: 200px;
  height: 4px;
  margin: 0.75rem auto 2rem;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    #c89b2c
  );
  opacity: 0.95;
  box-shadow: 0 8px 18px rgba(139, 13, 42, 0.12);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: #5a6572;
  margin-bottom: 2rem;
  font-family: ${ props => props.theme.typography.learnfont};
`;

const DropdownContainer = styled.div`
  position: relative;
  width: min(300px, 100%);
  margin: 0 auto 3rem;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1.5px solid rgba(139, 13, 42, 0.15);
  border-radius: 14px;
  color: #1f2430;
  font-size: 1.05rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: all 0.25s ease;
  position: relative;
  box-shadow: 0 16px 28px rgba(17, 17, 17, 0.05);

  &:hover {
    background: #ffffff;
    border-color: rgba(139, 13, 42, 0.32);
    box-shadow: 0 20px 34px rgba(17, 17, 17, 0.08);
  }

  &:focus-visible {
    outline: 3px solid rgba(201, 162, 39, 0.35); 
    outline-offset: 2px;
  }

  &::after {
    content: '▼';
    position: absolute;
    right: 1rem;
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    color: #8b0d2a;
  }
`;

const DropdownList = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.6rem;
  overflow: hidden;
  z-index: 10;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(139, 13, 42, 0.12);
  border-radius: 14px;
  box-shadow: 0 22px 44px rgba(17, 17, 17, 0.1);
`;

const DropdownItem = styled(motion.div)`
  padding: 1rem 1.3rem;
  color: #2b2f36;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;

  &:hover {
    background: rgba(139, 13, 42, 0.05);
    color: #8b0d2a;
    padding-left: 1.6rem;
  }

  ${props => props.selected && `
    background: rgba(139, 13, 42, 0.08);
    color: #8b0d2a;
    font-weight: 700;
  `}
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: visible;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 0.25rem;
    padding-top: 1rem;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  translate: translateY(-50%);
  ${props => (props.left ? "left: -33px;" : "right: -18px;")}
  z-index: 10;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 999px;
  border: 1px solid rgba(139, 13, 42, 0.14);
  background: rgba(255, 255, 255, 0.96);
  color: #8b0d2a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 16px 28px rgba(17, 17, 17, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-50%) scale(1.06);
    background: #fffaf5;
    box-shadow: 0 20px 32px rgba(17, 17, 17, 0.12);
  }

  &:focus-visible {
    outline: 3px solid rgba(201, 162, 39, 0.28);
    outline-offset: 4px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${props => (props.left ? "left: 0;" : "right: 0;")}
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const CardSlider = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0 1rem;
  width: 100%;
  align-items: stretch;

  flex-wrap: ${({ showScroll }) => (showScroll ? "nowrap" : "wrap")};
  justify-content: ${({ shouldCenter, showScroll }) => 
    showScroll ? "flex-start" : shouldCenter ? "center" : "flex-start"};

  overflow-x: ${({ showScroll }) => (showScroll ? "auto" : "visible")};
  overflow-y: visible;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  ${({ showScroll }) => 
    showScroll
    ? `
      scroll-snap-type: x mandatory;
      scroll-padding-inline: 0.25rem;
      cursor: grab;
    `
      
    : `
      scroll-snap-type: none;
      cursor: default;
    `}

  &:active {
    cursor: ${({ showScroll }) => (showScroll ? "grabbing" : "default")};
  }

  &::-webkit-scrollbar {
    height: ${({ showScroll }) => (showScroll ? "8px" : "0")};
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: rgba(42, 42, 42, 0.6);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primarySoft};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1.5rem 0.5rem 1rem;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const CardWrapper = styled(motion.div)`
  flex: 0 0 auto;
  width: 280px;
  user-select: none;
  display: flex;
  align-items: stretch;
  scroll-snap-align: start;

  @media (min-width: 769px) {
    width: min(280px, calc(25% - 1.125rem));
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export default IndustriesExpertise;
