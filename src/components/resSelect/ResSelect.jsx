import React, { Component } from 'react';
import styled from 'styled-components';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Guests from './Guests.jsx';
import CalendarView from './calendar/CalendarView.jsx'

const Box = styled.div`
  border-style: solid;
  border-radius: 8px;
  border-color: rgb(176, 176, 176);
  border-width: 1px;
  z-index: 0;
  background-color: #FFFFFF !important;
  padding: 0px;

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;

const CheckInOut = styled.div`
  ${'' /* flex: 1 1 0%; */}
  height: 56px;
  width: 100%;

  ${'' /* provisionally switched to border bottom only to achieve desired look */}
  border-bottom-style: solid;
  border-radius: 8px 8px 0px 0px;
  border-color: rgb(176, 176, 176);
  border-width: 1px;
  display: block;

  box-sizing: border-box;

  padding: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: -1px;
`;

const InnerWrap = styled.div`
  background: none;
  position: relative !important;
  display: flex !important;
  width: 100% !important;
  margin: 0px !important;
  border: none transparent !important;
  color: rgb(34, 34, 34) !important;
  background-color: transparent !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  outline: 0px !important;
`;

const PopUpHide = styled.div`
  position: absolute;
  z-index: 1;
  right: -30px;
  top: -20px;
  display: none;
`;

const PopUpDisplay = styled.div`
  position: absolute;
  z-index: 1;
  right: -30px;
  top: -20px;
  display: block;
`;

const ResSelect = (props) => {

  return (
    <Box className="ResSelect">
      {props.data.calView ? (<PopUpDisplay>
          <CalendarView
            data={props.data}
            selectDate={props.selectDate}
            clearDates={props.clearDates}
          />
        </PopUpDisplay>) : (<PopUpHide>
          <CalendarView
            data={props.data}
            selectDate={props.selectDate}
            clearDates={props.clearDates}
          />
        </PopUpHide>)
      }
      <CheckInOut onClick={props.toggleCalendar}>
        <InnerWrap>
          <CheckIn data={props.res_start} />
          <CheckOut data={props.res_end} />
        </InnerWrap>
      </CheckInOut>
      <Guests />
    </Box>
  )
}


export default ResSelect;