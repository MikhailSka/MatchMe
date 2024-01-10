import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MessageIcon from '@mui/icons-material/Message';

import { IPage } from './IPage';


export const navbarPages: IPage[] = [
  { icon: <HomeIcon sx={{ color: 'green' }} />, name: 'Home', link: '#home' },
  {
    icon: <MessageIcon sx={{ color: 'green' }} />,
    name: 'Chat',
    link: 'chat',
  },
  {
    icon: <MessageIcon sx={{ color: 'green' }} />,
    name: 'Lessons',
    link: 'lessons',
  },
];
