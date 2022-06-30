import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import en from '@/customer/locales/en'
import es from '@/customer/locales/es'

i18n
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es
    },
    defaultNS: 'base',
    fallbackLng: 'en',
    debug: true,
    initImmediate: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
