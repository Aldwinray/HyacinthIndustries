import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showIndustries, setShowIndustries] = useState(false);
  const timeoutRef = useRef(null);
  const isMobile = window.innerWidth <= 600;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowIndustries(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowIndustries(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const industriesSidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1
      }
    }
  };

  const mobileIndustriesSidebarVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1
      }
    }
  };

  const industriesList = [
    { to: "/logistics", text: "Logistics" },
    { to: "/general-services", text: "General Services" },
    { to: "/administrative-support", text: "Administrative Support" },
    { to: "/healthcare", text: "Healthcare" },
    { to: "/marketing", text: "Marketing" },
    { to: "/web-design", text: "Web Design" },
    { to: "/3d-animation", text: "3D Animation" }
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                ×
              </CloseButton>

              <NavLinks>
                {[
                  { to: "/about", text: "ABOUT US" },
                  { to: "/services", text: "SERVICES" },
                  { to: "#", text: "INDUSTRIES", hasSubmenu: true },
                  { to: "/contact", text: "CONTACT US" },
                  { to: "/faq", text: "FAQ"}
                ].map((link, index) => (
                  <NavLink
                    key={index}
                    as={motion.div}
                    variants={linkVariants}
                    onMouseEnter={() => link.hasSubmenu && handleMouseEnter()}
                    onMouseLeave={() => link.hasSubmenu && handleMouseLeave()}
                  >
                    <Link
                      to={link.to}
                      onClick={() => {
                        if (!link.hasSubmenu) {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {link.text}
                    </Link>
                  </NavLink>
                ))}
              </NavLinks>
              
              <ContactContainer as={motion.div} variants={linkVariants}>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactItem href="mailto:info@hyacinthindustriesllc.com">
                  <EnvelopeSimple size={16} weight="regular"/>
                  info@hyacinthindustriesllc.com
                </ContactItem>
                <ContactItem href="tel:+18132133276">
                  <Phone size={16} weight="regular"/>
                  +1 (813) 213-3276
                </ContactItem>
                <SocialContainer>
                  <SocialItem href="https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <FacebookLogo size={18} weight="regular"/>
                  </SocialItem>
                  <SocialItem href="https://www.instagram.com/hyacinthindustriesllc/" target="_blank" rel="noopener noreferrer">
                    <InstagramLogo size={18} weight="regular"/>
                  </SocialItem>
                  <SocialItem href="https://www.linkedin.com/company/hyacinth-industries-llc/" target="_blank" rel="noopener noreferrer">
                    <LinkedinLogo size={18} weight="regular"/>
                  </SocialItem>
                  <SocialItem href="https://x.com/HyacinthILLC" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={18} />
                  </SocialItem>
                </SocialContainer>
              </ContactContainer>

              <AnimatePresence mode="wait">
                {showIndustries && (
                  <IndustriesSidebar
                    as={motion.div}
                    variants={isMobile ? mobileIndustriesSidebarVariants : industriesSidebarVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <IndustriesTitle>Industries</IndustriesTitle>
                    {industriesList.map((industry, index) => (
                      <IndustryLink
                        key={index}
                        as={motion.div}
                        variants={linkVariants}
                        onClick={() => {
                          setShowIndustries(false);
                          setIsOpen(false)
                        }}
                      >
                        <Link to={industry.to}>{industry.text}</Link>
                      </IndustryLink>
                    ))}
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
  z-index: 1000;
`;

const ContactContainer = styled.div`
  margin-top: auto;
  padding: 1.25rem 0.75rem 0.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #f8f8f8;
  font-size: 1.1rem;
  font-weight: 600;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #f8f8f8;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  line-height: 1.5;
  overflow-wrap: anywhere;
  word-break: break-word;
  
  &:hover {
    color: #ff6b35;
  }
  
  svg {
    color: #ff6b35;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 0.85rem;
  margin-top: 0.85rem;
  flex-wrap: wrap;
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f8f8f8;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #ff6b35;
    transform: translateY(-2px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

const SidebarContent = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 88vw);
  height: 100vh;
  background: linear-gradient(180deg, #1b1b1b, #171717);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1.25rem 1.25rem;
  z-index: 1001;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.35rem;
  line-height: 1;
`;

const NavLinks = styled.div`
  margin-top: 4.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    transition: color 0.3s ease;
    padding: 0.45rem 0.75rem;
    border-radius: 8px;
    display: block;
    
    &:hover {
      color: #ccc;
    }
  }
`;

const IndustriesSidebar = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 300px;
  width: 320px;
  height: 100vh;
  background: #1a1a1a;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 20px;
    height: 100%;
    background: transparent;
  }

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    right: auto;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    z-index: 999;

    &::before {
      display: none;
    }
  }
`;

const IndustriesTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #333;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

const IndustryLink = styled(NavLink)`
  margin: 0.5rem 0;
  white-space: nowrap;
  
  a {
    font-size: 1rem;
    color: #ccc;
    
    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    margin: 0.7rem 0;
    
    a {
      font-size: 0.95rem;
    }
  }
`;
