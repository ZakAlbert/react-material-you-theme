
import { ThemeOptions } from "@mui/material/styles";
import { ColorScheme } from "../@types/MaterialPalette";
import { Theme, lighten, darken, alpha } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
    //* MY = Material You
    interface Palette {
        //primary: string,
        onPrimary: PaletteColor,

        primaryContainer: PaletteColor,
        onPrimaryContainer: PaletteColor,

        //secondary: string,
        onSecondary: PaletteColor,

        secondaryContainer: PaletteColor,
        onSecondaryContainer: PaletteColor,

        tertiary: PaletteColor,
        onTertiary: PaletteColor,

        tertiaryContainer: PaletteColor,
        onTertiaryContainer: PaletteColor,

        //error: string,
        onError: PaletteColor,

        errorContainer: PaletteColor,
        onErrorContainer: PaletteColor,

        background2: PaletteColor,
        onBackground: PaletteColor,

        surface: PaletteColor,
        onSurface: PaletteColor,

        surfaceVariant: PaletteColor,
        onSurfaceVariant: PaletteColor,

        inverseSurface: PaletteColor,
        inverseOnSurface: PaletteColor,
        inversePrimary: PaletteColor,

        surfaceTint: string,

        outline: string,
        shadow: string,
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        elevated: true;
        filled: true;
        tonal: true;
    }
}

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        filled: true;
    }
}

declare module '@mui/material/Fab' {
    interface FabPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        surface: true;
    }
    interface FabPropsColorOverrides {
        tertiary: true,
        surface: true,
    }
}

export const getDesignTokens = (mode: 'light' | 'dark', scheme: ColorScheme) => {
    return ({
        palette: {
            mode,
            primary: {
                main: scheme[mode].primary,
                contrastText: scheme[mode].onPrimary
            },
            onPrimary: {
                main: scheme[mode].onPrimary,
                contrastText: scheme[mode].primary
            },
            primaryContainer: {
                main: scheme[mode].primaryContainer,
                contrastText: scheme[mode].onPrimaryContainer
            },
            onPrimaryContainer: {
                main: scheme[mode].onPrimaryContainer,
                contrastText: scheme[mode].primaryContainer
            },
            secondary: {
                main: scheme[mode].secondary,
                contrastText: scheme[mode].onSecondary
            },
            onSecondary: {
                main: scheme[mode].onSecondary,
                contrastText: scheme[mode].secondary
            },
            secondaryContainer: {
                main: scheme[mode].secondaryContainer,
                contrastText: scheme[mode].onSecondaryContainer
            },
            onSecondaryContainer: {
                main: scheme[mode].onSecondaryContainer,
                contrastText: scheme[mode].secondaryContainer
            },
            tertiary: {
                main: scheme[mode].tertiary,
                contrastText: scheme[mode].onTertiary
            },
            onTertiary: {
                main: scheme[mode].onTertiary,
                contrastText: scheme[mode].tertiary
            },
            tertiaryContainer: {
                main: scheme[mode].tertiaryContainer,
                contrastText: scheme[mode].onTertiaryContainer
            },
            onTertiaryContainer: {
                main: scheme[mode].onTertiaryContainer,
                contrastText: scheme[mode].tertiary
            },
            error: {
                main: scheme[mode].error,
                contrastText: scheme[mode].onError
            },
            onError: {
                main: scheme[mode].onError,
                contrastText: scheme[mode].error
            },
            errorContainer: {
                main: scheme[mode].errorContainer,
                contrastText: scheme[mode].onErrorContainer
            },
            onErrorContainer: {
                main: scheme[mode].onErrorContainer,
                contrastText: scheme[mode].errorContainer
            },
            background2: {
                main: scheme[mode].background,
                contrastText: scheme[mode].onBackground
            },
            onBackground: {
                main: scheme[mode].onBackground,
                contrastText: scheme[mode].background
            },
            surface: {
                main: scheme[mode].surface,
                contrastText: scheme[mode].onSurface
            },
            onSurface: {
                main: scheme[mode].onSurface,
                contrastText: scheme[mode].surface
            },
            surfaceVariant: {
                main: scheme[mode].surfaceVariant,
                contrastText: scheme[mode].onSurfaceVariant
            },
            onSurfaceVariant: {
                main: scheme[mode].onSurfaceVariant,
                contrastText: scheme[mode].surfaceVariant
            },
            inverseSurface: {
                main: scheme[mode].inverseSurface,
                contrastText: scheme[mode].inverseOnSurface
            },
            inverseOnSurface: {
                main: scheme[mode].inverseOnSurface,
                contrastText: scheme[mode].inverseSurface
            },
            inversePrimary: {
                main: scheme[mode].inversePrimary,
                contrastText: scheme[mode].primary
            },

            surfaceTint: scheme[mode].primary,
            outline: scheme[mode].outline,
            shadow: scheme[mode].shadow,

            background: {
                default: scheme[mode].background,
                paper: scheme[mode].surface
            },
            common: {
                white: scheme[mode].background,
                black: scheme[mode].onBackground,
            },
            text: {
                primary: scheme[mode].onPrimaryContainer,
                secondary: scheme[mode].onSecondaryContainer,
            },
            divider: scheme[mode].outline
        },
        typography: {
            fontFamily: 'Roboto'
        },

    } as ThemeOptions);
};

