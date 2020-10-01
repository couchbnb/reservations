// test file
// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
import App from '../src/components/App.jsx';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


// basic component mount test
describe('App parent component', () => {
  // components
  var wrapper = shallow(<App />);
  var appWrap = wrapper.find('.wrapper').render()
  var summary = appWrap.find('.summary');
  var button = appWrap.find('.button');

  it('renders without crashing', () => {
    expect(wrapper.exists('.App')).toBe(true);
  });

  it('should be selectable by class', () => {
    expect(wrapper.is('.App')).toBe(true)
  })



  it('should render with a PriceSummary and RatingSummary', () => {

    // console.log(summary);
    expect(summary[0].children.length).toBe(2);
    // expect(summary.children[0].hasClass('.PriceSummary')).toBe(true);
    // expect(summary.children[1].hasClass('.RatingSummary')).toBe(true);
    // expect(wrapper.find(".wrapper").render().find('.RatingSummary').length).toBe(1);
    // .find('.PriceSummary').length)
  });


  it('should render with a ResSelect', () => {
    expect(appWrap.find('.ResSelect').length).toBe(1)
  });

  it('should render with a Reserve', () => {
    expect(button.length).toBe(1);
    expect(button[0].children.length).toBe(1);
  });

  xit('should mount in a full DOM', () => {
    expect(mount(<App />).find('.App')).length.toBe(true);
    // expect(wrapper.find('.App')).length.toBe(true);
  })

  xit('should mount in a full DOM with children', () => {
    expect(mount(<App />).children()).length.toBeGreaterThan(0);
    // expect(wrapper.children()).length.toBeGreaterThan(0);

  })

  xit('should render to static HTML', () => {
    expect(render(<App />).html()).to.contain('div');
  })

});

