import { Container } from '@mui/material'
import Header from '../Header'
import styles from './styles.scss'

const Layout = (props: any) => {
  const { children } = props
  return (
    <div>
      <Container className={styles.container}>
        <Header />
        <div>{children}</div>
      </Container>
    </div>
  )
}

export default Layout
