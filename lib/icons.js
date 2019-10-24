const {fetchFavicons} = require('@meltwater/fetch-favicon');
const Url = require('./url');


function processIcons (icons) {
	let ogs = icons.filter(icon => (icon.name && icon.name === 'apple-touch-icon'));
	if (!ogs.length) ogs = icons.filter(icon => (icon.name && icon.name === 'og:image'));
	if (!ogs.length) ogs = icons.filter(icon => icon.active);
	if (!ogs.length) ogs = icons;
	return Promise.resolve(ogs);
}


function get (url) {
	return fetchFavicons(Url.sanitize(url))
		// .then(processIcons)
		.catch(e => console.error(e));
}


module.exports = {
	get
};
