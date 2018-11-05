var User = require('../models/User');

module.exports = {
	getPosts: (req, res) => {
		res.send(posts);
	},

	getUsers: async (req, res) => {
		try {
			var users = await User.find({}, '-password -__v');
			res.send(users);
		} catch (error) {
			console.log(error);
			res.send(error);
		}
	},

	getUser: async (req, res) => {
		try {
			var user = await User.findById(req.params.id, '-password -__v');
			res.send(user);
		} catch (error) {
			res.send(error);
		}
	}
};
