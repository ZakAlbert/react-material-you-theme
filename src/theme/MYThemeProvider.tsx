
import React from "react";

import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { getDesignTokens, getThemedComponents } from "./MYTheme";
import { ColorScheme } from "../@types/MaterialPalette";

interface MYProviderProps {
    children: React.ReactNode,
    mode?: 'light' | 'dark',
    colorScheme: ColorScheme
};

const MYThemeProvider = ({ children, mode: modeProp, colorScheme: scheme }: MYProviderProps) => {

    const upperTheme = useTheme();
    const mode = modeProp || upperTheme.palette.mode;

    const theme = React.useMemo(() => {
        const designTokens = getDesignTokens(mode, scheme);
        let newTheme = createTheme(designTokens);
        newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
        return newTheme;
    }, [mode, scheme]);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default MYThemeProvider;