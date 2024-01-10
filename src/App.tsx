import React from 'react';

import AppRouter from './routes';
import { ThemeProviderWrapper } from 'components/themes/context/ThemeProviderWrapper';
import { MenuProvider } from 'components/menu/context/MenuProvider';


const App: React.FC = () => (
  <ThemeProviderWrapper>
    <MenuProvider>
      <AppRouter />
    </MenuProvider>
  </ThemeProviderWrapper>
);

export default App;
