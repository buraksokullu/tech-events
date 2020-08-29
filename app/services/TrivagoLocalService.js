import BaseService from './BaseService';

class TrivagoLocalService {
  constructor() {
    this.baseService = new BaseService(window.Config.MOCK_DATA_URL);
  }

  getCities = () => {
    return this.baseService.get(`/cities`);
  };

  getEvents = () => {
    return this.baseService.get(`/events`);
  };
}
export default new TrivagoLocalService();
