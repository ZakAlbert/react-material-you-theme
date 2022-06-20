import { useScrollTrigger } from "@mui/material";
import { cloneElement, FC } from "react";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
};

const ElevationToolbar: FC<Props> = ({ children, window }) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
        //color: trigger ? 'primary' : 'default'
    });
};

export default ElevationToolbar;