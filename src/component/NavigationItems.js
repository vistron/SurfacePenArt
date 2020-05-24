import React, { Component } from 'react';

class navItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {key: "portrait", text: "Portrait"},
                {key: "illustration", text: "Illustration"},
                {key: "fanart", text: "Fan Art"},
                {key: "blogs", text: "Blogs"},
                {key: "about", text: "About"}
            ]
        };
    }
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation--checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation--button">
                    <span className="navigation--icon">&nbsp;</span>
                </label>
                <div className="navigation--background">&nbsp;</div>
                <nav className="navigation--nav">
                    <ul className="navigation--list">
                        {this.state.menus.map(menuItem => {
                            return <li className="navigation--item" key={menuItem.key}><a href={`/${menuItem.key}/`} className="navigation--link">{menuItem.text}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        );
    };
}

export default navItems;