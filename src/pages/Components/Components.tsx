import { FC } from "react";
import { Box, Divider } from "@mui/material";
import Buttons from "../../components/samples/Buttons";
import FloatingActionButtons from "../../components/samples/FABS";
import Cards from "../../components/samples/Cards";


const ComponentPage: FC = () => {
    return (
        <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Buttons />
            <Box sx={{ mb: 3, }} />
            <FloatingActionButtons />
            <Box sx={{ mb: 3 }} />
            <Cards />
        </Box>
    );
}

export default ComponentPage;