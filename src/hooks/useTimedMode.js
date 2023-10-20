import { useAppStore } from "../store"
import { useTimer } from "./useTimer"

export const useTimedMode = () => {
  const { isTimerRunning, toggleTimer } = useTimer()
  const [isTimedPracticeMode, setBoolean] = useAppStore((state) => [
    state.isTimedPracticeMode, 
    state.setBoolean
  ])

  const toggleTimedPractice = () => {
    if (isTimerRunning) {
      toggleTimer(false)
    }
    setBoolean('isTimedPracticeMode')
  }

  return {
    isTimedPracticeMode,
    toggleTimedPractice
  }
}