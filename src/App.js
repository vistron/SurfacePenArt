import React from 'react';
import Toolbar from './component/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import AboutPage from './view/About';
import NotFound from './view/NotFound';
import './scss/style.scss';
import './i18n';

function App() {
	return (
		<div>
			<Toolbar />
			<BrowserRouter basename="{process.env.PUBLIC_URL}">
				<Switch>
					<Route component={HomePage} exact path="/" />
					<Route component={Portrait} path="/portrait" />
					<Route component={AboutPage} path="/about" />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
			<div id="ui-static" style={{ height: '0px', width: '0px', overflow: 'hidden', float: 'left' }} />
		</div>
	);
}

export default App;
