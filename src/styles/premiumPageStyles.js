import { css } from "styled-components";

export const sectionSpacing = css`
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const sectionContainer = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const sectionTitle = css`
  font-family: var(--font-heading);
  font-size: clamp(2.1rem, 4vw, 3.1rem);
  color: #1d1d1f;
  text-align: center;
  margin: 0 0 3.25rem;
  line-height: 1.08;
  letter-spacing: -0.035em;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 84px;
    height: 4px;
    margin: 1.1rem auto 0;
    border-radius: 999px;
    background: linear-gradient(90deg, #dc143c, #990000);
  }
`;

export const supportingText = css`
  font-family: var(--font-body);
  font-size: 1.08rem;
  line-height: 1.9;
  color: #5d6169;
`;

export const introText = css`
  ${supportingText};
  max-width: 52rem;
  margin: 0 auto 3rem;
  text-align: center;
`;

export const surfaceCard = css`
  background: linear-gradient(180deg, #ffffff, #fcfbfb);
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 20px;
  box-shadow: 0 14px 36px rgba(17, 17, 17, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 44px rgba(17, 17, 17, 0.12);
  }
`;

export const heroSection = css`
  position: relative;
  overflow: hidden;
  min-height: clamp(420px, 62vh, 620px);
`;

export const heroOverlay = css`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(9, 10, 14, 0.78), rgba(9, 10, 14, 0.52)),
    linear-gradient(180deg, rgba(220, 20, 60, 0.18), rgba(0, 0, 0, 0.08));
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const heroContent = css`
  max-width: 58rem;
  padding: 0 2rem;
`;

export const heroEyebrow = css`
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

export const heroTitle = css`
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.04em;
  margin: 0 0 1rem;
`;

export const heroSubtitle = css`
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 42rem;
  margin: 0 auto 2rem;
`;

export const pageTitle = css`
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  color: #131313;
  text-align: center;
  margin: 0 0 1.2rem;
  line-height: 1.03;
  letter-spacing: -0.04em;
`;

export const primaryButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.95rem 2rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #dc143c, #990000);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 1.02rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease,
    color 0.25s ease,
    text-shadow 0.25s ease;
  box-shadow: 0 16px 36px rgba(153, 0, 0, 0.24);

  &:link,
  &:visited,
  &:active {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background: linear-gradient(135deg, #c11235, #7f0000);
    color: #ffe7b8;
    text-decoration: none;
    text-shadow: 0 1px 10px rgba(255, 231, 184, 0.24);
    transform: translateY(-3px);
    box-shadow: 0 22px 44px rgba(153, 0, 0, 0.3);
    filter: none;
  }
`;

export const lightButton = css`
  ${primaryButton};
  background: #ffffff;
  color: #dc143c;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14);
`;

export const processNumber = css`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #dc143c, #990000);
  color: #ffffff;
  font-family: var(--font-heading);
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(220, 20, 60, 0.22);
`;
