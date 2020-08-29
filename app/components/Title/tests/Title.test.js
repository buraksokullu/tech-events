import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('Title', () => {
  it('Should render correctly', () => {
    const component = shallow(<Title>Title</Title>);

    expect(component).toMatchSnapshot();
  });
});
