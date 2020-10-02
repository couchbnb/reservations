import React, { Component } from 'react';
import styled from 'styled-components';

const DateSpace = styled.td`
  cursor: pointer;
  margin-left: 1px !important;
  margin-right: 1px !important;
  width: 40px;
  height: 39px;

  border: 0px;
  padding: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  border-radius: 100% !important;
  border: 1.5px solid rgb(255, 255, 255) !important;
`;

const DateSpaceHover = styled.td`
  cursor: pointer;
  margin-left: 1px !important;
  margin-right: 1px !important;
  width: 40px;
  height: 39px;

  border: 0px;
  padding: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  border-radius: 100% !important;
  border: 1.5px solid rgb(34, 34, 34) !important;
`;

const DateVal = styled.div`
  margin-left: 1px !important;
  margin-right: 1px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
  position: relative !important;
  color: rgb(34, 34, 34) !important;


  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
`;


const Price = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: rgb(113, 113, 113);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
    this.setIsHover = this.setIsHover.bind(this)
  }

  setIsHover(bool) {
    this.setState({ isHover: bool })
  }

  render() {
    if (this.state.isHover) {
      return (
        <DateSpaceHover
          className="availableDate"
          onMouseEnter={() => this.setIsHover(true)}
          onMouseLeave={() => this.setIsHover(false)}
          >
          <DateVal>
            {this.props.day}
          </DateVal>
          <Price>
            {'$' + this.props.base_price}
          </Price>
        </DateSpaceHover>
      )
    } else {
      return (
        <DateSpace
          className="availableDate"
          onMouseEnter={() => this.setIsHover(true)}
          onMouseLeave={() => this.setIsHover(false)}
          >
          <DateVal>
            {this.props.day}
          </DateVal>
          <Price>
            {'$' + this.props.base_price}
          </Price>
        </DateSpace>
      )
    }
  }
}

export default Date;