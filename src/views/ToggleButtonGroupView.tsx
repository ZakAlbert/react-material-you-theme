import { Typography, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';

import WindowsIcon from '@mui/icons-material/Window';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export const ToggleButtonGroupView = () => {

    const [alignment, setAlignment] = useState<string | null>('windows');

    const handleAlignment = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Segmented Button
            </Typography>
            <Stack direction="row" spacing={2}>
                <ToggleButtonGroup exclusive value={alignment} onChange={handleAlignment}>
                    <ToggleButton value="windows">
                        {alignment === 'windows' ? <CheckIcon sx={{ mr: 1 }} /> : <WindowsIcon sx={{ mr: 1 }} />}
                        Windows
                    </ToggleButton>
                    <ToggleButton value="android">
                        {alignment === 'android' ? <CheckIcon sx={{ mr: 1 }} /> : <AndroidIcon sx={{ mr: 1 }} />}
                        Android
                    </ToggleButton>
                    <ToggleButton value="ios">
                        {alignment === 'ios' ? <CheckIcon sx={{ mr: 1 }} /> : <AppleIcon sx={{ mr: 1 }} />}
                        Apple
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};