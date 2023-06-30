import { Icon } from '@iconify/react'
import { Container, Link } from '@mui/material'
import { headerHeight } from '../../shared/utils/constants/componentSize'


export const ButtonHome = () => {
  return (
    <Container
    sx={{
      height: `calc(100vh - ${headerHeight})`,
      color: 'black',
    }}
    >
    <Link to="/home" className="home">
      <Icon icon="line-md:home-md"width={46} />
    </Link>
  </Container>
  )
}
