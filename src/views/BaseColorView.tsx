import { Stack, Typography, useTheme } from '@mui/material';

export const BaseColorView = () => {

    const { palette } = useTheme();

    return (
        <Stack direction='row' spacing={1} sx={{ my: 1 }}>
            <Typography
                paddingRight={0.5}
                variant='h6'
                fontWeight="bold">
                Base Color
            </Typography >
            <Typography
                variant='button'
                alignSelf={'center'}
                fontWeight="bold"
                sx={{ borderRadius: 50, px: 0.9, bgcolor: palette.primary.main, color: palette.primary.contrastText, textTransform: 'capitalize' }} >
                {palette.primary.main}
            </Typography >
        </Stack>
    );
};