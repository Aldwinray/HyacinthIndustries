import { useState, useEffect, useRef, useCallback, memo } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Card4 from "../components/basic/Card4";
import BackgroundImg from "../assets/img/backgrounds/bg1.webp";
import { industriesData } from "../data/industriesData";
import { ChevronDown, Check } from "lucide-react";

// ============================================
// PREMIUM ANIMATION VARIANTS (Apple/Linear Inspired)
// ============================================

const EASING = {
  smooth: [0.23, 1, 0.32, 1],      // Primary entrance
  snappy: [0.16, 1, 0.3, 1],       // Exits and quick actions
  bounce: [0.34, 1.56, 0.64, 1],    // Playful interactions
};

const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: 8, 
    scale: 0.98,
    transition: { duration: 0.15, ease: EASING.snappy }
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.25, 
      ease: EASING.smooth,
      staggerChildren: 0.04,
      delayChildren: 0.03,
    }
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.98,
    transition: { duration: 0.15, ease: EASING.snappy }
  }
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: EASING.smooth }
  },
  exit: { 
    opacity: 0, 
    x: 4,
    transition: { duration: 0.1 }
  }
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: EASING.smooth 
    }
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    scale: 0.98,
    transition: { duration: 0.2, ease: EASING.snappy }
  }
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: EASING.smooth }
  }
};

const industries = Object.keys(industriesData);

const IndustriesExpertise = memo(() => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth <= 768);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const sliderRef = useRef(null);
  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  // Memoized derived values
  const currentIndustryData = industriesData[selectedIndustry];
  const shouldShowScroll = isSmallScreen;

  // Check scroll position for indicators
  const checkScrollPosition = useCallback(() => {
    if (!sliderRef.current || !isSmallScreen) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    // Could use this for scroll indicators if needed
  }, [isSmallScreen]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => Math.min(prev + 1, industries.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          if (focusedIndex >= 0) {
            setSelectedIndustry(industries[focusedIndex]);
            setIsOpen(false);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex]);

  // Reset scroll on industry change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedIndustry]);

  // Toggle dropdown
  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setFocusedIndex(industries.indexOf(selectedIndustry));
    }
  }, [isOpen, selectedIndustry]);

  // Select industry
  const selectIndustry = useCallback((industry) => {
    setSelectedIndustry(industry);
    setIsOpen(false);
  }, []);

  return (
    <Section>
      <BackgroundLayer />
      <AmbientGlow />
      
      <Inner>
        <HeaderBlock
          as={motion.div}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Eyebrow variants={headerItemVariants}>
            <EyebrowDot />
            <span>What We Do</span>
          </Eyebrow>

          <SectionTitle variants={headerItemVariants}>
            Industries & Expertise
          </SectionTitle>

          <SectionSubtitle variants={headerItemVariants}>
            Discover our comprehensive range of services across various industries
          </SectionSubtitle>

          <DropdownContainer
            ref={dropdownRef}
            variants={headerItemVariants}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <DropdownTrigger
              onClick={toggleDropdown}
              $isOpen={isOpen}
              $isHovering={isHovering}
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
            >
              <SelectedLabel>{selectedIndustry}</SelectedLabel>
              <ChevronWrapper $isOpen={isOpen}>
                <ChevronDown size={16} strokeWidth={2} />
              </ChevronWrapper>
            </DropdownTrigger>

            <AnimatePresence>
              {isOpen && (
                <DropdownMenu
                  ref={listRef}
                  role="listbox"
                  aria-label="Select an industry"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {industries.map((industry, index) => (
                    <DropdownOption
                      key={industry}
                      role="option"
                      aria-selected={selectedIndustry === industry}
                      $selected={selectedIndustry === industry}
                      $focused={focusedIndex === index}
                      variants={dropdownItemVariants}
                      onClick={() => selectIndustry(industry)}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      <OptionContent>
                        <OptionText $selected={selectedIndustry === industry}>
                          {industry}
                        </OptionText>
                        {selectedIndustry === industry && (
                          <CheckIconWrapper
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, ease: EASING.smooth }}
                          >
                            <Check size={14} strokeWidth={2.5} />
                          </CheckIconWrapper>
                        )}
                      </OptionContent>
                      {focusedIndex === index && selectedIndustry !== industry && (
                        <FocusRing layoutId="focusRing" />
                      )}
                    </DropdownOption>
                  ))}
                </DropdownMenu>
              )}
            </AnimatePresence>
          </DropdownContainer>
        </HeaderBlock>

        <CardsSection>
          <AnimatePresence mode="wait">
            <CardsGrid
              key={selectedIndustry}
              ref={sliderRef}
              $isMobile={shouldShowScroll}
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onScroll={checkScrollPosition}
            >
              {currentIndustryData.map((card, index) => (
                <CardContainer
                  key={`${selectedIndustry}-${index}`}
                  data-card="true"
                  variants={cardVariants}
                  custom={index}
                >
                  <Card4 {...card} />
                </CardContainer>
              ))}
            </CardsGrid>
          </AnimatePresence>

          {shouldShowScroll && (
            <MobileScrollIndicator
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <SwipeIndicator>
                <SwipeDot />
                <SwipeText>Swipe to explore</SwipeText>
              </SwipeIndicator>
            </MobileScrollIndicator>
          )}
        </CardsSection>
      </Inner>
    </Section>
  );
});

