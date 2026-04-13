import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageSlider = ({ images, autoPlayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <SliderContainer>
      <SlideWrapper>
        {images.map((image, index) => (
          <Slide
            key={index}
            $active={index === currentIndex}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        ))}
      </SlideWrapper>

      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotContainer>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%); //clipping the image slider
  max-width: 100vw;
  @media (max-width: 768px) {
    height: 40vh;
    margin-bottom: 2rem;
  } 
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.$active ? 1 : 0};
  pointer-events: ${props => props.$active ? 'auto' : 'none'};
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Dot = styled.button`
  font-size: 1px;
  width: 16px;
  height: 8px;
  border-radius: 8px;   
  border: none;
  background: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  }
`;

export default ImageSlider;