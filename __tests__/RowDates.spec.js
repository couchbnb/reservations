import RowDates from '../src/components/resSelect/calendar/RowDates.jsx';
import React from 'react';
// import expect from 'expect';
import { shallow, mount, render } from 'enzyme';

describe('RowDates', () => {

  const props = {
    data: [ {}, {}, {},
      {
        day: 1,
        dayIndex: 3,
        dayName: "Wednesday",
        monthName: "October",
        monthNum: 9
      },
      {
        day: 2,
        dayIndex: 4,
        dayName: "Thursday",
        monthName: "October",
        monthNum: 9
      },
      {
        day: 3,
        dayIndex: 5,
        dayName: "Friday",
        monthName: "October",
        monthNum: 9
      },
      {
        day: 4,
        dayIndex: 6,
        dayName: "Saturday",
        monthName: "October",
        monthNum: 9
      }
    ],
    listing: {},
    date: {},
    reservations: [],
    current_date: {},
  };


  var wrapper = shallow(<RowDates data={props.data} key={Math.random()} listing={props.listing} reservations={props.reservations} current_date={props.current_date} />);

  it('should render without blowing up', () => {
    expect(wrapper.length).toEqual(1);
  });


  it('should render with input data as <td> children', () => {
    expect(wrapper.find('Date').length).toBe(props.data.length)
  });


// are dates real?

})