import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageSlider = ({ images, autoPlayInterval, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setLoadedImages(prev => new Set([...prev, nextIndex]));
        return nextIndex;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setLoadedImages(prev => new Set([...prev, nextIndex]));
      return nextIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      setLoadedImages(prev => new Set([...prev, nextIndex]));
      return nextIndex;
    });
  };

  return (
    <SliderContainer style={style}>
      <SlideWrapper>
        {images.map((image, index) => (
          <Slide
            key={index}
            $active={index === currentIndex}
          >
            <SlideImage
              src={image}
              alt={`Slide ${index + 1}`}
              width="800"
              height="600"
              loading={index === 0 ? "eager" : "lazy"}
              style={{ display: loadedImages.has(index) ? 'block' : 'none' }}
            />
          </Slide>
        ))}
      </SlideWrapper>

    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius: 20px;
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
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.$active ? 1 : 0};
  pointer-events: ${props => props.$active ? 'auto' : 'none'};
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default ImageSlider;