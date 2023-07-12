import React from "react"
import { Box, InputBase, Button, FormControl } from "@mui/material"
import { spacing } from "../../shared/utils/constants"

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
        <InputBase 
          type='text' 
          placeholder='Title'
          value={event ? event.title : ''}
          onChange={e => changeEventHandler(e.target.value, 'title')} 
            sx={{
              backgroundColor: "rgb(251, 249, 246)",
              border: "1px solid rgba(184, 182, 182, 0.645)",
              borderRadius: "8px",
              color: "rgba(68, 70, 70, 0.885)",
              fontFamily: "Cormorant",  
              fontSize: "20px",
              outline: "unset",
              padding: "4px 14px",
              textOverflow: "ellipsis",
              width: "100%",
              marginBottom: spacing[3]
            }}/>
        <InputBase 
          type='text' 
          placeholder='Description' 
          value={event ? event.description : ''}
          onChange={e => changeEventHandler(e.target.value, 'description')}  
            sx={{
              backgroundColor: "rgb(251, 249, 246)",
              border: "1px solid rgba(184, 182, 182, 0.645)",
              borderRadius: "8px",
              color: "rgba(68, 70, 70, 0.885)",
              fontFamily: "Cormorant",  
              fontSize: "20px",
              outline: "unset",
              padding: "4px 14px",
              textOverflow: "ellipsis",
              width: "100%"
            }}/>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "8px 14px",
              position: "relative",
              paddingBottom: "0px"
            }}>
            <Button 
              onClick={() => cancelFormHandler()}
              sx={{
                fontFamily: "Cormorant",  
                fontSize: "15px",
                fontWeight: "bolder",
                color: "rgb(73, 79, 79)"
              }}>
                Cancel
            </Button>
            <Button 
              onClick={() => eventFetchHandler()}
              sx={{
                fontFamily: "Cormorant",  
                fontSize: "15px",
                fontWeight: "bolder",
                color: "rgb(73, 79, 79)"
              }}>
              {method}
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
export default FormModalEvent