import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import React from "react";
import { ROUTES } from "../../shared/utils";



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
          <Toolbar 
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <Typography 
                variant="h6"
                noWrap
                component="a" 
                href={ROUTES.landing.path}
                sx={{ 
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  }}>
                    Welcome to my own app
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                }}>
                  <Button
                    variant="text"
                    href={ROUTES.info.path}
                    sx={{
                      color: "white",
                    }}
                    >
                      ABOUT
                  </Button>

                  <Button
                    variant="text"
                    href={ROUTES.contact.path}
                    sx={{
                      color: "white",
                    }}
                    >
                      CONTACT
                  </Button>

                  <Button
                    variant="text"
                    href={ROUTES.portfolio.path}
                    sx={{
                      color: "white",
                    }}
                    >
                      PORTFOLIO
                  </Button>

              </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
};