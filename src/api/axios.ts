/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

async function AxiosBase() {
  try {

    // const localBaseUrl = 'http://localhost:4500'; 
    const productionBaseUrl = 'https://i-one-server-v1.onrender.com';

    const axiosInstance = axios.create({
      baseURL: productionBaseUrl,
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
      timeout: 20000,
    });

    return axiosInstance;
  } catch (error) {
    console.error('Error retrieving cookie in AxiosBase:', error);
    throw error;
  }
}

export default AxiosBase;


