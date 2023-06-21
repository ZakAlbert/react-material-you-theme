import { DarkTokensDefault, LightTokensDefault, ThemeTokens } from "./ThemeTokens"
import { TonalPalette, TonalPaletteDefault } from './TonalPalette';

export type ThemeScheme = {
    tones: TonalPalette;
    light: ThemeTokens;
    dark: ThemeTokens;
}

export const ThemeSchemeDefault = {
    tones: TonalPaletteDefault,
    light: LightTokensDefault,
    dark: DarkTokensDefault,
}