import { Stack, Typography, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export const SwitchView = () => {
    const [status, setStatus] = useState(true);

    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Switch
            </Typography>
            <Stack direction="row" spacing={1} alignItems={'center'}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={status}
                            onChange={() => { setStatus(!status) }}
                            name="status"
                        />
                    }
                    label={status ? "On" : "Off"}
                />
                <FormControlLabel control={<Switch />} label="Uncontrolled" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
                <FormControlLabel
                    disabled
                    control={<Switch checked />}
                    label="Disabled"
                />
            </Stack>
        </Stack>
    );
};