import calculatorStyles from "../css_modules/CalculatorStyles.module.css"

type BasicButtonsProps = {
  pushElem: (_: string | number) => void;
  popElem: () => void;
  clearDisplayFields: () => void;
  isEqualsPressed: boolean;
  setIsEqualsPressed: (_: boolean) => void;
}

const BasicButtons = ({ pushElem, popElem, clearDisplayFields, isEqualsPressed, setIsEqualsPressed }: BasicButtonsProps) => {
  return (
    <div className={calculatorStyles["basic-buttons"]}>
      <button onClick={() => pushElem(7)}>7</button>
      <button onClick={() => pushElem(8)}>8</button>
      <button onClick={() => pushElem(9)}>9</button>
      {
        !isEqualsPressed ? <button className={calculatorStyles["deletion-button"]} onClick={popElem}>DEL</button>
          : <button disabled={true}>DEL</button>
      }
      <button className={calculatorStyles["deletion-button"]} onClick={clearDisplayFields}>AC</button>
      <button onClick={() => pushElem(4)}>4</button>
      <button onClick={() => pushElem(5)}>5</button>
      <button onClick={() => pushElem(6)}>6</button>
      <button onClick={() => pushElem("*")}>*</button>
      <button onClick={() => pushElem("/")}>/</button>
      <button onClick={() => pushElem(1)}>1</button>
      <button onClick={() => pushElem(2)}>2</button>
      <button onClick={() => pushElem(3)}>3</button>
      <button onClick={() => pushElem("+")}>+</button>
      <button onClick={() => pushElem("-")}>-</button>
      <button onClick={() => pushElem(0)}>0</button>
      <button onClick={() => pushElem(".")}>.</button>
      <button></button>
      <button onClick={() => pushElem("Ans")}>Ans</button>
      <button onClick={() => setIsEqualsPressed(true)}>=</button>
    </div>
  )
}

export { BasicButtons }