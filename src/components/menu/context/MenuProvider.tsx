import React, { useState } from 'react';

import { MenuContext } from './MenuContextProps';

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <MenuContext.Provider value={{ anchorEl, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
