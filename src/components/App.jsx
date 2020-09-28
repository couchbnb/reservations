import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';
import CheckIn from './resSelect/ResSelect.jsx';
import RatingSummary from './RatingSummary.jsx';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

`;
const Wrapper = styled.section`
  padding: 30px;
  width: 300px;
  border-color: black;
  border-style: solid;
  border-radius: 14px;
  margin: 50px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  border-width: thin;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;

`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      reservations: [],
    };
    this.getListingData = this.getListingData.bind(this);
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

  getListingData() {
    axios.get('/api/listing')
      .then(function (response) {
        console.log(response);
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
  }

  getListingReservation(resId) {
    var queryString = `/api/reservation?`
    axios.get('/api/reservation')
      .then(function (response) {
        console.log(response);
      })
      .catch(function(err) {
        if (err) {
          throw err;
        }
      });
  }

  render () {
    return (
      <Wrapper>
        <Summary>
          <PriceSummary />
          <RatingSummary />
        </Summary>
        <CheckIn />
        <Button>
          <Reserve />
        </Button>
        <Fees />
      </Wrapper>
    )
  }

  componentDidMount() {
    this.getListingData();
  }
}

export default App;