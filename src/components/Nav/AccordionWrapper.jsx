import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AccordionWrapper = ({ children }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Separate accordions and content from children
  const accordions = [];
  const contents = [];

  React.Children.forEach(children, (child) => {
    if (child.type === Accordion) {
      accordions.push(child);
    } else if (child.type === AccordionContent) {
      contents.push(child);
    }
  });

  return (
    <AccordionContainer>
      {accordions.map((accordion, index) => (
        <AccordionItemWrapper key={index} >
          {React.cloneElement(accordion, {
            active: activeAccordion === index,
            onClick: () => setActiveAccordion(activeAccordion === index ? null : index)
          })}
          {React.cloneElement(contents[index], {
            active: activeAccordion === index
          })}
        </AccordionItemWrapper>
      ))}
    </AccordionContainer>
  );
};

const Accordion = ({ children, icon, active, onClick }) => {
  return (
    <AccordionButton active={active} onClick={onClick}>
      <AccordionHeader>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <span>{children}</span>
      </AccordionHeader>
    </AccordionButton>
  );
};

const AccordionContent = ({ active, children }) => {
  return (
    <motion.div
      initial={{ maxHeight: 0, opacity: 0, padding: 0 }}
      animate={active ? { maxHeight: 1500, opacity: 1, padding: '1rem' } : { maxHeight: 0, opacity: 0, padding: 0 }}
      exit={{ maxHeight: 0, opacity: 0, padding: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ overflow: 'hidden', background: '#ffffff', color: '#333333' }}
    >
      {children}
    </motion.div>
  );
};

const AccordionContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionItemWrapper = styled(motion.div)`
  font-family: "Lexend Light", sans-serif;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: ${props => props.active ? '#1a1a1a' : '#2a2a2a'};
  color: #ffffff;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:hover {
    background: ${props => props.active ? '#1a1a1a' : '#333333'};
  }

  &::after {
    content: '${props => props.active ? '−' : '+'}';
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    right: 1.5rem;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export { AccordionWrapper, Accordion, AccordionContent };
export default AccordionWrapper;