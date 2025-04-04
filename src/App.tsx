import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/index.js'
import How from './screens/how/index.js'
import Services from './screens/services/index.js'
import SignUp from './screens/SignUp/index.js'
import SignIn from './screens/SignIn/Index.js'

const App = () => (
  <Router>
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<How />} />
      <Route path="/services" element={<Services />} />
      <Route path="/create-account" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </Router>
)

export default App
