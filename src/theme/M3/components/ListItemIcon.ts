import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3ListItemIcon {
    MuiListItemIcon: {
        defaultProps?: ComponentsProps['MuiListItemIcon'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItemIcon'];
        variants?: ComponentsVariants['MuiListItemIcon'];
    }
};

export const getListItemIcon = (_theme: Theme): M3ListItemIcon => {
    //const { palette } = theme;
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 32,
                    '&.Mui-selected': {
                        fontWeight: 'bold'
                    },
                },
            }
        }
    }
}