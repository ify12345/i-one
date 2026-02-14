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

import { useAppDispatch, useAppSelector } from './redux/store.js'
import ResetSuccess from './screens/reset-success/index.js'
import HomeLayout from './components/layouts/HomeLayout.js'
import Homepage from './screens/Homepage/index.js'
import Schedule from './screens/schedule/index.js'
import Tournaments from './screens/tournaments/index.js'
import Profile from './screens/profile/index.js'
import ScheduleDetail from './screens/schedule-detail/index.js'
import Lineup from './screens/upcoming-match/index.js'
import ProfileStats from './screens/profile-stats/index.js'
import Verify from './screens/verify/Index.js'
import LivePage from './screens/live-match/index.js'
import { getUser } from './api/auth.js'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/Preloader.js'
import AdminSignUp from './screens/AdminSignUp/Index.js'
import AdminHome from './screens/AdminHome/Index.js'
import AdminSchedule from './screens/AdminSchedule/Index.js'

const AppContent = () => {
  const { isAuthenticated, isRegistered, user } = useAppSelector(
    state => state.auth
  )
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
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

        {isAuthenticated && (
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
        )}
        {/* admin */}
          <Route path="/admin-register" element={<AdminSignUp />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin-schedule" element={<AdminSchedule />} />

      </Routes>
    </Router>
  )
}

const App = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <AppContent />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default App
