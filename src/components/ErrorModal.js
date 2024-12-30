import React from 'react'
import classes from './ErrorModal.module.css'

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <span className={classes.close} onClick={onClose}>&times;</span>
        <h2>Error</h2>
        <ul>
          {Object.values(message).map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ErrorModal