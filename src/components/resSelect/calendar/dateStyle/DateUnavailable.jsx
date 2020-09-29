import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  width: 40px;
  height: 39px;
  border: 0px;
  padding: 0px;

  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(176, 176, 176) !important;
  font-weight: 400 !important;
  text-decoration: line-through !important;
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