import styles from './Button.module.scss'

export const Button = ({content, onClick, type = "button", style = {}, disabled }) => {
  return (
    <button
      className={styles.btn} 
      type={type} 
      onClick={onClick && onClick}
      style={style}
      disabled={disabled}
    >
      {content}
    </button>
  )
}