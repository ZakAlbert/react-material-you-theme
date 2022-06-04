import { useContext, useState } from "react";

import { Button, Card, CardContent, TextField, Fab, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, Typography, CardActions, BottomNavigation, BottomNavigationAction } from '@mui/material';

import EditIcon from '@mui/icons-material/EditTwoTone';
import FavoriteIcon from '@mui/icons-material/FavoriteTwoTone';
import NavigationIcon from '@mui/icons-material/NavigationTwoTone';
import GpsFixedTwoTone from '@mui/icons-material/GpsFixedTwoTone';

import { PaletteContext, PaletteContextType } from '../../context/ui/PaletteContext';
import { Grid } from "@mui/material";
import ColorSystem from "../../components/ColorSystem";

const Home = () => {

    const { paletteMode } = useContext<PaletteContextType>(PaletteContext);
    //const { colorScheme } = useContext<ColorContextType>(ColorContext);

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Stack spacing={2}>
            <Stack marginBottom={3}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '2rem' }}>Material You - {paletteMode}</Typography>
                <Typography sx={{ fontWeight: '500' }}>@ZakAlbert94</Typography>
            </Stack>

            <Grid container rowGap={1} gap={6} >
                <Grid item xs="auto">
                    <Typography variant='h4' marginBottom={2}>Buttons</Typography>

                    <Stack spacing={2} direction="row" marginBottom={3}>
                        <Button variant="elevated" >Elevated</Button>
                        <Button variant="filled">Filled</Button>
                        <Button variant="tonal" >Tonal</Button>
                        <Button variant="outlined">Outlined</Button>
                        <Button variant="text">Text</Button>
                    </Stack>
                    <Stack direction="row" spacing={2} marginBottom={3}>
                        <Button startIcon={<GpsFixedTwoTone />} variant="elevated">Elevated</Button>
                        <Button startIcon={<GpsFixedTwoTone />} variant="filled">Filled</Button>
                        <Button startIcon={<GpsFixedTwoTone />} variant="tonal">Tonal</Button>
                        <Button startIcon={<GpsFixedTwoTone />} variant="outlined">Outlined</Button>
                        <Button startIcon={<GpsFixedTwoTone />} variant="text">Text</Button>
                    </Stack>
                </Grid>

                <Grid item xs="auto">
                    <Typography variant='h4' marginBottom={2}>Floating Action Buttons</Typography>
                    <Stack direction="row" spacing={2} marginBottom={3}>
                        <Fab variant="primary" title='Primary'><EditIcon /></Fab>
                        <Fab variant="surface" title='Surface'><EditIcon /></Fab>
                        <Fab variant="secondary" title='Secondary'><EditIcon /></Fab>
                        <Fab variant="tertiary" title='Tertiary' ><EditIcon /></Fab>

                        <Fab variant='extended' color='primary'>
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab variant="extended" color='surface' >
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab variant="extended" color='secondary' >
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab variant="extended" color='tertiary' >
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab disabled aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                    </Stack>
                </Grid>

                <Grid item xs="auto">
                    <Typography variant='h4' marginBottom={2}>Cards</Typography>
                    <Stack direction="row" spacing={2} marginBottom={0}>
                        <Card variant="elevation" >
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Glass Souls World Tour
                                </Typography>
                                <Typography variant="body2">
                                    From your recent favorites
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="filled" size="small">Buy Tickets</Button>
                            </CardActions>
                        </Card>
                        <Card variant="filled">
                            <CardContent>
                                <Typography gutterBottom variant="h5" >
                                    Glass Souls World Tour
                                </Typography>
                                <Typography variant="body2">
                                    From your recent favorites
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button variant="outlined" >Buy Tickets</Button>
                            </CardActions>
                        </Card>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography gutterBottom variant="h5" >
                                    Glass Souls World Tour
                                </Typography>
                                <Typography variant="body2">
                                    From your recent favorites
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button variant="tonal" size="small">Buy Tickets</Button>
                            </CardActions>
                        </Card>
                    </Stack>
                </Grid>

                <Grid item xs="auto">
                    <Typography variant='h4' marginBottom={2}>Text Fields</Typography>
                    <Stack direction="row" spacing={2} marginBottom={0}>
                        <TextField fullWidth label="Outlined" variant="outlined" />
                        <TextField fullWidth label="Filled" variant="filled" />
                        <TextField fullWidth label="Standard" variant="standard" />
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h4' marginBottom={2}>Select</Typography>
                    <Stack direction='row' spacing={2} marginBottom={3}>
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
                </Grid>
                <Grid item xs={12}>

                    <ColorSystem />
                </Grid>
            </Grid>


            {/*  <Card elevation={3}>
                <CardContent>
                    <Stack
                        direction="row" spacing={2} rowGap={2}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Paper variant="outlined" sx={{ width: 120, height: 120 }} />
                        {[...Array(24).keys()].map(idx =>
                            <Paper key={idx} elevation={idx} sx={{ width: 120, height: 120, display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                <Typography variant="subtitle1">{idx}</Typography>
                            </Paper>
                        )}
                    </Stack>
                </CardContent>
            </Card> */}

            {/*  <Card elevation={3}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            {Object.entries(colorScheme.light).map(([key, colors]) => {

                                return (
                                    <Box key={key} sx={{ background: colors, padding: 1, transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                        <Typography>{key}</Typography>
                                        <Typography>{colors}</Typography>
                                    </Box>
                                )
                            })}
                        </Grid>
                        <Grid item xs={6}>
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
                </CardContent>
            </Card> */}
        </Stack >
    )
}


export default Home