// ============================================
// PREMIUM STYLED COMPONENTS
// ============================================

// Performance: Noise texture removed - too expensive

const ambientPulse = keyframes`
  0%, 100% { opacity: 0.35; transform: translateX(-50%) scale(1); }
  50% { opacity: 0.5; transform: translateX(-50%) scale(1.05); }
`;

const swipePulse = keyframes`
  0%, 100% { transform: translateX(0); opacity: 0.6; }
  50% { transform: translateX(20px); opacity: 1; }
`;

// Section with premium layered background
const Section = styled.section`
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

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  
  /* Base background - REMOVED fixed attachment for performance */
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  
  /* Simplified gradient overlay - fewer layers */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 120% 60% at 50% 0%, rgba(166, 29, 74, 0.04) 0%, transparent 60%),
      linear-gradient(
        180deg,
        rgba(250, 250, 249, 0.97) 0%,
        rgba(250, 249, 247, 0.97) 100%
      );
  }
  
  /* Performance: Removed noise texture */
`;

const AmbientGlow = styled.div`
  position: absolute;
  width: 800px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center, 
    rgba(166, 29, 74, 0.04) 0%, 
    rgba(166, 29, 74, 0.02) 40%,
    transparent 70%
  );
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: ${ambientPulse} 12s ease-in-out infinite;
  pointer-events: none;
  filter: blur(40px);
`;

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
  text-align: center;
  margin-bottom: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;

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
  box-shadow: 0 0 8px rgba(166, 29, 74, 0.3);
`;

// Display typography with refined hierarchy
const SectionTitle = styled(motion.h2)`
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #18181b;
  max-width: 600px;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: clamp(1.875rem, 4.5vw, 2.75rem);
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    font-size: clamp(1.625rem, 5vw, 2.25rem);
    line-height: 1.15;
    max-width: 100%;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    font-size: 3.75rem;
    max-width: 700px;
  }
`;

// Body text with improved readability
const SectionSubtitle = styled(motion.p)`
  margin: 1rem 0 0;
  max-width: 480px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: #71717a;
  font-weight: 400;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 450px;
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
    max-width: 520px;
  }
`;

// Premium floating dropdown container
const DropdownContainer = styled(motion.div)`
  position: relative;
  width: min(320px, 90vw);
  margin: 2rem auto 0;
  z-index: 100;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    margin: 1.5rem auto 0;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    width: min(280px, 85vw);
    margin: 1.25rem auto 0;
  }
`;

// Floating pill trigger button - REMOVED backdrop-filter for performance
const DropdownTrigger = styled.button`
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  color: #18181b;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  transition: all 0.2s ${EASING.smooth};
  /* Performance: Removed backdrop-filter */
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.02),
    0 4px 12px rgba(0, 0, 0, 0.03);

  &:hover {
    background: #ffffff;
    border-color: rgba(166, 29, 74, 0.15);
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.02),
      0 8px 24px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(166, 29, 74, 0.3);
    outline-offset: 2px;
  }

  ${({ $isOpen }) => $isOpen && css`
    background: #ffffff;
    border-color: rgba(166, 29, 74, 0.2);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.04),
      0 16px 48px rgba(0, 0, 0, 0.06);
  `}
`;

const SelectedLabel = styled.span`
  flex: 1;
  text-align: left;
  letter-spacing: -0.01em;
  color: #18181b;
  font-weight: 500;
`;

const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $isOpen }) => $isOpen 
    ? 'linear-gradient(135deg, #a61d4a 0%, #7c1232 100%)' 
    : 'rgba(0, 0, 0, 0.04)'};
  color: ${({ $isOpen }) => $isOpen ? '#ffffff' : '#71717a'};
  transition: all 0.25s ${EASING.smooth};
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  
  svg {
    transition: transform 0.25s ease;
  }
`;

// Dropdown menu - REMOVED glassmorphism/backdrop-filter for performance
const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  z-index: 101;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.02),
    0 24px 48px rgba(0, 0, 0, 0.08);
  padding: 6px;
  /* Performance: Removed backdrop-filter */
  transform-origin: top center;
  max-height: 320px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// Dropdown option with focus ring animation
