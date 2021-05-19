'use strict';
var express = require('express');
var router = express.Router();
var index = require('../index');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'service is working' });
});

router.post('/send', function (req, res) {

    index.sendPendings(req.body).then(x => res.send(x)).catch(e => next(e));
})
 

module.exports = router;
