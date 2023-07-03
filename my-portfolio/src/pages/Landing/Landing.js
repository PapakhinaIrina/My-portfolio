import { Container, Box, Typography } from "@mui/material"
import { headerHeight } from '../../shared/utils/constants/componentSize'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const Landing = () => {
  return (
  <Container>
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight})`,
        display: 'grid',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gridTemplateRows: "1fr 100px"
      }}>
        <Typography 
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',          
          }}>
            It's a landing page
        </Typography>
      {/* <Box>
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: 'brown',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} */}
          <KeyboardDoubleArrowDownIcon/>
      {/* </Box> */}
    </Container>
  </Container>
  )
}
export default Landing;