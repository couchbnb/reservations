import React from 'react';

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 12px !important;
  line-height: 16px !important;
  color: rgb(113, 113, 113) !important;
  margin-left: 10px;
`;


const Keyboard = (props) => {
  return (
    <Wrap>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{height: "24px", width: "24px"}} display="block" fill="currentcolor">
        <path d="M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <Text>
        Prices on calendar do not include taxes and fees
      </Text>

    </Wrap>
  )
};

export default Keyboard;