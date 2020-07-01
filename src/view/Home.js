import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../component/ImageCard';
import HomeBanner from '../component/HomeBanner';

class HomePage extends Component {
	render() {
		return (
			<div>
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

export default connect(mapStateToProps)(HomePage);
