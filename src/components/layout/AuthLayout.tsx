import { Box, Container } from '@mui/material'
import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { UserContext } from '../../context/user.context'

export const AuthLayout = () => {
  const { userState } = useContext(UserContext)

  if (userState?.jwt) {
    return <Navigate to="/" />
  }

  return (
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
