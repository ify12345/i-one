import { createAsyncThunk } from '@reduxjs/toolkit';
import AxiosBase from './axios';
import {
  AsyncThunkConfig,
  forgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
  verifyOtpPayload,
} from '@/components/typings/api';
import apiCall from './apiCall';
import { forgotPasswordResponse, LoginResponse, RegisterResponse } from '@/components/typings/apiResponse';

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  AsyncThunkConfig
>('user/register', async (payload, thunkAPI) => {
  const Axios = await AxiosBase()
  console.log('pay', payload)
  return apiCall(Axios.post('/i-one/user/register', payload), thunkAPI,'auth')
})

export const login = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  AsyncThunkConfig
>('user/login', async (payload, thunkAPI) => {
  const Axios = await AxiosBase()
  console.log('pay', payload)
  return apiCall(
    Axios.post('/i-one/user/auth', payload),
    thunkAPI,
    'auth'
  )
})

export const forgotPassword = createAsyncThunk<
  forgotPasswordResponse,
  forgotPasswordPayload,
  AsyncThunkConfig
>('/users/forgot-password', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()
  return apiCall(Axios.post('/i-one/user/forgotPassword', payload), thunkAPI)
})

export const verifyOtp = createAsyncThunk<
  forgotPasswordResponse,
  verifyOtpPayload,
  AsyncThunkConfig
>('/users/verify-otp', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()
  return apiCall(Axios.post('/i-one/user/verifyOtp', payload), thunkAPI)
})

export const reset = createAsyncThunk<
  forgotPasswordResponse,
  verifyOtpPayload,
  AsyncThunkConfig
>('/users/reset-password', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()
  return apiCall(Axios.post('/i-one/user/resetPassword', payload), thunkAPI)
})


