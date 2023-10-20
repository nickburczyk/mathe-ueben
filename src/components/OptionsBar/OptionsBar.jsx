import { FaStopwatch } from 'react-icons/fa'
import { FaCheck as Check } from 'react-icons/fa6'
import { AnimatedCounter } from 'react-animated-counter'
import { useTimedMode, useTimer } from '../../hooks'
import styles from './OptionsBar.module.scss'

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
          {timedSession && 
            <AnimatedCounter 
              value={timedSession.numberCorrect} 
              fontSize="24px" 
              includeDecimals={false}
            />
          }
        </div>
      }
    </div>
  )
}