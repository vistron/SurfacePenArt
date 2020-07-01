import React from 'react';
import { withNamespaces } from 'react-i18next';

const HomeBanner = (props) => (
	<div className="banner">
		<div className="title">
			Request your own <span>digital art</span>
		</div>
		<div />
	</div>
);

export default withNamespaces()(HomeBanner);
