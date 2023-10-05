import './App.css'
import { OperationButtons, EquationAndAnswer } from './components'


/**
 * @todo Add state management with zustand
 * @todo Add stats tracking in local storage
 * @todo Add settings for parameters control
 */

function App() {
  return (
    <div>
      <h1 className='title'>Mathe üben!</h1>
      <OperationButtons/>
      <EquationAndAnswer/>
    </div>
  )
}

export default App