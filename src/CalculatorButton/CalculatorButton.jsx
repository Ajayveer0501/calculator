import React from 'react'
import styles from "./CalculatorButton.module.css"

const CalculatorButton = ({label,handleclick}) => {
  return (
    <div className={styles.outerbox} >
        <button className={styles.button} onClick={()=>handleclick(label)}>{label}</button>
    </div>
  )
}

export default CalculatorButton