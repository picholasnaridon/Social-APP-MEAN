var User = require('../models/User');
var Post = require('../models/Post');

module.exports = {
	getPosts: (req, res) => {
		res.send(res);
	},

	addPost: (req, res) => {
		var post = new Post(req.body);

		post.save((err, result) => {
			if (err) {
				return res.status(500).send({ message: 'error saving post' });
			}
			return res.sendStatus(200);
		});
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
