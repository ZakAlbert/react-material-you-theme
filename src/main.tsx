
import { createRoot } from 'react-dom/client';
import App from './App';

import ColorProvider from './context/ui/ColorContext';
import PaletteProvider from './context/ui/PaletteContext';

createRoot(document.getElementById('root')!).render(
    // ColorProvider => PaletteProvider => ThemeProvider
    <ColorProvider>
        <PaletteProvider>
            <App />
        </PaletteProvider>
    </ColorProvider>
);
