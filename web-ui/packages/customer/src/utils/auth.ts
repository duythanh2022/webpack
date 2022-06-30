import { getToken } from './localStorage'

export const isAuthenticated = () => {
  const token = getToken()

  if (token) {
    return true
  }

  return false
}
