import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  margin-left: 1px !important;
  margin-right: 1px !important;
  width: 40px;
  height: 39px;
`;


const Date = (props) => {
  if (props.date.day) {
    return (
      <DateSpace>
        {props.date.day}

      </DateSpace>
    )
  } else {
    return <DateSpace></DateSpace>
  }
}

export default Date;