export const getThemedComponents = (theme: Theme): { components: Theme['components'] } => {
    return {
        components: {
            MuiCssBaseline: {
                defaultProps: {
                    enableColorScheme: true
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: theme.palette.outline
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.surface.main,
                        color: theme.palette.onSurface.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                    },
                    colorPrimary: {
                        backgroundColor: alpha(theme.palette.secondaryContainer.main, 0.95),
                        color: theme.palette.onSecondaryContainer.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                    }
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '100px',
                        textTransform: 'none'
                    },
                    outlined: {
                        borderColor: theme.palette.outline,
                        background: theme.palette.surface.main,
                    }
                },
                variants: [
                    {
                        props: { variant: 'elevated' },
                        style: {
                            boxShadow: theme.shadows[1],
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            '&:hover': {
                                background: alpha(theme.palette.primary.main, 0.15),
                            }
                        }
                    },
                    {
                        props: { variant: 'filled' },
                        style: {
                            background: theme.palette.primary.main,
                            color: theme.palette.onPrimary.main,
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.primary.main, 0.85),
                            }
                        }
                    },
                    {
                        props: { variant: 'tonal' },
                        style: {
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.secondaryContainer.main, 0.8),
                            }
                        }
                    }
                ]
            },
            MuiFab: {
                styleOverrides: {
                    root: {
                        borderRadius: '18px',
                    }
                },
                variants: [
                    {
                        props: { variant: 'primary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.primaryContainer.main,
                            color: theme.palette.onPrimaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.primaryContainer.main, 0.08) :
                                    darken(theme.palette.primaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'primary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.primaryContainer.main,
                            color: theme.palette.onPrimaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.primaryContainer.main, 0.08) :
                                    darken(theme.palette.primaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'secondary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.secondaryContainer.main, 0.08) :
                                    darken(theme.palette.secondaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'secondary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.secondaryContainer.main,
                            color: theme.palette.onSecondaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.secondaryContainer.main, 0.08) :
                                    darken(theme.palette.secondaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'tertiary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.tertiaryContainer.main,
                            color: theme.palette.onTertiaryContainer.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.tertiaryContainer.main, 0.08) :
                                    darken(theme.palette.tertiaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'tertiary' },
                        style: {
                            boxShadow: theme.shadows[3],
                            background: theme.palette.tertiaryContainer.main,
                            color: theme.palette.onTertiaryContainer.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: theme.palette.mode === 'dark' ?
                                    lighten(theme.palette.tertiaryContainer.main, 0.08) :
                                    darken(theme.palette.tertiaryContainer.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'surface' },
                        style: {
                            boxShadow: theme.shadows[3],
                            //background: theme.palette.surface.main,
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'extended', color: 'surface' },
                        style: {
                            boxShadow: theme.shadows[3],
                            //background: theme.palette.surface.main,
                            background: alpha(theme.palette.primary.main, 0.05),
                            color: theme.palette.primary.main,
                            fontWeight: 'bold',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    }
                ]
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        padding: '10px 8px'
                    }
                },
                variants: [
                    {
                        props: { variant: 'elevation' },
                        style: {
                            boxShadow: theme.shadows[1],
                            backgroundColor: alpha(theme.palette.primary.main, 0.05),
                            transition: theme.transitions.create(
                                ['background-color', 'box-shadow', 'border-color', 'color'],
                                {
                                    duration: theme.transitions.duration.short,
                                },
                            ),
                            '&:hover': {
                                boxShadow: theme.shadows[2],
                                background: alpha(theme.palette.primary.main, 0.08),
                            }
                        }
                    },
                    {
                        props: { variant: 'filled' },
                        style: {
                            backgroundColor: theme.palette.surfaceVariant.main,
                            transition: theme.transitions.create(
                                ['background-color', 'box-shadow', 'border-color', 'color'],
                                {
                                    duration: theme.transitions.duration.short,
                                },
                            ),
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.surfaceVariant.main, 0.8),
                            }
                        }
                    },
                    {
                        props: { variant: 'outlined' },
                        style: {
                            backgroundColor: theme.palette.surface.main,
                            borderColor: theme.palette.outline,
                            transition: theme.transitions.create(
                                ['background-color', 'box-shadow', 'border-color', 'color'],
                                {
                                    duration: theme.transitions.duration.short,
                                },
                            ),
                            '&:hover': {
                                boxShadow: theme.shadows[1],
                                background: alpha(theme.palette.onSurface.main, 0.05),
                            },
                        }
                    }
                ]
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.surface.main,
                        color: theme.palette.onSurface.main
                    },
                    outlined: {
                        borderColor: theme.palette.outline,
                        backgroundColor: theme.palette.surface.main,
                    }
                },
            },
        }
    };
};