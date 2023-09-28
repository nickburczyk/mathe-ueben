import { forwardRef } from 'react';
import styled from 'styled-components'
export const NumericInput = forwardRef(({ value, onChange, result, autoFocus }, ref) => {
  const handleChange = (e) => {
    const {value} = e.target;

    // Ensure the input is numeric and within the desired range
    if (/^\d*$/.test(value) && value.length<=3) {
      const numericValue = parseInt(value, 10);
      if (!numericValue || result === "CORRECT") {
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
      ref={ref}
      correct={result === 'CORRECT'}
      error={result === 'INCORRECT'}
      max={100} 
      min={0}
      pattern="/[0-9]{1-3}/"
      inputMode="numeric"
      value={value} 
      onChange={handleChange}
      autoComplete={"off"}
      autoFocus={autoFocus}
    />
  )
})

const StyledInput = styled('input').withConfig({
  shouldForwardProp: (prop) => !['correct', 'error'].includes(prop),
}).attrs(({ correct, error }) => ({
  '$correct': correct,
  '$error': error,
}))`
  ${({correct, error}) => {
    const borderColor = correct ? 'mediumseagreen' : error ? 'tomato' : 'dodgerblue';
    const outlineColor = borderColor;
    const outlineOffset = (correct || error) ? '2px' : 'default';

    return `
    width: 75px;
    height: 75px;
    line-height: 1.5;
    border-radius: 12px;
    border: 7px solid ${borderColor};
    outline: 4px solid ${outlineColor};
    outline-offset: ${outlineOffset};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    `
  }}
`;