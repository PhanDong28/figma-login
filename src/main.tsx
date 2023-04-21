import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import { useState } from 'react'
import React from 'react'
import Register from './pages/register'
import Forgetpassword from './pages/forgetpassword'
import Email from './pages/email'
import LockScreen from './pages/lockscreen'

const AppRender = (): JSX.Element => {
  const [isAuthentication, setIsAuthentication] = useState(localStorage.getItem('isAuthentication') === 'true')

  const router = createBrowserRouter([


    {
      path: '/',
      element: <Login onSuccess={() => { setIsAuthentication(true) }} />
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/forgetpassword',
      element: <Forgetpassword/>
    },
    {
      path: '/email',
      element: <Email/>
    },
    {
      path: '/lockscreen',
      element: <LockScreen/>
    },
  ])

  return (
    <div className='w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <AppRender />
)