import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Header/Info/Info";
import Contact from "./components/Header/Contact/Contact";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";




export default function AppRouter () {
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path='/home' element={<Main />}/>
          <Route path='/info' element={<Info />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/portfolio" element={<Portfolio />} />     
      </Routes>
    </BrowserRouter>
  )
}