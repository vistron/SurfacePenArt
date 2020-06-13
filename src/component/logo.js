import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class Logo extends Component {
	render() {
		return (
			<a href="/" className="left_area">
				<h3>
					{this.props.t('appSubPart')} <span>{this.props.t('art')}</span>
				</h3>
			</a>
		);
	}
}

export default withNamespaces()(Logo);
