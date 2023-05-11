import React from "react";
import Calendar from './Calendar'

import './style.css'






export default function ToDo () {

  

  return (
  <>
    <div className="wrapperToDo">
      <div className="containerToDo">
        <div className="headerToDo">Месяц</div>
        <div className="calendar"><Calendar/></div>
        <div className="tasks">Задачи</div>
      </div>
    </div>
  </>
  )
}