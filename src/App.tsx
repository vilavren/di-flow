import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './components/layout/AppLayout'
import { AuthLayout } from './components/layout/AuthLayout'
import { UserContextProvider } from './context/user.context'
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
      <UserContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserContextProvider>
    </>
  )
}

export default App
