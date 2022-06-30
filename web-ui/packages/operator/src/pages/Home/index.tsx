import React from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation(['common'])
  return (
    <div>
      <h1>Home</h1>
      <h2>{t('welcome.title')}</h2>
      <h3>{t('welcome.intro')}</h3>
    </div>
  )
}

export default Home
