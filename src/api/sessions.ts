import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "./apiCall"
import AxiosBase from "./axios"
import { AsyncThunkConfig, sessionPayload } from "@/components/typings/api"
import { sessionResponse } from "@/components/typings/apiResponse"

export const nearBy = createAsyncThunk<
  sessionResponse,
  sessionPayload,
  AsyncThunkConfig
>('/nearby', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()
  return apiCall(Axios.post('/i-one/sessions/nearby-sessions',payload), thunkAPI)
})