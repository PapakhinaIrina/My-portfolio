import { Icon } from "@iconify/react"
import { Container, Link } from "@mui/material"
import { headerHeight } from "../../shared/utils/constants/componentSize"
import { spacing } from "../../shared/utils/constants/spacing"


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
        top: spacing[3],
        left: spacing[3],
      }}
      href="/"
      >
        <Icon icon="line-md:home-md"width={46} color='#777777' cursor="pointer"/>
      </Link>
  </Container>
  )
}
