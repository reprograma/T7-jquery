module.exports = function(app) {

	var api = app.api.cartas;

	app.route('/cartas/')
		.get(api.lista);

	app.route('/cartas/')
	.post(api.insere);
};
