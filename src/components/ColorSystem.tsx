import { Box, Grid, SxProps, Theme, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ColorContext, ColorContextType } from "../context/ui/ColorContext";

const ColorSystem = () => {

    const { colorScheme } = useContext<ColorContextType>(ColorContext);

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
            <Grid container columns={16} spacing={2} >
                <Grid item xs={8}>
                    <Typography variant='h5' marginBottom={2}>Light</Typography>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Primary" color={colorScheme['light'].primary} onColor={colorScheme['light'].onPrimary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary" color={colorScheme['light'].onPrimary} onColor={colorScheme['light'].primary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Primary Container" color={colorScheme['light'].primaryContainer} onColor={colorScheme['light'].onPrimaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary Container" color={colorScheme['light'].onPrimaryContainer} onColor={colorScheme['light'].primaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary" color={colorScheme['light'].secondary} onColor={colorScheme['light'].onSecondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary" color={colorScheme['light'].onSecondary} onColor={colorScheme['light'].secondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary Container" color={colorScheme['light'].secondaryContainer} onColor={colorScheme['light'].onSecondaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary Container" color={colorScheme['light'].onSecondaryContainer} onColor={colorScheme['light'].secondaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary" color={colorScheme['light'].tertiary} onColor={colorScheme['light'].onTertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary" color={colorScheme['light'].onTertiary} onColor={colorScheme['light'].tertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary Container" color={colorScheme['light'].tertiaryContainer} onColor={colorScheme['light'].onTertiaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary Container" color={colorScheme['light'].onTertiaryContainer} onColor={colorScheme['light'].tertiaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Background" color={colorScheme['light'].background} onColor={colorScheme['light'].onBackground} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Background" color={colorScheme['light'].onBackground} onColor={colorScheme['light'].background} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Surface" color={colorScheme['light'].surface} onColor={colorScheme['light'].onSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface" color={colorScheme['light'].onSurface} onColor={colorScheme['light'].surface} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Surface Variant" color={colorScheme['light'].surfaceVariant} onColor={colorScheme['light'].onSurfaceVariant} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface Variant" color={colorScheme['light'].onSurfaceVariant} onColor={colorScheme['light'].surfaceVariant} />
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox title="Outline" color={colorScheme['light'].outline} onColor={colorScheme['light'].background} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Error" color={colorScheme['light'].error} onColor={colorScheme['light'].onError} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error" color={colorScheme['light'].onError} onColor={colorScheme['light'].error} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Error Container" color={colorScheme['light'].errorContainer} onColor={colorScheme['light'].onErrorContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error Container" color={colorScheme['light'].onErrorContainer} onColor={colorScheme['light'].errorContainer} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='h5' marginBottom={2} >Dark</Typography>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Primary" color={colorScheme['dark'].primary} onColor={colorScheme['dark'].onPrimary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary" color={colorScheme['dark'].onPrimary} onColor={colorScheme['dark'].primary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Primary Container" color={colorScheme['dark'].primaryContainer} onColor={colorScheme['dark'].onPrimaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Primary Container" color={colorScheme['dark'].onPrimaryContainer} onColor={colorScheme['dark'].primaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary" color={colorScheme['dark'].secondary} onColor={colorScheme['dark'].onSecondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary" color={colorScheme['dark'].onSecondary} onColor={colorScheme['dark'].secondary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Secondary Container" color={colorScheme['dark'].secondaryContainer} onColor={colorScheme['dark'].onSecondaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Secondary Container" color={colorScheme['dark'].onSecondaryContainer} onColor={colorScheme['dark'].secondaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary" color={colorScheme['dark'].tertiary} onColor={colorScheme['dark'].onTertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary" color={colorScheme['dark'].onTertiary} onColor={colorScheme['dark'].tertiary} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Tertiary Container" color={colorScheme['dark'].tertiaryContainer} onColor={colorScheme['dark'].onTertiaryContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Tertiary Container" color={colorScheme['dark'].onTertiaryContainer} onColor={colorScheme['dark'].tertiaryContainer} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Background" color={colorScheme['dark'].background} onColor={colorScheme['dark'].onBackground} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Background" color={colorScheme['dark'].onBackground} onColor={colorScheme['dark'].background} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Surface" color={colorScheme['dark'].surface} onColor={colorScheme['dark'].onSurface} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface" color={colorScheme['dark'].onSurface} onColor={colorScheme['dark'].surface} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={2}>
                        <Grid item xs={4}>
                            <ColorBox title="Surface Variant" color={colorScheme['dark'].surfaceVariant} onColor={colorScheme['dark'].onSurfaceVariant} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Surface Variant" color={colorScheme['dark'].onSurfaceVariant} onColor={colorScheme['dark'].surfaceVariant} />
                        </Grid>
                        <Grid item xs={8}>
                            <ColorBox title="Outline" color={colorScheme['dark'].outline} onColor={colorScheme['dark'].background} />
                        </Grid>
                    </Grid>
                    <Grid container columns={16} marginBottom={1}>
                        <Grid item xs={4}>
                            <ColorBox title="Error" color={colorScheme['dark'].error} onColor={colorScheme['dark'].onError} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error" color={colorScheme['dark'].onError} onColor={colorScheme['dark'].error} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="Error Container" color={colorScheme['dark'].errorContainer} onColor={colorScheme['dark'].onErrorContainer} />
                        </Grid>
                        <Grid item xs={4}>
                            <ColorBox title="On Error Container" color={colorScheme['dark'].onErrorContainer} onColor={colorScheme['dark'].errorContainer} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ColorSystem;