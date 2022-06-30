import { createContext, ReactNode, useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getToken, setToken } from '@/customer/utils/localStorage'

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

export interface User {
  username: string
  password: string
}

export const AuthContext = createContext<AuthContextType>(null!)
const { Provider, Consumer } = AuthContext

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  })

  const signin = (newUser, callback: VoidFunction) =>
    fakeAuthProvider.signin(() => {
      setUser(newUser)
      callback()
    })

  const signout = (callback: VoidFunction) =>
    fakeAuthProvider.signout(() => {
      setUser({ username: '', password: '' })
      callback()
    })

  const value = { user, signin, signout }

  return <Provider value={value}>{children}</Provider>
}

export const RequireLoginAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const token = getToken()

  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

const useAuthContext = () => {
  const state = useContext(AuthContext)
  if (state === undefined) {
    throw new Error('useAuthContext must be called within DogProvider')
  }

  return {
    ...state
  }
}

export { AuthProvider, Consumer as AuthConsumer, useAuthContext }

export default AuthContext

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    setToken('recivedFromBackend')
    setTimeout(callback, 100)
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }
}
