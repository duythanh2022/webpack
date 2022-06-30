import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthRoute from './AuthRoutes'
import MainRoute from './MainRoutes'

const NotFound = lazy(() => import('@/operator/pages/NotFound'))

export default () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path='auth' element={<AuthRoute />} />
          <Route path='not-found' element={<NotFound />} />
          <Route path='*' element={<MainRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
