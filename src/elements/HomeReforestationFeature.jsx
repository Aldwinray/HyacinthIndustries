import styled, { keyframes } from "styled-components";
import ReforestationBg2 from "../assets/img/backgrounds/ReforestationBg3.webp";

export default function HomeReforestationFeature() {
  return (
    <Section>
      <Inner>
        <SectionHeader>
          <SectionEyebrow>
            <EyebrowDot />
            Earth Month 2026
          </SectionEyebrow>
          <SectionTitle>Hyacinth Reforestation Project</SectionTitle>
          <SectionSubtitle>
            Planting trees for clients, tracking impact through GPS clusters, and
            building a long-term sustainability story.
          </SectionSubtitle>
        </SectionHeader>

        <FeatureShell>
          <Content>
            <ContentInner>
              <Badge>
                <BadgeIcon>🌱</BadgeIcon>
                Now Planting
              </Badge>

              <Title>
                Growing forests,
                <br />
                <TitleAccent>one client at a time.</TitleAccent>
              </Title>

              <Text>
                Explore how Hyacinth Industries is planting trees for clients,
                tracking impact through GPS clusters, and building a long-term
                sustainability story designed for Earth Month and beyond.
              </Text>

              <HighlightRow>
                <HighlightPill>
                  <PillIcon>🌳</PillIcon>
                  355 trees planned for 2025
                </HighlightPill>
                <HighlightPill>
                  <PillIcon>📍</PillIcon>
                  GPS-tracked clusters
                </HighlightPill>
                <HighlightPill>
                  <PillIcon>🏷️</PillIcon>
                  QR-enabled bark tags
                </HighlightPill>
              </HighlightRow>

              <ActionRow>
                <PrimaryButton href="/reforestation/">
                  Explore The Project
                  <ButtonArrow>→</ButtonArrow>
                </PrimaryButton>
                <SecondaryButton href="/faq/">Common Questions</SecondaryButton>
              </ActionRow>
            </ContentInner>
          </Content>

          <RightColumn>
            <SpotlightCard>
              <SpotlightHeadline>
                One landing page.
                <br />
                Multiple client stories.
              </SpotlightHeadline>
              <SpotlightText>
                Each participating client is featured with a logo, tree count, and
                direct website link — centralized, SEO-friendly, and easy to maintain.
              </SpotlightText>
              <SpotlightDivider />
              <MetricGrid>
                <MetricCard>
                  <MetricIconWrap>
                    <MetricEmoji>📅</MetricEmoji>
                  </MetricIconWrap>
                  <MetricContent>
                    <MetricValue>2025</MetricValue>
                    <MetricLabel>Launch Year</MetricLabel>
                  </MetricContent>
                </MetricCard>
                <MetricCard>
                  <MetricIconWrap>
                    <MetricEmoji>🌲</MetricEmoji>
                  </MetricIconWrap>
                  <MetricContent>
                    <MetricValue>335</MetricValue>
                    <MetricLabel>Projected Trees</MetricLabel>
                  </MetricContent>
                </MetricCard>
                <MetricCard $full>
                  <MetricIconWrap>
                    <MetricEmoji>🔗</MetricEmoji>
                  </MetricIconWrap>
                  <MetricContent>
                    <MetricValue>1</MetricValue>
                    <MetricLabel>Central Landing Page</MetricLabel>
                  </MetricContent>
                </MetricCard>
              </MetricGrid>
            </SpotlightCard>
          </RightColumn>
        </FeatureShell>
      </Inner>
    </Section>
  );
}

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
  50% { transform: translateY(-12px) rotate(8deg); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  padding: 6rem 20px 6.5rem;
  background: linear-gradient(180deg, #f8f6f3 0%, #f2eeea 40%, #faf8f6 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34, 97, 69, 0.04), transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(244, 196, 77, 0.05), transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 16px 4.5rem;
  }
`;

const Inner = styled.div`
  width: min(1260px, 100%);
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem 0.45rem 0.65rem;
  border-radius: 999px;
  background: rgba(34, 97, 69, 0.06);
  border: 1px solid rgba(34, 97, 69, 0.1);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: #226145;
  letter-spacing: 0.04em;
  margin-bottom: 1.25rem;
`;

const EyebrowDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2d8a5e;
  box-shadow: 0 0 0 3px rgba(45, 138, 94, 0.15);
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #1a1d20;
  line-height: 1.1;
`;

const SectionSubtitle = styled.p`
  margin: 0.85rem auto 0;
  max-width: 540px;
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.65;
  color: #6b7280;
`;

const FeatureShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(340px, 0.75fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  border-radius: 28px;
  background-image: url(${ReforestationBg2});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  isolation: isolate;
  min-height: 540px;
  display: flex;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(8, 20, 14, 0.15) 0%,
      rgba(8, 20, 14, 0.4) 35%,
      rgba(8, 20, 14, 0.82) 70%,
      rgba(8, 20, 14, 0.92) 100%
    );
    z-index: 1;
  }

  @media (min-width: 1280px) {
    min-height: 600px;
  }

  @media (max-width: 640px) {
    min-height: 480px;
    border-radius: 22px;
  }
