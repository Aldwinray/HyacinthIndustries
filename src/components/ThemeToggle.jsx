import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

export default ThemeToggle;
