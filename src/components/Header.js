import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/img/logo.png';

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
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	nav: {
		marginLeft: 'auto'
	},
	toolbar: {
		flexWrap: 'wrap'
	},
	logo: {
		maxWidth: 120
	},
	toolbarTitle: {
		flexGrow: 1
	},
	link: {
		margin: theme.spacing(1, 1.5)
	}
}));

const Header = props => {
	const classes = useStyles();

	return (
		<div>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Link to="/">
						<img className={classes.logo} alt="famocats" src={logo}></img>
					</Link>
					<nav className={classes.nav}>
						<Link
							to="/"
							variant="button"
							color="textPrimary"
							className={classes.link}>
							Home
						</Link>
						<Link
							to="/breeds"
							variant="button"
							color="textPrimary"
							className={classes.link}>
							Breeds
						</Link>
						<Link variant="button" color="textPrimary" className={classes.link}>
							Vote
						</Link>
						<Link variant="button" color="textPrimary" className={classes.link}>
							Favourites
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
