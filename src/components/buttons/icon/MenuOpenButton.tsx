import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from '@mui/material';

import { IButton } from '../model/IButton';

export const MenuOpenButton: React.FC<IButton> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <MenuOpenIcon sx={{ fontSize: '25px' }}/>
    </IconButton>
  );
};
