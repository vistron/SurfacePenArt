import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../component/ImageCard';
import HomeBanner from '../component/HomeBanner';
import { withNamespaces } from 'react-i18next';
import {Helmet} from 'react-helmet';

class HomePage extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>{this.props.t('appName')}</title>
					<meta name="description" content={this.props.t('websiteDesc')}/>
				</Helmet>
				<HomeBanner />
				<div className="content">
					<ImageCard items={this.props.images} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		images: state.cards
	};
};

export default withNamespaces()(connect(mapStateToProps)(HomePage));
