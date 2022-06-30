import Logo from 'operator/components/Logo'
import ChangeLangButton from '../../components/ChangeLangButton'
import styles from './styles.scss'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <ChangeLangButton />
    </div>
  )
}

export default Header
