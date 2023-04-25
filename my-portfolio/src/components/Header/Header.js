import React from "react";
import { Link } from 'react-router-dom';

import './style.css';



export default function Header() {

  return(
    <div className="wrapper">
      <div className="container">
        <Link to="/info" className="info"> 
        About me 
        </Link>



        <Link to="/contact" className="contact"> 
        Contact
        </Link>
      </div>
    </div>
  )
}