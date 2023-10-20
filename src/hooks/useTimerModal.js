import { useEffect, useState } from "react"
import { useAppStore } from "../store"

export const useTimerModal = () => {
  const [
    removeTimedSession,
    session, 
  ] = useAppStore(state => [
    state.isTimerRunning, 
    state.removeTimedSession, 
  ])

  const {
    timeRemaining, 
    numberCorrect: correct
  } = session ?? {}
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (timeRemaining === 0) {
      setShow(true)
    }
  }, [timeRemaining])

  const close = () => {
    setShow(false)
    removeTimedSession()
  }

  return {
    show,
    close,
    correct,
  }
}