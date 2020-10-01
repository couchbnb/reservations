import React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`;

let List = styled.ul`
  margin: 0px !important;
  padding: 0px !important;
  list-style-type: none !important;
`;

let Row = styled.li`
  padding-bottom: 12px !important;
  display: flex !important;
  justify-content: space-between;
`;

let LineItem = styled.span`
  flex-shrink: 1 !important;
  flex-grow: 1 !important;
  white-space: normal !important;
  display: flex !important;
  justify-content: space-between;
`;

let ClickToView = styled.button`
  font-size: inherit !important;
  font-family: inherit !important;
  font-style: inherit !important;
  font-variant: inherit !important;
  line-height: inherit !important;
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  cursor: pointer !important;
  margin: 0px !important;
  padding: 0px !important;
  user-select: auto !important;
  color: rgb(113, 113, 113) !important;
  text-decoration: underline !important;
  border-radius: 4px !important;
  font-weight: 400 !important;
  outline: none !important;
`;

let Amount = styled.span`
  padding-left: 16px !important;
  white-space: nowrap !important;
`;

const Fees = (props) => (
  <Wrapper>
    <div>you wont be charged yet</div>
    <List>
      <Row>
        <LineItem>
          <ClickToView>
            Shows price/night
          </ClickToView>
          <Amount>$300</Amount>
        </LineItem>
      </Row>
      <Row>
        <LineItem>
          <ClickToView>Cleaning Fee</ClickToView>
          <Amount>$300</Amount>
        </LineItem>
      </Row>
      <Row>
        <LineItem>
          <ClickToView>Service Fee</ClickToView>
          <Amount>$300</Amount>
        </LineItem>
      </Row>
      <Row>
        <LineItem>
          <ClickToView>Occupancy taxes and fees</ClickToView>
          <Amount>$300</Amount>
        </LineItem>
      </Row>
      <li>total</li>
    </List>
  </Wrapper>
);

export default Fees;