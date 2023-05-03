import React, {useState} from "react";
import { Icon } from '@iconify/react';


import './style.scss';


const tabWidth = 300;





export default function Widget () {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="widget">
      <header className="containerIcon">
        <div>
          <button id="1" onClick={() => setActiveIndex(1)}>
            <Icon icon="carbon:home"width={56} />
          </button>
        </div>

        <div>
          <button id="2" onClick={() => setActiveIndex(2)}>
            <Icon icon="ic:round-lock-open"width={56} />
          </button>
        </div>

        <div>
          <button id="3" onClick={() => setActiveIndex(3)}>
            <Icon icon="ic:outline-settings"width={56} />
          </button>
        </div>

{/* 
        {tabHeaders.map((tab, index) => (
          <button
          onClick={() => setActiveIndex(index)}
          key={tab}
          class={`material-symbol-outlined ${activeIndex === index ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
        <div className="underline"
        style={{
          translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`
        }}>
        </div> */}
      </header>

      <div className="content">
        <div className="content-inner"
        style={{
          translate: `-${activeIndex ? activeIndex * tabWidth : 0} px 0`
        }}
        >
          <div>
          </div>
          

          <div>
          </div>

          <div>
          </div>

        </div>
      </div>
    </article>
  )
}