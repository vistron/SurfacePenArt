import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class navItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: [ { key: 'blogs', text: props.t('menu.blogs') }, { key: 'about', text: props.t('menu.about') } ]
		};
	}
	componentDidMount() {
		this.setState({ isMobile: window.innerWidth < 915 });
		window.addEventListener(
			'resize',
			() => {
				this.setState({
					isMobile: window.innerWidth < 915
				});
			},
			false
		);
	}
	render() {
		return (
			<div className="navigation">
				<input type="checkbox" className="navigation--checkbox" id="navi-toggle" />
				<label htmlFor="navi-toggle" className="navigation--button">
					<span className="navigation--icon">&nbsp;</span>
				</label>
				<div className="navigation--background">&nbsp;</div>
				<ul className="navigation--list">
					{this.state.menus.map((menuItem) => {
						return (
							<li
								className={this.state.isMobile ? 'navigation--item' : 'navigation--item neoMorph'}
								key={menuItem.key}
							>
								<a href={`/${menuItem.key}`} className="navigation--link">
									{menuItem.text}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default withNamespaces()(navItems);
