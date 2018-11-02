var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();
var app = express();
var User = require('./models/User');
var PORT = 3000 || process.env.PORT;

var posts = [
	{
		id: 1,
		message: 'Hey man'
	},
	{
		id: 2,
		message: 'Yo'
	}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', function(req, res) {
	res.send(posts);
});

app.post('/register', function(req, res) {
	var userData = req.body;
	var user = new User(userData);
	console.log(userData);
	user.save((err, result) => {
		if (err) {
			console.log('error saving user');
		} else {
			res.send(200);
		}
	});
});

mongoose.connect(process.env.MONGO_STRING, (err) => {
	if (!err) {
		console.log('connected to mongo');
	}
});

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
