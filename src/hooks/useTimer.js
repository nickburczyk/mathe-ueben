import { useAppStore } from "../store"

export const useTimer = () => {
  const [isTimerRunning, toggleTimer] = useAppStore((state) => [
    state.isTimerRunning, 
    (definedBool) => state.setBoolean('isTimerRunning', definedBool)
  ])

  return {
    isTimerRunning,
    toggleTimer
  }
}