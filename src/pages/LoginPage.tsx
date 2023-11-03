import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button, TextField } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const LoginPage: FC = () => {
  return (
    <>
      <Box component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          type="email"
          id="name"
          label="Email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Пароль"
        />
        <LoadingButton
          sx={{
            mt: 3,
            mb: 2,
          }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
        >
          Войти
        </LoadingButton>
      </Box>
      <Button
        sx={{ textTransform: 'none' }}
        component={Link}
        to="/auth/signup"
        variant="text"
        size="small"
      >
        Нет аккаунта?
      </Button>
    </>
  )
}
