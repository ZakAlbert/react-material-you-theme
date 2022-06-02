import { useContext, useState } from "react";

import { Alert, Box, Button, Divider, Fab, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Switch, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/AddTwoTone';
import EditIcon from '@mui/icons-material/EditTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import NavigationIcon from '@mui/icons-material/NavigationTwoTone';
import LocationOnTwoTone from '@mui/icons-material/LocationOnTwoTone';

import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';

import { PaletteContext, PaletteContextType } from '../../Context/ui/PaletteContext';
import { ColorContext, ColorContextType } from '../../Context/ui/ColorContext';
import { Grid } from "@mui/material";

const Home = () => {

    const { paletteMode, togglePalette } = useContext<PaletteContextType>(PaletteContext);
    const { colorScheme } = useContext<ColorContextType>(ColorContext);

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>

            <Stack spacing={2} marginBottom={2}>
                <Stack>
                    <Typography variant='h5' >Material You - {paletteMode}</Typography>
                    <Typography color="color" variant='subtitle1'>@ZakAlbert94</Typography>
                </Stack>
                <Divider />
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button startIcon={<InvertColorsTwoToneIcon />} variant="text">Text</Button>
                    <Button startIcon={<InvertColorsTwoToneIcon />} variant="contained">Contained</Button>
                    <Button startIcon={<InvertColorsTwoToneIcon />} variant="outlined">Outlined</Button>
                </Stack>
                <Divider />
                <Stack spacing={2} direction="row">
                    <Button color='secondary' variant="text">Text</Button>
                    <Button color='secondary' variant="contained">Contained</Button>
                    <Button color='secondary' variant="outlined">Outlined</Button>
                    <Button startIcon={<OpacityTwoToneIcon />} color='secondary' variant="text">Text</Button>
                    <Button startIcon={<OpacityTwoToneIcon />} color='secondary' variant="contained">Contained</Button>
                    <Button startIcon={<OpacityTwoToneIcon />} color='secondary' variant="outlined">Outlined</Button>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2}>
                    <Button color='error' variant="text">Text</Button>
                    <Button color='error' variant="contained">Contained</Button>
                    <Button color='error' variant="outlined">Outlined</Button>
                    <Button color="error" startIcon={<ErrorTwoToneIcon />} variant="text">Text</Button>
                    <Button color="error" startIcon={<ErrorTwoToneIcon />} variant="contained">Contained</Button>
                    <Button color="error" startIcon={<ErrorTwoToneIcon />} variant="outlined">Outlined</Button>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2}>
                    <Fab color='primary' title='Add'>
                        <EditIcon />
                    </Fab>
                    <Fab color="secondary" title='Edit'>
                        <EditIcon />
                    </Fab>
                    <Fab color="tertiary" title='Edit'>
                        <EditIcon />
                    </Fab>
                    <Fab variant='extended' color='primary' size='large'>
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                    <Fab variant="extended" color='secondary' size='large'>
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                    <Fab variant="extended" color='tertiary' size='large'>
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Stack>
                <Divider />
                <Stack direction='row' spacing={2}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="filled">
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Divider />
                <Stack direction='row' spacing={2}>
                    <FormControl fullWidth variant="standard" color="secondary">
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth color="secondary">
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="filled" color="secondary">
                        <InputLabel>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Divider />
                <Stack direction='row' spacing={2}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Primary" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch color="secondary" defaultChecked />} label="Secondary" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch color="error" defaultChecked />} label="Label" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch size="medium" checked={paletteMode == 'dark'} onChange={() => togglePalette()}></Switch>} label="Dark" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                    </FormGroup>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={2} sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    <Paper sx={{ width: 120, height: 120 }} />
                    <Paper elevation={3} sx={{ width: 120, height: 120 }} />
                    <Paper elevation={0} variant="outlined" sx={{ width: 120, height: 120 }} />
                </Stack>
                <Divider />
            </Stack>
            <Grid container columns={2} spacing={12}>
                <Grid item xs>
                    {Object.entries(colorScheme.light).map(([key, colors]) => {

                        return (
                            <Box key={key} sx={{ background: colors, padding: 1, transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Typography>{key}</Typography>
                                <Typography>{colors}</Typography>
                            </Box>
                        )
                    })}
                </Grid>
                <Grid item xs>
                    {Object.entries(colorScheme.dark).map(([key, colors]) => {
                        return (
                            <Box key={key} sx={{ padding: 1, background: colors, transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <Typography>{key}</Typography>
                                <Typography>{colors}</Typography>
                            </Box>
                        )
                    })}
                </Grid>
            </Grid>
        </>
    )
}


export default Home
