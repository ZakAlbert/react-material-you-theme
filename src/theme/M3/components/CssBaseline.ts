import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3CssBaseline {
    MuiCssBaseline: {
        defaultProps?: ComponentsProps['MuiCssBaseline'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline'];
        variants?: ComponentsVariants['MuiCssBaseline'];
    }
};

export const getCssBaseline = (_theme: Theme): M3CssBaseline => {
    return {
        MuiCssBaseline: {
            defaultProps: {
                enableColorScheme: true,

            },
            styleOverrides: {
                '*::-webkit-scrollbar': {
                    'display': 'none'
                }
            }
        }
    }
}