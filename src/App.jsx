import { useState } from 'react'
import './App.css'
import { createAdditionProblem, createDivisionProblem, getRandomProblem } from './util'

function App() {
  const [problem, setProblem] = useState(getRandomProblem())
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState(null)

  const handleGuessChange = (e) => {
    const {value} = e.target
    const numberValue = Number(value)
    if (numberValue === NaN) return

    setGuess(numberValue)
  }

  const handleCheckAnswer = () => {
    const numberValue = Number(guess)
    if (numberValue === NaN) return
    const correct = guess === problem.solution
    setResult(correct ? 'CORRECT' : 'INCORRECT')
  }

  const handleReset = () => {
    setProblem(getRandomProblem())
    setResult(null)
    setGuess('')
  }

  const { equation } = problem

  return (
    <div>
      <h1>Math Practice</h1>
      <div style={flexrowStyle}>
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
      </div>
      <div style={{fontSize: '18px'}}>
        <div style={flexrowStyle}>
          <label>{equation}</label>
          <input value={guess} onChange={handleGuessChange}/>
        </div>
        <div style={flexrowStyle}>
          <button onClick={handleCheckAnswer}>Check</button>
          <button disabled={result !== 'CORRECT'} onClick={handleReset}>New Problem</button>
        </div>
        <h3>
          {result &&
            <span>
              {result === 'CORRECT' ? 'You got it!' : 'Try Again.'}
            </span>
          }
        </h3>
      </div>
    </div>
  )
}

export default App

const flexrowStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: 16,
  marginBottom: 24
}
