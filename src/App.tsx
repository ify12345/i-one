import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/index.js'
import How from './screens/how/index.js'
import Services from './screens/services/index.js'
import SignUp from './screens/SignUp/index.js'

import Role from './screens/ChooseRole/Index.js'
import ForgetPassword from './screens/forgot-password/Index.js'

import ResetPassword from './screens/reset-password/Index.js'
import SignIn from './screens/SignIn/index.js'
import Verify from './screens/verify/index.js'


const App = () => (
  <Router>
    <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<How />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/role" element={<Role />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/verification" element={<Verify />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  </Router>
)

export default App
