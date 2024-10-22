import React from 'react';
// import styled from 'styled-components';
import Date from './Date.jsx';

// takes in a list of dates and renders a table row
const RowDates = (props) => {
  return (
    <tr>
      {props.data.map((date) => {
        return (
          <Date
            data={props.state}
            date={date}
            key={Math.random()}
            listing={props.listing}
            reservations={props.reservations}
            current_date={props.current_date}
            res_list={props.res_list}
            selectDate={props.selectDate}
          />
        )
      })}
    </tr>
  )
}

export default RowDates;