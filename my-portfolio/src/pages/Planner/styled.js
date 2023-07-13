import { styled } from 'styled-components'
import { Button, Box, Container, ListItem, List } from '@mui/material'
import { headerHeight } from "../../shared/utils/constants"
import { spacing } from "../../shared/utils/constants/spacing"

export const StyledCalendarWrapper = styled(Container) ({
  padding: "0"
})

export const StyledCalendarContainer = styled(Container) ({
  height:`calc(100vh - ${headerHeight})`,
  border: "1px solid rgba(105, 112, 112, 0.409)",
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
  fontFamily: "cursive",
  justifyContent: "flex-end",
  minWidth: "140px",
  maxHeight: "20px",
  paddingRight: "6px",
})

export const StyledCalendarMonth = styled(Box)(({isCurrentMonth, isOtherMonth}) => {
  return {
    border: "0.5px solid rgba(105, 112, 112, 0.409)",
    minWidth: "140px",
    minHeight: "100px",
    backgroundColor: isCurrentMonth ? "hwb(0 100% 0%)": "hwb(0 82% 16% / 0.231)" ,
  }
})

export const StyledDayHeader = styled(Box) ({
  display: "flex",
  justifyContent: "flex-end",
  height: "33px",
})

export const StyledDayHeaderPointer = styled(Box) ({
  display: "flex",
  cursor: "pointer",
  justifyContent: "flex-end",
  marginTop: "3px",
})

export const StyledCalendarDayButton = styled(Button) ({
    display: "flex",
    justifyContent: "flex-end",
})

export const StyledDoubleClickedButton = styled(Button) ({
  width: "139px",
  border: "unset",
  backgroundColor: "unset",
  color: "unset",
  cursor: "pointer",

})

export const StyledList = styled(List) ({
  listStylePosition: "inside",
  margin: "unset",
  overflow: "scroll",
  paddingRight: "3px",
  position: "relative",
  maxHeight: "calc(100px - 33px)",
  width: "100%"
})

export const StyledListItemTitle = styled(ListItem) ({
  fontSize: "8px",
  fontWeight: "bolder",
  position: "relative",
  textAlign: "left",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textTransform: "capitalize",
  color: "37474f",
})

export const StyledListItemDescription = styled(ListItem) ({
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
})