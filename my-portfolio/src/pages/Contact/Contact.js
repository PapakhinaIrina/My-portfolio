import React from "react"
import { Container, Typography, Box } from "@mui/material"
import { Icon } from "@iconify/react"
import { Animation } from "../../widgets/ui/animation/Animation"
import { CONSTANTS } from "../../shared/utils/constants"
import { ButtonHome } from "../../widgets/buttonHome/ButtonHome"
import { headerHeight } from "../../shared/utils/constants"
import { spacing } from "../../shared/utils/constants"

const textConnection = "Связь";
const socialNetwork = "Социальные сети";

const Contact = () => {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
      }}>
      <Container
        sx={{
          marginTop: "100px",
          width: "280px"
        }}>

        <Box          
          sx={{
            position: "absolute",
            top: `calc(${headerHeight}px + ${spacing[2]})`,
            left: spacing[2],
          }}>
        <ButtonHome />
        </Box>

        <Box>
        <Typography
            align="center"
            variant="h4"
            fontFamily="Dosis"
            fontWeight="bold"
          > 
            { textConnection }
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Icon icon="line-md:email" width={46} color="#777777"/>
              { CONSTANTS.email }
          </Box>

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}>
            <Icon icon="line-md:telegram" width={46} color="#777777"/>
            { CONSTANTS.telegram }
          </Box>

          <Box 
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}>
            <Icon icon="ion:phone-portrait-outline" width={46} color="#777777"/>
              { CONSTANTS.phoneNumber }
          </Box>
        </Box>

          <br/>
          <br/>
        <Box>
          <Typography
            align="center"
            fontFamily="Dosis"
            fontWeight="bold"
            variant="h5"
            >
            { socialNetwork }
          </Typography>
        </Box>

        <br/>
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}>
            <li>
              <a href="https://www.instagram.com/_papakha_/?igshid=YmMyMTA2M2Y%3D" target="blank" className="iconInstagram">
                <Icon icon="line-md:instagram" width={46} color="#777777"/>
              </a>
            </li>

            <li >
              <a href="https://www.linkedin.com/in/irina-papakhina-52598524a/" target="blank" rel="noreferrer" className="iconLinkedin">
                <Icon icon="line-md:linkedin" width={46} color="#777777"/>
              </a>
            </li>

            <li>
              <a href="https://github.com/PapakhinaIrina" target="blank" rel="noreferrer" className="iconGithub">
                <Icon icon="line-md:github" width={46} color="#777777"/>
              </a>
            </li>
        </Box>
        <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: spacing[3],
        }}>
          <Animation />
        </Box>
        </Container>
    </Container>
  )
} 

export default Contact;