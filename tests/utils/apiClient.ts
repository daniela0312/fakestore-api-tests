import axios = require('axios');


const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


export const get = <T = any>(endpoint: string) => {
  return api.get<T>(endpoint);
};

export const post = <T = any>(endpoint: string, data: any) => {
  return api.post<T>(endpoint, data);
};

export const put = <T = any>(endpoint: string, data: any) => {
  return api.put<T>(endpoint, data);
};

export const del = <T = any>(endpoint: string) => {
  return api.delete<T>(endpoint);
};
