import React, {useState} from "react";
import Calendar from './Calendar';
import { Icon } from '@iconify/react';
import moment from "moment";

import './style.scss'



export default function ToDo () {
  const [today, setToday] = useState(moment());

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const selectedMonthMonth =  today.startOf('month').format('MMM');
  const selectedYearYear =  moment().startOf('year').format('YYYY');

  return (
  <>
    <div className="wrapperToDo">
      <div className="containerToDo">
        <div className="headerToDo">
          {[selectedMonthMonth , " ",selectedYearYear]}
          
          <div className="buttonHeader">
            <button onClick={() => prevHandler(today)}><Icon icon="ooui:next-rtl" width={15}/></button>
            <div type="button" onClick={() => todayHandler(today)}>Today</div>
            <button onClick={() => nextHandler(today)}><Icon icon="ooui:next-ltr" width={15}/></button>
          </div>

        </div>

        <div className="calendar"><Calendar today={today}/></div>
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