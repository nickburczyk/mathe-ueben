import styled from "styled-components"

export const FlexRow = ({ children }) => {
  return (
    <Row>
      {children}
    </Row>
  )
}

const Row = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`