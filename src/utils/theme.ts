import { createTheme, PaletteMode, ThemeOptions, experimental_sx as sx, lighten, darken, alpha } from "@mui/material";
import { MaterialPalette } from "../@types/MaterialPalette";

export const createMaterialYouTheme = (themeMode: PaletteMode, colorScheme: MaterialPalette) => {

    const colors = colorScheme;

    return createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: colors.surface,
                        color: colors.onSurface
                    },
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        background: colors.surface,
                        color: colors.onSurfaceVariant,
                        borderRight: `1px solid ${colors.surface}`,
                    },
                    root: {},

                }
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        "&.Mui-selected": {
                            color: colors.onSecondaryContainer
                        }
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '50px'
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: colors.surfaceVariant,
                        color: colors.onSurfaceVariant,
                    }
                }
            },
            MuiFab: {
                styleOverrides: {
                    root: ({ ownerState }: any) => ({
                        borderRadius: '18px',
                        ...(
                            ownerState.color === 'primary' &&
                            {
                                backgroundColor: colors.primaryContainer,
                                color: colors.onPrimaryContainer,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: alpha(colors.onPrimaryContainer, 0.12),
                                }
                            } ||
                            ownerState.color === 'secondary' &&
                            {
                                backgroundColor: colors.secondaryContainer,
                                color: colors.onSecondaryContainer,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: alpha(colors.primary, 0.12),
                                }
                            } ||
                            ownerState.color === 'tertiary' &&
                            {
                                backgroundColor: colors.tertiaryContainer,
                                color: colors.onTertiaryContainer,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: alpha(colors.onTertiaryContainer, 0.12),
                                }
                            }
                        ),
                    }),
                },
            }
        },
        palette: {
            mode: themeMode,
            primary: {
                main: colors.primary,
                contrastText: colors.onPrimary,
            },
            secondary: {
                main: colors.secondary,
                contrastText: colors.onSecondary,
            },
            background: {
                default: colors.background,
                paper: colors.surface
            },
            common: {
                white: colors.background,
                black: colors.onBackground,
            },
            divider: colors.outline,
            text: {
                primary: colors.onPrimaryContainer,
                secondary: colors.onSecondaryContainer,
            },
            error: {
                main: colors.error,
                contrastText: colors.onError
            },
            action: {
                selected: colors.secondaryContainer,
                //selectedOpacity: 0.2,
            }
        },
        typography: {
            fontFamily: 'Roboto'
        }
    });
}