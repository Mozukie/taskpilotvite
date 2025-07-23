import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from './pages/Login'

import './CSS/App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/about' element={<h1>About Page</h1>} />
        </Routes>
      </Router>
      <footer>
        <p>© 2023 TaskPilot. All rights reserved.</p>
      </footer>
    </div>  

  )
}

export default App;
