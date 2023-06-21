import { useMediaQuery, useTheme, SxProps, Paper } from '@mui/material';
import { FC } from 'react';

const MainContainer: FC<{ children?: React.ReactNode }> = ({ children }) => {

    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const isSxUp = useMediaQuery(theme.breakpoints.up('sm'));
    const radiusTop = 30;
    const radiusBottom = isSxUp ? 25 : 0;

    const paperStyle: SxProps = {
        p: isSxUp ? 4 : 2,
        borderTopLeftRadius: radiusTop,
        borderTopRightRadius: radiusTop,
        borderBottomLeftRadius: radiusBottom,
        borderBottomRightRadius: radiusBottom,

        /*height: isSxUp ? 'auto' : 1,
        m: isSxUp ? 2 : 0,*/
        height: isSxUp ? 'auto' : 1,
        mt: 0,
        mb: isSxUp ? 2 : 0,
        mr: isSxUp ? 2 : 0,
        ml: isSxUp ? (isSmUp ? 0 : 2) : 0
    };


    return (
        <Paper sx={paperStyle} elevation={0} >
            {children}
        </Paper>
    );
}

export default MainContainer;