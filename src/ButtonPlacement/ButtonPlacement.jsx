import React from 'react'
import CalculatorButton from '../CalculatorButton/CalculatorButton'
import styles from "./ButtonPlacement.module.css"

const ButtonPlacement = () => {
  return (
    <div className={styles.buttonPlacement}> 
    <CalculatorButton label={7} />
    <CalculatorButton label={8} />
    <CalculatorButton label={9} />
    <CalculatorButton label={"+"} />
    <CalculatorButton label={4} />
    <CalculatorButton label={5} />
    <CalculatorButton label={6} />
    <CalculatorButton label={'-'} />
    <CalculatorButton label={1} />
    <CalculatorButton label={2} />
    <CalculatorButton label={3} />
    <CalculatorButton label={"*"} />
    <CalculatorButton label={"C"} />
    <CalculatorButton label={"0"} />
    <CalculatorButton label={"="} />
    <CalculatorButton label={"/"} />
    </div>
  )
}

export default ButtonPlacement
