import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigRightDash, Edit2, Check } from "lucide-react";

const Card1 = ({ image, title, description, tag, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedTag, setEditedTag] = useState(tag);

  const handleSave = () => {
    onUpdate?.({
      title: editedTitle,
      description: editedDescription,
      tag: editedTag
    });
    setIsEditing(false);
  };

  return (
    <CardWrapper
      as={motion.div}
      image={image}
      isHovered={isHovered}
      animate={{ y: isHovered ? -5 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ContentWrapper isHovered={isHovered}>
        {isEditing ? (
          <>
            <Input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Enter title"
            />
            <TextArea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Enter description"
            />
            <Input
              value={editedTag}
              onChange={(e) => setEditedTag(e.target.value)}
              placeholder="Enter tag"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSave();
                }
              }}
            />
          </>
        ) : (
          <>
            <Title>{editedTitle}</Title>
            <Description>{editedDescription}</Description>
          </>
        )}
      </ContentWrapper>
      <AnimatePresence>
        {!isEditing && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <TagWrapper>
              <Tag>{editedTag}</Tag>
              <StyledArrowIcon size={20} />
            </TagWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </CardWrapper>
  );
};

export default Card1;

const CardWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 250px;
  min-height: 350px;
  max-height: 350px;

  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-5px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    filter: blur(${props => props.isHovered ? '8px' : '0'});
    transition: filter 0.3s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: transparent;
  transform: translateY(${props => props.isHovered ? '-25px' : '0'});
  transition: transform 0.3s ease;
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #fff;
  font-family: 'Lexend', sans-serif;
`;

const Description = styled.p`
  font-size: 14px;
  color: #f0f0f0;
  font-weight: 300;
  font-family: 'Lexend', sans-serif;
  line-height: 1.4;
`;

const Tag = styled.span`
  background-color: rgba(255, 0, 20, 0.8);
  padding: 7px 15px;
  
  font-size: 13px;
  color: #fff;
  font-family: 'Lexend', sans-serif;
  font-weight: 300;
`;

const TagWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledArrowIcon = styled(ArrowBigRightDash)`
  stroke-width: 2px;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.9);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
  resize: vertical;
  background: rgba(255, 255, 255, 0.9);
`;