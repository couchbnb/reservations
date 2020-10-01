import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
`;

const Description = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;
`;

const Icon = styled.button`
  width: 32px !important;
  height: 32px !important;
  flex-grow: 0 !important;
  flex-shrink: 0 !important;
  cursor: pointer !important;
  display: inline-flex !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: center !important;
  text-decoration: none !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(176, 176, 176) !important;
  color: rgb(113, 113, 113) !important;
  font-family: inherit !important;
  outline: none !important;
  touch-action: manipulation !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 50% !important;
`;

const Message = styled.div`

`;

const GuestRow = (props) => {
  return (
    <Wrapper>
      <Info>
        <Title>
          {props.type}
        </Title>
        <Description>
          {props.description}
        </Description>
      </Info>
      <Counter>
        <Icon>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height:'12px', width:'12px'}} display="block" fill="none" stroke="currentcolor" strokeWidth="5.33333" overflow="visible">
            <path d="m2 16h28"/>
          </svg>
        </Icon>
        <div>{props.count}</div>
        <Icon>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height:'12px', width:'12px'}} display="block" fill="none" stroke="currentcolor" strokeWidth="5.33333" overflow="visible">
            <path d="m2 16h28m-14-14v28"/>
          </svg>
        </Icon>
      </Counter>
    </Wrapper>
  )
};

export default GuestRow;