/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/index.js'
import How from './screens/how/index.js'
import Services from './screens/services/index.js'
import SignUp from './screens/sign-up/index.js'

import Role from './screens/ChooseRole/Index.js'
import ForgetPassword from './screens/forgot-password/Index.js'

import ResetPassword from './screens/reset-password/Index.js'
import SignIn from './screens/sign-in/index.js'
import Verify from './screens/verify/index.js'
import { useAppSelector } from './redux/store.js'
import ResetSuccess from './screens/reset-success/index.js'

const App = () => {
  const { isAuthenticated, isRegistered } = useAppSelector(state => state.auth)
  // console.log(isAuthenticated)
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
      </Routes>
    </Router>
  )
}
export default App
