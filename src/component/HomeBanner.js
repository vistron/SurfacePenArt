import React from 'react';
import { withNamespaces } from 'react-i18next';
import { showMessageToast } from '../util';

const uploadPicture = () => {
	showMessageToast('Feature not yet available');
}

const HomeBanner = (props) => (
	<div className="banner toolbarSpace">
		<div className="title">
			Request your own <span>digital art</span>
		</div>
		<div className="fas fa-portrait banner--profileIcon" onClick={uploadPicture}/>
	</div>
);

export default withNamespaces()(HomeBanner);
