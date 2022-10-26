import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import jokesData from '../public/Data/jokesData'
// import jokesData from '/Data/jokesData.js'
import Joke from './components/Joke'

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

  const squared = nums.map(function (item) {
    return item * item
  })

  const names = ['alice', 'bob', 'charlie', 'danielle']

  // const uppercase = names.map((name) => {
  //   console.log(name)
  // })
  const uppercase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
  })

  const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle']
  const elements = pokemons.map((monster) => `<p>${monster}</p>`)
  // console.log(elements)
  const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Indigo',
    'Violet',
  ]
  const colorElements = colors.map((color) => `<p>${color}</p>`)

  const cards = [
    {
      img: '1.png',
      rating: '8.1',
      reviewCount: 6,
      country: 'USA',
      title: 'Life Lessons with Katie Zaferes',
      price: 136,
    },
    {
      img: '2.png',
      rating: '9.0',
      reviewCount: 6,
      country: 'USA',
      title: 'Life Lessons with Katie Zaferes',
      price: 136,
    },
    {
      img: '3.png',
      rating: '3.0',
      reviewCount: 200,
      country: 'USA',
      title: 'Life Lessons with Katie Zaferes',
      price: 136,
    },
    {
      img: 'cat.png',
      rating: '5.0',
      reviewCount: 5,
      country: `Good ${timeOfDay}`,
      title: 'Lesson with Kiki star',
      price: 136,
    },
  ]

  const cardElements = cards.map((card) => {
    return (
      <Card
        img={card.img}
        rating={card.rating}
        reviewCount={card.reviewCount}
        country={card.country}
        title={card.title}
        price={card.price}
      />
    )
  })

  // console.log(jokesData)
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div className="App">
      <Navbar />
      {cardElements}
      {jokeElements}
      <h1>
        Hello {firstName} {lastName}!
      </h1>
      <p>It is currently about {hours} o' clock !</p>
      <p>It is currently about {new Date().getHours()} o' clock !</p>
      <p>Good {timeOfDay} !</p>
      {colorElements}
    </div>
  )
}

export default App
