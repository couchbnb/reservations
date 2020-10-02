import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-weight: 500;
  height: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;;
  border-radius: 8px !important;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
`;

const Clear = (props) => {
  return (
    <Text onClick={ props.clearDates } >Clear dates</Text>
  )
}

export default Clear;