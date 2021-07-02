const router = require('express').Router();

router.get('/profile', async (req, res) => {
    const profile = await req.storage.getUserByEmail(email);
    res.render('profile', { profile });
});

module.exports = router;
