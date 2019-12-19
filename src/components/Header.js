import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

class Header extends React.Component {
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>famocats</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
