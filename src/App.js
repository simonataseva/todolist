import React from 'react'

import Joke from './Joke'
import jokesData from "./jokesData.js"


function App() {
  const jokeComponents = jokesData.map(function(joke) {
    return (
      <Joke key={joke.id} question={joke.question} punchline={joke.punchLine} />
    )
  })
  
  return (
    <div>
      {jokeComponents}   
    </div>
  )
}

export default App
