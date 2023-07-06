import React from "react";
import { Container, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { spacing } from "../../shared/utils/constants/spacing"

const Portfolio = () => {
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
            top: `calc(${headerHeight}px + ${spacing[2]})`,
            left: spacing[2],
          }}>
          <Link to="/" >
            <Icon icon="line-md:home-md"width={36} />
          </Link>
        </Box>

        <Box
          sx={{
          }}>
          <Link to="/portfolio/signup">
            SIGN UP
          </Link>
        </Box>

        <Box>
          <Link to="/portfolio/widget">
            WIDGET
          </Link>
        </Box>

        <Box>
          <Link to="/portfolio/planner">
            PLANNER
          </Link>
        </Box>

      </Container>
    </Container>
  )
}
export default Portfolio;

