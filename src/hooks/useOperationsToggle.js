import { useAppStore } from "../store"

export const useOperationsToggle = () => {
  const {operations, updateOperations} = useAppStore((state)=>({
    operations: state.operations,
    updateOperations: state.updateOperations
  }))

  return {
    toggle: (operation) => () => updateOperations(operation),
    ...operations
  }
}