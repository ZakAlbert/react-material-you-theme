import { Stack, Typography, AppBar, Toolbar, Grid, Tooltip, Badge, IconButton } from '@mui/material';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import BackIcon from '@mui/icons-material/ArrowBack';

export const AppBarView = () => {
    return (
        <>
            <Stack spacing={3}>
                <Typography variant="h6" fontWeight="bold">
                    AppBar
                </Typography>
                <Stack direction="column" spacing={2}>
                    <AppBar position='relative' >
                        <Toolbar>
                            <Grid container alignItems="center" spacing={0}>
                                <Grid item>
                                    <Typography color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} >
                                        AppBar Surface Container
                                    </Typography>
                                </Grid>
                                <Grid item xs >
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Mails">
                                        <IconButton color="inherit">
                                            <Badge color="primary" badgeContent={3}>
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Alerts">
                                        <IconButton color="inherit">
                                            <Badge badgeContent={2}>
                                                <NotificationIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <AppBar position='relative' color='primary' >
                        <Toolbar>
                            <Grid container alignItems="center" spacing={0}>
                                <Grid item>
                                    <Typography color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} >
                                        AppBar Surface
                                    </Typography>
                                </Grid>
                                <Grid item xs >
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Mails">
                                        <IconButton color="inherit">
                                            <Badge color="primary" badgeContent={3}>
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Alerts">
                                        <IconButton color="inherit">
                                            <Badge badgeContent={2}>
                                                <NotificationIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <AppBar position='relative' >
                        <Toolbar>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <IconButton color="inherit">
                                        <BackIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs >
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Mails">
                                        <IconButton color="inherit">
                                            <Badge color="primary" badgeContent={3}>
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item>
                                    <Tooltip title="Alerts">
                                        <IconButton color="inherit">
                                            <Badge badgeContent={2}>
                                                <NotificationIcon />
                                            </Badge>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Toolbar>
                        <Toolbar>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography color="inherit" sx={{ fontSize: 24, fontWeight: 500 }} >
                                        AppBar Extended
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Stack>
            </Stack>
        </>
    );
};