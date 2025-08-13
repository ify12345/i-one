// axiosBase.ts
import axios from 'axios';
import store from '@/redux/store';
import { logout } from '@/redux/reducers/auth';


const productionBaseUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: productionBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // Send cookies
  timeout: 20000,
});

// Interceptor: detect expired cookies
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
