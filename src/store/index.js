import { create } from 'zustand'
import { produce } from 'immer'
import { persist, createJSONStorage } from 'zustand/middleware'
import { 
  TICK_RATE, 
  TIMED_DURATION_IN_MS, 
  activeOperationsKeysList, 
  getRandomProblem 
} from '../util'

const initOps = {
  add: true,
  subtract: false,
  multiply: false,
  divide: false,
}

/**
 * new timedsession shape = {
 *  config: string (e.g. 'add-subtract'),
 *  numberCorrect: number,
 *  timeRemaining: number (of seconds),
 * }
 */

export const useAppStore = create(
  persist(
    (set) => ({
      // DATA
      operations: initOps,
      currentProblem: getRandomProblem(initOps),
      isTimedPracticeMode: false,
      timedSession: null, // { config: string(activeOperations), numberCorrect: number, timeRemaining: number(seconds) }
      isTimerRunning: false,

      // METHODS
      updateOperations: (operator) => set((state) => {
        const { operations } = state
        const updatedOperations = {
          ...operations,
          [operator]: !operations[operator]
        }

        // disallow the last button to be unchecked
        const allFalse = Object.values(updatedOperations).every(val => !val)
        if (allFalse) return { operations }

        // update problem if it is of the type being unchecked
        let currentProblem = state.currentProblem
        if(currentProblem.type === operator){
          currentProblem = getRandomProblem(updatedOperations)
        }

        return{
          operations: updatedOperations,
          currentProblem
        }
      }),

      setBoolean: (key, definedValue) => set((state) => {
        const booleanKeys = Object.keys(state).filter(k => typeof state[k] === 'boolean')
        if (!booleanKeys.includes(key)) {
          console.warn('Cannot toggle non-boolean values')
          return
        }
        const nextValue = typeof definedValue === 'boolean' ? definedValue : !state[key]
        
        return {
          [key]: nextValue
        }
      }),

      startTimedSession: () => set((state) => {
        console.log('starting', state);
        const config = activeOperationsKeysList(state.operations).join('_')
        return {
          timedSession: {
            config,
            timeRemaining: TIMED_DURATION_IN_MS,
            numberCorrect: 0
          },
          isTimerRunning: true
        }
      }),

      removeTimedSession: () => set(() => ({
        timedSession: null,
        isTimerRunning: false,
        
      })),

      tick: () => 
        set(produce((state) => {
          console.log('tick');

          state.timedSession.timeRemaining -= TICK_RATE
        })),

      incrementCorrectAnswers: () => 
        set(produce((state) => {
          if (!state.timedSession) {
            console.error('No active timed session.')
            return 
          }
          state.timedSession.numberCorrect ++;
        })),

      updateCurrentProblem: (problem) => set(() => ({
        currentProblem: problem
      }))
    }),
    {
      name: 'mathe-ueben',
      partialize: (state) => ({ 
        operations: state.operations,
        isTimedPracticeMode: state.isTimedPracticeMode
      }),
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)