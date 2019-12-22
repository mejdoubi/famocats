import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
	MuiThemeProvider,
	createMuiTheme,
	makeStyles
} from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import BreedList from './cats/BreedList';

// MATERIAL-UI
// #636463 primary
// #9ccf4e secondary
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#636463'
		},
		secondary: {
			main: '#9ccf4e'
		}
	}
});

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<Router>
					<div>
						<Grid className={classes.root}>
							<Header />
							<Container maxWidth="xl" className={classes.container}>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/breeds" component={BreedList} />
								</Switch>
							</Container>
							<Footer />
						</Grid>
					</div>
				</Router>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;
