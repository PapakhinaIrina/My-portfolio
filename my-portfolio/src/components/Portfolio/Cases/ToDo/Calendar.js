import moment from 'moment';
import './style.css';



export default function Calendar () {

  const totalDays = 42;
  const startDate =  moment().startOf('week');
  const endDate = moment().endOf('week');

  const day = startDate.clone().subtract(1, 'day');
  const arrDays = [...Array(totalDays)].map(() => day.add(1, 'day').clone())




console.log(arrDays);

return (
  <div className='calendarWrapper'>
    {
      arrDays.map((dayItem) => ( 
        <div className='dayWrapper' 
          key={dayItem.format('DDMMYYYY')}
          isWeekend={dayItem.day === 6 || dayItem.day === 0}
          >
          <div className='rowInCell'>
            <div className='currentDay'>
              {dayItem.format('D')}
            </div>
          </div>
        </div>
      ))
    }
  </div>

)

}