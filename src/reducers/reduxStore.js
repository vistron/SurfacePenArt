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
			imageURL:
				'https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-social-media-icon-design-template-vector-png-image_3654765.jpg',
			link: 'https://www.instagram.com/vistron'
		}
	]
};

const reducer = (state = storeData, action) => {
	return state;
};

export default reducer;
