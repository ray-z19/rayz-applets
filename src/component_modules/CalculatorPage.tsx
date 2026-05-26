import { useEffect, useState } from "react";

import { Header } from "./Header";
import { BasicButtons } from "./BasicButtons";
import { Footer } from "./Footer";

import pageStyles from "../css_modules/PageStyles.module.css"
import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

const CalculatorPage = () => {
  const [expressionArray, setExpressionArray] = useState<(number | string)[]>([]);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isEqualsPressed, setIsEqualsPressed] = useState(false);

  useEffect(() => {
    if (isEqualsPressed) {
      calculateResult();
      console.log(expressionArray);
      console.log(expression);
      console.log(result);
    }
  }, [isEqualsPressed])

  const pushElem = (elem: string | number) => {
    if (isEqualsPressed === true) {
      clearDisplayFields();
      setIsEqualsPressed(false);
    
      if (typeof elem !== "number" && ["+", "-", "*", "/"].includes(elem)) {
        setExpressionArray(prev => [...prev, "Ans"]);
        setExpression(prev => prev + "Ans");
      }
    }
    
    setExpressionArray(prev => [...prev, elem]);
    setExpression(prev => prev + elem);
  }

  const popElem = () => {
    const poppedElem = expressionArray.pop();
    setExpressionArray(expressionArray);
    if (poppedElem === "ANS") {
      setExpression(expression.slice(0, expression.length - 3));
    } else {
      setExpression(expression.slice(0, expression.length - 1));
    }
    console.log(expressionArray);
  }

  const clearDisplayFields = () => {
    setExpressionArray([]);
    setExpression("");
    setResult("");
  }

  const calculateResult = () => {
    setResult(expression);
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
          <div className={calculatorStyles["expression-display"]}>
            <div className={calculatorStyles["expression-text"]}>{expression}</div>
            {result ? <div className={calculatorStyles["result-text"]}>{result}</div>: null}
          </div>
          <BasicButtons
            pushElem={pushElem}
            popElem={popElem}
            clearDisplayFields={clearDisplayFields}
            isEqualsPressed={isEqualsPressed}
            setIsEqualsPressed={setIsEqualsPressed}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export { CalculatorPage }