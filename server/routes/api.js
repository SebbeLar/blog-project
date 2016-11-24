const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send({ data: 'Hello World from Node Server!' });
});

module.exports = router;
