import { forwardRef } from 'react';
import cn from 'classnames'
import styles from './NumericInput.module.scss'

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
    <input 
      ref={ref}
      className={cn([
        styles.input,
        result === 'CORRECT' && styles.correct,
        result === 'INCORRECT' && styles.error
      ])}
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
