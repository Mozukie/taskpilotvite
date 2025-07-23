import Header from './components/Header'
import './CSS/App.css'

function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <h1>Welcome to TaskPilot</h1>
        <p>Your personal task management assistant.</p>
      </main>
      <footer>
        <p>&copy; 2023 TaskPilot. All rights reserved.</p>     
      </footer>
    </div>  

  )
}

export default App;
