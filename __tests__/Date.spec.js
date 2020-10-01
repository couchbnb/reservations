import Date from '../src/components/resSelect/calendar/Date.jsx';
import React from 'react';
// import expect from 'expect';
import { shallow } from 'enzyme';

describe('Date', () => {

  const props = {
    date: {},
    current_date: {},
    listing: {},
    reservations: [],
  }

  var date = shallow(<Date date={props.date} key={Math.random()} listing={props.listing} reservations={props.reservations} current_date={props.current_date} />);
  var blankDate = shallow(<Date date={{day: false}}/>);

  it('should render without blowing up', ()=>{
    expect(date.find('.dateSpace').length).toBe(1);
    expect(date.find('.dateSpace').type()).toBe('td');
  })
  it('should render a blank td if no data is passed in', ()=>{
    expect(blankDate.find('.dateSpace').type()).toBe('td');
    expect(blankDate.text()).toBe('');
  })
  xit('should render pastDate component for a passed date', ()=>{} )

})