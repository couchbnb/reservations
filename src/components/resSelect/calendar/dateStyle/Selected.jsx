import React, { Component } from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  width: 39px;
  height: 40px;
  border: 0px;
  padding: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  border-radius: 100% !important;
  border: 1.5px solid rgb(255, 255, 255) !important;
  cursor: default !important;
  box-sizing: border-box !important;
`;

/*

border-top-left-radius: 50%;
border-bottom-left-radius: 50%;
text-align: center !important;
*/

const Highlight = styled.div`
  height: 105%;
  width: 100%;
  margin-left: 0px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  border-radius: 100% !important;
  background: rgb(34, 34, 34) !important;
  border: 1.5px solid rgb(34, 34, 34) !important;
  color: rgb(255, 255, 255) !important;
  position: relative !important;
  z-index: 1 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
  box-sizing: border-box !important;

`;

const DateVal = styled.div`
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  position: relative !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 500 !important;
`;

const Price = styled.div`
  font-size: 10px;
  line-height: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-weight: 500 !important;
`;

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      res_start: this.props.state.res_start,
      res_end: this.props.state.res_end
    }
    this.setIsHover = this.setIsHover.bind(this)
  }

  setIsHover(bool) {
    this.setState({ isHover: bool })
  }

  selectDate() {
    this.props.selectDate(this.props.date);
  }



  render() {
    return (
      <DateSpace
        className="selectedDate"
        >
        <Highlight>
          <DateVal>
            {this.props.day}
          </DateVal>
          <Price>
            {'$' + this.props.base_price}
          </Price>
        </Highlight>
      </DateSpace>
    )
  }
}

export default Date;