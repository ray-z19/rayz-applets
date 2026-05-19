import { useState } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import pageStyles from "../css_modules/PageStyles.module.css"
import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

const CalculatorPage = () => {
  const [expression, setExpression] = useState("");

  const appendElement = (element: string) => {
    setExpression(expression + element);
  }

  const backspace = () => {
    setExpression(expression.slice(0, expression.length - 1));
  }

  const clearAll = () => {
    setExpression("");
  }
  
  return (
    <>
      <Header />
      <div className={pageStyles["page"]}>
        <div className={calculatorStyles["calculator"]}>
          <div className={calculatorStyles["brand-model"]}>
            <b>CASIO</b>
            <span style={{fontSize: "60%"}}>fx-82AU PLUS II</span>
          </div>
          <i style={{fontSize: "75%"}}>NATURAL-V.P.A.M.</i>
          <div className={calculatorStyles["edition"]}>2nd edition</div>
          <div className={calculatorStyles["expression-display"]}>{expression}</div>
          <div className={calculatorStyles["basic-buttons"]}>
            <button onClick={() => appendElement("7")}>7</button>
            <button onClick={() => appendElement("8")}>8</button>
            <button onClick={() => appendElement("9")}>9</button>
            <button className={calculatorStyles["deletion-button"]} onClick={backspace}>DEL</button>
            <button className={calculatorStyles["deletion-button"]} onClick={clearAll}>AC</button>
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
            <button>=</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export { CalculatorPage }