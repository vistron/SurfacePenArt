import React from 'react';
import Toolbar from './component/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import NotFound from './view/NotFound';
import './scss/style.scss';
import './i18n';

function App() {
	const themes = [ 'light', 'dark' ],
		bLightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	document.documentElement.className = '';
	document.documentElement.classList.add(`theme-${themes[~~bLightTheme]}`);
	return (
		<div>
			<Toolbar />
			<BrowserRouter basename="https://surfacepenart.com">
				<Switch>
					<Route component={HomePage} exact path="/" />
					<Route component={Portrait} path="/portrait" />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
