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

  const { equation, solution } = problem

  const nextProblem = () => {
    setProblem(getRandomProblem())
    setResult(null)
    setGuess('')
  }

  const handleCheckAnswer = (e) => {
    e.preventDefault()

    if (result === 'CORRECT') return nextProblem()

    const numberValue = parseInt(guess, 10)
    if (numberValue === NaN) return
    const correct = guess === solution
    setResult(correct ? 'CORRECT' : 'INCORRECT')
  }

  return (
    <div>
      <FlexRow>
        <form onSubmit={handleCheckAnswer}>
          <FlexRow>
            <label style={{fontSize: 40}}>{equation}</label>
            <NumericInput
              value={guess}
              onChange={setGuess}
              result={result}
            />
          </FlexRow>
          <FlexRow>
            <button type='submit'>{result === 'CORRECT' ? 'Next Problem' : 'Check'}</button>
          </FlexRow>
        </form>
      </FlexRow>
    </div>
  )
}

