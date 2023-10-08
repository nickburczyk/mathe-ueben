import { useTimedMode } from "../../hooks"
import styles from './Title.module.scss'

export const Title = () => {
  const { isTimedPracticeMode } = useTimedMode()

  const titleString = isTimedPracticeMode ? 'Zeitübung' : 'Mathe üben!';
  
  return (
    <h1 className={styles.title}>{titleString}</h1>
  )
}