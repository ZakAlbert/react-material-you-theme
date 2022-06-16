
import { useState } from 'react';

import 'material-dynamic-colors';

export const DefaultColor: string = '#6750A4';

//TODO: CREAR HOOK PARA GENERAR LOS COLORES DEL TEMA USADOS EN M3ThemeProvider
const useDynamicColor = () => {

    const [themeColors, setThemeColors] = useState();

    /*useEffect(() => {
        const getColors = async () => {
            generateThemeColors(DefaultColor);
        };
        getColors();
    }, []);*/

    const generateThemeColors = async (value: string) => {
    };

    return [themeColors, generateThemeColors];
};

export default useDynamicColor;
