
import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';
import { StateLayer, getStateLayerColor } from '../..';


interface M3ToggleButtonGroup {
    MuiToggleButtonGroup: {
        defaultProps?: ComponentsProps['MuiToggleButtonGroup'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButtonGroup'];
        variants?: ComponentsVariants['MuiToggleButtonGroup'];
    }
}

export const getToggleButtonGroup = (theme: Theme): M3ToggleButtonGroup => {
    const { palette } = theme;
    return {
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    borderRadius: '50px',
                    borderColor: palette.outline.main,
                    '&:not(:first-of-type)': {
                        marginLeft: 0,
                        borderLeft: 0,
                    },
                    '&:hover': {
                        background: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main)
                    },
                    '&.Mui-selected:hover': {
                        background: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
                    }
                },
            }
        },
    };
}