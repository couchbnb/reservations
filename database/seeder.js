const faker = require('faker');
const { connection } = require('./index');

// config seed
const seedConfig = {
  advanceDays: 75,
  maxResLength: 14,
  listingCount: 100,
  bookingsCount: 5
}

console.log('clearing data');
connection.query('DELETE FROM reservations', (err, rows) => {
  if (err) throw err;
  console.log('deleted all from reservations');
})
connection.query('DELETE FROM listings', (err, rows) => {
  if (err) throw err;
  console.log('deleted all from listings');
})

//date generation
var getDates = () => {
  var monthSet = [ 9, 10, 11, 12, 1, 2, 3 ];
  var year = [2020, 2021]
  var dateList = [];

  for (var i = 0; i < monthSet.length; i++) {
    var daysInMonth;
    var month = monthSet[i];
    var year;
    if (i === 0 || i === 2) {
      daysInMonth = 30;
    } else if (i === 5) {
      daysInMonth = 28;
    } else {
      daysInMonth = 31;
    }
    if (i <= 3) {
      year = '2020';
    } else {
      year = '2021';
    }
    for (var j = 1; j <= daysInMonth; j++) {
      dateList.push({ year: year, month: month, day: j });
    }
  }
  return dateList;
}

const dateList = getDates();


// seed listings
var insertListing = (num)=>{
  var queryString = 'INSERT INTO listings(base_price, tax, service_fee, cleaning_fee, review_average, review_count) VALUES ';
  for (var i = 0; i < num; i++) {
    var base_price = faker.commerce.price();
    var tax_rate = .09
    var service_fee_rate = .17
    var cleaning_fee = faker.commerce.price();
    var review_average = faker.random.number({min: 3, max: 4}) + (0.01 * faker.random.number({min: 10, max: 99}));
    var review_count = faker.random.number({min: 15, max: 1000, });
    var value = `( ${base_price} , ${tax_rate} , ${service_fee_rate}, ${cleaning_fee}, ${review_average}, ${review_count} ), `;
    queryString += value;
  }
  queryString = queryString.slice(0, -2);
  console.log('seeding listings');
  console.log(queryString);
  connection.query(queryString, (err, rows)=>{
    if (err) {
      throw err;
    } else {
      insertReservation(seedConfig.bookingsCount);
    }

  });
}


// seed listing reservations
var insertReservation = (num)=>{
  connection.query('SELECT id FROM listings', (err, rows) => {
    if (err) throw err;
    var queryString = 'INSERT INTO reservations(listing_id, start_year, start_month, start_day, end_year, end_month, end_day) VALUES ';
    for (var i = 0; i < rows.length; i++) {
      for (var j = 0; j < num; j++) {
        var listing_id = rows[i].id;
        var date1 = Math.floor(Math.random() * seedConfig.advanceDays);
        var date2 = Math.floor(Math.random() * seedConfig.maxResLength) + date1;
        var start_date = dateList[date1];
        var end_date = dateList[date2];

        var value = `( ${listing_id} , ${start_date.year}, ${start_date.month}, ${start_date.day}, ${end_date.year}, ${end_date.month}, ${end_date.day} ), `;
        queryString += value;
      }
    }

    queryString = queryString.slice(0, -2);
    console.log('seeding reservations');
    console.log(queryString);
    connection.query(queryString, (err) => {
      if (err) {
        throw err;
      } else {
        console.log('finished');
      }
    });
  })
}

console.log('seeding db');
insertListing(seedConfig.listingCount);

