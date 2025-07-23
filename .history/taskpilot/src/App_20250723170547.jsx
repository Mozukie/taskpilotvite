import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'

import './CSS/App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      <footer>
        <p>© 2023 TaskPilot. All rights reserved.</p>
      </footer>
    </div>  

  )
}

export default App;
