/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/index.js'
import How from './screens/how/index.js'
import Services from './screens/services/index.js'
import SignUp from './screens/sign-up/index.js'

import Role from './screens/choose-role/Index.js'
import ForgetPassword from './screens/forgot-password/Index.js'

import ResetPassword from './screens/reset-password/Index.js'
import SignIn from './screens/sign-in/index.js'

import { useAppSelector } from './redux/store.js'
import ResetSuccess from './screens/reset-success/index.js'
import HomeLayout from './components/layouts/HomeLayout.js'
import Homepage from './screens/Homepage/index.js'
import Schedule from './screens/schedule/index.js'
import Tournaments from './screens/tournaments/index.js'
import Profile from './screens/profile/index.js'
import ScheduleDetail from './screens/schedule-detail/index.js'
import Lineup from './screens/upcoming-match/index.js'
import ProfileStats from './screens/profile-stats/index.js'
import Verify from './screens/verify/index.js'
import LivePage from './screens/live-match/index.js'


const App = () => {
  const { isAuthenticated, isRegistered,user } = useAppSelector(state => state.auth)
  console.log(isAuthenticated,user)
  return (
    <Router>
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<How />} />
            <Route path="/services" element={<Services />} />
            <Route path="/role" element={<Role />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/verification" element={<Verify />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/reset-success" element={<ResetSuccess />} />
          </>
        )}

        {
          isAuthenticated && (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/schedule-detail" element={<ScheduleDetail />} />
              <Route path="/tournament" element={<Tournaments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upcoming-match" element={<Lineup />} />
              <Route path="/profile-stats" element={<ProfileStats />} />
              <Route path="/live-match" element={<LivePage />} />
            </>
          )
        }
      </Routes>
    </Router>
  )
}
export default App
