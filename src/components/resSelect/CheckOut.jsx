import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  width: 100% !important;
  ${'' /* overflow: hidden !important; */}
`;

const CheckOutBox = styled.div`
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
  ${'' /* overflow: hidden !important; */}
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  display: flex;

`;

const GreyBox = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  height: 56px !important;
  width: 100% !important;
  margin: 0px !important;

  pointer-events: none !important;
  font-size: 10px !important;
  line-height: 12px !important;


  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  color: rgb(176, 176, 176) !important;

`;

const AddDate = styled.div`
  height: 20px !important;
  width: 100% !important;
  margin: 0px !important;
  padding: 26px 12px 10px !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: 14px !important;
  line-height: 18px !important;
  cursor: pointer !important;
  ${'' /* overflow: hidden !important; */}
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  color: rgb(113, 113, 113) !important;
  display: flex;

`;


class CheckOut extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    if (this.props.state === "start") {
      return (
        <GreyBox>
          <CheckOutBox>
            CHECKOUT
          </CheckOutBox>
          <AddDate>
            {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
            {this.props.data && !this.props.data.day && ('Add date')}
            {!this.props.data && ('Add date')}
          </AddDate>
        </GreyBox>
      )
    } else if (this.props.state === "end") {
      return (
        <Box>
          <CheckOutBox>
            CHECKOUT
          </CheckOutBox>
          <AddDate>
            {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
            {this.props.data && !this.props.data.day && ('Add date')}
            {!this.props.data && ('Add date')}
          </AddDate>
        </Box>
      )
    } else {
      return (
        <Box>
          <CheckOutBox>
            CHECKOUT
          </CheckOutBox>
          <AddDate>
            {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
            {this.props.data && !this.props.data.day && ('Add date')}
            {!this.props.data && ('Add date')}
          </AddDate>
        </Box>
      )
    }
  }
}

export default CheckOut;