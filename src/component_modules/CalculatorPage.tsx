import { Header } from "./Header";
import { Footer } from "./Footer";

import pageStyles from "../css_modules/PageStyles.module.css"
import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

const CalculatorPage = () => {
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
          <div className={calculatorStyles["expression-display"]}></div>
          <div className={calculatorStyles["basic-buttons"]}>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={calculatorStyles["deletion-button"]}>DEL</button>
            <button className={calculatorStyles["deletion-button"]}>AC</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>/</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>-</button>
            <button>0</button>
            <button>.</button>
            <button></button>
            <button>Ans</button>
            <button>=</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export { CalculatorPage }