const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');
const homeController = require('../controllers/homeController');
const profileController = require('../controllers/profileController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/trip', tripController);
    app.use('/', homeController);
    app.use('/profile', profileController);
};