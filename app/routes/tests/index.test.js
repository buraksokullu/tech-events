import React from 'react';
import { shallow } from 'enzyme';
import RootRouter from '../index';

describe('RootRouter', () => {
  it('Should render correctly', () => {
    const component = shallow(<RootRouter />);
    expect(component).toMatchSnapshot();
  });

  it('renderHomeComponent should render correctly', () => {
    const component = shallow(<RootRouter />);
    const instance = component.instance();
    const dumProps = {
      dumValue: 'dumValue'
    };
    expect(instance.renderHomeComponent(dumProps)).toMatchSnapshot();
  });
});
