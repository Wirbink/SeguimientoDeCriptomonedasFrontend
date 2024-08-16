import axios from 'axios';

const ApiService = {
  _instance: null,

  getInstance() {
    if (!this._instance) {
      this._instance = axios.create({
        baseURL: process.env.VUE_APP_API_BASE_URL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      this._instance.interceptors.request.use(
        (config) => {
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      this._instance.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response) {
            console.error('API Error:', error.response);
          }
          return Promise.reject(error);
        }
      );
    }

    return this._instance;
  },

  get(resource, params) {
    return this.getInstance().get(resource, { params });
  },

  post(resource, data) {
    return this.getInstance().post(resource, data);
  },

  put(resource, data) {
    return this.getInstance().put(resource, data);
  },

  delete(resource) {
    return this.getInstance().delete(resource);
  },
};

export default ApiService;