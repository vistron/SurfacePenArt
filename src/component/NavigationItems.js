import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class navItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: [
				{ key: 'portrait', text: props.t('menu.portrait') },
				{ key: 'illustration', text: props.t('menu.illustration') },
				{ key: 'fanart', text: props.t('menu.fanArt') },
				{ key: 'blogs', text: props.t('menu.blogs') },
				{ key: 'about', text: props.t('menu.about') }
			]
		};
	}
	componentDidMount() {
		window.addEventListener(
			'resize',
			() => {
				this.setState({
					isMobile: window.innerWidth < 1110
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
				<nav className="navigation--nav">
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
				</nav>
			</div>
		);
	}
}

export default withNamespaces()(navItems);
