import { Stack, Typography, ToggleButton } from '@mui/material';

import SettingIconFilled from '@mui/icons-material/Settings';
import SettingIconOutlined from '@mui/icons-material/SettingsOutlined';
import WindowsIcon from '@mui/icons-material/Window';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';


export const ToggleButtonView = () => {

    const [selected, setSelected] = useState(false);
    const [selected1, setSelected1] = useState(false);

    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Toggle Button
            </Typography>
            <Stack direction="row" spacing={1}>
                <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}>
                    {selected ? <CheckIcon sx={{ mr: 1 }} /> : <WindowsIcon sx={{ mr: 1 }} />}

                    Windows
                </ToggleButton>
                <ToggleButton
                    value="check" color='primary'
                    selected={selected1}
                    onChange={() => {
                        setSelected1(!selected1);
                    }}>
                    {selected1 ? <SettingIconFilled /> : <SettingIconOutlined />}
                </ToggleButton>
            </Stack>
        </Stack>
    );
};