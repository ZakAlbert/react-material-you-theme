import { Button, Stack, Typography } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export const ButtonsView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Buttons
            </Typography>
            <Stack direction='row' spacing={2} flexWrap={'wrap'}>
                <Button variant="elevated">Elevated</Button>
                <Button variant="filled">Filled</Button>
                <Button variant="tonal">Tonal</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
            </Stack>
            <Stack direction='row' spacing={2} flexWrap={'wrap'}>
                <Button startIcon={<NotificationsActiveIcon />} variant="elevated" >Elevated</Button>
                <Button startIcon={<NotificationsActiveIcon />} variant="filled">Filled</Button>
                <Button startIcon={<NotificationsActiveIcon />} variant="tonal">Tonal</Button>
                <Button startIcon={<NotificationsActiveIcon />} variant="outlined">Outlined</Button>
                <Button startIcon={<NotificationsActiveIcon />} variant="text">Text</Button>
            </Stack>
            <Stack direction='row' spacing={2} flexWrap={'wrap'} >
                <Button disabled startIcon={<NotificationsActiveIcon />} variant="elevated" >Elevated</Button>
                <Button disabled startIcon={<NotificationsActiveIcon />} variant="filled">Filled</Button>
                <Button disabled startIcon={<NotificationsActiveIcon />} variant="tonal">Tonal</Button>
                <Button disabled startIcon={<NotificationsActiveIcon />} variant="outlined">Outlined</Button>
                <Button disabled startIcon={<NotificationsActiveIcon />} variant="text">Text</Button>
            </Stack>
        </Stack>
    );
};
