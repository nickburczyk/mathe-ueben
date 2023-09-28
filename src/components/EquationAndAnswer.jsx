import { useState } from "react"
import { FlexRow } from "./shared"
import { getRandomProblem } from "../util"
import { NumericInput } from "./shared/NumericInput"

/** 
 * @todo control for division using remainders
*/
export const EquationAndAnswer = () => {
  const [problem, setProblem] = useState(getRandomProblem())
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState(null)

  const handleGuessChange = (num) => {
    setGuess(num)
  }

  const handleCheckAnswer = (e) => {
    e.preventDefault()
    const numberValue = parseInt(guess, 10)
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
      <FlexRow>
        <form onSubmit={handleCheckAnswer}>
          <FlexRow>
            <label style={{fontSize: 30}}>{equation}</label>
            <NumericInput
              value={guess}
              onChange={handleGuessChange}
              correct={result}
            />
          </FlexRow>
          <FlexRow>
            <button type='submit'>Check</button>
          </FlexRow>
        </form>
      </FlexRow>
      <FlexRow>
        <button disabled={result !== 'CORRECT'} onClick={handleReset}>New Problem</button>
      </FlexRow>
      <h3>
        {result &&
          <span>
            {result === 'CORRECT' ? 'You got it!' : 'Try Again.'}
          </span>
        }
      </h3>
    </div>
  )
}

