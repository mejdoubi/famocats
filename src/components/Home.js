import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../assets/img/logo.png';

const useStyles = makeStyles(theme => ({}));

const Home = props => {
	const classes = useStyles();

	return <div>Home</div>;
};

export default withRouter(Home);
