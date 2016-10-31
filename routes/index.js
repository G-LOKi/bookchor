var express = require('express');
var mysql = require("mysql");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Cool@coder01",
    database: "bookchor"
  });

  con.query('SELECT * FROM books', function(err, rows)
  {
    res.render('index', {data : rows, title : 'BookChor'});
    console.log( rows.length);
  });
});

module.exports = router;
