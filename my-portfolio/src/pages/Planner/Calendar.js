import React, {useEffect } from "react"
import { FormModalEvent } from "../../widgets/ModalEvents/ModalEvents"
import { StyledCalendarContainer, 
        StyledCalendarWrapper, 
        StyledCalendarBox, 
        StyledCalendarWeek, 
        StyledCalendarMonth, 
        StyledCalendarDayButton, 
        StyledDoubleClickedButton, 
        StyledDayHeader, 
        StyledDayHeaderPointer,
        StyledListItemTitle,
        StyledListItemDescription,
        StyledList} from "./styled"
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

const totalDays = 42;
const url = 'http://localhost:3001';

export default function Calendar (props) {

  const {
        today, 
        events, 
        setEvents, 
        setIsShowForm, 
        openModalFormHandler, 
        isShowForm, 
        cancelFormHandler, 
        changeEventHandler, 
        eventFetchHandler, 
        deleteEventHandler } = props;
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

  return (
    <StyledCalendarWrapper disableGutters>
      <StyledCalendarContainer disableGutters>
        <StyledCalendarBox>
          {[...Array(7)].map((_, i) => (
            <StyledCalendarWeek> 
              {moment().day(i + 1).format('ddd')}
            </StyledCalendarWeek>
          ))}

          {
            arrDays.map((dayItem) => ( 
              <StyledCalendarMonth
                disableGutters 
                key={uuidv4()}
                isWeekend={dayItem.day === 6 || dayItem.day === 0}
                isCurrentMonth={isCurrentMonth(dayItem)}
                >
                  <StyledDayHeader>
                    <StyledDayHeaderPointer>
                      <StyledCalendarDayButton
                        key={uuidv4()}
                        isCurrentDay={isCurrentDay(dayItem)}
                        onDoubleClick={() => openModalFormHandler('Create', null, dayItem, setIsShowForm)}
                        sx={{
                          borderRadius: "50%",
                          backgroundColor: isCurrentDay(dayItem) ? 'orange' : 'none',
                          minWidth: "33px",
                          color: isCurrentMonth(dayItem) ? "#616161" : "#eeeeee",
                        }}>
                          {dayItem.format('D')}
                      </StyledCalendarDayButton>
                    </StyledDayHeaderPointer>
                  </StyledDayHeader>

                  {events && events.length > 0 && (
                    <StyledList component="nav"
                      sx={{
                        paddingLeft: "2px"
                      }}>
                      {
                      events
                        .filter(ev => ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X'))
                        .map(ev => 
                          <StyledDoubleClickedButton
                            key={uuidv4()}
                            onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}
                            sx={{
                            paddingTop: "0px",
                            }}>
                              <StyledListItemTitle key={uuidv4()} disableGutters
                                sx={{
                                  paddingTop: "0px"
                                }}>
                                {ev.title}
                              </StyledListItemTitle>
                              <StyledListItemDescription key={uuidv4()} disableGutters
                                sx={{
                                  paddingTop: "0px"
                                }}>
                                {ev.description}
                              </StyledListItemDescription>
                          </StyledDoubleClickedButton>
                          )
                      }
                    </StyledList>
                  )}
              </StyledCalendarMonth>
            ))
          }
            <FormModalEvent 
              isShowForm={isShowForm}
              cancelFormHandler={cancelFormHandler}
              eventFetchHandler={eventFetchHandler}
              deleteEventHandler={deleteEventHandler}
              changeEventHandler={changeEventHandler}
              />
        </StyledCalendarBox>
      </StyledCalendarContainer>
    </StyledCalendarWrapper>
  )
} 