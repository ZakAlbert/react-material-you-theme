
import { FC } from 'react';

import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router';

import ThemeModeProvider from './theme/context/ThemeModeContext';
import ThemeSchemeProvider from './theme/context/ThemeSchemeContext';
import M3ThemeProvider from './theme/m3/M3ThemeProvider';

import Layout from './layout/Layout';


const App: FC = () => {
  return (
    <ThemeModeProvider>
      <ThemeSchemeProvider>
        <M3ThemeProvider>
          <CssBaseline enableColorScheme />
          <Layout>
            <Outlet />
          </Layout>
        </M3ThemeProvider>
      </ThemeSchemeProvider>
    </ThemeModeProvider>

  )
}

export default App