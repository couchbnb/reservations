// sets up database connection for use in other files
const mysql = require('mysql')
const DB_CRED = require('./config')
const connection = mysql.createConnection(DB_CRED);

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) {
    console.log(err.name);
    throw err
  }

  console.log('index DB test. connected if 1 + 1 =', rows[0].solution)
})

module.exports = { connection };