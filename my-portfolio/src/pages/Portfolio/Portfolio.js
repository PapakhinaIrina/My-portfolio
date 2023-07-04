import React from "react";
import { Container, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { margin } from "../../shared/utils/constants/margin"

export default function Portfolio () {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
      }}>
      <Container 
        sx={{
          height: "80%",
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}>

        <Box
          sx={{
            position: "absolute",
            top: `calc(${headerHeight}px + ${margin})`,
            left: margin,
          }}>
          <Link to="/" >
            <Icon icon="line-md:home-md"width={36} />
          </Link>
        </Box>

        <Box
          sx={{
          }}>
          <Link to="/portfolio/signup"className="portfolio">
            SIGN UP
          </Link>
        </Box>

        <Box>
          <Link to="/portfolio/widget"className="portfolio">
            WIDGET
          </Link>
        </Box>

        <Box>
          <Link to="/portfolio/todo"className="portfolio">
            TODO
          </Link>
        </Box>

      </Container>
    </Container>
  )
}



