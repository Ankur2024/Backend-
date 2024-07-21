import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5173/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((Error) => {
      console.log(Error);
    })
  })
  return (
    <>
      <h1>Joke App</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        })
      }
    </>
  )
}

export default App
