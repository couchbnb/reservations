import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.div`
  width: 15px;
  height: 15px;
`;

const Date = (props) => {
  return (
    <div>
      {props.date}
    </div>
  )
}