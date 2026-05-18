import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pageStyles from "../css_modules/PageStyles.module.css"
import imageStyles from "../css_modules/ImageStyles.module.css"
import textStyles from "../css_modules/TextStyles.module.css"
import inputStyles from "../css_modules/InputStyles.module.css"

import scientificCalculator from "../assets/scientific-calculator.png"

const LandingPage = () => {
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to my humble abode");

  const navigateCalculator = () => {
    navigate("/calculator")
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeMessage(event.target.value);
  }
  
  return (
    <>
      <div className={pageStyles["header"]}>
        <img src={scientificCalculator} alt="" className={imageStyles["header-icons"]} onClick={navigateCalculator}/>
      </div>
      <div className={pageStyles["page"]}>
        <h1 className={textStyles["welcome-message"]}>{welcomeMessage}</h1>
        <input type="text" id="welcome-message-input" className={inputStyles["input-box"]} onChange={handleMessageChange} />
      </div>
      <div className={pageStyles["footer"]}></div>
    </>
  )
}

export { LandingPage }