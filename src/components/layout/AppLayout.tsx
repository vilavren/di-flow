import { Box } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { fetchIsAuth } from '../../api/user.api'
import { UserContext } from '../../context/user.context'
import { Loading } from '../common/Loading'

export const AppLayout = () => {
  const navigate = useNavigate()
  const { userState, setUserState } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const isAuth = async () => {
      setIsLoading(true)
      try {
        await fetchIsAuth()
      } catch (error) {
        setUserState(undefined)
        navigate('/auth/login')
      }
      setIsLoading(false)
    }

    if (userState?.jwt) isAuth()
    else navigate('/auth/login')
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          width: 'max-content',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
