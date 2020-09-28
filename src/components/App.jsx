import React from 'react';
import Axios from 'axios';
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
  padding: 4em;
  max-width: 200px;
  border-color: black;
  border-style: solid;
  border-radius: 16px;
  margin: 50px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  border-width: thin;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  addReservation(resId, ) {
    axios.post('/api/reservation', ()=>{})
  }

  getListingData() {
    axios.get('/api/listing', ()=>{})
  }

  getListingReservation(resId) {
    axios.get('/api/reservation', ()=>{})
  }

  render () {
    return (
      <Wrapper>
        <PriceSummary />
        <RatingSummary />
        <CheckIn />
        <Reserve />
        <Fees />
      </Wrapper>
    )
  }
}

export default App;