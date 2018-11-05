var authController = require('../controllers/authController');

module.exports = function(app) {
	app.post('/register', authController.register);
	app.post('/login', authController.login);
};
