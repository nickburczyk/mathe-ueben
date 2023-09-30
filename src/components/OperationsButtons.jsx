import { FlexRow } from "./shared/FlexRow"
import { StyledButton } from "./shared"
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
        <StyledButton
          style={selectedStyle(add)}
          onClick={toggle('add')}
          content={<FaPlus/>}
          />
        <StyledButton
          style={selectedStyle(subtract)}
          onClick={toggle('subtract')}
          content={<FaMinus/>}
          />
        <StyledButton
          style={selectedStyle(multiply)}
          onClick={toggle('multiply')}
          content={<FaAsterisk/>}
          />
        <StyledButton
          style={selectedStyle(divide)}
          onClick={toggle('divide')}
          content={<FaDivide/>}
          />
      </FlexRow>
    </>
  )
} 
