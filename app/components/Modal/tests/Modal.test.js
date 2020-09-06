import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
  let modalProps = null;
  const handleCloseMock = jest.fn();
  beforeEach(() => {
    modalProps = {
      handleClose: handleCloseMock,
      show: false,
      children: 'children'
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Modal {...modalProps} />);

    expect(component).toMatchSnapshot();
  });
});
