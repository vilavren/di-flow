import axios from 'axios'

import { IUserState } from '../context/user.context'
import { loadLocalStorage } from '../utils/localStorage'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = loadLocalStorage<IUserState>('user')?.jwt
  return config
})

export default instance
