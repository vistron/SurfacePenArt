import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import {Helmet} from "react-helmet";

const AboutPage = (props) => {
	return (
		<div>
			<Helmet>
				<title>{props.t('aboutText')}</title>
				<meta name="description" content={props.t('websiteDesc')}/>
            </Helmet>
			<div className="content">
				<div className="overlayImage">
					<div className="overlayTitle">{props.t('aboutText')}</div>
				</div>
			</div>
			<div className="followTitle">{props.t('followTitle')}</div>
			<div className="aboutSocial">
				{props.icons.map((socialIconData) => {
					return (
						<a
							href={socialIconData.link}
							target="_blank"
							rel="noopener noreferrer"
							key={socialIconData.key}
						>
							<img src={socialIconData.imageURL} alt="icon" />
						</a>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		icons: state.socialIcons
	};
};

export default withNamespaces()(connect(mapStateToProps)(AboutPage));
