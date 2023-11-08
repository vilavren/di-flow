import { Box, Container } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { fetchIsAuth } from '../../api/user.api'
import { UserContext } from '../../context/user.context'
import { Loading } from '../common/Loading'

export const AuthLayout = () => {
  const navigate = useNavigate()
  const { userState, setUserState } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const isAuth = async () => {
      setIsLoading(true)
      try {
        await fetchIsAuth()
        navigate('/')
      } catch (error) {
        setUserState(undefined)
      }
      setIsLoading(false)
    }

    if (userState?.jwt) isAuth()
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  )
}
