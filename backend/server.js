var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');

require('dotenv').config();
var app = express();
var User = require('./models/User');
var PORT = 3000 || process.env.PORT;

mongoose.Promise = Promise;

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

app.get('/users', async (req, res) => {
	try {
		var users = await User.find({}, '-password -__v');
		res.send(users);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
});

app.get('/profile/:id', async (req, res) => {
	try {
		var user = await User.findById(req.params.id, '-password -__v');
		res.send(user);
	} catch (error) {
		res.send(error);
	}
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

app.post('/login', async (req, res) => {
	var loginData = req.body;

	var user = await User.findOne({ email: loginData.email });

	if (!user) {
		return res.status(401).send({ message: 'Email or Password Invalid' });
	}

	bcrypt = bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
		if (!isMatch) return res.status(401).send({ message: 'Email or Password Invalid' });

		var payload = {};

		var token = jwt.encode(payload, 'replaceWithUserID');
		console.log({ token: token, user: user });

		res.status(200).send({ token: token });
	});
});

mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('connected to mongo');
	}
});

app.listen(PORT, function() {
	console.log(`Listening on port ${PORT}`);
});
