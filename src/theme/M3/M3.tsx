import ThemeModeProvider from "./providers/ThemeModeProvider";
import ThemeSchemeProvider from "./providers/ThemeSchemeProvider";
import M3Theme from "./wrapper/M3Theme";

interface M3Props {
    children?: React.ReactNode;
};

const M3 = ({ children }: M3Props) => {

    return (
        // ThemeModeProvider -> ThemeSchemeProvider
        <ThemeModeProvider>
            <ThemeSchemeProvider>
                <M3Theme>
                    {children}
                </M3Theme>
            </ThemeSchemeProvider>
        </ThemeModeProvider >
    );
}

export default M3;