import styled from "styled-components"

export const StyledButton = ({content, onClick, type = "button", style = {} }) => {
  return (
    <Btn 
      type={type} 
      onClick={onClick && onClick}
      style={style}
    >
      {content}
    </Btn>
  )
}

const Btn = styled.button`
  border: 3px solid yellowgreen;
`