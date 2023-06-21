
import { ThemeMode, ThemeScheme, TonalPalette } from "../..";
import { ThemeOptions, } from '@mui/material';

declare module '@mui/material/styles/createTheme' {
    interface ThemeOptions {
        tones?: TonalPalette
    }
}

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        [index: string]: PaletteColor;
        //primary: PaletteColor;
        onPrimary: PaletteColor;
        primaryContainer: PaletteColor;
        onPrimaryContainer: PaletteColor;

        //secondary: PaletteColor;
        onSecondary: PaletteColor;
        secondaryContainer: PaletteColor;
        onSecondaryContainer: PaletteColor;

        tertiary: PaletteColor;
        onTertiary: PaletteColor;
        tertiaryContainer: PaletteColor;
        onTertiaryContainer: PaletteColor;

        //error: PaletteColor;
        onError: PaletteColor;
        errorContainer: PaletteColor;
        onErrorContainer: PaletteColor;

        primaryFixed: PaletteColor;
        primaryFixedDim: PaletteColor;
        onPrimaryFixed: PaletteColor;
        onPrimaryFixedVariant: PaletteColor;

        secondaryFixed: PaletteColor;
        secondaryFixedDim: PaletteColor;
        onSecondaryFixed: PaletteColor;
        onSecondaryFixedVariant: PaletteColor;

        tertiaryFixed: PaletteColor;
        tertiaryFixedDim: PaletteColor;
        onTertiaryFixed: PaletteColor;
        onTertiaryFixedVariant: PaletteColor;

        surface: PaletteColor;
        onSurface: PaletteColor;

        surfaceDim: PaletteColor;
        surfaceBright: PaletteColor;

        surfaceContainerLowest: PaletteColor;
        surfaceContainerLow: PaletteColor;
        surfaceContainer: PaletteColor;
        surfaceContainerHigh: PaletteColor;
        surfaceContainerHighest: PaletteColor;

        surfaceVariant: PaletteColor;
        onSurfaceVariant: PaletteColor;

        outline: PaletteColor;
        outlineVariant: PaletteColor;

        inverseSurface: PaletteColor;
        inverseOnSurface: PaletteColor;
        inversePrimary: PaletteColor;
        inverseOnPrimary: PaletteColor;

        shadow: PaletteColor;
        scrim: PaletteColor;

        surfaceTintColor: PaletteColor;

        //background: PaletteColor;
        onBackground: PaletteColor;

        //info: PaletteColor;
        onInfo: PaletteColor;
        infoContainer: PaletteColor;
        onInfoContainer: PaletteColor;

        //success: PaletteColor;
        onSuccess: PaletteColor;
        successContainer: PaletteColor;
        onSuccessContainer: PaletteColor;

        //warning: PaletteColor;
        onWarning: PaletteColor;
        warningContainer: PaletteColor;
        onWarningContainer: PaletteColor;
    }
}

export const getMUIPalette = (themeMode: ThemeMode, themescheme: ThemeScheme) => {
    const scheme = themescheme[themeMode];
    return {
        palette: {
            themeMode,
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
                contrastText: scheme.tertiaryContainer
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

            primaryFixed: {
                main: scheme.primaryFixed,
            },
            primaryFixedDim: {
                main: scheme.primaryFixedDim,
            },
            onPrimaryFixed: {
                main: scheme.onPrimaryFixed,
            },
            onPrimaryFixedVariant: {
                main: scheme.onPrimaryFixedVariant,
            },

            secondaryFixed: {
                main: scheme.secondaryFixed,
            },
            secondaryFixedDim: {
                main: scheme.secondaryFixedDim,
            },
            onSecondaryFixed: {
                main: scheme.onSecondaryFixed,
            },
            onSecondaryFixedVariant: {
                main: scheme.onSecondaryFixedVariant,
            },

            tertiaryFixed: {
                main: scheme.tertiaryFixed,
            },
            tertiaryFixedDim: {
                main: scheme.tertiaryFixedDim,
            },
            onTertiaryFixed: {
                main: scheme.onTertiaryFixed,
            },
            onTertiaryFixedVariant: {
                main: scheme.onTertiaryFixedVariant,
            },

            surface: {
                main: scheme.surface,
                contrastText: scheme.onSurface
            },
            onSurface: {
                main: scheme.onSurface,
                contrastText: scheme.surface
            },

            surfaceDim: {
                main: scheme.surfaceDim,
            },
            surfaceBright: {
                main: scheme.surfaceBright,
            },

            surfaceContainerLowest: {
                main: scheme.surfaceContainerLowest,
            },
            surfaceContainerLow: {
                main: scheme.surfaceContainerLow,
            },
            surfaceContainer: {
                main: scheme.surfaceContainer,
            },
            surfaceContainerHigh: {
                main: scheme.surfaceContainerHigh,
            },
            surfaceContainerHighest: {
                main: scheme.surfaceContainerHighest,
            },

            surfaceVariant: {
                main: scheme.surfaceVariant,
                contrastText: scheme.onSurfaceVariant
            },
            onSurfaceVariant: {
                main: scheme.onSurfaceVariant,
                contranstText: scheme.surfaceVariant
            },

            outline: {
                main: scheme.outline,
            },
            outlineVariant: {
                main: scheme.outlineVariant,
            },

            inversePrimary: {
                main: scheme.inversePrimary,
                contrastText: scheme.inverseOnPrimary
            },
            inverseOnPrimary: {
                main: scheme.inverseOnPrimary,
                contrastText: scheme.inversePrimary
            },
            inverseSurface: {
                main: scheme.inverseSurface,
                contrastText: scheme.inverseSurface
            },
            inverseOnSurface: {
                main: scheme.inverseOnSurface,
                contrastText: scheme.inverseSurface
            },

            shadow: {
                main: scheme.shadow,
            },
            scrim: {
                main: scheme.scrim,
            },

            surfaceTintColor: {
                main: scheme.surfaceTintColor,
            },

            /**/
            background: {
                default: scheme.surfaceContainer,
                paper: scheme.surface
            },
            onBackground: {
                main: scheme.onSurface,
            },
            common: {
                white: scheme.background,
                black: scheme.onBackground
            },
            text: {
                primary: scheme.onSurface,
                secondary: scheme.onSecondaryContainer,
            },

            info: {
                main: scheme.info,
                contrastText: scheme.onInfo
            },
            onInfo: {
                main: scheme.onInfo,
                contrastText: scheme.info
            },
            infoContainer: {
                main: scheme.infoContainer,
                contrastText: scheme.onInfoContainer
            },
            onInfoContainer: {
                main: scheme.onInfoContainer,
                contrastText: scheme.infoContainer
            },

            success: {
                main: scheme.success,
                contrastText: scheme.onSuccess
            },
            onSuccess: {
                main: scheme.onSuccess,
                contrastText: scheme.success
            },
            successContainer: {
                main: scheme.successContainer,
                contrastText: scheme.onSuccessContainer
            },
            onSuccessContainer: {
                main: scheme.onSuccessContainer,
                contrastText: scheme.successContainer
            },

            warning: {
                main: scheme.warning,
                contrastText: scheme.onWarning
            },
            onWarning: {
                main: scheme.onWarning,
                contrastText: scheme.warning
            },
            warningContainer: {
                main: scheme.warningContainer,
                contrastText: scheme.onWarningContainer
            },
            onWarningContainer: {
                main: scheme.onWarningContainer,
                contrastText: scheme.warningContainer
            },

            divider: scheme.outline
        },
        tones: themescheme.tones
    } as ThemeOptions;
}