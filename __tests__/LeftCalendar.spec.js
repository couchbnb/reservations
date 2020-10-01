import LeftCalendar from '../src/components/resSelect/calendar/LeftCalendar.jsx';
import React from 'react';
// import expect from 'expect';
import { shallow, mount, render } from 'enzyme';


describe('LeftCalendar', () => {
  var wrapper = shallow(<LeftCalendar />);

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });

  xit('should create an array of weeks', () => {
  });


})