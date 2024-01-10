import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { IPage } from './IPage';


export const profilePages: IPage[] = [
  {
    icon: <AccountBoxIcon  />,
    name: 'Profile',
    link: 'profile',
  },
  {
    icon: <SettingsIcon />,
    name: 'Options',
    link: 'options',
  },
];
