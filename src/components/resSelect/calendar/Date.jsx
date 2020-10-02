import React from 'react';
import styled from 'styled-components';

//components
import DatePast from './dateStyle/Past.jsx'
import DateAvailable from './dateStyle/Available.jsx'

const DateSpace = styled.td`
  margin-left: 1px !important;
  margin-right: 1px !important;
  width: 40px;
  height: 39px;

  border: 0px;
  padding: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
`;

const Date = (props) => {
  if (props.date.day) {
    // handle past dates
    var isPastMonth = (props.date.monthNum < props.current_date.month);
    var isSameMonthPastDay = props.date.monthNum === props.current_date.month && props.date.day < props.current_date.day;

    // handle reservations
    var stringDate = `${2020}${props.date.monthNum}${props.date.day}`;
    var isReserved = props.res_list.includes(stringDate)


    if (isPastMonth || isSameMonthPastDay) {
      console.log('date passed')
      return (
        <DatePast data={props.date.day} />
      )
    } else if (isReserved) {
      return(
        <DatePast data={props.date.day} />
      )
    } else {
      // console.log('date available')
      return (
        <DateAvailable className="availableDate" day={props.date.day} base_price={props.listing.base_price} />
      )
    }
  } else {
    return <DateSpace className="dateSpace"></DateSpace>
  }
}

export default Date;
