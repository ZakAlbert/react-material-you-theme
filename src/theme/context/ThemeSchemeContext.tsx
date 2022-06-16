import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { M3ThemeScheme, DEFAULT_M3_THEME_SCHEME } from '../m3/M3Theme';
import { argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities';

import 'material-dynamic-colors';

export interface ThemeSchemeContextType {
    themeScheme: M3ThemeScheme,
    //themeHCTColor: M3ThemeHCT,
    generateThemeScheme: (base: string) => void,
    resetThemeScheme: () => void
};

export const ThemeSchemeContext = createContext<ThemeSchemeContextType>({
    themeScheme: DEFAULT_M3_THEME_SCHEME,
    //themeHCTColor: DEFAULT_M3_THEME_HCT,
    generateThemeScheme: async (base: string) => { },
    resetThemeScheme: () => { }
});

const THEME_SCHEME_KEY = 'ThemeScheme';
//const THEME_HCT_KEY = 'ThemeHCT';

const ThemeSchemeProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [themeScheme, setThemeScheme] = useState<M3ThemeScheme>(DEFAULT_M3_THEME_SCHEME);
    //const [themeHCTColor, setThemeHCT] = useState<M3ThemeHCT>(DEFAULT_M3_THEME_HCT);

    useEffect(() => {
        if (localStorage.getItem(THEME_SCHEME_KEY)) {
            const localThemeScheme = JSON.parse(localStorage.getItem(THEME_SCHEME_KEY) || '{}');
            setThemeScheme(localThemeScheme);
        }
    }, []);

    const generateThemeScheme = async (colorBase: string) => {

        const theme = themeFromSourceColor(argbFromHex(colorBase));

        const paletteTones: any = {};
        const light: any = {};
        const dark: any = {};

        for (const [key, palette] of Object.entries(theme.palettes)) {
            const tones: any = {};
            for (const tone of [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]) {
                const color = hexFromArgb(palette.tone(tone));
                tones[tone] = color;
            }
            paletteTones[key] = tones;
        }

        for (const [key, value] of Object.entries(theme.schemes.light.toJSON())) {
            const color = hexFromArgb(value);
            light[key] = color;
        }
        for (const [key, value] of Object.entries(theme.schemes.dark.toJSON())) {
            const color = hexFromArgb(value);
            dark[key] = color;
        }
        const scheme: M3ThemeScheme = {
            light,
            dark,
            tones: paletteTones
        };
        setThemeScheme(scheme);
        localStorage.setItem(THEME_SCHEME_KEY, JSON.stringify(scheme))
    };

    const resetThemeScheme = () => {
        setThemeScheme(DEFAULT_M3_THEME_SCHEME);
        localStorage.setItem(THEME_SCHEME_KEY, JSON.stringify(DEFAULT_M3_THEME_SCHEME));
    };

    return (
        <ThemeSchemeContext.Provider value={{ themeScheme, generateThemeScheme, resetThemeScheme }}>
            {children}
        </ThemeSchemeContext.Provider>
    )
}

export default ThemeSchemeProvider;