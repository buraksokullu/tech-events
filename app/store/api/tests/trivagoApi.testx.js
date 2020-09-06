import TrivagoLocalService from 'Services/index';
import * as actions from 'Store/actions/index';
import * as trivagoApi from '../trivagoApi';

jest.mock('Services/index', () => ({
  TrivagoLocalService: {
    getCities: jest.fn(),
    getEvents: jest.fn()
  }
}));

jest.mock('Store/actions/index', () => ({
  getEventsLoading: jest.fn(),
  getEventsSuccess: jest.fn(),
  getEventsFailure: jest.fn(),
  getCitiesLoading: jest.fn(),
  getCitiesSuccess: jest.fn(),
  getCitiesFailure: jest.fn()
}));

describe('trivagoApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('', async () => {
    TrivagoLocalService.getEvents.mockResolvedValue({ status: 200, data: 'response' });

    const dispatchMock = jest.fn();

    await expect(trivagoApi.getEvents()(dispatchMock)).resolves.toEqual('response');

    await expect(dispatchMock).toHaveBeenCalledWith(actions.getEventsLoading(true));
    await expect(TrivagoLocalService.getEvents).toHaveBeenCalledWith();
    await expect(dispatchMock).toHaveBeenCalledWith(actions.getEventsSuccess());
  });

  it('', async () => {
    TrivagoLocalService.getEvents.mockRejectedValue();

    const dispatchMock = jest.fn();

    await expect(trivagoApi.getEvents()(dispatchMock)).rejects.toEqual();

    await expect(dispatchMock).toHaveBeenCalledWith(actions.getCampaignDataLoading(true));
    await expect(TrivagoLocalService.getEvents).toHaveBeenCalledWith();
    await expect(dispatchMock).toHaveBeenCalledWith(actions.getEventsFailure());
  });
});
