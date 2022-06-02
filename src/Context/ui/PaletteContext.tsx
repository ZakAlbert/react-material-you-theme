
import { PaletteMode } from "@mui/material";
import { createContext, useState, ReactNode, useEffect } from 'react';

export interface PaletteContextType {
    paletteMode: PaletteMode,
    togglePalette: () => void,
    resetPaletteMode: () => void
};

const DEFAULT_MODE: PaletteMode = "light";

export const PaletteContext = createContext<PaletteContextType>({
    paletteMode: DEFAULT_MODE,
    togglePalette: () => { },
    resetPaletteMode: () => { }
});

const PaletteProvider = ({ children }: { children: ReactNode }) => {

    const [paletteMode, setPaletteMode] = useState<PaletteMode>(DEFAULT_MODE);

    const togglePalette = () => {
        const value = paletteMode == 'light' ? 'dark' : 'light';
        setPaletteMode(value);
        localStorage.setItem('PaletteMode', JSON.stringify(value));
    }

    const resetPaletteMode = () => {
        setPaletteMode('light');
        localStorage.setItem('PaletteMode', JSON.stringify('light'));
    }

    useEffect(() => {
        if (localStorage.getItem('PaletteMode')) {
            const LocalPalette = JSON.parse(localStorage.getItem('PaletteMode') || '{}');
            setPaletteMode(LocalPalette);
        }
    }, []);

    return (
        <PaletteContext.Provider value={{ paletteMode, togglePalette, resetPaletteMode }}>
            {children}
        </PaletteContext.Provider>
    );

}

export default PaletteProvider;
