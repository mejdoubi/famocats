import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import BreedsList from './cats/BreedsList';

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

const App = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<Router>
					<div>
						<Header />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/breeds" component={BreedsList} />
						</Switch>
						<Footer />
					</div>
				</Router>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;
