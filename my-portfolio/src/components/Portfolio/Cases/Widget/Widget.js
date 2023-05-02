import React, {useState} from "react";
import { Icon } from '@iconify/react';


import './style.css';


const tabHeaders = ["home", "lock", "settings"];
const buttonWidth = 64;
const tabWidth = 300;
// const tabContent = [];





export default function Widget () {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="widget">
      <header>
        <div>
          <button onClick={() => setActiveIndex(1)}>
            <Icon icon="carbon:home"width={40} />
          </button>
        </div>

        <div>
          <button onClick={() => setActiveIndex(2)}>
            <Icon icon="ic:round-lock-open"width={40} />
          </button>
        </div>

        <div>
          <button onClick={() => setActiveIndex(3)}>
            <Icon icon="ic:outline-settings"width={40} />
          </button>
        </div>


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
        </div>
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