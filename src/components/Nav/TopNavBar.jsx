import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Menu,
  ChevronDown,
} from "lucide-react";
import Sidebar from "./Sidebar";

export default function TopNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  
  // Get current location to check if we're on an industry page
  const location = window.location.pathname;
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const industriesList = [
    { to: "/logistics", text: "Logistics" },
    { to: "/general-services", text: "General Services" },
    { to: "/administrative-support", text: "Administrative Support" },
    { to: "/healthcare", text: "Healthcare" },
    { to: "/marketing", text: "Marketing" },
    { to: "/web-design", text: "Web Design" },
    { to: "/3d-animation", text: "3D Animation" }
  ];
  
  // Check if current page is one of the industry pages
  const isIndustryPageActive = industriesList.some(industry => location === industry.to);
  
  return (
    <NavContainer>
      {!isMobile && (
        <TopBar>
          <ContactInfo>
            <ContactLink href="mailto:info@hyacinthindustriesllc.com">
              <Mail size={16} />
              info@hyacinthindustriesllc.com
            </ContactLink>

            <ContactLink href="tel:+18132133276">
              <Phone size={16} />
              +1 (813) 213-3276
            </ContactLink>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/hyacinthindustriesllc/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/hyacinth-industries-llc/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href="https://x.com/HyacinthILLC" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </SocialLink>
          </SocialLinks>
        </TopBar>
      )}
      <MainNav>
        <Logo>
          <Link to="/">
            <LogoContainer>
              <PetalsLogo src="/petals.webp" alt="Petals Logo" />
              <NameLogo src="/name.webp" alt="Hyacinth Industries" />
            </LogoContainer>
          </Link>
        </Logo>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <DesktopNav>
            <NavItem>
              <NavLink to="/about">ABOUT US</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/services">SERVICES</NavLink>
            </NavItem>

            <NavItem 
              onMouseEnter={() => setShowIndustriesDropdown(true)}
              onMouseLeave={() => setShowIndustriesDropdown(false)}
            >
              <DropdownTrigger 
                onClick={(e) => e.preventDefault()}
                className={isIndustryPageActive ? 'active' : ''}
              >
                INDUSTRIES <ChevronDown size={16} />
              </DropdownTrigger>
              {showIndustriesDropdown && (
                <NavDropdownMenu>
                  {industriesList.map((industry, index) => (
                    <DropdownItem key={index}>
                      <NavLink to={industry.to}>{industry.text}</NavLink>
                    </DropdownItem>
                  ))}
                </NavDropdownMenu>
              )}
            </NavItem>
            <NavItem>
              <NavLink to="/contact">CONTACT US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/faq">FAQ</NavLink>
            </NavItem>
          </DesktopNav>
        )}
        
        {/* Mobile Hamburger Button - Only visible on mobile */}
        {isMobile && (
          <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </HamburgerButton>
        )}
      </MainNav>
      
      {/* Sidebar - Only rendered on mobile */}
      {isMobile && <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />}
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  font-family: "Lexend", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 0 10px #000;
`;

const Logo = styled.div`
  position: relative;
  margin-right: 40px;
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 0 3rem;
  height: 100%;
  transition: background-color 0.3s ease;

  @media (max-width: 1360px) {
    padding: 0 2.25rem;
    margin-right: 30px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -30px;
    width: 60px;
    height: 100%;
    background-color: inherit;
    transform: skewX(-20deg);
    z-index: -1;
  }
  
  &:hover {
    background-color: #222;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PetalsLogo = styled.img`
  height: 40px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: rotate(15deg);
  }
`;

const NameLogo = styled.img`
  height: 30px;
  transition: filter 0.3s ease;
`;

const TopBar = styled.div`
  background: linear-gradient(135deg, #DC143C, #B71C1C, #DC143C, #FF5252, #DC143C); /* Metallic red gradient */
  background-size: 200% 200%;
  box-shadow: inset 0 0 10px rgba(220, 20, 60, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #FFFFFF; /* White text */
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  /* Add subtle shine effect */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%);
    opacity: 0.5;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const MainNav = styled.div`
  height: 60px;
  background-color: #eee;
  color: #111;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8); /* Slightly dimmed white on hover */
  }

  svg {
    margin-right: 0.5rem;
    color: #FFFFFF; /* White icons */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 1.5rem;
  color: #333;
  transition: color 0.2s ease;
  
  &:hover {
    color: #00674f;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 ;
  padding: 0;
  gap: 2.5rem;
  margin-right: 4rem;

  @media (max-width: 1360px) {
    gap: 1.75rem;
    margin-right: 2.25rem;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #00674f;
  }
`;

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #DC143c;
  }
  
  &.active {
    color: #DC143c;
    font-weight: 600;
  }
`;

const DropdownTrigger = styled.div`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: #DC143c;
  }
  
  &.active {
    color: #DC143c;
    font-weight: 600;
  }
`;

const NavDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: #333;
    transition: color 0.2s ease;
    
    &:hover {
      color: #DC143c;
    }
  }
`;

const SocialLink = styled.a`
  color: #FFFFFF; /* White icons */
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: rgba(255, 255, 255, 0.8); /* Slightly dimmed white on hover */
  }
`;
