import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Header/Info/Info";
import Contact from "./components/Header/Contact/Contact";
import Main from "./components/Main/Main";




export default function AppRouter () {
  return(
    <BrowserRouter>
      <Routes>
          <Route exact path='/home' element={<Main />}> </Route>
          <Route path='/info' element={<Info />} />
          <Route path="/contact" element={<Contact />} />      
      </Routes>
    </BrowserRouter>
  )
}