import React from 'react';
import { withNamespaces } from 'react-i18next';

const homePage = (props) => (
	<div className="content textColor">
		<h3>{props.t('notFoundText')}</h3>
	</div>
);

export default withNamespaces()(homePage);
