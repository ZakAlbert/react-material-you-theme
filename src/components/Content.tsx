import { FC } from "react";
import { AppBar, Button, Grid, IconButton, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/SearchTwoTone';
import RefreshIcon from '@mui/icons-material/RefreshTwoTone';
import Home from "../pages/Home/Home";

const Content: FC = () => {

    return (
        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <AppBar position="static" color="primary" elevation={0} enableColorOnDark>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Search by email address, phone number, or user UID"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: { fontSize: 'default' },
                                }}
                                variant="standard"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" sx={{ mr: 1 }}>
                                Add user
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton color="inherit">
                                    <RefreshIcon sx={{ display: 'block' }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }}>
                <Home />
            </Typography>
        </Paper>
    );
}

export default Content;