import React from "react";
import Calendar from './Calendar';
import { Icon } from '@iconify/react';
import moment from "moment";

import './style.scss'






export default function ToDo () {

  const currentMonth =  moment().startOf('month').format('MMM');
  const currentYear =  moment().startOf('year').format('YYYY');


  return (
  <>
    <div className="wrapperToDo">
      <div className="containerToDo">
        <div className="headerToDo">{[currentMonth , " ",currentYear]}</div>
        <div className="calendar"><Calendar/></div>
        <div className="tasks">Задачи</div>
        <div className="buttonAdd">
          <button>
            <Icon icon="fluent:add-circle-28-regular"width={56} />
          </button>
        </div>

      </div>
    </div>
  </>
  )
}