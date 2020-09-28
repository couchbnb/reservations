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

let Wrapper = styled.div`
  padding: 10px;
  margin: 10px;
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

const CalendarView = (props) => (
  <Wrapper>
    <Summary>
      <div>
        <div>Select Dates</div>
        <div>Minimum Stay</div>
      </div>
      <Checking>
        <CheckIn />
        <CheckOut />
      </Checking>
    </Summary>

    <Calend>
      <LeftCalendar />
      <RightCalendar />
    </Calend>
  </Wrapper>
)

export default CalendarView;