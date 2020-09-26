import React from 'react';
import styled from 'styled-components';


const ReserveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
  height: 30px;
  width: 120px;
  color: white;
  text-align: center;
  font-size: 16px;
`;

const Reserve = () => (
    <ReserveButton>Reserve</ReserveButton>
);

export default Reserve;