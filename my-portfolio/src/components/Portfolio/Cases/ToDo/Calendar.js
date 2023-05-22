import React, {useEffect, useState}from 'react';
import moment from 'moment';
import './style.scss';

const totalDays = 42;
const url = 'http://localhost:5000';
const defaultEvent = {
  title: '',
  description: '',
  date: moment().format('X')
};

export default function Calendar (props) {
  const {today} = props;

  const [events, setEvents] = useState([]);

  const [event, setEvent] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);

  const [method, setMethod] = useState(null);

  const startDate =  today.startOf('week');
  const endDate = today.endOf('week');

  const startDateQuery = startDate.clone().format('X');
  const endDateQuery = endDate.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
    .then(res => res.json)
    .then(res => setEvents(res))
  }, [startDateQuery, endDateQuery]);
  
  const day = startDate.clone();

  const arrDays = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isCurrentMonth = (month) => moment().isSame(month, 'month');

  const openFormHandler = (methodName, eventForUpdate) => {
    setIsShowForm(true);
    setEvent(eventForUpdate || defaultEvent);
    setMethod(methodName);
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

  const eventFetchHandler = () => {
    const fetchUrl = method === 'Update' ? `${url}/events/${event.id}` : `${url}/events`;
    const httpMethod = method === 'Update' ? 'PUT' : 'POST';

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: event.title,
        description: event.description,
        date: event.date
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);

          if(method === 'Update') {
            setEvent( prevState => prevState.map(eventEl => eventEl.id === res.id ? res : eventEl))
          } else {
            setEvents(prevState => [...prevState, res]);
          }  
          cancelFormHandler()
        })
    })
  }

  return (
    <>
    {
      isShowForm ? (
        <div className='formWrapper' onClick={() => cancelFormHandler()}>
          <div className='formContainer' onClick={(e) => e.stopPropagation()}>
            <input 
              className='eventTitle' 
              type='text' 
              placeholder='Title' 
              value={event ? event.title : ''}
              onChange={(e) => changeEventHandler(e.target.value, 'title')} 
            />
            <input 
              className='eventDescription' 
              type='text' 
              placeholder='Description' 
              value={event ? event.description : ''}
              onChange={(e) => changeEventHandler(e.target.value, 'description')}  
            />
            <div className='buttonsEventWrapper'>
              <button onClick={() => cancelFormHandler()}>Cancel</button>
              <button onClick={() => eventFetchHandler()}>{method}</button>
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
                    <div className={ isCurrentDay(dayItem) ? 'currentDay' : '' } onDoubleClick={() => openFormHandler('Add')}>
                      {dayItem.format('D')}
                    </div>
                  </div>
                </div>

                <ul className='evenListWrapper'>
                  {
                  events
                  .filter(ev => ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X'))
                  .map(ev => 
                      <div type='button' className='eventWrapper' onDoubleClick={() => openFormHandler('Change', event)}>
                        <li key={ev.id}>
                          {ev.title}
                        </li>
                      </div>
                    )
                }
                </ul>
            </div>
          ))
        }
      </div>
    </>
  )
} 