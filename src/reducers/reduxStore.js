import i18n from '../i18n';

const storeData = {
	cards: [
		{
			key: 1,
			title: i18n.t('menu.portrait'),
			to: '/portrait',
			imageURL: '/assets/images/prasenjit.jpg'
		},
		{
			key: 2,
			to: '/illustration',
			title: i18n.t('menu.illustration'),
			imageURL: '/assets/images/superman.jpg'
		},
		{
			key: 3,
			to: '/fanart',
			title: i18n.t('menu.fanArt'),
			imageURL: '/assets/images/stanlee.jpg'
		}
	],
	socialIcons: [
		{
			key: 1,
			imageURL: '/assets/icons/instagram.svg',
			link: 'https://www.instagram.com/vistron'
		},
		{
			key: 2,
			imageURL: '/assets/icons/facebook.svg',
			link: 'http://facebook.com/vishnuEIN'
		},
		{
			key: 3,
			imageURL: '/assets/icons/twitter.svg',
			link: 'https://twitter.com/vishnuEIN'
		},
		{
			key: 4,
			imageURL: '/assets/icons/deviantart.svg',
			link: 'https://www.deviantart.com/vishnuein'
		}
	]
};

const reducer = (state = storeData, action) => {
	return state;
};

export default reducer;
