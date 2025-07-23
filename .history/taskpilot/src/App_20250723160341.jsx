import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import './CSS/App.css'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<h2>Welcome to TaskPilot!</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
          <Route path="/tasks" element={<h2>Tasks Page</h2>} />
          <Route path="/settings" element={<h2>Settings Page</h2>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/profile" element={<h2>Profile Page</h2>} />
        </Routes>
      </Router>
      <footer>
        <p>© 2023 TaskPilot. All rights reserved.</p>
      </footer>
    </div>  

  )
}

export default App;
