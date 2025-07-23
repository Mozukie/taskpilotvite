import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import './CSS/App.css'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <Router>
        
      </Router>
      <footer>
        <p>© 2023 TaskPilot. All rights reserved.</p>
      </footer>
    </div>  

  )
}

export default App;
