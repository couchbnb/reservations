import React from 'react';
import styled from 'styled-components';

//components
import DateUnavailable from './dateStyle/DateUnavailable.jsx'

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

const DateVal = styled.div`
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  position: relative !important;
  color: rgb(34, 34, 34) !important;

  border: 1.5px solid rgb(255, 255, 255) !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
`;


const Value = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px !important;

`;

const Price = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: rgb(113, 113, 113);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;



const Date = (props) => {
  if (props.date.day) {
    var isPastMonth = (props.date.monthNum < props.current_date.month);
    var isSameMonthPastDay = props.date.monthNum === props.current_date.month && props.date.day < props.current_date.day;
    if (isPastMonth || isSameMonthPastDay) {
      return (
        <DateUnavailable data={props.date.day} />
      )
    } else {
      return (
        <DateSpace>
          <DateVal>
            {props.date.day}
          </DateVal>
          <Price>
            $100
          </Price>
        </DateSpace>
      )
    }
  } else {
    return <DateSpace></DateSpace>
  }
}

export default Date;