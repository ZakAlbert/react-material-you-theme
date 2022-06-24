import { Box, SxProps } from "@mui/material";
import { FC } from "react";


interface BoxComponentProps {
    children: React.ReactNode
}
const boxStyle: SxProps = { p: 1, display: 'flex', gap: 1.8, mb: 1, flexWrap: 'wrap' };

const BoxComponent: FC<BoxComponentProps> = ({ children }) => {
    return (
        <Box sx={boxStyle}>
            {children}
        </Box>
    )
};

export default BoxComponent;
