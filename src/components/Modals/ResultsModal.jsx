import { useTimer, useTimerModal } from "../../hooks"
import { Modal } from "../shared"

export const ResultsModal = () => {
  const {show, close} = useTimerModal()
  const { timedSession } = useTimer()

  if (!show) return null
  
  const { numberCorrect } = timedSession

  const messages = [
    "Gut gemacht",
    "Gratuliere",
    "Super",
    "Topp",
    "Toll",
    "Prima",
    "Fantastisch",
    "Du bist schlau",
    "Wow",
    "Bravo"
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  return (
    <Modal onClose={close}>
      <div>
        <h1>{randomMessage}!</h1>
        <p>Du hast</p>
        <h1>{numberCorrect}</h1>
        <p>Aufgaben richtig gelöst!</p>
      </div>
    </Modal>
  )
}