// test file
// import { shallow, mount, render } from 'enzyme';
// import React from 'react';
import App from '../src/components/App.jsx';
import React from 'react';
import { shallow, mount, render } from 'enzyme';


// basic component mount test
describe('App parent component', () => {


  var wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists('.App')).toBe(true);
  });

  it('should be selectable by class', () => {
    expect(shallow(<App />).is('.App')).toBe(true)
  })

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.App')).length.toBe(true);
  })

  it('should mount in a full DOM with children', () => {
    expect(mount(<App />).children()).length.toBeGreaterThan(0);
  })

  it('should render to static HTML', () => {
    expect(render(<App />).html()).to.contain('div');
  })

});

describe('sample test, sum function', () => {
  function sum(a, b) {
    return a + b;
  }
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
});
