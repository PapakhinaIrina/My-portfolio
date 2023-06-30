import React from "react"
import { Container, Typography, Box } from '@mui/material'
import { Icon } from '@iconify/react'
import {  Animation } from "../../widgets/ui/animation/Animation"
import { CONTACTS } from "../../shared/utils/constants"
import { ButtonHome } from "../../widgets/buttonHome/ButtonHome"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { doubleSpacingMargin } from "../../shared/utils/constants/margin"


const textConnection = "Связь";
const socialNetwork = "Социальные сети";

const Contact = () => {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight})`,
      }}>
        <ButtonHome />
        <Typography
          align="center"
          variant="h4"
        > 
          { textConnection }
        </Typography>

        <Container
          sx={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Icon icon="line-md:email" width={46} color="#777777"/>
              { CONTACTS.email }
          </Box>

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Icon icon="line-md:telegram" width={46} color="#777777"/>
            { CONTACTS.telegram }
          </Box>

          <Box 
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <Icon icon="ion:phone-portrait-outline" width={46} color="#777777"/>
              { CONTACTS.phoneNumber }
          </Box>
        </Container>
          <br/>
          <br/>
        <Typography
          align="center"
          variant="h5">
          { socialNetwork }
        </Typography>

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
          marginTop: doubleSpacingMargin,
        }}>
          <Animation />
        </Box>
    </Container>
  )
} 

export default Contact;