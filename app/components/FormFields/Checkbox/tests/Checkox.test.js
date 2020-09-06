import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  let checkboxProps = null;

  beforeEach(() => {
    checkboxProps = {
      children: 'children',
      input: 'children',
      label: 'label',
      id: 'id',
      value: 'value'
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Checkbox {...checkboxProps} />);

    expect(component).toMatchSnapshot();
  });
});
