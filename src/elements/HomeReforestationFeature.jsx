import styled from "styled-components";
import ReforestationBg2 from "../assets/img/backgrounds/ReforestationBg3.webp";

export default function HomeReforestationFeature() {
  return (
    <Section>
      <Inner>
        <FeatureShell>
          <Content>
            <Eyebrow>Earth Month Newsletter</Eyebrow>
            <Title>Follow Hyacinth Reforestation Project</Title>
            <Text>
              Explore how Hyacinth Industries is planting trees for clients, tracking impact through GPS clusters, and building a long-term sustainability story designed for Earth Month and beyond.
            </Text>

            <HighlightRow>
              <HighlightPill>355 trees planned for 2025</HighlightPill>
              <HighlightPill>
                Client spotlight directory
              </HighlightPill>
              <HighlightPill>
                QR-enabled bark tags
              </HighlightPill>
            </HighlightRow>

            <ActionRow>
              <PrimaryButton href="/reforestation">Explore The Project</PrimaryButton>
              <SecondaryLink href="/faq">See Common Questions</SecondaryLink>
            </ActionRow>
          </Content>

          <SpotlightCard>
            <SpotlightLabel>Project Snapshot</SpotlightLabel>
            <SpotlightHeadline>One landing page. Multiple client stories.</SpotlightHeadline>
            <SpotlightText>
              Each participating client can be featured with a logo, tree count, and direct website link while the main project page stays centralized, SEO-friendly, and easy to maintain.
            </SpotlightText>

            <MetricGrid>
              <MetricCard>
                <MetricValue>2025</MetricValue>
                <MetricLabel>Launch Year</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>335</MetricValue>
                <MetricLabel>Projected Trees</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>1</MetricValue>
                <MetricLabel>Central Landing Page</MetricLabel>
              </MetricCard>
            </MetricGrid>
          </SpotlightCard>
        </FeatureShell>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: 5.25rem 20px 5.75rem;
  background:
    radial-gradient(circle at top right, rgba(180, 8, 33, 0.16), transparent 24%),
    radial-gradient(circle at 12% 85%, rgba(34, 97, 69, 0.12), transparent 30%),
    linear-gradient(180deg, #f4ede7 0%, #fcfaf8 52%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 4.25rem 16px 4.5rem;
  }
`;

const Inner = styled.div`
  width: min(1220px, 100%);
  margin: 0 auto;
`;

const FeatureShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
  gap: 1.4rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 2.7rem 2.5rem 2.4rem;
  border-radius: 34px;
  background-image: url(${ReforestationBg2});
  background-size: cover;
  background-position: center;
  color: #fff7f2;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 28px 60px rgba(52, 18, 24, 0.24);
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(9, 13, 12, 0.76) 0%, rgba(9, 13, 12, 0.56) 38%, rgba(9, 13, 12, 0.22) 72%, rgba(9, 13, 12, 0.12) 100%),
      linear-gradient(180deg, rgba(9, 13, 12, 0.18) 0%, rgba(9, 13, 12, 0.3) 100%);
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: auto -70px -80px auto;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 68%);
    z-index: 0;
    pointer-events: none;
  }

  @media (min-width: 1280px) {
    min-height: 640px;
  }

  @media (max-width: 640px) {
    padding: 2rem 1.35rem 1.9rem;
    border-radius: 26px;

    &::before {
      background:
        linear-gradient(180deg, rgba(10, 12, 11, 0.82) 0%, rgba(10, 12, 11, 0.56) 48%, rgba(10, 12, 11, 0.34) 100%);
    }
  }
`;

const Eyebrow = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 700;
  color: #f6d4b2;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #f4c44d;
    box-shadow: 0 0 0 6px rgba(244, 196, 77, 0.16);
  }
`;

const Title = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0;
  max-width: 10ch;
  font-family: var(--font-heading);
  font-size: clamp(2.65rem, 4.8vw, 4.4rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
  color: #fffdf8;
  text-shadow: 0 8px 28px rgba(0, 0, 0, 0.36);

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: clamp(2.2rem, 10vw, 3.3rem);
  }
`;

const Text = styled.p`
  position: relative;
  z-index: 1;
  max-width: 40rem;
  margin: 1.1rem 0 0;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 247, 242, 0.94);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    font-size: 0.97rem;
    line-height: 1.7;
  }
`;

const HighlightRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 1rem;
  border-radius: 999px;
  background: rgba(15, 15, 15, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  color: #fff9f5;
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.22);

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    margin-right: 0.55rem;
    border-radius: 50%;
    background: #f4c44d;
    flex-shrink: 0;
  }
`;

const ActionRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.1rem;
  margin-top: 1.7rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 1.4rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #f4c44d, #e4ab1c);
  color: #24150f;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: 0 16px 34px rgba(13, 13, 13, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 38px rgba(13, 13, 13, 0.26);
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SecondaryLink = styled.a`
  color: #fff7f0;
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(255, 255, 255, 0.45);
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: 640px) {
    align-self: flex-start;
  }
`;

const SpotlightCard = styled.aside`
  position: relative;
  padding: 2rem 1.6rem;
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, rgba(139, 13, 42, 0.06), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.97), rgba(249, 244, 238, 0.97)),
    #ffffff;
  border: 1px solid rgba(36, 24, 22, 0.08);
  box-shadow: 0 24px 46px rgba(17, 17, 17, 0.08);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    right: -36px;
    bottom: -46px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(244, 196, 77, 0.16), transparent 72%);
    pointer-events: none;
  }

  @media (max-width: 640px) {
    padding: 1.6rem 1.2rem;
    border-radius: 24px;
  }
`;

const SpotlightLabel = styled.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-family: var(--font-heading);
  font-size: 0.76rem;
  font-weight: 700;
  color: #8b0d2a;
`;

const SpotlightHeadline = styled.h3`
  margin: 0.75rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3vw, 2.45rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: #1e1f24;
`;

const SpotlightText = styled.p`
  margin: 1rem 0 0;
  font-family: var(--font-body);
  line-height: 1.78;
  color: #526070;
`;

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem;
  margin-top: 1.5rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  padding: 1.05rem 1rem;
  border-radius: 22px;
  background: linear-gradient(180deg, #fffaf5, #fff1df);
  border: 1px solid rgba(139, 13, 42, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72);
`;

const MetricValue = styled.div`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #8b0d2a;
`;

const MetricLabel = styled.p`
  margin: 0.45rem 0 0;
  font-family: var(--font-body);
  color: #5f6b78;
  line-height: 1.45;
`;

const Button = styled.a`
  display: inline-flex;
  margin-top: 1.3rem;
  padding: 0.85rem 1.1rem;
  border-radius: 999px;
  background: #8b0d2a;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;
