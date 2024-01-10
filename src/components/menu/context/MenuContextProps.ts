import React, { createContext } from 'react';

interface MenuContextProps {
  anchorEl: null | HTMLElement;
  openMenu: (event: React.MouseEvent<HTMLElement>) => void;  
  closeMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

