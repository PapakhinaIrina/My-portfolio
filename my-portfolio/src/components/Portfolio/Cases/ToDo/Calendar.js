import moment from 'moment';
import './style.scss';



export default function Calendar () {

  const totalDays = 42;
  const startDate =  moment().startOf('week');
  const endDate = moment().endOf('week');

  const day = startDate.clone();
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
            <div className='rowInCell'>
              <div className={ isCurrentDay(dayItem) ? 'currentDay' : '' }>
                {dayItem.format('D')}
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
} 