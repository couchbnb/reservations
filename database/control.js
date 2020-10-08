const model = require('./model.js')

module.exports = {
  getListing: (listing, callback) => {
    if (listing) {
      model.getListing(listing, callback);
    } else {
      model.getAnyListing(callback);
    }
  },
  getReservations: (listing, callback) => {
    model.getReservations(listing, callback)
  },
  addReservation: (data, callback) => {
    // console.log(data);
    var stringData = `( ${data.listing_id}, ${data.start_year}, ${data.start_month}, ${data.start_day}, ${data.end_year}, ${data.end_month}, ${data.end_day} )`;
    model.addReservation(stringData, callback);
  }
}