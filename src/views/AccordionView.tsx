import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionView = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6" fontWeight="bold">
                Accordion
            </Typography>
            <Stack direction="column">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon color="inherit" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography color="inherit">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="inherit">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                </Accordion>
            </Stack>
        </Stack>
    );
};
