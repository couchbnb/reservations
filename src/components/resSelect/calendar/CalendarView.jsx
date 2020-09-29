import React from 'react';
import styled from 'styled-components';

// components
import LeftCalendar from './LeftCalendar.jsx';
import RightCalendar from './RightCalendar.jsx';
// import BkButton from './BkButton.jsx';
// import FwButton from './FwButton.jsx';
import Date from './Date.jsx';
import CheckIn from '../CheckIn.jsx';
import CheckOut from '../CheckOut.jsx';
import Close from './Close.jsx';
import Clear from './Clear.jsx';

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
        <div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "24px", width: "24px"}} display="block" fill="currentcolor">
            <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </div>
        <Closer>
          <Clear />
          <Close />
        </Closer>
      </Foot>
    </Wrapper>
  )
}

export default CalendarView;