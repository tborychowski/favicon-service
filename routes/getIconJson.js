const {Icons} = require('../lib');


function handler (req, res) {
	Icons
		.get(req.query.url)
		.then(icons => {
			const iconUrl = icons[0].href;
			res.json(iconUrl);
		});
}


module.exports = handler;
