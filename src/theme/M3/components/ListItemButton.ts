import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { StateLayer, getStateLayerColor } from "../..";

interface M3ListItemButton {
    MuiListItemButton: {
        defaultProps?: ComponentsProps['MuiListItemButton'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItemButton'];
        variants?: ComponentsVariants['MuiListItemButton'];
    }
};

export const getListItemButton = (theme: Theme): M3ListItemButton => {
    const { palette } = theme;
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    color: palette.onSurfaceVariant.main,
                    '&:hover': {
                        backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerLow.main, palette.onSurface.main),
                        color: getStateLayerColor(StateLayer.Hover, palette.onSurfaceVariant.main, palette.onSurface.main)
                    },
                    /*'&:focus': {
                        backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerLow.main, palette.onSurface.main),
                        color: getStateLayerColor(StateLayer.Focus, palette.onSurfaceVariant.main, palette.onSurface.main)
                    },*/
                    '&:active': {
                        backgroundColor: getStateLayerColor(StateLayer.Press, palette.surfaceContainerLow.main, palette.onSecondaryContainer.main),
                        color: getStateLayerColor(StateLayer.Press, palette.onSurfaceVariant.main, palette.onSurface.main)
                    },
                    '&.Mui-selected': {
                        color: palette.onSecondaryContainer.main,
                        background: palette.secondaryContainer.main,
                        '& > .MuiListItemText-root > .MuiTypography-root': {
                            fontWeight: 'bold'
                        },
                        '&:hover': {
                            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            color: getStateLayerColor(StateLayer.Hover, palette.onSecondaryContainer.main, palette.secondaryContainer.main)
                        },
                        /*'&:focus': {
                            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            color: getStateLayerColor(StateLayer.Focus, palette.onSecondaryContainer.main, palette.secondaryContainer.main)
                        },*/
                        '&:active': {
                            backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            color: getStateLayerColor(StateLayer.Press, palette.onSecondaryContainer.main, palette.secondaryContainer.main)
                        },
                    }
                },
            }
        }
    }
}