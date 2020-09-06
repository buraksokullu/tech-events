import React from 'react';
import { shallow } from 'enzyme';
import Aside from '../Aside';

describe('Aside', () => {
  let asideProps = null;
  const filterByNameMock = jest.fn();
  const filterFreeEventsMock = jest.fn();
  beforeEach(() => {
    asideProps = {
      filterByName: filterByNameMock,
      filterFreeEvents: filterFreeEventsMock
    };
  });

  it('Should render correctly', () => {
    const component = shallow(<Aside {...asideProps} />);

    expect(component).toMatchSnapshot();
  });

  it('changeName should invoke filterByName with value', () => {
    const event = {
      target: {
        value: 'value'
      }
    };

    const component = shallow(<Aside {...asideProps} />);
    const instance = component.instance();

    instance.changeName(event);
    expect(filterByNameMock).toHaveBeenCalledWith('value');
  });
  it('filterFreeEvents should invoke props filterFreeEvents with value', () => {
    const event = {
      target: {
        checked: 'checked'
      }
    };

    const component = shallow(<Aside {...asideProps} />);
    const instance = component.instance();

    instance.filterFreeEvents(event);
    expect(filterFreeEventsMock).toHaveBeenCalledWith('checked');
  });
});
