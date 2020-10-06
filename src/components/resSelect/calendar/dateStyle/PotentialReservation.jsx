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
  background: rgb(113, 113, 113);
  color: rgb(34, 34, 34);
  border-radius: 0% !important;
  ${'' /* border: 1.5px solid rgb(255, 255, 255) !important; */}
  position: relative;
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

const Hover = styled.div`
  border-radius: 100% !important;
  border: 1.5px solid rgb(34, 34, 34) !important;
  position: absolute;
  top: -1px;
  left: -1px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  width: 40px;
  height: 40px;
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
        className="availableDate"
        onMouseEnter={() => this.setIsHover(true)}
        onMouseLeave={() => this.setIsHover(false)}
        onClick={() => this.selectDate()}
        >
        {this.state.isHover ? <Hover></Hover> : <div></div>}
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

export default Date;