import React from 'react';
import styled from 'styled-components';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Guests from './Guests.jsx';

const Box = styled.div`
  border-color: black;
  border-style: solid;
  border-radius: 8px;
  border-width: thin;
  display: flex;
  flex-wrap: wrap;
`;


const ResSelect = (props) => {
  return (
    <Box>
      <CheckIn />
      <CheckOut />
      <Guests />
    </Box>
  )
}

export default ResSelect;