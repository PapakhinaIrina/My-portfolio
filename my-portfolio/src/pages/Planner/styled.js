import { styled } from 'styled-components'
import { headerHeight } from "../../shared/utils/constants"
import { Button, Box, Container } from '@mui/material'


export const StyledCalendarWrapper = styled(Container) ({
  padding: "0"
})

export const StyledCalendarContainer = styled(Container) ({
  height:`calc(100vh - ${headerHeight})`,
  border: "1px solid rgba(105, 112, 112, 0.409)",
  padding: "0"
})

export const StyledCalendarBox = styled(Box) ({
  display: "grid",
  backgroundColor: "hwb(0 100% 0%)",
  border: "0.5px solid rgba(105, 112, 112, 0.409)",
  gridTemplateColumns: "repeat(7, 0.4fr)",
  gridTemplateRows: "repeat(6, 0.4fr)"
})

export const StyledCalendarWeek = styled(Box) ({
  display: "flex",
  fontFamily: "Dancing Script",
  justifyContent: "flex-end",
  minWidth: "140px",
  maxHeight: "20px",
  paddingRight: "6px",
})

export const StyledCalendarMonth = styled(Box)(({currentMonth, otherMonth}) => {
  return {
    border: "0.5px solid rgba(105, 112, 112, 0.409)",
    color: "rgb(69, 132, 132)",
    minWidth: "140px",
    minHeight: "100px",
    backgroundColor: otherMonth ? "hwb(0 82% 16% / 0.231)" : "hwb(0 100% 0%)",
    // eslint-disable-next-line no-dupe-keys
    color: currentMonth ? "rgb(69, 132, 132)" : "hwb(0 82% 16% / 0.231)",
  }
})

export const StyledCalendarDayButton = styled(Button) (({currentDay, otherDay}) => {
  return {
    display: "flex",
    justifyContent: "flex-end",
  }
})

export const StyledDoubleClickedButton = styled(Button) ({
  width: "90px",
  border: "unset",
  backgroundColor: "unset",
  color: "unset",
  cursor: "pointer",
  margin: "0",
  padding: "0"
})