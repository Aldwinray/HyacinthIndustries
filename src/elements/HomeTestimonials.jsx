import styled from "styled-components";
import { motion } from "framer-motion";
import { caseStudies, testimonials } from "../data/testimonials";
import {
  introText,
  sectionTitle,
  surfaceCard,
} from "../styles/premiumPageStyles";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HomeTestimonials() {
  return (
    <Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Inner>
        <HeadingBlock as={motion.div} variants={fadeUp}>
          <Eyebrow>Social Proof</Eyebrow>
          <Title>Client testimonials and anonymized case studies</Title>
          <Intro>
            Trust is easier to earn when visitors can see how Hyacinth supports real teams. This section gives you two proof formats: short quotes for fast credibility and brief case studies for more context.
          </Intro>
        </HeadingBlock>

        <TestimonialsGrid>
          {testimonials.map((item, index) => (
            <QuoteCard
              as={motion.article}
              key={item.id}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <QuoteMark aria-hidden="true">&quot;</QuoteMark>
              <Quote>{item.quote}</Quote>
              <Outcome>{item.outcome}</Outcome>
              <Attribution>
                <strong>{item.attribution}</strong>
                <span>{item.company}</span>
              </Attribution>
            </QuoteCard>
          ))}
        </TestimonialsGrid>

        <CaseStudyHeader as={motion.div} variants={fadeUp}>
          <CaseStudyTitle>Short case studies</CaseStudyTitle>
          <CaseStudyIntro>
            Use this format when a client prefers anonymity but you still want enough detail to show the kind of work Hyacinth delivers.
          </CaseStudyIntro>
        </CaseStudyHeader>

        <CaseStudyGrid>
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              as={motion.article}
              key={study.id}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
            >
              <CaseStudyMeta>{study.client}</CaseStudyMeta>
              <CaseStudyCardTitle>{study.title}</CaseStudyCardTitle>

              <CaseStudyBlock>
                <Label>Situation</Label>
                <p>{study.situation}</p>
              </CaseStudyBlock>

              <CaseStudyBlock>
                <Label>What Hyacinth did</Label>
                <p>{study.action}</p>
              </CaseStudyBlock>

              <CaseStudyBlock>
                <Label>Measurable result</Label>
                <p>{study.result}</p>
              </CaseStudyBlock>
            </CaseStudyCard>
          ))}
        </CaseStudyGrid>
      </Inner>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  padding: 6rem 2rem;
  background: 
    radial-gradient(circle at top left, rgba(139, 13, 42, 0.08), transparent 24%),
    linear-gradient(180deg, #fffdf9 0%, #f8f2f0 100%);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeadingBlock = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  ${sectionTitle};
  margin-bottom: 1.4rem;
`;

const Intro = styled.p`
  ${introText};
  margin-bottom: 0;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const QuoteCard = styled.article`
  ${surfaceCard};
  position: relative;
  padding: 2rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 5px;
    background: linear-gradient(90deg, #8b0d2a, #c89b2c);
  }
`;

const QuoteMark = styled.span`
  display: block;
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 0.8;
  color: rgba(139, 13, 42, 0.18);
  margin-bottom: 0.8rem;
`;

const Quote = styled.p`
  margin: 0 0 1.25rem;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.8;
  color: #2e3238;  
`;

const Outcome = styled.p`
  margin: 0 0 1.2rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Attribution = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: #5d6169;
  font-family: var(--font-body);
  font-size: 0.95rem;

  strong {
    color: #17181b;
  }
`;

const CaseStudyHeader = styled.div`
  text-align: center;
  margin-bottom: 1.75rem;
`;

const CaseStudyTitle = styled.h3`
  margin: 0 0 0.75rem;
  color: #1d1d1f;
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 2.8vw, 2.15rem);
  line-height: 1.08;
`;

const CaseStudyIntro = styled.p`
  margin: 0 auto;
  max-width: 46rem;
  color: #5d6169;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.8;
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled.article`
  ${surfaceCard};
  padding: 2rem;
`;

const CaseStudyMeta = styled.p`
  margin: 0 0 0.65rem;
  color: #8b0d2a;
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const CaseStudyCardTitle = styled.h4`
  margin: 0 0 1.2rem;
  color: #1b1e22;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  line-height: 1.2;
`;

const CaseStudyBlock = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0;
    color: #4d535c;
    font-family: var(--font-body);
    font-size: 0.98rem;
    line-height: 1.75;
  }
`;

const Label = styled.p`
  margin: 0 0 0.35rem;
  color: #17181b;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;
