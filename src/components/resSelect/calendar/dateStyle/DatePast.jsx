import React from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  width: 40px;
  height: 39px;
  border: 0px;
  padding: 0px;

  margin-left: 1px !important;
  margin-right: 1px !important;
  ${'' /* display: flex !important; */}
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(176, 176, 176) !important;
  font-weight: 400 !important;
  text-decoration: line-through !important;
  box-sizing: border-box !important;
  text-align: center !important;
  cursor: default !important;
`;

const DateVal = styled.div`
  background: rgb(255, 255, 255);
  border: 0px;
  color: rgb(34, 34, 34);
  padding: 0px;

  ${'' /* need to figure out whether both px margin is better or not */}
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  border: 1.5px solid rgb(255, 255, 255) !important;
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(176, 176, 176) !important;
  font-weight: 400 !important;
  text-decoration: line-through !important;
`;


const Date = (props) => (
  <DateSpace>
    <DateVal>
      {props.data}
    </DateVal>
  </DateSpace>
)


export default Date;