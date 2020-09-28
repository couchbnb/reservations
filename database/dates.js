// sets up static calendar data

var now = new Date();
console.log(now);

var calMonth = now.getMonth();
var calYear = now.getYear();
var calDate = now.getDate();

console.log('month = ' + calMonth);
console.log('year = ' + calYear);
console.log('date = ' + calDate);

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const calendar = {
  cDate: calDate,
  cMonth: calMonth,
  cYear: calYear,
  monthNames: monthNames

}

module.exports = calendar;