import { AppBar, Box, Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, useState, useEffect } from 'react';

import PeopleIcon from '@mui/icons-material/PeopleOutline';
import DnsRoundedIcon from '@mui/icons-material/DnsOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernetOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import ColorIcon from '@mui/icons-material/ColorLensOutlined';
import { Link, useLocation } from "react-router-dom";

const NavDrawer: FC<DrawerProps> = (props) => {
    const { ...others } = props;

    const categories = [
        {
            id: 'Build',
            children: [
                {
                    id: 'Authentication',
                    icon: <PeopleIcon />,
                    active: true,
                },
                { id: 'Database', icon: <DnsRoundedIcon /> },
                { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
                { id: 'Hosting', icon: <PublicIcon /> },
                { id: 'Functions', icon: <SettingsEthernetIcon /> },
                {
                    id: 'Machine learning',
                    icon: <SettingsInputComponentIcon />,
                },
            ],
        },
    ];

    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));

    useEffect(() => {
        setSelectedIndex(location.pathname.replace('/', ''));
    }, [location.pathname])


    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: string,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Drawer variant="permanent" {...others}>
            <AppBar color="default" elevation={0} position="sticky">
                <Toolbar></Toolbar>
            </AppBar>
            <List >
                <Box>
                    <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ fontWeight: 'bold' }}>
                            <Typography color="inherit" sx={{ ml: 1, fontSize: 14, fontWeight: 500 }} >
                                MATERIAL DESIGN 3
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/Components' selected={selectedIndex == 'Components'} onClick={(event: any) => handleListItemClick(event, 'Components')}>
                            <ListItemIcon><DnsRoundedIcon /></ListItemIcon>
                            <ListItemText>Components</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/Theme' selected={selectedIndex == 'Theme'} onClick={(event: any) => handleListItemClick(event, 'Theme')}>
                            <ListItemIcon><ColorIcon /></ListItemIcon>
                            <ListItemText>Theme</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>
                {categories.map(({ id, children }) => (
                    <Box key={id}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ fontWeight: 'bold' }}>
                                <Typography color="inherit" sx={{ ml: 1, fontSize: 15, fontWeight: 500 }} >
                                    {id}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem key={childId}>
                                <ListItemButton selected={selectedIndex == childId} onClick={(event) => handleListItemClick(event, childId)}>
                                    <ListItemIcon >{icon}</ListItemIcon>
                                    <ListItemText >{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                ))}
            </List>
        </Drawer>
    );
};

export default NavDrawer;