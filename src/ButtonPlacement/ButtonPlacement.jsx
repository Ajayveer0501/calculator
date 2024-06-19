import React, { useState } from 'react'
import CalculatorButton from '../CalculatorButton/CalculatorButton'
import styles from "./ButtonPlacement.module.css"

let buttonText=['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/']
const ButtonPlacement = () => {
    const [input, setInput]= useState("")
    const [result, setResult]= useState("")
    const handleclick=(label)=>{
        if(label==="C"){
            setInput(" ");
            setResult(" ");
        }
        else if(label==="="){
            try{
                setResult(eval(input));
            }
            catch{
                setResult("Error")
            }
            
        }
        else{
            setInput(input+label)
        }
    }
  return (
    <div className={styles.buttonPlacement}> 
    {/* <CalculatorButton label={7} />
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
    <CalculatorButton label={"/"} /> */}
   {
    buttonText.map((label)=>{
        <CalculatorButton label={label} />        
    })
   }
    </div>
  )
}

export default ButtonPlacement
