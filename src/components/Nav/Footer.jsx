import React from "react";
import styled from "styled-components";
import {
  EnvelopeSimple,
  Phone,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { FaXTwitter } from "react-icons/fa6";
import logo from "./../../assets/img/Logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <TopRow>
          <BrandColumn>
            <BrandLockup href="/">
              <BrandMark
                src={logo}
                alt="Hyacinth Industries logo"
                loading="lazy"
                decoding="async"
              />
              <BrandText>
                <BrandName>Hyacinth Industries</BrandName>
                <BrandSubhead>Fractional Executive Consulting</BrandSubhead>
              </BrandText>
            </BrandLockup>

            <Description>
              Strategic consulting for leaders and organizations building
              stronger brands, better deals, and sharper execution.
            </Description>
          </BrandColumn>

          <LinkColumn>
            <SectionTitle>Quick Links</SectionTitle>
            <LinkList>
              <ListItem><FooterLink href="/">Home</FooterLink></ListItem>
              <ListItem><FooterLink href="/about/">About</FooterLink></ListItem>
              <ListItem><FooterLink href="/services/">Services</FooterLink></ListItem>
              <ListItem><FooterLink href="/contact/">Contact</FooterLink></ListItem>
              <ListItem><FooterLink href="/faq/">FAQ</FooterLink></ListItem>
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <SectionTitle>Contact</SectionTitle>
            <LinkList>
              <ListItem>
                <ContactLink href="mailto:info@hyacinthindustriesllc.com">
                  <EnvelopeSimple size={20} weight="regular" />
                  info@hyacinthindustriesllc.com
                </ContactLink>
              </ListItem>

              <ListItem>
                <ContactLink href="tel:+18132133276">
                  <Phone size={20} weight="regular" />
                  +1 (813) 213-3276
                </ContactLink>
              </ListItem>
            </LinkList>

            <SocialIconRow>
              <SocialIconLink
                href="https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookLogo size={20} weight="regular" />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/hyacinthindustriesllc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="regular" />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.linkedin.com/company/hyacinth-industries-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="regular" />
              </SocialIconLink>

              <SocialIconLink
                href="https://x.com/HyacinthILLC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter size={18} />
              </SocialIconLink>
            </SocialIconRow>
          </LinkColumn>

          <LinkColumn>
            <SectionTitle>Support</SectionTitle>
            <LinkList>
              <ListItem><FooterLink href="/#home-faq-heading">Common Questions</FooterLink></ListItem>
              <ListItem><FooterLink href="/contact/">Get Support</FooterLink></ListItem>
            </LinkList>
          </LinkColumn>
        </TopRow>

        <BottomBar>
          <Copyright>
            &copy; {currentYear} Hyacinth Industries, LLC. All rights reserved.
          </Copyright>

          <LegalLinks>
            <LegalLink href="/privacy-policy/">Privacy Policy</LegalLink>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.9);
  background:
    radial-gradient(1000px 520px at 92% 0%, rgba(158, 28, 36, 0.15), transparent 55%),
    radial-gradient(700px 380px at 0% 100%, rgba(148, 163, 184, 0.08), transparent 60%),
    linear-gradient(180deg, #0b1018 0%, #090d14 100%);
  padding: clamp(3.5rem, 6vw, 5.5rem) 0 1.5rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(120deg, rgba(255,255,255,0.03) 0%, transparent 30%, rgba(255,255,255,0.02) 100%);
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 2vw, 1.5rem);
  position: relative;
  z-index: 1;

  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 0 2rem;
  }

  @media (max-width: 320px) {
    padding: 0 0.75rem;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.9fr) minmax(0, 1.4fr) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 4rem);
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (min-width: 1440px) {
    gap: 4rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  @media (max-width: 320px) {
    gap: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const BrandColumn = styled.div`
  max-width: 420px;

  @media (max-width: 680px) {
    max-width: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BrandLockup = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  } 
`;

const BrandMark = styled.img`
  width: clamp(92px, 8vw, 128px);
  height: clamp(92px, 8vw, 128px);
  object-fit: contain;
  flex-shrink: 0;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.35));

  @media (min-width: 1440px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 680px) {
    width: clamp(104px, 28vw, 140px);
    height: clamp(104px, 28vw, 140px);
  }

  @media (max-width: 320px) {
    width: 80px;
    height: 80px;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (max-width: 680px) {
    align-items: center;
  }
`;

const BrandName = styled.span`
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 1.8vw, 1.7rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1;
  color: #ffffff;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const BrandSubhead = styled.span`
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.62);
`;

const Description = styled.p`
  margin: 1.35rem 0 0;
  max-width: 420px;
  font-family: var(--font-body);
  font-size: clamp(0.875rem, 1vw, 0.98rem);
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.82);

  @media (max-width: 680px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
    line-height: 1.6;
  }
`;

const LinkColumn = styled.div`
  min-width: 0;
  overflow: hidden;
`;

const SectionTitle = styled.h3`
  margin: 0 0 1rem;
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  margin: 0;
`;

const FooterLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.96rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.2s ease, transform 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
    opacity: 0.75;
  }

  &:hover,
  &:focus-visible {
    color: #fff;
    transform: translateX(2px);
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid rgba(158, 28, 36, 0.8);
    outline-offset: 4px;
    border-radius: 6px;
  }
`;

const ContactLink = styled(FooterLink)`
  white-space: normal;
  align-items: flex-start;
  gap: 0.6rem;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  svg {
    flex-shrink: 0;
    margin-top: 0.12rem;
  }
`;

const SocialIconRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.72rem;
  margin-top: 1rem;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const SocialIconLink = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.84);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(158, 28, 36, 0.5);
    background: rgba(158, 28, 36, 0.15);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid rgba(158, 28, 36, 0.85);
    outline-offset: 3px;
  }
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 320px) {
    padding-top: 1rem;
    gap: 0.75rem;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  color: rgba(255, 255, 255, 0.72);

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-size: clamp(0.8rem, 1vw, 0.9rem);
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: #fff;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;
