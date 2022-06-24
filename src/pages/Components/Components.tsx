import { FC } from "react";
import { Box, Divider } from "@mui/material";
import Buttons from "../../components/samples/Buttons";
import FloatingActionButtons from "../../components/samples/FABS";
import Cards from "../../components/samples/Cards";
import Accordions from "../../components/samples/Accordions";
import Snackbars from "../../components/samples/Snackbars";
import Switchs from "../../components/samples/Switchs";


const ComponentPage: FC = () => {
    const boxSX = { mb: 8 };
    return (
        <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

            <Buttons />
            <Box sx={boxSX} />
            <Switchs />
            <Box sx={boxSX} />
            <FloatingActionButtons />
            <Box sx={boxSX} />
            <Cards />
            <Box sx={boxSX} />
            <Accordions />
            <Box sx={boxSX} />
            <Snackbars />

        </Box>
    );
}

export default ComponentPage;