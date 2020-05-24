import React, { Component } from 'react';

class navItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {key: "POR", text: "Portrait"},
                {key: "ILL", text: "Illustration"},
                {key: "FAN", text: "Fan Art"},
                {key: "BLO", text: "Blogs"},
                {key: "ABT", text: "About"}
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
                            return <li className="navigation--item" key={menuItem.key}><a href="/#" className="navigation--link">{menuItem.text}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        );
    };
}

export default navItems;