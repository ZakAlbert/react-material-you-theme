import { Stack, Typography, Fab } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/NavigationTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';

export const FABView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Floating Action Button
            </Typography>
            <Stack direction='row' spacing={2} flexWrap={'wrap'}>
                <Fab color='primary'>
                    <EditIcon />
                </Fab>

                <Fab color='secondary' >
                    <EditIcon />
                </Fab>
                <Fab color='tertiary'>
                    <EditIcon />
                </Fab>
                <Fab color='surface'>
                    <EditIcon />
                </Fab>
            </Stack>
            <Stack direction='row' spacing={2} flexWrap={'wrap'}>
                <Fab color='primary' variant='extended'>
                    <AddShoppingCartIcon sx={{ mr: 1 }} /> Navigation
                </Fab>

                <Fab color='secondary' variant='extended'>
                    <AddShoppingCartIcon sx={{ mr: 1 }} /> Navigation
                </Fab>
                <Fab color='tertiary' variant='extended'>
                    <AddShoppingCartIcon sx={{ mr: 1 }} /> Navigation
                </Fab>
                <Fab color='surface' variant='extended'>
                    <AddShoppingCartIcon sx={{ mr: 1 }} /> Navigation
                </Fab>
            </Stack>
        </Stack>
    )
};