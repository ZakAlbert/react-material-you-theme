import { Box, SxProps } from "@mui/material";
import { FC } from "react";


interface BoxComponentProps {
    children: React.ReactNode
}
const boxStyle: SxProps = { py: 1, px: 1, display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' };

const BoxComponent: FC<BoxComponentProps> = ({ children }) => {
    return (
        <Box sx={boxStyle}>
            {children}
        </Box>
    )
};

export default BoxComponent;
