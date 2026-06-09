import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FlipCard = ({ icon, title, caption }) => {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    return (
      <CardContainer>
        <StaticCard>
          <IconContainer>
            <div className="icon-container">{icon}</div>
          </IconContainer>
          <h2>{title}</h2>
          <p>{caption}</p>
        </StaticCard>
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      <CardInner
        as={motion.div}
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.3 }}
      >
        <CardFront
          as={motion.div}
          initial={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.3 }}
        >
          <div className="front">
            <IconContainer>
              <div className="icon-container">{icon}</div>
            </IconContainer>
            <h2>{title}</h2>
          </div>
        </CardFront>
        <CardBack
          as={motion.div}
          initial={{ rotateY: 180 }}
          whileHover={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="back">
            <h2>{title}</h2>
            <p>{caption}</p>
          </div>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default FlipCard;

const CardContainer = styled.div`
  background-color: transparent;
  width: 250px;
  min-width: 250px; 
  height: 200px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden; /* Prevent flickering */
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  will-change: transform;
`;

const CardFront = styled(CardFace)`
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  h2{
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;

const CardBack = styled(CardFace)`
  padding: 1rem;
  background-color: #4a90e2;
  color: white;
  transform: rotateY(180deg);
  h2{
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
  p{
    font-size: 0.8rem;
  }
`;

const StaticCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #f8f9fa;
  color: #212529;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  h2 {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin: 0;
  }
  
  p {
    font-size: 0.8rem;
    margin: 0.5rem 0 0 0;
    color: #6c757d;
  }
`;

const IconContainer = styled.div`
  .icon-container {
    width: 80px; /* Adjust this value as needed */
    height: 80px; /* Adjust this value as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto; /* Center the icon container */
  }
`;