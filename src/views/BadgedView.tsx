import { useState } from 'react';
import { Stack, Typography, Badge, ButtonGroup, Button, Switch, FormControlLabel } from '@mui/material';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const BadgeView = () => {
    const [count, setCount] = useState(8);
    const [invisible, setInvisible] = useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Badge
            </Typography>
            {/*<Stack direction="row" spacing={4} flexWrap="wrap">
                <Badge badgeContent="" variant='dot'>
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={1} >
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={12} >
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={100} >
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={1000} max={999} >
                    <NotificationsActiveIcon />
                </Badge>
            </Stack>
            <Stack direction="row" spacing={4} flexWrap="wrap">
                <Badge badgeContent="" color="primary" variant='dot'>
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={1} color="primary">
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={12} color="primary">
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={100} color="primary">
                    <NotificationsActiveIcon />
                </Badge>
                <Badge badgeContent={1000} max={999} color="primary">
                    <NotificationsActiveIcon />
                </Badge>
    </Stack>*/}
            <Stack direction="row" spacing={3} alignItems={'center'}>
                <Badge badgeContent={count} max={10}>
                    <NotificationsActiveIcon />
                </Badge>
                <Badge color='primary' badgeContent={count} max={10}>
                    <NotificationsActiveIcon />
                </Badge>
                <Badge color='secondary' badgeContent={count} max={10}>
                    <NotificationsActiveIcon />
                </Badge>
                <ButtonGroup size='small'>
                    <Button size='small' onClick={() => {
                        setCount(Math.max(count - 1, 0));
                    }}>
                        <RemoveIcon fontSize='small' />
                    </Button>
                    <Button size='small' onClick={() => {
                        setCount(count + 1);
                    }}>
                        <AddIcon fontSize='small' />
                    </Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row" spacing={3} alignItems={'center'}>
                <Badge variant='dot' invisible={invisible}>
                    <MailIcon />
                </Badge>
                <Badge color='primary' variant='dot' invisible={invisible}>
                    <MailIcon />
                </Badge>
                <Badge color='secondary' variant='dot' invisible={invisible}>
                    <MailIcon />
                </Badge>
                <FormControlLabel
                    sx={{ color: 'text.primary' }}
                    control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                    label="Show Badge"
                />
            </Stack>
        </Stack>
    );
}