import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import en from '@/operator/locales/en'
import es from '@/operator/locales/es'

const translationsJson = {
  en,
  es
}

i18n
  .use(LngDetector) //language detector
  .use(initReactI18next)
  .init({
    resources: translationsJson,
    defaultNS: 'base',
    fallbackLng: 'en',
    debug: true,
    initImmediate: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
