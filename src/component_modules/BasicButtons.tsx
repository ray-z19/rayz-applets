import { useState } from "react";

import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

type BasicButtonsProps = {
  expression: string;
  setExpression: (_: string) => void;
  setResult: (_: string) => void;
}

const BasicButtons = ({ expression, setExpression, setResult }: BasicButtonsProps) => {
  const [onResultScreen, setOnResultScreen] = useState(false);
  
  const appendElement = (element: string) => {
    setOnResultScreen(false);
    setExpression(expression + element);
  }

  const backspace = () => {
    setExpression(expression.slice(0, expression.length - 1));
  }

  const clearDisplayFields = () => {
    setExpression("");
    setResult("");
    setOnResultScreen(false);
  }

  const echoExpression = () => {
    setResult(expression);
    setOnResultScreen(true)
  }
  
  return (
    <div className={calculatorStyles["basic-buttons"]}>
      <button onClick={() => appendElement("7")}>7</button>
      <button onClick={() => appendElement("8")}>8</button>
      <button onClick={() => appendElement("9")}>9</button>
      {
        !onResultScreen ? <button className={calculatorStyles["deletion-button"]} onClick={backspace}>DEL</button>
          : <button disabled={true}>DEL</button>
      }
      <button className={calculatorStyles["deletion-button"]} onClick={clearDisplayFields}>AC</button>
      <button onClick={() => appendElement("4")}>4</button>
      <button onClick={() => appendElement("5")}>5</button>
      <button onClick={() => appendElement("6")}>6</button>
      <button onClick={() => appendElement("*")}>*</button>
      <button onClick={() => appendElement("/")}>/</button>
      <button onClick={() => appendElement("1")}>1</button>
      <button onClick={() => appendElement("2")}>2</button>
      <button onClick={() => appendElement("3")}>3</button>
      <button onClick={() => appendElement("+")}>+</button>
      <button onClick={() => appendElement("-")}>-</button>
      <button onClick={() => appendElement("0")}>0</button>
      <button onClick={() => appendElement(".")}>.</button>
      <button></button>
      <button onClick={() => appendElement("Ans")}>Ans</button>
      <button onClick={echoExpression}>=</button>
    </div>
  )
}

export { BasicButtons }