import TrivagoLocalService from '../TrivagoLocalService';

describe('TrivagoLocalService', () => {
  it('getCities should invoke baseService.get', () => {
    const getMock = jest.fn().mockReturnValue('response');
    TrivagoLocalService.baseService = { get: getMock };
    expect(TrivagoLocalService.getCities()).toEqual('response');
    expect(getMock).toHaveBeenCalledWith('/cities');
  });
  it('getEvents should invoke baseService.get', () => {
    const getMock = jest.fn().mockReturnValue('response');
    TrivagoLocalService.baseService = { get: getMock };
    expect(TrivagoLocalService.getEvents()).toEqual('response');
    expect(getMock).toHaveBeenCalledWith('/events');
  });
});
