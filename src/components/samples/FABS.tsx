import { FC } from "react";
import { Box, Fab, Typography } from "@mui/material";

import FabIcon from '@mui/icons-material/EditOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import NavigationIcon from '@mui/icons-material/NavigationTwoTone';
import GpsIcon from '@mui/icons-material/GpsFixedTwoTone';

import BoxComponent from "./BoxComponent";

const FloatingActionButtons: FC = () => {

    return (
        <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Floating Action Buttons
            </Typography>
            <Typography variant="h6" >
                M3 FAB
            </Typography>
            <BoxComponent>
                <Fab variant="primary" title='Primary'><FabIcon /></Fab>
                <Fab variant="surface" title='Surface'><FabIcon /></Fab>
                <Fab variant="secondary" title='Secondary'><FabIcon /></Fab>
                <Fab variant="tertiary" title='Tertiary' ><FabIcon /></Fab>
                <Fab disabled aria-label="like">
                    <FabIcon />
                </Fab>
            </BoxComponent>
            <Typography variant="h6" >
                M3 FAB Extended
            </Typography>
            <BoxComponent>
                <Fab variant='extended' color='primary'>
                    <GpsIcon sx={{ mr: 1 }} />
                    GPS
                </Fab>

                <Fab variant="extended" color='surface' >
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab variant="extended" color='secondary' >
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab variant="extended" color='tertiary' >
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab variant='extended' disabled>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            </BoxComponent>
        </Box>
    );
};

export default FloatingActionButtons;