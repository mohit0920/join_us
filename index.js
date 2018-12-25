const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// Set the default templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345678',
    database :'join_us'
});

app.get('/', function(req,res) {
    var count_query = 'select count(*) as count from users';
    connection.query(count_query, function(err, results) {
    var count = results[0].count;
    res.render("home",{count: count});
    });
});

app.post('/register', function(req, res) {
    var person = {
      email:  req.body.email
    };
    var insert_query = 'insert into users set ?';
    connection.query(insert_query, person, function (err, results) {
    res.redirect('/');
    });

});

app.listen(port, function() {
    console.log('Join Us app listening on port ' +port);
});

