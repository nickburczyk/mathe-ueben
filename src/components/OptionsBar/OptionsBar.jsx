import { FaStopwatch } from 'react-icons/fa'
import styles from './OptionsBar.module.scss'
import { useTimedMode } from '../../hooks'

export const OptionsBar = () => {
  const {isTimedPracticeMode, toggleTimedPractice} = useTimedMode()

  const isActive = (boolVal) => boolVal ? 'yellowgreen' : '#f3f3f399';

  return (
    <div className={styles.wrapper}>
      <FaStopwatch 
        size={24} 
        color={isActive(isTimedPracticeMode)} 
        onClick={toggleTimedPractice}
      />
    </div>
  )
}