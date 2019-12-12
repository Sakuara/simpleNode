const express = require('express');
const router = express.Router();

/* GET HOME PAGE. */
router.get('/', (req, res, next) => {
    res.end('index page');
});

module.exports = router;