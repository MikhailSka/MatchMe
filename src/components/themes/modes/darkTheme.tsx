import { createTheme } from '@mui/material';


export const darkTheme = createTheme({
    palette: {
      mode: 'dark', 
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FFFFFF',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
      },
      background: {
        paper: '#333333', 
        default: '#000000',
      },
    },
  });