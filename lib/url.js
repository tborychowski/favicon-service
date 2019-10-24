const URL = require('url');

// const trimSlashes = str => str.replace(/(^\/)|(\/$)/g, '');
const rtrimSlashes = str => str.replace(/\/$/g, '');


/**
 * Parse the URL into an object (filling in the protocol if not provided)
 */
function parse (url) {
	let res;
	url = '' + url;
	if (url.indexOf('http') !== 0) url = 'https://' + url;
	try { res = URL.parse(url, true); }
	catch (e) { res = {}; }
	return res;
}


/**
 * Get request query params as object
 */
function query (url) {
	return parse(url).query;
}

/**
 * Get request path
 */
function path (url) {
	return rtrimSlashes(parse(url).path);
}


/**
 * get protocol+host+port from the url (remove path, query params and the rest)
 */
function sanitize (url) {
	url = parse(url);
	const realUrl = [url.protocol, '//', url.host];
	if (url.port) realUrl.push(':', url.port);
	return realUrl.join('');
}




module.exports = {
	parse,
	sanitize,
	query,
	path,
};
