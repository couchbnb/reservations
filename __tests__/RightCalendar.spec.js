import RightCalendar from '../src/components/resSelect/calendar/RightCalendar.jsx';
import React from 'react';
// import expect from 'expect';
import { shallow, mount, render } from 'enzyme';


describe('RightCalendar', () => {
  var wrapper = shallow(<RightCalendar />);

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });

  xit('should create an array of weeks', () => {
  });

})