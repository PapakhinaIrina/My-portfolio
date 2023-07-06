import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Box, Paper, Button } from "@mui/material"
import { Icon } from "@iconify/react"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { spacing } from "../../shared/utils/constants/spacing"


import './style.css';

const Widget = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container
      disableGutters
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
      <Container
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box
          sx={{
            position: "absolute",
            top: `calc(${headerHeight}px + ${spacing[3]})`,
            left: "0",
            cursor: "pointer"
          }}>
          <Link to="/portfolio">
            <Icon icon="ic:outline-arrow-circle-left"width={46} color="#777777"/>
          </Link>
        </Box>

      <Paper className="widget"
        sx={{
          width: "400px",
          height: "300px",
          border: "solid 2px rgb(80, 53, 25)",
          borderRadius: "8px",
        }}>
        <Box 
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          borderBottom: "1px solid rgb(80, 53, 25)",
          padding: spacing[2],
          paddingBottom: 0
        }}>
          <Box className={activeIndex === 1 && "underline"}>
            <Button 
              variant="text" 
              id="1" 
              onClick={() => setActiveIndex(1)}
              sx={{
                
              }}>
              <Icon icon="carbon:home"width={56} color="#777777"/>
            </Button>
          </Box>

          <Box className={activeIndex === 2 && "underline"}>
            <Button variant="text" id="2" onClick={() => setActiveIndex(2)}>
              <Icon icon="ic:round-lock-open"width={56} color="#777777"/>
            </Button>
          </Box>

          <Box className={activeIndex === 3 && "underline"}>
            <Button variant="text" id="3" onClick={() => setActiveIndex(3)}>
              <Icon icon="ic:outline-settings"width={56} color="#777777"/>
            </Button>
          </Box>

        </Box>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "140px"
          }}>
          <Box className="content-inner"

          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            alignItems: "center",
            transition: "0.3s",
            fontFamily: "'Dosis', sans-serif",
            textAlign: "center",
            padding: "24px 0 0 24px"
          }}>
            {activeIndex === 1 && (
            <Box>
              Home
            </Box>
            )}
            {activeIndex === 2 && (
            <Box>
              Lock
            </Box>
            )}
            {activeIndex === 3 && (
            <Box>
              Settings
            </Box>
            )}

          </Box>
        </Box>
      </Paper>
      </Container>
    </Container>
  )
}
export default Widget;