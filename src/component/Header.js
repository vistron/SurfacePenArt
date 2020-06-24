import React, { Component } from 'react';
import Logo from './logo';
import NavItems from './NavigationItems';
class Toolbar extends Component {
	render() {
		return (
			<header className="glassBlur">
				<Logo />
				<NavItems />
			</header>
		);
	}
}

export default Toolbar;
