import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.scss'

const ChangeLangButton: React.FC = () => {
  const { i18n } = useTranslation()
  return (
    <div>
      <div className={styles.changeLangContainer}>Change Language</div>
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  )
}

export default ChangeLangButton