const DropdownOption = styled(motion.div)`
  position: relative;
  padding: 0.75rem 1rem;
  color: #52525b;
  cursor: pointer;
  border-radius: 14px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;

  &:hover {
    background: rgba(166, 29, 74, 0.04);
    color: #18181b;
  }

  ${({ $selected }) => $selected && css`
    background: rgba(166, 29, 74, 0.08);
    color: #7c1232;
    font-weight: 600;
  `}

  ${({ $focused }) => $focused && css`
    outline: none;
  `}
`;

const OptionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex: 1;
`;

const OptionText = styled.span`
  flex: 1;
  letter-spacing: -0.01em;
  ${({ $selected }) => $selected && 'font-weight: 600;'}
`;

const CheckIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #a61d4a;
`;

// Animated focus ring
const FocusRing = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 14px;
  border: 2px solid rgba(166, 29, 74, 0.3);
  pointer-events: none;
`;

// Cards section with improved spacing
const CardsSection = styled.div`
  position: relative;
  margin-top: 3rem;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    margin-top: 1.25rem;
  }

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    margin-top: 3.5rem;
  }
`;

// Responsive cards grid
const CardsGrid = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: stretch;
  gap: 1.5rem;
  padding: 0.5rem 0;

  /* Desktop: 4-column grid */
  flex-wrap: wrap;
  justify-content: center;

  /* Small desktop/Tablet landscape - 960px-1024px */
  @media (max-width: 1024px) {
    gap: 1.25rem;
  }

  /* Tablet - 768px */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 1.25rem;
    gap: 1rem;
    padding: 0.5rem 1.25rem 1.5rem;
    margin: 0 -1.25rem;
    width: calc(100% + 2.5rem);
    cursor: grab;
    -webkit-overflow-scrolling: touch;

    &:active {
      cursor: grabbing;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Mobile: Horizontal scroll */
  ${({ $isMobile }) => $isMobile && css`
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 1.25rem;
    gap: 1rem;
    padding: 0.5rem 1.25rem 1.5rem;
    margin: 0 -1.25rem;
    width: calc(100% + 2.5rem);
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `}

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    gap: 1.75rem;
    padding: 0.75rem 0;
  }
`;

// Card container with responsive sizing
const CardContainer = styled(motion.div)`
  display: flex;
  align-items: stretch;
  min-width: 0;
  scroll-snap-align: center;
  user-select: none;
  will-change: transform;

  /* Ultra-wide - 1440px+ */
  @media (min-width: 1440px) {
    flex: 0 0 calc((100% - 5.25rem) / 4);
    width: calc((100% - 5.25rem) / 4);
  }

  /* Desktop - 1280px-1439px */
  @media (min-width: 1280px) and (max-width: 1439px) {
    flex: 0 0 calc((100% - 4.5rem) / 4);
    width: calc((100% - 4.5rem) / 4);
  }

  /* Small desktop - 1024px-1279px */
  @media (min-width: 1024px) and (max-width: 1279px) {
    flex: 0 0 calc((100% - 3rem) / 3);
    width: calc((100% - 3rem) / 3);
  }

  /* Tablet landscape - 768px-1023px */
  @media (min-width: 768px) and (max-width: 1023px) {
    flex: 0 0 calc((100% - 1.5rem) / 2);
    width: calc((100% - 1.5rem) / 2);
  }

  /* Mobile sizing with peek preview - 768px and below */
  @media (max-width: 767px) {
    flex: 0 0 clamp(280px, 85vw, 340px);
    width: clamp(280px, 85vw, 340px);
    scroll-snap-align: center;
  }

  /* Small mobile - 480px */
  @media (max-width: 480px) {
    flex: 0 0 clamp(260px, 82vw, 320px);
    width: clamp(260px, 82vw, 320px);
  }

  & > * {
    width: 100%;
    height: 100%;
  }
`;

// Mobile scroll indicator with refined animation
const MobileScrollIndicator = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  /* Tablet - 768px */
  @media (max-width: 768px) {
    margin-top: 1.25rem;
  }

  /* Mobile - 480px */
  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const SwipeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 100px;

  /* Mobile - 480px */
  @media (max-width: 480px) {
    padding: 0.375rem 0.875rem;
    gap: 0.5rem;
  }
`;

const SwipeDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a61d4a 0%, #7c1232 100%);
  animation: ${swipePulse} 2s ease-in-out infinite;
`;

const SwipeText = styled.span`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  color: #71717a;
  font-weight: 500;
  letter-spacing: 0.02em;

  /* Mobile - 480px */
  @media (max-width: 480px) {
    font-size: 0.6875rem;
  }
`;

export default IndustriesExpertise;
