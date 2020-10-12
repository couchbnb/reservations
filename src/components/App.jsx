import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

//react components
import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';
import ResSelect from './resSelect/ResSelect.jsx';
import RatingSummary from './RatingSummary.jsx';

//styled-components
const Grid = styled.div`
  padding: 50px;
  padding-right: 80px;
  padding-left: 80px;
  max-width: 1280px !important;
  width: 100% !important ;
  display: flex !important;
  align-items: flex-start;
`;

const Text = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.img`
  width: 58.3333% !important;
  min-width: 500px;
`;

const Size = styled.div`
  border: 1px solid rgb(221, 221, 221) !important;
  border-radius: 12px !important;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important;
  border-width: thin !important;
  color: #222222 !important;
  font-weight: 400 !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  display: flex !important;
  flex-direction: column !important;
  padding: 24px !important;
  top: 50px !important;
  margin: 50px !important;
  margin-left: 50px !important;
  margin-bottom: 80px !important;
  margin-top: 48px !important;

`;

const Wrapper = styled.section`
  box-sizing: border-box !important;
  width: 33.3333% !important;
  min-width: 350px;
  position: sticky;
  top: 48px;
`;

const Pad = styled.div`
  width: 8.33333% !important;
`;

const Summary = styled.div`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: baseline !important;
  margin-bottom: 24px !important;
`;

const Button = styled.div`
  display: flex !important;
  justify-content: center !important;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
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
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      }
    };
    this.getListingData = this.getListingData.bind(this);
    this.getListingReservation = this.getListingReservation.bind(this);
    this.formatReservations = this.formatReservations.bind(this);
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
      .then(function() {
        getRes(listing_id);
      })
      .then(function() {
        clearDates();
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
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
        // console.log('got res data')
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
        // console.log(startDateString);
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
    // console.log('clearing dates')
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
    this.setState({calView: toggle, guestView: false});
  }

  toggleGuest() {
  var toggle = !this.state.guestView;
  this.setState({guestView: toggle, calView: false});
  }

  setGuests(adults, children, infants) {
    this.setState({ guests: { adults, children, infants } })
  }

  render () {
    return (
      <Grid className="App">
        <Text>
          <Description src="listing_description2.png" />
          <Description src="ListingDetails.png" />
        </Text>
        <Wrapper className="wrapper">
          <Size>
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
              clearDates={this.clearDates.bind(this)}
              setGuests={this.setGuests.bind(this)} />
            <Button className="button">
              <Reserve valid_res={this.state.valid_res} addReservation={this.addReservation.bind(this)}/>
            </Button>
            <Fees valid_res={this.state.valid_res} listing={this.state.listing} res_nights_length={this.state.res_nights_length} />
          </Size>
        </Wrapper>
        <Pad></Pad>
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