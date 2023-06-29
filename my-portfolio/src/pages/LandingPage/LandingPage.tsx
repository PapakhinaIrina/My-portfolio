import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import { headerHeight } from '../../shared/utils/constants/componentSize';


const LandingPage = () => {
  const mainPhrase = "Welcome to my page";

  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight}px)`,
        display: "grid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateRows: "1fr 100px",
      }}>
        <Typography
          variant="h3"
          alignItems="center"
          sx={{
            fontWeight: "bold",
          }}>
            {mainPhrase}
        </Typography>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
        </Box>
    </Container>
  )
}

export default LandingPage;