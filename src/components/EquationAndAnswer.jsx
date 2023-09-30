import { useEffect, useMemo, useRef, useState } from "react"
import { FlexRow } from "./shared"
import { getRandomProblem } from "../util"
import { NumericInput, StyledButton } from "./shared"
import { useAppStore } from "../store"

/** 
 * @todo control for division using remainders
*/
export const EquationAndAnswer = () => {
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState(null)
  const [remainderGuess, setRemainderGuess] = useState('')
  const [remainderResult, setRemainderResult] = useState(null)
  const [canAdvance, setCanAdvance] = useState(false)
  const mainInputRef = useRef()
  const [operations, problem, updateCurrentProblem ] = useAppStore(state => [state.operations, state.currentProblem, state.updateCurrentProblem])

  const { 
    equation, 
    solution, 
    remainder, 
    type: problemType 
  } = problem
  const isDivision = problemType === 'divide'

  const nextProblem = () => {
    setResult(null)
    setRemainderResult(null)
    setGuess('')
    setRemainderGuess('')
    setCanAdvance(false)
    updateCurrentProblem(getRandomProblem(operations))
    mainInputRef.current.focus()
  }

  const check = (val, checkAgainst) => {
    const numericVal = parseInt(val, 10)
    if (numericVal === NaN) return false
    return numericVal === checkAgainst
  }

  useEffect(()=>{
    const rightAnswer = result === 'CORRECT'
    const rightRemainder = remainderResult === 'CORRECT'

    const divisionWithRemainder = isDivision && remainder !== 0 
    const divisionNoRemainder = isDivision && remainder === 0
    const notDivision = !isDivision
  
    const correct_nonDivision = notDivision && rightAnswer
    const correct_divisionNoRemainder = divisionNoRemainder && rightAnswer
    const correct_divisionWithRemainder = divisionWithRemainder && rightAnswer && rightRemainder

    setCanAdvance(correct_divisionNoRemainder || correct_divisionWithRemainder || correct_nonDivision)

  }, [isDivision, result, remainderResult])

  const handleCheckAnswer = (e) => {
    e.preventDefault()

    if (canAdvance) return nextProblem()

    const correct = check(guess, solution)
    setResult(correct ? 'CORRECT' : 'INCORRECT')

    if (isDivision && remainder !== 0) {
      const correctRemainder = check(remainderGuess, remainder)
      setRemainderResult(correctRemainder ? 'CORRECT' : 'INCORRECT')
    }

    mainInputRef.current.focus()
  }

  return (
    <div>
      <FlexRow>
        <form onSubmit={handleCheckAnswer}>
          <FlexRow style={{fontSize: 40}}>
            <label>{equation}</label>
            <NumericInput
              ref={mainInputRef}
              value={guess}
              onChange={setGuess}
              result={result}
              autoFocus
            />
            {!!remainder &&
              <>
                <label>R: </label>
                <NumericInput
                  value={remainderGuess}
                  onChange={setRemainderGuess}
                  result={remainderResult}
                />
              </> 
            }
          </FlexRow>
          <FlexRow>
            <StyledButton 
              type='submit' 
              content={canAdvance ? 'Neue Aufgabe' : 'Prüfen'}
            />
          </FlexRow>
        </form>
      </FlexRow>
    </div>
  )
}

