import React, { createContext, useState } from 'react';

const defaultValues = {
  isMenuOpen: false,
  toggleMenu: () => {},
};

export const PageContext = createContext(defaultValues);
export const PageProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOverage, setOverage] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <PageContext.Provider
      value={{ toggleMenu, isMenuOpen, closeMenu, isOverage, setOverage }}
    >
      {children}
    </PageContext.Provider>
  );
};
