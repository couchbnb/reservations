import React, { Component } from 'react';
import CalendarView from './CalendarView.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalendarView data={this.state}/>
    )
  }
}