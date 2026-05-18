import { useNavigate } from "react-router-dom";

import pageStyles from "../css_modules/PageStyles.module.css"
import imageStyles from "../css_modules/ImageStyles.module.css"

import scientificCalculator from "../assets/scientific-calculator.png"

const Header = () => {
  const navigate = useNavigate();
  
  const navigateCalculator = () => {
    navigate("/calculator")
  }
  
  return (
    <div className={pageStyles["header"]}>
      <img src={scientificCalculator} alt="" className={imageStyles["header-icons"]} onClick={navigateCalculator}/>
    </div>
  )
}

export { Header }