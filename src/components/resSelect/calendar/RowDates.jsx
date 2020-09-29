import React from 'react';
import styled from 'styled-components';
import Date from './Dates.jsx';

// takes in a list of dates and renders a table row
const RowDates = (props) => {
  var dates = map(props.dates, (date) => <Date date={date} />)

  return (
    <tr>
      {dates}
    </tr>
  )
}

export default RowDates;