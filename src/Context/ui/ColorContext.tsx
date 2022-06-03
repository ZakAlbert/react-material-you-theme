
import { createContext, useState, useEffect, ReactNode } from 'react';
import { DefaultThemeColor } from '../../model/default-theme-color';
import { ColorScheme } from '../../@types/MaterialPalette';

import 'material-dynamic-colors';

const DEFAULT_COLOR_SCHEME: ColorScheme = DefaultThemeColor;

export interface ColorContextType {
    colorScheme: ColorScheme,
    generateColorScheme: (base: string) => void,
    resetColorScheme: () => void
};

export const ColorContext = createContext<ColorContextType>({
    colorScheme: DEFAULT_COLOR_SCHEME,
    generateColorScheme: async (base: string) => { },
    resetColorScheme: () => { }
});

const ColorProvider = ({ children }: { children: ReactNode }) => {

    const [colorScheme, setColorScheme] = useState<ColorScheme>(DEFAULT_COLOR_SCHEME);

    const generateColorScheme = async (base: string) => {
        const value = await materialDynamicColors(base);
        setColorScheme(value);
        localStorage.setItem('ColorScheme', JSON.stringify(value));
    };

    const resetColorScheme = () => {
        setColorScheme(DEFAULT_COLOR_SCHEME);
        localStorage.setItem('ColorScheme', JSON.stringify(DEFAULT_COLOR_SCHEME));
    };

    useEffect(() => {
        if (localStorage.getItem('ColorScheme')) {
            const LocalScheme = JSON.parse(localStorage.getItem('ColorScheme') || '{}');
            setColorScheme(LocalScheme);
        }
    }, []);

    return (
        <ColorContext.Provider value={{ colorScheme, generateColorScheme, resetColorScheme }}>
            {children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;