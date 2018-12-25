var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : '12345678',
        database : 'join_us'
    }
);
connection.connect();

var insert_query = 'insert into users (email, created_at) values ?';
var data = [];
for (i = 0; i < 500; i++) {
    data.push(
        [
            faker.internet.email(),
            faker.date.past()
        ]
    );
}

connection.query(insert_query, [data], function(error, results){
    console.log(error)
    console.log(results);
});
connection.end();

