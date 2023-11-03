import { FC, PropsWithChildren } from 'react'

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>
}
