import { Dispatch, FC, PropsWithChildren, createContext, useState } from 'react'

import { IProfile } from '../interfaces/user.interface'

interface IValue {
  user?: IProfile
  setUser?: Dispatch<React.SetStateAction<IProfile | undefined>>
}

export const UserContext = createContext<IValue>({
  user: undefined,
  setUser: undefined,
})

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IProfile | undefined>(undefined)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
