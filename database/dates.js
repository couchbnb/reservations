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

var daysInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var getYear = () => {
  var year = []
  for (var i = 0; i < daysInYear.length; i++) {
    year.push([]);
    for (var j = 1; j <= daysInYear[i]; j++) {
      var thisDate = {
        day: j,
        monthNum: i,
        monthName: monthNames[i]
      }
      year[i].push(thisDate);
    }
  }
  return year;
}



const calendar = {
  cDate: calDate,
  cMonth: calMonth,
  cYear: calYear,
  monthNames: monthNames,
  blankCal: getYear()
}

module.exports = calendar;