const getIconJson = require('./getIconJson');
const getIconHtml = require('./getIconHtml');

const html = `<h4>Enter URL, e.g.:</h4>
<ul>
	<li><a href="/?url=https://www.fastmail.com">fastmail</a>
	<li><a href="/?url=https://mail.google.com">gmail</a>
	<li><a href="/?url=https://maps.google.com/">maps</a>
	<li><a href="/?url=https://facebook.com/">facebook</a>
	<li><a href="/?url=https://www.amazon.co.uk/">amazon</a>
	<li><a href="/?url=https://forgeofempires.com/">forge of empires</a>
	<li><a href="/?url=https://home.nest.com/">nest</a>
	<li><a href="/?url=https://meethue.com">hue</a>
	<li><a href="/?url=https://github.com">github</a>
	<li><a href="/?url=https://stackoverflow.com/">stackoverflow</a>
</ul>`;


function handler (req, res) {
	if (!req.query.url) return res.end(html);
	if (req.xhr) return getIconJson(req, res);
	return getIconHtml(req, res);
}


module.exports = handler;
