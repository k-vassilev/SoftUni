module.exports = () => (req, res, next) => {
    // TODO Import and decorateservices
    req.storage = {};
    next();
};