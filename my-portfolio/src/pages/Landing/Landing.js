import { Container, Typography } from "@mui/material"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { spacing } from "../../shared/utils/constants/spacing"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"

const Landing = () => {
  return (
  <Container>
    <Container
      sx={{
        alignItems: 'center',
        display: 'grid',
        flexDirection: 'column',
        gridTemplateRows: "1fr 100px",
        height: `calc(100vh - ${headerHeight})`,
        justifyContent: 'center',
        paddingTop: spacing[3]
      }}>
        <Typography 
          variant="h3"
          align="center"
          sx={{
            fontWeight: 'bold',          
          }}>
            It's a landing page
        </Typography>
          <KeyboardDoubleArrowDownIcon 
          sx={{
            fontSize: '50px',
          }}/>
    </Container>
  </Container>
  )
}
export default Landing;