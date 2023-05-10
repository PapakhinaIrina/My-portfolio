import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';



export default function Portfolio () {


  return (
    <div className="wrapperPortfolio">
      <div className="containerPortfolio">
        
        <Link to="/home" className="home">
            <Icon icon="line-md:home-md"width={46} />
        </Link>

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

            <div>
              <Link to="/portfolio/todo"className="portfolio">
                TODO
              </Link>
            </div>


          </div>
      </div>
    </div>
  )
}