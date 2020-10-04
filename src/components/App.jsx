import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

//react components
import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';
import ResSelect from './resSelect/ResSelect.jsx';
import RatingSummary from './RatingSummary.jsx';
// import CalendarView from './resSelect/calendar/CalendarView.jsx';
import GuestSelect from './guestSelect/GuestSelect.jsx';

//styled-components
const Grid = styled.div`
`;

const Wrapper = styled.section`
  top: 50px;
  margin: 50px;
  margin-left: 50%;
  margin-bottom: 80px;
  margin-top: 48px;
  padding: 24px;

  box-sizing: border-box;
  max-width: 300px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  border-width: thin;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  flex-direction: column;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      reservations: [],
      current_date: {},
      calendar: [],
      res_start: {},
      res_end: {},
      valid_res: false,
      res_list: [],
      res_start_string: '',
      res_end_string: '',
      selecting: 'start',
      calView: false,
      guestView: false,
      res_nights_length: 0,
    };
    this.getListingData = this.getListingData.bind(this);
    this.getListingReservation = this.getListingReservation.bind(this);
    this.formatReservations = this.formatReservations.bind(this);
    // this.selectDate = this.selectDate.bind(this);
    // this.clearDates = this.clearDates.bind(this);
  }

  addReservation() {
    var res_start = this.state.res_start;
    var res_end = this.state.res_end;
    var getRes = this.getListingReservation;
    var listing_id = this.state.listing.id;
    var clearDates = this.clearDates.bind(this);

    axios.post('/api/reservations', {
      listing_id: listing_id,
      start_year: 2020,
      start_month: res_start.monthNum,
      start_day: res_start.day,
      end_year: 2020,
      end_month: res_end.monthNum,
      end_day: res_end.day
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      })
      .then(function() {
        getRes(listing_id);
      })
      .then(function() {
        clearDates();
      })
  }

  getListingData(listing_id) {
    var setter = this.setState.bind(this);
    var current_date = {};
    var getRes = this.getListingReservation;
    var queryString = `/api/listing?listing_id=${listing_id}`;

    axios.get(queryString)
      .then(function (response) {
        var newListing = response.data[0];
        var dates = response.data[1];
        console.log('listing');
        console.log(newListing);
        console.log('dates');
        console.log(dates);
        current_date.month = dates.cMonth;
        current_date.day = dates.cDate;
        current_date.year = dates.cYear;
        setter({
          listing: newListing,
          calendar: dates.blankCal,
          current_date: current_date
        }, getRes(newListing.id))
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
  }

  getListingReservation(listingId) {
    var queryString = `/api/reservations?listing_id=${listingId}`;
    var setter = this.setState.bind(this);
    var resy = this.formatReservations.bind(this);
    axios.get(queryString)
      .then(function (response) {
        console.log('got res data')
        setter({ reservations: response.data }, () => { resy(response.data) } );
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
  }

  selectDate(date) {
    if (this.state.selecting === 'start') {
      var dateString = `${2020}${date.monthNum}${date.day}`;
      this.setState({
        res_start: date,
        selecting: 'end',
        res_start_string: dateString,
        res_nights_length: 0,
      });
    } else if (this.state.selecting === 'end') {
      var dateString = `${2020}${date.monthNum}${date.day}`;

      // finds length of potential reservation:
      var length = 0;
      var startDate = this.state.res_start;
      var startDateString = this.state.res_start_string;
      while (startDateString !== dateString) {
        length++;

        // traverse calendar and set a new string for comparison
        startDate = this.state.calendar[startDate.monthNum][startDate.day] || this.state.calendar[startDate.monthNum + 1][0]
        startDateString = `${2020}${startDate.monthNum}${startDate.day}`;
        console.log(startDateString);
      }

      this.setState({
        res_end: date,
        selecting: 'checkout',
        res_end_string: dateString,
        valid_res: true,
        res_nights_length: length,
        calView: false,
      })
    }
  }

  clearDates() {
    console.log('clearing dates')
    this.setState({ res_start: {}, res_end: {}, res_end_string: '', res_start_string: '', selecting: 'start', valid_res: false, res_nights_length: 0 });
  }

  formatReservations(reservations) {
    var res = [];
    // tests whether one month date year is comes before a second
    var isCurrent = (startYear, startMonth, startDate, endYear, endMonth, endDate) => {
      var isPastYear = (startYear > endYear);
      var isPastMonth = (startYear === endYear && startMonth > endMonth);
      var isPastDate = (startYear === endYear && startMonth === endMonth && startDate > endDate);
      if (isPastYear || isPastMonth || isPastDate) {
        return false;
      }
      return true;
    }

    for (var i = 0; i < reservations.length; i++) {
      var startYear = reservations[i].start_year;
      var startMonth = reservations[i].start_month;
      var startDate = reservations[i].start_day;
      var endYear = reservations[i].end_year;
      var endMonth = reservations[i].end_month;
      var endDate = reservations[i].end_day;

      while(isCurrent(startYear, startMonth, startDate, endYear, endMonth, endDate)) {
        var thisDate = `${startYear}${startMonth}${startDate}`;
        res.push(thisDate);
        if (startDate < 31) {
          startDate++
        } else if (startMonth < 12) {
          startDate = 1;
          startMonth++
        } else {
          startDate = 1;
          startMonth = 0;
          startYear++
        }
      }
    }
    this.setState({res_list: res});
  }

  updateReservation(resStartObj, resEndObj) {
    if (resStartObj) {
      this.setState({res_start: resStartObj});
    }
    if (resEndObj) {
      this.setState({res_end: resEndObj});
    }
  }

  toggleCalendar() {
    var toggle = !this.state.calView;
    this.setState({calView: toggle});
  }

  toggleGuest() {
  var toggle = !this.state.guestView;
  this.setState({guestView: toggle});
  }

  render() {
    return (
      <Grid className="App">
        <Wrapper className="wrapper">
          <Summary className="summary">
            <PriceSummary listing={this.state.listing} />
            <RatingSummary listing={this.state.listing} />
          </Summary>
          <ResSelect
            res_start={this.state.res_start}
            res_end={this.state.res_end}
            calView={this.state.calView}
            guestView={this.state.guestView}
            toggleCalendar={this.toggleCalendar.bind(this)}
            toggleGuest={this.toggleGuest.bind(this)}
            data={this.state}
            selectDate={this.selectDate.bind(this)}
            clearDates={this.clearDates.bind(this)} />
          <Button className="button">
            <Reserve valid_res={this.state.valid_res} addReservation={this.addReservation.bind(this)} toggleCalendar={this.toggleCalendar.bind(this)} />
          </Button>
          <Fees valid_res={this.state.valid_res} listing={this.state.listing} res_nights_length={this.state.res_nights_length} />
        </Wrapper>
        {/* <CalendarView

        /> */}
        {/* <GuestSelect /> */}
      </Grid>
    )
  }

  componentDidMount() {
    var urlParams = new URLSearchParams(window.location.search);
    var listing_id = urlParams.get('listing_id');
    if (listing_id) {
      this.getListingData(listing_id);
    } else {
      this.getListingData();
    }
  }
}

export default App;