import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Header/Info/Info";
import Contact from "./components/Header/Contact/Contact";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import SignUp from './components/Portfolio/Cases/SignUp/SignUp';
import Widget from './components/Portfolio/Cases/Widget/Widget';
import ToDo from './components/Portfolio/Cases/ToDo/ToDo';





export default function AppRouter () {
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path='/home' element={<Main />}/>
          <Route path='/info' element={<Info />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/portfolio" element={<Portfolio />} />  
          <Route path="/portfolio/signup" element={<SignUp />}/>
          <Route path="/portfolio/widget" element={<Widget />}/>
          <Route path="/portfolio/todo" element={<ToDo />}/>


      </Routes>
    </BrowserRouter>
  )
}