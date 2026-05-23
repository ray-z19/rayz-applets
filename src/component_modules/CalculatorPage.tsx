import { useState } from "react";

import { Header } from "./Header";
import { BasicButtons } from "./BasicButtons";
import { Footer } from "./Footer";

import pageStyles from "../css_modules/PageStyles.module.css"
import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

const CalculatorPage = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  
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
          <div className={calculatorStyles["expression-display"]}>
            <div className={calculatorStyles["expression-text"]}>{expression}</div>
            {result ? <div className={calculatorStyles["result-text"]}>{result}</div>: null}
          </div>
          <BasicButtons expression={expression} setExpression={setExpression} setResult={setResult} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export { CalculatorPage }