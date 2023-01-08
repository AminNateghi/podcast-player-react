import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // TODO: add base url in .env file

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  config => {
    config.headers = {
      'Accept': '*/*',
      'Content-Type': 'application/json; charset=UTF-8',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
