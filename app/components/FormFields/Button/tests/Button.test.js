import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let buttonProps = null;

  beforeEach(() => {
    buttonProps = {
      children: 'children'
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Button {...buttonProps} />);

    expect(component).toMatchSnapshot();
  });
});
