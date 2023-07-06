import React, {useEffect, useState } from "react"
import { Container } from "@mui/material"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import moment from 'moment';
import './style.scss';

const url = 'http://localhost:3001';
const totalDays = 35;
const defaultEvent = {
  title: '',
  description: '',
  duration: 1,
  date: moment().format('X')
};

export default function Calendar (props) {
  const {today, setEvents, events} = props;

  const [method, setMethod] = useState(null);

  const [event, setEvent] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);

  const startDate = today.startOf('week');
  const endDate = today.endOf('week');

  const startDateQuery = startDate.clone().format('X');
  const endDateQuery = endDate.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
    .then(res => res.json())
    .then(res => setEvents(res))
  }, [startDateQuery, endDateQuery, setEvents]);
  
  const day = startDate.clone();

  const arrDays = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isCurrentMonth = (month) => moment().isSame(month, 'month');

  const openFormHandler = (methodName, eventForUpdate, dayItem) => {
    setEvent(eventForUpdate || {...defaultEvent, date: dayItem.format('X')});
    setMethod(methodName);
  };

  const openModalFormHandler = (methodName, eventForUpdate, dayItem) => {
    setIsShowForm(true);
    openFormHandler(methodName, eventForUpdate, dayItem);
  };

  const cancelFormHandler = (e) => {
    setIsShowForm(false);
    setEvent(null);
  };

  const changeEventHandler = (text, field) => {
    setEvent(prev => ({
      ...prev,
      [field]: text
    }))
  };

  const fetchHandler = (fetchUrl, eventForUpdate, httpMethod) => {

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventForUpdate)
    })
      .then(res => res.json())
      .then(res => {
        if(httpMethod === 'PATCH') {
          setEvents(prev => prev.map(eventEl => eventEl.id === res.id ? res : eventEl))
        } else {
          setEvents(prev => [...prev, res])
        }
        cancelFormHandler()
    })
  }

  const eventFetchHandler = () => {
    const fetchUrl = method === 'Update' ? `${url}/events/${event.id}` : `${url}/events`;
    const httpMethod = method === 'Update' ? 'PATCH' : 'POST';
    fetchHandler(fetchUrl, event, httpMethod);
  }

  const deleteEventHandler = () => {
    const fetchUrl = `${url}/events/${event.id}`;
    const httpMethod = 'DELETE';

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        setEvents(prev => prev.filter(eventEl => eventEl.id !== event.id))
        cancelFormHandler()
      })
  }
  return (
    <Container
      disableGutters
      sx={{
        height:`calc(100vh - ${headerHeight})`,
        border: "1px solid rgba(105, 112, 112, 0.409)",
      }}>
      <Container
        disableGutters>
      {
        isShowForm ? (
          <div className='formWrapper' onClick={() => cancelFormHandler()}>
            <div className='formContainer' onClick={(e) => e.stopPropagation()}>
              <input 
                className='eventTitle' 
                type='text' 
                placeholder='Title' 
                value={event ? event.title : ''}
                onChange={e => changeEventHandler(e.target.value, 'title')} 
              />
              <input 
                className='eventDescription' 
                type='text' 
                placeholder='Description' 
                value={event ? event.description : ''}
                onChange={e => changeEventHandler(e.target.value, 'description')}  
              />
              <div className='buttonsEventWrapper'>
                <button onClick={() => cancelFormHandler()}>Cancel</button>
                <button onClick={() => eventFetchHandler()}>{method}</button>
                {
                  method === 'Update' ? (
                    <button onClick={() => deleteEventHandler()}>Delete</button>
                  ) : null
                }
              </div>
            </div>
          </div>
        ) : null
      }
      <div className='calendarWrapper'>
        {[...Array(7)].map((_, i) => (
          <div className='weekWrapper'> 
            {moment().day(i + 1).format('ddd')}
          </div>
        ))}

        {
          arrDays.map((dayItem) => ( 
            <div className={isCurrentMonth(dayItem) ? 'currentMonth' : 'dayWrapper'} 
              key={dayItem.unix()}
              isWeekend={dayItem.day === 6 || dayItem.day === 0}
              isCurrentMonth={isCurrentMonth(dayItem)}
              >
                <div className='showDayWrapper'>
                  <div className='rowInCell'>
                    <div className={ isCurrentDay(dayItem) ? 'currentDay' : '' } onDoubleClick={() => openModalFormHandler('Create', null, dayItem)}>
                      {dayItem.format('D')}
                    </div>
                  </div>
                </div>
                {events && events.length > 0 && (
                  <ul className='eventListWrapper'>
                    {
                    events
                      .filter(ev => ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X'))
                      .map(ev => 
                        <div type='button' className='eventWrapper' onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}>
                          <li key={ev.id} >
                              {ev.title}
                            </li>
                            <li>
                              {ev.description}
                            </li>
                        </div>
                        )
                    }
                  </ul>
                )}
            </div>
          ))
        }
      </div>
      </Container>
    </Container>
  )
} 