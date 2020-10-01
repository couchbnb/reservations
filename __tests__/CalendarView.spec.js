import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CalendarView from '../src/components/resSelect/calendar/CalendarView.jsx';

describe('CalendarView', () => {

  const props = {
    calendar: [
      [

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
      [
        {
          day: 1,
          dayIndex: 3,
          dayName: "Wednesday",
          monthName: "October",
          monthNum: 10
        },
        {
          day: 2,
          dayIndex: 4,
          dayName: "Thursday",
          monthName: "October",
          monthNum: 10
        },
        {
          day: 3,
          dayIndex: 5,
          dayName: "Friday",
          monthName: "October",
          monthNum: 10
        },
        {
          day: 4,
          dayIndex: 6,
          dayName: "Saturday",
          monthName: "October",
          monthNum: 10
        }
      ]
    ],
    listing: {},
    date: {
      month: 0
    },
    reservations: [],
    current_date: {
      month: 0,
      day: 1,
      year: 120
    },
  };

  var wrapper = shallow(<CalendarView data={props} />);

  // var appWrap = wrapper.find('.wrapper').render()
  var summary = wrapper.find('.summary').render();
  var calend = wrapper.find('.calend').render();
  var foot = wrapper.find('.foot').render();

  it('renders without crashing', () => {
    expect(wrapper.exists('.CalendarView')).toBe(true);
  });

  it('should be selectable by class', () => {
    expect(wrapper.is('.CalendarView')).toBe(true)
  })

  it('should have 3 subcomponents with children', () => {
    expect(summary[0].children.length).toBe(2);
    expect(calend[0].children.length).toBe(2);
    expect(foot[0].children.length).toBe(2);
  })
});