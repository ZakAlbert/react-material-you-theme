import { createContext, FC, useLayoutEffect, useState } from 'react';

import { generateDesignTokens, ThemeScheme, ThemeSchemeDefault, useTonalPalette } from "../..";

export interface ThemeSchemeContextType {
    generateScheme: (hexColor: string) => void;
    themeScheme: ThemeScheme;
};

export interface ThemeSchemeProviderProps {
    children?: React.ReactNode;
};

export const ThemeSchemeContext = createContext<ThemeSchemeContextType>({
    generateScheme: () => { },
    themeScheme: ThemeSchemeDefault
});

const ThemeSchemeProvider: FC<ThemeSchemeProviderProps> = ({ children }) => {

    const [tonalPalette, generatePalette] = useTonalPalette();
    const [themeScheme, setThemeScheme] = useState<ThemeScheme>(ThemeSchemeDefault);

    useLayoutEffect(() => {
        const lightTokens = generateDesignTokens('light', tonalPalette);
        const darkTokens = generateDesignTokens('dark', tonalPalette);

        setThemeScheme({
            light: lightTokens,
            dark: darkTokens,
            tones: tonalPalette
        });

    }, [tonalPalette]);

    const generateScheme = (hexColor: string) => {
        generatePalette(hexColor);
    };

    return (
        <ThemeSchemeContext.Provider value={{ generateScheme, themeScheme }}>
            {children}
        </ThemeSchemeContext.Provider >
    );
}

export default ThemeSchemeProvider;
