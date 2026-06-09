import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LongTile = ({ title, caption, image, order }) => {
  const [currentOrder, setCurrentOrder] = useState(order);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCurrentOrder("right");
      } else {
        setCurrentOrder(order);
      }
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [order]);

  const ContentBlock = (
    <ContentSection>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
    </ContentSection>
  );

  const ImageBlock = (
    <ImageSection>
      <img src={image} alt={title} loading="lazy" />
    </ImageSection>
  );

  return (
    <TileContainer order={currentOrder}>
      {currentOrder === "left" ? (
        <>
          {ContentBlock}
          {ImageBlock}
        </>
      ) : (
        <>
          {ImageBlock}
          {ContentBlock}
        </>
      )}
    </TileContainer>
  );
};

LongTile.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  order: PropTypes.oneOf(["left", "right"]),
};

export default LongTile;

const TileContainer = styled.div`
  display: flex;
  width: calc(100%-4rem);
  height: 200px;
  max-height: 200px;
  margin: 2rem;
  margin-top: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    max-height: none;
    margin: 1rem;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 200px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media (max-width: 600px) {
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    align-items: center;
  }
`;

const ImageSection = styled.div`
  height: 200px;
  max-height: 200px;
  width: calc(250px - 4rem);
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-position: center;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 180px;
    max-height: 180px;
    padding: 1rem;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

const Title = styled.h2`
  font-family: "Lexend Medium", sans-serif;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`;

const Caption = styled.p`
  font-family: "Lexend Light", sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
