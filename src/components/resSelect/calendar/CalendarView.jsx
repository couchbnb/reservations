/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// components
import LeftCalendar from './LeftCalendar.jsx';
import RightCalendar from './RightCalendar.jsx';
// import BkButton from './BkButton.jsx';
// import FwButton from './FwButton.jsx';
import CheckIn from '../CheckIn.jsx';
import CheckOut from '../CheckOut.jsx';
import Close from './Close.jsx';
import Clear from './Clear.jsx';
import Keyboard from './Keyboard.jsx'

// import { ReactComponent as Keyboard } from '../../../assets/keyboard.svg'


// styled-components
let Wrapper = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 16px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px !important;
  ${'' /* display: inline-block !important; */}
  padding: 24px 32px 16px !important;
  ${'' /* position: absolute !important; */}
  top: -24px !important;
  right: -32px !important;
  width: 661px !important;
  z-index: 1 !important;
  min-height: 460px !important;

  ${'' /* border-style: solid;
  border-color: black;
  border-radius: 7px;
  border-width: thin; */}
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
`;

let Calend = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
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
  justify-content: space-between;
  align-items: center;
`;

let Closer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const CalendarView = (props) => {
  var date = props.data.current_date;
  var calendar = props.data.calendar;
  var month1 = calendar[date.month];
  var month2 = calendar[date.month + 1];


  return (
    <Wrapper className="CalendarView">
      <Summary className="summary">
        <div>
          <div>Select Dates</div>
          <div>Minimum Stay: 1 night</div>
        </div>
        <Checking>
          <CheckIn />
          <CheckOut />
        </Checking>
      </Summary>

      <Calend className="calend">
        <LeftCalendar month={month1} listing={props.data.listing} reservations={props.data.reservations} current_date={props.data.current_date} />
        <RightCalendar month={month2} listing={props.data.listing} reservations={props.data.reservations} current_date={props.data.current_date} />
      </Calend>

      <Foot className="foot">
        <Keyboard />
        <Closer>
          <Clear />
          <Close />
        </Closer>
      </Foot>
    </Wrapper>
  )
}

export default CalendarView;