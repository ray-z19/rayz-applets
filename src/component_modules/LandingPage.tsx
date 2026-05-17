import { useState } from "react";

import pageStyles from "../css_modules/PageStyles.module.css"
import textStyles from "../css_modules/TextStyles.module.css"
import inputStyles from "../css_modules/InputStyles.module.css"

const LandingPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to my humble abode");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeMessage(event.target.value);
  }
  
  return (
    <>
      <div className={pageStyles["header"]}></div>
      <div className={pageStyles["page"]}>
        <h1 className={textStyles["welcome-message"]}>{welcomeMessage}</h1>
        <input type="text" id="welcome-message-input" className={inputStyles["input-box"]} onChange={handleMessageChange} />
      </div>
      <div className={pageStyles["footer"]}></div>
    </>
  )
}

export { LandingPage }