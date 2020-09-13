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
	const setCookie = (sCookieName, sValue) => {
		let sExpiresDate, oDate = new Date();
		oDate.setTime(oDate.getTime() + (356 * 24 * 60 * 60 * 1000)); // one year
		sExpiresDate = "expires=" + oDate.toUTCString();
		document.cookie = sCookieName + "=" + sValue + ";" + sExpiresDate + ";path=/";
	},
	getCookieValue = sCookieName => {
		let aCookies = document.cookie.split(';'), sCookie;
		sCookieName = sCookieName + "=";
		for (var i = 0; i < aCookies.length; i++) {
			sCookie = aCookies[i].trim();
			if (sCookie.indexOf(sCookieName) === 0) {
				return sCookie.substring(sCookieName.length, sCookie.length);
			}
		}
		return "";
	};
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
