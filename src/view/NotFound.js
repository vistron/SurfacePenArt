import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';

const homePage = (props) => (
	<div className="content toolbarSpace textColor">
		<Helmet>
			<title>{props.t('notFoundText')}</title>
			<meta name="description" content="Please see the link and try again" />
		</Helmet>
		<h3>{props.t('notFoundText')}</h3>
	</div>
);

export default withNamespaces()(homePage);
