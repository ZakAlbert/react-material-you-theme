
import { CssBaseline } from '@mui/material';
import { FunctionComponent, useContext } from 'react';

import { PaletteContext, PaletteContextType } from './context/ui/PaletteContext';
import { ColorContext, ColorContextType } from './context/ui/ColorContext';

import MYThemeProvider from './theme/MYThemeProvider';

import Layout from './layout/Layout';
import Home from './pages/Home/Home';


const App: FunctionComponent = () => {
  // ColorProvider => PaletteProvider => ThemeProvider
  const { paletteMode } = useContext<PaletteContextType>(PaletteContext);
  const { colorScheme } = useContext<ColorContextType>(ColorContext);

  return (
    <MYThemeProvider mode={paletteMode} colorScheme={colorScheme} >
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </MYThemeProvider>
  )
}

export default App