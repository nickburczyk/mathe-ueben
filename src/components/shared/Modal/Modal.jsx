import styles from './Modal.module.scss'
import { FaTimes } from 'react-icons/fa'


export const Modal = ({ onClose, children }) => {

  /** @todo close modal on overlay click */

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FaTimes 
          className={styles.close} 
          size={36} 
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}