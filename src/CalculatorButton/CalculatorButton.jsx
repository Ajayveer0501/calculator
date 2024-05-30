import React from 'react'
import styles from "./CalculatorButton.module.css"

const CalculatorButton = ({value}) => {
  return (
    <div className={styles.outerbox} >
        <button className={styles.button}>{value}</button>
    </div>
  )
}

export default CalculatorButton