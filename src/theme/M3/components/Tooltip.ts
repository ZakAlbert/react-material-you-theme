import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3Tooltip {
    MuiTooltip: {
        defaultProps?: ComponentsProps['MuiTooltip'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiTooltip'];
        variants?: ComponentsVariants['MuiTooltip'];
    }
};

export const getTooltip = (theme: Theme): M3Tooltip => {
    const { palette } = theme;
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: palette.inverseSurface.main,
                    color: palette.inverseOnSurface.main
                }
            }
        }
    }
}