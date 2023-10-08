import { useAppStore } from "../store"

export const useTimedMode = () => {
  const [isTimedPracticeMode, setBoolean] = useAppStore((state) => [
    state.isTimedPracticeMode, 
    state.setBoolean
  ])

  return {
    isTimedPracticeMode,
    toggleTimedPractice: () => setBoolean('isTimedPracticeMode')
  }
}