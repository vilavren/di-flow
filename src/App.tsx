import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { AuthLayout } from './components/layout/AuthLayout'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'

function App() {
  const theme = createTheme({
    palette: { mode: 'dark' },
  })

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage /> },
      ],
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [{ path: '/', element: <HomePage />, index: true }],
    },
  ])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
