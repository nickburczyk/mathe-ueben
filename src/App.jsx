import './App.css'
import { OperationButtons, Equation, TimerBar } from './components'
import { ModalController } from './components/Modals'
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
      <ModalController/>
      <TimerBar/>
    </div>
  )
}

export default App