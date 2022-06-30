import { useTranslation } from 'react-i18next'

const Register: React.FC = () => {
  const { t } = useTranslation(['auth'])
  return <h1>{t('register.title')}</h1>
}

export default Register
