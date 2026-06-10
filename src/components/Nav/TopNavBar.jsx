import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  ChevronDown,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "./Sidebar";

export default function TopNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const industriesList = [
    { to: "/logistics/", text: "Logistics" },
    { to: "/general-services/", text: "General Services" },
    { to: "/administrative-support/", text: "Administrative Support" },
    { to: "/healthcare/", text: "Healthcare" },
    { to: "/marketing/", text: "Marketing" },
    { to: "/web-design/", text: "Web Design" },
    { to: "/3d-animation/", text: "3D Animation" }
  ];

  const isIndustryPageActive = industriesList.some(industry => pathname === industry.to);

  return (
    <NavContainer>
      {!isMobile && (
        <TopBar>
          <ContactInfo>
            <ContactLink href="mailto:info@hyacinthindustriesllc.com">
              <Mail size={15} strokeWidth={1.5} />
              info@hyacinthindustriesllc.com
            </ContactLink>
            <ContactLink href="tel:+18132133276">
              <Phone size={15} strokeWidth={1.5} />
              +1 (813) 213-3276
            </ContactLink>
          </ContactInfo>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/share/1NFwnjFHaA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/hyacinthindustriesllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/hyacinth-industries-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </SocialLink>
            <SocialLink href="https://x.com/HyacinthILLC" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FaXTwitter size={18} />
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

        {!isMobile && (
          <DesktopNav>
            <NavItem>
              <StyledNavLink to="/about/">About Us</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/services/">Services</StyledNavLink>
            </NavItem>
            <NavItemDropdown
              onMouseEnter={() => setShowIndustriesDropdown(true)}
              onMouseLeave={() => setShowIndustriesDropdown(false)}
            >
              <DropdownTrigger $isActive={isIndustryPageActive} $isOpen={showIndustriesDropdown}>
                Industries
                <ChevronIcon size={16} $isOpen={showIndustriesDropdown} />
              </DropdownTrigger>
              <NavDropdownMenu $isOpen={showIndustriesDropdown}>
                {industriesList.map((industry) => (
                  <DropdownItem key={industry.to}>
                    <DropdownNavLink to={industry.to}>{industry.text}</DropdownNavLink>
                  </DropdownItem>
                ))}
              </NavDropdownMenu>
            </NavItemDropdown>
            <NavItem>
              <StyledNavLink to="/contact/">Contact Us</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/faq/">FAQ</StyledNavLink>
            </NavItem>
          </DesktopNav>
        )}

        {isMobile && (
          <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu" aria-expanded={sidebarOpen}>
            <Menu size={24} strokeWidth={2} />
          </HamburgerButton>
        )}
      </MainNav>

      {isMobile && <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />}
    </NavContainer>
  );
}

// Animation keyframes
const dropdownSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
`;

const NavContainer = styled.nav`
  font-family: "Lexend", -apple-system, BlinkMacSystemFont, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Logo = styled.div`
  position: relative;
  margin-right: 50px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 0 2.5rem;
  height: 100%;
  clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 100%, 0 100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1360px) {
    padding: 0 2rem;
    margin-right: 40px;
  }

  @media (max-width: 1024px) {
    clip-path: none;
    margin-right: auto;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }

  &:hover {
    background: linear-gradient(135deg, #1f1f3a 0%, #1a2845 100%);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PetalsLogo = styled.img`
  height: 38px;
  width: auto;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: rotate(12deg) scale(1.05);
  }
`;

const NameLogo = styled.img`
  height: 28px;
  width: auto;
  transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1);

  &:hover {
    filter: brightness(1.1);
  }
`;

const TopBar = styled.div`
  background: linear-gradient(90deg, #9F1239 0%, #DC143C 50%, #9F1239 100%);
  color: #ffffff;
  width: 100%;
  padding: 0.75rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(159, 18, 57, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainNav = styled.div`
  height: 72px;
  background: #ffffff;
  color: #0f172a;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(159, 18, 57, 0.2), transparent);
  }

  @media (max-width: 1024px) {
    height: 64px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
  }

  svg {
    color: rgba(255, 255, 255, 0.85);
    transition: color 0.2s ease;
  }

  &:hover svg {
    color: #ffffff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  margin-right: 1.5rem;
  color: #0f172a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  margin-right: 3rem;
  align-items: center;
  height: 100%;

  @media (max-width: 1360px) {
    margin-right: 2rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItemDropdown = styled(NavItem)`
  position: relative;
  height: 100%;
`;

// Premium NavLink with animated underline
const StyledNavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  text-transform: capitalize;
  line-height: 1.5;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #DC143C, #9F1239);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);

    &::after {
      width: calc(100% - 2rem);
    }
  }

  &.active {
    color: #DC143C;
    font-weight: 600;
    background: rgba(220, 20, 60, 0.06);

    &::after {
      width: calc(100% - 2rem);
    }
  }
`;

const ChevronIcon = styled(ChevronDown)`
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownTrigger = styled.div`
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? '#DC143C' : '#334155')};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 6px;
  text-transform: capitalize;
  line-height: 1.5;
  background: ${({ $isActive }) => ($isActive ? 'rgba(220, 20, 60, 0.06)' : 'transparent')};

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: ${({ $isActive }) => ($isActive ? 'calc(100% - 2rem)' : '0')};
    height: 2px;
    background: linear-gradient(90deg, #DC143C, #9F1239);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);

    &::after {
      width: calc(100% - 2rem);
    }
  }
`;

const NavDropdownMenu = styled.div`
  position: absolute;
  top: calc(100% - 8px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  min-width: 220px;
  z-index: 1001;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  ${({ $isOpen }) => $isOpen && css`
    animation: ${dropdownSlide} 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  `};
  transform-origin: top center;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.98);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    transform: translateX(-50%) rotate(45deg);
  }
`;

const DropdownItem = styled.div`
  padding: 0;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    background: rgba(220, 20, 60, 0.06);
  }
`;

const DropdownNavLink = styled(RouterNavLink)`
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #334155;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  line-height: 1.5;

  &:hover {
    color: #DC143C;
    background: rgba(220, 20, 60, 0.04);
  }

  &.active {
    color: #DC143C;
    font-weight: 600;
    background: rgba(220, 20, 60, 0.08);
  }
`;

const SocialLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border-radius: 6px;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;
