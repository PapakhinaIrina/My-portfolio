import React from "react";
import { Header } from "../../widgets/Header/Header";
import './style.css';



export default function Main() {


  return(
    <div className="wrapperMain">
      <div className="headerContainer">
        <Header />
      </div>

      <div className="mainContainer">
        {/* <p> <img src="/icon.jng" alt=""/></p> ЗДЕСЬ ДОЛЖНА БЫТЬ КАРТИНКА */}
        I'm main
      </div>

    </div>
  )
}