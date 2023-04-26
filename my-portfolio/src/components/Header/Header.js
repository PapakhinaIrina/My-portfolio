import React from "react";
import { Link } from 'react-router-dom';

import './style.css';



export default function Header() {

  return(
    <div className="wrapper">
      <div className="container">
        <Link to="/info" className="info"> 
          ABOUT  
        </Link>
        <Link to="/contact" className="contact"> 
          CONTACT
        </Link>
        <Link className="portfolio">
          PORTFOLIO
        </Link>
      </div>
    </div>
  )
}