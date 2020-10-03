import React, { Component } from 'react';
import styled from 'styled-components';

import GuestRow from './GuestRow.jsx'
import Close from './Close.jsx'

const Inherited = styled.div`
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  margin-top: 50px;
`;


const Wrapper = styled.div`
  background: rgb(255, 255, 255) !important;
  border-radius: 4px !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  box-sizing: border-box !important;
  margin-bottom: 16px !important;
  min-width: 280px !important;
  padding: 16px !important;
  position: absolute !important;
  text-align: left !important;
  width: 100% !important;
  z-index: 999 !important;
  right: 0px !important;
  max-width: 300px;
`;

const GuestPolicy = styled.div`
  display: block;
  font-size: 14px !important;
  line-height: 18px !important;
  color: rgb(113, 113, 113) !important;
  margin-bottom: 16px !important;
`;

class GuestSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.props.guests;
  }

  updateGuestCount(count, type) {
    if (count < 0) {
      return;
    }
    console.log(type);
    var adults, children, infants
    if (type === 'Adults') {
      adults = count;
      children = this.props.guests.children;
      infants = this.props.guests.infants;
    } else if (type === 'Children') {
      adults = this.props.guests.adults;
      children = count;
      infants = this.props.guests.infants;
    } else if (type === 'Infants') {
      adults = this.props.guests.adults;
      children = this.props.guests.children;
      infants = count;
    }
    this.props.setGuests(adults, children, infants);
  }

  render() {
    return (
      <Inherited>
        <Wrapper>
          <GuestRow type="Adults" count={this.props.guests.adults} updateGuestCount={this.updateGuestCount.bind(this)} />
          <GuestRow type="Children" description="Ages 2–12" count={this.props.guests.children} updateGuestCount={this.updateGuestCount.bind(this)} />
          <GuestRow type="Infants" description="Under 2" count={this.props.guests.infants} updateGuestCount={this.updateGuestCount.bind(this)} />
          <GuestPolicy>11 guests maximum. Infants don’t count toward the number of guests.</GuestPolicy>
          <Close toggleGuest={this.props.toggleGuest} />
        </Wrapper>
      </Inherited>
    )
  }
}

export default GuestSelect;