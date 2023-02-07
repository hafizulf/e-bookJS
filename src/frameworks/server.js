const app = require('./app');

const { NODE_ENV, APP_PORT } = require('./config');

if (NODE_ENV !== 'test') {
	app.listen(APP_PORT, () => {
		console.log(`Listening on port http://localhost:${APP_PORT}`);
	});
}

module.exports = app;
