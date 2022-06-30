import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'
import { AuthProvider, RequireLoginAuth } from '@/customer/contexts/AuthContext'
import { renderPageWithLayout } from './utils'

const Home = lazy(() => import('@/customer/pages/Home'))
const Login = lazy(() => import('@/customer/pages/Login'))
const Register = lazy(() => import('@/customer/pages/Register'))
const NotFound = lazy(() => import('@/customer/pages/NotFound'))

export default () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <AuthProvider>
          <Routes>
            <Route element={<Outlet />}>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='not-found' element={<NotFound />} />
              <Route
                index
                element={renderPageWithLayout(
                  <RequireLoginAuth>
                    <Home />
                  </RequireLoginAuth>
                )}
              />
              <Route path='*' element={<Navigate to='/not-found' />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  )
}
