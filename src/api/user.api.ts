import { AxiosError } from 'axios'

import { ILogin, IProfile, IRegister } from '../interfaces/user.interface'

import axiosClient from './axiosClient'

const fetchAuth = async <T>(url: string, params: T) => {
  try {
    const { data } = await axiosClient.post<IProfile>(url, params)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error
    }
    throw error
  }
}

export const fetchLogin = async (params: ILogin) => {
  return fetchAuth<ILogin>('/auth/login', params)
}

export const fetchRegister = async (params: IRegister) => {
  return fetchAuth<IRegister>('/auth/register', params)
}

export const fetchIsAuth = async () => {
  try {
    const { data } = await axiosClient.get<IProfile>('/auth/me')
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message)
    }
    throw error
  }
}
