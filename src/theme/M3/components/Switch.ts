import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from "@mui/material";

interface M3Switch {
    MuiSwitch: {
        defaultProps?: ComponentsProps['MuiSwitch'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiSwitch'];
        variants?: ComponentsVariants['MuiSwitch'];
    }
};

export const getSwitch = (theme: Theme): M3Switch => {
    const { palette } = theme;
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    marginLeft: 12,
                    marginRight: 8,
                    borderColor: palette.outline.main,
                    '& .MuiSwitch-switchBase': {
                        padding: 0,
                        margin: 7,
                        transitionDuration: '100ms',
                        '&.Mui-checked': {
                            transform: 'translateX(16px)',
                            margin: 4,
                            '& + .MuiSwitch-track': {
                                backgroundColor: palette.primary.main,
                                opacity: 1,
                                border: 0,
                            },
                            '& .MuiSwitch-thumb': {
                                color: palette.onPrimary.main,
                                width: 18,
                                height: 18,
                            },
                            '&.Mui-disabled + .MuiSwitch-track': {
                                backgroundColor: alpha(palette.onSurface.main, 0.1),
                            },
                            '&.Mui-disabled .MuiSwitch-thumb': {
                                color: alpha(palette.surface.main, 0.8),
                            },
                        },
                        '&.Mui-focusVisible .MuiSwitch-thumb': {
                            color: palette.primary.main,
                            border: `6px solid ${palette.onPrimary.main}`,
                        },
                        '&.Mui-disabled .MuiSwitch-thumb': {
                            color: alpha(palette.onSurface.main, 0.3),
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxSizing: 'border-box',
                        color: palette.outline.main,
                        width: 12,
                        height: 12,
                        '&:before': {
                            content: "''",
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            left: 0,
                            top: 0,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        },
                    },
                    '& .MuiSwitch-track': {
                        borderRadius: 20,
                        border: `2px solid ${palette.outline.main}`,
                        backgroundColor: palette.surfaceContainerHighest.main,

                        opacity: 1,
                        transition: 'background .2s'
                    },
                },
            }
        }
    }
}