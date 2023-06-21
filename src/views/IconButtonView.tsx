import { Stack, Typography, IconButton, Button } from '@mui/material';
import SettingIcon from '@mui/icons-material/Settings';

export const IconButtonView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Icon Button
            </Typography>
            <Stack direction="row" spacing={2}>
                <IconButton color='primary' ><SettingIcon /></IconButton>
                <Button variant="elevated"><SettingIcon /></Button>
                <Button variant="filled"><SettingIcon /></Button>
                <Button variant="tonal"><SettingIcon /></Button>
                <Button variant="outlined"><SettingIcon /></Button>
            </Stack>
        </Stack>
    );
};