import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button, TextField } from '@mui/material'
import { AxiosError } from 'axios'
import { FC, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'

import { fetchLogin } from '../api/user.api'
import { UserContext } from '../context/user.context'
import { ILogin } from '../interfaces/user.interface'

export const LoginPage: FC = () => {
  const { userState, setUserState } = useContext(UserContext)
  const [apiError, setApiError] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  if (userState) {
    return <Navigate to="/" />
  }

  const onSubmit: SubmitHandler<ILogin> = async (values) => {
    try {
      const data = await fetchLogin(values)
      if (data.token) {
        setUserState({ username: data.username, jwt: data.token })
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        setApiError(String(error.response.data.message))
      }
    }
  }

  setTimeout(() => {
    setApiError('')
  }, 3000)

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
          error={Boolean(apiError) || Boolean(errors.email)}
          helperText={errors.email?.message || apiError}
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
          error={Boolean(apiError) || Boolean(errors.password)}
          helperText={errors.password?.message || apiError}
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
