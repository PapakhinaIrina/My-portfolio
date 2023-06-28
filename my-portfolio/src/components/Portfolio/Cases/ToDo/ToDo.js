import React, {useState, useEffect} from "react";
import Calendar from './Calendar';
import { Icon } from '@iconify/react';
import moment from "moment";

import './style.scss'

const url = 'http://localhost:3001';
export default function ToDo () {

  const [today, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [currentDayEvents, setCurrentDayEvents] = useState([]);

  const isStartCurrentDay = moment().clone().startOf('day').format('x');
  const isEndCurrentDay = moment().clone().endOf('day').format('x');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${isStartCurrentDay}&date_lte=${isEndCurrentDay}`)
    .then(res => res.json())
    .then(res => setCurrentDayEvents(res))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [JSON.stringify(events)]);

console.log(JSON.stringify(currentDayEvents));

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

        <div className="calendar">
          <Calendar 
            events={events} 
            setEvents={setEvents} 
            today={today}/>
        </div>

        <div className="tasks">Tasks for today :
          <div className="tasksList">
            {currentDayEvents.length > 0 ? currentDayEvents.map(task => 
            <div className="taskContainer">
              <div className="taskItem" key={task.id}>
                  <Icon icon="mdi:dot" width={28} />
                  <div className="taskTitle">{task.title}</div>
                  <div className="taskDescription">{task.description}</div>
              </div>
            </div>
            ) : null
            }
          </div>
        
        </div>
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