const {Icons} = require('../lib');

const style = `<style>
.active { font-weight: bold; }
.icon {
	float: left;
	width: 32px;
	height: 32px;
	margin-right: 10px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.row { display: flex; margin-bottom: 5px; font-size: 12px; align-items: center; border-bottom: 1px solid #ccc; }
.name, .size { width: 100px; text-align: center; padding: 0 10px; }
.url { flex: 1; }
</style>`;


function getImg (item) {
	return `<div class="row ${item.active ? 'active' : ''}">
		<div class="icon" style="background-image: url('${item.href}')"></div>
		<div class="name">${item.name || ''}</div>
		<div class="size">${item.size ? item.size + 'x' + item.size : ''}</div>
		<div class="url">${item.href}</div>
	</div>`;
}



function handler (req, resp) {
	Icons
		.get(req.query.url)
		.then(icons => {
			// icons.length = 1;
			const html = `<h4>${req.query.url}</h4>${icons.map(getImg).join('')}`;
			return resp.send(style + html);

		})
		.catch(e => {
			console.error(e);
		});
}


module.exports = handler;
