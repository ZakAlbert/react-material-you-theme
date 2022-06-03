
export interface MaterialPalette {
    primary: string,
    onPrimary: string,

    primaryContainer: string,
    onPrimaryContainer: string,

    secondary: string,
    onSecondary: string,

    secondaryContainer: string,
    onSecondaryContainer: string,

    tertiary: string,
    onTertiary?: string,

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

export interface ColorScheme {
    light: MaterialPalette,
    dark: MaterialPalette
}