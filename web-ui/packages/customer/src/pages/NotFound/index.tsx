import React from 'react'
import { useTranslation } from 'react-i18next'

const NotFound: React.FC = () => {
  const { t } = useTranslation('notFound')
  return (
    <>
      <h1>{t('not-found.page-not-found')}</h1>
    </>
  )
}

export default NotFound
