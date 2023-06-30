import React, {useState} from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Widget () {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        <Link to="/portfolio" className="iconArrow">
            <Icon icon="ic:outline-arrow-circle-left"width={46} />
        </Link>
      </div>

      <article className="widget">
        <header className="containerIcon">
          <div className={activeIndex === 1 && "underline"}>
            <button id="1" onClick={() => setActiveIndex(1)}>
              <Icon icon="carbon:home"width={56} />
            </button>
          </div>

          <div className={activeIndex === 2 && "underline"}>
            <button id="2" onClick={() => setActiveIndex(2)}>
              <Icon icon="ic:round-lock-open"width={56} />
            </button>
          </div>

          <div className={activeIndex === 3 && "underline"}>
            <button id="3" onClick={() => setActiveIndex(3)}>
              <Icon icon="ic:outline-settings"width={56} />
            </button>
          </div>
        </header>

        <div className="content">
          <div className="content-inner"
          >
            {activeIndex === 1 && (
            <div>
              Home
            </div>
            )}
            
            {activeIndex === 2 && (
            <div>
              Lock
            </div>
            )}
            {activeIndex === 3 && (
            <div>
              Settings
            </div>
            )}

          </div>
        </div>
      </article>
    </div>
  )
}