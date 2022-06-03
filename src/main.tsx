
import { createRoot } from 'react-dom/client';
import App from './App';

import ColorProvider from './Context/ui/ColorContext';
import PaletteProvider from './Context/ui/PaletteContext';

createRoot(document.getElementById('root')!).render(
    // ColorProvider => PaletteProvider => ThemeProvider
    <ColorProvider>
        <PaletteProvider>
            <App />
        </PaletteProvider>
    </ColorProvider>
);
