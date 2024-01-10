import { createTheme, ThemeProvider, Switch, FormControlLabel } from '@mui/material';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFF00',
    },
    secondary: {
      main: '#808080',
    },
    text: {
      primary: '#000000',
      secondary: '#808080',
    },
    background: {
      paper: '#FFFFFF',
      default: '#F5F5F5', 
    },
  },
});