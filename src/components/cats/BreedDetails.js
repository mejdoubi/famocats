import React from 'react';
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
	Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
		backgroundColor:
			theme.palette.type === 'dark'
				? theme.palette.grey[700]
				: theme.palette.grey[200]
	},
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(2)
	}
}));

const BreedDetails = props => {
	const classes = useStyles();

	const breed = this.props.breed;
	const attributes = breed => {
		let attr = [];
		for (let prop in breed) {
			if (Object.prototype.hasOwnProperty(prop)) {
				if (breed[prop] === 5) {
					attr.push(prop);
				}
			}
		}
		return attr;
	};

	return (
		<Container maxWidth="md" component="main">
			<Grid container spacing={5} alignItems="flex-end">
				<Grid item key={breed.id} xs={12} sm={12} md={4}>
					<Card>
						<CardHeader
							title={breed.name}
							titleTypographyProps={{ align: 'center' }}
							subheaderTypographyProps={{ align: 'center' }}
							className={classes.cardHeader}
						/>
						<CardContent>
							<ul>
								{attributes.map(attr => (
									<Typography
										component="li"
										variant="subtitle1"
										align="center"
										key={attr}>
										{attr}
									</Typography>
								))}
							</ul>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BreedDetails;
