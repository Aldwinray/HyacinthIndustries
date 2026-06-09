import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  X,
  CaretRight,
  ArrowLeft,
} from "@phosphor-icons/react";
import { FaXTwitter } from "react-icons/fa6";

const SIDEBAR_WIDTH = "clamp(380px, 40vw, 520px)";
const INDUSTRIES_PANEL_WIDTH = "clamp(340px, 34vw, 480px)";

const COLORS = {
  bgPrimary: "#0B0F19",
  bgSecondary: "#0D1320",
  bgElevated: "#111827",
  accent: "#E11D48",
  accentHover: "#BE123C",
  textPrimary: "#F8FAFC",
  textSecondary: "#94A3B8",
  border: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(11, 15, 25, 0.98)",
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showIndustries, setShowIndustries] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 1024);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setShowIndustries(false);
  }, [isMobile, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowIndustries(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setShowIndustries(false);
    }, 220);
  };

  const handleIndustriesToggle = () => {
    if (isMobile) {
      setShowIndustries((prev) => !prev);
    } else {
      setShowIndustries(true);
    }
  };

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
        staggerChildren: 0.06,
      },
    },
  };

  const linkVariants = {
    closed: { x: 24, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const industriesSidebarVariants = {
    closed: {
      x: "12%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
        staggerChildren: 0.05,
      },
    },
  };

  const mobileIndustriesSidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 32,
        staggerChildren: 0.05,
      },
    },
  };

  const industriesList = [
    { to: "/logistics/", text: "Logistics" },
    { to: "/general-services/", text: "General Services" },
    { to: "/administrative-support/", text: "Administrative Support" },
    { to: "/healthcare/", text: "Healthcare" },
    { to: "/marketing/", text: "Marketing" },
    { to: "/web-design/", text: "Web Design" },
    { to: "/3d-animation/", text: "3D Animation" },
  ];

  const navLinks = [
    { to: "/about/", text: "About Us" },
    { to: "/services/", text: "Services" },
    { to: "#", text: "Industries", hasSubmenu: true },
    { to: "/contact/", text: "Contact Us" },
    { to: "/faq/", text: "FAQ" },
  ];

  return (
    <Wrapper>
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <SidebarContent
              as={motion.div}
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <CloseButton
                as={motion.button}
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
              >
                <X size={24} weight="light" />
              </CloseButton>

              <NavLinks>
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    as={motion.div}
                    variants={linkVariants}
                    onMouseEnter={() => link.hasSubmenu && handleMouseEnter()}
                    onMouseLeave={() => link.hasSubmenu && handleMouseLeave()}
                  >
                    {link.hasSubmenu ? (
                      <SubmenuButton
                        type="button"
                        onClick={handleIndustriesToggle}
                        aria-expanded={showIndustries}
                        aria-controls="industries-submenu"
                      >
                        <span>{link.text}</span>
                        <SubmenuCaret $open={showIndustries}>
                          <CaretRight size={18} weight="light" />
                        </SubmenuCaret>
                      </SubmenuButton>
                    ) : (
                      <Link to={link.to} onClick={() => setIsOpen(false)}>
                        {link.text}
                      </Link>
                    )}
                  </NavLink>
                ))}
              </NavLinks>

              <ContactContainer as={motion.div} variants={linkVariants}>
                <ContactHeader>
                  <ContactTitle>Get in Touch</ContactTitle>
                  <ContactDivider />
                </ContactHeader>

                <ContactLinks>
                  <ContactItem href="mailto:info@hyacinthindustriesllc.com">
                    <ContactIcon>
                      <EnvelopeSimple size={18} weight="light" />
                    </ContactIcon>
                    <ContactText>info@hyacinthindustriesllc.com</ContactText>
                  </ContactItem>

                  <ContactItem href="tel:+18132133276">
                    <ContactIcon>
                      <Phone size={18} weight="light" />
                    </ContactIcon>
                    <ContactText>+1 (813) 213-3276</ContactText>
                  </ContactItem>
                </ContactLinks>

                <SocialContainer>
                  <SocialItem
                    href="https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FacebookLogo size={20} weight="light" />
                  </SocialItem>

                  <SocialItem
                    href="https://www.instagram.com/hyacinthindustriesllc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramLogo size={20} weight="light" />
                  </SocialItem>

                  <SocialItem
                    href="https://www.linkedin.com/company/hyacinth-industries-llc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinLogo size={20} weight="light" />
                  </SocialItem>

                  <SocialItem
                    href="https://x.com/HyacinthILLC"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                  >
                    <FaXTwitter size={18} />
                  </SocialItem>
                </SocialContainer>
              </ContactContainer>

              <AnimatePresence mode="wait">
                {showIndustries && (
                  <IndustriesSidebar
                    id="industries-submenu"
                    as={motion.div}
                    variants={
                      isMobile
                        ? mobileIndustriesSidebarVariants
                        : industriesSidebarVariants
                    }
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <IndustriesHeader>
                      {isMobile && (
                        <IndustriesBackButton
                          type="button"
                          onClick={() => setShowIndustries(false)}
                          as={motion.button}
                          whileTap={{ scale: 0.96 }}
                        >
                          <ArrowLeft size={18} weight="light" />
                          <span>Back</span>
                        </IndustriesBackButton>
                      )}
                      {!isMobile && <IndustriesTitle>Industries</IndustriesTitle>}
                    </IndustriesHeader>

                    <IndustriesLinks>
                      {industriesList.map((industry, index) => (
                        <IndustryLink
                          key={index}
                          as={motion.div}
                          variants={linkVariants}
                          onClick={() => {
                            setShowIndustries(false);
                            setIsOpen(false);
                          }}
                        >
                          <Link to={industry.to}>{industry.text}</Link>
                        </IndustryLink>
                      ))}
                    </IndustriesLinks>
                  </IndustriesSidebar>
                )}
              </AnimatePresence>
            </SidebarContent>
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: relative;
  z-index: 1100;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(6px);
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

