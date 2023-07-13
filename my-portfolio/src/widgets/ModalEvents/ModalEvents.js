import React from "react"
import { StyledInputModalEvent } from "./styled"
import { Box, Button, FormControl } from "@mui/material"

export const FormModalEvent = ({ isShowForm, cancelFormHandler, changeEventHandler, eventFetchHandler, deleteEventHandler, method, event}) => {
  return (
    isShowForm ? (
      <Box
        onClick={() => cancelFormHandler()}
          sx={{
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "100",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(255, 255, 255, 0.499)",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}>
        <FormControl 
          onClick={(e) => e.stopPropagation()}
          sx={{
            backgroundColor: "rgba(251, 251, 251, 0.707)",
            borderRadius: "8px",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            height: "180px",
            padding: "8px",
            width: "300px"
          }}>
            <FormControl>
              <StyledInputModalEvent disableUnderline
                type='text' 
                placeholder='Title'
                onChange={e => changeEventHandler(e.target.value, 'title')}
                sx={{
                  color: "rgba(68, 70, 70, 0.885)",
                  fontFamily: "Cormorant",  
                  fontSize: "20px",
                }}/>
            </FormControl>

            <FormControl>
              <StyledInputModalEvent disableUnderline
                type='text' 
                placeholder='Description'
                onChange={e => changeEventHandler(e.target.value, 'description')}  
                  sx={{
                    color: "rgba(68, 70, 70, 0.885)",
                    fontFamily: "Cormorant",  
                    fontSize: "20px",
                  }}/>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                position: "relative",
                paddingBottom: "0px"
              }}>
              <Button 
                onClick={() => cancelFormHandler()}
                sx={{
                  fontFamily: "serif",  
                  fontSize: "15px",
                  fontWeight: "bolder",
                  color: "rgb(73, 79, 79)"
                }}>
                CANCEL
              </Button>
              <Button 
                onClick={() => eventFetchHandler()}
                sx={{
                  fontFamily: "serif", 
                  fontSize: "15px",
                  fontWeight: "bolder",
                  color: "rgb(73, 79, 79)",
                }}>
                { method }
              </Button>
              {
                method === 'Update' ? (
                  <Button 
                    onClick={() => deleteEventHandler()}
                    sx={{
                      fontFamily: "Cormorant",  
                      fontSize: "15px",
                      fontWeight: "bolder",
                      color: "rgb(73, 79, 79)"
                    }}>
                    DELETE
                  </Button>
                ) : null
              }
            </Box>
          </FormControl>
      </Box>
    ) : null
  ) 
}
export default FormModalEvent;