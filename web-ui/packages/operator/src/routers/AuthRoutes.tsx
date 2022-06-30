import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('../pages/Auth/Login'))
const Register = lazy(() => import('../pages/Auth/Register'))

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AuthRoutes
