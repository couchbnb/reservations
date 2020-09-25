import React from 'react';
import PriceSummary from './PriceSummary.jsx';
import Fees from './Fees.jsx';
import Reserve from './Reserve.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
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