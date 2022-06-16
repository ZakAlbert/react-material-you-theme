
import React, { FC, useContext, useMemo } from "react";

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { getDesignTokens, getThemedComponents } from './M3Theme';
import { deepmerge } from "@mui/utils";
import { ThemeModeContext } from '../context/ThemeModeContext';
import { ThemeSchemeContext } from '../context/ThemeSchemeContext';

interface M3ThemeProps {
    children: React.ReactNode,
};

const M3ThemeProvider: FC<M3ThemeProps> = ({ children }) => {

    const { themeMode } = useContext(ThemeModeContext);
    const { themeScheme } = useContext(ThemeSchemeContext);

    const m3Theme = useMemo(() => {
        const designTokens = getDesignTokens(themeMode, themeScheme[themeMode]);
        let newM3Theme = createTheme(designTokens);
        newM3Theme = deepmerge(newM3Theme, getThemedComponents(newM3Theme));
        return newM3Theme;
    }, [themeMode, themeScheme]);

    return (
        <ThemeProvider theme={m3Theme}>
            {children}.
        </ThemeProvider>
    );
}

export default M3ThemeProvider;