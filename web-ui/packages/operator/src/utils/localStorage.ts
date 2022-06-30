import { localStorageConstants } from '@/operator/constants'

export const getToken = () => {
  return localStorage.getItem(localStorageConstants.TOKEN)
}

export const setToken = (token: string) => {
  localStorage.setItem(localStorageConstants.TOKEN, token)
}

export const getRefreshToken = () => {
  return localStorage.getItem(localStorageConstants.REFRESH_TOKEN)
}

export const setRefreshToken = (refresh_token: string) => {
  localStorage.setItem(localStorageConstants.REFRESH_TOKEN, refresh_token)
}
