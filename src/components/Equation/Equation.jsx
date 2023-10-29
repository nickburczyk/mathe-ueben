import { useEffect, useRef, useState } from "react"
import { FlexRow, NumericInput, Button } from "../shared"
import { getRandomProblem } from "../../util"
import { useAppStore } from "../../store"
import styles from './Equation.module.scss'
import { useTimedMode, useTimer } from "../../hooks"
import { 
  FaPlay as Play, 
  FaStop as Stop 
} from 'react-icons/fa'
import { AnimatedEquation } from "./AnimatedEquation"

export const Equation = () => {
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState(null)
  const [remainderGuess, setRemainderGuess] = useState('')
  const [remainderResult, setRemainderResult] = useState(null)
  const [canAdvance, setCanAdvance] = useState(false)
  const mainInputRef = useRef()
  const [
    operations, problem, updateCurrentProblem, incrementCorrectAnswers 
  ] = useAppStore(state => [
    state.operations, 
    state.currentProblem, 
    state.updateCurrentProblem, 
    state.incrementCorrectAnswers
  ])
  const { isTimerRunning, toggleTimer, timedSession } = useTimer()
  const { isTimedPracticeMode } = useTimedMode()

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

    if (correct_divisionNoRemainder || correct_divisionWithRemainder || correct_nonDivision) {
      setCanAdvance(true)
      if (timedSession && isTimerRunning) {
        incrementCorrectAnswers()
      }
      return
    }

    setCanAdvance(false)

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

  const advanceButtonContent = () => {
    if (!canAdvance) return 'Prüfen';

    if (isTimedPracticeMode && isTimerRunning) return "Weiter"

    return "Neue Aufgabe"
  }

  const handleStartStop = () => {
    if (!timedSession && !isTimerRunning) {
      nextProblem();
    }
    toggleTimer()
  }

  return (
    <div>
      <FlexRow>
        <form onSubmit={handleCheckAnswer}>
          <FlexRow style={{fontSize: 40}}>
            <label 
              className={styles.equation} 
              style={{placeItems: "center"}}
            >
              <AnimatedEquation/>
            </label>
            <FlexRow style={{marginBottom: 0}}>
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
          </FlexRow>
          <FlexRow>
            <Button 
              type='submit' 
              content={advanceButtonContent()}
            />
            {isTimedPracticeMode && 
              <Button
                type="button"
                content={isTimerRunning ? <Stop/> : <Play/>}
                onClick={handleStartStop}
              />
            }
          </FlexRow>
        </form>
      </FlexRow>
    </div>
  )
}