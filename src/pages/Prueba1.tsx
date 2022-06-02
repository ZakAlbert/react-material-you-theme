
import { useState, useEffect } from 'react';

import useDynamicColor from '../hooks/use-dynamic-color';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import styled from '@mui/material/styles/styled';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/AddTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import NavigationIcon from '@mui/icons-material/NavigationTwoTone';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ColorIcon from '@mui/icons-material/ColorLensTwoTone';
import DarkIcon from '@mui/icons-material/DarkModeTwoTone';
import LightIcon from '@mui/icons-material/LightModeTwoTone';
import NotificationsIcon from '@mui/icons-material/NotificationsTwoTone';


import { createTheme, PaletteMode, ThemeOptions, experimental_sx as sx, CssBaseline } from '@mui/material';
import { DefaultThemeColor } from '../model/default-theme-color';

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: DefaultThemeColor.light.primary,
            contrastText: DefaultThemeColor.light.onPrimary
        },
        secondary: {
            main: DefaultThemeColor.light.secondary,
            contrastText: DefaultThemeColor.light.onSecondary,
        },
        background: {
            default: DefaultThemeColor.light.background,
            paper: DefaultThemeColor.light.surface
        },
        common: {
            white: DefaultThemeColor.light.background,
            black: DefaultThemeColor.light.onBackground,
        },
        divider: DefaultThemeColor.light.outline,
        text: {
            primary: DefaultThemeColor.light.onPrimaryContainer,
            secondary: DefaultThemeColor.light.onSecondaryContainer,
        },
        error: {
            main: DefaultThemeColor.light.error,
            contrastText: DefaultThemeColor.light.onError
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: DefaultThemeColor.light.surface,
                    color: DefaultThemeColor.light.onSurface
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px'
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: sx({
                    borderRadius: '20px'
                }),
                primary: {
                    main: 'white'
                },
                secondary: {
                    main: 'white'
                }
            }
        }
    }
};

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Prueba1 = () => {
    const [themeMode, setThemeMode] = useState<PaletteMode>('light');
    const [theme, setTheme] = useState(createTheme(themeOptions));

    const [count, setCount] = useState(1);
    const [themeColors, generateThemeColors] = useDynamicColor();

    const onClickBtn = () => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        //generateThemeColors('#6750A4');
        generateThemeColors(`#${randomColor}`);
    };

    const onChangeTheme = () => {
        setThemeMode(themeMode == 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        setTheme(createTheme({
            palette: {
                mode: themeMode,
                primary: {
                    main: themeColors[themeMode].primary,
                    contrastText: themeColors[themeMode].onPrimary,
                },
                secondary: {
                    main: themeColors[themeMode].secondary,
                    contrastText: themeColors[themeMode].onSecondary,
                },
                background: {
                    default: themeColors[themeMode].background,
                    paper: themeColors[themeMode].surface
                },
                common: {
                    white: themeColors[themeMode].background,
                    black: themeColors[themeMode].onBackground,
                },
                divider: themeColors[themeMode].outline,
                text: {
                    primary: themeColors[themeMode].onPrimaryContainer,
                    secondary: themeColors[themeMode].onSecondaryContainer,
                },
                error: {
                    main: themeColors[themeMode].error,
                    contrastText: themeColors[themeMode].onError
                },
            },
            components: {
                MuiAppBar: {
                    styleOverrides: {
                        root: {
                            background: themeColors[themeMode].surface,
                            color: themeColors[themeMode].onSurface
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: '50px'
                        }
                    }
                },
                MuiFab: {
                    styleOverrides: {
                        root: sx({
                            borderRadius: '20px'
                        }),
                        primary: {
                            main: 'white'
                        },
                        secondary: {
                            main: 'white'
                        }
                    }
                }
            }
        } as ThemeOptions));

    }, [themeColors, themeMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <AppBar enableColorOnDark color='primary'>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News - Count: {count}
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        <Badge badgeContent={count} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size='large' color='inherit' title='Change Color' onClick={onClickBtn}>
                        <ColorIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit' title='Toggle Theme' onClick={onChangeTheme}>
                        {themeMode == 'light' ? <DarkIcon /> : <LightIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Offset />
            <Box sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}>
                <Container>
                    <Stack spacing={2} marginBottom={2}>
                        <Stack >
                            <Typography variant='h5' >Material You</Typography>
                            <Typography variant='subtitle1'>@ZakAlbert94</Typography>
                        </Stack>
                        <Divider />
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Text</Button>
                            <Button variant="contained">Contained</Button>
                            <Button variant="outlined">Outlined</Button>
                            <Button color='secondary' variant="text">Text</Button>
                            <Button color='secondary' variant="contained">Contained</Button>
                            <Button color='secondary' variant="outlined">Outlined</Button>
                        </Stack>
                        <Divider />
                        <Stack spacing={2} direction="row">
                            <Button startIcon={<DeleteIcon />} variant="text">Text</Button>
                            <Button startIcon={<DeleteIcon />} variant="contained">Contained</Button>
                            <Button startIcon={<DeleteIcon />} variant="outlined">Outlined</Button>
                            <Button startIcon={<DeleteIcon />} color='secondary' variant="text">Text</Button>
                            <Button startIcon={<DeleteIcon />} color='secondary' variant="contained">Contained</Button>
                            <Button startIcon={<DeleteIcon />} color='secondary' variant="outlined">Outlined</Button>
                        </Stack>
                        <Divider />
                        <Stack direction="row" spacing={2}>
                            <Button color="error" startIcon={<DeleteIcon />} variant="text">Text</Button>
                            <Button color="error" startIcon={<DeleteIcon />} variant="contained">Contained</Button>
                            <Button color="error" startIcon={<DeleteIcon />} variant="outlined">Outlined</Button>
                        </Stack>
                        <Divider />
                        <Stack direction="row" spacing={2}>
                            <Fab color='primary' aria-label="add">
                                <AddIcon />
                            </Fab>
                            <Fab color="secondary" aria-label="edit">
                                <EditIcon />
                            </Fab>
                            <Fab variant="extended" color='primary'>
                                <NavigationIcon sx={{ mr: 1 }} />
                                Navigate
                            </Fab>
                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                        </Stack>
                        <Divider />
                    </Stack>

                    <Grid container columns={2} spacing='12'>
                        <Grid item xs>
                            {Object.entries(themeColors.light).map(([key, colors]) => {
                                return (
                                    <Card key={key} sx={{ background: colors, transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                        <CardHeader
                                            title={key}
                                            subheader={colors}
                                        />
                                    </Card>
                                )
                            })}
                        </Grid>
                        <Grid item xs>
                            {Object.entries(themeColors.dark).map(([key, colors]) => {
                                return (
                                    <Card key={key} sx={{ background: colors, transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                        <CardHeader
                                            title={key}
                                            subheader={colors}
                                        />
                                    </Card>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider >
    )
}

export default Prueba1;
