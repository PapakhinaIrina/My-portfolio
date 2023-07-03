import React from "react";
import { AppBar, Container, Box, Button, Toolbar, Typography } from "@mui/material";
import { headerHeight } from "../../shared/utils/constants/componentSize";

const textHeader = "Papakhina's Portfolio"
export const Header = () => {
  return (
    <AppBar
    position="static"
    color="transparent"
    sx={{
      height: headerHeight,
      minWidth: "1320px",
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography 
            variant="h6" 
            noWrap 
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
              { textHeader }
          </Typography>
          <Box 
            sx={{
              display: "flex",
              gap: 2
            }}>
              <Button
                variant="text"
                href="/about"
                sx={{
                  color: "black"
                }}>
                  About
              </Button>
              <Button
                variant="text"
                href="/contact"
                sx={{
                  color: "black"
                }}>
                  Contact
              </Button>
              <Button
                variant="text"
                href="/portfolio"
                sx={{
                  color: "black"
                }}>
                  Portfolio
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}