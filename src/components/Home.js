import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Grid,
	Typography,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import banner from '../assets/img/banner.png';
import breed from '../assets/img/breed.png';

const useStyles = makeStyles(theme => ({
	banner: {
		[theme.breakpoints.down('xs')]: {
			maxWidth: 320
		}
	},
	card: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
}));

const Home = props => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg" component="main">
			<Grid container spacing={2} justify="center" alignItems="center">
				<img className={classes.banner} alt="famocats" src={banner}></img>
			</Grid>
			<Grid container spacing={2} justify="center" alignItems="center">
				<Grid item>
					<Card className={classes.card}>
						<Button
							size="small"
							color="primary"
							component={Link}
							to="/breeds"
							className={classes.link}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={breed}
									title="Cat Breeds"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Cat Breeds
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p">
										Browse through our list of cat breeds and find the best cat
										for you.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Button>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
