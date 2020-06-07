import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../component/ImageCard';

class HomePage extends Component {
    render() {
        return (
            <div className="content">
                <ImageCard items={this.props.images}/>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        images: state.cards
    };
}

export default connect(mapStateToProps)(HomePage);