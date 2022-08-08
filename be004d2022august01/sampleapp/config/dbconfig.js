var mysql = require("mysql2")

var connection = mysql.createConnection({
    host: "localhost",
    user:"root", 
    password:"",
    database:"demodb"
})
var conn = connection.promise()
conn.query()

module.exports = conn