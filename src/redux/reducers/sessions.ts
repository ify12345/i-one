import { createSlice } from '@reduxjs/toolkit';
import { nearBy } from '@/api/sessions';
import { Team } from '@/components/typings';

// Define interfaces for team and match session


export interface MatchSession {
  _id: string;
  session: string;
  teamOne: Team;
  teamTwo: Team;
  teamOneScore: number;
  teamTwoScore: number;
  matchType: string;
  isStarted: boolean;
  __v: number;
}

interface State {
  sessions: MatchSession[];
  isRegistered: boolean;
  isAuthenticated: boolean;
  isVerified: boolean;
  isPhoneVerified: boolean;
  isAdmin: boolean;
}

const initialState: State = {
  sessions: [],
  isRegistered: false,
  isAuthenticated: false,
  isVerified: false,
  isPhoneVerified: false,
  isAdmin: false,
};

export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(nearBy.fulfilled, (state, { payload }) => {
      state.sessions = payload; // payload should be MatchSession[]
      console.log('Fetched sessions:', payload);
      state.isRegistered = true;
    });
  },
});

export default sessionSlice.reducer;
