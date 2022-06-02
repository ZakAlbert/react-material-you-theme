import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeColor } from '../@types/MaterialPalette';

import 'material-dynamic-colors';
import { DefaultThemeColor } from '../model/default-theme-color';

export const DefaultColor: string = '#6750A4';

const useDynamicColor = (): [ThemeColor, (color: string) => {}] => {
    const [themeColors, setThemeColors] = useState<ThemeColor>(DefaultThemeColor);

    /*useEffect(() => {
        const getColors = async () => {
            generateThemeColors(DefaultColor);
        };
        getColors();
    }, []);*/

    const generateThemeColors = async (value: string) => {
        const colors = await materialDynamicColors(value);
        setThemeColors(colors);
    };

    return [themeColors, generateThemeColors];
};

export default useDynamicColor;
