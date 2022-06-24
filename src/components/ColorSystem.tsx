import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FC, useContext } from "react";
import { ThemeSchemeContext } from '../theme/context/ThemeSchemeContext';

const ColorSystem = () => {


    const theme = useTheme();
    const { themeScheme } = useContext(ThemeSchemeContext);
    const { light, dark, tones } = themeScheme;

    const ColorBox: FC<{ title: string, color?: string, onColor?: string }> = ({ title, color, onColor }) => {
        return (
            <Box sx={{ transition: 'all 1s', width: '100%', height: 110, justifyContent: 'space-between', display: 'flex', padding: 2, flexDirection: 'column', backgroundColor: color, color: onColor }} >
                <Typography variant="subtitle2">{title}</Typography>
                <Typography variant="subtitle2" >{color}</Typography>
            </Box >
        );
    }
    return (
        <>
            <Typography variant='h4' marginBottom={2} >Color System</Typography>
            <Grid container columns={16} spacing={2} marginBottom={3}>
                <Grid item xs={8}>
                    <Typography variant='h5' marginBottom={2}>Light</Typography>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Primary" color={light.primary} onColor={light.onPrimary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary" color={light.onPrimary} onColor={light.primary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Primary Container" color={light.primaryContainer} onColor={light.onPrimaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary Container" color={light.onPrimaryContainer} onColor={light.primaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary" color={light.secondary} onColor={light.onSecondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary" color={light.onSecondary} onColor={light.secondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary Container" color={light.secondaryContainer} onColor={light.onSecondaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary Container" color={light.onSecondaryContainer} onColor={light.secondaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary" color={light.tertiary} onColor={light.onTertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary" color={light.onTertiary} onColor={light.tertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary Container" color={light.tertiaryContainer} onColor={light.onTertiaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary Container" color={light.onTertiaryContainer} onColor={light.tertiaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Background" color={light.background} onColor={light.onBackground} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Background" color={light.onBackground} onColor={light.background} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Surface" color={light.surface} onColor={light.onSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface" color={light.onSurface} onColor={light.surface} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Surface Variant" color={light.surfaceVariant} onColor={light.onSurfaceVariant} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface Variant" color={light.onSurfaceVariant} onColor={light.surfaceVariant} />
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox title="Outline" color={light.outline} onColor={light.background} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Error" color={light.error} onColor={light.onError} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error" color={light.onError} onColor={light.error} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Error Container" color={light.errorContainer} onColor={light.onErrorContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error Container" color={light.onErrorContainer} onColor={light.errorContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={12} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse Surface" color={light.inverseSurface} onColor={light.inverseOnSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse On Surface" color={light.inverseOnSurface} onColor={light.inverseSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse Primary" color={light.inversePrimary} onColor={light.onPrimaryContainer} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h5' marginBottom={2} >Dark</Typography>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Primary" color={dark.primary} onColor={dark.onPrimary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary" color={dark.onPrimary} onColor={dark.primary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Primary Container" color={dark.primaryContainer} onColor={dark.onPrimaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary Container" color={dark.onPrimaryContainer} onColor={dark.primaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary" color={dark.secondary} onColor={dark.onSecondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary" color={dark.onSecondary} onColor={dark.secondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary Container" color={dark.secondaryContainer} onColor={dark.onSecondaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary Container" color={dark.onSecondaryContainer} onColor={dark.secondaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary" color={dark.tertiary} onColor={dark.onTertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary" color={dark.onTertiary} onColor={dark.tertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary Container" color={dark.tertiaryContainer} onColor={dark.onTertiaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary Container" color={dark.onTertiaryContainer} onColor={dark.tertiaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Background" color={dark.background} onColor={dark.onBackground} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Background" color={dark.onBackground} onColor={dark.background} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Surface" color={dark.surface} onColor={dark.onSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface" color={dark.onSurface} onColor={dark.surface} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Surface Variant" color={dark.surfaceVariant} onColor={dark.onSurfaceVariant} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface Variant" color={dark.onSurfaceVariant} onColor={dark.surfaceVariant} />
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox title="Outline" color={dark.outline} onColor={dark.background} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Error" color={dark.error} onColor={dark.onError} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error" color={dark.onError} onColor={dark.error} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Error Container" color={dark.errorContainer} onColor={dark.onErrorContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error Container" color={dark.onErrorContainer} onColor={dark.errorContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={12} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse Surface" color={dark.inverseSurface} onColor={dark.inverseOnSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse On Surface" color={dark.inverseOnSurface} onColor={dark.inverseSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Inverse Primary" color={dark.inversePrimary} onColor={dark.onPrimaryContainer} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {tones &&
                (
                    <>
                        <Typography variant='h4' marginBottom={2} >Color Tones</Typography>
                        <Grid container columns={1}>
                            <Grid item xs={1}>
                                {
                                    Object.entries(JSON.parse(JSON.stringify(tones))).map(([k, v]) => {
                                        return (
                                            <Box key={k}>
                                                <Typography variant='h5' marginBottom={2} >{k}</Typography>
                                                <Grid container columns={13} marginBottom={2}>
                                                    {
                                                        Object.entries(JSON.parse(JSON.stringify(v))).map(([k1, v1]: any) => {
                                                            return (
                                                                <Grid item xs={1} key={k1}>
                                                                    <ColorBox title={k1} color={v1} onColor={theme.palette.getContrastText(v1)} />
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                            </Box>
                                        );
                                    })
                                }
                            </Grid>
                        </Grid>
                    </>
                )
            }
        </>
    );
}

export default ColorSystem;