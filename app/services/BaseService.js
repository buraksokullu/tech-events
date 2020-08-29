/** Dependencies */
import axios from 'axios';

class BaseService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  createAxiosInstance = () => {
    const instance = axios.create({
      validateStatus: status => status >= 200 && status <= 300,
      baseURL: this.baseURL
    });

    return instance;
  };

  get = (url = '', ...params) => {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.get(this.baseURL + url, ...params);
  };

  post(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.post(this.baseURL + url, ...params);
  }

  put(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.put(this.baseURL + url, ...params);
  }

  delete(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.delete(this.baseURL + url, ...params);
  }

  patch(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.patch(this.baseURL + url, ...params);
  }
}

export default BaseService;
