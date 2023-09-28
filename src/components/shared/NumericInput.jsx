import styled from 'styled-components'
export const NumericInput = ({ value, onChange, correct }) => {
  const handleChange = (e) => {
    const {value} = e.target;
    
    // Ensure the input is numeric and within the desired range
    if (/^\d*$/.test(value) && value.length<=3) {
      const numericValue = parseInt(value, 10);

      if (!numericValue) {
        onChange('');
        return
      }

      if (numericValue >= 0 && numericValue <= 100) {
        onChange(numericValue);
      }
    }
  };

  return (
    <StyledInput 
      correct={correct}
      max={100} 
      min={0}
      pattern="[0-9]{1-3}"
      inputMode="numeric"
      value={value} 
      onChange={handleChange}
      autoComplete={false}
    />
  )
}

const StyledInput = styled('input')`
  width: 75px;
  height: 75px;
  line-height: 1.5;
  border-radius: 12px;
  border: ${({ correct }) => {
    if (correct === 'CORRECT') {
      return '5px solid mediumseagreen';
    } else if (correct === 'INCORRECT') {
      return '5px solid tomato';
    } else {
      return '5px solid dodgerblue'
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`