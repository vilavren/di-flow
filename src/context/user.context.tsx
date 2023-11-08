import { FC, PropsWithChildren, createContext, useState } from 'react'

import { loadLocalStorage, saveLocalStorage } from '../utils/localStorage'

export interface IUserState {
  username: string
  jwt: string
}

interface IUserContextValue {
  userState: IUserState | undefined
  setUserState: (profile: IUserState | undefined) => void
}

export const UserContext = createContext<IUserContextValue>({
  userState: undefined,
  setUserState: () => {},
})

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userState, setUser] = useState<IUserState | undefined>(
    loadLocalStorage<IUserState>('user')
  )

  const setUserState = (profile: IUserState | undefined) => {
    if (profile) {
      setUser(profile)
      saveLocalStorage<IUserState>('user', profile)
    } else {
      setUser(undefined)
      localStorage.removeItem('user')
    }
  }

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  )
}
