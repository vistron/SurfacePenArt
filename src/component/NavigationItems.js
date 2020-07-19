import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class navItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPref: false,
			menus: [
				{ key: 'digiart', text: props.t('menu.digiArt') },
				{ key: 'blogs', text: props.t('menu.blogs') },
				{ key: 'about', text: props.t('menu.about') }
			]
		};
	}
	componentDidMount() {
		this.setState({
			isMobile: window.innerWidth < 915
		});
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
	showPreference(oEvent) {
		// this.setState({
		// 	showPref: !this.state.showPref
		// });
	}
	render() {
		return (
			<div className="navigation">
				<input type="checkbox" className="navigation--checkbox" autocomplete="off" id="navi-toggle" />
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
					<li className={this.state.isMobile ? 'navigation--item' : 'navigation--item neoMorph'}>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								this.showPreference();
							}}
							className="navigation--link"
						>
							{this.state.isMobile ? this.props.t('menu.pref') : <div className="fas fa-cog" />}
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default withNamespaces()(navItems);
