const { connection } = require('./index.js')

module.exports = {
  getListing: (listing, callback) => {
    var queryString = `SELECT * FROM listings WHERE id = ${listing}`
    connection.query(queryString, (err, rows) => {
      if (err) {
        callback(err, rows);
      } else {
        callback(null, rows);
      }
    })
  },
  getAnyListing: (callback) => {
    var queryString = 'SELECT * FROM listings LIMIT 1'
    connection.query(queryString, (err, rows) => {
      if (err) {
        callback(err, rows);
      } else {
        callback(null, rows);
      }
    })
  },
  getReservations: (listing, callback) => {
    var queryString = `SELECT * FROM reservations WHERE listing_id = ${listing}`;
    connection.query(queryString, (err, rows) => {
      if (err) {
        callback(err, rows);
      } else {
        callback(null, rows);
      }
    })
  },
  addReservation: (dataString, callback) => {
    var queryString = `INSERT INTO reservations( listing_id, start_year, start_month, start_day, end_year, end_month, end_day ) VALUES `;
    queryString += dataString;
    // console.log(queryString);
    connection.query(queryString, (err, rows) => {
      if (err) {
        callback(err, rows);
      } else {
        callback(null, rows);
      }
    })
  }
}