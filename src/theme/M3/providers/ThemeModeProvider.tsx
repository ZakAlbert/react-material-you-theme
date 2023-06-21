import { FC, createContext } from 'react';
import { ThemeMode, useThemeMode } from '../..';


export type ThemeModeContextType = {
    themeMode: ThemeMode,
    toggleTheme: () => void,
    setThemeMode: (mode: ThemeMode) => void
};

export interface ThemeModeProviderProps {
    children?: React.ReactNode;
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
    themeMode: 'light',
    toggleTheme: () => { },
    setThemeMode: () => { }
});

const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {

    const [themeMode, toggleTheme, setThemeMode] = useThemeMode();

    return (<ThemeModeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
        {children}
    </ThemeModeContext.Provider>);
};

export default ThemeModeProvider;