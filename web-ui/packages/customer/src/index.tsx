import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { StyledEngineProvider } from '@mui/material/styles'
import i18next from './i18n'
import Router from './routers'
import './styles/reset.scss'
import './styles/common.scss'

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <StyledEngineProvider injectFirst>
        <Router />
      </StyledEngineProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
