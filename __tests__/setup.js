// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// describe('sample test, sum function', function() {
//   function sum(a, b) {
//     return a + b;
//   }
//   it('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });