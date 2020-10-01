import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
`;

const Button = styled.div`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px -10px !important;
  position: relative !important;
  text-align: center !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  outline: none !important;
  padding: 10px !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border: none !important;
  background: transparent !important;
  color: rgb(34, 34, 34) !important;
  text-decoration: underline !important;

`;

const Close = (props) => {
  return (
    <Wrapper>
      <Button>Close</Button>
    </Wrapper>
  )
}

export default Close;