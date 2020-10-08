import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  width: 100% !important;
  ${'' /* overflow: hidden !important; */}

  border-right-style: solid;
  border-color: rgb(176, 176, 176);
  border-width: 1px;
`;

const StartBox = styled.div`
  display: flex !important;
  opacity: 1 !important;
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(34, 34, 34) !important;
  position: relative !important;
  ${'' /* cursor: text !important; */}
  display: flex !important;
  height: 56px !important;
  width: 100% !important;
  margin: 0px !important;
  color: rgb(34, 34, 34) !important;
  border-radius: 8px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  flex: 1 1 0% !important;
  outline: none !important;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset !important;
  background-color: rgb(255, 255, 255) !important;
`;

const CheckInBox = styled.div`
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

class CheckIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    // if (this.props.state === "start") {
    //   return (
    //     <StartBox>
    //       <CheckInBox>
    //         CHECK-IN
    //       </CheckInBox>
    //       <AddDate>
    //         {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
    //         {this.props.data && !this.props.data.day && ('Add date')}
    //         {!this.props.data && ('Add date')}

    //       </AddDate>
    //     </StartBox>
    //   )
    // } else if (this.props.state === "end") {
    //   return (
    //     <Box>
    //       <CheckInBox>
    //         CHECK-IN
    //       </CheckInBox>
    //       <AddDate>
    //         {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
    //         {this.props.data && !this.props.data.day && ('Add date')}
    //         {!this.props.data && ('Add date')}

    //       </AddDate>
    //     </Box>
    //   )
    // } else {
      return (
        <Box>
          <CheckInBox>
            CHECK-IN
          </CheckInBox>
          <AddDate>
            {this.props.data && this.props.data.day && (`${this.props.data.monthNum}/${this.props.data.day}/20`)}
            {this.props.data && !this.props.data.day && ('Add date')}
            {!this.props.data && ('Add date')}

          </AddDate>
        </Box>
      )
    // }
  }
}

export default CheckIn;