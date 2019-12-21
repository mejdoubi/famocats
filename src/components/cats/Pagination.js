import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {},
	pagination: {
		marginLeft: '200px',
		display: 'flex',
		flexDirection: 'row',
		padding: 0
	},
	pageItem: {
		textAlign: 'center'
	}
}));

const Pagination = ({ elementsPerPage, totalElements, paginate }) => {
	const classes = useStyles();
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Container className={classes.container}>
			<Grid container justify="flex-end" spacing={2}>
				{pageNumbers.map(number => (
					<Grid key={number} item onClick={() => paginate(number)}>
						<Button>{number}</Button>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Pagination;
