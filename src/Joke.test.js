import React from 'react';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

import Joke from './Joke';

test('Joke component exists', () => {
  // const component = renderer.render(<Joke />);
  const component = shallow(<Joke />);
  // const component = jest.mock('./Joke', () => 'Joke')
  console.log(component.html())
  // let workingComponent = component.toJSON();
  // expect(workingComponent).toMatchSnapshot();
  expect(component.find('div')).to.have.lengthOf(1);
});
