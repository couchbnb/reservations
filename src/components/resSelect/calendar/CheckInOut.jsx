import React from 'react';
import styled from 'styled-components';

import CheckIn from '../CheckIn.jsx';
import CheckOut from '../CheckOut.jsx';

const Checking = styled.div`
  display: flex;
  border-style: solid;
  border-color: black;
  border-radius: 7px;
  border-width: thin;
  width: 300px;
  height: 56px;
`;

const OtherChecking = styled.div`
  display: flex;
  width: 300px;
  height: 56px;
`;

const CheckInOut = (props) => {
  // if (props.data.selecting === "start") {
  //   return (
  //     <OtherChecking>
  //       <CheckIn data={props.data.res_start} state={props.data.selecting} />
  //       <CheckOut data={props.data.res_end} state={props.data.selecting} />
  //     </OtherChecking>
  //   )
  // } else if (props.data.selecting === "end") {
  //   return (
  //     <OtherChecking>
  //       <CheckIn data={props.data.res_start} state={props.data.selecting} />
  //       <CheckOut data={props.data.res_end} state={props.data.selecting} />
  //     </OtherChecking>
  //   )
  // } else {
    return (
      <Checking>
        <CheckIn data={props.data.res_start} state={props.data.selecting} />
        <CheckOut data={props.data.res_end} state={props.data.selecting} />
      </Checking>
    )
  // }
}

export default CheckInOut;
