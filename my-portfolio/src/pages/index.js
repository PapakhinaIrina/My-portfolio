import { Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact/Contact"
import Landing from "../pages/Landing/Landing"
import Portfolio from "../pages/Portfolio/Portfolio"
import SignUp from "./SignUp/SignUp"
import Widget from "../pages/Widget/Widget"
import Planner from "../pages/Planner/Planner"

export const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Landing />}/>
      <Route path="/contact" element={<Contact />} />  
      <Route path="/portfolio" element={<Portfolio />} />  
      <Route path="/portfolio/signup" element={<SignUp />}/>
      <Route path="/portfolio/widget" element={<Widget />}/>
      <Route path="/portfolio/planner" element={<Planner />}/>
    </Routes>
  )
}