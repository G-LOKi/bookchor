var mysql = require("mysql");

module.exports = function(req, res, next) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Cool@coder01",
        database: "bookchor"
    });

    con.query('SELECT * FROM books', function(err, rows)
    {
        res.render('listBooks', {data : rows});
        console.log( rows.length);
    });
};
