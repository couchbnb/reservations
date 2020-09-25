// jest and enzyme setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount, render, find, text } from 'enzyme';


configure({ adapter: new Adapter() });
