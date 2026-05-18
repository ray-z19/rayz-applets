import { useNavigate } from "react-router-dom";

import pageStyles from "../css_modules/PageStyles.module.css"
import imageStyles from "../css_modules/ImageStyles.module.css"

import landingPage from "../assets/home.png"
import scientificCalculator from "../assets/scientific-calculator.png"

const Header = () => {
  const navigate = useNavigate();

  const navigateLanding = () => {
    navigate("/")
  }
  
  const navigateCalculator = () => {
    navigate("/calculator")
  }
  
  return (
    <div className={pageStyles["header"]}>
      <img src={landingPage} alt="Landing Page" className={imageStyles["header-icons"]} onClick={navigateLanding}/>
      <img src={scientificCalculator} alt="Calculator Page" className={imageStyles["header-icons"]} onClick={navigateCalculator}/>
    </div>
  )
}

export { Header }