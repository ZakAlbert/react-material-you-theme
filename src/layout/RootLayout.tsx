import { FC, useContext, useState } from "react";
import {
    Root,
    Header,
    EdgeTrigger,
    EdgeSidebar,
    SidebarContent,
    Content,
    getCozyScheme,
} from "@mui-treasury/layout";

import { AppBar, Badge, ButtonBase, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

import Menu from "@mui/icons-material/MenuTwoTone";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRightTwoTone";
import ElevationToolbar from "../components/ElevationToolbar";

import ColorIcon from '@mui/icons-material/ColorLensTwoTone';
import DarkIcon from '@mui/icons-material/DarkModeTwoTone';
import LightIcon from '@mui/icons-material/LightModeTwoTone';
import MailIcon from '@mui/icons-material/MailTwoTone';
import NotificationIcon from '@mui/icons-material/NotificationsTwoTone';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import InboxIcon from '@mui/icons-material/InboxTwoTone';
import DraftsIcon from '@mui/icons-material/DraftsTwoTone';

import { PaletteContext, PaletteContextType } from '../Context/ui/PaletteContext';
import { ColorContext, ColorContextType } from "../Context/ui/ColorContext";

type LayoutProps = {
    children: React.ReactNode;
};

const scheme = getCozyScheme();

const RootLayout: FC<LayoutProps> = ({ children }) => {

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
        //generateColorScheme("#050E58")
    };

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <Root scheme={scheme}>
            <Header>
                <AppBar enableColorOnDark position="static" >
                    <Toolbar>
                        <EdgeTrigger target={{ anchor: "left", field: "open" }}>
                            {(open, setOpen) => (
                                <IconButton onClick={() => setOpen(!open)} edge="start" color="inherit" size="large">
                                    {open ? <KeyboardArrowLeft /> : <Menu />}
                                </IconButton>
                            )}
                        </EdgeTrigger>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
            </Header>
            <EdgeSidebar anchor="left">
                <SidebarContent>
                    <List component="nav" aria-label="main mailbox folders" >
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText inset primary="Trash" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemText inset primary="Spam" />
                        </ListItemButton>
                    </List>
                </SidebarContent>
                {/*
                <EdgeTrigger target={{ anchor: "left", field: "collapsed" }}>
                    {(collapsed, setCollapsed) => (
                        <ButtonBase
                            onClick={() => setCollapsed(!collapsed)}
                            sx={{ flexGrow: 1, height: 48 }}
                        >
                            {collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </ButtonBase>
                    )} 
                </EdgeTrigger>
                */}
            </EdgeSidebar>
            <Content>
                <Container maxWidth="md" sx={{ py: 5 }}>
                    {children}
                </Container>
            </Content>
        </Root>
    );
}

export default RootLayout;