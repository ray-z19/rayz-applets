import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { LandingPage } from "./component_modules/LandingPage";
import { CalculatorPage } from "./component_modules/CalculatorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App