var User = require('../models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');

module.exports = {
	register: (req, res) => {
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
	},
	login: async (req, res) => {
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
	}
};
