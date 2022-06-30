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
    <StyledEngineProvider injectFirst>
      <I18nextProvider i18n={i18next}>
        <Router />
      </I18nextProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
