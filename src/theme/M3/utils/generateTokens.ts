import { argbFromHex, hexFromArgb, themeFromSourceColor } from "@material/material-color-utilities";
import { ThemeMode, ThemeTokens, TonalPalette, Tone } from "../..";

const getColorToken = (themeMode: ThemeMode, palette: Tone, lightLevel: number, darkLevel: number): string => palette[themeMode == 'light' ? lightLevel : darkLevel];

export const generateDesignTokens = (themeMode: ThemeMode, tonalPalette: TonalPalette): ThemeTokens => {

    const { primary, secondary, tertiary, neutral, neutralVariant, error } = tonalPalette;

    const { customColors } = themeFromSourceColor(argbFromHex(tonalPalette.primary[40]), [
        {
            name: 'info',
            value: argbFromHex('#0288d1'),
            blend: true
        },
        {
            name: 'success',
            value: argbFromHex('#2e7d32'),
            blend: true
        },
        {
            name: 'warning',
            /*value: argbFromHex('#ed6c02'),*/
            value: argbFromHex('#f59e0b'),
            blend: true
        }
    ]);

    return {
        primary: getColorToken(themeMode, primary, 40, 80),
        onPrimary: getColorToken(themeMode, primary, 100, 20),
        primaryContainer: getColorToken(themeMode, primary, 90, 30),
        onPrimaryContainer: getColorToken(themeMode, primary, 10, 90),

        secondary: getColorToken(themeMode, secondary, 40, 80),
        onSecondary: getColorToken(themeMode, secondary, 100, 20),
        secondaryContainer: getColorToken(themeMode, secondary, 90, 30),
        onSecondaryContainer: getColorToken(themeMode, secondary, 10, 90),

        tertiary: getColorToken(themeMode, tertiary, 40, 80),
        onTertiary: getColorToken(themeMode, tertiary, 100, 20),
        tertiaryContainer: getColorToken(themeMode, tertiary, 90, 30),
        onTertiaryContainer: getColorToken(themeMode, tertiary, 10, 90),

        error: getColorToken(themeMode, error, 40, 80),
        onError: getColorToken(themeMode, error, 100, 20),
        errorContainer: getColorToken(themeMode, error, 90, 30),
        onErrorContainer: getColorToken(themeMode, error, 10, 90),

        primaryFixed: getColorToken(themeMode, primary, 90, 90),
        primaryFixedDim: getColorToken(themeMode, primary, 80, 80),
        onPrimaryFixed: getColorToken(themeMode, primary, 10, 10),
        onPrimaryFixedVariant: getColorToken(themeMode, primary, 30, 30),

        secondaryFixed: getColorToken(themeMode, secondary, 90, 90),
        secondaryFixedDim: getColorToken(themeMode, secondary, 80, 80),
        onSecondaryFixed: getColorToken(themeMode, secondary, 10, 10),
        onSecondaryFixedVariant: getColorToken(themeMode, secondary, 30, 30),

        tertiaryFixed: getColorToken(themeMode, tertiary, 90, 90),
        tertiaryFixedDim: getColorToken(themeMode, tertiary, 80, 80),
        onTertiaryFixed: getColorToken(themeMode, tertiary, 10, 10),
        onTertiaryFixedVariant: getColorToken(themeMode, tertiary, 30, 30),

        surface: getColorToken(themeMode, neutral, 98, 6),
        onSurface: getColorToken(themeMode, neutral, 10, 90),

        surfaceDim: getColorToken(themeMode, neutral, 87, 6),
        surfaceBright: getColorToken(themeMode, neutral, 98, 24),

        surfaceContainerLowest: getColorToken(themeMode, neutral, 100, 4),
        surfaceContainerLow: getColorToken(themeMode, neutral, 96, 10),
        surfaceContainer: getColorToken(themeMode, neutral, 94, 12),
        surfaceContainerHigh: getColorToken(themeMode, neutral, 92, 17),
        surfaceContainerHighest: getColorToken(themeMode, neutral, 90, 22),

        surfaceVariant: getColorToken(themeMode, neutralVariant, 90, 30),
        onSurfaceVariant: getColorToken(themeMode, neutralVariant, 30, 80),

        outline: getColorToken(themeMode, neutralVariant, 50, 60),
        outlineVariant: getColorToken(themeMode, neutralVariant, 80, 30),

        inverseSurface: getColorToken(themeMode, neutral, 20, 90),
        inverseOnSurface: getColorToken(themeMode, neutral, 95, 20),

        inversePrimary: getColorToken(themeMode, primary, 80, 40),
        inverseOnPrimary: '',

        shadow: getColorToken(themeMode, neutral, 0, 0),
        scrim: getColorToken(themeMode, neutral, 0, 0),

        surfaceTintColor: getColorToken(themeMode, primary, 40, 80),

        background: getColorToken(themeMode, neutral, 98, 6),
        onBackground: getColorToken(themeMode, neutral, 10, 90),

        info: hexFromArgb(customColors[0][themeMode].color),
        onInfo: hexFromArgb(customColors[0][themeMode].onColor),
        infoContainer: hexFromArgb(customColors[0][themeMode].colorContainer),
        onInfoContainer: hexFromArgb(customColors[0][themeMode].onColorContainer),

        success: hexFromArgb(customColors[1][themeMode].color),
        onSuccess: hexFromArgb(customColors[1][themeMode].onColor),
        successContainer: hexFromArgb(customColors[1][themeMode].colorContainer),
        onSuccessContainer: hexFromArgb(customColors[1][themeMode].onColorContainer),

        warning: hexFromArgb(customColors[2][themeMode].color),
        onWarning: hexFromArgb(customColors[2][themeMode].onColor),
        warningContainer: hexFromArgb(customColors[2][themeMode].colorContainer),
        onWarningContainer: hexFromArgb(customColors[2][themeMode].onColorContainer)
    };
} 