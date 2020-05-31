import React, { Component } from 'react';
import ImageCard from '../component/ImageCard';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.cards = [
                {key: 1, to:"/portrait",  src: "https://instagram.fblr15-1.fna.fbcdn.net/v/t51.2885-15/e35/37114996_246262402656964_5198835526991347712_n.jpg?_nc_ht=instagram.fblr15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=UXnq1YjASKEAX-ntY1L&oh=6277b1c2368547e4d575936c455489d0&oe=5ED994EC"},
                {key: 2, to:"/illustration",src: "https://instagram.fblr15-1.fna.fbcdn.net/v/t51.2885-15/e35/44693745_2110313659046542_1622778457978602629_n.jpg?_nc_ht=instagram.fblr15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=fI4VGWzu2qEAX-x5tvq&oh=c4508be11e7e215dcd5dc0cc54c01f72&oe=5EDB251F"},
                {key: 3, to:"/fanart",src: "https://instagram.fblr15-1.fna.fbcdn.net/v/t51.2885-15/e35/43985768_290613748248720_5285069821962207839_n.jpg?_nc_ht=instagram.fblr15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QFzbgDa4GhwAX9dHuz2&oh=984ae467bd5edf2c18ce395ed7949700&oe=5EDA3D3F"}
            ]
    }
    render() {
        return (
            <div className="content">
                <ImageCard items={this.cards}/>
            </div>
        );
    };
};

export default HomePage;