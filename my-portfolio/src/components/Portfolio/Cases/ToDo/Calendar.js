import moment from 'moment';
import './style.scss';



export default function Calendar () {

  const totalDays = 42;
  const startDate =  moment().startOf('week');
  const endDate = moment().endOf('week');

  const day = startDate.clone();
  const arrDays = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');

return (
  <div className='calendarWrapper'>
    {
      arrDays.map((dayItem) => ( 
        <div className='dayWrapper' 
          key={dayItem.format('DDMMYYYY')}
          isWeekend={dayItem.day === 6 || dayItem.day === 0}
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

)
} 