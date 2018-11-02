var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

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
	user.save((err, user) => {
		if (err) {
			res.status(400).send({ message: 'An error occured!' });
		} else {
			var payload = {};
			var token = jwt.encode(payload, 'replaceWithUserID');
			res.status(200).send({ token: token });
		}
	});
});

app.post('/Login', async (req, res) => {
	var userData = req.body;

	var user = await User.findOne({ email: userData.email });

	if (!user) {
		return res.status(401).send({ message: 'Email or Password Invalid' });
	}

	if (userData.password != user.password) {
		return res.status(401).send({ message: 'Email or Password Invalid' });
	}

	var payload = {};

	var token = jwt.encode(payload, 'replaceWithUserID');
	console.log({ token: token, user: user });

	res.status(200).send({ token: token });
});

mongoose.connect(process.env.MONGO_STRING, (err) => {
	if (!err) {
		console.log('connected to mongo');
	}
});

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
