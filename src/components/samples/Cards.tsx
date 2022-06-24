import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";

import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVertOutlined";

import BoxComponent from "./BoxComponent";

const Cards: FC = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                Cards
            </Typography>
            <Typography variant="h6" >
                M3 Cards
            </Typography>
            <BoxComponent>
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
                        <Button variant="outlined" sx={{ background: (theme) => theme.palette.surface.main }} >Buy Tickets</Button>
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
            </BoxComponent>
            <Typography variant="h6" >
                Simple Cards
            </Typography>
            <BoxComponent>
                <Card >
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be•nev•o•lent
                        </Typography>
                        <Typography color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                        <Button size="small" color="primary">
                            Save
                        </Button>
                        <Button size="small" color="tertiary">
                            Dismiss
                        </Button>
                    </CardActions>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                        >
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be•nev•o•lent
                        </Typography>
                        <Typography color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                        <Button size="small" color="primary">
                            Save
                        </Button>
                        <Button size="small" color="tertiary">
                            Dismiss
                        </Button>
                    </CardActions>
                </Card>
            </BoxComponent>
            <Typography variant="h6" >
                Complex Cards
            </Typography>
            <BoxComponent>
                <Card sx={{ maxWidth: 345, px: 0, paddingTop: 0 }} variant="elevation">
                    <CardMedia sx={{ height: 0, paddingTop: '56.25%', borderRadius: 5 }}
                        image="https://material-ui.com/static/images/cards/paella.jpg"
                        title="Paella dish"
                    />
                    <CardHeader
                        avatar={<Avatar sx={{ background: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.primary.contrastText }}>R</Avatar>}
                        action={
                            <IconButton color="inherit">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" component="p" color="textPrimary">
                            This impressive paella is a perfect party dish and a fun meal to
                            cook together with your guests. Add 1 cup of frozen peas along
                            with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton color="inherit">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <ShareIcon />
                        </IconButton>
                        <IconButton color="inherit"
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                                and set aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                                and cook, stirring occasionally until lightly browned, 6 to 8
                                minutes. Transfer shrimp to a large plate and set aside, leaving
                                chicken and chorizo in the pan. Add pimentón, bay leaves,
                                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                                often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                                boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes
                                and peppers, and cook without stirring, until most of the liquid
                                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                                reserved shrimp and mussels, tucking them down into the rice,
                                and cook again without stirring, until mussels have opened and
                                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                                that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then
                                serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </BoxComponent>
        </Box >
    );
}

export default Cards;