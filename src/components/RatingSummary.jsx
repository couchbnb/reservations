import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Star = styled.div`
  font-family: Airmoji_Standalone;
  font-weight: normal
`;

const Rating = styled.div`
  display: flex;
`;

const RatingSummary = (props) => (
  <Wrap>
    <Star>X 󰀄 </Star>
    <Rating>4.90 (357)</Rating>
  </Wrap>
)

export default RatingSummary;