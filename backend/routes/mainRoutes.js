var mainController = require('../controllers/mainController');

module.exports = function(app) {
	app.get('/posts', mainController.getPosts);
	app.get('/users', mainController.getUsers);
	app.get('/profile/:id', mainController.getUser);
};
