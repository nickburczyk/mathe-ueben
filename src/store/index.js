import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { getRandomProblem } from '../util'

const initOps = {
  add: true,
  subtract: true,
  multiply: true,
  divide: true
}

export const useAppStore = create(
  persist(
    (set) => ({
      // DATA
      operations: initOps,
      currentProblem: getRandomProblem(initOps),
      isTimedPracticeMode: false,
      isTimerRunning: false,
      timedQuestions: null,
      timedProgress: 0,

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
      updateCurrentProblem: (problem) => set(() => ({
        currentProblem: problem
      }))
    }),
    {
      name: 'mathe-ueben',
      partialize: (state) => ({ 
        operations: state.operations 
      }),
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)