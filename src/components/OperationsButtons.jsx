import { FlexRow } from "./shared/FlexRow"
import { Button } from "./shared"
import { FaPlus, FaMinus, FaAsterisk, FaDivide } from 'react-icons/fa'
import { useOperationsToggle, useTimedMode, useTimer } from "../hooks"

const selectedStyle = (sel) => ({ 
  backgroundColor: sel ? 'orangered' : 'inherit' 
})

export const OperationButtons = () => {
  const { 
    add, 
    subtract, 
    multiply, 
    divide, 
    toggle 
  } = useOperationsToggle()
  const { isTimedPracticeMode } = useTimedMode()
  const { isTimerRunning } = useTimer()

  const instructions = isTimedPracticeMode 
    ? 'Wie viele Aufgaben kannst du in fünf Minuten richtig lösen?'
    : 'Wähle die Arte von Aufgaben aus, die du üben möchtest.'

  return (
    <>
      <p>{instructions}</p>
      <FlexRow>
        <Button
          style={selectedStyle(add)}
          onClick={toggle('add')}
          content={<FaPlus/>}
          disabled={isTimedPracticeMode && isTimerRunning}
        />
        <Button
          style={selectedStyle(subtract)}
          onClick={toggle('subtract')}
          content={<FaMinus/>}
          disabled={isTimedPracticeMode && isTimerRunning}
        />
        <Button
          style={selectedStyle(multiply)}
          onClick={toggle('multiply')}
          content={<FaAsterisk/>}
          disabled={isTimedPracticeMode && isTimerRunning}
        />
        <Button
          style={selectedStyle(divide)}
          onClick={toggle('divide')}
          content={<FaDivide/>}
          disabled={isTimedPracticeMode && isTimerRunning}
        />
      </FlexRow>
    </>
  )
} 
