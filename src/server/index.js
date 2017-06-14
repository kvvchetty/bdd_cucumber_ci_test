const express = require('express');
const config = require('./config');

const app = express();

app.get('/api/insecure', (req, res) => {
    res.send({
		answer: 42,
		name: 'Graham'
	});
});

const port = config.get('http.port');
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
