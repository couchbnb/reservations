import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Star = styled.div`
  font-family: Airmoji_Standalone;
  font-weight: normal
`;

const Rating = styled.div`
  color: rgb(34, 34, 34) !important;
  padding-left: 4px !important;
  font-weight: 600 !important;
`;

const Count = styled.div`
  color: rgb(113, 113, 113) !important;
  padding-left: 4px !important;
`;

const RatingSummary = (props) => (
  <Wrap className="RatingSummary">
    <Star>(star)</Star>
    <Rating>
      4.90
    </Rating>
    <Count>
      (357)
    </Count>
  </Wrap>
)

export default RatingSummary;