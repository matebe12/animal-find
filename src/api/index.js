import axios from 'axios';
import { setInterceptors } from './interceptor';

function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: `https://openapi.gg.go.kr/`,
  });
  return setInterceptors(instance);
}

export const animals = createInstanceWithAuth();
