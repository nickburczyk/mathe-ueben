import { FaStopwatch } from 'react-icons/fa'
import styles from './OptionsBar.module.scss'
import { useTimedMode, useTimer } from '../../hooks'
import { FaCheck as Check } from 'react-icons/fa6'
import { AnimatedCounter } from 'react-animated-counter'

export const OptionsBar = () => {
  const {isTimedPracticeMode, toggleTimedPractice} = useTimedMode()
  const { timedSession } = useTimer()

  const isActive = (boolVal) => boolVal ? 'yellowgreen' : '#f3f3f399';

  return (
    <div className={styles.wrapper}>
      <FaStopwatch
        size={24} 
        color={isActive(isTimedPracticeMode)} 
        onClick={toggleTimedPractice}
        style={{ cursor: 'pointer' }}
      />
      {timedSession && 
        <div className={styles.correctCounter}>
          <Check size={24} color='yellowgreen'/>
          <AnimatedCounter 
            value={timedSession.numberCorrect} 
            fontSize="24px" 
            includeDecimals={false}
          />
        </div>
      }
    </div>
  )
}