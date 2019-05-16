var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3030, function() {
	console.log('Servidor iniciado');
});
