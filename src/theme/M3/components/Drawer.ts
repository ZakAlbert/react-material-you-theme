import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3Drawer {
    MuiDrawer: {
        defaultProps?: ComponentsProps['MuiDrawer'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiDrawer'];
        variants?: ComponentsVariants['MuiDrawer'];
    }
};

export const getDrawer = (theme: Theme): M3Drawer => {
    const { palette } = theme;
    return {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    border: '0px',
                    background: palette.surfaceContainer.main,
                    color: palette.onSurfaceVariant.main
                }
            }
        },
    }
}