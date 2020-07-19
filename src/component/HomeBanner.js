import React from 'react';
import { withNamespaces } from 'react-i18next';

const HomeBanner = (props) => (
	<div className="banner toolbarSpace">
		<div className="title">
			Request your own <span>digital art</span>
		</div>
		<div className="fas fa-portrait banner--profileIcon" />
	</div>
);

export default withNamespaces()(HomeBanner);
