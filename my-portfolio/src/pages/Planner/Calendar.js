import React, {useEffect } from "react"
import { Box, ListItem, List} from "@mui/material"
import { StyledCalendarContainer, StyledCalendarWrapper, StyledCalendarBox, StyledCalendarWeek, StyledCalendarMonth, StyledCalendarDayButton, StyledDoubleClickedButton} from "./styled"
import { FormModalEvent } from "../../widgets/formModalEvent/FormModalEvent"
import { spacing } from "../../shared/utils/constants/spacing"
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const totalDays = 42;
const url = 'http://localhost:3001';

export default function Calendar (props) {
  const {today, setEvents, events, setIsShowForm, openModalFormHandler, isShowForm, cancelFormHandler, changeEventHandler, eventFetchHandler, deleteEventHandler } = props;
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
    <StyledCalendarWrapper>
      <StyledCalendarContainer>
        <StyledCalendarBox>
          {[...Array(7)].map((_, i) => (
            <StyledCalendarWeek> 
              {moment().day(i + 1).format('ddd')}
            </StyledCalendarWeek>
          ))}

          {
            arrDays.map((dayItem) => ( 
              <StyledCalendarMonth 
                key={dayItem.unix()}
                isWeekend={dayItem.day === 6 || dayItem.day === 0}
                isCurrentMonth={isCurrentMonth(dayItem)}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      height: "33px",
                    }}>
                    <Box 
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        justifyContent: "flex-end",
                        marginTop: "3px",
                      }}>
                      <StyledCalendarDayButton 
                        onDoubleClick={() => openModalFormHandler('Create', null, dayItem, setIsShowForm)}>
                          {dayItem.format('D')}
                      </StyledCalendarDayButton>
                    </Box>
                  </Box>
                  {events && events.length > 0 && (
                    <List
                      component="nav" disablePadding disableGutters
                      sx={{
                        listStylePosition: "inside",
                        margin: "unset",
                        overflow: "scroll",
                        paddingLeft: "8px",
                        position: "relative",
                        maxHeight: "calc(100px - 33px)",
                        width: "100%"
                      }}>
                      {
                      events
                        .filter(ev => ev.date >= dayItem.format('X') && ev.date <= dayItem.clone().endOf('day').format('X'))
                        .map(ev => 
                          <StyledDoubleClickedButton 
                            onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}>
                              <ListItem key={uuidv4} disablePadding disableGutters
                                sx={{
                                  fontSize: "8px",
                                  fontWeight: "bolder",
                                  position: "relative",
                                  textAlign: "left",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  textTransform: "capitalize",
                                }}>
                                {ev.title}
                              </ListItem>
                              <ListItem key={uuidv4} disablePadding disableGutters
                                sx={{
                                  fontSize: "8px",
                                  fontWeight: "bolder",
                                  padding: spacing[1],
                                  position: "relative",
                                  textAlign: "left",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                  textTransform: "capitalize",
                                  color: "rgba(68, 70, 70, 0.885)",
                                }}>
                                {ev.description}
                              </ListItem>
                          </StyledDoubleClickedButton>
                          )
                      }
                    </List>
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