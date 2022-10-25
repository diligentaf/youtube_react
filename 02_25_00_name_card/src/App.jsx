import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const firstName = 'Joe'
  const lastName = 'Schmoe'
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'night'
  }

  const nums = [5, 4, 3, 2, 0, 1]

  const squared = nums.map(function(item) {
    return item * item
  })

  const names = ["alice", "bob", "charlie", "danielle"]

  // const uppercase = names.map((name) => {
  //   console.log(name)
  // })
  const uppercase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
  })

  const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
  const elements = pokemons.map(monster => `<p>${monster}</p>`)
  console.log(elements)

  return (
    <div className="App">
      <Navbar />
      <Card
        img="1.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img="2.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={50}
      />
      <Card
        img="3.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={30}
      />
      <Card
        img="cat.png"
        rating="5.0"
        reviewCount={6}
        country={`Good ${timeOfDay}`}
        title="Life Lessons with Katie Zaferes"
        price={9000}
      />
      <h1>
        Hello {firstName} {lastName}!
      </h1>
      <h1>It is currently about {hours} o' clock !</h1>
      <h1>It is currently about {new Date().getHours()} o' clock !</h1>
      <h1>Good {timeOfDay} !</h1>
    </div>
  )
}

export default App
