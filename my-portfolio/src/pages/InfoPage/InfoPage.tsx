import React from 'react';
import { Icon } from '@iconify/react';
import {  Animation } from '../../shared/ui';
import { Link } from "react-router-dom";
import './style.scss'


export default function Contact () {


  return (
    <div className="wrapperConnectPage">

      <div className="containerConnectPage">
        <Link to="/home" className="home">
          <Icon icon="line-md:home-md"width={46} />
        </Link>

        <h3> Связь </h3>

          <div>
            <Icon icon="line-md:email" width={46} />
            papakhina.irina@mail.ru
          </div>

          <div>
            <Icon icon="line-md:telegram" width={46} />
            papakhina_irina
          </div>

          <div>
            <Icon icon="ion:phone-portrait-outline" width={46} />
            +7(926)424-92-79
        </div>
          <br/>
          <br/>
        <h3> Соцсети </h3>
        <div className="social">
            <li>
              <a href="https://www.instagram.com/_papakha_/?igshid=YmMyMTA2M2Y%3D" target="blank" className="iconInstagram">
                <Icon icon="line-md:instagram" width={46}/>
              </a>
            </li>

            <li >
              <a href="https://www.linkedin.com/in/irina-papakhina-52598524a/" target="blank" rel="noreferrer" className="iconLinkedin">
                <Icon icon="line-md:linkedin" width={46} />
              </a>
            </li>

            <li>
              <a href="https://github.com/PapakhinaIrina" target="blank" rel="noreferrer" className="iconGithub">
                <Icon icon="line-md:github" width={46} />
              </a>
            </li>
        </div>

        <Animation />


      </div>
    </div>
  )
} 