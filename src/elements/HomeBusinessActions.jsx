import React from "react";
import styled from "styled-components";
import FeatureCard from "../components/basic/Card2";
import { motion } from "framer-motion";
import bg1 from '../assets/img/backgrounds/bg1.webp';
import { sectionTitle } from "../styles/premiumPageStyles";

// assets
import card1 from "../assets/img/HomeBusinessTransformationActions/modernSolutions.webp";
import card2 from "../assets/img/HomeBusinessTransformationActions/process.webp";
import card3 from "../assets/img/HomeBusinessTransformationActions/innovation.webp";

const BusinessActions = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Wrapper
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Title
        as={motion.h1}
        variants={titleVariants}
      >
        Business Transformation Actions
      </Title>
      <CardHolder
        as={motion.div}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <FeatureCard 
            image={card1}
            title="Digital Transformation"
            description="Modernize your business with cutting-edge digital solutions that drive efficiency and growth."
            tag="Learn More"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <FeatureCard 
            image={card2}
            title="Process Optimization"
            description="Streamline operations and maximize productivity with our proven optimization strategies."
            tag="Discover"
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <FeatureCard 
            image={card3}
            title="Innovation Strategy"
            description="Stay ahead of the competition with forward-thinking innovation and strategic planning."
            tag="Explore Now"
          />
        </motion.div>
      </CardHolder>
    </Wrapper>
  );
};

export default BusinessActions;

const Wrapper = styled.div`
  width: 100%;
  min-height: 720px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5.5rem 0 6rem;
  background: url(${bg1}) center/cover no-repeat;
  //background-color: #222;
  overflow: visible;
  margin: 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(10, 10, 12, 0.82), rgba(10, 10, 12, 0.72));
    z-index: 1;
  }
`;

const Title = styled.h1`
  ${sectionTitle};
  color: #ffffff;
  margin: 0 0 3.5rem;
  z-index: 2;
`;

const CardHolder = styled.div`
  width: min(1200px, calc(100% - 4rem));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  padding: 0;
  z-index: 2;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;
