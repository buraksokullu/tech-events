import React from 'react';
import { shallow } from 'enzyme';
import Events from '../Events';

describe('Events', () => {
  let eventsProps = null;

  beforeEach(() => {
    eventsProps = {
      cities: null
    };
  });
  it('Should render correctly', () => {
    const component = shallow(<Events {...eventsProps} />);

    expect(component).toMatchSnapshot();
  });
  it('getCityName should return names while city array is not null', () => {
    const eventsProps = {
      cities: [
        {
          id: 1,
          name: 'Barcelona'
        }
      ]
    };
    const component = shallow(<Events {...eventsProps} />);
    const instance = component.instance();

    expect(instance.getCityName(1)).toEqual('Barcelona');
  });
  it('getCityName should return empty while city array is null ', () => {
    const component = shallow(<Events {...eventsProps} />);
    const instance = component.instance();

    expect(instance.getCityName(1)).toEqual('');
  });
});
