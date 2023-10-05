import { FlexRow } from "./shared/FlexRow"
import { Button } from "./shared"
import { FaPlus, FaMinus, FaAsterisk, FaDivide } from 'react-icons/fa'
import { useOperationsToggle } from "../hooks"

const selectedStyle = (sel) => ({ 
  backgroundColor: sel ? 'orangered' : 'inherit' 
})

export const OperationButtons = () => {
  const { 
    add, 
    subtract, 
    multiply, 
    divide, 
    toggle 
  } = useOperationsToggle()

  return (
    <>
      <p>Wähle die Arte von Aufgaben aus, die du üben möchtest.</p>
      <FlexRow>
        <Button
          style={selectedStyle(add)}
          onClick={toggle('add')}
          content={<FaPlus/>}
          />
        <Button
          style={selectedStyle(subtract)}
          onClick={toggle('subtract')}
          content={<FaMinus/>}
          />
        <Button
          style={selectedStyle(multiply)}
          onClick={toggle('multiply')}
          content={<FaAsterisk/>}
          />
        <Button
          style={selectedStyle(divide)}
          onClick={toggle('divide')}
          content={<FaDivide/>}
          />
      </FlexRow>
    </>
  )
} 
