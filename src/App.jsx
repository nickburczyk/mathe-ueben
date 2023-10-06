import './App.css'
import { OperationButtons, Equation } from './components'

/**
 * @todo Add stats tracking in local storage
 * @todo Add settings for parameters control
 */

const Title = () => 
  <h1 className='title'>Mathe üben!</h1>

function App() {
  return (
    <div>
      <Title/>
      <OperationButtons/>
      <Equation/>
    </div>
  )
}

export default App