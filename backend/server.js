var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
var PORT = 3000 || process.env.PORT;

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

require('./routes/mainRoutes.js')(app);
require('./routes/authRoutes.js')(app);

mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('connected to mongo');
	}
});

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
