import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Contact from './components/Contact'

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div className="App">
      <Navbar />
      <Card />
      <Card />
      <Card />
      <Card />
      <h1>Hello {firstName} {lastName}!</h1>
      <h1>It is currently about {hours} o' clock !</h1>
      <h1>It is currently about {new Date().getHours()} o' clock !</h1>
      <h1>Good {timeOfDay} !</h1>
      <Contact
          img="../public/Card/1.png"
          name="Mr.Whiskerson"
          phone="(212) 555-1234"
      />
      <Contact />
      <Contact />
      <Contact />
    </div>
  )
}

export default App
