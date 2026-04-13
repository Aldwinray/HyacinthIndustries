import { useState } from "react";
import styled from "styled-components";
import FeatureCard from "../components/basic/Card1";
import { motion } from "framer-motion";
import Card3 from "../components/basic/Card3";
import { sectionTitle } from "../styles/premiumPageStyles";
import BackgroundImg from "../assets/img/backgrounds/bg2.webp";

// assets
import card1 from "../assets/img/industries/office.webp";
import card2 from "../assets/img/industries/coding.webp";
import card3 from "../assets/img/industries/healthcare.webp";

const FeatureContent = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: card1,
      title: "Professional Outsourcing",
      description: "Transform your business with our comprehensive outsourcing solutions. From administrative support to specialized medical services, we deliver excellence across industries.",
      tag: "Learn More"
    },
    {
      id: 2,
      image: card2,
      title: "Technical Expertise",
      description: "Access world-class engineering and web design services. Our team delivers cutting-edge solutions in CAD, product development, UI/UX design, and more.",
      tag: "Explore Services"
    },
    {
      id: 3,
      image: card3,
      title: "Healthcare Solutions",
      description: "Revolutionize healthcare delivery with our virtual nursing, emergency assistance, and medical support services. Experience healthcare innovation at its best.",
      tag: "Discover Healthcare"
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
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

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleCardUpdate = (index, updatedData) => {
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], ...updatedData };
    setCards(newCards);
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
        Feature Content
      </Title>
      <CardHolder
        as={motion.div}
        variants={containerVariants}
      >
        {cards.map((card, index) => (
          <motion.div key={card.id} variants={cardVariants}>
            <FeatureCard 
              image={card.image}
              title={card.title}
              description={card.description}
              tag={card.tag}
              onUpdate={(updatedData) => handleCardUpdate(index, updatedData)}
            />
          </motion.div>
        ))}
      </CardHolder>
    </Wrapper>
  );
};

export default FeatureContent;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 720px;
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
`;

const Title = styled.h1`
  ${sectionTitle};
  margin: 0 0 3.5rem;
`;

const CardHolder = styled.div`   
  width: min(1200px, calc(100% - 4rem));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  padding: 0;
`;
