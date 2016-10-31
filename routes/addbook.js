var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('addbook', { category : JSON.stringify(req.body.category) , title : "apple" });
});

module.exports = router;
