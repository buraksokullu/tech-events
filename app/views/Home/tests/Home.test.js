import React from 'react';
import { shallow } from 'enzyme';
import * as trivagoApi from 'Store/api/index';
import { Home, mapDispatchToProps } from '../Home';

jest.mock('Store/api/index', () => ({
  getCampaignData: jest.fn()
}));

describe('Home', () => {
  let homeProps = null;
  const getEventsMock = jest.fn();
  const getCitiesMock = jest.fn();

  const dumEvents = [
    {
      id: 0,
      isFree: true,
      name: 'CSS Grids: fact or fiction',
      city: 9,
      startDate: '2019-07-14T02:00:00+00:00',
      endDate: '2019-07-14T03:00:00+00:00'
    }
  ];

  const dumCities = [
    {
      id: 1,
      name: 'Barcelona'
    }
  ];

  beforeEach(() => {
    homeProps = {
      getEvents: getEventsMock,
      getCities: getCitiesMock,
      events: dumEvents,
      cities: dumCities
    };
  });
  it('Should render correctly', () => {
    const component = shallow(<Home {...homeProps} />);

    expect(component).toMatchSnapshot();
  });
  it('componentDidMount should invoke getEvents and getCities', () => {
    const component = shallow(<Home {...homeProps} />);
    const instance = component.instance();

    instance.getEvents = jest.fn();
    instance.componentDidMount();
    expect(getCitiesMock).toHaveBeenCalled();
    expect(instance.getEvents).toHaveBeenCalled();
  });
  it('getEvents function should get events invoke setData ', async () => {
    const component = shallow(<Home {...homeProps} />);
    const instance = component.instance();

    instance.setData = jest.fn();
    getEventsMock.mockResolvedValue();

    instance.getEvents();

    await expect(
      Promise.resolve().then(async () => {
        expect(getEventsMock).toHaveBeenCalled();
        expect(instance.setData).toHaveBeenCalled();
      })
    );
  });
  it('setData function should get events invoke setData ', async () => {
    const component = shallow(<Home {...homeProps} />);
    const instance = component.instance();

    instance.setState = jest.fn();

    const dumEvents = [
      {
        city: 9,
        endDate: '2019-07-14T03:00:00+00:00',
        id: 0,
        isFree: true,
        isSelected: false,
        name: 'CSS Grids: fact or fiction',
        startDate: '2019-07-14T02:00:00+00:00'
      }
    ];

    const dumCities = [
      {
        id: 1,
        name: 'Barcelona'
      }
    ];
    instance.setData();
    expect(instance.setState).toHaveBeenCalledWith({
      allEvents: dumEvents,
      selectedEvents: dumEvents,
      citiesState: dumCities,
      registeredEvents: []
    });
  });
});
