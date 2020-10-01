import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Star = styled.div`
  align-items: center !important;
  display: flex !important;
  margin-right: 4px !important;
  color: rgb(255, 56, 92) !important;
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
    <Star>
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height:'14px', width:'14px'}} fill="currentcolor">
        <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/>
      </svg>
    </Star>
    <Rating>
      4.90
    </Rating>
    <Count>
      (357)
    </Count>
  </Wrap>
)

export default RatingSummary;