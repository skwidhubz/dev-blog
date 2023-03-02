const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoute = require('./log');

router.use('/api', apiRoutes);
router.use('/', loginRoute);

// if api? go to api folder.
// if login? go to login page.


// middleman router.

module.exports = router