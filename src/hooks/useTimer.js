import { useEffect, useState } from "react"
import { useAppStore } from "../store"
import { TICK_RATE, activeOperationsKeysList } from "../util"

export const useTimer = () => {
  const [
    isTimerRunning, 
    startTimedSession, 
    removeTimedSession, 
    tick, 
    timedSession,
  ] = useAppStore((state) => [
    state.isTimerRunning, 
    state.startTimedSession,
    state.removeTimedSession,
    state.tick,
    state.timedSession,
    state.isTimedPracticeMode
  ])

  useEffect(()=>{
    let interval
    if (!timedSession) return
    if (isTimerRunning && timedSession.timeRemaining > 0) {
      interval = setInterval(()=>{
        tick()
      }, TICK_RATE)
    }

    return () => { clearInterval(interval) }
  }, [isTimerRunning, timedSession?.timeRemaining])
  
  const handleToggle = () => {
    if (timedSession) {
      removeTimedSession()
      return
    }
    startTimedSession()
  }

  return {
    isTimerRunning,
    toggleTimer: handleToggle,
    timedSession
  }
}