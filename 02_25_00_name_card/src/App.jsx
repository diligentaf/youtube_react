import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  )
}

export default App
