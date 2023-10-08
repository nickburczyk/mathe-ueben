import './App.css'
import { OperationButtons, Equation } from './components'
import { OptionsBar } from './components/OptionsBar/OptionsBar'
import { Title } from './components/Title'

/**
 * @todo Add stats tracking in local storage
 * @todo Add settings for parameters control
 */

function App() {
  return (
    <div>
      <OptionsBar/>
      <Title/>
      <OperationButtons/>
      <Equation/>
    </div>
  )
}

export default App