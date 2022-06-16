
import { ThemeOptions } from "@mui/material/styles";
import { Theme, lighten, darken, alpha } from '@mui/material';

interface M3Tone {
    0: string,
    10: string,
    20: string,
    30: string,
    40: string,
    50: string,
    60: string,
    70: string,
    80: string,
    90: string,
    95: string,
    99: string,
    100: string
}
export interface M3ThemeTones {
    primary: M3Tone;
    secondary: M3Tone;
    tertiary: M3Tone;
    neutral: M3Tone;
    neutralVariant: M3Tone;
    error: M3Tone;
}

export interface M3ColorTokens {
    primary: string,
    onPrimary: string,

    primaryContainer: string,
    onPrimaryContainer: string,

    secondary: string,
    onSecondary: string,

    secondaryContainer: string,
    onSecondaryContainer: string,

    tertiary: string,
    onTertiary: string,

    tertiaryContainer: string,
    onTertiaryContainer: string,

    error: string,
    onError: string,

    errorContainer: string,
    onErrorContainer: string,

    background: string,
    onBackground: string,

    surface: string,
    onSurface: string,

    surfaceVariant: string,
    onSurfaceVariant: string,

    inverseSurface: string,
    inverseOnSurface: string,

    inversePrimary: string,
    surfaceTint?: string,

    outline: string,
    shadow: string,
}

export type M3ThemeMode = 'dark' | 'light';

export interface M3ThemeScheme {
    light: M3ColorTokens,
    dark: M3ColorTokens,
    tones?: M3ThemeTones
}

export const DEFAULT_M3_THEME_HCT = {
    BaseColor: "#6750A4",
    Chrome: "#00002f",
    Hue: "#00012a",
    Tone: "#000028"
}

export const DEFAULT_M3_THEME_SCHEME: M3ThemeScheme = {
    light: {
        primary: '#6750A4',
        onPrimary: '#FFFFFF',

        primaryContainer: '#EADDFF',
        onPrimaryContainer: '#21005E',

        secondary: '#9c27b0',
        onSecondary: '#FFFFFF',

        secondaryContainer: '#E8DEF8',
        onSecondaryContainer: '#1E192B',

        tertiary: '#7D5260',
        onTertiary: '#FFFFFF',

        tertiaryContainer: '#FFD8E4',
        onTertiaryContainer: '#370B1E',

        error: '#B3261E',
        onError: '#ffffff',

        errorContainer: '#F9DEDC',
        onErrorContainer: '#370B1E',

        background: '#FFFBFE',
        onBackground: '#1C1B1F',

        surface: '#FFFBFE',
        onSurface: '#1C1B1F',

        surfaceVariant: '#E7E0EC',
        onSurfaceVariant: '#49454E',

        inverseSurface: '#2f3033',
        inverseOnSurface: '#f0f0f3',

        inversePrimary: '#97cbff',

        outline: '#79747E',
        shadow: '#000000',
    },
    dark: {
        primary: '#D0BCFF',
        onPrimary: '#371E73',

        primaryContainer: '#4F378B',
        onPrimaryContainer: '#EADDFF',

        secondary: '#CCC2DC',
        onSecondary: '#332D41',

        secondaryContainer: '#4A4458',
        onSecondaryContainer: '#E8DEF8',

        tertiary: '#EFB8C8',
        onTertiary: '#492532',

        tertiaryContainer: '#633B48',
        onTertiaryContainer: '#FFD8E4',

        error: '#F2B8B5',
        onError: '#601410',

        errorContainer: '#8C1D18',
        onErrorContainer: '#F9DEDC',

        background: '#1C1B1F',
        onBackground: '#E6E1E5',

        surface: '#1C1B1F',
        onSurface: '#E6E1E5',

        surfaceVariant: '#49454F',
        onSurfaceVariant: '#CAC4D0',

        inverseSurface: '#E6E1E5',
        inverseOnSurface: '#313033',

        inversePrimary: '#6750A4',

        outline: '#938F99',
        shadow: '#000000',
    },
};

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

