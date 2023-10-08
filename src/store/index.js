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
      operations: initOps,
      currentProblem: getRandomProblem(initOps),
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