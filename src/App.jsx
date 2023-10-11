import { useState } from 'react'
import Board from './Board'
import Scoreboard from './Scoreboard'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <h1>Memory Card Game</h1>

      <Scoreboard score={score} highScore={highScore}/>
      <Board 
        score={score} 
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </>
  )
}

export default App
