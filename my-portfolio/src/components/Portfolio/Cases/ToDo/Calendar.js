import React, {useEffect, useState}from 'react';
import moment from 'moment';
import './style.scss';

const totalDays = 42;
const url = 'http://localhost:5000';

export default function Calendar (props) {
  const {today} = props;

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
    .then(res => res.json)
    .then(res => setEvents(res))
  }, []);

  const startDate =  today.startOf('week');
  const endDate = today.endOf('week');
  
  const day = startDate.clone();

  const startDateQuery = startDate.clone().format('X');
  const endDateQuery = endDate.clone().add(totalDays, 'days').format('X');


  const arrDays = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isCurrentMonth = (month) => moment().isSame(month, 'month');

  return (
    <>
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
                    <div className={ isCurrentDay(dayItem) ? 'currentDay' : '' }>
                      {dayItem.format('D')}
                    </div>
                  </div>
                </div>

                <ul className='evenListWrapper'>
                  {
                  events
                  .filter(ev => ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X'))
                  .map(ev => 
                      <div type='button' className='eventWrapper'>
                        <li>
                          key={ev.id}
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