import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  let headerProps = null;
  const selectEventTypeMock = jest.fn();
  beforeEach(() => {
    headerProps = {
      selectEventType: selectEventTypeMock
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Header {...headerProps} />);

    expect(component).toMatchSnapshot();
  });
});
