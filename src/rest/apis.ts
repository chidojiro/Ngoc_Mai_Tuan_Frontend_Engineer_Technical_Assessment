import { VITE_API_KEY } from '@/env/constants';
import axios, { AxiosRequestConfig } from 'axios';
import { BYPASS_INTERCEPTOR_HEADER_KEY } from './constants';

const myAxios = axios.create({
  baseURL: '/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': VITE_API_KEY,
  },
});

myAxios.interceptors.response.use(function (response: any) {
  const isBypassed = response.config.headers?.[BYPASS_INTERCEPTOR_HEADER_KEY] === 'true';

  return isBypassed ? response : response.data;
});

export const RestApis = myAxios;

export type RestApiConfig = AxiosRequestConfig;
