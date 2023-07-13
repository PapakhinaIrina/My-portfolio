import React, {useState, useEffect} from "react"
import Calendar from "./Calendar"
import FormModalEvent from "../../widgets/ModalEvents/ModalEvents"
import { Container, Button, Box } from "@mui/material"
import { Icon } from "@iconify/react"
import { spacing } from "../../shared/utils/constants/spacing"
import moment from "moment"

const url = 'http://localhost:3001';

const defaultEvent = {
  title: '',
  description: '',
  duration: 1,
  date: moment().format('X')
};

const Planner = () => {

  const [today, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [currentDayEvents, setCurrentDayEvents] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [method, setMethod] = useState(null);

  const isStartCurrentDay = moment().clone().startOf('day').format('x');
  const isEndCurrentDay = moment().clone().endOf('day').format('x');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${isStartCurrentDay}&date_lte=${isEndCurrentDay}`)
    .then(res => res.json())
    .then(res => setCurrentDayEvents(res))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [JSON.stringify(events)]);

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const selectedMonthMonth =  today.startOf('month').format('MMM');
  const selectedYearYear =  moment().startOf('year').format('YYYY');

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
        console.log(res);
        setEvents(prev => prev.filter(eventEl => eventEl.id !== event.id))
        cancelFormHandler()
      })
  }

  return (
    <Container
      disableGutters
      sx={{
        paddingTop: spacing[4],
        width: "1060px",
      }}>
      <Container
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5F5F5",
          borderRadius: "8px",
          border: "1px solid rgba(105, 112, 112, 0.409)",
          boxShadow: "rgba(133, 134, 167, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" 
        }}>
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <Box 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
              fontFamily: "cursive",
            }}>
            {[selectedMonthMonth , " ",selectedYearYear]}
            
            <Box 
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "20px",
                color: "rgb(73, 79, 79)"
              }}>

              <Button 
                onClick={() => prevHandler(today)}>
                  <Icon icon="ooui:next-rtl" width={15} color="rgba(73, 79, 79, 0.473)"/>
              </Button>
              <Box 
                onClick={() => todayHandler(today)}>
                Today
              </Box>
              <Button 
                onClick={() => nextHandler(today)}>
                <Icon icon="ooui:next-ltr" width={15} color="rgba(73, 79, 79, 0.473)"/>
              </Button>

            </Box>
          </Box>

          <Box>
            <Calendar 
              today={today}
              method={method}
              events={events} 
              setEvents={setEvents}
              setIsShowForm={setIsShowForm}
              openModalFormHandler={openModalFormHandler}
              isShowForm={isShowForm}
              cancelFormHandler={cancelFormHandler}
              changeEventHandler={changeEventHandler}
              eventFetchHandler={eventFetchHandler}
              deleteEventHandler={deleteEventHandler}
              openFormHandler={openFormHandler}
              />
          </Box>

          <Box 
            sx={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "25px"
            }}> Tasks for today :
            <Box>
              {currentDayEvents.length > 0 ? currentDayEvents.map(ev => 
              <Box>
                <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "16px",
                  }} 
                  key={ev.id}>
                    <Icon icon="mdi:dot" width={28} />
                    <Box 
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontWeight: "bold",
                      justifyContent: "center",
                      paddingRight: "8px"
                    }}>
                      {ev.title}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {ev.description}
                    </Box>
                </Box>
              </Box>
              ) : null
              }
            </Box>
          </Box>

          <Box 
            sx={{
              display: "flex",
              justifyContent: "flex-end"
            }}>
            <Button
              onClick={() => openModalFormHandler('Create', currentDayEvents, today)}>
              <Icon icon="fluent:add-circle-28-regular"width={56} color="rgba(105, 112, 112, 0.348)"/>
            </Button>
          </Box>
          <FormModalEvent 
              isShowForm={isShowForm}
              setIsShowForm={setIsShowForm}
              cancelFormHandler={cancelFormHandler}
              eventFetchHandler={eventFetchHandler}
              deleteEventHandler={deleteEventHandler}
              changeEventHandler={changeEventHandler}
              event={event}
              method={method}
              />

          </Box>
      </Container>
    </Container>
  )
}
export default Planner;