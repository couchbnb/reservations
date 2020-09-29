import React from 'react';
import styled from 'styled-components';

// components
import LeftCalendar from './LeftCalendar.jsx';
import RightCalendar from './RightCalendar.jsx';
import BkButton from './BkButton.jsx';
import FwButton from './FwButton.jsx';
import Date from './Date.jsx';
import CheckIn from '../CheckIn.jsx';
import CheckOut from '../CheckOut.jsx';
import Close from './Close.jsx';
import Clear from './Clear.jsx';

// styled-components
let Wrapper = styled.div`
  padding: 20px;
  margin: 20px;
  border-style: solid;
  border-color: black;
  border-radius: 7px;
  border-width: thin;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  width: 550px;
`;

let Calend = styled.div`
  display: flex;
  justify-content: space-around
`;

let Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 10px;
`;

let Checking = styled.div`
  display: flex;
  border-style: solid;
  border-color: black;
  border-radius: 7px;
  border-width: thin;
  width: 300px;
`;

let Foot = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const CalendarView = (props) => {
  var date = props.data.current_date;
  var calendar = props.data.calendar;
  console.log(date.month);
  var month1 = calendar[date.month];
  var month2 = calendar[date.month + 1];

  console.log(month1)

  return (
    <Wrapper>
      <Summary>
        <div>
          <div>Select Dates</div>
          <div>Minimum Stay: 1 night</div>
        </div>
        <Checking>
          <CheckIn />
          <CheckOut />
        </Checking>
      </Summary>

      <Calend>
        <LeftCalendar month={month1} />
        <RightCalendar month={month2} />
      </Calend>

      <Foot>
        <Clear />
        <Close />
      </Foot>
    </Wrapper>
  )
}

export default CalendarView;