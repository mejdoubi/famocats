import React from 'react';
import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Button,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles(theme => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0
		},
		li: {
			listStyle: 'none'
		}
	},
	cardHeader: {
		backgroundColor: theme.palette.secondary.light
	}
}));

const BreedDetails = ({ breed }) => {
	const classes = useStyles();
	let cardAction;

	if (breed.wikipedia_url) {
		cardAction = (
			<CardActions>
				<Button
					fullWidth
					color="primary"
					href={breed.wikipedia_url}
					target="_blank">
					<LibraryBooksIcon />
					<Typography>More Info on Wikipedia</Typography>
				</Button>
			</CardActions>
		);
	}

	return (
		<Grid key={breed.id}>
			<Card>
				<CardHeader
					title={breed.name || 'Welcome'}
					subheader={breed.alt_names}
					titleTypographyProps={{ align: 'center' }}
					subheaderTypographyProps={{ align: 'center' }}
					className={classes.cardHeader}
				/>
				<CardContent>
					<Typography component="p" variant="body1" color="textPrimary">
						{breed.description ||
							'Please select a breed from the list on the left'}
					</Typography>
				</CardContent>
				{cardAction}
			</Card>
		</Grid>
	);
};

export default BreedDetails;
