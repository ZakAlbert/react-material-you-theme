import { Avatar, Badge, Box, Stack, Typography, styled } from '@mui/material';

const CustomBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export const AvatarView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Avatar
            </Typography>
            <Stack direction={'row'} spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.main', color: 'onPrimary.main' }}>
                    Zk
                </Avatar>
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'onSecondary.main' }}>
                    Zk
                </Avatar>
                <Avatar sx={{ bgcolor: 'tertiary.main', color: 'onTertiary.main' }}>
                    Zk
                </Avatar>
                <Box sx={{ px: 1 }} />
                <Avatar sx={{ bgcolor: 'primaryContainer.main', color: 'onPrimaryContainer.main' }}>
                    ZK
                </Avatar>
                <Avatar sx={{ bgcolor: 'secondaryContainer.main', color: 'onSecondaryContainer.main' }}>
                    ZK
                </Avatar>
                <Avatar sx={{ bgcolor: 'tertiaryContainer.main', color: 'onTertiaryContainer.main' }}>
                    ZK
                </Avatar>
                <Box sx={{ px: 1 }} />
                <CustomBadge variant='dot' overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Avatar
                        src='https://i.pravatar.cc/300'
                        sx={{ bgcolor: 'primaryContainer.main', color: 'onPrimaryContainer.main' }}>
                        AS
                    </Avatar>
                </CustomBadge>
            </Stack>
        </Stack>
    );
}