import React from 'react';
import { Avatar, IconButton } from '@mui/material';

import { IButton } from '../model/IButton';

export const ProfileButton: React.FC<IButton> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} sx={{ marginLeft: '70px'}}>
      <Avatar>P</Avatar>
    </IconButton>
  );
};
