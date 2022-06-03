import { FC, useContext, useState, } from "react";
import { AppBar, Toolbar, Box, Container, SxProps, Typography, Theme, IconButton, Badge } from "@mui/material";

import ElevationToolbar from "../components/ElevationToolbar";

import { styled, } from '@mui/material/styles';

import ColorIcon from '@mui/icons-material/ColorLensTwoTone';
import DarkIcon from '@mui/icons-material/DarkModeTwoTone';
import LightIcon from '@mui/icons-material/LightModeTwoTone';
import MailIcon from '@mui/icons-material/MailTwoTone';
import NotificationIcon from '@mui/icons-material/NotificationsTwoTone';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import MenuIcon from '@mui/icons-material/MenuTwoTone';

import { PaletteContext, PaletteContextType } from '../Context/ui/PaletteContext';
import { ColorContext, ColorContextType } from "../Context/ui/ColorContext";

interface LayoutProps {
    window?: () => Window;
    children: React.ReactElement;
};

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout: FC<LayoutProps> = ({ children, window }) => {

    const boxContainerStyle: SxProps<Theme> = {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
    };

    const { paletteMode, togglePalette, resetPaletteMode } = useContext<PaletteContextType>(PaletteContext);
    const { generateColorScheme, resetColorScheme } = useContext<ColorContextType>(ColorContext);

    const changePalette = () => togglePalette();

    const changeColorScheme = async () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        console.log(randomColor);
        generateColorScheme(randomColor);
    };

    const reset = () => {
        resetPaletteMode();
        resetColorScheme();
        //generateColorScheme("#293064");
        //generateColorScheme("#3a691e");
    };

    return <>
        <ElevationToolbar window={window} >
            <AppBar enableColorOnDark position="fixed" color="primary">
                <Toolbar>
                    <IconButton color="inherit" size="large" edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
                        Material You (ReactTS)
                    </Typography>
                    <IconButton color="inherit" size="large" title="1 Message">
                        <Badge badgeContent="1" color="primary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" size="large" title="4 Notifications">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size='large' color='inherit' title='Change Color' onClick={changeColorScheme}>
                        <ColorIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit' title='Switch Theme' onClick={changePalette}>
                        {paletteMode == 'light' ? <DarkIcon /> : <LightIcon />}
                    </IconButton>
                    <IconButton size='large' color='inherit' title='Reset Theme' onClick={reset}>
                        <RestartAltTwoToneIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ElevationToolbar>
        <Offset />
        <Box sx={boxContainerStyle}>
            <Container>
                {children}
            </Container>
        </Box>
    </>
};

export default Layout;