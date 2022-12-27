import { Box, Container, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import NavDrawer from "../components/Drawer";
import Header from "../components/Header";

interface RootLayoutProps {
    children: React.ReactNode;
};

const drawerWidth = 256;

const RootLayout: FC = () => {

    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <Box sx={{ display: 'flex', minHeight: 'cal(100vh-3px)' }}>
            <Box
                component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
                {isSmUp ? null : (
                    <NavDrawer
                        PaperProps={{ style: { width: drawerWidth } }}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    />
                )}
                <NavDrawer
                    PaperProps={{ style: { width: drawerWidth } }}
                    sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
                />
            </Box>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header onDrawerToggle={handleDrawerToggle} />
                <Container maxWidth="xl" sx={{ py: 4, flex: 1 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
}

export default RootLayout;