const SidebarContent = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${SIDEBAR_WIDTH};
  height: 100dvh;
  background: ${COLORS.glassBg};
  border-left: 1px solid ${COLORS.border};
  box-shadow: -16px 0 50px rgba(0, 0, 0, 0.35), -4px 0 20px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  z-index: 1101;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: "Lexend", -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 1.25rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${COLORS.border};
  color: ${COLORS.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${COLORS.textPrimary};
    border-color: rgba(255, 255, 255, 0.12);
  }

  svg {
    display: block;
  }
`;

const NavLinks = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`;

const NavLink = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${COLORS.accent}, ${COLORS.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${COLORS.textSecondary};
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.5;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0.875rem 1rem;
    border-radius: 10px;
    display: block;

    &:hover {
      color: ${COLORS.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`;

const SubmenuButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: ${COLORS.textSecondary};
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.5;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;

  &:hover {
    color: ${COLORS.textPrimary};
    background: rgba(255, 255, 255, 0.03);
    padding-left: 1.25rem;
  }
`;

const SubmenuCaret = styled.span`
  display: flex;
  align-items: center;
  color: ${COLORS.textSecondary};
  transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0deg)")};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`;

const ContactContainer = styled.div`
  margin-top: auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactTitle = styled.h4`
  margin: 0;
  color: ${COLORS.textPrimary};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const ContactDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, ${COLORS.border}, transparent);
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${COLORS.textSecondary};
  text-decoration: none;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;

  &:hover {
    color: ${COLORS.textPrimary};
    transform: translateX(4px);
  }

  &:hover svg {
    color: ${COLORS.accent};
  }
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(225, 29, 72, 0.1);
  color: ${COLORS.accent};
  flex-shrink: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    display: block;
  }
`;

const ContactText = styled.span`
  font-weight: 400;
  letter-spacing: 0.01em;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${COLORS.border};
  color: ${COLORS.textSecondary};
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: ${COLORS.accent};
    border-color: ${COLORS.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(225, 29, 72, 0.35);
  }

  svg {
    display: block;
  }
`;

const IndustriesSidebar = styled(motion.div)`
  position: absolute;
  top: 0;
  right: calc(100% + 8px);
  width: ${INDUSTRIES_PANEL_WIDTH};
  height: 100dvh;
  background: ${COLORS.glassBg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 16px 0 0 16px;
  border: 1px solid ${COLORS.border};
  border-right: none;
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.45), -8px 0 24px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px 0 0 16px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    right: auto;
    left: 0;
    border-radius: 0;
    border: none;
    padding: 1.25rem;
    z-index: 2;
    background: ${COLORS.bgPrimary};

    &::before {
      border-radius: 0;
    }
  }
`;

const IndustriesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${COLORS.border};
`;

const IndustriesTitle = styled.h2`
  color: ${COLORS.textPrimary};
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0;
  flex: 1;
`;

const IndustriesBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: ${COLORS.textSecondary};
  border-radius: 10px;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${COLORS.textPrimary};
  }

  svg {
    display: block;
  }
`;

const IndustriesLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const IndustryLink = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: linear-gradient(180deg, ${COLORS.accent}, ${COLORS.accentHover});
    border-radius: 0 2px 2px 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    color: ${COLORS.textSecondary};
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 1.5;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 0.875rem 1rem;
    border-radius: 10px;
    display: block;

    &:hover {
      color: ${COLORS.textPrimary};
      background: rgba(255, 255, 255, 0.03);
      padding-left: 1.25rem;
    }
  }

  &:hover::before {
    transform: translateY(-50%) scaleY(1);
  }
`;