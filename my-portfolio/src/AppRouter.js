import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact/Contact"
import Landing from "../src/pages/Landing/Landing"
import Portfolio from "./components/Portfolio/Portfolio"
import SignUp from './components/Portfolio/Cases/SignUp/SignUp'
import Widget from './components/Portfolio/Cases/Widget/Widget'
import ToDo from './components/Portfolio/Cases/ToDo/ToDo'

export default function AppRouter () {
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route path="/contact" element={<Contact />} />  
          <Route path="/portfolio" element={<Portfolio />} />  
          <Route path="/portfolio/signup" element={<SignUp />}/>
          <Route path="/portfolio/widget" element={<Widget />}/>
          <Route path="/portfolio/todo" element={<ToDo />}/>
      </Routes>
    </BrowserRouter>
  )
}