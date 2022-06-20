import { FC } from "react";
import { Box, Button, SxProps, Typography } from "@mui/material";

import BoxComponent from "./BoxComponent";
import GpsFixedTwoTone from '@mui/icons-material/GpsFixed';

const Buttons: FC = () => {

    return (
        <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Buttons
            </Typography>
            <Typography variant="h6" >
                M3 Buttons
            </Typography>
            <BoxComponent>
                <Button variant="elevated" >Elevated</Button>
                <Button variant="filled" >Filled</Button>
                <Button variant="tonal" >Tonal</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
            </BoxComponent>
            <BoxComponent>
                <Button startIcon={<GpsFixedTwoTone />} variant="elevated">Elevated</Button>
                <Button startIcon={<GpsFixedTwoTone />} variant="filled">Filled</Button>
                <Button startIcon={<GpsFixedTwoTone />} variant="tonal">Tonal</Button>
                <Button startIcon={<GpsFixedTwoTone />} variant="outlined">Outlined</Button>
                <Button startIcon={<GpsFixedTwoTone />} variant="text">Text</Button>
            </BoxComponent>

            <Typography variant="h6" >
                Contained Buttons
            </Typography>
            <BoxComponent>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="tertiary">
                    Teartiary
                </Button>
                <Button variant="contained" color="surface">
                    Surface
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary">
                    Link
                </Button>
            </BoxComponent>

            <Typography variant="h6" >
                Outlined Buttons
            </Typography>
            <BoxComponent>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="tertiary">
                    Teartiary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" color="primary">
                    Link
                </Button>
            </BoxComponent>

            <Typography variant="h6" >
                Text Buttons
            </Typography>
            <BoxComponent >
                <Button variant="text">Default</Button>
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="tertiary">
                    Teartiary
                </Button>
                <Button variant="text" disabled>
                    Disabled
                </Button>
                <Button variant="text" color="primary">
                    Link
                </Button>
            </BoxComponent>
        </Box>
    );
}

export default Buttons;