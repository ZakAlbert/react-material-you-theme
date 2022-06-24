
import React, { FC, useContext, useMemo } from "react";

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { getDesignTokens, getThemedComponents } from './M3Theme';
import { deepmerge } from "@mui/utils";
import { ThemeModeContext } from '../context/ThemeModeContext';
import { ThemeSchemeContext } from '../context/ThemeSchemeContext';
import { CssBaseline } from "@mui/material";

interface M3ThemeProps {
    children: React.ReactNode,
};

const M3ThemeProvider: FC<M3ThemeProps> = ({ children }) => {

    const { themeMode } = useContext(ThemeModeContext);
    const { themeScheme } = useContext(ThemeSchemeContext);

    const m3Theme = useMemo(() => {
        const designTokens = getDesignTokens(themeMode, themeScheme[themeMode], themeScheme.tones);
        let newM3Theme = createTheme(designTokens);
        newM3Theme = deepmerge(newM3Theme, getThemedComponents(newM3Theme));

        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeScheme[themeMode].surface);

        return newM3Theme;
    }, [themeMode, themeScheme]);

    return (
        <ThemeProvider theme={m3Theme}>
            <CssBaseline enableColorScheme />
            {children}.
        </ThemeProvider>
    );
}

export default M3ThemeProvider;