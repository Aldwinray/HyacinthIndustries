import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      onClick={scrollToTop}
      $isVisible={isVisible}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} strokeWidth={2} />
    </ScrollButton>
  );
};

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transform: ${({ $isVisible }) => ($isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.9)")};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(225, 29, 72, 0.4);
  z-index: 999;

  &:hover {
    transform: ${({ $isVisible }) => ($isVisible ? "translateY(-4px) scale(1.05)" : "translateY(16px) scale(0.9)")};
    box-shadow: 0 8px 24px rgba(225, 29, 72, 0.5);
  }

  &:active {
    transform: ${({ $isVisible }) => ($isVisible ? "translateY(-2px) scale(0.98)" : "translateY(16px) scale(0.9)")};
  }

  svg {
    display: block;
  }

  @media (max-width: 1024px) {
    bottom: 1.75rem;
    right: 1.75rem;
  }

  @media (max-width: 768px) {
    bottom: 10rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }

  @media (max-width: 480px) {
    bottom: 9rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
  }

  @media (max-width: 320px) {
    bottom: 8rem;
    right: 0.5rem;
    width: 36px;
    height: 36px;
  }
`;

export default ScrollToTop;
