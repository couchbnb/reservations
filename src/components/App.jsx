import React from 'react';
import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';
import Axios from 'axios';

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
      <div className="buff">
        <h1 className="App">Hello, couchBNB!</h1>
        <PriceSummary />
        <Fees />
        <Reserve />
      </div>
    )
  }
}

export default App;