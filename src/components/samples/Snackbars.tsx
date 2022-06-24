import { FC } from "react";
import { Box, Button, IconButton, SnackbarContent, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const action = (
    <Button color="inherit" size="small">
        lorem ipsum dolorem
    </Button>
)

const Snackbars: FC = () => {
    return (
        <Box sx={{ gap: 1, display: 'flex', maxWidth: 600, flexDirection: 'column' }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Snackbars
            </Typography>
            <SnackbarContent message="I love snacks." action={action} />
            <SnackbarContent
                message={
                    "I love candy. I love cookies. I love cupcakes. \
                    I love cheesecake. I love chocolate."
                }
                action={
                    <IconButton size="small" aria-label="close" color="inherit">
                        <CloseIcon />
                    </IconButton>
                }
            />
            <SnackbarContent
                message="I love candy. I love cookies. I love cupcakes."
                action={action}
            />
            <SnackbarContent
                message={
                    "I love candy. I love cookies. I love cupcakes. \
                    I love cheesecake. I love chocolate."
                }
                action={action}
            />
        </Box>
    );
}

export default Snackbars;