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
              <BrandMark src={logo} alt="Hyacinth Industries logo" />
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
              <ListItem>
                <FooterLink href="/">Home</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="/about">About</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="/services">Services</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="/contact">Contact</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="/faq">FAQ</FooterLink>
              </ListItem>
              {/*<ListItem>
                <FooterLink href="/reforestation">Reforestation Project</FooterLink>
                </ListItem>*/}
              
            </LinkList>
          </LinkColumn>

          <LinkColumn>
            <SectionTitle>Contacts</SectionTitle>
            <LinkList>
              <ListItem>
                <ContactLink href="mailto:info@hyacinthindustriesllc.com">
                  <EnvelopeSimple size={22} weight="regular"/>
                  info@hyacinthindustriesllc.com
                </ContactLink>
              </ListItem>

              <ListItem>
                <ContactLink href="tel:+18132133276">
                  <Phone size={22} weight="regular"/>
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
                title="Facebook"
              >
                <FacebookLogo size={22} weight="regular"/>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/hyacinthindustriesllc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramLogo size={22} weight="regular"/>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/hyacinth-industries-llc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinLogo size={22} weight="regular"/>
              </SocialIconLink>
              <SocialIconLink
                href="https://x.com/HyacinthILLC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
              >
                <FaXTwitter size={22} />
              </SocialIconLink>
            </SocialIconRow>

          </LinkColumn>

          <LinkColumn>
            <SectionTitle>Support</SectionTitle>
            <LinkList>
              <ListItem>
                <FooterLink href="/#home-faq-heading">Common Questions</FooterLink>
              </ListItem>
              <ListItem>
                <FooterLink href="/contact">Get Support</FooterLink>
              </ListItem>
            </LinkList>
          </LinkColumn>
        </TopRow>

        <BottomBar>
          <Copyright>
            &copy; {currentYear} Hyacinth Industries, LLC. All rights reserved.
          </Copyright>

          <LegalLinks>
            <LegalLink
              href="/privacy-policy">Privacy Policy
            </LegalLink>
          </LegalLinks>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #111111;
  color: rgba(255, 255, 255, 0.88);
  padding: 4.75rem 0 1.5rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 0 18px;
  }
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(170px, 0.8fr) minmax(260px, 1fr) minmax(150px, 0.8fr);
  gap: 2.5rem 3rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const BrandColumn = styled.div`
  max-width: 370px;

  @media (max-width: 680px) {
    max-width: none;
  }
`;

const BrandLockup = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
`;

const BrandMark = styled.img`
  width: 84px;
  height: 84px;
  object-fit: contain;
  flex-shrink: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const BrandName = styled.span`
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1;
`;

const BrandSubhead = styled.span`
  font-family: var(--font-body);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.66);
`;

const Description = styled.p`
  margin: 1.75rem 0 0;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.82);
`;

const LinkColumn = styled.div`
  min-width: 0;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 1.1rem;
  font-family: var(--font-heading);
  font-size: 0.96rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 680px) {
    margin-bottom: 0.9rem;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

const ListItem = styled.li`
  margin: 0;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.86);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(2px);
  }
`;

const ContactLink = styled(FooterLink)`
  display: inline-flex;
  align-items: flex-start;
  gap: 0.65rem;
  white-space: nowrap;
  overflow-wrap: normal;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`;

const SocialIconRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  margin-top: 1rem;

  @media (max-width: 680px) {
    margin-top: 0.85rem;
    justify-content: flex-start;
  }
`;

const SocialIconLink = styled.a`
  color: rgba(255, 255, 255, 0.82);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
  }
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const LegalLink = styled.a`
  font-family: var(--font-body);
  font-size: 0.94rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 1.35rem;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.86);
`;
