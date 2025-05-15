/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

const token = localStorage.getItem('i-one');
console.log('Token', token)

async function AxiosBase() {
  try {
    const token = localStorage.getItem('i-one');
    console.log('Token', token)
    const localBaseUrl = 'http://localhost:4500'; 
    const productionBaseUrl = 'https://i-one-server-fijh.onrender.com';

    const axiosInstance = axios.create({
      baseURL: productionBaseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}), 
      },
      timeout: 20000,
    });

    return axiosInstance;
  } catch (error) {
    console.error('Error retrieving token in AxiosBase:', error);
    throw error;
  }
}

export default AxiosBase;


