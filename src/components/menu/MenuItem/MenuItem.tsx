import React from 'react';
import {
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { IMenuItemProps } from './IMenuItemProps';

export const MenuItem: React.FC<IMenuItemProps> = ({ text, icon, onClick }) => {
  return (
    <MuiMenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={text || ''} />
    </MuiMenuItem>
  );
};
