import { Box, Container } from '@mui/material'
import { Outlet, Navigate } from 'react-router-dom'

export const AuthLayout = () => {
  const jwt = false

  if (jwt) {
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
