import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (
  endpoint: string,
  body: { email: string, password: string },
) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
