import React from 'react'
import styles from "./InputBox.module.css"

const InputBox = ({CalculationValue}) => {
  return (
    <div className={styles.outerbox}><input className={styles.InputBox} value={CalculationValue} /></div>
  )
}

export default InputBox