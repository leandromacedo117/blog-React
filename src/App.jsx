import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
