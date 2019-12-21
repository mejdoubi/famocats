import React from 'react';
import { Typography, Container, Link, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

import avatar from '../assets/img/logo192.png';

const useStyles = makeStyles(theme => ({
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'dark'
				? theme.palette.grey[800]
				: theme.palette.grey[200]
	},
	avatar: {
		margin: 'auto',
		marginBottom: '2px',
		backgroundColor: 'white',
		borderColor: 'secondary'
	},
	box: {
		display: 'inline',
		fontStyle: 'italic'
	}
}));

const Copyright = props => {
	const classes = useStyles();

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			{new Date().getFullYear()}{' '}
			<Link color="inherit" to="https://famocats.herokuapp.com/">
				<span className={classes.box}>famocats</span>
			</Link>
			{', all rights reserved. '}
			<br />
			{'Made with '}
			<FavoriteIcon fontSize="small" color="secondary" />
			{' by '}
			<span fontWeight="fontWeightMedium" className={classes.box}>
				Othman Mejdoubi.
			</span>
		</Typography>
	);
};

const Footer = props => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth="sm">
				<Avatar className={classes.avatar} alt="famocats" src={avatar} />
				<Copyright />
			</Container>
		</footer>
	);
};

export default Footer;
