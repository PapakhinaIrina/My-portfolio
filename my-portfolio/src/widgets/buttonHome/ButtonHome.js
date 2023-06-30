import { Icon } from "@iconify/react"
import { Container, Link } from "@mui/material"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { doubleSpacingMargin } from "../../shared/utils/constants/margin"


export const ButtonHome = () => {
  return (
    <Container
      sx={{
        height: `calc(100vh - ${headerHeight})`,
      }}
    >
      <Link
      sx={{
        position: "absolute",
        top: doubleSpacingMargin,
        left: doubleSpacingMargin,
      }}
      href="/home"
      >
        <Icon icon="line-md:home-md"width={46} color='#777777' cursor="pointer"/>
      </Link>
  </Container>
  )
}
