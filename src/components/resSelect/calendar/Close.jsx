import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  background: rgb(34, 34, 34) ;
  color: rgb(255, 255, 255);
  font-weight: 500;
  height: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;;
  border-radius: 8px !important;
  cursor: pointer;
  width: 60px;
  height: 35px;
  text-align: center;
  margin-left: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = (props) => {
  return (
    <Button>Close</Button>
  )
}

export default Close;