import React from 'react';
import styled from 'styled-components';
import CheckIn from './CheckIn.jsx'

const Box = styled.div`
  border-color: black;
  border-style: solid;
  border-radius: 8px;
  border-width: thin;
`;


const ResSelect = (props) => {
  return (
    <Box>
      reservations selector
      <CheckIn />
      check-out
    </Box>
  )
}

export default ResSelect;