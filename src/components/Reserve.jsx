import React from 'react';
import styled from 'styled-components';


const ReserveButton = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  height: 48px;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
`;

const Text = styled.div`
  height: 20px;
`;

const Reserve = (props) => {
  if (props.valid_res) {
    return (
      <ReserveButton className="Reserve">
        <Text>
          Reserve
        </Text>
      </ReserveButton>
    )
  } else {
    return (
      <ReserveButton className="Reserve">
        <Text>
          Check Availability
        </Text>
      </ReserveButton>
    )
  }
};

export default Reserve;