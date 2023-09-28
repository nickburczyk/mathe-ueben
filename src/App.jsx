import './App.css'
import { OperationButtons, EquationAndAnswer } from './components'

/**
 * @todo Add state management with zustand
 * @todo Add stats tracking in local storage
 * @todo Add settings for parameters control
 * @todo Add translation
 */

function App() {
  return (
    <div>
      <h1>Math Practice</h1>
      <OperationButtons/>
      <EquationAndAnswer/>
    </div>
  )
}

export default App