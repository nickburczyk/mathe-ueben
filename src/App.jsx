import './App.css'
import { OperationButtons, Equation } from './components'


/**
 * @todo Add stats tracking in local storage
 * @todo Add settings for parameters control
 */

function App() {
  return (
    <div>
      <h1 className='title'>Mathe üben!</h1>
      <OperationButtons/>
      <Equation/>
    </div>
  )
}

export default App