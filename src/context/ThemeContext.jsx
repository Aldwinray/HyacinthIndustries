import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define theme options
const lightTheme = {
  name: 'light',
  colors: {
    primary: '#9E1C24',
    primaryDeep: '#6F0F16',
    primarySoft: 'rgba(158, 28, 36, 0.65)',
    primaryHover: 'rgba(158, 28, 36, 0.85)',

    gold: '#C9A227',

    secondary: '#4a6163',
    accent: '#f9a826',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#333333',
    textLight: '#666666',

    error: '#d32f2f',
    success: '#388e3c',
    warning: '#f57c00',
    info: '#0288d1',
  },
  typography: {
    headingFont: 'var(--font-heading)',
    bodyFont: 'var(--font-body)',
    accentFont: 'var(--font-accent)',
    learnfont: {
      H1:"Montserrat",
      H2:"Poppins Bold",
      bodydesc: "Inter Regular",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
};

const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#00a37a',
    primaryDeep: '#6F0F16',
    primarySoft: 'rgba(158, 28, 36, 0.65)',
    primaryHover: 'rgba(158, 28, 36, 0.85)',

    gold: '#C9A227',
 
    secondary: '#4a6163',
    accent: '#ffb74d',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#f5f5f5',
    textLight: '#b3b3b3',

    error: '#f44336',
    success: '#4caf50',
    warning: '#ff9800',
    info: '#2196f3',
  },
  typography: {
    ...lightTheme.typography,
  },
  spacing: {
    ...lightTheme.spacing,
  },
  borderRadius: {
    ...lightTheme.borderRadius,
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    ...lightTheme.transitions,
  },
};

// Create the context
const ThemeContext = createContext();

// Create a custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Create the Theme Provider component
export const ThemeProvider = ({ children }) => {
  // Always use light theme
  const [theme] = useState(lightTheme);

  // Set light theme colors on body
  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
  }, []);

  // Simplified value with only the theme object
  const value = {
    theme,
    isLightTheme: true,
    isDarkTheme: false,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
