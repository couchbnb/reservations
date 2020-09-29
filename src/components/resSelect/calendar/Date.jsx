import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  width: 15px;
  height: 15px;
`;

const Date = (props) => {
  return (
    <DateSpace>
      {props.date}
    </DateSpace>
  )
}

export default Date;