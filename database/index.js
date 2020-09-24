const mysql = require('mysql')
const DB_CRED = require('./config.js')
const connection = mysql.createConnection(DB_CRED);

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()