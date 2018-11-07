var mainController = require('../controllers/mainController');

module.exports = function(app) {
	app.get('/posts', mainController.getPosts);
	app.post('/posts', mainController.addPost);
	app.get('/users', mainController.getUsers);
	app.get('/users/:id', mainController.getUser);
};
