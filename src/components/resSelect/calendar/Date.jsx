import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  width: 25px;
  height: 25px;
`;

// const Date = styled.div`

// `;

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