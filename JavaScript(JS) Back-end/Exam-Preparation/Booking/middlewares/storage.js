const hotel = require('../services/hotel');

module.exports = () => (req, res, next) => {
    // TODO Import and decorateservices
    req.storage = {
        ...hotel
    };

    next();
};