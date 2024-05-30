import React from 'react'
import CalculatorButton from '../CalculatorButton/CalculatorButton'
import styles from "./ButtonPlacement.module.css"

const ButtonPlacement = () => {
  return (
    <div className={styles.buttonPlacement}> 
    <CalculatorButton value={7} />
    <CalculatorButton value={8} />
    <CalculatorButton value={9} />
    <CalculatorButton value={"+"} />
    <CalculatorButton value={4} />
    <CalculatorButton value={5} />
    <CalculatorButton value={6} />
    <CalculatorButton value={'-'} />
    <CalculatorButton value={1} />
    <CalculatorButton value={2} />
    <CalculatorButton value={3} />
    <CalculatorButton value={"*"} />
    <CalculatorButton value={"C"} />
    <CalculatorButton value={"0"} />
    <CalculatorButton value={"="} />
    <CalculatorButton value={"/"} />
    </div>
  )
}

export default ButtonPlacement
