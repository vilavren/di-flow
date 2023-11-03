import { Box } from '@mui/material'
import { Navigate, Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const jwt = false

  if (!jwt) {
    return <Navigate to="/auth/login" />
  }

  return (
    <div>
      {
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              p: 1,
              width: 'max-content',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      }
    </div>
  )
}
