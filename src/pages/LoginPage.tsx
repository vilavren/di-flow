import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button, TextField } from '@mui/material'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'

import { fetchLogin } from '../api/user.api'
import { UserContext } from '../context/user.context'
import { ILogin } from '../interfaces/user.interface'

export const LoginPage: FC = () => {
  const { userState, setUserState } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  if (userState) {
    return <Navigate to="/" />
  }

  const onSubmit: SubmitHandler<ILogin> = async (values) => {
    const data = await fetchLogin(values)
    if (data.token) {
      setUserState({ username: data.username, jwt: data.token })
    }
    console.log(data)
  }

  return (
    <>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          margin="normal"
          required
          fullWidth
          type="email"
          id="name"
          label="Email"
          error={false}
          helperText={''}
          {...register('email', {
            required: 'Укажите email',
          })}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          type="password"
          id="password"
          label="Пароль"
          error={false}
          helperText={''}
          {...register('password', {
            required: 'Укажите пароль',
          })}
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
          disabled={!isValid}
          loading={isSubmitting}
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
