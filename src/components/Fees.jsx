import React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`;

let Message = styled.ul`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;

  font-size: 14px !important;
  line-height: 18px !important;
  align-items: center !important;
  display: flex !important;
  flex-direction: column !important;
  list-style-type: none !important;
  margin: 8px 0px 0px !important;
  padding: 0px !important;
  text-align: center !important;
`;

let MessageLi = styled.li`
  margin-top: 8px !important;
  white-space: normal !important;
  font-weight: 325 !important;
`;

let List = styled.ul`
  margin: 24px 0px 0px 0px !important;
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
  color: rgb(34, 34, 34) !important;
  text-decoration: underline !important;
  border-radius: 4px !important;
  font-weight: 325 !important;
  outline: none !important;
`;

let Amount = styled.span`
  padding-left: 16px !important;
  white-space: nowrap !important;
`;

let Total = styled.ul`
  border-top: 1px solid rgb(221, 221, 221) !important;
  list-style-type: none !important;
  margin: 16px 0px 0px !important;
  padding: 24px 0px 12px !important;
`;

let TotalLi = styled.li`
  display: flex !important;
  padding-bottom: 0px !important;
`;

let TotalLabel = styled.span`
  flex-shrink: 1 !important;
  flex-grow: 1 !important;
  white-space: normal !important;
  font-weight: 650 !important;
`;

let TotalAmt = styled.span`
  padding-left: 16px !important;
  white-space: nowrap !important;
  font-weight: 650 !important;
`;

const Fees = (props) => {
  var reservation_fee = props.listing.base_price * props.res_nights_length;
  var cleaning_fee = Math.round(props.listing.cleaning_fee);
  var service_fee = Math.round(reservation_fee * props.listing.service_fee);
  var tax = Math.round(reservation_fee * props.listing.tax);
  var grandTotal = Math.round(reservation_fee + cleaning_fee + service_fee + tax);
  if (props.valid_res){
    return (
      <Wrapper>
        <Message>
          <MessageLi>Your reservation will save</MessageLi>
        </Message>
        <List>
          <Row>
            <LineItem>
              <ClickToView>
                {`$${props.listing.base_price} for ${props.res_nights_length} nights`}
              </ClickToView>
              <Amount>{`$${reservation_fee}`}</Amount>
            </LineItem>
          </Row>
          <Row>
            <LineItem>
              <ClickToView>Cleaning Fee</ClickToView>
              <Amount>{`$${cleaning_fee}`}</Amount>
            </LineItem>
          </Row>
          <Row>
            <LineItem>
              <ClickToView>Service Fee</ClickToView>
              <Amount>{`$${service_fee}`}</Amount>
            </LineItem>
          </Row>
          <Row>
            <LineItem>
              <ClickToView>Occupancy taxes and fees</ClickToView>
              <Amount>{`$${tax}`}</Amount>
            </LineItem>
          </Row>
          <Total>
            <TotalLi>
              <TotalLabel>Total</TotalLabel>
              <TotalAmt>{`$${grandTotal}`}</TotalAmt>
            </TotalLi>
          </Total>
        </List>
      </Wrapper>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default Fees;