export const getDesignTokens = (mode: M3ThemeMode, scheme: M3ColorTokens) => {
    return ({
        palette: {
            mode,
            primary: {
                main: scheme.primary,
                contrastText: scheme.onPrimary
            },
            onPrimary: {
                main: scheme.onPrimary,
                contrastText: scheme.primary
            },
            primaryContainer: {
                main: scheme.primaryContainer,
                contrastText: scheme.onPrimaryContainer
            },
            onPrimaryContainer: {
                main: scheme.onPrimaryContainer,
                contrastText: scheme.primaryContainer
            },
            secondary: {
                main: scheme.secondary,
                contrastText: scheme.onSecondary
            },
            onSecondary: {
                main: scheme.onSecondary,
                contrastText: scheme.secondary
            },
            secondaryContainer: {
                main: scheme.secondaryContainer,
                contrastText: scheme.onSecondaryContainer
            },
            onSecondaryContainer: {
                main: scheme.onSecondaryContainer,
                contrastText: scheme.secondaryContainer
            },
            tertiary: {
                main: scheme.tertiary,
                contrastText: scheme.onTertiary
            },
            onTertiary: {
                main: scheme.onTertiary,
                contrastText: scheme.tertiary
            },
            tertiaryContainer: {
                main: scheme.tertiaryContainer,
                contrastText: scheme.onTertiaryContainer
            },
            onTertiaryContainer: {
                main: scheme.onTertiaryContainer,
                contrastText: scheme.tertiary
            },
            error: {
                main: scheme.error,
                contrastText: scheme.onError
            },
            onError: {
                main: scheme.onError,
                contrastText: scheme.error
            },
            errorContainer: {
                main: scheme.errorContainer,
                contrastText: scheme.onErrorContainer
            },
            onErrorContainer: {
                main: scheme.onErrorContainer,
                contrastText: scheme.errorContainer
            },
            background2: {
                main: scheme.background,
                contrastText: scheme.onBackground
            },
            onBackground: {
                main: scheme.onBackground,
                contrastText: scheme.background
            },
            surface: {
                main: scheme.surface,
                contrastText: scheme.onSurface
            },
            onSurface: {
                main: scheme.onSurface,
                contrastText: scheme.surface
            },
            surfaceVariant: {
                main: scheme.surfaceVariant,
                contrastText: scheme.onSurfaceVariant
            },
            onSurfaceVariant: {
                main: scheme.onSurfaceVariant,
                contrastText: scheme.surfaceVariant
            },
            inverseSurface: {
                main: scheme.inverseSurface,
                contrastText: scheme.inverseOnSurface
            },
            inverseOnSurface: {
                main: scheme.inverseOnSurface,
                contrastText: scheme.inverseSurface
            },
            inversePrimary: {
                main: scheme.inversePrimary,
                contrastText: scheme.primary
            },

            surfaceTint: scheme.primary,
            outline: scheme.outline,
            shadow: scheme.shadow,

            background: {
                default: scheme.background,
                paper: scheme.surface
            },
            common: {
                white: scheme.background,
                black: scheme.onBackground,
            },
            text: {
                primary: scheme.onPrimaryContainer,
                secondary: scheme.onSecondaryContainer,
            },
            divider: scheme.outline
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
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: '10px',
                        fontWeight: '600'
                    },
                    outlined: {
                        borderColor: theme.palette.outline,
                        color: theme.palette.onSurface.main,
                        '& .MuiChip-icon, & .MuiChip-deleteIcon': {
                            color: theme.palette.primary.main
                        },
                    },
                    filled: {
                        color: theme.palette.onSurfaceVariant.main,
                        background: theme.palette.secondaryContainer.main,
                        '& .MuiChip-icon, & .MuiChip-deleteIcon': {
                            color: theme.palette.onSurfaceVariant.main
                        },
                        '&:hover': {
                            //boxShadow: theme.shadows[1],
                            background: darken(theme.palette.secondaryContainer.main, 0.08),
                        }
                    }
                }
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: theme.palette.surface.main,
                        color: theme.palette.onSurface.main,
                        transition: theme.transitions.create(
                            ['background-color', 'box-shadow', 'color'],
                            {
                                duration: theme.transitions.duration.short,
                            },
                        ),
                    },
                    colorPrimary: {
                        background: theme.palette.secondaryContainer.main,
                        color: theme.palette.secondaryContainer.contrastText,
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
                        borderRadius: '25px',
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
                        backgroundColor: theme.palette.mode === 'dark' ?
                            darken(theme.palette.primary.main, 0.9) :
                            lighten(theme.palette.primary.main, 0.9),
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