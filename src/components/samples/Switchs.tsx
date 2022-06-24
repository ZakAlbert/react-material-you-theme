import { FC, useState } from "react";
import { Box, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";

const Switchs: FC = () => {
    const [checkedA, setState] = useState(true);

    return (
        <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Switchs
            </Typography>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Switch
                            checked={checkedA}
                            onChange={() => { setState(!checkedA) }}
                            name="checkedA"
                        />
                    }
                    label={checkedA ? "On" : "Off"}
                />
                <FormControlLabel control={<Switch />} label="Uncontrolled" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
                <FormControlLabel
                    disabled
                    control={<Switch checked />}
                    label="Disabled"
                />
            </FormGroup>
        </Box>
    );
}

export default Switchs;