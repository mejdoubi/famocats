import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/img/logo.png';

const useStyles = makeStyles(theme => ({
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
		maxWidth: 100
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
						<Button component={Link} to="/" className={classes.link}>
							Home
						</Button>

						<Button component={Link} to="/breeds" className={classes.link}>
							Breeds
						</Button>

						<Button component={Link} to="/vote" className={classes.link}>
							Vote
						</Button>
					</nav>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
