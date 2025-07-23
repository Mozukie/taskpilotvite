import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Login from './pages/Login'
import './CSS/App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
