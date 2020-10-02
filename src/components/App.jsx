import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

//react components
import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';
import ResSelect from './resSelect/ResSelect.jsx';
import RatingSummary from './RatingSummary.jsx';
import CalendarView from './resSelect/calendar/CalendarView.jsx'

import GuestSelect from './guestSelect/GuestSelect.jsx'

//styled-components
const Wrapper = styled.section`
  top: 50px;
  margin: 50px;
  margin-left: 8.33333%;
  margin-bottom: 80px;
  margin-top: 48px;
  padding: 24px;

  box-sizing: border-box;
  width: 300px;
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
    };
    this.getListingData = this.getListingData.bind(this);
    this.getListingReservation = this.getListingReservation.bind(this);
  }

  addReservation(resId, data) {
    axios.post('/api/reservation')
      .then(function (response) {
        console.log(response);
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
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
    axios.get(queryString)
      .then(function (response) {
        setter({ reservations: response.data });
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
  }

  render () {

    if (this.state.valid_res) {
      return (
        <div className="App">
          <Wrapper className="wrapper">
            <Summary className="summary">
              <PriceSummary />
              <RatingSummary />
            </Summary>
            <ResSelect />
            <Button className="button">
              <Reserve valid_res={this.state.valid_res} />
            </Button>
            <Fees />
          </Wrapper>
          <CalendarView data={this.state} />
          <GuestSelect />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Wrapper className="wrapper">
            <Summary className="summary">
              <PriceSummary />
              <RatingSummary />
            </Summary>
            <ResSelect />
            <Button className="button">
              <Reserve valid_res={this.state.valid_res} />
            </Button>
          </Wrapper>
          <CalendarView data={this.state} />
          <GuestSelect />
        </div>
      )
    }
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