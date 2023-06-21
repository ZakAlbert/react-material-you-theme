import { ErrorDefault, NeutralDefault, NeutralVariantDefault, PrimaryDefault, SecondaryDefault, TertiaryDefault, Tone } from './Tone';

export type TonalPalette = {
    primary: Tone;
    secondary: Tone;
    tertiary: Tone;
    neutral: Tone;
    neutralVariant: Tone;
    error: Tone;
}

export const TonalPaletteDefault: TonalPalette = {
    primary: PrimaryDefault,
    secondary: SecondaryDefault,
    tertiary: TertiaryDefault,
    neutral: NeutralDefault,
    neutralVariant: NeutralVariantDefault,
    error: ErrorDefault,
}

