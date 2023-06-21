import { Stack, Typography, Alert, AlertTitle } from '@mui/material';

export const AlertView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Alert
            </Typography>
            <Stack direction="column" spacing={2}>
                <Alert severity="error" onClose={() => { }}>
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="warning" onClose={() => { }}>
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="info" onClose={() => { }}>
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="success" onClose={() => { }}>
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Stack>
        </Stack>
    );
};