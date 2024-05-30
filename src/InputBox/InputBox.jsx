import React from 'react'
import styles from "./InputBox.module.css"

const InputBox = ({value}) => {
  return (
    <div className={styles.outerbox}><input className={styles.InputBox} value={value} /></div>
  )
}

export default InputBox