import Date from '../src/components/resSelect/calendar/Date.jsx';
import React from 'react';
// import expect from 'expect';
import { shallow } from 'enzyme';

describe('Date', () => {

  const props = {
    date: {
      day: 6,
      monthNum: 9
    },
    current_date: {
      day: 1,
      month: 9
    },
    listing: {
      base_price: 1
    },
    reservations: [],
  }

  var date = shallow(<Date date={props.date} key={Math.random()} listing={props.listing} reservations={props.reservations} current_date={props.current_date} />);

  it('should render without blowing up', ()=>{
    expect(date.find('.availableDate').length).toBe(1);
    // expect(date.find('.dateSpace').type()).toBe('td');
  })


  var blankDate = shallow(<Date date={{day: false}}/>);

  it('should render a blank td if no data is passed in', ()=>{
    expect(blankDate.find('.dateSpace').length).toBe(1);
    expect(blankDate.text()).toBe('');
  })


  var pastDate1 = shallow(<Date date={props.date} current_date={{day: 20, month: 9}} listing={props.listing} test={'one'} />)

  it('should render pastDate component for a passed date for a past date in the same month', ()=>{
    expect(pastDate1.find('DatePast').length).toBe(1);
    expect(pastDate1.text()).toBe('1');
  })


  var pastDate2 = shallow(<Date date={{day: 6,
    monthNum: 3}} current_date={{day: 20, month: 9}} listing={props.listing} test={'two'}/>)

  it('should render pastDate component for a passed date for a past date in a previous month', ()=>{
    expect(pastDate2.find('DatePast').length).toBe(1);
    expect(pastDate2.text()).toBe('1');
  })

})