// test file
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../src/components/App.jsx';


// basic component mount test
describe('App parent component', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render without throwing error', () => {
    expect(shallow(<App />)).contains(<h1 className="App">Hello, couchBNB!</h1>).toBe(true)
  })

  it('should be selectable by class', () => {
    expect(shallow(<App />)).is('.App').toBe(true)
  })

  it('should mount in a full DOM', () => {
    expect(mount(<App />)).find('.App').length.toBe(true);
  })

  it('should render to static HTML', () => {
    expect(render(<App />)).text().toEqual('Hello, couchBNB!')
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
