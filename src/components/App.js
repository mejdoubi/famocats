import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Header from './Header';
import Footer from './Footer';

import CatBreeds from './cats/CatBreeds';

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
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/" exact component={CatBreeds} />
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		</React.Fragment>
	);
};

export default App;
