import React from 'react'

export default function Scoreboard({score, highScore}) {
  return (
    <>
      <div id="scoreboard">
        <p>Current score: {score}</p>
        <p>High score: {highScore}</p>
      </div>
    </>
  )
}
