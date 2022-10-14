import {createContext, useContext, useState} from 'react';

export const NavbarContext = createContext();

export function NavbarContextWraper({children}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sharedState = {
    menuOpen,
    setMenuOpen,
  };
  return (
    <NavbarContext.Provider value={sharedState}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavbarContext);
}