`;

const ContentInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 2.5rem 2.75rem;
  width: 100%;

  @media (max-width: 640px) {
    padding: 1.75rem 1.5rem 2rem;
  }
`;

const FloatingLeaf = styled.span`
  position: absolute;
  z-index: 2;
  font-size: 1.6rem;
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.9rem 0.35rem 0.55rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.02em;
  margin-bottom: 1.25rem;
`;

const BadgeIcon = styled.span`
  font-size: 0.9rem;
`;

const Title = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.2vw, 3.6rem);
  line-height: 1;
  letter-spacing: -0.05em;
  font-weight: 800;
  color: #ffffff;

  @media (max-width: 640px) {
    font-size: clamp(2rem, 8vw, 2.8rem);
  }
`;

const TitleAccent = styled.span`
  background: linear-gradient(90deg, #a8e6c3, #f4c44d, #a8e6c3);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 6s linear infinite;
`;

const Text = styled.p`
  max-width: 38rem;
  margin: 1rem 0 0;
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.75);

  @media (max-width: 640px) {
    font-size: 0.93rem;
    line-height: 1.65;
  }
`;

const HighlightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
`;

const HighlightPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-body);
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

const PillIcon = styled.span`
  font-size: 0.85rem;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ButtonArrow = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
  font-size: 1.05rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 1.5rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #2d8a5e 0%, #226145 100%);
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.2),
    0 8px 24px rgba(34, 97, 69, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.2),
      0 12px 32px rgba(34, 97, 69, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);

    ${ButtonArrow} {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 50px;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 1.3rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.22);
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 50px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SpotlightCard = styled.aside`
  position: relative;
  padding: 2.25rem 2rem;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 32px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 1.75rem 1.5rem;
    border-radius: 20px;
  }
`;

const SpotlightIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(34, 97, 69, 0.08), rgba(34, 97, 69, 0.03));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #226145;
  margin-bottom: 1.25rem;
`;

const SpotlightLabel = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: #2d8a5e;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const SpotlightHeadline = styled.h3`
  margin: 0.65rem 0 0;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 1.85rem);
  line-height: 1.1;
  letter-spacing: -0.035em;
  font-weight: 800;
  color: #1a1d20;
`;

const SpotlightText = styled.p`
  margin: 0.85rem 0 0;
  font-family: var(--font-body);
  font-size: 0.93rem;
  line-height: 1.7;
  color: #6b7280;
`;

const SpotlightDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.06), transparent);
  margin: 1.5rem 0;
`;

const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 16px;
  background: #fafaf9;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: background 0.2s ease;
  grid-column: ${(props) => (props.$full ? "1 / -1" : "auto")};

  &:hover {
    background: #f5f4f2;
  }
`;

const MetricIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(34, 97, 69, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const MetricEmoji = styled.span`
  font-size: 1rem;
`;

const MetricContent = styled.div`
  min-width: 0;
`;

const MetricValue = styled.div`
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #1a1d20;
  line-height: 1.1;
`;

const MetricLabel = styled.p`
  margin: 0.15rem 0 0;
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: #9ca3af;
  line-height: 1.3;
`;

const ImpactStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.35rem 2rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.03);

  @media (max-width: 640px) {
    padding: 1.15rem 1.25rem;
    border-radius: 16px;
  }
`;

const ImpactItem = styled.div`
  text-align: center;
  flex: 1;
`;

const ImpactNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #2d8a5e;
  line-height: 1;
`;

const ImpactText = styled.p`
  margin: 0.3rem 0 0;
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
`;

const ImpactDivider = styled.div`
  width: 1px;
  height: 32px;
  background: rgba(0, 0, 0, 0.06);
`;