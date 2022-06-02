
import { CssBaseline, ThemeProvider } from '@mui/material';
import { FunctionComponent, useContext } from 'react';

import { PaletteContext, PaletteContextType } from './Context/ui/PaletteContext';
import { ColorContext, ColorContextType } from './Context/ui/ColorContext';
import { createMaterialYouTheme } from './utils/theme';

import RootLayout from './layout/RootLayout';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';


const App: FunctionComponent = () => {
  // ColorProvider => PaletteProvider => ThemeProvider
  const { paletteMode } = useContext<PaletteContextType>(PaletteContext);
  const { colorScheme } = useContext<ColorContextType>(ColorContext);

  const theme = createMaterialYouTheme(paletteMode, colorScheme[paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App