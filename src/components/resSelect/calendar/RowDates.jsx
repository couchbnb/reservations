import React from 'react';
import styled from 'styled-components';
import Date from './Date.jsx';

// takes in a list of dates and renders a table row
const RowDates = (props) => {

  return (
    <tr>
      {props.data.map((date) => <Date date={date} key={Math.random()} />)}
    </tr>
  )
}

export default RowDates;