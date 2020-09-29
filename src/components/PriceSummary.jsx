import React from 'react';
import styled from 'styled-components';

const Dollar = styled.div`
  font-size: 22px !important;
  line-height: 26px !important;
  font-weight: 600;
`;

const Night = styled.div`
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  white-space: nowrap !important;
  padding-left: 4px !important;
  color: rgb(34, 34, 34);
`;

const PriceSummary = (props) => (
  <div>
    <Dollar>$100</Dollar>
    <Night>/ night</Night>
  </div>
);

export default PriceSummary;