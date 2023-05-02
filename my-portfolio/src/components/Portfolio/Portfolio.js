import React from "react";
import { Link } from 'react-router-dom';

export default function Portfolio () {


  return (
    <div className="wrapperPortfolio">
      <div className="containerPortfolio">
          <div className="cases">
            <div>
            <Link to="/portfolio/signup"className="portfolio">
              SIGN UP
            </Link>
            </div>

            <div>
            <Link to="/portfolio/widget"className="portfolio">
              WIDGET
            </Link>
            </div>


          </div>
      </div>
    </div>
  )
}