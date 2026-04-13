import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
