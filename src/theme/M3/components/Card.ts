
import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';
import { StateLayer, getStateLayerColor } from '../..';
import { alpha } from '@mui/material';

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        filled: true;
    }
}

interface M3Card {
    MuiCard: {
        defaultProps?: ComponentsProps['MuiCard'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiCard'];
        variants?: ComponentsVariants['MuiCard'];
    }
}

export const getCard = (theme: Theme): M3Card => {
    const { palette } = theme;
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    padding: '10px 6px'
                }
            },
            variants: [
                {
                    props: { variant: 'elevation' },
                    style: {
                        boxShadow: theme.shadows[1],
                        backgroundColor: palette.surfaceContainerLow.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'border-color', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerLow.main, palette.primary.main),
                            boxShadow: theme.shadows[2]
                        },
                        '&:focus': {
                            boxShadow: theme.shadows[1],
                            background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerLow.main, palette.primary.main)
                        },
                        '&:active': {
                            boxShadow: theme.shadows[1],
                            background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerLow.main, palette.primary.main)
                        },
                        '&.Mui-disabled': {
                            backgroundColor: alpha(palette.surfaceContainerLow.main, 0.38),
                            color: palette.surfaceVariant.main,
                            boxShadow: theme.shadows[0]
                        },
                    }
                },
                {
                    props: { variant: 'filled' },
                    style: {
                        boxShadow: theme.shadows[0],
                        backgroundColor: palette.surfaceContainerHighest.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'border-color', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.primary.main),
                            boxShadow: theme.shadows[1]
                        },
                        '&:focus': {
                            boxShadow: theme.shadows[0],
                            background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHighest.main, palette.primary.main)
                        },
                        '&:active': {
                            boxShadow: theme.shadows[1],
                            background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.primary.main)
                        },
                        '&.Mui-disabled': {
                            backgroundColor: alpha(palette.surfaceContainerHighest.main, 0.38),
                            color: palette.surfaceVariant.main,
                            boxShadow: theme.shadows[1]
                        },
                    }
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        boxShadow: theme.shadows[0],
                        backgroundColor: palette.surface.main,
                        borderColor: palette.outline.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'border-color', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
                            boxShadow: theme.shadows[1]
                        },
                        '&:focus': {
                            boxShadow: theme.shadows[0],
                            background: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.primary.main)
                        },
                        '&:active': {
                            boxShadow: theme.shadows[2],
                            background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.primary.main)
                        },
                        '&.Mui-disabled': {
                            borderColor: alpha(palette.surfaceContainerHighest.main, 0.12),
                            boxShadow: theme.shadows[0]
                        },
                    }
                }
            ]
        }
    };
}