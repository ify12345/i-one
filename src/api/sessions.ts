/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "./apiCall"
import AxiosBase from "./axios"
import { AsyncThunkConfig, sessionPayload } from "@/components/typings/api"
import { sessionResponse } from "@/components/typings/apiResponse"
import { MatchSession, pitchSessions } from "@/redux/reducers/sessions"

export const nearBy = createAsyncThunk<
  MatchSession[],
  sessionPayload,
  AsyncThunkConfig
>('/nearby', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()
  return apiCall(Axios.post('/i-one/sessions/nearby-sessions',payload), thunkAPI)
})

export const nearByLocation = createAsyncThunk<
  pitchSessions[],
  sessionPayload,
  AsyncThunkConfig
>('/nearbyLocation', async (payload, thunkAPI) => {
  console.log('pay', payload)
  const Axios = await AxiosBase()

  return apiCall(
    Axios.get('/i-one/location/nearby', {
      params: payload, 
    }),
    thunkAPI
  )
})
