import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Box, IconButton, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../context/user.context'

export const Header: FC = () => {
  const navigate = useNavigate()
  const { userState, setUserState } = useContext(UserContext)

  const logout = () => {
    setUserState(undefined)
    navigate('/auth/login')
  }

  return (
    <Box
      sx={{
        zIndex: 2,
        width: '100%',
        height: 60,
        bgcolor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #2c2c2c',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          paddingX: 2,
          maxWidth: 'md',
        }}
      >
        <Typography
          variant="h6"
          fontWeight="700"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {userState?.username}
        </Typography>
        <IconButton
          onClick={logout}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
          }}
        >
          <LogoutOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
