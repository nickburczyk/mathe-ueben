import { AnimatedCounter } from "react-animated-counter";
import { useAppStore } from "../../store";
import styles from './Equation.module.scss'

export const AnimatedEquation = () => {
  const equation = useAppStore(state => state.currentProblem)

  // console.log('equation', equation);
  return (
    <div className={styles.equation}>
      <AnimatedCounter 
        value={equation.a} 
        includeDecimals={false}
        fontSize="40px"
        color="white"
        incrementColor="yellowgreen"
        decrementColor="orangered"
      />
      {equation.symbol}
      <AnimatedCounter 
        value={equation.b} 
        includeDecimals={false}
        fontSize="40px"
        color="white"
        incrementColor="yellowgreen"
        decrementColor="orangered"

      />
      =
    </div>
  )
}