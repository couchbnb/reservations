import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  width: 100% !important;
  overflow: hidden !important;
  background: none;
    border-radius: 0px 0px 8px 8px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuestBox = styled.div`
  position: absolute !important;
  top: 12px !important;
  left: 12px !important;
  right: 12px !important;
  pointer-events: none !important;
  font-size: 10px !important;
  line-height: 12px !important;
  color: rgb(34, 34, 34) !important;
  text-transform: uppercase !important;
  font-weight: 800 !important;
  max-width: 100% !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  display: flex;

`;

const GuestCount = styled.div`
  height: 20px !important;
  width: 100% !important;
  margin: 0px !important;
  padding: 26px 12px 10px !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: 14px !important;
  line-height: 18px !important;
  cursor: pointer !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  color: rgb(113, 113, 113) !important;
  display: flex;
`;

const Arrow = styled.div`
  position: absolute !important;
  right: 0px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100% !important;
  max-width: 50% !important;
  min-width: 36px !important;
  padding-right: 12px !important;
  pointer-events: none !important;
  color: rgb(34, 34, 34) !important;
`;


const Guests = (props) => {
  return (
    <Box>
      <div>
        <GuestBox>
          Guest
        </GuestBox>
        <GuestCount>
          1 guest
        </GuestCount>
      </div>
      <Arrow>
        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{height:'16px', width:'16px'}} display="block" fill="currentcolor">
          <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"/>
        </svg>
      </Arrow>

    </Box>
  )
}

export default Guests;