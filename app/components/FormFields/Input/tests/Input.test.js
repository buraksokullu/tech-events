import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
  let inputProps = null;

  beforeEach(() => {
    inputProps = {
      input: 'input',
      type: 'type'
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Input {...inputProps} />);

    expect(component).toMatchSnapshot();
  });
});
