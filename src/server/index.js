const express = require('express');
const passport = require('passport');
const config = require('./config');
require('./authentication/accesstoken');

const app = express();

app.use(passport.initialize());

app.get('/api/insecure', (req, res) => {
	res.send({
		answer: 42,
		name: 'Graham'
	});
});

app.get('/api/secure',
	passport.authenticate('bearer', { session: false }),
	(req, res) => {
		res.send(req.user);
	});

const port = config.get('http.port');
app.listen(port, () => {
	console.log('Server listening on port ' + port);
});
