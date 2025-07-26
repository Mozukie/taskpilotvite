import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'

import './CSS/App.css'

function App() {

  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/UserProfile' element={<UserProfile/>} />  
          <Route path='*' element={<Login/>} />
        </Routes>
      </Router>
      <footer>
        <p>© 2025 TaskPilot. All rights reserved.</p>
      </footer>
    </div>  

  )
}

export default App;
