import { FC, useContext, useState } from "react";
import { AppBar, Avatar, Badge, Container, Fade, Grid, IconButton, Link, Slide, Tab, Tabs, Toolbar, Tooltip, Typography, useScrollTrigger, useTheme } from "@mui/material";

import MenuIcon from '@mui/icons-material/MenuTwoTone';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import ColorIcon from '@mui/icons-material/ColorLensOutlined';
import DarkIcon from '@mui/icons-material/DarkModeOutlined';
import LightIcon from '@mui/icons-material/LightModeOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import RestartIcon from '@mui/icons-material/RefreshOutlined';
import ArrowIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { ThemeModeContext, ThemeSchemeContext } from "../theme";
import { useLocation } from "react-router-dom";

interface HeaderProps {
    onDrawerToggle?: () => void,
    window?: () => Window;
};

const Header: FC<HeaderProps> = ({ onDrawerToggle, window }) => {

    const { palette } = useTheme();
    const location = useLocation();

    const { toggleThemeMode, resetThemeMode } = useContext(ThemeModeContext);
    const { generateThemeScheme, resetThemeScheme } = useContext(ThemeSchemeContext);

    const changeThemeMode = () => toggleThemeMode();

    const changeThemeScheme = async () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        generateThemeScheme(randomColor);
    };

    const reset = () => {
        resetThemeMode();
        resetThemeScheme();

        //generateThemeScheme("#6750A4");
        //generateThemeScheme("#293064");
        //generateThemeScheme("#3a691e");
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return (
        <>
            <AppBar color={trigger ? 'primary' : 'default'} position="sticky" elevation={trigger ? 2 : 0} >
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item sx={{ display: { md: 'none', sm: 'block' } }}>
                            <IconButton color="inherit" edge="start" onClick={onDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
                                Material You
                            </Typography>
                            <Fade in={trigger}>
                                <Typography color="inherit" sx={{ ml: 1, fontSize: 16, fontWeight: 500 }} >
                                    <ArrowIcon sx={{ fontSize: 12 }} color="inherit" /> {location.pathname.replace('/', '')}
                                </Typography>
                            </Fade>
                        </Grid>
                        <Grid item xs></Grid>
                        <Grid item>
                            <Tooltip title='Change Color'>
                                <IconButton size='large' color='inherit' onClick={changeThemeScheme}>
                                    <ColorIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title='Switch Theme'>
                                <IconButton size='large' color='inherit' onClick={changeThemeMode}>
                                    {palette.mode == 'light' ? <DarkIcon /> : <LightIcon />}
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title='Reset'>
                                <IconButton size='large' color='inherit' onClick={reset}>
                                    <RestartIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="@ZakAlbert94">
                                <IconButton color="inherit" sx={{ p: 0.5 }}>
                                    <Avatar alt="My Avatar" sx={{ background: palette.secondaryContainer.contrastText, width: 28, height: 28, fontSize: 16 }}>
                                        zk
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar position="static" color="default" elevation={0} component="div" sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            <Typography color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} >
                                {location.pathname.replace('/', '')}
                            </Typography>
                        </Grid>
                        <Grid item xs >
                        </Grid>
                        <Grid item>
                            <Tooltip title="Mails">
                                <IconButton color="inherit">
                                    <Badge color="secondary" badgeContent={3}>
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Alerts">
                                <IconButton color="inherit">
                                    <Badge color="primary" badgeContent={2}>
                                        <NotificationIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;