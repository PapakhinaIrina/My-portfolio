import React, {useState, useEffect} from "react"
import { Container, Button, Box } from "@mui/material"
import Calendar from "./Calendar"
import { Icon } from "@iconify/react"
import { spacing } from "../../shared/utils/constants/spacing"
import moment from "moment"

import './style.scss'

const url = 'http://localhost:3001';

const Planner = () => {

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

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'));

  const selectedMonthMonth =  today.startOf('month').format('MMM');
  const selectedYearYear =  moment().startOf('year').format('YYYY');

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
              fontFamily: "Dancing Script",
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
              events={events} 
              setEvents={setEvents} 
              today={today}/>
          </Box>

          <Box 
            sx={{
              marginLeft: "8px",
              fontFamily: "Cormorant", 
              fontWeight: "bold",
              fontSize: "25px"
            }}> Tasks for today :
            <Box>
              {currentDayEvents.length > 0 ? currentDayEvents.map(task => 
              <Box>
                <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "16px",
                  }} 
                  key={task.id}>
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
                      {task.title}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {task.description}
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
            <Button>
              <Icon icon="fluent:add-circle-28-regular"width={56} color="rgba(105, 112, 112, 0.348)"/>
            </Button>
          </Box>

        </Box>
      </Container>
    </Container>
  )
}
export default Planner;