// sets up static calendar data

var now = new Date();

var calMonth = now.getMonth();
var calYear = now.getYear();
var calDate = now.getDate();

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var daysInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var generateYears = () => {
  // get the current date/year
  var first = new Date(`1 January ${1900 + calYear}`);
  // find the first day of the week for that year
  var dowIndex = first.getDay()
  var firstDay = daysOfWeek[dowIndex];
  //console.log('its ' + firstDay);
  var year = []
  for (var i = 0; i < daysInYear.length; i++) {
    year.push([]);
    for (var j = 1; j <= daysInYear[i]; j++) {
      var thisDate = {
        day: j,
        monthNum: i,
        monthName: monthNames[i],
        dayName: daysOfWeek[dowIndex],
        dayIndex: dowIndex
      }
      year[i].push(thisDate);
      dowIndex < 6 ? dowIndex++ : dowIndex = 0;
    }
  }
  return year;
};



const calendar = {
  cDate: calDate,
  cMonth: calMonth,
  cYear: calYear,
  monthNames: monthNames,
  blankCal: generateYears()
};

module.exports = calendar;